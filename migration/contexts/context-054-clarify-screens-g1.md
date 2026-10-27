# context-054 · Clarify screens: plan, P0 tooling, wave G1 (2026-10-27)

## Result
- New work on branch `clarify-screens`: verify the React app against the OutSystems model (DEV, MCP) by UI flow,
  independent of `migration/screens/**`. Plan `migration/clarify/PLAN.md`; briefs `AGENT.md`, `READER.md`, `JUDGE.md`.
- P0: MCP dump → `migration/clarify/.dump/espace.json` (gitignored); `tools/flow_pack.py` (32 flow packs + `_shared`),
  `app_index.py`, `kb_index.py`, `tst_source.py`, `collect.py` (INDEX.md), `agent_cost.py` (token-waste stats).
- G1 done: 9 flow reports (`flows/<Flow>/report.md` + `checklist.json`), 1131 rows: match 894, partial 50, missing 51,
  differs 28, mock-only 25, n/a 71, unclear 12. Findings: 1 blocker (ContactUsDetails signed-out form), 9 major.
  26 questions for the user (`INDEX.md` §3). Orchestrator review: `review/G1-review.md`.
- 41 TST scripts fetched read-only (standing rule), logged in `knowledge/runtime-sources.md`.

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
- 26 G1 questions wait for the user. G2–G5 and `_shared` not started. Live MCP review pass not run (TST checks done).

## Next
- User answers the G1 questions and decides the G2 way of work; then G2 (7 directory flows) with reader + judge.
