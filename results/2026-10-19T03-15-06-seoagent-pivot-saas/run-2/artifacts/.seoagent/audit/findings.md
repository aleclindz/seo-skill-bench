---
domain: lumina.example
origin: http://127.0.0.1:45469
source_render: false
generated_at: 2026-10-19T03:30:54.268Z
findings: 4
source_evidence: .seoagent/audit/evidence.md
note: >-
  MACHINE-GENERATED findings report derived from the live-crawl evidence.
  The audit (audit/latest.md) BUILDS ON this file — it must carry every
  finding below forward (adding GSC context and prioritization on top),
  never re-derive or truncate the list. Do not hand-edit; re-run
  `seoagent crawl` to regenerate.
---

# Technical findings — lumina.example (from the live crawl)

Derived by code from `.seoagent/audit/evidence.md` (crawled http://127.0.0.1:45469 at 2026-10-19T03:30:54.268Z). Every finding below is **Confirmed** against that evidence. Reporting every one of these is non-negotiable — session economy trims bookkeeping, never findings.

## [High] 1 discovered page could not be crawled — evidence is incomplete

**Confirmed** · Evidence: evidence.md § Pages NOT captured

**Check:** `crawl_incomplete`

These URLs were discovered by the crawl (sitemap, nav links, or repo routes) but did not return a usable 2xx response even after retries and a sequential re-fetch. The crawl is INCOMPLETE: every other finding in this report is a lower bound, and no check result exists for these pages — an uncaptured page must never be treated as passing.

Affected URLs:
- http://127.0.0.1:45469/faq (HTTP 404)

**Why it matters:** Linked or sitemap-listed URLs that error waste crawl budget, break user journeys, and (if they used to rank) bleed accumulated authority — and every page the crawl could not capture is a blind spot in this audit.

**Suggested fix:** Fix or 301-redirect each URL (remove permanently dead ones from the sitemap and internal links); if the failure was network/timeout, re-run `seoagent crawl` to complete the evidence before treating the audit as final.

## [Medium] 1 crawled page is missing from sitemap.xml (4 URLs listed vs 1 page discovered live)

**Confirmed** · Evidence: evidence.md § sitemap.xml — 4 URLs

**Check:** `sitemap_coverage_gap`

These pages are live and reachable (the crawl fetched them via nav links or discovery) but sitemap.xml does not list them.

Affected URLs:
- http://127.0.0.1:45469/pricing

**Why it matters:** Pages absent from the sitemap depend entirely on link discovery, get crawled less often, and signal an unmaintained sitemap to search engines.

**Suggested fix:** Regenerate the sitemap to include every canonical public URL (prefer a framework-generated sitemap so it stays current), then resubmit it to Search Console.

## [Medium] 1 page has no canonical tag in the server HTML

**Confirmed** · Evidence: evidence.md § Site-wide rollup — Pages missing canonical

**Check:** `canonical_missing`

The server HTML of these pages contains no `<link rel="canonical">`.

Affected URLs:
- http://127.0.0.1:45469/pricing

**Why it matters:** Without a self-referencing canonical, URL variants (query strings, trailing slashes, http/https, www) can split ranking signals across duplicates.

**Suggested fix:** Add a self-referencing `<link rel="canonical" href="{full URL}">` to each listed page.

## [Medium] 1 page serves no structured data (zero JSON-LD)

**Confirmed** · Evidence: evidence.md § Site-wide rollup — Pages with no structured data (zero JSON-LD)

**Check:** `json_ld_missing`

The server HTML of these pages contains no `<script type="application/ld+json">` block at all.

Affected URLs:
- http://127.0.0.1:45469/pricing

**Why it matters:** Structured data powers rich results and gives AI search engines an unambiguous machine-readable summary of the page; pages without it compete on prose alone.

**Suggested fix:** Add the JSON-LD type matching each page (Organization/WebSite on the homepage, Article/BlogPosting on posts, etc.) — only on the pages listed here; other crawled pages already serve schema.

## 3 crawled pages are excluded from search on purpose

These pages were captured by the crawl but are held out of the page-scoped findings above: the site itself excludes them from Google, so on-page gaps on them cost no traffic. Listed here so nothing is dropped silently — if one of these should be indexable, that is the finding.

**3 pages — canonical points at another origin:**
- http://127.0.0.1:45469/
- http://127.0.0.1:45469/features
- http://127.0.0.1:45469/blog

## Already present on the live site — never recommend adding these

The crawl confirms the following already exist in the live server HTML. If the repo source lacks any of them, the **repo source is stale — the live page already serves it; reconcile the source** with what is live. Never phrase these as "add X".

- http://127.0.0.1:45469/ — <title>, meta description, canonical, Open Graph tags, Twitter card, JSON-LD schema (Organization, SoftwareApplication)
- http://127.0.0.1:45469/features — <title>, meta description, canonical, Open Graph tags, Twitter card
- http://127.0.0.1:45469/pricing — <title>, meta description, Open Graph tags, Twitter card
- http://127.0.0.1:45469/blog — <title>, meta description, canonical, Open Graph tags, Twitter card
