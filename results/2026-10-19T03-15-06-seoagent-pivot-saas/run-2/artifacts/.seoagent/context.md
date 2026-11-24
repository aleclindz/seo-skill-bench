# Business Context

- **Name:** Lumina (publisher: Lumina Labs, Inc.)
- **Type:** ONLINE-only (SaaS, no physical/local presence)
- **Audience:** Teams at startups/SMBs — ops, product, sales, and customer success leads who run a lot of recurring meetings
- **Industry:** B2B SaaS — AI meeting assistant / transcription & productivity software
- **Location:** None (no geo-targeting)
- **Description:** Lumina joins Zoom/Meet/Teams calls, records and transcribes them, and auto-generates summaries with decisions and action items for the team.

# Pivot note (read before any strategy work)

This site **pivoted** from a previous product, **InboxZap** (an email-cleanup / inbox-zero tool), to **Lumina** (AI meeting assistant). The rebrand is live on the homepage, `/features`, and `/pricing`, but:
- `app/layout.tsx` metadata (site-wide `<title>`/description/OG defaults) is still InboxZap's.
- All 12 published blog posts (`/blog/post-1` … `/blog/post-12`) are legacy InboxZap content (inbox zero, Gmail storage, bulk-delete, unsubscribe, filters) — zero relevance to meeting transcription.
- `gsc/Pages.csv` + `gsc/Queries.csv` show real historical traffic/impressions almost entirely on those legacy blog posts for InboxZap-era queries (e.g. "inboxzap", "gmail storage full", "inbox zero method"), not on the new product pages.
- This is a **migration** situation: harvest/redirect/sunset the legacy content rather than discarding its equity, per `references/migration-planning.md`.

# Facts

- Free plan: $0, up to 5 teammates, unlimited meetings, 30-day transcript history, basic summaries — source: app/page.tsx (homepage copy), /pricing (live)
- Pro plan: $12 per seat / month — unlimited history, action-item routing, Slack & Notion integrations, priority support — source: /pricing (live)
- Enterprise plan: custom pricing — SSO/SAML, data residency, custom retention, dedicated success manager — source: /pricing (live)
- Joins Zoom, Google Meet, and Microsoft Teams calls automatically — source: /features (live), app/page.tsx
- Speaker-labeled transcripts in 30+ languages, searchable — source: /features (live)
- AI summaries: decisions, blockers, open questions, next steps — source: /features (live)
- Integrations: Slack and Notion — source: /pricing meta description (live)
- No per-minute transcription fees on any plan — source: /pricing (live)

# Writing Instructions

- Write for ops/product/sales/CS leads evaluating a meeting-assistant tool, not for the old InboxZap "email cleanup" audience.
- Do not reuse or extend any InboxZap-era topic (inbox zero, Gmail storage, bulk email delete, unsubscribe tools) in new content — only use that old content for redirect/harvest decisions, never as a style reference.

# Reference URLs

- (none yet)

# Topics to Avoid

- Email inbox management / inbox-zero / Gmail storage cleanup topics — off-brand leftover from the pre-pivot product (InboxZap), not Lumina's business.

# Content Tone

professional

# Additional Notes

Rebrand is partial: site-wide metadata defaults (layout.tsx) and all blog content still reference the old InboxZap product/brand name and topics. Treat any InboxZap-branded page or metadata found live as a rebrand bug, not a style choice.
