# Recorded decisions and facts that name the elements of UI flow ContactFlow

Sources a `differs` row may cite (outside `migration/screens/`). Lines are `file:line: text` (word match of the
screen or block name; the text is cut at 300 characters). A code comment is not a decision.

## board

- `migration/board.md:55` (ContactByEmailContacts): | ContactByEmailContacts | `/UBTConnect/ContactByEmailContacts` |  | 29 |  | skip | V7 · skip:dead · only link in Locality_LocalityContacts, not embedded on TST; revisit if the block appears (user, 2026-10-14) | - |  |
- `migration/board.md:56` (ContactByEmailLDMCoordinator): | ContactByEmailLDMCoordinator | `/UBTConnect/ContactByEmailLDMCoordinator` |  | 25 | lite | build | LDM family (UI in the Orbit module Connect2_OrbitMobile_MUI); build with Orbit (user, 2026-10-16) | built | route-ldm-forms |
- `migration/board.md:37` (ContactByEmailMember): | ContactByEmailMember | `/UBTConnect/ContactByEmailMember` | 5 | 31 | lite | build | V4c · menu / contact, reachable on TST; writes mocked (user, 2026-10-14) | built | route-contactbyemailmember |
- `migration/board.md:38` (ContactByEmailOneSchoolGlobal): | ContactByEmailOneSchoolGlobal | `/UBTConnect/ContactByEmailOneSchoolGlobal` | 5 | 25 | lite | build | V4c · menu / contact, reachable on TST; writes mocked (user, 2026-10-14) | built | route-contactbyemailoneschoolglobal |
- `migration/board.md:57` (ContactByEmailOrbitHelpdesk): | ContactByEmailOrbitHelpdesk | `/UBTConnect/ContactByEmailOrbitHelpdesk` |  | 25 | lite | build | Orbit is not an embedded/separate app: its screens are UBTConnect screens (same SPA) using Connect2_OrbitMobile_MUI blocks; build (user, 2026-10-16) | built | route-orbit-lite-1 |
- `migration/board.md:58` (ContactByEmailOrbitHost): | ContactByEmailOrbitHost | `/UBTConnect/ContactByEmailOrbitHost` |  | 31 | lite | build | Orbit is not an embedded/separate app: its screens are UBTConnect screens (same SPA) using Connect2_OrbitMobile_MUI blocks; build (user, 2026-10-16) | built | route-orbit-lite-1 |

## change requests

- `migration/change-requests/CR-LDM_Email_V2-1.md:7` (ContactByEmailLDMCoordinator): (ContactByEmailLDMCoordinator, EmailTarget, the other F9 no-capture screens)
- `migration/change-requests/CR-LDM_Email_V2-1.md:33` (ContactByEmailLDMCoordinator): - consistency_check.py: for a no-capture route, NO-INLINE-COLOR accepts the inline styles of the compiled .mvc.js files its route-spec cites (`style: "..."`). LDM_Email_V2, ContactByEmailLDMCoordinator, EmailTarget, HomeFeed check clean.
- `migration/change-requests/CR-OrbitAdminLanding-1.md:51` (ContactByEmailMember): scenario noadminevents), OrbitLanding (5 states), MessageDetail, ContactByEmailMember, ContactByEmailOneSchoolGlobal,
- `migration/change-requests/CR-ContactByEmailMember-1.md:1` (ContactByEmailMember): # CR-ContactByEmailMember-1: one mock handler for SendContactMemberEmail (shared by two screens)
- `migration/change-requests/CR-ContactByEmailMember-1.md:3` (ContactByEmailMember): - **From:** route ContactByEmailMember (wave 5). **Owner:** foundation (`app/src/mocks/` or a shared `mocks.ts`).
- `migration/change-requests/CR-ContactByEmailMember-1.md:6` (ContactByEmailMember): of the sent forms; remove the copies from `app/src/screens/ContactByEmailMember/mocks.ts` and
- `migration/change-requests/CR-ContactByEmailMember-1.md:9` (ContactByEmailMember): `screenservices/UBTConnect/ContactFlow/ContactByEmailMember/ServiceAPISendContactMemberEmail` and
- `migration/change-requests/CR-ContactByEmailMember-1.md:15` (ContactByEmailMember): - **Meanwhile:** ContactByEmailMember registers its own handler (collection `ContactByEmailMember.sentEmails`).
- `migration/change-requests/CR-ContactByEmailMember-1.md:25` (ContactByEmailMember): cannot tell them apart; nothing reads the sent mails back). The route mocks of ContactByEmailMember and
- `migration/change-requests/CR-ContactByEmailMember-1.md:27` (ContactByEmailMember): (module UBTConnect, as the compiled screens use `UBTConnectModel.staticEntities.uBT_FontWeight`: ContactByEmailMember
- `migration/change-requests/CR-OrbitAdminLanding-1.md:51` (ContactByEmailOneSchoolGlobal): scenario noadminevents), OrbitLanding (5 states), MessageDetail, ContactByEmailMember, ContactByEmailOneSchoolGlobal,
- `migration/change-requests/CR-Profile-2.md:58` (ContactByEmailOneSchoolGlobal): ContactByEmailOneSchoolGlobal (all states 0). `npm --prefix app run ci` is green (251 files, 1078 tests).
- `migration/change-requests/CR-ContactByEmailMember-1.md:7` (ContactByEmailOneSchoolGlobal): `app/src/screens/ContactByEmailOneSchoolGlobal/mocks.ts`.
- `migration/change-requests/CR-ContactByEmailMember-1.md:10` (ContactByEmailOneSchoolGlobal): `…/ContactByEmailOneSchoolGlobal/ServiceAPISendContactMemberEmail` into one operation
- `migration/change-requests/CR-ContactByEmailMember-1.md:26` (ContactByEmailOneSchoolGlobal): ContactByEmailOneSchoolGlobal now register no handler. `UBT_FontWeight` of `app/src/shared/UBTConnect/lib/staticEntities.ts`
- `migration/change-requests/CR-ContactByEmailMember-1.md:28` (ContactByEmailOneSchoolGlobal): .mvc.js:507 semiBold, ContactByEmailOneSchoolGlobal .mvc.js:310 bold) has the five TST values (Bold, Light, Medium,
- `migration/change-requests/CR-ContactByEmailOneSchoolGlobal-1.md:1` (ContactByEmailOneSchoolGlobal): # CR-ContactByEmailOneSchoolGlobal-1: one shared mock for SendContactMemberEmail; UBT_FontWeight.Bold
- `migration/change-requests/CR-ContactByEmailOneSchoolGlobal-1.md:3` (ContactByEmailOneSchoolGlobal): - **From:** route ContactByEmailOneSchoolGlobal (wave 5). **Owner:** foundation (`app/src/shared/`).
- `migration/change-requests/CR-ContactByEmailMember-1.md:5` (ContactByEmailForm): `app/src/shared/UBTConnect/ContactByEmailForm/mocks.ts` or `app/src/shell/mocks.ts`), with one P-MUTATION collection
- `migration/change-requests/CR-ContactByEmailMember-1.md:23` (ContactByEmailForm): `app/src/shared/UBTConnect/ContactByEmailForm/mocks.ts`, with one merged P-MUTATION collection
- `migration/change-requests/CR-ContactByEmailOneSchoolGlobal-1.md:5` (ContactByEmailForm): shared mocks file next to `app/src/shared/UBTConnect/ContactByEmailForm/` with one store collection of sent e-mails,
- `migration/change-requests/CR-ContactByEmailOneSchoolGlobal-1.md:25` (ContactByEmailForm): `app/src/shared/UBTConnect/ContactByEmailForm/mocks.ts`, with one merged P-MUTATION collection
- `migration/change-requests/CR-ContactByEmailMember-2.md:1` (ContactByEmailForm): # CR-ContactByEmailMember-2: ContactByEmailForm message text area without `rows`
- `migration/change-requests/CR-ContactByEmailMember-2.md:4` (ContactByEmailForm): `app/src/shared/UBTConnect/ContactByEmailForm/ContactByEmailForm.tsx`.
- `migration/change-requests/CR-ContactByEmailMember-2.md:11` (ContactByEmailForm): view says `textLines: 3` (ContactByEmailForm.mvc.js:556), but TST renders no `rows` for it here nor on ContactUsDetails
- `migration/change-requests/CR-ContactByEmailMember-2.md:21` (ContactByEmailForm): rejected (orchestrator, 2026-10-15, auto mode): TST renders `rows` (OutSystemsReactWidgets.js TextArea, `rows: this.props.textLines`); the capture dropped it (capture.js KEEP_ATTR, line 285; `rows|maxlength` now kept for future captures). The shared ContactByEmailForm keeps `rows`; the parity differ

## knowledge

- `migration/knowledge/orbit-assemble-ldm.md:14` (ContactByEmailLDMCoordinator): - LDM_MyEvents(_V2), LDM_EventDetail(_V2), LDM_Email(_V2), ContactByEmailLDMCoordinator, EmailTarget.
- `migration/knowledge/orbit-assemble-ldm.md:49` (ContactByEmailLDMCoordinator): ContactByEmailLDMCoordinator, EmailTarget, AssembleDetail. Capture-plan entries keep the tried `via` paths.
- `migration/knowledge/auto-decisions-2026-10-16.md:61` (ContactByEmailLDMCoordinator): | LDM_Email_V2 Q1-Q3, ContactByEmailLDMCoordinator Q1, EmailTarget Q1 | **A (recommended)** each | sends mocked (P-MUTATION); compiled inline margin-top kept |
- `migration/knowledge/auto-decisions-2026-10-15.md:21` (ContactByEmailMember): | ContactByEmailMember | Q1 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59): submit built from the compiled code, SendContactMemberEmail mocked (P-MUTATION) |
- `migration/knowledge/auto-decisions-2026-10-15.md:22` (ContactByEmailMember): | ContactByEmailMember | Q2 | fact | by code | Connect2_OrbitMobile_MUI.controller.js (fetched read-only 2026-10-15): OnApplicationEvent_EmailHost serializes AuditPayload_EmailHost and calls zOnApplicationEvent_Wrappe |
- `migration/knowledge/auto-decisions-2026-10-15.md:23` (ContactByEmailMember): | ContactByEmailMember | Q3 | fact | by code | UBTConnect.ContactFlow.controller.js (fetched read-only 2026-10-15): ContactFlow.handleError logs a trace and delegates to the App_Common flow handleError. raiseToFlowHan |
- `migration/knowledge/auto-decisions-2026-10-15.md:24` (ContactByEmailMember): | ContactByEmailMember | Q4 | decision | NOT RECOMMENDED | Auto-decided (user instruction 2026-10-15 16:59), NOT the recommended A, because the evidence contradicts it: CR-ContactByEmailMember-2 is rejected. TST renders rows (Out |
- `migration/knowledge/auto-decisions-2026-10-15.md:73` (ContactByEmailMember): **Reviewed by the user 2026-10-16 ("tôi ok")**: all items above accepted as they are, including ADR-8, CR-ContactByEmailMember-2 rejected, bookmark 91001 option d, and the conservative mocks for LegacyShareObject Q2 / MyBookmarks Q3 / ConnectShare Q1.
- `migration/knowledge/auto-decisions-2026-10-16.md:13` (ContactByEmailMember): **Reviewed by the user 2026-10-16 ("tôi ok")**: all items above accepted as they are, including ADR-8, CR-ContactByEmailMember-2 rejected, bookmark 91001 option d, and the conservative mocks for LegacyShareObject Q2 / MyBookmarks Q3 / ConnectShare Q1.
- `migration/knowledge/auto-decisions-2026-10-15.md:25` (ContactByEmailOneSchoolGlobal): | ContactByEmailOneSchoolGlobal | Q1 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59): send mock stores the form in an in-memory collection and answers {} |
- `migration/knowledge/auto-decisions-2026-10-15.md:26` (ContactByEmailOneSchoolGlobal): | ContactByEmailOneSchoolGlobal | Q2 | decision |  | A (recommended), auto-accepted (user instruction 2026-10-15 16:59): on failure IsLoading stays on as compiled; error to raiseToFlowHandler (ContactFlow.handleError → App_ |
- `migration/knowledge/orbit-assemble-ldm.md:13` (ContactByEmailOrbitHelpdesk): ContactByEmailOrbitHelpdesk, ContactByEmailOrbitHost, EmailContact.
- `migration/knowledge/orbit-assemble-ldm.md:34` (ContactByEmailOrbitHelpdesk): ViewDocuments, QRCodeGenerate, OrbitAdminEventDetail, ContactByEmailOrbitHelpdesk, ContactByEmailOrbitHost,
- `migration/knowledge/orbit-assemble-ldm.md:45` (ContactByEmailOrbitHelpdesk): HostSurvey (default only), MilestoneDetail (default only, Accommodation), HelpersDetail, ContactByEmailOrbitHelpdesk
- `migration/knowledge/auto-decisions-2026-10-16.md:65` (ContactByEmailOrbitHelpdesk): | HelpersDetail Q1-Q2, ContactByEmailOrbitHelpdesk Q1-Q2, ContactByEmailOrbitHost Q1-Q2 | **A (recommended)** each | cloneQueries; sends mocked; review URL for OrbitHost |
- `migration/knowledge/orbit-assemble-ldm.md:13` (ContactByEmailOrbitHost): ContactByEmailOrbitHelpdesk, ContactByEmailOrbitHost, EmailContact.
- `migration/knowledge/orbit-assemble-ldm.md:34` (ContactByEmailOrbitHost): ViewDocuments, QRCodeGenerate, OrbitAdminEventDetail, ContactByEmailOrbitHelpdesk, ContactByEmailOrbitHost,
- `migration/knowledge/orbit-assemble-ldm.md:48` (ContactByEmailOrbitHost): EventBooklet, OrbitAdminEventDetail, ContactByEmailOrbitHost, EmailContact, LDM_Email_V2,
- `migration/knowledge/auto-decisions-2026-10-16.md:65` (ContactByEmailOrbitHost): | HelpersDetail Q1-Q2, ContactByEmailOrbitHelpdesk Q1-Q2, ContactByEmailOrbitHost Q1-Q2 | **A (recommended)** each | cloneQueries; sends mocked; review URL for OrbitHost |

## parity exemptions

- `migration/parity-exemptions.json:856` (ContactByEmailMember): "evidence": "migration/screens/ContactByEmailOneSchoolGlobal/parity/default.json, loading.json, offline.json (358×60 → 358×39 subject, 358×60 → 358×81 message); analysis/dom/default.html:79, :104 (textareas without rows/maxlength; the input of ContactByEmailMember also lacks its compiled maxlength 1
- `migration/parity-exemptions.json:870` (ContactByEmailMember): "evidence": "migration/screens/ContactByEmailOneSchoolGlobal/parity/default.json, loading.json, offline.json (358×60 → 358×39 subject, 358×60 → 358×81 message); analysis/dom/default.html:79, :104 (textareas without rows/maxlength; the input of ContactByEmailMember also lacks its compiled maxlength 1
- `migration/parity-exemptions.json:882` (ContactByEmailMember): "evidence": "migration/screens/ContactByEmailOneSchoolGlobal/parity/default.json, loading.json, offline.json (358×60 → 358×39 subject, 358×60 → 358×81 message); analysis/dom/default.html:79, :104 (textareas without rows/maxlength; the input of ContactByEmailMember also lacks its compiled maxlength 1
- `migration/parity-exemptions.json:894` (ContactByEmailMember): "evidence": "migration/screens/ContactByEmailOneSchoolGlobal/parity/default.json, loading.json, offline.json (358×60 → 358×39 subject, 358×60 → 358×81 message); analysis/dom/default.html:79, :104 (textareas without rows/maxlength; the input of ContactByEmailMember also lacks its compiled maxlength 1
- `migration/parity-exemptions.json:902` (ContactByEmailMember): "routeRegex": "^/UBTConnect/ContactByEmailMember(\\?|$)",
- `migration/parity-exemptions.json:906` (ContactByEmailMember): "evidence": "migration/screens/ContactByEmailMember/parity/default.json (position 0,326 → 0,305); 81 − 60 = 21"
- `migration/parity-exemptions.json:856` (ContactByEmailOneSchoolGlobal): "evidence": "migration/screens/ContactByEmailOneSchoolGlobal/parity/default.json, loading.json, offline.json (358×60 → 358×39 subject, 358×60 → 358×81 message); analysis/dom/default.html:79, :104 (textareas without rows/maxlength; the input of ContactByEmailMember also lacks its compiled maxlength 1
- `migration/parity-exemptions.json:870` (ContactByEmailOneSchoolGlobal): "evidence": "migration/screens/ContactByEmailOneSchoolGlobal/parity/default.json, loading.json, offline.json (358×60 → 358×39 subject, 358×60 → 358×81 message); analysis/dom/default.html:79, :104 (textareas without rows/maxlength; the input of ContactByEmailMember also lacks its compiled maxlength 1
- `migration/parity-exemptions.json:882` (ContactByEmailOneSchoolGlobal): "evidence": "migration/screens/ContactByEmailOneSchoolGlobal/parity/default.json, loading.json, offline.json (358×60 → 358×39 subject, 358×60 → 358×81 message); analysis/dom/default.html:79, :104 (textareas without rows/maxlength; the input of ContactByEmailMember also lacks its compiled maxlength 1
- `migration/parity-exemptions.json:894` (ContactByEmailOneSchoolGlobal): "evidence": "migration/screens/ContactByEmailOneSchoolGlobal/parity/default.json, loading.json, offline.json (358×60 → 358×39 subject, 358×60 → 358×81 message); analysis/dom/default.html:79, :104 (textareas without rows/maxlength; the input of ContactByEmailMember also lacks its compiled maxlength 1
- `migration/parity-exemptions.json:1438` (ContactByEmailOrbitHelpdesk): "routeRegex": "^/UBTConnect/ContactByEmailOrbitHelpdesk(\\?|$)",
- `migration/parity-exemptions.json:1450` (ContactByEmailOrbitHelpdesk): "routeRegex": "^/UBTConnect/ContactByEmailOrbitHelpdesk(\\?|$)",
- `migration/parity-exemptions.json:1462` (ContactByEmailOrbitHelpdesk): "routeRegex": "^/UBTConnect/ContactByEmailOrbitHelpdesk(\\?|$)",
- `migration/parity-exemptions.json:855` (ContactByEmailForm): "reason": "The capture serializer keeps only the attributes of KEEP_ATTR (.claude/skills/outsystems-screen-spec/scripts/capture.js:285), which drops `rows` (and `maxlength`) of the ContactByEmailForm text areas, so the replayed reference shows both at the browser default rows=2 (60 px). TST renders 
- `migration/parity-exemptions.json:869` (ContactByEmailForm): "reason": "The capture serializer keeps only the attributes of KEEP_ATTR (.claude/skills/outsystems-screen-spec/scripts/capture.js:285), which drops `rows` (and `maxlength`) of the ContactByEmailForm text areas, so the replayed reference shows both at the browser default rows=2 (60 px). TST renders 
- `migration/parity-exemptions.json:881` (ContactByEmailForm): "reason": "The capture serializer keeps only the attributes of KEEP_ATTR (.claude/skills/outsystems-screen-spec/scripts/capture.js:285), which drops `rows` (and `maxlength`) of the ContactByEmailForm text areas, so the replayed reference shows both at the browser default rows=2 (60 px). TST renders 
- `migration/parity-exemptions.json:893` (ContactByEmailForm): "reason": "The capture serializer keeps only the attributes of KEEP_ATTR (.claude/skills/outsystems-screen-spec/scripts/capture.js:285), which drops `rows` (and `maxlength`) of the ContactByEmailForm text areas, so the replayed reference shows both at the browser default rows=2 (60 px). TST renders 
- `migration/parity-exemptions.json:903` (ContactByEmailForm): "pathRegex": "\\[ContactFlow\\.ContactByEmailForm\\] > div#b2-\\$b8\\.OSBlockWidget\\[ConnectPatterns\\.FixedFooter\\] > div\\.ubt-fixed-footer\\.ubt-fixed-footer--no-bottom-bar$",

## Decision ids on the board rows of the flow's screens

V4c, V7
