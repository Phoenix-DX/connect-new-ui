# Notes: Legacy_LDMEventsFlow_V2 (reader, stage 1)

Date 2026-10-27. Evidence only; no verdicts. Rows are in `draft.json`.

## TST presence check
- Pack elements absent on TST: none found for the three wrappers. Checked in
  `UBTConnect.Legacy_LDMEventsFlow_V2.LDM_{Email,EventDetail,MyEvents}_V2.mvc.js`: block calls, events, handlers.
- Difference DEV model vs TST: pack says `Handler_NavigateTo_WebMaps` navigates to screen WebMaps(api, query). TST
  `LDM_EventDetail_V2.mvc.js:433-462` navigates to the external URL `https://www.google.com/maps/dir/?api=1` (:450-451).
  React does the same as TST (`LDM_EventDetail_V2Page.tsx:44-46`).
- TST elements absent in the pack (block level, not in the wrapper dump):
  - `ScreenBlock_Event_Email_V2`: OnChange_Message, NavigationConfirmationDialog, ContactPopup_ByPhone, InputCounter,
    OnClick_Call, EventContact. Pack holds only the signature.
  - `ScreenBlock_EventDetail_V2` and `ScreenBlock_MyEvents_V2`: all block actions (about 20 and 31).
  - These are rows of the three screens, built from the TST block files.
- Dead in TST: `CurrentEventView` of `ScreenBlock_MyEvents_V2` defaults to myTimeline and no node assigns it
  (`grep currentEventViewVar =` : 0 hits). Month, Day and Agenda views and their actions are unreachable.
- Dead in the model: `GetSurnameFromName` JS node and the second ContactByEmailMember navigation in
  `LDM_EventDetail_V2.Handler_NavigateTo_ContactByEmail` (marked [DISABLED]); one row.

## Pack gaps
- `pack/app.md` lists no `LDM_Email_V2` inputs mandatory flags; TST wrapper has none in `setInputs`.
- Pack action `Handler_NavigateTo_ContactByEmail` of LDM_MyEvents_V2 lacks In_ContactSurname arg wiring seen in the
  block event signature (event passes In_ContactSurname; handler ignores it and splits In_ContactName).
- Child blocks with TST files not read (budget): LDM_Blocks.EventDetail_Banner, EventDetail_HostCard,
  EventDetail_ListItem, EventDetail_Section, EventDetail_SpecialNeeds_ListItem, EventsDetail_Content;
  LDM_Blocks_V2.MyTimeline_V2, EventCard_V2, MyEvents_MyTimelineFilterButton; LDM_ScreenBlocks_V2.EventCard_Info_V2;
  LDM_Blocks.EventCard_Box, EventCard_Guests, MyTimeline_Filters. Rows say so.
- TST argument expressions longer than 300 characters were cut when reading (ContactClickedEmail args in EventDetail,
  HouseholdCarousel args). Marked in the notes of the rows.
- Not compared line by line: `directionsQuery`, `hostPhoneCallData`, `organiserMessageData` builders in
  `app/src/pages/LDM_EventDetail_V2/hooks/ldmEventDetailState.ts`.
- MaxAgeDaysFetchThreshold default (7300) taken from React; the TST default was not read.
- Variable defaults of ScreenBlock_EventDetail_V2 (MinBannerHeight, SquarePhotoPx, MaxPhotoWidth/Height) not read.

## Mock files per screen
- LDM_Email_V2: `app/src/pages/LDM_Email_V2/mocks.ts` (GetCoordinatorDetails by In_EventId then In_EventHostId;
  ActionEventContact stores in memory); shared `app/src/mocks/fictional/ldm.ts`.
- LDM_EventDetail_V2: `app/src/pages/LDM_EventDetail_V2/mocks.ts` (GetCoordinatorDetails, GetEventByEventId and
  GetHouseholdCoordinates). Handlers look up by EventId only; EventHostId is not used.
- LDM_MyEvents_V2: `app/src/pages/LDM_MyEvents_V2/mocks.ts` (GetEventsForMyTimeline, GetEventLocalitiesForFilter).
- Get_UI_UpdateItems_UnreadCount_All: pack says no mock handler; a recorded fixture exists at
  `app/src/mocks/fixtures/UBTConnect/ServiceAPIGet_UI_UpdateItems_UnreadCount_All/01-4f5c3a3c.json`
  (`mocks/fixtures/index.json:250-252`).

## Board
- `migration/board.md`: LDM_Email_V2 line 68, LDM_EventDetail_V2 line 70, LDM_MyEvents_V2 line 72: decision build,
  status built (LDM family, build with Orbit, user 2026-10-16). All three screens are built.

## Items for the judge (React side)
- MyEvents: no handler for OnHandle_MyTimelineFilter, OnHandle_ResetFilters, OnHandle_SwipeUp, calendar actions;
  React comments say filter popup not captured and swipe out of scope (comments are not decisions).
- MyEvents: audit calls differ in payload (AddAuditClickedEvent with list lookup in TST; one call with EventHostId in
  React). EventDetail: IsFreeSubscriptionPlan, IsRegionalSubscriptionPlan, CarouselFilteredEventResults not called.
- EventDetail: Android maps branch (AppLauncher plugin, NavigateTo_AndroidMaps) not built; page comment cites rule 14.
- Email: OnReady null-id branch cannot run for Long Integer inputs (React comment :123 says so; TST has the same test).
- Pack strings: 3 of 18 not found in React (UnsupportedVersion_WebView / _Native texts); owner flow is App_Common.
