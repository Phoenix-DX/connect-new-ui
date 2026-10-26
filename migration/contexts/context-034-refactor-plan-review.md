# context-034 · Review of the refactor plan and plan v2 (2026-10-22)

## Result
- Review of `app/docs/architecture/refactor-plan.md` (draft of 2026-10-22) as a principal front-end engineer: score 6/10.
  Strong: parity levels, self-parity reference, codemods, branch rules. Weak: the estimate of 35 days (the real need is
  2 to 3 times more). Also weak: a container split without a criterion, 3 state systems not addressed, CSS Modules for
  the legacy UI. The draft has no flag design and no auth design.
- New file `app/docs/architecture/refactor-plan-review.md`: findings, flag design, session state machine, decisions
  R1 to R8.
- New file `app/docs/architecture/refactor-plan-v2.md`: 10 phases, steps with Goal / Do / Check / Commit for an agent,
  about 51 days plus reserve. Both files pass `ste_lint` with 0 errors. The draft got a pointer to both files.

## Decisions (who, date)
- User, 2026-10-22: R1 to R8 as recommended: R1 (b), R2 (b), R3 (b), R4 (b), R5 (a), R6 (a) for now, R7 (b), R8 (b).
- User, 2026-10-22: do not start. The user says when to start (D5 open).

## Facts learned (evidence)
- Counts by `grep` (2026-10-22):

  | Files | What they do |
  |---|---|
  | 71 | call `callAction` directly |
  | 24 | use TanStack Query |
  | 53 | use `useViewState` |
  | 27 | use `memoryCache` |
  | 50 outside `shell/` | read client variables (46 names) |
  | 32 | read flags |

- 28 `ScreenBlock_*` files and 10 shared blocks have more than 530 lines; the largest is 1,077 lines
  (`screens/EventBooklet/components/ScreenBlock_EventBooklet.tsx`).
- `eslint.config.js` has no boundary or import rule. No CSS Module exists in `src/`.
- Flags in the original are per-user server checks (`knowledge/feature-flag-helpers.md`); in the React app they are
  build defaults plus `?ff=` overrides (`lib/flags.ts`).

## Files changed
- Added: `app/docs/architecture/refactor-plan-review.md`, `app/docs/architecture/refactor-plan-v2.md`, this context.
- Changed: `app/docs/architecture/refactor-plan.md` (2 lines: pointer to the review and plan v2), `INDEX.md`.
- No code file changed.

## Open issues
- D5 open. D3 addition: `eslint-plugin-import-x` and `tsx` need the user's yes (ask at P0-3).
- R6 (PIN verification in production) needs the security owner; not needed before the BFF phase.

## Next
- When the user says to start: P0-1 of `refactor-plan-v2.md`, on `refactor/architecture`.
