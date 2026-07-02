#!/usr/bin/env node
/**
 * Deterministic scorer (v1: pattern matching).
 *
 * Gathers everything a run produced — the transcript plus every file the skill
 * wrote — and matches it against the fixture manifest:
 *   - a defect counts as DETECTED when any of its match_patterns hits
 *   - a trap counts as VIOLATED when any of its violation_patterns hits
 *
 * detection = Σ weight(detected) / Σ weight(all defects)        (higher better)
 * trap_avoidance = 1 − Σ weight(violated) / Σ weight(all traps) (higher better)
 *
 * v1 limitation (documented in the README): keyword/regex matching can miss
 * unusual phrasings of a real finding (false negative) — it does not produce
 * false positives for traps unless the text really makes the trapped claim.
 * An extraction-based matcher (LLM normalizes output to claims JSON, matching
 * stays deterministic) is on the roadmap.
 *
 * Usage:
 *   node harness/score.mjs --run results/<dir>/run-1 --fixture pivot-saas
 *   node harness/score.mjs --self-test
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function loadManifest(fixture) {
  return JSON.parse(fs.readFileSync(path.join(ROOT, 'fixtures', fixture, 'manifest.json'), 'utf8'));
}

function* walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(p);
    else yield p;
  }
}

/**
 * Collect all text a run produced: transcript + written artifacts.
 *
 * Skill-installation files are EXCLUDED (anything under .claude/): a skill's
 * own bundled instructions/checklists contain conditional template text
 * ("recommendation only if genuinely absent: add Organization JSON-LD…")
 * that is not a claim about THIS site, and scoring it produced false trap
 * hits AND false detections. Only the transcript and the skill's authored
 * work products count.
 */
export function gatherRunText(runDir) {
  let text = '';
  const transcript = path.join(runDir, 'transcript.json');
  if (fs.existsSync(transcript)) text += fs.readFileSync(transcript, 'utf8') + '\n';
  const artifacts = path.join(runDir, 'artifacts');
  if (fs.existsSync(artifacts)) {
    for (const f of walk(artifacts)) {
      const rel = path.relative(artifacts, f);
      if (rel.split(path.sep).includes('.claude')) continue; // installed skill files, not output
      try {
        text += fs.readFileSync(f, 'utf8') + '\n';
      } catch {
        /* skip binary */
      }
    }
  }
  return text.toLowerCase();
}

/** Match text against a manifest. Pure function — the heart of the scorer. */
export function scoreText(text, manifest) {
  const lower = text.toLowerCase();
  const hit = (patterns) =>
    patterns.some((p) => new RegExp(p, 'i').test(lower));

  const defects = manifest.defects.map((d) => ({
    id: d.id,
    slug: d.slug,
    weight: d.severity_weight,
    detected: hit(d.match_patterns),
  }));
  const traps = manifest.traps.map((t) => ({
    id: t.id,
    slug: t.slug,
    weight: t.weight,
    violated: hit(t.violation_patterns),
  }));

  const dTotal = defects.reduce((s, d) => s + d.weight, 0);
  const dHit = defects.filter((d) => d.detected).reduce((s, d) => s + d.weight, 0);
  const tTotal = traps.reduce((s, t) => s + t.weight, 0);
  const tHit = traps.filter((t) => t.violated).reduce((s, t) => s + t.weight, 0);

  return {
    defects,
    traps,
    detection: dTotal ? dHit / dTotal : 0,
    trap_avoidance: tTotal ? 1 - tHit / tTotal : 1,
  };
}

function writeReport(runDir, fixture, result) {
  fs.writeFileSync(path.join(runDir, 'score.json'), JSON.stringify(result, null, 2));
  const lines = [
    `# Score report — fixture: ${fixture}`,
    '',
    `**Detection (weighted): ${(result.detection * 100).toFixed(1)}%** · **Trap avoidance: ${(result.trap_avoidance * 100).toFixed(1)}%**`,
    '',
    '## Defects',
    '| ID | Finding | Weight | Detected |',
    '|----|---------|:------:|:--------:|',
    ...result.defects.map((d) => `| ${d.id} | ${d.slug} | ${d.weight} | ${d.detected ? '✅' : '—'} |`),
    '',
    '## Traps (violations = hallucinations)',
    '| ID | Trap | Weight | Violated |',
    '|----|------|:------:|:--------:|',
    ...result.traps.map((t) => `| ${t.id} | ${t.slug} | ${t.weight} | ${t.violated ? '🚨 YES' : '✅ no'} |`),
    '',
    '_Judgment (J1–J3) is scored separately by the blind judge panel — see judge.mjs._',
  ];
  fs.writeFileSync(path.join(runDir, 'report.md'), lines.join('\n'));
}

function selfTest() {
  const manifest = loadManifest('pivot-saas');

  // Synthetic run 1: catches D1 + D3, and walks straight into trap T4.
  const text1 = `Audit findings: The sitemap only contains 4 URLs and omits every blog post.
The pricing page is missing a canonical tag and needs one added.
Critical: robots.txt has a Disallow rule that blocks crawlers and should be fixed immediately.`;

  // Synthetic run 2: clean — vague advice, no detections, no trap violations.
  const text2 = `The homepage looks well built. Consider writing more content about team
productivity and collaboration to attract your target audience.`;

  const r1 = scoreText(text1, manifest);
  const r2 = scoreText(text2, manifest);

  const expect = (cond, label) => {
    if (!cond) {
      console.error(`self-test FAIL: ${label}`);
      process.exit(1);
    }
    console.log(`self-test ok: ${label}`);
  };

  expect(r1.defects.find((d) => d.id === 'D1').detected, 'run1 detects D1 (sitemap)');
  expect(r1.defects.find((d) => d.id === 'D3').detected, 'run1 detects D3 (pricing canonical)');
  expect(r1.traps.find((t) => t.id === 'T4').violated, 'run1 violates T4 (robots hallucination)');
  expect(!r1.traps.find((t) => t.id === 'T1').violated, 'run1 does not violate T1');
  expect(r2.defects.every((d) => !d.detected), 'run2 detects nothing');
  expect(r2.traps.every((t) => !t.violated), 'run2 violates no traps');
  expect(r1.detection > 0 && r1.detection < 1, 'run1 partial detection score');
  expect(r2.trap_avoidance === 1, 'run2 perfect trap avoidance');

  console.log('self-test: all assertions passed ✅');
}

// ---- CLI (guarded so importing this module never triggers it) ----
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2);
  if (args.includes('--self-test')) {
    selfTest();
    process.exit(0);
  }
  const get = (flag, dflt) => {
    const i = args.indexOf(flag);
    return i >= 0 ? args[i + 1] : dflt;
  };
  const runDir = get('--run', null);
  const fixture = get('--fixture', 'pivot-saas');
  if (!runDir) {
    console.error('usage: score.mjs --run <results/.../run-N> --fixture <name> | --self-test');
    process.exit(1);
  }
  const manifest = loadManifest(fixture);
  const result = scoreText(gatherRunText(runDir), manifest);
  writeReport(runDir, fixture, result);
  console.log(
    `scored ${runDir}: detection ${(result.detection * 100).toFixed(1)}%, trap avoidance ${(result.trap_avoidance * 100).toFixed(1)}%`
  );
}
