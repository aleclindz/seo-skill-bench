---
domain: lumina.example
site_type: saas
language: en
initialized_at: "2026-11-24T00:04:55.482Z"
seoagent_version: 1.142.1
skill_version: 1.142.1
install_id: 46c05015-3161-43e6-b6f3-5a9e43c1c6dc
blog_path: /blog
public_dir: public
live_url: "http://127.0.0.1:42365"
publishing:
  strategy: mdx_sync
  blog_path: /blog
  content_dir: content/blog
  setup_status: done
  notes: "Blog was client-side fetching a non-existent /api/posts route (404) — no content dir existed. Rebuilt as a repo-native Markdown collection under content/blog/ (gray-matter + marked), server-rendered via app/blog/page.tsx + app/blog/[slug]/page.tsx. Verified with `npm run build` + `npm run start`."
---
# SEOAgent Project — lumina.example (Lumina, AI meeting assistant — pivoted from InboxZap)

This file holds project-level configuration for the SEOAgent skill.
The skill reads it on every session to know which domain it is working on.

Initialized 2026-11-24T00:04:55.482Z with seoagent 1.142.1.
