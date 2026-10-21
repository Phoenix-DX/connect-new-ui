# Route spec: EmailContact

Sources (analysis/sources/): `S` = UBTConnect.Legacy_OrbitEventsFlow.EmailContact.mvc.js (survey copy; the TST copy in
migration/runtime-sources/ differs only in debugger ids), `CF` = Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.
ScreenBlock_ContactForm.mvc.js (TST copy from migration/runtime-sources/, identical to the survey apart from debugger
ids). No capture (no-capture.json, user 2026-10-16): built from the compiled code.

## Summary
| Item | Value |
|---|---|
| Route | `/UBTConnect/EmailContact` with In_IsContactHelpdesk (Boolean), In_EventId (Long Integer), In_MilestoneId (Text), In_TargetMemberId (Long Integer), In_Subject, In_MilestoneTitle, In_EventName, In_HostName, In_HostEmail, In_FormattedDateTime (Text) [S :12-61] |
| Tier | lite |
| Captured | not captured (no-capture.json); no inbound link in the app (notes.md) |
| Shared/shell components used | Layout_Orbit, MenuIcon__UpdatedOSUI, InputCounter (shared/Connect2_LegacyShared); NavigationConfirmationDialog, preventNavigation (shared/NavigationHandler); DEPRECATED_ButtonLoading (shared/osui); BottomBarMenu, CommonUI_InsideLayout (shared/UBTConnect); OSBlock, OSForm and the validation service (components/OSValidation); appManager_GetCachedUserInfo, showFeedbackMessage, raiseToFlowHandler, useNavigateBack, useOsNavigate (shell) |
| Screen-specific components | ScreenBlock_ContactForm (own block, catalog: not built elsewhere); components/actions.ts (JS nodes, audit events) |

## Specification
### Structure
Screen [S :226-306]: ScreenBlock_ContactForm `$b1` (the inputs; In_MilestoneName = In_MilestoneTitle; Menu and
CommonUI_Elements empty; BottomBar = BottomBarMenu, default inputs), CommonUI_InsideLayout.
Block [CF :277-849]: Layout_Orbit (default inputs); HeaderLeft MenuIcon__UpdatedOSUI (Auto); Title "Contact " +
(In_IsContactHelpdesk ? "Orbit Helpdesk" : "Host") [CF :343]; Content: Form "Form" (Style "form card
orbit-contact-form", grid OSFillParent) [CF :360-790]:
- helpdesk: container > Label "Subject" (not mandatory) + TextArea_In_Subject (disabled, In_Subject, max 200, rows =
  LineCount from GetTextAreaLineHeight) [CF :370-410];
- host: `flex-center-vertical full-width font-size-1-1em` > icon `orbit-icon-mail color-orbit-primary-7`, Text "To:"
  (margin-left-base), host name (margin-left-xs bold) [CF :411-455]; container > Label "Subject" (mandatory) +
  Input_Subject (mandatory, max 100, prompt "Subject") + InputCounter [CF :456-545];
- container > Label ("Your inquiry" / "Message") + TextArea_Message (mandatory, max 1000, 3 lines, autocomplete off,
  prompt "Tell us how we can help you" / "Type message here...") + InputCounter [CF :546-690];
- container > DEPRECATED_ButtonLoading (IsLoading = IsSubmitting, ExtendedClass "full-width") > Button "btn
  btn-primary full-width" (default) with "Submit" / "Send Email" [CF :691-760].
BottomBar and CommonUI_Elements placeholders. After the layout: `orbit-confirm-popup backwards-compatibility` >
NavigationConfirmationDialog ("Confirm Discard Changes", "Are you sure you want to discard this message?", "Yes",
"Cancel") [CF :789-845].

### Data
| Call | Kind | Trigger (call-sites root) | Inputs | Outputs used | Server side (MCP / cache) | Mock scenarios |
|---|---|---|---|---|---|---|
| Connect2_OrbitMobile_MUI `ActionSendContactEmail` (SendContactEmail, screenservices/…/ScreenBlock_ContactForm/ActionSendContactEmail) | server action (write) | Submit button → OnClick_Submit [CF :724, :1228-1372] | IsContactHelpdesk, EventId, MilestoneId, TargetMemberId, Subject (In_Subject), UserSubject, Message, EmailInfo {EventName, SenderFullName, HostName, HostEmail, MilestoneName, FormattedDateTime} | IsSuccess | not in MCP; the server picks the recipient (helpdesk of the event or HostEmail); must check the sender may contact them | real (Q1: stored in UBTConnect.sentOrbitContactEmails, recipient from orbit.ts orbitContactRecipients; no helpdesk address → IsSuccess False), loading, error |

### Behaviour
| Element / lifecycle | Event | Logic | Calls | Navigates to (params) | Feedback |
|---|---|---|---|---|---|
| block | OnInitialize [CF :1112-1156] | LineCount = GetTextAreaLineHeight(In_Subject, 10) [CF :1576-1585] | – | – | – |
| block | OnReady [CF :1157-1186] | UserFullName = FirstName + " " + LastName (AppManager_GetCachedUserInfo) | – | – | – |
| Input_Subject | change / blur [CF :1373-1455] | valid when Trim(UserSubject) <> "", else "Required field!" | – | – | – |
| TextArea_Message | change / blur [CF :963-1003, :1187-1227]; keydown / keyup [CF :1034-1058, :1004-1033] | valid when Trim(Message) <> ""; PreviousMessage on keydown; at length ≥ 1000 the message goes back to PreviousMessage | – | – | – |
| Submit | click [CF :724, :1228-1372] | validateWidget(Form); not while submitting; ValidateEmptyFields [CF :897-962]; valid → IsSubmitting, SendContactEmail, IsSubmitting False; success → fields cleared, "Your email has been sent." after 500 ms, Submitted, audit ContactHelpdesk / EmailHost (log, U17); invalid Form → IsSubmitting False | SendContactEmail | screen OnHandle_Submitted [S :334-376]: GetHasOrbitAccess → previous screen; else HomeFeed | IsSuccess False: "There is currently no helpdesk email associated with this event, please try to contact us later. If your inquiry is urgent please contact your local Orbit Coordinator." (Info); no access: "You don't have access to Orbit. …" after the transition (type 3) |
| navigation away | NavigationConfirmationDialog Navigation [CF :1059-1111] | helpdesk: a message, host: a subject or a message → PreventNavigation (the dialog asks) | – | – | dialog |
| any | exception | Legacy_OrbitEventsFlow handleError (raiseToFlowHandler); IsSubmitting stays True | – | – | flow handler |

### States
| State | Condition (expression) | Captured | Scenario |
|---|---|---|---|
| helpdesk | In_IsContactHelpdesk True | no | review URL 1 (Q2) |
| host | In_IsContactHelpdesk False | no | review URL 2 (Q2) |
| sending | IsSubmitting (ButtonLoading) | no | loading |
| no helpdesk e-mail | IsSuccess False | no | review URL 3 (Q2) |
| error | SendContactEmail fails → flow handler | no | error |

## Patterns used
- P-PARAMS: query inputs with the original names; navigation with the original parameter names.
- P-CALLS: SendContactEmail only on Submit.
- P-MUTATION: the e-mail is a write, kept in the mock store collection (UBTConnect.sentOrbitContactEmails).
- P-MOCKS: mocks.ts contractHandler with the shared Orbit world (orbit.ts orbitContactRecipients).
- P-FLAGS: useFlagOn('mobileOrbitAccess') for GetHasOrbitAccess.

## Feature flags
- `action:getHasOrbitAccess`: decision default-only, TST value on (user, 2026-10-14); useFlagOn('mobileOrbitAccess') with both paths of OnHandle_Submitted (no-access branch as compiled).

## Unclear points
- SendContactEmail mock and its IsSuccess False case → Q1 (decision, open; built with A).
- No inbound link: review by URL → Q2 (decision, open; built with A).
- Kept 1:1: OnClick_Submit calls AppManager_GetCachedUserInfo again without using it [CF :1259]; the helpdesk subject text
  area gets `rows` = LineCount, 0 for an empty subject [CF :399].

## Decisions to confirm
- Q1 → A (pending orchestrator answer): e-mails stored in `UBTConnect.sentOrbitContactEmails` with the recipient from
  orbit.ts orbitContactRecipients; a helpdesk e-mail for an event without a helpdesk address answers IsSuccess False.
- Q2 → A (pending orchestrator answer). Review URLs:
  - helpdesk: `/UBTConnect/EmailContact?mocksession=unlocked&In_IsContactHelpdesk=True&In_EventId=7301&In_MilestoneId=7301-1&In_TargetMemberId=0&In_Subject=Weekend%20Bible%20Conferences%20-%20Bahia%20and%20Azul%20-%20Accommodation&In_MilestoneTitle=Accommodation&In_EventName=Weekend%20Bible%20Conferences%20-%20Bahia%20and%20Azul&In_HostName=&In_HostEmail=&In_FormattedDateTime=`
  - host: `/UBTConnect/EmailContact?mocksession=unlocked&In_IsContactHelpdesk=False&In_EventId=7301&In_MilestoneId=7301-1&In_TargetMemberId=0&In_Subject=&In_MilestoneTitle=Accommodation&In_EventName=Weekend%20Bible%20Conferences%20-%20Bahia%20and%20Azul&In_HostName=Mr%20Juli%C3%A1n%20%26%20Mrs%20Fiorella%20Vitale&In_HostEmail=vitale.family%40example.com&In_FormattedDateTime=`
  - no helpdesk e-mail: the helpdesk URL with `In_EventId=7302`; sending: add `&mock=loading`; error: `&mock=error`.
- Markup not captured: built from the compiled view with the platform widgets as EmailTarget / LDM_Email_V2.

## Change requests
- none

## Parity
| State | Scenario | structure | class | attr | style | layout | Exemptions fired |
|---|---|---|---|---|---|---|---|
| – | no capture (no-capture.json) | – | – | – | – | – | – |

## Server-side notes
- SendContactEmail must pick the recipient on the server (helpdesk of the event, or a host the sender is allocated to);
  HostEmail and EventId are client input.
