# Dev · F58 · Client variables through typed platform accessors

Mode: new. Worktree branch `rf/fix-F58` (set by the master). No commit.

## Result

Status: pass.

Pages, components and app code no longer call `getClientVar` / `setClientVar` by OutSystems name. They use the typed
accessors `clientVar.<key>.get()` / `.set(v)` from `platform/session/session.ts`. Metric "users of
`getClientVar`/`setClientVar` outside `platform/`" (`node migration/tools/refactor/measure-final.mjs`): 22 → 7.
No baseline grows. No behavior change: each accessor calls `getClientVar` / `setClientVar` with the same name.

## Design (choice and reason)

- One typed object `clientVar` with one accessor per client variable: `{ name, get(), set(value) }`. It lists the 15
  variables that the 15 files use, each with a JSDoc that gives its OutSystems name and its use. The types come from
  `CLIENT_VAR_DEFAULTS` (`ClientVarValue<N>`), so a wrong value type does not compile.
- Same storage, defaults, persistence and timing: `get` is `getClientVar(name)` and `set` is `setClientVar(name, v)`,
  so the reads stay synchronous, the storage keys (`cv:<name>`, sessionStorage for PIN_HasUnlocked), the logout reset
  and the `emit` to the subscribers do not change.
- `useClientVar` also takes an accessor (`useClientVar(clientVar.hasPolicyToAccept)`); a name still works for platform
  code. This removes the string names from `useSplash` and `CommonUiLayout` too.
- Where: in `session.ts`, next to `getClientVar` / `setClientVar`, not in a new module, for two reasons:
  1. `CommonUiLayout` (components/) may not get a new rule-4 baseline row. It already imports
     `@/platform/session/session` (baseline row); with the accessors in that module it keeps its current import and
     uses the accessors. A new module would need a new row.
  2. A new module would import `session.ts`; a re-export from `session.ts` would make a dependency cycle (`no-circular`).
  With this, all 15 files keep their existing import of `@/platform/session/session`: no new dependency edge.
- Not done: the style of `platform/settings` with string keys (`getSetting('pin.enabled')`). The decision asks for
  no string names, and an object of accessors gives the same typing with names that the editor completes.
- The server settings (`UBT_AppManager.PIN_Use`, ...) are not in `clientVar`: their typed API is `platform/settings`.

## Files changed

| File | Change |
|---|---|
| `app/src/platform/session/session.ts` | added `ClientVar` (internal), `accessorOf`, exported `clientVar` (15 accessors); `useClientVar` takes a name or an accessor; header comment |
| `app/src/platform/session/session.test.ts` | 5 tests for the accessors: defaults, same value as the name, localStorage persistence after a reload, logout reset, `useClientVar(accessor)` re-render |
| `app/src/app/RouteGuard.tsx` | `clientVar.lastUrl.set` |
| `app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx` | `clientVar.isNavigateToHomeOnBack`, `useClientVar(clientVar.hasPolicyToAccept)`; same import module |
| `app/src/pages/AcceptPendingPolicies/hooks/useAcceptPendingPolicies.ts` | `uniqueCacheKey`, `hasPolicyToAccept` |
| `app/src/pages/EventBooklet/hooks/useEventBooklet.ts` | `bookletGuestsMaxRows`, `bookletHelpersMaxRows` |
| `app/src/pages/HouseholdCarousel/hooks/householdCarouselActions.ts` | `updatesUnreadCount` |
| `app/src/pages/MessageDetail/hooks/messageDetailState.ts` | `unreadWhatsNewsNumber` |
| `app/src/pages/MessageList/hooks/unreadNotifications.ts` | `unreadNotificationsNumber` |
| `app/src/pages/MessageList/hooks/useMessageList.ts` | `deviceUuid` |
| `app/src/pages/PINBiometricsMenu/hooks/usePINBiometricsMenu.ts` | `biometricEnabled` |
| `app/src/pages/PINUnlock/hooks/usePINUnlock.ts` | `lastUrl` |
| `app/src/pages/Photobook/components/Photobook_Carousel.tsx` | `photobookSpeed`; removed the constant `SPEED_CLIENT_VAR` |
| `app/src/pages/Profile/hooks/useProfile.ts` | `uniqueCacheKey` |
| `app/src/pages/Search/hooks/useSearch.ts` | `searchRecentClickedResultsLimit` |
| `app/src/pages/Splash/hooks/useSplash.ts` | `lastUrl`, `useClientVar(clientVar.pinHeaderFinalHeightPercentage)` |
| `app/src/pages/Updates_SingleList/hooks/useUpdatesSingleList.ts` | `updatesMonthsToShow` |
| `migration/refactor/handoffs/F58/dev.md` | this report |

No baseline file changed: no row is new and no row is gone (the 15 files keep the same import).

## Checks

| Check | Result |
|---|---|
| `npm --prefix app run ci` (gen:api, typecheck, lint, arch, arch:baselines, dup, unused, flags, format:check, test, vite build) | pass, exit 0; 640 test files, 3984 tests |
| `npm --prefix app run arch` | 0 violations, 142 known ignored |
| `node app/build/check-arch-baselines.mjs` | 142 rows, 142 violations, 0 stale |
| `arch_baseline.py check --strict` | 72 warnings, 72 rows, 0 new, 0 gone |
| `npm --prefix app run unused` | 1129 rows, 1129 found, 0 new, 0 stale |
| `npm --prefix app run flags` | unchanged (21 flags, 0 unknown, 0 expired) |
| vitest of the changed code (`platform/session`, RouteGuard, `components/layout`, the 13 page folders) | 89 files, 520 tests pass |
| eslint of the changed files | 0 errors; 11 warnings in `CommonUiLayout.tsx` are the existing rule-4 baseline rows |

Bundle (W21, gzip; HEAD built from `git archive HEAD app` in the scratchpad, same `bundle-report.mjs`):

| Screen | HEAD gzip kB | F58 gzip kB | Delta |
|---|---|---|---|
| HomeFeed | 245.05 | 245.26 | +0.21 |
| Login | 184.92 | 185.10 | +0.18 |

Raw first load: +1.04 kB for both. The 15 OutSystems names move from the page chunks into the entry chunk
(`session.ts`). The delta is under the 0.3 kB tripwire, but it uses most of it.

## Metric after the change

`getClientVar`/`setClientVar` outside `platform/`: 7 (the brief expected 7). The list:

- `legacy/os/cache/AllCountriesCacheControl/AllCountriesCacheControl.tsx` (F37)
- `legacy/os/cache/AllLocalitiesCacheControl/AllLocalitiesCacheControl.tsx` (F37)
- `legacy/os/cache/PoliciesCacheControl/PoliciesCacheControl.tsx` (F37)
- `legacy/os/cache/UserInfoCacheControl/UserInfoCacheControl.tsx` (F37)
- `lib/orbit/actions.ts` (F35)
- `lib/ubtConnect/actions.ts` (F35)
- `lib/ubtConnectUtils/actions.ts` (F35)

There are 4 cache blocks, not 5 as the brief says. `legacy/os/clientVarNames.ts` names `getClientVar` only in a
comment, so the AST count does not include it.

## Notes for the tester and the documenter

- `useClientVar` by OutSystems name stays in 3 files outside `platform/` that are not in this step and not in the
  metric: `components/layout/BottomBar/BottomBar.tsx`, `containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx`,
  `pages/MyEntertaining/hooks/useMyEntertaining.ts`. Stories still call `setClientVar` by name (allowed by the brief,
  point 4). These could move to `clientVar` in a later step.
- Docs that name `getClientVar` for pages (for example `app/docs/guides/shell.md`) are for the documenter.

## Questions for the user

None.
