#!/usr/bin/env node
/**
 * Activation trace: did the installed skill actually fire in a run?
 *
 * A skill that is installed but never invoked scores as the baseline plus
 * noise, and a completion-only score cannot tell the two apart. This reads the
 * headless session's own log and records, per run:
 *   - skill_calls:        names passed to the Skill tool
 *   - skill_file_touches: Read/Bash/Grep/Glob calls that reference a file
 *                         under .claude/skills/ or a SKILL.md (an agent can
 *                         follow a skill by reading it without the Skill tool)
 *   - permission_denials: tool calls the headless session refused
 *   - fired:              skill_calls or skill_file_touches is non-empty
 *
 * Reporting only. It is outside the composite (RUBRIC.md v1.0.0 is unchanged),
 * like the footprint columns.
 *
 * Usage: node harness/activation.mjs --run results/<dir>/run-N
 * Writes <run>/activation.json. The session log is found by the session_id in
 * transcript.json under $CLAUDE_CONFIG_DIR/projects (default ~/.claude).
 */
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

function findSessionLog(sessionId) {
  const root = path.join(process.env.CLAUDE_CONFIG_DIR || path.join(os.homedir(), '.claude'), 'projects');
  if (!sessionId || !fs.existsSync(root)) return null;
  for (const dir of fs.readdirSync(root)) {
    const p = path.join(root, dir, `${sessionId}.jsonl`);
    if (fs.existsSync(p)) return p;
  }
  return null;
}

const SKILL_PATH = /\.claude\/skills\/|SKILL\.md/;

export function traceRun(runDir) {
  const out = { session_log_found: false, skill_calls: [], skill_file_touches: 0, tool_calls: 0, permission_denials: [], fired: false };
  let result = null;
  try {
    result = JSON.parse(fs.readFileSync(path.join(runDir, 'transcript.json'), 'utf8'));
  } catch {
    return out;
  }
  out.permission_denials = (result.permission_denials || []).map((d) => ({
    tool: d.tool_name,
    target: String(d.tool_input?.skill ?? d.tool_input?.command ?? d.tool_input?.url ?? d.tool_input?.file_path ?? '').slice(0, 120),
  }));
  const log = findSessionLog(result.session_id);
  if (!log) return out;
  out.session_log_found = true;
  for (const line of fs.readFileSync(log, 'utf8').split('\n')) {
    if (!line) continue;
    let ev;
    try { ev = JSON.parse(line); } catch { continue; }
    if (ev.type !== 'assistant' || !Array.isArray(ev.message?.content)) continue;
    for (const part of ev.message.content) {
      if (part.type !== 'tool_use') continue;
      out.tool_calls += 1;
      if (part.name === 'Skill') {
        out.skill_calls.push(String(part.input?.skill ?? ''));
        continue;
      }
      const target = [part.input?.file_path, part.input?.command, part.input?.path, part.input?.pattern].filter(Boolean).join(' ');
      if (SKILL_PATH.test(target)) out.skill_file_touches += 1;
    }
  }
  // A denied Skill call did not load the skill.
  const denied = new Set(out.permission_denials.filter((d) => d.tool === 'Skill').map((d) => d.target));
  const loaded = out.skill_calls.filter((s) => !denied.has(s));
  out.fired = loaded.length > 0 || out.skill_file_touches > 0;
  return out;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const i = process.argv.indexOf('--run');
  const runDir = i >= 0 ? process.argv[i + 1] : null;
  if (!runDir) {
    console.error('usage: activation.mjs --run results/<dir>/run-N');
    process.exit(1);
  }
  const trace = traceRun(runDir);
  fs.writeFileSync(path.join(runDir, 'activation.json'), JSON.stringify(trace, null, 2));
  console.log(`${runDir}: fired=${trace.fired} skill_calls=[${trace.skill_calls.join(',')}] file_touches=${trace.skill_file_touches} denials=${trace.permission_denials.length}`);
}
