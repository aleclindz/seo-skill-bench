# Changelog

[2026-10-19] Project configured: domain http://127.0.0.1:35413, site_type saas, context.md drafted (Lumina, pivoted from InboxZap).
[2026-10-19] Audit completed: 5 pages discovered (4 captured, 1 incomplete), 8 findings (3 critical, 1 high, 3 medium, 1 low).
[2026-10-19] Migration plan: 0 harvest · 13 redirect (12 actioned, 1 disregarded as a tool artifact) · 0 sunset across 13 legacy InboxZap assets → .seoagent/strategy/migration-plan.md.
[2026-10-19] Fixed: stale InboxZap metadata in app/layout.tsx (critical — would have regressed live branding on next deploy).
[2026-10-19] Fixed: /blog client-rendered shell + dead /api/posts dependency — rebuilt as a repo-native markdown content collection (content/blog/, lib/posts.ts, app/blog/[slug]/page.tsx).
[2026-10-19] Fixed: added canonical + Product JSON-LD to /pricing; added single-H1 fix + full metadata to /features; added canonical + Organization/SoftwareApplication JSON-LD + alt text to homepage images.
[2026-10-19] Applied 301 redirects for 12 legacy InboxZap blog posts → /blog in next.config.js.
[2026-10-19] Strategy discovery: 1 cluster (ai-meeting-notes), 6 articles planned, 1 pillar published.
[2026-10-19] Publishing strategy set: mdx_sync, content_dir content/blog, setup_status done.
[2026-10-19] Pillar drafted + published: ai-meeting-notes (~1,900 words), tracked via `seoagent content track`.
[2026-10-19] Verified build: `npm run build` + local `next start` smoke test confirmed metadata, JSON-LD, blog listing/post rendering, and both redirect sets (legacy posts + /faq) all work. Nothing deployed — live site unchanged until this repo ships.
