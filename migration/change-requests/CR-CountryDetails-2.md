# CR-CountryDetails-2: shared LeafletMap — marker options keep their OutSystems JSON names

- Status: applied
- Raised by: CountryDetails, 2026-10-15
- Block: `Leaflet.Leaflet.LeafletMap` → `app/src/shared/Leaflet/lib/json.ts` (`markerJSON`), used by `lib/actions.ts`
  `map_Marker_Add` (Create_Marker)
- Other routes using it: BrowseDirectory (markers), every route with LeafletMap markers
- Related question: none

## Evidence
- Captured markup: `migration/screens/CountryDetails/analysis/dom/default.html:120-122`: every marker
  `img.leaflet-marker-icon` has `tabindex="0"`, `role="button"` and no opacity style (opacity 1).
- The OutSystems JSON names of MarkerOptions are capitalised: the recorded screen variable `MarkersList.EmptyListItem.Marker.Options`
  has `Draggable`, `Keyboard`, `Title`, `Alt`, `ZIndexOffset`, `Opacity`, `RiseOnHover`, `RiseOffset` next to `Icon`
  (`app/src/mocks/fixtures/UBTConnect/DataActionGetLocalityStatistics/02-e657cfcb.json`, inputs). Leaflet reads lower-case
  `keyboard` / `opacity`, so in the original these stay undefined and Leaflet's defaults apply (keyboard true → tabindex 0 +
  role button; opacity 1).
- `markerJSON` writes lower-case `keyboard: false`, `opacity: 0`, `draggable`, `title`, `alt`, `zIndexOffset`,
  `riseOnHover`, `riseOffset`, so the clone's markers get no tabindex/role and opacity 0 (the pins are invisible).
- Parity: `migration/screens/CountryDetails/parity/default.json`: `[attr] … img.leaflet-marker-icon: tabindex: 0 → ∅`,
  `role: button → ∅`, `[style] … opacity 1 → 0` (three markers).

## Expected change
Serialize MarkerOptions with the OutSystems attribute names (as the Leaflet module's JSON Serialize does), so Leaflet
ignores the capitalised ones as in the original; check the icon record (`iconUrl` … lower-case, already right) and the
tooltip / popup records against their OutSystems names the same way.

## Workaround in the route until applied
None: the route passes the compiled marker inputs; the difference stays in the default parity report.

## Resolution (foundation owner)
- Change: `app/src/shared/Leaflet/lib/json.ts` serializes as OS.JSONUtils.serializeToJSON does on TST (classic
  converter, OutSystemsSettings.js `UseNewJSONSerialization = false`): with Serialize Default Values False a member equal
  to its default is left out (list items become null). Map_Marker_Add's marker uses False (Leaflet.controller.js pretty
  :3277), so Keyboard / Opacity / Alt / … are absent and Leaflet applies keyboard true (tabindex 0, role button),
  opacity 1, alt "Marker". Correction to the evidence above: the MarkerOptions JSON names are lower-case in
  Leaflet.model.js (:316-341: `keyboard`, `opacity`, …); the capitalised names in the fixture are attribute names. The
  difference came from the omitted defaults (CR-BrowseDirectory-3). Tooltip (:3322) and Popup (:3530) use True: all
  members, names checked against the model (:190-245, :386-430). Map_Internal_Layer_SetStyle's PathOptions (:2841) also
  use False now.
- Regression parity run on (2026-10-15, after the last code change): CountryDetails 0/0/0, CountryList 0/0/0, BrowseDirectory loading/offline 0 and default 2 (`cursor auto → pointer` on the two zoom links: exemption CAPTURE-LINK-HREF-CURSOR-LEAFLET-ZOOM matches only `text-primary`, BrowseDirectory's links are `text-neutral-8`; difference present before this batch, exemption scope for the user), BrowseCountries, HomeFeed, Search, Services 0.
