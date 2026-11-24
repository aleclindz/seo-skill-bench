# Business Context

- **Name:** Lumina
- **Type:** ONLINE (B2B SaaS, no physical location)
- **Audience:** Teams and operations/product leads at companies running frequent Zoom/Meet/Teams meetings who need notes, decisions, and action items captured automatically
- **Industry:** Productivity / meeting intelligence software
- **Location:** N/A (ONLINE-only)
- **Description:** Lumina is an AI meeting assistant that joins calls, records and transcribes them, and turns them into summaries with decisions and action items — positioned as "never take meeting notes again." The site previously operated under a different brand/product, **InboxZap** (an email-cleanup / inbox-zero tool), and still carries that product's Google Search Console ranking history and several orphaned blog posts — see `.seoagent/strategy/migration-plan.md` for how that legacy equity is being handled.

# Facts

- Free tier: for teams up to 5 — source: app/page.tsx (homepage hero / meta description), http://127.0.0.1:41583/
- Pro plan: $12 per seat per month — source: http://127.0.0.1:41583/pricing (meta description)
- Enterprise: custom plans — source: http://127.0.0.1:41583/pricing (meta description)
- Unlimited transcription on every plan — source: http://127.0.0.1:41583/pricing (meta description)
- Joins calls on Zoom, Meet, and Teams — source: app/page.tsx ("How Lumina works")
- Integrations: Slack and Notion — source: http://127.0.0.1:41583/features (meta description)
- Connect your calendar once; Lumina auto-joins invited meetings — source: app/page.tsx

# Writing Instructions

- Audience is B2B operations/team leads evaluating meeting-productivity tools — write for that reader, not consumers.
- Do not write about or reference "InboxZap" email-cleanup use cases as if they were Lumina's current product — that positioning is retired; see Topics to Avoid.

# Reference URLs

- http://127.0.0.1:41583/ — homepage positioning and voice
- http://127.0.0.1:41583/features — feature/integration list
- http://127.0.0.1:41583/pricing — plan and pricing facts

# Topics to Avoid

- InboxZap-era topics (bulk email deletion, unsubscribing from newsletters, Gmail/Outlook inbox cleanup, "inbox zero") — off-strategy for the current Lumina product; handled only as legacy-equity redirects in the migration plan, never as new content.

# Content Tone

professional

# Additional Notes

Pivot in progress: the live site, repo code, and GSC history are not yet fully reconciled. `app/layout.tsx` still carries stale InboxZap-branded fallback metadata (title/OG/image) even though every page actually renders Lumina branding live — treat the repo as the thing to fix to match the live site, not vice versa.
