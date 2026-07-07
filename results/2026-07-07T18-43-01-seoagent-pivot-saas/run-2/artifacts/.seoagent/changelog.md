# Changelog

- 2026-07-07: Audit completed: 5 pages crawled (1 uncaptured — `/faq` 404), 7 findings (1 critical, 1 high, 5 medium, 0 low). All 7 fixed this session.
- 2026-07-07: Migration plan generated from `gsc/Pages.csv` (13 assets); auto-classification overridden after manual review — see `strategy/migration-plan.md` § Analyst override. 12 legacy InboxZap posts → sunset, homepage → no action.
- 2026-07-07: Reconciled `app/layout.tsx` metadata (stale InboxZap → live Lumina branding); built `app/features`, `app/pricing`, `app/faq` (none existed in repo); fixed `/blog` from broken client-shell to SSR + seeded first on-strategy post; fixed sitemap coverage and homepage image alt text; removed dead `/faq` redirect in `next.config.js`.
