# Route spec: ContactByEmailMember

Source abbreviations: `mvc.js` = `analysis/sources/pretty/UBTConnect.ContactFlow.ContactByEmailMember.mvc.js`.

## Summary
| Item | Value |
|---|---|
| Route | `/UBTConnect/ContactByEmailMember` with inputs In_AvatarURL, In_ContactName, In_ContactSurname, In_ContactLocality, In_ContactCountry, In_EmailTo, In_EntityType, In_EntityId (Long), In_LDMEventDate (Date), In_LDMEventLocality, In_AuditEventId, In_OrbitEventTitle, In_OrbitEventId (Long), In_OrbitMilestoneId, In_IsHousehold (Boolean), In_HouseholdHeaderName [pack.md; mvc.js:160-224] |
| Tier | lite |
| Captured | 2026-10-14, viewport 390×844, states: default, loading, offline [analysis/states.json] |
| Shared/shell components used | Layout_DetailPage, ContactByEmailForm (with InputCounter, TextArea_WithCounter, FixedFooter, ButtonLoading, Button, Dialog_Navigation), CustomContainer, Columns_Three, UBT_LazyImage, CustomText, IconText, Icon [pack.md block plan] |
| Screen-specific components | none (the contact card is placeholder content in `index.tsx`); `components/actions.ts` (client actions), `components/staticEntities.ts` |

## Specification
### Structure
Layout_DetailPage `$b1` (In_AlignTitleLeft True, In_IsPrimaryColor False) [mvc.js:299-303]; title
`<span data-expression>` = If(In_IsHousehold, "Contact the " + In_HouseholdHeaderName + " household", "Contact Member")
[mvc.js:319-321; dom/default.html header]. Content: shared ContactByEmailForm `$b2` (In_MessagePlaceholder "Add a
message", In_SubjectPlaceholder "Add a subject", IsLoading) [mvc.js:338-343]. Its Placeholder_ContactCard (built here)
[mvc.js:381-596; dom/default.html:43-136]: CustomContainer `$b3` (padding x XS) > Columns_Three `$b4` (ExpandMiddle):
left CustomContainer `$b5` ("ubt-object-fit-avatar-img", padding right Base) > UBT_LazyImage `$b6` (EntityType =
If(In_EntityType = "", Connect_Entity.Member, In_EntityType), EntityId = LongIntegerToText(In_EntityId), ImageSize
Base_52 / Square, ImageURL = In_AvatarURL); middle CustomText `$b7` (Base, SemiBold, In_ContactName + " " +
In_ContactSurname) and IconText `$b8` (Locality + If(both not "", ", ", "") + Country; Neutral7, XS; spacing XS) with
Icon `$b9` (home_pin, Neutral7, NonStandard_14); right empty. Bottom and CommonUI placeholders empty [mvc.js:603-604] →
`useNoCommonUi()`.

### Data
| Call | Kind | Trigger (call-sites root) | Inputs | Outputs used | Server side (MCP / cache) | Mock scenarios |
|---|---|---|---|---|---|---|
| Sync_Info_GetMain, GetUserInformation, CacheableMapEntities, CacheableHouseholds | app start | shell startup [calls.md #3-#7] | — | — | shell | shell mocks |
| SendContactMemberEmail | server action (write) | Send → form Event_SubmitForm → Handler_SubmitForm [call-sites.md; mvc.js:673-676] | In_UI_ContactByEmailForm {FirstName, ContactMember, EmailTo, Subject, Message} [mvc.js:628-636] | none | not captured (write blocked) | `real`: kept in collection `ContactByEmailMember.sentEmails` (P-MUTATION); `error`: HTTP 500; `loading`: no answer (Q1) |

No data action [mvc.js:640].

### Behaviour
| Element / lifecycle | Event | Logic | Calls | Navigates to (params) | Feedback |
|---|---|---|---|---|---|
| Screen | OnInitialize | ContactByEmailForm.FirstName = In_ContactName, ContactMember = In_ContactName, EmailTo = In_EmailTo [mvc.js:774-809] | — | — | — |
| ContactByEmailForm | Event_SubmitForm(Subject, Message) | IsLoading = True; Subject/Message into the record; send; AppManager_GetCachedUserInfo; EmailEvent {EmailTo, NameOfSender = LastName + ", " + FirstName} [mvc.js:641-682] | SendContactMemberEmail | — | — |
| ↳ In_AuditEventId = OrbitApplicationEvent.EmailHost | — | OnApplicationEvent_EmailHost(MilestoneId, EventId, EventTitle, HostName = In_ContactName, Subject, Message); flow ends (IsLoading stays True) [mvc.js:684-704] | log only (Q2) | none | none |
| ↳ otherwise | — | if In_LDMEventDate ≠ NullDate or In_LDMEventLocality ≠ "": AddAuditEventDetailEvent(EmailHousehold, 0, "", date, locality), EventJSON = JSONSerialize(EmailEvent) [mvc.js:705-720]; zOnApplicationEvent_Wrapper(EmailHousehold, EventJSON) [mvc.js:722-726] | log only (U17; Q2) | previous screen [mvc.js:731] | "Your message has been sent." type 1 after 500 ms [mvc.js:726-729, 862-867] |
| ↳ exception | — | ContactFlow handleError [mvc.js:846-848] → `raiseToFlowHandler` (Q3); IsLoading stays True | — | — | communication / exception message |
| Header back arrow, Dialog_Navigation, field rules | — | Layout_DetailPage and ContactByEmailForm (shared; README) | — | previous screen | — |

### States
| State | Condition (expression) | Captured | Scenario |
|---|---|---|---|
| default | inputs of the capture plan (avatar empty, In_EntityId 0 → no signed-URL call, person fallback) | yes | real |
| loading | app-start calls never answer; the screen has no data of its own, same markup | yes | loading |
| offline | app-start calls fail; same markup | yes | error |
| sending (IsLoading True) | after Send | no (write blocked) | real (mock answers) |

## Patterns used
- P-PARAMS: inputs read from the query string with the original names and defaults (`api.ts` readContactByEmailMemberInputs); back navigation with `useNavigateBack`.
- P-STATES: loading/offline render the same static screen (no data of its own); sending state is the form's IsLoading.
- P-DATA / P-CALLS: `api.ts` sendContactMemberEmail through `callAction`, on the submit event only, as compiled.
- P-MOCKS / P-MUTATION: `mocks.ts` contractHandler keeping each sent form in a `collection` (write never reaches a server).
- P-DIALOG: success message through `showFeedbackMessage` (shell); the leave dialog is the shared form's Dialog_Navigation.
- P-FORM: the form, its fields and validation are the shared ContactByEmailForm block.

## Feature flags
- none (pack.md "Feature flags of this route": none detected)

## Unclear points
- Submit flow not captured (TST write blocked) → Q1 (decision, open; built with A: compiled code + mock)
- OnApplicationEvent_EmailHost / AddAuditEventDetailEvent behaviour; `Connect2_OrbitMobile_MUI.controller.js` not local → Q2 (fact, open; built as log entries, EmailHost branch ends as compiled)
- ContactFlow flow handleError; `UBTConnect.ContactFlow.controller.js` not local → Q3 (fact, open; built as raiseToFlowHandler)
- Remaining parity difference is the shared form's text area rows → Q4 (decision, open; recommended A: CR-2 first)

## Decisions to confirm
- Q1 → A (pending orchestrator answer): Send built from the compiled code; SendContactMemberEmail mocked in `mocks.ts` with collection `ContactByEmailMember.sentEmails`, empty output; never the real server.
- Q2 (fact, conservative): OnApplicationEvent_EmailHost and AddAuditEventDetailEvent write a log entry only; the EmailHost branch ends without message or navigation and leaves IsLoading True, as compiled.
- Q3 (fact, conservative): errors of Send go to `raiseToFlowHandler` (App_Common behaviour).
- Q4 → A (pending orchestrator answer): foundation applies CR-ContactByEmailMember-2, then parity is re-run.
- zOnApplicationEvent_Wrapper goes to the log (decision U17, no telemetry in the mock phase); the e-mail and sender name are not logged (privacy).
- In_LDMEventDate: "" or 1900-01-01 counts as NullDate (OutSystems null date) (`api.ts`).

## Change requests
- CR-ContactByEmailMember-1: one shared mock handler for `UBTConnect.ServiceAPISendContactMemberEmail` (the contract merges the Member and OneSchool Global screen services) (open)
- CR-ContactByEmailMember-2: ContactByEmailForm message text area without `rows` (captured 2 lines, 358×60) (open)

## Parity
| State | Scenario | structure | class | attr | style | layout | Exemptions fired |
|---|---|---|---|---|---|---|---|
| default | real | 0 | 0 | 0 | 0 | 2 (+4 position, pixel 0.23%: CR-2) | CAPTURE-LINK-HREF-CURSOR-HOMEFEED |
| loading | loading | 0 | 0 | 0 | 0 | 2 (+4 position, pixel 0.23%: CR-2) | CAPTURE-LINK-HREF-CURSOR-HOMEFEED |
| offline | error | 0 | 0 | 0 | 0 | 2 (+4 position, pixel 0.23%: CR-2) | CAPTURE-LINK-HREF-CURSOR-HOMEFEED |

## Server-side notes
- SendContactMemberEmail sends mail to In_EmailTo taken from the URL: the server must resolve the recipient from the
  contact's id or check the sender may contact them (client inputs are not trusted); it must rate-limit and use the
  session user as sender.
