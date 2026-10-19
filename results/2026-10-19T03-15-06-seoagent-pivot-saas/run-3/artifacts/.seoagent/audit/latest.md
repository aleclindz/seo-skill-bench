---
domain: lumina.example
audited_at: 2026-10-19T03:41:22.290Z
pages_audited: 5
critical: 0
high: 2
medium: 6
low: 1
---

# Audit — lumina.example

**Crawled origin:** http://127.0.0.1:43051 (user-designated live site). **Crawl is INCOMPLETE** — 1 of 5 discovered pages (`/faq`) could not be captured (HTTP 404); every finding below is a lower bound, not a full picture. Individual blog posts (`/blog/post-1` … `/blog/post-12`) were not discovered by the crawler at all (not in sitemap, not linked from the then-client-rendered `/blog` index) — I fetched all 12 directly to extend the evidence; they're cited as direct fetches below, not crawl rollup.

**Context — this is a pivot audit.** The product has repositioned from **InboxZap** (email-inbox cleanup) to **Lumina** (AI meeting assistant). Every finding below is graded against Lumina's current positioning; the full legacy-authority disposition is in `.seoagent/strategy/migration-plan.md` (summary at the bottom of this file).

**Repo-scope note.** This repo contains source for `/`, `/blog`, `app/layout.tsx`, and `app/sitemap.ts` only. `/features`, `/pricing`, and the individual `/blog/post-N` pages are live and real (confirmed by direct fetch) but **have no corresponding source file in this repo** — findings on those pages are Confirmed from live evidence but marked "not fixable in this repo" where that's the case.

## High

- [x] **Blog index was a broken, crawler-invisible client shell — fixed.** (Confirmed)
  - URL: http://127.0.0.1:43051/blog
  - Evidence: `evidence.md` § `/blog` — server HTML had 3 words, 0 in-body links, client-side `fetch('/api/posts')`. I confirmed `/api/posts` itself returns **404** live — the fetch was failing for real visitors too (not just crawlers), so the page likely showed "Could not load posts." in production.
  - Fix applied: `app/blog/page.tsx` is now a server component rendering a real post list from `app/blog/posts.ts` (new shared module) — no client fetch, no dependency on the broken API. `app/sitemap.ts` now imports the same module so the sitemap and the index can't drift apart.

- [x] **Sitemap was missing every blog post — fixed.** (Confirmed)
  - Evidence: `evidence.md` § sitemap.xml — "4 URLs, 0 blog/article posts." Direct fetch confirmed `/blog/post-1` through `/blog/post-12` all return 200 and carry real GSC impressions (`gsc/Pages.csv`), e.g. `/blog/post-1` has 3,900 impressions — real, orphaned equity.
  - Fix applied: `app/sitemap.ts` now emits an entry per post from `app/blog/posts.ts`. **Caveat:** these are legacy InboxZap posts pending migration (see below) — remove each sitemap entry once its 301 redirect ships.

## Medium

- [ ] **`/pricing` has no canonical tag.** (Confirmed) — Evidence: `evidence.md` § Site-wide rollup — "Pages missing canonical: /pricing." Every other audited page has one. **Not fixable in this repo** — no `app/pricing/` source exists here. Recommendation: add `<link rel="canonical" href="https://lumina.example/pricing">` wherever that route's source actually lives.

- [ ] **`/pricing` and `/features` serve no JSON-LD.** (Confirmed) — Evidence: `evidence.md` § Site-wide rollup — "Pages with no structured data: /features, /pricing, /blog." (`/blog` is now fixed in-repo; the other two are out of this repo's scope.) Recommendation: add `WebPage`/`Product`-style JSON-LD to `/pricing` (plan names/prices) and to `/features`. Only `/pricing` and `/features` are missing it — do not add schema to pages `evidence.md` already lists as having it (home, blog).

- [x] **`/features` has two conflicting `<h1>`s.** (Confirmed) — Evidence: `evidence.md` § `/features` — `h1(s): "Features" | "Integrations"`. **Not fixable in this repo** (no `app/features/` source here). Recommendation: keep "Features" as the single `<h1>`; demote "Integrations" to `<h2>`.

- [ ] **Two blog posts cannibalize the same query.** (Confirmed by direct fetch) — `/blog/post-3` ("How to Bulk Delete Emails") and `/blog/post-7` ("Bulk Delete Emails: Complete Guide") have near-identical titles, structure (protect → select → delete), and target the same intent, splitting ranking signal for "bulk delete emails" (210 impressions) and "how to bulk delete emails in gmail" (400 impressions) per `gsc/Queries.csv`. Both are legacy anyway — see migration plan; disposition is to merge/redirect rather than keep both.

- [ ] **All 12 blog posts are missing a meta description.** (Confirmed by direct fetch of posts 1, 3, 7; evidence pattern consistent across the set — treat the other 9 as `Likely` until individually fetched.) Recommendation: not fixable in this repo (no post-page source here); add a unique 150–160 char description per post wherever that template lives.

- [ ] **No blog post serves `Article`/`BlogPosting` JSON-LD.** (Confirmed by direct fetch of posts 1, 3, 7 — only `og:type: article` is present, no `<script type="application/ld+json">`.) Not fixable in this repo. Recommendation: add `BlogPosting` JSON-LD (headline, datePublished, author, publisher) to the post template.

## Low

- [ ] **3 homepage images have no `alt` text.** (Confirmed) — Evidence: `evidence.md` § Site-wide rollup — "Images missing alt: 3 total — http://127.0.0.1:43051/ (3)." **Not fixable in this repo**: the live homepage renders a hero image and two feature-step icons that **do not exist in this repo's `app/page.tsx`** — this file is itself behind what's actually deployed (the same stale-source pattern as the metadata fix above, on the body this time, not just the `<head>`). Whoever owns the deployed component needs to add descriptive `alt` text to all three.

## Also confirmed, not newly broken

- **`/faq` 404s directly with no redirect**, even though `next.config.js` already declares a permanent `/faq → /#faq` redirect. The live server isn't applying it (or is running older config). I added a real `id="faq"` section to `app/page.tsx` so the redirect has a real target once the current repo is deployed — but I can't make the live server apply the redirect from here. Flag this to whoever owns the deploy.
- **Repo source metadata was stale (InboxZap) while the live `<head>` already serves correct Lumina title/description/OG — fixed in `app/layout.tsx`.** This was a reconciliation (repo catching up to live), not an "add X" to a live page that lacked it.

## Already present on the live site — do NOT add

Per `findings.md` and `evidence.md`: `/` already has `Organization` + `SoftwareApplication` JSON-LD, canonical, full OG/Twitter tags. `/features` and `/blog` already have canonical + OG/Twitter. `/pricing` and `/blog` already have OG/Twitter. **robots.txt is already correct** (`Allow: /`, valid absolute `Sitemap:` line) — no changes recommended.

## What's Working

- Homepage, features, and blog index all carry correct titles, meta descriptions, and OG/Twitter tags.
- Homepage already has both `Organization` and `SoftwareApplication` JSON-LD.
- robots.txt is valid and unblocked, with a correctly-formed absolute sitemap declaration.
- The 12 legacy blog posts, despite being off-brand, still carry real organic equity (GSC impressions) worth preserving via migration rather than losing outright.

## Migration plan summary (mandatory — positioning mismatch + GSC data both present)

Full per-asset table: `.seoagent/strategy/migration-plan.md`. 13 assets classified: **1 harvest** (the homepage itself — corrected by hand; the mechanical classifier scored it "0% relevant" because URL paths carry no topic words, not because it's actually off-strategy) · **12 redirect** (every legacy blog post — real impressions, all off-topic for Lumina, proposed to 301 into `/blog` until a topically-closer Lumina article exists, revisited per-post then). No queries/pages met the "sunset" bar.
