# LeafletMap

OutSystems: `Leaflet.Leaflet.LeafletMap` · pack `migration/blocks/Leaflet.Leaflet.LeafletMap.md`

| Input                   | Type                  | Prop                      | Default                  |
| ----------------------- | --------------------- | ------------------------- | ------------------------ |
| MapOptions              | MapOptions            | `mapOptions`              | `{}`                     |
| MarkersList             | MarkerWithWindow list | `markersList`             | `[]`                     |
| TileLayer               | TileLayer             | `tileLayer`               | `{}` (OpenStreetMap URL) |
| GeoJSON_Features        | GeoJSONFeature list   | `geoJSONFeatures`         | `[]`                     |
| ZoomControlOptions      | ZoomControlOptions    | `zoomControlOptions`      | `{}`                     |
| useClustering           | Boolean               | `useClustering`           | `false`                  |
| centerToCurrentLocation | Boolean               | `centerToCurrentLocation` | `false`                  |

Events: OnInitialized, SetCallbacks, OnMarker_Clicked, OnGeoJSON_Clicked, OnZoomEnd, OnMoveEnd,
OnGoToMyLocation_Clicked, OnParametersChanged. The props are `onOnInitialized`, `onSetCallbacks`,
`onOnMarkerClicked`, `onOnGeoJSONClicked`, `onOnZoomEnd`, `onOnMoveEnd`, `onOnGoToMyLocationClicked`,
`onOnParametersChanged` (arguments as compiled).

Placeholders: none.

## Captured variants (2 tested)

| Capture | Source                                  | What it shows                             |
| ------- | --------------------------------------- | ----------------------------------------- |
| v1      | pack variant 1, BrowseDirectory/default | three member pins, neutral-8 zoom control |
| v2      | pack variant 2, CountryDetails/default  | three pins, primary zoom control          |

## Not captured / not settled

- Module scripts Leaflet.leafletsrc.js / Leaflet.leaflet_markerclustersrc.js = npm leaflet 1.9.4 / leaflet.markercluster 1.5.3 (ADR-3).
  `lib/leaflet.ts` loads them with a global `L`, as the JS nodes expect.
- This block does not load the Leaflet CSS (no CSS rule). The screen or the theme must load it.
- The React component ports these 1:1 (`lib/actions.ts`, Leaflet.controller.js line refs):
  - LL_* names, Map_GetObject_FromId, Get/SetToObject_*.
  - Map_Marker_Add (Create_Marker, tooltip and popup binding), Map_Marker_DeleteAll.
  - The cluster layer actions.
  - Map_SetTileLayer (with WithParentFallback), Map_Zoom_Control, Map_SetCurrentLocation, Map_InvalidateSize.
  - Map_Zoom_GetLevel, Map_GetVisibleBoundaries.
  - JSON Serialize: `lib/json.ts` (full record, JSON names).
- GeoJSON (wave 4D): Map_DefineGeoJSON (LeafletMap.mvc.js:562-610) adds each GeoJSON_Features item with
  Map_GeoJSON_Feature_Add (controller :1442-1597).
  1. An Id "" gets a GUID.
  2. The block skips a feature without geometry.
  3. The parsed FeatureJSON gets Id, Type and ExtraData.
  4. The feature joins the one `L.geoJSON` layer of the map, unless its Id is in the registry.
     Map_GeoJSON_GetLayer (:1871-1978) returns the layer. Map_GeoJSON_GetRegistry (:1980) returns the registry.
     The style comes from the callback that Map_GeoJSON_Callback_SetStyle stores (:1325-1440).
  5. A click raises OnGeoJSON_Clicked(Id, MapId, Type, ExtraData).
  6. Map_Internal_Layer_SetStyle (:2792-2857) calls `setStyle`.
     The PathOptions use Serialize Default Values False (controller :2841, `pathOptionsJSON`).
     The serialization leaves out attributes that equal their default false / "" / 0.
     A feature without PathOptions keeps its layer style.
- The React component keeps the GeoJSON behavior as compiled:
  - Every Map_UpdateOptions adds the features again. A feature without Id gets a new GUID, and the block draws it again. A registered feature gets one more click listener.
  - A Point feature (a marker, no `setStyle`) throws in SetStyle.
  - The code reads `Object.values(layer._layers)` through the public `getLayers()`.
  - The block does not call GeoJSON_Callback_Style (the CRI / NIC sample style, :136-271). The React component does not port it.
- Screens: BrowseDirectory and CountryDetails pass TileLayer, MarkersList, useClustering, MapOptions and ZoomControlOptions. They pass no GeoJSON_Features. Locality_Details has no LeafletMap.
- The GeoJSON tests use a mock feature set (two polygons and a feature without geometry). The tests force the SVG renderer on (jsdom has no `createSVGRect`) and stub the tile layer.
- The test is not testCapturedVariants. jsdom has no layout, so the test removes these items on both sides before the DOM diff:
  - tiles (stubbed, no network)
  - Leaflet geometry styles
  - the zoom proxy
  - browser-detection classes
- The map container keeps a generated id (the JS nodes find the map with getElementById).
- On React unmount, the component removes the map (OutSystems destroys the element).
- OnParametersChanged before the map exists only raises the event.
- Map_Marker_Add: the extract truncates the cluster layer Type argument (`UseTypeBasedClustering ? Marker.Type : …`). Assumption: "" (the block always passes False).
- Pins are person data. Stories use mock coordinates, zoom 4 / 3 as the captured proxy scale shows.
