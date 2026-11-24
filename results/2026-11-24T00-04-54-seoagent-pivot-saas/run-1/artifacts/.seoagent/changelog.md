# Changelog

[2026-11-24] Live crawl: 5 pages discovered, 4 captured (1 incomplete — /faq 404), 4 technical findings written to audit/findings.md.
[2026-11-24] Migration plan: InboxZap -> Lumina. 1 brand-equity harvest, 12 legacy blog posts redirected to /blog, 2 queries sunset. See strategy/migration-plan.md (hand-curated over the mechanical `seoagent migrate` output — see its frontmatter note for why).
[2026-11-24] Fixed: app/layout.tsx stale InboxZap title/description/OG image reconciled to match the live Lumina state; added Organization + SoftwareApplication JSON-LD (already live, missing from repo).
[2026-11-24] Fixed: homepage FAQ nav link now points at /#faq; added a real FAQ section (id="faq") with FAQPage JSON-LD; added alt text to 3 previously-unlabeled SVG images; added a "(formerly InboxZap)" footer credit for branded-search continuity.
[2026-11-24] Added: app/features/page.tsx and app/pricing/page.tsx — these routes existed on the live site but not in the repo (would have 404'd on a deploy from this source). Fixed the features page's duplicate H1 (demoted "Integrations" to H2) and added canonical + Product/Offer JSON-LD to pricing (both confirmed missing in evidence.md).
[2026-11-24] Fixed (critical): /blog was a client component fetching a nonexistent /api/posts route (404) — rendered as an empty client-side shell with no server HTML, no links, and no indexable content. Rebuilt as a repo-native Markdown collection (content/blog/, lib/posts.ts, app/blog/page.tsx, app/blog/[slug]/page.tsx) with per-post metadata, canonical, OG, and Article/FAQPage JSON-LD.
[2026-11-24] Fixed: sitemap.ts now includes /pricing (previously missing live) and every blog post dynamically (previously a TODO stub).
[2026-11-24] Added: next.config.js redirect for legacy /blog/post-:id URLs to /blog (301), consolidating decaying InboxZap-era post authority per the migration plan.
[2026-11-24] Strategy: 1 cluster (ai-meeting-notes), 3 articles planned, all 3 drafted this session (pillar + 2 sub-pillars).
[2026-11-24] Pillar drafted: ai-meeting-notes (~2900 words).
[2026-11-24] Sub-pillar drafted: meeting-minutes-template (~1500 words).
[2026-11-24] Sub-pillar drafted: action-items-from-meetings (~1450 words).
[2026-11-24] Verified: `npm run build` + `npm run start` — all routes 200 (or correct 301), sitemap includes all posts, features has 1 H1, pricing has canonical + JSON-LD, legacy post URLs redirect to /blog.
