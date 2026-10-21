# Route spec: ContactByEmailLDMCoordinator

Evidence: `S` = `migration/runtime-sources/UBTConnect.ContactFlow.ContactByEmailLDMCoordinator.mvc.js` (model :1-126,
view :127-454, controller :455-674), a TST copy fetched read-only by F9 (`migration/knowledge/runtime-sources.md`, row
"More files (2026-10-16, foundation F9 …)").

## Summary
| Item | Value |
|---|---|
| Route | `/UBTConnect/ContactByEmailLDMCoordinator` with inputs `In_AvatarURL`, `In_ContactName`, `In_EmailTo`, `In_Subject` (Text), `In_EventDate` (Date), `In_EventLocality` (Text) [S model :21-56, setInputs :97-123] |
| Tier | lite |
| Captured | not captured: user decision no-capture 2026-10-16 (`no-capture.json`); built from the compiled code, reviewed by hand |
| Shared/shell components used | `shared/UBTConnectLibrary/Layout_DetailPage`, `shared/UBTConnect/ContactByEmailForm`, `shared/UBTConnectLibrary/CustomContainer`, `shell/cachedUserInfo`, `shell/navigation` |
| Screen-specific components | `components/actions.ts` (telemetry and the feedback JS node, local copies) |

## Specification
### Structure
- `Layout_DetailPage` ($b1, In_IsPrimaryColor True, In_AlignTitleLeft True) has the title expression "Email"
  [S :195-209, :444-447].
  - The right, header content, bottom and CommonUI parts are empty [S :195-209, :444-447].
  - There is no CommonUI, so the screen uses `useNoCommonUi()` (shell guide).
- Content: `ContactByEmailForm` ($b2) [S :211-232].
  - Its inputs are In_MessagePlaceholder "Add a message", In_SubjectPlaceholder "Add a subject", In_Subject and
    IsLoading.
  - Its Placeholder_ContactCard holds a container with the class `text-align-center`.
  - That container holds three `CustomContainer` blocks, described next.
  - `CustomContainer` ($b3) [S :236-268]: ExtendedClasses `contact-by-email__header`, background Neutral2, padding
    vertical XS, margin bottom Base.
    - It holds the false branch of `If(False)`: a container with the external image
      `contact-by-email__header__img` and In_AvatarURL [S :317-340].
  - `CustomContainer` ($b4): padding top XS, text Neutral10 / Base / Bold. It holds In_ContactName [S :341-375].
  - `CustomContainer` ($b5): padding top XS, Neutral7 / XS. It holds "LDM Event Coordinator" [S :376-410].

### Data
| Call | Kind | Trigger (call-sites root) | Inputs | Outputs used | Server side (MCP / cache) | Mock scenarios |
|---|---|---|---|---|---|---|
| `ServiceAPISendContactLDMCoordinatorEmail` | service action (write) | ContactByEmailForm Event_SubmitForm → Handler_SubmitForm [S :499-560] | In_UI_ContactByEmailForm {FirstName, ContactMember, EmailTo, Subject, Message} | none | not captured (contract-report.md:111, fictional) | P-MUTATION collection (Q1), error HTTP 500, loading |

No data action (`dataFetchActionNames = []`, S :478).

### Behaviour
| Element / lifecycle | Event | Logic | Calls | Navigates to (params) | Feedback |
|---|---|---|---|---|---|
| screen | OnInitialize [S :480-497] | ContactByEmailForm.FirstName = ContactMember = In_ContactName, EmailTo = In_EmailTo, Subject = In_Subject | – | – | – |
| ContactByEmailForm | Event_SubmitForm(Subject, Message) [S :499-560] (the form ran AllowUpcomingNavigation) | IsLoading True; Subject, Message into the form record; SendContactLDMCoordinatorEmail; AppManager_GetCachedUserInfo; EmailEvent {EmailTo, NameOfSender = LastName + ", " + FirstName}; AddAuditEventDetailEvent(LDMApplicationEvent.MyTimelineCoordinatorEmailed, 0, "", In_EventDate, In_EventLocality); zOnApplicationEvent_Wrapper(MyTimelineCoordinatorEmailed, JSON); ScheduleFeedbackMessageAfterTransition | SendContactLDMCoordinatorEmail | previous screen | "Your message has been sent." (success, after 500 ms, JS node :667-673) |
| ContactByEmailForm | leave with a changed subject or a typed message | the shared block's Dialog_Navigation (README) | – | – | – |

Exceptions go to the ContactFlow flow handler [S :650-652] (`raiseToFlowHandler`); IsLoading stays True.

### States
| State | Condition (expression) | Captured | Scenario |
|---|---|---|---|
| form | always | no | real |
| sending | IsLoading | no | loading |

## Patterns used
- P-PARAMS: the six screen inputs from the query string with the original names (`api.ts readInputs`).
- P-DATA: `api.ts` adapter with `callAction` and the contract types.
- P-MOCKS: `mocks.ts` contract handler.
- P-MUTATION: SendContactLDMCoordinatorEmail stores the form in a `collection` of `src/mocks/store.ts`.
- P-CALLS: the only call is on Event_SubmitForm.
- P-FORM: the shared ContactByEmailForm.
- P-BACK: previous-screen navigation after the send (`useNavigateBack`).

## Feature flags
- none

## Unclear points
- The write's mock semantics (no TST call recorded) → Q1 (decision, answered A; built with A) [questions.md Q1]

## Decisions to confirm
- Q1 → A (answered A, user 2026-10-16) [questions.md Q1]:
  - The mock of SendContactLDMCoordinatorEmail uses the collection `UBTConnect.sentContactLDMCoordinatorEmails`.
  - The screen's data comes from its inputs.
  - LDM_EventDetail_V2 passes the coordinator of the shared LDM world. The avatar is the LDM logo.
- Telemetry (AddAuditEventDetailEvent, zOnApplicationEvent_Wrapper) goes to the log without personal fields (decision
  U17, as the other LDM / ContactByEmail routes); local copies in `components/actions.ts` until CR-LDM_EventDetail_V2-1.
- An empty In_AvatarURL renders the image without a source (the If(False) branch always shows it).

## Change requests
- none

## Parity
| State | Scenario | structure | class | attr | style | layout | Exemptions fired |
|---|---|---|---|---|---|---|---|
| (none) | no capture: the user reviews by hand | – | – | – | – | – | – |

## Server-side notes
- SendContactLDMCoordinatorEmail receives EmailTo from the client. The server must send only to the coordinator of an
  event of the session user, never to an arbitrary address. The server must take the sender from the session.
