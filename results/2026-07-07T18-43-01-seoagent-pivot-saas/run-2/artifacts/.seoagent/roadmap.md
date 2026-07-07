# Roadmap — lumina.example

## Shipped this session

- [x] Reconciled `app/layout.tsx` metadata to the live Lumina branding (was stale "InboxZap" copy)
- [x] Built `app/features/page.tsx` (repo had none) — single H1, canonical, OG/Twitter, `BreadcrumbList` JSON-LD
- [x] Built `app/pricing/page.tsx` (repo had none) — canonical, `Product`/`Offer` JSON-LD
- [x] Built `app/faq/page.tsx` + removed the dead `next.config.js` redirect (`/faq` → nonexistent `/#faq`) — added `FAQPage` JSON-LD
- [x] Converted `/blog` from a broken client-side fetch (empty shell, Critical finding) to server-rendered, backed by `lib/posts.ts`
- [x] Added `app/blog/[slug]/page.tsx` with `BlogPosting` JSON-LD; seeded one on-strategy post: "How to Write Meeting Notes That Actually Get Used"
- [x] Fixed `app/sitemap.ts` to include `/faq` and every blog post dynamically
- [x] Added descriptive alt text to the 3 homepage images (repo had no `<img>` elements at all — added them to match live + fixed the alt gap in the same pass)
- [x] Corrected the auto-generated migration plan (see `.seoagent/strategy/migration-plan.md` → "Analyst override") — homepage should not be redirected; 12 legacy InboxZap blog posts should be sunset, not "harvested"

## Next priorities (not done this session — session-economy scoping)

1. **Write 3–5 more on-strategy blog posts** targeting meeting-assistant / team-productivity keywords (no real GSC history yet for the new direction — start from WebSearch-driven keyword research, e.g. "meeting minutes template", "how to run effective 1:1 meetings", "async meeting recap"). Follow the pattern in `lib/posts.ts` / `app/blog/[slug]/page.tsx`.
2. **Confirm the 12 legacy blog URLs' fate with the live site owner** — this session's fix keeps them out of the sitemap/nav (already true) but does not touch the fixture server directly (out of this repo's control in this environment). In a real deploy, add `noindex` to those routes or 410 them once confirmed unused.
3. **Run `seoagent keywords --seed`** (after `seoagent login`) once the new blog content has a few weeks of GSC data, to get real volume/difficulty on new-direction keywords instead of estimating from WebSearch alone.
4. **Add an OG image asset** — `/img/og-lumina.png` is referenced everywhere in metadata but its existence in `public/` wasn't verified in this session (out of scope: no `public/img/` directory exists yet in the repo). Add the actual image file.
5. **Internal linking pass** — once more blog posts exist, run `seoagent internal-links` to check for orphans and link new posts from `/features`/`/pricing` where topically relevant.
