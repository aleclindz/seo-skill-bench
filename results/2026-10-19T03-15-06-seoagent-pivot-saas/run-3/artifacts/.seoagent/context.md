# Business Context

- **Name:** Lumina (Lumina Labs, Inc.)
- **Type:** ONLINE-only (no physical/local presence; no geo-keyword relevance)
- **Audience:** Teams and operations/PM roles at companies with meeting-heavy workflows — the buyer is a team lead or ops lead evaluating AI note-taking/meeting-assistant tools, not a consumer.
- **Industry:** AI meeting assistant / productivity SaaS
- **Location:** N/A — global, online-only
- **Description:** Lumina joins Zoom/Google Meet/Microsoft Teams calls, records and transcribes them, and auto-generates a summary with decisions and action items. Free for teams up to 5; paid tiers add integrations and history.

## ⚠️ Pivot in progress — read before any keyword/content decision

This product used to be **InboxZap**, an email-inbox-cleanup tool (bulk-delete old email, unsubscribe from newsletters, reach "inbox zero"). It has pivoted to **Lumina**, an AI meeting assistant — a different audience and a different intent entirely. Two consequences:

1. **All historical organic equity (`gsc/Queries.csv`, `gsc/Pages.csv`) is for the old InboxZap/email-cleanup product.** Every ranking query (`inboxzap`, `bulk delete emails`, `gmail storage full`, `unsubscribe from newsletters`, etc.) and every page with impressions (`/blog/post-1` through `/blog/post-12`) is legacy and off-strategy for Lumina. Do not treat this data as validated demand for Lumina keywords — it isn't. See `.seoagent/strategy/migration-plan.md` for the harvest/redirect/sunset treatment of each legacy asset.
2. **Leftover InboxZap branding in the repo is a defect, not a fact.** Where source metadata still says "InboxZap" (e.g. historical `app/layout.tsx`), that is stale and must be corrected to Lumina — never cited as a current product fact.

# Facts

- Free plan: $0, up to 5 teammates, unlimited meetings, 30-day transcript history, basic summaries — source: http://127.0.0.1:43051/pricing
- Pro plan: $12 per seat/month, unlimited history, action-item routing, Slack & Notion integrations, priority support — source: http://127.0.0.1:43051/pricing
- Enterprise plan: custom pricing, SSO/SAML, data residency, custom retention, dedicated success manager — source: http://127.0.0.1:43051/pricing
- Every plan includes unlimited recording and transcription, no per-minute fees — source: http://127.0.0.1:43051/pricing
- Joins Zoom, Google Meet, and Microsoft Teams calls automatically — source: http://127.0.0.1:43051/features
- Speaker-labeled transcripts, searchable, in 30+ languages — source: http://127.0.0.1:43051/features
- Pushes action items to Slack, syncs recaps to Notion and Confluence, attaches transcripts to CRM — source: http://127.0.0.1:43051/features

# Writing Instructions

- Write for team leads and ops/PM buyers evaluating meeting-assistant tools — practical, workflow-focused, not consumer-casual.
- Lead with what Lumina automates (recording, transcription, summaries, action items), not generic "AI" hype.

# Reference URLs

- http://127.0.0.1:43051/ (homepage)
- http://127.0.0.1:43051/features
- http://127.0.0.1:43051/pricing

# Topics to Avoid

- Do not write new content targeting InboxZap/email-cleanup keywords (inbox zero, bulk delete emails, unsubscribe from newsletters, gmail storage) — that audience is not Lumina's buyer. Legacy pages ranking for these are handled via migration (harvest/redirect/sunset), not new content.

# Content Tone

professional

# Additional Notes

Business name and pivot context inferred from the live homepage/features/pricing pages plus the repo's leftover InboxZap metadata and `gsc/` export — not yet confirmed by the owner. Flag for owner review.
