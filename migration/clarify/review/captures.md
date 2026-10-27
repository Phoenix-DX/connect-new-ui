# Follow-up captures on TST (clarify-screens)

Run: 2026-10-27T13:38:33.728Z. Script: `migration/clarify/tools/capture_followup.cjs`. Source: `followup.md` §3. Read-only: the skill guard was on (12 confirmed app-start actions allowed). Viewport 390x844, headless Chromium, service workers blocked.

Privacy: the file keeps request names, parameter names, body shapes, timings and element states. It keeps no query value, id, member text, token or response body.

Account: the test account of site_auth (not named). Guard blocks in the whole run: `ServiceAPIAction_UI_UpdateItem_MarkAsRead`.

| Capture | Row | Result |
|---|---|---|
| osg |  | error: locator.click: Timeout 15000ms exceeded. |
| updates | Directory_Updates-073/074 | round 1: the tap did not open a screen; the guard blocked ServiceAPIAction_UI_UpdateItem_MarkAsRead; round 2: the tap did not open a screen; the guard blocked ServiceAPIAction_UI_UpdateItem_MarkAsRead |
| notes | Notes-110 | Years $.screenData.variables.Notes_Filter.Years (OutSystems list of 1), $.screenData.variables.Years (OutSystems list of 3); SortByNewest $.screenData.variables.Notes_Filter.SortByNewest (Yes) |
| orbit | Legacy_OrbitAdminFlow-031 | /UBTConnect/OrbitAdminLanding; IsListVirtualizationDisabled (Connect_LaunchDarkly_PermissionCheck.HasAccess) = true; LD client responses with the flag: none seen; SynchAppContext PermissionList holds the flag key: true; List widget disable-virtualization: [null] |
| home | Home-111 | update tap blocked, View all used; after Back: FetchUpdates ran again, GetServices ran again |

## osg: 

Stopped: locator.click: Timeout 15000ms exceeded.

## updates: Directory_Updates-073/074

Result: round 1: the tap did not open a screen; the guard blocked ServiceAPIAction_UI_UpdateItem_MarkAsRead; round 2: the tap did not open a screen; the guard blocked ServiceAPIAction_UI_UpdateItem_MarkAsRead

- Storage at start (keys matching scroll/anchor): `[{"area":"history.state","topLevelKeys":["key","state"],"scrollKeys":[]}]`
- Round 1: before tap `{"host":"div.active-screen.screen-container","scrollTop":1800,"scrollHeight":12948,"clientHeight":844,"renderedItems":87,"itemsHaveScrollAnchorAttr":true}`; tapped `{"renderedIndex":20,"topInViewport":402,"hasScrollAnchorAttr":false}`
  - Tap: `{"navigated":false,"openedScreen":null,"params":[],"calls":[{"name":"ServiceAPIAction_UI_UpdateItem_MarkAsRead","atMs":41,"ms":10,"failed":"net::ERR_BLOCKED_BY_CLIENT.Inspector"}],"blocked":["ServiceAPIAction_UI_UpdateItem_MarkAsRead"],"ms":12068}`
  - Storage after tap: `[{"area":"history.state","topLevelKeys":["key","state"],"scrollKeys":[]}]`
  - Scroll after the blocked tap: `{"host":"div.active-screen.screen-container","scrollTop":1800,"scrollHeight":12948,"clientHeight":844,"renderedItems":87,"itemsHaveScrollAnchorAttr":true}`
- Round 2: before tap `{"host":"div.active-screen.screen-container","scrollTop":3600,"scrollHeight":12972,"clientHeight":844,"renderedItems":87,"itemsHaveScrollAnchorAttr":true}`; tapped `{"renderedIndex":40,"topInViewport":591,"hasScrollAnchorAttr":false}`
  - Tap: `{"navigated":false,"openedScreen":null,"params":[],"calls":[{"name":"ServiceAPIAction_UI_UpdateItem_MarkAsRead","atMs":25,"ms":27,"failed":"net::ERR_BLOCKED_BY_CLIENT.Inspector"}],"blocked":["ServiceAPIAction_UI_UpdateItem_MarkAsRead"],"ms":12028}`
  - Storage after tap: `[{"area":"history.state","topLevelKeys":["key","state"],"scrollKeys":[]}]`
  - Scroll after the blocked tap: `{"host":"div.active-screen.screen-container","scrollTop":3600,"scrollHeight":12972,"clientHeight":844,"renderedItems":87,"itemsHaveScrollAnchorAttr":true}`
- Fallback (not the item tap: app navigation to HomeFeed, then history.back()): `{"method":"not the item tap: app navigation to HomeFeed, then history.back()","before":{"host":"div.active-screen.screen-container","scrollTop":3600,"scrollHeight":12972,"clientHeight":844,"renderedItems":87,"itemsHaveScrollAnchorAttr":true},"navigation":"OutSystems client runtime: require(\"OutSystems/ClientRuntime/Main\").Internal.Navigation.navigateTo(url)","left":true,"fullPageLoad":false,"callsOnHomeFeed":["DataActionGetServices","DataActionFetchCount","DataActionFetchUpdates","DataActionGetFeedConfig","DataActionGetCommunityStatistics"],"after":[{"msAfterBack":1001,"host":"div.active-screen.screen-container.-enter-done","scrollTop":0,"scrollHeight":1745,"clientHeight":844,"renderedItems":3,"itemsHaveScrollAnchorAttr":false},{"msAfterBack":2502,"host":"div.active-screen.screen-container.-enter-done","scrollTop":0,"scrollHeight":1745,"clientHeight":844,"renderedItems":3,"itemsHaveScrollAnchorAttr":false},{"msAfterBack":5001,"host":"div.active-screen.screen-container.-enter-done","scrollTop":0,"scrollHeight":1745,"clientHeight":844,"renderedItems":3,"itemsHaveScrollAnchorAttr":false},{"msAfterBack":8001,"host":"div.active-screen.screen-container.-enter-done","scrollTop":0,"scrollHeight":1745,"clientHeight":844,"renderedItems":3,"itemsHaveScrollAnchorAttr":false}],"callsAfterBack":[],"storage":[{"area":"history.state","topLevelKeys":["key","state"],"scrollKeys":[]}]}`

## notes: Notes-110

Result: Years $.screenData.variables.Notes_Filter.Years (OutSystems list of 1), $.screenData.variables.Years (OutSystems list of 3); SortByNewest $.screenData.variables.Notes_Filter.SortByNewest (Yes)

- On open: `{"getNotesCalls":1,"keys":[{"path":"$.screenData.variables.Notes_Filter.SortByNewest","type":"string","value":""},{"path":"$.screenData.variables.Notes_Filter.Years","type":"OutSystems list of 0"},{"path":"$.screenData.variables.Years","type":"OutSystems list of 3","itemType":"string"}],"calls":["ActionAppManager_SynchAppContext","ActionGet_NotePills_ByNoteCategoryIds","DataActionGetNotes","ActionAppManager_AfterInitialize","ActionSync_Info_GetMain","ActionGetUserInformation","ActionGetNumberUnreadMessages","ServiceAPIFetchData_CacheableMapEntities","ServiceAPIFetchData_CacheableHouseholds"]}`
- Filter sheet root visible: false; visible year options: 3; blocks in the sheet: `["ConnectPatterns.BottomSheet","Interaction.BottomSheet","BasePatterns.Columns_Three","Adaptive.Columns3","ConnectPatterns.Icon","BasePatterns.CustomText","ConnectPatterns.IconInline_Internal","ConnectPatterns.SkeletonSection","App_CommonBlocks_Filter.FilterSheet_OptionChoice_Item","BasePatterns.CustomContainer","ConnectPatterns.SelectionOption_List","BasePatterns.Columns_Two","Adaptive.Columns2","ConnectPatterns.Button","NavigationHandler.BackNavigationHandler"]`
- Apply enabled after a year: true
- After Apply: 1 DataActionGetNotes call(s); calls `[{"name":"DataActionGetNotes","atMs":46,"ms":402}]`
- Body top level: `["versionInfo","viewName","screenData"]`; year and sort keys: `[{"path":"$.screenData.variables.Notes_Filter.SortByNewest","type":"string","value":"Yes"},{"path":"$.screenData.variables.Notes_Filter.Years","type":"OutSystems list of 1","itemType":"string"},{"path":"$.screenData.variables.Years","type":"OutSystems list of 3","itemType":"string"}]`
- Variables shape: `{"HeaderIsScrolled":"boolean","Note_Pills":{"List":{"list":10,"item":{"Text":"text","Identifier":"text","IconId":"text","IsSelected":"boolean","Enabled":"boolean"}}},"Notes_Filter":{"NoteCategoryId":"text","SortByNewest":"text","Years":{"List":{"list":1,"item":"text"}},"SearchTerm":"text"},"HasFiltersApplied":"boolean true","Filter_BottomSheetId":"text","BottomSheetId_Filter_IsLoaded":"boolean","BottomSheetId_Filter_ShowSubscriptionOnClick":"boolean","Years":{"List":{"list":3,"item":"text"}},"PageSize":"number","PageNumber":"number","MaxRecords":"text","Notes_List":{"List":{"list":0},"EmptyListItem":{"Id":"text","ItemId":"text","ItemId2":"text","HasDetailAccess":"boolean false","NoteCategoryId":"text","NoteCardContent":{"SourceHeader":{"ImageURL":"text","IconId":"text","Initials":"text","Label":"text"},"Title":"text","Subtitle":"text","Notes":{"Total":"number","Note_Item_List":{"List":{"list":0},"EmptyListItem":"object"}},"PublishedAt":"text","ChannelLogo":"text","ChannelName":"text"}}},"ResetPillsValue":"boolean","PillsLoaded":"boolean","Notes_Loading":"boolean"}`

## orbit: Legacy_OrbitAdminFlow-031

Result: /UBTConnect/OrbitAdminLanding; IsListVirtualizationDisabled (Connect_LaunchDarkly_PermissionCheck.HasAccess) = true; LD client responses with the flag: none seen; SynchAppContext PermissionList holds the flag key: true; List widget disable-virtualization: [null]

- Access: direct route /UBTConnect/OrbitAdminLanding: J26 records that no test account is an Orbit admin (no Orbit Admin item in Services). Path reached: /UBTConnect/OrbitAdminLanding.
- Client evaluation (UBTConnect_Utils.IsListVirtualizationDisabled → Connect_LaunchDarkly_PermissionCheck(launchDarkly_FF.mobileDirectoryListVirtualization)): `{"IsListVirtualizationDisabled":true,"staticRecord":"Mobile-Directory-list-virtualization","staticRecordIsFlagKey":true}`; calls during it: `[]`
- LaunchDarkly client requests on this screen: `[]`; since app start: `[]`
- LaunchDarkly localStorage cache: `[]`
- Screenservice responses mentioning virtualization: `[{"name":"ActionAppManager_SynchAppContext","hits":[{"path":"$.data.PermissionList.List.List.[i]","type":"text","equalsFlagKey":true}]}]`
- Calls on open: `[{"name":"ActionAppManager_SynchAppContext","atMs":3345,"ms":265},{"name":"DataActionGet_AdminEventsList","atMs":4204,"ms":1052},{"name":"ActionAppManager_AfterInitialize","atMs":7142,"ms":257},{"name":"ActionSync_Info_GetMain","atMs":7399,"ms":497},{"name":"ActionGetUserInformation","atMs":7921,"ms":350},{"name":"ActionGetNumberUnreadMessages","atMs":8281,"ms":269},{"name":"ServiceAPIFetchData_CacheableMapEntities","atMs":8549,"ms":1402},{"name":"ServiceAPIFetchData_CacheableHouseholds","atMs":8550,"ms":1929}]`
- DOM: `{"listsOnScreen":1,"withDisableVirtualizationAttr":0,"disableVirtualizationValues":[],"withDisableVirtualizationClass":0,"lists":[{"classes":"list list-group OSFillParent","disableVirtualization":null,"children":5}],"adminLandingBlock":true,"listWidgetProps":[{"found":false,"reactKey":true}]}`

## home: Home-111

Result: update tap blocked, View all used; after Back: FetchUpdates ran again, GetServices ran again

- Calls on open: `["ActionAppManager_SynchAppContext","DataActionGetServices","DataActionFetchCount","DataActionFetchUpdates","DataActionGetFeedConfig","DataActionGetCommunityStatistics","ActionAppManager_AfterInitialize","ActionSync_Info_GetMain","ActionGetUserInformation","ActionGetNumberUnreadMessages","ServiceAPIFetchData_CacheableMapEntities","ServiceAPIFetchData_CacheableHouseholds"]`
- Update tap: `{"via":"an update item on HomeFeed","navigated":false,"openCalls":[{"name":"ServiceAPIAction_UI_UpdateItem_MarkAsRead","atMs":24,"ms":18,"failed":"net::ERR_BLOCKED_BY_CLIENT.Inspector"}],"blocked":["ServiceAPIAction_UI_UpdateItem_MarkAsRead"]}`
- Fallback: `{"via":"Updates 'View all' (J5 step 1), not an update item","navigated":true,"openCalls":[],"blocked":[],"openedScreen":"/UBTConnect/Updates_SingleList","backCalls":[{"name":"DataActionGetServices","atMs":85,"ms":718},{"name":"DataActionFetchCount","atMs":85,"ms":336},{"name":"DataActionFetchUpdates","atMs":86,"ms":261},{"name":"DataActionGetFeedConfig","atMs":86,"ms":282},{"name":"DataActionGetCommunityStatistics","atMs":86,"ms":262}],"fetchUpdatesAgain":true,"getServicesAgain":true}`
