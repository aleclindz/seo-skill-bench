#!/usr/bin/env node
/**
 * Fixture self-test: asserts that every planted defect and every trap in
 * manifest.json ACTUALLY EXISTS in the fixture files. The benchmark tests
 * itself before it is allowed to test anyone else.
 *
 * Usage: node harness/validate-fixture.mjs --fixture pivot-saas
 * Exits 0 when the fixture is internally consistent; non-zero with a list of
 * failures otherwise.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const fixture = args[args.indexOf('--fixture') + 1] || 'pivot-saas';
const F = path.join(ROOT, 'fixtures', fixture);

const failures = [];
const ok = [];
function assert(cond, label) {
  (cond ? ok : failures).push(label);
}
function read(rel) {
  return fs.readFileSync(path.join(F, rel), 'utf8');
}

// ---- manifest parses and patterns compile ----
const manifest = JSON.parse(read('manifest.json'));
for (const d of manifest.defects) {
  for (const p of d.match_patterns) {
    try {
      new RegExp(p, 'i');
    } catch {
      failures.push(`${d.id}: invalid regex: ${p}`);
    }
  }
}
for (const t of manifest.traps) {
  for (const p of t.violation_patterns) {
    try {
      new RegExp(p, 'i');
    } catch {
      failures.push(`${t.id}: invalid regex: ${p}`);
    }
  }
}
assert(manifest.defects.length === 10, 'manifest has 10 defects');
assert(manifest.traps.length === 5, 'manifest has 5 traps');
assert(manifest.judgment.length === 3, 'manifest has 3 judgment questions');

const index = read('live/index.html');
const features = read('live/features.html');
const pricing = read('live/pricing.html');
const blogIndex = read('live/blog/index.html');
const sitemap = read('live/sitemap.xml');
const robots = read('live/robots.txt');
const layout = read('repo/app/layout.tsx');
const nextConfig = read('repo/next.config.js');
const queries = read('gsc/Queries.csv');
const pages = read('gsc/Pages.csv');

// ---- D1: sitemap has exactly 4 <loc>, none of them posts ----
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
assert(locs.length === 4, `D1: sitemap has exactly 4 <loc> (got ${locs.length})`);
assert(!locs.some((l) => /post/.test(l)), 'D1: no post URLs in sitemap');

// ---- D2: blog index is a client-rendered shell with zero post links ----
assert(/loading/i.test(blogIndex), 'D2: blog index contains "Loading" shell');
assert(
  !/href="[^"]*post-\d/.test(blogIndex),
  'D2: blog index has zero anchor links to posts'
);

// ---- D3: /pricing lacks canonical; other key pages have it ----
assert(!/rel="canonical"/.test(pricing), 'D3: pricing.html has NO canonical');
assert(/rel="canonical"/.test(index), 'D3: index.html HAS canonical');
assert(/rel="canonical"/.test(features), 'D3: features.html HAS canonical');
assert(/rel="canonical"/.test(read('live/blog/post-1.html')), 'D3: post-1 HAS canonical');

// ---- D4: homepage links /faq; no live faq page; repo redirect to missing anchor ----
assert(/href="\/faq"/.test(index), 'D4: homepage nav links to /faq');
assert(!fs.existsSync(path.join(F, 'live/faq.html')), 'D4: live /faq page does not exist (404)');
assert(/faq/.test(nextConfig) && /#faq/.test(nextConfig), 'D4: next.config.js has /faq -> /#faq redirect');
assert(!/id="faq"/.test(index), 'D4: homepage has NO id="faq" anchor');

// ---- D5: every blog post lacks meta description; core pages have one ----
for (let n = 1; n <= 12; n++) {
  const post = read(`live/blog/post-${n}.html`);
  assert(!/meta\s+name="description"/.test(post), `D5: post-${n} lacks meta description`);
}
assert(/meta\s+name="description"/.test(index), 'D5: index.html HAS meta description');
assert(/meta\s+name="description"/.test(pricing), 'D5: pricing.html HAS meta description');

// ---- D6: cannibal pair — post-3 and post-7 both target "bulk delete emails" ----
const post3 = read('live/blog/post-3.html');
const post7 = read('live/blog/post-7.html');
assert(/bulk delete/i.test(post3) && /bulk delete/i.test(post7), 'D6: post-3 and post-7 both target "bulk delete"');
assert(/bulk delete emails/i.test(queries), 'D6: Queries.csv contains "bulk delete emails"');
assert(/post-3/.test(pages) && /post-7/.test(pages), 'D6: Pages.csv contains post-3 and post-7');

// ---- D7: features.html has exactly two h1 elements ----
const h1s = (features.match(/<h1[\s>]/g) || []).length;
assert(h1s === 2, `D7: features.html has exactly 2 h1 (got ${h1s})`);
assert((index.match(/<h1[\s>]/g) || []).length === 1, 'D7: index.html has exactly 1 h1');

// ---- D8: repo metadata stale (InboxZap) vs live title (Lumina) ----
assert(/InboxZap/.test(layout), 'D8: repo layout.tsx still says InboxZap');
const liveTitle = (index.match(/<title>([^<]*)<\/title>/) || [])[1] || '';
assert(/Lumina/.test(liveTitle), 'D8: live homepage title says Lumina');
assert(!/InboxZap/.test(liveTitle), 'D8: live homepage title does NOT say InboxZap');

// ---- D9: homepage has >=3 img without alt ----
const imgs = index.match(/<img[^>]*>/g) || [];
const noAlt = imgs.filter((t) => !/\salt=/.test(t)).length;
assert(noAlt >= 3, `D9: homepage has >=3 img without alt (got ${noAlt})`);

// ---- D10: blog posts have NO structured data ----
for (const n of [1, 3, 7, 12]) {
  assert(!/application\/ld\+json/.test(read(`live/blog/post-${n}.html`)), `D10: post-${n} has no JSON-LD`);
}

// ---- T1: homepage ALREADY has Organization + SoftwareApplication JSON-LD ----
assert(/application\/ld\+json/.test(index), 'T1: homepage has JSON-LD');
assert(/"Organization"/.test(index), 'T1: homepage JSON-LD includes Organization');
assert(/"SoftwareApplication"/.test(index), 'T1: homepage JSON-LD includes SoftwareApplication');

// ---- T2: homepage ALREADY has OG + twitter card ----
assert(/property="og:title"/.test(index), 'T2: homepage has og:title');
assert(/name="twitter:card"/.test(index), 'T2: homepage has twitter:card');

// ---- T3 covered by D3 canonical assertions above ----

// ---- T4: robots.txt is permissive ----
assert(!/Disallow/i.test(robots), 'T4: robots.txt has no Disallow');
assert(/Sitemap:/i.test(robots), 'T4: robots.txt references the sitemap');

// ---- T5: GSC has ZERO meeting-related rows ----
assert(!/meeting/i.test(queries), 'T5: Queries.csv has zero meeting-related rows');
assert(!/meeting/i.test(pages), 'T5: Pages.csv has zero meeting-related rows');

// ---- GSC sanity ----
const qRows = queries.trim().split('\n').slice(1);
assert(qRows.length >= 35, `GSC: Queries.csv has >=35 rows (got ${qRows.length})`);
const totalImpr = qRows.reduce((s, r) => s + Number(r.split(',')[2] || 0), 0);
assert(totalImpr > 10000 && totalImpr < 20000, `GSC: total impressions ~14k (got ${totalImpr})`);
for (let n = 1; n <= 12; n++) assert(pages.includes(`post-${n}`), `GSC: Pages.csv includes post-${n}`);

// ---- report ----
console.log(`validate-fixture: ${fixture}`);
console.log(`  ${ok.length} assertions passed`);
if (failures.length) {
  console.error(`  ${failures.length} FAILED:`);
  for (const f of failures) console.error(`   ✗ ${f}`);
  process.exit(1);
}
console.log('  fixture is internally consistent ✅');
