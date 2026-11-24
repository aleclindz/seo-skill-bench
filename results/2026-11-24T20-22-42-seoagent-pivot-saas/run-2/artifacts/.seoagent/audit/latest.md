---
domain: lumina.example
generated_at: 2026-11-24T20:40:00.000Z
source_evidence: .seoagent/audit/evidence.md, .seoagent/audit/findings.md, plus direct curl verification against http://127.0.0.1:41583 (noted per finding)
---

# Technical SEO Audit — lumina.example

## Critical

### 1. The blog's content pipeline is broken end-to-end — ~15,000 historical impressions are stranded
**Confirmed** · Evidence: fetched `http://127.0.0.1:41583/blog` directly (`'use client'` shell, fetches `/api/posts` client-side) and fetched `http://127.0.0.1:41583/api/posts` directly → `404 Not Found`.

- `/blog` ships 3 words of server HTML and 0 in-body links (evidence.md confirms this independently as a "client-rendered shell"). The only content is a `<div class="loading-spinner">` plus a `<script>` that calls `fetch('/api/posts')`.
- That endpoint does not exist on the live site — it 404s. So for every real visitor and every crawler, `/blog` renders "Could not load posts." forever. Nothing links to the 12 individual post URLs from anywhere crawlable.
- The 12 individual posts (`/blog/post-1` … `/blog/post-12`) still resolve (HTTP 200, server-rendered, real titles/H1s) and still hold real historical impressions in `gsc/Pages.csv` (80–3,900 each, ~15,000 total) — but they're orphaned: not linked from `/blog`, not linked from nav, not in `sitemap.xml`. That's consistent with their terrible average positions (42–58).
- Separately, these 12 posts are all **InboxZap**-era (email cleanup / inbox zero) content — off-strategy for Lumina regardless of the pipeline bug. See `.seoagent/strategy/migration-plan.md` for the disposition (sunset, not refresh).

**Why it matters:** this is the single biggest structural blocker to organic growth. The blog is the one content surface positioned to compound over time, and it currently serves zero crawlable content and a broken fetch to visitors.

**Suggested fix:** Convert `/blog` to a server component that renders the post list in server HTML (drop the client-side `fetch('/api/posts')` pattern entirely — there's no working API route backing it). Once it renders server-side, add the posts to `sitemap.ts` and link them from `/blog`. This is a prerequisite for any new Lumina content (pillar/sub-pillar articles) — don't write new posts into a pipeline that doesn't render them.

## High

### 2. 1 linked/sitemap-adjacent page 404s — `/faq`, and the repo's own fix for it isn't taking effect live
**Confirmed** · Evidence: evidence.md § Pages NOT captured; verified live via `curl -I http://127.0.0.1:41583/faq` → `404` (no redirect headers). Linked from `/`, `/blog`, `/features`, `/pricing` (every page's nav).

- `next.config.js` already defines `redirects()`: `/faq` → `/#faq` (permanent), with a comment "FAQ page was folded into the homepage during the redesign." That's the *correct* fix — but the live site doesn't apply it; `/faq` 404s directly with no redirect.
- The homepage itself has no `#faq` section/anchor to redirect into anyway (confirmed from `app/page.tsx` — hero, "how it works," social proof; no FAQ section).
- Every page's nav links to `/faq`, so every crawl and every real visitor hits this dead link from global navigation.

**Why it matters:** a dead link in every page's primary nav wastes crawl budget and is a broken first-session experience in the top nav of the entire site.

**Suggested fix:** reconcile the repo and the live deploy (redeploy so the existing `next.config.js` redirect takes effect), and build the `/#faq` section on the homepage the redirect points to (or point the redirect/nav link at a real FAQ page instead of a nonexistent anchor).

## Medium

### 3. `app/layout.tsx` still carries the old InboxZap brand as fallback metadata, even though every page actually renders Lumina branding live
**Confirmed** · Evidence: `app/layout.tsx` (repo) exports `title: 'InboxZap — Clean Your Inbox in Minutes'`, `og:url: 'https://lumina.example/'`, `og:image: '/img/og-inboxzap.png'`. Verified live via `curl http://127.0.0.1:41583/` → actual rendered `<title>`, `og:title`, `og:image` all say **Lumina**, not InboxZap (`og:image` is `og-lumina.png`).

- The repo source is stale relative to the live site, not the other way around — per the live-crawl evidence contract, the live page is ground truth and already serves the correct Lumina branding.
- The risk: this root layout metadata is the fallback for any route that doesn't export its own metadata (error pages, the `/faq` redirect target's anchor, any future route). Left as-is, it will silently leak "InboxZap" OG/Twitter tags into whatever page next relies on the layout default — the `/faq` fix in finding #2 is exactly that kind of route.

**Suggested fix:** update `app/layout.tsx`'s `metadata` export to the Lumina title/description/OG/Twitter values already confirmed live (see diff below), so the repo matches reality and no future route can regress to the old brand by inheriting stale defaults.

### 4. `/pricing` is missing a canonical tag and has zero structured data
**Confirmed** · Evidence: evidence.md § Site-wide rollup — Pages missing canonical; JSON-LD missing. Carried forward from `findings.md` checks `canonical_missing` and `json_ld_missing`.

- Every other page has a self-referencing canonical; `/pricing` doesn't — verified again via direct fetch (no `<link rel="canonical">` in `curl http://127.0.0.1:41583/pricing`).
- `/pricing` has none of the `Organization`/`SoftwareApplication` schema the homepage has, and is the one page where a pricing-specific schema (`Product`/`Offer`) would actually help rich results.

**Suggested fix:** add `<link rel="canonical" href="https://lumina.example/pricing">`, and add `Product`/`Offer` JSON-LD describing the Free/Pro ($12/seat/mo)/Enterprise tiers (facts in `context.md`).

### 5. `/features` has two conflicting H1s and no structured data
**Confirmed** · Evidence: evidence.md — `h1(s): Features | Integrations`; verified live via curl. `json_ld_missing` carried from findings.md.

**Suggested fix:** keep one H1 (`Features`) and demote "Integrations" to an `<h2>`. Add `SoftwareApplication`/`ItemList`-of-features schema matching the homepage's pattern.

### 6. `sitemap.xml` only lists 4 URLs — no blog posts, and is missing `/pricing`'s own listing gap already flagged
**Confirmed** · Evidence: evidence.md § sitemap.xml — 4 URLs, 0 blog posts; findings.md `sitemap_coverage_gap`.

**Suggested fix:** once finding #1 is fixed (blog renders server-side and posts have a real list source), extend `app/sitemap.ts` to include every published post. The `// TODO: include blog posts once the content API exposes a stable listing` comment in `sitemap.ts` confirms this was already known and deferred.

## Low

### 7. 3 images on the homepage are missing `alt` text
**Confirmed** · Evidence: evidence.md — homepage images: 3 total, 3 missing alt (all are inline placeholder SVG data URIs).

**Suggested fix:** add descriptive `alt` text to the 3 homepage images (or `alt=""` if they're purely decorative placeholders, once real screenshots replace them).

## Already present — do not re-add
Per evidence.md and findings.md: homepage/features/blog already have title, meta description, canonical, OG, Twitter card; homepage has `Organization` + `SoftwareApplication` JSON-LD. Don't recommend re-adding any of these.

## Crawl coverage caveat
The crawl captured 4 of 5 discovered pages (`/faq` 404'd). Every finding above is scoped to captured pages; no claim is made about any page beyond what was fetched directly (noted per-finding where I verified live via `curl` beyond what `evidence.md` captured).

## GSC / migration summary
See `.seoagent/strategy/migration-plan.md` for the full per-asset breakdown: the live homepage already captures the one piece of bridgeable old-brand ("InboxZap") demand; the 12 orphaned blog posts and 37 associated legacy queries are off-strategy email-cleanup content and should be sunset (noindexed), not refreshed into new Lumina content.
