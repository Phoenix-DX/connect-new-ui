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
