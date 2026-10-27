# Follow-up captures on TST (clarify-screens)

Run: 2026-10-27T13:51:09.692Z. Script: `migration/clarify/tools/capture_followup.cjs`. Source: `followup.md` §3. Read-only: the skill guard was on (12 confirmed app-start actions allowed). Viewport 390x844, headless Chromium, service workers blocked.

Privacy: the file keeps request names, parameter names, body shapes, timings and element states. It keeps no query value, id, member text, token or response body.

Account: the test account of site_auth (not named). Guard blocks in the whole run: `ServiceAPIAction_UI_UpdateItem_MarkAsRead`.

| Capture | Row | Result |
|---|---|---|
| osg | Directory_OneSchoolGlobal-056 | DataActionGetOneSchoolGlobalDetails ran again; a new screen element was mounted (re-initialised); text changed; URL id changed |
| updates | Directory_Updates-073/074 | round 1: the tap did not open a screen; the guard blocked ServiceAPIAction_UI_UpdateItem_MarkAsRead; round 2: the tap did not open a screen; the guard blocked ServiceAPIAction_UI_UpdateItem_MarkAsRead |
| notes | Notes-110 | Years $.screenData.variables.Notes_Filter.Years (OutSystems list of 1), $.screenData.variables.Years (OutSystems list of 3); SortByNewest $.screenData.variables.Notes_Filter.SortByNewest (Yes) |
| orbit | Legacy_OrbitAdminFlow-031 | /UBTConnect/OrbitAdminLanding; IsListVirtualizationDisabled (Connect_LaunchDarkly_PermissionCheck.HasAccess) = true; LD client responses with the flag: none seen; SynchAppContext PermissionList holds the flag key: true; List widget disable-virtualization: ["not set"] |
| home | Home-111 | update tap blocked, View all used; after Back: FetchUpdates ran again, GetServices ran again |

## Findings

- **Directory_OneSchoolGlobal-056**: With OneSchoolGlobalDetails open (opened from a card of the locality list), the app navigated to the same screen with another id, through OutSystems client runtime: require("OutSystems/ClientRuntime/Main").Internal.Navigation.navigateTo(url), because no link to another OneSchool Global page exists on the screen. The URL id changed with no page load. During the transition 2 `.screen-container` elements existed; after it the old screen element was removed and the current one is a new element (the screen re-initialised). `DataActionGetOneSchoolGlobalDetails` ran again: DataActionGetOneSchoolGlobalDetails at +55 ms (380 ms); its request body carries the new id: true; the old id: false. Other calls: DataActionFetchContactDetails, DataActionFetchNotes. The document title did not change; the screen text changed.
- **Directory_Updates-073/074**: round 1: offset 1800 px of 12948 px (host `div.active-screen.screen-container`), tap → blocked ServiceAPIAction_UI_UpdateItem_MarkAsRead at +46 ms, no screen opened; round 2: offset 3600 px of 12972 px (host `div.active-screen.screen-container`), tap → blocked ServiceAPIAction_UI_UpdateItem_MarkAsRead at +23 ms, no screen opened. The tap on an update calls `ServiceAPIAction_UI_UpdateItem_MarkAsRead` first; the guard aborts it and the app opens no screen (same stop as journey J5), so tap → detail → Back could not run read-only. Storage keys with scroll/anchor before and after the tap: localStorage/sessionStorage [], history.state []: `scrollAnchorId` and `scrollAnchorDelta` are absent. Fallback, not the item tap (app navigation to HomeFeed, then Back): offset 3600 px before, after Back 0 px at 1001 ms (3 items, height 1745), 0 px at 2501 ms (3 items, height 1745), 0 px at 5002 ms (3 items, height 1745), 0 px at 8001 ms (3 items, height 1745); calls after Back on Updates_SingleList: none.
- **Notes-110**: Visible year options in the sheet: 3. On open, DataActionGetNotes sends Years `screenData.variables.Notes_Filter.Years` OutSystems list of 0, `screenData.variables.Years` OutSystems list of 3 and SortByNewest `screenData.variables.Notes_Filter.SortByNewest` string "". After one year and Apply filters: DataActionGetNotes at +48 ms (400 ms); the body sends Years `screenData.variables.Notes_Filter.Years` OutSystems list of 1, `screenData.variables.Years` OutSystems list of 3 and SortByNewest `screenData.variables.Notes_Filter.SortByNewest` string "Yes". So the selected year goes in `Notes_Filter.Years` of the screen variables (the year options are the separate `Years` variable).
- **Legacy_OrbitAdminFlow-031**: OrbitAdminLanding opened by its direct route; journey J26 records that no test account is an Orbit admin. The flag value comes from the app's own permission list, not from a LaunchDarkly client: `ActionAppManager_SynchAppContext` (app start) returns `PermissionList` with an item equal to the key `Mobile-Directory-list-virtualization` (true); no request to a LaunchDarkly host (0) and no LaunchDarkly localStorage cache (0). `UBTConnect_Utils.IsListVirtualizationDisabled` (Connect_LaunchDarkly_PermissionCheck(launchDarkly_FF.mobileDirectoryListVirtualization = "Mobile-Directory-list-virtualization").HasAccess) returns true with no service call (0). TST value of the flag for the test account: true. DOM: 1 List widget(s) on the screen; disable-virtualization not set, virtualized true; elements with a disable-virtualization attribute: 0, class: 0.
- **Home-111**: The tap on an update on HomeFeed calls `ServiceAPIAction_UI_UpdateItem_MarkAsRead` first; the guard blocked it and no screen opened, so the check used Updates 'View all' instead (another screen, then Back). After Back to HomeFeed: DataActionGetServices at +118 ms (363 ms), DataActionFetchCount at +118 ms (299 ms), DataActionFetchUpdates at +119 ms (296 ms), DataActionGetFeedConfig at +119 ms (260 ms), DataActionGetCommunityStatistics at +119 ms (258 ms). FetchUpdates ran again: true; GetServices ran again: true.

The sections below hold the recorded facts of each capture.

## osg: Directory_OneSchoolGlobal-056

Ran at 2026-10-27T13:52:48.612Z (50 s).

Result: DataActionGetOneSchoolGlobalDetails ran again; a new screen element was mounted (re-initialised); text changed; URL id changed

- Entry: Locality_Details (params `["LocalityId","PreloadedLocalityLabel"]`, path of journeys J11/J13: HomeFeed, bottom bar Directory, MY COUNTRY, first locality); OneSchool Global cards in the list: 3.
- First open (card tap): params `["In_OneSchoolGlobalId"]`; OneSchool calls `[{"name":"DataActionGetOneSchoolGlobalDetails","atMs":80,"ms":334}]`.
- Second id: second card of the same locality list. Navigation: OutSystems client runtime: require("OutSystems/ClientRuntime/Main").Internal.Navigation.navigateTo(url) (no link to another OneSchool Global page exists on the screen).
- URL id changed: true; full page load: false; path /UBTConnect/OneSchoolGlobalDetails.
- `DataActionGetOneSchoolGlobalDetails` ran again: true (1x) `[{"name":"DataActionGetOneSchoolGlobalDetails","atMs":55,"ms":380}]`; body carries the new id: true, the old id: false.
- Request body shape: `{"versionInfo":{"moduleVersion":"text","apiVersion":"text"},"viewName":"text","screenData":{"variables":{"LookupSections":{"Actions":{"Singular":"text","Plural":"text","Icon":"text","Icon_Color":"text"},"Households":{"Singular":"text","Plural":"text","Icon":"text","Icon_Color":"text"},"OneSchoolStatistitics":{"Singular":"text","Plural":"text","Icon":"text","Icon_Color":"text"}},"Selected_OneschoolGlobal_SubsectionId":"text","Type_OneschoolGlobal_SubsectionId":{"UpcomingEvents":"text","AboutOurCampus":"text"},"LocalIsBookmarked":"boolean","In_OneSchoolGlobalId":"text","_in_OneSchoolGlobalIdInDataFetchStatus":"number","IsRestoredFromCache":"boolean","_isRestoredFromCacheInDataFetchStatus":"number"}}}`
- All calls after the navigation: `[{"name":"DataActionFetchContactDetails","atMs":55,"ms":361},{"name":"DataActionGetOneSchoolGlobalDetails","atMs":55,"ms":380},{"name":"DataActionFetchContactDetails","atMs":56,"ms":364},{"name":"DataActionFetchNotes","atMs":58,"ms":404},{"name":"DataActionFetchContactDetails","atMs":435,"ms":341}]`
- DOM: `{"titleMentionsOneSchool":true,"titleChanged":false,"screenContainersBefore":1,"screenContainersAfter":1,"maxScreenContainersDuringTransition":2,"oldScreenElementKept":false,"currentScreenIsOldElement":false,"screenTextChanged":true}`

## updates: Directory_Updates-073/074

Ran at 2026-10-27T13:53:38.714Z (55 s).

Result: round 1: the tap did not open a screen; the guard blocked ServiceAPIAction_UI_UpdateItem_MarkAsRead; round 2: the tap did not open a screen; the guard blocked ServiceAPIAction_UI_UpdateItem_MarkAsRead

- Storage at start (keys matching scroll/anchor): `[{"area":"history.state","topLevelKeys":["key","state"],"scrollKeys":[]}]`
- Round 1: before tap `{"host":"div.active-screen.screen-container","scrollTop":1800,"scrollHeight":12948,"clientHeight":844,"renderedItems":87,"itemsHaveScrollAnchorAttr":true}`; tapped `{"renderedIndex":20,"topInViewport":402,"hasScrollAnchorAttr":false}`
  - Tap: `{"navigated":false,"openedScreen":null,"params":[],"calls":[{"name":"ServiceAPIAction_UI_UpdateItem_MarkAsRead","atMs":46,"ms":11,"failed":"net::ERR_BLOCKED_BY_CLIENT.Inspector"}],"blocked":["ServiceAPIAction_UI_UpdateItem_MarkAsRead"],"ms":12074}`
  - Storage after tap: `[{"area":"history.state","topLevelKeys":["key","state"],"scrollKeys":[]}]`
  - Scroll after the blocked tap: `{"host":"div.active-screen.screen-container","scrollTop":1800,"scrollHeight":12948,"clientHeight":844,"renderedItems":87,"itemsHaveScrollAnchorAttr":true}`
- Round 2: before tap `{"host":"div.active-screen.screen-container","scrollTop":3600,"scrollHeight":12972,"clientHeight":844,"renderedItems":87,"itemsHaveScrollAnchorAttr":true}`; tapped `{"renderedIndex":40,"topInViewport":591,"hasScrollAnchorAttr":false}`
  - Tap: `{"navigated":false,"openedScreen":null,"params":[],"calls":[{"name":"ServiceAPIAction_UI_UpdateItem_MarkAsRead","atMs":23,"ms":28,"failed":"net::ERR_BLOCKED_BY_CLIENT.Inspector"}],"blocked":["ServiceAPIAction_UI_UpdateItem_MarkAsRead"],"ms":12026}`
  - Storage after tap: `[{"area":"history.state","topLevelKeys":["key","state"],"scrollKeys":[]}]`
  - Scroll after the blocked tap: `{"host":"div.active-screen.screen-container","scrollTop":3600,"scrollHeight":12972,"clientHeight":844,"renderedItems":87,"itemsHaveScrollAnchorAttr":true}`
- Fallback (not the item tap: app navigation to HomeFeed, then history.back()): `{"method":"not the item tap: app navigation to HomeFeed, then history.back()","before":{"host":"div.active-screen.screen-container","scrollTop":3600,"scrollHeight":12972,"clientHeight":844,"renderedItems":87,"itemsHaveScrollAnchorAttr":true},"navigation":"OutSystems client runtime: require(\"OutSystems/ClientRuntime/Main\").Internal.Navigation.navigateTo(url)","left":true,"fullPageLoad":false,"callsOnHomeFeed":["DataActionGetServices","DataActionFetchCount","DataActionFetchUpdates","DataActionGetFeedConfig","DataActionGetCommunityStatistics"],"after":[{"msAfterBack":1001,"host":"div.active-screen.screen-container.-enter-done","scrollTop":0,"scrollHeight":1745,"clientHeight":844,"renderedItems":3,"itemsHaveScrollAnchorAttr":false},{"msAfterBack":2501,"host":"div.active-screen.screen-container.-enter-done","scrollTop":0,"scrollHeight":1745,"clientHeight":844,"renderedItems":3,"itemsHaveScrollAnchorAttr":false},{"msAfterBack":5002,"host":"div.active-screen.screen-container.-enter-done","scrollTop":0,"scrollHeight":1745,"clientHeight":844,"renderedItems":3,"itemsHaveScrollAnchorAttr":false},{"msAfterBack":8001,"host":"div.active-screen.screen-container.-enter-done","scrollTop":0,"scrollHeight":1745,"clientHeight":844,"renderedItems":3,"itemsHaveScrollAnchorAttr":false}],"callsAfterBack":[],"storage":[{"area":"history.state","topLevelKeys":["key","state"],"scrollKeys":[]}]}`

## notes: Notes-110

Ran at 2026-10-27T13:54:33.738Z (19 s).

Result: Years $.screenData.variables.Notes_Filter.Years (OutSystems list of 1), $.screenData.variables.Years (OutSystems list of 3); SortByNewest $.screenData.variables.Notes_Filter.SortByNewest (Yes)

- On open: `{"getNotesCalls":1,"keys":[{"path":"$.screenData.variables.Notes_Filter.SortByNewest","type":"string","value":""},{"path":"$.screenData.variables.Notes_Filter.Years","type":"OutSystems list of 0"},{"path":"$.screenData.variables.Years","type":"OutSystems list of 3","itemType":"string"}],"calls":["ActionAppManager_SynchAppContext","ActionGet_NotePills_ByNoteCategoryIds","DataActionGetNotes","ActionAppManager_AfterInitialize","ActionSync_Info_GetMain","ActionGetUserInformation","ActionGetNumberUnreadMessages","ServiceAPIFetchData_CacheableMapEntities","ServiceAPIFetchData_CacheableHouseholds"]}`
- Filter sheet root visible: false; visible year options: 3; blocks in the sheet: `["ConnectPatterns.BottomSheet","Interaction.BottomSheet","BasePatterns.Columns_Three","Adaptive.Columns3","ConnectPatterns.Icon","BasePatterns.CustomText","ConnectPatterns.IconInline_Internal","ConnectPatterns.SkeletonSection","App_CommonBlocks_Filter.FilterSheet_OptionChoice_Item","BasePatterns.CustomContainer","ConnectPatterns.SelectionOption_List","BasePatterns.Columns_Two","Adaptive.Columns2","ConnectPatterns.Button","NavigationHandler.BackNavigationHandler"]`
- Apply enabled after a year: true
- After Apply: 1 DataActionGetNotes call(s); calls `[{"name":"DataActionGetNotes","atMs":48,"ms":400}]`
- Body top level: `["versionInfo","viewName","screenData"]`; year and sort keys: `[{"path":"$.screenData.variables.Notes_Filter.SortByNewest","type":"string","value":"Yes"},{"path":"$.screenData.variables.Notes_Filter.Years","type":"OutSystems list of 1","itemType":"string"},{"path":"$.screenData.variables.Years","type":"OutSystems list of 3","itemType":"string"}]`
- Variables shape: `{"HeaderIsScrolled":"boolean","Note_Pills":{"List":{"list":10,"item":{"Text":"text","Identifier":"text","IconId":"text","IsSelected":"boolean","Enabled":"boolean"}}},"Notes_Filter":{"NoteCategoryId":"text","SortByNewest":"text","Years":{"List":{"list":1,"item":"text"}},"SearchTerm":"text"},"HasFiltersApplied":"boolean true","Filter_BottomSheetId":"text","BottomSheetId_Filter_IsLoaded":"boolean","BottomSheetId_Filter_ShowSubscriptionOnClick":"boolean","Years":{"List":{"list":3,"item":"text"}},"PageSize":"number","PageNumber":"number","MaxRecords":"text","Notes_List":{"List":{"list":0},"EmptyListItem":{"Id":"text","ItemId":"text","ItemId2":"text","HasDetailAccess":"boolean false","NoteCategoryId":"text","NoteCardContent":{"SourceHeader":{"ImageURL":"text","IconId":"text","Initials":"text","Label":"text"},"Title":"text","Subtitle":"text","Notes":{"Total":"number","Note_Item_List":{"List":{"list":0},"EmptyListItem":"object"}},"PublishedAt":"text","ChannelLogo":"text","ChannelName":"text"}}},"ResetPillsValue":"boolean","PillsLoaded":"boolean","Notes_Loading":"boolean"}`

## orbit: Legacy_OrbitAdminFlow-031

Ran at 2026-10-27T13:54:52.989Z (15 s).

Result: /UBTConnect/OrbitAdminLanding; IsListVirtualizationDisabled (Connect_LaunchDarkly_PermissionCheck.HasAccess) = true; LD client responses with the flag: none seen; SynchAppContext PermissionList holds the flag key: true; List widget disable-virtualization: ["not set"]

- Access: direct route /UBTConnect/OrbitAdminLanding: J26 records that no test account is an Orbit admin (no Orbit Admin item in Services). Path reached: /UBTConnect/OrbitAdminLanding.
- Client evaluation (UBTConnect_Utils.IsListVirtualizationDisabled → Connect_LaunchDarkly_PermissionCheck(launchDarkly_FF.mobileDirectoryListVirtualization)): `{"IsListVirtualizationDisabled":true,"staticRecord":"Mobile-Directory-list-virtualization","staticRecordIsFlagKey":true}`; calls during it: `[]`
- LaunchDarkly client requests on this screen: `[]`; since app start: `[]`
- LaunchDarkly localStorage cache: `[]`
- Screenservice responses mentioning virtualization: `[{"name":"ActionAppManager_SynchAppContext","hits":[{"path":"$.data.PermissionList.List.List.[i]","type":"text","equalsFlagKey":true}]}]`
- Calls on open: `[{"name":"ActionAppManager_SynchAppContext","atMs":2838,"ms":458},{"name":"DataActionGet_AdminEventsList","atMs":3894,"ms":1061},{"name":"ActionAppManager_AfterInitialize","atMs":5485,"ms":255},{"name":"ActionSync_Info_GetMain","atMs":5740,"ms":494},{"name":"ActionGetUserInformation","atMs":6259,"ms":335},{"name":"ActionGetNumberUnreadMessages","atMs":6607,"ms":309},{"name":"ServiceAPIFetchData_CacheableMapEntities","atMs":6915,"ms":1155},{"name":"ServiceAPIFetchData_CacheableHouseholds","atMs":6915,"ms":1963}]`
- DOM: `{"listsOnScreen":1,"withDisableVirtualizationAttr":0,"disableVirtualizationValues":[],"withDisableVirtualizationClass":0,"lists":[{"classes":"list list-group OSFillParent","disableVirtualization":null,"children":5}],"adminLandingBlock":true,"listWidgetProps":[{"extendedPropertyNames":[],"disableVirtualization":"not set","virtualized":true,"levelsUp":2}]}`

## home: Home-111

Ran at 2026-10-27T13:55:08.411Z (51 s).

Result: update tap blocked, View all used; after Back: FetchUpdates ran again, GetServices ran again

- Calls on open: `["ActionAppManager_SynchAppContext","DataActionGetServices","DataActionFetchCount","DataActionFetchUpdates","DataActionGetFeedConfig","DataActionGetCommunityStatistics","ActionAppManager_AfterInitialize","ActionSync_Info_GetMain","ActionGetUserInformation","ActionGetNumberUnreadMessages","ServiceAPIFetchData_CacheableMapEntities","ServiceAPIFetchData_CacheableHouseholds"]`
- Update tap: `{"via":"an update item on HomeFeed","navigated":false,"openCalls":[{"name":"ServiceAPIAction_UI_UpdateItem_MarkAsRead","atMs":13,"ms":18,"failed":"net::ERR_BLOCKED_BY_CLIENT.Inspector"}],"blocked":["ServiceAPIAction_UI_UpdateItem_MarkAsRead"]}`
- Fallback: `{"via":"Updates 'View all' (J5 step 1), not an update item","navigated":true,"openCalls":[],"blocked":[],"openedScreen":"/UBTConnect/Updates_SingleList","backCalls":[{"name":"DataActionGetServices","atMs":118,"ms":363},{"name":"DataActionFetchCount","atMs":118,"ms":299},{"name":"DataActionFetchUpdates","atMs":119,"ms":296},{"name":"DataActionGetFeedConfig","atMs":119,"ms":260},{"name":"DataActionGetCommunityStatistics","atMs":119,"ms":258}],"fetchUpdatesAgain":true,"getServicesAgain":true}`
