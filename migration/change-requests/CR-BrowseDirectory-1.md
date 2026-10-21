# CR-BrowseDirectory-1: Leaflet module actions — export Map_FitBoundsAuto, Map_SetPopupBindingCallback, Map_Marker_OpenPopUp

- Status: applied
- Raised by: BrowseDirectory, 2026-10-15
- Block: Leaflet module client actions → `app/src/shared/Leaflet/lib/actions.ts`
- Other routes using it (catalog/blocks.md): CountryDetails (same LeafletMap use: TileLayer, MarkersList, clustering,
  zoom control; screen actions call the same Leaflet actions)
- Related question: BrowseDirectory Q3 (open: port in the route or wait for the shared lib)

## Evidence
- Screen calls: `sources/pretty/UBTConnect.Directory_Locality.BrowseDirectory.mvc.js:977-980` (Action_InvalidateMapSize:
  Map_InvalidateSize then Map_FitBoundsAuto), `:1095` (LeafletMapSetCallbacks: Map_SetPopupBindingCallback),
  `:1241` (Handler_LeafletMapOnMarker_Clicked: Map_Marker_OpenPopUp).
- Compiled actions: `sources/pretty/Leaflet.controller.js:1137-1230` (Map_FitBoundsAuto: Map_GetObject_FromId,
  Map_MarkerCluster_UsingCluster_Check; with clustering, the cluster layer's bounds: a single point → setView(point, 5),
  else fitBounds(bounds, {padding [80, 80], animate true, duration 1}); without clustering raises
  UserException "Leaflet.UserException2" "Not implemented"), `:3823-3870` (Map_Marker_OpenPopUp: MarkerObj.openPopup()),
  `:4897-4925` (Map_SetPopupBindingCallback: SetToObject_Object(MapId, LL_MapObject_Attr_PopupBindingCallback, Callback)).
- `app/src/shared/Leaflet/lib/actions.ts` exports the primitives (map_GetObject_FromId,
  map_MarkerCluster_UsingCluster_Check, map_MarkerCluster_GetOrCreateLayer, setToObject_Object,
  lL_MapObject_Attr_PopupBindingCallback) but not these three actions.
- Parity difference it explains: default state, the map view (tile and marker transforms) stays at the first locality
  with zoom 5 instead of the fitted bounds of the three pins (`dom/default.html:101-127`).

## Expected change
Export `map_FitBoundsAuto(mapId)`, `map_SetPopupBindingCallback(mapId, callback)` and `map_Marker_OpenPopUp(markerObj)`
from `app/src/shared/Leaflet/lib/actions.ts`, ported 1:1 from the lines above.

## Workaround in the route until applied
None rendered: the three calls are behaviour, not markup. Until Q3 is answered the route does not call them (the map
keeps the MapOptions view; marker popups are bound without the screen's tooltip-builder callback; a marker click does not
open the popup).

## Resolution (foundation owner)
- Change: see CR-CountryDetails-1 (same batch): `map_FitBoundsAuto`, `map_SetPopupBindingCallback`, `map_Marker_OpenPopUp` exported from `app/src/shared/Leaflet/lib/actions.ts`; the route imports them through `components/actions.ts`.
- Regression parity run on (2026-10-15, after the last code change): CountryDetails 0/0/0, CountryList 0/0/0, BrowseDirectory loading/offline 0 and default 2 (`cursor auto → pointer` on the two zoom links: exemption CAPTURE-LINK-HREF-CURSOR-LEAFLET-ZOOM matches only `text-primary`, BrowseDirectory's links are `text-neutral-8`; difference present before this batch, exemption scope for the user), BrowseCountries, HomeFeed, Search, Services 0.
