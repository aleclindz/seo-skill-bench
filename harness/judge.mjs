#!/usr/bin/env node
/**
 * Blind judgment scorer — the 25% of the rubric that cannot be answer-keyed.
 *
 * Protocol (see RUBRIC.md §3):
 *   1. ANONYMIZE — every skill/brand identifier from skills.json is stripped
 *      from the run output before any judge sees it. Judges never know who
 *      they are scoring.
 *   2. PANEL — 3 judges, each with a distinct lens (evidence grounding /
 *      strategic correctness / practicality). Per question, the panel MEDIAN
 *      wins; the component score is the median across questions, scaled to
 *      [0,1].
 *   3. ANCHORED SCALE — judges score each pre-registered question 0-10
 *      against the fixture's anchor_0/anchor_10 descriptions and must say
 *      which anchor end the output sits closer to and why.
 *   4. CROSS-MODEL — if OPENAI_API_KEY is set, the third judge runs on
 *      OpenAI (SSB_OPENAI_JUDGE_MODEL, default gpt-5-mini) to break
 *      same-family bias; otherwise all judges are Claude and the result
 *      records cross_model: false.
 *   5. The judge NEVER sees the manifest's defect/trap list — judgment
 *      questions only. Detection stays deterministic in score.mjs.
 *
 * Usage: node harness/judge.mjs --run results/<dir>/run-N --fixture pivot-saas
 * Writes <run>/judge.json and prints the summary.
 */
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const JUDGE_MODEL = process.env.SSB_JUDGE_MODEL || 'claude-opus-4-8';
const OPENAI_JUDGE_MODEL = process.env.SSB_OPENAI_JUDGE_MODEL || 'gpt-5-mini';
const MAX_OUTPUT_CHARS = 40_000;

const LENSES = [
  {
    id: 'evidence',
    instruction:
      'Your lens is EVIDENCE GROUNDING. Reward claims tied to the provided data (Search Console numbers, the live site); punish confident assertions with no visible basis.',
  },
  {
    id: 'strategy',
    instruction:
      'Your lens is STRATEGIC CORRECTNESS. Reward reading the business situation right and choosing the highest-leverage moves; punish plausible-sounding plans that misread the situation.',
  },
  {
    id: 'practicality',
    instruction:
      'Your lens is PRACTICALITY. Reward plans an operator could execute next week (specific, sequenced, scoped); punish vague direction-setting that leaves all the work undone.',
  },
];

// ---------- gather + anonymize ----------

function* walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else yield p;
  }
}

function gatherOutput(runDir) {
  let text = '';
  const t = path.join(runDir, 'transcript.json');
  if (fs.existsSync(t)) {
    try {
      const parsed = JSON.parse(fs.readFileSync(t, 'utf8'));
      text += (parsed.result || '') + '\n\n';
    } catch {
      text += fs.readFileSync(t, 'utf8') + '\n\n';
    }
  }
  const a = path.join(runDir, 'artifacts');
  if (fs.existsSync(a)) {
    const EXCLUDED_DIRS = new Set(['.claude', '.next', 'node_modules', 'dist', 'build', '.turbo', '.cache']);
    for (const f of walk(a)) {
      const rel = path.relative(a, f);
      if (rel.split(path.sep).some((seg) => EXCLUDED_DIRS.has(seg))) continue; // skill machinery + build noise, not authored output
      try {
        text += `--- file: ${rel} ---\n${fs.readFileSync(f, 'utf8')}\n\n`;
      } catch {
        /* binary */
      }
    }
  }
  // Binary-ish artifacts read as utf8 can carry null bytes, which spawnSync
  // rejects in argv; strip them (and other C0 controls except \n\t).
  return text.replace(/[\0\x01-\x08\x0b\x0c\x0e-\x1f]/g, '').slice(0, MAX_OUTPUT_CHARS);
}

function anonymize(text) {
  const registry = JSON.parse(fs.readFileSync(path.join(ROOT, 'skills.json'), 'utf8'));
  const terms = new Set();
  for (const s of registry.skills) {
    if (s.id) terms.add(s.id);
    if (s.name) terms.add(s.name);
    if (s.repo) {
      terms.add(s.repo);
      for (const part of s.repo.split(/[/@]/)) if (part.length > 3) terms.add(part);
    }
  }
  let out = text;
  for (const term of [...terms].sort((a, b) => b.length - a.length)) {
    out = out.replace(new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi'), 'Entrant');
  }
  return out;
}

// ---------- judge calls ----------

function judgePrompt(lens, questions, output) {
  return `You are one judge on a blind panel scoring an anonymous AI agent's SEO strategy output. You do not know which tool produced it, and you must not try to guess.

${lens.instruction}

Score each question 0-10 against its anchors. An output matching anchor_0 scores 0; matching anchor_10 scores 10; interpolate honestly. Quote the specific part of the output that most influenced each score (or write "absent" if nothing addresses it — absence scores low).

QUESTIONS:
${JSON.stringify(questions, null, 2)}

THE ENTRANT'S OUTPUT (anonymized):
<<<OUTPUT
${output}
OUTPUT>>>

Respond with ONLY a JSON object, no prose before or after:
{"J1": {"score": <0-10>, "basis": "<quote or 'absent'>", "rationale": "<1-2 sentences>"}, "J2": {...}, "J3": {...}}`;
}

function extractJson(text) {
  const start = text.indexOf('{');
  const end = text.lastIndexOf('}');
  if (start < 0 || end <= start) throw new Error('no JSON object in judge response');
  return JSON.parse(text.slice(start, end + 1));
}

function callClaudeJudge(prompt) {
  const proc = spawnSync('claude', ['-p', prompt, '--output-format', 'json', '--model', JUDGE_MODEL, '--max-turns', '1'], {
    encoding: 'utf8',
    maxBuffer: 16 * 1024 * 1024,
    timeout: 5 * 60 * 1000,
  });
  if (proc.status !== 0 && !proc.stdout) throw new Error(`claude judge failed: ${(proc.stderr || '').slice(0, 300)}`);
  const parsed = JSON.parse(proc.stdout);
  return { raw: parsed.result || '', model: JUDGE_MODEL };
}

async function callOpenAiJudge(prompt) {
  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: { 'content-type': 'application/json', authorization: `Bearer ${process.env.OPENAI_API_KEY}` },
    body: JSON.stringify({ model: OPENAI_JUDGE_MODEL, messages: [{ role: 'user', content: prompt }] }),
  });
  if (!res.ok) throw new Error(`openai judge HTTP ${res.status}: ${(await res.text()).slice(0, 300)}`);
  const data = await res.json();
  return { raw: data.choices[0].message.content, model: OPENAI_JUDGE_MODEL };
}

const median = (xs) => {
  const s = [...xs].sort((a, b) => a - b);
  return s.length % 2 ? s[(s.length - 1) / 2] : (s[s.length / 2 - 1] + s[s.length / 2]) / 2;
};

// ---------- main ----------

async function main() {
  const args = process.argv.slice(2);
  const get = (flag, dflt) => {
    const i = args.indexOf(flag);
    return i >= 0 ? args[i + 1] : dflt;
  };
  const runDir = get('--run', null);
  const fixture = get('--fixture', 'pivot-saas');
  if (!runDir) {
    console.error('usage: judge.mjs --run <results/.../run-N> --fixture <name>');
    process.exit(1);
  }

  const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, 'fixtures', fixture, 'manifest.json'), 'utf8'));
  const questions = manifest.judgment;
  const output = anonymize(gatherOutput(runDir));
  if (output.trim().length < 50) {
    // Nothing to judge — the run produced no substantive output.
    const result = {
      fixture,
      cross_model: false,
      judges: [],
      per_question: Object.fromEntries(questions.map((q) => [q.id, 0])),
      judgment: 0,
      note: 'run produced no substantive output; judgment scored 0 by protocol',
    };
    fs.writeFileSync(path.join(runDir, 'judge.json'), JSON.stringify(result, null, 2));
    console.log(`judged ${runDir}: 0.00 (no substantive output)`);
    return;
  }

  const useOpenAi = Boolean(process.env.OPENAI_API_KEY);
  const judges = [];
  for (let i = 0; i < LENSES.length; i++) {
    const lens = LENSES[i];
    const prompt = judgePrompt(lens, questions, output);
    try {
      const { raw, model } = useOpenAi && i === LENSES.length - 1 ? await callOpenAiJudge(prompt) : callClaudeJudge(prompt);
      const scores = extractJson(raw);
      judges.push({ lens: lens.id, model, scores });
      console.log(`judge[${lens.id}] (${model}): ${questions.map((q) => `${q.id}=${scores[q.id]?.score ?? '?'}`).join(' ')}`);
    } catch (err) {
      judges.push({ lens: lens.id, error: String(err.message || err).slice(0, 300) });
      console.error(`judge[${lens.id}] FAILED: ${err.message}`);
    }
  }

  const okJudges = judges.filter((j) => j.scores);
  if (okJudges.length === 0) {
    console.error('all judges failed — no judge.json written');
    process.exit(1);
  }

  const perQuestion = {};
  for (const q of questions) {
    perQuestion[q.id] = median(okJudges.map((j) => Number(j.scores[q.id]?.score ?? 0)));
  }
  const judgment = median(Object.values(perQuestion)) / 10;

  const result = {
    fixture,
    cross_model: useOpenAi,
    panel_size: okJudges.length,
    judges,
    per_question: perQuestion,
    judgment,
  };
  fs.writeFileSync(path.join(runDir, 'judge.json'), JSON.stringify(result, null, 2));
  console.log(`judged ${runDir}: judgment=${judgment.toFixed(2)} (per-question: ${JSON.stringify(perQuestion)}, cross_model=${useOpenAi})`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  await main();
}
