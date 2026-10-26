# Brief · F54 · Date-dependent test in AssembleEvents

Fix step outside `steps.json` (no `rf.py` state). Found by the P9-3 tester on 2026-10-25: `npm --prefix app run ci`
fails since the date changed.

| Field | Value |
|---|---|
| Kind | test fix (no app behavior change) |
| Parity level | none (tests only); report any parity effect you suspect |
| Developer model | sonnet |
| Handoff folder | `migration/refactor/handoffs/F54/` |

## Facts

- `app/src/pages/AssembleEvents/AssembleEvents.test.tsx`, test "the user's hall ... a card opens AssembleDetail":
  expected `SeriesId=1210-series-1`, got `1210-series-2`, because the mock event `1210-20261025-2` starts today
  (2026-10-25). It fails the same way on reruns alone. No code changed: the test reads the real clock.

## Change

1. Find why the result depends on today (the page's date logic, the mock data dates). Do not change app behavior or
   the `src/mocks/**` fixtures (plan rule 3). Make the test deterministic: fix the clock in the test (for example
   `vi.useFakeTimers({ toFake: ['Date'] })` and `vi.setSystemTime(...)` to the date the test was written for), in the
   style of the other tests that already fix the date (grep `setSystemTime`).
2. Look for other tests that depend on the real date with the same fixtures (grep tests of pages that show
   events, meetings, milestones, notifications or "today/tomorrow" labels without a fixed clock). Run the full suite
   with a fixed future date if the setup allows it (for example `TZ` and a `vi.setSystemTime` in a temporary setup
   file, or `faketime` if installed); fix the same way every test that fails only because of the date. List them.
3. If the app itself shows a wrong result on some date (not only the test), stop with `question`.

## Gate commands for the tester

```
npm --prefix app run ci
```

## Not in this step

`migration/refactor/followups.md`, CHANGELOG: the master and the documenter.
