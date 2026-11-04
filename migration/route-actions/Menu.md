# Menu: server calls in OutSystems and React

This file compares the server calls of the route `/UBTConnect/Menu` in OutSystems (TST) with the calls of the React app.
The tool `migration/tools/route_actions/check_route.py` wrote this file on 2026-11-04.
The tool reads the code. It does not run the app.

## 1. Route

| Item | Value | Source |
|---|---|---|
| Route | `/UBTConnect/Menu` | `app/src/app/routes.generated.ts` |
| OutSystems screen | `UBTConnect.App_Menu.Menu` | TST compiled code |
| UI flow | `App_Menu` | MCP `getScreenNames` (DEV) |
| React screen | [`pages/Menu/MenuPage.tsx`](../../app/src/pages/Menu/MenuPage.tsx) | `app/src/pages/` |
| React route rules | access `member`, lock `enforce`, flag redirect none | `app/src/app/routes.ts` |
| Code read | OutSystems: 48 screen and block files. React: 159 app shell files and 152 screen files | TST `facts.json`, `react_calls.mjs` |

## 2. Result

| Check | Result |
|---|---|
| Server calls on TST | 12: React makes 10, **2 missing** |
| React calls that TST does not make on this route | 3 (see [questions](#8-questions)) |
| Screen and blocks with a React port | 48 of 48 |
| Navigation targets found in React | 12 of 12 |

## 3. Screenshots

The screenshots come from the last parity run (`route.py parity`). The TST capture hides personal text with dots. The React build shows fictional mock data.

| State | TST (expected) | React (build) | Difference |
|---|---|---|---|
| `default`<br>390x844, mock `member`<br>2026-10-29<br>pixel difference 1.1% | <img src="../screens/Menu/parity/default.expected.png" width="200" alt="default expected"> | <img src="../screens/Menu/parity/default.build.png" width="200" alt="default build"> | <img src="../screens/Menu/parity/default.diff.png" width="200" alt="default diff"> |
| `loading`<br>390x844, mock `loading`<br>2026-10-29<br>pixel difference 0.0% | <img src="../screens/Menu/parity/loading.expected.png" width="200" alt="loading expected"> | <img src="../screens/Menu/parity/loading.build.png" width="200" alt="loading build"> | <img src="../screens/Menu/parity/loading.diff.png" width="200" alt="loading diff"> |
| `offline`<br>390x844, mock `error`<br>2026-10-29<br>pixel difference 0.0% | <img src="../screens/Menu/parity/offline.expected.png" width="200" alt="offline expected"> | <img src="../screens/Menu/parity/offline.build.png" width="200" alt="offline build"> | <img src="../screens/Menu/parity/offline.diff.png" width="200" alt="offline diff"> |

## 4. Diagram

- A box on the left is the OutSystems block or app action that makes the call.
- A line connects each call to the React action that makes the same call.
- The right column shows the React components that use each React action.
- A red box is a call that React does not make.

![Menu diagram](svg/Menu.svg)

<details><summary>Mermaid source</summary>

```mermaid
flowchart LR
  subgraph OS["OutSystems (TST compiled)"]
    subgraph OS_shell["App shell"]
      o0["HandleImageLoadError"]
      o1["UBTConnect"]
      o2["UBT_AppManager"]
    end
    subgraph OS_screen["Screen and its blocks"]
      o3["BottomBarMenu"]
      o4["CacheControl_UserInfo"]
      o5["Menu"]
      o6["Version"]
    end
  end
  subgraph EP["Server calls (TST)"]
    e7["ActionAppManager_SynchAppContext"]
    e8["ActionGet_RuntimeVersion"]
    e9["DataActionGetCacheInfo"]
    e10["ActionAppManager_AfterInitialize"]
    e11["ActionSync_Info_GetMain"]
    e12["ActionGetNumberUnreadMessages"]
    e13["ServiceAPIFetchData_CacheableMapEntities"]
    e14["ServiceAPIFetchData_CacheableHouseholds"]
    e15["ActionRequestPhotoUpdate"]
    e16["ServiceAPIGet_UI_UpdateItems_UnreadCount_All"]
    e17["ActionAppManager_Logout"]
    e18["ActionGetAllApplicationEvents"]
  end
  subgraph RE["React actions"]
    subgraph RE_shell["App shell"]
      r19["afterInitialize()"]
      r20["fetchAppContext()"]
      r21["fetchCacheableHouseholds()"]
      r22["fetchCacheableMapEntities()"]
      r23["fetchNumberUnreadMessages()"]
      r24["fetchSyncInfoMain()"]
    end
    subgraph RE_page["Screen"]
      r25["UserInfoCacheControl()"]
      r26["fetchUnreadUpdateItemsCount()"]
      r27["get_ConnectVersionDetails()"]
      r28["requestPhotoUpdate()"]
    end
  end
  subgraph RC["React components"]
    c29["AppFrame"]
    c30["AppVersion"]
    c31["BottomBar"]
    c32["Menu"]
  end
  r25 --- c32
  r20 --- c32
  r28 --- c32
  r19 --- c29
  r20 --- c29
  r21 --- c29
  r22 --- c29
  r23 --- c29
  r24 --- c29
  r27 --- c30
  r26 --- c31
  o0 --> e7
  o0 --> e18
  o6 --> e8
  o4 --> e9
  o1 --> e10
  o1 --> e11
  o1 --> e12
  o1 --> e13
  o1 --> e14
  o2 --> e10
  o5 --> e15
  o5 --> e17
  o3 --> e16
  e7 --- r20
  e8 --- r27
  e9 --- r25
  e10 --- r19
  e11 --- r24
  e12 --- r23
  e13 --- r22
  e14 --- r21
  e15 --- r28
  e16 --- r26
  classDef missing fill:#fde2e1,stroke:#c0392b,color:#7b241c
  classDef ok fill:#e3f4e8,stroke:#2e7d4f,color:#1d4d31
  class e17,e18 missing
  class e7,e8,e9,e10,e11,e12,e13,e14,e15,e16 ok
```

</details>

## 5. Data flow (user actions)

- The diagram shows each user action of the route (click, change, submit) and its effects.
- The effects are server calls, navigation (`Navigation`), external links, messages and confirm dialogs.
- Each group starts with the user action on an OutSystems block and its handler.
- When the handler has branches, `alt` / `else` shows them. The name of a branch comes from its condition in the TST compiled code. `other` is the last `else`.
- A note `via …` gives the module action that makes the next calls.
- An arrow to the server gives the inputs of the call. The return arrow gives the outputs. The names come from the contract `app/src/api/openapi.yaml`.
- Each call arrow ends with the nearest React component that makes the same call (`React: …`). A red area is a call that React does not make.
- The calls of the app start, the screen load and the callbacks are in section 6, not here. A user action that only changes the screen state is not in the diagram.

![Menu data flow](svg/Menu-sequence.svg)

<details><summary>Mermaid source</summary>

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant p0 as BottomBarMenu
  participant p1 as Menu
  participant p2 as Block_PINUnlock_ContentWrapper
  participant S as Server (TST calls)
  participant N as Navigation
  participant X as External link
  rect rgba(120, 120, 120, 0.06)
  U->>p0: click: event_BottomBar_Clicked
  alt home
  p0->>N: go to HomeFeed
  else directory
  p0->>N: go to CountryList
  p0->>N: go to Locality_Details
  else updates
  p0->>N: go to Updates_SingleList
  else bookmarks
  p0->>N: go to Bookmarks
  else menu
  p0->>N: go to Menu
  end
  end
  rect rgba(120, 120, 120, 0.06)
  U->>p1: click: onClick_EditYourAccount
  p1->>N: go to Profile
  end
  rect rgba(120, 120, 120, 0.06)
  U->>p2: click: onClick_ForgotPIN
  p2->>N: go to Login
  end
  rect rgba(120, 120, 120, 0.06)
  U->>p1: click: onClick_MenuOption
  alt logOut
  Note over p1: confirm dialog
  Note over p1: via UBTConnect.connect_Logout
  rect rgba(192, 57, 43, 0.15)
  p1->>S: AppManager_Logout() · React: none
  S-->>p1: outputs not in the contract
  end
  p1->>S: AppManager_SynchAppContext(EspaceName) · React: Menu
  S-->>p1: AppManager_ClientConfig, FirebaseRealTimeDB_Token, PermissionList, …
  p1->>N: go to HomeFeed
  else contactUs
  p1->>N: go to ContactUsMenu
  else termsAndPolicies
  p1->>N: go to TermsAndPoliciesMenu
  else pINAndBiometrics
  p1->>N: go to PINBiometricsMenu
  else subscriptionAndPayments
  p1->>X: OpenInApp_OpenExternalLink
  else requestPhotoUpdate
  Note over p1: confirm dialog
  p1->>S: RequestPhotoUpdate() · React: Menu
  S-->>p1: Out_IsSuccess
  Note over p1: message "Your update photo request has been submitted."
  else other
  Note over p1: message "Go to " + id
  end
  end
```

</details>

## 6. Server calls

- **Called from (OutSystems):** the block or the app-level module whose own client action makes the call. `app shell` = the layout and the app start; `screen` = the screen and its blocks.
- **Made by (TST):** for each block in "Called from", its chain of client actions from the block to the call.
- **Trigger:** when the call runs, from the start of the chain on TST.
- **Seen on TST:** `yes` when TST made the call in the capture. Many calls run only after a click. A call that TST made but that has no static chain in the TST code is in the table too; its trigger says so.
- **React action:** the React function that makes the same call, and the part that loads it: `shell`, `page` or both.
- **React caller:** the nearest React component that uses the React action, and the hooks between them. At most 2 chains, the shortest first.

| # | Call (TST) | Kind | Called from (OutSystems) | Trigger | Made by (TST) | Seen on TST | React action | React caller | Status |
|---|---|---|---|---|---|---|---|---|---|
| 1 | `Connect2_LegacyShared/ActionGetAllApplicationEvents` | server action | `HandleImageLoadError` (app shell) | image load error | HandleImageLoadError.applicationEvent_ImageError → Connect2_LegacyShared.zOnApplicationEvent_Wrapper → … → server GetAllApplicationEvents | no | – | – | **missing** |
| 2 | `UBT_AppManager/ActionAppManager_SynchAppContext` | server action | `HandleImageLoadError` (app shell) | image load error | HandleImageLoadError.applicationEvent_ImageError → Connect2_LegacyShared.zOnApplicationEvent_Wrapper → … → server AppManager_SynchAppContext | yes | `fetchAppContext()` [`api/app/repository.ts:23`](../../app/src/api/app/repository.ts#L23) (shell + page) | `Menu → useMenu → … → fetchAppContext`<br>[`pages/Menu/MenuPage.tsx`](../../app/src/pages/Menu/MenuPage.tsx)<br>`AppFrame → AppStart → … → fetchAppContext`<br>[`app/AppFrame.tsx`](../../app/src/app/AppFrame.tsx) | implemented |
| 3 | `Connect2_LegacyShared/ActionGetNumberUnreadMessages` | server action | `UBTConnect` (app shell) | app start | UBTConnect.onApplicationReady → UBTConnect.connect_SetLoggedContext → Connect2_LegacyShared.synchronizeNumberUnreadMessages → server GetNumberUnreadMessages<br>(+1 more chains) | yes | `fetchNumberUnreadMessages()` [`api/message/unreadMessages.ts:22`](../../app/src/api/message/unreadMessages.ts#L22) (shell) | `AppFrame → AppStart → … → fetchNumberUnreadMessages`<br>[`app/AppFrame.tsx`](../../app/src/app/AppFrame.tsx) | implemented |
| 4 | `UBTConnect/ActionSync_Info_GetMain` | server action | `UBTConnect` (app shell) | app start | UBTConnect.onApplicationReady → UBTConnect.connect_SetLoggedContext → UBTConnect.sync_Info_Main → server Sync_Info_GetMain<br>(+1 more chains) | yes | `fetchSyncInfoMain()` [`api/app/repository.ts:36`](../../app/src/api/app/repository.ts#L36) (shell) | `AppFrame → AppStart → … → fetchSyncInfoMain`<br>[`app/AppFrame.tsx`](../../app/src/app/AppFrame.tsx) | implemented |
| 5 | `UBTConnect/ServiceAPIFetchData_CacheableHouseholds` | service action | `UBTConnect` (app shell) | module action `get_Cacheable_MapHouseholds` (the TST graph has no caller) | UBTConnect.get_Cacheable_MapHouseholds → server FetchData_CacheableHouseholds | yes | `fetchCacheableHouseholds()` [`api/app/repository.ts:48`](../../app/src/api/app/repository.ts#L48) (shell) | `AppFrame → AppStart → … → fetchCacheableHouseholds`<br>[`app/AppFrame.tsx`](../../app/src/app/AppFrame.tsx) | implemented |
| 6 | `UBTConnect/ServiceAPIFetchData_CacheableMapEntities` | service action | `UBTConnect` (app shell) | module action `get_Cacheable_MapEntities` (the TST graph has no caller) | UBTConnect.get_Cacheable_MapEntities → server FetchData_CacheableMapEntities | yes | `fetchCacheableMapEntities()` [`api/app/repository.ts:42`](../../app/src/api/app/repository.ts#L42) (shell) | `AppFrame → AppStart → … → fetchCacheableMapEntities`<br>[`app/AppFrame.tsx`](../../app/src/app/AppFrame.tsx) | implemented |
| 7 | `UBT_AppManager/ActionAppManager_AfterInitialize` | server action | `UBTConnect` (app shell)<br>`UBT_AppManager` (app shell) | app start<br>app start | UBTConnect.onApplicationReady → UBT_AppManager_Mobile.appManager_Mobile_OnAppReady → … → server AppManager_AfterInitialize<br>UBT_AppManager.appManager_OnAppReady_Web → UBT_AppManager.appManager_InitializeWebComponents → UBT_AppManager.appManager_AfterInitialize → server AppManager_AfterInitialize | yes | `afterInitialize()` [`api/app/repository.ts:30`](../../app/src/api/app/repository.ts#L30) (shell) | `AppFrame → AppStart → … → afterInitialize`<br>[`app/AppFrame.tsx`](../../app/src/app/AppFrame.tsx) | implemented |
| 8 | `UBTConnect/ServiceAPIGet_UI_UpdateItems_UnreadCount_All` | service action | `BottomBarMenu` (screen) | ready | BottomBarMenu.OnReady → BottomBarMenu.onReady → UBTConnect.directory_Updates_RefreshBottomBarCount → server Get_UI_UpdateItems_UnreadCount_All | no | `fetchUnreadUpdateItemsCount()` [`api/update/repository.ts:73`](../../app/src/api/update/repository.ts#L73) (page) | `BottomBar → directory_Updates_RefreshBottomBarCount → fetchUnreadUpdateItemsCount`<br>[`components/layout/BottomBar/BottomBar.tsx`](../../app/src/components/layout/BottomBar/BottomBar.tsx) | implemented |
| 9 | `UBTConnect_Utils/CacheControl/CacheControl_UserInfo/DataActionGetCacheInfo` | data action | `CacheControl_UserInfo` (screen) | initialize | CacheControl_UserInfo.cacheControlOnNonCacheHit → CacheControl_UserInfo.DataActionGetCacheInfo<br>(+1 more chains) | yes | `UserInfoCacheControl()` [`legacy/os/cache/UserInfoCacheControl/UserInfoCacheControl.tsx:37`](../../app/src/legacy/os/cache/UserInfoCacheControl/UserInfoCacheControl.tsx#L37) (page) | `Menu → UserInfoCache → UserInfoCacheControl`<br>[`pages/Menu/MenuPage.tsx`](../../app/src/pages/Menu/MenuPage.tsx) | implemented |
| 10 | `UBTConnect/App_Menu/Menu/ActionRequestPhotoUpdate` | server action | `Menu` (screen) | click | Menu.onClick_MenuOption → server RequestPhotoUpdate | no | `requestPhotoUpdate()` [`api/member/repository.ts:46`](../../app/src/api/member/repository.ts#L46) (page) | `Menu → useMenu → requestPhotoUpdate`<br>[`pages/Menu/MenuPage.tsx`](../../app/src/pages/Menu/MenuPage.tsx) | implemented |
| 11 | `UBT_AppManager/ActionAppManager_Logout` | server action | `Menu` (screen) | click | Menu.onClick_MenuOption → Menu.action_Logout → … → server AppManager_Logout | no | – | – | **missing** |
| 12 | `UBTConnect_Utils/ActionGet_RuntimeVersion` | server action | `Version` (screen) | ready | Version.OnReady → Version.screenEvent_OnReady → UBTConnect_Utils.get_ConnectVersionDetails → server Get_RuntimeVersion | yes | `get_ConnectVersionDetails()` [`lib/ubtConnectUtils/actions.ts:36`](../../app/src/lib/ubtConnectUtils/actions.ts#L36) (page) | `AppVersion → loadVersionDetails → get_ConnectVersionDetails`<br>[`components/version/AppVersion/AppVersion.tsx`](../../app/src/components/version/AppVersion/AppVersion.tsx) | implemented |

## 7. Missing in React

- Call `UBT_AppManager/ActionAppManager_Logout`. Chain on TST: onClick in CustomContainer → event clicked of CustomContainer → event onClick_MenuOption of Menu_List → Menu.onClick_MenuOption → Menu.action_Logout → UBTConnect.connect_Logout → UBT_AppManager.appManager_Logout → server AppManager_Logout.
  - No React code makes this call.
  - Note in [`platform/auth/mockAuth.ts:24`](../../app/src/platform/auth/mockAuth.ts#L24): "/** The server logout of AppManager_Logout: no call (app-shell spec 10). */"
  - Note in [`platform/session/auth.ts:84`](../../app/src/platform/session/auth.ts#L84): "/** Connect_Logout (UC:1062-1066): Cache_InvalidateEverything, then AppManager_Logout (AM:3649-3720): server logout"
  - Note in [`platform/session/pin.ts:66`](../../app/src/platform/session/pin.ts#L66): "/** PIN_Delete(UserId, AppName), part of AppManager_Logout (AM:3712). */"
- Call `Connect2_LegacyShared/ActionGetAllApplicationEvents`. Chain on TST: HandleImageLoadError.applicationEvent_ImageError → Connect2_LegacyShared.zOnApplicationEvent_Wrapper → Connect2_LegacyShared.getAppEventName → Connect2_LegacyShared.cacheLocalApplicationEvents → server GetAllApplicationEvents.
  - No React code makes this call.

## 8. Questions

1. React calls `/api/UBTConnect_Utils/ActionGetUserInformation` from `fetchUserInformation()` [`api/member/userInformation.ts:6`](../../app/src/api/member/userInformation.ts#L6) (shell + page). TST Menu has no chain to this call. Does the call belong to this route?
2. React calls `/api/UBTConnect_Utils/CacheControl_Policies/DataActionGetCacheInfo` from `fetchPolicies()` [`api/app/repository.ts:54`](../../app/src/api/app/repository.ts#L54) (shell + page). TST Menu has no chain to this call. Does the call belong to this route?
3. React calls `/api/UBTConnect_Utils/ActionGetSignedImagesInBulk` from `cache_SignedImageURL_GetCallback()` [`lib/ubtConnectUtils/actions.ts:124`](../../app/src/lib/ubtConnectUtils/actions.ts#L124) (page). TST Menu has no chain to this call. Does the call belong to this route?

## 9. Method

1. **OutSystems (TST).** The tool reads `facts.json` of `migration/screens/Menu/analysis/`:
   - the screen and block files that TST renders;
   - each server call, and the chain of client actions that makes the call;
   - the calls that TST made in the capture (`calls.json`).
2. **App shell and screen.** `app shell` is `CommonUI_InsideLayout`, its blocks and the app-level actions. `screen` is the screen and its other blocks.
3. **MCP (DEV).** The tool reads the UI flow with `getScreenNames`. TST wins when DEV is different.
4. **React.** `react_calls.mjs` reads the app shell from `app/src/main.tsx` and the screen from its `<Route>Page.tsx`. It counts only the code that the app uses.
5. **Match.** `callAction(M, A)` gives `/api/M/A`. The `x-os-paths` of `app/src/api/openapi.yaml` give the TST call. The status is `implemented` when the TST call is the same. Else the status is `missing`.

Limit: a name or a call match does not prove the same behaviour. The parity checks of the migration compare the behaviour.
