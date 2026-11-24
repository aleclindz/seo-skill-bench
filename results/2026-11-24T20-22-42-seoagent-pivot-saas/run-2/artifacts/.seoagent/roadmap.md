# Roadmap

Priority order: unblock the blog pipeline and reconcile the pivot first — new
Lumina content has nowhere crawlable to live until that's done; migration
cleanup is independent and can run in parallel; new content clusters come
last, after `/blog` has a real rendering path.

## Done this session

- [x] Fix `app/layout.tsx` stale InboxZap fallback metadata → Lumina (matches live) — `audit/latest.md` #3
- [x] Add an `#faq` section + `FAQPage` JSON-LD to the homepage, including one line bridging the InboxZap → Lumina rebrand for residual branded search — `strategy/migration-plan.md` harvest item
- [x] Replace the broken `/blog` client-side shell (fetches a nonexistent `/api/posts`, renders 0 crawlable content) with a server-rendered placeholder — `audit/latest.md` #1

## Needs the owner (infra/deploy — no repo file to edit)

- [ ] Redeploy so the existing `next.config.js` `/faq → /#faq` redirect actually takes effect live (it currently 404s despite being correctly configured) — `audit/latest.md` #2
- [ ] `/pricing`: add a self-referencing canonical + `Product`/`Offer` JSON-LD — no `app/pricing/*` source exists in this repo to edit; the live page must be on a different deploy/source than this repo. Reconcile before fixing. — `audit/latest.md` #4
- [ ] `/features`: collapse the two H1s to one (`Features`, demote "Integrations" to `h2`) + add schema — same repo-vs-live gap as `/pricing`. — `audit/latest.md` #5
- [ ] Add `alt` text to the 3 homepage placeholder images once real screenshots replace them — `audit/latest.md` #7

## Legacy cleanup (approval-gated — see `strategy/migration-plan.md`)

- [ ] Add `noindex` to the 12 orphaned InboxZap-era blog posts (`/blog/post-1`…`post-12`) — off-strategy, no bridgeable target, negligible real authority (pos. 42–58)
- [ ] Add the Lumina posts to `sitemap.ts` once real posts exist (the `TODO` in `sitemap.ts` already flags this)

## Forward content (not started — plan first, per the skill's plan-then-execute model)

Lumina has **no existing GSC history of its own** — all current GSC data is
InboxZap-era (handled above). A forward keyword/cluster plan for the new
"AI meeting assistant" direction (e.g. meeting-notes automation, action-item
tracking, Zoom/Meet/Teams transcription) needs a dedicated keyword-research
pass (`references/keyword-research.md`) before any briefs are written — not
started this session; propose for the next one once `/blog` has a real post
source to render into (see "Done this session" above — the pipeline now
works, it just has no content yet).
