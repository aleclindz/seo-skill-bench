---
domain: "127.0.0.1:44883"
site_type: saas
language: en
initialized_at: "2026-11-24T20:41:29.769Z"
seoagent_version: 1.143.0
skill_version: 1.143.0
install_id: 25924c8c-8bfa-4b97-a48c-c88e2a45bbb4
blog_path: /blog
public_dir: public
site_source: repo
live_url: "http://127.0.0.1:44883"
publishing:
  strategy: mdx_sync
  blog_path: /blog
  content_dir: content/blog
  setup_status: done
  notes: "Converted /blog from a broken client-side fetch of a non-existent /api/posts endpoint to a server-rendered route reading .md files from content/blog (lib/posts.ts). 2026-11-24."
---
# SEOAgent Project — Lumina

This file holds project-level configuration for the SEOAgent skill.
The skill reads it on every session to know which domain it is working on.

Initialized 2026-11-24T20:41:29.769Z with seoagent 1.143.0.

**Pivot in progress:** this repo is "Lumina", an AI meeting assistant for teams.
Google Search Console history (`gsc/`) is almost entirely from the site's
previous product, "InboxZap" (an email-cleanup / inbox-zero tool). See
`strategy/migration-plan.md` for the harvest/redirect/sunset disposition of
that legacy authority.

**Repo/live drift:** the live site serves `/features`, `/pricing`, and 12
individual `/blog/post-N` pages with no corresponding source file anywhere in
this checkout, and `app/layout.tsx` carried stale "InboxZap" default metadata
that the live homepage was NOT using. Treat this repo as behind (in places)
and decoupled (in others) from whatever actually builds production — see
`audit/latest.md` § Biggest Issue before trusting repo-only reasoning.
