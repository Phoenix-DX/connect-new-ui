# Route spec: CountryDetails

## Summary
| Item | Value |
|---|---|
| Route | `/UBTConnect/CountryDetails` with inputs `CountryCode: Text` [routes.generated.ts:40; CountryDetails.mvc.js model :65] |
| Tier | lite |
| Captured | 2026-10-14, viewport 390×844, states: default, loading, offline [analysis/states.json] |
| Shared/shell components used | Layout_DetailPage, SubLayout_Browse_Section, CustomContainer, Columns_Two, IconText, Icon, CustomText, SkeletonSection, Input, LeafletMap (`src/shared/Leaflet/LeafletMap`), Statistics_TypedItem, BottomBarMenu, CommonUI_InsideLayout, FilterSheet, Directory_LegendBottomSheet, OSList, NotCaptured [pack.md Block plan] |
| Screen-specific components | `components/actions.ts` (re-exports of module client actions from the shared libs, CR-CountryDetails-1 applied), `components/staticEntities.ts` |

## Specification
### Structure
Layout_DetailPage `$b1` (title = CountryName, or "Browse Directory" when CountryName is "" [mvc.js:215]); content
SubLayout_Browse_Section `$b2`:
- Top: CustomContainer `$b3` (Neutral0, padding Base) → clickable Container → Columns_Two `$b4` (margin-left-base, ReduceLast):
  IconText `$b5` "Select another country to view" (SemiBold, spacing Base, icon `$b6` location_on Neutral7) | Icon `$b7`
  chevron_right [mvc.js:254-423; dom/default.html:40-96].
- Bottom: LeafletMap `LeafletMap` when Center is not empty and (IsDataFetched or HasFetchError), else SkeletonSection `$b9`
  (loading) with an empty `leaflet-container` Container [mvc.js:426-600; offline.html:99-103]. Map inputs:
  - Clustering on.
  - ArcGIS tile URL (min 2 / max 20, subdomains a-d).
  - MapOptions (Center, zoom 5, min 2, max 20, bounds ±100/±190, no attribution, MaxBoundsViscosity 0).
  - ZoomControlOptions (bottomright, custom, add/remove icons text-primary) [mvc.js:427-491].
- CustomContainer `$b10` (Neutral0, padding y Small x Base): Block_Search (margin y Small) → Input Block_SearchInput
  (IsEnabled = Out_LocalitiesStatistics.Length > 1, "Search locality", debounce 200, rounded) [mvc.js:637-743]; Legend
  (padding y Base): Columns_Two Title (ReduceLast, Center): CustomText `$b15` "Browse by Locality" (Neutral10, Base,
  SemiBold) | Icon `$b16` info Primary 16 (click = OnClick_LegendInfo); LocalityCount (padding top Base) → Container
  `text-align: right;` → SkeletonSection `$b18` (loading = not (IsDataFetched or HasFetchError)) → CustomText `$b19`
  "<n> Locality/Localities" (Neutral7, Small, Regular, justify) [mvc.js:744-978].
- Then, one of three parts:
  - While not (IsDataFetched or HasFetchError): SkeletonSection `$b20` with three Statistics_TypedItems (`$b21`-`$b23`,
    "Loading Name", 111/11/11/11/123) [mvc.js:979-1139].
  - Else EmptyList `$b24` when Local_List is empty and SearchString <> "" (NotCaptured: no shared EmptyList, never
    captured [pack Gaps]).
  - Else the List (`list list-group`, animateItems) of Local_List: clickable Container → Statistics_TypedItem
    `l1-122_<i>-$b25` [mvc.js:1141-1262; dom/default.html:231-470].
- Bottom: BottomBarMenu `$b26` ActiveItem Directory [mvc.js:1274-1294]; CommonUI_InsideLayout `$b27` [mvc.js:1296-1314];
  after the layout FilterSheet `$b28` and Directory_LegendBottomSheet `$b29` (ShowLocalities False) [mvc.js:1318-1446].

### Data
| Call | Kind | Trigger (call-sites root) | Inputs | Outputs used | Server side (MCP / cache) | Mock scenarios |
|---|---|---|---|---|---|---|
| `CountryDetails/DataActionGetLocalityStatistics` | data | fetch at start / OnReady → Action_RefreshData; FilterSheet ApplyFilters [call-sites.md] | screen variables (CountryCode, OriginalCountryCode, SearchString, HasFiltersApplied, sheet ids, Local_MapId) [fixture 02-e657cfcb inputs] | Out_LocalitiesStatistics, CountryName | recorded TST (AR) | real = recording (Q1: other countries → AR recording), empty, error, loading |
| CacheControl_AllCountries / CacheControl_UserInfo GetCacheInfo, GetSignedImagesInBulk, app-start calls | data / server | shared blocks and shell [calls.md] | — | — | shared mocks | shared |

### Behaviour
| Element / lifecycle | Event | Logic | Calls | Navigates to (params) | Feedback |
|---|---|---|---|---|---|
| Screen | OnInitialize | OriginalCountryCode = CountryCode [mvc.js:2559-2575] | — | — | — |
| Screen | OnReady | if view restored from cache and IsDataFetched: nothing; else Action_RefreshData: Out = GetSkeletonList_UI_LocalityStatistics(10), refresh [mvc.js:1588-1630, 1500-1527] | GetLocalityStatistics | — | — |
| Data action | OnAfterFetch | Action_DefineList; Center = [Out.Current.Latitude, Out.Current.Longitude]; MarkersList = one marker per locality (Id, Type Locality, ExtraData = Statistics.Title, Pin_Member.svg 20×24, anchor 10,24, popup anchor 0,-24, popup close button, not auto-close, interactive, content "Dummy") [mvc.js:2065-2170] | — | — | — |
| Action_DefineList | — | SearchString "" → Local_List = Out; else filter Index(RemoveAccents(Name), RemoveAccents(SearchString), ignore case) <> -1 [mvc.js:1723-1760] | — | — | — |
| Top container | click | Action_ManuallyOpenFilterSheet: when the filter sheet is loaded, ShowSubscription → App_Subscription_ShowUpgradePopUp else BottomSheetOpen(Filter_BottomSheetId) [mvc.js:1644-1712] | — | — | upgrade popup |
| Info icon | click | BottomSheetOpen(BottomSheetId) [mvc.js:1559-1585] | — | — | — |
| Search input | OnChange / Submit / ClearString | SearchString = value (or ""), Action_DefineList [mvc.js:2197-2228, 2501-2527] | — | — | — |
| List item / popup link | click | Handler_StatisticsList_Clicked(Id): Id <> "" → HasAccessToRegion(Id, CountryCode): yes → LocalityLabel = GetLocalityLabel(Name, CountryName) when found, navigate; no → upgrade popup [mvc.js:2366-2440] | — | `/UBTConnect/Locality_Details` (LocalityId, PreloadedLocalityLabel) | upgrade popup |
| LeafletMap | SetCallbacks / OnInitialized / OnMarker_Clicked / OnParametersChanged | popup binding = Directory_BrowseByCountry_TooltipBuilder (link with ExtraData, click → Handler_StatisticsList_Clicked(Marker.Id)); Local_MapId = MapId, setTimeout 0 → Action_InvalidateMapSize (Local_MapId <> "": Map_InvalidateSize, Map_FitBoundsAuto); marker click → openPopup; parameters changed → Action_InvalidateMapSize [mvc.js:2237-2310, 2460-2490, 1933-1960, 1768-1790; UC Directory_BrowseByCountry_TooltipBuilder; Leaflet.controller.js:1137-1225, 3823-3870] | — | — | — |
| FilterSheet | Loaded / SheetInitialized / ApplyFilters | IsLoaded = True, ShowSubscription = arg; Filter_BottomSheetId = Id; CountryCode = OriginalCountryCode when the first list has no selection or Choice None, else its first selected id; HasFiltersApplied = arg; refresh [mvc.js:2024-2050, 1896-1915, 1793-1835] | GetLocalityStatistics | — | — |
| Directory_LegendBottomSheet | SheetInitialized | BottomSheetId = Id [mvc.js:2329-2350] | — | — | — |

### States
| State | Condition (expression) | Captured | Scenario |
|---|---|---|---|
| default | data fetched, 3 localities, map shown | dom/default.html | real |
| loading | not (IsDataFetched or HasFetchError): map skeleton, count skeleton, 3 skeleton cards | the capture shows the fetch-timeout state instead (10 Localities, empty list, Service Interruption toast) [loading.html:1-20, 185-206] | loading |
| offline | HasFetchError: map skeleton (Center empty), "10 Localities" from the skeleton list, empty list [offline.html:99-190] | dom/offline.html | error |

## Patterns used
- P-PARAMS: CountryCode from the query string; Locality_Details navigation with LocalityId / PreloadedLocalityLabel.
- P-DATA / P-CALLS / P-MOCKS: `api.ts` useGetLocalityStatistics (callAction with the screen-variable names), `mocks.ts` recordedHandler.
- P-STATES: skeletons and error state as compiled; EmptyList as NotCaptured.
- P-BACK: useViewState for CountryCode, SearchString, HasFiltersApplied; useWasRestoredFromCache in OnReady.
- P-LIST: OSList for the locality list.
- P-OSUI: bottomSheetOpen from `src/shared/osui/lib/actions.ts`.
- P-DIALOG: showUpgradePopUp from `src/shell/dialogs`.

## Feature flags
- `action:connect_LaunchDarkly_PermissionCheck`, `action:getFlagURLByCountryCode`, `action:map_GeoJSON_Feature_Add`, `clientVar:App_PIN_BiometricEnabled`, `key:LeafletMap`, `registeredCallbackEvents.onToggle`: decision not a flag (false positive, user 2026-10-14); not read by this route's own code.
- `action:getHasC1DirectoryView` (C2EnableC1DirectoryView): decision default-only, TST on; read inside shared blocks only.
- `action:getHasNewBookmarks` (C2NewBookmarks), `launchDarkly_FF.mobileDirectoryBookmarkNote`: decision default-only, TST off; read inside shared blocks only.

## Unclear points
- Data for a country other than the recorded AR after Apply filters → Q1 (answered, auto-accepted 2026-10-15 16:59).
- Map tiles are external (ArcGIS) → Q2 (answered, auto-accepted 2026-10-15 16:59). Parity needs no tile exemption: the capture masks the tiles as user images, painted out on both sides [parity/default.json].
- Marker attributes differ in the default state because the shared markerJSON lower-cases MarkerOptions → Q3 (answered, auto-accepted 2026-10-15 16:59).

## Decisions to confirm
- Q1 → A (answered by the user 2026-10-15 [questions.md Q1]): unrecorded countries answer the AR recording (recordedHandler fallback, console warning).
- Q2 → A (answered by the user 2026-10-15 [questions.md Q2]): original ArcGIS tile URL kept; no tile exemption needed.
- Q3 → A (answered by the user 2026-10-15 [questions.md Q3]): markers keep the compiled inputs. CR-CountryDetails-2 (applied) fixed the marker difference in the default state [CR-CountryDetails-2.md].
- Exemptions added (capture artifacts): CAPTURE-LOADING-FETCH-TIMEOUT-COUNTRYDETAILS (+ -LAYOUT) for the timed-out loading capture, CAPTURE-LINK-HREF-CURSOR-LEAFLET-ZOOM for the replayed zoom links without href.
- EmptyList (search without result) renders `NotCaptured` with the compiled title/text: no shared EmptyList block, never captured [pack Gaps].
- Loading skeleton cards (3 "Loading Name" items) built from the compiled code; the loading capture shows the fetch-timeout state instead (exemption CAPTURE-LOADING-FETCH-TIMEOUT-COUNTRYDETAILS).
- Quirk kept as compiled: list images use `Out_LocalitiesStatistics.Current.MainHallSubdivisionId`. With a search string, Local_List is a new list, so every card asks the first locality's image [mvc.js:1240].
- The route first ported the module client actions that were not in shared code (`components/actions.ts`). CR-CountryDetails-1 (applied) moved them into the shared libs, and `components/actions.ts` re-exports them [CR-CountryDetails-1.md].

## Change requests
- CR-CountryDetails-2: shared LeafletMap markerJSON must keep the OutSystems MarkerOptions names (Keyboard, Opacity…): markers lack tabindex/role and get opacity 0 (applied) [CR-CountryDetails-2.md].
- CR-CountryDetails-1: move GetLocalityLabel, GetSkeletonList_UI_LocalityStatistics, Directory_BrowseByCountry_TooltipBuilder (UBTConnect) and Map_FitBoundsAuto, Map_Marker_OpenPopUp, Map_SetPopupBindingCallback (Leaflet) into the shared libs (applied) [CR-CountryDetails-1.md].

## Parity
| State | Scenario | structure | class | attr | style | layout | Exemptions fired |
|---|---|---|---|---|---|---|---|
| default | real | 0 | 0 | 0 | 0 | 0 | CAPTURE-LINK-HREF-CURSOR-HOMEFEED, CAPTURE-LINK-HREF-CURSOR-LEAFLET-ZOOM, CAPTURE-BADGE-MASKED-TEXT-HOMEFEED, SLIDER-APPEAR-TIMING |
| loading | loading | 0 | 0 | 0 | 0 | 0 | CAPTURE-LOADING-FETCH-TIMEOUT-COUNTRYDETAILS (+ -LAYOUT), CAPTURE-LINK-HREF-CURSOR-HOMEFEED |
| offline | error | 0 | 0 | 0 | 0 | 0 | CAPTURE-LINK-HREF-CURSOR-HOMEFEED, SLIDER-APPEAR-TIMING |

## Server-side notes
- GetLocalityStatistics must scope the localities to what the session user may see; HasAccessToRegion is a client-side check that only hides navigation (it opens the upgrade dialog).
