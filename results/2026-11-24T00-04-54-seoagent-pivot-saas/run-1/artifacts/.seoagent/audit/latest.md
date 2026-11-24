---
domain: lumina.example
audited_at: 2026-11-24T00:07:30.331Z
pages_audited: 5
critical: 1
high: 3
medium: 6
low: 2
---

# Audit — lumina.example (Lumina, formerly InboxZap)

Live crawl of `http://127.0.0.1:42365` (5 pages discovered, 4 captured — see "Incomplete crawl" below). Every finding is `Confirmed` against `.seoagent/audit/evidence.md` unless labeled otherwise. All items below were fixed in this session; checkboxes reflect that.

## Critical

- [x] **`/blog` rendered as an empty client-side shell — zero indexable content.** (Confirmed) The page was a client component (`'use client'`) that fetched `/api/posts`, which does not exist anywhere in the repo (confirmed 404 on both the live site and a fresh build). Server HTML had 3 words and 0 in-body links — crawlers could not see any post. The individual post URLs (`/blog/post-1` … `/blog/post-12`) were still live and still earning real GSC impressions, but orphaned: nothing linked to them anymore.
  - Evidence: evidence.md § `http://127.0.0.1:42365/blog` ("client-rendered shell: server HTML has 3 words and 0 in-body links"); confirmed live 404 on `/api/posts`; confirmed no `app/api/posts` route or content source anywhere in the repo.
  - Fix applied: rebuilt `/blog` as a server-rendered Markdown collection (`content/blog/*.md`, `lib/posts.ts`, `app/blog/page.tsx`, `app/blog/[slug]/page.tsx`). Verified with `npm run build` + `npm run start` — the index now server-renders real `<a href="/blog/{slug}">` links and each post has a full server-rendered body, canonical, OG tags, and `Article`/`FAQPage` JSON-LD.

## High

- [x] **1 discovered page could not be crawled: `/faq` (HTTP 404).** (Confirmed) Linked from every page in the nav. `next.config.js` already had a `/faq -> /#faq` redirect, but the homepage had no `#faq` anchor — so even a successful redirect landed nowhere useful.
  - Evidence: evidence.md § "Pages NOT captured"; findings.md `crawl_incomplete`.
  - Fix applied: added a real FAQ section to the homepage with `id="faq"` and `FAQPage` JSON-LD; nav link changed to `/#faq` directly.
- [x] **`app/features/page.tsx` and `app/pricing/page.tsx` did not exist in the repo.** (Likely — repo-only, unconfirmed on live; the live site serves both pages, so production is ahead of this source checkout.) A deploy from this exact repo would have 404'd both routes, which the nav, sitemap, and homepage CTA all link to.
  - Fix applied: added both pages, matching the live content exactly (verified by fetching both live pages directly), while fixing the two issues below in the process.
- [x] **`app/layout.tsx` served stale InboxZap `<title>`/description/OG image.** (Likely — repo-only, unconfirmed on live; the live site already serves the correct Lumina title/description, so this was a regression risk on the next deploy from this source, not a current production issue.)
  - Fix applied: replaced with the Lumina title/description/OG that the live site already serves, plus a title template (`%s — Lumina`) for subpages; added the `Organization` + `SoftwareApplication` JSON-LD the live homepage already serves (also missing from this repo's source).

## Medium

- [x] **`sitemap.xml` was missing `/pricing`.** (Confirmed) 4 URLs listed live vs. 5 reachable pages (home, features, pricing, blog, and /faq which 404s). The repo's `sitemap.ts` already listed `/pricing` — this gap is resolved once deployed from current source.
  - Evidence: evidence.md § sitemap.xml; findings.md `sitemap_coverage_gap`.
  - Fix applied: also wired the sitemap to include every blog post dynamically (previously a TODO stub that returned none).
- [x] **`/pricing` has no canonical tag.** (Confirmed)
  - Evidence: evidence.md § Site-wide rollup — Pages missing canonical.
  - Fix applied: added a self-referencing canonical.
- [x] **`/pricing` serves no structured data.** (Confirmed)
  - Evidence: evidence.md § Site-wide rollup — Pages with no structured data.
  - Fix applied: added `Product` + `Offer` JSON-LD for the three plans.
- [x] **`/features` has 2 `<h1>`s** ("Features" and "Integrations"). (Confirmed)
  - Evidence: evidence.md § `http://127.0.0.1:42365/features`.
  - Fix applied: demoted "Integrations" to `<h2>`.
- [x] **Homepage: 3 images missing `alt` text.** (Confirmed)
  - Evidence: evidence.md § Site-wide rollup — Images missing alt.
  - Fix applied: added descriptive alt text to all 3.
- [x] **Positioning/legacy-authority mismatch — GSC history ranks for InboxZap (email cleanup), the live site is Lumina (AI meeting assistant).** (Confirmed — both from GSC CSVs and from fetching each legacy post's live title.) See "Migration" below.

## Low

- [ ] **`public/img/og-lumina.png` referenced by every OG/Twitter tag (live and newly-added repo pages) is not present in this repo.** Confirm the asset exists in the actual deploy pipeline or add it before the next deploy — never leave an OG tag pointing at a 404.
- [ ] **GSC indexing coverage not verified** — no `seoagent login` in this session, so Search Console URL Inspection data was not available. Connect an account to get real indexed/not-indexed verdicts instead of inference.

## Crawl notes

- **Incomplete crawl:** `/faq` could not be captured (404). Every other finding above is grounded in the 4 pages that were captured; nothing is claimed about pages beyond those.
- **3 pages flagged by the crawler as "canonical points at another origin"** (`/`, `/features`, `/blog`): this is a crawl-methodology artifact, not a real issue — the crawl ran against the loopback IP (`127.0.0.1:42365`) while each page's canonical correctly self-references the real domain (`lumina.example`). That is the expected, correct behavior for a self-referencing canonical crawled via a different origin, not an exclusion from search.
- **Already present on the live site (never recommend adding again):** `<title>`, meta description, canonical, Open Graph, Twitter card on `/`, `/features`, `/blog`; `<title>`, meta description, OG, Twitter card on `/pricing`; `Organization` + `SoftwareApplication` JSON-LD on `/`.

## Migration — InboxZap legacy equity (see `.seoagent/strategy/migration-plan.md`)

GSC (`gsc/Pages.csv`, `gsc/Queries.csv`) shows real, ongoing impressions for the pre-pivot InboxZap product (email cleanup, inbox zero, bulk delete, unsubscribe) — confirmed by fetching each of the 12 live `/blog/post-N` pages directly; all 12 are still 100% InboxZap-era content. None of it has genuine topical overlap with Lumina (AI meeting transcription). Disposition:

- **Harvest (brand equity, not content):** branded "inboxzap" / "inboxzap app" / "inboxzap review" searches (566 combined impressions, position 4.1-8.9) — added a "(formerly InboxZap)" footer credit so that traffic isn't confused on arrival.
- **Redirect (12 posts) to `/blog`**, not the homepage and not a fabricated "closest topical match" — none exists, and mass-redirecting unrelated content to the homepage is itself a soft-404-adjacent anti-pattern. Implemented as a single `next.config.js` rule (`/blog/post-:id -> /blog`, 301).
- **Sunset (2 queries):** negligible impressions, no owning URL, no action.

## What's Working

- Homepage, `/features`, and `/blog` already serve title, meta description, canonical, Open Graph, and Twitter Card tags server-side.
- The homepage already serves `Organization` and `SoftwareApplication` JSON-LD (now also reconciled into the repo source).
- `robots.txt` is correctly configured — no disallow rules, valid absolute sitemap declaration.
- The site is HTTPS-only in production with a proper mobile viewport meta tag on every page.
- The three new cluster articles (pillar + 2 sub-pillars) are fully server-rendered, cross-linked, and carry Article/FAQPage JSON-LD from day one.
