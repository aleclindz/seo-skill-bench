---
generated: false
discovered_at: 2026-07-07T21:46:39.856Z
row_count: 2
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
| / | yes | yes | 200 | yes | 118 | app router; FAQ section added |
| /features | yes | yes | 200 | yes | 101 | created this session (route didn't exist) |
| /pricing | yes | yes | 200 | yes | 53 | created this session (route didn't exist) |
| /blog | yes | yes | 200 | yes | — | converted from client-shell to SSR |
| /blog/how-to-write-meeting-notes-that-people-actually-read | yes | via /blog | 200 | yes | ~230 | new post |
| /blog/meeting-action-item-template | yes | via /blog | 200 | yes | ~220 | new post |
| /blog/async-standups-without-a-daily-call | yes | via /blog | 200 | yes | ~230 | new post |
| /faq | n/a | yes | 308→/#faq | — | — | redirect target (#faq) now has real content |
