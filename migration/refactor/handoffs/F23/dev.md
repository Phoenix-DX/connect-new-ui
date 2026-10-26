# F23 dev report

Status: pass (test-only; the flakes did not reproduce here, even under 24 busy loops, so the causes come from reading the code)

## Files changed
- app/src/pages/Updates_SingleList/Updates_SingleList.test.tsx
- app/src/pages/EventBooklet/EventBooklet.test.tsx
- app/src/pages/Services/Services.test.tsx

## Causes and fixes
- Updates_SingleList ("an update opens the carousel"): ScreenTransitionGroup keeps the leaving screen in the document until a transition timer runs. The test clicked "back" as soon as the stub appeared; in a slow run the list screen was still mounted, so its CommonUiLayout back handler ran (initial entry) and redirected Home with its own timer. Fix: wait until `#List_Updates` has left the document, then click. Same assertions.
- EventBooklet ("a member opens HouseholdDetails; back restores"): same cause; the test clicked `document.querySelector('button')`, which was a booklet button while the leaving screen was still there. Fix: find the stub button by text, wait until the booklet rows are gone, then click.
- Services (FavouriteList 6 vs 7, timeouts): the failed-save test waited a fixed 20 ms. A late mock answer meets the next test after `freshPage` reset the mock mode, succeeds, and saves into the shared mock lists, so a later test sees 7 favourites. Fix: wait for the mock server's `response:mocked` of the save call (helper `saveAnswered`) inside the test, then keep the same assertions.

## Runs (Node 24, worktree at 15c6a1e4 + these changes)
- Each of the 3 files alone x10: all passed (5/5, 5/5, 8/8 tests every time).
- Full suite x3 with `--maxWorkers=100%`: 640 files, 3931 tests passed each time.
- eslint on the 3 files and `tsc --noEmit`: clean.
