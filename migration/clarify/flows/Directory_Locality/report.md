# Flow report: Directory_Locality

| | |
|---|---|
| Status | draft |
| Date | 2026-10-27 |
| Screens on DEV | 5 (built: 5, BrowseCountries, BrowseDirectory, CountryDetails, CountryList, Locality_Details; not built: none) |
| Own blocks | Directory_LegendBottomSheet, Directory_LegendBottomSheet2, Locality_DateTimeLabel, Locality_Households, Locality_Households_HouseholdList, Locality_Interchange, Locality_LocalityContacts, Locality_OneSchoolGlobal, Locality_Subdivisions, StatisticsList, Statistics_Icons, Statistics_TypedItem |
| Sources | `pack/*.md` (DEV model, MCP dump 2026-10-27), `app/src/pages/{BrowseCountries,BrowseDirectory,CountryDetails,CountryList,Locality_Details}`, `app/src/components/directory/*`, KB page `ui/directory-locality.md` and the rules it names, TST compiled code of the 5 screens, 9 blocks and `UBTConnect.controller.js` (`migration/clarify/tools/tst_source.py`) |
| Rule | TST is the source of truth; DEV is the checklist. A difference is noted in §6. |

## 1. Summary

- Counts by verdict: match 238 · partial 4 · missing 0 · differs 1 · mock-only 15 · n/a 22 · unclear 0 (same as `checklist.json`).
- **F1** (minor): the Explore icon of `Placeholder_Icons` on Locality_Details shows when the header is not scrolled.
  TST shows it when the header is scrolled. The maps flag is off on TST, so the icon is hidden in both today.
- **F2** (minor): with the new-bookmarks flag on, the household list keeps the fetched `IsBookmarked`. TST reads
  `GetLocal_Bookmark_C2` for each row. React runs the legacy branch by decision (row 271).
- **F3** (minor): `StatisticsListOnParametersChhanged` on BrowseDirectory also calls `Map_FitBoundsAuto`. TST calls
  `Map_InvalidateSize` only.
- **F4** (info): the default of `In_ImageEntityTypeId` in `Statistics_TypedItem` is "" in React and `Locality` on DEV
  and TST. No caller of this flow relies on the default.
- Status: in React a user can open the country list, a country with its map, and the C1 country and locality lists.
  The user can search and filter the localities of a country. The user can open a locality with its households, own
  household, supper meetings, interchanges and OneSchool Global schools. Every server call is a mock, and the
  Locality Contacts tab shows "coming soon" as on TST. No finding blocks the flow.

## 2. Screens

### 2.1 BrowseCountries

Route `/UBTConnect/BrowseCountries`, page `app/src/pages/BrowseCountries/BrowseCountriesPage.tsx`, flows in
`app/src/pages/BrowseCountries/hooks/useBrowseCountries.ts` and `browseCountriesState.ts`. Board: `build`, built
(V4a, user 2026-10-14).

**Identity**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 001 | roles Registered, UBTOne_User; no inputs; OnReady | a signed-in user opens the screen | route meta MEMBER_ROUTE (member, enforce); inputs [] | `match` | app/src/pages/BrowseCountries/BrowseCountriesPage.tsx:15; pack/app.md |

**Data**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 002 | GetCountriesStatistics (OnDemand) | call-server Get_UI_CountryStatistics(); assign Out_CountriesStatistics | fetchBrowseCountriesStatistics → callAction 'BrowseCountries/DataActionGetCountriesStatistics' | `match` | useBrowseCountries.ts:63; app/src/api/country/repository.ts:29-31 |
| 003 | server side of GetCountriesStatistics | service action Get_UI_CountryStatistics (Connect_Geography_CS) | recordedHandler, 17 countries | `mock-only` | app/src/pages/BrowseCountries/mocks.ts:8. Production needs Get_UI_CountryStatistics |
| 004 | OnAfterFetch_GetCountriesStatistics | AvatarURL = GetFlagURLByCountryCode(CountryCode) per row | countries.map(… AvatarURL: getFlagURLByCountryCode(countryCode)) | `match` | browseCountriesState.ts:53-57 |

**UI tree**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 005 | Layout_DetailPage, title | "Browse by country" | DetailLayout headerTitle="Browse by country" | `match` | BrowseCountriesPage.tsx:20-22 |
| 006 | StatisticsList instance | In_IsLoading, In_SearchPrompt "Search " + Country.Singular, In_Statistics {Id: CountryCode, StatisticsOptions}; Event_Clicked | same props; onEventClicked | `match` | BrowseCountriesPage.tsx:25-31; browseCountriesState.ts:60-61 |
| 007 | BottomBarMenu | ActiveItem Directory | BottomBar activeItem Directory | `match` | BrowseCountriesPage.tsx:33 |
| 008 | CommonUI_InsideLayout | no arguments | CommonUiLayout | `match` | BrowseCountriesPage.tsx:34 |

**Screen actions**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 009 | ScreenEvent_OnReady: restored and fetched | end | `if (restored && isDataFetched) return` | `match` | useBrowseCountries.ts:69 |
| 010 | ScreenEvent_OnReady: else | Action_RefreshData | `await refreshData()` | `match` | useBrowseCountries.ts:70 |
| 011 | Action_RefreshData | 10 skeleton rows, then refresh | refreshStarted (getSkeletonList_UI_CountryStatistics(10)), fetch, countriesStatisticsFetched | `match` | useBrowseCountries.ts:61-65; browseCountriesState.ts:69 |
| 012 | Handler_StatisticsList_Clicked: Event_Id <> NullTextIdentifier() | false → end | `if (eventId === '') return` | `match` | useBrowseCountries.ts:75. NullTextIdentifier() is "" |
| 013 | HasAccessToRegion call | (Country = Event_Id, Locality = TextToLongInteger(Event_Id)) | hasAccessToRegion(textToLongInteger(eventId), eventId) | `match` | useBrowseCountries.ts:76. Shared action, checked in App_Common |
| 014 | HasAccess true | navigate BrowseDirectory(CountryCode = Event_Id) | navigate('/UBTConnect/BrowseDirectory', { CountryCode }) | `match` | useBrowseCountries.ts:77-79 |
| 015 | HasAccess false | App_Subscription_ShowUpgradePopUp() | `await showUpgradePopUp()` | `match` | useBrowseCountries.ts:81 |

**Validations**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 016 | inputs | none (the search input is inside StatisticsList) | none | `match` | BrowseCountriesPage.tsx |

**Business logic**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 017 | failed data fetch | runtime default: handleError → App_Common.handleError | raiseToFlowHandler | `match` | useBrowseCountries.ts:87; migration/runtime-sources/UBTConnect.Directory_Locality.controller.js:12-16 (auto-decisions-2026-10-15.md:12) |

**Strings**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 018 | all strings | "Browse by country", "Search " + concept | found | `match` | BrowseCountriesPage.tsx:22,29 |

### 2.2 BrowseDirectory

Route `/UBTConnect/BrowseDirectory`, page `app/src/pages/BrowseDirectory/BrowseDirectoryPage.tsx`, flows in
`app/src/pages/BrowseDirectory/hooks/useBrowseDirectory.ts` and `browseDirectoryState.ts`. Board: `build`, built
(V4a, user 2026-10-14).

**Identity**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 019 | roles; input CountryCode (Text); locals MarkersList, Center, Local_MapId; OnReady | route with CountryCode | MEMBER_ROUTE; inputs ["CountryCode"]; refs and state | `match` | app/src/pages/BrowseDirectory/inputs.ts:11 |

**Data**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 020 | GetLocalityStatistics | aggregate ContactBase_Country by Id → CountryName; call-server Get_UI_LocalityStatistics(CountryCode) | fetchLocalityCardList → 'BrowseDirectory/DataActionGetLocalityStatistics'; CountryName is an output | `match` | useBrowseDirectory.ts:83; app/src/api/locality/repository.ts:66-72. The aggregate runs server-side |
| 021 | server side of GetLocalityStatistics | Get_UI_LocalityStatistics + ContactBase_Country | recordedHandler, matchInputs false (one recording for every CountryCode) | `mock-only` | app/src/pages/BrowseDirectory/mocks.ts:10. Decision BrowseDirectory Q2 (auto-accepted, user instruction 2026-10-15) |
| 022 | OnAfterFetch: Center | ListClear(Center); append Current lat and long | Center: [latitude, longitude] of the first row; MarkersList appended | `match` | browseDirectoryState.ts:110-119. The pack appends to MarkersList without ListClear too |
| 023 | OnAfterFetch: marker per row | Marker.Id LocalityId, Type Locality, ExtraData Title, Pin_Member icon [20,24], anchors; Latlng | toMarker with the same fields | `match` | browseDirectoryState.ts:72-88; CR-CountryDetails-2 |
| 024 | OnAfterFetch: JavaScript GetCallback | output used by nothing | nothing to port | `match` | browseDirectoryState.ts:111-112 |

**UI tree**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 025 | title | If(CountryName = "", "Browse Directory", CountryName) | same expression | `match` | BrowseDirectoryPage.tsx:91 |
| 026 | top container onclick | Handler_BrowseCountries; CustomContainer Neutral0, padding Base | onClick={onBrowseCountries}; TOP_CONTAINER | `match` | BrowseDirectoryPage.tsx:30-33,96-97 |
| 027 | Columns_Two, IconText "Select another country to view", icons BookClosed and ChevronRight | ReduceLast, margin-left-base, spacing Base | same | `match` | BrowseDirectoryPage.tsx:98-108 |
| 028 | If not Center.Empty: LeafletMap else SkeletonSection | map or skeleton with leaflet-container | `state.Center.length !== 0 ? DirectoryMap : Skeleton` | `match` | BrowseDirectoryPage.tsx:114-130 |
| 029 | LeafletMap MapOptions | Zoom 5, MinZoom 2, MaxZoom 20, bounds 100/-100/190/-190, AttributionControl False, MaxBoundsViscosity 0.5 (DEV) | same, MaxBoundsViscosity 0 | `match` | BrowseDirectoryPage.tsx:57-65; TST BrowseDirectory.mvc.js:423 (type default). §6.1 |
| 030 | TileLayer, useClustering | cartocdn voyager URL, MinZoom 2, MaxZoom 20, Subdomains a-d; True | same | `match` | BrowseDirectoryPage.tsx:38-41,119 |
| 031 | ZoomControlOptions | bottomright, "Zoom in"/"Zoom out", ubt-icon classes with Neutral8, "Your location", no my-location button, custom control | same | `match` | BrowseDirectoryPage.tsx:44-54; TST isAddGoToMyLocationButtonAttr false |
| 032 | LeafletMap events | OnInitialized, OnMarker_Clicked, SetCallbacks | onOnInitialized, onOnMarkerClicked, onSetCallbacks | `match` | BrowseDirectoryPage.tsx:122-124 |
| 033 | StatisticsList instance | In_IsLoading, "Search " + Locality.Singular, In_ShowSubtitle True, {Id: LocalityId}; Event_Clicked; OnParametersChangedEv | same | `match` | BrowseDirectoryPage.tsx:132-140 |
| 034 | BottomBarMenu, CommonUI_InsideLayout, CustomContainer Neutral0 | Directory | same | `match` | BrowseDirectoryPage.tsx:131,146-147 |

**Screen actions**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 035 | Action_InvalidateMapSize | Local_MapId <> "" → Map_InvalidateSize, Map_FitBoundsAuto | same | `match` | useBrowseDirectory.ts:95-99 |
| 036 | Action_RefreshData | 10 skeleton rows, refresh | refreshStarted, fetch, localityStatisticsFetched | `match` | useBrowseDirectory.ts:81-85 |
| 037 | Handler_BrowseCountries | navigate BrowseCountries() | navigate('/UBTConnect/BrowseCountries') | `match` | useBrowseDirectory.ts:123-125 |
| 038 | Handler_LeafletMapOnInitialized | Local_MapId = MapId; setTimeout(Action_InvalidateMapSize, 0) | same | `match` | useBrowseDirectory.ts:127-135 |
| 039 | Handler_LeafletMapOnMarker_Clicked | Map_Marker_OpenPopUp(MarkerObj) | map_Marker_OpenPopUp(args[6]) | `match` | useBrowseDirectory.ts:146-148 |
| 040 | LeafletMapSetCallbacks | PopupBindingCallback = Directory_BrowseByCountry_TooltipBuilder(marker, Handler_StatisticsList_Clicked) | same | `match` | useBrowseDirectory.ts:138-144 |
| 041 | Handler_StatisticsList_Clicked: empty id | end | return | `match` | useBrowseDirectory.ts:104 |
| 042 | HasAccessToRegion | (CountryCode, TextToLongInteger(Event_Id)) | hasAccessToRegion(asLongText(eventId), CountryCode) | `match` | useBrowseDirectory.ts:105; TST :1138 |
| 043 | no access | App_Subscription_ShowUpgradePopUp() | showUpgradePopUp | `match` | useBrowseDirectory.ts:106-109 |
| 044 | ListIndexOf <> -1 | LocalityLabel = GetLocalityLabel(Name, CountryName) | localityLabelOf | `match` | browseDirectoryState.ts:96-99 |
| 045 | ListIndexOf = -1 | LocalityLabel stays "" | '' | `match` | browseDirectoryState.ts:94-95 |
| 046 | navigate | Locality_Details(LocalityId, PreloadedLocalityLabel) | same | `match` | useBrowseDirectory.ts:110-113 |
| 047 | ScreenEvent_OnReady | restored and fetched → end; else Action_RefreshData | same | `match` | useBrowseDirectory.ts:89-92 |
| 048 | StatisticsListOnParametersChhanged | Local_MapId <> "" → Map_InvalidateSize | invalidateMapSize(): Map_InvalidateSize and Map_FitBoundsAuto | `partial` | useBrowseDirectory.ts:152-158; TST BrowseDirectory.mvc.js:1040 (InvalidateSize only), :971. **F3** |

**Strings**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 049 | all strings | "Browse Directory", "Select another country to view", "Zoom in", "Zoom out", "Your location" | found | `match` | BrowseDirectoryPage.tsx; browseDirectoryState.ts |

### 2.3 CountryDetails

Route `/UBTConnect/CountryDetails`, page `app/src/pages/CountryDetails/CountryDetailsPage.tsx`, content in
`components/CountryDetailsContent.tsx`, flows in `hooks/useCountryDetails.ts` and `countryDetailsState.ts`. Board:
`build`, built (V4a, user 2026-10-14).

**Identity**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 050 | roles; input CountryCode; 11 locals; OnInitialize, OnReady | route with CountryCode | inputs ["CountryCode"]; useViewState for CountryCode, OriginalCountryCode, SearchString; refs for the ids | `match` | app/src/pages/CountryDetails/inputs.ts:13; useCountryDetails.ts:84-97 |

**Data**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 051 | GetLocalityStatistics | aggregate CountryName; Get_UI_LocalityStatistics(CountryCode) | useCountryLocalityStatisticsQuery → 'CountryDetails/DataActionGetLocalityStatistics' | `match` | useCountryDetails.ts:110; app/src/api/country/repository.ts:44-49 |
| 052 | server side of GetLocalityStatistics | Get_UI_LocalityStatistics + ContactBase_Country | recordedHandler (AR); other codes get the AR data with a console warning | `mock-only` | app/src/pages/CountryDetails/mocks.ts:10. Decision CountryDetails Q1 (auto-accepted, user instruction 2026-10-15) |
| 053 | OnAfterFetch_GetLocalityStatistics | Action_DefineList; Center; ListClear(MarkersList); markers | derived from the query result | `match` | useCountryDetails.ts:122-135. The tail is in rows 266-269 |

**UI tree**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 054 | title | If(CountryName = "", "Browse Directory", CountryName) | same | `match` | CountryDetailsPage.tsx:51 |
| 055 | Placeholder_Header_Right: If False #HidingForNow → FilterSheet_Icon | [DEAD BRANCH] | not built | `n/a` | pack/screens.md. Dead in the model |
| 056 | top container: onclick, IconText SemiBold "Select another country to view", LocationOn Neutral7, ChevronRight | same | same | `match` | CountryDetailsContent.tsx:131-147 |
| 057 | If not Center.Empty and (fetched or error): LeafletMap else skeleton | map after the answer | `mapOptions !== null && isLoaded ? DirectoryMap : Skeleton` | `match` | CountryDetailsContent.tsx:153,168-171 |
| 058 | LeafletMap MapOptions | same as 029, MaxBoundsViscosity 0.5 (DEV) | MaxBoundsViscosity 0 | `match` | countryDetailsState.ts:64-72; TST CountryDetails.mvc.js:462. §6.1 |
| 059 | TileLayer | arcgisonline World_Street_Map URL | same | `match` | CountryDetailsContent.tsx:66-69; TST :431; decision CountryDetails Q2 |
| 060 | ZoomControlOptions | classes with Primary; "Your location" | same | `match` | CountryDetailsContent.tsx:72-82 |
| 061 | LeafletMap events | OnParametersChanged, SetCallbacks, OnInitialized, OnMarker_Clicked | all four wired | `match` | CountryDetailsContent.tsx:161-166 |
| 064 | Legend "Browse by Locality" + Info icon | Neutral10 Base SemiBold; Info Primary NonStandard_16, Click → OnClick_LegendInfo | same | `match` | CountryDetailsContent.tsx:198-217 |
| 065 | LocalityCount text | Length + If(Length = 1, " Locality", " Localities"); skeleton until the answer | same | `match` | CountryDetailsContent.tsx:221-231. A failed fetch keeps the 10 skeleton rows on both |
| 066 | #isLoading: three Statistics_TypedItem skeletons | HasImage True, SupperMeetings, texts 111/11/11/11/123, "Loading Name" | same | `match` | CountryDetailsContent.tsx:236-248,93-96 |
| 067 | If Local_List.Empty and SearchString <> "": EmptyList | Search icon; "No results found for '…'"; "Sorry, we couldn't find…" | same text, in a NotCaptured wrapper | `match` | CountryDetailsContent.tsx:249-253. NotCaptured renders its children in a built app (NotCaptured.tsx:8) |
| 068 | list of Local_List | "list list-group"; container onclick → Handler_StatisticsList_Clicked(LocalityId); Statistics_TypedItem HasImage True, ImageEntityId MainHallSubdivisionId, SupperMeetings | same | `match` | CountryDetailsContent.tsx:255-277 |
| 069 | FilterSheet (else of If False) | class bottom-sheet-higher-z-index; HasCountries {Enable, Order 1, AddAllOptions False}; StartFilter CountryIds [OriginalCountryCode]; Loaded, SheetInitialized, ApplyFilters | same | `match` | CountryDetailsPage.tsx:15,73-83 |
| 070 | Directory_LegendBottomSheet | ShowLocalities False; SheetInitialized | same | `match` | CountryDetailsPage.tsx:84-89 |
| 071 | BottomBarMenu, CommonUI_InsideLayout | Directory | same | `match` | CountryDetailsPage.tsx:70-71 |

**Screen actions**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 072 | Action_DefineList: SearchString = "" | Local_List = Out | `if (searchString === '') return out` | `match` | countryDetailsState.ts:33 |
| 073 | Action_DefineList: else | Index(RemoveAccents(Name), RemoveAccents(Search), ignoreCase) <> -1 | filter with jSUtils_String_RemoveAccents and toLowerCase | `match` | countryDetailsState.ts:34-35; BR-UBTCON-788 |
| 074 | Action_InvalidateMapSize | InvalidateSize, FitBoundsAuto when Local_MapId <> "" | same | `match` | useCountryDetails.ts:163-172 |
| 075 | Action_ManuallyOpenFilterSheet: not loaded | end | return | `match` | useCountryDetails.ts:176 |
| 076 | loaded and ShowSubscription | App_Subscription_ShowUpgradePopUp() | showUpgradePopUp | `match` | useCountryDetails.ts:177; BR-UBTCON-786 |
| 077 | loaded, no subscription | BottomSheetOpen(Filter_BottomSheetId) | bottomSheetOpen | `match` | useCountryDetails.ts:178 |
| 078 | Action_RefreshData | 10 skeleton rows; refresh | query on mount with skeletonOut; restored view keeps its data | `match` | useCountryDetails.ts:108-119 |
| 079 | Directory_LegendBottomSheetSheetInitialized | BottomSheetId = SheetId | ref | `match` | useCountryDetails.ts:237-239 |
| 080 | Handler_BrowseCountries | Action_ManuallyOpenFilterSheet | handler_BrowseCountries | `match` | useCountryDetails.ts:207-209 |
| 081 | Handler_FilterSheetApplyFilters: empty or None | CountryCode = OriginalCountryCode; HasFiltersApplied; refresh | appliedCountryCode; refetch or new query key | `match` | countryDetailsState.ts:82-86; useCountryDetails.ts:182-187; BR-UBTCON-787 |
| 082 | other selection | CountryCode = SelectedIds.Current | setCountryCode(next) | `match` | useCountryDetails.ts:183-187 |
| 083 | Handler_FilterSheetLoaded | IsLoaded True; ShowSubscription | refs | `match` | useCountryDetails.ts:229-232 |
| 084 | Handler_FilterSheetSheetInitialized | Filter_BottomSheetId | ref | `match` | useCountryDetails.ts:233-235 |
| 085 | Handler_LeafletMapOnInitialized | Local_MapId; setTimeout(Action_InvalidateMapSize, 0) | same | `match` | useCountryDetails.ts:218-222 |
| 086 | Handler_LeafletMapOnMarker_Clicked | Map_Marker_OpenPopUp | same | `match` | useCountryDetails.ts:210-212 |
| 087 | Handler_Search_ClearString | SearchString = ""; Action_DefineList | onSearchChanged('') | `match` | CountryDetailsContent.tsx:186-188 |
| 088 | Handler_Search_OnChange | SearchString = Event_CurrentString; Action_DefineList | setSearchString; setSearchTouched | `match` | useCountryDetails.ts:191-194 |
| 089 | Handler_StatisticsList_Clicked: empty id | end | return | `match` | useCountryDetails.ts:140 |
| 090 | HasAccessToRegion | (CountryCode, TextToLongInteger(Event_Id)) | hasAccessToRegion(normalizeLongId(event_Id), countryCode) | `match` | useCountryDetails.ts:141; BR-UBTCON-782 |
| 091 | no access | upgrade pop-up | same | `match` | useCountryDetails.ts:142-145 |
| 092 | label and navigate | GetLocalityLabel when found; Locality_Details(LocalityId, PreloadedLocalityLabel) | same | `match` | useCountryDetails.ts:146-151 |
| 093 | LeafletMapOnParametersChanged | Action_InvalidateMapSize | same | `match` | useCountryDetails.ts:223 |
| 094 | LeafletMapSetCallbacks | tooltip builder with Handler_StatisticsList_Clicked | same | `match` | useCountryDetails.ts:213-217 |
| 095 | OnClick_LegendInfo | BottomSheetOpen(BottomSheetId) | same | `match` | useCountryDetails.ts:225-227 |
| 096 | ScreenEvent_OnInitialize | OriginalCountryCode = CountryCode | useViewState('OriginalCountryCode', countryCode) | `match` | useCountryDetails.ts:85 |
| 097 | ScreenEvent_OnReady | restored and fetched → end; else Action_RefreshData | query on mount; restored view skips | `match` | useCountryDetails.ts:108-110; BR-UBTCON-785 |
| 098 | StatisticsListOnParametersChanged | not wired to any widget | not built | `n/a` | pack/screens.md CountryDetails widget tree. Dead in the model |
| 266 | OnAfterFetch: Action_DefineList | Local_List from Out and SearchString | defineList(fetched.localities, searchString) | `match` | useCountryDetails.ts:124-128 |
| 267 | OnAfterFetch: Center | ListClear; append Current lat and long | firstLat, firstLong of localities[0]; mapOptionsAt | `match` | useCountryDetails.ts:129-134 |
| 268 | OnAfterFetch: ListClear(MarkersList), marker per row | Id, Type, ExtraData, icon options, Latlng | markersList = localities.map(toMarker), rebuilt from the answer | `match` | useCountryDetails.ts:135; countryDetailsState.ts:45-61 |
| 269 | OnAfterFetch: JavaScript GetCallback | output used by nothing | nothing to port | `match` | pack/screens.md |

**Validations**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 062 | Input #Block_SearchInput options | IsEnabled Length > 1; InitalString SearchString (DEV); "Search locality"; Debounce 200; Rounded | IsEnabled, SearchPrompt, Debounce, BorderRadius; no InitalString | `match` | CountryDetailsContent.tsx:85-90,181-183; TST CountryDetails.mvc.js:668-673 has no InitalString. §6.1. No MaxLength on TST |
| 063 | Input events | Submit, OnChange → Handler_Search_OnChange; ClearString → Handler_Search_ClearString | same | `match` | CountryDetailsContent.tsx:184-188 |

**Strings**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 099 | all strings | 7 literals | found; the "Sorry…" text uses `&apos;` in JSX | `match` | CountryDetailsContent.tsx:251-252 |

### 2.4 CountryList

Route `/UBTConnect/CountryList`, page `app/src/pages/CountryList/CountryListPage.tsx`, content in
`components/CountryListContent.tsx`, flows in `hooks/useCountryList.ts` and `countryListState.ts`. Board: `build`,
built (V3b, user 2026-10-14).

**Identity**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 100 | roles; no input; locals LocalCacheControl_UserInformation, BottomSheetId, SkeletonCommunityStatistics | — | MEMBER_ROUTE; inputs [] | `match` | CountryListPage.tsx:20 |

**Data**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 101 | GetCommunityStatistics (Get_UI_CommunityNumbers) | DEV only | none | `match` | TST CountryList.mvc.js: 0 hits. §6.1 |
| 102 | GetCountriesStatistics | Get_UI_CountryStatistics | fetchCountryListStatistics → 'CountryList/DataActionGetCountriesStatistics' | `match` | useCountryList.ts:95; repository.ts:35-37 |
| 103 | server side of GetCountriesStatistics | Get_UI_CountryStatistics | recordedHandler, 17 countries | `mock-only` | app/src/pages/CountryList/mocks.ts:8 |
| 104 | OnAfterFetch_GetCountriesStatistics | flag URL per row | avatarURL: getFlagURLByCountryCode | `match` | useCountryList.ts:101-106 |

**UI tree**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 105 | Layout_MainPages | AddHeaderGap False, isGrayBackground, "Directory" | same | `match` | CountryListPage.tsx:38-42 |
| 106 | App_NotificationIcon | header right | NotificationIcon | `match` | CountryListPage.tsx:43 |
| 107 | StaticInput | "Search any member or location"; Click_Input → Search | same | `match` | CountryListPage.tsx:44-46; useCountryList.ts:138-140 |
| 108 | SkeletonSection #HeaderLoading | not isFetched | same | `match` | CountryListContent.tsx:101 |
| 109 | MY LOCALITY card | onclick OnClick_MyLocality; LazyImage Locality Base_52 Circle; "MY LOCALITY", Locality_Name, count + If(count = 1, " Supper Meeting", " Supper Meetings") | same; countText | `match` | CountryListContent.tsx:106-123; TST CountryList.mvc.js:484; countryListState.ts:100-103 |
| 110 | MY COUNTRY card | onclick OnClick_MyCountry; flag image; "MY COUNTRY", Country_Name, count + " Locality"/" Localities" | same | `match` | CountryListContent.tsx:126-145; TST :689 |
| 111 | If True: #Population with FeedBlock_CommunityPopulation | true branch of the constant If | CommunityPopulation | `match` | CountryListContent.tsx:149-156. Block of flow Home |
| 270 | If True: else branch Directory_CommunityNumbers | [DEAD BRANCH]; absent on TST | not built | `n/a` | pack/screens.md; TST 0 hits. Dead in the model |
| 112 | Legend "Browse by Country" + Info icon | OnClick_LegendInfo | same | `match` | CountryListContent.tsx:157-175 |
| 113 | SkeletonSection + list of countries | not (fetched or error); "list list-group"; onclick → Handler_StatisticsList_Clicked(CountryCode); Statistics_TypedItem HasImage = AvatarURL <> "", {texts, Title, AvatarURL} | same; list-loading / list-error classes from the captured states | `match` | CountryListContent.tsx:96-98,176-199; parity-exemptions.json:67 |
| 114 | BottomBarMenu isRootPage, CommonUI_InsideLayout | Directory, True | same | `match` | CountryListPage.tsx:62-63 |
| 115 | CacheControl_UserInfo_Wrapper | Result → CacheControl_UserInfo_WrapperResult | UserInfoCache onResult | `match` | CountryListPage.tsx:65 |
| 116 | Directory_LegendBottomSheet | ShowLocalities default True; SheetInitialized | same | `match` | CountryListPage.tsx:66-71 |

**Screen actions**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 117 | Action_RefreshData_CommunityStatistics | DEV only | none | `match` | TST 0 hits. §6.1 |
| 118 | Action_RefreshData_CountryStatistics | 10 skeleton rows; refresh | same | `match` | useCountryList.ts:90-106 |
| 119 | exception All Exceptions | ListClear; raise BubbleGenericException | same | `match` | useCountryList.ts:113-116 |
| 120 | Communication Exception | ListClear; raise BubbleCommunicationException | same | `match` | useCountryList.ts:108-111 |
| 121 | Not Registered | re-raise | `throw e` | `match` | useCountryList.ts:112; shell-facts.md:19 |
| 122 | CacheControl_UserInfo_WrapperResult | Directory_UserCurrent = UserInformation; isFetched True | userGeographyOf | `match` | useCountryList.ts:159-161; countryListState.ts:69-79 |
| 123 | Directory_LegendBottomSheetSheetInitialized | BottomSheetId | set | `match` | useCountryList.ts:162-164 |
| 124 | Handler_StatisticsList_Clicked: empty id | end | return | `match` | useCountryList.ts:130 |
| 125 | HasAccess true | CountryDetails(CountryCode) | same | `match` | useCountryList.ts:131-132; BR-UBTCON-780 |
| 126 | HasAccess false | upgrade pop-up | same | `match` | useCountryList.ts:133 |
| 127 | OnAfterFetch_GetCountriesStatistics | flag URL | same | `match` | useCountryList.ts:102 |
| 128 | OnClick_LegendInfo | BottomSheetOpen | same | `match` | useCountryList.ts:153-155 |
| 129 | OnClick_MyCountry | CountryDetails(user Country_Code) | same | `match` | useCountryList.ts:147-149; BR-UBTCON-784 |
| 130 | OnClick_MyLocality | Locality_Details(Locality_Id, Locality_Name) | same | `match` | useCountryList.ts:141-146 |
| 131 | ScreenEvent_OnReady: restored and fetched | end | return | `match` | useCountryList.ts:123; BR-UBTCON-785 |
| 132 | ScreenEvent_OnReady: else | JS Action_RefreshData_CommunityStatistics (DEV only); Action_RefreshData_CountryStatistics | refreshData (country statistics) | `match` | useCountryList.ts:124. §6.1 |
| 133 | StaticInputClick_Input | Search() | same | `match` | useCountryList.ts:138-140 |
| 134 | community population click | inside FeedBlock_CommunityPopulation (flow Home) | opens Updates_SingleList | `match` | useCountryList.ts:150-152. Checked in the report of Home |

**Strings**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 135 | all strings | 5 literals | found | `match` | CountryListPage.tsx; CountryListContent.tsx |

### 2.5 Locality_Details

Route `/UBTConnect/Locality_Details`, page `app/src/pages/Locality_Details/Locality_DetailsPage.tsx`, flows in
`hooks/useLocalityDetails.ts` and `localityDetailsState.ts`, module actions in `components/actions.ts`. Board:
`build`, built (V3b, user 2026-10-14).

**Identity**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 136 | roles Anonymous, Registered, UBTOne_User; inputs LocalityId, PreloadedLocalityLabel; 7 locals | empty permission check on TST | access anonymous, lock enforce; inputs with defaults '0' and '' | `match` | app/src/pages/Locality_Details/inputs.ts:12-15; shell-facts.md:14 |

**Data**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 137 | Get_LocalityDetails | Get_UI_LocalityDetails(LocalityId); OnAfterFetch | fetchLocalityDetails → 'Locality_Details/DataActionGet_LocalityDetails' | `match` | useLocalityDetails.ts:84; repository.ts:90-94 |
| 138 | server side of Get_LocalityDetails | Get_UI_LocalityDetails | recordedHandler, matchInputs false | `mock-only` | app/src/pages/Locality_Details/mocks.ts:120 |
| 139 | OnAfterFetch_Get_LocalityDetails | Action_SetLocalityLabel(CountryName, Name) | localityLabelOf | `match` | localityDetailsState.ts:130-136 |

**UI tree**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 140 | Layout_MainPages | "Directory"; OnHeaderScrolled → Handler_OnHeaderScrolled | same | `match` | Locality_DetailsPage.tsx:82-89 |
| 141 | StaticInput | "Search for households or members"; → OnClick_Search | same | `match` | Locality_DetailsPage.tsx:85-87 |
| 142 | Placeholder_Header_Input_Icon: If GetHasMapsEnabled() | Explore Neutral0 → OnClick_Maps | `mapsEnabled ? exploreIcon : null` | `match` | Locality_DetailsPage.tsx:54,77-79,88. C2EnableMaps off on TST; BR-UBTCON-797 |
| 143 | SubHeader_MainPages | In_IsShowSearchIcon = HeaderIsScrolled; Click_Search | same | `match` | Locality_DetailsPage.tsx:93-96 |
| 144 | container visible = own locality: "My Locality:" | font-size-xxs font-regular | same, in NotCaptured | `match` | Locality_DetailsPage.tsx:99-103 |
| 145 | container onclick → Handler_NavigateTo_BrowsebyLocation; Columns_Two fit-content | — | same | `match` | Locality_DetailsPage.tsx:104-108 |
| 146 | SkeletonSection (LocalityLabel = ""), label expr "font-size-s font-semi-bold" | — | same | `match` | Locality_DetailsPage.tsx:110-116,37 |
| 147 | Icon ExpandMore Neutral0 "directory-locality padding-left-xs" | — | same | `match` | Locality_DetailsPage.tsx:119-125 |
| 148 | If fetched and TimezoneName = "" (empty) else SkeletonSection with DoubleExtraSmall container | — | same | `match` | Locality_DetailsPage.tsx:129-134 |
| 149 | #IsLoadingLocalityLabel2: "Local Timezone And UTC Offset" else Locality_DateTimeLabel(TimezoneOffset) | — | same | `match` | Locality_DetailsPage.tsx:135-144 |
| 150 | Placeholder_Icons: If HeaderIsScrolled, If GetHasMapsEnabled(): Explore icon | icon when scrolled (TST :657-666 the same) | icon when NOT scrolled | `partial` | Locality_DetailsPage.tsx:151; TST Locality_Details.mvc.js:657-666. **F1** |
| 151 | Tags: SkeletonSection(not IsScreenInitialized) + HorizontalTagList | household-tag, padding Base, mandatory, single; Changed | same | `match` | Locality_DetailsPage.tsx:154-169 |
| 152 | #Showhouseholds: Locality_Households | BretherenCount, HouseholdCount, LocalityId; Event_NavigateToHouseholdDetails | same | `match` | Locality_DetailsPage.tsx:175-184 |
| 153 | #ShowMyHousehold: HouseholdDetails_Block | HouseholdId = Logged_User.HouseholdId, CheckVisibility, HideActions, ShowKebabMenu | HouseholdDetailsContainer with the same inputs, in NotCaptured | `match` | Locality_DetailsPage.tsx:185-196. Block of flow Directory_Household |
| 154 | #ShowSubdivisions: Locality_Subdivisions(LocalityId) | — | same | `match` | Locality_DetailsPage.tsx:197-199 |
| 155 | #ShowInterchange: Locality_Interchange(LocalityId) | — | same | `match` | Locality_DetailsPage.tsx:200-202 |
| 156 | #ShowOneSchoolGlobal: Locality_OneSchoolGlobal | In_LocalityId; Event_OnClick_Bookmark; Event_OnClick | same, plus In_LocalityTimezoneData (TST input) | `match` | Locality_DetailsPage.tsx:203-214; TST Locality_Details.mvc.js:933. §6.1 |
| 157 | #ShowLocalityContacts: If Connect_LaunchDarkly_PermissionCheck(…) with Locality_LocalityContacts | DEV only; TST renders ComingSoon | ComingSoon | `match` | Locality_DetailsPage.tsx:215-219; TST :986-990; BR-UBTCON-796. §6.1 |
| 158 | BottomBarMenu, CommonUI_InsideLayout | Directory | same | `match` | Locality_DetailsPage.tsx:222-223 |

**Screen actions**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 159 | Action_InitializeScreen: user info | GetUserInformation_Wrapper; Logged_User.HouseholdId, LocalityId | getUserInformation; householdId, localityId | `match` | useLocalityDetails.ts:99-104 |
| 160 | LocalityId = 0 | LocalityId = own locality; label from the user geography | ownLocality branch | `match` | localityDetailsState.ts:84-91; BR-UBTCON-792 |
| 161 | IsUserLocality, tags, selected tag, IsScreenInitialized | ListClear; GetSample_FilterTags(IsUserLocality); Households; True | same | `match` | localityDetailsState.ts:86-95 |
| 162 | GetSample_FilterTags | Households, My Household when asked, Supper Meetings, Interchange, OneSchool Global, Locality Contacts (DEV always; TST only with the LD flag) | same with `hasLocalityContacts` | `match` | components/actions.ts:23-30; TST UBTConnect.controller.js:10863-10920. §6.1; BR-UBTCON-264 |
| 163 | Action_SetLocalityLabel | LocalityName + ", " + CountryName | localityLabelOf | `match` | localityDetailsState.ts:52 |
| 164 | Handler_HorizontalTagListChanged | TagsList = UpdatedTagList; scroll .active-screen to 0; selected tag | same | `match` | useLocalityDetails.ts:151-156; localityDetailsState.ts:142-145 |
| 165 | Handler_NavigateTo_BrowsebyLocation: GetHasC1DirectoryView() | true → CountryDetails(CountryCode) (TST :1126-1136 the same) | same | `match` | useLocalityDetails.ts:131. K1 |
| 166 | else | BrowseDirectory(CountryCode) | same | `match` | useLocalityDetails.ts:131-133 |
| 167 | Handler_NavigateTo_HouseholdDetails: HouseholdId = 0 | end | return | `match` | useLocalityDetails.ts:138; BR-UBTCON-794 |
| 168 | else | HouseholdDetails(HouseholdId) | same | `match` | useLocalityDetails.ts:139 |
| 169 | Handler_NavigateTo_OneschoolGlobalDetails: isToStop | end | return | `match` | useLocalityDetails.ts:145; BR-UBTCON-795 |
| 170 | else | OneSchoolGlobalDetails(In_OneSchoolGlobalId) | same | `match` | useLocalityDetails.ts:146 |
| 171 | Handler_OnClick_Bookmark | no nodes | not wired | `match` | useLocalityDetails.ts:57-58; TST Locality_Details.mvc.js:1149 |
| 172 | Handler_OnHeaderScrolled | HeaderIsScrolled = event | dispatch headerScrolled | `match` | useLocalityDetails.ts:115-117 |
| 173 | OnClick_Maps | Map(MaiinHallLatitude, MainHallLongitude) | same | `match` | useLocalityDetails.ts:123-126 |
| 174 | OnClick_Search | Search() | same | `match` | useLocalityDetails.ts:119-121 |
| 175 | ScreenEvent_OnInitialize | LocalityLabel = PreloadedLocalityLabel; tags when empty (IsUserLocality True) | initial state | `match` | localityDetailsState.ts:56-72 |
| 176 | ScreenEvent_OnReady: initialized, fetched, no error | end | return | `match` | useLocalityDetails.ts:95-96; BR-UBTCON-798 |
| 177 | initialized, not fetched or error | refresh | refreshLocalityDetails | `match` | useLocalityDetails.ts:112 |
| 178 | not initialized | Action_InitializeScreen, refresh | same | `match` | useLocalityDetails.ts:97-112 |

**Business logic**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 179 | navigation to the same screen (Interchange) | new screen instance | remount on the location key | `match` | Locality_DetailsPage.tsx:47-50 |

**Strings**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 180 | all strings | 3 literals | found | `match` | Locality_DetailsPage.tsx:86,137,124 |

## 3. Blocks of the flow

### 3.1 Directory_LegendBottomSheet (CountryDetails, CountryList)

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 181 | input ShowLocalities = True; event SheetInitialized | — | DirectoryLegendSheet, showLocalities = true | `match` | app/src/components/directory/DirectoryLegendSheet/DirectoryLegendSheet.tsx:59-64 |
| 182 | BottomSheet args | Neutral0; padding Base / DoubleExtraLarge; directory-legend-explanation; no back button; header; "About the numbers" | same | `match` | DirectoryLegendSheet.tsx:73-79 |
| 183 | legend items Brethren, Households, Brothers, Sisters | entity icons, Purple, Primary, Boy blue, Girl pink | same | `match` | DirectoryLegendSheet.tsx:88-89,107-108 |
| 184 | If ShowLocalities | "Localities" (Error) else "Supper Meetings" with inline icon | same | `match` | DirectoryLegendSheet.tsx:90-106; BR-UBTCON-809 |
| 185 | If IsOpened: PreventBackNavigation → BottomSheetOnClose | — | same | `match` | DirectoryLegendSheet.tsx:112-114 |
| 186 | BottomSheetInitialized | BottomSheetId = Id; trigger SheetInitialized | same | `match` | DirectoryLegendSheet.tsx:82-85 |
| 187 | BottomSheetOnClose | OnToggle(False); BottomSheetClose | same | `match` | DirectoryLegendSheet.tsx:67-70 |
| 188 | BottomSheetOnToggle | IsOpened = IsOpen | setIsOpened | `match` | DirectoryLegendSheet.tsx:80 |

### 3.2 Directory_LegendBottomSheet2 (used by nothing)

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 189 | block with ShowBackButton, isTransparentOverlay, dead If True | used by no screen of the module | not built | `n/a` | pack/blocks.md; KB directory-locality.md "unreferenced" |

### 3.3 Locality_DateTimeLabel (Locality_Details)

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 190 | input In_TimezoneOffset; local LocalDateTime | — | inTimezoneOffset; useState(new Date()) | `match` | app/src/pages/Locality_Details/components/Locality_DateTimeLabel.tsx:15-16 |
| 191 | expr GetLocalityCurrentTimeLabel(offset, LocalDateTime) | TST: device time + UTC offset + locality offset; "weekday, hh:mm tt (UTC ± h[:mm])" | same formula | `match` | components/actions.ts:35-46; TST UBTConnect.controller.js:9366-9414 |
| 192 | Timer (UBTConnect_Utils) | Event_IntervalElapsed, In_Delay 1 | Timer inDelay 1 | `match` | Locality_DateTimeLabel.tsx:21-26; components/Timer.tsx:15 |
| 193 | OnInitialize, Handler_TimerEvent_IntervalElapsed | LocalDateTime = CurrDateTime() | new Date() | `match` | Locality_DateTimeLabel.tsx:16,24 |

### 3.4 Locality_Households (Locality_Details)

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 194 | inputs In_LocalityId, In_BretherenCount, In_HouseholdCount; event Event_NavigateToHouseholdDetails | — | same props | `match` | components/Locality_Households.tsx:17-26 |
| 195 | counters "<n> Brethren" (PersonFill Purple), "<n> Households" (Household Primary) | Neutral8 ExtraSmall SemiBold; locality-count classes | same | `match` | Locality_Households.tsx:64-91 |
| 196 | Locality_Households_HouseholdList instance | In_LocalityId; event passthrough | same | `match` | Locality_Households.tsx:94-99 |

### 3.5 Locality_Households_HouseholdList (Locality_Households)

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 197 | GetLocalityHouseholds | GetHouseholdList_ByLocalityId(In_LocalityId); OnAfterFetch | fetchLocalityHouseholds → 'Locality_Households_HouseholdList/DataActionGetLocalityHouseholds' | `match` | hooks/useLocalityHouseholdList.ts:75; app/src/api/household/repository.ts:94-100 |
| 198 | server side | GetHouseholdList_ByLocalityId (Connect_Household_CS) | contract handler, fictional households | `mock-only` | app/src/pages/Locality_Details/mocks.ts:121 |
| 199 | skeleton, empty state, list | not fetched; Directory_EmptyState(Household); "list list-group list--gap-s" of Household_Card | same | `match` | components/Locality_Households_HouseholdList.tsx:51-71 |
| 200 | ScreenEvent_OnInitialize: three "Dumyy size" rows when empty | — | INITIAL_LOCALITY_HOUSEHOLD_LIST with three skeleton records | `match` | hooks/localityBlocksState.ts:40-54. The reader searched the hook and the component only |
| 201 | OnReady: restored | ReactiveInstance_ForceUpdate | return when fetched | `match` | useLocalityHouseholdList.ts:74 |
| 202 | OnReady: else | ForceListUpdateOnScrollEnd; refresh | fetch, householdsFetched | `match` | useLocalityHouseholdList.ts:75-76 |
| 203 | OnAfterFetch bookmarks: GetHasNewBookmarks() true | GetLocal_Bookmark_C2(HouseholdId, Household) per row | `if (flags.hasNewBookmarks) return` (keeps the fetched IsBookmarked) | `partial` | useLocalityHouseholdList.ts:77. **F2** |
| 204 | GetHasNewBookmarks() false | GetLocal_Bookmark(HouseholdId, Contact) per row | same | `match` | useLocalityHouseholdList.ts:78-83; BR-UBTCON-803 |
| 271 | which branch runs | TST: flag on (getHasNewBookmarks true since 2026-10-21) | React: C2NewBookmarks off by default | `differs` | migration/knowledge/flag-values-tst.json changes[0]: decision "Bookmarks Q1 a (user, 2026-10-22): keep MyBookmarks (D2) until the PROD value is known"; app/src/app/routes.ts:70-72 |
| 205 | Household_CardEvent_OnClickHousehold: carousel on | preload all ids; HouseholdCarousel(In_StartingHouseholdId = Current.HouseholdId) | setPreloadObject; navigate with the clicked id | `match` | useLocalityHouseholdList.ts:87-90; TST Locality_Households_HouseholdList.mvc.js:402 (getCurrent of the iteration = the clicked row); BR-UBTCON-802 |
| 206 | carousel off | trigger Event_NavigateToHouseholdDetails | same | `match` | useLocalityHouseholdList.ts:92 |

### 3.6 Locality_Interchange (Locality_Details)

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 207 | GetInterchangesByLocalityId | GetInterchangeList_ByLocalityId(In_InterchangeLocalityId) | fetchInterchanges → 'Locality_Interchange/DataActionGetInterchangesByLocalityId' | `match` | hooks/useLocalityInterchange.ts:54; repository.ts:110-115 |
| 272 | server side | GetInterchangeList_ByLocalityId (Connect_Subdivision_CS) | contract handler, fictional list | `mock-only` | mocks.ts:131,75-100 |
| 208 | Directory_Interchange_StatisticsList instance | list, IsLoading = error or not fetched, ShowSubtitle; Event_NavigateToLocality | same | `match` | components/Locality_Interchange.tsx:20-26; hook :74 |
| 209 | OnReady: restored | end | return | `match` | useLocalityInterchange.ts:50 |
| 210 | OnReady: else | three "Loading" records, then refresh | loadingShown (three loadingInterchange), fetch | `match` | useLocalityInterchange.ts:51-59; localityBlocksState.ts:160-172,201-202 |
| 211 | OnAfterFetch | IconColorId, IconId = GetIconLabel_Interchange_Statistics(Name) | withStatisticIcons | `match` | localityBlocksState.ts:176-186; components/actions.ts:99-111 |
| 212 | Handler_NavigateToLocality: no access | upgrade pop-up | same | `match` | useLocalityInterchange.ts:63-66; BR-UBTCON-800 |
| 213 | access: label and navigate | GetLocalityLabel when found; Locality_Details(LocalityId, label) | same | `match` | useLocalityInterchange.ts:67-69 |

### 3.7 Locality_LocalityContacts (never rendered)

The block sits under the LaunchDarkly check of the Locality Contacts tab on DEV. On TST the tab renders `ComingSoon`
only (`Locality_Details.mvc.js:986-990`; BR-UBTCON-796, BR-UBTCON-807; `migration/knowledge/navigation.md:21`).

The board marks its only link, ContactByEmailContacts, `skip:dead` (user, 2026-10-14; `migration/board.md:55`).
React follows TST, so every row is `n/a`.

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 214 | block, input In_LocalityId, data, list, pop-ups, handlers | never rendered on TST | not built | `n/a` | migration/board.md:55; TST Locality_Details.mvc.js:986-990 |
| 215 | Get_LocalityCommunityBusinessContacts | server action | none | `n/a` | same |
| 216 | EmptyList strings | "No Locality Contacts in this locality", … | none | `n/a` | same |
| 275 | widget tree: SkeletonSection, list of CommunityBusinessCard_Content_Block, ContactPopup_ByPhone, #EmptyList | — | not built | `n/a` | same |
| 276 | OnReady | skeleton list (4 rows), refresh | not built | `n/a` | same |
| 277 | OnAfterFetch_GetLocalityBusinessContacts | IsLoading False, ListClear, ListAppendAll; disabled nodes | not built | `n/a` | same. The disabled nodes are dead in the model |
| 278 | OnClickPhoneOnClick, Handler_CallPopup_Cancel | fill CallPopupData, show; hide | not built | `n/a` | same |
| 279 | Handler_MessageOnClick, _Cancel, _Email | fill MessagePopupData; hide; navigate ContactByEmailContacts | not built | `n/a` | same. ContactByEmailContacts is skip:dead |
| 280 | OnClickBookmark | no nodes | not built | `n/a` | same |

### 3.8 Locality_OneSchoolGlobal (Locality_Details)

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 217 | Get_OneSchoolGlobal_List | Get_OneSchoolGlobalListByLocality(In_LocalityId) | fetchOneSchoolCards → 'Locality_OneSchoolGlobal/DataActionGet_OneSchoolGlobal_List' | `match` | hooks/useLocalityOneSchoolGlobal.ts:55; repository.ts:120-127 |
| 273 | server side | Get_OneSchoolGlobalListByLocality (Connect_CommunityBusiness_CS) | contract handler, fictional schools | `mock-only` | mocks.ts:134,101-118 |
| 218 | If List2.Empty: Directory_EmptyState(OneSchoolGlobal) else OneSchoolGlobal_List | IsLoading, list; Bookmark, ScrollEnding, OnClick | same; Event_OnClick_Bookmark not forwarded (the screen handler has no nodes) | `match` | components/Locality_OneSchoolGlobal.tsx:51-61 |
| 219 | OnReady: restored | end | return | `match` | useLocalityOneSchoolGlobal.ts:60 |
| 220 | OnReady: else | GetSkeletonList_UI_OneSchoolGlobal_ListCard(3); refresh | skeletonShown, refresh | `match` | useLocalityOneSchoolGlobal.ts:61-62; components/actions.ts:92-94 |
| 221 | OnAfterFetch | first time ListClear and IsLoading False; then ListAppendAll | reducer schoolsFetched | `match` | localityBlocksState.ts:251-262 |
| 222 | Handler_OnScrollEnding: fetched and Length >= Offset | StartIndex += Offset; refresh | same | `match` | useLocalityOneSchoolGlobal.ts:65-70; BR-UBTCON-806 |
| 223 | else branches | end | return | `match` | useLocalityOneSchoolGlobal.ts:67-68 |

### 3.9 Locality_Subdivisions (Locality_Details)

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 224 | Get_Subdivision_List | GetSubdivisionCardList_ByLocalityId(LocalityId) | fetchSubdivisionCards → 'Locality_Subdivisions/DataActionGet_Subdivision_List' | `match` | hooks/useLocalitySubdivisions.ts:63; repository.ts:98-107 |
| 274 | server side | GetSubdivisionCardList_ByLocalityId (Connect_Subdivision_CS) | contract handler, fictional supper meetings | `mock-only` | mocks.ts:128,52-74 |
| 225 | skeleton, empty state, list | IsLoading; Directory_EmptyState(Subdivisions) when empty and not loading; #Subdivision_List with scroll-ending | same | `match` | components/Locality_Subdivisions.tsx:36,44-55 |
| 226 | ImageCard_LazyLoading (List) with UBT_LazyImage and SupperMeeting_ImageCard_Content | Event_Click; SubdivisionId, HasErrorMessage, MaxWidth_100vw | same | `match` | Locality_Subdivisions.tsx:60-77 |
| 227 | ScreenEvent_OnReady | restored → end; else 10 skeleton cards, refresh | same | `match` | useLocalitySubdivisions.ts:68-70 |
| 228 | OnAfterFetch | IsLoading False, ListClear, ListAppendAll | reducer subdivisionsFetched | `match` | localityBlocksState.ts:110-121 |
| 229 | OnClick_NavigateToSubdivision: carousel on | preload ids; SupperMeeting_Carousel(Current.SubdivisionId) | setPreloadObject; navigate with the clicked id | `match` | useLocalitySubdivisions.ts:83-86; TST Locality_Subdivisions.mvc.js:590; BR-UBTCON-804 |
| 230 | carousel off | SupperMeeting_Details(In_SubdivsionId) | same | `match` | useLocalitySubdivisions.ts:88 |
| 231 | OnScrollEnding_RefreshSubdivisions | IsPaginated, fetched, Length >= Offset → StartIndex += 20; refresh | same; IsPaginated never True | `match` | useLocalitySubdivisions.ts:75-79; BR-UBTCON-805 |

### 3.10 StatisticsList (BrowseCountries, BrowseDirectory)

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 232 | inputs In_Statistics, In_SearchPrompt, In_IsLoading, In_ShowSubtitle; events Event_Clicked, OnParametersChangedEv; locals | — | same props | `match` | app/src/components/directory/StatisticsList/StatisticsList.tsx:15-30 |
| 233 | Input #Block_SearchInput options | IsEnabled Length > 1; SearchPrompt; Debounce 200; Rounded | same | `match` | StatisticsList.tsx:109-115; TST StatisticsList.mvc.js:260-262. No MaxLength |
| 234 | Input events | ClearString; Submit and OnChange → Handler_Search_OnChange | same | `match` | StatisticsList.tsx:116-120 |
| 235 | Action_DefineList: SearchString = "" | Local_List = In_Statistics | return inStatistics | `match` | StatisticsList.tsx:41 |
| 236 | else | accent- and case-insensitive match on Title or Subtitle | contains Title or Subtitle | `match` | StatisticsList.tsx:42-47; BR-UBTCON-789 |
| 237 | OnParametersChanged | Action_DefineList; trigger OnParametersChangedEv | effect on the four inputs, first render skipped | `match` | StatisticsList.tsx:91-98 |
| 238 | ScreenEvent_OnReady | Action_DefineList; ReactiveInstance_ForceUpdate | derived list | `match` | StatisticsList.tsx:70-71,83 |
| 239 | If empty and search: "No results found for '…'", "Try searching for a country or locality." | Neutral9 Small SemiBold; Neutral10 Small Regular | same | `match` | StatisticsList.tsx:124-143 |
| 240 | else: list of Statistics_ListItem | "list list-group list--gap-s"; country-flag; HighlightWords = If(IsLoading, "", Search); ShowSubtitle; Event_Clicked(Id) | same | `match` | StatisticsList.tsx:146-165 |

### 3.11 Statistics_Icons (Statistics_TypedItem)

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 241 | row 1 right: If SupperMeetings = "" → Localities (Error) else SupperMeetings with inline icon | — | same | `match` | app/src/components/directory/StatisticsIcons/StatisticsIcons.tsx:47,52-69; BR-UBTCON-809 |
| 242 | Members (Purple), Households (Primary), NonStandard_16 | — | same | `match` | StatisticsIcons.tsx:52-53 |
| 243 | row 2: Brothers (Boy, blue), Sisters (Girl, pink) | — | same | `match` | StatisticsIcons.tsx:71-75 |

### 3.12 Statistics_TypedItem (CountryDetails, CountryList)

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 244 | inputs; In_ImageEntityTypeId default Locality | TST default Locality (Statistics_TypedItem.mvc.js:31-32) | default "" | `partial` | app/src/components/directory/StatisticsTypedItem/StatisticsTypedItem.tsx:24-39,47-55. **F4** |
| 245 | CustomContainer card | Neutral0, padding Small, margin bottom Small, border (pack cut) | same, border Neutral4, radius Medium | `match` | StatisticsTypedItem.tsx:60-72 |
| 246 | If ImageURL <> "" or In_HasImage → UBT_LazyImage | country-flag, Small_40 x Square, Circle | same | `match` | StatisticsTypedItem.tsx:80-89; BR-UBTCON-842 |
| 247 | Name Small SemiBold + Statistics_Icons; If In_HideNavigation else ChevronRight Neutral6 | — | same | `match` | StatisticsTypedItem.tsx:93-100 |

## 4. Shared blocks and actions

- Shared client actions of UBTConnect that the flow calls: `HasAccessToRegion` (BR-UBTCON-252 to 255),
  `GetUserInformation_Wrapper`, `App_Subscription_ShowUpgradePopUp`, `GetLocalityLabel`,
  `Directory_BrowseByCountry_TooltipBuilder`, `GetFlagURLByCountryCode`, `GetLookupConcepts`,
  `StopPropagationHelper_Check`, `SetPreloadObject`, the `GetSkeleton*` actions. The rows above check each call and
  its arguments. The bodies are shared: checked in the report of App_Common. The skeleton actions of this flow
  (`pack/actions.md`) match their React copies (`browseCountriesState.ts:31-45`, `countryDetailsState.ts:25-28`,
  `components/actions.ts:52-94`).
- Blocks of other UBTConnect flows used here: `BottomBarMenu`, `CommonUI_InsideLayout` (App_Common),
  `App_NotificationIcon`, `CacheControl_UserInfo_Wrapper` (_shared), `FilterSheet` (App_CommonBlocks_Filter, _shared),
  `FeedBlock_CommunityPopulation` (Home), `HouseholdDetails_Block` (Directory_Household), `Household_Card`,
  `Directory_EmptyState`, `Directory_Interchange_StatisticsList`, `OneSchoolGlobal_List`, `SubLayout_Browse_Section`
  (_shared), `SupperMeeting_ImageCard_Content` (Directory_SupperMeetings). Their instances and arguments are rows of
  §2 and §3 (all `match`). Their internals are checked in the reports of those flows.
- Referenced library blocks (`pack/references.md` names the TST file of each). The rows check the arguments and
  events of each instance. The internals are the frozen shared library of the React app (`app/src/components/ui`,
  `app/src/lib/ubtConnectLibrary`), checked in the report of the `_shared` pack.
  - Leaflet: `LeafletMap`.
  - ConnectCorePatterns: `Statistics_ListItem`, `ImageCard_LazyLoading`.
  - UBTConnectLibrary: `Input`, `StaticInput`, `HorizontalTagList`, `SkeletonSection`, `EmptyList`, `BottomSheet`,
    `IconText`, `Icon`, `CustomText`, `CustomContainer`, `Columns_*`.
  - Layouts: `SubHeader_MainPages`, `Layout_DetailPage`, `Layout_MainPages`.
  - UBTConnect_Utils: `Timer`, `UBT_LazyImage`. NavigationHandler: `PreventBackNavigation`.
- Server and service actions that only blocks of other flows call (rows 249-260): `AddBookmark2`,
  `DeleteBookmarkByBookmarkId2`, `GetHouseholdCoordinates`, `GetHouseholdDetails`, `Household_GetMembers_Service`,
  `Get_UI_UpdateItems_UnreadCount_All` have a React call and a mock (`mock-only`). `GetNotesByItemId`,
  `GetSubdivisionLocation_BySubdivisionId`, `Get_OneSchoolGlobalDetails`, `Get_UI_MembersStatistics`,
  `Member_ContactDetails_Service`, `Get_Core_LocalityTimezone` are outside the pack boundary (`n/a`, checked in the
  reports of the flows that own the callers).
- Client variables (row 248): the eleven variables of `pack/data.md` are read and written by the shared blocks, not
  by the five screens. React holds them in `app/src/platform/session/clientVars.ts` and
  `app/src/platform/bootstrap/postLogin.ts`.

## 5. Findings

| Id | Severity | Screen / element | Finding | React location | Suggested fix |
|---|---|---|---|---|---|
| F1 | minor | Locality_Details / Placeholder_Icons (row 150) | The Explore icon renders when the header is not scrolled. TST (`Locality_Details.mvc.js:657-666`) and DEV render it when the header is scrolled. C2EnableMaps is off on TST, so the icon is hidden in both today. | app/src/pages/Locality_Details/Locality_DetailsPage.tsx:151 | `placeholderIcons={v.headerIsScrolled && mapsEnabled ? exploreIcon(b(13)) : null}` |
| F2 | minor | Locality_Households_HouseholdList / OnAfterFetch_GetLocalityHouseholds_Bookmarks (row 203) | With GetHasNewBookmarks on, React keeps the fetched IsBookmarked. TST reads GetLocal_Bookmark_C2(HouseholdId, BookmarkCategory.Household) from the device store for each row. React runs the legacy branch today by decision (row 271). | app/src/pages/Locality_Details/hooks/useLocalityHouseholdList.ts:77 | Port the C2 branch: GetLocalBookmarkByObjectId_C2 per row when the flag is on. |
| F3 | minor | BrowseDirectory / StatisticsListOnParametersChhanged (row 048) | React calls Map_InvalidateSize and Map_FitBoundsAuto. TST (`BrowseDirectory.mvc.js:1040`) calls Map_InvalidateSize only; FitBoundsAuto belongs to Action_InvalidateMapSize. | app/src/pages/BrowseDirectory/hooks/useBrowseDirectory.ts:152-158 | Call `map_InvalidateSize(localMapId.current)` only when `localMapId.current !== ''`. |
| F4 | info | Statistics_TypedItem / In_ImageEntityTypeId (row 244) | The React default is "". DEV and TST (`Statistics_TypedItem.mvc.js:31-32`) default to Connect_Entity.Locality. No caller of this flow relies on the default. | app/src/components/directory/StatisticsTypedItem/StatisticsTypedItem.tsx:47-55 | Default `inImageEntityTypeId` to `Connect_Entity.Locality`. |

Severity levels:
- **blocker**: the user cannot complete the flow
- **major**: a visible behaviour, a rule or data differs
- **minor**: a text, a style class or an edge case
- **info**: no user impact (dead code, names)

## 6. DEV vs TST differences

### 6.1 DEV model vs TST compiled code

| Element | DEV (model) | TST (compiled code) | What the React app follows | Source |
|---|---|---|---|---|
| BrowseDirectory, CountryDetails: LeafletMap MaxBoundsViscosity | 0.5 | type default (0): `maxBoundsViscosity = LongInteger.defaultValue` | TST (0) | TST BrowseDirectory.mvc.js:423; CountryDetails.mvc.js:462; rows 029, 058 |
| CountryDetails: Input #Block_SearchInput InitalString | `InitalString: SearchString` | no InitalString in the In_Options record | TST (none) | TST CountryDetails.mvc.js:668-673; row 062 |
| CountryList: GetCommunityStatistics, Get_UI_CommunityNumbers, Action_RefreshData_CommunityStatistics, the JavaScript call in ScreenEvent_OnReady, block Directory_CommunityNumbers (dead else branch) | present | absent (0 hits) | TST (none) | TST CountryList.mvc.js; rows 101, 117, 132, 270 |
| Locality_Details: Locality Contacts tab | If Connect_LaunchDarkly_PermissionCheck(MobileDirectoryLocalityContacts) with Locality_LocalityContacts and ComingSoon_V2 | `$if(true, …)` with ComingSoon only; no LaunchDarkly check, no Locality_LocalityContacts | TST (ComingSoon) | TST Locality_Details.mvc.js:986-990; row 157; BR-UBTCON-796 |
| GetSample_FilterTags: Locality Contacts tag | always appended | appended only when Connect_LaunchDarkly_PermissionCheck(mobileDirectoryLocalityContacts) has access | TST (behind the flag, off by decision Locality_Details Q2) | TST UBTConnect.controller.js:10900-10913; row 162 |
| Locality_OneSchoolGlobal: input In_LocalityTimezoneData | not in the block | block input, passed by Locality_Details from Get_LocalityDetails.UI_LocalityTimezone | TST (passed) | TST Locality_OneSchoolGlobal.mvc.js:50; Locality_Details.mvc.js:933; row 156 |

### 6.2 KB pages vs TST

| Id | KB text | DEV and TST | File |
|---|---|---|---|
| K1 | BR-UBTCON-793: "true -> BrowseDirectory(CountryCode) … false -> CountryDetails(CountryCode)"; directory-locality.md: "with the C2EnableC1DirectoryView flag, to the C1 pair" | DEV pack and TST: GetHasC1DirectoryView() true → CountryDetails, else BrowseDirectory (`Locality_Details.mvc.js:1126-1136`). React follows DEV and TST (row 165) | `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/rules/BR-UBTCON-793.md`; `ui/directory-locality.md` |
| K2 | directory-locality.md, Locality_Details Inputs: "LocalityName, CountryName, LocalityId, PreloadedLocalityLabel, UpdatedTagList" | DEV and TST inputs: LocalityId, PreloadedLocalityLabel. LocalityName and CountryName are inputs of Action_SetLocalityLabel; UpdatedTagList is the input of Handler_HorizontalTagListChanged | `ui/directory-locality.md` |

## 7. Questions for the user

None. The one `differs` row (271) cites the recorded decision of 2026-10-22; the four findings have a clear fix.

## 8. Counts

| Area | Items | match | partial | missing | differs | mock-only | n/a | unclear |
|---|---|---|---|---|---|---|---|---|
| identity | 12 | 9 | 1 | 0 | 0 | 0 | 2 | 0 |
| data | 40 | 18 | 0 | 0 | 0 | 15 | 7 | 0 |
| ui | 84 | 80 | 1 | 0 | 0 | 0 | 3 | 0 |
| actions | 125 | 117 | 2 | 0 | 0 | 0 | 6 | 0 |
| validations | 5 | 5 | 0 | 0 | 0 | 0 | 0 | 0 |
| logic | 3 | 2 | 0 | 0 | 1 | 0 | 0 | 0 |
| strings | 11 | 7 | 0 | 0 | 0 | 0 | 4 | 0 |
| **total** | 280 | 238 | 4 | 0 | 1 | 15 | 22 | 0 |

Rows 248 to 265 (flow-level data and strings) are in `checklist.json` only; §4 summarises them.
