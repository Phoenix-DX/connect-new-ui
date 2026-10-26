# context-049 · Phase 7 done: in-scope refactor run finished; P8/P9 wait for the user (2026-10-24 evening)

## Result
- Phase 7 done: P7-0 (P7 shared rows to components/ui), P7-1 (osui to components/ui), P7-2 (Dialog family), P7-3
  (EmptyState, Skeleton), P7-4 (no merge, by evidence), P7-6 (src/shared/ placed by owner and deleted, 5 commits
  cca9b514 … 88214923), P7-5 (report `app/docs/refactor/reports/P7.md`, `app/src/components/ui/README.md`).
- The in-scope run (P6 + P7, user order 2026-10-23 evening) is complete. P8 and P9 (stretch) start only on the user's
  order.
- End state: no `src/screens/`, no `src/shared/`; arch baseline 72 rows; depcruise 222 warnings (rule-6 ceiling 55);
  coverage 89.39 %; HomeFeed 244.69/248.22 kB, Login 184.71/193.84 kB gzip.

## Decisions (who, date)
- Opus + Fable (delegated, Window 4 of `migration/refactor/auto-decisions-2026-10-22.md`): W30 (unused OSUI patterns
  kept until P9), W32 (P7-6 rows, T1–T12 option (a) with conditions; W20 amended for the lib/ rule-6 debt).

## Facts learned (evidence)
- Prefetched patches built before a main-tree pass miss the files that pass adds: re-check importers and call sites at
  apply time (AssembleSummaryCardContainer needed a P7-2 and a P7-6 main-tree pass).
- `git apply --3way` aborts the whole patch on one file it cannot merge (a deleted README that a documenter had
  edited): apply with `--exclude` and handle that file by hand.

## Files changed
- `components/ui/**` (new home of the UI layer), `lib/<module>/`, `legacy/os/cache/`, `platform/session/*`,
  `containers/DetailLayout`, `src/mocks/modules/**`, `src/test/`; `.dependency-cruiser.cjs` (shared/ rules removed).

## Open issues (user decisions; `migration/refactor/followups.md`)
- F22/F24/F26 (restored views vs OutSystems, one decision), F25 (HostSurvey back recursion, old and new), F28 (rare
  `latest` difference after unmount), F29 (4 unused OSUI patterns, at P9), F33 (NetworkWarning DOM ids).
- Debt with owners before P9-1: F35 (split module client actions; rule-6 55 may only go down), F36 (OSLink navigation),
  F37 (CacheControl → api hooks). F27 parity coverage wording; 12 routes without parity states for a manual look.

## Next
- Wait for the user. On an order: `/refactor-master phase P8` (stretch) or the follow-up decisions above.
