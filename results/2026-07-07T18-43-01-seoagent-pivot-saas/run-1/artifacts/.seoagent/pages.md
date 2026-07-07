---
generated: false
discovered_at: 2026-07-07T18:57:45.717Z
row_count: 6
---

# Pages

Inventory of pages discovered in your codebase. Re-running `seoagent init`
or `seoagent refresh` re-scans and merges in newly-added pages without
touching rows you or the audit have edited. `In sitemap` is refreshed from
the live sitemap; `Status` / `Rendered` / `Word count` are filled by
`seoagent refresh --crawl` (a live fetch of each page). This file syncs to
the cloud on login.

| URL | In sitemap | In nav | Status | Rendered | Word count | Notes |
|---|---|---|---|---|---|---|
| / | yes | yes | 200 | yes | 118 | app router |
| /features | yes | yes | 200 | yes | 101 | app router — added this session (repo/prod drift) |
| /pricing | yes | yes | 200 | yes | 53 | app router — added this session (repo/prod drift) |
| /blog | yes | yes | 200 | yes (fixed) | 3 (server shell before fix) | app router — was client-rendered shell, now server component |
| /faq | no | no (fixed) | 404 | — | — | dead; nav now links `/#faq`, `next.config.js` redirects `/faq` → `/#faq` |

Note: `error` rows from an automated `refresh --crawl` pass were dropped from this table — that pass crawled `https://lumina.example` (unresolvable placeholder domain) rather than the session's live origin `http://127.0.0.1:56314`. The rows above reflect the verified crawl in `.seoagent/audit/evidence.md`, captured against the real live origin.
