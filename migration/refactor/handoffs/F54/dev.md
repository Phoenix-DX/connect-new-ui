# Dev report · F54 · Date-dependent test in AssembleEvents

Status: pass

## Cause
The test already freezes the clock at noon of the real day. The page asks for meetings from "now" with the full time
(`EventList_RangeFrom = <day>T12:00:00`). The expected value used only the day (`m.DateTime >= NOW_DAY`). The mock
programme has meetings at 06:00 and 12:00 on some weekdays, so on a day with a 06:00 meeting (2026-10-25 had
`1210-20261025-2`) the test expected a meeting that the screen had correctly left out. The app is right; only the
test expectation was wrong.

## Change
`app/src/pages/AssembleEvents/AssembleEvents.test.tsx`: `NOW_DAY` became `NOW_STAMP` (`<day>T12:00:00`), used in the
comparison. No app code, no fixtures changed.

## Other date-dependent tests
Ran the full suite with a temporary setup file (fake Date, `FAKE_NOW`) on 2026-10-25..31 and 2026-12-01. The temporary
files were deleted. The fake Date also causes 66 failures in `src/api/**` that exist at every date (call-log
artifacts of the harness, not of the real suite); the lists were identical across 2026-10-25..31, so no other test
depends on the date there. One LegacyPopupMenu failure at 2026-12-01 was a flake under load (passes alone).
Limit: the mock programme is built from the real clock at load, so dates beyond real today + ~8 weeks
(Dec 10 onwards) fail AssembleEvents only because of the harness (data stays at real-date window); not an app issue.

## Files changed
- app/src/pages/AssembleEvents/AssembleEvents.test.tsx (changed)

## Quick checks
typecheck pass; eslint pass; vitest src/pages/AssembleEvents 48/48 pass.
Parity effect: none.
