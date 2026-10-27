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

- Counts by verdict: match 398 · partial 18 · missing 69 · differs 6 · mock-only 18 · n/a 9 · unclear 0 (518 rows,
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

| Id | Severity | Screen / element | Finding | React location | Suggested fix | Status |
|---|---|---|---|---|---|---|
| F1 | blocker | HostSurvey: the survey wizard | The data steps (navigation, accommodation, meal, helper, vehicle), the step header, the footer with Next / Submit, the five confirmation popups, the 15 item blocks, the four 250-character note inputs, the vehicle switch, 25 block actions, 9 variables, 6 local aggregates, 13 strings and the PostHostSurvey call are not built. React shows the summary of a confirmed survey, the Unable to Host and no-setup states only. A host cannot answer, save as a draft or submit the survey. Origin: the mock-phase choice "wizard/popups NotCaptured" (`auto-decisions-2026-10-16.md:73`, auto-accepted, HostSurvey Q2), not a decision on the behaviour. | `useHostSurvey.ts:54,127-131`, `HostSurveyView.tsx:199-200,218,228,241`, `hostSurveyState.ts:94-110` | Build the wizard from the TST block (`ScreenBlock_HostSurvey.mvc.js`, 409990 B) and the 15 item blocks; wire `ActionPostHostSurvey` (mock handler exists). See Q1. | |
| F2 | blocker | MilestoneDetail: 5 milestone types | `ScreenBlock_MealGuest`, `_MealHost`, `_MealHelper`, `_AccommodationGuest`, `_AccommodationHelper` render `<NotCaptured>`; the wrapper action `OnHandle_NavigateToContactByEmail` (ContactByEmailOrbitHost, surname by GetNameAndSurname_ByFullName) is absent. A guest or helper of a meal or accommodation milestone cannot see the milestone. Origin: `auto-decisions-2026-10-16.md:60` (MilestoneDetail Q5, auto-accepted "other milestone types NotCaptured"). | `MilestoneWrapperView.tsx:80-82`, `MilestoneDetailPage.tsx:54` | Build the five blocks from their TST files (118 to 166 KB each) and the wrapper action. See Q3. | |
| F3 | major | OrbitLanding: "View Passport details" | React shows the control and navigates to `/UBTConnect/PassportScan` with LoginMemberId and TargetId after the access gate. TST has no such control, event or screen (`tst_source.py grep "assport"`: no match; `list Passport`: none). The React app registers no such route, so the tap leads to an unknown route. The element comes from the DEV dump of 2026-10-27 (DEV ≠ TST, §6.1). `shell-facts.md:155` records the navigation as a fact, not as a decision. | `OrbitLandingView.tsx:163-169`, `useOrbitLanding.ts:184-188`, `OrbitLandingPage.tsx:47-54` | Follow TST: remove the control, the event and the handler until TST deploys PassportScan (board V8). See Q2. | |
| F4 | minor | OrbitLanding and AccommodationHost: OnReady on a restored view | TST ends OnReady on every restored view (`ScreenBlock_OrbitLanding :1669` show). React ends only when the data was fetched and fetches again otherwise (comment "F40"; no recorded decision). | `useOrbitLanding.ts:105`, `useAccommodationHost.ts:147` | Keep the TST branch: end on restore. If the port needs the re-fetch, record the decision. | no fix: decision W34 (a) of 2026-10-22 kept by the user on 2026-10-27 (`decisions.md` Legacy_OrbitEventsFlow F4): the port re-fetches on a restored view without data; rows differs by W34 |
| F5 | minor | MilestoneDetail: GetGmpMilestoneHost error | TST handler: IsFetchingData = False, raise UnknownError (`:1156-1202`). React has no catch: the rejection goes to the flow handler and the skeleton stays. | `useMilestoneWrapper.ts:42-59` | Catch the rejection, dispatch IsFetchingData = False, then re-raise. | no fix: finding withdrawn 2026-10-27 (`fixes/B-restore.md`): TST runs OnAfterFetch only after a successful fetch (`ScreenBlock_MilestoneWrapper :1135-1143`), so a failed call keeps the skeleton and goes to the flow handler; React does the same (`flowState.ts:112`) |
| F6 | minor | EmailContact: GetTextAreaLineHeight | TST divides by the clientWidth of the subject container (`CF:1577-1584`); React divides by the body clientWidth. The row count of the read-only subject can differ. | `EmailContact/actions.ts:19-20`, `useOrbitContactForm.ts:77` | Measure the container element. | no fix: finding withdrawn 2026-10-27 (`fixes/G2-orbit-ldm.md`): the TST node reads `document.querySelector("body").clientWidth - 20` (`ScreenBlock_ContactForm :1579-1581`); React `EmailContact/actions.ts:19-20` does the same |
| F7 | info | ViewDocuments: Action_OpenDoc | React also marks a document viewed when the bare DocumentName equals DocName; TST compares the name with the extension only (`:806`). Both callers pass the extension: no visible effect. | `viewDocumentsState.ts:62` | Drop the extra comparison. | |
| F8 | minor | EventBooklet: EventBooklet_MembersItem, the name and the host | TST: the two containers have an OnClick event (Click_Member, Click_Host). The platform Container widget then sets the inline style `cursor: pointer` (`OutSystemsReactWidgets.js:1`, Container render). React puts the click handlers on plain divs without that style. The theme CSS sets no cursor for the two classes (`Connect2_LegacyShared.OrbitTheme.css:3235, 3254`). In a desktop browser, the pointer does not change on the name and the host of a booklet row. | `EventBooklet_MembersItem.tsx:41,61` | Add the inline style `cursor: pointer` to the two containers, as `Popup_OrbitLanding_Filters.tsx:92` does for "Clear all". | fixed 2026-10-27 (`fixes/G2-orbit-ldm.md`) |

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
| data | 115 | 77 | 0 | 16 | 1 | 18 | 3 | 0 |
| ui | 114 | 101 | 5 | 7 | 0 | 0 | 1 | 0 |
| actions | 175 | 133 | 9 | 26 | 4 | 0 | 3 | 0 |
| validations | 11 | 4 | 0 | 7 | 0 | 0 | 0 | 0 |
| logic | 65 | 60 | 4 | 0 | 1 | 0 | 0 | 0 |
| strings | 31 | 17 | 0 | 13 | 0 | 0 | 1 | 0 |
| **total** | 518 | 398 | 18 | 69 | 6 | 18 | 9 | 0 |

Rows per finding: F1 68 · F2 7 · F3 5 · F4 2 · F5 1 · F6 1 · F7 1 · F8 2.

## 9. Follow-up pass (2026-10-27)

Rows settled or sharpened after the user answers of 2026-10-27 and the TST files that `tst_source.py` reads. A row that stays `unclear` has a new question that names what settles it. Every row below has `verified: "live"`.

| Row | Old verdict | New verdict | Evidence |
|---|---|---|---|
| Legacy_OrbitEventsFlow-A121 | `unclear` | `partial` | migration/runtime-sources/Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet.mvc.js:82-143, 2958, 2987; app/src/pages/EventBooklet/hooks/eventBookletState.ts:62-91; app/src/pages/EventBooklet/hooks/eventBookletDataFlows.ts:88-90 |
| Legacy_OrbitEventsFlow-B069 | `unclear` | `match` | migration/runtime-sources/Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_GuestArrangements.mvc.js:491, 1637; Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_MemberInformation.mvc.js:257, 336; app/src/pages/GuestArrangements/hooks/useGuestArrangements.ts:82 |
| Legacy_OrbitEventsFlow-B103 | `unclear` | `match` | migration/runtime-sources/Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_HelperDetails.mvc.js:472, 1245; Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_MemberInformation.mvc.js:257, 336; app/src/pages/HelpersDetail/hooks/useHelperDetails.ts:122-137 |
| Legacy_OrbitEventsFlow-J016 | `unclear` | `unclear` | Not a capture: a reader and judge pass settles it. Compare Connect2_OrbitMobile_MUI.Orbit_Blocks.Popup_OrbitLanding_Filters.mvc.js and Popup_OrbitLanding_Sort.mvc.js (migration/runtime-sources/) with app/src/pages/OrbitLanding/components/Popup_OrbitLanding_Filters.tsx and Popup_OrbitLanding_Sort.tsx, row by row (UI tree, actions, strings). The follow-up pass did not do it (budget). |
| Legacy_OrbitEventsFlow-J017 | `unclear` | `unclear` | Not a capture: a reader and judge pass settles it. Compare Connect2_OrbitMobile_MUI.Orbit_Blocks.EventBooklet_ListHeader.mvc.js, EventBooklet_MembersItem.mvc.js and PopUp_OrbitBookletFilters.mvc.js (migration/runtime-sources/) with the three React files under app/src/pages/EventBooklet/components/. The follow-up pass did not do it (budget). |
| Legacy_OrbitEventsFlow-J018 | `unclear` | `unclear` | Not a capture: a reader and judge pass settles it. Compare Connect2_OrbitMobile_MUI.Orbit_Blocks.TransportDetail.mvc.js and TransportDetail_TravelInfo.mvc.js (migration/runtime-sources/) with app/src/pages/TransportDetail/components/TransportDetail.tsx and TransportDetail_TravelInfo.tsx. The follow-up pass did not do it (budget). |

## 11. User decisions of 2026-10-27 on the candidate findings

- Row A121: `partial` → `differs` (user decision 2026-10-27 C2: keep the React default of IsGuestView).

## 10. Orbit block pass (2026-10-27)

This pass compares the internals of 7 own blocks of `Connect2_OrbitMobile_MUI` with their React ports. It settles rows J016, J017 and J018. Each row is one input default, event, action branch, visible rule or text group. Every row has `verified: "live"`.

- Result: 80 new rows (K001 to K080): match 79, partial 1.
- J016 (OrbitLanding filter and sort blocks): `unclear` to `match`.
- J017 (EventBooklet blocks): `unclear` to `partial`, finding F8.
- J018 (TransportDetail blocks): `unclear` to `match`.
- F8 (minor): `EventBooklet_MembersItem` does not show the pointer cursor on its two clickable containers. See section 5.
- React copies two TST quirks on purpose. `OnChange_DropdownSearch_Countries` appends a country record to the selected localities (K047). The class of the stopover arrival part reads the departure of the transport (K067). No finding: React follows TST.
- No row stays `unclear`.

Files. TST: `Connect2_OrbitMobile_MUI.Orbit_Blocks.<Block>.mvc.js`; the TST lines are the numbers that `python3 migration/clarify/tools/tst_source.py show <file>` prints. React: `app/src/pages/OrbitLanding/components/<Block>.tsx` for the two OrbitLanding popups, `app/src/pages/EventBooklet/components/<Block>.tsx` for the three EventBooklet blocks and `app/src/pages/TransportDetail/components/<Block>.tsx` for the two TransportDetail blocks.

The row id prefix is `Legacy_OrbitEventsFlow-`. `checklist.json` has the full text of each row.

| Row | Block | Element | TST lines | React lines | Verdict |
|---|---|---|---|---|---|
| K001 | Popup_OrbitLanding_Sort | Input In_IsSortASC | 13-15, 56-60 | 9-10, 27 | `match` |
| K002 | Popup_OrbitLanding_Sort | Close icon | 150-170, 329 | 31-33 | `match` |
| K003 | Popup_OrbitLanding_Sort | RadioGroup_SortBy | 196-268 | 36-50 | `match` |
| K004 | Popup_OrbitLanding_Sort | Selected sort label class | 230-231, 257-258 | 28, 45, 48 | `match` |
| K005 | Popup_OrbitLanding_Sort | Apply button | 279-303, 332 | 52-62 | `match` |
| K006 | Popup_OrbitLanding_Sort | Texts | 236, 263, 303 | 45, 48, 61 | `match` |
| K007 | Popup_OrbitLanding_Sort | Lifecycle | 346-350 | 25-67 | `match` |
| K008 | Popup_OrbitLanding_Filters | Inputs and local variable | 13-33, 72-100 | 10-23, 43-47 | `match` |
| K009 | Popup_OrbitLanding_Filters | Close icon | 182-206, 643-645 | 56-58 | `match` |
| K010 | Popup_OrbitLanding_Filters | Options container height | 208-215 | 59-63 | `match` |
| K011 | Popup_OrbitLanding_Filters | RadioGroup Upcoming / Past | 232-318 | 65-85 | `match` |
| K012 | Popup_OrbitLanding_Filters | OnChange_RadioGroup_Filter | 241-248, 515-544 | 69-73 | `match` |
| K013 | Popup_OrbitLanding_Filters | Visible rule of the year filter | 347, 358, 369 | 53, 86 | `match` |
| K014 | Popup_OrbitLanding_Filters | "Clear all" style | 319-354 | 88-95 | `match` |
| K015 | Popup_OrbitLanding_Filters | "Clear all" OnClick | 322-330 | 94 | `match` |
| K016 | Popup_OrbitLanding_Filters | OnClick_ClearYearFilters | 545-582 | 49-51 | `match` |
| K017 | Popup_OrbitLanding_Filters | Year row | 376-456 | 101-130 | `match` |
| K018 | Popup_OrbitLanding_Filters | OnChange_Checkbox_Year | 428-435, 583-623 | 47 | `match` |
| K019 | Popup_OrbitLanding_Filters | OnReady | 658-675 | 46-47 | `match` |
| K020 | Popup_OrbitLanding_Filters | Apply button | 466-490, 640-642 | 134-145 | `match` |
| K021 | Popup_OrbitLanding_Filters | Texts | 286, 313, 354, 365, 490 | 80, 83, 96, 99, 143 | `match` |
| K022 | EventBooklet_ListHeader | Inputs and lifecycle | 11-12, 220-224 | 8-13 | `match` |
| K023 | EventBooklet_ListHeader | Header row | 121-183 | 19-31 | `match` |
| K024 | EventBooklet_ListHeader | Texts | 160, 177 | 25, 28 | `match` |
| K025 | EventBooklet_MembersItem | Input MemberItem | 13-14 | 13-14 | `match` |
| K026 | EventBooklet_MembersItem | Member name | 172-181 | 22-26, 42 | `match` |
| K027 | EventBooklet_MembersItem | Name OnClick | 146-165, 312-314 | 41 | `match` |
| K028 | EventBooklet_MembersItem | Pointer cursor of the clickable cells | 149-157, 248-256 | 41, 61 | `partial` (F8) |
| K029 | EventBooklet_MembersItem | Days | 198-245 | 44-60 | `match` |
| K030 | EventBooklet_MembersItem | Host | 271-276 | 61-63 | `match` |
| K031 | EventBooklet_MembersItem | Host OnClick | 248-256, 309-311 | 61 | `match` |
| K032 | EventBooklet_MembersItem | Lifecycle | 326-330 | 31-67 | `match` |
| K033 | PopUp_OrbitBookletFilters | Inputs and local variables | 13-30 | 19-39 | `match` |
| K034 | PopUp_OrbitBookletFilters | OnInitialize | 744-783, 1458-1475 | 54-67, 81 | `match` |
| K035 | PopUp_OrbitBookletFilters | FilterLocalitiesFromCountry | 784-864 | 43-49 | `match` |
| K036 | PopUp_OrbitBookletFilters | OnReady | 1226-1249, 1476-1493 | 93-95 | `match` |
| K037 | PopUp_OrbitBookletFilters | Title row and close icon | 159-199, 1441-1443 | 228-236 | `match` |
| K038 | PopUp_OrbitBookletFilters | Guests and Helpers checkboxes | 219-300 | 238-274 | `match` |
| K039 | PopUp_OrbitBookletFilters | OnChange_Checkboxes, Guests | 244, 1250-1287 | 129-140, 248-251 | `match` |
| K040 | PopUp_OrbitBookletFilters | OnChange_Checkboxes, Helpers | 285, 1288-1300 | 141-147, 267-270 | `match` |
| K041 | PopUp_OrbitBookletFilters | ResetCheckboxes | 1332-1385 | 105-124 | `match` |
| K042 | PopUp_OrbitBookletFilters | Day selector | 301-357 | 275-289 | `match` |
| K043 | PopUp_OrbitBookletFilters | OnHandle_ClickedDate | 1089-1135 | 152-162 | `match` |
| K044 | PopUp_OrbitBookletFilters | DropdownTags_Roles | 376-445 | 290-306 | `match` |
| K045 | PopUp_OrbitBookletFilters | OnChange_DropdownSearch_Roles | 904-970 | 166-175 | `match` |
| K046 | PopUp_OrbitBookletFilters | DropdownTags_Countries | 446-522 | 307-322 | `match` |
| K047 | PopUp_OrbitBookletFilters | OnChange_DropdownSearch_Countries | 971-1088 | 181-199 | `match` |
| K048 | PopUp_OrbitBookletFilters | DropdownTags_Localities | 523-599 | 323-338 | `match` |
| K049 | PopUp_OrbitBookletFilters | OnChange_DropdownSearch_Localities | 706-743 | 201-204 | `match` |
| K050 | PopUp_OrbitBookletFilters | OnInitialized_Dropdowns | 428, 491, 582, 865-903 | 99-101, 301, 317, 333 | `match` |
| K051 | PopUp_OrbitBookletFilters | Footer | 600-681 | 341-353 | `match` |
| K052 | PopUp_OrbitBookletFilters | Apply | 620-627, 1444-1446 | 349-351 | `match` |
| K053 | PopUp_OrbitBookletFilters | OnHandle_ResetFilters | 634-641, 1136-1225 | 209-222, 352 | `match` |
| K054 | PopUp_OrbitBookletFilters | Texts | 169, 229, 270, 321, 386, 395, 401, 466, 468, 543, 554, 661, 671 | 225, 229, 240, 259, 277, 293, 300, 309, 316, 325, 332, 347-348 | `match` |
| K055 | TransportDetail | Input and local variable | 13-18 | 17-21, 61 | `match` |
| K056 | TransportDetail | OnReady | 1452-1497, 1515-1532 | 59-61 | `match` |
| K057 | TransportDetail | Operator row | 155-228 | 131-135 | `match` |
| K058 | TransportDetail | Type row | 230-306 | 136-140 | `match` |
| K059 | TransportDetail | Departure Location row | 308-443 | 64, 74-81, 141 | `match` |
| K060 | TransportDetail | Arrival Location row | 445-580 | 74-81, 142 | `match` |
| K061 | TransportDetail | Baggage Allowance row | 582-680 | 143-151 | `match` |
| K062 | TransportDetail | Travel info block | 681-704 | 152-157 | `match` |
| K063 | TransportDetail | Trip Duration, vehicle | 705-795 | 159-164 | `match` |
| K064 | TransportDetail | Trip Duration, other types | 796-884 | 165-169 | `match` |
| K065 | TransportDetail | Stops list | 885-1274 | 170-182 | `match` |
| K066 | TransportDetail | Stop title | 993-1013 | 89 | `match` |
| K067 | TransportDetail | Stopover Arrival Terminal | 1018-1105 | 90-100 | `match` |
| K068 | TransportDetail | Stopover Departure Terminal | 1106-1188 | 101-111 | `match` |
| K069 | TransportDetail | Stop Duration row | 1189-1271 | 114-118 | `match` |
| K070 | TransportDetail | Seats row | 1275-1382 | 122-126, 183-195 | `match` |
| K071 | TransportDetail | Notes | 1383-1425 | 196-203 | `match` |
| K072 | TransportDetail | Texts | 206, 284, 370, 507, 633, 656, 674, 764, 855, 974, 1052, 1134, 1241, 1327, 1404 | 87, 93, 104, 116, 132, 137, 141-149, 161, 166, 184, 199 | `match` |
| K073 | TransportDetail_TravelInfo | Inputs and lifecycle | 13-30, 741-788 | 12-18 | `match` |
| K074 | TransportDetail_TravelInfo | General information row | 164-200 | 49-54 | `match` |
| K075 | TransportDetail_TravelInfo | Travel identifier | 205-259 | 55-59 | `match` |
| K076 | TransportDetail_TravelInfo | Codeshare Flight | 260-344 | 60-78 | `match` |
| K077 | TransportDetail_TravelInfo | Booking Reference | 345-401 | 79-92 | `match` |
| K078 | TransportDetail_TravelInfo | Fare Type, Onboard Meal Type, Class | 402-557 | 93-117 | `match` |
| K079 | TransportDetail_TravelInfo | Vehicle Name and Driver Name | 560-734 | 121-148 | `match` |
| K080 | TransportDetail_TravelInfo | Texts | 283, 370, 434, 486, 531, 623, 708 | 63, 83, 100, 108, 113, 130, 142 | `match` |
