# Roadmap — lumina.example

## This session (done)

- [x] Fixed critical: blog client-shell → SSR (`app/blog/page.tsx`, `app/blog/[slug]/page.tsx`, `lib/posts.ts`)
- [x] Fixed high: `/faq` redirect target (`#faq`) now exists with real content + `FAQPage` schema
- [x] Created missing `/features`, `/pricing` routes (existed live, absent from source)
- [x] Reconciled `app/layout.tsx` metadata from stale InboxZap branding to Lumina
- [x] Added canonical to `/pricing`; fixed duplicate H1 on `/features`; added JSON-LD to `/features`, `/pricing`, `/blog`
- [x] Sitemap now includes `/features`, `/pricing`, and all blog posts
- [x] Migration plan: 301-redirected 12 legacy InboxZap-era posts to `/blog` (`next.config.js`) — see `strategy/migration-plan.md`
- [x] Published 3 new on-brand posts (meeting notes, action items, async standups) to replace the redirected legacy content

## Next session — content plan (depth-first, ICP: team leads / ops / PM/sales/CS managers)

### meeting-productivity cluster [in progress — 3 of ~8 written]
- [x] LONG  how-to-write-meeting-notes-that-people-actually-read
- [x] LONG  meeting-action-item-template
- [x] LONG  async-standups-without-a-daily-call
- [ ] PILLAR  ai-meeting-assistant-guide          — "ai meeting assistant" (category pillar, links out to the sub-pillars below)
- [ ] SUB     meeting-transcription-accuracy      — "meeting transcription software"
- [ ] SUB     zoom-vs-meet-vs-teams-recording     — "how to record zoom meetings" / "record google meet"
- [ ] LONG    meeting-recap-email-template        — "meeting recap email"
- [ ] LONG    reduce-meeting-overload             — "too many meetings" (mirrors the old "email overload" query cluster's intent, now correctly targeted)

### Technical / ongoing
- [ ] ~~The `og:image`/`twitter:image` tags are correctly present (Confirmed live) and point at `/img/og-lumina.png`, but no image file exists at `public/img/`. Export and add the actual asset — not in scope this session (no image tooling available).~~ → CORRECTION (verify-recs): the live page (http://127.0.0.1:50902/) already serves Open Graph tags + a Twitter card per evidence.md — this was a repo-source reconciliation, not a net-new addition.
- [ ] Re-run `seoagent crawl --url http://127.0.0.1:50902` after next deploy to confirm the live site now matches source (layout/features/pricing/blog fixes) and to re-check the sitemap-domain-mismatch note in `audit/latest.md`.
- [ ] Connect Google Search Console via SEOAgent Cloud (`seoagent login`) once available — the CSV export is a point-in-time snapshot; live GSC data would let `seoagent migrate` re-check redirect performance and catch new legacy-URL impressions.
- [ ] Monitor the 12 legacy-post 301s in GSC for redirect errors / lost impressions over the next few weeks.
