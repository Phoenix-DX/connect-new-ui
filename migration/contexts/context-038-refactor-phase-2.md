# context-038 · Refactor Phase 2 (walking skeleton) done overnight (2026-10-22)

## Result
- P2-1 to P2-4 committed: ad2d23e, aedc20e, 612208e, 7605ebe. Extra commit 1bb105f (test clock, Q10).
- HouseholdDetails is the pilot page: `pages/HouseholdDetails/`, domain `api/household/`, container
  `containers/HouseholdDetails/`, props-only components in `components/household/`, `DetailLayout`.
- Every step: ci pass; parity 64/0 against OutSystems and self on port 5174; bundle within +5 percent.
- New guide `app/docs/guides/page-template.md`; pilot report `app/docs/refactor/reports/P2-4-pilot.md`.

## Decisions (who, date)
- User, 2026-10-22 19:41: run all phases overnight; Opus decides, Fable when Opus is not sure; a final table.
- Q10 (Opus): fix the time-of-day test in its own commit. M1 (master): accept 50 paths in P2-3.
- G-P2-4 (Opus B medium, Fable B high): confirm with changes to the template; code moves deferred as F1 to F5.
- All rows: `migration/refactor/auto-decisions-2026-10-22.md` (Window 3).

## Facts learned (evidence)
- `AssembleEvents.test.tsx` depended on the time of day; the mocks build meetings from the real day (1bb105f).
- The parity command of P2-4 wrote over the pilot report: keep step reports apart from `reports/<step>.md`.
- `git commit` after `git add <file>` also commits paths that an agent staged with `git mv`: use
  `git commit --only <path>` for a single-file commit.

## Files changed
- See the commits. Carry-over list: `migration/refactor/followups.md` (F1 to F3 in P3-1, F4 in P4, F5 before P6).

## Open issues
- The user reviews Q10, M1 and G-P2-4. Profile's preview flow has no parity state (F5).

## Next
- P3-1 runs with F1 to F3.
