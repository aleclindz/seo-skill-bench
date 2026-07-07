---
domain: lumina.example
audited_at: 2026-07-07T18:47:38.327Z
pages_audited: 4
critical: 2
high: 1
medium: 4
low: 0
---

# Audit — lumina.example

## Critical

- [x] **Legacy-authority mismatch: GSC history is 100% InboxZap (old product), 0% Lumina.** All 13 GSC assets (12 blog posts + homepage impressions) rank for the retired email-cleanup product, not the current AI-meeting-assistant positioning. (Confirmed — `gsc/Pages.csv`, `gsc/Queries.csv`, cross-referenced against live homepage copy in `evidence.md`)
  - Recommendation: 301 the 12 off-topic legacy posts to `/` to consolidate stray authority instead of stranding it (see `.seoagent/strategy/migration-plan.md`). **Fixed** — added to `next.config.js` `redirects()`.
- [x] **Blog index (`/blog`) renders a client-side shell — 3 body words, 0 in-body links in server HTML.** A 200 OK this empty reads as a soft 404 to crawlers; the listing (and every post it would link to) is invisible to search engines. (Confirmed — `evidence.md` § `/blog`)
  - Recommendation: server-render the post list. **Fixed** — `app/blog/page.tsx` is now an async Server Component that fetches posts at request/build time instead of client-side `useEffect`.

## High

- [x] **1 discovered page 404s: `/faq`**, still linked from primary nav. (Confirmed — `evidence.md` § Pages NOT captured)
  - Recommendation: fix the redirect target and/or the link. **Fixed** — `next.config.js` already redirected `/faq` → `/#faq`, but no `#faq` anchor existed on the homepage (so the redirect landed on nothing). Added a real FAQ section with an `id="faq"` anchor + `FAQPage` JSON-LD, and pointed the nav link straight at `/#faq`.

## Medium

- [x] **4 live pages missing from `sitemap.xml`** (`/`, `/features`, `/pricing`, `/blog` all discoverable only via crawl, not listed). (Confirmed — `evidence.md` § sitemap.xml)
  - Note: on reconciliation, `app/sitemap.ts` in the repo *does* already list these 4 — the live sitemap evidence predates this session's fix being deployed. Also extended `sitemap.ts` to include individual blog posts once they exist.
- [x] **Pricing page has no canonical tag.** (Confirmed — `evidence.md` § `/pricing`)
  - Repo had no source file for `/pricing` at all (production/repo drift) — created `app/pricing/page.tsx` with a self-referencing canonical, matching metadata, and `Product` JSON-LD.
- [x] **Features page serves two `<h1>`s** ("Features" and "Integrations"). (Confirmed — `evidence.md` § `/features`)
  - Repo had no source file for `/features` either — created `app/features/page.tsx` with a single `<h1>` (Integrations demoted to `<h2>`, folded under the page as a normal section) and `WebPage` JSON-LD.
- [x] **3 images on the homepage have no `alt` attribute.** (Confirmed — `evidence.md` § Site-wide rollup)
  - Repo's `app/page.tsx` didn't even render these images (another drift point) — added them with descriptive `alt` text.

## What's Working

- HTTPS-equivalent setup, single robots.txt with no accidental `Disallow` rules, sitemap declared correctly in robots.txt.
- Homepage, features, and pricing already carry correct titles, meta descriptions, canonicals (homepage/blog/features), and Open Graph + Twitter tags for the **current** Lumina positioning — the live site itself is already on-message, it was the repo source (root layout metadata) and two page routes that lagged behind.
- ~~Organization + SoftwareApplication JSON-LD already present on the homepage — do not re-add.~~ → CORRECTION (verify-recs): the live page (http://127.0.0.1:56314/) already serves Organization, SoftwareApplication JSON-LD per evidence.md — this was a repo-source reconciliation, not a net-new addition.
- No orphan pages after this session's fixes (`seoagent internal-links`: 0 orphans across all 7 tracked source files).

## Repo/production drift (fixed this session)

The repo (this checkout) was noticeably behind what's actually live:
- `app/layout.tsx` still had the old InboxZap `<title>`/description/OG image as its fallback metadata — fixed to Lumina.
- `app/features/page.tsx` and `app/pricing/page.tsx` did not exist in the repo at all, despite both routes being live and indexable — added, with the H1/canonical/schema fixes folded in.
- ~~`app/page.tsx` had no `<img>` markup at all despite the live homepage serving 3 images (per `evidence.md` § `/`) — added them with descriptive alt text. This is a repo-source reconciliation (the images and their missing alt attributes already existed live), not new content.~~ → CORRECTION (verify-recs): the live page (http://127.0.0.1:56314/) already serves JSON-LD (Organization, SoftwareApplication) per evidence.md — this was a repo-source reconciliation, not a net-new addition.

## Migration plan (legacy authority)

`.seoagent/strategy/migration-plan.md`: **0 harvest · 12 redirect · 0 sunset** across 12 legacy InboxZap blog posts (the tool's 13th row, the homepage itself, was a false positive from a URL-text relevance heuristic — corrected: homepage is on-strategy, not legacy). All 12 redirects are now live in `next.config.js`.
