# Changelog

## 2026-11-24
- Initialized SEOAgent workspace; set `domain: lumina.example`, `site_type: ONLINE`; drafted `context.md` (Lumina = AI meeting assistant, pivoted from prior product "InboxZap").
- Ran `seoagent crawl --url http://127.0.0.1:41583` → `audit/evidence.md`, `audit/findings.md` (4 confirmed findings, 1 page uncaptured — `/faq` 404).
- Detected GSC/positioning mismatch (local CSV export in `gsc/`: all historical traffic is InboxZap-era email-cleanup queries/pages, zero overlap with live Lumina positioning) → ran mandatory migration planning.
- Ran `seoagent migrate --csv gsc/Pages.csv` and `--csv gsc/Queries.csv`; **hand-corrected** the output in `strategy/migration-plan.md` — the automated relevance scorer mismatched (scored InboxZap email-cleanup queries as "on-strategy" and the live homepage as "off-strategy") because `context.md`/`project.md` mention "InboxZap" in prose. Final plan: 1 harvest (homepage, brand-bridge) · 52 sunset (12 orphaned legacy posts + 37 associated legacy queries).
- Wrote `audit/latest.md`: 1 critical (broken `/blog` → `/api/posts` 404, 0 crawlable content, ~15k impressions stranded across 12 orphaned posts), 1 high (`/faq` dead link in every page's nav), 4 medium, 1 low.
- Fixed in-repo: `app/layout.tsx` stale InboxZap fallback metadata → Lumina (reconciled with live); `app/page.tsx` added `#faq` section + `FAQPage` JSON-LD incl. one-line InboxZap→Lumina rebrand bridge; `app/blog/page.tsx` replaced broken client-side shell with a working server-rendered placeholder.
- Deferred to roadmap (no backing repo file / needs owner infra action): `/pricing` canonical + schema, `/features` duplicate H1 + schema, `/faq` redirect not live despite correct `next.config.js` config, noindexing the 12 legacy posts.
