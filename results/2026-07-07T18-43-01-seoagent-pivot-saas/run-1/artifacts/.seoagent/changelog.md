# Changelog

- 2026-07-07: Project initialized (domain lumina.example, live_url http://127.0.0.1:56314, site_type saas).
- 2026-07-07: Audit completed: 4 pages crawled (1 discovered but uncrawlable — `/faq` 404), 7 findings (2 critical, 1 high, 4 medium, 0 low).
- 2026-07-07: Migration plan generated from `gsc/Pages.csv`: 0 harvest / 12 redirect (corrected from 13 — homepage false-positive excluded) / 0 sunset.
- 2026-07-07: Fixed: stale InboxZap metadata in `app/layout.tsx`; blog index CSR shell (`app/blog/page.tsx` now server-rendered); missing `/features` and `/pricing` route source (repo/prod drift); missing image alt text + FAQ section/schema on homepage; dead `/faq` nav link; 12 legacy-post redirects added to `next.config.js`; sitemap extended for future posts.
