## Result
status: pass
summary: The mock now returns 8 unread rows (rows 1-3 and 15-19 of the capture), as in the fresh capture. Tests updated (2 to 8 unread). Parity clean in all 5 states.

## Files changed
app/src/pages/MessageList/mocks.ts
app/src/pages/MessageList/MessageList.test.tsx

## Commands run
npm --prefix app run typecheck → exit 0
vitest run src/pages/MessageList → 6 files, 54 tests passed
eslint on the 2 changed files → no output
npm --prefix app run arch → no violations
route.py parity MessageList → default: 0; filter: 0; loading: 0; offline: 0; search: 0 (clean)

## Deviations from the brief
none

## Questions for the user
none
