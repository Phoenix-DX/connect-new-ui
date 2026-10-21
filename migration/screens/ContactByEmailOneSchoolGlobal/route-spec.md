# Route spec: ContactByEmailOneSchoolGlobal

Sources: `p:` = `analysis/sources/pretty/UBTConnect.ContactFlow.ContactByEmailOneSchoolGlobal.mvc.js`; `dom:` =
`analysis/dom/default.html`.

## Summary
| Item | Value |
|---|---|
| Route | `/UBTConnect/ContactByEmailOneSchoolGlobal` with inputs `In_EmailTo: Text`, `In_ContactName: Text` [p:15-27, 73-80] |
| Tier | lite |
| Captured | 2026-10-15, viewport 390×844, states: default, loading, offline [states.json] |
| Shared/shell components used | `Layout_DetailPage` (`src/shared/UBTConnectLibrary/Layout_DetailPage`), `ContactByEmailForm` (`src/shared/UBTConnect/ContactByEmailForm`, with DynamicTextArea, FixedFooter, ButtonLoading, Dialog_Navigation), `CustomContainer`, `useNoCommonUi`, `useNavigateBack`, `showFeedbackMessage`, `raiseToFlowHandler`, `log` |
| Screen-specific components | the contact card in `Placeholder_ContactCard` (index.tsx), `components/staticEntities.ts` (UBT_FontWeight Bold) |

## Specification
### Structure
- Layout_DetailPage `$b1`, In_IsPrimaryColor True, In_AlignTitleLeft True, title "Email", right / header content /
  bottom / CommonUI placeholders empty [p:155-185, 396-397; dom:1-36]. Empty CommonUI → `useNoCommonUi()` (shell guide).
- Content: ContactByEmailForm `$b2` with In_MessagePlaceholder "Add a message", In_Subject "", In_SubjectPlaceholder
  "Add a subject", IsLoading = screen IsLoading, In_UseDynamicTextAreaSubject True [p:187-196].
- Placeholder_ContactCard [p:226-392; dom:44-67]: Container `text-align-center` > CustomContainer `$b3`.
  - `$b3` has ExtendedClasses `contact-by-email__header`, Background Neutral2, Padding vertical ExtraSmall, Margin bottom Base.
  - `$b3` contains:
    - Container > Image External `contact-by-email__header__img` `img/UBTConnectLibrary.OneSchoolGlobal.svg`.
    - CustomContainer `$b4` (Padding top ExtraSmall, Text Neutral10 / Base / Bold) with Expression In_ContactName.
    - CustomContainer `$b5` (Padding top ExtraSmall, Text Neutral7 / ExtraSmall) with Expression `" "` [p:381].
- UBT_FontWeight.Bold is `bold` (TST `UBTConnect.uBT_FontWeight` in static-entities-tst.json; captured `font-bold`,
  dom:53). The shared static entities have no Bold, so the screen keeps it in `components/staticEntities.ts`.

### Data
| Call | Kind | Trigger (call-sites root) | Inputs | Outputs used | Server side (MCP / cache) | Mock scenarios |
|---|---|---|---|---|---|---|
| `ServiceAPISendContactMemberEmail` (screen service `ContactFlow/ContactByEmailOneSchoolGlobal`) | server action, write | Send button → ContactByEmailForm Event_SubmitForm → Handler_SubmitForm [call-sites.md] | `In_UI_ContactByEmailForm` {ContactMember, EmailTo, FirstName, Subject, Message} [p:426-436] | none (empty output) | not asked; sends an e-mail to EmailTo | real (store collection, Q1), error (HTTP 500) |
| `ActionSync_Info_GetMain`, `ActionGetUserInformation`, `ServiceAPIFetchData_CacheableMapEntities`, `ServiceAPIFetchData_CacheableHouseholds` | app start | shell (onApplicationReady, caches) [calls.md #3-7] | shell | shell | shell | shell |

### Behaviour
| Element / lifecycle | Event | Logic | Calls | Navigates to (params) | Feedback |
|---|---|---|---|---|---|
| Screen | OnInitialize | ContactByEmailForm.ContactMember = In_ContactName, .EmailTo = In_EmailTo, .FirstName = In_ContactName [p:452-461] | none | none | none |
| Form "Send" | Event_SubmitForm(Subject, Message) (form already ran AllowUpcomingNavigation) | IsLoading = True; record .Subject/.Message = event values; SendContactMemberEmail(record); zOnApplicationEvent_Wrapper(ApplicationEvents_Directory.EmailHousehold, "") → AzureInsights custom event (Connect2_LegacyShared.controller.js:7565-7590) = telemetry, logged with `log.info` (U17); ScheduleFeedbackMessageAfterTransition JS: after 500 ms `showFeedbackMessage("Your message has been sent.", 1)` [p:599-604]; navigate back (PreviousScreen) [p:484-512] | SendContactMemberEmail | previous screen | success message after 500 ms |
| Form "Send" | send fails | no handler in Handler_SubmitForm: IsLoading stays True, error to the ContactFlow flow handler [p:520-525, 586-588] → `raiseToFlowHandler` (Q2) | — | none | exception message |
| Back arrow / browser back | — | Layout_DetailPage back; ContactByEmailForm Dialog_Navigation while dirty (shared block) | none | previous screen | — |

### States
| State | Condition (expression) | Captured | Scenario |
|---|---|---|---|
| default | IsLoading False | yes | real |
| loading | app-start calls pending; the screen has no data of its own, same markup as default | yes | loading |
| offline | app-start calls fail; same markup as default | yes | error |
| sending | IsLoading True (fields disabled, ButtonLoading spinner) | no (shared block, compiled view) | real |

## Patterns used
- P-PARAMS: In_EmailTo / In_ContactName read with `useSearchParams`; back with `useNavigateBack`.
- P-STATES: no screen-level loading/empty state; the `sending` state comes from the shared form.
- P-DATA / P-CALLS: `api.ts` `sendContactMemberEmail` through `callAction('UBTConnect', 'ServiceAPISendContactMemberEmail')`,
  only on the submit event, no load-phase call.
- P-MOCKS / P-MUTATION: `mocks.ts` keeps sent e-mails in the `ContactByEmailOneSchoolGlobal.sentEmails` collection (Q1).
- P-FORM: the form is the shared ContactByEmailForm (controlled inputs); submit goes through `api.ts`.
- P-DIALOG: success feedback with the shell's `showFeedbackMessage`; Dialog_Navigation inside the shared form.

## Feature flags
- none (`pack.md`: no feature flag detected)

## Unclear points
- Mock answer of the never-recorded write SendContactMemberEmail → Q1 (decision; answered A by the user, auto-accepted 2026-10-15: store collection + `{}`) [questions.md Q1]
- Behaviour when SendContactMemberEmail fails (the ContactFlow flow handler source `UBTConnect.ContactFlow.controller.js` is not local) → Q2 (decision; answered A by the user, auto-accepted 2026-10-15: IsLoading stays True, `raiseToFlowHandler`; the flow controller was fetched 2026-10-15 and its handleError goes to App_Common handleError) [questions.md Q2]

## Decisions to confirm
- Q1 → A (answered by the user, auto-accepted 2026-10-15) [questions.md Q1]: sent e-mails go to an in-memory collection; answer `{}`; never a real server.
- Q2 → A (answered by the user, auto-accepted 2026-10-15) [questions.md Q2]: on a send error IsLoading stays True and the error goes to `raiseToFlowHandler`.
- The React app writes the application event EmailHousehold to `log.info` instead of Azure Insights (app-shell.spec U17).
- `In_ContactName` of the capture ("Test School") is the fictional value of the capture plan (capture-plan note "Q3 a").
- Not captured: the sending state and Dialog_Navigation (shared block, compiled view only). `ContactByEmailOneSchoolGlobal.test.tsx` covers the sending, success and error paths.
- Capture-artifact exemptions: text-area `rows` dropped by the capture (see Parity); the same hits ContactByEmailMember's message text area. The route agent proposed them as CAPTURE-TEXTAREA-ROWS-CBEOSG (+ -GRID, -PSEUDO, -PIXEL). They are now in `migration/parity-exemptions.json` as CAPTURE-TEXTAREA-ROWS-CONTACTBYEMAIL (+ -GRID, -PSEUDO, -PIXEL), for both ContactByEmail routes.

## Change requests
- CR-ContactByEmailOneSchoolGlobal-1 (applied by foundation F7b, 2026-10-15; was low priority) [CR-ContactByEmailOneSchoolGlobal-1.md]:
  - ContactByEmailMember also uses the SendContactMemberEmail mock.
  - Move one handler to shared mocks. The two route handlers answer the same `{}`.
  - Add `UBT_FontWeight.Bold` to the shared static entities.

## Parity
Two runs of `route.py parity` (2026-10-15) gave identical results:
- Every state has structure 0, class 0, attr 0, text 0 and call 0.
- Every state has the same 14 differences (style 1, pseudo 1, layout 7, position 4, pixel 1: 0.91 %). All come from the text-area `rows` that the capture drops (below).
- Exemption already applied: CAPTURE-LINK-HREF-CURSOR-HOMEFEED ×1.

Latest run (2026-10-17) with the merged exemptions [parity/default.json, loading.json, offline.json]: all difference counts are 0 in every state. Exemptions fired: CAPTURE-LINK-HREF-CURSOR-HOMEFEED ×1, CAPTURE-TEXTAREA-ROWS-CONTACTBYEMAIL ×11, -GRID ×1, -PSEUDO ×1, -PIXEL ×1.


| State | Scenario | structure | class | attr | style | layout | Exemptions fired |
|---|---|---|---|---|---|---|---|
| default | real | 0 | 0 | 0 | 1 (grid-template-rows) + pseudo 1 | 7 + position 4, pixel 0.91 % | CAPTURE-LINK-HREF-CURSOR-HOMEFEED; proposed CAPTURE-TEXTAREA-ROWS-CBEOSG (+ -GRID, -PSEUDO, -PIXEL), now CAPTURE-TEXTAREA-ROWS-CONTACTBYEMAIL (+ -GRID, -PSEUDO, -PIXEL) |
| loading | loading | 0 | 0 | 0 | same as default | same as default | same as default |
| offline | error | 0 | 0 | 0 | same as default | same as default | same as default |

Cause: the capture keeps only KEEP_ATTR attributes (`.claude/skills/outsystems-screen-spec/scripts/capture.js:285`). This drops `rows` and `maxlength`. The replayed reference shows both text areas at the default 2 rows (60 px). TST renders textLines 1 (subject) and 3 (message) (`UBTConnect.ContactFlow.ContactByEmailForm.mvc.js:400, :556`; `OutSystemsReactWidgets.js` TextArea `rows:this.props.textLines`), as the React app does (39 px / 81 px).

The exemptions were proposed in `proposed-exemptions.json` (capture artifact). A dry run with them merged leaves only the pixel line. The rule for that line matches the report path of `route.py parity`.

## Server-side notes
- SendContactMemberEmail must check on the server that the sender may e-mail EmailTo. The client sends any address that it got in the URL.
- SendContactMemberEmail must rate-limit the e-mails.
- The server must enforce the subject length (≤ 100) and the message length (≤ 1000).
