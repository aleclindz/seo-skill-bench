#!/usr/bin/env node
/**
 * Static server for a fixture's "live site" (fixtures/<fixture>/live).
 *
 * Serves clean URLs the way the fixture's canonicals expect:
 *   /            -> live/index.html
 *   /features    -> live/features.html
 *   /blog        -> live/blog/index.html
 *   /blog/post-3 -> live/blog/post-3.html
 *   /robots.txt, /sitemap.xml -> as-is
 * Anything else (including /faq — a planted defect) -> 404.
 *
 * Usage: node harness/serve.mjs --fixture pivot-saas [--port 4173]
 * Also exported as startServer() for run.mjs.
 */
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
};

function resolveFile(liveDir, urlPath) {
  // Normalize and confine to the live dir.
  const clean = path.posix.normalize(urlPath).replace(/^(\.\.[/\\])+/, '');
  const candidates = [];
  if (clean === '/' || clean === '') {
    candidates.push('index.html');
  } else {
    const rel = clean.replace(/^\//, '').replace(/\/$/, '');
    candidates.push(rel); // exact file (robots.txt, sitemap.xml)
    candidates.push(`${rel}.html`); // clean URL -> file.html
    candidates.push(path.posix.join(rel, 'index.html')); // dir -> dir/index.html
  }
  for (const c of candidates) {
    const abs = path.join(liveDir, c);
    if (!abs.startsWith(liveDir)) continue; // path traversal guard
    if (fs.existsSync(abs) && fs.statSync(abs).isFile()) return abs;
  }
  return null;
}

export function startServer(fixture, port = 0) {
  const liveDir = path.join(ROOT, 'fixtures', fixture, 'live');
  if (!fs.existsSync(liveDir)) throw new Error(`No live dir for fixture "${fixture}": ${liveDir}`);

  const server = http.createServer((req, res) => {
    const urlPath = new URL(req.url, 'http://x').pathname;
    const file = resolveFile(liveDir, urlPath);
    if (!file) {
      res.writeHead(404, { 'content-type': 'text/html; charset=utf-8' });
      res.end('<!doctype html><title>404 Not Found</title><h1>404 — Not Found</h1>');
      return;
    }
    res.writeHead(200, { 'content-type': TYPES[path.extname(file)] || 'application/octet-stream' });
    res.end(fs.readFileSync(file));
  });

  return new Promise((resolve) => {
    server.listen(port, '127.0.0.1', () => {
      resolve({ server, port: server.address().port, url: `http://127.0.0.1:${server.address().port}` });
    });
  });
}

// CLI mode
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2);
  const get = (flag, dflt) => {
    const i = args.indexOf(flag);
    return i >= 0 ? args[i + 1] : dflt;
  };
  const fixture = get('--fixture', 'pivot-saas');
  const port = Number(get('--port', 4173));
  const { url } = await startServer(fixture, port);
  console.log(`[serve] fixture "${fixture}" live at ${url} (Ctrl-C to stop)`);
}
