# Refactor changelog

## P0-1 - refactor(P0-1): record the baseline

- Architecture: no change. The step records the baseline in `app/docs/refactor/baseline.md`.
- Security packages pinned: vite 7.3.7, vitest and @vitest/coverage-v8 4.1.12, storybook and @storybook/react-vite 10.6.3.
- Baseline: parity 64 routes with 0 differences, statements 49.22 percent, `npm audit` 0.

## P0-2 - refactor(P0-2): add refactor_parity.py and the self-parity reference

- Architecture: no change. New tool `migration/tools/refactor_parity.py` (levels strict and visual, `--changed`, `--all`).
- Self-parity reference recorded in `migration/refactor-reference/` (git-ignored). Strict run: 64/0 against both references.
- New default-off flags in `parity_check.cjs`; exemptions in `migration/refactor-exemptions.json` (empty).

## P0-3 - refactor(P0-3): add the architecture tools and the move codemod

- Architecture: no folder change. Added dev tools: dependency-cruiser (`npm run graph`, `npm run arch`), jscpd, knip, ts-morph, and the alias `@/` for `src/`.
- Added the move codemod `migration/tools/refactor/move.ts` (plain Node 24). No import uses `@/` yet.
- First reports are in `app/docs/refactor/reports/P0-3-*.txt`. `npm run arch` reports 1 cycle (`src/shell/cachedUserInfo.ts` and `src/shell/mockUser.ts`).

## P0-4 - refactor(P0-4): add the code inventory

- Architecture: no folder change. New tools `migration/tools/refactor/measure.mjs` and `app/build/bundle-report.mjs`.
- Outputs: `inventory.csv` (265 rows), `routes.csv` (64 routes), `calls-by-domain.md` (70 files call `callAction`).
- First-load gzip: HomeFeed 236.40 kB, Login 184.61 kB; recorded in `baseline.md`.

## P0-5 - refactor(P0-5): add the move map and ADR-15

- Architecture: no folder change. ADR-15 "Target front-end architecture" is accepted; 9 dev packages are allowed (`--adr ADR-15`).
- New: `move-map.csv` (329 rows: 265 blocks and 64 screens, with shape, target and phase) and `duplicates.md` (verdicts per candidate group).
- Auto decisions: Q5 keeps the 4 `DEPRECATED_*` patterns as legacy UI in `components/ui/legacy/`; Q6 gives the 5 `ContactByEmail*` pages a shared form and no container; Q7 puts `OSBlock` and the `OS*` widgets in `components/ui/os/`.

## P1-1 - refactor(P1-1): add the boundary rules in warn mode

- Architecture: no folder change. ESLint `no-restricted-imports` warns on `../` imports (rule 11) and on `@/api`, `@/platform`, `@/pages`, `@/containers`, `@/app` in `components/**` (rule 4). See `app/eslint.config.js`.
- New script `lint:arch` (`npm run arch && eslint .`). The `no-circular` error stops it until P3-4. `npm run ci` is unchanged.
- Baseline: 4,464 boundary warnings (4 `dependency-cruiser`, 4,460 ESLint). `.dependency-cruiser.cjs` was already in warn mode.

## P1-2 - refactor(P1-2): move shell/ to platform/ and legacy/os/

- `src/shell/` is gone. Files moved to `src/platform/{session,bootstrap,navigation,feedback,storage,device}`, `src/legacy/os` and `src/app`; `testSupport.ts` moved to `src/test/`.
- `ErrorBoundary` and `RouteError` are in `src/app/`. Guides, overview diagram and `platform/README.md` name the new paths.
- 30 rows of `move-map.csv` have status `moved`. No code change; strict parity 64/64 for both references.
- Note (P1-fix): this parity run used a dev server of another clone, so it did not test this code. See the P1-fix entry.

## P1-3 - refactor(P1-3): move lib/ and components/ to api/, platform/ and legacy/os/

- `src/lib/` is gone. `callAction` is in `src/api/client/`; `os-*` files in `src/legacy/os/`; flags, config, log and device in `src/platform/{flags,config,log,device}/`.
- `OS*` widgets are in `src/components/ui/os/`; `FlagPanel` is in `src/platform/flags/`; `NotCaptured` is in `src/app/`.
- 20 rows of `move-map.csv` have status `moved`. Guides, overview diagram and 4 READMEs name the new paths.

## P1-4 - refactor(P1-4): use the @/ alias everywhere

- No folder change. The codemod `--alias-only` rewrote 2,889 relative parent imports in `src/` to `@/`; `grep -r "from '\.\./\.\./" app/src` prints 0.
- ESLint rule 11 is now an error (`app/eslint.config.js`). `src/sw` is exempt: its 2 `../pwa/` imports stay. ADR-15 names this.
- `move-map.csv` is unchanged: no block moved.
- Note (P1-fix): the parity runs of P1-1 to P1-4 used a dev server of another clone. The P1-fix run is the valid one.

## P1-fix - fix(P1): restore the MSW handler order and re-run the parity of P1

- `src/mocks/handlers.ts` uses one glob per folder, joined as screens, shared, platform. P1-2 had moved the app-start mocks to the front (`shell` became `platform`), so they won over the screen mocks (Menu, Profile). `handlers.test.ts` guards the order.
- Parity of P1 re-run on this repo's server (port 5174) with the self reference re-recorded at 3b25ddd. Result: 64/64 for both references.
- Self runs of `parity_check.cjs` normalize `http://localhost:<port>` and `127.0.0.1` in absolute URLs on both sides (`origin_normalize.cjs`).

## P2-1 - refactor(P2-1): move HouseholdDetails to pages/

- `src/screens/HouseholdDetails/` is now `src/pages/HouseholdDetails/`; `index.tsx` is `HouseholdDetailsPage.tsx` (with `@origin`).
- `src/app/screens.ts` loads `pages/*/<Route>Page.tsx` first, then `screens/*/index.tsx`. `src/mocks/handlers.ts` merges both mock globs by folder name; the handler order stays.
- 1 row of `move-map.csv` has status `moved`. Strict parity 64/64 for both references.

## Test fix - test(AssembleEvents): freeze the clock at local noon of the day

- No architecture change (commit 1bb105f, decision Q10). The AssembleEvents test froze `Date` at local noon, so it no longer depends on the time of day.

## P2-2 - refactor(P2-2): add api/household

- New domain folder `src/api/household/` with types, mapper, repository, keys, hooks and a barrel. The hooks use `staleTime: 0` and `gcTime: 0`.
- `src/shared/UBTConnect/HouseholdDetails_Block/api.ts` only re-exports the domain under its old names; the callers are unchanged.
- `move-map.csv` is unchanged: no block moved. Strict parity 64/64 for both references.

## P2-3 - refactor(P2-3): HouseholdDetails as page, hooks, container and components

- `HouseholdDetails_Block` is now `pages/HouseholdDetails/hooks/useHouseholdDetails.ts` (`useReducer`), `containers/HouseholdDetails/HouseholdDetailsContainer.tsx` (`source`: server or preview) and props-only components in `components/household/`. `components/layout/DetailLayout` is new; `Layout_DetailPage` is a thin adapter.
- Both old block folders are deleted. HouseholdCarousel, Profile and Locality_Details use the container. `platform/feedback/flowErrors.ts` is new. 3 rows of `move-map.csv` have status `moved` (181, 182, 241).
- Open for P2-4: (1) `components/household/HouseholdTimelinePhotos` is the Photos section of the card, but move-map row 184 gives that name to the port of `HouseholdDetails_TimelinePhoto_List`: settle the names. (2) When HouseholdCarousel and Profile become pages, move `useHouseholdDetails` next to the container: rule 3 will flag the `@/pages/HouseholdDetails/hooks/...` import.
- Open: `migration/tools/docs_gen.py` and `migration/tools/refactor/move-map.mjs` read `// @os-block`; the new files use only `@origin`. `migration/screens/HouseholdDetails/route-spec.md` links to the old README path.

## P2-4 - refactor(P2-4): add the page template from the pilot

- No code change. New guide `app/docs/guides/page-template.md` (folders, hook shape, container criterion, test and story shape, gate checklist) and pilot report `app/docs/refactor/reports/P2-4-pilot.md`.
- `move-map.csv`: row `HouseholdDetails_TimelinePhoto_List` now targets `HouseholdTimelinePhotoList`; the hook move waits until HouseholdCarousel and Profile are pages. Pilot time recorded in the row of `HouseholdDetails_Block`.
- Overview diagram and `guides/screens.md` name `pages/`, `containers/`, `components/` and `api/<domain>/`. The parity run is 64/64 for both references.
- User gate (Opus and Fable reviewers): the page template has new rules for container files, the `api.ts` split and the flow state. Open items F1 to F5: `migration/refactor/followups.md`.

## Phase P2 - pilot HouseholdDetails

- Steps P2-1 to P2-4: the route is in `src/pages/HouseholdDetails/`, the data in `src/api/household/`, the card in `src/containers/HouseholdDetails/` and `src/components/household/`.
- 4 rows of `move-map.csv` have status `moved`; the shape of the pilot is in the page template. Open: move the hook next to the container when HouseholdCarousel and Profile become pages.
- Gate: ci passes; parity 64/64 for both references; bundle within 5 percent (HomeFeed 236.43 kB, Login 184.71 kB gzip).

## P3-1 - refactor(P3-1): shared code no longer imports screens or app

- `src/shared/` imports no `screens/`, `app/` or `pages/`. `NotCaptured` is now `src/platform/feedback/NotCaptured.tsx`. The update-items mock is in `shared/UBTConnect/Directory_Updates/mocks.ts`.
- Follow-ups F1 to F3: the hooks, state and mocks of HouseholdDetails are in `containers/HouseholdDetails/`; `pages/HouseholdDetails/api.ts` is `inputs.ts`; `docs_gen.py` and `move-map.mjs` read `@origin`.
- 2 new dependency-cruiser warn rules guard this (`pages-imported-by-own-route-only`, `shared-no-import-of-screens-or-app`). `move-map.csv` rows 166, 181, 379 changed. Strict parity 64/64 for both references.

## P3-2 - refactor(P3-2): remove the UBTConnect cycles

- The folder cycle came only from 8 UBTConnectLibrary stories (20 upward imports). No production file moved.
- Decision Q11 (b): `STORY_OR_TEST` in `app/.dependency-cruiser.cjs` excludes story and test files from the cycle rule and the folder rules.
- 2 new warn rules keep the direction UBTConnect, UBTConnect_Utils, UBTConnectLibrary. Strict parity 64/64 for both references.

## P3-3 - refactor(P3-3): zero import cycles

- The only module cycle in `src/` was `platform/session/cachedUserInfo.ts` and `mockUser.ts`. The record type `AppManager_CachedUserInfoRec` is now in the new leaf file `platform/session/types.ts`; `LDM_Email_V2/components/ScreenBlock_Event_Email_V2.tsx` imports it from there. `depcruise` reports 0 cycles.
- The folder pairs and `shared/osui` had no production import left to remove. 3 new warn rules keep the directions (`osui-no-import-of-app-modules`, `legacyshared-no-import-of-ubtconnect`, `mybookmarks-no-import-of-assemble`). Strict parity 64/64 for both references.
- Open for Phase 4: folder-level loops through `platform/` remain (`Connect2_LegacyShared` to `platform/feedback` to `shared/UBTConnect`; `shared/osui` to `components/ui` to `platform/session` to `platform/bootstrap` to `UBTConnectLibrary`). They make no module cycle and end when `platform/` stops importing `shared/`.

## P3-4 - refactor(P3-4): phase 3 report

- No code change. The phase report [reports/P3.md](reports/P3.md) records the `lint:arch`, `jscpd` and chunk numbers. Import cycles: 0 (baseline 1). jscpd: 64 clones and 1.15 percent (baseline 63 and 1.15 percent). HomeFeed 236.42 kB and Login 184.71 kB gzip.
- `overview.md` links the report. `move-map.csv` is unchanged. Full strict parity: 64/64 for the original; 63/64 for the self reference on the first run.
- Known flake: EventDetail/default differed by 1 pixel once and passed on two reruns with no code change.

## Phase P3 - remove cycles and fix dependency direction

- Steps P3-1 to P3-4: `src/shared/` imports no `screens/`, `app/` or `pages/`; the module graph has 0 cycles; 7 new dependency-cruiser warn rules keep the folder directions (`app/.dependency-cruiser.cjs`).
- Open for Phase 4: the folder-level loops through `platform/`. Details in [reports/P3.md](reports/P3.md).

## P4-1 - refactor(P4-1): typed settings store

- New `src/platform/settings` holds 11 typed server settings (plan v2 §3.2 lists 10; `pin.inactivity.navigate` is the extra one). `synchAppContext` writes the store. The adapter `src/legacy/os/clientVarNames.ts` keeps the old `getClientVar('UBT_AppManager.PIN_Use')` calls working.
- Storage: one object under `ubtc-mock:settings` replaces 11 `ubtc-mock:cv:UBT_AppManager.*` keys (decision Q12). A browser tab that ran an older build reads the default settings once, until the SynchAppContext answer of its next page load. The `ubtc-mock:` keys are mock-only.
- Strict parity 64/64 for both references. `move-map.csv` is unchanged.

## P4-2 - refactor(P4-2): session state machine

- New `src/platform/session/machine.ts` holds the session status and the events of plan v2 §3.2, with one unit test per transition. `session.ts`, `auth.ts` and `pin.ts` send the events; the selectors keep their names and values. `LockHost` sends through `pin.ts lock()`.
- Differences from §3.2: `isLocked()` and `hasUnlocked()` keep reading the stored values; the mock-only event `userChanged`; `signOut` from `signingIn`; `policiesPending` is not reached yet.
- Strict parity 64/64 for both references. Known flake F6: EventDetail/default differed by 1 pixel in 2 of 5 reruns. `move-map.csv` is unchanged.

## P4-3 - refactor(P4-3): auth provider and named app-start steps

- New `src/platform/auth`: the `AuthProvider` interface, `mockAuth` (reached only behind `MOCKS_BUILT`) and `authProvider()`. `src/platform/bootstrap/appStartSteps.ts` runs the app start as 7 named steps (`synchAppContext` to `cacheableMapData`), and `postLogin.ts` holds the post-login calls. `build/mockFree.ts` has a production-only plugin, so `KNOWN_MOCK_LEFTOVERS` is empty.
- Differences from plan v2: the file is `appStartSteps.ts`, not `appStart.ts` (it clashes with `AppStart.tsx` on a case-insensitive file system). There is no `fetchFlags` step until P4-5. `mockUser.ts` stays in `platform/session` until a later move step.
- One behavior change, as the plan asks: a production build has no identity provider. "Login with UBT One" shows "Sign-in is not available: no identity provider is configured." Dev, mock and demo builds sign in as before. Strict parity 64/64 for both references. `move-map.csv` is unchanged.

## P4-4 - refactor(P4-4): route meta and one route guard

- New `src/app/routes.ts` (generated routes plus `meta.access` and `meta.lock`; `NO_ROUTE_META` for a path that shows no screen) and `src/app/RouteGuard.tsx` (one guard, one redirect table, one unit test per row). `paths.ts` no longer has `ANONYMOUS_SCREENS`, `LOCK_SCREEN_IGNORED`, `isProtectedPath` and `ignoresLockScreen`; the redirects left `startup.ts`.
- Differences from plan v2 §3.2 (which still names `startup.ts` as today's code): the guard reads the session machine status; `LockHost` gets an optional `ignoresLockScreen` prop (`platform/` does not import `app/`); `flagRedirect` comes in P4-5. New e2e journey "deep link signed out".
- Strict parity 64/64 for the original; 63/64 for the self reference, with the known EventDetail/default 1-pixel flake (F6). `move-map.csv` is unchanged.

## P4-5 - refactor(P4-5): typed flag registry and resolver

- New `src/platform/flags`: a typed registry of 21 flags, `resolve`, `store`, `overrides`, `server`, the typed `useFlag` and `flagValue`. `FLAG_OVERRIDES_BUILT` keeps `?ff=` and the panel out of a production build. The step `fetchFlags` runs after `synchAppContext` and makes no call in the mock phase.
- `meta.flagRedirect` is on 6 routes in `src/app/routes.ts`, and `useOsNavigate` applies it. The adapter `platform/flags/flags.ts` serves the 30 old readers; `UBTConnect_Utils/lib/actions.ts` calls `flagValue`. OutSystems names: `legacy/os/flagNames.ts`.
- Differences: call sites keep their flag checks until Phase 6; a URL that is opened directly is not redirected (as before); `mobileDirectoryLocalityContacts` is added (default off); `kind`, `owner` and `removeBy` are null (P9-2 needs `removeBy`). `capture-plan.json` has no flag variants. Strict parity 64/64 for both references. `move-map.csv` is unchanged.

## Phase P4 - platform services

- Steps P4-1 to P4-5: `platform/` has the typed settings store and the session state machine. It also has the auth provider, 8 named app-start steps, the route meta with one guard, and the flag registry.
- Gate of P4-5: `ci` passes; strict parity 64/64 for both references; HomeFeed 238.66 kB and Login 187.19 kB gzip, within 5 percent of the baseline.

## P4-F4 - one platform hook for the standard flow state

- New `src/platform/navigation/flowState.ts`: `useFlowState` gives a flow hook its state, `dispatch`, `latest`, the newest `parameters` and `events`, and the OnReady and OnParametersChanged flows. `useHouseholdDetails.ts` uses it.
- `SharePopup.tsx`, `UBT_LazyImage.tsx` and `HouseholdRelations_Block.tsx` keep the old pattern until Phase 6. Strict parity for the 4 routes passes; `move-map.csv` is unchanged.

## P4-F6 - fix(parity): font preload and partial re-records for the EventDetail/default flake

- Architecture: no change. Cause of the flake: the `orbit-icon` font loaded late, so the layout moved. The "View Guests" button keeps the sub-pixel offset of its first position in its `translateZ(0)` layer (legacy `.btn` rule). 256 px differed in 6 of 15 tries.
- `parity_check.cjs` has the option `--preload-fonts` (off by default, so `route.py parity` is unchanged); `refactor_parity.py` always passes it. `--record-self` has `--source-commit <rev>`, and the manifest has `rerecorded` entries for partial records.
- EventDetail self record is again from 3b25ddd (decisions Q13 and Q14). Proof: 10 of 10 and 3 of 3 EventDetail runs; `--all` gives 64/0 for both references. `move-map.csv` is unchanged.

## P4-F5 - test: open "Preview Household Profile" from Profile

- Architecture: no change. New test `src/screens/Profile/Profile.test.tsx`: it opens the HouseholdDetails container in `preview` mode and checks the VITALE household members (`VITALE.members`) and the section titles.
- No app code and no parity state changed. `move-map.csv` is unchanged.

## Phase P5 - api layer

- Steps P5-1 to P5-4: `src/api/` has `client/` (ApiError, callAction, QueryClient, memory cache) and 11 domains: member, country, locality, update, app, event, bookmark, note, message, notification and image. Each domain has types, mapper, repository, keys and hooks. `memoryCache.ts` is deleted.
- Gate of P5-4: `ci` passes; strict parity 64/64 for both references; exemptions `[]`; HomeFeed +3.27 percent and Login +4.15 percent gzip over the baseline. The user confirms the exemption list of Phase 5.

## P5-1 - refactor(P5-1): api/client with ApiError

- New `src/api/client/apiError.ts`: `ApiError` with `kind` (`timeout`, `network`, `server`, `security`, `viewChanged`) and `cause` (the OutSystems exception). `src/legacy/os/os-exceptions.ts` maps both ways (`ApiErrorKind` is declared there, to avoid an import cycle). `callAction` is unchanged.
- New `signedOutRemotely()` in `src/platform/session/auth.ts`: the single entry point for "the server ended the session". It shares the Connect_Logout body with `signOut()` and sends the machine event `signedOutRemotely`. Its only caller is the forced-logout branch of `src/platform/feedback/exceptionMessages.ts`.
- The 401 and SecurityException triggers wait for the BFF (decision Q12, option C). The App_Common SecurityException branch is the known gap G1 in `migration/refactor/followups.md`, for the user to decide outside the refactor. Strict parity 64/64 for both references. `move-map.csv` is unchanged.

## P5-F8 - fix(P5-F8): parity runs in parallel with --out

- Architecture: no change. `migration/tools/refactor_parity.py` has the option `--out <dir>`. The default (`migration/refactor-parity/last`) is unchanged, and the P5-1 tester confirmed it.
- Only `<dir>` is deleted at the start of a run, and `<dir>` must be under `migration/refactor-parity/`. `migration/refactor/README.md` has a "Parallel runs" section for the Phase 6 worktrees.

## P5-2-member - refactor(P5-2): add api/member

- New `src/api/member/` (types, mapper, repository, keys, hooks, barrel) for GetAvailableMembers (ShareSheet), GetMemberByMemberId (OrbitAdminEventDetail) and Member_EditDetails_Service (Profile). The 3 old `api.ts` files re-export it under their old names.
- M9: OrbitLanding's `DataActionGet_EventsByMemberId` moves to `api/event` (P5-3); its row in `calls-by-domain.md` moved to the event table. M10: `useUserInfoQuery` stays for P5-4 (`CacheControl_UserInfo` in `move-map.csv` is unchanged).
- M11: `useAvailableMembersQuery` has `gcTime: 0` (plan 5.4), so a reopened ShareSheet shows the skeleton during the call, like the OutSystems block. Strict parity `--changed`: 13 routes, both references clean. `move-map.csv` has no row for these calls.

## P5-2-country - refactor(P5-2): add api/country

- New `src/api/country/` (types, mapper, repository, keys, hooks, barrel) for 7 calls (statistics of 3 screens, GetCountryInfo, 2 shared actions, CacheControl_AllCountries). The old `api.ts` and `types.ts` of the 4 screens re-export it; Connect2_LegacyShared and CacheControl_AllCountries call the domain functions. Two mappers keep only the fields the UI reads.
- The developer worked in a prefetch worktree (M8). The wire alias `CacheControl_AllCountries` in `shared/UBTConnect_Utils/lib/structures.ts` has no importer now: remove it later.
- Strict parity `--changed`: 33 routes clean for both references. The first run had a CountryDetails/default self difference under load; it did not repeat (follow-up F9). `move-map.csv` is unchanged.

## P5-F9 - fix(P5-F9): remove the CountryDetails/default parity flake under load

- Architecture: no change. Cause: in the self runs, the map opens at zoom 5 and `fitBounds` starts the zoom to 4 in the next frame. A zoom-5 tile that loaded in this gap stays in the tree, because the fixed clock stops Leaflet's tile fade. Under load, 2 of 15 tries failed.
- New option `parity_check.cjs --hold-third-party` (off by default, so `route.py parity` is unchanged). A local proxy holds each third-party connection. It lets the connection go when the own requests are idle (15 s at most) and the page ran its queued timers and two frames. `refactor_parity.py` passes it on self runs and on `--record-self`.
- Proof: CountryDetails/default 15 of 15 tries under load (before: 13 of 15); `--all --ref both` gives 64/0 on both references. Open point: the self runs of CountryDetails and BrowseDirectory still load map tiles from the live tile servers. `move-map.csv` is unchanged.

## P5-2-locality - refactor(P5-2): add api/locality

- New `src/api/locality/` (types, mapper, repository, keys, hooks, barrel) for 11 calls. They are in BrowseDirectory, AssembleEvents, LDM_MyEvents_V2, Locality_Details (4), Connect2_LegacyShared (2), SupperMeeting_DetailsBlock and CacheControl_AllLocalities. The 7 old caller files re-export it under their old names. The 5 hooks have no caller yet.
- `GetLocalityInformation` keeps its full record, because the client action that bookmarks a locality clones it. Mappers keep only the fields that the UI reads for `SubdivisionDetails`, `AllLocalities` and `SubdivisionInformation`. The developer worked in a prefetch worktree (M8).
- Strict parity `--changed`: 64 of 64 routes clean for both references. `move-map.csv` has one row for these calls, `CacheControl_AllLocalities`, which already points to `src/api/locality/hooks.ts` and is unchanged.

## P5-2-update - refactor(P5-2): add api/update

- New `src/api/update/` (types, mapper, repository, keys, hooks, barrel) for 9 actions. One `UpdateItem` type has two mappers (feed keeps the date "1900-01-01", list gives ""). The old `api.ts` and `types.ts` of HomeFeed, Updates_SingleList, HouseholdCarousel and Menu re-export it; `shared/UBTConnect/lib/actions.ts` gets the bottom-bar unread count from the repository.
- The developer worked in a prefetch worktree (M8). `requestPhotoUpdate` sits in `api/update` only because of its name; a later step can move it to `api/member`. The first test run failed on `loading` states at a load average of about 110. A rerun at normal load gave 64/64 on both references (load flakes). `move-map.csv` is unchanged (no row for these calls).

## P5-2-app - refactor(P5-2): add api/app

- New `src/api/app/` (types, mapper, repository, keys, hooks, barrel) for the 6 app-start calls (SynchAppContext, AfterInitialize, Sync_Info_GetMain, CacheableMapEntities, CacheableHouseholds, CacheControl_Policies). `platform/bootstrap` and the `CacheControl_Policies` block call the repository functions; `ClientConfig` moved from `startup.ts` to `api/app`.
- Not moved: GetUserInformation (P5-4), GetNumberUnreadMessages (P5-3), and the other 20 files of the "app" table in `calls-by-domain.md`, which are not app-start calls. `usePoliciesQuery` has no caller yet (P5-4).
- Strict parity `--changed`: 64 of 64 routes clean for both references; exemptions `[]`. `move-map.csv` is unchanged (the row of `CacheControl_Policies` already points to `src/api/app/hooks.ts`; P5-4 rewrites the block).

## P5-3-event - refactor(P5-3): add api/event

- New `src/api/event/` (types, mapper, repository, keys, hooks, barrel) for 25 data actions and one mutation of 16 screens. The old `api.ts` and `types.ts` of these screens re-export it; the shared record types moved into `api/event/types.ts` and the two `structures.ts` files re-export them.
- 25 hooks have no caller yet. Strict parity `--changed`: 64 of 64 routes clean for both references; exemptions `[]`. `move-map.csv` is unchanged.

## P5-3-bookmark - refactor(P5-3): add api/bookmark

- New `src/api/bookmark/` (types, mapper, repository, keys, hooks, barrel) for 9 calls. The old `api.ts` and `types.ts` of BookmarksByGroup and MyBookmarks re-export it; the two shared `actions.ts` files (Connect2_Assemble_MUI, UBTConnect) call the repository functions.
- `Bookmark` keeps `dateCreatedUtc` and the barrel exports `toBookmark` for the G2 cache code. The 2 hooks have no caller yet. Strict parity `--changed`: 64 of 64 routes clean for both references; exemptions `[]`. `move-map.csv` is unchanged.

## P5-3-note - refactor(P5-3-note): Domain api/note

- New `src/api/note/` (types, mapper, repository, keys, hooks, barrel) for 6 calls. The old `api.ts` files of Notes, Directory_EntityDetailsActions, NoteListActions and NotesSheet re-export it; `Notes/types.ts` lost 4 unused types.
- Not moved: the client actions `Get_Note_DynamicPills` and `GetNotes_FilterYear` (they use `platform/`). The 2 hooks have no caller yet. Strict parity `--changed`: 64 of 64 routes clean for both references; `move-map.csv` is unchanged.

## P5-3-message - refactor(P5-3-message): Domain api/message

- New `src/api/message/` (types, mapper, repository, keys, hooks, barrel) for 19 calls of 11 screens. The old `api.ts` and `types.ts` files re-export it; `Directory_EntityDetailsActions/api.ts`, `Connect2_LegacyShared/lib` and `platform/bootstrap/startup.ts` use it.
- Three e-mail screens now share one form type and one mapper (only the JSON key order changes). Wrapper_NotificationOpened and Wrapper_MarkAllAsReadNotifications stay in the screens. The 17 hooks have no caller yet.
- Strict parity `--changed`: 64 of 64 routes clean for both references. `move-map.csv` is unchanged.

## P5-3-notification - refactor(P5-3-notification): Domain api/notification

- New `src/api/notification/` (types, mapper, repository, keys, hooks, barrel) for 4 calls of 3 screens. The old `api.ts` files of Notifications, MessageDetail and MessageList re-export it; `MessageList/api.ts` keeps an adapter for the four block variables.
- `api/notification` does not import `api/message`. The 4 hooks have no caller yet. Strict parity `--changed`: 64 of 64 routes clean for both references; `move-map.csv` is unchanged.

## P5-4 - refactor(P5-4): memory cache as query options

- `src/platform/storage/memoryCache.ts` is deleted. `src/api/client/cache.ts` keeps the memory cache as queries of the one QueryClient (`src/api/client/queryClient.ts`). The entries (type, key, time to live) are in the `keys.ts` of `api/app`, `bookmark`, `country`, `locality`, `member`, `message` and the new `api/image`. The time to live is the `staleTime` (7200 s for map objects and user information). `CACHE_TYPE` and `invalidateEverything` are removed.
- Accepted behavior change (decision Q13): a reader that comes more than 10 s after a pending miss now shares the running call. QueueJS started a second call. A logout raises a session epoch, so a reader after a logout never joins a miss of the session before.
- Strict parity `--all`: 64 of 64 routes clean for both references; exemptions `[]`. `move-map.csv` is unchanged (the rows of the `CacheControl*` blocks already say that P5-4 rewrites them where they are).

## G1 - fix(G1): App_Common SecurityException branch (outside the refactor steps)

- Behavior change outside the refactor steps (decisions U2 and W7). `raiseToFlowHandler` (`src/legacy/os/exceptions.ts`) ports `UBTConnect.App_Common.controller.js:61-89`: signed in, the forced-logout path (`signedOutRemotely()`); anonymous, Login with `In_IsFromInvalidPermissions=True`.
- New `osNavigateTo` in `src/platform/navigation/osNavigate.ts`, registered by `NavigationHost`. New scenario `?mock=security` in `src/screens/ContactUsDetails/mocks.ts`.

## P6-G1-A - refactor(P6-G1-A): move G1 to pages/

- The 10 routes of group G1 (Login, Splash, PINRegister, PINUnlock, PINChange, PINBiometricsMenu, AcceptPendingPolicies, Menu, TermsAndPoliciesMenu, Profile) moved from `src/screens/<R>` to `src/pages/<R>`. `index.tsx` is now `<R>Page.tsx`, with one `@origin` tag per file. Only paths, imports and tags changed.
- Tool fix P6-F12 (from the test of this step): `rf.py diffcheck --move` accepts added `@origin` tags in renamed files, and `app/build/bundle-report.mjs` finds `pages/<R>/<R>Page.tsx`. `move-map.csv` is unchanged (its rows name shared blocks, not these screens).

## P6-G1-B-Login - refactor(P6-G1-B): Login as page

- `src/pages/Login` is now a page (`LoginPage.tsx`), one hook (`hooks/useLogin.ts`: OnInitialize, OnReady, login action) and components (`LoginCard`, `LoginFooter`, `LoginVersion`, `AppManagerEvents`, `Tile`). `api.ts` and `types.ts` became `inputs.ts` (the route had no server call).
- No shared block moved. `useLogin` keeps plain `useState`, not `useFlowState`, so back navigation behaves as before. Visual parity `--changed`: clean for both references. `move-map.csv`: Login row set to `moved`.

## P6-G1-B-Splash - refactor(P6-G1-B): Splash as page

- `src/pages/Splash` is now a page with hooks (`useSplash`, `useApplicationLoadEvents`, `useLoadingDotsAnimation`) and two components. `api.ts`, `types.ts` and `mocks.ts` are deleted: they had no call, input or route mock.
- `LayoutBlank` moved to `src/components/layout/BlankLayout` (props only). The page calls `useNoCommonUi()`. Shared blocks that Splash uses did not move in this step. Visual parity `--changed`: clean for both references. `move-map.csv`: 4 Splash rows set to `moved`.

## P6-G1-B-AcceptPendingPolicies - refactor(P6-G1-B): AcceptPendingPolicies as page

- `src/pages/AcceptPendingPolicies` is now a page with two hooks (`useAcceptPendingPolicies`, `usePendingPoliciesForm`) and two components (`PoliciesHeader`, `PendingPoliciesForm`). The route's `api.ts` and `types.ts` are deleted.
- New domain `src/api/policy` (decision W8): `fetchPendingPolicies`, `acceptPolicies`, `usePendingPoliciesQuery`. `platform/feedback/flowErrors.ts` re-exports `isCommunicationException`.
- No shared block moved. Visual parity `--changed`: clean for both references. `move-map.csv`: 4 rows set to `moved`.

## P6-G1-B-Menu - refactor(P6-G1-B): Menu as page

- `src/pages/Menu` is now a page with one hook (`useMenu`, with the pure `menuState`) and one component (`MenuUserHeader`). The route's `api.ts` and `types.ts` are deleted. The page renders `DetailLayout` directly.
- `requestPhotoUpdate` moved from `src/api/update` to `src/api/member` (decision W9). No shared block moved. Visual parity `--changed`: clean for both references. `move-map.csv`: Menu row set to `moved`.

## P6-G1-B-Shared - refactor(P6-G1-B): move the shared blocks of group G1

- 30 blocks of `src/shared/` (phase P6-G1 rows of `move-map.csv`) moved to `src/platform/{navigation,session,device}` and `src/components/{auth,layout,menu,version}`. 21 of them took the target name (path, component and `<Name>Props`), for example `Pincode_Register` to `PinCodeRegister` and `BottomBarMenu` to `BottomBar`. Each main file has an `@origin` tag. No re-export is left in `src/shared/`. The 30 rows are set to `moved`.
- Gate W13: `app/docs/refactor/arch-baseline.csv` lists the 88 `lint:arch` Rule 4 warnings that the move created (a `components/` file imports `platform/`). A row holds the file, the import, the rule and an owner. The list is moved debt and only shrinks.
- Decision W15 (Window 4, amends W13): the list grows only in `P6-G<n>-B-Shared` steps. The gate (`arch_baseline.py`) accepts a new row only when its file is a move-map target of that step. The old `src/shared/` file must have imported the same resolved module at the base commit. Each new row has an owner (a B step of the group, or P7); every other step only removes rows.
- `python3 migration/tools/refactor/arch_baseline.py check` replaces "no new warning" in the gate. It fails on a new warning and on a row without a warning. Each owner deletes its rows: P6-G1-B-PINRegister (20), P6-G1-B-PINUnlock (32), P7 (35), `pre-existing` (1, `OSPopup`). The file is empty before P9-1.
- Tool change W12: `rf.py diffcheck --move` accepts the renames that `move-map.csv` declares (the block name to the target name, and `<Name>Props`). Strings, comments and any other change still fail.
- Deviation from plan v2 §1.4 and §2.2 (decisions W12 and W13, Window 4): the plan has no baseline file. Plan v2 §2.2 names `containers/BottomBar`; the move map puts `BottomBar` in `components/layout` because criterion 2 is not met (`move-map.csv`, row `UBTConnect/BottomBarMenu`).

## P6-G1-B-PINRegister - refactor(P6-G1-B): PINRegister as page

- `src/pages/PINRegister` is now a page with one hook (`usePINRegister`). `api.ts`, `types.ts` and `mocks.ts` are deleted (no call, input or mock). `PinRegisterContent` and `PinCodeRegister` render from props only. Their flows moved to `usePinRegisterContent` and `usePinCodeRegister` in `src/platform/session/` (two pages use them). PINRegister and PINChange call the hook and pass props.
- Gate W13: the 20 rows of owner P6-G1-B-PINRegister are deleted from `arch-baseline.csv` (68 rows left). `move-map.csv`: PINRegister row `moved`; Pincode_Register and Block_PINRegister_ContentWrapper rows are `hook+component`.

## P6-G1-B-PINUnlock - refactor(P6-G1-B): PINUnlock as page

- `src/pages/PINUnlock` is now a page with one hook (`usePINUnlock`). `api.ts`, `types.ts` and `mocks.ts` are deleted. The flows of `PinUnlockContent` and `PinCodeUnlock` moved to `usePinUnlockContent` and `usePinCodeUnlock` in `src/platform/session/`; the three unlock components render from props only.
- New `PinUnlockContentContainer` in `src/platform/feedback/dialogs/` (dialogs export), used by the lock dialog and PINChange. Gate W13: 29 rows deleted from `arch-baseline.csv`. By decision W14, the 2 `PinCode.tsx` rows go to owner `P6-G1-B-PINChange` and the `FingerprintScanner.tsx` row to `P7`.

## P6-G1-B-PINChange - refactor(P6-G1-B): PINChange as page

- `src/pages/PINChange` is now a page with one hook (`usePINChange`). `api.ts`, `types.ts` and `mocks.ts` are deleted. `move-map.csv`: PINChange row `moved`.
- Decision W14: `components/auth/PinCode` is props-only (`renderPreventBackNavigation`, `onBeforeSetPin`) at both call sites. The 2 PinCode rows of `arch-baseline.csv` are deleted; no G1 row is left.

## P6-G1-B-PINBiometricsMenu - refactor(P6-G1-B): PINBiometricsMenu as page

- `src/pages/PINBiometricsMenu` is now a page with one hook (`usePINBiometricsMenu`, with the pure `pinBiometricsMenuState`). The page renders `DetailLayout` directly. `api.ts`, `types.ts` and `mocks.ts` are deleted; `staticEntities.ts` moved to the page root.
- The hook reads `App_PIN_BiometricEnabled` on every initialization. This is a storage read: the tester confirmed no visible effect and no call effect. `move-map.csv`: PINBiometricsMenu row `moved`.

## P6-G1-B-TermsAndPoliciesMenu - refactor(P6-G1-B): TermsAndPoliciesMenu as page

- `src/pages/TermsAndPoliciesMenu` is now a page with one hook (`useTermsAndPoliciesMenu`). The page renders `DetailLayout` directly. `api.ts`, `types.ts` and the re-export `components/actions.ts` are deleted; `staticEntities.ts` moved to the page root.
- The test of `openPolicy` moved to `src/shared/UBTConnect_Utils/lib/openPolicy.test.ts`. `move-map.csv`: TermsAndPoliciesMenu row set to `moved`.

## P6-G1-B-Profile - refactor(P6-G1-B): Profile as page

- `src/pages/Profile` is now a page with one hook (`useProfile`, with the pure `profileState`) and 9 components. `api.ts`, `types.ts` and `components/actions.ts` are deleted; the page calls `@/api/country` and `@/api/member` directly.
- No new container: the page gives `HouseholdDetailsContainer` to the preview sheet through a slot. `move-map.csv`: Profile row `moved`.

## P6-G1-C - refactor(P6-G1-C): prune group G1

- Prune: `knip` finds no unused file in the G1 folders (10 unused files in the whole app, all outside G1: later groups, `src/shared/`, `.storybook/withFlags.ts`). `jscpd` finds 0 clones in 210 files of the G1 folders. The only removal: 10 empty directories `src/screens/<G1 route>` were removed (not tracked by git).
- Group gate G1: `ci` exit 0; parity `visual --all` 64/64 clean on both references; `e2e:pwa` 9/9.
  `arch_baseline.py check` exit 0 (37 rows, no P6-G1 owner). Report: `reports/P6-G1.md`.
- Watch item: first-load Login is 192.96 kB gzip, 0.88 kB under the +5 percent limit (193.84); HomeFeed margin is 3.42 kB. Follow-up F14 in `migration/refactor/followups.md`.

## P6-G2-A - refactor(P6-G2-A): move G2 to pages/

- The 9 G2 routes moved from `src/screens/<R>` to `src/pages/<R>`. `index.tsx` is now `<R>Page.tsx`, with one `@origin` tag per page. The code did not change.
- `move-map.csv`: the 9 G2 page rows are set to `moved`. The 2 block rows of EmailContact and EmailTarget stay open for step B.

## P6-G2-B-Shared - refactor(P6-G2-B): move the shared blocks of group G2

- 9 blocks of `src/shared/` (62 files, phase P6-G2 rows of `move-map.csv`) moved to `src/components/layout/` (BaseLayout, LegacyLayout, OrbitLayout, MenuIcon, DirectoryDetailSection, SectionLayout) and `src/components/contact/` (ContactPopup, ContactPopupByPhone, ContactEmailForm). They took the target name (path, component and `<Name>Props`). Each has an `@origin` tag. The 9 rows are set to `moved`.
- Gate W15: `arch-baseline.csv` got 11 rows (48 in total) for Rule 4 warnings that the move made visible. Owners: ContactEmailForm (1) to P6-G2-B-ContactByEmailMember; ContactPopup (2), BaseLayout (4), LegacyLayout (3) and MenuIcon (1) to P7.
- New mode `arch_baseline.py check --move-step <phase> --base <commit>` lists a new row as ADD. It does so only for a file that is a move target of that phase. The old file must have imported the same module at the base commit.
- Decision W17 (Window 4): ContactEmailForm has a colocated `mocks.ts` (handler SendContactMemberEmail). `src/mocks/handlers.ts` has a new glob `../components/**/mocks.ts`, placed after `shared` and before `platform`. `handlers.test.ts` checks the new order. `rf.py diffcheck --move` flags only these lines, and the handler set is unchanged (155 handlers).
- Later groups reuse the glob.

## P6-G2-B-ContactUsMenu - refactor(P6-G2-B): ContactUsMenu as page

- ContactUsMenu is a page plus a hook: `src/pages/ContactUsMenu/hooks/useContactUsMenu.ts` and the pure state file `hooks/contactUsMenuState.ts`.
- The page renders `DetailLayout` without the `Layout_DetailPage` adapter. `api.ts`, `types.ts` and `mocks.ts` of the page are deleted.

## P6-G2-B-ContactUsDetails - refactor(P6-G2-B): ContactUsDetails as page

- ContactUsDetails is a page plus a hook: `src/pages/ContactUsDetails/hooks/useContactUsDetails.ts` and the pure state file `hooks/contactUsDetailsState.ts`. Route inputs are in `inputs.ts`; there is no container. `api.ts` and `types.ts` are deleted. The hook calls `@/api/message` directly.
- The page renders `DetailLayout` directly and has 6 page components (`components/`).
- Follow-up for P6-G2-C: `Type_ContactSubject` is defined twice (`pages/ContactUsDetails/staticEntities.ts` and `pages/ContactUsMenu/components/staticEntities.ts`).

## P6-G2-B-ContactByEmailMember - refactor(P6-G2-B): ContactByEmailMember as page

- Pilot of the ContactByEmail pattern (decision Q6). `ContactEmailForm` is props only: the new prop `onBeforeSubmitForm` replaces its `@/platform/navigation` import, and its row is removed from `arch-baseline.csv` (47 rows). New cards in `components/contact/`: `ContactPersonCard` (used by Member) and `ContactHeaderCard` (no page caller yet).
- `src/pages/ContactByEmailMember` has `config.ts`, `inputs.ts` (replaces `api.ts` and `types.ts`) and `hooks/useContactByEmailMemberSubmit.ts`. The other 4 ContactByEmail pages change at the call site only: one prop `onBeforeSubmitForm={allowUpcomingNavigation}`.
- Parity visual is clean for the 3 routes with states; LDMCoordinator and OrbitHost have no parity states (their call-site change is checked by the diff and unit tests). `move-map.csv`: notes of the ContactByEmailMember and ContactByEmailForm rows. The pattern is in `docs/guides/page-template.md`.

## P6-G2-B-ContactByEmailOneSchoolGlobal - refactor(P6-G2-B): ContactByEmailOneSchoolGlobal as page

- ContactByEmailOneSchoolGlobal follows the ContactByEmail pattern of the pilot: `config.ts`, `inputs.ts` (replaces `api.ts` and `types.ts`), `actions.ts` and `hooks/useContactByEmailOneSchoolGlobalSubmit.ts`. `staticEntities.ts` moves to the page root.
- Its card is the shared `ContactHeaderCard` (first page caller). `config.ts` exports a constant, not a function, because no value depends on an input.

## P6-G2-B-ContactByEmailLDMCoordinator - refactor(P6-G2-B): ContactByEmailLDMCoordinator as page

- ContactByEmailLDMCoordinator follows the ContactByEmail pattern of the pilot: `config.ts`, `inputs.ts` (replaces `api.ts` and `types.ts`), `actions.ts` (moved from `components/`) and `hooks/useContactByEmailLDMCoordinatorSubmit.ts`. Its card is the shared `ContactHeaderCard`; the page has a new test (7 tests).
- The route has no parity states. It was checked by the unit tests and the diff against HEAD (same send order and request body), not by parity.

## P6-G2-B-ContactByEmailOrbitHelpdesk - refactor(P6-G2-B): ContactByEmailOrbitHelpdesk as page

- ContactByEmailOrbitHelpdesk follows the ContactByEmail pattern of the pilot: `config.ts`, `inputs.ts` (replaces `api.ts` and `types.ts`), `actions.ts` (moved from `components/`) and `hooks/useContactByEmailOrbitHelpdeskSubmit.ts`. It has no `staticEntities.ts`.
- Its card is the shared `ContactHeaderCard`; the page has a new test (5 tests). Parity visual is clean for the 2 routes with states.

## P6-G2-B-ContactByEmailOrbitHost - refactor(P6-G2-B): ContactByEmailOrbitHost as page

- ContactByEmailOrbitHost follows the ContactByEmail pattern of the pilot: `config.ts`, `inputs.ts` (replaces `api.ts` and `types.ts`) and `hooks/useContactByEmailOrbitHostSubmit.ts`. The route has no `components/` folder. Its card is the shared `ContactPersonCard` (second page caller).
- The route has no parity states. It was checked by 6 new unit tests and the diff (same send order and request body), not by parity.

## P6-G2-B-EmailContact - refactor(P6-G2-B): EmailContact as page

- EmailContact is a page with `inputs.ts` (replaces `api.ts` and `types.ts`), `actions.ts` (moved from `components/`) and two hooks: `useOrbitContactForm` (flows of ScreenBlock_ContactForm, with the pure `orbitContactFormState.ts`) and `useEmailContact` (OnHandle_Submitted).
- The form is the props-only view `OrbitContactFormView`; `ScreenBlock_ContactForm.tsx` is deleted. The page does not use the shared `ContactEmailForm` (user decision Q6). A temporary old-vs-new test (7 scenarios, now deleted) showed the same DOM and calls.

## P6-G2-B-EmailTarget - refactor(P6-G2-B): EmailTarget as page

- EmailTarget is a page with `inputs.ts` (replaces `api.ts` and `types.ts`), `hooks/useHouseholdEmail.ts`, two state files (`householdEmailState.ts`, `emailTargetState.ts`) and the props-only view `components/HouseholdEmailView.tsx`; `ScreenBlock_Household_Email.tsx` is deleted.
- The page no longer sets `key={params.toString()}` on the block: `ScreenTransitionGroup` mounts one page per `location.key`, so a new query string mounts a new page (test.md). `ValidationServiceProvider` moved from the block to the page; the DOM is the same.
- Follow-up F15: a committed test for a new query string on the same route (no such test exists).

## P6-G2-C - refactor(P6-G2-C): prune group G2

- Prune: `knip` finds no unused file in the G2 folders (9 unused files in the whole app, all outside G2). `jscpd` finds 1 clone of 11 lines in 125 files: mock data in `pages/ContactByEmailOrbitHelpdesk/mocks.ts` and `pages/ContactByEmailOrbitHost/mocks.ts`. It is left as is. Follow-up F16.
- Group gate G2: `ci` exit 0; parity `visual --all` 64/64 clean on both references; `e2e:pwa` 9/9. `arch_baseline.py check` exit 0 (47 rows, no P6-G2 owner). Report: `reports/P6-G2.md`.
- Watch item: first-load Login is 193.08 kB gzip, 0.76 kB under the +5 percent limit (193.84); HomeFeed margin is 3.29 kB. Follow-up F14.

## P6-F15 - refactor(P6-F15): cut the Login first load

- Architecture: first-load Login goes from 193.08 to 186.87 kB gzip. The app-start path uses the deep imports `@/api/message/repository` in `platform/bootstrap/startup.ts` and `@/api/bookmark/keys` in `shared/Connect2_LegacyShared/lib/actions.ts` (W18).
- `get_IsUnsupportedVersion`, `get_IsUnsupportedSystem`, `UNSUPPORTED_BROWSER_SCENARIO` and its type moved to `shared/UBTConnect/lib/unsupportedVersion.ts`.
- Watch item: HomeFeed is 245.51 of 248.22 kB gzip. Follow-up F17.
