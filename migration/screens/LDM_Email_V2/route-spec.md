# Route spec: LDM_Email_V2

Evidence: `S` = `migration/runtime-sources/UBTConnect.Legacy_LDMEventsFlow_V2.LDM_Email_V2.mvc.js` (the screen),
`B` = `migration/runtime-sources/Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_Event_Email_V2.mvc.js`
(model :1-193, view :194-895, controller :896-1628). Both are TST copies fetched read-only by F9
(`migration/knowledge/runtime-sources.md`, row "More files (2026-10-16, foundation F9 …)").

## Summary
| Item | Value |
|---|---|
| Route | `/UBTConnect/LDM_Email_V2` with inputs `EventHostId` (Long Integer), `In_EventId` (Long Integer), `In_IsMessageGuest`, `In_IsContactOrganiser` (Boolean), `EventDate` (Date), `EventLocality` (Text) [S model :9-48, setInputs :82-108] |
| Tier | lite |
| Captured | not captured: user decision no-capture 2026-10-16 (`no-capture.json`); built from the compiled code, reviewed by hand |
| Shared/shell components used | `shared/Connect2_LegacyShared/Layout`, `MenuIcon__UpdatedOSUI`, `InputCounter`, `NetworkWarning`; `shared/Connect2_OrbitMobile_MUI/ErrorScreen`; `shared/NavigationHandler/NavigationConfirmationDialog`; `shared/UBTConnect_Utils/ContactPopup_ByPhone`; `shared/UBTConnect/BottomBarMenu`, `CommonUI_InsideLayout`; `components/OSValidation` |
| Screen-specific components | `components/ScreenBlock_Event_Email_V2.tsx` (block used only here, catalog/blocks.md:275 "own"), `components/actions.ts` |

## Specification
### Structure
- Screen [S view :151-231]: `ScreenBlock_Event_Email_V2` ($b1) with the six inputs (EventHostId → In_EventHostId). Its
  BottomBar placeholder holds `BottomBarMenu` ($b2). Menu and CommonUI_Elements are empty. Then `CommonUI_InsideLayout` ($b3).
- Block [B view :262-880]: `Layout` (b1-$b1) with Menu placeholder, headerLeft `MenuIcon__UpdatedOSUI` (MenuAction
  Auto, Q2), title container `text-align-center` > expression "Contact Event Coordinator" (inline
  `text-transform: capitalize`), headerRight / headerContent empty.
- Content [B :296-842]:
  - `!GetCoordinatorDetails.HasFetchError` ? (`!IsFetching` ? (`Out_HasContent` ? form : `ErrorScreen` "No Event Organiser information." (MatchMainContentHeight)) : `list-updating-cont#MarkReadLoading` > `list-updating`) : `NetworkWarning` (TryAgain).
  - Then `ShowPopup` ? nothing : container `backwards-compatibility` > `NavigationConfirmationDialog` ("Confirm" / "Are you sure you want to discard the changes?" / "Confirm" / "Cancel");
  - then `ContactPopup_ByPhone` (CallPopupData).
  - After the Layout: an empty `backwards-compatibility` container [B :874-880].
- Form `ContactOrganiser_Form` (`form card contact-organiser-form` + OSFillParent): four `contact-organiser-form-cont` containers (Cont_From margin-top 0px, Cont_To / Cont_Subject / Cont_Message margin-top 10px, Q3). Each container has a mandatory label (`contact-organiser-form-cont-label`) and a field:
  - Input_From (Email, disabled, max 100, "Sender", UserInfo.Email);
  - Input_To (Text, disabled, max 100, "Destination", CoordinatorName);
  - TextArea_Subject (disabled, max 500, 2 lines, "Email's subject", Subject);
  - TextArea_Message (enabled, max 1000, 5 lines, "Your message here...", class `… textarea-message`, OnChange).
- Then `InputCounter` (InputId = TextArea_Message), `text-align-center
  margin-top-m` > Button_Submit "Submit", `text-align-center margin-top-xl` > Button (height 40px) > icon `phone`
  (`icon font-size-1-25em`) + text "or Call us Directly" (`margin margin-left5`).
- Both buttons: `btn btn-secondary
  blue-gradient-button`, Is Default (type submit) [B :311-728].
- Markup of the widgets from the runtime (`OutSystemsReactWidgets.js` Input ≈63369, TextArea, Label, Button, Icon, Text renders).

### Data
| Call | Kind | Trigger (call-sites root) | Inputs | Outputs used | Server side (MCP / cache) | Mock scenarios |
|---|---|---|---|---|---|---|
| `ScreenBlock_Event_Email_V2/DataActionGetCoordinatorDetails` | data action, only on demand (`dataFetchDependenciesOriginal` -1, B :899-901; runtime fetchReadySources fetches only 0) | OnReady → RefreshGetCoordinatorDetails; NetworkWarning TryAgain [B :994-1027, :1052-1083, :1423-1476] | the block inputs In_EventId, In_EventHostId, In_IsMessageGuest, In_IsContactOrganiser, EventDate, EventLocality (screen variables, contract `x-os-inputs: screen-variables`) | Out_HasContent, EventName, Out_CoordinatorDetails.GetCoordinatorDetailsResponse (CoordinatorName/Email/PhoneNumber, LocalityName, CountryName, EventDate, Timezone) | not captured (contract-report.md:78, fictional) | real (shared LDM world, Q1), empty (Out_HasContent False), error (HTTP 500 → NetworkWarning), loading |
| `ActionEventContact` | server action (write) | Button_Submit → OnSubmit_Email [B :1212-1326] | UserContactRequest {EmailTo, ContactMember, FirstNameSender, LastNameSender, Subject, Message, FirstName, EmailFrom, SenderPhone, SenderLocality} | none | not captured (contract-report.md:53) | mocked P-MUTATION collection (Q1), error HTTP 500 |

### Behaviour
| Element / lifecycle | Event | Logic | Calls | Navigates to (params) | Feedback |
|---|---|---|---|---|---|
| block | OnInitialize [B :1327-1374] | restored from the view cache → Message = "" | – | – | – |
| block | OnReady [B :1423-1476] | `LongIntegerToText(In_EventId) = "" and LongIntegerToText(In_EventHostId) = ""` (never true: LongIntegerToText(0) is "0") → Out_HasContent False; else RefreshGetCoordinatorDetails (IsFetching True, refresh, OnAfterFetch), UserInfo = AppManager_GetCachedUserInfo, IsFetching False | GetCoordinatorDetails | – | – |
| GetCoordinatorDetails | OnAfterFetch [B :1184-1211] | DefaultEventName = EventName; Subject = DefaultEventName + " - " + DateToText(DateTimeToDate(EventDate)) | – | – | – |
| block | OnDestroy [B :1028-1051] | CancelPopupBox = False (not read by the view) | – | – | – |
| TextArea_Message | OnChange [B :956-993] | Trim(Message) ≠ "" → Valid True, message ""; else Valid False, "Required Field!" | – | – | – |
| Button_Submit | OnClick [B :1212-1326] | GetNetworkStatus offline → message; online: OnChange_Message; ContactOrganiser_Form.Valid → IsSending True, EventContact, AddAuditEventDetailEvent(MyTimelineCoordinatorEmailed, 0, "", EventDate, EventLocality), EmailEvent {EmailTo, NameOfSender = LastName + ", " + FirstName} → zOnApplicationEvent_Wrapper(In_IsMessageGuest ? HostMessageGuest : In_IsContactOrganiser ? ContactEventOrganiser : EmailHousehold, JSON), ScheduleFeedbackMessageAfterTransition, IsSending False, Message "", AllowUpcomingNavigation; invalid with Trim(Message) = "" → Message = "" | EventContact | previous screen | "Your message has been sent." (success, after 500 ms, JS node :1616-1622); offline "You cannot send emails without a network connection." (Info) |
| Button (call) | OnClick [B :1125-1183] | CoordinatorPhoneNumber ≠ "" → CallPopupData (LDM logo, not avatar, Trim(name), locality, time zone, ShowPopup True, display number, Phone, country) | – | – | else "Phone number is not available" (Info) |
| ContactPopup_ByPhone | Event_Call / Event_Cancel [B :1375-1422] | ShowPopup False (the block itself opens `tel:`) | – | tel: | – |
| NavigationConfirmationDialog | Navigation [B :1084-1124] | Trim(Message) ≠ "" → PreventNavigation (the dialog asks) | – | – | – |
| NetworkWarning | TryAgain [B :1052-1083] | RefreshGetCoordinatorDetails, IsFetching False | GetCoordinatorDetails | – | – |

Exceptions go to the Legacy_LDMEventsFlow_V2 flow handler [S controller :340-342] (`raiseToFlowHandler`). IsSending and
CancelPopupBox are not read by the view [B view]. No data is sent with the variables that a capture shows.

### States
| State | Condition (expression) | Captured | Scenario |
|---|---|---|---|
| form | !HasFetchError, !IsFetching, Out_HasContent | no | real |
| loading | IsFetching | no | loading |
| no coordinator | Out_HasContent False | no | empty |
| network warning | GetCoordinatorDetails.HasFetchError | no | error |
| call popup | CallPopupData.ContactPopupData.ShowPopup | no | real + click |

## Patterns used
- P-PARAMS: the six screen inputs from the query string with the original names (`api.ts readInputs`).
- P-STATES: content branches fetch error / fetching / no content / form, in the original order.
- P-DATA: `api.ts` adapters with `callAction` and the contract types (`types.ts`).
- P-MOCKS: `mocks.ts` contract handlers on the shared LDM world (`src/mocks/fictional/ldm.ts`).
- P-MUTATION: EventContact stores the sent request in a `collection` of `src/mocks/store.ts`.
- P-CALLS: GetCoordinatorDetails only in OnReady / TryAgain, EventContact only on Submit.
- P-FORM: `OSValidation` form, inputs and the Valid assigned by OnChange_Message.
- P-DIALOG: `NavigationConfirmationDialog` on the shell's `dx-before-navigation`.
- P-BACK: Submit's previous-screen navigation (`useNavigateBack`) after AllowUpcomingNavigation.

## Feature flags
The flags `flags.py route LDM_Email_V2` lists belong to the shared BottomBarMenu / CommonUI blocks of the variant group
`ldm_email`; ScreenBlock_Event_Email_V2 reads none [B: no flag action].
- `connect_LaunchDarkly_PermissionCheck`: not a flag (user, 2026-10-14); built in the shared blocks.
- `C2EnableC1DirectoryView`: default-only, TST on (user, 2026-10-14); read by BottomBarMenu.
- `C2NewBookmarks`: default-only, TST off (user, 2026-10-14); read by the shared blocks.
- `App_PIN_BiometricEnabled`: not a flag (user, 2026-10-14).
- `mobileDirectoryBookmarkNote`: default-only, TST off (user, 2026-10-14); bottom bar.

## Unclear points
- Mock data and the write's mock semantics (no TST call recorded) → Q1 (decision, answered A; built with A) [questions.md Q1]
- MenuAction Auto rendering in the header → Q2 (decision, answered A; built with A) [questions.md Q2]
- Inline margin-top styles of the compiled view vs consistency_check without a capture → Q3 (decision, answered A; built with A) [questions.md Q3]

## Decisions to confirm
- Q1 → A (answered) [questions.md Q1]: GetCoordinatorDetails from the shared LDM world (meal by In_EventId, else EventHostId; unknown →
  Out_HasContent False); EventContact mocked in the collection `Connect2_OrbitMobile_MUI.sentEventContactEmails`.
- Q2 → A (answered) [questions.md Q2]: header icon rendered as Back (as LDM_MyEvents_V2's capture).
- Q3 → A (answered) [questions.md Q3]: the React app renders the compiled margin-top inline styles; CR-LDM_Email_V2-1 asks the check to accept them.
- GetCoordinatorDetails sends the six block inputs only (the original sends every block variable; the other ones are
  local UI state).
- Restored from the view cache: the block starts again (Message "" as OnInitialize does, OnReady fetches again); the
  other variables are not restored from the cache.
- Telemetry (AddAuditEventDetailEvent, zOnApplicationEvent_Wrapper) goes to the log without personal fields (decision
  U17 as the other LDM routes); local copies in `components/actions.ts` until CR-LDM_EventDetail_V2-1.
- GetNetworkStatus = `navigator.onLine` (as LDM_EventDetail_V2).

## Change requests
- CR-LDM_Email_V2-1: consistency_check NO-INLINE-COLOR: accept inline styles proven by the compiled view for no-capture routes (applied) [CR-LDM_Email_V2-1.md]

## Parity
| State | Scenario | structure | class | attr | style | layout | Exemptions fired |
|---|---|---|---|---|---|---|---|
| (none) | no capture: the user reviews by hand | – | – | – | – | – | – |

## Server-side notes
- EventContact must send to the coordinator of the session user's meal only.
- The server must not trust EmailTo / ContactMember from the client (the request carries them).
- The server must check that the sender is the signed-in user.
- GetCoordinatorDetails must scope the meal (In_EventId / In_EventHostId) to the session user's events.
