# Notes of reader: Legacy_LDMEventsFlow (2026-10-27)

## TST presence check
Compiled files read:
- `UBTConnect.Legacy_LDMEventsFlow.EmailTarget.mvc.js` (screen).
- `Connect2_LegacyShared.Email.ScreenBlock_Household_Email.mvc.js` (the referenced block; `tst_source.py show` line numbers).

Pack elements absent on TST: none found for EmailTarget.
- Block ScreenBlock_Household_Email with the 5 inputs of the pack: EmailTarget.mvc.js:217-224.
- Event EmailSubmitted -> OnEmailLDMEventParticipant_Handler: :229-237.
- BottomBarMenu in placeholder BottomBar: :254-275.
- CommonUI_InsideLayout: :279-296.
- Handler flow (IsFromLDM, AddAuditEventDetailEvent with Host/Guess event type): :321-357.

TST elements absent in the pack:
- Placeholders `menu` and `commonUI_Elements` of the block are set to `PlaceholderContent.Empty` (EmailTarget.mvc.js:255,276).
- Block ScreenBlock_Household_Email is not in the pack: its form, texts and flows
  (OnInitialize, OnReady, OnSubmit_Email, OnChange_*, NavigationHandlerNavigation) come only from TST. Rows are marked in the `ScreenBlock_Household_Email` screen field.
- Input constraints: Subject MaxLength=100, Mandatory; Message MaxLength=1000, Mandatory, 6 lines (block :370,443,464).
- The AddAuditEventDetailEvent call passes `LongInteger.defaultValue` and `""` for two arguments (:339). The pack omits these.

TST has the 3 compiled V1 screens (not built): LDM_Email, LDM_EventDetail, LDM_MyEvents (`tst_source.py list <name>`).
No TST file exists for the 2 external sites (AndroidMaps, WebMaps).

## Pack gaps
- `strings.md` lists only strings of shared blocks (UnsupportedVersion*, WelcomeToConnect, PIN unlock). It lists none of the block texts of EmailTarget.
- `actions.md`/`data.md` list the transitive shared actions and client variables. EmailTarget and its block use none of them. I wrote one row per client variable with "not used by EmailTarget".
- Pack says "Get_UI_UpdateItems_UnreadCount_All: no mock handler found". A recorded fixture exists:
  `app/src/mocks/fixtures/UBTConnect/ServiceAPIGet_UI_UpdateItems_UnreadCount_All/01-4f5c3a3c.json`.
- Not read: the TST static entity values (OneSchoolGlobal, CampusCo, event ids); React uses constants from
  `migration/knowledge/static-entities-tst.json` per code comment.
- Not read: AddAuditEventDetailEvent (Orbit client action) and zOnApplicationEvent_Wrapper (LegacyShared). React only logs.
- The JS node text of ScheduleFeedbackMessageAfterTransition (block :1210-1213) shows only `showFeedbackMessage(Message, 1)`. The 500 ms delay in React is not visible in this JS.
- DEV and TST differ in no point I saw for EmailTarget; the 3 strings below are not in React.

## React items not found (searched)
- OnReady FromCache reset (WasCurrentViewRestoredFromCache): comment only.
- ShowCancelPopup variable: not found.
- 3 strings of App_Common (Android System Webview, old version of Connect, uninstall and reinstall).
- AddAuditEventDetailEvent repository call: log stub only.
- LDM_Email, LDM_EventDetail, LDM_MyEvents folders (not built).
- AndroidMaps, WebMaps.

## Mock files per screen
- EmailTarget: `app/src/pages/EmailTarget/mocks.ts` (handler for Connect2_LegacyShared ActionUserContactUser; collection `sentUserContactUserEmails`).
- Other screens: none (not built).

## Board lines (not built)
- LDM_Email: `| LDM_Email | /UBTConnect/LDM_Email |  | 81 |  | skip | V1 not needed: TST uses the V2 screens (GetHasNewLDM on); V1 is not built (user, 2026-10-16) | - |  |`
- LDM_EventDetail: same text, row `... | 95 |  | skip | ...`.
- LDM_MyEvents: same text, row `... | 111 |  | skip | ...`.
- EmailTarget: `| EmailTarget | /UBTConnect/EmailTarget |  | 73 | lite | build | LDM family ... build with Orbit (user, 2026-10-16) | built | route-ldm-forms |`
