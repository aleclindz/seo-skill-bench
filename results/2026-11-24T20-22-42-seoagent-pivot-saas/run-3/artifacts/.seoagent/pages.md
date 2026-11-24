---
generated: false
discovered_at: 2026-11-24T20:43:04.957Z
row_count: 4
---

# Pages

Inventory of pages discovered in your codebase. Every `seoagent sync`,
`seoagent init` and `seoagent refresh` re-scan and merge in newly-added
pages without touching rows you or the audit have edited. `In sitemap` is
refreshed from the live sitemap; `Status` / `Rendered` / `Word count` are
filled by `seoagent refresh --crawl` (a live fetch of each page). This file
syncs to the cloud on login.

| URL | In sitemap | In nav | Status | Rendered | Word count | Notes |
|---|---|---|---|---|---|---|
| / | no | — | — | — | — | app router |
| /blog | no | — | — | — | — | app router |
| https://127.0.0.1:44883/ | yes | — | — | error | — | app router |
| https://127.0.0.1:44883/blog | yes | — | — | error | — | app router |
