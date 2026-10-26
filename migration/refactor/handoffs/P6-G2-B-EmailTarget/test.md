## Result
status: pass
summary: All gate checks pass. Send flow (order, request body, events) is the same as HEAD by line comparison. The removed remount key is safe by the code of ScreenTransitionGroup. Login first-load 193.08 kB gzip, margin 0.76 kB to the limit 193.84 (W18).

## Files changed
none (only this test.md; the parity tool wrote app/docs/refactor/reports/P6-G2-B-EmailTarget.md)

## Commands run
dev server http://localhost:5174 → HTTP 200; cwd /Users/khaitruong/Projects/connect-new/app
npm --prefix app run ci → exit 0 (no PopupMenu flake; build ok)
cd app && npx eslint src/pages/EmailTarget → exit 0, 0 warnings
npm --prefix app run lint:arch → exit 0, 48 eslint warnings, none in src/pages/EmailTarget
python3 migration/tools/refactor_parity.py --app http://localhost:5174 --level visual --changed --ref both → 2 routes, 0 differences against outsystems and self, PASS (EmailTarget has no capture, so the parity does not show its DOM; the dev's tests cover it)
node app/build/bundle-report.mjs → HomeFeed 244.93 kB gzip (baseline 236.40, limit 248.22, margin 3.29); Login 193.08 kB gzip (baseline 184.61, limit 193.84, margin 0.76)

## Review of the two reported changes
1. Remount key removed: ScreenTransitionGroup (app/src/platform/navigation/ScreenTransitionGroup.tsx) makes one entry/container per location.key, each with its own frozen location (ScreenFrame uses that location). The page does not call setSearchParams (grep: none). Every navigation, push or replace, gives a new key, so a new query string mounts a new page. The state starts from the inputs once (useState), which matches. The repo has no committed test that changes the query string on this page; ScreenTransitionGroup.test.tsx covers one container per entry and "the leaving screen keeps its own location". The dev's temporary remount test was deleted and I did not rerun it. Accepted on the code.
2. ValidationServiceProvider moved to the page: it renders no DOM; the view and CommonUiLayout wiring is the same. The page test still finds the data-block and ids (b1-$b1).
Send flow: the order (validate, setIsSending, online check, re-validate, isChange false, sendUserContactEmail, onEmailSubmitted, EmailHousehold event, feedback scheduled, setIsSending false, navigateBack) and the 11 request fields equal HEAD. The event attachment is the same JSON.

## Diff review
1. openapi.yaml, mocks fixtures, public css: no change. pass
2. No deleted test file (5 new test files). pass
3. Scope: only src/pages/EmailTarget plus migration state files. components/contact/* and shared blocks: no change. pass
4. @origin tags: on the page and the hook; HouseholdEmailView carries @origin per the dev. pass
5. Not a move step. n/a
6. Change step: only the two reported changes; also `raiseToFlowHandler` import path and `sendUserContactEmail` called directly (same functions). No behavior change found. pass
7. Secrets: only example.org test fixtures in tests; no password or PIN. pass

## Deviations from the brief
none

## Questions for the user
none
