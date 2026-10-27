# Notes B: Legacy_OrbitEventsFlow part B (reader, stage 1)

Screens: GuestArrangements, HelpersDetail, HostSurvey, TransportDetail, EmailContact (built), PassportScan (not built).
Rows: draft-B.json (235 rows, ids Legacy_OrbitEventsFlow-B001..B235, verdict empty).

## TST presence check

Pack elements absent on TST:
- Screen PassportScan (block OrbitPassportScanC2.PassportScan): `tst_source.py show PassportScan` answers "no file matches". Board line below.
- No other screen, block event, screen action, navigation or string of the pack part B is absent on TST.

TST elements absent in the pack (screen wrappers and block signatures only, so every block internal is "absent"):
- EmailContact / ScreenBlock_ContactForm (Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_ContactForm.mvc.js): variables UserSubject, Message,
  UserFullName, IsSubmitting, CharactersCounter, MessageMaxLength=1000, PreviousMessage, LineCount; actions OnInitialize (:1113),
  OnReady (:1158), ValidateEmptyFields (:898), OnChange/OnBlur/OnKeyUp/OnKeyDown, OnClick_Submit (:1229), NavigationHandlerNavigation
  (:1060); server action SendContactEmail (:864); inputs TextArea_In_Subject, Input_Subject, TextArea_Message.
- GuestArrangements (...ScreenBlock_GuestArrangements.mvc.js): data action GetGuestArrangements (:1436), OnReady (:1467),
  RefreshData (:1550), OnAfterFetch (:1522), OnHandle_ContactHelpdesk (:1584), OnHandle_ClickedMember (:1615); FreeSubscriptionAlert block (:1405).
- HelpersDetail (...ScreenBlock_HelperDetails.mvc.js): GetLocalOrbitMilestoneTypeById in OnReady (:899-906), BuildMemberCallData (:960),
  TogglePhonePopup (:1340), TogglePhoneFetchingFlag (:1364), ClickedMemberPhone, CallClicked, ContactByPhone_Cancel.
- TransportDetail (...ScreenBlock_TransportDetail.mvc.js): OnInitialize (:440), OnReady (:489), TransportNumber expression (:540).
- HostSurvey (...Orbit_ScreenBlocks_HostSurvey.ScreenBlock_HostSurvey.mvc.js, 8753 lines): 14 block variables, 10 local aggregates, 34 block
  actions (:4571-7330), server action PostHostSurvey (:3561), 4 note inputs with MaxLength=250 (:648, :809, :1133, :1367), Switch_HasVehicles (:1727),
  5 confirmation popups and footer (:2984-3465), BackNavigationHandler (:3476), feedback messages (:5470, :6337, :6710).
- Wrapper EmailContact: `OnHandle_Submitted` navigates back with transition UseHistory (EmailContact.mvc.js:357).

Differences between pack and TST: none found for the wrapper screens (arguments, branches, message text, MessageTypeId 3, In_MilestoneId "").
TransportDetail wrapper passes In_EventId = IntegerToLongInteger(NullIdentifier()) and In_MilestoneId = In_MilestoneId (TransportDetail.mvc.js:289-290); the pack matches.

## Pack gaps

- The pack holds wrappers and block signatures only (as the brief says). Rows for block logic come from the TST block files, not from the pack.
- Item blocks of HostSurvey (rooms, meals, helpers, vehicles: Orbit_Blocks_HostSurvey_*) are not in references.md. One row (B212) records that the
  mandatory flags and max lengths of their fields are not checked.
- Reads cut by line width: GuestArrangements block :1600 (arguments of GetContactHelpdeskSubject_Milestone after EventDetails.startDate),
  TransportDetail block :540 (else value of TransportNumber). The judge can read these two lines.
- Card_MemberInformation, MilestoneHeader, Accordion_Orbit, NoInformation_Orbit, Skeleton_Loading, ContactPopup_ByPhone and
  Orbit_Blocks.TransportDetail were not opened (other blocks). Their rows say so.
- GuestArrangements and HelpersDetail view conditions (which section shows when) were read at section level only.
- Search method for "not found": exact terms over app/src (tests excluded; comments excluded; mocks.ts excluded unless a mock row).
  The terms are in each row. A different React name for the same thing would be missed: the judge should read the named files for the
  58 not-found rows (55 are HostSurvey).

## React findings of fact (no verdicts)

- HostSurvey React renders the summary of a confirmed survey and the Unable to Host and no-setup states. It renders NotCaptured placeholders for the
  data steps (HostSurveyView.tsx:218), the step header (:228), the footer (:241) and the helper and vehicle summary sections (:199-200). The hook comment
  names "HostSurvey Q2" (useHostSurvey.ts:54). PostHostSurvey has a mock handler (pages/HostSurvey/mocks.ts:125-128) and no UI call.
- HelpersDetail React has no call of GetLocalOrbitMilestoneTypeById; helperDetailsState.ts:83 says OrbitMilestoneType does not travel.
- Several React comments cite user decisions (U17, W23, W28, Q-numbers). The judge must not count them as evidence.

## Mock files per screen

- EmailContact: app/src/pages/EmailContact/mocks.ts (ActionSendContactEmail; collection sentOrbitContactEmails)
- GuestArrangements: app/src/pages/GuestArrangements/mocks.ts (DataActionGetGuestArrangements)
- HelpersDetail: app/src/pages/HelpersDetail/mocks.ts (DataActionGetHelperDetails)
- TransportDetail: app/src/pages/TransportDetail/mocks.ts (DataActionGet_TransportDetail)
- HostSurvey: app/src/pages/HostSurvey/mocks.ts (DataActionGetHostSurvey, ActionPostHostSurvey; collection HostSurvey.surveys)
- Shared world: app/src/mocks/fictional/orbit.ts; handler contract app/src/mocks/contract.ts
- Pack app.md: "Get_UI_UpdateItems_UnreadCount_All: no mock handler found" (BottomBar call used by EmailContact; not a part B row).

## Board line of the screen that is not built

`| PassportScan | /UBTConnect/PassportScan |  |  |  | skip | V8 · skip:dev-only · exists on DEV only (flow Legacy_OrbitEventsFlow); no compiled file on TST, no survey route; revisit when TST deploys it (user, 2026-10-27) | - |  |`
