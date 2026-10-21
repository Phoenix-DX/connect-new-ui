# CR-BrowseDirectory-3: Leaflet lib — marker JSON must omit default values (Serialize Default Values = False)

- Status: applied
- Raised by: BrowseDirectory, 2026-10-15
- Block: Leaflet module (`Map_Marker_Add`, `markerJSON`) → `app/src/shared/Leaflet/lib/json.ts`, `lib/actions.ts`
- Other routes using it (catalog/blocks.md): CountryDetails (same pins), any LeafletMap with MarkersList
- Related question: BrowseDirectory Q5

## Evidence
- `sources/pretty/Leaflet.controller.js:3277`: `OS.JSONUtils.serializeToJSON(MarkerWithWindow.Marker, false, false)`;
  `migration/runtime-sources/OutSystems.js` serializeToJSON(e, t, i, o): `t` = serializeDefaultValues, with
  `enforceDefaultValueSerializationAtThisLevel: true` (new JSON serialization): the top-level attributes are written,
  nested default values are not.
- `Leaflet.model.js` MarkerOptionsRec defaults: Keyboard False, Opacity 0, Draggable False, Title/Alt "", ZIndexOffset 0,
  RiseOnHover False, RiseOffset 0 → omitted, so `L.marker` keeps Leaflet's defaults (keyboard true, opacity 1, …).
- Captured pins: `migration/screens/BrowseDirectory/analysis/dom/default.html:118-120` (`role="button"`, `tabindex="0"`,
  opacity 1).
- `app/src/shared/Leaflet/lib/json.ts:60-80` (markerJSON) writes every field (keyboard false, opacity 0, …).
- Parity difference it explains: default state, `img.leaflet-marker-icon` attr role/tabindex missing and opacity 1 → 0
  (`migration/screens/BrowseDirectory/parity/default.json`, run before the route workaround).

## Expected change
Serialize the marker (and the other JSON Serialize calls with Serialize Default Values = False) without nested default
values, so Leaflet's own defaults apply as in the original. Check the other serializeToJSON calls of
Leaflet.controller.js for the same flag (e.g. :3322 tooltip uses True).

## Workaround in the route until applied
The route sets `Marker.Options.Keyboard = true` and `Opacity = 1` (the values Leaflet applies in the original). Remove
them when this request is applied.

## Resolution (foundation owner)
- Change: see CR-CountryDetails-2 (same fix). `markerJSON(marker, false)` in Map_Marker_Add (:3277),
  `markerJSON(marker, true)` inside the MarkerWithWindow JSON (:3322, :3530), `pathOptionsJSON` with False (:2841); the
  other calls (:4210, :4500, :4971, :5280, LeafletMap.mvc.js:664) use True and were already complete. The route's
  `Keyboard: true` / `Opacity: 1` workaround and the same values in the LeafletMap story are removed; a marker click now
  converts Id / Type / ExtraData as Event_OnMarker_Clicked does (LeafletMap.mvc.js:261-272).
- Regression parity run on (2026-10-15, after the last code change): CountryDetails 0/0/0, CountryList 0/0/0, BrowseDirectory loading/offline 0 and default 2 (`cursor auto → pointer` on the two zoom links: exemption CAPTURE-LINK-HREF-CURSOR-LEAFLET-ZOOM matches only `text-primary`, BrowseDirectory's links are `text-neutral-8`; difference present before this batch, exemption scope for the user), BrowseCountries, HomeFeed, Search, Services 0.
