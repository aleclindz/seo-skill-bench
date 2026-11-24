---
domain: lumina.example
origin: http://127.0.0.1:45469
audited_at: 2026-10-19T00:00:00Z
pages_audited: 5
pages_captured: 4
critical: 0
high: 1
medium: 3
low: 0
note: >-
  Built on .seoagent/audit/findings.md (the live crawl's machine-generated
  findings) — every finding there is carried forward below, none truncated.
  GSC-driven migration findings are tracked separately in
  strategy/migration-plan.md and summarized here.
---

# Audit — lumina.example

## High
- [ ] **Crawl incomplete — `/faq` returns HTTP 404.** (Confirmed)
  - Evidence: evidence.md § Pages NOT captured — `http://127.0.0.1:45469/faq` (HTTP 404)
  - Note: `next.config.js` in this repo already defines a `/faq → /#faq` permanent redirect. The live deploy is not applying it — a deploy-sync gap, not a missing source fix.
  - Recommendation: confirm the live deployment is building from this branch/commit; redeploy if stale.

## Medium
- [ ] **`/pricing` has no `<link rel="canonical">` in server HTML.** (Confirmed)
  - Evidence: evidence.md § http://127.0.0.1:45469/pricing — "canonical: (none in server HTML)"
  - Recommendation: add a self-referencing canonical to `/pricing`. No route for `/pricing` exists in this repo (`app/` has no `pricing/` directory) — flag to whoever owns that page's source; it is not editable from this checkout.

- [ ] **`/pricing` serves zero JSON-LD structured data.** (Confirmed)
  - Evidence: evidence.md § http://127.0.0.1:45469/pricing — "JSON-LD @types present: (none)"
  - Recommendation: add a `Product`/`Offer` schema block once the page's real source is located (same ownership gap as above).

- [ ] **`/features` has two `<h1>` elements** ("Features" and, mid-page, "Integrations" — the second should be `<h2>`). (Confirmed)
  - Evidence: live fetch of `http://127.0.0.1:45469/features` — second `<h1>Integrations</h1>` inside `<main>`, confirmed independently of the crawler's rollup (evidence.md § Site-wide rollup — Pages with multiple H1s).
  - Recommendation: demote the second `<h1>` to `<h2>`. No `app/features` route exists in this repo to edit directly.

## Caveat — one machine-generated finding does not hold up against direct re-check
`findings.md` (`sitemap_coverage_gap`) claims `/pricing` is missing from `sitemap.xml`. A direct fetch of `http://127.0.0.1:45469/sitemap.xml` in this session shows **4 URLs including `/pricing`** — so this specific finding is a tool-comparison artifact, not a real gap. Reporting it here per "never truncate findings," but it should not be acted on. (Likely origin: the sitemap's `<loc>` values use the `https://lumina.example` canonical domain while the crawl ran against `http://127.0.0.1:45469`, and the matching logic mishandled that one URL.)

## What's Working
- Homepage already serves `Organization` + `SoftwareApplication` JSON-LD, full OG/Twitter tags, and a self-referencing canonical.
- `/features` and `/blog` both have correct titles, meta descriptions, canonicals, and OG/Twitter tags.
- robots.txt is clean — no accidental `Disallow` rules blocking anything.
- All pages pass on meta description (none missing).

## Not a technical-SEO finding, but the single biggest lever on this site
See `.seoagent/strategy/migration-plan.md` and the changelog: 12 published blog posts carry real historical GSC impressions (80–3,900 each) for a completely different, pre-pivot product (InboxZap, email cleanup) with near-zero relevance to Lumina (AI meeting assistant). That mismatch — not a missing meta tag — is the main organic-traffic problem on this site today.
