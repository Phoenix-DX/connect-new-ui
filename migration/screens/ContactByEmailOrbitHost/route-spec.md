# Route spec: ContactByEmailOrbitHost

Sources: `S` = analysis/sources/UBTConnect.ContactFlow.ContactByEmailOrbitHost.mvc.js (extracted unchanged, CRLF → LF, from
capture/survey-UBTConnect.json `sources`). No capture (no-capture.json, user 2026-10-16): built from the compiled code.

## Summary
| Item | Value |
|---|---|
| Route | `/UBTConnect/ContactByEmailOrbitHost` with inputs In_Subject, In_MilestoneTitle, In_EventName, In_HostName, In_HostEmail, In_FormattedDateTime, In_ContactLocality, In_ContactCountry, In_AvatarURL, In_EntityType (Text), In_EntityId (Long Integer), In_Surname (Text) [S model :18-89] |
| Tier | lite |
| Captured | not captured (no-capture.json: not reachable read-only on TST) |
| Shared/shell components used | Layout_DetailPage, CustomContainer, Columns_Three, CustomText, IconText, Icon (shared/UBTConnectLibrary); ContactByEmailForm (shared/UBTConnect); UBT_LazyImage (shared/UBTConnect_Utils); useNoCommonUi, useNavigateBack, raiseToFlowHandler, showFeedbackMessage (shell) |
| Screen-specific components | none |

## Specification
### Structure
Layout_DetailPage `$b1` has In_IsPrimaryColor False, In_AlignTitleLeft True, and the title "Contact the " + In_Surname + " household" [S :252-275].

Content: ContactByEmailForm `$b2` [S :278-300].
- In_SubjectPlaceholder "Add a subject", In_UseDynamicTextAreaSubject True, In_MessagePlaceholder "Add a message", IsLoading.
- In_Subject is not bound, so the subject is empty.

Placeholder_ContactCard [S :322-550]:
- CustomContainer `$b3` (padding horizontal XS) › Columns_Three `$b4` (ColumnBehaviour ExpandMiddle).
- Left: CustomContainer `$b5` with ExtendedClasses "ubt-object-fit-avatar-img" (padding right Base) › UBT_LazyImage `$b6`.
  UBT_LazyImage has EntityType = In_EntityType (Member when the text is null), EntityId = LongIntegerToText(In_EntityId),
  ImageURL In_AvatarURL, Height Base_52, Width Square.
- Middle: CustomText `$b7` (In_HostName, Base / SemiBold) and IconText `$b8`.
  IconText has spacing XS, Neutral7 / XS, and the text In_ContactLocality + ", " (when both have a value) + In_ContactCountry.
  Its icon is Icon `$b9` home_pin, NonStandard_14, Neutral7.
- Right: empty.

Bottom and Placeholder_CommonUI_Inside_Layout are empty [S :552-553].
The blocks and options are the same as in the card of ContactByEmailMember (app/src/screens/ContactByEmailMember/index.tsx).

### Data
| Call | Kind | Trigger (call-sites root) | Inputs | Outputs used | Server side (MCP / cache) | Mock scenarios |
|---|---|---|---|---|---|---|
| UBTConnect `ActionSendContactEmail` (Connect2_OrbitMobile_BL SendContactEmail) | server action, write | form Event_SubmitForm → Handler_SubmitForm [S :610-690] | IsContactHelpdesk False, EventId 0, MilestoneId "", TargetMemberId IntegerToLongInteger(NullIdentifier()) = 0, Subject = In_Subject, UserSubject = form subject, Message, EmailInfo (EventName, SenderFullName "", SenderEmail "", HostName, HostEmail, MilestoneName = In_MilestoneTitle, FormattedDateTime) [S :578-600, :625-650] | none (IsSuccess not read) | not in MCP; must take the sender from the session and check the host relation | real (stored in `UBTConnect.sentOrbitContactEmails`, Q1), loading, error |

### Behaviour
| Element / lifecycle | Event | Logic | Calls | Navigates to (params) | Feedback |
|---|---|---|---|---|---|
| screen | OnInitialize [S :691-705] | ContactByEmailForm.EmailTo = In_HostEmail (record not sent) | – | – | – |
| form | Event_SubmitForm(Subject, Message) [S :610-690] | IsLoading True; SendContactEmail; JS ScheduleFeedbackMessageAfterTransition; no audit event | SendContactEmail | previous screen (navigateBack) | "Your message has been sent." after 500 ms, success [S :772-779] |
| any | exception | ContactFlow handleError (raiseToFlowHandler); IsLoading stays True | – | – | flow handler |
| entry | – | opened only by MilestoneDetail NavigateTo_ContactHostByEmail (meal blocks, NotCaptured there) | – | – | – |

### States
| State | Condition (expression) | Captured | Scenario |
|---|---|---|---|
| default | always (no data action) | no | real (review URL Q2) |
| sending | IsLoading True | no | loading |

## Patterns used
- P-PARAMS: query inputs with the original names (api.ts readInputs); navigateBack after send.
- P-FORM: the shared ContactByEmailForm, as ContactByEmailMember / ContactByEmailLDMCoordinator.
- P-CALLS / P-DATA: api.ts `callAction('UBTConnect', 'ActionSendContactEmail')` on submit only.
- P-MUTATION / P-MOCKS: mocks.ts stores the e-mail in a `collection` (write never sent).
- P-DIALOG: success feedback message after the transition.
- P-STATES: no load state; loading only on the button.

## Feature flags
- none

## Unclear points
- Mock of the SendContactEmail write → Q1 (decision, answered A) [questions.md Q1]
- No built entry screen; review URL with the Orbit world's host → Q2 (decision, answered A) [questions.md Q2]

## Decisions to confirm
- SendContactEmail mocked into `UBTConnect.sentOrbitContactEmails` with recipient EmailInfo.HostEmail, IsSuccess True;
  same handler as ContactByEmailOrbitHelpdesk (Q1)
- Review URL (Q2): `/UBTConnect/ContactByEmailOrbitHost?mocksession=unlocked&In_HostName=Mr%20Juli%C3%A1n%20%26%20Mrs%20Fiorella%20Vitale&In_EntityType=Member&In_Subject=Accommodation&In_ContactCountry=Argentina&In_FormattedDateTime=&In_ContactLocality=Bahia%20Blanca&In_HostEmail=vitale.family%40example.com&In_Surname=Vitale&In_AvatarURL=&In_EntityId=990002&In_MilestoneTitle=Accommodation&In_EventName=Weekend%20Bible%20Conferences%20-%20Bahia%20and%20Azul`
  (host of orbit.ts event 7301, HostEmail on example.com)
- Markup not captured: built from the compiled view with the ContactByEmailMember card (same blocks and options)

## Change requests
- none

## Parity
| State | Scenario | structure | class | attr | style | layout | Exemptions fired |
|---|---|---|---|---|---|---|---|
| – | no capture (no-capture.json) | – | – | – | – | – | – |

## Server-side notes
- SendContactEmail must resolve the sender from the session and accept HostEmail only for a host of the sender's milestone (EmailInfo is client data).
