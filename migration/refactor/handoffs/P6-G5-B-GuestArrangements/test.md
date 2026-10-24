## Result
status: pass
summary: All gates pass. ci exit 0 (556 files, 3292 tests), eslint clean, arch baseline 75/75 with 0 new, parity visual --changed 64 routes with 0 differences against both references. Bundle: HomeFeed 244.46 kB (limit 248.22), Login 184.48 kB (limit 193.84). Review items 1-7 pass; the view-name change does not change back-navigation restore; W23 holds.

## Files changed
none (this file only)

## Commands run
npm --prefix app run ci → exit 0; 556 test files, 3292 tests passed; build ok
cd app && npx eslint src/pages/GuestArrangements → exit 0, no warning
python3 migration/tools/refactor/arch_baseline.py check → exit 0; 75 warnings, 75 baseline rows, 0 new, 0 gone
python3 migration/tools/refactor_parity.py --app http://localhost:5174 --level visual --changed --ref both --report app/docs/refactor/reports/P6-G5-B-GuestArrangements.md → PASS; outsystems 64/64 clean, self 64/64 clean, 0 differences
npm run build + node build/bundle-report.mjs → HomeFeed 244.46 kB gzip, Login 184.48 kB gzip
Dev server http://localhost:5174 → 200, cwd /Users/khaitruong/Projects/connect-new/app

## Review
1. No change in openapi.yaml, mocks fixtures, public css: pass (only pages/GuestArrangements/mocks.ts, which holds handlers; handlers unchanged, only local wire types).
2. No deleted test without replacement: pass (no test deleted; 5 test files added).
3. Scope: pass (only pages/GuestArrangements; api/image and flowState are already committed, not in this diff).
4. @origin tags: pass on page, hook, actions, state, view.
6. No unasked behavior change: pass. Only the view cache name changed (see below).
7. No secret in the diff: pass.

Back navigation (view name `Orbit_ScreenBlocks.ScreenBlock_GuestArrangements` instead of `Model`): old code used `restored && saved ? saved : INITIAL` and skipped OnReady with `restored && saved`. The old block wrote its state to the cache at mount, so `saved` was always set for a restored view. The new code takes `restored` only, with the saved state from useFlowState. Same result: a restored view shows the saved state and makes no new call. Covered by GuestArrangements.test.tsx "a back navigation restores the view without a new call" and by the hook test with the restored flag (all green in ci). The name is only a key inside the cached view, so no other block is affected.

W23: pass. useGuestArrangements.ts: OnReady (lines of `onReady`) uses `isAlive()` only before the state dispatch; no app-level side effect after the call, and a failure goes to the flow handler. `clickedMember` runs to its end after an unmount, as in the old port (events via eventsRef). No side effect is skipped. Unit tests cover unmount during both calls and StrictMode.

## Deviations from the brief
none

## Questions for the user
none
