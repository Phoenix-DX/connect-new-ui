# context-048 · Phase 6 done: group G6, P6-end, F23; P7 prefetched (2026-10-24 afternoon)

## Result
- Group G6 done (A, B-Shared, 7 pages, C; gate W33 confirmed, report `app/docs/refactor/reports/P6-G6.md`) and P6-end
  done (`src/screens/` deleted; `src/shared/` stays until P7-6, W20). Phase 6 summary in `app/docs/refactor/CHANGELOG.md`
  links the six group reports. Last gate: parity strict --all 64/64 on both references, arch baseline 69 rows,
  HomeFeed 244.46/248.22 kB, Login 184.48/193.84 kB.
- F23 (3 timing-dependent tests) fixed in a test-only commit f54801c4.
- Prefetched and waiting as patches in `migration/refactor/prefetch/` (git-ignored, built on the chain of the pending
  steps): P7-0, P7-1, P7-2 (W21 trim done), P7-3, P7-4 (no code change), P7-6 as 5 part patches (`P7-6-part1..5`).

## Decisions (who, date)
- Opus + Fable (delegated, Window 4 of `migration/refactor/auto-decisions-2026-10-22.md`): W30 the 4 unused OSUI
  patterns stay in components/ui/ (P9 decision); W32 the P7-6 move-map rows, T1–T12 option (a) with conditions (W20
  amended: lib/ starts with about 55 rule-6 depcruise edges, owned and non-growing; split by data owner before P9-1);
  W33 group G6 confirmed.

## Facts learned (evidence)
- Documenters that rewrite move-map.csv with a global replace change other rows: prompts now say "change only the rows
  of this step and check the diff" (caught twice, reverted before the commit).
- A tester can misread W23 from the page-template summary: compare with the old port at HEAD (ConnectShare finding
  withdrawn after that comparison).
- Parity covers 50–53 of 64 routes; 12 routes have no states (manual review list in the CHANGELOG Phase 6 summary; F27).

## Files changed
- `pages/` of the 7 G6 routes; `api/share` (new); `components/bookmark`; removal of `src/screens/` and its fallbacks
  (`app/screens.ts`, `mocks/handlers.ts`, `.dependency-cruiser.cjs`, `refactor_parity.py`).

## Open issues
- One user-decision batch for later: F22/F24/F26 (restored views vs OutSystems), F25 (HostSurvey back recursion), F28
  (rare `latest` difference after unmount): `migration/refactor/followups.md`. F27 tool line; docs_gen.py still writes
  `src/screens/`; 4 code comments still name the old path.

## Next
- `/refactor-master continue`: P7-0, P7-1, P7-2, P7-3, P7-4 (patches ready), P7-6 (5 commits), P7-5 (report); then stop
  (P8/P9 only on the user's order).
