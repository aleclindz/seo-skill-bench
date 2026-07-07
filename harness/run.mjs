#!/usr/bin/env node
/**
 * Benchmark runner: executes ONE skill against ONE fixture, for real.
 *
 * Per run:
 *   1. Create an isolated workspace (results/<ts>-<skill>/run-N/workspace)
 *      containing a copy of the fixture's source repo + the GSC export.
 *   2. Serve the fixture's live site on a local port.
 *   3. Install the skill into the workspace (method per skills.json).
 *   4. Run headless Claude Code with the IDENTICAL, uncoached prompt.
 *   5. Capture the transcript, every file the skill created/modified, and
 *      wall-clock/usage stats. Then score with score.mjs.
 *
 * Usage: node harness/run.mjs --skill seoagent --fixture pivot-saas [--runs 3] [--max-turns 80]
 *
 * Requires the `claude` CLI on PATH. Runs are independent: nothing is shared
 * between entrants or between runs (design principle #4: isolation).
 */
import fs from 'node:fs';
import path from 'node:path';
import { spawn, spawnSync, execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { startServer } from './serve.mjs';
import { gatherRunText, scoreText } from './score.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

// The one prompt every entrant gets. NO COACHING (design principle #3): it
// names the inputs and the goal, and nothing about what to look for.
const PROMPT = (siteUrl) =>
  `Increase organic traffic for this SaaS. The live site is at ${siteUrl}. ` +
  `The source repo is this working directory. A Google Search Console export is in ./gsc/.`;

// Every entrant runs on the SAME pinned model — a leaderboard result is a
// (skill × model × fixture × rubric-version) tuple, not a skill property.
const MODEL = process.env.SSB_MODEL || 'claude-sonnet-5';

// Identical tool permissions for every entrant. Headless runs deny
// non-allowlisted tools, which would cripple script-driven skills; this
// allowlist is part of the published methodology. NOTE: "Bash" grants shell
// execution to third-party skill code — run the fleet on a machine you accept
// that risk on.
const ALLOWED_TOOLS = 'WebFetch WebSearch Bash Read Write Edit Glob Grep';

const args = process.argv.slice(2);
const get = (flag, dflt) => {
  const i = args.indexOf(flag);
  return i >= 0 ? args[i + 1] : dflt;
};
const skillId = get('--skill', null);
const fixture = get('--fixture', 'pivot-saas');
const runs = Number(get('--runs', 1));
const maxTurns = Number(get('--max-turns', 80));

if (!skillId) {
  console.error('usage: run.mjs --skill <id from skills.json> --fixture <name> [--runs N]');
  process.exit(1);
}

const registry = JSON.parse(fs.readFileSync(path.join(ROOT, 'skills.json'), 'utf8'));
const skill = registry.skills.find((s) => s.id === skillId);
if (!skill) {
  console.error(`unknown skill "${skillId}" — ids: ${registry.skills.map((s) => s.id).join(', ')}`);
  process.exit(1);
}

// Fail fast if the claude CLI is missing.
if (spawnSync('claude', ['--version'], { stdio: 'ignore' }).error) {
  console.error('The `claude` CLI is required on PATH (https://claude.com/claude-code). Aborting.');
  process.exit(1);
}

function copyDir(src, dest) {
  fs.cpSync(src, dest, { recursive: true });
}

/** Recursively list files with mtimes, for the pre/post artifact diff. */
function snapshot(dir) {
  const map = new Map();
  const visit = (d) => {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, e.name);
      if (e.name === 'node_modules' || e.name === '.git') continue;
      if (e.isDirectory()) visit(p);
      else map.set(p, fs.statSync(p).mtimeMs);
    }
  };
  visit(dir);
  return map;
}

/** Install the skill into the workspace per its registry entry. */
function installSkill(workspace) {
  const record = { method: skill.install, ok: false, detail: '' };
  try {
    if (skill.install === 'none') {
      record.ok = true;
      record.detail = 'baseline — nothing installed';
    } else if (skill.install === 'git-skill-md') {
      const skillsRoot = path.join(workspace, '.claude', 'skills');
      fs.mkdirSync(skillsRoot, { recursive: true });
      const tmp = fs.mkdtempSync(path.join(workspace, '.skill-clone-'));
      execSync(`git clone --depth 1 https://github.com/${skill.repo}.git "${tmp}/repo"`, {
        stdio: 'pipe',
        timeout: 120_000,
      });
      const repoDir = path.join(tmp, 'repo');
      // Claude Code discovers .claude/skills/<name>/SKILL.md (one level).
      // Repos ship either a single root SKILL.md, or a COLLECTION of skill
      // dirs each holding a SKILL.md. Install so every skill is discoverable —
      // otherwise collection entrants would silently run as vanilla.
      if (fs.existsSync(path.join(repoDir, 'SKILL.md'))) {
        copyDir(repoDir, path.join(skillsRoot, skill.id));
        record.detail = `root SKILL.md -> .claude/skills/${skill.id}/`;
      } else {
        const dirs = [];
        const findSkillDirs = (d, depth) => {
          if (depth > 3) return;
          for (const e of fs.readdirSync(d, { withFileTypes: true })) {
            if (!e.isDirectory() || e.name.startsWith('.') || e.name === 'node_modules') continue;
            const p = path.join(d, e.name);
            if (fs.existsSync(path.join(p, 'SKILL.md'))) dirs.push(p);
            else findSkillDirs(p, depth + 1);
          }
        };
        findSkillDirs(repoDir, 0);
        for (const d of dirs) copyDir(d, path.join(skillsRoot, path.basename(d)));
        record.detail = `collection: ${dirs.length} skill dirs -> .claude/skills/`;
        if (dirs.length === 0) record.detail = 'NO SKILL.md found anywhere — entrant effectively vanilla';
      }
      fs.rmSync(tmp, { recursive: true, force: true });
      record.ok = true;
    } else if (skill.install === 'skills-cli') {
      execSync(`npx -y skills add ${skill.repo} --yes`, {
        cwd: workspace,
        stdio: 'pipe',
        timeout: 300_000,
      });
      record.ok = true;
      record.detail = `npx skills add ${skill.repo}`;
    } else if (skill.install === 'npm') {
      execSync(`npx -y ${skill.repo} init --yes`, {
        cwd: workspace,
        stdio: 'pipe',
        timeout: 300_000,
      });
      record.ok = true;
      record.detail = `npx -y ${skill.repo} init`;
    } else {
      record.detail = `unknown install method "${skill.install}"`;
    }
  } catch (err) {
    record.detail = String(err.message || err).slice(0, 500);
  }
  return record;
}

/**
 * Run the headless session with an ASYNC spawn. run.mjs hosts the fixture's
 * live-site server in THIS process; the previous spawnSync blocked the event
 * loop for the entire session, so the server accepted TCP connections (kernel
 * backlog) but never wrote a response — EVERY in-session fetch of the live
 * site timed out, for every entrant (diagnosed 2026-07-07; previously
 * misread as a sandbox/loopback boundary in the cycle-6 KEY FINDING).
 * Same contract as the old spawnSync call: returns { stdout, stderr, status },
 * kills the session at `timeout` ms (empty transcript -> invalid-run retry).
 */
function runClaude(cliArgs, { cwd, timeout }) {
  return new Promise((resolve) => {
    const child = spawn('claude', cliArgs, { cwd, stdio: ['ignore', 'pipe', 'pipe'] });
    let stdout = '';
    let stderr = '';
    child.stdout.setEncoding('utf8');
    child.stderr.setEncoding('utf8');
    child.stdout.on('data', (d) => { stdout += d; });
    child.stderr.on('data', (d) => { stderr += d; });
    const timer = setTimeout(() => child.kill('SIGTERM'), timeout);
    child.on('error', (err) => {
      clearTimeout(timer);
      resolve({ stdout, stderr: stderr || String(err), status: null });
    });
    child.on('close', (status) => {
      clearTimeout(timer);
      resolve({ stdout, stderr, status });
    });
  });
}

async function doRun(outBase, n) {
  const runDir = path.join(outBase, `run-${n}`);
  const workspace = path.join(runDir, 'workspace');
  const artifactsDir = path.join(runDir, 'artifacts');
  fs.mkdirSync(workspace, { recursive: true });
  fs.mkdirSync(artifactsDir, { recursive: true });

  // 1. Workspace: fixture repo + GSC export.
  copyDir(path.join(ROOT, 'fixtures', fixture, 'repo'), workspace);
  copyDir(path.join(ROOT, 'fixtures', fixture, 'gsc'), path.join(workspace, 'gsc'));

  // 2. Live site.
  const { server, url } = await startServer(fixture, 0);
  console.log(`[run ${n}] live site at ${url}`);

  // 3. Skill install.
  const install = installSkill(workspace);
  console.log(`[run ${n}] install (${install.method}): ${install.ok ? 'ok' : 'FAILED'} — ${install.detail}`);

  // 4. Headless execution.
  const pre = snapshot(workspace);
  const started = Date.now();
  const proc = await runClaude(
    [
      '-p', PROMPT(url),
      '--output-format', 'json',
      '--model', MODEL,
      '--max-turns', String(maxTurns),
      '--permission-mode', 'acceptEdits',
      '--allowedTools', ALLOWED_TOOLS,
    ],
    { cwd: workspace, timeout: 45 * 60 * 1000 }
  );
  const wallMs = Date.now() - started;
  server.close();

  fs.writeFileSync(path.join(runDir, 'transcript.json'), proc.stdout || '');
  if (proc.stderr) fs.writeFileSync(path.join(runDir, 'stderr.log'), proc.stderr);

  // 5. Artifact diff: copy every file created or modified during the run.
  const post = snapshot(workspace);
  let changed = 0;
  for (const [file, mtime] of post) {
    if (!pre.has(file) || pre.get(file) !== mtime) {
      const rel = path.relative(workspace, file);
      const dest = path.join(artifactsDir, rel);
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.copyFileSync(file, dest);
      changed++;
    }
  }

  // Usage stats if the CLI's JSON output includes them.
  let usage = null;
  try {
    const parsed = JSON.parse(proc.stdout);
    usage = parsed.usage || parsed.total_cost_usd
      ? { usage: parsed.usage, total_cost_usd: parsed.total_cost_usd, num_turns: parsed.num_turns }
      : null;
  } catch {
    /* non-JSON output — recorded as-is in transcript.json */
  }
  fs.writeFileSync(
    path.join(runDir, 'stats.json'),
    JSON.stringify(
      { skill: skillId, fixture, run: n, model: MODEL, max_turns: maxTurns, wall_ms: wallMs, exit: proc.status, install, files_changed: changed, usage },
      null,
      2
    )
  );

  // Score immediately.
  const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, 'fixtures', fixture, 'manifest.json'), 'utf8'));
  const result = scoreText(gatherRunText(runDir), manifest);
  fs.writeFileSync(path.join(runDir, 'score.json'), JSON.stringify(result, null, 2));
  console.log(
    `[run ${n}] done in ${(wallMs / 1000).toFixed(0)}s — detection ${(result.detection * 100).toFixed(1)}%, trap avoidance ${(result.trap_avoidance * 100).toFixed(1)}%, ${changed} files written`
  );
  return result;
}

const ts = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
const outBase = path.join(ROOT, 'results', `${ts}-${skillId}-${fixture}`);
fs.mkdirSync(outBase, { recursive: true });

/**
 * Invalid-run policy (uniform for every entrant, see RUBRIC.md): a run whose
 * transcript is EMPTY because the process was killed (hang -> SIGTERM) is a
 * failed MEASUREMENT, not a measured failure — there is no output to score.
 * It is retried exactly once (the original is preserved as run-N-invalid).
 * Runs that produce any output score as-is, including bad ones.
 */
function transcriptIsEmpty(runDir) {
  try {
    return fs.readFileSync(path.join(runDir, 'transcript.json'), 'utf8').trim().length === 0;
  } catch {
    return true;
  }
}

const all = [];
for (let n = 1; n <= runs; n++) {
  let result = await doRun(outBase, n);
  const runDir = path.join(outBase, `run-${n}`);
  const installFailed = (() => {
    try { return JSON.parse(fs.readFileSync(path.join(runDir, 'stats.json'), 'utf8')).install?.ok === false; } catch { return false; }
  })();
  if (transcriptIsEmpty(runDir) || installFailed) {
    console.log(`[run ${n}] INVALID (${installFailed ? 'install failed — measures the registry, not the skill' : 'empty transcript — process died without output'}); retrying once`);
    fs.renameSync(runDir, path.join(outBase, `run-${n}-invalid`));
    result = await doRun(outBase, n);
    if (transcriptIsEmpty(path.join(outBase, `run-${n}`))) {
      console.log(`[run ${n}] retry also produced no output — scoring the empty run as-is`);
    }
  }
  all.push(result);
}

// Median summary across runs.
const med = (xs) => {
  const s = [...xs].sort((a, b) => a - b);
  return s.length % 2 ? s[(s.length - 1) / 2] : (s[s.length / 2 - 1] + s[s.length / 2]) / 2;
};
const summary = {
  skill: skillId,
  fixture,
  runs,
  detection_median: med(all.map((r) => r.detection)),
  detection_all: all.map((r) => r.detection),
  trap_avoidance_median: med(all.map((r) => r.trap_avoidance)),
  trap_avoidance_all: all.map((r) => r.trap_avoidance),
};
fs.writeFileSync(path.join(outBase, 'summary.json'), JSON.stringify(summary, null, 2));
console.log(`\nsummary → ${path.relative(ROOT, outBase)}/summary.json`);
console.log(JSON.stringify(summary, null, 2));
