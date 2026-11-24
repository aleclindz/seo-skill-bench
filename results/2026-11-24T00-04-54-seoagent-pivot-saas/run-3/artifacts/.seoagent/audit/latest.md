---
generated_at: 2026-11-24T00:46:00.000Z
source_evidence: .seoagent/audit/evidence.md
findings_source: .seoagent/audit/findings.md
---

# Audit — http://127.0.0.1:40195

## Context: this is a pivot, not a normal audit

Lumina's live homepage, `/features`, and `/pricing` already describe an **AI meeting assistant**. The repo's own `app/layout.tsx` still had the old product's ("InboxZap", an email-cleanup tool) default `<title>`/description, and the Google Search Console export (`gsc/`) is almost entirely legacy InboxZap queries. See `context.md` and `strategy/migration-plan.md`.

## Findings carried from `audit/findings.md` (every one — none dropped)

1. **[High] `crawl_incomplete`** — `/faq` returned HTTP 404 at crawl time, linked from `/`, `/blog`, `/features`, `/pricing`. **Fixed this session:** added an `id="faq"` section with real FAQ content + FAQPage schema to the homepage, so the pre-existing `next.config.js` redirect (`/faq` → `/#faq`) now resolves to something. *(Evidence: evidence.md § Pages NOT captured; fix verified via local build + smoke test, not a re-crawl of the external live origin — the live origin is a separate fixture outside this repo's control, see "What this session could not change" below.)*
2. **[Medium] `sitemap_coverage_gap`, affected URL listed as `/pricing`** — **Correction:** I re-fetched `https://127.0.0.1:40195/sitemap.xml` directly three times and `/pricing` **is** present in all three (`<loc>https://lumina.example/pricing</loc>`). The crawl discovered 5 pages (`/`, `/features`, `/pricing`, `/blog`, `/faq`) against a 4-URL sitemap — the actual gap is `/faq`, which was 404ing anyway (uncaptured, excluded from sitemap correctly). This automated finding mislabeled the affected URL; flagging the discrepancy rather than forwarding it as-is.
3. **[Medium] `canonical_missing` on `/pricing`** — Confirmed, no `<link rel="canonical">` in server HTML. **Fixed this session:** `app/pricing/page.tsx` created with `alternates.canonical`.
4. **[Medium] `json_ld_missing` on `/pricing`** — Confirmed, zero JSON-LD. **Fixed this session:** added `Product`/`Offer` schema.
5. **Rollup: `/features` has 2 H1s** (`Features`, `Integrations`) — Confirmed. **Fixed this session:** demoted the second to `<h2>` in the new `app/features/page.tsx`.
6. **Rollup: `/features`, `/blog` have zero JSON-LD** — `/features` fixed (SoftwareApplication + featureList added). `/blog` is an index/listing page; left without JSON-LD (no single-entity schema fits a listing), consistent with standard practice.
7. **Rollup: 3 images missing alt on `/`** — Confirmed (3 inline SVG data-URIs). **Fixed this session:** added descriptive `alt` text to all three in `app/page.tsx`.
8. **`/blog` client-rendered shell — crawlers can't see the content** — Confirmed (server HTML had 3 words, a loading spinner, and a client-side `fetch('/api/posts')` to an endpoint that does not exist anywhere in this repo). **Fixed this session:** converted to a server-rendered content collection (`content/blog/`), per the "DB/headless blog with no repo files" guardrail in `references/publishing.md`.

## Additional findings (from manual verification + repo inspection, beyond the automated crawl)

9. **Repo was stale relative to the live site** — `app/layout.tsx` hardcoded `InboxZap — Clean Your Inbox in Minutes` as the default title/description, and no `app/features/page.tsx` or `app/pricing/page.tsx` existed at all even though those routes render live. *Evidence: direct diff of repo file contents vs. live-fetched HTML of `/`, `/features`, `/pricing`.* **Fixed this session** (see changelog.md for the full list).
10. **GSC/positioning mismatch requiring migration planning** — `gsc/Queries.csv` and `gsc/Pages.csv` are ~95% legacy "InboxZap" (email cleanup) queries and 12 orphaned `/blog/post-N` pages about that product, none of which match the current Lumina positioning. *Evidence: gsc/Queries.csv, gsc/Pages.csv, cross-referenced against context.md.* **Addressed this session:** `seoagent migrate` run, corrected, and acted on — see `strategy/migration-plan.md` and the 12 new redirects in `next.config.js`.
11. **12 legacy blog posts (`/blog/post-1`..`post-12`) live with no repo file backing them** — these rendered real content on the live origin but have no source anywhere in this repo (`Hypothesis`: a separate, pre-pivot build or content source no longer represented here — not confirmed, since this repo has no git history predating this session). **Addressed this session** via the redirect-to-home disposition in the migration plan, since none are topically relevant to rewrite.

## What this session could not change

The live origin (`http://127.0.0.1:40195`) is a running server outside this repo — it is not rebuilt from this repo's source in this environment. Every fix above was made in the repo and verified with `npx next build` + a local production-server smoke test (`/`, `/blog`, `/blog/ai-meeting-assistant`, `/features`, `/pricing`, the `/faq` redirect, all 12 legacy post redirects, `/sitemap.xml`) — **not** by re-crawling the external live origin, which will only reflect these fixes once this repo is actually deployed there. Re-run `seoagent crawl` after deploy to confirm live.

## What's working

- Homepage already has solid Open Graph/Twitter tags and (as of this session) full JSON-LD (Organization, SoftwareApplication, FAQPage).
- robots.txt is clean — no accidental `Disallow` rules blocking anything.
- Core positioning (AI meeting assistant, Zoom/Meet/Teams, Slack/Notion routing) is clear and consistent across `/`, `/features`, `/pricing` — a real, differentiated angle versus the competitors in `competitors.md`.
