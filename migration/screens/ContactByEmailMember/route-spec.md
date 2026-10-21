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
- Layout_DetailPage `$b1` (In_AlignTitleLeft True, In_IsPrimaryColor False) [mvc.js:299-303].
- The title is a `<span data-expression>` with the value If(In_IsHousehold, "Contact the " + In_HouseholdHeaderName + " household", "Contact Member") [mvc.js:319-321; dom/default.html header].
- Content: shared ContactByEmailForm `$b2` (In_MessagePlaceholder "Add a message", In_SubjectPlaceholder "Add a subject", IsLoading) [mvc.js:338-343].
- The screen builds the Placeholder_ContactCard of the form [mvc.js:381-596; dom/default.html:43-136]. It contains:
  - CustomContainer `$b3` (padding x XS) > Columns_Three `$b4` (ExpandMiddle).
  - Left: CustomContainer `$b5` ("ubt-object-fit-avatar-img", padding right Base) > UBT_LazyImage `$b6` (EntityType = If(In_EntityType = "", Connect_Entity.Member, In_EntityType), EntityId = LongIntegerToText(In_EntityId), ImageSize Base_52 / Square, ImageURL = In_AvatarURL).
  - Middle: CustomText `$b7` (Base, SemiBold, In_ContactName + " " + In_ContactSurname) and IconText `$b8` (Locality + If(both not "", ", ", "") + Country; Neutral7, XS; spacing XS) with Icon `$b9` (home_pin, Neutral7, NonStandard_14).
  - Right: empty.
- The Bottom and CommonUI placeholders are empty [mvc.js:603-604]. The React app uses `useNoCommonUi()`.

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
- P-STATES: the loading/offline states render the same static screen (it has no data of its own). The sending state is the IsLoading value of the form.
- P-DATA / P-CALLS: `api.ts` sendContactMemberEmail through `callAction`, on the submit event only, as compiled.
- P-MOCKS / P-MUTATION: the contractHandler in `mocks.ts` keeps each sent form in a `collection`. The write never reaches a server.
- P-DIALOG: success message through `showFeedbackMessage` (shell); the leave dialog is the shared form's Dialog_Navigation.
- P-FORM: the form, its fields and validation are the shared ContactByEmailForm block.

## Feature flags
- none (pack.md "Feature flags of this route": none detected)

## Unclear points
- Submit flow not captured (TST write blocked) → Q1 (decision, answered A by the user, 2026-10-15; built from the compiled code + mock) [questions.md Q1]
- OnApplicationEvent_EmailHost / AddAuditEventDetailEvent behaviour; `Connect2_OrbitMobile_MUI.controller.js` not local → Q2 (fact, answered by code, 2026-10-15; built as log entries, EmailHost branch ends as compiled; the fetched controller matches the build) [questions.md Q2]
- ContactFlow flow handleError; `UBTConnect.ContactFlow.controller.js` not local → Q3 (fact, answered by code, 2026-10-15; built as raiseToFlowHandler; the fetched controller matches the build) [questions.md Q3]
- Remaining parity difference is the shared form's text area rows → Q4 (decision, answered 2026-10-15: not the recommended A. CR-ContactByEmailMember-2 is rejected. The difference is a capture artifact, exempted by CAPTURE-TEXTAREA-ROWS-CONTACTBYEMAIL*) [questions.md Q4]

## Decisions to confirm
- Q1 → A (answered by the user, 2026-10-15) [questions.md Q1]: Send built from the compiled code; SendContactMemberEmail mocked in `mocks.ts` with collection `ContactByEmailMember.sentEmails`, empty output; never the real server.
- Q2 (fact, answered by code, 2026-10-15; the build matches) [questions.md Q2]: OnApplicationEvent_EmailHost and AddAuditEventDetailEvent write a log entry only; the EmailHost branch ends without message or navigation and leaves IsLoading True, as compiled.
- Q3 (fact, answered by code, 2026-10-15; the build matches) [questions.md Q3]: errors of Send go to `raiseToFlowHandler` (App_Common behaviour).
- Q4 (answered 2026-10-15, not the recommended A) [questions.md Q4]: CR-ContactByEmailMember-2 is rejected. The shared form keeps `rows`. The remaining difference is a capture artifact, exempted by CAPTURE-TEXTAREA-ROWS-CONTACTBYEMAIL*.
- zOnApplicationEvent_Wrapper goes to the log (decision U17, no telemetry in the mock phase); the e-mail and sender name are not logged (privacy).
- In_LDMEventDate: "" or 1900-01-01 counts as NullDate (OutSystems null date) (`api.ts`).

## Change requests
- CR-ContactByEmailMember-1: one shared mock handler for `UBTConnect.ServiceAPISendContactMemberEmail` (the contract merges the Member and OneSchool Global screen services) (applied, foundation F7b, 2026-10-15) [CR-ContactByEmailMember-1.md]
- CR-ContactByEmailMember-2: ContactByEmailForm message text area without `rows` (captured 2 lines, 358×60) (rejected, orchestrator, 2026-10-15) [CR-ContactByEmailMember-2.md]

## Parity
| State | Scenario | structure | class | attr | style | layout | Exemptions fired |
|---|---|---|---|---|---|---|---|
| default | real | 0 | 0 | 0 | 0 | 0 (2 layout + 4 position differences and pixel 0.23% are exempted: capture artifact of the text area rows [questions.md Q4]) | CAPTURE-LINK-HREF-CURSOR-HOMEFEED, CAPTURE-TEXTAREA-ROWS-CONTACTBYEMAIL* |
| loading | loading | 0 | 0 | 0 | 0 | 0 (2 layout + 4 position differences and pixel 0.23% are exempted: capture artifact of the text area rows [questions.md Q4]) | CAPTURE-LINK-HREF-CURSOR-HOMEFEED, CAPTURE-TEXTAREA-ROWS-CONTACTBYEMAIL* |
| offline | error | 0 | 0 | 0 | 0 | 0 (2 layout + 4 position differences and pixel 0.23% are exempted: capture artifact of the text area rows [questions.md Q4]) | CAPTURE-LINK-HREF-CURSOR-HOMEFEED, CAPTURE-TEXTAREA-ROWS-CONTACTBYEMAIL* |

## Server-side notes
- SendContactMemberEmail sends mail to In_EmailTo, which comes from the URL. The server must not trust client inputs.
- The server must resolve the recipient from the id of the contact, or check that the sender can contact the recipient.
- The server must rate-limit the call and use the session user as the sender.
