# Business Context

- **Name:** Lumina (Lumina Labs, Inc.)
- **Type:** ONLINE-only SaaS
- **Audience:** Teams and operations/managers at B2B companies who run recurring meetings (Zoom/Meet/Teams) and want automatic notes and follow-up
- **Industry:** AI productivity / meeting intelligence software
- **Location:** none (fully remote, no geo-targeting relevant)
- **Description:** Lumina is an AI meeting assistant that joins calls, records and transcribes them, and delivers a summary with decisions and action items. Lumina Labs previously operated as **InboxZap**, an email-cleanup tool (bulk delete, unsubscribe, inbox zero) — the company has pivoted products and rebranded. Legacy InboxZap content/branding still lingers in parts of the codebase and is the top SEO risk (see Facts and Migration below).

# Facts

- Tagline: "Never take meeting notes again" — source: app/page.tsx
- Joins Zoom, Google Meet, and Microsoft Teams calls automatically — source: app/page.tsx, live /features
- Speaker-labeled transcripts, searchable, 30+ languages — source: live /features (http://127.0.0.1:35413/features)
- AI summaries: decisions, open questions, blockers, next steps — source: live /features
- Integrations: Slack, Notion, Confluence, CRM transcript attach — source: live /features
- Free plan: $0, up to 5 teammates, unlimited meetings, 30-day transcript history, basic summaries — source: live /pricing (http://127.0.0.1:35413/pricing)
- Pro plan: $12/seat/month, unlimited history, action-item routing, Slack & Notion integrations, priority support — source: live /pricing
- Enterprise plan: custom pricing, SSO/SAML, data residency, custom retention, dedicated success manager — source: live /pricing
- Every plan includes unlimited recording/transcription, no per-minute fees — source: live /pricing
- Legal entity / copyright: "Lumina Labs, Inc." — source: app/layout.tsx footer, live homepage footer
- **Legacy product:** InboxZap — bulk-delete old emails, unsubscribe from newsletters, reach inbox zero — source: app/layout.tsx `<head>` metadata (still live in repo source, describes the old product, not Lumina)
- Blog post URLs live (post-1..post-12) are legacy InboxZap articles (inbox zero, bulk delete emails, gmail storage, unsubscribing) — source: gsc/Pages.csv + gsc/Queries.csv, confirmed live at http://127.0.0.1:35413/blog/post-1

# Writing Instructions

- Write for an operations/team-lead audience evaluating a meeting-notes tool — practical, outcome-focused (time saved, nothing falls through the cracks), not hypey.
- New content must use "Lumina" / AI meeting assistant framing. Never reuse InboxZap framing (inbox zero, email cleanup) except explicitly to retire/redirect it.

# Reference URLs

- http://127.0.0.1:35413/ — homepage (current Lumina positioning, source of truth for voice)
- http://127.0.0.1:35413/features
- http://127.0.0.1:35413/pricing

# Topics to Avoid

- Do not write new content framed around email inbox management / inbox zero / newsletter unsubscribing — that is the retired InboxZap product, not Lumina.

# Content Tone

professional

# Additional Notes

This is a product-pivot / rebrand situation. GSC data (./gsc/) reflects the OLD product (InboxZap) almost entirely — top queries are "inboxzap", "inbox zero method", "bulk delete emails", etc. The live site has already repositioned most pages (/, /features, /pricing) around Lumina with correct metadata and schema, but: (1) app/layout.tsx in the repo still ships InboxZap `<title>`/description/OG tags — a redeploy from current repo source would regress the live site's branding; (2) the blog section is still 100% legacy InboxZap content and is not in the sitemap; (3) the blog index page renders via client-side fetch to a `/api/posts` endpoint that 404s live, so /blog is an empty shell to anything that doesn't execute JS (and arguably to users). Treat the InboxZap→Lumina transition as the central SEO narrative: protect/harvest what little relevant equity exists, fix the technical regressions, and build new Lumina-first content depth-first.
