#!/usr/bin/env node
/**
 * Context-footprint scorer. Measures what each entrant COSTS the agent that
 * installs it, independent of how well it performs — the dimension the
 * quality composite deliberately does not capture.
 *
 * Background: "@skills: Attention Is All You Have" (Yin et al., 2026) — an
 * installed skill's frontmatter description is resident in the system prompt
 * of EVERY message, whether or not the skill fires, and heavy descriptions
 * dilute the trigger reliability of everything else installed alongside
 * them. The SKILL.md body loads on every activation. This scorer publishes
 * both numbers per entrant so users can see whether a skill is taxing the
 * rest of their setup.
 *
 * Method: install each entrant into a throwaway workspace using the SAME
 * install methods as harness/run.mjs (git-skill-md / skills-cli / npm), then
 * measure the installed `.claude/skills/**` tree:
 *
 *   skill_count            — SKILL.md files installed (a collection pays the
 *                            standing tax once PER SKILL)
 *   resident_tokens        — Σ tokens(name + description frontmatter) across
 *                            all installed SKILL.md files: the tax every
 *                            message pays, forever
 *   activation_tokens_max  — tokens of the largest single SKILL.md body
 *                            (frontmatter excluded): the cost when that
 *                            skill triggers
 *   bundle_tokens          — tokens of every installed .md file (bodies +
 *                            references/): total shipped text; references
 *                            are fetched on demand, so this is cheap unless
 *                            a skill inlines everything into its body
 *   footprint_band         — light / medium / heavy on resident_tokens:
 *                            light ≤ 280 (within the paper's observed
 *                            per-skill description range of 50–280 tokens),
 *                            medium ≤ 1000, heavy > 1000
 *
 * Tokens are approximated as ceil(chars / 4) — the standard heuristic; we
 * publish the method so the numbers are comparable, not absolute.
 *
 * Output: results/footprint.json. harness/leaderboard.mjs merges it into
 * leaderboard.json rows and LEADERBOARD.md when present.
 *
 * Usage: node harness/footprint.mjs [--only <skill-id>] [--keep]
 *   --only  measure a single entrant
 *   --keep  keep the temp workspaces for inspection
 */
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const only = (() => {
  const i = args.indexOf('--only');
  return i >= 0 ? args[i + 1] : null;
})();
const keep = args.includes('--keep');

const tokens = (s) => Math.ceil(s.length / 4);

/** Parse frontmatter block; returns { fm, body } (fm = raw text, '' if none). */
function splitFrontmatter(text) {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!m) return { fm: '', body: text };
  return { fm: m[1], body: text.slice(m[0].length) };
}

/**
 * Extract a frontmatter scalar. Handles the three styles skills actually use:
 * plain/quoted one-liners, and block scalars (`key: >` / `key: |`, optional
 * chomping indicator) whose value is the following more-indented lines.
 */
function fmField(fm, key) {
  const lines = fm.split(/\r?\n/);
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(new RegExp(`^${key}:\\s*(.*)$`));
    if (!m) continue;
    const rest = m[1].trim();
    if (/^[>|][+-]?$/.test(rest)) {
      const block = [];
      for (let j = i + 1; j < lines.length; j++) {
        if (lines[j].trim() === '' || /^[ \t]/.test(lines[j])) block.push(lines[j].trim());
        else break;
      }
      return block.join(' ').trim();
    }
    return rest.replace(/^(["'])([\s\S]*)\1$/, '$2');
  }
  return '';
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const e of fs.readdirSync(src, { withFileTypes: true })) {
    if (e.name === '.git') continue;
    const s = path.join(src, e.name);
    const d = path.join(dest, e.name);
    if (e.isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  }
}

/** Same install semantics as run.mjs installSkill(), minus fixture context. */
function installSkill(skill, workspace) {
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
      const sha = execSync('git rev-parse --short HEAD', { cwd: repoDir, stdio: 'pipe' })
        .toString()
        .trim();
      if (fs.existsSync(path.join(repoDir, 'SKILL.md'))) {
        copyDir(repoDir, path.join(skillsRoot, skill.id));
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
      }
      fs.rmSync(tmp, { recursive: true, force: true });
      record.ok = true;
      record.detail = `${skill.repo}@${sha}`;
    } else if (skill.install === 'skills-cli') {
      execSync(`npx -y skills add ${skill.repo} --yes`, {
        cwd: workspace,
        stdio: 'pipe',
        timeout: 300_000,
      });
      record.ok = true;
      record.detail = `npx skills add ${skill.repo}`;
    } else if (skill.install === 'npm') {
      execSync(`npx -y ${skill.repo} init --yes --domain example.com`, {
        cwd: workspace,
        stdio: 'pipe',
        timeout: 300_000,
      });
      record.ok = true;
      record.detail = skill.repo;
    } else {
      record.detail = `unknown install method "${skill.install}"`;
    }
  } catch (err) {
    record.detail = String(err.message || err).slice(0, 500);
  }
  return record;
}

/** Every dir that can hold installed skills, across install conventions. */
function skillRoots(workspace) {
  return ['.claude/skills', '.agents/skills']
    .map((p) => path.join(workspace, p))
    .filter((p) => fs.existsSync(p) && fs.statSync(p).isDirectory());
}

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isSymbolicLink()) continue; // .claude → .agents symlinks would double-count
    if (e.isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

function measure(workspace) {
  const roots = skillRoots(workspace);
  const files = roots.flatMap((r) => walk(r));
  // De-dup identical relative payloads installed under both roots (some
  // installers write .agents/ and symlink .claude/, others copy twice).
  const seen = new Map();
  for (const f of files) {
    const rel = f.split(/\.(?:claude|agents)[\\/]skills[\\/]/)[1] ?? f;
    if (!seen.has(rel)) seen.set(rel, f);
  }
  const uniq = [...seen.values()];

  const skillMds = uniq.filter((f) => path.basename(f) === 'SKILL.md');
  let resident = 0;
  let activationMax = 0;
  let bodyWordsMax = 0;
  for (const f of skillMds) {
    const text = fs.readFileSync(f, 'utf8');
    const { fm, body } = splitFrontmatter(text);
    resident += tokens(fmField(fm, 'name') + ' ' + fmField(fm, 'description'));
    const t = tokens(body);
    if (t > activationMax) {
      activationMax = t;
      bodyWordsMax = body.split(/\s+/).filter(Boolean).length;
    }
  }
  const bundle = uniq
    .filter((f) => f.endsWith('.md'))
    .reduce((sum, f) => sum + tokens(fs.readFileSync(f, 'utf8')), 0);

  return {
    skill_count: skillMds.length,
    resident_tokens: resident,
    activation_tokens_max: activationMax,
    body_words_max: bodyWordsMax,
    bundle_tokens: bundle,
  };
}

const band = (resident) => (resident <= 280 ? 'light' : resident <= 1000 ? 'medium' : 'heavy');

// ---- main ----
const registry = JSON.parse(fs.readFileSync(path.join(ROOT, 'skills.json'), 'utf8'));
const out = { updated: new Date().toISOString().slice(0, 10), tokenizer: 'chars/4', entrants: {} };
const prevPath = path.join(ROOT, 'results', 'footprint.json');
const prev = fs.existsSync(prevPath) ? JSON.parse(fs.readFileSync(prevPath, 'utf8')) : null;

for (const skill of registry.skills) {
  if (only && skill.id !== only) {
    // keep any previous measurement for entrants we're not re-measuring
    if (prev?.entrants?.[skill.id]) out.entrants[skill.id] = prev.entrants[skill.id];
    continue;
  }
  if (skill.install === 'none') continue; // vanilla has no footprint
  const workspace = fs.mkdtempSync(path.join(os.tmpdir(), `footprint-${skill.id}-`));
  process.stdout.write(`[footprint] ${skill.id} … `);
  const install = installSkill(skill, workspace);
  if (!install.ok) {
    console.log(`INSTALL FAILED — ${install.detail}`);
    out.entrants[skill.id] = { error: `install failed: ${install.detail}` };
  } else {
    const m = measure(workspace);
    if (m.skill_count === 0) {
      console.log('no SKILL.md installed — effectively vanilla');
      out.entrants[skill.id] = { ...m, footprint_band: null, source: install.detail };
    } else {
      out.entrants[skill.id] = { ...m, footprint_band: band(m.resident_tokens), source: install.detail };
      console.log(
        `${m.skill_count} skill(s) · resident ${m.resident_tokens}t (${band(m.resident_tokens)}) · activation ${m.activation_tokens_max}t · bundle ${m.bundle_tokens}t`
      );
    }
  }
  if (!keep) fs.rmSync(workspace, { recursive: true, force: true });
}

fs.mkdirSync(path.join(ROOT, 'results'), { recursive: true });
fs.writeFileSync(prevPath, JSON.stringify(out, null, 2) + '\n');
console.log(`\nwrote results/footprint.json (${Object.keys(out.entrants).length} entrants)`);
