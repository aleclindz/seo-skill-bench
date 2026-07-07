---
domain: lumina.example
origin: http://127.0.0.1:52525
source_render: false
generated_at: 2026-07-07T22:10:33.761Z
findings: 7
source_evidence: .seoagent/audit/evidence.md
note: >-
  MACHINE-GENERATED findings report derived from the live-crawl evidence.
  The audit (audit/latest.md) BUILDS ON this file — it must carry every
  finding below forward (adding GSC context and prioritization on top),
  never re-derive or truncate the list. Do not hand-edit; re-run
  `seoagent crawl` to regenerate.
---

# Technical findings — lumina.example (from the live crawl)

Derived by code from `.seoagent/audit/evidence.md` (crawled http://127.0.0.1:52525 at 2026-07-07T22:10:33.761Z). Every finding below is **Confirmed** against that evidence. Reporting every one of these is non-negotiable — session economy trims bookkeeping, never findings.

## [Critical] 1 page serves a client-rendered shell — crawlers see no content

**Confirmed** · Evidence: evidence.md § http://127.0.0.1:52525/blog — client-rendered shell

The server HTML for these pages is (near-)empty — a "Loading…" placeholder or a body with no in-body links. Search engines index what the initial HTML contains, so these pages look blank to crawlers.

Affected URLs:
- http://127.0.0.1:52525/blog

**Why it matters:** A 200 OK with an empty body is treated as a soft 404 and gets deindexed; a content listing rendered this way also hides every page it links to from crawl discovery.

**Suggested fix:** Server-render or pre-render these routes (SSR/SSG/ISR) so the content and links are present in the initial HTML.

## [High] 1 discovered page could not be crawled — evidence is incomplete

**Confirmed** · Evidence: evidence.md § Pages NOT captured

These URLs were discovered by the crawl (sitemap, nav links, or repo routes) but did not return a usable 2xx response even after retries and a sequential re-fetch. The crawl is INCOMPLETE: every other finding in this report is a lower bound, and no check result exists for these pages — an uncaptured page must never be treated as passing.

Affected URLs:
- http://127.0.0.1:52525/faq (HTTP 404)

**Why it matters:** Linked or sitemap-listed URLs that error waste crawl budget, break user journeys, and (if they used to rank) bleed accumulated authority — and every page the crawl could not capture is a blind spot in this audit.

**Suggested fix:** Fix or 301-redirect each URL (remove permanently dead ones from the sitemap and internal links); if the failure was network/timeout, re-run `seoagent crawl` to complete the evidence before treating the audit as final.

## [Medium] 4 crawled pages are missing from sitemap.xml (4 URLs listed vs 4 pages discovered live)

**Confirmed** · Evidence: evidence.md § sitemap.xml — 4 URLs

These pages are live and reachable (the crawl fetched them via nav links or discovery) but sitemap.xml does not list them.

Affected URLs:
- http://127.0.0.1:52525/
- http://127.0.0.1:52525/features
- http://127.0.0.1:52525/pricing
- http://127.0.0.1:52525/blog

**Why it matters:** Pages absent from the sitemap depend entirely on link discovery, get crawled less often, and signal an unmaintained sitemap to search engines.

**Suggested fix:** Regenerate the sitemap to include every canonical public URL (prefer a framework-generated sitemap so it stays current), then resubmit it to Search Console.

## [Medium] 1 page has no canonical tag in the server HTML

**Confirmed** · Evidence: evidence.md § Site-wide rollup — Pages missing canonical

The server HTML of these pages contains no `<link rel="canonical">`.

Affected URLs:
- http://127.0.0.1:52525/pricing

**Why it matters:** Without a self-referencing canonical, URL variants (query strings, trailing slashes, http/https, www) can split ranking signals across duplicates.

**Suggested fix:** Add a self-referencing `<link rel="canonical" href="{full URL}">` to each listed page.

## [Medium] 1 page has multiple H1s

**Confirmed** · Evidence: evidence.md § Site-wide rollup — Pages with multiple H1s

These pages serve more than one `<h1>` in the document, sending conflicting topic signals.

Affected URLs:
- http://127.0.0.1:52525/features

**Why it matters:** A single clear H1 tells crawlers (and AI answer engines) what the page is about; multiple H1s dilute that signal.

**Suggested fix:** Keep exactly one `<h1>` per page and demote the others to `<h2>`/`<h3>`.

## [Medium] 3 pages serve no structured data (zero JSON-LD)

**Confirmed** · Evidence: evidence.md § Site-wide rollup — Pages with no structured data (zero JSON-LD)

The server HTML of these pages contains no `<script type="application/ld+json">` block at all.

Affected URLs:
- http://127.0.0.1:52525/features
- http://127.0.0.1:52525/pricing
- http://127.0.0.1:52525/blog

**Why it matters:** Structured data powers rich results and gives AI search engines an unambiguous machine-readable summary of the page; pages without it compete on prose alone.

**Suggested fix:** Add the JSON-LD type matching each page (Organization/WebSite on the homepage, Article/BlogPosting on posts, etc.) — only on the pages listed here; other crawled pages already serve schema.

## [Medium] 3 images are missing alt text across 1 page

**Confirmed** · Evidence: evidence.md § Site-wide rollup — Images missing alt

These `<img>` tags carry no `alt` attribute at all (decorative `alt=""` counts as present and is not flagged).

Affected URLs:
- http://127.0.0.1:52525/ — 3 images (data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='640' height='360'%3E%3Crect width='640' height='360' fill='%23e8ecf7'/%3E%3C/svg%3E, data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96'%3E%3Ccircle cx='48' cy='48' r='40' fill='%236c8cff'/%3E%3C/svg%3E, data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96'%3E%3Crect x='8' y='8' width='80' height='80' rx='16' fill='%23ffb26c'/%3E%3C/svg%3E)

**Why it matters:** Missing alt text costs image-search visibility and accessibility, and is one of the most common automated-audit dings.

**Suggested fix:** Add descriptive alt text to each listed image (start with the srcs shown).

## Already present on the live site — never recommend adding these

The crawl confirms the following already exist in the live server HTML. If the repo source lacks any of them, the **repo source is stale — the live page already serves it; reconcile the source** with what is live. Never phrase these as "add X".

- http://127.0.0.1:52525/ — <title>, meta description, canonical, Open Graph tags, Twitter card, JSON-LD schema (Organization, SoftwareApplication)
- http://127.0.0.1:52525/features — <title>, meta description, canonical, Open Graph tags, Twitter card
- http://127.0.0.1:52525/pricing — <title>, meta description, Open Graph tags, Twitter card
- http://127.0.0.1:52525/blog — <title>, meta description, canonical, Open Graph tags, Twitter card
