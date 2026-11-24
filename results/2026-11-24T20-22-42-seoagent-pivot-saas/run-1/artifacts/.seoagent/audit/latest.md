---
domain: 127.0.0.1:34939
audited_at: 2026-11-24T20:27:00Z
pages_audited: 5
critical: 1
high: 1
medium: 3
low: 0
---

# Audit — 127.0.0.1:34939 (Lumina)

## Critical
- [x] **`/blog` rendered empty for crawlers** — `app/blog/page.tsx` was a `'use client'` component that fetched `/api/posts`, a route that doesn't exist anywhere in the repo (no CMS deps, no content files). Server HTML had 3 words and 0 links; the 12 legacy posts with real GSC impressions (3900, 1650, 1380, ...) had nowhere to land. (Confirmed)
  - URL: http://127.0.0.1:34939/blog
  - Evidence: evidence.md § http://127.0.0.1:34939/blog — "client-rendered shell: server HTML has 3 words and 0 in-body links"
  - Fix applied: converted to a repo-native Markdown blog (`lib/posts.ts`, `app/blog/page.tsx`, `app/blog/[slug]/page.tsx` reading `content/blog/*.md`), server-rendered, included in `sitemap.ts`. Build verified (`npm run build`). `publishing.setup_status: pending` in `project.md` until this ships — no articles generated yet per the publishing guardrail.

## High
- [ ] **1 discovered page could not be crawled (`/faq` → 404)** — linked from every page's nav. (Confirmed)
  - URL: http://127.0.0.1:34939/faq
  - Linked from: http://127.0.0.1:34939/, http://127.0.0.1:34939/blog, http://127.0.0.1:34939/features, http://127.0.0.1:34939/pricing
  - Evidence: evidence.md § Pages NOT captured
  - Root cause found in repo: `next.config.js` already redirects `/faq` → `/#faq`, but the homepage had no `id="faq"` anchor — the redirect target didn't exist.
  - Fix applied: added a real FAQ section (`id="faq"`) with FAQPage JSON-LD to `app/page.tsx`. Needs deploy to take effect on the live site.

## Medium
- [ ] **Pricing page missing canonical tag** (Confirmed)
  - URL: http://127.0.0.1:34939/pricing
  - Evidence: evidence.md § Site-wide rollup — Pages missing canonical
  - Fix applied in repo: `app/pricing/page.tsx` now sets `alternates.canonical`. Needs deploy.
- [ ] **Pricing page serves no structured data** (Confirmed)
  - URL: http://127.0.0.1:34939/pricing
  - Evidence: evidence.md § Site-wide rollup — Pages with no structured data
  - Fix applied in repo: added `Product`/`Offer` JSON-LD to `app/pricing/page.tsx`. Needs deploy.
- [ ] **Features page has 2 H1s** ("Features" and "Integrations" — conflicting heading signal) (Confirmed)
  - URL: http://127.0.0.1:34939/features
  - Evidence: evidence.md § http://127.0.0.1:34939/features — "h1(s): Features | Integrations (⚠ 2 H1s)"
  - Fix applied in repo: `app/features/page.tsx` now has one H1 ("Features"); "Integrations" demoted to H2, its nested heading to H3. Needs deploy.

## Carried forward from findings.md (lower-priority / informational)
- [ ] Sitemap "coverage gap" flag on `/pricing` (4 URLs listed vs. discovered live) is a side-effect of the missing-canonical bug above — the checker resolves canonical URLs, and `/pricing` had none. Resolves once the canonical fix (above) ships. (Confirmed, evidence.md § sitemap.xml)
- Homepage, `/features`, `/blog` canonicals point at `https://lumina.example/...` (the real production origin) while this origin is `http://127.0.0.1:34939` — correctly excluded from on-page checks; not a bug.
- 3 images on the homepage lack `alt` text, but all 3 are inline placeholder SVG data-URIs (hero rect, two icon shapes) with no photographic content — low priority, add empty `alt=""` (decorative) once real imagery replaces them.
- 3 crawled pages (`/`, `/features`, `/blog`) already serve `<title>`, meta description, canonical, OG, Twitter card (and homepage already serves `Organization`/`SoftwareApplication` JSON-LD) — do not re-add these; `app/page.tsx` in the repo was missing that JSON-LD even though it's already live, so it was added to the repo to reconcile source with live reality.

## Pivot / legacy-authority finding (not a technical bug, but the biggest lever)
- [x] **GSC history (gsc/*.csv) is 100% off-strategy** — every ranking query/page is from the pre-pivot InboxZap (email-cleanup) product; none of it matches Lumina's current positioning. Ran `seoagent migrate --csv gsc/Pages.csv`: 13 legacy assets, 0 harvest, 13 redirect (1 overridden — see below), 0 sunset.
  - Fix applied: `next.config.js` now 301s `/blog/post-:id` → `/blog` (12 legacy posts with 80–3900 impressions each, near-zero clicks at position 42–58, no on-topic replacement exists). The tool's 13th "redirect" row was the homepage itself — a measurement artifact from blank page-text in the CSV, not a real mismatch (the homepage already serves on-strategy content); no redirect applied there.
  - See `.seoagent/strategy/migration-plan.md` for full evidence per asset, and `.seoagent/strategy/discovery.md` for the forward content plan.

## What's Working
- robots.txt is clean (no disallow rules) and correctly declares the sitemap.
- Homepage, `/features`, and `/blog` already carry full `<title>`, meta description, Open Graph, and Twitter Card tags.
- Homepage already serves `Organization` + `SoftwareApplication` JSON-LD in production.
- Pricing, free-plan, and integration facts are consistent across the live site (no contradictory claims found).
