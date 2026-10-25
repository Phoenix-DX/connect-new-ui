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

## P6-G3-A - refactor(P6-G3-A): move G3 to pages/

- The 8 G3 routes (HomeFeed, FeedItemDetail, Updates_SingleList, Services, Search, Notifications, MessageList, MessageDetail) moved from `src/screens/<R>` to `src/pages/<R>`. `index.tsx` is now `<R>Page.tsx`, with one `@origin` tag per page.
- Shared blocks of these routes stay in `shared/` until step B. Parity `strict` on 8 routes: 0 differences on both references.
- Watch item: HomeFeed is 245.58 of 248.22 kB gzip. Follow-up F17.

## P6-G3-B-Shared - refactor(P6-G3-B): move the shared blocks of group G3

- 19 blocks of `src/shared/` (135 files, phase P6-G3 rows of `move-map.csv`) moved to `src/components/{layout,feed,search,share,notification,filter}/`, `src/containers/ShareSheet/` and `src/platform/navigation/ScrollAnchor/`. 16 files took the target name (path, component and `<Name>Props`). Each block has an `@origin` tag. The 19 rows are set to `moved`.
- Gate W15: `arch-baseline.csv` got 31 rows for Rule 4 warnings that the move made visible. Owners: 17 to P6-G3-B-HomeFeed, 9 to P6-G3-B-Search, 3 to P6-G3-B-Updates_SingleList, 2 to P7.
- Two blocks have a colocated `mocks.ts`: `FeedCms` (now in `components/feed`) and `ShareSheet` (now in `containers/ShareSheet`). The existing globs `../components/**/mocks.ts` and `../containers/*/mocks.ts` of `src/mocks/handlers.ts` pick them up; the handler set is unchanged.

## P6-G3-B-HomeFeed - refactor(P6-G3-B): shared blocks of HomeFeed (page part deferred)

- CommunityPopulation, EmbeddedFeed, FeedCms and NotificationIcon are props-only. Their flows are in `platform/session/useNotificationIcon.ts` and `useEmbeddedFeed.ts`. Calls: `useCommunityPopulationQuery` in `api/member`, `useFeedConfigQuery` in the new domain `api/feed`. 17 baseline rows removed.
- HomeFeed first load is 245.99 kB gzip (+0.42 kB, limit 248.22), accepted under W21 with a tripwire on F17. The page part (FeedBlock_* split, `pages/HomeFeed/api.ts`) moves to the step P6-G3-B-HomeFeed-Page (W22). The HomeFeed page row of `move-map.csv` stays open.

## P6-G3-B-Services - refactor(P6-G3-B): Services as page

- Services is a page: hook `hooks/useServices.ts`, pure state `hooks/servicesState.ts` (Action_ChangeOrderLocal), 7 props-only components. `api.ts` and `types.ts` are deleted.
- New domain `api/service` (W8) and new module `platform/feedback/bubbleErrors.ts` (`raiseBubbledToFlowHandler`). The query key changed to `serviceKeys.user()`; no other code reads it.
- HomeFeed first load 245.91 kB gzip (limit 248.22). Decision W23 (`isAlive` guards state writes only) is in `page-template.md`.

## P6-G3-B-Search - refactor(P6-G3-B): Search as page

- Search is a page: hook `hooks/useSearch.ts`, pure state `hooks/searchState.ts`, components `SearchView` and `RecentSearch`. `api.ts` and `types.ts` are deleted; the two calls are in the new domain `api/search` (W8).
- FilterSheet, FilterSheetIcon and FilterOptionList are props-only. The data, the cache blocks, the back-navigation block and the upgrade popup come from the new `containers/FilterSheet`. Call sites changed: CountryDetails, Notes_FilterSheet and Directory_Updates_FilterSheet (import and tag), Updates_SingleList (prop `onShowUpgradePopUp`). 9 baseline rows removed.
- Kept quirk: SearchView passes new `inOptions` and `inStartFilter` records on each render, which resets the sheet's country selection (follow-up F18). HomeFeed first load 246.06 kB gzip (limit 248.22).

## P6-G3-B-MessageList - refactor(P6-G3-B): MessageList as page

- MessageList is a page: hook `hooks/useMessageList.ts`, pure state `hooks/messageListState.ts`, props-only `components/MessageListView.tsx`. `api.ts` is deleted; `types.ts` keeps `MessageWire` for the mocks.
- The GetMessages query key `['MessageList','DataActionGetMessages']` stays in the hook on purpose: it keeps the back-navigation restore. MessageDetail keeps its own `decrementReadMessagesCounter`; P6-G3-C removes the duplicate.
- HomeFeed first load 246.03 kB gzip (limit 248.22).

## P6-G3-B-MessageDetail - refactor(P6-G3-B): MessageDetail as page

- MessageDetail is a page: hook `hooks/useMessageDetail.ts` (on `useFlowState`), pure state `hooks/messageDetailState.ts`, props-only `components/MessageDetailView.tsx`. `api.ts` and `types.ts` are deleted; the input type is in `inputs.ts`. The view cache now uses one key, `MyNotifications.ScreenBlock_MessageDetail`.
- Decision W23 is applied: only the state writes are gated after an unmount; the side effects run once. A StrictMode once-guard stops a second OnReady run. MessageDetail keeps its own `decrementReadMessagesCounter` (as MessageList does); P6-G3-C removes the duplicate.
- The shared chunk `flowState` is new (+0.03 kB gzip on HomeFeed, +0.01 kB on Login; limit 248.22).

## P6-G3-B-FeedItemDetail - refactor(P6-G3-B): FeedItemDetail as page

- FeedItemDetail is a page: hook `hooks/useFeedItemDetail.ts` (4 share variables, 2 handlers), input reader in `inputs.ts`. The page renders `DetailLayout` with `useNavigateBack`, not the `Layout_DetailPage` adapter (16 importers keep it). `api.ts`, `types.ts` and the empty `mocks.ts` are deleted.
- No parity capture exists for this route. The hook tests and the page tests (back arrow, view-cache restore) cover it. HomeFeed first load 246.04 kB gzip (limit 248.22).

## P6-G3-B-Updates_SingleList - refactor(P6-G3-B): Updates_SingleList as page

- Updates_SingleList is a page: hook `hooks/useUpdatesSingleList.ts` (on `useFlowState`, new optional `restore(saved)` option), pure state `hooks/updatesSingleListState.ts`, component `UpdatesList`. `api.ts` and `types.ts` are deleted; the page calls `@/api/update`.
- MainLayoutFixedTitle: the stories use empty OSBlock stand-ins, so its 3 baseline rows are removed (49 rows left).
- The Updates_SingleList chunk is +0.60 kB gzip, because it now loads `useFlowState`. The HouseholdDetails, Profile and Search chunks are 0.11 to 0.16 kB smaller. HomeFeed first load is 246.00 kB gzip (limit 248.22).

## P6-G3-B-Notifications - refactor(P6-G3-B): Notifications as page

- Notifications is a page: hook `hooks/useNotifications.ts`, pure state `hooks/notificationsState.ts`. It uses `useReducer` and a `latest` ref, not `useFlowState`: the view cache keeps 3 variables, and `useFlowState` restores the old list too. One record `App_Notifications.Notifications` replaces 3 keys.
- `api.ts` and `types.ts` are deleted; the hook calls `@/api/notification`. W23 tests cover the unmount case. The `// @os-block` tags are now `@origin` (script `migration/tools/refactor/os-block-to-origin.py`).

## P6-F16 - refactor: trim the HomeFeed entry (W21, W24)

- MSW is out of the entry: `src/mocks/scenarioParams.ts` holds `scenario` and `latency`; `scenario.ts` re-exports them. The app-start unread-messages call is in `src/api/message/unreadMessages.ts` (W18 narrow module); `repository.ts` and `mapper.ts` re-export it.
- HomeFeed first load 246.02 to 243.05 kB gzip (limit 248.22); Login 184.02 kB. Later trim candidates: Vite preload map, the two generated route tables, Leaflet json and bookmark code in `shared/UBTConnect/lib/actions.ts` (see F17).

## P6-G3-B-HomeFeed-Page - refactor(P6-G3-B): HomeFeed page part

- FeedBlock_Services, FeedBlock_Updates and Dialog_GoExternalApp are hooks in `pages/HomeFeed/hooks` (`useFeedServices`, `useFeedUpdates`, `goToExternalApp`), called from two binding components in the page file, plus props-only components. GetServices is in `api/service` with the key `['service', 'feed']`. `api.ts` and `types.ts` are deleted; `// @os-block` is now `@origin` in Section, Section_FeedWrapper and AppLogo_White.
- HomeFeed first load grew 1.11 kB gzip. W24 accepted this once. After P6-F16 the margin is 4.20 kB (244.02 kB, limit 248.22).

## P6-G3-C - refactor(P6-G3-C): prune group G3

- Prune: `knip` finds no unused file in the G3 folders (9 unused files in the whole app, none in G3). `jscpd` finds 3 small clones in 195 files (0.22 percent), left as is. `decrementReadMessagesCounter` had one copy in MessageList and one in MessageDetail; it now has one copy in `src/platform/session/unreadCounters.ts`, with its tests.
- Group gate G3: `ci` exit 0; parity `visual --all` 64/64 clean on both references; `e2e:pwa` 9/9. `arch_baseline.py check` exit 0 (49 rows, no P6-G3 owner). Report: `reports/P6-G3.md`.
- Bundle: HomeFeed 244.00 kB gzip (limit 248.22, margin 4.22); Login 184.00 kB gzip (limit 193.84, margin 9.84).

## P6-G4-A - refactor(P6-G4-A): move G4 to pages/

- The 13 G4 routes (BrowseCountries, BrowseDirectory, CountryList, CountryDetails, HouseholdCarousel, Household_Relations, Locality_Details, OneSchoolGlobalDetails, Photobook, SupperMeeting_Carousel, SupperMeeting_Details, CommunityBusinessDetails_CoomingSoon, Assemble_BrowseByCountry) moved from `src/screens/<R>` to `src/pages/<R>`. `index.tsx` is now `<R>Page.tsx`, with one `@origin` tag per page.
- Shared blocks of these routes stay in `shared/` until step B. Parity `strict` on 13 routes: clean on both references.

## P6-G4-B-Shared - refactor(P6-G4-B): move the shared blocks of group G4

- 38 blocks of `src/shared/` (293 files, phase P6-G4 rows of `move-map.csv`) moved to `src/components/{assemble,contact,directory,household,layout,note}/`, `src/containers/NoteListActions/` and `src/containers/EntityDetailsActions/`. 31 files took the target name (path, component and `<Name>Props`). Each block has an `@origin` tag. The 38 rows are set to `moved`.
- Gate W15: `arch-baseline.csv` got 38 rows for Rule 4 warnings that the move made visible. Owners: 2 to P6-G4-B-CountryList, 10 to P6-G4-B-HouseholdCarousel, 1 to P6-G4-B-SupperMeeting_Carousel, 7 to P6-G4-B-SupperMeeting_Details, 18 to P7.
- Six colocated `mocks.ts` moved. Four are under `components/` (LocalityListDetail, SupperMeetingDetails, SupperMeetingHouseholdList, NotesSheet). Two are under `containers/` (NoteListActions, EntityDetailsActions). The globs of `src/mocks/handlers.ts` pick them up. The handler set is unchanged (155).
- Tool fix: `migration/tools/refactor/arch_baseline.py check --move-step` now counts an old import of a module that moves in the same phase as the same module under its new path. Self-check: `migration/tools/refactor/arch_baseline_selfcheck.py`.

## P6-G4-B-BrowseCountries - refactor(P6-G4-B): BrowseCountries page part

- `pages/BrowseCountries` is a page with a flow hook `useBrowseCountries` (on `useFlowState`, W23 once-guard and isAlive write guard) and a pure state file `browseCountriesState`. It has no container.
- `api.ts`, `types.ts` and `components/actions.ts` are deleted; the hook calls `fetchBrowseCountriesStatistics` of `api/country`. The view cache key is now `Directory_Locality.BrowseCountries`.

## P6-G4-B-BrowseDirectory - refactor(P6-G4-B): BrowseDirectory as page

- `pages/BrowseDirectory` is a page with a flow hook `useBrowseDirectory` (on `useFlowState`, W23 once-guard and write guard) and a pure state file `browseDirectoryState`. The page renders `DetailLayout` with `useNavigateBack`, not the `Layout_DetailPage` adapter.
- `api.ts`, `types.ts` and `components/actions.ts` are deleted; the flow calls `fetchLocalityCardList` of `api/locality` on demand. `useLocalityCardListQuery` has no caller yet: a query refetches on return and drop the 10 placeholder rows.
- The view cache key is now `Directory_Locality.BrowseDirectory`.

## P6-G4-B-CountryList - refactor(P6-G4-B): CountryList as page

- `pages/CountryList` is a page with a flow hook `useCountryList` (on `useFlowState`, W23 once-guard and write guard), a pure state file `countryListState` and the props-only `CountryListContent`. `api.ts` and `types.ts` are deleted.
- `DirectoryLegendSheet` is props-only: the new prop `preventBackNavigation` takes the slot; CountryList and CountryDetails give `PreventBackNavigation` (2 lines in CountryDetails). 2 rows removed from `arch-baseline.csv`.
- CountryList chunk +0.74 kB gzip from the shared `flowState` chunk.

## P6-G4-B-HouseholdCarousel - refactor(P6-G4-B): HouseholdCarousel as page

- `pages/HouseholdCarousel` is a page with the hook `useHouseholdCarousel`, the actions file `householdCarouselActions.ts` (from `components/logic.ts`) and `inputs.ts`. `api.ts` and `types.ts` are deleted. The hook keeps `useViewState` and an `unmounted` guard on the state writes (W23). A failed MarkAsRead during a swipe still shows no message, as before.
- EntitiesCarousel, EntitiesCarousel_Element and EntitiesCarousel_HouseholdDetails have props only, with the slot `renderHouseholdDetails`. The page renders `HouseholdDetailsContainer` in it. 10 rows removed from `arch-baseline.csv`.
- SupperMeeting_Carousel first load about -9.4 kB gzip (it no longer loads the container). Storybook: story V3 of EntitiesCarousel_Element keeps its call-to-action section loading.

## P6-G4-B-Photobook - refactor(P6-G4-B): Photobook as page

- `pages/Photobook` is a page. The screen flow is in `usePhotobook` (on `useFlowState`) and the pure `photobookState.ts`; the caption flow is in `useHouseholdCaption`, which `Photobook_Options_Left` calls. `inputs.ts` holds the call inputs. `api.ts` and `types.ts` are deleted.
- The 2 calls (GetLocalityHouseholdIds, GetHouseholdCaption) are in `api/household`. A back navigation with a restored list does not call again; a restored view without a list calls again.
- W23: after unmount only state writes are skipped. A late failure of GetLocalityHouseholdIds is not raised, as in the old page; the caption flow still raises.

## P6-G4-B-CountryDetails - refactor(P6-G4-B): CountryDetails as page

- `pages/CountryDetails` is a page with the hook `useCountryDetails`: the `api/country` query, `useViewState` for 4 variables, no `useFlowState`, no `isAlive`.
- It also has the pure `countryDetailsState.ts`, the props-only `CountryDetailsContent` and `inputs.ts`. `api.ts` and `types.ts` are deleted.
- `raiseToFlowHandler` now comes from `@/platform/feedback/flowErrors`: depcruise warnings 212 to 211. Baseline rows unchanged.

## P6-G4-B-Household_Relations - refactor(P6-G4-B): Household_Relations as page

- `pages/Household_Relations` is a page with the flow hook `useHouseholdRelations` (on `useFlowState`), the pure `householdRelationsState.ts` and the props-only `HouseholdRelationsView`. `api.ts` became `inputs.ts`; `types.ts` is deleted.
- The 2 calls are in `api/household` (`fetchMemberRelations`, `fetchSiblingRelations`). W23: after unmount no further call starts, as the compiled block does.
- depcruise warnings 213 to 210. The last old-pattern `useFlowState` file in `screens/` is gone from the page-template list.

## P6-G4-B-Locality_Details - refactor(P6-G4-B): Locality_Details as page

- `pages/Locality_Details` is a page. The screen flow is in `useLocalityDetails` (on `useFlowState`, W23 once-guard) and the pure `localityDetailsState.ts`. `api.ts` became `inputs.ts`; `types.ts` is deleted.
- The 4 tag blocks and `Household_Card` call their own hooks (`localityBlocksState.ts`), because they mount with the selected tag. The 2 household calls are in `api/household`.
- depcruise warnings 213 to 206 (7 rule-9 warnings of the flow files are gone).

## P6-G4-B-OneSchoolGlobalDetails - refactor(P6-G4-B): OneSchoolGlobalDetails as page

- `pages/OneSchoolGlobalDetails` is a page. The screen flow is in `useOneSchoolGlobalDetails` (on `useFlowState`) and the pure `oneSchoolGlobalDetailsState.ts`. `api.ts` became `inputs.ts`; `types.ts` is deleted.
- The call is the query hook `useOneSchoolGlobalDetailsQuery` in `api/locality` (same query options as the old port, so W23 behavior is kept).
- depcruise warnings 212 to 210 (2 rule-9 warnings of the route are gone).

## P6-G4-B-SupperMeeting_Carousel - refactor(P6-G4-B): SupperMeeting_Carousel as page

- `pages/SupperMeeting_Carousel` is a page with the hook `useSupperMeetingCarousel` (`useViewState`, no server call). The client logic is in `hooks/supperMeetingCarouselActions.ts`. `inputs.ts` holds the input reader and the mock preload. `api.ts` and `types.ts` are deleted.
- `CarouselSupperMeetingDetails` is props-only: its stories no longer import `platform/`. Its 1 row is removed from `arch-baseline.csv` (74 rows left: SupperMeeting_Details 7, P7 66, pre-existing 1).
- depcruise warnings are unchanged (212 at the base); none are in the new folders.

## P6-G4-B-CommunityBusinessDetails_CoomingSoon - refactor(P6-G4-B): CommunityBusinessDetails_CoomingSoon as page

- `pages/CommunityBusinessDetails_CoomingSoon` is a page with no hook: the screen is static (no event, variable or call). `inputs.ts` holds the input reader and type.
- `api.ts`, `types.ts` and the empty `mocks.ts` are deleted. A page test was added (5 tests). No shared block changed.

## P6-G4-B-Assemble_BrowseByCountry - refactor(P6-G4-B): Assemble_BrowseByCountry as page

- `pages/Assemble_BrowseByCountry` is a page with the hook `useAssembleFilter` (`useFlowState`), the state file `assembleFilterState.ts` and the props-only view `AssembleFilterView`. `api.ts`, `types.ts` and `ScreenBlock_Assemble_Filter.tsx` are deleted.
- The 2 adapters of `api.ts` are private functions of the hook (they call client actions, which `api/country` may not import). `AssembleEvents` still has its own copy (follow-up F21).
- depcruise warnings 210 to 209 (the rule-9 warning of the old block is gone).

## P6-G4-B-SupperMeeting_Details - refactor(P6-G4-B): SupperMeeting_Details as page

- New container `containers/SupperMeetingDetails` (hook `useSupperMeetingDetails` on `useFlowState`, W23 once-guard) holds both data actions. `SupperMeetingDetails` and `SupperMeetingHouseholdList` are props-only. The slot `renderSupperMeetingDetails` runs through `EntitiesCarousel`, `EntitiesCarousel_Element` and `CarouselSupperMeetingDetails`; both pages render the container. `DataActionGetSubdivisionHouseholds` moved to `api/locality`.
- `arch-baseline.csv`: the 7 rows of this step are gone (74 to 67 rows: P7 66, pre-existing 1). Back navigation (both calls run again) is follow-up F22.
- First load: HomeFeed +0.02 kB, Login +0.01 kB gzip; HouseholdCarousel -4.73 kB (dev.md).

## P6-G4-C - refactor(P6-G4-C): prune group G4 and group gate

- Architecture: no change. `knip` found no unused file in the G4 folders; `jscpd` found only small clones, left as is.
- Group gate passes: parity `visual --all` 64/64 clean on both references, `e2e:pwa` 9/9, arch baseline 67 rows (P7 66, pre-existing 1).
- Group report: `app/docs/refactor/reports/P6-G4.md`. Open follow-ups F21 and F22.

## P6-F17 - refactor(P6-F17): OnReady before paint option in useFlowState

- `useFlowState` (`platform/navigation/flowState.ts`) has the opt-in option `beforePaint` (decision W28). When it is set, OnReady runs once in a layout effect, before the first paint.
- The default is off: no page changes. `isAlive` guards state writes only (W23). The guide `docs/guides/page-template.md` names the option.

## P6-G5-A - refactor(P6-G5-A): move G5 to pages/

- The 16 G5 routes (OrbitLanding, OrbitAdminLanding, OrbitAdminEventDetail, EventDetail, EventBooklet, MilestoneDetail, GuestArrangements, HelpersDetail, HostSurvey, TransportDetail, MyEntertaining, LDM_MyEvents_V2, LDM_EventDetail_V2, LDM_Email_V2, AssembleEvents, AssembleDetail) moved from `src/screens/<R>` to `src/pages/<R>`. `index.tsx` is now `<R>Page.tsx`, with one `@origin` tag per page.
- Known issue: the 3 LDM V2 pages name the flow `Legacy_LDMEventsFlow` in `@origin`, not `Legacy_LDMEventsFlow_V2`. The LDM page steps fix it. Shared blocks stay in `shared/` until step B.

## P6-G5-B-Shared - refactor(P6-G5-B): move the shared blocks of group G5

- 25 blocks of `src/shared/` (163 files, phase P6-G5 rows of `move-map.csv`) moved to `src/components/{assemble,bookmark,contact,orbit}/` and `src/pages/EventBooklet/components/{OrbitNoResults,FooterWithActions}/`. 21 files took the target name (component and `<Name>Props`). Each block has an `@origin` tag. The 25 rows are set to `moved`.
- Gate W15: `arch-baseline.csv` got 8 rows for Rule 4 warnings that the move made visible. Owners: 6 to P6-G5-B-AssembleDetail (AssembleSummaryCard, VirtualMeetingUrl), 2 to P7 (ItemOptionsMenu).
- `shared/Connect2_Assemble_MUI/` and `shared/Connect2_OrbitMobile_MUI/` keep only `lib/`.

## P6-G5-B-OrbitLanding - refactor(P6-G5-B): OrbitLanding as page

- `pages/OrbitLanding` is a page with a flow hook (`hooks/useOrbitLanding.ts`, `hooks/orbitLandingState.ts`) and a props-only view (`components/OrbitLandingView.tsx`). It has no container.
- `api.ts` and `types.ts` are deleted. DataActionGet_HouseholdMembers is `fetchOrbitHouseholdMembers` in `api/household`; the hook calls `fetchEventsByMemberId` of `api/event`.
- The OrbitLanding chunk grows 1.64 kB gzip (it is not an entry route); HomeFeed and Login change by -0.02 kB.

## P6-G5-B-OrbitAdminLanding - refactor(P6-G5-B): OrbitAdminLanding as page

- `pages/OrbitAdminLanding` is a page with a flow hook (`hooks/useAdminLanding.ts`, `hooks/adminLandingState.ts`), a screen-handler hook (`hooks/useNavigateToEventDetail.ts`) and a props-only view (`components/AdminLandingView.tsx`). It has no container.
- `api.ts` and `types.ts` are deleted. The hooks call `fetchAdminEvents` and `fetchMilestoneScanFF` of `api/event` directly.
- The OrbitAdminLanding chunk grows 0.61 kB gzip (not an entry route); HomeFeed and Login change by -0.03 and -0.02 kB (dev.md).

## P6-G5-B-OrbitAdminEventDetail - refactor(P6-G5-B): OrbitAdminEventDetail as page

- `pages/OrbitAdminEventDetail` is a page with a flow hook (`hooks/useAdminEventDetail.ts`, `hooks/adminEventDetailState.ts`) and a props-only view (`components/AdminEventDetailView.tsx`). It has no container.
- `api.ts` and `types.ts` are deleted. `api/image` gets `repository.ts` with `fetchLegacySignedImageURL`; the hook also calls `api/event` and `api/member`. The OrbitAdminEventDetail chunk grows 0.69 kB gzip (not an entry route).

## P6-G5-B-EventDetail - refactor(P6-G5-B): EventDetail as page

- `pages/EventDetail` is a page with a flow hook (`hooks/useEventDetail.ts`, `hooks/eventDetailState.ts`) and a props-only view (`components/EventDetailView.tsx`). It has no container. The hook sets `beforePaint: true` (decision W28) because the old block ran OnReady in a `useLayoutEffect`.
- `api.ts` and `types.ts` are deleted; the hook calls `fetchEventDetails`, `fetchHostSurveyStatus`, `fetchHasDocuments` and `fetchHasQRCode` of `api/event`. Dependency-cruiser warnings 210 to 209 (rule 9 of the old block gone).
- The EventDetail chunk grows 1.06 kB gzip (not an entry route); HomeFeed and Login change by +0.05 and +0.02 kB (W21 tripwire not reached).

## P6-G5-B-EventBooklet - refactor(P6-G5-B): EventBooklet as page

- `pages/EventBooklet` is a page with a flow hook (`hooks/useEventBooklet.ts`, `hooks/eventBookletState.ts`) and a props-only view (`components/EventBookletView.tsx` with guest, helper and list parts). It has no container. The hook sets `beforePaint: true` (decision W28) because the old block ran OnReady before the paint.
- `api.ts` is deleted; the hook calls `fetchEventBookletFilters`, `fetchEventBookletGuests` and `fetchEventBookletHelpers` of `api/event`. Dependency-cruiser warnings 210 to 209.
- EventBooklet has no parity states, so its DOM evidence is the developer's 16-scenario old-vs-new test (`dev.md`). The EventBooklet chunk grows 1.74 kB gzip (not an entry route); HomeFeed and Login change by +0.00 and +0.01 kB.

## P6-G5-B-MilestoneDetail - refactor(P6-G5-B): MilestoneDetail as page

- `pages/MilestoneDetail` is a page with 2 flow hooks (`hooks/useMilestoneWrapper.ts`, `hooks/useAccommodationHost.ts`, each with a pure state file) and 2 props-only views. It has no container. Both hooks set `beforePaint: true` (decision W28). `api.ts`, `types.ts` and `components/actions.ts` are deleted; the hooks call `api/event` and `api/image`.
- Back navigation (W27): the accommodation block reloads its data, as the old port did. The old page crashed on 2 paths: an optional input missing, or a visit from a notification, then member and back. Both are "old: crash, new: reload". OutSystems keeps the state: follow-up F24.

## P6-G5-B-GuestArrangements - refactor(P6-G5-B): GuestArrangements as page

- `pages/GuestArrangements` is a page with a flow hook (`hooks/useGuestArrangements.ts`, `hooks/guestArrangementsState.ts`, `hooks/guestArrangementsActions.ts`) and a props-only view (`components/GuestArrangementsView.tsx`). It has no container. The hook sets `beforePaint: true` (decision W28) because the old block ran OnReady in a `useLayoutEffect`.
- `api.ts` and `types.ts` are deleted; the hook calls `fetchGuestArrangements` of `api/event` and the page calls `fetchLegacySignedImageURL` of `api/image`. Dependency-cruiser warnings of the folder 3 to 1.
- The GuestArrangements chunk grows 0.87 kB gzip (not an entry route); HomeFeed and Login are unchanged (dev.md).

## P6-G5-B-HelpersDetail - refactor(P6-G5-B): HelpersDetail as page

- `pages/HelpersDetail` is a page with a flow hook (`hooks/useHelperDetails.ts`, `hooks/helperDetailsState.ts`, `hooks/helperDetailsActions.ts`) and a props-only view (`components/HelperDetailsView.tsx`). It has no container. The hook sets `beforePaint: true` (decision W28) because the old block ran OnReady in a `useLayoutEffect`.
- `api.ts`, `types.ts` and the ScreenBlock are deleted; the hook calls `fetchHelperDetails` of `api/event` and `fetchLegacySignedImageURL` of `api/image`. Dependency-cruiser warnings 198 to 196.
- HomeFeed and Login entries grow 3 bytes raw (dev.md); the HelpersDetail chunk grows 2.48 kB raw (not an entry route).

## P6-G5-B-HostSurvey - refactor(P6-G5-B): HostSurvey as page

- `pages/HostSurvey` is a page with a flow hook (`hooks/useHostSurvey.ts`, `hooks/hostSurveyState.ts`) and a props-only view (`components/HostSurveyView.tsx`). It has no container. The hook sets `beforePaint: true` (decision W28) because the old block ran OnReady in a `useLayoutEffect`. The 5 page blocks are split into one file each with `@origin`.
- `api.ts` and `types.ts` are deleted; the hook calls `fetchHostSurvey` of `api/event`. A failed GetHostSurvey is now caught (old: unhandled rejection); the screen is the same.
- HomeFeed and Login entries change by +0.03 and +0.01 kB gzip (the F17 `flowState.ts`); the HostSurvey chunk is not an entry route.

## P6-G5-B-TransportDetail - refactor(P6-G5-B): TransportDetail as page

- `pages/TransportDetail` is a page with a flow hook (`hooks/useTransportDetail.ts`, `hooks/transportDetailState.ts`), a screen handler hook (`hooks/useContactHelpdeskNavigation.ts`) and a props-only view (`components/TransportDetailView.tsx`). It has no container. The hook sets `beforePaint: true` (decision W28) because the old block ran OnReady in a `useLayoutEffect`.
- `api.ts`, `types.ts` and the ScreenBlock are deleted; `actions.ts` moves to the page root. The hook calls `fetchTransportDetail` of `api/event`. Dependency-cruiser warnings 198 to 197.
- TransportDetail has no parity states, so its DOM evidence is the developer's 16-scenario old-vs-new test (`dev.md`). HomeFeed and Login are unchanged (dev.md).

## P6-G5-B-MyEntertaining - refactor(P6-G5-B): MyEntertaining as page

- `pages/MyEntertaining` is a page with 2 hooks (`hooks/useMyEntertaining.ts`, `hooks/useEntertainingCalendar.ts`) and 2 props-only views (`components/`). It has no container. `inputs.ts` is new; `staticEntities.ts` moves to the page root.
- `api.ts` and `types.ts` are deleted. The new domain `api/entertaining` (decision W8) holds the 2 calls; the Layout_DetailPage adapter is replaced by `DetailLayout`.
- HomeFeed and Login raw sizes do not grow; the MyEntertaining chunk has 7 chunks (was 8) (dev.md).

## P6-G5-B-LDM_MyEvents_V2 - refactor(P6-G5-B): LDM_MyEvents_V2 as page

- `pages/LDM_MyEvents_V2` is a page with a flow hook (`hooks/useLdmMyEvents.ts`, `hooks/ldmMyEventsState.ts`), a filter hook (`hooks/useMyTimelineFilterButton.ts`) and a props-only view (`components/LdmMyEventsView.tsx`). It has no container. The ScreenBlock, `api.ts` and `types.ts` are deleted; the hooks call `@/api/event` and `@/api/locality` directly.
- The page `@origin` is corrected to `UBTConnect.Legacy_LDMEventsFlow_V2.LDM_MyEvents_V2` (G5-A had written it without `_V2`). LDM_EventDetail_V2 and LDM_Email_V2 still have the same error in their `@origin`.
- Dependency-cruiser warnings 198 to 196. HomeFeed gzip +0.02 kB (the page now uses the shared `flowState` chunk); Login is unchanged within 0.01 kB.

## P6-G5-B-LDM_EventDetail_V2 - refactor(P6-G5-B): LDM_EventDetail_V2 as page

- `pages/LDM_EventDetail_V2` is a page with a flow hook (`hooks/useLdmEventDetail.ts`, `hooks/ldmEventDetailState.ts`) and a props-only view (`components/LdmEventDetailView.tsx`). It has no container. The ScreenBlock, `api.ts` and `types.ts` are deleted; `inputs.ts` is new. `api/household` gets `fetchHouseholdCoordinatesById`.
- The page `@origin` is corrected to `UBTConnect.Legacy_LDMEventsFlow_V2.LDM_EventDetail_V2` (G5-A had written it without `_V2`). LDM_Email_V2 still has the same error.
- HomeFeed gzip +0.06 kB and Login +0.04 kB (entry dependency list and chunk hashes); dependency-cruiser route warnings 4 to 3.

## P6-G5-B-LDM_Email_V2 - refactor(P6-G5-B): LDM_Email_V2 as page

- `pages/LDM_Email_V2` is a page with a flow hook (`hooks/useLdmEventEmail.ts`, `hooks/ldmEventEmailState.ts`) and a props-only view (`components/LdmEventEmailView.tsx`). It has no container. The ScreenBlock, `api.ts` and `types.ts` are deleted; `inputs.ts` is new; the hook calls `@/api/message` directly.
- The page `@origin` is corrected to `UBTConnect.Legacy_LDMEventsFlow_V2.LDM_Email_V2`; now all 3 LDM V2 pages are correct. LDM_Email_V2 has no parity reference, so its DOM evidence is the developer's 21-scenario old-vs-new test (temporary, deleted).
- Dependency-cruiser warnings 189 to 188. HomeFeed gzip +0.08 kB, Login +0.03 kB; LDM_Email_V2 first load +1.05 kB gzip.

## P6-G5-B-AssembleEvents - refactor(P6-G5-B): AssembleEvents as page

- `pages/AssembleEvents` is a page with 3 flow hooks (`useAssembleEvents`, `useAssembleSummaryList`, `useAssembleFilterSheet`), 2 state files and props-only views. It has no container. The ScreenBlock, `api.ts` and `types.ts` are deleted; `inputs.ts` is new; the hooks call `@/api/event` and `@/api/locality`.
- F21: the 2 copies of `fetchSubscribedCountries` stay (section in `duplicates.md`).
- HomeFeed gzip +0.05 kB, Login +0.04 kB (chunk hashes only); dependency-cruiser warnings 189 to 186.

## P6-G5-B-AssembleDetail - refactor(P6-G5-B): AssembleDetail as page

- `pages/AssembleDetail` is a page with flow hooks (`useAssembleDetail`, `useAssembleEventDetail`) and a props-only view (`components/AssembleDetailView.tsx`). `api.ts` and `types.ts` are deleted; `inputs.ts` is new. One file per block. The contact and hall blocks keep React state (follow-up F26).
- New `containers/AssembleSummaryCard` (no data hook): it gives the actions that call `platform/` to the props-only `AssembleSummaryCard` and `VirtualMeetingUrl`, for AssembleDetail and AssembleEvents. `platform/feedback/flowErrors.ts` re-exports `UserException`.
- The 6 owned rows of `arch-baseline.csv` are gone (69 rows). HomeFeed gzip 244.39 kB, Login 184.42 kB (no change).

## P6-G5-C - refactor(P6-G5-C): prune group G5 and group gate

- Architecture: no folder change. The prune deleted 2 empty `types.ts` files in `src/components/orbit`. Group report: `app/docs/refactor/reports/P6-G5.md`.
- Gate: parity visual `--all` 64/64 clean on both references; `ci` 3666 tests; baseline 69 rows, 0 new.

## P6-G6-A - refactor(P6-G6-A): move G6 to pages/

- The 7 G6 routes (MyBookmarks, BookmarksByGroup, Notes, ConnectShare, LegacyShareObject, QRCodeGenerate, ViewDocuments) moved from `src/screens/<R>` to `src/pages/<R>`. `index.tsx` is now `<R>Page.tsx`, with one `@origin` tag per page.
- Shared blocks stay in `shared/` until step B. `screens/` still holds no G6 route.

## P6-G6-B-Shared - refactor(P6-G6-B): move the shared blocks of group G6

- 2 blocks of `src/shared/` (13 files, phase P6-G6 rows of `move-map.csv`) moved: `NoBookmarks` to `src/components/bookmark/NoBookmarks/`, and `FreeSubscriptionActionDialog` to `src/pages/LegacyShareObject/components/UpgradeSubscriptionDialog/` (component and `<Name>Props` renamed). Each block has an `@origin` tag. The 2 rows are set to `moved`.
- No baseline row changed. `shared/Connect2_MyBookmarks_MUI/` keeps only `mocks.ts` and `mocks.test.ts` (no move-map row).

## P6-G6-B-MyBookmarks - refactor(P6-G6-B): MyBookmarks as page

- `pages/MyBookmarks` is a page with a flow hook (`hooks/useMyBookmarks.ts`, `hooks/myBookmarksState.ts` on `useFlowState`) and a props-only view (`components/MyBookmarksView.tsx`). It has no container. The ScreenBlock, `api.ts`, `types.ts` and `staticEntities.ts` are deleted; the hook calls `@/api/bookmark`.
- Edge case 1: `restoreMyBookmarks` returns the defaults for a view that was left before its first assignment, as the old block did.
- Edge case 2 (F28): the user leaves while both calls run and GetGroupSummaries answers first. The preload then uses the lists of the last write before the unmount (W23).
- HomeFeed gzip +0.02 kB, Login +0.02 kB; dependency-cruiser warnings 189 to 188.

## P6-G6-B-BookmarksByGroup - refactor(P6-G6-B): BookmarksByGroup as page

- `pages/BookmarksByGroup` is a page with a flow hook (`hooks/useBookmarkGroup.ts`, `hooks/bookmarkGroupState.ts` on `useFlowState`, no `beforePaint`) and a props-only view (`components/BookmarkGroupView.tsx`). No container. `api.ts` and the ScreenBlock are deleted; `inputs.ts` is new.
- Renames: `Result_Item_Badge` to `LegacyResultItemBadge` (move-map row 57 gives `ResultItemBadge` to `NC_Result_Item_Badge`); `BookmarkNoteDialogs` split into `BookmarkNoteAddEdit` and `BookmarkNoteDelete`.
- Edge case (F28 family, W23/latest): the flows read `latest`. With two overlapping Unmark answers, ListRemove and UpdatedTotal apply to the newest list; the old port used the list of the click's render. HomeFeed gzip +0.00 kB, Login +0.01 kB.

## P6-G6-B-Notes - refactor(P6-G6-B): Notes as page

- `pages/Notes` is a page with a flow hook (`hooks/useNotes.ts`) and a state module (`hooks/notesState.ts`) on `useFlowState`. `api.ts` and `types.ts` are deleted; the hook calls `@/api/note`. The 8 blocks in `components/` carry `@origin`.
- Deviations, none user-visible (tester): (1) OnReady runs in its own effect after OnInitialize, as the old page did; (2) the flows write to an `afterUnmount` copy after the unmount (W23); (3) `restore` returns the initial state, so a back navigation starts from OnInitialize; (4) the first page assigns the list after the pills call; a search submit in that call sends the skeleton list, which the server ignores; (5) in StrictMode (dev) the year options are read once.
- HomeFeed gzip 244.46 kB, Login 184.49 kB; dependency-cruiser warnings 189 to 188; baseline 69 rows, 0 new.

## P6-G6-B-ConnectShare - refactor(P6-G6-B): ConnectShare as page

- `pages/ConnectShare` is a page with a flow hook (`hooks/useConnectShare.ts`), a state module (`hooks/connectShareState.ts`) on `useFlowState`, client actions (`hooks/connectShareActions.ts`) and `inputs.ts`. `ScreenBlock_ShareDetail` is now `components/ShareDetailView.tsx`. `api.ts` and `types.ts` are deleted.
- New domain `api/share` (W8) with Get_ShareDetails. After an unmount, the delayed upgrade popup is not started or is dropped, exactly as in the old port. W23 holds; the tester compared it with HEAD. The 4 screen variables are one cache record.
- HomeFeed gzip 244.49 kB, Login 184.49 kB; arch baseline 69 rows, 0 new.

## P6-G6-B-LegacyShareObject - refactor(P6-G6-B): LegacyShareObject as page

- `pages/LegacyShareObject` is a page with two flow hooks (`hooks/useShareObject.ts`, `hooks/useProfileList.ts` on `useFlowState`), their state modules and `inputs.ts`. `ScreenBlock_ShareObject` is now `components/ShareObjectView.tsx`; `ProfileList` is props only. `api.ts` and `types.ts` are deleted.
- The 5 calls are in `api/share` (3, with `keys.ts` and `hooks.ts`), `api/household` (`fetchHouseholdShareCard`) and `api/locality` (`fetchCommunityBusinessShareCard`).
- HomeFeed gzip 244.52 kB, Login 184.51 kB; arch baseline 69 rows, 0 new.

## P6-G6-B-QRCodeGenerate - refactor(P6-G6-B): QRCodeGenerate as page

- `pages/QRCodeGenerate` is a page with a flow hook (`hooks/useGenerateQrCode.ts` on `useFlowState` with `beforePaint: true`, W28), a state module (`hooks/generateQrCodeState.ts`), `hooks/useBinaryImageURL.ts`, `inputs.ts` and a props-only view (`components/GenerateQrCodeView.tsx`). `api.ts`, `types.ts`, the ScreenBlock and `components/actions.ts` are deleted.
- The calls are `fetchEventQRCode` (`api/event`) and `fetchLegacySignedImageURL` (`api/image`, W8). W23 holds: after an unmount the flow skips the state writes and still calls Get_EventQRCode once.
- QRCodeGenerate has no parity states; the evidence is the developer's old-vs-new DOM test (14 scenarios, equal). HomeFeed gzip 244.47 kB, Login 184.50 kB; 3 rule-9 warnings gone (arch 189 to 186); baseline 0 new.

## P6-G6-B-ViewDocuments - refactor(P6-G6-B): ViewDocuments as page

- `pages/ViewDocuments` is a page with a flow hook (`hooks/useViewDocuments.ts` on `useFlowState` with `beforePaint: true`, W28), a state module (`hooks/viewDocumentsState.ts`), `inputs.ts` and a props-only view (`components/ViewDocumentsView.tsx`). `api.ts`, `types.ts`, the ScreenBlock and `components/actions.ts` are deleted; the call is `fetchEventDocuments` (`api/event`). W23 holds.
- No parity states; DOM evidence: the developer's old-vs-new probe, 7 scenarios / 44 observations. HomeFeed gzip 244.48 kB, Login 184.50 kB; baseline 0 new.

## P6-G6-C - refactor(P6-G6-C): prune group G6 and group gate

- Architecture: no folder change. The prune deleted no file (knip: none in G6; jscpd: 2 small clones left for P7). Group report: `app/docs/refactor/reports/P6-G6.md`.
- Gate: parity visual `--all` 64/64 clean on both references; `ci` 3931 tests; baseline 69 rows, 0 new.

## P6-end - refactor(P6-end): delete screens/

- Architecture: `src/screens/` is deleted (only its README was left). `src/app/screens.ts` and the `src/mocks/handlers.ts` glob load `pages/` only. `src/shared/` stays until P7-6 (W20).
- The dependency-cruiser shared rule now forbids `^src/app/` only. Parity `--all` 64/64 clean on both references; `ci` 3931 tests; baseline 0 new.
- Docs: overview, the guides `screens`, `page-template`, `os-widgets`, `getting-started`, `api-and-mocks`, `shared-code`, `src/api/README.md` and the tools README no longer name `src/screens/`.

## Phase 6 done

- All 64 routes are pages in `src/pages/`. Group reports: [P6-G1](reports/P6-G1.md), [P6-G2](reports/P6-G2.md), [P6-G3](reports/P6-G3.md), [P6-G4](reports/P6-G4.md), [P6-G5](reports/P6-G5.md), [P6-G6](reports/P6-G6.md). Step report: [P6-end](reports/P6-end.md).
- Manual review list (routes without parity states, so the DOM evidence is a developer probe): FeedItemDetail, ContactByEmailLDMCoordinator, ContactByEmailOrbitHost, EmailTarget, EventBooklet, TransportDetail, LDM_Email_V2, OrbitAdminEventDetail, GuestArrangements, AssembleDetail, QRCodeGenerate, ViewDocuments. Added by F61 (user, 2026-10-25): AcceptPendingPolicies, EmailContact.
- Follow-up F27 is open: "64/64 clean" counts the routes with 0 states as clean. The report must print "N of 64 routes checked".

## P7-0 - refactor(P7-0): move the P7 shared rows to components/ui

- Architecture: 67 blocks of `src/shared/{Connect2_LegacyShared,UBTConnect,UBTConnect_Utils,UBTConnectLibrary,ReactiveHtmlSanitizer}` moved to `src/components/ui/<Name>/` (517 files), 29 renamed to the target names, `@origin` tags added. `shared/osui`, the `lib/` folders and 3 rows (MultiResolutionImageLoader, Dialog_AccessRestrictedAction_Legacy, NavigationConfirmationDialog) stay for P7-1/P7-2.
- Dialog_CustomChoice and Dialog_Navigation share `components/ui/Dialog/`: hand-merged barrel `index.ts` (two `export *` lines); P7-2 rewrites it.
- Gate: parity strict `--all` 64/64 clean on both references; `ci` 3931 tests; baseline +3 rows (owner P7), 72 rows, 0 new.

## P7-1 - refactor(P7-1): move shared/osui to components/ui

- Architecture: 230 files of `src/shared/osui/` (31 patterns and `lib/`) moved to `src/components/ui/<Pattern>/` and `src/components/ui/lib/`; `src/shared/osui/` no longer exists. The 4 `DEPRECATED_*` patterns are kept in `components/ui/legacy/` with business names (Q5): LegacyAccordion, SectionExpandable, LegacyButtonLoading, GridGallery.
- Columns4, RangeSlider, SwipeEvents and Tooltip have no importer and stay moved (W30, Q18); delete-or-keep is a user decision at the P9 knip cleanup (F29).
- Gate: parity visual 64/64 clean on both references; `ci` passes; baseline 73 rows, 0 new (+1 row: `ui/DropdownSearch/provider.ts`, owner P7). The dependency-cruiser rule `osui-no-import-of-app-modules` matches nothing now (F30).

## P7-2 - refactor(P7-2): Dialog with the variants ConfirmDialog, ChoiceDialog and NavigationDialog

- Architecture: `components/ui/Dialog` has `Dialog` and the variants `ConfirmDialog` (was the platform ActionConfirmationDialog), `ChoiceDialog` and `NavigationDialog` (`variant="connect"` is Dialog_Navigation). `DialogExitConfirmation` and `DialogAccessRestrictedAction` use the `Dialog` markup. `Dialog_AccessRestrictedAction_Legacy` is `platform/feedback/dialogs/DialogAccessRestrictedActionLegacy.tsx`. 4 merges, 29 user files; ChoiceDialog and NavigationDialog take the props `header`, `body`, `confirmLabel`, `dismissLabel`.
- Deviations: no host moved to `app/`; `src/app/dialogs.ts` (`connectDialogs()`) connects both ways. NavigationDialog keeps its own `dx-before-navigation` listener (no `useNavigationConfirmation`). The legacy dialog is its own module (W21). Committed as one commit, because the merges share 6 files.
- W21 first load: HomeFeed +0.28 kB, Login +0.25 kB gzip, under the 0.3 tripwire; HomeFeed margin now 3.55 kB. Gate: parity visual `--changed` 64 routes on both references, 0 differences; `ci` 3940 tests; baseline 71 rows, 0 new, 2 rows gone.

## P7-3 - refactor(P7-3): EmptyState and Skeleton

- Architecture: `components/ui/EmptyState` (was EmptyList; `DirectoryEmptyState` stays its preset) and `components/ui/Skeleton` (was SkeletonSection). 2 renames, no merge: the other empty-state and skeleton blocks render other DOM ([duplicates.md](duplicates.md) group 3, done).
- Props renamed to the `components/ui` names: `title`, `text`; `isLoading`, `extendedClass`, `isActiveWhileLoading`. 63 user files.
- Evidence: harness 432 + 108 prop combinations, 85 call sites, 536 stories and 4171 end-of-test snapshots, 0 differences outside run-to-run timing. W21: HomeFeed 244.65 kB (+0.02), Login 184.70 kB (+0.01) gzip. Gate: parity visual `--changed` 64 routes on both references, 0 differences; baseline 71 rows, 0 new.
- Committed as one commit, because 2 user files (`NoteCard_List.tsx`, `ShareSheetContainer.tsx`) are in both merges. New tool: `migration/tools/refactor/p7-3-rename-props.ts`.

## P7-4 - refactor(P7-4): Cards and carousels by evidence (no merge)

- Architecture: no code change. No group has the verdict "same" and a `jscpd` clone. Cards, carousels, PopupMenu and Layout_MainPages stay as domain components ([duplicates.md](duplicates.md), result of P7-4).
- `jscpd`: 36 clones, 665 lines (P0-3: 63 clones, 1289 lines). Follow-ups F31 to F34 (Orbit client actions, PopupMenu, NetworkWarning, Member_ListItem row).

## P7-6 - refactor(P7-6): empty and delete src/shared/ (5 commits)

- Commits: part 1 `cca9b514` (move-map rows, docs only), part 2 `14f5a615` (`arch_baseline.py` reads file rows), part 3 `1d9baa51` (delete MultiResolutionImageLoader).
- Part 4 is the pure move. Part 5 adds `@origin` tags to 10 block files.
- Architecture: `src/shared/` is deleted with its alias and 6 dependency-cruiser rules (W20, W32). Blocks went to `components/household/`, `containers/DetailLayout/`, `platform/session/UserInfoCache/` and `legacy/os/cache/`; module helpers to `lib/<module>/`; MSW files to `mocks/modules/` (glob `mocks/modules/**/mocks.ts`); test helpers to `src/test/`; `OSLink` to `components/ui/os/`.
- Debt: the module client actions in `lib/<module>/actions.ts` break rule 6; the count of 55 is a ceiling that may only go down (F35). Other debt: F36 (OSLink), F37 (CacheControl). The rule-5 drop of 110 is a reclassification, not a fix (F38). Table: `migration/refactor/handoffs/P7-6/rows.md`, "Debt created".
- Gate: dependency-cruiser 269 to 222 (rule-6 +55, rule-9 +4, rule-8 +1, rule-5 -109 net). Parity strict `--all` 64/64 clean on both references; `ci` 3939 tests; coverage 89.39%.
- W21: HomeFeed 244.69 kB gzip (+0.03), Login 184.71 kB (0.00). Baseline 78 rows, 0 new. Closed: F30, F34.

## P7-5 - refactor(P7-5): Phase 7 report

- Architecture: no code change. New `app/docs/refactor/reports/P7.md` and `app/src/components/ui/README.md` (93 component folders, groups, rules, how to add a component).
- Gate: parity visual `--all` 64/64 clean on both references; `ci` 3939 tests; baseline 72 rows, 0 new; HomeFeed 244.69 kB, Login 184.71 kB gzip.

## Phase 7 done

Report: [reports/P7.md](reports/P7.md). `components/ui/` is filled and `src/shared/` is deleted.

- Open user decisions:
  - F22, F24 and F26 (one decision): restore the view state after a back navigation, or keep the port behavior.
  - F25: back handler of the Unable-to-Host survey.
  - F28 (low priority): overlapping bookmark answers.
  - F29: delete or keep the 4 unused OSUI patterns, at the P9 knip cleanup.
  - F33: which `NetworkWarning` DOM stays.
- Owned debt, to clear before P9-1 makes rule 6 an error: F35 (split the module client actions in `lib/<module>/actions.ts`, ceiling 55), F36 (`OSLink` imports `platform/navigation`), F37 (CacheControl blocks in `legacy/os/cache/`).

## F29 - delete the 4 unused OSUI patterns

- Architecture: `components/ui/` loses `Columns4`, `RangeSlider`, `SwipeEvents` and `Tooltip` (user decision, 2026-10-24). No page, container or hook used them.
- Also removed: packages `nouislider` and `wnumb`, `src/types/vendor.d.ts`, and the exports `Orientation`, `Trigger`, `Position` and `RangeSliderOptionalConfigs` in `components/ui/lib`.
- Gate: ci: pass; parity visual --all: 64/64 (OutSystems), 64/64 (self).

## F33 - one NetworkWarning with the OutSystems DOM ids

- Architecture: one `NetworkWarning` in `components/ui`. The inner Animate gets the id `<scope>-$b1` as in the OutSystems capture (user decision, 2026-10-24). The copy in `pages/MyBookmarks/components/` is deleted. The LDM routes gain the Animate id.
- Gate: ci: pass (after loop 1); parity visual --all: 64/64 (OutSystems), 64/64 (self); jscpd 35 clones (was 36).

## F25 - navigationGate: "navigating away" guard and re-entry block

- Architecture: `platform/navigation/navigationGate.ts` blocks a back navigation while the screen being left is still in the document (OutSystems NH:903-917, user decision option A, 2026-10-24). A back that starts inside the gate is blocked too.
- Unable-to-Host `HostSurvey` back goes back one screen (it recursed before). Documented in `app/docs/guides/shell.md`.
- Gate: ci: pass; parity visual --all: 64/64 (OutSystems), 64/64 (self); e2e:pwa 9/9; browser check 4/4.

## F22-26 - restored views as OutSystems (SupperMeeting, MilestoneDetail, AssembleDetail)

- Architecture: a back navigation restores the saved view state and makes no call, with no time limit (user decision option C, 2026-10-24). Three places: `containers/SupperMeetingDetails`, `pages/MilestoneDetail/hooks/useAccommodationHost.ts`, the blocks of `pages/AssembleDetail` (new `hooks/useLocalitySubdivisionList.ts`).
- Skip rule: OnReady skips a call when the view is "restored and the block's saved state has its data". Without saved data, the block fetches as on a forward visit. The 2 former MilestoneDetail crash paths now restore with no call.
- Gate: ci: pass; parity visual --all: 64/64 (OutSystems), 64/64 (self); arch baseline 0 new.

## F39 - hall block OnParametersChanged (AssembleDetail)

- Architecture: no folder change. `pages/AssembleDetail/hooks/useAttendeeSubdivision.ts` sets `onParametersChanged` on `useFlowState`. It reads the local contact bookmarks again and marks the rows already in the block state (OutSystems `AssembleEventDetail_AttendeeSubdivision`, advisors W35, 2026-10-24).
- It makes no API call, does not copy the new input and does not reload. No path reaches it today; it guards a later refresh of the event data.
- Gate: ci: pass; parity visual --all: 64/64 (OutSystems), 64/64 (self); arch baseline 0 new.

## F40 - restored view without data: one rule for four hooks

- Architecture: no folder change. `useLdmEventDetail`, `useAdminLanding`, `useAdminEventDetail` and `useOrbitLanding` skip their calls only when `restored` and the saved state has the data. Without data they call again (reads only); `useLdmEventDetail` sends no audit event on that path.
- OutSystems keeps the skeleton in that case: an intended deviation (advisors W34, W36, W37). `hasStarted` in `adminLandingState.ts` is removed.
- Gate: see `migration/refactor/handoffs/F40/test.md`.

## P8-1 - refactor(P8-1): add tokens and cascade layers

- Architecture: `styles/layers.css` sets the order `legacy, app`. `StylesheetHost` loads the original CSS in `@layer legacy` through `data:` link wrappers (`@import url(<file>) layer(legacy)`); the CSS files are unchanged.
- New: `styles/tokens.css` (238 variables, `@layer app`, generated by `migration/tools/refactor/p8-1-tokens.py`, guarded by `tokens.test.ts`). `review.css` is in `@layer app`; the barcode plugin CSS is in `@layer legacy`.
- Gate: parity visual --all: 64/64 (OutSystems), 64/64 (self). A future CSP needs `style-src data:` (follow-up F44).

## F43 - wire and asset helpers back to lib/

- Architecture: `lib/os-wire.ts`, `lib/os-assets.ts` and `lib/os-assets.manifest.json` moved from `legacy/os/` back to `lib/`, as plan v2 §2.2 says (decisions W38, W39). The codemod rewrote about 107 imports; no other code change.
- Dependency-cruiser warnings 222 -> 146: rule 9 98 -> 34, rule 6 55 -> 50.
- Gate: ci: pass; parity visual --all: 64/64 (OutSystems), 64/64 (self); arch baseline 0 new.

## P8-2 - refactor(P8-2): delete unused legacy CSS

- Architecture: 3 original stylesheets lost their unused rules (HostSurvey_AccommodationItem, HostSurvey_AdminNotes, Notifications). Legacy CSS: 1,605,845 -> 1,604,826 B (-1,019 B).
- New tools in `migration/tools/refactor/`: `css-coverage-preload.cjs`, `css-coverage-node.sh`, `css-prune.py` (P9-3 reuses them). Usage: `app/docs/guides/shell.md`.
- Gate: parity visual --all: 64/64 (OutSystems), 64/64 (self). Relaxed rule (-272 kB): follow-up F45.

## P9-1 - refactor(P9-1): rules to error with frozen baselines

- Architecture: all folder rules and the ESLint rule-4 restriction are errors; 142 dependency-cruiser, 72 ESLint and 1,130 knip rows are frozen in shrink-only baselines (`app/.dependency-cruiser-known-violations.json`, `arch-baseline.csv`, `app/.knip-known-unused.json`). Rule 9 skips mock handlers and test helpers (34 -> 30, a reclassification, F38).
- `npm run ci` also runs `arch`, `arch:baselines`, `dup` (jscpd threshold 0.57 percent) and `unused` (knip). Owners of the remaining rows: F35 to F37, F46 to F50. Guide: `app/docs/guides/quality.md`.
- Gate: ci: pass (154 s); parity strict --changed: 64/64 (OutSystems), 64/64 (self).

## P9-2 - refactor(P9-2): flag check

- Architecture: new check `app/build/check-flags.mjs` (`npm run flags`, in `ci`). It fails on 4 cases: a key with no reader, an unknown key, a past `removeBy`, a new flag reader outside pages, hooks and containers.
- Shrink-only lists: 3 unread keys (W43) and 3 owned outside readers (W42), metric 4 = 1 by design + 3 owned. Owners: F35, F51 to F53; guide: `app/docs/guides/quality.md`.

## P9-3 - refactor(P9-3): docs

- Architecture: no code change. `app/README.md` has the folder map of `src/`. `docs/architecture/overview.md` has a new diagram of the folders and the import direction, and the rules text matches P9-1 and P9-2 (errors with baselines, flag check). The container diagram had a Mermaid syntax error (braces in a label); it renders now.
- Stale paths fixed in `docs/README.md`, `docs/known-original-bugs.md`, `docs/guides/api-and-mocks.md` and `docs/guides/screens.md`. `docs/guides/page-template.md` is final. It has the OnParametersChanged rule (F39) and the gate list of P9. A note about two files that no longer have the old pattern is gone.
- ADR-15 text updated (F43, P9-1, P9-2, restored views); status, `by` and `at` unchanged. `app/docs/reference/stack.md` regenerated; the other reference pages are unchanged.
- `CLAUDE.md` is not edited. The proposed change is in `migration/refactor/handoffs/P9-3/claude-md-proposal.md`.
- Left as it is (code): the comment in `app/index.html` names `src/shell/StylesheetHost.tsx`; the file is `src/legacy/os/StylesheetHost.tsx`.

## F54 - AssembleEvents test compares the full timestamp

- Architecture: no folder change, no app code change. `pages/AssembleEvents/AssembleEvents.test.tsx` compared only the day; the page asks for meetings from the full timestamp (`EventList_RangeFrom = <day>T12:00:00`). The test now uses the full stamp, so it passes on a day with a 06:00 meeting.
- A sweep with fixed dates 2026-10-25 to 2026-10-31 and 2026-12-01 found no other date-dependent test. The mock programme is built from the real clock at load.
- Gate: ci: pass (3975/3975 tests).

## P9-4 - refactor(P9-4): final report

- Architecture: no folder change, no app code change. The final report is `app/docs/refactor/reports/final.md` (metrics against plan section 7, phases, open work, advisor decisions W34-W43).
- New tool `migration/tools/refactor/measure-final.mjs` (replaces `measure.mjs`, which needs the deleted `shared/` and `screens/`). Open items N-A to N-E are follow-ups F57 to F61.
- Gate: ci: pass (3975/3975 tests); parity strict `--all` both references: 64/64; e2e:pwa 9/9.

## F57 - The last direct calls outside api/

- Architecture: the 4 calls of `containers/ShareSheet/api.ts` and `platform/session/userInfo.ts` are in `api/`. The 3 share calls and `useRecentlySharedQuery` are in `api/share/shareSheet.ts`; `ActionGetUserInformation` is in `api/member/userInformation.ts`. The barrels `api/share/index.ts` and `api/member/index.ts` re-export them. `containers/ShareSheet/api.ts` is deleted; the cache stays in `platform/session/userInfo.ts`.
- Bundle fix of loop 1: each call has its own small file. So the entry chunk does not hoist the member repository. The HomeFeed first load does not gain the share repository (HomeFeed 245.05 kB gzip, +0.18; Login +0.00).
- Metric: files that call `callAction` outside `api/` 6 to 4; all 4 are owned by F35 and F37.

## F52 - orbitStaticEntities flag read is by design

- Architecture: no folder change. `app/build/check-flags.mjs` lists the pair `platform/storage/localEntities/orbitStaticEntities.ts` + `mobileOrbitHostSurvey` as by design (app-start sync, same point as OutSystems `SyncAllOrbitStaticEntities`; user, 2026-10-25). A new flag read in that file, or a pair whose reader is gone, still fails.
- Metric: readers of flags outside pages, hooks and containers: 4 = 2 by design + 2 owned.

## F59-a - Split the 4 largest component files (400 lines or less)

- Architecture: 4 files split inside their own folders, no logic change, 15 modules of 367 lines or less (the files stay flat in the folder). `FilterSheet.tsx` 695 to 325 (+ `useFilterSheet.ts` 120, `filterSheetActions.ts` 272, `filterSheetState.ts` 38, `types.ts` 31). `connect2Feed.ts` 652 to 173 (+ `connect2FeedState.ts` 115, `connect2FeedIframe.ts` 169, `connect2FeedMessages.ts` 110, `connect2FeedItems.ts` 146). `OSListItem.tsx` 574 to 129 (+ `ListItemSwipeable.tsx` 367, `Swipeable.tsx` 87). `provider.ts` 412 to 222 (+ `providerConfig.ts` 201).
- connect2Feed: the 12 module `let` variables are now fields of one exported record `sdk` (`connect2FeedState.ts`), because an ES module cannot assign another module's variable; 202 references became `sdk.<name>`. HomeFeed grows 0.11 kB gzip (dev); the 5 exported FilterSheet types moved to `types.ts`.
- Baselines: the depcruise rule-9 row for `AllCountriesCacheControl` moved from `FilterSheet.tsx` to `types.ts` (142 rows stay 142); knip 1130 to 1124 (6 stale rows removed). Gate: ci: pass (3975/3975 tests); parity visual `--all` both references: 64/64; bundle HomeFeed +0.25 kB gzip (W21: 0.3 kB).
