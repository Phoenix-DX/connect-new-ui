# CR-CountryDetails-1: shared libs — module client actions used by the directory map screens

- Status: applied
- Raised by: CountryDetails, 2026-10-15
- Block / lib: `app/src/shared/UBTConnect/lib/actions.ts`, `app/src/shared/Leaflet/lib/actions.ts`
- Other routes using it: BrowseDirectory (same map, markers and popup builder), any route calling GetLocalityLabel
- Related question: none

## Evidence
- UBTConnect.controller.js (raw copy `migration/screens/BrowseCountries/analysis/sources/raw/UBTConnect.controller.js`):
  `GetLocalityLabel` (Out_Label = In_LocalityName + ", " + In_CountryName), `GetSkeletonList_UI_LocalityStatistics`
  (ListLength × GetSkeleton_UI_LocalityStatistics), `Directory_BrowseByCountry_TooltipBuilder` (JS node: a `div` with an
  `a href="#"` whose text is Marker.ExtraData; click → LinkOnClickAction(Marker.Id)).
- Leaflet.controller.js (`migration/screens/CountryDetails/analysis/sources/pretty/Leaflet.controller.js`): Map_FitBoundsAuto
  :1137-1225 (cluster layer bounds: single point → setView(5), else fitBounds padding 80, animate; without cluster the
  user exception "Not implemented"), Map_Marker_OpenPopUp :3823-3870 (`MarkerObj.openPopup()`), Map_SetPopupBindingCallback
  (stores the callback under LL_MapObject_Attr_PopupBindingCallback, read by Map_Marker_BindPopUp).
- None of them is exported by the shared libs today (grep of `app/src/shared`, 2026-10-15).

## Expected change
Export these actions from the shared libs (same names as the other ports), so CountryDetails and BrowseDirectory share one
port.

## Workaround in the route until applied
Ported in `app/src/screens/CountryDetails/components/actions.ts` with the same line references; the route switches to the
shared exports when this CR is applied.

## Resolution (foundation owner)
- Change: the six actions are exported by the shared libs, ported once from the compiled code and merged from both
  routes. `app/src/shared/UBTConnect/lib/actions.ts`: getLocalityLabel (UC BrowseCountries raw :9491),
  getSkeleton_UI_LocalityStatistics / getSkeletonList_UI_LocalityStatistics(ListLength = 4) (:11824-11901,
  :12708-12775; returns `UI_LocalityStatistics`, new in `shared/Connect_Geography_CS/lib/structures.ts`, model :126-159),
  directory_BrowseByCountry_TooltipBuilder (:1370-1481; reads the marker JSON serialized with Serialize Default Values
  False, :1390). `app/src/shared/Leaflet/lib/actions.ts`: map_FitBoundsAuto (Leaflet.controller.js pretty :1137-1231),
  map_Marker_OpenPopUp (:3823-3870), map_SetPopupBindingCallback (:4897-4925). The route's
  `components/actions.ts` re-exports them and maps the skeleton records to its row type.
- Regression parity run on (2026-10-15, after the last code change): CountryDetails 0/0/0, CountryList 0/0/0, BrowseDirectory loading/offline 0 and default 2 (`cursor auto → pointer` on the two zoom links: exemption CAPTURE-LINK-HREF-CURSOR-LEAFLET-ZOOM matches only `text-primary`, BrowseDirectory's links are `text-neutral-8`; difference present before this batch, exemption scope for the user), BrowseCountries, HomeFeed, Search, Services 0.
