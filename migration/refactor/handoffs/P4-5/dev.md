# Developer report: P4-5 Flags registry

## Result
status: pass
summary: Wrote `platform/flags` as plan §3.1: a typed registry of 21 flags, resolve, store, overrides, server, `useFlag`, barrel, and `FLAG_OVERRIDES_BUILT`. Also added the app-start step `fetchFlags`, the `actions.ts` helpers on `flagValue`, and `meta.flagRedirect` on 6 routes, which `useOsNavigate` applies.
The call sites keep their flag checks until their page moves (deviation 1), and the old readers use a typed adapter (deviation 2). There is no behavior change.
Quick checks pass: typecheck, 342 test files, eslint, format, depcruise with no new violation, `?ff=` on dev (5174), and a strict parity spot check on 4 routes.

## Files changed
app/src/platform/flags/registry.ts (new)
app/src/platform/flags/types.ts (new)
app/src/platform/flags/resolve.ts (new)
app/src/platform/flags/store.ts (new)
app/src/platform/flags/overrides.ts (new)
app/src/platform/flags/server.ts (new)
app/src/platform/flags/useFlag.ts (new)
app/src/platform/flags/index.ts (new)
app/src/platform/flags/registry.test.ts (new)
app/src/platform/flags/flags.test.tsx (new)
app/src/platform/flags/flags.ts (rewritten: adapter for the old readers)
app/src/platform/flags/FlagPanel.tsx
app/src/legacy/os/flagNames.ts (new)
app/src/platform/config/config.ts
app/src/main.tsx
app/src/app/AppFrame.tsx
app/src/app/routes.ts
app/src/app/routes.test.ts
app/src/platform/navigation/osNavigate.ts
app/src/platform/navigation/osNavigate.test.tsx
app/src/platform/navigation/NavigationHost.tsx
app/src/platform/navigation/index.ts
app/src/platform/navigation/testRouter.tsx
app/src/platform/bootstrap/appStartSteps.ts
app/src/platform/bootstrap/appStartSteps.test.ts
app/src/shared/UBTConnect_Utils/lib/actions.ts
app/src/test/testSupport.ts
app/src/shared/UBTConnect/BottomBarMenu/BottomBarMenu.test.tsx
app/src/shared/Connect2_LegacyShared/ItemOptionsMenu/ItemOptionsMenu.test.tsx
app/build/mockFreeBuild.test.ts
app/.storybook/preview.ts
app/.storybook/withFlags.ts (new)
migration/refactor/handoffs/P4-5/dev.md (this report)

## Commands run
npm --prefix app run typecheck → exit 0
npx vitest run src/platform/flags src/app/routes.test.ts src/platform/navigation/osNavigate.test.tsx src/platform/bootstrap/appStartSteps.test.ts → 5 files, 62 tests passed
npx vitest run build/mockFreeBuild.test.ts → 5 tests passed (the production build has no `ff:overrides`; the mock and demo builds have it)
npx vitest run (full unit suite) → 342 files, 1597 tests passed
npx vitest run (the folders of the flag readers, after the last edit) → 173 files, 811 tests passed
npx eslint <the 32 changed .ts/.tsx files> → 0 problems
npx eslint . → 0 errors, 1 warning (usePopupWidget.ts → platform/session; existing, not in this step)
npm --prefix app run format:check → all files use Prettier code style
npm --prefix app run arch → 0 errors, 210 warnings, none from or to a file of this step (no cycle)
`?ff=` on http://localhost:5174 (this checkout, Playwright with Chrome): `?ff=C2NewNotifications:on,C2EnableCarousel:off&ffpanel=1` → panel lists 21 flags with values on/off. After a reload without `?ff=`, the same tab still has on/off (sessionStorage `ff:overrides`).
python3 migration/tools/refactor_parity.py --level strict --routes HomeFeed Locality_Details Search MessageDetail --ref both --app http://localhost:5174 → PASS (outsystems 4/4, self 4/4). This is a spot check only; the tester runs `--all`.

## Deviations from the brief
1. Item 4 (`meta.flagRedirect`): the route table has the redirects, and `useOsNavigate` applies them. The call sites still check their flag, and they move to one navigation when their page moves (Phase 6). There are three reasons:
   - Item 3 says that the callers of the helpers do not change. The bell, MessageDetail and the bottom bar are such callers.
   - If the checks are removed, the off branches that were never built change behavior: C2NewLDM off in FeedBlock_Services, carousel off in FeedBlock_Updates and Updates_SingleList (no navigation today), Locality_Households_HouseholdList (it raises an event today), and AssembleDetail (an extra condition).
   - Removing the checks adds 16 files, which goes over the limit of 40.

   This adds no behavior change. Each navigation to a redirected route today is behind the flag value that does not redirect (grep: 2 Notifications, 1 Bookmarks, 1 MyBookmarks, 1 LDM_MyEvents_V2, 11 HouseholdCarousel, 1 SupperMeeting_Carousel).

   Rule 8 does not let `platform/` import `app/`. So `AppFrame` gives `flagRedirectTarget` (app/routes.ts) to `NavigationHost` as a prop, the same way `AppLockHost` gets `ignoresLockScreen`. When a block renders alone in a test, it has no redirect.

   The redirects are Notifications → MessageList (C2NewNotifications off), Bookmarks → MyBookmarks (C2NewBookmarks off), MyBookmarks → New_MyBookmarks (mobileDirectoryBookmarkNote on), LDM_MyEvents_V2 → LDM_MyEvents (C2NewLDM off), HouseholdCarousel → HouseholdDetails (In_StartingHouseholdId → HouseholdId), and SupperMeeting_Carousel → SupperMeeting_Details (In_StartingSupperMeetingId → In_SubdivsionId). The plan names four flags. mobileDirectoryBookmarkNote is the fifth: the Bookmarks chain needs it (D2, knowledge/feature-flag-helpers.md). A URL that is opened directly is not redirected.
2. The 30 old readers keep `@/platform/flags/flags`: `useFlagOn`, `isOn` and `setFlag` are now an adapter on the new store, typed with `FlagKey`. This follows the same pattern as the settings adapter of P4-1. If each reader changed to `useFlag` of the barrel, the step would go over 40 files. A reader changes when its page moves. Two test loops got `as const` for the typed `setFlag`.
3. The registry has 21 flags: the 20 flags of flags.generated.json plus `mobileDirectoryLocalityContacts`. Locality_Details reads that flag, and its decision is "default-only off" (Locality_Details Q2, 2026-10-15). Before this step, it was a key outside the store: it read as off and logged a console warning on each read. Now it is off without a warning. `registry.test.ts` checks that the registry matches flags.generated.json (keys, defaults, routes), so a new `flags.py export` fails the test until the registry has the new flag.
4. `kind`, `owner` and `removeBy` are `null` for every flag: the decisions do not give them. The CI check of step P9-2 needs `removeBy`, so the user must set these fields before P9-2. `source` is `server` for every flag except `WalletAccess`: GetHasWalletAccess is a constant False, so its source is `build`. The OutSystems names (the `source` of flags.generated.json) are in `legacy/os/flagNames.ts`.
5. The `fetchFlags` step comes after `synchAppContext`. In the mock phase it makes no call. The server values are not persisted in the mock phase: persistence with TanStack Query (ADR-10) comes with the production call. When the fetch fails, the store keeps the last known values, else the defaults.
6. `FLAG_OVERRIDES_BUILT = import.meta.env.DEV || MOCKS_BUILT`. A production build (`VITE_USE_MOCKS=false`) drops `?ff=` and the panel, as the plan asks. The dev, mock and demo builds keep them. `mockFreeBuild.test.ts` now checks both cases.
7. Two test helpers from §3.1:
   - `setFlags({...})` for Vitest, in `src/test/testSupport.ts`.
   - `withFlags({...})` for Storybook, in `.storybook/withFlags.ts`. `preview.ts` now clears the overrides before each story. The tests use `composeStories` without the preview, so they do not change. No story uses `withFlags` yet.
8. `renderRoutes` (testRouter.tsx) has a new optional `redirect` argument.
9. To find the lint:arch baseline, I read one line of `migration/refactor/handoffs/P4-4/test.md` (`git show`). This is another handoff folder; I read no other line of it.
10. For the documenter:
    - `app/src/platform/README.md` says "7 named steps": there are now 8 (`fetchFlags`).
    - The docs that name `lib/flags`, `useFlagOn` or `initFlags` now need `platform/flags` (`useFlag`, `flagValue`, `initFlagOverrides`).

## Questions for the user
none
