# context-039 · Refactor Phase 3 (cycles and folder directions) done (2026-10-23)

## Result
- P3-1 to P3-4 committed: 183070b, fe827c9, 247f265, 599ed88. Phase report: `app/docs/refactor/reports/P3.md`;
  entries in `app/docs/refactor/CHANGELOG.md`.
- `src/` has 0 import cycles (baseline 1). depcruise: 0 errors, 210 warnings; 5 new warn rules report 0.
- `shared/UBTConnect` no longer imports `screens/` or `app/`; HouseholdDetails container files moved to
  `containers/` (F1 to F3 done).
- Every step: ci pass; parity strict 64/0 on both references (port 5174); bundle within +5 percent.

## Decisions (who, date)
- Q11 (Opus and Fable split, master took the more careful option): stories and tests are outside the cycle and folder
  rules. U1 (user, 2026-10-22 23:14): P6 page steps run 3 to 4 in parallel in git worktrees.
- All rows: `migration/refactor/auto-decisions-2026-10-22.md` (Window 3).

## Facts learned (evidence)
- The run stopped from 23:25 to 05:30: the master ended the turn to wait for a completion notification that came only
  with the next user message. Fix: act on the hand-back report at once (refactor-master SKILL, a225294).
- EventDetail/default gave one self "pixel 1" difference in the P3-4 full run and passed on reruns (F6).

## Files changed
- See the commits. Carry-over list: `migration/refactor/followups.md` (F4 in P4-1, F5 before P6, F6 in P6).

## Open issues
- The user reviews Q10, M1, G-P2-4, Q11 and U1. jscpd +1 clone, +5 lines against the baseline (not traced).

## Next
- P4-1 with F4 (one platform hook for the standard state shape).
