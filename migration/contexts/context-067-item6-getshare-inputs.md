# context-067: item 6, the inputs of DataActionGetShare (2026-10-28)

## Result
- Item 6 of the user's list. Evidence: the MCP first, then the live TST code and the runtime
  (`migration/clarify/review/item6-getshare-inputs.md`, S1-S5). The Fable design was approved by the user
  (`item6-solution.md` §9). An Opus agent built it with tests first (`migration/clarify/builds/item6-getshare-inputs.md`).
- DataActionGetShare of ShareObjectDetail_ExtendedShare sends the four block variables, as TST. The block state keeps
  all 13 attributes of UI_UpdateItem. The UI does not change.
- Gates: `npm run ci` green (686 files, 4441 tests, no "Errors" line); parity sweep 64 of 64 routes, 0 diffs.
- Item 5 follow-up: the user kept the TST blur rule and the placement class after a close (Q1 (a), Q2 (a)).

## Decisions (user, 2026-10-28)
- Item 6 design (a): send all four variables; full UI_UpdateItem record in the state. O3 (a): the flag-off block
  Share_UI.ShareObjectDetail stays out of scope (PD9).

## Facts learned (evidence)
- A data action sends every screen or block variable in `screenData.variables`, except attributes with
  `ignoreForServer` (the data action records). See `OutSystems.js` W533101 and W258000.
- On the wire, a Long Integer is text (`longIntegerToText`, NullIdentifier = `"0"`) and a Date is `toISODate()`
  (W262541).

## Files changed
- `app/src/api/share/` (types, mapper, repository, index, mapper test); MessageDetail share hook, state and tests.
- `migration/clarify/review/item6-*.md`, `builds/item6-getshare-inputs.md`, `builds/README.md`, `RESUME.md`; row
  Legacy_MyNotificationsFlow-130 (rechecked); ledger rows of items 2-6.

## Next
- Item 7 of the user's list: the user's decisions (Photobook move log, `infra-gaps.md` §10.4 and §11).
