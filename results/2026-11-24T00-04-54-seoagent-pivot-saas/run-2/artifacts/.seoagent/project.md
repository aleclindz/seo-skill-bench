---
domain: lumina.example
live_url: "http://127.0.0.1:45161"
site_type: saas
language: en
initialized_at: "2026-11-24T00:22:08.366Z"
seoagent_version: 1.142.1
skill_version: 1.142.1
install_id: 69514263-aeb6-46c1-a2be-9fbe65826c8d
blog_path: /blog
public_dir: public
publishing:
  strategy: other
  blog_path: /blog
  setup_status: pending
  notes: "12 existing /blog/post-N pages render full server content live, but this repo has no app/blog/[slug] route and no content/blog/ dir — likely a DB/headless source not yet identified. Ask the owner how a post is actually created before generating new article briefs; do not write to any database. See audit/latest.md 'Publishing decision'."
---
# SEOAgent Project — lumina.example

This file holds project-level configuration for the SEOAgent skill.
The skill reads it on every session to know which domain it is working on.

Initialized 2026-11-24T00:22:08.366Z with seoagent 1.142.1.

Live preview served locally at http://127.0.0.1:45161; canonical/OG tags and the
GSC export both key to the production domain `lumina.example`.
