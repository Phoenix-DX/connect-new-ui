# Flow report: Legacy_LDMEventsFlow_V2

| | |
|---|---|
| Status | draft |
| Date | 2026-10-27 |
| Screens on DEV | 3 (built: LDM_MyEvents_V2, LDM_EventDetail_V2, LDM_Email_V2; `build`, LDM family, user 2026-10-16, `migration/board.md:68,70,72`) |
| Sources | `pack/*.md` (DEV model, MCP dump 2026-10-27), `app/src/pages/LDM_*_V2/`, KB page `ui/legacy-ldm-events.md`, TST compiled code of the 3 wrappers, the 3 screen blocks and 13 child blocks (`tst_source.py`), `migration/runtime-sources/Connect2_OrbitMobile_MUI.controller.js`, `CommonPlugin.controller.js`, `OutSystems.js` |
| Rule | TST is the source of truth; DEV is the checklist. A difference is noted in §6. |

Abbreviations of the TST files in this report: EM = `Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_Event_Email_V2.mvc.js`,
ED = `…ScreenBlock_EventDetail_V2.mvc.js`, ME = `…ScreenBlock_MyEvents_V2.mvc.js`, FB = `Connect2_OrbitMobile_MUI.LDM_Blocks_V2.MyEvents_MyTimelineFilterButton.mvc.js`,
MT = `…LDM_Blocks_V2.MyTimeline_V2.mvc.js`, EG = `Connect2_OrbitMobile_MUI.LDM_Blocks.EventCard_Guests.mvc.js`, W = `UBTConnect.Legacy_LDMEventsFlow_V2.<Screen>.mvc.js`.
React paths are under `app/src/pages/<Screen>/`. U17 = decision U17 (`migration/app-shell.spec.md:349, :384`): no telemetry in the mock phase; the audit calls go to the log.

## 1. Summary

- Counts by verdict: match 167 · partial 5 · missing 2 · differs 11 · mock-only 4 · n/a 30 · unclear 0 (same as `checklist.json`, 219 rows).
- F1 (major): a guest household tap on LDM_EventDetail_V2 opens the carousel with every guest; TST filters the list with `CarouselFilteredEventResults` (displayed households, and not disabled under a free or regional plan).
- F2 (major): the timeline filter of LDM_MyEvents_V2 is a `NotCaptured` placeholder by decision; the filter, reset and close flows are not built. The TST file of `MyTimeline_Filters` exists now (Q1).
- F3 (minor): the swipe-up on the empty timeline (older window) is not ported. F4 (minor): the e-mail icon of a guest in a timeline card is silent offline. F5 (minor): the host phone popup lacks `EntityTypeId`.
- F6 (info): the audit payloads of the timeline clicks are smaller than on TST (U17 covers the mock phase; production need named). F7 (info): `IsFetching` starts True and a failed `GetCoordinatorDetails` sets no flag.
- Status: a user can open the timeline, scroll older windows, open an event and contact the host, the guests and the coordinator. The user can open the directions and send the coordinator e-mail (mocked). The user cannot filter the timeline or reset its filters.

Dead on TST, not findings: `CurrentEventView` of `ScreenBlock_MyEvents_V2` is never assigned (16 reads, no write, ME :50-2271). The Month, Day and Agenda views never run. Their variables, data action and 7 actions are `n/a` (rows 137, 139-141, 144-146, 150, 154, 177, 178).

The Android maps branch needs Cordova (`CommonPlugin.controller.js:147-200`: `GetOperatingSystem` is Other without it), so the TST PWA never enters it (row 074: `n/a`, native only).

## 2. Screens

### 2.1 LDM_Email_V2

**Identity**

| Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| roles, route | Registered, UBTOne_User; QueryString | route meta member; page | match | `app/src/app/routes.generated.ts:65`; `LDM_Email_V2Page.tsx:21-36` (001) |
| inputs EventHostId, In_EventId, In_IsMessageGuest, In_IsContactOrganiser, EventDate, EventLocality | 6 inputs, no mandatory flag (W :88-112) | `inputs.ts:21-26` | match | 002-007 |
| lifecycle | none on the screen; the block has OnInitialize, OnReady, OnDestroy | hook `useLdmEventEmail` | match | 011, 046 |
| block remount on input change | no OnParametersChanged in the block (EM :1488-1540) | `key` on EventHostId and In_EventId | match | a navigation with other inputs is a new screen instance on both sides (012) |

**Data**

| Data source | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| block variables Message, UserInfo, EmailEvent, DefaultEventName, Subject, IsFetching, CallPopupData | defaults EM :26-101 | `ldmEventEmailState.ts:43-47`, builders :115, :203-209 | match | 013, 015, 016, 018-021 |
| IsSending, CancelPopupBox | written, never read (EM view) | not kept | n/a | dead: no reader (014, 017, 064) |
| DataActionGetCoordinatorDetails (OnReady, TryAgain) | EM :941, :1190-1217 | `useLdmEventEmail.ts:110-119` | match | 022 |
| mock of GetCoordinatorDetails | server action GetCoordinatorDetails | `mocks.ts:27-44` | mock-only | production: server action of Connect2_OrbitMobile_MUI (023) |
| EventContact(UserContactRequest) call and fields | EM :1249-1262 | `useLdmEventEmail.ts:153`; `ldmEventEmailState.ts:184-200` | match | 024, 025 |
| mock ActionEventContact | the send (write) | `mocks.ts:45-48`, in memory | mock-only | production: EventContact, structure UBT_Email.UserContactRequest; writes stay mocked (`auto-decisions-2026-10-16.md:61`) (197) |
| AppManager_GetCachedUserInfo; EmailEvent JSON | EM :1458-1462, :1271-1277 | `useLdmEventEmail.ts:129`; state :203-209 | match | 026, 029 |
| AddAuditEventDetailEvent(myTimelineCoordinatorEmailed), zOnApplicationEvent_Wrapper | EM :1266, :1281 | log only (`components/actions.ts:22-31`) | differs | U17 (027, 028) |

**UI tree**

| Element | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| block args; BottomBarMenu; CommonUI_InsideLayout | W :186-234 | `LDM_Email_V2Page.tsx:27-33` | match | 008-010 |
| Layout title "Contact Event Coordinator", MenuIcon | EM :193-235 | `LdmEventEmailView.tsx:293-299` | match | 030 |
| HasFetchError → NetworkWarning; IsFetching → list-updating; !Out_HasContent → ErrorScreen "No Event Organiser information." | EM :240-242, :650-715 | `LdmEventEmailView.tsx:212-226` | match | 031-033 |
| Form, row styles, InputCounter, Button_Submit, call button, backwards-compatibility container | EM :243-668, :~890 | `LdmEventEmailView.tsx:228-282, :327` | match | 034, 039-042, 045 |
| NavigationConfirmationDialog (unless the call popup shows); ContactPopup_ByPhone | EM :754-899 | `LdmEventEmailView.tsx:304-321` | match | 043, 044 |

**Screen actions** (block actions; the screen has none)

| Action | OutSystems (trigger → steps) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| OnInitialize: restored from cache → Message = "" | EM :1333-1371 | `restoreLdmEventEmailState` | match | 046 |
| OnReady: both ids blank → Out_HasContent False; else refresh, UserInfo, IsFetching False | EM :1446-1465 | `useLdmEventEmail.ts:124-130` | match | 047, 048 |
| RefreshGetCoordinatorDetails; OnAfterFetch (Subject = EventName + " - " + DateToText(date)) | EM :1000-1033, :1190-1217 | hook :110-119; state :110-116 | match | DateToText gives "YYYY-MM-DD" (`OutSystems.js:8`), as the mapper's eventDateText (049, 050) |
| OnHandle_NetworkWarningTryAgain | EM :1058-1089 | hook :186-192 | match | 051 |
| OnSubmit_Email: offline message; OnChange_Message; Form.Valid branches; send sequence | EM :1234-1318 | hook :141-159 | match | 054-058 |
| ScheduleFeedbackMessageAfterTransition: setTimeout 500 ms, type success | EM :1621-1626 | `components/actions.ts:33-39` | match | 059 |
| OnClick_Call: phone → popup data; else "Phone number is not available" | EM :1143-1179 | hook :180-184; state :129-152 | match | 060, 061 |
| ContactByPhonePopup Cancel / Call; NavigationConfirmationDialogNavigation (PreventNavigation when Message typed) | EM :1381-1428, :1090-1121 | hook :193-198 | match | 062, 063 |
| OnDestroy: CancelPopupBox = False | EM :1034-1057 | not kept | n/a | dead: never read (064) |

**Validations**

| Validation | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| Input_From (email, 100, disabled), Input_To (100, disabled), TextArea_Subject (500, 2 lines, disabled), TextArea_Message (1000, 5 lines, OnChange) | EM :381-559 | `LdmEventEmailView.tsx:229-258` | match | 035-038 |
| OnChange_Message: Trim(Message) blank → Valid False "Required Field!" | EM :962-999 | hook :134-137 | match | 052, 053 |

**Business logic**

| Logic | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| fetch error → flow handler | EM :1000-1033 | `.catch(raiseToFlowHandler)` hook :177, :191 | match | 065 |

**Strings**: all 20 strings match (066).

### 2.2 LDM_EventDetail_V2

**Identity**

| Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| roles, route | Registered, UBTOne_User; QueryString | route meta member | match | `routes.generated.ts:44` (067) |
| inputs EventHostId (mandatory on DEV), EventId | no mandatory check in the TST wrapper | `inputs.ts` | match | 068, 069 |
| lifecycle | block OnInitialize, OnReady, OnParametersChanged | `useLdmEventDetail` | match | 100-103 |

**Data**

| Data source | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| IsFetching default | False (ED :52-54); OnReady sets True (:2011) | starts True (`ldmEventDetailState.ts:52`) | partial | F7: no not-fetching frame before OnReady; info (082) |
| MinBannerHeight 210, SquarePhotoPx 45, MaxPhotoWidth 100, MaxPhotoHeight 55, HasInformation, popup records | ED :55-78 | state :45-48, :51-62 | match | 083-090 |
| GetCoordinatorDetails (fetch at start) | ED :1362-1385 | hook :133-139 | partial | F7: a failure sets DataFetchStatus 2 on TST (`OutSystems.js:18`); React swallows it; the view reads no error of this action (091) |
| GetEventByEventId (OnReady refresh, OnAfterFetch) | ED :1386-1416, :1763-1789, :2018 | hook :142-144 | match | 092, 104 |
| mocks GetCoordinatorDetails, GetEventByEventId, GetHouseholdCoordinates | server actions of Connect2_OrbitMobile_MUI | `mocks.ts:15-31` (EventId only; EventHostId ignored, note) | mock-only | 093 |
| GetHouseholdCoordinates call | ED :2130-2135 | `fetchHouseholdCoordinatesById` hook :209 | match | 094 |
| Get_UI_UpdateItems_UnreadCount_All | BottomBarMenu | fixture exists | n/a | owned by App_Common (095) |

**UI tree**

| Element | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| block args, BottomBarMenu, CommonUI_InsideLayout | W | page :77-86 | match | 070, 071 |
| banner / content conditions; title "No Event Available"; ErrorScreen "No event information." | ED :288-317, :1080, :1127 | `LdmEventDetailView.tsx:225-257` | match | 096, 097 |
| Dialog_AccessRestrictedAction | shared (`app-shell.spec.md:183`) | view :285 | match | 098 |
| Host.Hosting branch (host card vs guest list) | ED :407 | child components | match | parity 0 (`CR-LDM_EventDetail_V2-1.md:39`) (099) |

**Screen actions**

| Action | OutSystems (trigger → steps) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| Handler_EventDetailNavigateTo_HouseholdDetail | W :413 → HouseholdDetails | page :41-43 | match | 072 |
| Handler_NavigateTo_WebMaps | W :433-462 → `https://www.google.com/maps/dir/?api=1` | page :44-46 | match | §6.1 (073) |
| Handler_NavigateTo_AndroidMaps; Android branch of OnHandle_HostCardAddress (AppLauncher) | W :183-190; ED :2172-2225 | not built | n/a | native only: `GetOperatingSystem` is Other without Cordova (`CommonPlugin.controller.js:147-200`); U14 (074) |
| Handler_NavigateTo_HouseholdCarousel (flag, preload, else HouseholdDetails) | W :321-356 | page :30-39 | match | getHasCarouselEnabled true on TST (`flag-values-tst.json:11`) (075-077) |
| Handler_NavigateTo_ContactByEmail: coordinator → ContactByEmailLDMCoordinator; else split and ContactByEmailMember; [DISABLED] nodes | W :509, :524 | page :47-72 | match / n/a | 078, 079; 080 dead in the model; 081 BR-UBTCON-259 |
| OnInitialize; OnReady not restored; Toggle_IsFetching; OnParametersChanged (remount) | ED :1417-1443, :2011-2029, :2056-2091, :1661-1696 | hook :129-153; page key | match | 100, 102, 103, 105 |
| OnReady restored from cache | nothing (ED :2007-2008) | a restored view without the answer calls again (hook :131) | differs | `stack.md:228` (F40) (101) |
| OnHandle_SetContainerHeight; OnHandle_ContactOrganiser; OnHandle_ContactHost_Message | ED :1857-1898, :2458-2500, :1790-1856 | hook :236-244 | match | 106-108 |
| OnHandle_ContactHost_Call | ED :2316-2397 | `hostPhoneCallData` state :124-135 | partial | F5: `EntityTypeId = household` (ED :2360) is not set; `ContactPopup.tsx:124` reads it (109) |
| ContactByPhone / _Cancel / _Call; ContactByMessage / _Cancel; _ClickedEmail (args ED :1941 read in full) | ED :1444-1503, :1698-1762, :1899-1954 | hook :156-162, :257-270; state :177-191 | match | 110-113 |
| OnHandle_HostInformation; OnHandle_GoToHousehold: not displayed / RecordDisabled | ED :2398-2457, :1532-1540 | hook :166-182 | match | 114-117 |
| OnHandle_GoToHousehold: else sequence | IsFreeSubscriptionPlan; IsRegionalSubscriptionPlan; CarouselFilteredEventResults; audit; NavigateTo_HouseholdCarousel(…, Out_HouseholdIdList) (ED :1541-1595) | audit; event with every guest (hook :183-190) | partial | F1 (118) |
| OnHandle_HostCardAddress: offline / no address / coordinates and query / web branch / AllExceptions | ED :2120-2260 | hook :198-224; `directionsQuery` state :200-210 | match | same destination and origin rules (119-123) |
| event wiring | W :130-200 | page :33-57 | match | 124 |

**Validations**: none on this screen.

**Business logic**

| Logic | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| GetNameAndSurname_ByFullName | BR-UBTCON-259 | `lib/ubtConnect/actions.ts:198` | match | 081 |

**Strings**: all 7 strings match (125).

### 2.3 LDM_MyEvents_V2

**Identity**

| Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| roles, route | Registered, UBTOne_User; no inputs | page :21-64 | match | 126 |
| route meta flagRedirect C2NewLDM → LDM_MyEvents | the DEV screen has no flag branch (KB `legacy-ldm-events.md`, BR-UBTCON-634) | `routes.ts:75` | differs | `stack.md:237` (P4-5); getHasNewLDM is true on TST (`flag-values-tst.json:7`), the redirect never fires (198) |
| lifecycle | block OnInitialize, OnReady, OnDestroy | `useLdmMyEvents` | match | 153-157 |

**Data**

| Data source | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| CurrentEventView = myTimeline, never assigned | ME :50; 16 reads, 0 writes | constant `EventView_MyTimeline` | match | dead views (133) |
| DefaultDateRangeInMonths 24, IsFiltering, IsFetchingMyTimeline, PastEventFilters, PastEventsData, UpcomingEventsData, popup records | ME :51-98 | `ldmMyEventsState.ts:21, :34-48` | match | 134-136, 138, 142, 143, 147, 148 |
| IsFetchingEvents, EventFilters, CurrentCalendarDate, CalendarEvents, IsWeekMonthCalendarExpanded, ScrollAmountInPx, ScrollEventCallback | ME :51-98 | not kept | n/a | dead on TST: calendar views only; ScrollEventCallback is written once in OnDestroy (:1459) and never read (137, 139-141, 144-146) |
| GetEventsForMyTimeline (GetMyTimelineData, OnAfterFetch) | ME :1217-1244, :2250-2298 | hook :114-127; state :134-147 | match | 149, 161 |
| GetEventsForCalendar | ME :1245-1275 | - | n/a | dead on TST (150) |
| DataActionGetEventLocalitiesForFilter (filter button block) | FB :565-640, :718-760 | `useMyTimelineFilterButton.ts:33-55` | match | 151 |
| mocks GetEventsForMyTimeline, GetEventLocalitiesForFilter | server actions of Connect2_OrbitMobile_MUI | `mocks.ts:14-34` | mock-only | 152 |

**UI tree**

| Element | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| block and placeholders; events | W :57-245 | page :53-62 | match | 127 |
| myTimeline view: date popover, filter button, calendar icon, MyTimeline_V2 | ME :313-420, :745-888 | `LdmMyEventsView.tsx:72-105` | match | 180 |
| Dialog_AccessRestrictedAction | ME :1036 | view :105 | match | 181 |

**Screen actions**

| Action | OutSystems (trigger → steps) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| Handler_NavigateTo_EventDetail; _HouseholdCarousel (flag); _ContactByEmail (split); NavigateToMyCalendar → MyEntertaining(LDM "event-ldm") | W :131-170, :264-300, :422-470 | page :25-59 | match | 128-132 |
| OnInitialize: restored → popups closed; Set Filters (24 months back, 7 days ahead) | ME :1755-1830 | state :34-48, :55-65 | match | 153, 155; the Day/Month branch is dead (154) |
| OnReady: restored → IsFetchingMyTimeline False; else GetMyTimelineData | ME :2146-2200 | hook :138-144 | match | 156, 157 |
| GetMyTimelineData (audit requestAPI_CalendarEvents ME :1510); NotRegistered; AllExceptions → UnknownError | ME :1470-1556 | hook :114-136 | match | audit: U17 (158-160) |
| OnScrollEnding_MyTimeline (IsFetching, IsFiltering, MaxAgeDaysFetchThreshold 7300 ME :1692-1699); IncrementMyTimelineDates | ME :1635-1700, :2643-2670 | state :69-77, :88-91; hook :146-150 | match | 162-165 |
| OnHandle_SwipeUp: IncrementMyTimelineDates, refresh | ME :2335-2368, raised by MT :737-760 | not ported | missing | F3 (166) |
| OnHandle_MyTimelineFilter; OnHandle_ResetFilters | ME :2671-2760, :1887-1947 | no handler | differs | `auto-decisions-2026-10-16.md:51` (NotCaptured); F2, Q1 (167, 168) |
| OnHandle_EventClicked (audit, NavigateTo_EventDetail) | ME :1701-1754 | hook :165-168 | match | 169 |
| LogClickedEventAudit: list lookup → AddAuditClickedEvent(id, EventHostId, EventName, EventDate) | ME :2393-2493 | one call with EventHostId | differs | U17; F6 (170) |
| OnHandle_HouseholdClicked: displayed / RecordDisabled → upgrade popup / audit and NavigateTo_HouseholdCarousel | ME :1948-2094 | hook :152-160 | match | 171; audit payload without HouseholdName: differs U17, F6 (199) |
| OnHandle_PhoneCall; ContactByMessage; _ClickedEmail / _Cancel; ContactByPhone Cancel / Call; OnClick_Calendar; TryAgain | ME :2598-2642, :1332-1384, :1276-1331, :2226-2249, :2369-2392, :2494-2522, :824 | hook :172-199; view :84 | match | 172-176, 179 |
| OnHandle_DateClicked, CheckDateBoundaries, OnHandle_ExpandToggled, SetViewContainerHeight, SetScrollAmount; OnDestroy | ME :1385-1634, :1844-1886, :2299-2334, :2523-2560, :1441-1469 | - | n/a | dead on TST (177, 178) |

**Validations**: none.

**Business logic**

| Logic | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| wiring of the block events to the actions | ME :640-1000 | view :96-105; hook :162-200 | match | 182 |

**Strings**: "Phone number is not available" (183) matches. The timeline texts "Upcoming Event(s)", "Past Events", "LDMs events not available." and "Please try a different filter" (MT :214, :378, :629) match.

## 3. Blocks of the flow

The flow has no own block. The screens wrap blocks of `Connect2_OrbitMobile_MUI` (logic on TST only); their child blocks are below. React components are under `app/src/pages/LDM_MyEvents_V2/components/` and `app/src/pages/LDM_EventDetail_V2/components/`.

| Block | Inputs, events, actions (TST) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| MyEvents_MyTimelineFilterButton | ToggleEventFilters (FB :638-666); OnReady / OnParametersChanged → GetEventLocalitiesData (:565-640, :718-760); icon states; PreventBackNavigation while open | `useMyTimelineFilterButton.ts`; component :42-73 | match | 151, 200, 201 |
| MyEvents_MyTimelineFilterButton | OnHandle_Filter (:502-565); OnHandle_Close, OnHandle_ResetFilters (:464-501, :667-717) | no caller (popup content NotCaptured) | differs | F2, Q1 (202, 203) |
| LDM_Blocks.MyTimeline_Filters | the popup: localities, FromDate / ToDate, Filter, Clear, Close; 20 actions (`…MyTimeline_Filters.mvc.js:864-1700`) | `NotCaptured` placeholder (component :65) | differs | `auto-decisions-2026-10-16.md:51`; F2, Q1 (204) |
| MyTimeline_V2 | SwipeUp → EventsSwipeUp (MT :737-760) | not ported | missing | F3 (205) |
| MyTimeline_V2 | ScrollEnding (MT :766-800); view texts | `MyTimeline_V2.tsx:69-142` | match | 180, 206 |
| EventCard_V2 | EventClicked; HouseholdClicked with EventHostId, EventId, Hosting and every guest id (`EventCard_V2.mvc.js:287`) | `EventCard_V2.tsx:69-95` | match | 207 |
| EventCard_Info_V2 | OnClick_CardInfo → CardClicked | `EventCard_Info_V2.tsx:24` | match | 208 |
| EventCard_Box | EventColor by EventType (`EventCard_Box.mvc.js:215-216`); Click_Card unhandled (`audit-a1-empty-handlers.md:35`) | `EventCard_Box.tsx:15-30` | match | 209 |
| EventCard_Guests | ToggleGuestList (EG :619-640); OnHandle_HouseholdClicked with the subscription filter (changes In_CurrentRowNumber and In_Length only, EG :700-760); call click | `EventCard_Guests.tsx:64-86, :170-210` | match | the screen handler reads In_HouseholdId and In_HouseholdIdList only (210, 211, 213) |
| EventCard_Guests | OnHandle_ClickedEmail offline → "Please check your network connection and try again" (EG :867) | returns silently (component :89) | partial | F4 (212) |
| EventDetail_Banner | SetActiveHeight, OnReady → SetContainerHeight when changed (`EventDetail_Banner.mvc.js:514-760`); ContactOrganiser click | `EventDetail_Banner.tsx:59-66, :123` | match | 214, 215 |
| EventDetail_HostCard | events HostInformation, NavigateToEmail_Household (flipped name), CallPhone, Address (`…HostCard.mvc.js:298-642`) | `EventDetail_HostCard.tsx:71-142` | match | 216 |
| EventDetail_ListItem | CallClicked, OnClick_Item, EmailClicked with the offline message (`…ListItem.mvc.js:558-740`) | `EventDetail_ListItem.tsx:65-96` | match | 217 |
| EventsDetail_Content | ActiveBannerHeight = In_MinBannerHeight | `EventsDetail_Content.tsx:33` | match | 218 |
| EventDetail_Section, EventDetail_SpecialNeeds_ListItem | view only, no action | components | match | 219 |

## 4. Shared blocks and actions

| Block or action | Owner | Verdict here |
|---|---|---|
| App_IconBadge | `_shared` (App_Common_Blocks) | n/a, checked in the report of the owner (184) |
| Block_PINUnlock, Block_PINUnlock_ContentWrapper | App_PIN | n/a (185, 186) |
| BottomBarContent, BottomBarMenu, CommonUI_InsideLayout, OfflineDataSyncEvents, UnsupportedVersion (+ 4), WelcomeToConnect | App_Common | n/a (187-189, 191, 193, 194); the 3 UnsupportedVersion strings not found in React belong there (195) |
| HandleOnResumeOpenLink | Legacy_Share | n/a (190) |
| Policy_Checker | App_Policies | n/a (192) |
| Get_UI_UpdateItems_UnreadCount_All; the 7 client variables of `data.md` | shared blocks | n/a (095, 196) |
| Dialog_AccessRestrictedAction, App_Subscription_ShowUpgradePopUp | shell (`app-shell.spec.md:183`) | match of the use (098, 117, 181) |
| GetNameAndSurname_ByFullName (BR-UBTCON-259), GetHasCarouselEnabled, SetPreloadObject, PreventNavigation | UBTConnect / UBTConnect_Utils / NavigationHandler | match of the use (075, 081, 129, 063) |
| FlipHouseholdName, CleanAddressForMaps, GetLocalityName, GetCurrentTimeInMill, AddAudit* | Connect2_LegacyShared / Connect2_OrbitMobile_MUI | match of the use; audit calls log only (U17) |

## 5. Findings

| Id | Severity | Screen / element | Finding | React location | Suggested fix | Status |
|---|---|---|---|---|---|---|
| F1 | major | LDM_EventDetail_V2 / OnHandle_GoToHousehold | TST calls IsFreeSubscriptionPlan, IsRegionalSubscriptionPlan and CarouselFilteredEventResults (`controller.js:879-985`): the carousel gets the guests with HouseholdDisplay, and without RecordDisabled under a free or regional plan; the action also sets the client variable HouseholdCarouselPreloading (:979-985). React passes every guest. | `hooks/useLdmEventDetail.ts:183-190` | Port CarouselFilteredEventResults (filter by HouseholdDisplay; by RecordDisabled when the plan is free or regional) and pass its list; set the preload the same way. Rows 118 | built 2026-10-27 (`builds/B8-ldm.md`): the three actions ported; the screen handler keeps every guest (the block event passes only the id list, `LDM_EventDetail_V2.mvc.js:212-219`), so the finding was partly wrong |
| F2 | major | LDM_MyEvents_V2 / timeline filter | The filter popup is a `NotCaptured` placeholder (decision `auto-decisions-2026-10-16.md:51`); OnHandle_MyTimelineFilter, OnHandle_ResetFilters, OnHandle_Filter, OnHandle_Close are not built. The user cannot filter the timeline. | `components/MyEvents_MyTimelineFilterButton.tsx:65`; `hooks/useLdmMyEvents.ts` | Q1: build `MyTimeline_Filters` from `Connect2_OrbitMobile_MUI.LDM_Blocks.MyTimeline_Filters.mvc.js` and the 4 handlers (ME :2671-2760, :1887-1947; FB :464-565, :667-717). Rows 167, 168, 202-204 | built 2026-10-27 (`builds/B8-ldm.md`) |
| F3 | minor | LDM_MyEvents_V2 / OnHandle_SwipeUp | A swipe up on the empty timeline (MT :737-760) loads an older window (ME :2335-2368). Not ported; no decision records the drop. | `components/MyTimeline_V2.tsx:35` | Port the SwipeEvents pattern on the ErrorScreen container and call IncrementMyTimelineDates + GetMyTimelineData. Rows 166, 205 | fixed 2026-10-27 (`fixes/G2-orbit-ldm.md`) |
| F4 | minor | EventCard_Guests / OnHandle_ClickedEmail | Offline, TST shows "Please check your network connection and try again" (EG :867); React returns without a message. | `components/EventCard_Guests.tsx:89` | `showFeedbackMessage(…, info)` as in `EventDetail_ListItem.tsx:74-75`. Row 212 | fixed 2026-10-27 (`fixes/G2-orbit-ldm.md`) |
| F5 | minor | LDM_EventDetail_V2 / OnHandle_ContactHost_Call | TST sets `ContactPopupData.EntityTypeId = Connect_Entity2.household` (ED :2360); `hostContactPopupData` omits it and `ContactPopup.tsx:124` reads it. | `hooks/ldmEventDetailState.ts:105-115` | Add `EntityTypeId: Connect_Entity.Household`. Row 109 | fixed 2026-10-27 (`fixes/G2-orbit-ldm.md`) |
| F6 | info | LDM_MyEvents_V2 / audit payloads | LogClickedEventAudit sends EventHostId, EventName and EventDate from the Upcoming or PastEvents list (ME :2416-2455); OnHandle_HouseholdClicked sends HouseholdId and HouseholdName (ME :1986). React sends EventHostId / HouseholdId only. No effect in the mock phase (U17). | `hooks/useLdmMyEvents.ts:158, :166` | When telemetry is wired: build the payload from the list lookup and pass the household name. Rows 170, 199 | |
| F7 | info | LDM_EventDetail_V2 / IsFetching, GetCoordinatorDetails | IsFetching starts True (TST False until OnReady, ED :52-54, :2011). A failed GetCoordinatorDetails sets DataFetchStatus 2 on TST (`OutSystems.js:18`); React swallows it. The view reads neither difference. | `hooks/ldmEventDetailState.ts:52`; `hooks/useLdmEventDetail.ts:137-139` | None needed; keep as a documented difference. Rows 082, 091 | |

## 6. DEV vs TST differences

### 6.1 Model vs compiled code

| Element | DEV (model) | TST (compiled code) | What the React app follows | Source |
|---|---|---|---|---|
| LDM_EventDetail_V2.Handler_NavigateTo_WebMaps | the pack reads the destination as a screen `WebMaps(api, query)`; the KB says `WebMaps` is an external site of `Legacy_LDMEventsFlow` | navigates to `https://www.google.com/maps/dir/?api=1` with `api` and `query` (W :433-462, :450-451) | TST (`LDM_EventDetail_V2Page.tsx:44-46`) | pack `screens.md`; KB `ui/legacy-ldm-events.md`; W |

No element of the pack is absent on TST. The pack holds only the signatures of the 3 blocks. Their logic (about 70 actions) is in the TST files, which are the basis of the rows.

### 6.2 KB pages vs TST

None. BR-UBTCON-613, -634, -259 and the KB page `legacy-ldm-events.md` agree with TST and with React.

## 7. Questions for the user

| Id | Question | Why it matters | Options | Recommendation |
|---|---|---|---|---|
| Q1 | Build the timeline filter popup `LDM_Blocks.MyTimeline_Filters` and its 4 handlers now? Decision `auto-decisions-2026-10-16.md:51` kept it `NotCaptured` because the popup was not captured. The TST file exists (`Connect2_OrbitMobile_MUI.LDM_Blocks.MyTimeline_Filters.mvc.js`, 20 actions) and the locality data action is already fetched. | The filter and reset of the timeline are the only user-reachable behaviours of the flow that React lacks (F2). | (a) build from the compiled code, as Q2 of the same decision did for the guest list; (b) keep the placeholder until a capture is possible | (a) |

## 8. Counts

| Area | Items | match | partial | missing | differs | mock-only | n/a | unclear |
|---|---|---|---|---|---|---|---|---|
| identity | 4 | 3 | 0 | 0 | 1 | 0 | 0 | 0 |
| data | 61 | 41 | 2 | 0 | 2 | 4 | 12 | 0 |
| ui | 39 | 27 | 0 | 0 | 1 | 0 | 11 | 0 |
| actions | 96 | 78 | 3 | 2 | 7 | 0 | 6 | 0 |
| validations | 6 | 6 | 0 | 0 | 0 | 0 | 0 | 0 |
| logic | 9 | 9 | 0 | 0 | 0 | 0 | 0 | 0 |
| strings | 4 | 3 | 0 | 0 | 0 | 0 | 1 | 0 |
| **total** | 219 | 167 | 5 | 2 | 11 | 4 | 30 | 0 |
