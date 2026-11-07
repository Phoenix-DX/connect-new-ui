## Result
status: pass
summary: The route now has the new TST header filters ("Upcoming Events" / "Sort By" with carets and toggle clicks), the two popup roots, and the new load flow. That flow runs GetPopupMeasurements, then ResetFiltersAndSort, then Get_AdminEventsList, which sends the new block variables. After the fetch it runs FilterEvents and sets YearsSelection from YearFilter. In resume (Q1 = a), YearFilter, the new inputs and OrbitSummaryItem.DateTime now go through app/src/api/event. Open popups stay `<NotCaptured>` (Q2 = b). Parity is clean in all 3 states. The consistency finding is fixed (consistency OK). The route's typecheck errors are fixed; 3 errors remain, all in files of other routes.

## Files changed
app/src/api/event/types.ts
app/src/api/event/mapper.ts
app/src/api/event/mapper.test.ts
app/src/api/event/repository.ts
app/src/api/event/repository.test.ts
app/src/api/event/hooks.ts
app/src/api/event/hooks.test.tsx
app/src/pages/OrbitAdminLanding/staticEntities.ts
app/src/pages/OrbitAdminLanding/mocks.ts
app/src/pages/OrbitAdminLanding/hooks/adminLandingState.ts
app/src/pages/OrbitAdminLanding/hooks/adminLandingState.test.ts
app/src/pages/OrbitAdminLanding/hooks/useAdminLanding.ts
app/src/pages/OrbitAdminLanding/hooks/useAdminLanding.test.tsx
app/src/pages/OrbitAdminLanding/hooks/useNavigateToEventDetail.ts
app/src/pages/OrbitAdminLanding/components/AdminLandingView.tsx
app/src/pages/OrbitAdminLanding/components/AdminLandingView.test.tsx
app/src/pages/OrbitAdminLanding/OrbitAdminLandingPage.tsx
app/src/pages/OrbitAdminLanding/OrbitAdminLanding.test.tsx
migration/screens/OrbitAdminLanding/parity/default.json, default.build.png, default.diff.png (made by route.py parity)
migration/screens/OrbitAdminLanding/parity/loading.json, loading.build.png (made by route.py parity)
migration/screens/OrbitAdminLanding/parity/offline.json, offline.build.png, offline.diff.png (made by route.py parity)
migration/sync/handoffs/OrbitAdminLanding/dev.md

## Commands run
npm --prefix app run typecheck → exit 2. 0 errors in the files of this item: the errors in src/api/event/mapper.test.ts and src/pages/OrbitAdminLanding/mocks.ts that the new schema caused are fixed, and so are the follow-on errors in src/api/event/{repository,hooks}.test and the page tests. 3 errors remain in files of other routes that this item did not touch: src/pages/CountryList/CountryListPage.tsx:23, src/pages/HomeFeed/HomeFeedPage.tsx:80, src/pages/NotificationDetails/hooks/useNotificationDetail.ts:115. An earlier run also showed errors in src/api/household/*, src/api/member/repository.ts, src/pages/Household_Relations/mocks.ts and src/platform/feedback/queryErrors.test.tsx; these are outside this item.
cd app && npx vitest run src/pages/OrbitAdminLanding src/api/event → exit 0; 9 files, 201 tests passed
cd app && npx eslint src/pages/OrbitAdminLanding src/api/event → exit 0, no problems
cd app && npx prettier --check src/pages/OrbitAdminLanding src/api/event → all files formatted
npm --prefix app run arch → exit 0; no dependency violations (139 known ignored)
python3 tools/pipeline/consistency_check.py --screen OrbitAdminLanding → "consistency: OrbitAdminLanding OK"
python3 tools/pipeline/route.py parity OrbitAdminLanding --app http://localhost:5173 → "parity clean" (dev server cwd checked: this repo's app/)
  default: structure 0, class 0, attr 0, text 0, style 0, pseudo 0, layout 0, position 0, pixel 0, call 0; pixels 0.02%, worst tile 1.0%
  loading: structure 0, class 0, attr 0, text 0, style 0, pseudo 0, layout 0, position 0, pixel 0, call 0; pixels 0.00%, worst tile 0.0%
  offline: structure 0, class 0, attr 0, text 0, style 0, pseudo 0, layout 0, position 0, pixel 0, call 0; pixels 0.02%, worst tile 1.0%

## Deviations from the brief
- Sources:
  - The compiled TST block: migration/sources/pretty/Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding.mvc@b0785345.js (view :150-760, controller :760-1700, GetMeasurementsJS :1709).
  - GetFullYear: TimeFormat.getYear = getUTCFullYear (migration/sources/runtime/Connect2_OrbitMobile_MUI.TimeFormat.js:90).
  - orbitLandingFilter (UpcomingEvents 1, PastEvents 2): migration/knowledge/static-entities-tst.json.
- Scope extended by the master (resume, Q1 = a): app/src/api/event/** is now in scope.
  - AdminEventsCallInputs now has EventFilter, SortEventsASC, YearsSelection (domain YearItem), Popup_SortByOpened, Popup_FiltersOpened and PopupMeasurements.
  - toAdminEventsInputs sends YearsSelection as a wire list.
  - AdminEventItem has dateTime (OrbitSummaryItem.DateTime, the key of SortEvents).
  - fetchAdminEvents answers AdminEventsResult { events, yearFilter }, mapped by toAdminEventsResult, which replaces toAdminEventItems.
  - EventsSummary is still not sent, as before.
- Mocks: YearFilter is an empty list in every scenario, as captured (analysis/calls.md: "(empty array)"). A non-empty YearFilter is not captured.
- FilterEvents is ported fully: Upcoming, Past, and Past with selected years. SetAndSortEvents(True, False) in OnAfterFetch is a no-op on load, because SortEventsASC is True after the reset.
- GetPopupMeasurements is ported in OnReady and its values are sent with the block variables. Left is truncated to an Integer. How JSNodeParamConverter converts a half value (odd header width) is not verified.
- Not ported, because the capture does not show it and it only affects an open popup (Q2 = b, the master records a follow-up capture):
  - the popup content (Orbit_Blocks.Popup_OrbitLanding_Filters / _Sort);
  - OnHandle_ApplyFilters / OnHandle_ApplySort, and with them the SortEvents sort, ScrollContentToTop and OnApplicationEvent_ApplyFilters / _ApplySortBy;
  - ComponentDidUpdate_Filters / _Sort (CopyClassesAcrossPortal).
  An open popup renders `<NotCaptured>` inside its Root container. The Popup widget effects (OSPopupWidget) do run.
- Consistency finding: hooks/useNavigateToEventDetail.ts:41 was a NO-WIRE "1900-01-01" check. It now uses `osDate` (@/lib/os-wire) and OS_NULL_DATE_TIME (@/lib/osDateTime), with the same behaviour.
- Test data: the hook test now uses 2099 dates, so FilterEvents keeps the rows after 2026-11-30. All admin event test rows now have dateTime.
- Process: in the first pass, some edits were made with python/cat writes instead of the Edit tool: AdminLandingView.tsx, and types.ts, mapper.ts and repository.ts in api/event. The content is the same as the Edit tool would make. The tester can review them in `git diff`.

## Questions for the user
none
