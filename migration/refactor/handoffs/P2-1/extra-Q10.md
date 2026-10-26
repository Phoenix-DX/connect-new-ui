# Extra Q10: AssembleEvents test depended on the time of day

Status: pass

## Cause
`ASSEMBLE_MEETINGS` is built from the real day when the mock module loads (the test setup imports it first). The test
computed "next" with the UTC date of `Date.now() - 60 s`, so near midnight (UTC vs local day) it picked another meeting.

## Change (only `app/src/screens/AssembleEvents/AssembleEvents.test.tsx`)
- `vi.hoisted` freezes `Date` (`toFake: ['Date']`) at noon (local) of the real day, the same day that the mock data is
  built from. A fixed calendar date is not possible: the setup imports the mocks before the test file, so the data
  window (-5/+8 weeks) follows the real day, and the old clock would leave the window empty (tested, Past Meetings failed).
- `afterAll` calls `vi.useRealTimers()`.
- Expected SeriesId: first meeting of the user's hall with `DateTime >= NOW_DAY` (local date of the frozen instant),
  still taken from the data.

## Checks (Node 24)
- AssembleEvents tests 3 times: 2/2 pass each time.
- `npm run test`: 325 files, 1459 tests pass. `format:check`: pass. eslint on the file: clean.

## Other tests that compute an expected value from the real time (not changed)
- `app/src/shared/UBTConnect/BottomBarMenu/BottomBarMenu.test.tsx:94`: `new Date().toISOString().slice(0, 19)` as a
  client variable value; no fake clock in that file. Low risk (a "last check" value, no date-boundary assertion).
- No other `Date.now()` or `new Date()` use in tests without a fixed argument.
