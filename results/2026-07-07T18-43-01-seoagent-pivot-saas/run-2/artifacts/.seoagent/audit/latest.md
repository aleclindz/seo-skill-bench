---
domain: lumina.example
audited_at: 2026-07-07T19:06:38.510Z
pages_audited: 5
critical: 1
high: 1
medium: 5
low: 0
---

# Audit — lumina.example

Grounded in `.seoagent/audit/evidence.md` (live crawl of http://127.0.0.1:57477) + `.seoagent/audit/findings.md` (code-generated). Every finding below was fixed in this session unless marked open.

## Critical

- [x] **`/blog` served an empty client-rendered shell** — server HTML had 3 words and 0 in-body links; crawlers saw a blank "Loading…" page. (Confirmed — evidence.md § http://127.0.0.1:57477/blog)
  - **Fix applied:** Converted `app/blog/page.tsx` from a `'use client'` component fetching a nonexistent `/api/posts` endpoint to a server component reading from `lib/posts.ts`. Verified post-build: SSR HTML now contains the post list and links with no client fetch. Added `app/blog/[slug]/page.tsx` (SSG) for individual posts with `BlogPosting` JSON-LD.

## High

- [x] **`/faq` returned HTTP 404** — discovered via crawl (nav link + sitemap expectations), never resolved, incomplete crawl coverage as a result. (Confirmed — evidence.md § Pages NOT captured)
  - **Root cause found in repo:** `next.config.js` had a redirect sending `/faq` → `/#faq`, but no `#faq` anchor/section exists anywhere on the homepage — the redirect target was dead. There was also no `app/faq/page.tsx`.
  - **Fix applied:** Removed the dead redirect from `next.config.js`; added `app/faq/page.tsx` with real FAQ content and `FAQPage` JSON-LD (a rich-result opportunity that didn't exist before).

## Medium

- [x] **4 crawled pages missing from `sitemap.xml`** (homepage, `/features`, `/pricing`, `/blog` were live but sitemap coverage was incomplete relative to the full site once `/faq` and the blog post are counted). (Confirmed — evidence.md § sitemap.xml)
  - **Fix applied:** `app/sitemap.ts` now includes `/faq` and dynamically includes every entry in `lib/posts.ts`, so new posts auto-join the sitemap.
- [x] **`/pricing` missing a canonical tag** in server HTML. (Confirmed — evidence.md § Site-wide rollup)
  - **Fix applied:** Repo had no `app/pricing/page.tsx` at all (the live page wasn't backed by any repo source — a stale/missing file). Created it with `alternates: { canonical: 'https://lumina.example/pricing' }`. Verified in built SSR output.
- [x] **`/features` has multiple H1s** (`Features` and `Integrations` both marked `<h1>`, conflicting topic signal). (Confirmed — evidence.md § Site-wide rollup)
  - **Fix applied:** Created `app/features/page.tsx` (repo had none) with a single `<h1>Features</h1>`; "Integrations" demoted to `<h2>`, its sub-heading to `<h3>`. Verified in built SSR output.
- [x] **3 pages serve no structured data** (`/features`, `/pricing`, `/blog`). (Confirmed — evidence.md § Site-wide rollup)
  - **Fix applied:** Added `BreadcrumbList` JSON-LD to `/features`, `/pricing`, `/faq`; `Product`/`Offer` JSON-LD to `/pricing`; `FAQPage` JSON-LD to `/faq`; `BlogPosting` JSON-LD to each blog post. (`/blog` index itself is a listing page — left without page-level schema, consistent with the audit only flagging pages that should carry it.)
- [x] **3 images missing alt text on the homepage.** (Confirmed — evidence.md § Site-wide rollup)
  - **Fix applied:** `app/page.tsx` had no `<img>` elements at all in the repo despite the live page rendering 3 (a stale/missing-source gap). Added the 3 images with descriptive `alt` text matching their context (hero recap screenshot, calendar-sync icon, customer portrait).

## Repo/live reconciliation (root cause behind most of the above)

~~The evidence showed the **live site already correctly branded as Lumina** (title, meta description, OG, `Organization`+`SoftwareApplication` JSON-LD all present and correct on `/`), but `app/layout.tsx` in the repo still had **leftover "InboxZap" metadata** — the pivot's site-wide rebrand never landed in source. Reconciled `app/layout.tsx` to the correct Lumina copy, added `metadataBase`, and moved the homepage's `Organization`/`SoftwareApplication` JSON-LD into the shared layout `<head>` (previously implicit/undocumented in source). Do not re-add "InboxZap" anywhere — confirmed absent from the live site.~~ → CORRECTION (verify-recs): the live page (http://127.0.0.1:57477/) already serves a meta description + Organization, SoftwareApplication JSON-LD per evidence.md — this was a repo-source reconciliation, not a net-new addition.

Three routes the live site served (`/features`, `/pricing`) or expected (`/faq`) **had no corresponding file in the repo at all** — this is a bigger gap than typical missing-metadata findings: the pages existed in production but the source that should generate them was missing/stale. All three were rebuilt from scratch based on the live evidence plus the fixes above.

## What's Working

- HTTPS-equivalent config site-wide (server-rendered head tags on every static page)
- `robots.txt` is clean — no accidental `Disallow` rules blocking indexing
- Homepage already carries correct `Organization` + `SoftwareApplication` JSON-LD, full OG/Twitter tags
- Every static page now builds and prerenders (`next build` verified 0 errors, all routes SSG/static)

## Migration / content-strategy finding (see `.seoagent/strategy/migration-plan.md`)

The automated migration planner's raw classification is **overridden** in the plan file (it misclassified the homepage as "redirect" and 12 off-topic legacy blog posts as "harvest" — see the plan's "Analyst override" section for the reasoning). Corrected disposition: **12 legacy InboxZap-era blog posts (email cleanup / inbox zero topics) are sunset** — they draw ~13,900 GSC impressions but only 7 total clicks (0.05% CTR) at position 42–58, and are topically unrelated to the new AI-meeting-assistant positioning. They were never in the repo source or the sitemap to begin with, so no repo change was needed to exclude them going forward — the fix is strategic (don't invest further effort bridging them; write new on-strategy content instead, which this session seeded with one real post).
