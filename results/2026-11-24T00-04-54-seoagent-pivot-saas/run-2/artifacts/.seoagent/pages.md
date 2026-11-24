---
generated: false
discovered_at: 2026-11-24T00:24:37.365Z
row_count: 6
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
| https://lumina.example/ | yes | — | — | — | — | app router |
| https://lumina.example/blog | yes | — | — | — | — | app router |
| https://lumina.example/features | yes | — | — | — | — | live-sitemap |
| https://lumina.example/pricing | yes | — | — | — | — | live-sitemap |
