# Notes of reader A: Legacy_OrbitEventsFlow part A (2026-10-27)

Screens: OrbitLanding, EventDetail, EventBooklet, ViewDocuments, MilestoneDetail. All five are built (board: build).
Rows: `draft-A.json` (ids `Legacy_OrbitEventsFlow-A001` to `A185`, verdict empty, verified `pack`).
TST line numbers are the numbers of `tst_source.py grep` (file lines after the statement split).

## TST presence check

Pack elements absent on TST:
- OrbitLanding wrapper: event NavigateTo_PassportScan and action OnHandle_NavigateToPassportScan (pack screens.md). TST wrapper
  has only navigateTo_EventDetail, navigateTo_TransportDetail, navigateTo_MyCalendarOrbit. `tst_source.py grep -i passport`
  finds nothing in the TST wrapper or in the TST block ScreenBlock_OrbitLanding. React has the event, the navigation and the
  "View Passport details" control (OrbitLandingPage.tsx:48-54, OrbitLandingView.tsx:164-169, useOrbitLanding.ts:184-188). Rows A003-A006, A054.
- None other found for EventDetail, EventBooklet, ViewDocuments, MilestoneDetail wrappers (all actions of the pack are in TST).

TST elements absent in the pack:
- EventDetail wrapper: TST uses Orbit_ScreenBlocks.ScreenBlock_EventDetail (EventDetail.mvc.js:166). The pack says
  "Connect2_OrbitMobile_MUI+LDM_ScreenBlocks"; references.md lists both blocks. Row A064.
- MilestoneWrapper dispatches to 6 sub-blocks (MealGuest, MealHost, MealHelper, AccommodationGuest, AccommodationHost,
  AccommodationHelper; MilestoneWrapper.mvc.js:256-258, 385, 499, 610, 739, 867). The pack names none. Row A182.
- Block-level behaviour that the pack never shows (the pack holds only wrapper + signatures): all block rows come from TST.

## Facts for the judge

- MilestoneDetail React builds only ScreenBlock_AccommodationHost; the other 5 types render `<NotCaptured>`
  (MilestoneWrapperView.tsx:40, :86; MilestoneDetailPage.tsx:54 "Q5"). OnHandle_NavigateToContactByEmail is not in React
  (raised only by the meal blocks). Rows A175, A182.
- OrbitLanding OnReady: React ends on restore only when `isEventsDataFetched`; TST ends on restore always (row A030).
- ViewDocuments TST OnDownloadError computes two texts that it does not pass on; React has no such texts (rows A162, A167).
- EventDetail host-survey permission, booklet flag message, QR branch, clicked-milestone branches: same as TST by reading.
- Flags used by React: mobileOrbitAccess, mobileOrbitHostSurvey, mobileOrbitEventBooklet. Values on TST not read here
  (grep of flag-values-tst.json for mobileOrbitAccess returned no line).
- Telemetry (OnApplicationEvent_*) goes to the log only in React (decision U17 per React comments); TST sends payloads.

## Pack gaps and unread stretches

- The pack has the wrapper screens only. Block views were read by condition/handler/text only, not widget by widget:
  EventBooklet block (236 KB; views: guest, helper, filter popup, list parts), OrbitLanding popups
  (Popup_OrbitLanding_Filters 31 KB, _Sort 14 KB), EventDetail inner blocks (EventDateSelection, HostAllocation_List,
  Card_Milestone), ViewDocuments row layout.
- Not read: ScreenBlock_AccommodationHost and the 5 other sub-blocks; Connect2_OrbitMobile_MUI.controller.js actions
  (FilterMilestonesByDateGroup, GetHostAllocation, GetContactHelpdeskSubject_Event, CheckDirectoryAccess): React cites the
  controller lines; TST bodies not re-read.
- Input constraints (MaxLength, Enabled) of Input_SearchTerm in the EventBooklet block: not read (row A138).
- Block variable defaults of EventDetail, EventBooklet, ViewDocuments, MilestoneWrapper: types only.
- Client variables of data.md (App_PIN_BiometricEnabled, App_Policies_*, Directory_Updates_*, IsNavigateToHomeOnBack) and
  action Get_UI_UpdateItems_UnreadCount_All are shared/bottom-bar items: one row (A028), not traced.
- Shared actions of actions.md (16) are used by other flows; not traced.

## Mock files per screen

- OrbitLanding: app/src/pages/OrbitLanding/mocks.ts (Get_HouseholdMembers, Get_EventsByMemberId).
- EventDetail: app/src/pages/EventDetail/mocks.ts (Get_EventDetails, Get_HostSurveyStatus, Get_HasDocuments, Get_HasQRCode).
- EventBooklet: app/src/pages/EventBooklet/mocks.ts (Get_EventBookletFilters, _Guests, _Helpers).
- ViewDocuments: app/src/pages/ViewDocuments/mocks.ts (GetEventDocuments; never captured, fictional answers).
- MilestoneDetail: app/src/pages/MilestoneDetail/mocks.ts (GetGmpMilestoneHost never captured; GetAccommodationHost, Get_Document).

## Strings

10 TST block strings (Sort By, no-event message, View Event Guest List, no-access-feature, Only Householder..., filters
invalid, wait-loading, This Event could not be found..., Tap the link/s..., no-documents) were all found in app/src by grep -F.
Not found: the two OnDownloadError texts of ViewDocuments (dead assignments in TST).

## Board lines

No screen of part A is unbuilt.
