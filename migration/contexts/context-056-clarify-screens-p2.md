# context-056 · Clarify screens: G5, follow-up pass, P2 synthesis (2026-10-27, second session)

## Result
- All 45 units judged (`migration/clarify/INDEX.md`): 5332 rows; match 4212, partial 137, missing 166, differs 93,
  mock-only 157, n/a 556, unclear 11. Findings: 3 blockers, 25 major, 55 minor, 29 info.
- G5 done: Map, Deprecated_Calendar_PersonalEvent, zTemp_Flow (gap reports; the board reasons still hold) and
  zDEV_Directory_CommunityBusinessBlocks (44 rows, 0 findings).
- Follow-up pass (Fable): 18 of 29 unclear rows settled from TST, 9 re-checks confirmed, 4 candidate findings
  (`review/followup.md`). 11 rows need a read-only TST capture or an Orbit block pass.
- P2 written (Fable): `architecture-current.md` (645 lines, 12 sections, 3 Mermaid diagrams) and `infra-gaps.md`
  (341 lines). The gaps file holds 27 capabilities, the backend contract (165 endpoints, 24 producer modules), the
  identity chain, the native substitutes, flags, telemetry, offline, hosting, the FE work before cut-over, the set-up
  order.
- `review/aggregate.md` (`tools/aggregate.py`) feeds P2: 157 mock-only rows, 58 native-only rows, 23 decision groups.

## Decisions (who, date)
- User 2026-10-27: continue per RESUME.md. The Fable fallback rule for usage limits was added, then removed when the
  usage came back: on a limit, tell the user and wait. The 12 questions of G4 and the shared units are not answered
  yet.

## Facts learned (evidence)
- A production build has no identity provider (`platform/auth/authProvider.ts:8-10`); flags are registry defaults
  (`flags/server.ts:12-17`); `raiseToFlowHandler` lacks the BubbleCommunicationException branch and a failed TanStack
  fetch reaches no flow handler (`queryClient.ts:4-18`): App_Common F1, App_Services F2 and 5 more flows.
- The contract `api/openapi.yaml` has 165 endpoints (41 writes); 140 mocks are fictional, 25 recorded.
- Two Fable P2 agents hit the weekly usage limit mid-run and resumed from their transcripts after the reset.

## Files changed
- `migration/clarify/` (architecture-current.md, infra-gaps.md, review/followup.md, review/aggregate.md, RESUME.md,
  tools/aggregate.py, 15 reports and checklists updated, 4 G5 reports), `migration/metrics/ledger.csv`.

## Open issues
- User: 12 questions (G4, X), 4 candidate findings, permission for the 4 TST captures. Then fold the answers into
  `infra-gaps.md` §10 and `decisions.md`; P3 hand-over.

## Next
- `migration/clarify/RESUME.md`, steps 1–5.
