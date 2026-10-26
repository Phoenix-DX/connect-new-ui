## Result
status: pass
summary: I added `app/routes.ts` (the generated route list with `meta.access` and `meta.lock`) and `app/RouteGuard.tsx` (the redirect table of `startup.ts signedOutRedirect` and `pinUnlockRedirect`, unchanged). I deleted `ANONYMOUS_SCREENS`, `LOCK_SCREEN_IGNORED`, `isProtectedPath` and `ignoresLockScreen` from `paths.ts`, and wrote one unit test for each row of the table. I added the e2e journey "deep link signed out". Typecheck, all 1578 unit tests, eslint, format, depcruise (no new warning) and e2e:pwa (9 of 9) pass.

## Files changed
app/src/app/routes.ts (added)
app/src/app/routes.test.ts (added)
app/src/app/RouteGuard.tsx (added)
app/src/app/RouteGuard.test.tsx (added)
app/src/app/AppFrame.tsx
app/src/app/router.tsx
app/src/platform/navigation/paths.ts
app/src/platform/navigation/LockHost.tsx
app/src/platform/navigation/AppLockHost.tsx
app/src/platform/navigation/LockHost.test.tsx
app/src/platform/bootstrap/AppStart.tsx
app/src/platform/bootstrap/AppStart.test.tsx
app/src/platform/bootstrap/startup.ts
app/src/platform/bootstrap/startup.test.ts
app/build/e2e/pwa.e2e.ts
migration/refactor/handoffs/P4-4/dev.md (added)

## Commands run
npm --prefix app run typecheck → exit 0
cd app && npx vitest run (full suite) → exit 0, 340 files, 1578 tests passed
cd app && npx vitest run src/app/routes.test.ts src/app/RouteGuard.test.tsx src/platform/bootstrap/AppStart.test.tsx src/platform/bootstrap/startup.test.ts src/platform/navigation/LockHost.test.tsx src/platform/feedback/dialogs/BlockPinUnlock.test.tsx src/shared/UBTConnect/CommonUI_InsideLayout → exit 0, 7 files, 43 tests
cd app && npx eslint <the 15 changed code files> → exit 0, no message
npm --prefix app run format:check → exit 0
cd app && npx depcruise src --config .dependency-cruiser.cjs --output-type err → 0 errors, 210 warnings (210 before the change; no new warning, no cycle)
npm --prefix app run e2e:pwa → exit 0, 9 of 9 passed (8 before, plus the new "deep link signed out")

## Deviations from the brief
1. The guard reads the session machine status (`getSessionStatus().status`), not the old selectors. Equivalence: after the app start, `signedOut` is the only status in which `isSignedIn()` was false. While the status is `signingIn`, mockAuth stores the user in the same task as the `signIn` event. At the first check, `locked` is the status that the app start resolved from the same facts that `pinCheck().needUnlock && !PIN_HasUnlocked` read (machine.ts `PinNeed`). The check order (signed-out check first, then the PIN check once) and the side effects (callback, `UBTConnect.LastURL`, Default transition) do not change.
2. A path that shows no screen gets `NO_ROUTE_META` = `{ access: 'anonymous', lock: 'enforce' }`. This is the old behavior: `isProtectedPath` and `ignoresLockScreen` both returned false for an unknown path.
3. `LockHost` cannot import `app/routes.ts` (rule 8). It gets an optional prop `ignoresLockScreen(pathname)`. AppFrame passes the route meta through `AppLockHost`, as it already passes `prepareScreen` and `showsScreen` to `ScreenTransitionGroup`. `CommonUI_InsideLayout` (shared/, which must not import app/) still renders `<LockHost />` with no prop, so no path is ignored there. The result is the same. The only screens with `lock: 'ignore'` are Login, PINUnlock and PINRegister, which pass `inIgnoreLockScreen` (no LockHost at all), and Splash, which has no CommonUI. Each screen's CommonUI reads its own frozen location (ScreenTransitionGroup LocationContext). I added a LockHost test for the case without the prop.
4. `RouteMeta` has no `flagRedirect` yet: `FlagKey` comes with the registry in P4-5, and P4-5 step 4 moves the route-level flags to `meta.flagRedirect`.
5. Tests moved, none deleted. The 5 "redirects after the app start" tests of `startup.test.ts` moved to `app/RouteGuard.test.tsx`, with the same names and assertions. They now call `markAppReady()` first, so that the machine has a status. `AppStart.test.tsx` keeps its 5 tests and now renders `<AppStart /><RouteGuard />`, as AppFrame does.
6. E2E journeys. Both run in `npm --prefix app run e2e:pwa`, which builds this repo (`build/viteBuild.ts` APP_DIR = app/) into a temp folder and serves it on free ports. It never uses 5173 or 5174. "lock and unlock" is the existing test "PIN 0223 unlocks a ?mocksession=locked session; a reload keeps the lock". "deep link signed out" did not exist, so I added it to the demo-build block: `/UBTConnect/Notes?mocksession=out` → `Login?In_IsFromInvalidPermissions=True` → "Login with UBT One" → back to `/UBTConnect/Notes`.
7. Process: I made one small edit to my own new file `RouteGuard.test.tsx` (`act` → `await act`) with a one-off Python command in the shell, not with the Edit tool. The result is the same as with Edit. All other edits used Edit or Write.
8. For the documenter, these docs still name the deleted functions: `app/docs/guides/shell.md:51` (`paths.ts` row: `isProtectedPath`, `ignoresLockScreen`) and plan v2 §3.2 (which names `startup.ts` redirects as today's code). I did not change docs.

## Questions for the user
none
