# Route spec: BrowseDirectory

## Summary
| Item | Value |
|---|---|
| Route | `/UBTConnect/BrowseDirectory` with inputs `CountryCode: Text` [pack.md; BrowseDirectory.mvc.js:92-96] |
| Tier | lite |
| Captured | 2026-10-14, viewport 390×844, states: default, loading, offline [analysis/states.json] |
| Shared/shell components used | Layout_DetailPage, CustomContainer, Columns_Two, IconText, Icon, SkeletonSection (`src/shared/UBTConnectLibrary/*`); SubLayout_Browse_Section, StatisticsList, BottomBarMenu, CommonUI_InsideLayout (`src/shared/UBTConnect/*`); LeafletMap (`src/shared/Leaflet/LeafletMap`) [pack.md Block plan] |
| Screen-specific components | `components/actions.ts` (GetSkeletonList_UI_LocalityStatistics, GetLocalityLabel, Directory_BrowseByCountry_TooltipBuilder; Leaflet Map_FitBoundsAuto, Map_SetPopupBindingCallback, Map_Marker_OpenPopUp: Q3), `components/staticEntities.ts` (TST icon values) |

## Specification
### Structure
- Layout_DetailPage `$b1` (primary, centred title); title = Expression `GetLocalityStatistics.CountryName = "" ? "Browse Directory" : CountryName` [BrowseDirectory.mvc.js:188-201; dom/default.html:21, loading.html:21].
- Content: SubLayout_Browse_Section `$b2` [mvc.js:206-222].
- Top section: CustomContainer `$b3` (background neutral-0, padding base) > Container (onClick Handler_BrowseCountries) > Columns_Two `$b4` (ReduceLast, extended class `margin-left-base`) [mvc.js:224-386; dom/default.html:40-95]:
  - Left: IconText `$b5` ("Select another country to view", spacing base, icon `$b6` book_closed).
  - Right: Icon `$b7` chevron_right.
- Bottom section: If `not Center.Empty` → LeafletMap `LeafletMap` (TileLayer CARTO voyager URL, subdomains a-d, zoom 2-20; MarkersList; useClustering True; MapOptions Center, Zoom 5, MinZoom 2, MaxZoom 20, MaxBounds ±100/±190, AttributionControl False, MaxBoundsViscosity 0; ZoomControlOptions bottomright, custom, `ubt-icon connect-icon-add|remove text-neutral-8`, titles "Zoom in"/"Zoom out", no my-location button) [mvc.js:388-512; dom/default.html:99-150]; else SkeletonSection `$b9` (In_IsLoading True) > Container `leaflet-container` [mvc.js:513-548; loading.html:99-103].
- CustomContainer `$b10` (background neutral-0) > StatisticsList `$b11` [mvc.js:549-646; dom/default.html:151-650]. Its inputs:
  - In_SearchPrompt "Search " + GetLookupConcepts(True).Locality.Singular.
  - In_ShowSubtitle True.
  - In_IsLoading not IsDataFetched.
  - In_Statistics = Out_LocalitiesStatistics as {Id = LocalityId, StatisticsOptions = Statistics}.
- Bottom: BottomBarMenu `$b12` ActiveItem Directory [mvc.js:652-673]; CommonUI_InsideLayout `$b13` [mvc.js:674-693].

### Data
| Call | Kind | Trigger (call-sites root) | Inputs | Outputs used | Server side (MCP / cache) | Mock scenarios |
|---|---|---|---|---|---|---|
| `BrowseDirectory/DataActionGetLocalityStatistics` | data action (fetch "only on demand": not in the start fetch) | OnReady → ScreenEvent_OnReady → Action_RefreshData [call-sites.md; mvc.js:1308-1343, 994-1033] | screen variables MarkersList, Center, Local_MapId, CountryCode [fixtures index.json:143-154] | Out_LocalitiesStatistics, CountryName | country statistics scoped by the server | real = recorded AR answer (3 localities); empty; error; loading |
| App-start calls (SynchAppContext … CacheableMapEntities) | server | shell AppStart [pack Calls 1,3-8] | shell | shell | shell | shell |

### Behaviour
| Element / lifecycle | Event | Logic | Calls | Navigates to (params) | Feedback |
|---|---|---|---|---|---|
| Screen | OnReady | IsViewRestoredFromCache and IsDataFetched → nothing; else Action_RefreshData: Out_LocalitiesStatistics = GetSkeletonList_UI_LocalityStatistics(10), refresh GetLocalityStatistics [mvc.js:1308-1343, 994-1033] | DataActionGetLocalityStatistics | – | – |
| Data action | OnAfterFetch | Center = [Current.Latitude, Current.Longitude] (row 0; an empty list's Current is the default record); for each row append a MarkerWithWindow (Id LocalityId, Type Connect_Entity.Locality, ExtraData Statistics.Title, Pin_Member.svg 20×24 anchor 10,24 popup anchor 0,-24, popup close button, not auto close, interactive, content "Dummy", Latlng) to MarkersList; GetCallback JS result unused [mvc.js:811-917, 1466-1470] | – | – | – |
| Data action | error | screen handleError → Directory_Locality flow handler → Q1 | – | – | shell flow handler (Q1) |
| LeafletMap | OnInitialized | Local_MapId = MapId; setTimeout 0 → Action_InvalidateMapSize: Local_MapId ≠ "" → Map_InvalidateSize, Map_FitBoundsAuto [mvc.js:770-801, 961-993, 1461-1465] | – | – | – |
| LeafletMap | SetCallbacks | popup binding callback = Directory_BrowseByCountry_TooltipBuilder(marker, Handler_StatisticsList_Clicked); Map_SetPopupBindingCallback [mvc.js:1064-1104, 1471-1478] | – | – | – |
| LeafletMap | OnMarker_Clicked | Map_Marker_OpenPopUp(MarkerObj) [mvc.js:1217-1250] | – | – | – |
| StatisticsList | OnParametersChangedEv | Local_MapId ≠ "" → Map_InvalidateSize [mvc.js:1034-1063] | – | – | – |
| Top container | click | Handler_BrowseCountries [mvc.js:937-960] | – | `/UBTConnect/BrowseCountries` | – |
| StatisticsList / popup link | Event_Clicked(Id) | Id ≠ "" → HasAccessToRegion(LongIntegerToText(TextToLongInteger(Id)), CountryCode); access → ListIndexOf LocalityId; found → LocalityLabel = GetLocalityLabel(Name, CountryName) ("Name, Country"); navigate; no access → App_Subscription_ShowUpgradePopUp [mvc.js:1123-1199; UBTConnect.controller.js GetLocalityLabel] | – | `/UBTConnect/Locality_Details` (LocalityId, PreloadedLocalityLabel) | upgrade popup (shell) |

### States
| State | Condition (expression) | Captured | Scenario |
|---|---|---|---|
| default | data fetched: title CountryName, map, 3 locality cards | dom/default.html | real |
| loading | not fetched: title "Browse Directory", map skeleton, 10 skeleton cards (Adelaide / New South Wales) | dom/loading.html | loading |
| offline | fetch failed: same markup as loading | dom/offline.html | error |

## Patterns used
- P-PARAMS: CountryCode from the query string; navigation to BrowseCountries and Locality_Details with the original parameter names.
- P-DATA: `api.ts` adapter for DataActionGetLocalityStatistics, wire shapes mapped to domain types.
- P-CALLS: the data action called on OnReady (not restored or not fetched), with the screen variables.
- P-MOCKS: `mocks.ts` recordedHandler of the reviewed AR fixture; scenarios through the mock layer.
- P-STATES: loading/offline show the skeleton map and the 10 skeleton cards, as the compiled refresh sets them.
- P-BACK: view state (statistics, country name, fetched flag, center, markers) through `useViewState`; a restored view with fetched data does not refresh.
- P-LIST: the shared StatisticsList (OSList inside) renders the list.
- P-DIALOG: the no-access branch opens the shell's upgrade dialog.

## Feature flags
- This screen reads none [pack.md Feature flags; flags.py route BrowseDirectory]. All 7 pack entries are decided and live in shared blocks (BottomBarMenu, LeafletMap):
  - 5 are not flags.
  - C2EnableC1DirectoryView: default-only on.
  - C2NewBookmarks and mobileDirectoryBookmarkNote: default-only off.

## Unclear points
- Directory_Locality flow exception handler: the flow controller is not in the local sources → Q1 (fact, answered by code: `UBTConnect.Directory_Locality.controller.js:12-16`, handleError delegates to App_Common.handleError, so `raiseToFlowHandler` is right) [questions.md Q1]. Build: the shell flow handler `raiseToFlowHandler`, as the fetched flows delegate to App_Common.
- Mock answer for a CountryCode without a recording → Q2 (answered, auto-accepted 2026-10-15 16:59).
- Map_FitBoundsAuto, Map_SetPopupBindingCallback, Map_Marker_OpenPopUp missing from the shared Leaflet lib → Q3 (answered, auto-accepted 2026-10-15 16:59).
- Skeleton rows share the Id "0", so the shared StatisticsList repeats row keys → Q4 (answered, auto-accepted 2026-10-15 16:59).
- Shared marker JSON writes default MarkerOptions values that the original's JSON Serialize omits → Q5 (answered, auto-accepted 2026-10-15 16:59).

## Decisions to confirm
- Q1 (fact, answered by code 2026-10-15 [questions.md Q1]): data-action errors go to the shell flow handler (communication message), as App_Common does (evidence: shell-facts.md:57). The offline capture shows no message.
- Q2 → A (answered by the user, auto-accepted 2026-10-15) [questions.md Q2]: every CountryCode is answered with the AR recording (`recordedHandler`, matchInputs false).
- Q3 → A (answered by the user, auto-accepted 2026-10-15; CR-BrowseDirectory-1 / CR-CountryDetails-1 applied) [questions.md Q3]: Map_FitBoundsAuto, Map_SetPopupBindingCallback, Map_Marker_OpenPopUp and Directory_BrowseByCountry_TooltipBuilder ported in `components/actions.ts` [Leaflet.controller.js:1137-1230, 3823-3870, 4897-4925; UBTConnect.controller.js offsets 83802, 88920]; CR-BrowseDirectory-1 moves the Leaflet ones to the shared lib.
- Q4 → A (answered by the user, auto-accepted 2026-10-15; CR-BrowseDirectory-2 applied) [questions.md Q4]: a React key on the route's StatisticsList remounts it when the data replaces the skeleton. The remount resets text typed in the search while loading; CR-BrowseDirectory-2.
- Q5 → A (answered by the user, auto-accepted 2026-10-15; CR-BrowseDirectory-3 = CR-CountryDetails-2 applied) [questions.md Q5]. The route's markers set Options Keyboard True and Opacity 1 (Leaflet's defaults that the original gets when it omits the record defaults); CR-BrowseDirectory-3.
- OnAfterFetch's GetCallback JS node (Object = Handler_StatisticsList_Clicked) has an unused result and is not ported [mvc.js:838-846].
- The data action sends MarkersList, Center and Local_MapId at their initial values. They can only change after a successful fetch. The only refresh is the one in OnReady, which runs before a fetch [mvc.js:388, 829-901, 1308-1343].
- Exemption (proposed by the route agent, now in `migration/parity-exemptions.json`): `CAPTURE-LINK-HREF-CURSOR-LEAFLET-ZOOM`, style `cursor` only on `a.leaflet-control-zoom-in/-out` (the capture renames href "#" to data-original-href; dom/default.html:136-139).

## Change requests
- CR-BrowseDirectory-1: Leaflet lib: export Map_FitBoundsAuto, Map_SetPopupBindingCallback, Map_Marker_OpenPopUp (applied)
- CR-BrowseDirectory-2: StatisticsList: row keys must not repeat for skeleton rows with the same Id (applied)
- CR-BrowseDirectory-3: Leaflet lib: marker JSON without nested default values (applied)

## Parity
| State | Scenario | structure | class | attr | style | layout | Exemptions fired |
|---|---|---|---|---|---|---|---|
| default | real | see parity/default.json | | | | | |
| loading | loading | see parity/loading.json | | | | | |
| offline | error | see parity/offline.json | | | | | |

## Server-side notes
- DataActionGetLocalityStatistics must scope the statistics to what the session user may see; HasAccessToRegion is a client check only (it hides navigation, the server must still authorize Locality_Details data).
