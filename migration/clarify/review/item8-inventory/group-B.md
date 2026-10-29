# W23 inventory, group B (read-only)

React paths are under `app/src/`. TST dumps are in `.../scratchpad/w23B/<Name>.js` (line numbers of the dump).
Common React facts: `useFlowState` sends every rejection of `onReady` / `onParametersChanged` to `raiseToFlowHandler`
without an `isAlive` check (`platform/navigation/flowState.ts:112,121,133`). `useOsNavigate` has no liveness check
(`platform/navigation/osNavigate.ts:102-109`). In TST, every data action named below is `controller.callDataAction`
(R1) and its OnAfterFetch is inside that promise chain, so nothing runs after leaving. `hasAccessToRegion`,
`App_Subscription_ShowUpgradePopUp`, `getUserInformation_Wrapper` are module actions (`UBTConnectController` /
`UBTConnect_UtilsController`): they run after leaving.
"Failure raise" = a failed data action after leaving: React sends it to the flow handler, TST drops it (R1).

### containers/HouseholdDetails/hooks/useHouseholdDetails.ts
Origin: `UBTConnect.Directory_Household.HouseholdDetails_Block`.

| Flow | Awaited call (TST kind, evidence) | Side effect after await | React (guarded?) | TST after leaving | Verdict |
|---|---|---|---|---|---|
| OnReady | `getUserInformation_Wrapper` module action, then Refreshes JS calls `Refresh_GetHouseholdDetail` / `_Coordinates` (screen actions with `ensureControllerAlive`, R3). HouseholdDetails_Block.js:2677-2680, 2733; 2326+, 2512+ | Two refreshes (server reads) | useHouseholdDetails.ts:134-146, guarded `isAlive` L135 | Stops (R3) | same |
| refreshHousehold (GetHousehold) | R1 `callDataAction` HouseholdDetails_Block.js:1954 | Event `onHouseholdDataFetched` | :115, guarded L111 | OnAfterFetch not run (R1) | same |
| refreshHousehold, refreshCoordinates failure | R1 :1954, :1930 | Failure raise to flow handler | :108-109, :128-129, :123, :129 not guarded (state write guarded only) | Nothing (R1) | react-extra |
| OnParametersChanged, after the preview refresh | R1 :1954 (flow chain stops, :2766-2800) | `skeletonOnlyEnded` write + `refreshes()` = two server data action calls | :159-163, no `isAlive` check after the await | Not reached (R1); the refreshes would also stop at R3 | react-extra |
| onNonMemberClick (Members block) | `hasAccessToRegion` module action, Members.js:891 | `navigate` HouseholdDetails | :224, :218 not guarded | Event handler of the left block: `ensureControllerAlive` (R3) stops it; HouseholdDetails_Block.js:1745-1750, 2284-2297 | react-extra |
| onNonMemberClick | same | `showUpgradePopUp` | :225 | Module action runs, Members.js:900-902 | same |

### containers/SupperMeetingDetails/hooks/useSupperMeetingDetails.ts
Origin: `UBTConnect.Directory_SupperMeetings.SupperMeeting_DetailsBlock` (+ `SupperMeeting_HouseholdList`).

| Flow | Awaited call | Side effect after await | React | TST after leaving | Verdict |
|---|---|---|---|---|---|
| OnReady, GetSubdivisionHouseholds | R1 SupperMeeting_HouseholdList.js:238 | Failure raise (`raiseLive`) | :102, guarded by `newestReadyRun` (L91-93) | Nothing | same |
| OnReady, GetSubdivision | R1 SupperMeeting_DetailsBlock.js:471 | Failure raise (`raiseLive`) | :114, guarded | Nothing | same |

Other side effects: none after an await (item 2, E9 already guards the raise; the writes are guarded). Navigation
handler is synchronous (L129-139).

### pages/BrowseCountries/hooks/useBrowseCountries.ts
Origin: `UBTConnect.Directory_Locality.BrowseCountries`.

| Flow | Awaited call | Side effect after await | React | TST after leaving | Verdict |
|---|---|---|---|---|---|
| OnReady / refreshData | R1 BrowseCountries.js:309 | Failure raise via useFlowState | :63, flowState.ts:112/121, not guarded | Nothing | react-extra |
| statisticsListClicked | module `hasAccessToRegion`, BrowseCountries.js:409 | `navigate` BrowseDirectory | :78, not guarded | Blocked (R4), :416 | react-extra |
| statisticsListClicked | same | `showUpgradePopUp` | :81 | Module action runs, :423 | same |

### pages/BrowseDirectory/hooks/useBrowseDirectory.ts
Origin: `UBTConnect.Directory_Locality.BrowseDirectory`.

| Flow | Awaited call | Side effect after await | React | TST after leaving | Verdict |
|---|---|---|---|---|---|
| OnReady / refreshData | R1 BrowseDirectory.js:745 | Failure raise via useFlowState | :83, not guarded | Nothing | react-extra |
| statisticsListClicked | module `hasAccessToRegion` :1138, `getLocalityLabel` module :1153 | `navigate` Locality_Details | :110, not guarded | Blocked (R4), :1159 | react-extra |
| statisticsListClicked | same | `showUpgradePopUp` | :107 | Runs, :1167 | same |
| onMapInitialized timer (not after await) | `setTimeout(0)` to Action_InvalidateMapSize | `map_InvalidateSize` / `map_FitBoundsAuto`, raise on error | :129-135, not guarded | Screen action `ensureControllerAlive` (R3) stops, :961 | react-extra (only if the unmount comes within the same tick) |

### pages/CountryList/hooks/useCountryList.ts
Origin: `UBTConnect.Directory_Locality.CountryList`.

| Flow | Awaited call | Side effect after await | React | TST after leaving | Verdict |
|---|---|---|---|---|---|
| OnReady / refreshData | R1 CountryList.js:1223 (Action_RefreshData_CountryStatistics catch block :1450-1490 is inside the dropped chain) | Failure raise (UserException Bubble* / NotRegistered / system) via useFlowState | :95-118, not guarded (the `ListClear` writes are guarded) | Nothing | react-extra |
| statisticsClicked | module `hasAccessToRegion`, CountryList.js:1367 | `navigate` CountryDetails | :132, not guarded | Blocked (R4), :1374 | react-extra |
| statisticsClicked | same | `showUpgradePopUp` | :133 | Runs, :1381 | same |

### pages/HouseholdCarousel/hooks/useHouseholdCarousel.ts
Origin: `UBTConnect.Directory_Household.HouseholdCarousel`.

| Flow | Awaited call | Side effect after await | React | TST after leaving | Verdict |
|---|---|---|---|---|---|
| Handler_EventMoved | module action `directory_Updates_CarouselSwipeAction` (mark as read + unread count), HouseholdCarousel.js:533 | The action itself (server write + counter) runs inside the awaited call; then variable writes | :77-80 awaited, writes guarded L81 | Module action runs to the end; the later variable writes are on the left screen (state, no effect) | same |

### pages/Household_Relations/hooks/useHouseholdRelations.ts
Origin: `UBTConnect.Directory_Household.HouseholdRelations_Block`.

| Flow | Awaited call | Side effect after await | React | TST after leaving | Verdict |
|---|---|---|---|---|---|
| OnReady | `getUserInformation_Wrapper` module action, then `_action_Refresh_Get_MemberDetails` (`ensureControllerAlive`, R3) HouseholdRelations_Block.js:2136-2160, 2094 | Refresh of Get_MemberDetails | :163 guarded | Stops (R3) | same |
| refresh member details | R1 :1673 | Event `onRelationsDetailsFetched`, siblings refresh, loading write | :151-155, guarded | OnAfterFetch (event, Get_ParentHouseholdDetails, DefineLoading) not run, :1695-1740 | same |
| refresh member / siblings failure | R1 :1673, :1625 | Failure raise via useFlowState | :128-132, not guarded (only the status write is guarded) | Nothing | react-extra |
| onClickMember | module `hasAccessToRegion`, :2012 | `navigate` HouseholdDetails | :179, not guarded | Blocked (R4), :2020 | react-extra |
| onClickMember | same | `showUpgradePopUp` | :181 | Runs, :2024-2026 | same |

### pages/Locality_Details/hooks/useLocalityDetails.ts (helper readyOnce.ts: dedup of OnReady and `isAlive` holder only, no side effect)
Origin: `UBTConnect.Directory_Locality.Locality_Details`.

| Flow | Awaited call | Side effect after await | React | TST after leaving | Verdict |
|---|---|---|---|---|---|
| OnReady, after `getUserInformation` | module action, Locality_Details.js:1409; then Action_SetLocalityLabel only when LocalityId = 0 (L1426-1431, R3 stops there) | Start of `Get_LocalityDetails` (server read) | :99-112, not guarded (decision W23: "still calls") | LocalityId <> 0: the data action request still starts, answer dropped (same). LocalityId = 0: stops at R3 | same (LocalityId <> 0), react-extra (LocalityId = 0) |
| refreshLocalityDetails failure | R1 :1158 | Failure raise via useFlowState | :85-88, not guarded | Nothing | react-extra |

### pages/Locality_Details/hooks/useLocalityHouseholdList.ts
Origin: `UBTConnect.Directory_Locality.Locality_Households_HouseholdList`.

| Flow | Awaited call | Side effect after await | React | TST after leaving | Verdict |
|---|---|---|---|---|---|
| OnReady | R1 Locality_Households_HouseholdList.js:346 | Bookmark reads `getLocal_Bookmark_C2` / `getLocal_Bookmark` per household (local reads, no write) | :80-85, not guarded (writes guarded) | OnAfterFetch_..._Bookmarks not run (R1), :354, :476, :504 | react-extra (read only) |
| OnReady failure | R1 :346 | Failure raise via useFlowState | :77, not guarded | Nothing | react-extra |

### pages/Locality_Details/hooks/useLocalityInterchange.ts
Origin: `UBTConnect.Directory_Locality.Locality_Interchange`.

| Flow | Awaited call | Side effect after await | React | TST after leaving | Verdict |
|---|---|---|---|---|---|
| OnReady failure | R1 Locality_Interchange.js:237 | Failure raise via useFlowState | :54-58, not guarded | Nothing | react-extra |
| navigateToLocality | module `hasAccessToRegion`, :270 | `navigate` Locality_Details | :69, not guarded | Blocked (R4), :304 | react-extra |
| navigateToLocality | same | `showUpgradePopUp` | :64 | Runs, :313 | same |

### pages/Locality_Details/hooks/useLocalityOneSchoolGlobal.ts
Origin: `UBTConnect.Directory_Locality.Locality_OneSchoolGlobal`.

| Flow | Awaited call | Side effect after await | React | TST after leaving | Verdict |
|---|---|---|---|---|---|
| OnReady failure | R1 Locality_OneSchoolGlobal.js:338 | Failure raise via useFlowState | :55, not guarded | Nothing | react-extra |
| onScrollEnding failure | R1 :338 | Failure raise `.catch(raiseToFlowHandler)` | :70, :76 not guarded | Nothing | react-extra |

### pages/Locality_Details/hooks/useLocalitySubdivisions.ts
Origin: `UBTConnect.Directory_Locality.Locality_Subdivisions`.

| Flow | Awaited call | Side effect after await | React | TST after leaving | Verdict |
|---|---|---|---|---|---|
| OnReady failure | R1 Locality_Subdivisions.js:437 | Failure raise via useFlowState | :63, not guarded | Nothing | react-extra |
| onScrollEnding failure | R1 :437 | Failure raise `.catch(raiseToFlowHandler)` | :79, :94 not guarded | Nothing | react-extra |

### pages/OneSchoolGlobalDetails/hooks/useOneSchoolGlobalDetails.ts
Origin: `UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails` (data action in `OneSchoolGlobalDetails_Block`).

| Flow | Awaited call | Side effect after await | React | TST after leaving | Verdict |
|---|---|---|---|---|---|
| Query fetch | R1 `callDataAction`, OneSchoolBlock.js:1126 | Failure raise by the query cache subscription | `installQueryErrorsToFlowHandler` skips a query without observers (flowErrors.ts:45-47); state write is an effect of a mounted hook | Nothing | same |

### pages/Photobook/hooks/usePhotobook.ts
Origin: `UBTConnect.Directory_Photobook.Photobook`.

| Flow | Awaited call | Side effect after await | React | TST after leaving | Verdict |
|---|---|---|---|---|---|
| Fetch At start | R1 Photobook.js:379 (OnAfterFetch :542) | Failure raise (rethrow to useFlowState) | :64-67, guarded `isAlive()` | Nothing | same |

### pages/Photobook/hooks/useHouseholdCaption.ts
Origin: `UBTConnect.Directory_Photobook.Photobook_Options_Left`.

| Flow | Awaited call | Side effect after await | React | TST after leaving | Verdict |
|---|---|---|---|---|---|
| Handler_ClickedInfo | R1 Photobook_Options_Left.js:494 (OnAfterFetch :624) | Failure raise | :92-94, not guarded | Nothing | react-extra |
| same | same | Writes (caption, loading, last fetched) | :86-91, guarded `mounted` | Nothing | same (state write, not counted) |

## Summary

| Hook | Side effects after await | react-extra | react-missing | unclear |
|---|---|---|---|---|
| useHouseholdDetails | 6 | 3 (failure raise x2 counted as 1 row, resume of refreshes, navigation) | 0 | 0 |
| useSupperMeetingDetails | 2 | 0 | 0 | 0 |
| useBrowseCountries | 3 | 2 | 0 | 0 |
| useBrowseDirectory | 4 (incl. 1 timer) | 3 | 0 | 0 |
| useCountryList | 3 | 2 | 0 | 0 |
| useHouseholdCarousel | 1 | 0 | 0 | 0 |
| useHouseholdRelations | 5 | 2 | 0 | 0 |
| useLocalityDetails | 2 | 2 (one only for LocalityId = 0) | 0 | 0 |
| useLocalityHouseholdList | 2 | 2 | 0 | 0 |
| useLocalityInterchange | 3 | 2 | 0 | 0 |
| useLocalityOneSchoolGlobal | 2 | 2 | 0 | 0 |
| useLocalitySubdivisions | 2 | 2 | 0 | 0 |
| useOneSchoolGlobalDetails | 1 | 0 | 0 | 0 |
| usePhotobook | 1 | 0 | 0 | 0 |
| useHouseholdCaption | 1 | 1 | 0 | 0 |
| Total | 38 | 23 | 0 | 0 |

(useHouseholdDetails: rows = OnReady refreshes (same), event (same), failure raise (extra, 2 calls), OnParametersChanged resume (extra), navigation (extra), popup (same): 6 rows, 3 react-extra rows.)
