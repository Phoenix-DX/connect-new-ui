# Evidence of flow Directory_Locality (reader, stage 1)

Reader: Sonnet agent. Source: pack (DEV model), React files, TST compiled files (tst_source.py). No verdicts.

Row counts: BrowseCountries 18, BrowseDirectory 31, CountryDetails 50, CountryList 36, Locality_Details 45, Directory_LegendBottomSheet 8, Directory_LegendBottomSheet2 1, Locality_DateTimeLabel 4, Locality_Households 3, Locality_Households_HouseholdList 10, Locality_Interchange 7, Locality_LocalityContacts 3, Locality_OneSchoolGlobal 7, Locality_Subdivisions 8, StatisticsList 9, Statistics_Icons 3, Statistics_TypedItem 4, Directory_Locality 18; total 265.

## BrowseCountries

### identity

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Locality-001 | identity | Screen, roles, URL | roles Registered, UBTOne_User; QueryString; no input parameters; no local variables; OnReady only | route /UBTConnect/BrowseCountries inputs=[] meta MEMBER_ROUTE (member, enforce) (app.md); app/src/pages/BrowseCountries/BrowseCountriesPage.tsx:15 `export default function BrowseCountries() {` | present | App meta (member, enforce) is from app.md; role names not compared here |

### data

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Locality-002 | data | GetCountriesStatistics (data action, OnDemand) -> server action Get_UI_CountryStatistics | call-server Get_UI_CountryStatistics(); assign Out_CountriesStatistics | app/src/pages/BrowseCountries/hooks/useBrowseCountries.ts:63 `const countries = await fetchBrowseCountriesStatistics();` ; app/src/api/country/repository.ts:29-31 `callAction('UBTConnect', 'BrowseCountries/DataActionGetCountriesStatistics', {})` | present (GetCountriesStatisticsDataActRec) | React calls the data action by its endpoint name; the server-action name Get_UI_CountryStatistics is not found (searched: Get_UI_CountryStatistics, app.md word match 0 hits) |
| Directory_Locality-003 | data | Mock handler of GetCountriesStatistics | server action Get_UI_CountryStatistics | app/src/pages/BrowseCountries/mocks.ts:8 `recordedHandler('UBTConnect', 'BrowseCountries/DataActionGetCountriesStatistics')` | - | Recorded fixture, 17 countries, "reviewed by the user 2026-10-15" (code comment, not evidence); scenarios real/loading/error |
| Directory_Locality-004 | data | OnAfterFetch_GetCountriesStatistics | for each row: Statistics.AvatarURL = GetFlagURLByCountryCode(CountryCode) | app/src/pages/BrowseCountries/hooks/browseCountriesState.ts:53-57 `countries.map((country) => ({ ...country, statistics: { ...country.statistics, AvatarURL: getFlagURLByCountryCode(country.countryCode) } }))` | present (GetFlagURLByCountryCode in dependency list) |  |

### ui

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Locality-005 | ui | Layout_DetailPage, Placeholder_Header_Title | text "Browse by country" | app/src/pages/BrowseCountries/BrowseCountriesPage.tsx:20-22 `<DetailLayout id="$b1" headerTitle="Browse by country" onBack={navigateBack}` | present ("Browse by country" x1) |  |
| Directory_Locality-006 | ui | Block StatisticsList instance | In_IsLoading=not IsDataFetched; In_SearchPrompt="Search "+GetLookupConcepts(True).Country.Singular; In_Statistics=ConvertList(.. {Id:CountryCode, StatisticsOptions:Statistics}); on Event_Clicked -> Handler_StatisticsList_Clicked | app/src/pages/BrowseCountries/BrowseCountriesPage.tsx:25-31 `inStatistics={toStatisticsRecords(state.countriesStatistics)} inIsLoading={!state.isDataFetched} inSearchPrompt={`Search ${getLookupConcepts(true).Country.Singular}`} onEventClicked={onStatisticsListClicked}`; app/src/pages/BrowseCountries/hooks/browseCountriesState.ts:60-61 `{ Id: country.countryCode, StatisticsOptions: country.statistics }` | present |  |
| Directory_Locality-007 | ui | Block BottomBarMenu | ActiveItem=Connect_BottomBar_Items.Directory | app/src/pages/BrowseCountries/BrowseCountriesPage.tsx:33 `<BottomBar id="$b3" activeItem={Connect_BottomBar_Items.Directory} />` | present |  |
| Directory_Locality-008 | ui | Block CommonUI_InsideLayout | no arguments | app/src/pages/BrowseCountries/BrowseCountriesPage.tsx:34 `commonUI={<CommonUiLayout id="$b4" />}` | present |  |

### actions

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Locality-009 | actions | ScreenEvent_OnReady: IsViewRestoredFromCache and IsDataFetched | if restored and IsDataFetched -> end | app/src/pages/BrowseCountries/hooks/useBrowseCountries.ts:69 `if (restored && latest.current.isDataFetched) return;` | present (wasCurrentViewRestoredFromCache x1) |  |
| Directory_Locality-010 | actions | ScreenEvent_OnReady: else branch | else call Action_RefreshData | app/src/pages/BrowseCountries/hooks/useBrowseCountries.ts:70 `await refreshData();` | present |  |
| Directory_Locality-011 | actions | Action_RefreshData | GetSkeletonList_UI_CountryStatistics(10) -> assign Out; refresh data GetCountriesStatistics | app/src/pages/BrowseCountries/hooks/useBrowseCountries.ts:61-65 `write({ type: 'refreshStarted' }); const countries = await fetchBrowseCountriesStatistics(); write({ type: 'countriesStatisticsFetched', countries });` ; app/src/pages/BrowseCountries/hooks/browseCountriesState.ts:69 `getSkeletonList_UI_CountryStatistics(10)` | present (GetSkeletonList_UI_CountryStatistics x5) | React skeleton row: Title "Australia", AvatarURL "-", five statistics (BrowseCountries state :31-45) equals GetSkeleton_UI_CountryStatistics text in the pack |
| Directory_Locality-012 | actions | Handler_StatisticsList_Clicked: condition Event_Id <> NullTextIdentifier() | true -> HasAccessToRegion; false -> end | app/src/pages/BrowseCountries/hooks/useBrowseCountries.ts:75 `if (eventId === '') return;` | present | OutSystems compares with NullTextIdentifier(); React compares with the empty text |
| Directory_Locality-013 | actions | Handler_StatisticsList_Clicked: HasAccessToRegion call | HasAccessToRegion(Target_CountryNameOrCode=Event_Id, Target_LocalityNameOrId=TextToLongInteger(Event_Id)) | app/src/pages/BrowseCountries/hooks/useBrowseCountries.ts:76 `const hasAccess = await hasAccessToRegion(textToLongInteger(eventId), eventId);` | present (HasAccessToRegion x4) | React argument order is (locality, country); body in app/src/lib/ubtConnect/actions.ts:395. React passes TextToLongInteger result as a text |
| Directory_Locality-014 | actions | Handler_StatisticsList_Clicked: HasAccess true | navigate -> BrowseDirectory(CountryCode=Event_Id), transition Inherited | app/src/pages/BrowseCountries/hooks/useBrowseCountries.ts:77-79 `navigate('/UBTConnect/BrowseDirectory', { CountryCode: eventId });` | present |  |
| Directory_Locality-015 | actions | Handler_StatisticsList_Clicked: HasAccess false | App_Subscription_ShowUpgradePopUp() | app/src/pages/BrowseCountries/hooks/useBrowseCountries.ts:81 `await showUpgradePopUp();` | present (App_Subscription_ShowUpgradePopUp x4) |  |

### validations

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Locality-016 | validations | Screen inputs and validations | no input widget, no input parameter | no input on this screen (page has StatisticsList only) | - | Search input is inside StatisticsList (see StatisticsList rows) |

### logic

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Locality-017 | logic | Exception handling of the data action | no exception handler on the screen | app/src/pages/BrowseCountries/hooks/useBrowseCountries.ts:87 `statisticsListClicked(eventId).catch(raiseToFlowHandler);` and comment :27-28 "goes to the flow handler" | - |  |

### strings

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Locality-018 | strings | Strings of BrowseCountries | "Browse by Country" (title in pack is the CountryList string); header text "Browse by country" | grep -rnF: "Browse by country" found app/src/pages/BrowseCountries/BrowseCountriesPage.tsx:22; "Search " prefix found app/src/pages/BrowseCountries/BrowseCountriesPage.tsx:29 | present |  |

## BrowseDirectory

### identity

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Locality-019 | identity | Screen, roles, input | roles Registered, UBTOne_User; QueryString; input CountryCode: Text (mandatory); locals MarkersList, Center, Local_MapId; stylesheet yes | route /UBTConnect/BrowseDirectory inputs=["CountryCode: Text"] MEMBER_ROUTE; app/src/pages/BrowseDirectory/inputs.ts:11 `return { CountryCode: params.get('CountryCode') ?? '' };` | present |  |

### data

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Locality-020 | data | GetLocalityStatistics: aggregate GetContactBaseCountryById + Get_UI_LocalityStatistics(In_CountryCode) | aggregate ContactBase_Country by Id=TextToIdentifier(CountryCode) -> CountryName; call-server Get_UI_LocalityStatistics; assign Out | app/src/pages/BrowseDirectory/hooks/useBrowseDirectory.ts:83 `const data = await fetchLocalityCardList(parameters.current.CountryCode);` ; app/src/api/locality/repository.ts:66-72 `callAction('UBTConnect', 'BrowseDirectory/DataActionGetLocalityStatistics', toLocalityCardListInputs(countryCode))` | present (data action record); aggregate not in client JS | CountryName comes back as an output of the data action; names Get_UI_LocalityStatistics and GetContactBaseCountryById not found in React (searched: Get_UI_LocalityStatistics, ContactBase) |
| Directory_Locality-021 | data | Mock handler of GetLocalityStatistics | server action Get_UI_LocalityStatistics | app/src/pages/BrowseDirectory/mocks.ts:10 `recordedHandler('UBTConnect', 'BrowseDirectory/DataActionGetLocalityStatistics', { matchInputs: false })` | - | One recording (Argentina, three localities) served for every CountryCode |
| Directory_Locality-022 | data | OnAfterFetch_GetLocalityStatistics: Center | ListClear(Center); append Latitude and Longitude of Current | app/src/pages/BrowseDirectory/hooks/browseDirectoryState.ts:110-119 `Center: [current?.latitude ?? 0, current?.longitude ?? 0], MarkersList: [...state.MarkersList, ...localities.map(toMarker)]` | present | Current outside a loop = first row (React comment :110-112). React appends to MarkersList and does not clear it first (pack BrowseDirectory has no ListClear of MarkersList; CountryDetails pack has it) |
| Directory_Locality-023 | data | OnAfterFetch_GetLocalityStatistics: marker per row | ConvertRecord -> Marker.Id=LocalityId, Type=Locality, ExtraData=Statistics.Title, Options Icon Pin_Member.svg iconSize [20,24] iconAnchor [10,24] popupAnchor [0,-24]; Latlng lat,long; append to MarkersList | app/src/pages/BrowseDirectory/hooks/browseDirectoryState.ts:72-88 `Marker: { Id: l.localityId, Type: Connect_Entity.Locality, ExtraData: l.statistics.Title ?? '', Latlng: [l.latitude, l.longitude], Options: { Icon: { iconUrl: '/UBTConnect/img/UBTConnectLibrary.Pin_Member.svg', iconSize: [20, 24],` | present | React sets Popup Content "Dummy" (:87); TST file also has "Dummy" x1 |
| Directory_Locality-024 | data | OnAfterFetch: JavaScript GetCallback | $parameters.Object = $actions.Handler_StatisticsList_Clicked (result not used) | app/src/pages/BrowseDirectory/hooks/browseDirectoryState.ts:111-112 comment "The result of the GetCallback JavaScript node is not used." | - | No code in React for this node; a comment states it is not used |

### ui

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Locality-025 | ui | Layout_DetailPage title | expr If(CountryName = "", "Browse Directory", CountryName) | app/src/pages/BrowseDirectory/BrowseDirectoryPage.tsx:91 `headerTitle={<span data-expression="">{state.countryName === '' ? 'Browse Directory' : state.countryName}</span>}` | present ("Browse Directory" x1) |  |
| Directory_Locality-026 | ui | Top section container onclick | container on click -> Handler_BrowseCountries; CustomContainer Neutral0, padding Base | app/src/pages/BrowseDirectory/BrowseDirectoryPage.tsx:30-33,96-97 `TOP_CONTAINER` ; `<div data-container="" style={{ cursor: 'pointer' }} onClick={onBrowseCountries}>` | present |  |
| Directory_Locality-027 | ui | Top section Columns_Two / IconText / Icons | Columns_Two ReduceLast, class margin-left-base; IconText "Select another country to view" spacing Base, Icon BookClosed; Right Icon ChevronRight | app/src/pages/BrowseDirectory/BrowseDirectoryPage.tsx:98-108 `<IconText id="$b5" text="Select another country to view" spacingSize={UBT_Size.Base}><Icon id="$b6" inIconId={UBTConnect_Icons2.BookClosed} />` ; `right={<Icon id="$b7" inIconId={UBT_Icons2.ChevronRight} />}` | present ("Select another country to view" x1) |  |
| Directory_Locality-028 | ui | If not Center.Empty: LeafletMap vs SkeletonSection | true -> LeafletMap #LeafletMap; else SkeletonSection In_IsLoading=True with container leaflet-container | app/src/pages/BrowseDirectory/BrowseDirectoryPage.tsx:114-130 `{state.Center.length !== 0 ? (<DirectoryMap id="LeafletMap"` ... `<Skeleton id="$b9" isLoading><div className="leaflet-container" data-container="" />` | present |  |
| Directory_Locality-029 | ui | LeafletMap MapOptions | Center, Zoom 5, MinZoom 2, MaxZoom 20, MaxBounds 100/-100/190/-190, AttributionControl False, MaxBoundsViscosity 0.5 | app/src/pages/BrowseDirectory/BrowseDirectoryPage.tsx:57-65 `Zoom: 5, MinZoom: 2, MaxZoom: 20, MaxBounds: { Max_Lat: 100, Min_Lat: -100, Max_Long: 190, Min_Long: -190 }, AttributionControl: false, MaxBoundsViscosity: 0,` | present: Zoom 5, MinZoom 2, MaxZoom 20, bounds 100/-100/190/-190, AttributionControl false; maxBoundsViscosity = LongInteger.defaultValue (BrowseDirectory TST :423) | DEV pack says 0.5; TST compiled value is the type default (0); React is 0 |
| Directory_Locality-030 | ui | LeafletMap TileLayer | Url "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", MinZoom 2, MaxZoom 20, Subdomains a-d; useClustering True | app/src/pages/BrowseDirectory/BrowseDirectoryPage.tsx:38-41 `Url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', Options: { MinZoom: 2, MaxZoom: 20, Subdomains: ['a', 'b', 'c', 'd'] }` ; :119 `useClustering` | present (TST :390 same URL) |  |
| Directory_Locality-031 | ui | LeafletMap ZoomControlOptions | position bottomright; titles "Zoom in"/"Zoom out"; classes ubt-icon + Add/Remove + GetClass_Color(Neutral8); MyLocation button title "Your location", class Primary; isAddGoToMyLocationButton False (TST); useCustomZoomControl | app/src/pages/BrowseDirectory/BrowseDirectoryPage.tsx:44-54 `zoomInClass: `ubt-icon ${UBT_Icons2_Add} ${getClass_Color(UBT_Color.Neutral8)}`` ... `isAddGoToMyLocationButton: false, ... MyLocationButtonTitle: 'Your location', useCustomZoomControl: true` | present (isAddGoToMyLocationButtonAttr = false) | The pack text for this argument is cut ("ubt-icon…"); the rest was compared with React only |
| Directory_Locality-032 | ui | LeafletMap events | OnInitialized -> Handler_LeafletMapOnInitialized(MapId); OnMarker_Clicked -> Handler_LeafletMapOnMarker_Clicked(7 args); SetCallbacks -> LeafletMapSetCallbacks(MapId) | app/src/pages/BrowseDirectory/BrowseDirectoryPage.tsx:122-124 `onOnInitialized={onMapInitialized} onSetCallbacks={onSetCallbacks} onOnMarkerClicked={onMarkerClicked}` | present (Handler_LeafletMapOnInitialized x7, LeafletMapSetCallbacks x9) |  |
| Directory_Locality-033 | ui | Block StatisticsList instance | In_IsLoading=not IsDataFetched; In_SearchPrompt="Search "+Locality.Singular; In_ShowSubtitle=True; In_Statistics=ConvertList {Id:LocalityId, StatisticsOptions:Statistics}; Event_Clicked; OnParametersChangedEv | app/src/pages/BrowseDirectory/BrowseDirectoryPage.tsx:132-140 `inSearchPrompt={`Search ${getLookupConcepts(true).Locality.Singular}`} inShowSubtitle inIsLoading={!state.isDataFetched} inStatistics={state.localities.map((l) => ({ Id: l.localityId, StatisticsOptions: l.statistics }))}` | present |  |
| Directory_Locality-034 | ui | BottomBarMenu / CommonUI_InsideLayout / CustomContainer around list | BottomBarMenu Directory; CommonUI_InsideLayout; CustomContainer Neutral0 | app/src/pages/BrowseDirectory/BrowseDirectoryPage.tsx:131,146-147 `LIST_CONTAINER` ; `<BottomBar id="$b12" activeItem={Connect_BottomBar_Items.Directory} />` ; `<CommonUiLayout id="$b13" />` | present |  |

### actions

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Locality-035 | actions | Action_InvalidateMapSize: Local_MapId <> "" | true: Map_InvalidateSize then Map_FitBoundsAuto; false: end | app/src/pages/BrowseDirectory/hooks/useBrowseDirectory.ts:95-99 `if (localMapId.current === '') return; map_InvalidateSize(localMapId.current); map_FitBoundsAuto(localMapId.current);` | present (Map_FitBoundsAuto x4) |  |
| Directory_Locality-036 | actions | Action_RefreshData | GetSkeletonList_UI_LocalityStatistics(10); assign; refresh GetLocalityStatistics | app/src/pages/BrowseDirectory/hooks/useBrowseDirectory.ts:81-85 `write({ type: 'refreshStarted' }); const data = await fetchLocalityCardList(...); write({ type: 'localityStatisticsFetched', data });` | present |  |
| Directory_Locality-037 | actions | Handler_BrowseCountries | navigate -> BrowseCountries(), Inherited | app/src/pages/BrowseDirectory/hooks/useBrowseDirectory.ts:123-125 `navigate('/UBTConnect/BrowseCountries', {});` | present |  |
| Directory_Locality-038 | actions | Handler_LeafletMapOnInitialized | Local_MapId = MapId; JavaScript setTimeout(Action_InvalidateMapSize, 0) | app/src/pages/BrowseDirectory/hooks/useBrowseDirectory.ts:127-135 `localMapId.current = mapId; setTimeout(() => { try { invalidateMapSize(); } catch (error) { raiseToFlowHandler(error); } }, 0);` | present |  |
| Directory_Locality-039 | actions | Handler_LeafletMapOnMarker_Clicked | Map_Marker_OpenPopUp(MarkerObj) | app/src/pages/BrowseDirectory/hooks/useBrowseDirectory.ts:146-148 `map_Marker_OpenPopUp(args[6]);` | present |  |
| Directory_Locality-040 | actions | LeafletMapSetCallbacks | JS PopupBindingCallback = function(marker) { Directory_BrowseByCountry_TooltipBuilder(marker, Handler_StatisticsList_Clicked).Object }; Map_SetPopupBindingCallback | app/src/pages/BrowseDirectory/hooks/useBrowseDirectory.ts:138-144 `map_SetPopupBindingCallback(mapId, (marker) => directory_BrowseByCountry_TooltipBuilder(marker, (id) => { clickedRef.current(id).catch(raiseToFlowHandler); }))` | present (Directory_BrowseByCountry_TooltipBuilder x5) |  |
| Directory_Locality-041 | actions | Handler_StatisticsList_Clicked: Event_Id <> NullTextIdentifier() | false -> end | app/src/pages/BrowseDirectory/hooks/useBrowseDirectory.ts:104 `if (eventId === '') return;` | present |  |
| Directory_Locality-042 | actions | Handler_StatisticsList_Clicked: HasAccessToRegion | HasAccessToRegion(Target_CountryNameOrCode=CountryCode, Target_LocalityNameOrId=TextToLongInteger(Event_Id)) | app/src/pages/BrowseDirectory/hooks/useBrowseDirectory.ts:105 `await hasAccessToRegion(asLongText(eventId), parameters.current.CountryCode);` | present: hasAccessToRegion(LongIntegerToText(TextToLongInteger(Event_Id)), CountryCode) (TST :1138) |  |
| Directory_Locality-043 | actions | Handler_StatisticsList_Clicked: no access | App_Subscription_ShowUpgradePopUp() | app/src/pages/BrowseDirectory/hooks/useBrowseDirectory.ts:106-109 `if (!hasAccess) { await showUpgradePopUp(); return; }` | present |  |
| Directory_Locality-044 | actions | Handler_StatisticsList_Clicked: ListIndexOf <> -1 | LocalityLabel = GetLocalityLabel(Name at position, CountryName) | app/src/pages/BrowseDirectory/hooks/browseDirectoryState.ts:96-99 `const row = state.localities.find((l) => l.localityId === localityId); return row ? getLocalityLabel(row.name, state.countryName) : '';` | present (GetLocalityLabel x4) |  |
| Directory_Locality-045 | actions | Handler_StatisticsList_Clicked: ListIndexOf = -1 | skip assign, continue to navigate (LocalityLabel stays "") | app/src/pages/BrowseDirectory/hooks/browseDirectoryState.ts:94-95 comment "when no row has it (-1), the label stays ''" ; app/src/pages/BrowseDirectory/hooks/useBrowseDirectory.ts:110-113 | present |  |
| Directory_Locality-046 | actions | Handler_StatisticsList_Clicked: navigate | navigate -> Locality_Details(LocalityId=TextToLongInteger(Event_Id), PreloadedLocalityLabel=LocalityLabel), Inherited | app/src/pages/BrowseDirectory/hooks/useBrowseDirectory.ts:110-113 `navigate('/UBTConnect/Locality_Details', { LocalityId: asLongText(eventId), PreloadedLocalityLabel: localityLabelOf(latest.current, eventId) });` | present |  |
| Directory_Locality-047 | actions | ScreenEvent_OnReady | restored and IsDataFetched -> end; else Action_RefreshData | app/src/pages/BrowseDirectory/hooks/useBrowseDirectory.ts:89-92 `if (restored && latest.current.isDataFetched) return; await refreshData();` | present |  |
| Directory_Locality-048 | actions | StatisticsListOnParametersChhanged | Local_MapId <> "" -> Map_InvalidateSize; else end | app/src/pages/BrowseDirectory/hooks/useBrowseDirectory.ts:152-158 `onStatisticsListParametersChanged: () => { try { invalidateMapSize(); }` | present (StatisticsListOnParametersChhanged x2) | React calls invalidateMapSize (Map_InvalidateSize AND Map_FitBoundsAuto), the pack action calls Map_InvalidateSize only; judge decides |

### strings

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Locality-049 | strings | Strings of BrowseDirectory | "Browse Directory", "Select another country to view", "Zoom in", "Zoom out", "Your location", Pin_Member icon JSON | all found in app/src/pages/BrowseDirectory/BrowseDirectoryPage.tsx / app/src/pages/BrowseDirectory/hooks/browseDirectoryState.ts (see strings row of the flow) | present |  |

## CountryDetails

### identity

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Locality-050 | identity | Screen, roles, input, locals | roles Registered, UBTOne_User; input CountryCode: Text (mandatory); 11 locals; OnInitialize, OnReady | route /UBTConnect/CountryDetails inputs=["CountryCode: Text"]; app/src/pages/CountryDetails/inputs.ts:13 `return { CountryCode: params.get('CountryCode') ?? '' };` ; app/src/pages/CountryDetails/hooks/useCountryDetails.ts:84-89 `useViewState('CountryCode', inputCountryCode)` ... `useViewState('SearchString', '')` | present | Locals MarkersList/Center/Local_MapId/Local_List/BottomSheetId* map to refs and state in useCountryDetails (:92-97) |

### data

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Locality-051 | data | GetLocalityStatistics (aggregate CountryName + Get_UI_LocalityStatistics) | same as BrowseDirectory | app/src/pages/CountryDetails/hooks/useCountryDetails.ts:110 `useCountryLocalityStatisticsQuery(countryCode, () => ({ ...fetchVariables.current, localMapId: localMapId.current }))` ; app/src/api/country/repository.ts:44-49 `callAction('UBTConnect', 'CountryDetails/DataActionGetLocalityStatistics', inputs)` | present | Names Get_UI_LocalityStatistics / ContactBase not found in React |
| Directory_Locality-052 | data | Mock handler of GetLocalityStatistics | server action Get_UI_LocalityStatistics | app/src/pages/CountryDetails/mocks.ts:10 `recordedHandler('UBTConnect', 'CountryDetails/DataActionGetLocalityStatistics')` | - | One recording (AR); other countries get the AR data with a console warning (code comment Q1) |
| Directory_Locality-053 | data | OnAfterFetch_GetLocalityStatistics: Center, MarkersList, Action_DefineList | Center = Current lat/long; ListClear(MarkersList); one marker per row; Action_DefineList (pack tail was cut at 29k, see note) | app/src/pages/CountryDetails/hooks/useCountryDetails.ts:122-135 `const firstLat = fetched ? (fetched.localities[0]?.latitude ?? 0) : null; ... const markersList = useMemo(() => (fetched ? fetched.localities.map(toMarker) : []), [fetched]);` ; app/src/pages/CountryDetails/hooks/countryDetailsState.ts:45-61 toMarker | present | Pack text of OnAfterFetch start was read only from the first lines; React derives from the query result so MarkersList is rebuilt, not appended |

### ui

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Locality-054 | ui | Title expr | If(CountryName = "", "Browse Directory", CountryName) | app/src/pages/CountryDetails/CountryDetailsPage.tsx:51 `{countryName === '' ? 'Browse Directory' : countryName}` | present |  |
| Directory_Locality-055 | ui | Placeholder_Header_Right: If False #HidingForNow -> FilterSheet_Icon | [DEAD BRANCH] constant False; block FilterSheet_Icon (BottomSheetId, HaveFiltersApplied, isLoaded, ShowSubscriptionOnClick) | not found (searched: FilterSheet_Icon, HidingForNow in app/src/pages/CountryDetails/CountryDetailsPage.tsx and app/src/pages/CountryDetails/components/CountryDetailsContent.tsx) | present (HidingForNow x1) | Dead branch: never rendered |
| Directory_Locality-056 | ui | Top section: container onclick, IconText, Icons | onclick -> Handler_BrowseCountries; IconText "Select another country to view" SemiBold, Icon LocationOn Neutral7; right ChevronRight | app/src/pages/CountryDetails/components/CountryDetailsContent.tsx:131-147 `onClick={onSelectCountryClicked}` ... `<IconText id="$b5" spacingSize={UBT_Size.Base} text="Select another country to view" textOptions={{ FontWeight: UBT_FontWeight.SemiBold }}><Icon id="$b6" inColorId={UBT_Color.Neutral7} inIconId={UBT_Icons2.LocationOn} />` | present |  |
| Directory_Locality-057 | ui | If not Center.Empty and (IsDataFetched or HasFetchError): LeafletMap else SkeletonSection | map when Center set and answered or failed | app/src/pages/CountryDetails/components/CountryDetailsContent.tsx:153,168-171 `{mapOptions !== null && isLoaded ? (<DirectoryMap id="LeafletMap"` ... `<Skeleton id="$b9" isLoading><div className="leaflet-container" data-container="" />` | present |  |
| Directory_Locality-058 | ui | LeafletMap MapOptions | Zoom 5, MinZoom 2, MaxZoom 20, MaxBounds 100/-100/190/-190, AttributionControl False, MaxBoundsViscosity 0.5 (DEV) | app/src/pages/CountryDetails/hooks/countryDetailsState.ts:64-72 `Zoom: 5, MinZoom: 2, MaxZoom: 20, MaxBounds: {...}, AttributionControl: false, MaxBoundsViscosity: 0,` | present; maxBoundsViscosity = default (TST :462) | DEV pack 0.5; TST type default |
| Directory_Locality-059 | ui | LeafletMap TileLayer | Url "https://server.arcgisonline.com/.../World_Street_Map/MapServer/tile/{z}/{y}/{x}"//"cartocdn..." (DEV text has a comment after the first URL) | app/src/pages/CountryDetails/components/CountryDetailsContent.tsx:66-69 `Url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'` | present (TST :431 arcgisonline URL) |  |
| Directory_Locality-060 | ui | LeafletMap ZoomControlOptions | titles Zoom in/out; classes use GetClass_Color(Primary); MyLocation title "Your location" | app/src/pages/CountryDetails/components/CountryDetailsContent.tsx:72-82 `zoomInClass: `ubt-icon ${UBT_Icons2.Add} ${getClass_Color(UBT_Color.Primary)}`` | present (isAddGoToMyLocationButtonAttr = false) |  |
| Directory_Locality-061 | ui | LeafletMap events | OnParametersChanged -> LeafletMapOnParametersChanged; SetCallbacks; OnInitialized; OnMarker_Clicked | app/src/pages/CountryDetails/components/CountryDetailsContent.tsx:161-166 `onOnMarkerClicked={...onMarkerClicked(markerObj)} onSetCallbacks={onMapSetCallbacks} onOnInitialized={onMapInitialized} onOnParametersChanged={onMapParametersChanged}` | present (LeafletMapOnParametersChanged x2) |  |
| Directory_Locality-064 | ui | Legend: title "Browse by Locality", info Icon with OnClick_LegendInfo | CustomText Neutral10 Base SemiBold; Icon Info Primary size NonStandard_16, Click -> OnClick_LegendInfo | app/src/pages/CountryDetails/components/CountryDetailsContent.tsx:198-217 `inText="Browse by Locality"` ... `inIconId={UBT_Icons2.Info} inSizeId={UBT_IconSize.NonStandard_16} onClick={onLegendInfoClicked}` | present ("Browse by Locality" x1) |  |
| Directory_Locality-065 | ui | LocalityCount text | Length + If(Length = 1, " Locality", " Localities"); Skeleton In_IsLoading=not (IsDataFetched or HasFetchError); Neutral7 Small Regular | app/src/pages/CountryDetails/components/CountryDetailsContent.tsx:221-231 `inText={`${localityCount}${localityCount === 1 ? ' Locality' : ' Localities'}`}` | present | Counts the skeleton rows too (10) after a failed fetch (code comment in hook :116-117) |
| Directory_Locality-066 | ui | #isLoading: three Statistics_TypedItem skeletons | If not (fetched or error): SkeletonSection with three Statistics_TypedItem (HasImage True, ImageEntityTypeId SupperMeetings, texts 111/11/11/11/123, Name "Loading Name") | app/src/pages/CountryDetails/components/CountryDetailsContent.tsx:236-248 `{('$b21', '$b22', '$b23').map(... <StatisticsTypedItem ... inHasImage uICountryStatistics={LOADING_STATISTICS}` ; :93-96 `Name: 'Loading Name'` | present |  |
| Directory_Locality-067 | ui | If Local_List.Empty and SearchString <> "": EmptyList | EmptyList IconId Search; title "No results found for '"+SearchString+"'"; text "Sorry, we couldn't find any results for your search. Please check your spelling or try different keywords." | app/src/pages/CountryDetails/components/CountryDetailsContent.tsx:249-253 `<NotCaptured name="ConnectPatterns.EmptyList $b24 (IconId search; not rendered in any captured state)">{`No results found for '${searchString}'`} Sorry, we couldn&apos;t find any results...` | present ("No results found for" x1) | React wraps it in NotCaptured (not a captured state); text is in JSX with &apos; |
| Directory_Locality-068 | ui | List of Local_List: container onclick + Statistics_TypedItem | list Default, class "list list-group"; container onclick -> Handler_StatisticsList_Clicked(LocalityId); Statistics_TypedItem In_HasImage True, In_ImageEntityId=MainHallSubdivisionId, In_ImageEntityTypeId=SupperMeetings, ConvertRecord {UI_StatisticsTexts:UI_TypedStatisticsTexts, Name} | app/src/pages/CountryDetails/components/CountryDetailsContent.tsx:255-277 `className="list list-group"` ... `onLocalityClicked(item.localityId)` ... `inImageEntityId={imageEntityIdOf(item, searchString, localities)}` | present |  |
| Directory_Locality-069 | ui | FilterSheet (else branch of If False #HideInServiceStudio_BottomSheet) | FilterSheet ExtendedClasses "bottom-sheet-higher-z-index"; In_Options HasCountries {Enable True, Order 1, AddAllOptions False}; In_StartFilter CountryIds [OriginalCountryCode]; events Loaded, SheetInitialized, ApplyFilters | app/src/pages/CountryDetails/CountryDetailsPage.tsx:15,73-83 `FILTER_OPTIONS = { HasCountries: { Enable: true, Order: 1, AddAllOptions: false } }` ; `<FilterSheetContainer ... extendedClasses="bottom-sheet-higher-z-index" inStartFilter={startFilter} inOptions={FILTER_OPTIONS}` | present (HideInServiceStudio_BottomSheet x1) | Constant If: else branch always runs |
| Directory_Locality-070 | ui | Directory_LegendBottomSheet instance | ShowLocalities=False; on SheetInitialized -> Directory_LegendBottomSheetSheetInitialized | app/src/pages/CountryDetails/CountryDetailsPage.tsx:84-89 `<DirectoryLegendSheet id="$b29" showLocalities={false} onSheetInitialized={onLegendSheetInitialized}` | present (HideInServiceStudio_LegendBottomSheet x1) |  |
| Directory_Locality-071 | ui | BottomBarMenu / CommonUI_InsideLayout | Directory active | app/src/pages/CountryDetails/CountryDetailsPage.tsx:70-71 `<BottomBar id="$b26" activeItem=... Directory />` `<CommonUiLayout id="$b27" />` | present |  |

### actions

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Locality-072 | actions | Action_DefineList: SearchString = "" | Local_List = Out_LocalitiesStatistics | app/src/pages/CountryDetails/hooks/countryDetailsState.ts:33 `if (searchString === '') return out;` | present (Action_DefineList x5) |  |
| Directory_Locality-073 | actions | Action_DefineList: SearchString <> "" | ListFilter Index(RemoveAccents(Name), RemoveAccents(SearchString), ignoreCase True) <> -1 | app/src/pages/CountryDetails/hooks/countryDetailsState.ts:34-35 `out.filter((p) => jSUtils_String_RemoveAccents(p.name).toLowerCase().includes(search))` | present |  |
| Directory_Locality-074 | actions | Action_InvalidateMapSize | Local_MapId <> "" -> Map_InvalidateSize + Map_FitBoundsAuto; else end | app/src/pages/CountryDetails/hooks/useCountryDetails.ts:163-172 `if (localMapId.current !== '') { map_InvalidateSize(localMapId.current); map_FitBoundsAuto(localMapId.current); }` | present |  |
| Directory_Locality-075 | actions | Action_ManuallyOpenFilterSheet: BottomSheetId_IsLoaded false | end | app/src/pages/CountryDetails/hooks/useCountryDetails.ts:176 `if (!bottomSheetIsLoaded.current) return;` | present (Action_ManuallyOpenFilterSheet x3) |  |
| Directory_Locality-076 | actions | Action_ManuallyOpenFilterSheet: IsLoaded and ShowSubscription | App_Subscription_ShowUpgradePopUp() | app/src/pages/CountryDetails/hooks/useCountryDetails.ts:177 `if (bottomSheetShowSubscription.current) await showUpgradePopUp();` | present |  |
| Directory_Locality-077 | actions | Action_ManuallyOpenFilterSheet: IsLoaded, no subscription popup | BottomSheetOpen(Filter_BottomSheetId) | app/src/pages/CountryDetails/hooks/useCountryDetails.ts:178 `else bottomSheetOpen(filterBottomSheetId.current);` | present |  |
| Directory_Locality-078 | actions | Action_RefreshData | GetSkeletonList_UI_LocalityStatistics(10) -> Out; refresh GetLocalityStatistics | app/src/pages/CountryDetails/hooks/useCountryDetails.ts:116-119 `const skeletonOut = useMemo(() => getSkeletonList_UI_LocalityStatistics(10), []);` ; query on mount (:108-110) | present | React: a TanStack query that fetches on mount; no explicit Action_RefreshData; restored view skips fetch (comment :108-109) |
| Directory_Locality-079 | actions | Directory_LegendBottomSheetSheetInitialized | BottomSheetId = SheetId | app/src/pages/CountryDetails/hooks/useCountryDetails.ts:237-239 `onLegendSheetInitialized: (id) => { bottomSheetId.current = id; }` | present |  |
| Directory_Locality-080 | actions | Handler_BrowseCountries | call Action_ManuallyOpenFilterSheet (opens the FilterSheet, not BrowseCountries) | app/src/pages/CountryDetails/hooks/useCountryDetails.ts:207-209 `onSelectCountryClicked: () => { handler_BrowseCountries().catch(raiseToFlowHandler); }` | present |  |
| Directory_Locality-081 | actions | Handler_FilterSheetApplyFilters: OptionList empty or None | CountryCode = OriginalCountryCode; HasFiltersApplied = hasFitlerApplied; refresh GetLocalityStatistics | app/src/pages/CountryDetails/hooks/countryDetailsState.ts:82-86 `selectedIds.length === 0 \|\| first === Choice.None ? originalCountryCode : first` ; app/src/pages/CountryDetails/hooks/useCountryDetails.ts:182-187 | present (Handler_FilterSheetApplyFilters x4) | React refetches when the code is unchanged, else sets CountryCode (the query key changes) |
| Directory_Locality-082 | actions | Handler_FilterSheetApplyFilters: other selection | CountryCode = SelectedIds.Current; continue to HasFiltersApplied + refresh | app/src/pages/CountryDetails/hooks/useCountryDetails.ts:183-187 `const next = appliedCountryCode(optionLists, originalCountryCode); setHasFiltersApplied(hasFilterApplied); ... else setCountryCode(next);` | present |  |
| Directory_Locality-083 | actions | Handler_FilterSheetLoaded | BottomSheetId_IsLoaded = True; BottomSheetId_ShowSubscription = ShowSubscriptionOnClick | app/src/pages/CountryDetails/hooks/useCountryDetails.ts:229-232 `bottomSheetIsLoaded.current = true; bottomSheetShowSubscription.current = showSubscriptionOnClick;` | present |  |
| Directory_Locality-084 | actions | Handler_FilterSheetSheetInitialized | Filter_BottomSheetId = SheetId | app/src/pages/CountryDetails/hooks/useCountryDetails.ts:233-235 `filterBottomSheetId.current = id;` | present |  |
| Directory_Locality-085 | actions | Handler_LeafletMapOnInitialized | Local_MapId = MapId; setTimeout(Action_InvalidateMapSize, 0) | app/src/pages/CountryDetails/hooks/useCountryDetails.ts:218-222 `localMapId.current = mapId; setTimeout(action_InvalidateMapSize, 0);` | present |  |
| Directory_Locality-086 | actions | Handler_LeafletMapOnMarker_Clicked | Map_Marker_OpenPopUp(MarkerObj) | app/src/pages/CountryDetails/hooks/useCountryDetails.ts:210-212 `map_Marker_OpenPopUp(markerObj);` | present |  |
| Directory_Locality-087 | actions | Handler_Search_ClearString | SearchString = ""; Action_DefineList | app/src/pages/CountryDetails/components/CountryDetailsContent.tsx:186-188 `onEventClearString={() => { onSearchChanged(''); }}` ; app/src/pages/CountryDetails/hooks/useCountryDetails.ts:191-194 | present |  |
| Directory_Locality-088 | actions | Handler_Search_OnChange | SearchString = Event_CurrentString; Action_DefineList | app/src/pages/CountryDetails/hooks/useCountryDetails.ts:191-194 `setSearchString(event_CurrentString); setSearchTouched(true);` | present |  |
| Directory_Locality-089 | actions | Handler_StatisticsList_Clicked: empty Event_Id | end | app/src/pages/CountryDetails/hooks/useCountryDetails.ts:140 `if (event_Id === '') return;` | present |  |
| Directory_Locality-090 | actions | Handler_StatisticsList_Clicked: HasAccessToRegion | HasAccessToRegion(Country=CountryCode, Locality=TextToLongInteger(Event_Id)) | app/src/pages/CountryDetails/hooks/useCountryDetails.ts:141 `await hasAccessToRegion(normalizeLongId(event_Id), countryCode);` | - | React passes the current CountryCode (changes after the filter) |
| Directory_Locality-091 | actions | Handler_StatisticsList_Clicked: no access | App_Subscription_ShowUpgradePopUp() | app/src/pages/CountryDetails/hooks/useCountryDetails.ts:142-145 `if (!hasAccess) { await showUpgradePopUp(); return; }` | - |  |
| Directory_Locality-092 | actions | Handler_StatisticsList_Clicked: ListIndexOf <> -1 / = -1, navigate | LocalityLabel = GetLocalityLabel(Name, CountryName) when found; navigate Locality_Details(LocalityId, PreloadedLocalityLabel) | app/src/pages/CountryDetails/hooks/useCountryDetails.ts:146-151 `const position = out.findIndex((p) => p.localityId === event_Id); const localityLabel = position !== -1 ? getLocalityLabel(out[position]?.name ?? '', countryName) : ''; navigate('/UBTConnect/Locality_Details', {...})` | - |  |
| Directory_Locality-093 | actions | LeafletMapOnParametersChanged | call Action_InvalidateMapSize | app/src/pages/CountryDetails/hooks/useCountryDetails.ts:223 `onMapParametersChanged: action_InvalidateMapSize,` | present |  |
| Directory_Locality-094 | actions | LeafletMapSetCallbacks | PopupBindingCallback via Directory_BrowseByCountry_TooltipBuilder(marker, Handler_StatisticsList_Clicked) | app/src/pages/CountryDetails/hooks/useCountryDetails.ts:213-217 `map_SetPopupBindingCallback(mapId, (marker) => directory_BrowseByCountry_TooltipBuilder(marker, statisticsListClicked))` | present |  |
| Directory_Locality-095 | actions | OnClick_LegendInfo | BottomSheetOpen(BottomSheetId) | app/src/pages/CountryDetails/hooks/useCountryDetails.ts:225-227 `bottomSheetOpen(bottomSheetId.current);` | present (OnClick_LegendInfo x2) |  |
| Directory_Locality-096 | actions | ScreenEvent_OnInitialize | OriginalCountryCode = CountryCode | app/src/pages/CountryDetails/hooks/useCountryDetails.ts:85 `const [originalCountryCode] = useViewState('OriginalCountryCode', countryCode);` | - |  |
| Directory_Locality-097 | actions | ScreenEvent_OnReady | restored and IsDataFetched -> end; else Action_RefreshData | app/src/pages/CountryDetails/hooks/useCountryDetails.ts:108-110 comment + query on mount | present | See Action_RefreshData row |
| Directory_Locality-098 | actions | StatisticsListOnParametersChanged | Local_MapId <> "" -> Map_InvalidateSize (no widget uses it on this screen) | not found (searched: StatisticsListOnParametersChanged, onStatisticsListParametersChanged in app/src/pages/CountryDetails/hooks/useCountryDetails.ts) | - | The CountryDetails widget tree has no StatisticsList; the action is not wired in the pack |

### validations

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Locality-062 | validations | Input #Block_SearchInput constraints | In_Options IsEnabled = Out_LocalitiesStatistics.Length > 1; InitalString=SearchString; SearchPrompt "Search locality"; Debounce_DelayMS 200; BorderRadius Rounded | app/src/pages/CountryDetails/components/CountryDetailsContent.tsx:85-90 `IsEnabled: count > 1, SearchPrompt: 'Search locality', Debounce_DelayMS: 200, BorderRadius: Shape.Rounded` ; :181-183 `<Input id="Block_SearchInput" inOptions={searchOptions(localityCount)}` | IsEnabled=(out_LocalitiesStatisticsOut.length > 1), searchPrompt="Search locality", Debounce_DelayMS=200 (TST :669-671) | InitalString: React passes no InitalString (searched: InitalString, initialString in app/src/pages/CountryDetails/components/CountryDetailsContent.tsx); TST InitalString not looked at; no MaxLength found in either list |
| Directory_Locality-063 | validations | Input events | Event_Submit -> Handler_Search_OnChange(SubmittedString); Event_OnChange -> Handler_Search_OnChange; Event_ClearString -> Handler_Search_ClearString | app/src/pages/CountryDetails/components/CountryDetailsContent.tsx:184-188 `onEventSubmit={onSearchChanged} onEventOnChange={onSearchChanged} onEventClearString={() => { onSearchChanged(''); }}` | present (Handler_Search_ClearString x2) |  |

### strings

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Locality-099 | strings | Strings of CountryDetails | "Browse Directory", "Select another country to view", "Search locality", "Browse by Locality", "Loading Name", "No results found for '", "Sorry, we couldn't find ..." | found in app/src/pages/CountryDetails/components/CountryDetailsContent.tsx except the "Sorry..." text, which React has with &apos; (CDC:251-252, line wrapped) | present |  |

## CountryList

### identity

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Locality-100 | identity | Screen, roles | roles Registered, UBTOne_User; no input; locals LocalCacheControl_UserInformation, BottomSheetId, SkeletonCommunityStatistics | route /UBTConnect/CountryList inputs=[] MEMBER_ROUTE; app/src/pages/CountryList/CountryListPage.tsx:20 `export default function CountryList() {` | present |  |

### data

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Locality-101 | data | GetCommunityStatistics (Get_UI_CommunityNumbers) | call-server Get_UI_CommunityNumbers(); assign Out_CommunityStatistics | not found (searched: GetCommunityStatistics, Get_UI_CommunityNumbers, CommunityNumbers in app/src; app.md word match 0 hits) | absent (GetCommunityStatistics x0, Directory_CommunityNumbers x0, Action_RefreshData_CommunityStatistics x0) | Pack element is absent on TST |
| Directory_Locality-102 | data | GetCountriesStatistics (Get_UI_CountryStatistics) | call-server Get_UI_CountryStatistics; assign Out | app/src/pages/CountryList/hooks/useCountryList.ts:95 `rows = await fetchCountryListStatistics();` ; app/src/api/country/repository.ts:35-37 `callAction('UBTConnect', 'CountryList/DataActionGetCountriesStatistics', {})` | present | Server-action name not found in React |
| Directory_Locality-103 | data | Mock handler of GetCountriesStatistics | server action Get_UI_CountryStatistics | app/src/pages/CountryList/mocks.ts:8 `recordedHandler('UBTConnect', 'CountryList/DataActionGetCountriesStatistics')` | - | 17 countries recording |
| Directory_Locality-104 | data | OnAfterFetch_GetCountriesStatistics | AvatarURL = GetFlagURLByCountryCode(CountryCode) for each row | app/src/pages/CountryList/hooks/useCountryList.ts:101-106 `countries: rows.map((c) => ({ ...c, avatarURL: getFlagURLByCountryCode(c.countryCode) })), fetchStatus: 'ok', isDataFetched: true,` | present |  |

### ui

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Locality-105 | ui | Layout_MainPages: AddHeaderGap=False, isGrayBackground, title "Directory" | args and header text | app/src/pages/CountryList/CountryListPage.tsx:38-42 `<MainLayout id="$b1" addHeaderGap={false} isGrayBackground placeholderHeaderTitle="Directory"` | present |  |
| Directory_Locality-106 | ui | App_NotificationIcon (header right) | block, no args | app/src/pages/CountryList/CountryListPage.tsx:43 `placeholderHeaderRight={<NotificationIcon id="$b2" {...notificationIcon} />}` | present |  |
| Directory_Locality-107 | ui | StaticInput prompt and click | In_Prompt "Search any member or location"; Click_Input -> StaticInputClick_Input (navigate Search) | app/src/pages/CountryList/CountryListPage.tsx:44-46 `<StaticInput id="$b3" inPrompt="Search any member or location" onClickInput={onSearchClicked} />` ; app/src/pages/CountryList/hooks/useCountryList.ts:138-140 `navigate(`/${APP_ID}/Search`);` | present ("Search any member or location" x1; StaticInputClick_Input x2) |  |
| Directory_Locality-108 | ui | SkeletonSection #HeaderLoading | In_IsLoading = not LocalCacheControl_UserInformation.isFetched | app/src/pages/CountryList/components/CountryListContent.tsx:101 `<Skeleton id="HeaderLoading" isLoading={!user.isFetched}>` | present |  |
| Directory_Locality-109 | ui | MY LOCALITY card | CustomContainer Neutral0 padding Base radius Medium, onclick OnClick_MyLocality; UBT_LazyImage (EntityId null, Locality, Base_52 x Square, Circle); texts "MY LOCALITY", Locality_Name, Locality_SubdivisionCount + If(..) | app/src/pages/CountryList/components/CountryListContent.tsx:106-123 `<CustomText id="$b9" inTextOptions={CARD_LABEL} inText="MY LOCALITY" /> ... inText={countText(user.localitySubdivisionCount, ' Supper Meeting', ' Supper Meetings')}` | present: label and count args present; the count formula has no Locality_SubdivisionCount token in the view (TST count x0) | Pack count expression is cut ("If(LocalCacheControl_..."); the singular/plural words " Supper Meeting"/" Supper Meetings" are from the pack strings; TST text not compared |
| Directory_Locality-110 | ui | MY COUNTRY card | CustomContainer onclick OnClick_MyCountry; UBT_LazyImage ExtendedClass country-flag, ImageURL=GetFlagURLByCountryCode(Country_Code); texts "MY COUNTRY", Country_Name, Country_LocalityCount + If(..) | app/src/pages/CountryList/components/CountryListContent.tsx:126-145 `imageURL={getFlagURLByCountryCode(user.countryCode)} ... inText="MY COUNTRY" ... countText(user.countryLocalityCount, ' Locality', ' Localities')` | present ("MY COUNTRY" x1) |  |
| Directory_Locality-111 | ui | If True (dead): FeedBlock_CommunityPopulation, else Directory_CommunityNumbers | [DEAD BRANCH] constant True -> CustomContainer #Population with FeedBlock_CommunityPopulation; else Directory_CommunityNumbers(In_CommunityStatistics, In_IsLoading) | app/src/pages/CountryList/components/CountryListContent.tsx:149-156 `<CustomContainer id="Population" ...><CommunityPopulation id="$b18" isLoading={isCommunityPopulationLoading} total={communityPopulationTotal} onClick={onCommunityPopulationClicked} />` ; Directory_CommunityNumbers: not found | FeedBlock_CommunityPopulation x5; Directory_CommunityNumbers x0 | Else branch (Directory_CommunityNumbers) is dead in DEV and absent on TST |
| Directory_Locality-112 | ui | Legend: "Browse by Country" + info Icon | CustomText Neutral10 Base SemiBold; Icon Info Primary NonStandard_16, Click -> OnClick_LegendInfo | app/src/pages/CountryList/components/CountryListContent.tsx:157-175 `inText="Browse by Country"` ... `onClick={onLegendInfoClicked}` | present ("Browse by Country" x1) |  |
| Directory_Locality-113 | ui | SkeletonSection + list of Out_CountriesStatistics | In_IsLoading = not (IsDataFetched or HasFetchError); list Default class "list list-group"; container onclick -> Handler_StatisticsList_Clicked(CountryCode); Statistics_TypedItem In_HasImage = AvatarURL <> "", ConvertRecord {UI_StatisticsTexts, Name:Title, ImageURL:AvatarURL} | app/src/pages/CountryList/components/CountryListContent.tsx:176-199 `className={listClass}` ... `inHasImage={c.avatarURL !== ''} uICountryStatistics={{ UI_StatisticsTexts: c.texts, Name: c.title, ImageURL: c.avatarURL }}` ; CLC:96-98 `list-loading` / `list-error` classes | present | React adds list-loading / list-error classes (captured states, code comment) |
| Directory_Locality-114 | ui | BottomBarMenu isRootPage=True / CommonUI_InsideLayout | ActiveItem Directory; isRootPage True | app/src/pages/CountryList/CountryListPage.tsx:62-63 `<BottomBar id="$b25" activeItem={Connect_BottomBar_Items.Directory} isRootPage />` ; `<CommonUiLayout id="$b26" />` | present |  |
| Directory_Locality-115 | ui | CacheControl_UserInfo_Wrapper | on Result -> CacheControl_UserInfo_WrapperResult(UserInformation) | app/src/pages/CountryList/CountryListPage.tsx:65 `<UserInfoCache id="$b27" onResult={onUserInfo} />` | present (CacheControl_UserInfo_WrapperResult x4) |  |
| Directory_Locality-116 | ui | Directory_LegendBottomSheet (else of If False #HideInServiceStudio_BottomSheet) | no ShowLocalities argument (default True); on SheetInitialized | app/src/pages/CountryList/CountryListPage.tsx:66-71 `<DirectoryLegendSheet id="$b28" onSheetInitialized={onLegendSheetInitialized} .../>` | present (Directory_LegendBottomSheet x10) |  |

### actions

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Locality-117 | actions | Action_RefreshData_CommunityStatistics | refresh data GetCommunityStatistics | not found (searched: RefreshData_CommunityStatistics, GetCommunityStatistics) | absent | See GetCommunityStatistics row |
| Directory_Locality-118 | actions | Action_RefreshData_CountryStatistics: main path | GetSkeletonList_UI_CountryStatistics(10); assign; refresh GetCountriesStatistics | app/src/pages/CountryList/hooks/useCountryList.ts:90-106 `write({ countries: getSkeletonList_UI_CountryStatistics(10) }); ... rows = await fetchCountryListStatistics();` | present |  |
| Directory_Locality-119 | actions | Action_RefreshData_CountryStatistics: exception All Exceptions | ListClear(Out_CountriesStatistics); raise BubbleGenericException(AllExceptions.ExceptionMessage) | app/src/pages/CountryList/hooks/useCountryList.ts:113-116 `if (!isSystemException(e)) { write({ countries: [] }); // ListClear throw new UserException(exceptionMessage(e), 'UBTConnect.BubbleGenericException'); }` | present (BubbleGenericException x2) |  |
| Directory_Locality-120 | actions | Action_RefreshData_CountryStatistics: Communication Exception | ListClear; raise BubbleCommunicationException | app/src/pages/CountryList/hooks/useCountryList.ts:108-111 `if (isCommunicationException(e)) { write({ countries: [] }); // ListClear2 throw new UserException(exceptionMessage(e), 'UBTConnect.BubbleCommunicationException'); }` | present (BubbleCommunicationException x2) |  |
| Directory_Locality-121 | actions | Action_RefreshData_CountryStatistics: Not Registered | raise Not Registered | app/src/pages/CountryList/hooks/useCountryList.ts:112 `if (isInstanceOf(e, NotRegisteredException)) throw e; // Raise Error: NotRegistered` | - |  |
| Directory_Locality-122 | actions | CacheControl_UserInfo_WrapperResult | LocalCacheControl_UserInformation.Directory_UserCurrent = UserInformation; isFetched = True | app/src/pages/CountryList/hooks/useCountryList.ts:159-161 `onUserInfo: (user) => { set({ user: userGeographyOf(user) }); }` ; app/src/pages/CountryList/hooks/countryListState.ts:69-79 userGeographyOf (isFetched: true) | present |  |
| Directory_Locality-123 | actions | Directory_LegendBottomSheetSheetInitialized | BottomSheetId = SheetId | app/src/pages/CountryList/hooks/useCountryList.ts:162-164 `set({ bottomSheetId: sheetId });` | present |  |
| Directory_Locality-124 | actions | Handler_StatisticsList_Clicked: Event_Id <> Null | false -> end | app/src/pages/CountryList/hooks/useCountryList.ts:130 `if (eventId === '') return;` | present |  |
| Directory_Locality-125 | actions | Handler_StatisticsList_Clicked: HasAccessToRegion true | navigate -> CountryDetails(CountryCode=Event_Id) | app/src/pages/CountryList/hooks/useCountryList.ts:131-132 `const hasAccess = await hasAccessToRegion(longIntegerTextOf(eventId), eventId); if (hasAccess) navigate(`/${APP_ID}/CountryDetails`, { CountryCode: eventId });` | present |  |
| Directory_Locality-126 | actions | Handler_StatisticsList_Clicked: HasAccessToRegion false | App_Subscription_ShowUpgradePopUp() | app/src/pages/CountryList/hooks/useCountryList.ts:133 `else await showUpgradePopUp();` | present |  |
| Directory_Locality-127 | actions | OnAfterFetch_GetCountriesStatistics (screen action) | flag URL per row | app/src/pages/CountryList/hooks/useCountryList.ts:102 | present |  |
| Directory_Locality-128 | actions | OnClick_LegendInfo | BottomSheetOpen(BottomSheetId) | app/src/pages/CountryList/hooks/useCountryList.ts:153-155 `bottomSheetOpen(latest.current.bottomSheetId);` | present |  |
| Directory_Locality-129 | actions | OnClick_MyCountry | navigate -> CountryDetails(CountryCode=Country_Code of user) | app/src/pages/CountryList/hooks/useCountryList.ts:147-149 `navigate(`/${APP_ID}/CountryDetails`, { CountryCode: state.user.countryCode });` | present (OnClick_MyCountry x2) |  |
| Directory_Locality-130 | actions | OnClick_MyLocality | navigate -> Locality_Details(LocalityId=Locality_Id, PreloadedLocalityLabel=Locality_Name) | app/src/pages/CountryList/hooks/useCountryList.ts:141-146 `navigate(`/${APP_ID}/Locality_Details`, { LocalityId: state.user.localityId, PreloadedLocalityLabel: state.user.localityName });` | present (OnClick_MyLocality x2) |  |
| Directory_Locality-131 | actions | ScreenEvent_OnReady: restored and IsDataFetched | end | app/src/pages/CountryList/hooks/useCountryList.ts:123 `if (restored && latest.current.isDataFetched) return;` | present |  |
| Directory_Locality-132 | actions | ScreenEvent_OnReady: else | JavaScript $actions.Action_RefreshData_CommunityStatistics(); then Action_RefreshData_CountryStatistics | app/src/pages/CountryList/hooks/useCountryList.ts:124 `await refreshData();` (country statistics only) |  JS call to Action_RefreshData_CommunityStatistics: absent on TST | The community-statistics refresh is not in React; TST has no such action (count 0) |
| Directory_Locality-133 | actions | StaticInputClick_Input | navigate -> Search() | app/src/pages/CountryList/hooks/useCountryList.ts:138-140 | present |  |
| Directory_Locality-134 | actions | Community population click (block FeedBlock_CommunityPopulation, other flow) | block event; React opens Updates_SingleList | app/src/pages/CountryList/hooks/useCountryList.ts:150-152 `navigate(`/${APP_ID}/Updates_SingleList`);` ; app/src/components/feed/CommunityPopulation/CommunityPopulation.tsx:15 "OnClick_Block: the caller opens Updates_SingleList" | - | Block is in flow Home; the caller wiring is not in the CountryList pack |

### strings

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Locality-135 | strings | Strings of CountryList | "Search any member or location", "MY LOCALITY", "MY COUNTRY", "Browse by Country", "Supper Meetings" | found in app/src/pages/CountryList/CountryListPage.tsx, app/src/pages/CountryList/components/CountryListContent.tsx (see flow strings row) | present |  |

## Locality_Details

### identity

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Locality-136 | identity | Screen, roles, inputs | roles Anonymous, Registered, UBTOne_User; inputs LocalityId: Long Integer, PreloadedLocalityLabel: Text; 7 locals (IsUserLocality default True) | route /UBTConnect/Locality_Details inputs=["LocalityId: LongInteger","PreloadedLocalityLabel: Text"] meta { access: 'anonymous', lock: 'enforce' } ; app/src/pages/Locality_Details/inputs.ts:12-15 `LocalityId: params.get('LocalityId') ?? '0', PreloadedLocalityLabel: params.get('PreloadedLocalityLabel') ?? ''` | present | App meta says anonymous access; DEV roles include Anonymous |

### data

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Locality-137 | data | Get_LocalityDetails (Get_UI_LocalityDetails) | call-server Get_UI_LocalityDetails(In_LocalityId=LocalityId); OnAfterFetch -> OnAfterFetch_Get_LocalityDetails | app/src/pages/Locality_Details/hooks/useLocalityDetails.ts:84 `localityDetails = await fetchLocalityDetails(localityDetailsCallInputs(variables));` ; app/src/api/locality/repository.ts:90-94 `callAction('UBTConnect', 'Locality_Details/DataActionGet_LocalityDetails', toLocalityDetailsInputs(inputs))` | present | Get_UI_LocalityDetails name not found in React (TST client JS x0, server side) |
| Directory_Locality-138 | data | Mock handler of Get_LocalityDetails | server action Get_UI_LocalityDetails | app/src/pages/Locality_Details/mocks.ts:120 `recordedHandler('UBTConnect', 'Locality_Details/DataActionGet_LocalityDetails', { matchInputs: false })` | - | Households, tags, supper meetings, interchange and schools mocks are fictional (mocks.ts comments) |
| Directory_Locality-139 | data | OnAfterFetch_Get_LocalityDetails | Action_SetLocalityLabel(CountryName, LocalityName) | app/src/pages/Locality_Details/hooks/localityDetailsState.ts:130-136 `localityLabel: localityLabelOf(localityDetails.localityName, localityDetails.countryName)` | present |  |

### ui

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Locality-140 | ui | Layout_MainPages: title and OnHeaderScrolled | Placeholder_Header_Title "Directory"; on OnHeaderScrolled -> Handler_OnHeaderScrolled | app/src/pages/Locality_Details/Locality_DetailsPage.tsx:82-89 `placeholderHeaderTitle="Directory" ... onOnHeaderScrolled={onHeaderScrolled}` | present |  |
| Directory_Locality-141 | ui | StaticInput prompt | In_Prompt "Search for households or members"; Click_Input -> OnClick_Search | app/src/pages/Locality_Details/Locality_DetailsPage.tsx:85-87 `<StaticInput id={b(2)} inPrompt="Search for households or members" onClickInput={onClickSearch} />` | present |  |
| Directory_Locality-142 | ui | Header input icon: If GetHasMapsEnabled() #EnableMaps | Icon Explore Neutral0, Click -> OnClick_Maps | app/src/pages/Locality_Details/Locality_DetailsPage.tsx:77-79,88 `placeholderHeaderInputIcon={mapsEnabled ? exploreIcon(b(3)) : null}` ; `const mapsEnabled = useFlagOn('C2EnableMaps');` (:54) | present (GetHasMapsEnabled x3) | Flag C2EnableMaps; flag value file migration/knowledge/flag-values-tst.json not read by the reader |
| Directory_Locality-143 | ui | SubHeader_MainPages: In_IsShowSearchIcon, Click_Search | In_IsShowSearchIcon=HeaderIsScrolled; Click_Search -> OnClick_Search | app/src/pages/Locality_Details/Locality_DetailsPage.tsx:93-96 `<SubHeader_MainPages id={b(4)} inIsShowSearchIcon={v.headerIsScrolled} onClickSearch={onClickSearch}` | present |  |
| Directory_Locality-144 | ui | Container visible = (LocalityId = Logged_User.LocalityId): text "My Locality:" | visibility condition; text classes font-size-xxs font-regular | app/src/pages/Locality_Details/Locality_DetailsPage.tsx:99-103 `{v.localityId === v.logged_User.localityId && (<NotCaptured name="My Locality label (own locality)"><span className="font-size-xxs font-regular">My Locality:</span>` | "My Locality" x1 | React wraps it in NotCaptured (not a captured state) |
| Directory_Locality-145 | ui | Container onclick -> Handler_NavigateTo_BrowsebyLocation; Columns_Two ReduceLast, class fit-content | click area with label and chevron | app/src/pages/Locality_Details/Locality_DetailsPage.tsx:104-108 `<div data-container="" style={{ cursor: 'pointer' }} onClick={onNavigateToBrowseByLocation}><ColumnsTwo ... extendedClasses="fit-content"` | present |  |
| Directory_Locality-146 | ui | SkeletonSection In_IsLoading = (LocalityLabel = ""), #IsLoadingLocalityLabel | if LocalityLabel = "" expr LocalityLabel (example text) else expr LocalityLabel, class "font-size-s font-semi-bold" | app/src/pages/Locality_Details/Locality_DetailsPage.tsx:110-116 `<Skeleton id={b(6)} isLoading={v.localityLabel === ''}> ... <span className={LABEL_CLASS} data-expression="">{v.localityLabel}</span>` ; :37 `LABEL_CLASS = 'font-size-s font-semi-bold'` | present |  |
| Directory_Locality-147 | ui | Right: Icon ExpandMore Neutral0, class "directory-locality padding-left-xs" | chevron | app/src/pages/Locality_Details/Locality_DetailsPage.tsx:119-125 `inIconId={UBT_Icons2_Locality.ExpandMore} inExtendedClasses="directory-locality padding-left-xs"` | present |  |
| Directory_Locality-148 | ui | If IsDataFetched and TimezoneName = "" (empty true branch) else SkeletonSection | true: nothing; else Skeleton In_IsLoading = not IsDataFetched or HasFetchError, CustomContainer TextOptions FontSize DoubleExtraSmall | app/src/pages/Locality_Details/Locality_DetailsPage.tsx:129-134 `{details.isDataFetched && details.localityDetails.timezoneName === '' ? null : (<Skeleton id={b(10)} isLoading={!details.isDataFetched \|\| details.hasFetchError}><CustomContainer ... FontSize: UBT_FontSize.DoubleExtraSmall` | present |  |
| Directory_Locality-149 | ui | #IsLoadingLocalityLabel2 / Locality_DateTimeLabel | if LocalityLabel = "" expr "Local Timezone And UTC Offset"; else Locality_DateTimeLabel(In_TimezoneOffset=TimezoneOffset) | app/src/pages/Locality_Details/Locality_DetailsPage.tsx:135-144 `Local Timezone And UTC Offset` ... `<Locality_DateTimeLabel id={b(12)} inTimezoneOffset={Number(details.localityDetails.timezoneOffset)} />` | present |  |
| Directory_Locality-150 | ui | Placeholder_Icons: If HeaderIsScrolled and EnableMaps2 | Icon Explore Neutral0, Click -> OnClick_Maps | app/src/pages/Locality_Details/Locality_DetailsPage.tsx:151 `placeholderIcons={!v.headerIsScrolled && mapsEnabled ? exploreIcon(b(13)) : null}` | present | React shows the icon when NOT scrolled; DEV condition is "if HeaderIsScrolled" (the pack puts the icon in the HeaderIsScrolled branch) |
| Directory_Locality-151 | ui | Tags: SkeletonSection(not IsScreenInitialized) + HorizontalTagList | ExtendedClasses household-tag, In_HorizontalPadding Base, In_IsMandatorySelection True, In_IsSingleSelection True, In_TagToggleList=TagsList; Changed -> Handler_HorizontalTagListChanged | app/src/pages/Locality_Details/Locality_DetailsPage.tsx:154-169 `<Skeleton id={b(15)} isLoading={!v.isScreenInitialized}><HorizontalTagList ... extendedClasses="household-tag" inTagToggleList={v.tagsList} inHorizontalPadding={UBT_Size.Base} inIsMandatorySelection inIsSingleSelection onChanged={onTagsChanged}` | present |  |
| Directory_Locality-152 | ui | Content #Showhouseholds | if TagsList_SelectedTag = Households: Locality_Households(In_BretherenCount, In_HouseholdCount, In_LocalityId); Event_NavigateToHouseholdDetails -> Handler_NavigateTo_HouseholdDetails | app/src/pages/Locality_Details/Locality_DetailsPage.tsx:175-184 `{selected === LocalityMenu.Households && (<Locality_Households id={b(17)} inHouseholdCount={details.localityDetails.householdCount} inLocalityId={v.localityId} inBretherenCount=... onEventNavigateToHouseholdDetails={onNavigateToHouseholdDetails}` | present |  |
| Directory_Locality-153 | ui | Content #ShowMyHousehold | if SelectedTag = My Household: HouseholdDetails_Block(HouseholdId=Logged_User.HouseholdId, In_CheckVisibility True, In_HideActions True, In_ShowKebabMenu True) | app/src/pages/Locality_Details/Locality_DetailsPage.tsx:185-196 `<NotCaptured name="My Household tab (Q1)"><HouseholdDetailsContainer id={b(18)} showKebabMenu source={{ kind: 'server', householdId: v.logged_User.householdId }} ... checkVisibility hideActions` | HouseholdDetails_Block x5 | React wraps it in NotCaptured (not a captured state) |
| Directory_Locality-154 | ui | Content #ShowSubdivisions | Locality_Subdivisions(LocalityId) | app/src/pages/Locality_Details/Locality_DetailsPage.tsx:197-199 `<Locality_Subdivisions id={b(19)} localityId={v.localityId} flags={{ hasCarouselEnabled }} />` | present |  |
| Directory_Locality-155 | ui | Content #ShowInterchange | Locality_Interchange(In_InterchangeLocalityId=LocalityId) | app/src/pages/Locality_Details/Locality_DetailsPage.tsx:200-202 | present |  |
| Directory_Locality-156 | ui | Content #ShowOneSchoolGlobal | Locality_OneSchoolGlobal #Block_OneSchoolGlobal_List(In_LocalityId); Event_OnClick_Bookmark -> Handler_OnClick_Bookmark; Event_OnClick -> Handler_NavigateTo_OneschoolGlobalDetails | app/src/pages/Locality_Details/Locality_DetailsPage.tsx:203-214 `<Locality_OneSchoolGlobal id="Block_OneSchoolGlobal_List" idPrefix="b21" inLocalityTimezoneData={{...}} inLocalityId={v.localityId} onEventOnClick={onNavigateToOneSchoolGlobalDetails} />` | present (Event_OnClick_Bookmark x1 in block file) | React does not wire Event_OnClick_Bookmark (hook comment LDH:57-59); React passes In_LocalityTimezoneData, which the pack block does not have |
| Directory_Locality-157 | ui | Content #ShowLocalityContacts: If Connect_LaunchDarkly_PermissionCheck(MobileDirectoryLocalityContacts) | true: container #Hidden with Locality_LocalityContacts, plus container with ComingSoon_V2; false: container with ComingSoon_V2 | app/src/pages/Locality_Details/Locality_DetailsPage.tsx:215-219 `<NotCaptured name="Locality Contacts tab (Q1, Q2)"><ComingSoon id={b(22)} /></NotCaptured>` | TST view: `$if(true, false, ...)` then ConnectPatterns.ComingSoon only; Connect_LaunchDarkly_PermissionCheck x0, MobileDirectoryLocalityContacts x0, Locality_LocalityContacts x0 (TST Locality_Details :986-990) | Pack elements (LaunchDarkly check, block Locality_LocalityContacts) absent on TST; React shows ComingSoon like TST |
| Directory_Locality-158 | ui | BottomBarMenu / CommonUI_InsideLayout | Directory active | app/src/pages/Locality_Details/Locality_DetailsPage.tsx:222-223 | present |  |

### actions

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Locality-159 | actions | Action_InitializeScreen: user info and Logged_User | GetUserInformation_Wrapper; Logged_User.HouseholdId = Member.HouseholderId; Logged_User.LocalityId = Geography.Locality_Id | app/src/pages/Locality_Details/hooks/useLocalityDetails.ts:99-104 `const info = await getUserInformation(); ... householdId: info.Directory_UserCurrent.Directory_UserCurrent_Member.HouseholderId, localityId: geography.Locality_Id` | present (Action_InitializeScreen x3) |  |
| Directory_Locality-160 | actions | Action_InitializeScreen: LocalityId = 0 | LocalityId = Logged_User.LocalityId; Action_SetLocalityLabel(Country_Name, Locality_Name) | app/src/pages/Locality_Details/hooks/localityDetailsState.ts:84-91 `const ownLocality = state.localityId === '0'; const localityId = ownLocality ? loggedUser.localityId : state.localityId; ... localityLabel: ownLocality ? userLocalityLabel : state.localityLabel` | present | Locality label string is "LocalityName, CountryName" (LDS:52) |
| Directory_Locality-161 | actions | Action_InitializeScreen: IsUserLocality, tags, selected tag, IsScreenInitialized | IsUserLocality = LocalityId = Logged_User.LocalityId; ListClear(TagsList); GetSample_FilterTags(IsUserLocality); TagsList_SelectedTag = Households; IsScreenInitialized = True | app/src/pages/Locality_Details/hooks/localityDetailsState.ts:86-95 `const isUserLocality = localityId === loggedUser.localityId; ... tagsList: getSample_FilterTags(isUserLocality, hasLocalityContacts), tagsList_SelectedTag: LocalityMenu.Households, isScreenInitialized: true` | present |  |
| Directory_Locality-162 | actions | GetSample_FilterTags: ShowMyHouseholdTag true / false | true: Households, My Household, Supper Meetings, Interchange, OneSchool Global, Locality Contacts; false: Households only appended before the merge M1 and then Supper Meetings .. Locality Contacts (all after M1) | app/src/pages/Locality_Details/components/actions.ts:23-30 `const tags = [tag(LocalityMenu.Households, true)]; if (showMyHouseholdTag) tags.push(tag(LocalityMenu.MyHousehold, false)); tags.push(tag(LocalityMenu.Subdivsion, false), tag(LocalityMenu.Interchange, false)); tags.push(tag(LocalityMenu.OneSchoolGlobal, false)); if (hasLocalityContacts) tags.push(tag(LocalityMenu.LocalityContacts, false));` | present (UBTConnect.controller$GetSample_FilterTags in TST dependency list; body not in this file) | DEV appends "Locality Contacts" always; React appends it only when flag mobileDirectoryLocalityContacts is on (LDA:20-22 comment: "flag still undecided: Q2, off by default"). TST body not compared |
| Directory_Locality-163 | actions | Action_SetLocalityLabel | LocalityLabel = LocalityName + ", " + CountryName | app/src/pages/Locality_Details/hooks/localityDetailsState.ts:52 `export const localityLabelOf = (localityName, countryName) => `${localityName}, ${countryName}`;` | present |  |
| Directory_Locality-164 | actions | Handler_HorizontalTagListChanged | TagsList = UpdatedTagList; ListIndexOf(IsSelected); JS scroll .active-screen to 0; TagsList_SelectedTag = Identifier | app/src/pages/Locality_Details/hooks/useLocalityDetails.ts:151-156 `dispatch({ type: 'tagsChanged', tags: updated }); requestAnimationFrame(() => { const contentEl = document.querySelector('.active-screen'); if (contentEl) contentEl.scrollTop = 0; });` ; app/src/pages/Locality_Details/hooks/localityDetailsState.ts:142-145 | present |  |
| Directory_Locality-165 | actions | Handler_NavigateTo_BrowsebyLocation: GetHasC1DirectoryView true | navigate -> CountryDetails(CountryCode=UI_LocalityDetails.CountryCode) | app/src/pages/Locality_Details/hooks/useLocalityDetails.ts:131 `navigate(`/${APP_ID}/${flags.hasC1DirectoryView ? 'CountryDetails' : 'BrowseDirectory'}`, { CountryCode: countryCode });` | present (GetHasC1DirectoryView x3) | Flag C2EnableC1DirectoryView |
| Directory_Locality-166 | actions | Handler_NavigateTo_BrowsebyLocation: false | navigate -> BrowseDirectory(CountryCode) | app/src/pages/Locality_Details/hooks/useLocalityDetails.ts:131-133 | present |  |
| Directory_Locality-167 | actions | Handler_NavigateTo_HouseholdDetails: HouseholdId = 0 | end | app/src/pages/Locality_Details/hooks/useLocalityDetails.ts:138 `if (householdId === '0') return;` | present |  |
| Directory_Locality-168 | actions | Handler_NavigateTo_HouseholdDetails: else | navigate -> HouseholdDetails(HouseholdId) | app/src/pages/Locality_Details/hooks/useLocalityDetails.ts:139 `navigate(`/${APP_ID}/HouseholdDetails`, { HouseholdId: householdId });` | present |  |
| Directory_Locality-169 | actions | Handler_NavigateTo_OneschoolGlobalDetails: StopPropagationHelper_Check.isToStop | true -> end | app/src/pages/Locality_Details/hooks/useLocalityDetails.ts:145 `if (stopPropagationHelper_Check()) return;` | present (StopPropagationHelper_Check x4) |  |
| Directory_Locality-170 | actions | Handler_NavigateTo_OneschoolGlobalDetails: else | navigate -> OneSchoolGlobalDetails(In_OneSchoolGlobalId) | app/src/pages/Locality_Details/hooks/useLocalityDetails.ts:146 `navigate(`/${APP_ID}/OneSchoolGlobalDetails`, { In_OneSchoolGlobalId: oneSchoolGlobalId });` | present |  |
| Directory_Locality-171 | actions | Handler_OnClick_Bookmark | no nodes (end) | not found as a handler (searched: Handler_OnClick_Bookmark, onClickBookmark in app/src/pages/Locality_Details/Locality_DetailsPage.tsx); app/src/pages/Locality_Details/hooks/useLocalityDetails.ts:57-58 comment "Handler_OnClick_Bookmark has no node" | present (Handler_OnClick_Bookmark x4) | Empty in DEV, not wired in React |
| Directory_Locality-172 | actions | Handler_OnHeaderScrolled | HeaderIsScrolled = Event_IsHeaderScrolled | app/src/pages/Locality_Details/hooks/useLocalityDetails.ts:115-117 `dispatch({ type: 'headerScrolled', isHeaderScrolled });` | present |  |
| Directory_Locality-173 | actions | OnClick_Maps | navigate -> Map(In_InitialLatitude=MaiinHallLatitude, In_InitialLongitude=MainHallLongitude) | app/src/pages/Locality_Details/hooks/useLocalityDetails.ts:123-126 `navigate(`/${APP_ID}/Map`, { In_InitialLongitude: d.mainHallLongitude, In_InitialLatitude: d.maiinHallLatitude });` | present (OnClick_Maps x2) |  |
| Directory_Locality-174 | actions | OnClick_Search | navigate -> Search() | app/src/pages/Locality_Details/hooks/useLocalityDetails.ts:119-121 `navigate(`/${APP_ID}/Search`);` | present |  |
| Directory_Locality-175 | actions | ScreenEvent_OnInitialize: LocalityLabel = "" | LocalityLabel = PreloadedLocalityLabel; if TagsList.Empty GetSample_FilterTags(IsUserLocality) -> TagsList | app/src/pages/Locality_Details/hooks/localityDetailsState.ts:56-72 `tagsList: getSample_FilterTags(isUserLocality, hasLocalityContacts), ... localityLabel: inputs.PreloadedLocalityLabel,` (isUserLocality = true) | - | React builds this in the initial state |
| Directory_Locality-176 | actions | ScreenEvent_OnReady: IsScreenInitialized true, data fetched and no error | end | app/src/pages/Locality_Details/hooks/useLocalityDetails.ts:95-96 `if (variables.isScreenInitialized) { if (variables.get_LocalityDetails.isDataFetched && !variables.get_LocalityDetails.hasFetchError) return;` | present |  |
| Directory_Locality-177 | actions | ScreenEvent_OnReady: IsScreenInitialized true but not fetched / error | refresh data Get_LocalityDetails | app/src/pages/Locality_Details/hooks/useLocalityDetails.ts:112 `await refreshLocalityDetails(variables);` | present |  |
| Directory_Locality-178 | actions | ScreenEvent_OnReady: not initialized | Action_InitializeScreen, then refresh Get_LocalityDetails | app/src/pages/Locality_Details/hooks/useLocalityDetails.ts:97-112 | present |  |

### logic

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Locality-179 | logic | Route reuse for another locality | navigate to the same screen again (Interchange) | app/src/pages/Locality_Details/Locality_DetailsPage.tsx:47-50 `const { key } = useLocation(); return <Locality_DetailsScreen key={key} />;` | - |  |

### strings

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Locality-180 | strings | Strings of Locality_Details | "Search for households or members", "Local Timezone And UTC Offset", "directory-locality padding-left-xs" | found in app/src/pages/Locality_Details/Locality_DetailsPage.tsx:86,137,124 | present |  |

## Directory_LegendBottomSheet

### identity

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Locality-181 | identity | Block, input, event | input ShowLocalities: Boolean = True; event SheetInitialized(SheetId) mandatory; used by CountryDetails, CountryList | app/src/components/directory/DirectoryLegendSheet/DirectoryLegendSheet.tsx:59-64 `showLocalities = true, onSheetInitialized, preventBackNavigation` ; React name `DirectoryLegendSheet` (OSBlock name "Directory_Locality.Directory_LegendBottomSheet", :72) | present |  |

### ui

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Locality-182 | ui | BottomSheet args | Content_BackgroundColorId Neutral0; padding x Base, bottom DoubleExtraLarge; class directory-legend-explanation; ShowBackButton False; ShowHeader True; Title "About the numbers" | app/src/components/directory/DirectoryLegendSheet/DirectoryLegendSheet.tsx:73-79 `showBackButton={false} title="About the numbers" extendedClasses="directory-legend-explanation" showHeader contentBackgroundColorId={UBT_Color.Neutral0} contentPadding={{ HorizontalSizeId: UBT_Size.Base, BottomSizeId: UBT_Size.DoubleExtraLarge }}` | present ("About the numbers" x1) |  |
| Directory_Locality-183 | ui | Legend items Brethren / Households / Brothers / Sisters | IconText with entity icons and colours (Purple, Primary, BlueNonStandarDarker Boy, PinkNonStandardDarker Girl) | app/src/components/directory/DirectoryLegendSheet/DirectoryLegendSheet.tsx:88-89,107-108 `legend('Brethren', getEntityType_Icon(Connect_Entity.Member), UBT_Color.Purple)` ... | present |  |
| Directory_Locality-184 | ui | If ShowLocalities | true: IconText "Localities" Error; false: CustomText "Supper Meetings" with inline icon | app/src/components/directory/DirectoryLegendSheet/DirectoryLegendSheet.tsx:90-106 `showLocalities ? (legend('Localities', ..., UBT_Color.Error)) : (<CustomText inlineIcon={{ IconId: ..., IconColorId: UBT_Color.Orange }} inText="Supper Meetings"` | present (ShowLocalities x3) |  |
| Directory_Locality-185 | ui | If IsOpened: PreventBackNavigation -> BottomSheetOnClose | block rendered while open | app/src/components/directory/DirectoryLegendSheet/DirectoryLegendSheet.tsx:112-114 `{isOpened && PreventBackNavigation !== undefined && (<PreventBackNavigation onBackNavigationPrevented={bottomSheetOnClose} />)}` | present (PreventBackNavigation x6) |  |

### actions

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Locality-186 | actions | BottomSheetInitialized | BottomSheetId = Id; trigger SheetInitialized(Id) | app/src/components/directory/DirectoryLegendSheet/DirectoryLegendSheet.tsx:82-85 `bottomSheetId.current = sheetId; onSheetInitialized?.(sheetId);` | present |  |
| Directory_Locality-187 | actions | BottomSheetOnClose | BottomSheetOnToggle(False); BottomSheetClose(BottomSheetId) | app/src/components/directory/DirectoryLegendSheet/DirectoryLegendSheet.tsx:67-70 `setIsOpened(false); bottomSheetClose(bottomSheetId.current);` | present |  |
| Directory_Locality-188 | actions | BottomSheetOnToggle | IsOpened = IsOpen | app/src/components/directory/DirectoryLegendSheet/DirectoryLegendSheet.tsx:80 `onOnToggle={setIsOpened}` | present |  |

## Directory_LegendBottomSheet2

### identity

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Locality-189 | identity | Block (not used by any screen of the module) | input none; event SheetInitialized; ShowBackButton True; isTransparentOverlay True; no PreventBackNavigation; Localities If True (dead) | not found (searched: Directory_LegendBottomSheet2, LegendBottomSheet2 in app/src, *.ts *.tsx) | present (isTransparentOverlay x1, ShowBackButton x1, PreventBackNavigation x0) | Pack says "used by: nothing in this module"; no screen of this flow uses it |

## Locality_DateTimeLabel

### identity

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Locality-190 | identity | Block input | In_TimezoneOffset: Integer (mandatory); local LocalDateTime | app/src/pages/Locality_Details/components/Locality_DateTimeLabel.tsx:15-16 `export function Locality_DateTimeLabel({ id, inTimezoneOffset = 0 })  const [localDateTime, setLocalDateTime] = useState(() => new Date());` | present |  |

### ui

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Locality-191 | ui | expr GetLocalityCurrentTimeLabel(In_TimezoneOffset, LocalDateTime) | label text | app/src/pages/Locality_Details/components/Locality_DateTimeLabel.tsx:20 `{getLocalityCurrentTimeLabel(inTimezoneOffset, localDateTime)}` ; app/src/pages/Locality_Details/components/actions.ts:35-46 | present (GetLocalityCurrentTimeLabel x3) | React formats "<weekday>, <hh:mm tt> (UTC +/- h)" itself; the DEV client action body is not in the pack |
| Directory_Locality-192 | ui | Block Timer (UBTConnect_Utils.Utils) | Event_IntervalElapsed -> Handler_TimerEvent_IntervalElapsed | app/src/pages/Locality_Details/components/Locality_DateTimeLabel.tsx:21-26 `<Timer id=... onEventIntervalElapsed={() => { setLocalDateTime(new Date()); }} />` ; app/src/pages/Locality_Details/components/Timer.tsx:15 `inDelay = 1` (seconds) | present (Timer x12) |  |

### actions

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Locality-193 | actions | OnInitialize / Handler_TimerEvent_IntervalElapsed | LocalDateTime = CurrDateTime() | app/src/pages/Locality_Details/components/Locality_DateTimeLabel.tsx:16,24 `useState(() => new Date())` / `setLocalDateTime(new Date());` | present |  |

## Locality_Households

### identity

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Locality-194 | identity | Block inputs and event | In_LocalityId, In_BretherenCount, In_HouseholdCount (mandatory); event Event_NavigateToHouseholdDetails(Event_HouseholdId) | app/src/pages/Locality_Details/components/Locality_Households.tsx:17-26 `inLocalityId, inBretherenCount, inHouseholdCount, onEventNavigateToHouseholdDetails, flags` | present |  |

### ui

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Locality-195 | ui | Counters | "<In_BretherenCount> Brethren" (PersonFill, Purple) and "<In_HouseholdCount> Households" (Household, Primary); Neutral8 ExtraSmall SemiBold; containers with classes locality-count, locality-brethren-count | app/src/pages/Locality_Details/components/Locality_Households.tsx:64-91 `text={`${String(inBretherenCount)} Brethren`}` ... `text={`${String(inHouseholdCount)} Households`}` | present |  |
| Directory_Locality-196 | ui | Locality_Households_HouseholdList instance | In_LocalityId; Event passthrough | app/src/pages/Locality_Details/components/Locality_Households.tsx:94-99 `<Locality_Households_HouseholdList ... inLocalityId={inLocalityId} onEventNavigateToHouseholdDetails={...} flags={flags} />` | present |  |

## Locality_Households_HouseholdList

### data

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Locality-197 | data | GetLocalityHouseholds (GetHouseholdList_ByLocalityId) | call-server GetHouseholdList_ByLocalityId(In_LocalityId); OnAfterFetch bookmarks | app/src/pages/Locality_Details/hooks/useLocalityHouseholdList.ts:75 `const list = await fetchLocalityHouseholds(localityId);` ; app/src/api/household/repository.ts:94-100 `callAction('UBTConnect', 'Locality_Households_HouseholdList/DataActionGetLocalityHouseholds', { In_LocalityId: localityId })` | present | Server-action name not found in React (app.md 0 hits) |
| Directory_Locality-198 | data | Mock handler of GetLocalityHouseholds | server action GetHouseholdList_ByLocalityId | app/src/pages/Locality_Details/mocks.ts:19-24 comments: "DataActionGetLocalityHouseholds and DataActionGetMembers were never recorded ... The 23 households of locality 252 in the directory cast" | - | Fictional households (mocks.ts); app.md: "no mock handler found" for GetHouseholdList_ByLocalityId by server-action name |

### ui

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Locality-199 | ui | SkeletonSection, empty state, list | Skeleton In_IsLoading = not IsDataFetched; if list Empty -> Directory_EmptyState(Household) else list #locality_Households class "list list-group list--gap-s" of Household_Card | app/src/pages/Locality_Details/components/Locality_Households_HouseholdList.tsx:51-71 `<Skeleton id={`${b}-$b2`} isLoading={!isDataFetched}>{list.length === 0 ? (<DirectoryEmptyState ... entityTypeId={Connect_Entity.Household} />) : (<OSList ... className="list list-group list--gap-s"` | present |  |

### actions

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Locality-200 | actions | OnInitialize: list Empty -> three dummy rows | append 3 records {LocalityName "Dumyy size", CountryName "Dumyy size"} | not found (searched: Dumyy, dummy rows in app/src/pages/Locality_Details/hooks/useLocalityHouseholdList.ts and app/src/pages/Locality_Details/components/Locality_Households_HouseholdList.tsx) | present ("Dumyy size" x6 in TST file) | React shows the Skeleton with an empty list before the data arrives; the 3 placeholder households are not created |
| Directory_Locality-201 | actions | OnReady: restored | ReactiveInstance_ForceUpdate | app/src/pages/Locality_Details/hooks/useLocalityHouseholdList.ts:74 `if (restored && latest.current.isDataFetched) return;` | present |  |
| Directory_Locality-202 | actions | OnReady: else | ForceListUpdateOnScrollEnd; refresh GetLocalityHouseholds | app/src/pages/Locality_Details/hooks/useLocalityHouseholdList.ts:75-76 `const list = await fetchLocalityHouseholds(localityId); write({ type: 'householdsFetched', list });` ; comment :41 "ForceListUpdateOnScrollEnd is a virtualization helper with nothing to port" | present (ForceListUpdateOnScrollEnd x4) |  |
| Directory_Locality-203 | actions | OnAfterFetch_GetLocalityHouseholds_Bookmarks: GetHasNewBookmarks true | for each row GetLocal_Bookmark_C2(HouseholdId, BookmarkCategory.Household) -> IsBookmarked | app/src/pages/Locality_Details/hooks/useLocalityHouseholdList.ts:77 `if (flags.hasNewBookmarks) return;` ; app/src/pages/Locality_Details/Locality_DetailsPage.tsx:56 `const hasNewBookmarks = useFlagOn('C2NewBookmarks'); // the GetLocal_Bookmark_C2 branch (decided off)` | present (GetHasNewBookmarks x3, GetLocal_Bookmark_C2 x5) | React does not run GetLocal_Bookmark_C2 (grep: Locality_DetailsPage.tsx:56 only a comment); app.md lists GetLocal_Bookmark_C2 at useLocalityHouseholdList.ts:18 |
| Directory_Locality-204 | actions | OnAfterFetch_GetLocalityHouseholds_Bookmarks: false | for each row GetLocal_Bookmark(HouseholdId, MyBookmarks_ObjectType.Contact) -> IsBookmarked | app/src/pages/Locality_Details/hooks/useLocalityHouseholdList.ts:78-83 `for (const household of list) { const isBookmarked = await getLocal_Bookmark(MyBookmarks_ObjectType_Contact, household.householdId); marked.push(withBookmark(household, isBookmarked)); }` | present |  |
| Directory_Locality-205 | actions | Household_CardEvent_OnClickHousehold: GetHasCarouselEnabled true | HouseholdIdList = ConvertList(LocalityHouseholds, {Household: HouseholdId}); SetPreloadObject; navigate HouseholdCarousel(In_StartingHouseholdId=LocalityHouseholds.Current.HouseholdId) | app/src/pages/Locality_Details/hooks/useLocalityHouseholdList.ts:87-90 `setPreloadObject({ CarouselHouseholdItem: latest.current.list.map((h) => ({ Household: h.householdId })) }); navigate(`/${APP_ID}/HouseholdCarousel`, { In_StartingHouseholdId: householdId });` | present (SetPreloadObject x4, HouseholdCarousel x2) | DEV passes LocalityHouseholds.Current.HouseholdId (Current of the list); React passes the clicked householdId |
| Directory_Locality-206 | actions | Household_CardEvent_OnClickHousehold: false | trigger Event_NavigateToHouseholdDetails(HouseholdId) | app/src/pages/Locality_Details/hooks/useLocalityHouseholdList.ts:92 `eventsRef.current.onEventNavigateToHouseholdDetails?.(householdId);` | present |  |

## Locality_Interchange

### data

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Locality-207 | data | GetInterchangesByLocalityId (GetInterchangeList_ByLocalityId) | call-server GetInterchangeList_ByLocalityId(In_LocalityId=In_InterchangeLocalityId) | app/src/pages/Locality_Details/hooks/useLocalityInterchange.ts:54 `list = await fetchInterchanges(interchangeLocalityId);` ; app/src/api/locality/repository.ts:110-115 | present | Server-action name not found (app.md 0 hits); mock: app/src/pages/Locality_Details/mocks.ts:75-100 fictional interchange list |

### ui

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Locality-208 | ui | Directory_Interchange_StatisticsList instance | In_InterchangeList, In_IsLoading = HasFetchError or not IsDataFetched, In_ShowSubtitle True; Event_NavigateToLocality | app/src/pages/Locality_Details/components/Locality_Interchange.tsx:20-26 `inShowSubtitle inIsLoading={isLoading} inInterchangeList={interchangeList} onEventNavigateToLocality={onNavigateToLocality}` ; hook :74 `isLoading: state.hasFetchError \|\| !state.isDataFetched` | present |  |

### actions

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Locality-209 | actions | OnReady: restored | end | app/src/pages/Locality_Details/hooks/useLocalityInterchange.ts:50 `if (restored && latest.current.isDataFetched) return;` | present |  |
| Directory_Locality-210 | actions | OnReady: else (3 loading records then refresh) | LoadingItems 3: append record {Title "Loading", Subtitle "Loading", 3 statistics "Loading" 11, ...}; refresh data | app/src/pages/Locality_Details/hooks/useLocalityInterchange.ts:51-59 `write({ type: 'loadingShown' }); ... list = await fetchInterchanges(interchangeLocalityId); write({ type: 'interchangesFetched', list: withStatisticIcons(list) });` | present ("Loading" x7) |  |
| Directory_Locality-211 | actions | OnAfterFetch_GetInterchangesByLocalityId | IconColorId, IconId per statistic = GetIconLabel_Interchange_Statistics(Name) | app/src/pages/Locality_Details/components/actions.ts:99-111 `getIconLabel_Interchange_Statistics ... byName[statisticItemName]` ; app/src/pages/Locality_Details/hooks/useLocalityInterchange.ts:59 `withStatisticIcons(list)` | present (GetIconLabel_Interchange_Statistics x5) |  |
| Directory_Locality-212 | actions | Handler_NavigateToLocality: no access | App_Subscription_ShowUpgradePopUp() | app/src/pages/Locality_Details/hooks/useLocalityInterchange.ts:63-66 `if (!(await hasAccessToRegion(localityId, countryName))) { await showUpgradePopUp(); return; }` | present (HasAccessToRegion x5) |  |
| Directory_Locality-213 | actions | Handler_NavigateToLocality: access, ListIndexOf <> -1 / = -1, navigate | LocalityLabel = GetLocalityLabel(InterchangeLocalityName, InterchangeCountryName); navigate Locality_Details(LocalityId, PreloadedLocalityLabel) | app/src/pages/Locality_Details/hooks/useLocalityInterchange.ts:67-69 `const row = latest.current.out_InterchangeList.find((p) => p.interchangeLocalityId === localityId); const localityLabel = row ? getLocalityLabel(...) : ''; navigate(`/${APP_ID}/Locality_Details`, {...})` | present |  |

## Locality_LocalityContacts

### identity

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Locality-214 | identity | Block (tab Locality Contacts) | input In_LocalityId; data Get_LocalityCommunityBusinessContacts; CommunityBusinessCard_Content_Block list; ContactPopup_ByPhone; EmptyList; handlers Handler_CallPopup_Cancel, Handler_MessageOnClick, Handler_MessagePopup_Cancel/_Email, OnAfterFetch, OnReady, OnClickBookmark, OnClickPhoneOnClick | not found (searched: Locality_LocalityContacts, LocalityContacts block, Get_LocalityCommunityBusinessContacts, CommunityBusinessCard, No Locality Contacts in app/src; the tab shows ComingSoon, see app/src/pages/Locality_Details/Locality_DetailsPage.tsx:215-219) | block file present in TST (Handler_MessageOnClick x4, ContactPopup_ByPhone x7); not used by the TST Locality_Details view (x0) | Block exists on TST but the TST screen never renders it (constant `$if(true)` ComingSoon) |

### data

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Locality-215 | data | Get_LocalityCommunityBusinessContacts (server action) | Get_LocalityCommunityBusinessContacts(LocalityId) | not found (app.md word match 0 hits) | - | No repository function, no mock |

### strings

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Locality-216 | strings | EmptyList strings | "No Locality Contacts in this locality", "There doesn't seem to be any Locality", "Contacts in your locality." | not found (grep -rnF in app/src) | present ("No Locality Contacts" x1 in block file) |  |

## Locality_OneSchoolGlobal

### data

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Locality-217 | data | Get_OneSchoolGlobal_List (Get_OneSchoolGlobalListByLocality) | call-server Get_OneSchoolGlobalListByLocality(In_LocalityId); OnAfterFetch | app/src/pages/Locality_Details/hooks/useLocalityOneSchoolGlobal.ts:55 `const cards = await fetchOneSchoolCards(oneSchoolListCallInputs(latest.current, parameters.current));` ; app/src/api/locality/repository.ts:120-127 | present | Server-action name not found (app.md 0 hits); mock: app/src/pages/Locality_Details/mocks.ts:101-118 fictional schools |

### ui

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Locality-218 | ui | If Out_OneSchoolGlobal_List2.Empty -> Directory_EmptyState(OneSchoolGlobal) else OneSchoolGlobal_List | wrapper CustomContainer Neutral0 padding y Small x Base; In_IsLoading, OneSchoolList; Event_OnClick_Bookmark, Event_ScrollEnding, Event_OnClick | app/src/pages/Locality_Details/components/Locality_OneSchoolGlobal.tsx:51-61 `{schools.length === 0 ? (<DirectoryEmptyState ... entityTypeId={Connect_Entity.OneSchoolGlobal} />) : (<OneSchoolGlobal_List ... inIsLoading={isLoading} oneSchoolList={schools} onEventOnClick={onEventOnClick} onEventScrollEnding={onScrollEnding} />)}` | present (Event_OnClick_Bookmark x1) | React does not pass Event_OnClick_Bookmark to the list |

### actions

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Locality-219 | actions | ScreenEvent_OnReady: restored | end | app/src/pages/Locality_Details/hooks/useLocalityOneSchoolGlobal.ts:60 `if (restored && latest.current.isDataFetched) return;` | present |  |
| Directory_Locality-220 | actions | ScreenEvent_OnReady: else | GetSkeletonList_UI_OneSchoolGlobal_ListCard(3); assign List2; refresh | app/src/pages/Locality_Details/hooks/useLocalityOneSchoolGlobal.ts:61-62 `write({ type: 'skeletonShown' }); await refresh();` ; app/src/pages/Locality_Details/components/actions.ts:92-94 skeleton list; name "OneSchoold Global", locality "Adelaide", phone/email skeleton values | present (GetSkeletonList_UI_OneSchoolGlobal_ListCard x5) |  |
| Directory_Locality-221 | actions | OnAfterFetch_Get_OneSchoolGlobal_List | if IsLoading: ListClear(List2), IsLoading False; then ListAppendAll(List2, Out) | app/src/pages/Locality_Details/hooks/useLocalityOneSchoolGlobal.ts:56 `write({ type: 'schoolsFetched', cards });` (reducer in app/src/pages/Locality_Details/hooks/localityBlocksState.ts) | present | Reducer not read line by line; hook comment :35 states the same sequence |
| Directory_Locality-222 | actions | Handler_OnScrollEnding: IsDataFetched and Length >= Offset | StartIndex += Offset; refresh | app/src/pages/Locality_Details/hooks/useLocalityOneSchoolGlobal.ts:65-70 `if (!v.isDataFetched) return; if (v.out_OneSchoolGlobal_List.length < v.getOneSchoolGlobal_List_Offset) return; dispatch({ type: 'nextPageRequested' }); await refresh();` | present (Handler_OnScrollEnding x2) |  |
| Directory_Locality-223 | actions | Handler_OnScrollEnding: else branches | end | app/src/pages/Locality_Details/hooks/useLocalityOneSchoolGlobal.ts:67-68 returns | present |  |

## Locality_Subdivisions

### data

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Locality-224 | data | Get_Subdivision_List (GetSubdivisionCardList_ByLocalityId) | call-server GetSubdivisionCardList_ByLocalityId(In_LocalityId=LocalityId) | app/src/pages/Locality_Details/hooks/useLocalitySubdivisions.ts:63 `const cards = await fetchSubdivisionCards(subdivisionListCallInputs(latest.current, localityId));` ; app/src/api/locality/repository.ts:98-107 | present | Server-action name not found (app.md 0 hits); mock: app/src/pages/Locality_Details/mocks.ts:52-74 fictional supper meetings |

### ui

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Locality-225 | ui | Skeleton + Empty vs List | Skeleton In_IsLoading=Subdivision_Card_List_IsLoading; if Empty and not IsLoading -> Directory_EmptyState(Subdivisions) else list #Subdivision_List on scroll-ending -> OnScrollEnding_RefreshSubdivisions, class "list list-group list--gap-s" | app/src/pages/Locality_Details/components/Locality_Subdivisions.tsx:36,44-55 `<Skeleton id={`${b}-$b1`} isLoading={isLoading}> ... {list.length === 0 && !isLoading ? (<DirectoryEmptyState ... />) : (<OSList id={`${b}-Subdivision_List`} className="list list-group list--gap-s" ... onScrollEnding={onScrollEnding}>` | present |  |
| Directory_Locality-226 | ui | ImageCard_LazyLoading (List) with UBT_LazyImage and SupperMeeting_ImageCard_Content | Event_Click -> OnClick_NavigateToSubdivision; LazyImage EntityId=SubdivisionId, HasErrorMessage True, Width MaxWidth_100vw | app/src/pages/Locality_Details/components/Locality_Subdivisions.tsx:60-77 `<ImageCard ... inCardTypeId={UBT_ImageCardType.List} onEventClick={() => { onClickSubdivision(row.card.subdivisionId); }}` ... `hasErrorMessage` ... `<SupperMeetingCardContent ... inSubdivisionCardContent={row.card.content} />` | present |  |

### actions

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Locality-227 | actions | ScreenEvent_OnReady | restored -> end; else GetSkeletonList_UI_SubdivisionCard(10) + refresh | app/src/pages/Locality_Details/hooks/useLocalitySubdivisions.ts:68-70 `if (restored && latest.current.isDataFetched) return; write({ type: 'skeletonShown' }); await refresh();` | present |  |
| Directory_Locality-228 | actions | OnAfterFetch_Get_Subdivision_List | IsLoading False, ListClear, ListAppendAll | app/src/pages/Locality_Details/hooks/useLocalitySubdivisions.ts:64 `write({ type: 'subdivisionsFetched', cards });` | present |  |
| Directory_Locality-229 | actions | OnClick_NavigateToSubdivision: GetHasCarouselEnabled true | PreloadedSupperMeetings.SupperMeetingIds = ids; SetPreloadObject; navigate SupperMeeting_Carousel(In_StartingSupperMeetingId=Current.SubdivisionId) | app/src/pages/Locality_Details/hooks/useLocalitySubdivisions.ts:83-86 `setPreloadObject({ SupperMeetingIds: ... }); navigate(`/${APP_ID}/SupperMeeting_Carousel`, { In_StartingSupperMeetingId: subdivisionId });` | present (SupperMeeting_Carousel x2) | DEV uses Subdivision_Card_List.Current.SubdivisionId; React uses the clicked id |
| Directory_Locality-230 | actions | OnClick_NavigateToSubdivision: false | navigate SupperMeeting_Details(In_SubdivsionId) | app/src/pages/Locality_Details/hooks/useLocalitySubdivisions.ts:88 `navigate(`/${APP_ID}/SupperMeeting_Details`, { In_SubdivsionId: subdivisionId });` | present |  |
| Directory_Locality-231 | actions | OnScrollEnding_RefreshSubdivisions: IsPaginated / IsDataFetched / Length >= Offset | nested ifs; StartIndex += 20; refresh | app/src/pages/Locality_Details/hooks/useLocalitySubdivisions.ts:75-79 `if (!v.isPaginated \|\| !v.isDataFetched) return; if (...length < v.getSubdivisions_Offset) return; dispatch({ type: 'nextPageRequested' }); await refresh();` | present (IsPaginated x1) | IsPaginated is never set to True (hook comment :37) |

## StatisticsList

### identity

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Locality-232 | identity | Block inputs and events | In_Statistics, In_SearchPrompt (mandatory), In_IsLoading, In_ShowSubtitle; events Event_Clicked(Event_Id), OnParametersChangedEv; locals Local_List, SearchString | app/src/components/directory/StatisticsList/StatisticsList.tsx:15-30 `inStatistics, inSearchPrompt, inIsLoading, inShowSubtitle, onEventClicked, onOnParametersChangedEv` | present |  |

### ui

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Locality-239 | ui | If Local_List.Empty and SearchString <> "": two CustomText | "No results found for '"+SearchString+"'" Neutral9 Small SemiBold; "Try searching for a country or locality." Neutral10 Small Regular | app/src/components/directory/StatisticsList/StatisticsList.tsx:124-143 `inText={"No results found for '" + searchString + "'"}` ... `inText="Try searching for a country or locality."` | present ("Try searching for a country or locality" x1) |  |
| Directory_Locality-240 | ui | Else: list of Statistics_ListItem | class "list list-group list--gap-s"; ExtendedClasses country-flag; In_HighlightWords = If(In_IsLoading, "", SearchString); In_ShowSubtitle; Event_Clicked(Id) | app/src/components/directory/StatisticsList/StatisticsList.tsx:146-165 `<StatisticsListItem inShowSubtitle={inShowSubtitle} inExtendedClasses="country-flag" inStatisticsOptions={item.StatisticsOptions ?? {}} inHighlightWords={inIsLoading ? '' : searchString} onEventClicked={() => onEventClicked?.(item.Id ?? '')}` | present |  |

### actions

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Locality-235 | actions | Action_DefineList: SearchString = "" | Local_List = In_Statistics | app/src/components/directory/StatisticsList/StatisticsList.tsx:41 `if (searchString === '') return inStatistics;` | present (Action_DefineList x6) |  |
| Directory_Locality-236 | actions | Action_DefineList: SearchString <> "" | ListFilter: Index(RemoveAccents(StatisticsOptions.Title), RemoveAccents(SearchString), ignoreCase) <> -1 or Index(RemoveAccents(Statist.. (cut) | app/src/components/directory/StatisticsList/StatisticsList.tsx:42-47 `contains(...Title...) \|\| contains(...Subtitle...)` | present | Pack second condition is cut after "Statist"; React tests Subtitle |
| Directory_Locality-237 | actions | OnParametersChanged | Action_DefineList; trigger OnParametersChangedEv | app/src/components/directory/StatisticsList/StatisticsList.tsx:91-98 `latest.current?.()` in an effect on [inStatistics, inSearchPrompt, inIsLoading, inShowSubtitle]; first render skipped | present (OnParametersChanged x3) | React fires the event after each change of the four inputs, not on the first render |
| Directory_Locality-238 | actions | ScreenEvent_OnReady | Action_DefineList; ReactiveInstance_ForceUpdate of List | app/src/components/directory/StatisticsList/StatisticsList.tsx:70-71 comment "OnReady's ReactiveInstance_ForceUpdate of the List is React's re-render" ; derived list :83 | - |  |

### validations

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Locality-233 | validations | Input #Block_SearchInput constraints | In_Options IsEnabled = In_Statistics.Length > 1; SearchPrompt; Debounce_DelayMS 200; BorderRadius Rounded | app/src/components/directory/StatisticsList/StatisticsList.tsx:109-115 `IsEnabled: inStatistics.length > 1, SearchPrompt: inSearchPrompt, Debounce_DelayMS: 200, BorderRadius: Shape.Rounded` | isEnabledAttr = In_Statistics.length > 1; searchPromptAttr = In_SearchPrompt; debounce_DelayMSAttr = 200 (TST :260-262) | No MaxLength in the pack or in TST (no match for maxLength in options) |
| Directory_Locality-234 | validations | Input events | Event_ClearString -> Handler_Search_ClearString; Event_Submit/Event_OnChange -> Handler_Search_OnChange | app/src/components/directory/StatisticsList/StatisticsList.tsx:116-120 `onEventOnChange={setSearchString} onEventSubmit={setSearchString} onEventClearString={() => { setSearchString(''); }}` | present (Handler_Search_ClearString x2) |  |

## Statistics_Icons

### ui

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Locality-241 | ui | Row 1: Members, Households, SupperMeetings or Localities | If UI_StatisticsTexts.SupperMeetings = "" -> IconText Localities (Error); else CustomText SupperMeetings with inline icon | app/src/components/directory/StatisticsIcons/StatisticsIcons.tsx:47,52-69 `const supperMeetings = t.SupperMeetings ?? ''; ... supperMeetings === '' ? (count(t.Localities ?? '', ... UBT_Color.Error)) : (<CustomText ... inText={supperMeetings} inlineIcon={{ ... IconColorId: UBT_Color.Orange }}` | present (DoesntHaveSupperMeetings x1) |  |
| Directory_Locality-242 | ui | Row 1 icons Members (Purple) and Households (Primary), size NonStandard_16 | GetEntityType_Icon(Member / Household) | app/src/components/directory/StatisticsIcons/StatisticsIcons.tsx:52-53 `count(t.Members ?? '', getEntityType_Icon(Connect_Entity.Member), UBT_Color.Purple)` / `Households ... UBT_Color.Primary` | present |  |
| Directory_Locality-243 | ui | Row 2: Brothers (Boy, BlueNonStandarDarker), Sisters (Girl, PinkNonStandardDarker) | Columns_Three SameSize; Right empty | app/src/components/directory/StatisticsIcons/StatisticsIcons.tsx:71-75 | present |  |

## Statistics_TypedItem

### identity

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Locality-244 | identity | Block inputs | UI_CountryStatistics (mandatory); In_HideNavigation; In_HideBorder; In_ImageEntityTypeId default Locality; In_ImageEntityId; In_HasImage (mandatory) | app/src/components/directory/StatisticsTypedItem/StatisticsTypedItem.tsx:24-39,47-55 `inHideNavigation = false, inHideBorder = false, inImageEntityTypeId = '', inImageEntityId = '', inHasImage = false` | present | React default of In_ImageEntityTypeId is "" (DEV default Entities.Connect_Entity.Locality); CountryList passes none |

### ui

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Locality-245 | ui | CustomContainer card | Neutral0, padding Small, margin bottom Small, Border Color.. (cut in pack) | app/src/components/directory/StatisticsTypedItem/StatisticsTypedItem.tsx:60-72 `Background Neutral0, PaddingSize Small, MarginSize BottomSizeId Small, BorderOptions: { Color: UBT_Color.Neutral4, Size: { GeneralSizeId: inHideBorder ? UBT_Size.None : UBT_Size.Small }, Radius: ... Medium }` | present | Pack args cut at "Color:…"; border details from React only |
| Directory_Locality-246 | ui | Left: If ImageURL <> "" or In_HasImage -> UBT_LazyImage | country-flag, Small_40 x Square, Circle, EntityId/EntityType/ImageURL | app/src/components/directory/StatisticsTypedItem/StatisticsTypedItem.tsx:80-89 `imageURL !== '' \|\| inHasImage ? (<EntityLazyImage extendedClass="country-flag" imageSize={{ Height: UBT_ImageSize.Small_40, Width: UBT_ImageSize.Square }}` | present |  |
| Directory_Locality-247 | ui | Middle: CustomText Name + Statistics_Icons; Right: If In_HideNavigation else Icon ChevronRight Neutral6 | name Small SemiBold | app/src/components/directory/StatisticsTypedItem/StatisticsTypedItem.tsx:93-100 | present (In_HideNavigation x3) |  |

## Directory_Locality

### data

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Locality-248 | data | Client variables of the flow (11) | App_PIN_BiometricEnabled, App_Policies_HasPolicyToAccept/RedirectURL, Bookmarks_IsSynched, Directory_Updates_UnreadCount (+CheckFrequency_Minut=5, +LastCheck), IsNavigateToHomeOnBack, Notes_IsSynched, Notifications_IsSynched, Notifications_LastChecked (read/written by shared blocks) | app/src/platform/session/clientVars.ts:30 `UBTConnect.App_PIN_BiometricEnabled: true`; :16 `App_Policies_HasPolicyToAccept: false`; :23-25 `Directory_Updates_UnreadCount`, `_LastCheck`, `_CheckFrequency_Minut`; platform/bootstrap/postLogin.ts:42,44,46,47 Bookmarks/Notes/Notifications; platform/feedback/dialogs/commonUiBack.ts IsNavigateToHomeOnBack; App_Policies_RedirectURL: not found by word (searched: App_Policies_RedirectURL) | - | These variables are used by shared blocks (BottomBar, CommonUI, PIN, policies), not by the five screens; no screen of this flow reads them directly |
| Directory_Locality-249 | data | Server action AddBookmark2 (data.md, other flow or shared block) | called by blocks listed in the pack; see data.md | app/src/api/bookmark/repository.ts:108; mock app/src/mocks/modules/Connect2_MyBookmarks_MUI/mocks.ts:39 | - | Used by a shared block (EntityDetailsActions) |
| Directory_Locality-250 | data | Server action DeleteBookmarkByBookmarkId2 (data.md, other flow or shared block) | called by blocks listed in the pack; see data.md | app/src/api/bookmark/repository.ts:119 | - | app.md: no mock handler found |
| Directory_Locality-251 | data | Server action GetHouseholdCoordinates (data.md, other flow or shared block) | called by blocks listed in the pack; see data.md | app/src/api/household/repository.ts:122-124; mocks/fictional/ldm.ts:235 | - | Other-flow block |
| Directory_Locality-252 | data | Server action GetHouseholdDetails (data.md, other flow or shared block) | called by blocks listed in the pack; see data.md | app/src/api/household/repository.ts:135; api/household/mapper.ts:250 | - | app.md: no mock handler found |
| Directory_Locality-253 | data | Server action GetNotesByItemId (data.md, other flow or shared block) | called by blocks listed in the pack; see data.md | not found (app.md 0 hits) | - | No React function, no mock; used by shared notes blocks |
| Directory_Locality-254 | data | Server action GetSubdivisionLocation_BySubdivisionId (data.md, other flow or shared block) | called by blocks listed in the pack; see data.md | not found (app.md 0 hits) | - | No React function, no mock |
| Directory_Locality-255 | data | Server action Get_OneSchoolGlobalDetails (data.md, other flow or shared block) | called by blocks listed in the pack; see data.md | not found (app.md 0 hits) | - | OneSchoolGlobalDetails screen is outside this flow |
| Directory_Locality-256 | data | Server action Get_UI_MembersStatistics (data.md, other flow or shared block) | called by blocks listed in the pack; see data.md | not found (app.md 0 hits) | - | No React function, no mock |
| Directory_Locality-257 | data | Server action Get_UI_UpdateItems_UnreadCount_All (data.md, other flow or shared block) | called by blocks listed in the pack; see data.md | app/src/api/update/repository.ts:70; lib/ubtConnect/actions.ts:63 | - | app.md: no mock handler found by that name |
| Directory_Locality-258 | data | Server action Household_GetMembers_Service (data.md, other flow or shared block) | called by blocks listed in the pack; see data.md | not found (app.md 0 hits) | - | React uses Household_Card/DataActionGetMembers (api/household/repository.ts) |
| Directory_Locality-259 | data | Server action Member_ContactDetails_Service (data.md, other flow or shared block) | called by blocks listed in the pack; see data.md | not found (app.md 0 hits) | - | No React function, no mock |
| Directory_Locality-260 | data | Server action Get_Core_LocalityTimezone (data.md, other flow or shared block) | called by blocks listed in the pack; see data.md | not found (app.md 0 hits) | - | Timezone comes with Get_LocalityDetails (TimezoneName, TimezoneOffset) |

### strings

| Id | Area | Element | OutSystems (pack) | React (file:line + quote) | TST | Note |
|---|---|---|---|---|---|---|
| Directory_Locality-261 | strings | Strings of the flow (strings.md, 73 literals) | all user-visible candidates | N strings found: 60 of 68 checked literals are found by `grep -rnF` in app/src (icon JSON and CSS selector excluded) | - | See the next rows for the not-found ones |
| Directory_Locality-262 | strings | String not found: Sorry, we couldn't find any results for your search. Please check your spelling or try different keywords. | strings.md | not found (searched: exact text in app/src *.ts *.tsx, tests excluded) | - | React has it in JSX with `&apos;` (app/src/pages/CountryDetails/components/CountryDetailsContent.tsx:251-252, line wrapped); exact grep fails on the apostrophe form |
| Directory_Locality-263 | strings | String not found: No Locality Contacts in this locality / There doesn't seem to be any Locality / Contacts in your locality. | strings.md | not found (searched: exact text in app/src *.ts *.tsx, tests excluded) | - | Block Locality_LocalityContacts is not in React |
| Directory_Locality-264 | strings | String not found: We have noticed you are using an old version of Connect. / If you have any issues upgrading... / ...unsupported version of Android System Webview. | strings.md | not found (searched: exact text in app/src *.ts *.tsx, tests excluded) | - | Strings of blocks UnsupportedVersion_* (flow App_Common); not found in app/src by exact text |
| Directory_Locality-265 | strings | String not found: No change today | strings.md | not found (searched: exact text in app/src *.ts *.tsx, tests excluded) | - | Block Directory_CommunityNumbers (dead branch in CountryList; absent on TST) |
