# B8 (LDM V2): build note, 2026-10-27

Flow: `Legacy_LDMEventsFlow_V2` (report §5, F1 and F2). Paths are relative to `app/src/`.

## F2 (major): the timeline filter popup and its four handlers

Decision: Q1 (a), user, 2026-10-27 (`migration/clarify/decisions.md`, Legacy_LDMEventsFlow_V2).

TST evidence:

- Block `Connect2_OrbitMobile_MUI.LDM_Blocks.MyTimeline_Filters.mvc.js`: variables :13-51, view :180-831, client actions
  :865-1690, JavaScript nodes :1835-1868.
- Filter button `Connect2_OrbitMobile_MUI.LDM_Blocks_V2.MyEvents_MyTimelineFilterButton.mvc.js`: popup content :322-380,
  OnHandle_ResetFilters :465-492, OnHandle_Filter :503-555, ToggleEventFilters :639-667, OnHandle_Close :668-709.
- Screen block `Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2.mvc.js`: event binding :445-480,
  OnHandle_ResetFilters :1886-1947, OnHandle_MyTimelineFilter :2670-2760.
- `Connect2_OrbitMobile_MUI.controller.js`: AddAuditEventFilterEvent :366-431, BoundariesCheck :652-745,
  ValidateSameFilters :8362-8457.
- Record defaults: EventLocalitiesFilter `Connect2_OrbitMobile_BL.model.js:1077-1090` (IdAsText "AllLocalities",
  Name "All Localities", IsSelected True); EventCalendarFiltersAsText :1386-1394 (NullDate dates).

Files changed:

- `pages/LDM_MyEvents_V2/components/MyTimeline_Filters.tsx` (new): the popup view.
- `pages/LDM_MyEvents_V2/hooks/useMyTimelineFilters.ts` (new): the block flows (OnReady, date changes, Clear,
  Filter, Close, list).
- `pages/LDM_MyEvents_V2/hooks/myTimelineFiltersState.ts` (new): the pure client actions.
- `pages/LDM_MyEvents_V2/components/actions.ts:41-60`: the GetDynamicTopPosition JavaScript node.
- `pages/LDM_MyEvents_V2/hooks/useMyTimelineFilterButton.ts:8-116`: SelectedFilters, OnHandle_Filter,
  OnHandle_Close, OnHandle_ResetFilters; ToggleEventFilters only with In_IsShowing.
- `pages/LDM_MyEvents_V2/components/MyEvents_MyTimelineFilterButton.tsx:71`: MyTimeline_Filters replaces the
  NotCaptured placeholder.
- `pages/LDM_MyEvents_V2/hooks/ldmMyEventsState.ts:156-166, :218-248`: actions `filterApplied` and `filtersReset`,
  ValidateSameFilters, the current filters of the comparison.
- `pages/LDM_MyEvents_V2/hooks/useLdmMyEvents.ts:26-36, :193-208`: OnHandle_MyTimelineFilter,
  OnHandle_ResetFilters, AddAuditEventFilterEvent.
- `pages/LDM_MyEvents_V2/components/LdmMyEventsView.tsx:82-83`: the Filter and ResetFilters events.
- `pages/LDM_MyEvents_V2/mocks.ts:8-45`: the "All Localities" choice first; the timeline keeps the meals of the
  selected localities.
- Shared, one line: `lib/orbit/actions.ts:315` adds `MyTimelineClearFilter` to `ApplicationEvent_LDM`.
- Tests of another area that read these mocks: `api/event/repository.test.ts` (the selected locality now filters
  the answer: 3 meals) and `api/locality/repository.test.ts` (the "All Localities" item).

What was built:

- The popup content: the times icon, "Date Range" and the From and To date inputs with `min` and `max`. Then "Event
  Locality" with the selected names, Clear and Filter. The locality list shows while IsShowList, under the input
  (`top` and `max-height` from OnReady). Each row has check-square or square-o, then "Select".
- The client actions:
  - SetDates, BoundariesCheck, and the 10 ms BypassClear of a cleared date;
  - OnClick_ListItem (the "All Localities" rule; the last selected locality stays), UnselectOne, UnselectAllButOne;
  - PersistLocalities, SelectLocalities, ClearFilters, OnFilter (ListDistinct), OnClose (Close with IsToReset).
- The button: Filter closes the popup and raises Filter with the selected localities only. Then SelectedFilters
  takes the popup's filters. Close with IsToReset raises ResetFilters(SelectedFilters).
- The screen block: the same dates without a locality only log MyTimelineApplyFilter. Other filters clear both lists,
  set IsFiltering True and PastEventFilters, and run GetMyTimelineData. A reset sets IsFiltering False. The
  "my-events-popup-aura" class follows IsFiltering.
- The mock applies the filter: PastEventFilters dates (as before) and the selected locality ids.

Tests run (all pass): `pages/LDM_MyEvents_V2`, 70 tests. New tests:

- `hooks/myTimelineFiltersState.test.ts`;
- the filter cases in `hooks/useLdmMyEvents.test.tsx`, `hooks/ldmMyEventsState.test.ts` and
  `hooks/useMyTimelineFilterButton.test.tsx`;
- 3 page cases in `LDM_MyEvents_V2.test.tsx`: open, filter one locality, clear and close.

Proposed verdicts:

- Rows 167, 168, 202, 203: `match`.
- Row 204 (the popup content): `match` for the structure, classes, texts, conditions and calls.
- Two open points of the runtime markup, as in Spinner and Popup:
  - the `width: "100%"` grid property of two button containers;
  - the fade of the animated list container.

## F1 (major): OnHandle_GoToHousehold and CarouselFilteredEventResults

TST evidence:

- `Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_EventDetail_V2.mvc.js:1505-1595`: OnHandle_GoToHousehold.
- `Connect2_OrbitMobile_MUI.controller.js:879-985`: CarouselFilteredEventResults.
- `UBTConnect_Utils.controller.js:4178-4221, :4281-4324`: IsFreeSubscriptionPlan, IsRegionalSubscriptionPlan.
- `UBTConnect.Legacy_LDMEventsFlow_V2.LDM_EventDetail_V2.mvc.js:212-219, :302-369`: the screen handler.

Files changed:

- `pages/LDM_EventDetail_V2/components/actions.ts:1-3, :45-118`: isFreeSubscriptionPlan,
  isRegionalSubscriptionPlan, carouselFilteredEventResults.
- `pages/LDM_EventDetail_V2/hooks/useLdmEventDetail.ts:71, :177-213, :273-277`: the else branch calls the three actions,
  gives the preload object to SetPreloadObject and lowers the row number.
- `pages/LDM_EventDetail_V2/components/LdmEventDetailView.tsx:205`: the row number of the guest.

What was built:

- CarouselFilteredEventResults: the guests with HouseholdDisplay; under a free or regional plan also without
  RecordDisabled. It gives NumberFilteredToCurrent and NumberFiltered. It sets HouseholdCarouselPreloading
  (IsPreloaded True, PreloadedCarouselItems) through SetPreloadObject.
- A limited plan with no guest left ends the action: empty outputs and no preload object (C:911, :944).
- A correction to the finding: TST does not give the filtered list to the carousel.
  - The block event NavigateTo_HouseholdCarousel gets every guest's HouseholderID (ED :1585-1594).
  - The screen handler reads only that list and the household id (W :212-219).
  - It writes its own preload object (CarouselHouseholdItem of every guest) over the block's object (W :302-369).
  - React already did this. The block's preload object stays only when C2EnableCarousel is off (HouseholdDetails).
- The other event arguments (list length, row number, IsLimitedLDMHost) are not passed: the screen does not read them.

Tests run (all pass): `pages/LDM_EventDetail_V2` (5 files, 58 tests), with the new `components/actions.test.ts` and
the case "F1: CarouselFilteredEventResults preloads …" in `hooks/useLdmEventDetail.test.tsx`.

Proposed verdict: row 118 `match`. The audit payload (HouseholdName) stays as F6 (U17).

## Checks

- `npm run typecheck`: no error in the B8 files. The other errors are in `pages/MessageDetail` (another group).
- `npx eslint` and `npx prettier --check` on both pages and `lib/orbit/actions.ts`: clean.
- `npm run arch`: one violation in `pages/HostSurvey/hooks/useHostSurvey.ts` (another group); none in B8.
- `api/event/repository.test.ts`: 6 failures on fetchSurveyHelpers and fetchMilestoneScanFF, which are the work in
  progress of another group in `api/event`.

## Decisions needed

1. The "All Localities" item of GetEventLocalitiesForFilter (server, not in the sources).
   - Evidence: MyTimeline_Filters compares each clicked row with AllLocalities, whose defaults are IdAsText
     "AllLocalities", Name "All Localities", IsSelected True. ClearFilters selects it.
   - Options: (a) the server list starts with that record, selected (built); (b) the list has no such item.
   - Recommendation: (a). The block works only with it. Check on TST when the user has LDM events.
2. The meaning of the dates and localities on the server of GetEventsForMyTimeline (not in the sources).
   - The mock keeps meals from FromDate to before ToDate, of the selected locality ids, all when none.
   - Recommendation: keep it for the mock phase; check on TST with a filtered timeline.
3. Block input copy: the popup keeps its own copy of In_SelectedFilters and takes a new value of the input.
   - Unsaved choices are dropped when the popup closes without Filter.
   - Recommendation: keep it; check on TST (open, choose, close, open).

Not changed: `migration/knowledge/audit-a1-empty-handlers.md:53` still says the popup is NotCaptured (a past audit).
