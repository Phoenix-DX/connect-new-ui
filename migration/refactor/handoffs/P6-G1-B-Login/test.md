## Result
status: pass
summary: Gate passes: ci 0 (378 files, 2052 tests), parity visual 1 route (3 variants) x both refs 0 differences, bundle within 5 percent, no lint:arch warning in pages/Login. Diff review passes.

## Files changed
none (only this test.md; the parity tool wrote app/docs/refactor/reports/P6-G1-B-Login.md)

## Commands run
Dev server http://localhost:5174 → 200, cwd /Users/khaitruong/Projects/connect-new/app
npm --prefix app run ci → exit 0; 378 test files, 2052 tests passed; build ok
npm --prefix app run lint:arch → 1 warning only in components/ui/os/OSPopup/usePopupWidget.ts (not in the step); 0 matches for pages/Login
cd app && npx eslint src/pages/Login → exit 0
python3 migration/tools/refactor_parity.py --app http://localhost:5174 --level visual --changed --ref both --report app/docs/refactor/reports/P6-G1-B-Login.md → exit 0, 1 route (default, loading, offline), outsystems 1/1 clean, self 1/1 clean, 0 new differences
npm --prefix app run build && node app/build/bundle-report.mjs → HomeFeed 244.36 kB gzip (baseline 236.40, limit 248.2), Login 192.51 kB gzip (baseline 184.61, limit 193.8): within limit

Diff review
1. No change in openapi.yaml, mocks fixtures or public css: pass.
2. No deleted test file: pass (Login.test.tsx added, 6 tests).
3. Scope: only src/pages/Login changed. migration/metrics/ledger.csv and auto-decisions file are master edits, not code. Pass.
4. @origin present in LoginPage, useLogin, inputs, LoginCard, LoginFooter, LoginVersion, AppManagerEvents, Tile: pass.
5. Not a move step.
6. Change step, no behavior change seen: useLogin keeps the same state, effect order and calls; useFlowState deliberately not used (keeps plain useState). Uses the shared get_IsUnsupportedSystem (same body per dev; not re-verified by me beyond parity). mocks.ts is a comment-only change. Pass.
7. No secret, password, PIN or email in the diff: pass.

## Deviations from the brief
none

## Questions for the user
none
