## Result
status: pass
summary: All gates pass. Parity visual 1 route x 3 states x 2 refs, 0 differences. Login first load 193.07 kB gzip vs limit 193.84 (margin 0.77 kB, above 0.25). raiseToFlowHandler is the same function (re-export).

## Files changed
none

## Commands run
curl 5174 HomeFeed → 200; vite cwd = /Users/khaitruong/Projects/connect-new/app
npm --prefix app run ci → exit 0
cd app && npx eslint src/pages/ContactUsMenu → exit 0
npm --prefix app run lint:arch → 0 errors, 49 warnings; 0 lines mention ContactUsMenu
refactor_parity.py --app http://localhost:5174 --level visual --changed --ref both → 1 route, 6 runs, PASS, 0 differences (outsystems and self)
build + bundle-report.mjs → HomeFeed 754.80 raw / 244.93 gzip (limit 248.22, margin 3.29); Login 627.87 raw / 193.07 gzip (baseline 184.61, limit 193.84, margin 0.77)

## Deviations from the brief
none

## Diff review
1. openapi.yaml, mocks fixtures, public css: no change (pass)
2. Deleted tests: none deleted; actions.test.ts moved to contactUsMenuState.test.ts plus new tests (pass)
3. Scope: only src/pages/ContactUsMenu plus handoff/state files (pass)
4. @origin: present in the page, hook and state file (pass)
5. n/a (change step)
6. Behavior: the page uses DetailLayout instead of the Layout_DetailPage adapter; parity is clean. Only difference: pinCheck() and currentUserId() are now called in the opposite order inside initialIgnore's arguments; both are pure reads, no effect. (pass)
7. No secret found (pass)
raiseToFlowHandler: platform/feedback/flowErrors.ts does `export { raiseToFlowHandler } from '@/legacy/os/exceptions'`, so it is the same function and behavior.

## Questions for the user
none
