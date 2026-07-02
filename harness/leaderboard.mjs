#!/usr/bin/env node
/**
 * Leaderboard generator. Scans results/, takes the LATEST results dir per
 * (skill, fixture), computes the rubric composite per run, and publishes the
 * median across runs.
 *
 *   composite = 40×detection + 25×trap_avoidance + 25×judgment + 10×execution
 *   execution = (files_changed > 0)×0.5 + (finished within turn budget)×0.5
 *
 * Runs missing judge.json are reported on the 75-point deterministic scale
 * with judgment marked pending (RUBRIC.md §3) — never silently imputed.
 *
 * Usage: node harness/leaderboard.mjs [--fixture pivot-saas] [--write]
 *   --write  update LEADERBOARD.md at the repo root (otherwise print only)
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const args = process.argv.slice(2);
const get = (flag, dflt) => {
  const i = args.indexOf(flag);
  return i >= 0 ? args[i + 1] : dflt;
};
const fixture = get('--fixture', 'pivot-saas');
const write = args.includes('--write');

const median = (xs) => {
  const s = [...xs].sort((a, b) => a - b);
  return s.length % 2 ? s[(s.length - 1) / 2] : (s[s.length / 2 - 1] + s[s.length / 2]) / 2;
};
const readJson = (p) => JSON.parse(fs.readFileSync(p, 'utf8'));

// ---- collect latest results dir per skill for this fixture ----
const resultsDir = path.join(ROOT, 'results');
const bySkill = new Map();
for (const entry of fs.readdirSync(resultsDir)) {
  const m = entry.match(/^(\d{4}-\d{2}-\d{2}T[\d-]+)-(.+)-(.+)$/);
  if (!m) continue;
  const dir = path.join(resultsDir, entry);
  if (!fs.existsSync(path.join(dir, 'summary.json'))) continue;
  const summary = readJson(path.join(dir, 'summary.json'));
  if (summary.fixture !== fixture) continue;
  const prev = bySkill.get(summary.skill);
  if (!prev || entry > prev.entry) bySkill.set(summary.skill, { entry, dir, summary });
}

if (bySkill.size === 0) {
  console.error(`no results for fixture "${fixture}" — run harness/run.mjs first`);
  process.exit(1);
}

const registry = readJson(path.join(ROOT, 'skills.json'));
const nameOf = (id) => registry.skills.find((s) => s.id === id)?.name || id;

// ---- score each entrant ----
const rows = [];
for (const [skillId, { dir }] of bySkill) {
  const runs = fs
    .readdirSync(dir)
    .filter((d) => /^run-\d+$/.test(d))
    .map((d) => path.join(dir, d));

  const perRun = [];
  let judgmentPending = false;
  let model = '?';
  for (const runDir of runs) {
    const score = fs.existsSync(path.join(runDir, 'score.json')) ? readJson(path.join(runDir, 'score.json')) : null;
    const stats = fs.existsSync(path.join(runDir, 'stats.json')) ? readJson(path.join(runDir, 'stats.json')) : null;
    const judge = fs.existsSync(path.join(runDir, 'judge.json')) ? readJson(path.join(runDir, 'judge.json')) : null;
    if (!score || !stats) continue;
    model = stats.model || model;

    const withinBudget = stats.usage?.num_turns != null ? stats.usage.num_turns < (stats.max_turns || 80) : stats.exit === 0;
    const execution = (stats.files_changed > 0 ? 0.5 : 0) + (withinBudget ? 0.5 : 0);
    const judgment = judge ? judge.judgment : null;
    if (judgment == null) judgmentPending = true;

    perRun.push({
      detection: score.detection,
      trap_avoidance: score.trap_avoidance,
      judgment,
      execution,
      wall_ms: stats.wall_ms,
      cost_usd: stats.usage?.total_cost_usd ?? null,
      composite_det: 40 * score.detection + 25 * score.trap_avoidance + 10 * execution,
      composite: judgment == null ? null : 40 * score.detection + 25 * score.trap_avoidance + 25 * judgment + 10 * execution,
    });
  }
  if (perRun.length === 0) continue;

  rows.push({
    skill: skillId,
    name: nameOf(skillId),
    runs: perRun.length,
    model,
    detection: median(perRun.map((r) => r.detection)),
    trap_avoidance: median(perRun.map((r) => r.trap_avoidance)),
    judgment: judgmentPending ? null : median(perRun.map((r) => r.judgment)),
    execution: median(perRun.map((r) => r.execution)),
    composite: judgmentPending ? null : median(perRun.map((r) => r.composite)),
    composite_det: median(perRun.map((r) => r.composite_det)),
    spread_det: [Math.min(...perRun.map((r) => r.composite_det)), Math.max(...perRun.map((r) => r.composite_det))],
    median_wall_s: median(perRun.map((r) => r.wall_ms)) / 1000,
    median_cost_usd: perRun.every((r) => r.cost_usd != null) ? median(perRun.map((r) => r.cost_usd)) : null,
  });
}

const anyPending = rows.some((r) => r.composite == null);
rows.sort((a, b) => (b.composite ?? b.composite_det) - (a.composite ?? a.composite_det));

// ---- render ----
const pct = (x) => `${(x * 100).toFixed(0)}%`;
const fmt = (x, d = 1) => (x == null ? '—' : x.toFixed(d));
const today = new Date().toISOString().slice(0, 10);

const lines = [
  '# Leaderboard',
  '',
  `Fixture: **${fixture}** · Model: **${rows[0]?.model}** · Rubric: **v1.0.0** · Updated: ${today}`,
  '',
  anyPending
    ? '> Some entrants have judgment pending — their score is the **75-point deterministic composite** (detection + traps + execution). Full 100-point composites appear once the blind judge panel has run.'
    : '> Full 100-point composite (detection 40 / trap avoidance 25 / judgment 25 / execution 10), median of all runs.',
  '',
  '| # | Skill | Composite | Detection | Trap avoidance | Judgment | Execution | Runs | Median time | Median cost |',
  '|--:|-------|:--------:|:---------:|:--------------:|:--------:|:---------:|:----:|:-----------:|:-----------:|',
  ...rows.map(
    (r, i) =>
      `| ${i + 1} | ${r.name} | **${fmt(r.composite ?? r.composite_det)}${r.composite == null ? ' /75*' : ''}** | ${pct(r.detection)} | ${pct(r.trap_avoidance)} | ${r.judgment == null ? 'pending' : fmt(r.judgment * 10, 1) + '/10'} | ${pct(r.execution)} | ${r.runs} | ${fmt(r.median_wall_s, 0)}s | ${r.median_cost_usd == null ? '—' : '$' + r.median_cost_usd.toFixed(2)} |`
  ),
  '',
  anyPending ? '\\* deterministic composite out of 75 (judgment pending)' : '',
  '',
  '## How to read this',
  '',
  '- **Detection** — weighted share of the fixture\'s planted defects the skill actually found.',
  '- **Trap avoidance** — 100% means zero hallucination events (never recommended "fixing" something that is demonstrably already fine).',
  '- **Judgment** — blind panel median on the fixture\'s pre-registered judgment questions.',
  '- Scores are medians across runs; a skill that only performs sometimes is an unreliable skill.',
  '- Reproduce any row: `node harness/run.mjs --skill <id> --fixture ' + fixture + ' --runs 3`.',
  '',
  '_Maintained by [SEOAgent](https://seoagent.com), which enters its own skill — see the conflict-of-interest disclosure in RUBRIC.md._',
];

const md = lines.join('\n');
console.log(md);
if (write) {
  fs.writeFileSync(path.join(ROOT, 'LEADERBOARD.md'), md + '\n');
  fs.writeFileSync(
    path.join(ROOT, 'results', 'leaderboard.json'),
    JSON.stringify({ fixture, rubric: 'v1.0.0', updated: today, rows }, null, 2)
  );
  console.error('\nwrote LEADERBOARD.md + results/leaderboard.json');
}
