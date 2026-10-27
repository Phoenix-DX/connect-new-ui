# Flow report: Map

| | |
|---|---|
| Status | draft |
| Date | 2026-10-27 |
| Screens on DEV | 1 (built: 0; not built: Map, board `skip` V4a skip:variant) |
| Sources | `pack/*.md` (DEV model, MCP dump 2026-10-27), `migration/board.md`, `migration/knowledge/flag-values-tst.json`, TST file list (`tst_source.py list Map`) |
| Rule | TST is the source of truth; DEV is the checklist. A difference is noted in §6. |

## 1. Summary

- Counts by verdict: match 0 · partial 0 · missing 0 · differs 0 · mock-only 0 · n/a 21 · unclear 0 (same as `checklist.json`).
- No finding. The one screen is not built, so no React comparison exists.
- Status of the flow: a React user cannot open a map. The entry icon in Locality_Details is hidden when `C2EnableMaps` is false, and it is false on TST.

## 2. Screens

### 2.1 Map

Board decision: `skip`, reason `V4a skip:variant`: the entry icon in Locality_Details shows only if `C2EnableMaps` is true (TST value false). Revisit when the flag is enabled (user, 2026-10-14). The probe of 2026-10-14 still shows `getHasMapsEnabled` false.

What the DEV screen does:
- Inputs: `In_InitialLatitude` and `In_InitialLongitude` (mandatory), `In_InitialZoomLevel` (default 11). Roles: Registered, UBTOne_User.
- It shows a full-screen Leaflet map (block `LeafletMap_Updated`, plugin `Leaflet`) with an ArcGIS World Street Map tile layer. Markers and GeoJSON layers come from four cache-control blocks: countries, localities, global entities (OneSchoolGlobal, supper meetings) and households. They load by zoom level (countries from zoom 3, entities from zoom 8) and by the visible bounds.
- A bottom sheet lists nearby and bookmarked places in sections (Explore). A second sheet shows the details of the selected place (`Map_PoIPreview`: household, locality, subdivision, OneSchoolGlobal). The user can bookmark an item, search (`ScreenBlock_Search`) and filter by tag.
- Two sidebars: search, and map settings. The settings sidebar saves what the user shows on the map (household name, address) through `Update_VisibilityPreferences`.
- The screen can fly to the user position (device geolocation) and shows a popup when the location is not available.
- Lifecycle: OnInitialize, OnReady and OnDestroy. It has about 60 screen actions (map events, cache events, bottom sheet events, preferences).

What a build needs:
- Blocks of the flow: `CacheControl_CountriesMarkers`, `CacheControl_GlobalEntities`, `CacheControl_Household`, `CacheControl_Localities`, `Map_ExploreList_EmptyState`, `Map_ExploreList_Item`, `Map_ExploreList_Section`, `Map_LocationInfoPopup`, `Map_PoIPreview`.
- Blocks of other flows: `BottomBarMenu`, `CommonUI_InsideLayout`, `ScreenBlock_Search` (Directory_Search), `CacheControl_UserInfo_Wrapper`, `SectionSeparator`, `SupperMeeting_ImageCard_Content`, `Directory_EntityDetailsActions`, `FilterSheet` and the OSUI `Sidebar` and `FloatingContent`.
- Client actions: 24 module actions, 22 of them shared (list in `pack/actions.md`), and the Leaflet plugin actions `Map_FlyTo`, `Map_Marker_Add`, `Map_Markers_BulkAddChunked`, `Map_GeoJSON_*`, `Map_GetBoundsByZoomLevel`, `Map_Layer_SetVisible`.
- Server actions: 20 service actions, listed in `checklist.json` (rows Map-002 to Map-021).
- Plugin and provider: the Leaflet map plugin and the ArcGIS tile service (`server.arcgisonline.com`). The pack does not state the license or the key of the provider. A React build must choose a map library and a tile provider. This is a decision for the user.
- Flags: `C2EnableMaps` (entry in Locality_Details through `GetHasMapsEnabled`). The bottom bar block has the input `useMapsItems`.
- Local entities: `ConnectSearch_RecentClickedResults` and `ConnectSearch_RecentSearchTerm`.
- Verdict `n/a`.

## 3. Blocks of the flow

Not compared: no built screen uses them. The nine blocks are named in §2.1.

## 4. Shared blocks and actions

Not checked here (shared). The shared actions are in `../_shared/pack/actions.md`.

## 5. Findings

None.

## 6. DEV vs TST differences

| Element | DEV (model) | TST (compiled code) | What the React app follows | Source |
|---|---|---|---|---|
| Screen Map | present | present (`UBTConnect.Map.Map.mvc.js`, with the four Map_* block files) | not built | `tst_source.py list Map` |
| `C2EnableMaps` | not read in the pack | false (`getHasMapsEnabled`) | false | `migration/knowledge/flag-values-tst.json` |

## 7. Questions for the user

None. The board reason still holds: the flag is false on TST.

## 8. Counts

| Area | Items | match | partial | missing | differs | mock-only | n/a | unclear |
|---|---|---|---|---|---|---|---|---|
| identity | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| data | 20 | 0 | 0 | 0 | 0 | 0 | 20 | 0 |
| ui | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| actions | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| validations | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| logic | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| strings | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| **total** | 21 | 0 | 0 | 0 | 0 | 0 | 21 | 0 |
