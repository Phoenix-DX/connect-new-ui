## Result
status: pass
summary: All gates pass. ci exit 0 (392 files, 2111 tests), parity visual --changed 64/64 clean against both references, bundle within 5 percent, diff review clean. The api/README.md and calls-by-domain.md lines about requestPhotoUpdate are stale (documenter).

## Files changed
none (besides this file; the parity tool wrote app/docs/refactor/reports/P6-G1-B-Menu.md)

## Commands run
curl http://localhost:5174/UBTConnect/HomeFeed → 200; vite cwd = /Users/khaitruong/Projects/connect-new/app
npm --prefix app run ci → exit 0; 392 test files, 2111 tests passed; typecheck and build ok
cd app && npx eslint src/pages/Menu src/api/member src/api/update → exit 0, no warning
npm --prefix app run lint:arch → 0 errors, 180 warnings in total (dev reported 183 at base); none in pages/Menu, api/member, api/update
python3 migration/tools/refactor_parity.py --app http://localhost:5174 --level visual --changed --ref both --report app/docs/refactor/reports/P6-G1-B-Menu.md → PASS; outsystems 64/64 clean, self 64/64 clean, 0 differences
node app/build/bundle-report.mjs (after the build of ci) → HomeFeed 244.35 kB gzip (limit 236.40 x 1.05 = 248.2), Login 192.49 kB gzip (limit 184.61 x 1.05 = 193.8): within limit
Check of the step: no "Check" section beyond the gate commands in the brief; the parity of Menu is covered in the 64 routes.

## Diff review
1. No change in openapi.yaml, mocks fixtures or public css: pass (mocks.ts of Menu unchanged).
2. No deleted test file without replacement: pass. The requestPhotoUpdate test moved from api/update to api/member; new tests added for useMenu, menuState, MenuUserHeader.
3. Scope: pass. Only Menu, api/member, api/update, move-map.csv. Shared blocks are imported from shared/, not moved (P6-G1-B-Shared).
4. @origin tags: pass (MenuPage, useMenu, menuState, MenuUserHeader).
5. n/a (change step).
6. Behavior: pass. Read MenuPage, useMenu and menuState against the old code: same flows, same dialogs, same navigation. State moved from useState to useReducer with the same initializer. Layout_DetailPage replaced by DetailLayout (same props forwarded). requestPhotoUpdate is the same code and the only caller is useMenu (accepted by W9).
7. Secrets: pass (grep matched only icon names such as connect-icon-password).

Notes for the documenter: app/src/api/README.md line 35 (requestPhotoUpdate is in update/) and app/docs/refactor/calls-by-domain.md lines 78 and 82 are stale. The move-map row status for Menu is empty.

## Deviations from the brief
none

## Questions for the user
none
