# Splash: server calls in OutSystems and React

This file compares the server calls of the route `/UBTConnect/Splash` in OutSystems (TST) with the calls of the React app.
The tool `migration/tools/route_actions/check_route.py` wrote this file on 2026-11-04.
The tool reads the code. It does not run the app.

## 1. Route

| Item | Value | Source |
|---|---|---|
| Route | `/UBTConnect/Splash` | `app/src/app/routes.generated.ts` |
| OutSystems screen | `UBTConnect.App_Common.Splash` | TST compiled code |
| UI flow | `App_Common` | MCP `getScreenNames` (DEV) |
| React screen | [`pages/Splash/SplashPage.tsx`](../../app/src/pages/Splash/SplashPage.tsx) | `app/src/pages/` |
| React route rules | access `anonymous`, lock `ignore`, flag redirect none | `app/src/app/routes.ts` |
| Code read | OutSystems: 16 screen and block files. React: 159 app shell files and 48 screen files | TST `facts.json`, `react_calls.mjs` |

## 2. Result

| Check | Result |
|---|---|
| Server calls on TST | 8: React makes 8, **0 missing** |
| React calls that TST does not make on this route | 0 (see [questions](#8-questions)) |
| Screen and blocks with a React port | 16 of 16 |
| Navigation targets found in React | 2 of 2 |

## 3. Screenshots

The screenshots come from the last parity run (`route.py parity`). The TST capture hides personal text with dots. The React build shows fictional mock data.

| State | TST (expected) | React (build) | Difference |
|---|---|---|---|
| `default`<br>390x844, mock `real`<br>2026-10-29<br>pixel difference 0.0% | <img src="../screens/Splash/parity/default.expected.png" width="200" alt="default expected"> | <img src="../screens/Splash/parity/default.build.png" width="200" alt="default build"> | <img src="../screens/Splash/parity/default.diff.png" width="200" alt="default diff"> |

## 4. Diagram

- A box on the left is the OutSystems block or app action that makes the call.
- A line connects each call to the React action that makes the same call.
- The right column shows the React components that use each React action.
- A red box is a call that React does not make.

![Splash diagram](svg/Splash.svg)

<details><summary>Mermaid source</summary>

```mermaid
flowchart LR
  subgraph OS["OutSystems (TST compiled)"]
    subgraph OS_shell["App shell"]
      o0["?"]
      o1["UBTConnect"]
    end
    subgraph OS_screen["Screen and its blocks"]
      o2["?"]
    end
  end
  subgraph EP["Server calls (TST)"]
    e3["ActionSync_Info_GetMain"]
    e4["ServiceAPIFetchData_CacheableMapEntities"]
    e5["ServiceAPIFetchData_CacheableHouseholds"]
    e6["ActionAppManager_SynchAppContext"]
    e7["ActionAppManager_AfterInitialize"]
    e8["ActionGetUserInformation"]
    e9["ActionGetNumberUnreadMessages"]
    e10["DataActionGetCacheInfo"]
  end
  subgraph RE["React actions"]
    subgraph RE_shell["App shell"]
      r11["afterInitialize()"]
      r12["fetchAppContext()"]
      r13["fetchCacheableHouseholds()"]
      r14["fetchCacheableMapEntities()"]
      r15["fetchNumberUnreadMessages()"]
      r16["fetchPolicies()"]
      r17["fetchSyncInfoMain()"]
      r18["fetchUserInformation()"]
    end
    subgraph RE_page["Screen"]
    end
  end
  subgraph RC["React components"]
    c19["AppFrame"]
  end
  r11 --- c19
  r12 --- c19
  r13 --- c19
  r14 --- c19
  r15 --- c19
  r16 --- c19
  r17 --- c19
  r18 --- c19
  o1 --> e3
  o1 --> e4
  o1 --> e5
  o0 --> e6
  o0 --> e7
  o0 --> e8
  o0 --> e9
  o2 --> e10
  e3 --- r17
  e4 --- r14
  e5 --- r13
  e6 --- r12
  e7 --- r11
  e8 --- r18
  e9 --- r15
  e10 --- r16
  classDef missing fill:#fde2e1,stroke:#c0392b,color:#7b241c
  classDef ok fill:#e3f4e8,stroke:#2e7d4f,color:#1d4d31
  class e3,e4,e5,e6,e7,e8,e9,e10 ok
```

</details>

## 5. Data flow

- The diagram shows the server calls in the order of the phases: app start, screen load, screen ready, then the user actions.
- Each participant is an OutSystems block or module that makes calls.
- An arrow from the user is a click, a submit or an event. A note over a block gives a callback or another client action.
- Each call arrow ends with the nearest React component that makes the same call (`React: …`).
- An arrow to the server gives the inputs of the call. The return arrow gives the outputs. The names come from the contract `app/src/api/openapi.yaml`.
- A red area is a call that React does not make.

![Splash data flow](svg/Splash-sequence.svg)

<details><summary>Mermaid source</summary>

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant p0 as Connect2_LegacyShared
  participant p1 as UBTConnect
  participant p2 as UBTConnect_Utils
  participant p3 as UBT_AppManager
  participant p4 as CacheControl_Policies
  participant S as Server (TST calls)
  rect rgba(120, 120, 120, 0.06)
  Note over U,S: App start and sign-in context
  p0->>S: GetNumberUnreadMessages(DeviceId) · React: AppFrame
  S-->>p0: NumberPrivateUnreadMessages, NumberPublicUnreadMessages
  p1->>S: Sync_Info_GetMain(isFromLogin) · React: AppFrame
  S-->>p1: B2CTenant, FeedBaseURL, LocalEntities_App, …
  p2->>S: GetUserInformation() · React: AppFrame
  S-->>p2: UserInformation
  p3->>S: AppManager_AfterInitialize(AppManager_MobileContext, EspaceName, TOTP) · React: AppFrame
  S-->>p3: isNotRegistered
  p3->>S: AppManager_SynchAppContext(EspaceName) · React: AppFrame
  S-->>p3: AppManager_ClientConfig, FirebaseRealTimeDB_Token, PermissionList, …
  end
  rect rgba(120, 120, 120, 0.06)
  Note over U,S: Called by a module action (no caller in the TST graph)
  Note over p1: module action get_Cacheable_MapHouseholds (the TST graph has no caller)
  p1->>S: FetchData_CacheableHouseholds() · React: AppFrame
  S-->>p1: Household_Markers
  Note over p1: module action get_Cacheable_MapEntities (the TST graph has no caller)
  p1->>S: FetchData_CacheableMapEntities() · React: AppFrame
  S-->>p1: Countries_GeoJSON, Countries_Markers, GlobalLocations_Markers, …
  end
  rect rgba(120, 120, 120, 0.06)
  Note over U,S: User actions and events
  U->>p4: seen on TST, no static chain
  p4->>S: GetCacheInfo(CacheKey, CacheTypeId, TimeToLiveSeconds) · React: AppFrame
  S-->>p4: CacheControl_Response
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
| 1 | `Connect2_LegacyShared/ActionGetNumberUnreadMessages` | server action | `Connect2_LegacyShared` (app shell) | app start (seen on TST, no static chain) | no static chain in the TST code | yes | `fetchNumberUnreadMessages()` [`api/message/unreadMessages.ts:22`](../../app/src/api/message/unreadMessages.ts#L22) (shell) | `AppFrame → AppStart → … → fetchNumberUnreadMessages`<br>[`app/AppFrame.tsx`](../../app/src/app/AppFrame.tsx) | implemented |
| 2 | `UBTConnect/ActionSync_Info_GetMain` | server action | `UBTConnect` (app shell) | app start | UBTConnect.onApplicationReady → UBTConnect.connect_SetLoggedContext → UBTConnect.sync_Info_Main → server Sync_Info_GetMain<br>(+1 more chains) | yes | `fetchSyncInfoMain()` [`api/app/repository.ts:36`](../../app/src/api/app/repository.ts#L36) (shell) | `AppFrame → AppStart → … → fetchSyncInfoMain`<br>[`app/AppFrame.tsx`](../../app/src/app/AppFrame.tsx) | implemented |
| 3 | `UBTConnect/ServiceAPIFetchData_CacheableHouseholds` | service action | `UBTConnect` (app shell) | module action `get_Cacheable_MapHouseholds` (the TST graph has no caller) | UBTConnect.get_Cacheable_MapHouseholds → server FetchData_CacheableHouseholds | yes | `fetchCacheableHouseholds()` [`api/app/repository.ts:48`](../../app/src/api/app/repository.ts#L48) (shell) | `AppFrame → AppStart → … → fetchCacheableHouseholds`<br>[`app/AppFrame.tsx`](../../app/src/app/AppFrame.tsx) | implemented |
| 4 | `UBTConnect/ServiceAPIFetchData_CacheableMapEntities` | service action | `UBTConnect` (app shell) | module action `get_Cacheable_MapEntities` (the TST graph has no caller) | UBTConnect.get_Cacheable_MapEntities → server FetchData_CacheableMapEntities | yes | `fetchCacheableMapEntities()` [`api/app/repository.ts:42`](../../app/src/api/app/repository.ts#L42) (shell) | `AppFrame → AppStart → … → fetchCacheableMapEntities`<br>[`app/AppFrame.tsx`](../../app/src/app/AppFrame.tsx) | implemented |
| 5 | `UBTConnect_Utils/ActionGetUserInformation` | server action | `UBTConnect_Utils` (app shell) | app start (seen on TST, no static chain) | no static chain in the TST code | yes | `fetchUserInformation()` [`api/member/userInformation.ts:6`](../../app/src/api/member/userInformation.ts#L6) (shell) | `AppFrame → CommonUiHost → … → fetchUserInformation`<br>[`app/AppFrame.tsx`](../../app/src/app/AppFrame.tsx) | implemented |
| 6 | `UBT_AppManager/ActionAppManager_AfterInitialize` | server action | `UBT_AppManager` (app shell) | app start (seen on TST, no static chain) | no static chain in the TST code | yes | `afterInitialize()` [`api/app/repository.ts:30`](../../app/src/api/app/repository.ts#L30) (shell) | `AppFrame → AppStart → … → afterInitialize`<br>[`app/AppFrame.tsx`](../../app/src/app/AppFrame.tsx) | implemented |
| 7 | `UBT_AppManager/ActionAppManager_SynchAppContext` | server action | `UBT_AppManager` (app shell) | app start (seen on TST, no static chain) | no static chain in the TST code | yes | `fetchAppContext()` [`api/app/repository.ts:23`](../../app/src/api/app/repository.ts#L23) (shell) | `AppFrame → AppStart → … → fetchAppContext`<br>[`app/AppFrame.tsx`](../../app/src/app/AppFrame.tsx) | implemented |
| 8 | `UBTConnect_Utils/CacheControl/CacheControl_Policies/DataActionGetCacheInfo` | data action | `CacheControl_Policies` (screen) | seen on TST, no static chain | no static chain in the TST code | yes | `fetchPolicies()` [`api/app/repository.ts:54`](../../app/src/api/app/repository.ts#L54) (shell) | `AppFrame → AppLockHost → … → fetchPolicies`<br>[`app/AppFrame.tsx`](../../app/src/app/AppFrame.tsx) | implemented |

## 7. Missing in React

None.

## 8. Questions

None.

## 9. Method

1. **OutSystems (TST).** The tool reads `facts.json` of `migration/screens/Splash/analysis/`:
   - the screen and block files that TST renders;
   - each server call, and the chain of client actions that makes the call;
   - the calls that TST made in the capture (`calls.json`).
2. **App shell and screen.** `app shell` is `CommonUI_InsideLayout`, its blocks and the app-level actions. `screen` is the screen and its other blocks.
3. **MCP (DEV).** The tool reads the UI flow with `getScreenNames`. TST wins when DEV is different.
4. **React.** `react_calls.mjs` reads the app shell from `app/src/main.tsx` and the screen from its `<Route>Page.tsx`. It counts only the code that the app uses.
5. **Match.** `callAction(M, A)` gives `/api/M/A`. The `x-os-paths` of `app/src/api/openapi.yaml` give the TST call. The status is `implemented` when the TST call is the same. Else the status is `missing`.

Limit: a name or a call match does not prove the same behaviour. The parity checks of the migration compare the behaviour.
