## Result
status: pass
summary: Ported the new TST header filters ("Upcoming Events" / "Sort By" with carets and their toggle clicks), the two popup roots (RootPlaceholder_Filters / _Sort with the Popup widget effects) and the new load logic (ResetFiltersAndSort before Get_AdminEventsList, FilterEvents on after fetch). An open popup renders `<NotCaptured>`: its content is not in this route's capture. Parity is clean in all 3 states. All quick checks pass.

## Files changed
app/src/pages/OrbitAdminLanding/staticEntities.ts
app/src/pages/OrbitAdminLanding/hooks/adminLandingState.ts
app/src/pages/OrbitAdminLanding/hooks/adminLandingState.test.ts
app/src/pages/OrbitAdminLanding/hooks/useAdminLanding.ts
app/src/pages/OrbitAdminLanding/hooks/useAdminLanding.test.tsx
app/src/pages/OrbitAdminLanding/components/AdminLandingView.tsx
app/src/pages/OrbitAdminLanding/components/AdminLandingView.test.tsx
app/src/pages/OrbitAdminLanding/OrbitAdminLandingPage.tsx
app/src/pages/OrbitAdminLanding/OrbitAdminLanding.test.tsx
migration/screens/OrbitAdminLanding/parity/default.json, default.build.png, default.diff.png (made by route.py parity)
migration/screens/OrbitAdminLanding/parity/loading.json, loading.build.png (made by route.py parity)
migration/screens/OrbitAdminLanding/parity/offline.json, offline.build.png, offline.diff.png (made by route.py parity)
migration/sync/handoffs/OrbitAdminLanding/dev.md

## Commands run
npm --prefix app run typecheck → exit 0
cd app && npx vitest run src/pages/OrbitAdminLanding → exit 0; 5 files, 47 tests passed
cd app && npx eslint src/pages/OrbitAdminLanding → exit 0, no problems
cd app && npx prettier --check src/pages/OrbitAdminLanding → all files formatted
npm --prefix app run arch → exit 0; no dependency violations (139 known ignored)
python3 tools/pipeline/route.py parity OrbitAdminLanding --app http://localhost:5173 → "parity clean" (dev server cwd checked: this repo's app/)
  default: structure 0, class 0, attr 0, text 0, style 0, pseudo 0, layout 0, position 0, pixel 0, call 0; pixels 0.02%, worst tile 1.0%
  loading: structure 0, class 0, attr 0, text 0, style 0, pseudo 0, layout 0, position 0, pixel 0, call 0; pixels 0.00%, worst tile 0.0%
  offline: structure 0, class 0, attr 0, text 0, style 0, pseudo 0, layout 0, position 0, pixel 0, call 0; pixels 0.02%, worst tile 1.0%
python3 tools/pipeline/consistency_check.py --screen OrbitAdminLanding → 1 problem, in a file this item did not change: [NO-WIRE-IN-COMPONENTS] hooks/useNavigateToEventDetail.ts:41 (it was there before this item; `git diff` of that file is empty)

## Deviations from the brief
- Source: the compiled TST block migration/sources/pretty/Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding.mvc@b0785345.js (view :150-760, controller :760-1700). Static entity orbitLandingFilter (UpcomingEvents 1, PastEvents 2) is from migration/knowledge/static-entities-tst.json.
- Not ported, because the capture does not show it and it only affects an open popup: the popup content (Orbit_Blocks.Popup_OrbitLanding_Filters / _Sort) and its events OnHandle_ApplyFilters / OnHandle_ApplySort (with SetAndSortEvents' sort and ScrollContentToTop, and OnApplicationEvent_ApplyFilters / _ApplySortBy), GetPopupMeasurements (OnReady; it only sets the popup's inline top/left), and ComponentDidUpdate_Filters / _Sort (CopyClassesAcrossPortal onto the open popup). An open popup renders `<NotCaptured>` inside its Root container. The Popup widget effects (OSPopupWidget) do run.
- OnAfterFetch: SetAndSortEvents(True, False) is a no-op on load, because SortEventsASC is True after ResetFiltersAndSort and no sort is forced. FilterEvents is ported for UpcomingEvents (EndEventDate >= AddDays(CurrDate(), -22)) and for PastEvents (< cutoff). The year sub-filter of PastEvents is not ported because YearsSelection is always empty here (see Q1).
- YearsSelection = Get_AdminEventsList.YearFilter: the API contract (openapi.yaml) has no YearFilter output, so it stays empty (Q1).
- Get_AdminEventsList body: TST now also sends the new block variables (EventFilter, SortEventsASC, YearsSelection, Popup_*Opened, PopupMeasurements). AdminEventsCallInputs (app/src/api/event/types.ts:873, outside the allowed paths) picks only IsFetchingData, UserFirstName and UserMemberId, so React still sends those three. Call parity is clean (data actions have inputNames null) (Q1).
- The test data of the hook test now uses 2099 dates and gives event 7302 an EndEventDate. Without that, FilterEvents would correctly remove a row that has no end date, and the test would fail after 2026-11-30.

## Questions for the user
- Q1 (change request, file outside the allowed paths): app/src/api/openapi.yaml, schemas `Connect2_OrbitMobile_MUI__ScreenBlock_AdminLanding__DataActionGet_AdminEventsList__Output` (:12635) and `__Input` (:12617), and app/src/api/event/types.ts:873 (AdminEventsCallInputs), mapper.ts:688 (toAdminEventItem drops OrbitSummaryItem.DateTime, the sort key of SortEvents). TST added the output `YearFilter` (YearItem list: Year Long Integer, IsSelected) and the new block variables to the input. Options: (a) add YearFilter to the contract and to the mapper, and keep DateTime, as a follow-up item with the popups (recommended); (b) leave as is while the popups are not captured.
- Q2 (decision): the popups (Popup_OrbitLanding_Filters / _Sort) are not in this route's capture. Ported versions exist under app/src/pages/OrbitLanding/components/ (file names only, not read), but a page cannot import another page. Options: (a) capture the open popups on TST for OrbitAdminLanding, then move the two popups to app/src/components/orbit/ and wire ApplyFilters / ApplySort here (recommended); (b) keep `<NotCaptured>` for the open state for now.
