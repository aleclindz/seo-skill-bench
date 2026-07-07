# Trap-hit adjudications — fleet 2026-07-02, fixture `pivot-saas`

Every trap violation flagged by the v1 pattern matcher was hand-reviewed against its
matched context. Two scorer bugs were found and fixed **before** any leaderboard was
published (installed-skill files and build outputs contaminating run text — commits
`fix(score): exclude installed skill files` and `fix(score): exclude build dirs`); all 27
runs were re-scored with the fixed scorer. The table below adjudicates every trap hit
that REMAINS after those fixes.

Verdicts: **GENUINE** = the entrant made a false claim about the fixture's live site.
**FP** = pattern matched text that is not such a claim; the mechanical score still counts
it (we publish mechanical scores and disclose FPs here rather than hand-editing scores).

| Entrant | Run | Trap | Verdict | Evidence |
|---|---|---|---|---|
| agentic-seo-skill | 1 | T1 | **GENUINE** | Recommends adding Organization/SoftwareApplication JSON-LD to the homepage, claiming "none exists today" — the live homepage serves both. |
| agentic-seo-skill | 2 | T1 | **GENUINE** | "adding organization/website json-ld" recommended as a fix; live homepage already serves Organization + SoftwareApplication. |
| agentic-seo-skill | 2 | T2 | **GENUINE** | "add a real open graph image" framed against a claim the OG setup is broken; live homepage has a complete OG + twitter:card block. |
| claude-seo | 2 | T1 | **GENUINE** | States it "added `softwareapplication` json-ld" as a net-new fix without acknowledging the live homepage already serves it. |
| seo-geo-claude-skills | 1 | T1 | **GENUINE** | "added `article`/`faqpage`/`softwareapplication` json-ld throughout" — SoftwareApplication presented as missing; live homepage already serves it (FAQPage is additionally a restricted schema type). |
| seo-geo-claude-skills | 3 | T1 | **GENUINE** | "added organization + softwareapplication json-ld" as new work despite having read the live site (it even reconciled the branding). |
| lhitches-claude-seo-skills | 1, 3 | T1 | **GENUINE** | "added organization/softwareapplication json-ld (`app/layout.tsx`)" presented as fixing an absence; live homepage already serves both. |
| lionkiii-claude-seo-skills | 2 | T1 | **GENUINE** | "added organization/website/webapplication json-ld" as a fix. |
| lionkiii-claude-seo-skills | 3 | T1 | **GENUINE** | "**no structured data at all** — added organization/website/softwareapplication json-ld" — flatly false against the live homepage. |
| seoagent | 1, 2 | T1 | **FP** | Matched text lives in `.seoagent/changelog.md` / `roadmap.md` whose content concerns **a different website entirely** (the maintainer's own seoagent.com project), imported into the workspace by the skill's cloud sync. Not a claim about the fixture. See "cross-project contamination" below. |
| seoagent | 1, 2 | T4 | **FP** | Same imported foreign-project files ("robots.txt allowing them… 403 despite" — about another site's WAF, not the fixture's robots.txt). |
| seoagent | 3 | T1 | **GENUINE** | Transcript: "added organization + softwareapplication json-ld (**there was none anywhere**)" — false against the live homepage. |
| seoagent | 3 | T4 | **FP** | Pattern matched inside `.seoagent/_archive-wrong-project-seoagent-com` — a file the skill itself created in run 3 to QUARANTINE the foreign project state it detected. The archived foreign text tripped the regex. |

## Notes

### The dominant genuine failure: repo-vs-live blindness on T1
The fixture's source repo is deliberately stale (defect D8): the repo has no JSON-LD while
the LIVE homepage serves Organization + SoftwareApplication. Adding JSON-LD to the repo
source is defensible engineering — but seven entrants asserted the schema was *absent*
("none exists today", "no structured data at all") without checking the live page, which
is exactly the verify-against-live failure T1 pre-registered. Entrants that noticed the
live site already serves the schema and framed the work as reconciling a stale repo were
not flagged.

### SEOAgent cross-project contamination (maintainer's own skill — disclosed)
SEOAgent's runs 1–2 trap hits are false positives *as trap evidence*, but they exposed a
genuine product defect: the skill's cloud sync attached the fixture workspace to the
maintainer's logged-in account and imported an unrelated project's roadmap/changelog into
the run. Runs 1–2 also consumed the full 45-minute wall-clock budget. In run 3 the skill
detected the foreign state itself and archived it (`_archive-wrong-project-seoagent-com`),
finished in 15 minutes, and scored its best detection — but run 3 also produced its one
GENUINE T1 hit. The mechanical scores for all three runs stand unmodified. Future fleets
will run this entrant logged out (which is also the correct "free tier" configuration);
the defect is reported to the maintainer (who is us — it's getting fixed).

### Scoring policy
Mechanical scores are never hand-edited. FPs are disclosed here with receipts; readers
can recompute any adjusted view from the published `score.json` files. The v1 matcher's
known limitation (regex over prose) and the roadmap fix (extraction-based claim matching)
are documented in the README.

---

# Fleet 2 addendum (2026-07-03, manifest v1.0.1, seoagent@1.72.0 logged out)

| Entrant | Run | Trap | Verdict | Evidence |
|---|---|---|---|---|
| seoagent | 2 | T1 | **GENUINE** | Transcript: "added `softwareapplication` json-ld (none existed before)" — false; the live homepage serves it. The Evidence-citation contract (v1.72.0) held in run 1 but not here: prompt-level enforcement is probabilistic. |
| seoagent | 3 | T1 | **GENUINE** | Work-log in pages.md: "added faq section + faqpage/organization/softwareapplication schema" with no acknowledgement the live page already serves Organization+SoftwareApplication. Ruled by the same standard applied to competitors in fleet 1 (bare "added X" after reading the live site = genuine). |
| (field-wide) | — | T5 | **PATTERN FIX** | T5 fired on product feature copy in pages entrants CREATED ("5 meetings / month" pricing bullets). Manifest v1.0.1 tightened T5 to require a search-metric context; all 54 runs across both fleets re-scored. |

Fleet-2 note: seoagent ran with the CLI fully logged out; zero cross-project
contamination events (the fleet-1 defect is fixed and its FP class is gone).
Remaining genuine failure mode for seoagent: asserting schema absence without
citing the live evidence — 2 of 3 runs. The durable fix is mechanical (CLI-side
recommendation filtering), not prompt-side.

---

# Cycle-3 addendum (2026-07-03, seoagent@1.74.0 PINNED, logged out)

Product changes since fleet 2: crawl origin binding (--url contract, origin recorded
in evidence, self-started dev servers demoted to "source render"), verify-recs invoked
mechanically by the sync hook, session-economy rules (PRs #692, #693 → npm 1.73.0/1.74.0).

Process receipts, in order:
- 2026-07-03T14-49 rerun: ran on a stale-cached 1.73.0 (npx resolved pre-publish
  "latest") — results committed as receipts but superseded; registry now PINS exact
  entrant versions per cycle. One run invalid (empty transcript, SIGTERM).
- 2026-07-03T17-42 rerun (pinned 1.74.0): two hung-process invalid runs auto-retried
  per the published invalid-run policy (originals preserved as run-N-invalid).
  Final: detection [81, 71, 81]→median 81%, traps [82, 55, 82]→median 82%,
  judgment [0.9, 1.0, 0.3]→median 0.9, execution 50%. Composite 77.2 → #1.

Fairness note (maintainer's own skill): SEOAgent's row reflects v1.74.0 while
competitors' rows reflect their versions as of fleet 2 (2026-07-03). Every entrant's
row is its LATEST results at its latest benchmarked version; competitor re-runs are
welcome (open an issue / PR a version bump) and the planned monthly re-run refreshes
everyone. All intermediate SEOAgent attempts — including the superseded and invalid
runs — are committed in results/ rather than discarded.

Remaining known SEOAgent gaps (not hidden by the ranking): trap avoidance is 82%,
not 100 (one run still phrased a repo-source fix as a live-site absence); execution
50% (turn-budget cap); and the recurring hung-headless-session issue (three
empty-transcript hangs across cycles) is now a product investigation item.

---

# Cycle-4 addendum (2026-07-03, seoagent@1.75.0, scorer/manifest corrections)

1.75.0 results: hangs ELIMINATED (3/3 valid runs — root cause was the per-write
npx@latest hook with no timeout; four hardening layers shipped), execution 100%,
cost down 37%. Two new scorer/manifest defects found via adjudication and fixed
uniformly (all latest runs re-scored):
- Machine-generated crawl-evidence files are now excluded from scoring text
  entirely: a rollup header ("Pages missing canonical: none — all pages pass")
  tripped trap patterns, and symmetrically, facts a tool captured but the entrant
  never REPORTED no longer count as detection. This cost SEOAgent detection
  (62%→52%) and gained it trap avoidance (73%→91%) — applied because it is
  correct, not because of its direction.
- T4 negation guard (manifest v1.0.2): praising robots.txt ("no blanket disallow
  blocking the site") no longer fires the trap.
Remaining GENUINE seoagent failure: one run's final message glossed "added
organization/softwareapplication schema that didn't exist before" (1 of 3 runs,
down from 2 of 3; the mechanical summary reduces but cannot fully constrain
final-message phrasing).

Standing: lhitches 72.9, SEOAgent 71.6 — a statistical tie at the top under the
benchmark's observed ±8 run-to-run variance. Next product lever: the audit doc
should surface EVERY rollup finding from the evidence (report what you found).

---

# Entrant addition (2026-07-04): coreyhaines31/marketingskills

46-skill general-marketing collection, ~36k stars — the most-starred entrant tested.
Result: 67.9 (#6 of 10). Zero trap violations across all three runs (nothing to
adjudicate — a genuinely clean record). Detection 57% median; judgment 4.0 median
(weakest in the field: run 1 scored J1=1, never inferring the pivot from the live
product). Breadth over depth: strong hygiene, little strategy.

---

# Cycle-5 addendum (2026-07-04, seoagent@1.76.0 PINNED, logged out)

Release: code-generated findings.md (every crawl finding surfaced mechanically),
summary carries all finding titles, verify-recs learns the "didn't exist" family.
Result: traps 100/100/73 (median 100 — the mechanical chain works), judgment
0.9/0.9/0.9 (steadiest in the field), but detection FELL to 38% median and the
composite to 67.7 (#6). One hung run auto-retried per policy.

Root cause, diagnosed from receipts: `pages_crawled: 2` in ALL THREE runs
(identical 2,985-byte findings.md). The surfacing pipeline faithfully reported a
crawl that captured only 2 of 9 discoverable pages — the crawler's concurrent
page fetches silently drop pages (a local repro showed 4/9 captured even outside
a session). Detection is now bottlenecked by crawl CAPTURE reliability, not by
reporting. Next release: per-page fetch retry, longer timeouts, sequential
fallback, and treating captured<discovered as an error to repair rather than a
number to report. The run-3-retry trap hit (72.7%) is unadjudicated as of this
note. Scores stand mechanically; SEOAgent's leaderboard row reflects 1.76.0.

Design disclosure: findings.md is machine-generated from crawl evidence but is a
user-facing deliverable (readable findings with evidence citations), so it counts
as reported output — unlike the raw evidence file, which stays excluded. Any
entrant may ship equivalent tooling; that's product capability, not scorer bait.

---

# Cycle-6 addendum (2026-07-05/06, seoagent@1.76.1, invalid-run policy extended)

Two compromised attempts and one clean rerun, all receipts committed:
- 2026-07-04T21-51 attempt: run-2 skill INSTALL failed (npm registry ETIMEDOUT —
  the skill never executed) and run-3 ran 6.9h through machine sleep. Policy
  extended (RUBRIC): install-failure runs are invalid measurements, retried once;
  reruns now execute under caffeinate.
- 2026-07-06T00-08 clean rerun (1.76.1): one hung run auto-retried per policy.
  Final: detection [52,57,62]→57%, traps [100,73,73]→73%, judgment 0.8 median,
  execution 50%. Composite 68.5 → #5.

KEY FINDING (open harness-fairness question for the next cycle): evidence
frontmatter showed `pages_captured: 0` in ALL runs while the same CLI captures
10/10 outside a session. The entrant's own subprocess fetches to the loopback
fixture server fail inside headless sessions (the model's built-in WebFetch
reaches it fine). This handicaps CLI-fetching entrants specifically — an
execution-environment boundary, not a skill defect, since real customer sites
are on the public internet. Candidate fixes under consideration: serve the
fixture on a non-loopback interface, or document subprocess network access as
a harness requirement. Scores stand mechanically as always.

---

# Cycle-7 addendum (2026-07-07, HARNESS FIX + seoagent rerun) — READ THE FAIRNESS NOTE

## Root-cause correction of the cycle-6 KEY FINDING

The cycle-6 hypothesis ("subprocess fetches to the loopback fixture server fail
inside headless sessions; the model's built-in WebFetch reaches it fine") was
WRONG. The real cause was in the harness itself: `run.mjs` hosts the fixture's
live-site HTTP server in its own Node process, then ran the 45-minute headless
session via `spawnSync` — which blocks the event loop for the entire run. The
server accepted TCP connections (kernel backlog) but never wrote a response, so
EVERY in-session fetch of the live site timed out, from every tool, for every
entrant. Nothing about sandboxing or the loopback interface was ever involved.

Evidence:
- Receipt signature: `network error: Request timed out after 15000ms` —
  connection accepted, zero bytes served (a block would refuse, not hang).
- The ONLY healthy crawl on record (2026-07-03 run-1: 11 pages, port 4530)
  went through a manually-started, separate-process `serve.mjs`. Every
  in-process ephemeral-port run captured 0–2 pages.
- 20-second repro: `startServer()` + `spawnSync('sleep 8')` → concurrent curl
  times out; the same fetch succeeds instantly once the loop is free.
- Post-fix verification: mid-session curl of the live rerun answered 200 in
  4 ms where the identical request previously hit the 15 s timeout.

Fix (`be8bd02`): the session is spawned asynchronously (same contract —
stdout/stderr capture, 45-min SIGTERM, empty-transcript invalid-run retry),
leaving the event loop free to serve. Applies to every future run of every
entrant via run.mjs/fleet.sh.

## seoagent@1.76.1 rerun under the fixed harness (2026-07-07T18-43-01)

Detection 81.0 / 81.0 / 81.0 → median 81% (was 57%); traps 100 / 63.6 / 100 →
median 100%; judgment 0.8 / 0.8 / 0.9 → median 0.8; execution 50%.
Composite 82.4 → #1. No invalid runs; no retries needed.
- The crawl now captures 4 of 5 discovered pages in every run; the single
  "uncaptured" page is `/faq — HTTP 404`, which is the fixture's PLANTED
  defect (sitemap lists a 404 page) being observed, not a capture failure.
- Run-2 trap hits (T4 robots-fix w1, T5 invented-demand w3 → 63.6%) stand
  mechanically and are unadjudicated; the median is unaffected.

## FAIRNESS NOTE (blocking issue for any public claim about this cycle)

SEOAgent is currently the ONLY entrant measured under the fixed harness. All
nine other leaderboard rows were measured while the live site was unreachable
in-session — i.e., under conditions that suppressed any entrant's live-fetch
capability, and plausibly detection scores generally. The current #1 ranking
is therefore NOT an apples-to-apples comparison, and given the disclosed
conflict of interest (the maintainer enters its own skill), it must not be
publicized until the FULL FLEET is rerun under the fixed harness
(`./harness/fleet.sh pivot-saas 3`). Until then, treat every non-SEOAgent row
as "measured under harness defect, rerun pending".
