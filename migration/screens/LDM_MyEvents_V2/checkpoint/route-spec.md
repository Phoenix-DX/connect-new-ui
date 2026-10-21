# Screen spec: LDM_MyEvents_V2

Sources: `analysis/sources/pretty/` (= `p/`), `analysis/dom/{default,loading,offline}.html`, `analysis/calls.md`,
`pack.md`, `migration/knowledge/orbit-assemble-ldm.md`. LDM = Lord's (Day) Meal; the UI lives in the Orbit module
`Connect2_OrbitMobile_MUI` (only V2 is built, user 2026-10-16).

## 0. Summary
"My Timeline" of the user's Lord's Day meals: a back icon and title, a filter icon and a My-calendar flag in the header,
then the past events grouped per month (upcoming events first when there are any). Each card shows the event name,
date, host (name and locality) and the guests (count and overlapping photos, expandable to the guest households).
Captured on TST with a full-permission account: no upcoming event, 5 past events in 5 month groups (`dom/default.html`
:84-480), the loader (`dom/loading.html`:83-86) and the NetworkWarning (`dom/offline.html`:101-125).

## 1. Entry and routing
`/UBTConnect/LDM_MyEvents_V2`, no inputs (`p/UBTConnect.Legacy_LDMEventsFlow_V2.LDM_MyEvents_V2.mvc.js` view :115-243).
Entry: HomeFeed FeedBlock_Services (knowledge/orbit-assemble-ldm.md).

## 2. Component tree
`ScreenBlock_MyEvents_V2` (route) > `Layout` [shared] (ExtendedClasses `my-events`) > HeaderLeft: `MenuIcon__UpdatedOSUI`
[shared] + "My Timeline"; HeaderRight: `MyEvents_MyTimelineFilterButton` (route) + flag icon; Content: `MyTimeline_V2`
(route) > `EventDetail_SubSection` [shared] > `EventCard_V2` > `EventCard_Box` > `EventCard_Info_V2` + `EventCard_Guests` >
`OverlappingImages` (all route, `components/`), `NetworkWarning` / `ErrorScreen` [shared]; `Dialog_AccessRestrictedAction_Legacy`,
`ContactPopup_ByPhone`, `ContactByMessage_Wrapper` [shared]; BottomBar: `BottomBarMenu` [shared]; then
`CommonUI_InsideLayout` [shared]. Expanded guests: `Result_Item_Image`, `Person_Contact_Options` [shared].

## 2a. Architecture diagram
```
index.tsx ──► ScreenBlock_MyEvents_V2 ──► api.getEventsForMyTimeline ──► callAction(Connect2_OrbitMobile_MUI, ScreenBlock_MyEvents_V2/DataActionGetEventsForMyTimeline)
   │                 └─► MyEvents_MyTimelineFilterButton ──► api.getEventLocalitiesForFilter ──► callAction(…, MyEvents_MyTimelineFilterButton/DataActionGetEventLocalitiesForFilter)
   └─ navigation (useOsNavigate)          mocks.ts ──► contractHandler ◄── src/mocks/fictional/ldm.ts (shared LDM world)
```

## 3. DOM and markup contract
As captured in `dom/default.html` (pack "Markup"). Ids follow the instance scopes (`b1-b9-…`, `b1-b4-…`); OS list
item ids with runtime counters (`l3-99_0`) are approximated (ids are not compared).

## 4. Visual specification
Original CSS only. Card frame `event-card-box` with `border-top: 4px solid #00A492` (EventCard_Box OnInitialize, LDM,
`p/…EventCard_Box.mvc.js`:220); photos `overlapping-photo-cropper` with the compiled style text (diameter max(30px, 7vw),
40 % overlap, `p/Connect2_LegacyShared.Widgets.OverlappingImages.mvc.js`:253).

## 5. Data model
`types.ts`: EventCalendar (EventCalendar_V2 with Guests unwrapped; EventDate and GuestCount are Text), TimelineEventGroup,
CalendarGuestItem, EventLocality, EventCalendarFiltersAsText. Block variables in `ScreenBlock_MyEvents_V2.tsx` Model
(`p/…ScreenBlock_MyEvents_V2.mvc.js` model :46-100); DefaultDateRangeInMonths 24.

## 6. API calls
| Call | Phase | Owner | Mock |
|---|---|---|---|
| DataActionGetEventLocalitiesForFilter | load (filter button OnReady, In_HasLoaded and no locality data; runs before the timeline call as captured) | MyEvents_MyTimelineFilterButton | contractHandler, localities of the fictional events |
| DataActionGetEventsForMyTimeline | load (OnReady → GetMyTimelineData), ScrollEnding, TryAgain | ScreenBlock_MyEvents_V2 | contractHandler, fictional events filtered by PastEventFilters |
App-start calls (SynchAppContext, AfterInitialize, Sync_Info_GetMain, …) are the shell's. GetEventsForCalendar is
reachable only from the calendar views (never shown, §8).

## 7. State and lifecycle
OnInitialize (:1741-1830): restored view → contact popups closed; else EventFilters/PastEventFilters (FromDate today-24
months, PastEventFilters.ToDate today+7). OnReady (:2134-2210): restored → IsFetching* False; else GetMyTimelineData
(:1456-1542) → OnAfterFetch (:2239-2287: append, or replace while filtering) → audit RequestAPI_CalendarEvents (log,
decision U17). Errors: NotRegistered re-raised; other non-system → IsFetchingMyTimeline False + UnknownError (raised to
the flow handler). View cache: P-BACK (useViewState / useWasRestoredFromCache).

## 8. Render logic
CurrentEventView is MyTimeline and no action changes it (model :48-50, no assignment in the controller), so only the
MyTimeline branch renders; the Popover_DateSelector, calendar and Agenda_V2 branches are unreachable (not built).
MyTimeline_V2 (`p/…MyTimeline_V2.mvc.js` :200-420): events → MinHeight_Enforcer with "Upcoming Event(s)" (bottom border)
and "Past Events" (month groups); no events → NetworkWarning on fetch error, nothing while fetching, else ErrorScreen
"LDMs events not available." (+ "\r\nPlease try a different filter" when filtering); loader while fetching without error.
Filter icon greyed (`text-neutral-6`) while the timeline is fetching (In_HasLoaded = not IsFetchingMyTimeline).

## 9. Interactions and navigation
- Card info → audit MyTimelineEventClicked → `/UBTConnect/LDM_EventDetail_V2?EventId&EventHostId` (not built yet).
- Photos → toggle guest list (only when expandable). Guest row / angle-right → if HouseholdDisplay: disabled record →
  showUpgradePopUp, else audit + C2EnableCarousel on → SetPreloadObject + `HouseholdCarousel?In_StartingHouseholdId`,
  off → `HouseholdDetails?HouseholdId` (screen :405-470).
- Guest call → ContactPopup_ByPhone, or "Phone number is not available" (info) without numbers (:2590-2625).
- Guest email → ContactByMessage_Wrapper; its Email → `ContactByEmailMember` with GetNameAndSurname_ByFullName (:267-300).
- Flag icon → `MyEntertaining?MyCalendarEventSourceId=event-ldm`. Back icon → previous screen.
- ScrollEnding → older 24-month window until 7300 days back (:1621-1686, :2636-2664).

## 10. Sequence diagrams
```
mount → FilterButton.OnReady → GetEventLocalitiesForFilter → SelectedFilters.Localities, audit
      → ScreenBlock.OnReady → GetMyTimelineData → GetEventsForMyTimeline → append lists → IsFetchingMyTimeline False
```

## 11. Error handling and feedback
Offline/error: NetworkWarning with Try again (re-runs GetMyTimelineData); the flow handler shows the exception message.

## 12. Strings
"My Timeline", "Past Events", "Upcoming Event(s)", "N Guest(s)" (BuildGuestString), "LDMs events not available.",
"Please try a different filter", "Phone number is not available".

## 13. Accessibility, platform and security notes
Mock phase: no real person data (fictional LDM world `app/src/mocks/fictional/ldm.ts`, neutral photo placeholder).
SwipeEvents (SwipeUp on ErrorScreen) is a touch gesture of the native shell: not ported. Server-side: the timeline must
be authorized per signed-in household.

## 13a. Feature flags
C2EnableCarousel (default-only on, user 2026-10-14) via `useFlagOn`; the other pack flags are not read by this route's
own blocks (shared blocks handle theirs).

## 14. Unclear points
- Q1 (decision): filter popup content MyTimeline_Filters not captured → NotCaptured (built as recommended A).
- Q2 (decision): expanded guest list not captured → built from the compiled code (recommended A).
- The event name / host formats of the mock follow the masked word lengths (see ldm.ts header); the captured texts are
  masked, so the exact TST wording is unknown (fictional data).

## 15. Acceptance criteria
default, loading and offline parity clean apart from the proposed exemptions (`proposed-exemptions.json`); same calls
in the same phase as `analysis/calls.json`.

## 16. Decisions to confirm
- Q1 → A (pending orchestrator answer): filter popup with NotCaptured content.
- Q2 → A (pending orchestrator answer): expanded guest list built from the compiled code.
- Fictional data for the two unrecorded data actions (5 past events, captured counts; shared `src/mocks/fictional/ldm.ts`).
- MenuIcon: the Orbit `MenuAction.Auto` is passed as Back, as the captured `app-menu-icon back` shows (dom/default.html:201).
- Proposed exemptions (not applied): guest photo background-image + pixel (data drift), NetworkWarning animation phase.

## 17. Patterns used
P-PARAMS, P-STATES, P-DATA, P-MOCKS, P-CALLS, P-BACK, P-LIST, P-FLAGS, P-DIALOG.

## 18. Builder notes
Route files: `app/src/screens/LDM_MyEvents_V2/{index.tsx,types.ts,api.ts,mocks.ts}`, `components/` (ScreenBlock_MyEvents_V2,
MyEvents_MyTimelineFilterButton, MyTimeline_V2, EventCard_V2, EventCard_Box, EventCard_Info_V2, EventCard_Guests,
OverlappingImages, actions.ts). Shared mock module: `app/src/mocks/fictional/ldm.ts` (reused by LDM_EventDetail_V2 and
LDM_Email_V2).
