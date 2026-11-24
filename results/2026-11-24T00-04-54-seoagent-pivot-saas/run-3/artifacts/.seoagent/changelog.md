# Changelog — lumina.example

## 2026-11-24

- Drafted `context.md`: documented the InboxZap → Lumina pivot (name, type, audience, facts with sources, topics to avoid).
- Ran live crawl against http://127.0.0.1:40195 → `audit/evidence.md`, `audit/findings.md` (4 confirmed findings; 1 page, `/faq`, uncaptured at crawl time).
- Ran `seoagent migrate --csv gsc/Pages.csv --csv gsc/Queries.csv`, then hand-corrected 7 false-positive "harvest" rows (text-overlap artifact) to `redirect`/brand-bridge. Final: 0 harvest · 40 query-level redirect · 12 legacy blog posts redirected via `next.config.js`. See `strategy/migration-plan.md`.
- Fixed stale root-layout metadata (`app/layout.tsx` still said "InboxZap — Clean Your Inbox in Minutes").
- Reconciled repo source with the live site: added `app/features/page.tsx`, `app/pricing/page.tsx` (existed live, had no repo file), fixed `/features`' duplicate H1, added missing canonical + JSON-LD on `/pricing`, added JSON-LD on `/features`.
- Added an FAQ section (`id="faq"`, FAQPage schema) to the homepage so the existing `/faq` → `/#faq` redirect resolves to real content, and added Organization + SoftwareApplication JSON-LD matching what was already live but missing from the repo's `layout.tsx`/`page.tsx`.
- Converted `/blog` from a client-side fetch to a non-existent `/api/posts` endpoint into a server-rendered, repo-native content collection (`content/blog/`) — this was the "DB/headless blog with no repo files" trap from `references/publishing.md`; fixed per its default recommendation (git-based content collection). `publishing.setup_status: done` in `project.md`.
- Added `app/blog/[slug]/page.tsx` (per-post metadata + Article/FAQPage JSON-LD) and included blog posts in `app/sitemap.ts` (previously static-only, 0 posts).
- Keyword research (WebSearch, anonymous — no DataForSEO account) + cluster built for the new direction: `competitors.md`, `keywords.md`, `strategy/discovery.md`, `strategy/clusters/ai-meeting-assistant.md`.
- Pillar drafted: `ai-meeting-assistant` (content/blog/ai-meeting-assistant.ts, ~1,900 words).
- Verified all of the above with `npx next build` (clean) and a local production-server smoke test of `/`, `/blog`, `/blog/ai-meeting-assistant`, `/features`, `/pricing`, the `/faq` redirect, the 12 legacy `/blog/post-N` redirects, and `/sitemap.xml`.
- `roadmap.md` written with the next content batch (2 sub-pillars + 2 long-tails) and two open owner decisions flagged.
