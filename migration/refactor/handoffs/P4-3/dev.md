## Result
status: pass
summary: Added `platform/auth` (the `AuthProvider` interface, `mockAuth` reached only behind `MOCKS_BUILT`, and `authProvider()`), `platform/bootstrap/appStartSteps.ts` (the app start as 7 named steps) and `postLogin.ts`. `auth.ts` now signs in and out through the provider. The production build is mock-free with no leftover: `KNOWN_MOCK_LEFTOVERS` is now empty. Quick checks pass, and a strict parity spot check on 6 routes is clean for both references. Production-only effect required by the plan: a production build has no identity provider, so sign-in fails with an error message (deviation 6).

## Files changed
app/src/platform/auth/provider.ts (new)
app/src/platform/auth/mockAuth.ts (new)
app/src/platform/auth/authProvider.ts (new)
app/src/platform/auth/index.ts (new)
app/src/platform/auth/mockAuth.test.ts (new)
app/src/platform/auth/provider.test.ts (new)
app/src/platform/bootstrap/appStartSteps.ts (new)
app/src/platform/bootstrap/appStartSteps.test.ts (new; app-start tests moved from startup.test.ts, plus one test per step)
app/src/platform/bootstrap/postLogin.ts (new)
app/src/platform/bootstrap/postLogin.test.ts (new)
app/src/platform/bootstrap/startup.ts
app/src/platform/bootstrap/startup.test.ts
app/src/platform/bootstrap/AppStart.tsx
app/src/platform/session/auth.ts
app/src/platform/session/auth.test.ts
app/src/platform/session/cachedUserInfo.ts
app/src/platform/session/machine.ts (comments only)
app/src/platform/session/session.ts (comment only)
app/src/platform/session/userInfo.ts (comment only)
app/src/platform/session/testSession.ts (comment only)
app/src/platform/storage/localEntities/orbitStaticEntities.ts (comment only)
app/src/test/testSupport.ts
app/build/mockFree.ts
app/build/mockFreeBuild.test.ts

## Commands run
npm --prefix app run typecheck → exit 0
cd app && npx vitest run src/platform build → exit 0; 49 files, 323 tests passed
cd app && npx vitest run (full suite) → exit 0; 338 files, 1563 tests passed
cd app && npx vitest run build/mockFreeBuild.test.ts → exit 0; 5 tests passed (real production, mock and demo builds)
cd app && npx eslint src/platform src/test build/mockFree.ts build/mockFreeBuild.test.ts → exit 0, no output
npm --prefix app run format:check → exit 0, all files use Prettier style
npm --prefix app run arch → 0 errors (no cycle), 210 warnings, none in platform/auth, platform/bootstrap or platform/session
VITE_USE_MOCKS=false vite build --outDir <scratchpad> → exit 0; the mock-free guard passes; no "Matías", "Vitale", "990001" or "Living now with her family" in the output JS or sw.js. Before the build/mockFree.ts change, the same build failed on src/mocks/fictional/directory.ts (see deviation 5)
python3 migration/tools/refactor_parity.py --level strict --routes Login HomeFeed Search PINRegister PINUnlock Menu --ref both --app http://localhost:5174 → PASS; outsystems 6/6 clean, self 6/6 clean (a spot check only, not the full gate; dev server cwd checked: this repo's app/)

## Deviations from the brief
1. File name `appStartSteps.ts`, not `appStart.ts`. On this case-insensitive file system, `appStart.ts` collides with `AppStart.tsx`: tsc resolved `@/platform/bootstrap/AppStart` (AppFrame.tsx) to the new `.ts` file (TS1149). Renaming `AppStart.tsx` would be a move, not part of this change step. The test file is `appStartSteps.test.ts`.
2. There is no `fetchFlags` step. The plan adds it in P4-5, which writes `fetchFlags`. The list has the other 7 steps in the order of the old `runAppStart`. Each step checks its own condition when it starts, as before. `cacheableMapData` follows the condition of `setLoggedContext` through `context.loggedContext`, which is the single `if (isSignedIn())` of the original. Steps that finish at once return nothing, and the runner awaits only promises.
3. `mockUser.ts` stays in `platform/session`. It has more than 40 importers (tests, stories, `mocks.ts` files), so moving it is a move step. `mockAuth.ts` ports the mock part of `auth.ts` (stored session and cached user record of the mock user) and imports `mockUser.ts`. `cachedUserInfo.ts` keeps its mock identity merge from `mockUser.ts`, because importing it from `mockAuth` would make a cycle (mockAuth → cachedUserInfo). Its gate changed from `config.useMocks` to `MOCKS_BUILT`: same value, and Rollup can fold it.
4. `authProvider.ts` imports `mockAuth` statically and uses it only behind the build-time constant (`MOCKS_BUILT ? mockAuth : null`), as `testSession.ts` already does. It does not use `await import()`. With this, `signIn` keeps its synchronous order: the `signIn` event, then the stored session, then the cached user record. Rollup drops `mockAuth.ts` and `mockUser.ts` from production. The guard now forbids both modules, so it would catch a leak.
5. `build/mockFree.ts` has a new production-only plugin, `mock-modules-without-side-effects` (`treeshake.moduleSideEffects: false` for mock modules). Reason: `src/mocks/fictional/directory.ts` has a top-level statement, `LOCALITY_HOUSEHOLDS[1]?.members.push(...)`. Rollup kept that statement while static imports reached the module (`mockUser.ts`, and `src/mocks/**` itself must not change). With the plugin, `KNOWN_MOCK_LEFTOVERS` is empty. The guard still fails a build when kept code uses a mock export. Dev, mock and demo builds do not use the plugin.
6. Production builds only, as the plan requires ("mockAuth imported behind MOCKS_BUILT only"; bffAuth is not part of the refactor): `authProvider()` returns null. `signIn` then rejects with "Sign-in is not available: no identity provider is configured." before any session change. Login shows this message through its existing `showExceptionMessage` path. `signOut` still works. Before this step, a production build signed in as the fictional mock user. Dev, mock and demo builds do not change.
7. `signIn` now calls `provider.signIn(currentLocation())` before the `signIn` event, so a provider failure leaves the status `signedOut`. With the mock, this adds one microtask before the event. `signOut` calls `provider.signOut()` (the mock makes no call) after the cache and local-entity clearing and before the session ends. The synchronous sequence of the old code is unchanged: the event, then `setSignedInUser(null)`, then the client-variable clearing.
8. The tests moved with their code; no test was deleted. `startup.test.ts` keeps the redirect tests and the `synchronizeNumberUnreadMessages` tests. All app-start tests moved to `appStartSteps.test.ts`. That file mocks `@/shared/UBTConnectLibrary/lib/actions` only to count calls of the bottom-bar slider; the real function still runs. `provider.test.ts` holds the `AuthProvider` test double, injected with `vi.mock('@/platform/auth')`.
9. For the documenter (no docs changed by me): `app/docs/guides/pwa.md:30` (`KNOWN_MOCK_LEFTOVERS` is now empty; the new plugin), `app/docs/guides/shell.md:10,59,110` (`startApp`/`runAppStart` are now in `appStartSteps.ts`; `postLogin.ts`; `platform/auth`), and `app/src/platform/README.md`.

## Questions for the user
none
