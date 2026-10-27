# context-054 · Clarify screens: plan, P0 tooling, waves G1, G2 and G3 (2026-10-27)

## Result
- New work on branch `clarify-screens`: verify the React app against the OutSystems model (DEV, MCP) by UI flow,
  independent of `migration/screens/**`. Plan `migration/clarify/PLAN.md`; briefs `AGENT.md`, `READER.md`, `JUDGE.md`.
- P0: MCP dump → `migration/clarify/.dump/espace.json` (gitignored); `tools/flow_pack.py` (32 flow packs + `_shared`),
  `app_index.py`, `kb_index.py`, `tst_source.py`, `collect.py` (INDEX.md), `agent_cost.py` (token-waste stats).
- G1 done: 9 flow reports (`flows/<Flow>/report.md` + `checklist.json`), 1131 rows: match 894, partial 50, missing 51,
  differs 28, mock-only 25, n/a 71, unclear 12. Findings: 1 blocker (ContactUsDetails signed-out form), 9 major.
  26 questions for the user (`INDEX.md` §3). Orchestrator review: `review/G1-review.md`.
- 41 TST scripts fetched read-only (standing rule), logged in `knowledge/runtime-sources.md`.
- G2 done (7 directory flows, reader Sonnet + judge Opus, Fable for Directory_Locality): 1186 rows, 0 blocker,
  5 major, 7 questions; `review/G2-review.md` (TST checks, cost table). Board: 5 DEV-only screens got `skip` rows (V8).
- G3 done (6 content flows; Fable judged Bookmarks and Legacy_MyNotificationsFlow): 705 rows, 5 major (4 in
  MessageDetail: share card, Orbit/Assemble buttons, adaptive card, private-message behaviour), 11 questions;
  `review/G3-review.md`. Packs of the 11 block-only flows generated for `_shared`.

## Decisions (who, date)
- User 2026-10-27: plan approved (D1–D6 as recommended); report format approved; questions answered per wave;
  G1 finishes with the old brief, fixes from G2; no Sonnet trial for whole flows; model split: Sonnet reads and
  writes, Opus judges, Fable first when hard; every decision from the source of truth, no assumption; after each
  wave a token-waste report for the user.

## Facts learned (evidence)
- DEV has 84 screens in 32 UI flows; 5 are DEV only without a board row (NotificationDetails, OneSchoolGlobalCarousel,
  OrbitAdminMilestoneDetail, OrbitAdminMilestones, PassportScan). App_Notifications on DEV is ahead of TST (13 rows).
- The harness logs a Bash call a second time (same id) when it injects `cd`; not a second run.
- Cost per Opus flow agent: 303k–512k tokens, 109–152 calls; 30–50 calls per agent build the deliverables in pieces.

## Files changed
- `migration/clarify/**` (new), `migration/runtime-sources/` (+41), `migration/knowledge/runtime-sources.md`,
  `migration/metrics/ledger.csv`, `.gitignore`.

## Open issues
- 26 G1, 7 G2 and 11 G3 questions wait for the user (user: answers by id). `_shared`, G4, G5 not started. Live MCP review pass not run (TST checks done).

## Next
- `_shared` (block-only flows, shared actions, library blocks) after G3 (user); then G4 (legacy events), G5, P2 synthesis.
