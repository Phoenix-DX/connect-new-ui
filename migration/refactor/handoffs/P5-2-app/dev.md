## Result
status: pass
summary: Added `app/src/api/app` (types, mapper, repository, keys, hooks, barrel, 3 test files) for the 5 app-start calls of OnApplicationReady and CacheControl_Policies. `platform/bootstrap` and the block call the repository functions; the 8 app-start steps and their order are unchanged. All quick checks pass. Scope note: the other 20 files of the "app" table are not app-start calls and stay as they are (see Deviations).

## Files changed
Worktree `rf/prefetch-P5-2-app` (paths from the repository root):
app/src/api/app/types.ts (added)
app/src/api/app/mapper.ts (added)
app/src/api/app/mapper.test.ts (added)
app/src/api/app/repository.ts (added)
app/src/api/app/repository.test.ts (added)
app/src/api/app/keys.ts (added)
app/src/api/app/hooks.ts (added)
app/src/api/app/hooks.test.tsx (added)
app/src/api/app/index.ts (added)
app/src/platform/bootstrap/startup.ts (changed)
app/src/platform/bootstrap/appStartSteps.ts (changed)
app/src/shared/UBTConnect_Utils/CacheControl_Policies/CacheControl_Policies.tsx (changed)
app/src/shared/UBTConnect_Utils/CacheControl_Policies/types.ts (changed)
Main tree, handoff folder:
migration/refactor/handoffs/P5-2-app/exemptions.json (added: `[]`)
migration/refactor/handoffs/P5-2-app/dev.md (added)

Shared files changed: only `shared/UBTConnect_Utils/CacheControl_Policies/CacheControl_Policies.tsx` and `types.ts`. This change has no file in common with the locality patch (`Connect2_LegacyShared/lib/actions.ts`, `Connect2_LegacyShared/lib/structures.ts`, `UBTConnect_Utils/lib/structures.ts`, `CacheControl_AllLocalities`, the 7 screens) or the update patch (`UBTConnect/lib/actions.ts`, HomeFeed, Updates_SingleList, HouseholdCarousel, Menu). `UBTConnect_Utils/lib/structures.ts` is not changed: its `CacheControl_Policies` structure stays for `openPolicy` in `UBTConnect_Utils/lib/actions.ts`.

## Commands run
npm --prefix app run typecheck → exit 0
npx vitest run src/api/app src/platform/bootstrap src/shared/UBTConnect_Utils/CacheControl_Policies → exit 0, 10 files, 66 tests passed
npx vitest run src/platform/session src/platform/auth src/platform/feedback src/pwa src/mocks src/shared/UBTConnect/Block_PINUnlock_ContentWrapper src/screens/TermsAndPoliciesMenu src/screens/PINUnlock src/screens/PINChange src/shared/UBT_AppManager src/shared/UBT_AppManager_Mobile src/screens/MessageList src/screens/Splash → exit 0, 37 files, 234 tests passed
npx vitest run (full) → exit 0, 355 files, 1704 tests passed
npx eslint src/api/app src/platform/bootstrap/startup.ts src/platform/bootstrap/appStartSteps.ts src/shared/UBTConnect_Utils/CacheControl_Policies → exit 0, no problem
npm run format:check → exit 0, all files formatted
npm run arch → 0 errors, 207 warnings; none in api/app, platform/bootstrap or CacheControl_Policies (grep); no new cycle
npm run e2e:pwa → exit 0, 1 file, 9 tests passed (own build, free ports)
Not run: the parity and the bundle report (tester; no dev server for the worktree).

## Deviations from the brief
Scope of api/app (the plan: "api/app (the app-start calls)"):
- In api/app: AppManager_SynchAppContext and AppManager_AfterInitialize (UBT_AppManager), Sync_Info_GetMain,
  FetchData_CacheableMapEntities and FetchData_CacheableHouseholds (UBTConnect), and DataActionGetCacheInfo of
  CacheControl_Policies.
- CacheableHouseholds: `calls-by-domain.md` lists it under household (keyword match), but the app start fetches it
  together with CacheableMapEntities (Async_FetchCacheableMapEntitiesJS), and api/household (P2-2) does not have it.
- CacheControl_Policies: `app/docs/refactor/move-map.csv` line 134 gives the target `src/api/app/hooks.ts`
  (usePoliciesQuery, P5-2 and P5-4). It is done like CacheControl_AllCountries in P5-2-country: the block calls
  `fetchPolicies`, and `usePoliciesQuery` has no caller yet (P5-4).
- Not moved: GetUserInformation (`platform/session/userInfo.ts`, CacheControl_UserInfo) goes to P5-4 (M10).
  GetNumberUnreadMessages (`synchronizeNumberUnreadMessages` in `startup.ts`) is in the message table and goes to
  api/message (P5-3).
- Open item for the master: the other 20 files of the "app" table are not app-start calls: AcceptPendingPolicies,
  ConnectShare, GuestArrangements, HelpersDetail, HomeFeed (GetServices), LegacyShareObject, MilestoneDetail,
  MyEntertaining, OneSchoolGlobalDetails, OrbitAdminEventDetail, Photobook, QRCodeGenerate, Search, Services,
  `Connect2_LegacyShared/lib/actions.ts`, `Connect2_OrbitMobile_MUI/lib/actions.ts`, FeedBlock_CommunityPopulation,
  Embedded_FeedCMS, ShareSheet (share calls) and `UBTConnect_Utils/lib/actions.ts` (Get_RuntimeVersion,
  GetSignedImagesInBulk). No P5 step names them (P5-3: event, bookmark, note, message, notification). Moving them
  in this step would need more than 40 files (20 callers, their types files, the domain files and tests) and would
  touch files of the locality and update patches (`Connect2_LegacyShared/lib/actions.ts`, `screens/HomeFeed/api.ts`).

Design:
- Mappers drop only fields that have no reader in `src` (searched by name, including through casts and storage):
  from SynchAppContext, FirebaseRealTimeDB_Token, PermissionList, 7 fields of AppManager_ConfigClient and 15 of
  AppManager_ClientCache; from Sync_Info_GetMain, FeedBaseURL and MyEntertainingBaseURL. These stay as they are:
  the local-entity records (the local copies store them), OrbitStaticEntities, the five map objects and the household
  marker parts (memory cache), and the policy records (memory cache and the Result event). Policies keep
  Policy_FileName and Policy_ContentType too: the web reads only Policy_Url, but the native OpenApplicationPolicy
  reads the other two.
- `ClientConfig` moved from `startup.ts` to api/app. `appStartSteps.ts`, its only importer, imports it from `@/api/app`.
- Call names, input names, input values and the order of the calls are unchanged. `appStartSteps.test.ts`,
  `postLogin.test.ts`, `startup.test.ts` and `AppStart.test.tsx` pass without changes. No call moved into a query
  with a caller, so §5.4 expects no call difference: exemptions `[]`.
- The comment of the household split now points to the mapper. Its compiled-line reference (UC:3534-3560) was removed.
- For the documenter: `CacheControl_Policies/README.md` (lines 12 and 15) still describes the callAction call and the
  structure of `lib/structures.ts`. `app/src/api/README.md` and `calls-by-domain.md` need the app domain.

## Questions for the user
none
