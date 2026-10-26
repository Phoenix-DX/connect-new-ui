## Result
status: pass
summary: All gates pass. ci exit 0, lint:arch has only 2 baseline rule-9 warnings in the route, arch baseline 0 new, parity visual 64/64 clean for both references (ViewDocuments has no parity states), bundle HomeFeed 244.48 and Login 184.50 kB gzip (under 248.22 and 193.84). W23 and W28 hold.

## Files changed
none (only this file)

## Commands run
- dev server check: curl http://localhost:5174/UBTConnect/HomeFeed → 200; vite cwd = /Users/khaitruong/Projects/connect-new/app
- npm --prefix app run ci → exit 0 (first run, no flake)
- npm --prefix app run lint:arch → 2 warnings in the route: mocks.ts → legacy/os/os-wire, hooks/useViewDocuments.ts → legacy/os/exceptions (both rule-9, both in the baseline csv)
- cd app && npx eslint src/pages/ViewDocuments → exit 0
- python3 migration/tools/refactor/arch_baseline.py check → exit 0 (69 warnings, 69 baseline rows, 0 new, 0 gone)
- python3 migration/tools/refactor_parity.py --app http://localhost:5174 --level visual --changed --ref both --report app/docs/refactor/reports/P6-G6-B-ViewDocuments.md → exit 0, PASS; 64 routes (the changed scope selected all), outsystems 64/64 clean, self 64/64 clean, 0 new differences. ViewDocuments has no parity states (it is not in the report).
- npm --prefix app run build && node app/build/bundle-report.mjs → exit 0. HomeFeed 751.79 kB, 244.48 kB gzip (limit 248.22); Login 601.75 kB, 184.50 kB gzip (limit 193.84)
- Step "Check": none beyond the gate commands.

Review
1. openapi.yaml, src/mocks fixtures, public css: no change (mocks.ts of the page only types the wire from the contract). PASS
2. Deleted files api.ts, types.ts, components/actions.ts, ScreenBlock_ViewDocuments.tsx: no test file deleted; 4 test files added. PASS
3. Scope: only app/src/pages/ViewDocuments and migration bookkeeping. PASS
4. @origin present in the page, inputs, hook, state, view and LoadingSpinner. PASS
5. (change step, not move) no behavior change found. Same call (fetchEventDocuments once), same OnReady guards (restored skips), same click, download and helpdesk logic as the old block. Restore without a saved entry (dev deviation 5) cannot happen, because the view state registers at mount. PASS
6. W23: the old OnReady wrote only through set() (local state and the useViewState setter, a plain useState setter; registerViewState reads its ref at navigation time, so a write after unmount changes no cache and no app-level state). The old block had no other side effect after the await (no navigate, no message, no Orbit access). The new code skips only the state writes after unmount; the call runs once and a rejection still goes to raiseToFlowHandler after unmount (both covered by the 2 W23 tests). No skipped app-level side effect. PASS
7. W28: useFlowState with beforePaint: true replaces the old useLayoutEffect with a started ref; StrictMode runs OnReady once; the first frame shows the skeleton as before. PASS
8. No secret, password, PIN or email in the diff. PASS

## Deviations from the brief
none

## Questions for the user
none
