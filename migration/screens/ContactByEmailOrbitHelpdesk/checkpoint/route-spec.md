# Route spec: ContactByEmailOrbitHelpdesk

Sources: `S` = analysis/sources/pretty/UBTConnect.ContactFlow.ContactByEmailOrbitHelpdesk.mvc.js, `DOM` = analysis/dom/default.html.

## Summary
| Item | Value |
|---|---|
| Route | `/UBTConnect/ContactByEmailOrbitHelpdesk` with inputs In_EventId (Long Integer), In_MilestoneId (Text), In_TargetMemberId (Long Integer), In_Subject, In_MilestoneTitle, In_EventName, In_HostName, In_HostEmail, In_FormattedDateTime (Text) [S model :19-72; pack.md] |
| Tier | lite |
| Captured | 2026-10-16, viewport 390×844, states: default (via OrbitLanding → EventDetail "Contact Orbit Helpdesk") [states.json] |
| Shared/shell components used | Layout_DetailPage, CustomContainer (shared/UBTConnectLibrary); ContactByEmailForm (shared/UBTConnect); appManager_GetCachedUserInfo, useNoCommonUi, useNavigateBack, raiseToFlowHandler, showFeedbackMessage (shell) |
| Screen-specific components | none (client actions in components/actions.ts) |

## Specification
### Structure
Layout_DetailPage `$b1` In_IsPrimaryColor True, In_AlignTitleLeft True, title expression "Email" [S :225-250; DOM :8-27];
Content: ContactByEmailForm `$b2` (In_MessagePlaceholder "Add a message", In_SubjectPlaceholder "Add a subject", In_Subject,
IsLoading, In_UseDynamicTextAreaSubject True) [S :253-275]; its Placeholder_ContactCard: Container "text-align-center" ›
CustomContainer `$b3` ExtendedClasses "contact-by-email__header" (Neutral2 background, padding vertical XS, margin bottom
Base) › Container › Image "contact-by-email__header__img" Orbit_Logo, then CustomContainer `$b4` (padding top XS, Neutral10,
Base, Bold) › "Orbit Helpdesk" [S :296-405; DOM :45-60]. Placeholder_CommonUI_Inside_Layout and Bottom empty [S :424-425].

### Data
| Call | Kind | Trigger (call-sites root) | Inputs | Outputs used | Server side (MCP / cache) | Mock scenarios |
|---|---|---|---|---|---|---|
| UBTConnect `ActionSendContactEmail` (Connect2_OrbitMobile_BL SendContactEmail) | server action, write | form Event_SubmitForm → Handler_SubmitForm [call-sites.md; S :517-600] | IsContactHelpdesk True, EventId, MilestoneId, TargetMemberId, Subject, UserSubject "", Message, EmailInfo (EventName, SenderFullName, HostName, HostEmail, MilestoneName, FormattedDateTime) [S :448-460, :548-560] | none (IsSuccess not read) | not in MCP; must check the sender may contact this event's helpdesk | real (stored in `UBTConnect.sentOrbitContactEmails`, Q2), loading, error |

### Behaviour
| Element / lifecycle | Event | Logic | Calls | Navigates to (params) | Feedback |
|---|---|---|---|---|---|
| screen | OnInitialize [S :483-515] | ContactByEmailForm FirstName/ContactMember/EmailTo "" and Subject = In_Subject (only read by the handler, which overwrites Subject) | – | – | – |
| form | Event_SubmitForm(Subject, Message) [S :517-600] | IsLoading True; AppManager_GetCachedUserInfo; SendContactEmail; OnApplicationEvent_ContactHelpdesk (log, event id only); JS ScheduleFeedbackMessageAfterTransition | SendContactEmail | previous screen (navigateBack) [S :584] | "Your message has been sent." after 500 ms, success [S :671-677] |
| any | exception | ContactFlow handleError (raiseToFlowHandler); IsLoading stays True | – | – | flow handler |

### States
| State | Condition (expression) | Captured | Scenario |
|---|---|---|---|
| default | always (no data action) | yes | real |
| sending | IsLoading True (button loading) | no | loading (after Send) |

## Patterns used
- P-PARAMS: query inputs with the original names (api.ts readInputs); navigateBack after send.
- P-FORM: the shared ContactByEmailForm (controlled inputs, validation, leave guard) as ContactByEmailLDMCoordinator.
- P-CALLS / P-DATA: api.ts `callAction('UBTConnect', 'ActionSendContactEmail')` on submit only.
- P-MUTATION / P-MOCKS: mocks.ts stores the e-mail in a `collection` (write never sent).
- P-DIALOG: success feedback message after the transition.
- P-STATES: no load state; loading only on the button.

## Feature flags
- none

## Unclear points
- Direct URL for parity of the click-reached state → Q1 (decision, open; built with the recommendation)
- Mock of the SendContactEmail write → Q2 (decision, open; built with A)

## Decisions to confirm
- cloneQuery: `mocksession=unlocked&In_MilestoneId=&In_EventId=7301&In_Subject=Weekend%20Bible%20Conferences%20-%20Bahia%20and%20Azul%20-%20Bahia%20Blanca%20Main%20Hall%20-%20Fri%2023%20Oct%202026%20-%20Sun%2025%20Oct%202026&In_EventName=Weekend%20Bible%20Conferences%20-%20Bahia%20and%20Azul` (Q1)
- SendContactEmail mocked into the in-memory collection `UBTConnect.sentOrbitContactEmails` with recipient orbit.ts ORBIT_HELPDESK_EMAIL (orbit.helpdesk@example.com), IsSuccess True; one handler for both Orbit contact screens (Q2)
- OnApplicationEvent_ContactHelpdesk goes to the log with the event id only (decision U17)
- EmailInfo.SenderEmail and TargetHelpdeskEmail sent "" (the compiled record leaves them unset, S :548-556)
- Proposed exemptions (proposed-exemptions.json): body orbit-theme left by the previous Orbit screen, unmasked subject replica (::after), subject pixels

## Change requests
- none

## Parity
| State | Scenario | structure | class | attr | style | layout | Exemptions fired |
|---|---|---|---|---|---|---|---|
| default | real (Q1 cloneQuery) | 0 | 0 | 0 | 0 | 0 | proposed: VIA-ORBIT-THEME-BODY, CAPTURE-MASKED-SUBJECT-REPLICA, pixels (diagnostic run) |

## Server-side notes
- SendContactEmail must take the helpdesk recipient and the sender from the session, not from the client (EmailInfo is client data).
