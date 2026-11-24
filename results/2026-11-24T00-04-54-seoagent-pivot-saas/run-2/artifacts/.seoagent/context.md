# Business Context

- **Name:** Lumina (Lumina Labs, Inc.)
- **Type:** ONLINE-only (SaaS, no physical location)
- **Audience:** Teams/knowledge workers who run a lot of video calls (product, sales, customer success) — need automatic notes, decisions, and action-item tracking.
- **Industry:** AI meeting assistant / productivity SaaS
- **Location:** n/a (online-only)
- **Description:** Lumina joins Zoom/Meet/Teams calls, records and transcribes them, then turns the transcript into a structured recap (decisions, blockers, action items) routed to the people who own them.

## Pivot note (important — read before any keyword/content work)

This site **pivoted from a previous product, "InboxZap"** (an email-inbox-cleanup tool:
bulk-delete emails, unsubscribe from newsletters, reach "inbox zero") **to "Lumina"**
(AI meeting assistant). Evidence:
- `app/layout.tsx` still ships the old default `<title>`/description/OG image for
  "InboxZap — Clean Your Inbox in Minutes" (source: app/layout.tsx).
- All 12 existing `/blog/post-*` pages are InboxZap-era content (inbox zero, Gmail
  filters, bulk-delete emails, Outlook cleanup, etc.) — none mention Lumina or meetings.
- `.seoagent/../gsc/Queries.csv` and `Pages.csv` show real historical Search traffic
  almost entirely on InboxZap-era terms (branded "inboxzap" ranks #4.1 with real clicks;
  the 12 old blog posts carry thousands of impressions each on inbox/email queries, but
  rank page 4-6 and get near-zero clicks).
- `package.json` name is `lumina-landing` — the rebrand is the current/forward direction.

**Implication for strategy:** do not write new content as if InboxZap never existed.
Treat the InboxZap blog archive as equity to triage (redirect what's salvageable to a
Lumina-relevant angle or sunset what isn't), and build the new keyword strategy around
Lumina's actual product (AI meeting notes/transcription/action items), not inbox
management. See `.seoagent/strategy/` migration plan once run.

# Facts

- Free plan: $0, up to 5 teammates, unlimited meetings, 30-day transcript history, basic summaries — source: app/page.tsx (pricing page content fetched live, see audit evidence)
- Pro plan: $12 per seat/month — unlimited history, action-item routing, Slack & Notion integrations, priority support — source: live /pricing page (http://127.0.0.1:45161/pricing)
- Enterprise plan: custom pricing — SSO/SAML, data residency, custom retention, dedicated success manager — source: live /pricing page
- Every plan includes unlimited recording and transcription, no per-minute fees — source: live /pricing page
- Joins Zoom, Google Meet, and Microsoft Teams calls automatically — source: live /features page (http://127.0.0.1:45161/features)
- Speaker-labeled transcripts in 30+ languages, searchable — source: live /features page
- Integrates with Slack, Notion, Confluence, and CRM tools — source: live /features page

# Writing Instructions

- Lead with the product's actual job: automatic meeting notes, transcription, and action-item routing. Never write new content framed around inbox/email cleanup (that was the prior product, InboxZap).
- Keep claims grounded in the Facts above; don't invent integrations or limits.

# Reference URLs

- https://lumina.example/ (homepage, live at http://127.0.0.1:45161/)
- https://lumina.example/features
- https://lumina.example/pricing

# Topics to Avoid

- Do not write new articles pitching InboxZap-style "inbox zero" / email-cleanup use cases as if they were Lumina's product — Lumina does not do email management.

# Content Tone

professional

# Additional Notes

Nav/footer link to `/faq` on every page, but `/faq` 404s live even though
`next.config.js` defines a redirect to `/#faq` — the homepage has no `#faq`
anchor either way. This is a broken link on every page of the site (see audit).
The `/blog` index is a client component that fetches `/api/posts`, which 404s —
the blog listing page currently renders empty/broken for visitors and likely
for crawlers. Individual `/blog/post-N` pages do render server-side, but there
is no corresponding route file in this repo (`app/blog/[slug]` doesn't exist),
so the live server is serving them from a source this repo doesn't show —
treat that as a DB/headless-style content source per the publishing protocol,
not as a file-based blog, until confirmed otherwise with the owner.
