---
domain: 127.0.0.1:44883
audited_at: 2026-11-24T20:42:08.352Z
pages_audited: 4
pages_discovered: 5
critical: 2
high: 4
medium: 5
low: 1
---

# Audit — 127.0.0.1:44883 (Lumina)

## Critical

- [x] **`/blog` served a broken client-side shell that could never show a post — fixed in the repo, not yet live.** (Confirmed)
  - URL: http://127.0.0.1:44883/blog
  - Evidence: evidence.md § http://127.0.0.1:44883/blog — "server HTML has 3 words and 0 in-body links — crawlers can't see the content"; `app/blog/page.tsx` (pre-fix) was a client component `fetch('/api/posts')`, and `curl http://127.0.0.1:44883/api/posts` returns HTTP 404 — the endpoint it depends on does not exist (`upstream_dependency_unreachable` + `client_rendered_shell`, confirmed together).
  - **Fix applied in this repo:** `app/blog/page.tsx` and the new `app/blog/[slug]/page.tsx` are now server components reading from `content/blog/*.md` via `lib/posts.ts` (no client fetch, no dependency on a nonexistent API). `app/sitemap.ts` now lists real posts from that directory instead of a `// TODO` stub. **This fix has not reached production** — re-curled `http://127.0.0.1:44883/blog` after the edit and it still serves the old broken shell, confirming production isn't currently built from this checkout (see Biggest Issue below). Deploy this repo to make it live.
  - `content/blog/` is currently empty — no posts exist yet. That's expected: Phase 3/4 article writing is queued in `roadmap.md`, not fabricated here.

- [ ] **The repo this session was asked to optimize is not what's running at the live URL, in both directions.** (Confirmed)
  - Evidence:
    - `app/page.tsx` and `app/blog/page.tsx` are the only two route files in this repo, plus `app/layout.tsx`. Yet the live site serves 200s for `/features`, `/pricing`, and twelve `/blog/post-1`…`/post-12` pages — **none of which have any source file in this checkout** (`find app -type f` → only `layout.tsx`, `page.tsx`, `sitemap.ts`, `blog/page.tsx`).
    - Conversely, `app/layout.tsx` carried a hardcoded fallback `<title>InboxZap — Clean Your Inbox in Minutes</title>` and matching description/OG — but the **live homepage already serves the correct, unrelated "Lumina — The AI Meeting Assistant for Teams" title** (evidence.md). If this repo were actually built and deployed as-is, the homepage title would have reverted to InboxZap the moment anyone added a page without its own metadata override.
    - The homepage's 3 images missing alt text (evidence.md rollup) are inline `data:image/svg+xml` placeholders — but `app/page.tsx` contains **no `<img>` tags at all**. There's no file in this repo to add `alt=` to.
  - **Why it matters:** every "add X" or "fix Y in file Z" recommendation on this site needs a real source file to land in. Two of the biggest wins available (fixing `/pricing`'s missing canonical/schema, adding alt text to the homepage's 3 images) have **no corresponding file in this checkout** — I can't safely invent `app/features/page.tsx` or `app/pricing/page.tsx` from scratch without a design reference, and doing so risks shipping a page that conflicts with whatever actually serves production today.
  - **What I did fix:** the two things that genuinely exist in this repo and were genuinely wrong regardless of what's live — the stale InboxZap default metadata and the broken blog (both above).
  - **What needs the owner:** confirm where `/features`, `/pricing`, and `/blog/post-*` are actually served from (a different app, a CMS, a reverse-proxied legacy site) so canonical/schema fixes on those routes land in the right place, and confirm whether this repo is meant to be redeployed (which would currently regress the homepage title to InboxZap on anything lacking its own metadata — now fixed) or is mid-migration toward replacing the other service entirely.

## High

- [ ] **1 discovered page could not be crawled: `/faq` returns HTTP 404, linked from 4 pages.** (Confirmed)
  - URL: http://127.0.0.1:44883/faq
  - Linked from: http://127.0.0.1:44883/, /blog, /features, /pricing
  - Evidence: evidence.md § Pages NOT captured; findings.md `crawl_incomplete`
  - Note: `next.config.js` in this repo already defines a permanent redirect `/faq → /#faq` ("FAQ page was folded into the homepage during the redesign") — but the **live site 404s instead of redirecting**, meaning this fix is also not deployed (same drift as above). I pointed the nav link directly at `/#faq` in `app/layout.tsx` to avoid relying on the redirect hop once this does deploy.
  - **Still open:** `/#faq` doesn't resolve to anything today because the homepage (`app/page.tsx`) has no section with `id="faq"` — the redirect's destination doesn't exist. This is a designed page (the homepage); per this skill's rule I cannot add a new section to it myself. **Suggestion for the owner:** add a short FAQ section (with `id="faq"`) to the homepage answering the plan/pricing questions already confirmed in `context.md` (free for teams up to 5, $12/seat Pro, Enterprise custom, unlimited transcription on every plan) — 4-5 Q&As, paired with `FAQPage` JSON-LD. This also directly fixes the broken nav link for every visitor who clicks "FAQ".

- [ ] **`ai_files_unpublished` — `llms.txt` generated but not reaching the live site.** (Confirmed)
  - Evidence: `public/llms.txt` exists in this repo (generated via `seoagent llms`); `curl http://127.0.0.1:44883/llms.txt` → HTTP 404.
  - Same root cause as the Biggest Issue: production isn't serving `public/` from this checkout. Will resolve automatically once this repo is deployed — no further action needed in-repo.

- [ ] **`okf_bundle_missing` — no Open Knowledge Format bundle live.** (Confirmed)
  - Evidence: `curl http://127.0.0.1:44883/.well-known/okf/index.md` → HTTP 404; `.seoagent/okf/` is still the unfilled scaffold (placeholders, not real content).
  - Lower priority than the two above — fill `.seoagent/okf/` from `context.md` once the migration/pivot settles, then `seoagent okf publish`.

- [ ] **Repo-only: stale "InboxZap" default metadata — fixed in this session.** (Confirmed, now fixed)
  - ~~`app/layout.tsx` fallback `<title>`/description/OG previously named the pre-pivot product. Rebranded to Lumina and added site-wide `Organization` JSON-LD (homepage already serves `Organization`+`SoftwareApplication` live, per evidence — this just brings the repo source in line with what's already correct in production, see audit-checks.md § "repo source is stale — reconcile the source"). Added a matching `SoftwareApplication` block in `app/page.tsx` for the same reason.~~ → CORRECTION (verify-recs): the live page (http://127.0.0.1:44883/) already serves Organization, SoftwareApplication JSON-LD per evidence.md — this was a repo-source reconciliation, not a net-new addition.

## Medium

- [ ] **`/pricing` serves no canonical tag.** (Confirmed)
  - Evidence: evidence.md § http://127.0.0.1:44883/pricing — "canonical: _(none in server HTML)_"
  - No source file for `/pricing` exists in this repo (see Biggest Issue) — flagging for the owner to fix wherever that page actually lives: add a self-referencing `<link rel="canonical" href="https://lumina.example/pricing">`.

- [ ] **`/pricing`, `/features`, and `/blog` serve zero JSON-LD.** (Confirmed)
  - Evidence: evidence.md rollup "Pages with no structured data (zero JSON-LD): /features, /pricing, /blog"
  - `/blog`'s JSON-LD gap is now moot once this repo deploys — the new `app/blog/[slug]/page.tsx` emits `Article` JSON-LD per post, and `app/blog/page.tsx` is a plain listing (no schema needed on an index with no items yet).
  - `/pricing` (no source file here) should get `Product`/`Offer` JSON-LD once its real source is located — see `references/schema-markup.md` for the shape; facts to use are already in `context.md` (Free / $12 seat Pro / Enterprise custom).
  - `/features` (no source file here) should get `SoftwareApplication` JSON-LD once located.

- [ ] **`/features` has 2 conflicting `<h1>`s.** (Confirmed)
  - Evidence: evidence.md § http://127.0.0.1:44883/features — `h1(s): Features | Integrations`
  - No source file in this repo for `/features` — flag for the owner: demote "Integrations" to `<h2>`.

- [ ] **Sitemap/live-page mismatch flagged for `/pricing`.** (Confirmed per findings.md, root cause clarified)
  - findings.md's code-generated `sitemap_coverage_gap` check reports `/pricing` as missing from `sitemap.xml`. Directly fetching `https://127.0.0.1:44883/sitemap.xml` shows `/pricing` **is** listed — but under `https://lumina.example/pricing`, a different host than the crawled origin (`127.0.0.1:44883`), which is why the automated URL-match didn't line up. The sitemap's hardcoded `BASE = 'https://lumina.example'` in `app/sitemap.ts` is correct for real production; this is a crawl-origin artifact of testing against a loopback IP, not a live bug. No action needed once this repo serves from its real domain.

- [ ] **3 homepage images have no alt text.** (Confirmed, not fixable in this repo)
  - Evidence: evidence.md § http://127.0.0.1:44883/ — "images: 3 total, 3 missing alt" (inline SVG placeholders)
  - `app/page.tsx` contains no `<img>` elements — these are rendered by whatever actually builds the live homepage (see Biggest Issue). Flag for the owner to add descriptive `alt` text at the real source.

## Low

- [ ] **Weakly-linked page: `/blog` has exactly 1 inbound internal link.** (Confirmed)
  - Evidence: `.seoagent/internal-links.md`
  - Will improve naturally as cluster articles (roadmap.md) link up to `/blog` and to each other; no immediate action.

## What's Working

- Homepage, `/features`, `/pricing`, `/blog` all serve a title, meta description, canonical (except `/pricing`), Open Graph, and Twitter card — confirmed live, do not re-add these.
- Homepage already serves `Organization` + `SoftwareApplication` JSON-LD live.
- `robots.txt` is clean: no disallow rules, correct absolute `Sitemap:` declaration.
- No orphan pages — every crawled page has at least one inbound internal link.
- The pivot's new positioning (Lumina / AI meeting assistant) is clear, consistent, and well-differentiated in the homepage/pricing/features copy already live.

## GSC migration (mandatory — positioning mismatch confirmed)

GSC history (`gsc/Pages.csv`, `gsc/Queries.csv`) is almost entirely demand for the site's *previous* product, "InboxZap" (bulk email delete / inbox zero), which has zero topical overlap with the current "Lumina" AI-meeting-assistant positioning. Full harvest/redirect/sunset disposition: **`strategy/migration-plan.md`** — 1 harvest (the homepage itself, corrected from the tool's false "redirect" call), 51 redirect (3 branded `inboxzap*` queries → homepage; 12 legacy blog post URLs + 37 informational legacy queries → `/blog`), 0 sunset. The 12 legacy post URLs return live 200s today with no source file in this repo — the actual 301s need to be configured wherever those URLs are served from (see Biggest Issue).

## Forward content strategy

No cloud login this session (`seoagent keywords --seed`/`--peek` both require `seoagent login`) — GSC seeding and DataForSEO enrichment weren't available. Built one cluster from WebSearch + the live positioning instead: **`strategy/clusters/ai-meeting-assistant-for-teams.md`** (1 pillar, 5 sub-pillars, 10 long-tails — see `roadmap.md` for the ordered build list). Priorities are directional H/M/L, not real search volume — re-run with `seoagent login` before committing a large writing budget.
