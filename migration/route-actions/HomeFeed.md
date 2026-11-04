# HomeFeed: server calls in OutSystems and React

This file compares the server calls of the route `/UBTConnect/HomeFeed` in OutSystems (TST) with the calls of the React app.
The tool `migration/tools/route_actions/check_route.py` wrote this file on 2026-11-04.
The tool reads the code. It does not run the app.

## 1. Route

| Item | Value | Source |
|---|---|---|
| Route | `/UBTConnect/HomeFeed` | `app/src/app/routes.generated.ts` |
| OutSystems screen | `UBTConnect.Home.HomeFeed` | TST compiled code |
| UI flow | `Home` | MCP `getScreenNames` (DEV) |
| React screen | [`pages/HomeFeed/HomeFeedPage.tsx`](../../app/src/pages/HomeFeed/HomeFeedPage.tsx) | `app/src/pages/` |
| React route rules | access `member`, lock `enforce`, flag redirect none | `app/src/app/routes.ts` |
| Code read | OutSystems: 65 screen and block files. React: 159 app shell files and 228 screen files | TST `facts.json`, `react_calls.mjs` |

## 2. Result

| Check | Result |
|---|---|
| Server calls on TST | 21: React makes 18, **3 missing** |
| React calls that TST does not make on this route | 2 (see [questions](#7-questions)) |
| Screen and blocks with a React port | 65 of 65 |
| Navigation targets found in React | 23 of 23 |

## 3. Diagram

- A box on the left is the OutSystems block or app action that makes the call.
- A line connects each call to the React action that makes the same call.
- The right column shows the React components that use each React action.
- A red box is a call that React does not make.

![HomeFeed diagram](svg/HomeFeed.svg)

<details><summary>Mermaid source</summary>

```mermaid
flowchart LR
  subgraph OS["OutSystems (TST compiled)"]
    subgraph OS_shell["App shell"]
      o0["HandleImageLoadError"]
      o1["UBTConnect"]
      o2["UBTConnect_Utils"]
      o3["UBT_AppManager"]
    end
    subgraph OS_screen["Screen and its blocks"]
      o4["BottomBarMenu"]
      o5["Embedded_FeedCMS"]
      o6["FeedBlock_CommunityPopulation"]
      o7["FeedBlock_Services"]
      o8["FeedBlock_Updates"]
      o9["Feed_Embeded"]
      o10["HomeFeed"]
      o11["ShareSheet"]
    end
  end
  subgraph EP["Server calls (TST)"]
    e12["ActionAppManager_SynchAppContext"]
    e13["DataActionGetFeedConfig"]
    e14["DataActionGetCommunityStatistics"]
    e15["DataActionFetchUpdates"]
    e16["DataActionFetchCount"]
    e17["DataActionGetServices"]
    e18["ActionAppManager_AfterInitialize"]
    e19["ActionSync_Info_GetMain"]
    e20["ActionGetUserInformation"]
    e21["ActionGetNumberUnreadMessages"]
    e22["ServiceAPIFetchData_CacheableMapEntities"]
    e23["ServiceAPIFetchData_CacheableHouseholds"]
    e24["ServiceAPIAction_UI_UpdateItem_MarkAsRead"]
    e25["ServiceAPIAction_UI_UpdateItem_MarkAsUnread"]
    e26["ActionCS_CreateShareProfileLink"]
    e27["ActionCS_ShareObject"]
    e28["DataActionGetAvailableMembers"]
    e29["DataActionGetRecentlyShared"]
    e30["ServiceAPIGet_UI_UpdateItems_UnreadCount_All"]
    e31["ActionCS_CreateShareProfileLink"]
    e32["ActionGetAllApplicationEvents"]
  end
  subgraph RE["React actions"]
    subgraph RE_shell["App shell"]
      r33["afterInitialize()"]
      r34["fetchAppContext()"]
      r35["fetchCacheableHouseholds()"]
      r36["fetchCacheableMapEntities()"]
      r37["fetchNumberUnreadMessages()"]
      r38["fetchSyncInfoMain()"]
      r39["fetchUserInformation()"]
    end
    subgraph RE_page["Screen"]
      r40["csShareObject()"]
      r41["fetchAvailableMembers()"]
      r42["fetchCommunityPopulation()"]
      r43["fetchFeedConfig()"]
      r44["fetchFeedServices()"]
      r45["fetchFeedUpdates()"]
      r46["fetchHomeFeedCommunityStatistics()"]
      r47["fetchRecentlyShared()"]
      r48["fetchUnreadUpdateItemsCount()"]
      r49["markUpdateItemAsRead()"]
      r50["markUpdateItemAsUnread()"]
    end
  end
  subgraph RC["React components"]
    c51["AppFrame"]
    c52["BottomBar"]
    c53["CommonUiLayout"]
    c54["FeedServices"]
    c55["FeedUpdates"]
    c56["HomeFeed"]
    c57["ShareSheetContainer"]
  end
  r33 --- c51
  r34 --- c51
  r35 --- c51
  r36 --- c51
  r37 --- c51
  r38 --- c51
  r40 --- c57
  r34 --- c57
  r41 --- c57
  r47 --- c57
  r39 --- c57
  r42 --- c56
  r43 --- c56
  r46 --- c56
  r45 --- c55
  r48 --- c55
  r49 --- c55
  r50 --- c55
  r44 --- c54
  r39 --- c53
  r48 --- c52
  o0 --> e12
  o0 --> e32
  o5 --> e13
  o10 --> e14
  o8 --> e15
  o8 --> e24
  o8 --> e25
  o8 --> e30
  o6 --> e16
  o7 --> e17
  o1 --> e18
  o1 --> e19
  o1 --> e21
  o1 --> e22
  o1 --> e23
  o3 --> e18
  o2 --> e20
  o11 --> e26
  o11 --> e27
  o11 --> e28
  o11 --> e29
  o4 --> e30
  o9 --> e31
  o9 --> e32
  e12 --- r34
  e13 --- r43
  e14 --- r46
  e15 --- r45
  e16 --- r42
  e17 --- r44
  e18 --- r33
  e19 --- r38
  e20 --- r39
  e21 --- r37
  e22 --- r36
  e23 --- r35
  e24 --- r49
  e25 --- r50
  e27 --- r40
  e28 --- r41
  e29 --- r47
  e30 --- r48
  classDef missing fill:#fde2e1,stroke:#c0392b,color:#7b241c
  classDef ok fill:#e3f4e8,stroke:#2e7d4f,color:#1d4d31
  class e26,e31,e32 missing
  class e12,e13,e14,e15,e16,e17,e18,e19,e20,e21,e22,e23,e24,e25,e27,e28,e29,e30 ok
```

</details>

## 4. Data flow

- The diagram shows the server calls in the order of the phases: app start, screen load, screen ready, then the user actions.
- Each participant is an OutSystems block or module that makes calls.
- An arrow from the user is a click, a submit or an event. A note over a block gives a callback or another client action.
- Each call arrow ends with the nearest React component that makes the same call (`React: …`).
- An arrow to the server gives the inputs of the call. The return arrow gives the outputs. The names come from the contract `app/src/api/openapi.yaml`.
- A red area is a call that React does not make.

![HomeFeed data flow](svg/HomeFeed-sequence.svg)

<details><summary>Mermaid source</summary>

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant p0 as UBTConnect
  participant p1 as UBT_AppManager
  participant p2 as Embedded_FeedCMS
  participant p3 as FeedBlock_CommunityPopulation
  participant p4 as FeedBlock_Services
  participant p5 as FeedBlock_Updates
  participant p6 as BottomBarMenu
  participant p7 as HomeFeed
  participant p8 as ShareSheet
  participant p9 as UBTConnect_Utils
  participant p10 as HandleImageLoadError
  participant p11 as Feed_Embeded
  participant S as Server (TST calls)
  rect rgba(120, 120, 120, 0.06)
  Note over U,S: App start and sign-in context
  p0->>S: GetNumberUnreadMessages(DeviceId) · React: AppFrame
  S-->>p0: NumberPrivateUnreadMessages, NumberPublicUnreadMessages
  p0->>S: Sync_Info_GetMain(isFromLogin) · React: AppFrame
  S-->>p0: B2CTenant, FeedBaseURL, LocalEntities_App, …
  p0->>S: AppManager_AfterInitialize(AppManager_MobileContext, EspaceName, TOTP) · React: AppFrame
  S-->>p0: isNotRegistered
  p1->>S: AppManager_AfterInitialize(AppManager_MobileContext, EspaceName, TOTP) · React: AppFrame
  S-->>p1: isNotRegistered
  end
  rect rgba(120, 120, 120, 0.06)
  Note over U,S: Screen and block load
  p2->>S: GetFeedConfig(B2CTenant, FeedItemId, LoadingList, …) · React: HomeFeed
  S-->>p2: B2CClientId, B2CPolicy, BaseURL, …
  p3->>S: FetchCount() · React: HomeFeed
  S-->>p3: UI_MembersStatistics
  p4->>S: GetServices(ExternalAppPopUp_Id, ForceAddService, ItemPerPage, …) · React: FeedServices
  S-->>p4: ExternalLinks_ElGusto, ExterrnalPackages_CommunityTradelink, ExterrnalPackages_HR100, …
  p5->>S: FetchUpdates(CarouselPreloadedHouseholds) · React: FeedUpdates
  S-->>p5: UI_UpdateItemList
  end
  rect rgba(120, 120, 120, 0.06)
  Note over U,S: Screen ready
  p6->>S: Get_UI_UpdateItems_UnreadCount_All() · React: BottomBar
  S-->>p6: UnreadCount
  p7->>S: GetCommunityStatistics(HasUpdates, IsScreenInitialized, IsShareOpen, …) · React: HomeFeed
  S-->>p7: Out_CommunityStatistics
  end
  rect rgba(120, 120, 120, 0.06)
  Note over U,S: Parameters change
  p8->>S: GetRecentlyShared(AvatarImageSize_HorizontalList, AvatarImageSize_VerticalList, AvatarSize_HorizontalList, …) · React: ShareSheetContainer
  S-->>p8: Out_SearchResultItemList
  end
  rect rgba(120, 120, 120, 0.06)
  Note over U,S: Called by a module action (no caller in the TST graph)
  Note over p0: module action get_Cacheable_MapHouseholds (the TST graph has no caller)
  p0->>S: FetchData_CacheableHouseholds() · React: AppFrame
  S-->>p0: Household_Markers
  Note over p0: module action get_Cacheable_MapEntities (the TST graph has no caller)
  p0->>S: FetchData_CacheableMapEntities() · React: AppFrame
  S-->>p0: Countries_GeoJSON, Countries_Markers, GlobalLocations_Markers, …
  Note over p9: module action cache_UserInfo_GetCallback (the TST graph has no caller)
  p9->>S: GetUserInformation() · React: ShareSheetContainer
  S-->>p9: UserInformation
  end
  rect rgba(120, 120, 120, 0.06)
  Note over U,S: Image load error
  p10->>S: AppManager_SynchAppContext(EspaceName) · React: AppFrame
  S-->>p10: AppManager_ClientConfig, FirebaseRealTimeDB_Token, PermissionList, …
  rect rgba(192, 57, 43, 0.15)
  p10->>S: GetAllApplicationEvents() · React: none
  S-->>p10: EventList
  end
  end
  rect rgba(120, 120, 120, 0.06)
  Note over U,S: User actions and events
  U->>p5: click: FeedBlock_Updates.event_MarkAsRead
  p5->>S: Get_UI_UpdateItems_UnreadCount_All() · React: BottomBar
  S-->>p5: UnreadCount
  U->>p5: click: FeedBlock_Updates.event_ListItemOnClick
  p5->>S: Action_UI_UpdateItem_MarkAsRead(UpdateItemId) · React: FeedUpdates
  S-->>p5: no outputs
  U->>p5: click: FeedBlock_Updates.event_MarkAsUnread
  p5->>S: Action_UI_UpdateItem_MarkAsUnread(UpdateItemId) · React: FeedUpdates
  S-->>p5: no outputs
  U->>p11: click: Feed_Embeded.handle_Share_Others
  rect rgba(192, 57, 43, 0.15)
  p11->>S: GetAllApplicationEvents() · React: none
  S-->>p11: EventList
  end
  U->>p11: click: Feed_Embeded.handle_Share_Others
  rect rgba(192, 57, 43, 0.15)
  p11->>S: CS_CreateShareProfileLink() · React: none
  S-->>p11: outputs not in the contract
  end
  U->>p8: click: ShareSheet.handler_OnClickExternalOption
  rect rgba(192, 57, 43, 0.15)
  p8->>S: CS_CreateShareProfileLink(In_ShareObjectTypeId, In_SharedObjectId, In_UpdateDate, …) · React: none
  S-->>p8: ShareId, URL
  end
  U->>p8: click: ShareSheet.handler_OnClickRecentMember
  p8->>S: CS_ShareObject(In_ShareObjectTypeId, In_SharedObjectId, In_SharingProfileName, …) · React: ShareSheetContainer
  S-->>p8: IsAllowed, IsSuccess, Message, …
  U->>p8: submit: ShareSheet.handler_InputEventSubmit
  p8->>S: GetAvailableMembers(AvatarImageSize_HorizontalList, AvatarImageSize_VerticalList, AvatarSize_HorizontalList, …) · React: ShareSheetContainer
  S-->>p8: Out_SearchResultItemList
  end
```

</details>

## 5. Server calls

- **Called from (OutSystems):** the block or the app-level module whose own client action makes the call. `app shell` = the layout and the app start; `screen` = the screen and its blocks.
- **Made by (TST):** for each block in "Called from", its chain of client actions from the block to the call.
- **Trigger:** when the call runs, from the start of the chain on TST.
- **Seen on TST:** `yes` when TST made the call in the capture. Many calls run only after a click.
- **React action:** the React function that makes the same call, and the part that loads it: `shell`, `page` or both.
- **React caller:** the nearest React component that uses the React action, and the hooks between them. At most 2 chains, the shortest first.

| # | Call (TST) | Kind | Called from (OutSystems) | Trigger | Made by (TST) | Seen on TST | React action | React caller | Status |
|---|---|---|---|---|---|---|---|---|---|
| 1 | `UBT_AppManager/ActionAppManager_SynchAppContext` | server action | `HandleImageLoadError` (app shell) | image load error | HandleImageLoadError.applicationEvent_ImageError → Connect2_LegacyShared.zOnApplicationEvent_Wrapper → … → server AppManager_SynchAppContext | yes | `fetchAppContext()` [`api/app/repository.ts:23`](../../app/src/api/app/repository.ts#L23) (shell + page) | `AppFrame → AppStart → … → fetchAppContext`<br>[`app/AppFrame.tsx`](../../app/src/app/AppFrame.tsx)<br>`ShareSheetContainer → useShareSheet → … → fetchAppContext`<br>[`containers/ShareSheet/ShareSheetContainer.tsx`](../../app/src/containers/ShareSheet/ShareSheetContainer.tsx) | implemented |
| 2 | `Connect2_LegacyShared/ActionGetNumberUnreadMessages` | server action | `UBTConnect` (app shell) | app start | UBTConnect.onApplicationReady → UBTConnect.connect_SetLoggedContext → Connect2_LegacyShared.synchronizeNumberUnreadMessages → server GetNumberUnreadMessages<br>(+1 more chains) | yes | `fetchNumberUnreadMessages()` [`api/message/unreadMessages.ts:22`](../../app/src/api/message/unreadMessages.ts#L22) (shell) | `AppFrame → AppStart → … → fetchNumberUnreadMessages`<br>[`app/AppFrame.tsx`](../../app/src/app/AppFrame.tsx) | implemented |
| 3 | `UBTConnect/ActionSync_Info_GetMain` | server action | `UBTConnect` (app shell) | app start | UBTConnect.onApplicationReady → UBTConnect.connect_SetLoggedContext → UBTConnect.sync_Info_Main → server Sync_Info_GetMain<br>(+1 more chains) | yes | `fetchSyncInfoMain()` [`api/app/repository.ts:36`](../../app/src/api/app/repository.ts#L36) (shell) | `AppFrame → AppStart → … → fetchSyncInfoMain`<br>[`app/AppFrame.tsx`](../../app/src/app/AppFrame.tsx) | implemented |
| 4 | `UBTConnect/ServiceAPIFetchData_CacheableHouseholds` | service action | `UBTConnect` (app shell) | module action `get_Cacheable_MapHouseholds` (the TST graph has no caller) | UBTConnect.get_Cacheable_MapHouseholds → server FetchData_CacheableHouseholds | yes | `fetchCacheableHouseholds()` [`api/app/repository.ts:48`](../../app/src/api/app/repository.ts#L48) (shell) | `AppFrame → AppStart → … → fetchCacheableHouseholds`<br>[`app/AppFrame.tsx`](../../app/src/app/AppFrame.tsx) | implemented |
| 5 | `UBTConnect/ServiceAPIFetchData_CacheableMapEntities` | service action | `UBTConnect` (app shell) | module action `get_Cacheable_MapEntities` (the TST graph has no caller) | UBTConnect.get_Cacheable_MapEntities → server FetchData_CacheableMapEntities | yes | `fetchCacheableMapEntities()` [`api/app/repository.ts:42`](../../app/src/api/app/repository.ts#L42) (shell) | `AppFrame → AppStart → … → fetchCacheableMapEntities`<br>[`app/AppFrame.tsx`](../../app/src/app/AppFrame.tsx) | implemented |
| 6 | `UBT_AppManager/ActionAppManager_AfterInitialize` | server action | `UBTConnect` (app shell)<br>`UBT_AppManager` (app shell) | app start<br>app start | UBTConnect.onApplicationReady → UBT_AppManager_Mobile.appManager_Mobile_OnAppReady → … → server AppManager_AfterInitialize<br>UBT_AppManager.appManager_OnAppReady_Web → UBT_AppManager.appManager_InitializeWebComponents → UBT_AppManager.appManager_AfterInitialize → server AppManager_AfterInitialize | yes | `afterInitialize()` [`api/app/repository.ts:30`](../../app/src/api/app/repository.ts#L30) (shell) | `AppFrame → AppStart → … → afterInitialize`<br>[`app/AppFrame.tsx`](../../app/src/app/AppFrame.tsx) | implemented |
| 7 | `UBTConnect_Utils/ActionGetUserInformation` | server action | `UBTConnect_Utils` (app shell) | module action `cache_UserInfo_GetCallback` (the TST graph has no caller) | UBTConnect_Utils.cache_UserInfo_GetCallback → server GetUserInformation | yes | `fetchUserInformation()` [`api/member/userInformation.ts:6`](../../app/src/api/member/userInformation.ts#L6) (shell + page) | `ShareSheetContainer → useShareSheet → … → fetchUserInformation`<br>[`containers/ShareSheet/ShareSheetContainer.tsx`](../../app/src/containers/ShareSheet/ShareSheetContainer.tsx)<br>`CommonUiLayout → DialogAccessRestrictedAction → … → fetchUserInformation`<br>[`components/layout/CommonUiLayout/CommonUiLayout.tsx`](../../app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx) | implemented |
| 8 | `UBTConnect/ServiceAPIGet_UI_UpdateItems_UnreadCount_All` | service action | `BottomBarMenu` (screen)<br>`FeedBlock_Updates` (screen) | ready<br>click | BottomBarMenu.OnReady → BottomBarMenu.onReady → UBTConnect.directory_Updates_RefreshBottomBarCount → server Get_UI_UpdateItems_UnreadCount_All<br>FeedBlock_Updates.event_MarkAsRead → UBTConnect.directory_Updates_RefreshBottomBarCount → server Get_UI_UpdateItems_UnreadCount_All<br>(+1 more chains) | no | `fetchUnreadUpdateItemsCount()` [`api/update/repository.ts:73`](../../app/src/api/update/repository.ts#L73) (page) | `BottomBar → directory_Updates_RefreshBottomBarCount → fetchUnreadUpdateItemsCount`<br>[`components/layout/BottomBar/BottomBar.tsx`](../../app/src/components/layout/BottomBar/BottomBar.tsx)<br>`FeedUpdates → useFeedUpdates → directory_Updates_RefreshBottomBarCount → fetchUnreadUpdateItemsCount`<br>[`pages/HomeFeed/HomeFeedPage.tsx`](../../app/src/pages/HomeFeed/HomeFeedPage.tsx) | implemented |
| 9 | `UBTConnect_EmbedFeed/Blocks/Embedded_FeedCMS/DataActionGetFeedConfig` | data action | `Embedded_FeedCMS` (screen) | block load (fetch at start) | Embedded_FeedCMS fetch at start → Embedded_FeedCMS.DataActionGetFeedConfig | yes | `fetchFeedConfig()` [`api/feed/repository.ts:9`](../../app/src/api/feed/repository.ts#L9) (page) | `HomeFeed → useEmbeddedFeed → useFeedConfigQuery → fetchFeedConfig`<br>[`pages/HomeFeed/HomeFeedPage.tsx`](../../app/src/pages/HomeFeed/HomeFeedPage.tsx) | implemented |
| 10 | `UBTConnect/Home/FeedBlock_CommunityPopulation/DataActionFetchCount` | data action | `FeedBlock_CommunityPopulation` (screen) | block load (fetch at start) | FeedBlock_CommunityPopulation fetch at start → FeedBlock_CommunityPopulation.DataActionFetchCount | yes | `fetchCommunityPopulation()` [`api/member/repository.ts:25`](../../app/src/api/member/repository.ts#L25) (page) | `HomeFeed → useCommunityPopulationQuery → fetchCommunityPopulation`<br>[`pages/HomeFeed/HomeFeedPage.tsx`](../../app/src/pages/HomeFeed/HomeFeedPage.tsx) | implemented |
| 11 | `UBTConnect/Home/FeedBlock_Services/DataActionGetServices` | data action | `FeedBlock_Services` (screen) | block load (fetch at start) | FeedBlock_Services fetch at start → FeedBlock_Services.DataActionGetServices | yes | `fetchFeedServices()` [`api/service/repository.ts:34`](../../app/src/api/service/repository.ts#L34) (page) | `FeedServices → useFeedServices → useFeedServicesQuery → fetchFeedServices`<br>[`pages/HomeFeed/HomeFeedPage.tsx`](../../app/src/pages/HomeFeed/HomeFeedPage.tsx) | implemented |
| 12 | `UBTConnect/Home/FeedBlock_Updates/DataActionFetchUpdates` | data action | `FeedBlock_Updates` (screen) | block load (fetch at start) | FeedBlock_Updates fetch at start → FeedBlock_Updates.DataActionFetchUpdates | yes | `fetchFeedUpdates()` [`api/update/repository.ts:22`](../../app/src/api/update/repository.ts#L22) (page) | `FeedUpdates → useFeedUpdates → useFeedUpdatesQuery → fetchFeedUpdates`<br>[`pages/HomeFeed/HomeFeedPage.tsx`](../../app/src/pages/HomeFeed/HomeFeedPage.tsx) | implemented |
| 13 | `UBTConnect/Home/FeedBlock_Updates/ServiceAPIAction_UI_UpdateItem_MarkAsRead` | service action | `FeedBlock_Updates` (screen) | click | FeedBlock_Updates.event_ListItemOnClick → server Action_UI_UpdateItem_MarkAsRead<br>(+1 more chains) | no | `markUpdateItemAsRead()` [`api/update/repository.ts:47`](../../app/src/api/update/repository.ts#L47) (page) | `FeedUpdates → useFeedUpdates → markUpdateItemAsRead`<br>[`pages/HomeFeed/HomeFeedPage.tsx`](../../app/src/pages/HomeFeed/HomeFeedPage.tsx) | implemented |
| 14 | `UBTConnect/Home/FeedBlock_Updates/ServiceAPIAction_UI_UpdateItem_MarkAsUnread` | service action | `FeedBlock_Updates` (screen) | click | FeedBlock_Updates.event_MarkAsUnread → server Action_UI_UpdateItem_MarkAsUnread | no | `markUpdateItemAsUnread()` [`api/update/repository.ts:52`](../../app/src/api/update/repository.ts#L52) (page) | `FeedUpdates → useFeedUpdates → markUpdateItemAsUnread`<br>[`pages/HomeFeed/HomeFeedPage.tsx`](../../app/src/pages/HomeFeed/HomeFeedPage.tsx) | implemented |
| 15 | `Connect2_LegacyShared/ActionGetAllApplicationEvents` | server action | `Feed_Embeded` (screen)<br>`HandleImageLoadError` (app shell) | click<br>image load error | Feed_Embeded.handle_Share_Others → UBTConnect_Utils.shareEntity_ByURL → … → server GetAllApplicationEvents<br>HandleImageLoadError.applicationEvent_ImageError → Connect2_LegacyShared.zOnApplicationEvent_Wrapper → … → server GetAllApplicationEvents | no | – | – | **missing** |
| 16 | `UBTConnect_Utils/ActionCS_CreateShareProfileLink` | server action | `Feed_Embeded` (screen) | click | Feed_Embeded.handle_Share_Others → UBTConnect_Utils.shareEntity_ByURL → server CS_CreateShareProfileLink | no | – | – | **missing** |
| 17 | `UBTConnect/Home/HomeFeed/DataActionGetCommunityStatistics` | data action | `HomeFeed` (screen) | ready | HomeFeed.OnReady → HomeFeed.screenEvent_OnReady → HomeFeed.DataActionGetCommunityStatistics<br>(+1 more chains) | yes | `fetchHomeFeedCommunityStatistics()` [`api/country/repository.ts:49`](../../app/src/api/country/repository.ts#L49) (page) | `HomeFeed → useHomeFeedReady → fetchHomeFeedCommunityStatistics`<br>[`pages/HomeFeed/HomeFeedPage.tsx`](../../app/src/pages/HomeFeed/HomeFeedPage.tsx) | implemented |
| 18 | `UBTConnect_Utils/CW_Share/ShareSheet/ActionCS_CreateShareProfileLink` | server action | `ShareSheet` (screen) | click | ShareSheet.handler_OnClickExternalOption → server CS_CreateShareProfileLink | no | – | – | **missing** |
| 19 | `UBTConnect_Utils/CW_Share/ShareSheet/ActionCS_ShareObject` | server action | `ShareSheet` (screen) | click | ShareSheet.handler_OnClickRecentMember → ShareSheet.action_SubmitShare → server CS_ShareObject<br>(+1 more chains) | no | `csShareObject()` [`api/share/shareSheet.ts:25`](../../app/src/api/share/shareSheet.ts#L25) (page) | `ShareSheetContainer → useShareSheet → csShareObject`<br>[`containers/ShareSheet/ShareSheetContainer.tsx`](../../app/src/containers/ShareSheet/ShareSheetContainer.tsx) | implemented |
| 20 | `UBTConnect_Utils/CW_Share/ShareSheet/DataActionGetAvailableMembers` | data action | `ShareSheet` (screen) | submit | ShareSheet.handler_InputEventSubmit → ShareSheet.DataActionGetAvailableMembers<br>(+1 more chains) | no | `fetchAvailableMembers()` [`api/member/repository.ts:12`](../../app/src/api/member/repository.ts#L12) (page) | `ShareSheetContainer → useShareSheet → useAvailableMembersQuery → fetchAvailableMembers`<br>[`containers/ShareSheet/ShareSheetContainer.tsx`](../../app/src/containers/ShareSheet/ShareSheetContainer.tsx) | implemented |
| 21 | `UBTConnect_Utils/CW_Share/ShareSheet/DataActionGetRecentlyShared` | data action | `ShareSheet` (screen) | parameters change | ShareSheet.OnParametersChanged → ShareSheet.screenEvent_OnParametersChanged → ShareSheet.DataActionGetRecentlyShared<br>(+1 more chains) | no | `fetchRecentlyShared()` [`api/share/shareSheet.ts:14`](../../app/src/api/share/shareSheet.ts#L14) (page) | `ShareSheetContainer → useShareSheet → useRecentlySharedQuery → fetchRecentlyShared`<br>[`containers/ShareSheet/ShareSheetContainer.tsx`](../../app/src/containers/ShareSheet/ShareSheetContainer.tsx) | implemented |

## 6. Missing in React

- Call `UBTConnect_Utils/CW_Share/ShareSheet/ActionCS_CreateShareProfileLink`. Chain on TST: onClick in CircleButton_WithLabel → CircleButton_WithLabel.action_OnClick → event onClick of CircleButton_WithLabel → ShareSheet.handler_OnClickExternalOption → server CS_CreateShareProfileLink.
  - React has the function, but this route does not use it: `csCreateShareProfileLink()` [`api/share/shareSheet.ts:39`](../../app/src/api/share/shareSheet.ts#L39).
  - Note in [`api/share/shareSheet.ts:35`](../../app/src/api/share/shareSheet.ts#L35): "/** CS_CreateShareProfileLink (Handler_OnClickExternalOption, ShareSheet.mvc.js:2250-2301): the share id and URL. */"
  - Note in [`components/feed/EmbeddedFeed/README.md:66`](../../app/src/components/feed/EmbeddedFeed/README.md#L66): "is not wired: ShareEntity_ByURL (UBTConnect_Utils) is not ported (SocialSharing plugin + CS_CreateShareProfileLink),"
  - Note in [`containers/ShareSheet/README.md:56`](../../app/src/containers/ShareSheet/README.md#L56): "- ActionCS_CreateShareProfileLink (`cs_CreateShareProfileLink`)."
- Call `UBTConnect_Utils/ActionCS_CreateShareProfileLink`. Chain on TST: event event_Clicked of ContactPopup → SharePopup.onClick_CallButton → event event_ShareToOthers of SharePopup → Feed_Embeded.handle_Share_Others → UBTConnect_Utils.shareEntity_ByURL → server CS_CreateShareProfileLink.
  - No React code makes this call.
  - Note in [`api/share/shareSheet.ts:35`](../../app/src/api/share/shareSheet.ts#L35): "/** CS_CreateShareProfileLink (Handler_OnClickExternalOption, ShareSheet.mvc.js:2250-2301): the share id and URL. */"
  - Note in [`components/feed/EmbeddedFeed/README.md:65`](../../app/src/components/feed/EmbeddedFeed/README.md#L65): "- Event_ShareToOthers → Handle_Share_Others (:257, :775-807: close, then ShareEntity_ByURL(Type_ShareObject.Feed, Id))"
  - Note in [`containers/EntityDetailsActions/README.md:74`](../../app/src/containers/EntityDetailsActions/README.md#L74): "- **Share to others**: the React app does not port UBTConnect_Utils ShareEntity_ByURL. The dialog only closes."
- Call `Connect2_LegacyShared/ActionGetAllApplicationEvents`. Chain on TST: HandleImageLoadError.applicationEvent_ImageError → Connect2_LegacyShared.zOnApplicationEvent_Wrapper → Connect2_LegacyShared.getAppEventName → Connect2_LegacyShared.cacheLocalApplicationEvents → server GetAllApplicationEvents.
  - No React code makes this call.

## 7. Questions

1. React calls `/api/UBTConnect_Utils/ActionGetSignedImagesInBulk` from `cache_SignedImageURL_GetCallback()` [`lib/ubtConnectUtils/actions.ts:124`](../../app/src/lib/ubtConnectUtils/actions.ts#L124) (page). TST HomeFeed has no chain to this call. Does the call belong to this route?
2. React calls `/api/UBTConnect_Utils/CacheControl_Policies/DataActionGetCacheInfo` from `fetchPolicies()` [`api/app/repository.ts:54`](../../app/src/api/app/repository.ts#L54) (shell + page). TST HomeFeed has no chain to this call. Does the call belong to this route?

## 8. Method

1. **OutSystems (TST).** The tool reads `facts.json` of `migration/screens/HomeFeed/analysis/`:
   - the screen and block files that TST renders;
   - each server call, and the chain of client actions that makes the call;
   - the calls that TST made in the capture (`calls.json`).
2. **App shell and screen.** `app shell` is `CommonUI_InsideLayout`, its blocks and the app-level actions. `screen` is the screen and its other blocks.
3. **MCP (DEV).** The tool reads the UI flow with `getScreenNames`. TST wins when DEV is different.
4. **React.** `react_calls.mjs` reads the app shell from `app/src/main.tsx` and the screen from its `<Route>Page.tsx`. It counts only the code that the app uses.
5. **Match.** `callAction(M, A)` gives `/api/M/A`. The `x-os-paths` of `app/src/api/openapi.yaml` give the TST call. The status is `implemented` when the TST call is the same. Else the status is `missing`.

Limit: a name or a call match does not prove the same behaviour. The parity checks of the migration compare the behaviour.
