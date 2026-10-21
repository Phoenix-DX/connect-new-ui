# Route spec: EmailTarget

Evidence: `S` = `migration/runtime-sources/UBTConnect.Legacy_LDMEventsFlow.EmailTarget.mvc.js` (TST copy fetched
read-only by F9, `migration/knowledge/runtime-sources.md`); `H` = `capture/survey-UBTConnect.json` →
`sources["Connect2_LegacyShared.Email.ScreenBlock_Household_Email.mvc.js"]` (line numbers of that text: model :1-150,
view :151-681, controller :682-1220; F9 kept no newer copy, so the survey's is current).

## Summary
| Item | Value |
|---|---|
| Route | `/UBTConnect/EmailTarget` with inputs `In_HouseholdFirstName`, `In_HouseholdFullName` (Text), `EmailTo` (Email), `ContactBusinessType`, `InitialEmailSubject` (Text), `EmailHost`, `IsFromLDM` (Boolean), `EventDate` (Date), `EventLocality` (Text) [S model :12-65, setInputs :106-146] |
| Tier | lite |
| Captured | not captured: user decision no-capture 2026-10-16 (`no-capture.json`); no screen links here (notes.md); built from the compiled code, reviewed by hand |
| Shared/shell components used | `shared/Connect2_LegacyShared/Layout`, `MenuIcon__UpdatedOSUI`, `InputCounter`; `shared/osui/DEPRECATED_ButtonLoading`; `shared/NavigationHandler/NavigationConfirmationDialog`; `shared/UBTConnect/BottomBarMenu`, `CommonUI_InsideLayout`; `components/OSValidation` |
| Screen-specific components | `components/ScreenBlock_Household_Email.tsx` (catalog/blocks.md:214, "own", used only here), `components/actions.ts` |

## Specification
### Structure
- Screen [S view :203-260]: `ScreenBlock_Household_Email` ($b1: InitialEmailSubject, In_HouseholdFullName, EmailTo,
  In_HouseholdFirstName, ContactBusinessType; event EmailSubmitted) with `BottomBarMenu` ($b2) in its BottomBar, Menu /
  CommonUI_Elements empty; then `CommonUI_InsideLayout` ($b3).
- Block [H view :206-681]:
  - `Layout` (b1-$b1): Menu placeholder, headerLeft `MenuIcon__UpdatedOSUI` (MenuAction Back), title `text-align-center` > "Contact " + HeaderText [H :281].
  - Content: container `background-neutral-0 padding-x-base
    padding-top-xxl` > container `inline-flex-center-vertical full-width padding-x-l padding-y-base` > icon `envelope`
    2x (`icon text-primary`) + expression `margin-left-base` "To: " + In_HouseholdFullName.
  - Form `Email_Form` (`form card` + OSFillParent) [H :331-595]. It holds:
    - mandatory label "Subject";
    - Input `Email_Subject` (Text, max 100, "Subject", autocomplete off, style `form-control` + " field-error-border" when not Valid);
    - `InputCounter` (b1-$b3);
    - mandatory label "Message";
    - TextArea `TextArea_Message` (max 1000, 6 lines, "Type message here...", autocomplete off, style `form-control textarea-message` + " field-error-border");
    - `InputCounter` (b1-$b4);
    - container (inline `text-align: center;`) > `DEPRECATED_ButtonLoading` (b1-$b5, IsLoading = IsSending) > Button `btn btn-primary` + OSFillParent, Is Default, with `btn-loading margin-right-s` (OSInline) > `loading-spinner` and `btn-label` (OSInline) "send email".
  - Then container `backwards-compatibility` > `NavigationConfirmationDialog` (b1-$b6: "Confirm" / "Are you sure you want to discard the changes?" / "Confirm" / "Cancel") [H :596-640].

### Data
| Call | Kind | Trigger (call-sites root) | Inputs | Outputs used | Server side (MCP / cache) | Mock scenarios |
|---|---|---|---|---|---|---|
| `Connect2_LegacyShared` `ActionUserContactUser` | server action (write) | Button OnClick → OnSubmit_Email [H :532, :710-886] | UserContactRequest {EmailTo, ContactMember = FirstName = In_HouseholdFirstName, FirstNameSender, LastNameSender, Subject, Message, EmailFrom, SenderLocality, SenderCountry} | none | not captured (contract-report.md:34, fictional) | P-MUTATION collection (Q1), error HTTP 500, loading |

No data action (H :706, S :318).

### Behaviour
| Element / lifecycle | Event | Logic | Calls | Navigates to (params) | Feedback |
|---|---|---|---|---|---|
| block | OnInitialize [H :1061-1110] | IsSending False; Subject = InitialEmailSubject; Message = ""; HeaderText = "School" (ContactBusinessType = OneSchool Global), "Store" (Campus&Co), else the default "Member" | – | – | – |
| block | OnReady [H :966-1022] | restored from the view cache → ShowCancelPopup False, Subject "", Message "", IsChange False | – | – | – |
| Email_Subject / TextArea_Message | OnChange [H :928-965, :1023-1060] | Trim(value) ≠ "" → Valid True, message "", IsChange True; else IsChange False | – | – | – |
| Button "send email" | OnClick [H :532, :710-886] | built-in validation of Email_Form; then each field: Trim ≠ "" → Valid True / IsChange True, else Valid False "Required Field!"; both filled → IsSending True; offline → message, IsSending False; online → the two OnChange actions; Email_Form.Valid → IsChange False, GetUserInfo, UserContactUser, EmailSubmitted, EmailHouseholdEvent {EmailTo, NameOfSender}, zOnApplicationEvent_Wrapper2(EmailHousehold, JSON), feedback, IsSending False, IsEmailSubmitted True, previous screen; else blank fields cleared and IsSending False | UserContactUser | previous screen | "Your message has been sent." (success, 500 ms, JS node H :1208-1214); offline "You cannot send emails without a network connection." (Error) |
| screen | EmailSubmitted → OnEmailLDMEventParticipant_Handler [S :320-360] | IsFromLDM → AddAuditEventDetailEvent(EmailHost ? MyTimelineHostEmailed : MyTimelineGuessEmailed, 0, "", EventDate, EventLocality) | – | – | – |
| NavigationConfirmationDialog | Navigation [H :887-927] | IsChange → PreventNavigation (the dialog asks) | – | – | – |

Exceptions go to the Legacy_LDMEventsFlow flow handler [S :379-381] (`raiseToFlowHandler`); IsSending stays True.

### States
| State | Condition (expression) | Captured | Scenario |
|---|---|---|---|
| form | always | no | real |
| invalid | a blank field after Send | no | real + click |
| sending | IsSending (button loading) | no | loading |

## Patterns used
- P-PARAMS: the nine screen inputs from the query string with the original names (`api.ts readInputs`).
- P-DATA: `api.ts` adapter with `callAction` and the contract types.
- P-MOCKS: `mocks.ts` contract handler.
- P-MUTATION: UserContactUser stores the request in a `collection` of `src/mocks/store.ts`.
- P-CALLS: the only call is on the Send click.
- P-FORM: `OSValidation` form, built-in validation of Email_Form and the Valid the actions assign.
- P-DIALOG: `NavigationConfirmationDialog` on the shell's `dx-before-navigation`.
- P-OSUI: `DEPRECATED_ButtonLoading` from `src/shared/osui/`.
- P-BACK: previous-screen navigation after the send (`useNavigateBack`).

## Feature flags
The flags `flags.py route EmailTarget` lists belong to the shared BottomBarMenu / CommonUI blocks; the screen and
ScreenBlock_Household_Email read none [S, H: no flag action].
- `connect_LaunchDarkly_PermissionCheck`: not a flag (user, 2026-10-14); built in the shared blocks.
- `C2EnableC1DirectoryView`: default-only, TST on (user, 2026-10-14); read by BottomBarMenu.
- `C2NewBookmarks`: default-only, TST off (user, 2026-10-14); read by the shared blocks.
- `App_PIN_BiometricEnabled`: not a flag (user, 2026-10-14).
- `mobileDirectoryBookmarkNote`: default-only, TST off (user, 2026-10-14); bottom bar.

## Unclear points
- The write's mock semantics and the review data (no TST call recorded, no inbound link) → Q1 (decision, answered A; built with A) [questions.md Q1]

## Decisions to confirm
- Q1 → A (answered) [questions.md Q1]: UserContactUser mocked in the collection `Connect2_LegacyShared.sentUserContactUserEmails`; the
  data come from the inputs (review URL in the review notes below).
- Restored from the view cache: the block starts again (OnInitialize: Subject = InitialEmailSubject) instead of the
  cache's reset (Subject ""); the view cache does not keep this block.
- Telemetry (AddAuditEventDetailEvent, zOnApplicationEvent_Wrapper) goes to the log without personal fields (decision
  U17); local copies in `components/actions.ts` until CR-LDM_EventDetail_V2-1.
- GetNetworkStatus = `navigator.onLine` (as the other LDM routes).
- Review URL: `/UBTConnect/EmailTarget?In_HouseholdFirstName=Darío&In_HouseholdFullName=Medina,%20Darío%20%26%20Lorena&EmailTo=dario.medina@example.com&IsFromLDM=True&EventDate=2026-09-26&EventLocality=Bahia%20Blanca`
  (fictional household of the shared LDM world).

## Change requests
- none

## Parity
| State | Scenario | structure | class | attr | style | layout | Exemptions fired |
|---|---|---|---|---|---|---|---|
| (none) | no capture: the user reviews by hand | – | – | – | – | – | – |

## Server-side notes
- UserContactUser receives EmailTo and the sender fields from the client.
- The server must take the sender from the session.
- The server must send only to a household that the user may contact (directory permissions), never to an arbitrary address.
