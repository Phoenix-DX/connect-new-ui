## Result
status: pass
summary: All gates pass. Parity strict --all: outsystems 64/64 clean; self 63/64, the only difference is EventDetail/default "pixel 1" (known F6, self reference only), which passed in one rerun and failed in another. The guard keeps every old redirect; the session-status equivalence holds.

## Files changed
migration/refactor/handoffs/P4-4/test.md (added)
app/docs/refactor/reports/P4-4.md (written by the parity tool)

## Commands run
- dev server check: 5174 returns 200; cwd is /Users/khaitruong/Projects/connect-new/app
- npm --prefix app run ci → exit 0; 340 files, 1578 tests passed; build ok
- npm --prefix app run lint:arch → 0 errors, 1 warning (usePopupWidget.ts → platform/session/session, a file the step did not change)
- npx eslint on the changed code files → exit 0
- refactor_parity.py --level strict --all --ref both --app http://localhost:5174 --report app/docs/refactor/reports/P4-4.md → outsystems 64/64 clean, self 63/64; EventDetail/default pixel 1 (self). CountryDetails/default [self] passed on the tool's own second try.
- Reruns of EventDetail (strict, both refs): run 1 PASS, run 2 FAIL (pixel 1, self only). Known F6 flake, not a regression: outsystems is clean and the step does not touch EventDetail.
- npm --prefix app run e2e:pwa → exit 0, 9 of 9 passed (includes "deep link signed out" and the lock/unlock journey "PIN 0223 unlocks a ?mocksession=locked session; a reload keeps the lock")
- build + bundle-report → HomeFeed 237.75 kB gzip (baseline 236.40, +0.6%), Login 186.29 (baseline 184.61, +0.9%); both under +5%
- diffcheck --move: not applicable (change step)

## Diff review
1. openapi.yaml, mocks fixtures, public css: no change (git diff empty). pass
2. No deleted test file. The 5 tests of startup.test.ts moved to RouteGuard.test.tsx with the same names and assertions. They call markAppReady() first and go through guardAt (guardRedirect + followGuardRedirect), plus one extra assertion (OutSystems_LastURL stays empty for the no-redirect case). pass
3. Scope: only app shell, session/bootstrap/navigation files and the e2e file. migration/metrics/ledger.csv, log.md and state.json are master files. pass
4. @origin: the new files port no screen or block. n/a, pass
5. Not a move step. n/a
6. Behavior, row by row against HEAD:
   - signedOutRedirect: not signed in and screen known and not in the anonymous list → Login?In_IsFromInvalidPermissions=True, callback kept. New: status signedOut and access member → same target, same callback. The 9 anonymous screens match the old list (Splash, Login, InvalidPermissions, PINBiometricsMenu, ContactUsMenu, ContactUsDetails, Locality_Details, MessageList, MessageDetail). Unknown path → NO_ROUTE_META (anonymous, enforce), as isProtectedPath false / ignoresLockScreen false before. pass
   - pinUnlockRedirect: signed in, not ignored, needUnlock and not HasUnlocked → PINUnlock, callback and UBTConnect.LastURL (path + search). New: status locked, first check, lock enforce → same. Ignored set Login, PINUnlock, PINRegister, Splash matches. Order (signed-out check first, PIN check only at the first check, flag set after) is unchanged. pass
   - Status equivalence: machine.ts resolveStatus gives locked exactly when a user exists and pinNeed is unlock (PIN_Use, local PIN, not unlocked); needPinRegister and unlocked cover the other signed-in cases; signedOut only when userId is null. At the first check (appReady true, after appStartDone) this equals the old selectors. signingIn has the user stored in the same task. policiesPending is never reached yet. pass
   - LockHost optional prop: two render sites. AppLockHost passes ignoresLockScreen from the route meta (same function result as old paths.ts). CommonUI_InsideLayout renders <LockHost /> without it, guarded by !inIgnoreLockScreen; the only lock-ignore routes are Login, PINUnlock, PINRegister (inIgnoreLockScreen) and Splash (no CommonUI), so no behavior change. A LockHost test covers the no-prop case. pass
   - NO_ROUTE_META = anonymous + enforce, matches the old results for unknown paths; tested. pass
7. No secret, password, PIN of an account or email in the diff (grep). The PIN 0223 appears only in the existing e2e test name. pass

Notes: the dev.md process deviation 7 (a one-off Python edit of a new test file) is not a gate failure. For the documenter: app/docs/guides/shell.md:51 and plan v2 §3.2 still name the deleted functions.

## Deviations from the brief
none

## Questions for the user
none
