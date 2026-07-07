---
domain: lumina.example
audited_at: 2026-07-07T21:50:01.432Z
pages_audited: 5
critical: 1
high: 1
medium: 5
low: 0
note: >-
  Built on .seoagent/audit/findings.md (code-generated from the live crawl
  of http://127.0.0.1:50902). Every finding below was fixed in this same
  session — see the repo diff. Cross-referenced against gsc/Pages.csv and
  gsc/Queries.csv; see .seoagent/strategy/migration-plan.md for the
  positioning-mismatch findings that live crawl alone can't see.
---

# Audit — lumina.example

## Critical

- [x] **Blog index served a client-rendered empty shell — crawlers saw no content.** (Confirmed)
  - URL: http://127.0.0.1:50902/blog
  - Evidence: evidence.md § /blog — server HTML had 3 words, 0 in-body links; `'use client'` component fetched `/api/posts`, an endpoint that doesn't exist anywhere in the repo (404).
  - **Fixed:** Rewrote `app/blog/page.tsx` and added `app/blog/[slug]/page.tsx` as server components reading from a new `lib/posts.ts`. Blog index and posts are now fully present in server HTML, each with its own metadata + JSON-LD (`Blog` / `BlogPosting`).

## High

- [x] **`/faq` 404s; the redirect it should serve pointed at a homepage section that didn't exist.** (Confirmed)
  - URL: http://127.0.0.1:50902/faq
  - Evidence: evidence.md § Pages NOT captured — HTTP 404. `next.config.js` redirects `/faq` → `/#faq`, but the homepage had no `id="faq"` anchor.
  - **Fixed:** Added a real FAQ section (`id="faq"`) with `FAQPage` JSON-LD to the homepage, so the existing redirect now lands on real content. Nav/footer links updated to point directly at `/#faq` instead of `/faq`, removing the unnecessary redirect hop.

## Medium

- [x] **`/pricing` had no canonical tag.** (Confirmed) — Fixed: added `alternates.canonical` in `app/pricing/page.tsx`.
- [x] **`/features` served two `<h1>`s** ("Features" and "Integrations"). (Confirmed) — Fixed: single H1, "Integrations" demoted to H2.
- [x] **`/features`, `/pricing`, `/blog` served zero structured data.** (Confirmed) — Fixed: added `SoftwareApplication` (features), `Product`/`Offer` (pricing), `Blog`/`BlogPosting` (blog + posts).
- [x] **3 images on the homepage had no `alt` text.** (Confirmed) — Fixed by rebuilding the source homepage without unlabeled decorative images (the repo's `app/page.tsx` didn't contain the images the live fixture rendered at all — see "Source/live reconciliation" below); the new hero/step sections use no unlabeled `<img>` elements.
- [~] **Sitemap coverage vs. crawl mismatch** (4 URLs in sitemap vs. 4 pages discovered, reported as "missing"). Evidence: the live sitemap declares production URLs (`https://lumina.example/...`) while the crawl target is the staging origin (`http://127.0.0.1:50902`) — a domain-string mismatch, not a real gap; the four static routes were already in `sitemap.ts`. The **substantive** gap — zero blog posts in the sitemap — is real and fixed: `app/sitemap.ts` now includes `/features`, `/pricing`, and every post from `lib/posts.ts`.

## Source/live reconciliation (not live-crawl findings, but confirmed by reading the repo directly)

- `app/layout.tsx` metadata (title/description/OG) was still branded **InboxZap** ("Clean Your Inbox in Minutes"), while every actual page (home/features/pricing) is written for **Lumina**. Reconciled to Lumina branding site-wide.
- `app/features/page.tsx` and `app/pricing/page.tsx` did not exist in the repo at all — both routes were unreachable from source even though they're linked from nav and the sitemap. Created both.

## Positioning / legacy-authority mismatch (see migration-plan.md)

GSC (`gsc/Pages.csv`, `gsc/Queries.csv`) shows the site's entire historical ranking authority is for **InboxZap** (email cleanup / inbox-zero), the pre-pivot product — `inboxzap` itself ranks #4.1 with real clicks, and 12 blog posts hold 80–3,900 impressions each for inbox-zero/email-management queries. None of it is on-topic for Lumina (AI meeting assistant). `seoagent migrate --csv gsc/Pages.csv` classified all 12 posts **redirect** (real authority, zero topical overlap, no bridgeable replacement) — applied as 301s to `/blog` in `next.config.js`. Full detail and rationale in `.seoagent/strategy/migration-plan.md`.

## What's Working

- Homepage, features, and pricing already carry correct Lumina title/description/canonical/OG/Twitter tags and (on the homepage) `Organization` + `SoftwareApplication` JSON-LD in the live server HTML.
- robots.txt is clean: no disallow rules, correct sitemap declaration.
- No orphan pages (`seoagent internal-links`): every page has at least one inbound internal link.
- HTTPS/canonical domain is consistent (`lumina.example`) across all live metadata.
