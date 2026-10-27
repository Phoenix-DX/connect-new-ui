# Flow report: Legacy_OrbitEventsFlow

| | |
|---|---|
| Status | draft |
| Date | 2026-10-27 |
| Screens on DEV | 11 (built: 10; not built: PassportScan, board `skip` V8, DEV only) |
| Sources | `pack/*.md` (DEV model, MCP dump 2026-10-27), `app/src/pages/{OrbitLanding,EventDetail,EventBooklet,ViewDocuments,MilestoneDetail,GuestArrangements,HelpersDetail,HostSurvey,TransportDetail,EmailContact}`, KB pages (`pack/kb.md`), TST compiled code of the 10 wrappers and of the `Connect2_OrbitMobile_MUI` blocks they use |
| Rule | TST is the source of truth; DEV is the checklist. A difference is noted in §6. |

Readers: A (OrbitLanding, EventDetail, EventBooklet, ViewDocuments, MilestoneDetail; rows `A001`-`A185`) and B
(GuestArrangements, HelpersDetail, HostSurvey, TransportDetail, EmailContact, PassportScan; rows `B001`-`B235`).
The judge added rows `J001`-`J018`. Row ids in this report are short; `checklist.json` holds them as
`Legacy_OrbitEventsFlow-<id>`.

TST line numbers: a number from `tst_source.py grep` is one lower than the same line in `tst_source.py show`
(the reader rows use grep numbers). Lines the judge read again carry the mark "show".

## 1. Summary

- Counts by verdict: match 315 · partial 16 · missing 69 · differs 5 · mock-only 18 · n/a 9 · unclear 6 (438 rows,
  same as `checklist.json`).
- F1 (blocker): the HostSurvey wizard is a `NotCaptured` placeholder. The data steps, the footer, the five popups,
  the item blocks, the four note inputs and the PostHostSurvey call are not built. A host cannot answer or submit
  the survey.
- F2 (blocker): MilestoneDetail builds `ScreenBlock_AccommodationHost` only. The five other milestone blocks
  (MealGuest, MealHost, MealHelper, AccommodationGuest, AccommodationHelper) render a placeholder, and the
  `NavigateTo_ContactHostByEmail` path is absent.
- F3 (major): OrbitLanding shows a "View Passport details" control and navigates to `/UBTConnect/PassportScan`.
  TST has neither the control nor the screen. The React route is not registered.
- F4 to F7: three minor branch differences (OnReady on a restored view, a missing error handler, a text-area width
  source) and one info item.
- Status: a member can open Orbit, filter and sort the events, and open an event. From the event, the member can
  open the booklet, the documents, the helpers, a transport milestone and an accommodation-host milestone with its
  guest arrangements. The member can e-mail the helpdesk or a host. The data is mock data. A host cannot complete the
  host survey. A guest or helper of a meal or accommodation milestone sees a placeholder.

## 2. Screens

Every screen is a thin wrapper: one `ScreenBlock_*` of `Connect2_OrbitMobile_MUI`, `CommonUI_InsideLayout` and, on
OrbitLanding and EmailContact, `BottomBarMenu`. The wrapper holds the navigation and the Orbit access gate
(`GetHasOrbitAccess`, flag `mobileOrbitAccess`, on on TST: `flag-values-tst.json:15`). The denied branch shows
"You don't have access to Orbit. Please contact the Orbit Helpdesk if you have any questions." after the transition
(type 3) and goes to HomeFeed. React keeps the gate on every gated action (`useFlagOn('mobileOrbitAccess')`,
`feedbackMessageAfterTransition(NO_ORBIT_ACCESS, 3)`): rows A007-A012, A066-A079, A152-A153, A170-A173, B015-B018,
B061-B063, B094-B096, B125-B127, all `match`.

The block logic is on TST only. The rows below come from the compiled block files.

### 2.1 OrbitLanding

**Identity**

| Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| roles / URL | Registered, UBTOne_User; no inputs | route meta `MEMBER_ROUTE` (member, enforce) | match | A001; TST `OrbitLanding.mvc.js:492` checkRegistered |
| wrapper tree | ScreenBlock_OrbitLanding, BottomBarMenu, CommonUI_InsideLayout | `OrbitLandingPage.tsx:76-103` | match | A002 |
| block events | DEV: 4 events, with NavigateTo_PassportScan | React handles 4 | partial | A003-A006: TST has 3 events (F3, §6.1) |

**Data**

| Data source | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| Get_HouseholdMembers | DataActionGet_HouseholdMembers, refreshed in OnReady | `useOrbitLanding.ts:136-147`; mock `OrbitLanding/mocks.ts:106` | mock-only | A026 |
| Get_EventsByMemberId | DataActionGet_EventsByMemberId (Response, YearFilter) | `useOrbitLanding.ts:126-134`; mock `mocks.ts:107` | mock-only | A027 |
| 10 block variables | defaults as in the TST model | `orbitLandingState.ts:44-58` | match | A016-A025 |
| Get_UI_UpdateItems_UnreadCount_All | bottom bar | shared | n/a | A028: owned by App_Common |

**UI tree**

| Element | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| My calendar icon | SelectedMemberId = CurrentMemberId | `orbitLandingState.ts:145-146` | match | A052 |
| Household_Members_Selection | event ClickedHouseholdMember | `Household_Members_Selection.tsx` | match | A053 |
| View Passport details | not on TST | `OrbitLandingView.tsx:163-169`, `useOrbitLanding.ts:184-188` | partial | A054, F3 |
| Filters / Sort toggles and labels | "Past Events" / "Upcoming Events", "Sort By" | `OrbitLandingView.tsx:101,193` | match | A055, A056 |
| content: skeleton, list, NoInformation | by IsFetchingData, IsDataFetched, EventsSummary | `OrbitLandingView.tsx:104-136` | match | A057, A058 |
| list virtualization | isListVirtualizationDisabled | - | n/a | A059: rendering option, no user behaviour |
| filter and sort popups | Popup_OrbitLanding_Filters / _Sort, PopupMeasurements | `OrbitLandingView.tsx:204-235` | match / unclear | A060 (instances); J016 (block internals not compared) |

**Screen actions**

| Action | OutSystems (trigger → steps) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| OnHandle_NavigateToEventDetail / _TransportDetail | gate → navigate; denied → message + HomeFeed | `OrbitLandingPage.tsx:28-67` | match | A007-A012; BR-UBTCON-601 |
| OnHandle_NavigateToMyCalendarOrbit | MyEntertaining(Orbit), no gate, MemberId dropped | `OrbitLandingPage.tsx:70-72` | match | A013; BR-UBTCON-609 |
| OnHandle_NavigateToPassportScan | DEV only | `OrbitLandingPage.tsx:47-54` | partial | A004-A006, F3 |

**Validations**: none (no input on the screen).

**Business logic**

| Logic | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| OnReady | restored → end; else members, measurements, cached user | `useOrbitLanding.ts:98-107,151-155` | match / partial | A029 match; A030 partial (F4: React fetches again when restored without data) |
| FilterEvents | Upcoming: end ≥ today − 22 days; Past: before, per selected year; other: keep | `orbitLandingState.ts:153-172` | match | A038-A040; the pack names say "8 days", the compiled filter uses 22 (§6.1) |
| SetAndSortEvents, SortEvents, ScrollContentToTop | by SequenceNo, direction SortEventsASC | `orbitLandingState.ts:127-134`, `actions.ts:12-14` | match | A041, A042 |
| GetPopupMeasurements | Top = `.header` offsetHeight, Left = offsetWidth / 2 − 10, Bottom = `.footer` offsetHeight | `actions.ts:19-27` | match | A044; TST `ScreenBlock_OrbitLanding :2099-2106` show |
| OnHandle_ClickedHouseholdMember, ApplyFilters, ApplySort, card clicks | as TST | `useOrbitLanding.ts:159-228` | match | A045-A049 |
| OnApplicationEvent_* | audit payload to the module controller | `actions.ts:32-37` log only | differs | A050: app-shell.spec.md U17 (no telemetry in the mock phase) |

**Strings**: all 4 strings match (A061, A062).

### 2.2 EventDetail

**Identity**

| Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| inputs | In_MemberId, In_EventId, In_EventName, In_FromNotification | `EventDetail/inputs.ts:1-28` | match | A063 |
| block used | pack: "LDM_ScreenBlocks"; TST: Orbit_ScreenBlocks.ScreenBlock_EventDetail | `EventDetailView.tsx` | match | A064; §6.1 |

**Data**

| Data source | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| Get_EventDetails, Get_HostSurveyStatus, Get_HasQRCode, Get_HasDocuments | 4 data actions | `useEventDetail.ts:137-156`; mock `EventDetail/mocks.ts:156-171` | mock-only | A082-A085 |
| block variables | records, booleans false | `eventDetailState.ts:76-91` | match | A081; TST model defaults read (show :13-70) |
| GetLocalSurveyStatusByJSONName | local aggregate | `useEventDetail.ts:150-152` | match | A086 |
| GetHasOrbitEventBooklet / GetHasOrbitHostSurvey | flags, both on on TST | `EventDetailPage.tsx:39-40` | match | A087; J015 |

**UI tree**

| Element | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| QR code button and header icon | visible by HasQRCode / HasScanned; "GENERATE QR CODE" / "QR CODE GENERATED" | `EventDetailView.tsx:204-215,280` | match | A110; TST :765 show |
| documents icon, booklet row, host survey row | HasDocuments; flag and IsBookletVisible; status pill and button | `EventDetailView.tsx:91-120,192-200,290` | match | A111-A113 |
| event unavailable message | by In_FromNotification and IsEventUnavailable | `EventDetailView.tsx:24-25,146-147` | match | A114; TST :1328 show (three texts equal) |
| EventDateSelection, HostAllocation_List, Card_Milestone list | inner blocks | `EventDateSelection.tsx`, `HostAllocation_List.tsx` | match | A115, A116 (inner blocks not compared widget by widget) |

**Screen actions**

| Action | OutSystems (trigger → steps) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| 7 gated wrapper navigations | QRCodeGenerate, ContactByEmailOrbitHelpdesk, ViewDocuments, MilestoneDetail, HelpersDetail, TransportDetail, HostSurvey | `EventDetailPage.tsx:44-147` | match | A066-A079; BR-UBTCON-600 |
| OnHandle_NavigateTo_EventBooklet | no gate | `EventDetailPage.tsx:94-97` | match | A080 |
| OnClick_GenerateQRCode, OpenDocuments, ViewEventBooklet | HasScanned guard; flag message | `useEventDetail.ts:165-183` | match | A096-A100 |
| OnClick_NavigateToHostSurvey | Sent → householder or spouse only; "Only Householder is able to edit the survey." | `eventDetailState.ts:221-224`, `useEventDetail.ts:188-196` | match | A101-A103 |
| OnHandle_ClickedMilestone, HostAllocationView, ViewHelpers, ContactHelpdesk, ClickedDate | as TST | `useEventDetail.ts:201-255` | match | A104-A109; last branch of ClickedDate empty (TST :2463 show) |

**Validations**: none.

**Business logic**

| Logic | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| OnReady sequence | restored → end; fetch details, cached user, host survey status (host), documents, QR (milestones) | `useEventDetail.ts:126-158` | match | A088-A091 |
| OnAfterFetch_* and FilterMilestonesByDateGroup | day / before / after filters | `eventDetailState.ts:164-195`, `eventDetailActions.ts:24-47` | match | A092-A095 |

**Strings**: all 4 strings match (A117).

### 2.3 EventBooklet

**Identity**: inputs In_EventId, In_EventName; wrapper with ScreenBlock_EventBooklet and CommonUI_InsideLayout
(A118, A119, match). OnHandle_NavigateToHouseholdDetail has no gate (A120, match).

**Data**

| Data source | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| Get_EventBookletFilters, _Guests, _Helpers | 3 data actions, paged | `eventBookletDataFlows.ts`; mock `EventBooklet/mocks.ts:91-106` | mock-only | A122-A124 |
| 20 block variables | types read, defaults not read | `eventBookletState.ts:40-61` | unclear | A121: review pass |
| GetLocalHelperRoles | local aggregate | `useEventBooklet.ts:187` | match | A125 |

**UI tree**: FreeSubscriptionAlert dialog (A147, match); guest and helper views, filter popup, list header, member
item, no-results (A148 instances match; J017 block internals not compared, unclear).

**Screen actions**

| Action | OutSystems (trigger → steps) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| OnHandle_ApplyFilters | broken selectors → reset + Info "The chosen filters were invalid, filters have been reset."; else refresh | `useEventBooklet.ts:269-281` | match | A130, A131; TST :2361 show, type Info 0 |
| OnClick_ViewSwap | compiled `!==` on record wrappers: refresh always | `useEventBooklet.ts:215-224` | match | A132 |
| search mode, filters popup, clear search, Enter key, ClearAllFilters | as TST | `useEventBooklet.ts:199-261` | match | A133-A137, A139 |
| scroll paging, ResetPaginationSettings, ComponentDidMount | page × max rows | `useEventBooklet.ts:287-309`, `eventBookletState.ts:115-128` | match | A140-A143 |
| OnHandle_ClickedMember | "Please wait until all data has finished loading"; null id → end; CheckDirectoryAccess | `useEventBooklet.ts:315-326` | match | A144, A145; TST :3706 show |
| OnHandle_BackNavigation | search mode or popup → prevent and close | `useEventBooklet.ts:330-348` | match | A146 |

**Validations**: Input_SearchTerm has no MaxLength on TST (no `maxLength` in the block); React has none (A138, match).

**Business logic**: OnInitialize, OnReady, OnAfterFetch_GetEventBookletFilters, Refresh* error handling
(A126-A129, match).

**Strings**: all 2 strings match (A149).

### 2.4 ViewDocuments

**Identity**: 6 inputs; wrapper with ScreenBlock_ViewDocuments and CommonUI_InsideLayout (A150, A151, match).

**Data**: GetEventDocuments (A155, mock-only; mock `ViewDocuments/mocks.ts:38-39`, never captured); block
variables (A154, match).

**UI tree**: skeleton, hint row, document list, LoadingSpinner, NoInformation, footer (A165, match).

**Screen actions**

| Action | OutSystems (trigger → steps) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| wrapper OnHandle_ContactHelpdesk | gate; ContactByEmailOrbitHelpdesk(In_MilestoneId "") | `useViewDocuments.ts:154-164` | match | A152, A153; BR-UBTCON-604 |
| OnClick_Document | IsLoadingDocument guard; OpenInApp_TryOpenFileInApp(name.pdf, URL, "orbit-documents", PDF) | `useViewDocuments.ts:111-127` | match | A157-A159; folder TST :718 show |
| Action_OpenDoc | mark IsViewed by name with extension | `viewDocumentsState.ts:58-62` | partial | A160, F7 (info) |
| HandleDownload OnDownloadComplete | OpenDocumentFromLocalPath | log NotPorted | n/a | A161: native only |
| HandleDownload OnDownloadError | FeedbackMessage_AutoClose(plugin Message, Info) | `useViewDocuments.ts:139-148` | match | A162 |
| block OnHandle_ContactHelpdesk | GetContactHelpdeskSubject_Event | `useViewDocuments.ts:151-153` | match | A164 |

**Validations**: none.

**Business logic**: OnReady (A156, match).

**Strings**: 3 strings match (A166). The two OnDownloadError texts are dead assignments on TST (A167, n/a).

### 2.5 MilestoneDetail

**Identity**: 7 inputs (A168, match). Wrapper tree: ScreenBlock_MilestoneWrapper with 4 events and 4
CommonUI_InsideLayout placeholders; React mounts the AccommodationHost one (A169, match; the other 3 belong to the
blocks of F2).

**Data**

| Data source | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| GetGmpMilestoneHost | wrapper data action | `useMilestoneWrapper.ts:47-58`; mock `MilestoneDetail/mocks.ts:143-162` | mock-only | A177 |
| AccommodationHost: GetAccommodationHost, Get_Document | 2 data actions | `useAccommodationHost.ts:150,153`; mock `mocks.ts:165-171` | mock-only | J006, J007 |

**UI tree**

| Element | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| outer If: skeleton / failed / dispatch | FromNotification and Response.Status.Success | `milestoneWrapperState.ts:96-97`, `MilestoneWrapperView.tsx:55-66` | match | A181; "Event not found" title TST :1027 show (A185) |
| dispatch by type | 6 sub-blocks | AccommodationHost built; 5 types → `<NotCaptured>` | partial | A182, F2 |
| ScreenBlock_MealGuest, MealHost, MealHelper, AccommodationGuest, AccommodationHelper | TST files of 118 to 166 KB | - | missing | J001-J005, F2 |
| sub-block args and events | 6 inputs, 4 events | AccommodationHost wired: GuestArrangements, HouseholdDetail, ContactHelpdesk | match | A183 |

**Screen actions**

| Action | OutSystems (trigger → steps) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| OnHandle_NavigateTo_GuestArrangements, OnHandle_ContactHelpdesk | gated | `MilestoneDetailPage.tsx:62-99` | match | A170-A173; BR-UBTCON-602 |
| OnHandle_NavigateToHouseholdDetail | no gate | `MilestoneDetailPage.tsx:86-89` | match | A174 |
| OnHandle_NavigateToContactByEmail | GetNameAndSurname_ByFullName; ContactByEmailOrbitHost | - | missing | A175, F2 (raised by the unbuilt blocks only) |
| AccommodationHost: OnClick_Document, ClickedMember, call popup, helpdesk, guest arrangements | 17 actions on TST | `useAccommodationHost.ts:145-356` | match | J009-J012 (by action sequence); known bug B10 kept |
| AccommodationHost: HandleDownload OnDownloadComplete | OpenDocumentFromLocalPath | log NotPorted | n/a | J013: native only |

**Validations**: none.

**Business logic**

| Logic | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| wrapper OnReady | restored → end; From Notification branch | `useMilestoneWrapper.ts:42-59` | match | A178, A179 |
| OnAfterFetch_GetGmpMilestoneHost error | IsFetchingData = False; raise UnknownError | no catch | partial | A180, F5 |
| AccommodationHost OnReady restored | end | `useAccommodationHost.ts:147` fetches when no data | partial | J008, F4 |

**Strings**: 2 strings match (A185).

### 2.6 GuestArrangements

**Identity**: 7 inputs; block args In_PreloadEventName = In_EventName, In_PreloadMilestoneName = In_MilestoneTitle
(B051-B059, match).

**Data**: GetGuestArrangements (B065, mock-only; mock `GuestArrangements/mocks.ts:107-113`); block variables
(B064, match); list virtualization (B084, n/a).

**UI tree**: header with MilestoneHeader and the member name; accordions Special Need/s, Arrival Details, Meal
Details, Departure Details; NoInformation_Orbit; ContactHelpdesk_Footer; FreeSubscriptionAlert (B075-B083, match;
"Not available" fallback verified at TST :750).

**Screen actions**

| Action | OutSystems (trigger → steps) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| wrapper ContactHelpdesk / HouseholdDetail | gated / not gated | `GuestArrangementsPage.tsx:63-83` | match | B060-B063; BR-UBTCON-606 |
| OnReady, RefreshData, OnAfterFetch | restored → end | `useGuestArrangements.ts:72-75` | match | B066-B068 |
| OnHandle_ClickedMember | CheckDirectoryAccess(HouseholdId, Type) | `useGuestArrangements.ts:82-87` | unclear / differs | B069 (Type argument, review pass); B070 U17; B071 match |
| block OnHandle_ContactHelpdesk | GetContactHelpdeskSubject_Milestone(...); EventName = In_PreloadMilestoneName | `useGuestArrangements.ts:94-107` | match | B072; TST :1600-1601 show |

**Validations**: none.

**Business logic**: GetContactHelpdeskSubject_Milestone and GetSkeletonLoadingIdFromMilestoneTypeId match the
module controller by structure (`Connect2_OrbitMobile_MUI.controller.js:2069`, `:4541-4553`; B073, B074).

**Strings**: all 7 strings match (B085).

### 2.7 HelpersDetail

**Identity**: 5 inputs; block args (B086-B092, match).

**Data**: GetHelperDetails (B099, mock-only; mock `HelpersDetail/mocks.ts:104-106`); block variables (B097, match);
CallPopupInfo toggles have no caller on TST (B098, n/a).

**UI tree**: accordion per role, NoInformation "There is no Helper available.", skeleton, footer,
ContactPopup_ByPhone (B112-B116, match).

**Screen actions**

| Action | OutSystems (trigger → steps) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| wrapper helpdesk / household | gated / not gated | `HelpersDetailPage.tsx:47-70` | match | B093-B096; BR-UBTCON-605 |
| OnReady | restored → end; GetLocalOrbitMilestoneTypeById; RefreshData | `useHelperDetails.ts:109-116` | match / n/a | B100, B102 match; B101 n/a (the variable has no reader on TST) |
| OnHandle_ClickedMember | CheckDirectoryAccess(HouseholdId, Type) | `useHelperDetails.ts:122-137` | unclear | B103 (Type argument, review pass) |
| OnHandle_ClickedMemberPhone, BuildMemberCallData | contact list empty / has rows; image fallback in the else branch | `useHelperDetails.ts:147-190` | match | B104-B107; TST :1038-1040 show |
| OnHandle_CallClicked, ContactByPhone_Cancel | OnApplicationEvent_CallMember then close | `useHelperDetails.ts:203-212` | differs / match | B109 U17; B108 match |
| block OnHandle_ContactHelpdesk | GetContactHelpdeskSubject_Event | `useHelperDetails.ts:214-226` | match | B110 |

**Validations**: none.

**Business logic**: GetSkeletonLoadingIdFromMilestoneTypeId (B111, match).

**Strings**: all 2 strings match (B117).

### 2.8 HostSurvey

**Identity**: 5 inputs; CommonUI_InsideLayout first, then ScreenBlock_HostSurvey; OnHandle_NavigateTo_Back
(B139-B145, match).

**Data**

| Data source | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| GetHostSurvey | data action, OnReady → RefreshData | `useHostSurvey.ts:99`; mock `HostSurvey/mocks.ts:118-124` | mock-only | B171 |
| PostHostSurvey | server action (HS :3561-3580) | mock handler only (`mocks.ts:125-128`), no call | missing | B172, F1 |
| variables of the summary (IsFetchingData, CurrentStep, HostSurvey, IsConfirmedSurvey, HasDataSteps) | - | `hostSurveyState.ts`, `HostSurveyView.tsx:67,78,207,214` | match | B146-B149, B157, B158 |
| variables of the wizard (StepProperties, RoomNames, IsAddingHelper, PopUpInfo, PositionToDelete, SurveyDiscarded, SurveySubmitted, FilteredHelperRoles, IsPostingSurvey) | 9 variables | constants in `hostSurveyCallInputs` or absent | missing | B150-B156, B159, B160, F1 |
| local aggregates | 10 | floors, survey status, steps, gender preferences read; 6 not read | match / missing | B161, B163, B167, B170 match; B162, B164-B166, B168, B169 missing, F1 |

**UI tree**

| Element | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| summary header, closed-survey, Unable to Host, no-setup, empty-section texts | 5 text groups | `HostSurveyView.tsx:103-109,150,212,222` | match | B214-B218 |
| footer Orbit_FooterWithActions and 5 popups | Back / Cancel / Discard Survey / Continue Host Survey | `<NotCaptured>` footer; popups closed | missing | B219, F1 |
| item blocks (HostSurvey_AccommodationItem, MealItem, HelperItem, VehicleItem, AddHelper, StepHeader, NavigationItem, TopMessage, AdminNotes, Pills) | 15 TST files | not built | missing | J014, F1 |
| BackNavigationHandler | event BackNavigation | `HostSurveyPage.tsx:31` | match | B220 |

**Screen actions**

| Action | OutSystems (trigger → steps) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| OnReady | restored → end; reset StepProperties; RefreshData | `useHostSurvey.ts:94-112` without the reset | partial | B173, F1 |
| RefreshData, OnAfterFetch_GetHostSurvey, RefreshLocalSurveyStatus, OnAfterFetch_GetSurveyStatus | HasError → stop; else status, steps | `useHostSurvey.ts:82-112` | match | B174-B176 |
| RefreshLocalSurveySteps, OnAfterFetch_GetHostSurveySteps, RefreshStaticEntities | SetStepData, ValidateStepEdit, static entities by step | first step and HasDataSteps only; floors and gender preferences only | partial | B177-B179, F1 |
| NavigateTo_SpecificStep | from the summary Edit link | `useHostSurvey.ts:124-126` | match | B181 |
| Survey_Next, SetStepData, ValidateStepEdit, PrimaryButton, SecondaryButton, PopUp_Primary / _Secondary / _Close, EditItem, DeleteItem, DeleteItem, DeleteSearchHelper, ToggleSingleResetMealData, SaveMultipleMeals_Success / _Failed, SaveFailed, SaveItem, AddHelpers, CancelEdit, PostHostSurvey, AddNewRoom, AddNewVehicle, OnClick_AddItem | 25 block actions (HS :4571-7330) | - | missing | B180, B182-B204, F1 |
| OnHandle_BackNavigation | Unable to Host → back; confirmed → go; data steps → popups | Unable to Host branch only | match / partial | B205 match; B206 partial, F1 |

**Validations**

| Validation | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| Input_HostSurveyNote, Input_AccommodationNote, TextArea_MealNote, Input_HelperNote | MaxLength 250, Enabled = not IsConfirmedSurvey | - | missing | B207-B210, F1 |
| Switch_HasVehicles | bound to HostSurvey.Vehicles.HasVehicles | mock data only | missing | B211, F1 |
| item block fields | in the 15 item blocks | - | missing | B212, F1 |
| "Ensure you complete all required fields." | FeedbackMessage_AutoClose, error | - | missing | B213, F1 |

**Business logic**: see the actions above (the wizard is the logic).

**Strings**: 9 strings of the summary and the empty states match (B234). 13 strings of the wizard are missing
(B221-B233, F1):

- "Accommodation Notes", "Any additional details", "Helper Notes", "Meal Notes"
- "Continue Host Survey", "Discard Survey"
- "Enter preferred meals", "Please make sure you tick which meal is your preference."
- "Let your guest know the type of vehicles", "Do you, or your guests & helpers, have vehicles"
- "Thank you, your survey has been saved as a draft.", "Thank you, your survey has been submitted."
- "Ensure you complete all required fields." 

### 2.9 TransportDetail

**Identity**: 5 inputs; block args (B118-B124, match).

**Data**: Get_TransportDetail (B129, mock-only; mock `TransportDetail/mocks.ts:92-94`); block variables (B128, match).

**UI tree**: header class and title, skeleton / detail switch, footer (B135-B137, match); Orbit_Blocks.TransportDetail
and TransportDetail_TravelInfo internals not compared (J018, unclear).

**Screen actions**

| Action | OutSystems (trigger → steps) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| wrapper OnHandle_ContactHelpdesk | gated; In_EventId = null id, In_MilestoneId passed | `useContactHelpdeskNavigation.ts:26-37` | match | B125-B127; BR-UBTCON-603 |
| OnInitialize | not restored → Title = In_PreloadMilestoneName | `useTransportDetail.ts:58` | match | B130 |
| OnReady | fetch, no restore check (TST :489-522) | `useTransportDetail.ts:68-70` | match | B131 |
| OnAfterFetch_GetTransportDetail | Title = Response.Title | `transportDetailState.ts:101-108` | match | B132 |
| block OnHandle_ContactHelpdesk | TransportNumber = Vehicle ? TravelIdentifier : BookingReference | `transportDetailState.ts:136-148` | match | B133; TST :541 show |

**Validations**: none.

**Business logic**: GetContactHelpdeskSubject_Transport matches the controller by structure (`:2165`; B134).

**Strings**: 1 string matches (B138).

### 2.10 EmailContact

**Identity**: roles and URL (B001, match); 10 inputs with the TST defaults (B002-B011, match); block args
In_MilestoneName = In_MilestoneTitle; BottomBarMenu; CommonUI_InsideLayout (B012-B014, match).

**Data**: 8 block variables (B019-B026, match; CharactersCounter is reset on TST and shown by the InputCounter
blocks, React `LegacyInputCounter`, B023); SendContactEmail repository (B048, match) and mock (B049, mock-only).

**UI tree**: title, labels and buttons by In_IsContactHelpdesk (B032, match).

**Screen actions**

| Action | OutSystems (trigger → steps) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| wrapper OnHandle_Submitted | gate → back (UseHistory); denied → message + HomeFeed | `useEmailContact.ts:30-34` | match | B015-B018; BR-UBTCON-607 |
| OnChange / OnBlur of subject and message | Trim = "" → "Required field!" | `useOrbitContactForm.ts:93-103,137-146` | match | B033-B036 |
| OnKeyDown / OnKeyUp of the message | PreviousMessage; length ≥ 1000 → restore | `orbitContactFormState.ts:74-77` | match | B037, B038 |
| ValidateEmptyFields, OnClick_Submit | guard, validate, SendContactEmail, success → clear + "Your email has been sent." + Submitted; failure → no-helpdesk Info | `useOrbitContactForm.ts:111-131` | match | B039-B043, B046 |
| OnApplicationEvent_ContactHelpdesk / _EmailHost | audit payloads | log only | differs | B044, B045: U17 |
| NavigationHandlerNavigation | unsent text → PreventNavigation | `useOrbitContactForm.ts:158-160` | match | B047 |

**Validations**

| Validation | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| TextArea_In_Subject | Enabled False, MaxLength 200, rows = LineCount | `OrbitContactFormView.tsx:206-212` | match | B029 |
| Input_Subject | Mandatory, MaxLength 100, prompt "Subject" | `OrbitContactFormView.tsx:81-82` | match | B030 |
| TextArea_Message | Mandatory, MaxLength 1000, 3 rows, two prompts | `OrbitContactFormView.tsx:245-249` | match | B031 |

**Business logic**: OnReady UserFullName (B028, match); OnInitialize GetTextAreaLineHeight reads the body width,
TST the container width (B027, partial, F6).

**Strings**: all 5 strings match (B050).

### 2.11 PassportScan (not built)

The board decision: `skip`, V8 "skip:dev-only" (user, 2026-10-27; `migration/board.md`). The screen exists on DEV
only. It has no compiled file on TST and no survey route. The board revisits it when TST deploys it.

The DEV screen wraps `OrbitPassportScanC2.PassportScan` (inputs TargetId, LoginMemberId; event Close). OrbitLanding
reaches it through `NavigateTo_PassportScan`. A build needs the `OrbitPassportScanC2` module (not in the survey) and
a TST deployment. Verdict `n/a` (B235). The OrbitLanding side of this screen is F3.

## 3. Blocks of the flow

The flow owns no block. The screen blocks belong to `Connect2_OrbitMobile_MUI`; their rows are in §2 under the
screen that uses them. Blocks of that module not compared in this pass: `Popup_OrbitLanding_Filters` and `_Sort`
(J016), `EventBooklet_ListHeader`, `EventBooklet_MembersItem`, `PopUp_OrbitBookletFilters` (J017),
`Orbit_Blocks.TransportDetail` and `TransportDetail_TravelInfo` (J018), the inner blocks of EventDetail
(`EventDateSelection`, `HostAllocation_List`, `Card_Milestone`; A116), `Card_MemberInformation` (its ClickedMember
trigger read: `:257`, `:336` show), `MilestoneHeader`, `Accordion_Orbit`, `NoInformation_Orbit`, `Skeleton_Loading`,
`ContactHelpdesk_Footer`, `Orbit_ConfirmationPopUp_New`, `Orbit_FooterWithActions`, and the 15 HostSurvey item blocks
(J014, part of F1).

## 4. Shared blocks and actions

| Shared element | Owner | React | Verdict here |
|---|---|---|---|
| BottomBarMenu, CommonUI_InsideLayout, Get_UI_UpdateItems_UnreadCount_All, client variables of `data.md` | App_Common / SubLayout | `components/layout/BottomBar`, `CommonUiLayout` | n/a, checked in the report of App_Common (A028) |
| FeedbackMessageAfterTransition (Connect2_LegacyShared) | shared | `actions.ts` of each page: `setTimeout(showFeedbackMessage, 500)` | match on the call (A014); body not checked here (shared) |
| GetHasOrbitAccess, GetHasOrbitEventBooklet, GetHasOrbitHostSurvey (UBTConnect_Utils) | shared flag wrappers | `useFlagOn(...)` | match (J015; all three on on TST) |
| FeedbackMessage_AutoClose (UBTJavaScriptUtils) | shared | `feedbackMessageAutoClose` | match on the call (A162) |
| Dialog_AccessRestrictedAction / FreeSubscriptionAlert (UBTConnect_Utils) | App_Common_Blocks_PopupDialogs | `DialogAccessRestrictedActionLegacy` | match on the instance (A147, B083); internals in that flow's report |
| BackNavigationHandler, PreventNavigation (NavigationHandler) | shared | `BackNavigationHandler`, `preventNavigation` | match on the instance (A146, B047, B220) |
| ContactPopup_ByPhone (UBTConnect_Utils CW_CTA_PopUps) | shared | `ContactPopupByPhone` | match on the instance (B116); internals not checked here (shared) |
| GetCacheableMemberContactList, GetCacheableTimezoneInfo, GetCacheableSignedImageURL (Connect2_LegacyShared) | shared | `lib/legacyShared/actions`, `api/image` | match on the calls (B106, B107, J011); CR-MilestoneDetail-2 |
| OpenInApp_TryOpenFileInApp, HandleDownload (FileTransfer) | shared, Cordova | `useHandleDownload` (web: new tab, U18) | match on the call (A158, J009); CR-MilestoneDetail-3, pwa-file-plugins.md |
| AppManager_GetCachedUserInfo (UBT_AppManager) | shared | `appManager_GetCachedUserInfo()` | match on the calls (A029, A089, B028); shell-facts.md:136-149 |
| CheckDirectoryAccess, GetContactHelpdeskSubject_*, FilterMilestonesByDateGroup, GetHostAllocation, GetSkeletonLoadingIdFromMilestoneTypeId (Connect2_OrbitMobile_MUI controller) | module actions | `lib/orbit/actions`, page action files | match by structure (A093, A094, B073, B074, B111, B134) |
| The 16 shared client actions of `pack/actions.md` (App_* and bottom-bar actions) | other flows | - | not checked here (shared) |

## 5. Findings

| Id | Severity | Screen / element | Finding | React location | Suggested fix |
|---|---|---|---|---|---|
| F1 | blocker | HostSurvey: the survey wizard | The data steps (navigation, accommodation, meal, helper, vehicle), the step header, the footer with Next / Submit, the five confirmation popups, the 15 item blocks, the four 250-character note inputs, the vehicle switch, 25 block actions, 9 variables, 6 local aggregates, 13 strings and the PostHostSurvey call are not built. React shows the summary of a confirmed survey, the Unable to Host and no-setup states only. A host cannot answer, save as a draft or submit the survey. Origin: the mock-phase choice "wizard/popups NotCaptured" (`auto-decisions-2026-10-16.md:73`, auto-accepted, HostSurvey Q2), not a decision on the behaviour. | `useHostSurvey.ts:54,127-131`, `HostSurveyView.tsx:199-200,218,228,241`, `hostSurveyState.ts:94-110` | Build the wizard from the TST block (`ScreenBlock_HostSurvey.mvc.js`, 409990 B) and the 15 item blocks; wire `ActionPostHostSurvey` (mock handler exists). See Q1. |
| F2 | blocker | MilestoneDetail: 5 milestone types | `ScreenBlock_MealGuest`, `_MealHost`, `_MealHelper`, `_AccommodationGuest`, `_AccommodationHelper` render `<NotCaptured>`; the wrapper action `OnHandle_NavigateToContactByEmail` (ContactByEmailOrbitHost, surname by GetNameAndSurname_ByFullName) is absent. A guest or helper of a meal or accommodation milestone cannot see the milestone. Origin: `auto-decisions-2026-10-16.md:60` (MilestoneDetail Q5, auto-accepted "other milestone types NotCaptured"). | `MilestoneWrapperView.tsx:80-82`, `MilestoneDetailPage.tsx:54` | Build the five blocks from their TST files (118 to 166 KB each) and the wrapper action. See Q3. |
| F3 | major | OrbitLanding: "View Passport details" | React shows the control and navigates to `/UBTConnect/PassportScan` with LoginMemberId and TargetId after the access gate. TST has no such control, event or screen (`tst_source.py grep "assport"`: no match; `list Passport`: none). The React app registers no such route, so the tap leads to an unknown route. The element comes from the DEV dump of 2026-10-27 (DEV ≠ TST, §6.1). `shell-facts.md:155` records the navigation as a fact, not as a decision. | `OrbitLandingView.tsx:163-169`, `useOrbitLanding.ts:184-188`, `OrbitLandingPage.tsx:47-54` | Follow TST: remove the control, the event and the handler until TST deploys PassportScan (board V8). See Q2. |
| F4 | minor | OrbitLanding and AccommodationHost: OnReady on a restored view | TST ends OnReady on every restored view (`ScreenBlock_OrbitLanding :1669` show). React ends only when the data was fetched and fetches again otherwise (comment "F40"; no recorded decision). | `useOrbitLanding.ts:105`, `useAccommodationHost.ts:147` | Keep the TST branch: end on restore. If the port needs the re-fetch, record the decision. |
| F5 | minor | MilestoneDetail: GetGmpMilestoneHost error | TST handler: IsFetchingData = False, raise UnknownError (`:1156-1202`). React has no catch: the rejection goes to the flow handler and the skeleton stays. | `useMilestoneWrapper.ts:42-59` | Catch the rejection, dispatch IsFetchingData = False, then re-raise. |
| F6 | minor | EmailContact: GetTextAreaLineHeight | TST divides by the clientWidth of the subject container (`CF:1577-1584`); React divides by the body clientWidth. The row count of the read-only subject can differ. | `EmailContact/actions.ts:19-20`, `useOrbitContactForm.ts:77` | Measure the container element. |
| F7 | info | ViewDocuments: Action_OpenDoc | React also marks a document viewed when the bare DocumentName equals DocName; TST compares the name with the extension only (`:806`). Both callers pass the extension: no visible effect. | `viewDocumentsState.ts:62` | Drop the extra comparison. |

Severity levels:
- blocker: the user cannot complete the flow
- major: a visible behaviour, a rule or data differs
- minor: a text, a class or an edge case
- info: no user impact

## 6. DEV vs TST differences

### 6.1 Model vs compiled code

| Element | DEV (model) | TST (compiled code) | What the React app follows | Source |
|---|---|---|---|---|
| OrbitLanding: NavigateTo_PassportScan, OnHandle_NavigateToPassportScan, "View Passport details" | present (dump 2026-10-27) | absent: 3 block events only (`OrbitLanding.mvc.js` :131, :145, :159); no match for "assport" in the wrapper or the block | DEV (F3) | A003-A006, A054; KB `legacy-orbit.md` (2026-10-05) lists 3 events, as TST |
| Screen PassportScan | present | no compiled file | neither: board `skip` V8 | B235 |
| EventDetail: block of the wrapper | pack label "Connect2_OrbitMobile_MUI + LDM_ScreenBlocks" (two blocks of the same name in `references.md`) | `Orbit_ScreenBlocks.ScreenBlock_EventDetail` (`EventDetail.mvc.js:167` show) | TST | A064 |
| OrbitLanding FilterEvents lists | names "Last8DaysAndFuture" / "MoreThan8DaysAgo" | AddDays(CurrDate(), -22) (`:1733-1744`) | TST (22 days) | A038 |
| MilestoneWrapper sub-blocks | none named (dump gap: the block is in another module) | 6 sub-blocks (`:255-258`, `:386`, `:500`, `:611`, `:739`, `:868`) | one of six (F2) | A182 |

### 6.2 KB pages vs TST

| Id | KB text | TST evidence | File |
|---|---|---|---|
| K1 | "All Orbit screens declare only the system role `Registered`." | The DEV pack lists Registered and UBTOne_User on every screen. The compiled code checks `OS.RolesInfo.checkRegistered()` only (`OrbitLanding.mvc.js:492`, `EventDetail.mvc.js:1004`); a declared role list is not visible in it. The KB disagrees with DEV; TST is neutral. No finding: the React route meta is `member`. | `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/legacy-orbit.md` |

The 12 rules of `legacy-orbit.md` (BR-UBTCON-600 to 609, 259) agree with TST and with React. They cover the
access gates (A007-A012, A066-A079, A152, A170-A173, B015, B061, B094, B125) and the ungated links (A013, A080, A174,
B060, B093). They also cover the My calendar source (A013), the TransportDetail helpdesk arguments (B126) and the
surname split (A175, not built).

## 7. Questions for the user

| Id | Question | Why it matters | Options | Recommendation |
|---|---|---|---|---|
| Q1 | HostSurvey wizard (F1): build it now from the TST compiled code, or keep the placeholder? | A host cannot complete the survey in React. The survey is the only write flow of Orbit. A read-only capture of the wizard is not possible (the test account's survey is confirmed; `orbit-assemble-ldm.md:45` "HostSurvey (default only)"). The TST block (409990 B) and the 15 item blocks hold the full logic. | (a) build the wizard from TST now; (b) keep the placeholder and record F1 as an open gap on the board; (c) build it in the production phase with a backend | (a): the code is available, and the mock handler of PostHostSurvey exists. |
| Q2 | OrbitLanding "View Passport details" (F3): follow TST and remove it, or keep the DEV-only control? | TST users do not see the control. In React it leads to an unregistered route. | (a) remove the control, the event and the handler until TST deploys PassportScan (board V8); (b) keep it hidden behind a flag that is off; (c) keep it as is | (a): TST is the source of truth, and the board already defers PassportScan. |
| Q3 | MilestoneDetail (F2): build the five other milestone blocks from TST, or keep the placeholders? | A guest or helper of a meal or accommodation milestone sees a placeholder. | (a) build all five from their TST files; (b) build the guest blocks first (MealGuest, AccommodationGuest), the helper and host blocks later; (c) keep the placeholders | (a); (b) if the budget is short. |
| Q4 | Review pass items, no user decision: A121 (EventBooklet variable defaults), B069 and B103 (the Type argument of CheckDirectoryAccess), J016-J018 (the internals of the OrbitLanding popups, the booklet blocks and the transport blocks). | The rows are `unclear` until the orchestrator's review pass reads them. | - | Read them in the review pass; no user answer needed. |

## 8. Counts

| Area | Items | match | partial | missing | differs | mock-only | n/a | unclear |
|---|---|---|---|---|---|---|---|---|
| identity | 7 | 6 | 0 | 0 | 0 | 0 | 1 | 0 |
| data | 108 | 70 | 0 | 16 | 0 | 18 | 3 | 1 |
| ui | 74 | 60 | 3 | 7 | 0 | 0 | 1 | 3 |
| actions | 166 | 122 | 9 | 26 | 4 | 0 | 3 | 2 |
| validations | 11 | 4 | 0 | 7 | 0 | 0 | 0 | 0 |
| logic | 47 | 42 | 4 | 0 | 1 | 0 | 0 | 0 |
| strings | 25 | 11 | 0 | 13 | 0 | 0 | 1 | 0 |
| **total** | 438 | 315 | 16 | 69 | 5 | 18 | 9 | 6 |

Rows per finding: F1 68 · F2 7 · F3 5 · F4 2 · F5 1 · F6 1 · F7 1.
