# CR-Search-3: shell/shared — extra ActionGetUserInformation at load on Search

- Status: applied (closed 2026-10-15)
- Raised by: Search, 2026-10-15
- Block: shell `app/src/shell/userInfo.ts` (`getUserInformation`) or the shared block that calls it on Search (FilterSheet / CacheControl_UserInfo_Wrapper / CommonUI_InsideLayout / BottomBarMenu)
- Other routes using it (catalog/blocks.md): every route that renders FilterSheet or CommonUI_InsideLayout
- Related question: none

## Evidence
- Captured calls: `migration/screens/Search/analysis/calls.json`: load phase has CacheControl_UserInfo/DataActionGetCacheInfo
  and no ActionGetUserInformation.
- Parity difference it explains: `[call] calls:load: extra call UBTConnect_Utils/ActionGetUserInformation`
  (parity/default.json). The route code does not call it (app/src/screens/Search has no getUserInformation).

## Expected change
The user-info consumer on this screen must read the cache entry that CacheControl_UserInfo fills (CacheTypeId
DirectoryUser) instead of calling GetUserInformation before the cache is filled, so the load calls match the capture.

## Workaround in the route until applied
None (no route code involved).

## Resolution
- Cause: the app start's GetUserInformation_Wrapper (`src/shell/startup.ts` connectSetLoggedContext → `userInfo.ts`) ran
  before Search's lazily loaded CacheControl_UserInfo had filled the DirectoryUser cache (mocks answer at once).
- Change (`src/shell/startup.ts`): a signed-in app start waits for the first screen (`dx-navigation-transition-end` that
  ScreenFrame raises after the screen's effects, transitionEvents.ts:44-66) before Sync_Info_GetMain, as the signed-in
  captures have the first screen's load calls before AfterInitialize (calls.json of Search, HomeFeed, MyEntertaining);
  signed out it does not wait (Login calls.json: Get_RuntimeVersion after Sync_Info_GetMain). No wait outside the app
  frame or on a path with no screen. `-start` is not used: BottomBarSlider_ForceRefresh raises it too.
- Change (`src/shell/userInfo.ts`): while that app start runs, screens' getUserInformation() waits for its step
  (PINRegister calls.json: one GetUserInformation, after Sync_Info_GetMain); the step itself uses getUserInformation_Wrapper.
- Tests: `src/shell/startup.test.ts` (cache filled by the screen → no call; no CacheControl → call; reader waits → one call
  after Sync_Info_GetMain; unknown path does not wait).
- Parity: Search 0 in all states (call 0); regression 0 on Login, PINUnlock, PINRegister, Splash, HomeFeed, MyEntertaining.
