# context-050 · Refactor user-decision batch done: F25, F22-26, F33, F29 (2026-10-24 night)

## Result
- All open user decisions of context-049 are decided and done on `refactor/architecture`:
  F28 (no change), F29 9b88da40, F29-stack a4bf8a61, F33 3a99a42d, F25 08ff1d0c, F22-26 66970db6.
- Each fix step had a developer, tester (ci, parity visual --all 64/64 on both references) and documenter; handoffs in
  `migration/refactor/handoffs/{F29,F29-stack,F33,F25,F22-26}/`; entries in `app/docs/refactor/CHANGELOG.md`.
- P0–P7 stay 127/127. Not run: P8 (2 steps) and P9 (4 steps), stretch, only on the user's order.

## Decisions (who, date)
- User, 2026-10-24: F28 keep the new behavior; F29 "delete when nothing uses them"; then "ok tôi duyệt hết" for
  F22/F24/F26 option C, F25 option A, F33 merge, stack.json cleanup (ADR-16). Advisors Opus + Fable gave C and A.

## Facts learned (evidence)
- OutSystems back handling (Service Studio MCP on DEV, same as TST code): `NavigationHandler.controller.js:903-917`
  blocks a POP while the screen being left is still in the document; the port lacked it (F25). Details:
  `migration/refactor/handoffs/F25/facts.md`.
- OutSystems restores a view on back with no call and no time limit; time-based caching only where OutSystems has a
  TTL (F37).
- `migration/metrics/ledger.csv` has mixed CRLF/LF lines: never rewrite it in Python text mode (use `ledger.py add`).
- `git worktree` + symlinked `node_modules`: `git add -A` stages the root symlink; reset it before a patch.
- Rows F35–F38 of `followups.md` have 3 cells, not 5 (pre-existing table defect).

## Files changed
- `platform/navigation/navigationGate.ts`; `components/ui/NetworkWarning`; `containers/SupperMeetingDetails`;
  `pages/{MilestoneDetail,AssembleDetail,MyBookmarks}`; 4 OSUI patterns and 2 packages deleted; `migration/stack.json`.

## Open issues
- New: F39 (AssembleDetail hall OnParametersChanged, user decision), F40 (left before the answer: port calls again).
- Debt before P9-1: F35, F36, F37; tool F27; watch F11, F17; other open rows in `migration/refactor/followups.md`.

## Next
- Wait for the user: `/refactor-master phase P8` or `phase P9`, or decisions on F39/F40.
