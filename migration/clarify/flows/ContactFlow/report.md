# Flow report: ContactFlow

| | |
|---|---|
| Status | draft |
| Date | 2026-10-27 |
| Screens on DEV | 6 (built: 5, ContactByEmailLDMCoordinator, ContactByEmailMember, ContactByEmailOneSchoolGlobal, ContactByEmailOrbitHelpdesk, ContactByEmailOrbitHost; not built: ContactByEmailContacts, board `skip` V7) |
| Own blocks | ContactByEmailForm |
| Sources | `pack/*.md` (DEV model, MCP dump 2026-10-27), `app/src/…`, KB page `ui/contact-by-email.md` and the rules BR-UBTCON-041 to BR-UBTCON-050, TST compiled code of the 6 screens and the form block (`tst_source.py`), `migration/runtime-sources/` controllers of Connect2_OrbitMobile_MUI and Connect2_LegacyShared |
| Rule | TST is the source of truth; DEV is the checklist. A difference is noted in §6. |

## 1. Summary

- Counts by verdict: match 121 · partial 3 · missing 0 · differs 8 · mock-only 5 · n/a 5 · unclear 0 (same as `checklist.json`).

- **F1** (info): two Orbit app events drop payload fields. React passes 2 of 6 fields to `OnApplicationEvent_EmailHost` and 1 of 4 to `OnApplicationEvent_ContactHelpdesk`.

- **F2** (minor): with an empty `In_AvatarURL`, the header image of ContactByEmailLDMCoordinator has no `src` attribute. TST renders `src=""`.

- By decision U17, the audits and app events go to the log only. The five sends go to mocks (`mock-only` rows name the server side).

- Status: in React a user can open the five built screens, type a subject and a message, and send. The feedback message and the return to the previous screen work as on TST. No finding blocks the flow.

## 2. Screens

### 2.1 ContactByEmailLDMCoordinator

Route `/UBTConnect/ContactByEmailLDMCoordinator`, React screen `app/src/pages/ContactByEmailLDMCoordinator/ContactByEmailLDMCoordinatorPage.tsx`, submit in `hooks/useContactByEmailLDMCoordinatorSubmit.ts`. Board: `build`, built (LDM family, user 2026-10-16). TST file: `UBTConnect.ContactFlow.ContactByEmailLDMCoordinator.mvc.js`.

**Identity**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 030 | route + roles | roles Registered, UBTOne_User; URL structure QueryString; route /UBTConnect/ContactByEmailLDMCoordinator | route MEMBER_ROUTE (member, enforce) (app.md); page default export ContactByEmailLDMCoordinator | `match` | app/src/pages/ContactByEmailLDMCoordinator/ContactByEmailLDMCoordinatorPage.tsx:18; TST UBTConnect.ContactFlow.ContactByEmailLDMCoordinator.mvc.js:659 (checkRegistered)<br>Registered covers UBTOne_User; TST checks Registered only. |
| 031 | input parameters | pack inputs: In_AvatarURL, In_ContactName, In_EmailTo (mandatory), In_Subject, In_EventDate (Date, mandatory), In_EventLocality (mandatory) | inputs.ts reads the query string by the original names | `match` | app/src/pages/ContactByEmailLDMCoordinator/inputs.ts |

**Data**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 032 | local variable IsLoading | IsLoading: Boolean | const [isLoading,setIsLoading]=useState(false) in submit hook | `match` | app/src/pages/ContactByEmailLDMCoordinator/hooks/useContactByEmailLDMCoordinatorSubmit.ts |
| 033 | Layout_DetailPage In_AlignTitleLeft/In_IsPrimaryColor | In_AlignTitleLeft=True, In_IsPrimaryColor=True | DetailLayoutContainer inAlignTitleLeft inIsPrimaryColor={config.isPrimaryColor} | `match` | app/src/pages/ContactByEmailLDMCoordinator/ContactByEmailLDMCoordinatorPage.tsx:26-29 |
| 047 | server action SendContactLDMCoordinatorEmail (ref-service, Connect_Communication_CS) | In_UI_ContactByEmailForm (mandatory) -> no outputs | repository: sendContactLDMCoordinatorEmail -> callAction("UBTConnect","ServiceAPISendContactLDMCoordinatorEmail"); mock: contractHandler(...) upserts collection UBTConnect.sentContactLDMCoordinatorEmails, returns {} | `mock-only` | app/src/api/message/repository.ts:56-58; app/src/pages/ContactByEmailLDMCoordinator/mocks.ts:11-18; migration/knowledge/auto-decisions-2026-10-16.md:61<br>Production needs the screen service ServiceAPISendContactLDMCoordinatorEmail of UBTConnect, which calls Connect_Communication_CS SendContactLDMCoordinatorEmail (BR-C2SVC-065: sends to the address of the caller and adds the mobile phone of the sender). |
| 048 | client variables (data.md) | none | - | `match` | pack/data.md (client variables: none); the TST handler reads no client variable<br>data.md Client variables table is empty |

**UI tree**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 034 | Layout_DetailPage title | Placeholder_Header_Title expr: "Email" | placeholderHeaderTitle <span data-expression>{config.title}</span>; config.title "Email" | `match` | app/src/pages/ContactByEmailLDMCoordinator/config.ts |
| 035 | Placeholder_CommonUI_Inside_Layout | not in pack (React comment: empty) | useNoCommonUi() | `match` | app/src/pages/ContactByEmailLDMCoordinator/ContactByEmailLDMCoordinatorPage.tsx:19; TST UBTConnect.ContactFlow.ContactByEmailLDMCoordinator.mvc.js:446 (placeholder_CommonUI_Inside_Layout: PlaceholderContent.Empty)<br>TST passes an empty placeholder; React useNoCommonUi() matches. |
| 037 | ContactByEmailForm args | In_MessagePlaceholder="Add a message", In_Subject=In_Subject, In_SubjectPlaceholder="Add a subject", IsLoading=IsLoading (no dynamic text area) | form: {inSubjectPlaceholder:"Add a subject", inMessagePlaceholder:"Add a message", inSubject: inputs.In_Subject} | `match` | app/src/pages/ContactByEmailLDMCoordinator/config.ts:11-15 |
| 038 | If False [DEAD BRANCH] UBT_LazyImage | if False -> UBT_LazyImage(EntityType=NullTextIdentifier(), ImageURL=In_AvatarURL) / else container image In_AvatarURL External | Page shows only the else branch: ContactHeaderCard imageSrc={In_AvatarURL \|\| undefined} | `n/a` | app/src/pages/ContactByEmailLDMCoordinator/ContactByEmailLDMCoordinatorPage.tsx:33-37; TST UBTConnect.ContactFlow.ContactByEmailLDMCoordinator.mvc.js:330-337 (no UBT_LazyImage on TST)<br>dead in the model. TST keeps only the External image (section 6.1). The empty-URL case is row 131. |
| 039 | header card CustomContainer contact-by-email__header | ExtendedClasses contact-by-email__header, Neutral2, padding vertical XS, margin bottom Base; name (Neutral10/Base/Bold = In_ContactName); text "LDM Event Coordinator" (Neutral7/XS) | ContactHeaderCard title={In_ContactName} subtitle="LDM Event Coordinator" | `match` | app/src/components/contact/ContactHeaderCard/ContactHeaderCard.tsx:21-62 |
| 131 | header image with an empty In_AvatarURL | Image Type External, URL In_AvatarURL; with "" the widget renders src="" | ContactHeaderCard imageSrc={In_AvatarURL \|\| undefined}: no src attribute | `partial` | migration/runtime-sources/OutSystemsReactWidgets.js:2 (prepareImageAttributes: src "" by default, type 1 src = props.url); TST UBTConnect.ContactFlow.ContactByEmailLDMCoordinator.mvc.js:330-337; app/src/pages/ContactByEmailLDMCoordinator/ContactByEmailLDMCoordinatorPage.tsx:33-37<br>A DOM attribute only, for a coordinator without an avatar URL.<br>F2 (minor) |

**Screen actions**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 040 | Handler_SubmitForm: SendContactLDMCoordinatorEmail | call-server SendContactLDMCoordinatorEmail(In_UI_ContactByEmailForm=ContactByEmailForm) | await sendContactLDMCoordinatorEmail(sent) | `match` | app/src/pages/ContactByEmailLDMCoordinator/hooks/useContactByEmailLDMCoordinatorSubmit.ts:45; TST UBTConnect.ContactFlow.ContactByEmailLDMCoordinator.mvc.js:550 |
| 041 | Handler_SubmitForm: IsLoading = True; Subject/Message into ContactByEmailForm | assign IsLoading=True; ContactByEmailForm.Subject=Event_Subject; .Message=Event_Message | setIsLoading(true); const sent = { ...form, subject: eventSubject, message: eventMessage } | `match` | app/src/pages/ContactByEmailLDMCoordinator/hooks/useContactByEmailLDMCoordinatorSubmit.ts:42-43 |
| 042 | Handler_SubmitForm: feedback + navigate | JS ScheduleFeedbackMessageAfterTransition("Your message has been sent.") (setTimeout 500 ms, showFeedbackMessage(Message,1)); navigate Previous Screen UseHistory | scheduleFeedbackMessageAfterTransition("Your message has been sent."); navigateBack() | `match` | app/src/pages/ContactByEmailLDMCoordinator/hooks/useContactByEmailLDMCoordinatorSubmit.ts:54-55 |
| 043 | Handler_SubmitForm: error path | no exception handler in the Handler; IsLoading stays True | catch(error){ raiseToFlowHandler(error) } ; isLoading never reset | `match` | app/src/pages/ContactByEmailLDMCoordinator/hooks/useContactByEmailLDMCoordinatorSubmit.ts; TST UBTConnect.ContactFlow.ContactByEmailLDMCoordinator.mvc.js:517-593 (no exception handler); migration/knowledge/auto-decisions-2026-10-15.md:23 (Q3 fact: ContactFlow.handleError), :26<br>IsLoading stays True after an error, as on TST (KB ui/contact-by-email.md: no failure path). |
| 044 | Handler_SubmitForm: AppManager_GetCachedUserInfo + EmailEvent | EmailEvent.EmailTo=ContactByEmailForm.EmailTo; NameOfSender = LastName + ", " + FirstName | const user=appManager_GetCachedUserInfo(); emailEvent={EmailTo:sent.emailTo, NameOfSender:`${user.LastName}, ${user.FirstName}`} | `match` | app/src/pages/ContactByEmailLDMCoordinator/hooks/useContactByEmailLDMCoordinatorSubmit.ts:46-47; TST UBTConnect.ContactFlow.ContactByEmailLDMCoordinator.mvc.js:550-564 |
| 045 | Handler_SubmitForm: AddAuditEventDetailEvent | AddAuditEventDetailEvent(EventDate=In_EventDate, EventLocality=In_EventLocality, EventTypeId=LDMApplicationEvent.MyTimelineCoordinatorEmailed) (other args default: ClickedHouseholdId 0, Name "") | addAuditEventDetailEvent(MyTimelineCoordinatorEmailed, In_EventDate, In_EventLocality) -> log.info only (actions.ts:14-16) | `differs` | app/src/pages/ContactByEmailLDMCoordinator/hooks/useContactByEmailLDMCoordinatorSubmit.ts:48-52; app/src/pages/ContactByEmailLDMCoordinator/actions.ts:11-16; TST UBTConnect.ContactFlow.ContactByEmailLDMCoordinator.mvc.js:564; Connect2_OrbitMobile_MUI.controller.js:241-274; Connect2_LegacyShared.controller.js:7567-7601 (zOnApplicationEvent_Wrapper: GetAppEventName, then UBT_AppManager AzureInsights_CreateCustomEvent); migration/app-shell.spec.md:349, :384 (U17)<br>U17: no telemetry in the mock phase; React logs the call. Production needs the telemetry sink: the action builds EventInfo (dateLocalIso, logLevel 3, EventType "LDM", GuestHouseholdName "", GuestHouseholdId 0, EventDate, EventLocality) and sends it as an App Insights custom event. The React call already carries the event id, the date and the locality. |
| 046 | Handler_SubmitForm: JSONSerialize + zOnApplicationEvent_Wrapper | json-serialize EmailEvent; zOnApplicationEvent_Wrapper(AttachmentJSON=JSON, EventId=MyTimelineCoordinatorEmailed) | zOnApplicationEvent_Wrapper(MyTimelineCoordinatorEmailed, JSON.stringify(emailEvent)) -> log.info (actions.ts:20-22) | `differs` | app/src/pages/ContactByEmailLDMCoordinator/hooks/useContactByEmailLDMCoordinatorSubmit.ts:53; app/src/pages/ContactByEmailLDMCoordinator/actions.ts:18-22; TST UBTConnect.ContactFlow.ContactByEmailLDMCoordinator.mvc.js:572; Connect2_OrbitMobile_MUI.model.js:10397-10415 (EmailHouseholdEventRec: EmailTo, NameOfSender); Connect2_LegacyShared.controller.js:7567-7601 (zOnApplicationEvent_Wrapper: GetAppEventName, then UBT_AppManager AzureInsights_CreateCustomEvent); migration/app-shell.spec.md:349, :384 (U17)<br>U17: logged only. React passes the full attachment JSON (EmailTo, NameOfSender), the same fields as EmailHouseholdEventRec; the log leaves the attachment out. Production needs the App Insights custom event. The reader note on an ISO date does not apply: the record has no date field. |

**Validations**

No row.

**Business logic**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 036 | ScreenEvent_OnInitialize | FirstName=ContactMember=In_ContactName; EmailTo=In_EmailTo; Subject=In_Subject | useState(()=>({firstName:In_ContactName, contactMember:In_ContactName, emailTo:In_EmailTo, subject:In_Subject, message:''})) | `match` | app/src/pages/ContactByEmailLDMCoordinator/hooks/useContactByEmailLDMCoordinatorSubmit.ts:32-39 |
| 136 | BR-UBTCON-045 | send through the coordinator service; record MyTimelineCoordinatorEmailed twice (AddAuditEventDetailEvent, zOnApplicationEvent_Wrapper) | sendContactLDMCoordinatorEmail (mock); both events go to the log only | `differs` | BR-UBTCON-045; TST UBTConnect.ContactFlow.ContactByEmailLDMCoordinator.mvc.js:550, :564, :572; migration/app-shell.spec.md:349, :384 (U17)<br>U17: no telemetry in the mock phase. Rows 045 to 047. |

**Strings**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 049 | strings of the screen | "Add a message", "Add a subject", "LDM Event Coordinator", "Email", "Your message has been sent." | found in config.ts:9,12-13, Page.tsx:36, hook:54 | `match` | app/src/pages/ContactByEmailLDMCoordinator/<br>5 strings found |

### 2.2 ContactByEmailMember

Route `/UBTConnect/ContactByEmailMember`, React screen `app/src/pages/ContactByEmailMember/ContactByEmailMemberPage.tsx`, submit in `hooks/useContactByEmailMemberSubmit.ts`. Board: `build`, built (V4c, user 2026-10-14). TST file: `UBTConnect.ContactFlow.ContactByEmailMember.mvc.js`.

**Identity**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 050 | route + roles | roles Registered, UBTOne_User; URL structure QueryString; route /UBTConnect/ContactByEmailMember | route MEMBER_ROUTE (member, enforce) (app.md); page default export ContactByEmailMember | `match` | app/src/pages/ContactByEmailMember/ContactByEmailMemberPage.tsx:18; TST UBTConnect.ContactFlow.ContactByEmailMember.mvc.js:851 (checkRegistered)<br>Registered covers UBTOne_User; TST checks Registered only. |
| 051 | input parameters | pack inputs: In_AvatarURL, In_ContactName, In_ContactSurname, In_ContactLocality, In_ContactCountry, In_EmailTo (mandatory); In_EntityType (Connect_Entity Identifier), In_EntityId (LongInt), In_LDMEventDate, In_LDMEventLocality, In_AuditEventId (default Entities.ApplicationEvents_Directory.EmailHousehold), In_OrbitEventTitle, In_OrbitEventId, In_OrbitMilestoneId, In_IsHousehold, In_HouseholdHeaderName | inputs.ts reads the query string by the original names | `match` | app/src/pages/ContactByEmailMember/inputs.ts |
| 056 | input In_AuditEventId default | default = Entities.ApplicationEvents_Directory.EmailHousehold | text('In_AuditEventId') -> "" when absent | `match` | app/src/pages/ContactByEmailMember/inputs.ts:46; TST UBTConnect.ContactFlow.ContactByEmailMember.mvc.js:82-84 (default EmailHousehold), :686 (the only reader)<br>React defaults to "". The only reader compares with EmailHost, so both defaults take the same branch. |
| 057 | input In_EntityType type | Connect_Entity Identifier | string (query text) | `match` | app/src/pages/ContactByEmailMember/inputs.ts:12; TST UBTConnect.ContactFlow.ContactByEmailMember.mvc.js:200 (converted as Text) |

**Data**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 052 | local variable IsLoading | IsLoading: Boolean | const [isLoading,setIsLoading]=useState(false) in submit hook | `match` | app/src/pages/ContactByEmailMember/hooks/useContactByEmailMemberSubmit.ts |
| 053 | Layout_DetailPage In_AlignTitleLeft/In_IsPrimaryColor | In_AlignTitleLeft=True, In_IsPrimaryColor=False | DetailLayoutContainer inAlignTitleLeft inIsPrimaryColor={config.isPrimaryColor} | `match` | app/src/pages/ContactByEmailMember/ContactByEmailMemberPage.tsx:26-29 |
| 073 | server action SendContactMemberEmail (ref-service, Connect_Communication_CS) | In_UI_ContactByEmailForm (mandatory) -> no outputs | repository.sendContactMemberEmail -> callAction ServiceAPISendContactMemberEmail; mock: components/contact/ContactEmailForm/mocks.ts (shared with OneSchoolGlobal) collection UBTConnect.sentContactMemberEmails, returns {}; this screen mocks.ts has handlers=[] | `mock-only` | app/src/api/message/repository.ts:62-64; app/src/components/contact/ContactEmailForm/mocks.ts:15-21; app/src/pages/ContactByEmailMember/mocks.ts:7; CR-ContactByEmailMember-1; migration/knowledge/auto-decisions-2026-10-15.md:21<br>Production needs the screen service ServiceAPISendContactMemberEmail, which calls Connect_Communication_CS SendContactMemberEmail (BR-C2SVC-066: recipient from the caller, no phone). One shared mock for two screens (CR-ContactByEmailMember-1). |
| 074 | client variables (data.md) | none | - | `match` | pack/data.md (client variables: none); the TST handler reads no client variable |

**UI tree**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 054 | Layout_DetailPage title | Placeholder_Header_Title expr: If(In_IsHousehold,"Contact the "+In_HouseholdHeaderName+" household","Contact Member") | placeholderHeaderTitle <span data-expression>{config.title}</span>; config.title (inputs.In_IsHousehold ? `Contact the ${In_HouseholdHeaderName} household` : "Contact Member") | `match` | app/src/pages/ContactByEmailMember/config.ts; BR-UBTCON-047 |
| 055 | Placeholder_CommonUI_Inside_Layout | not in pack (React comment: empty) | useNoCommonUi() | `match` | app/src/pages/ContactByEmailMember/ContactByEmailMemberPage.tsx:19; TST UBTConnect.ContactFlow.ContactByEmailMember.mvc.js:602 (PlaceholderContent.Empty)<br>TST passes an empty placeholder; React useNoCommonUi() matches. |
| 059 | ContactByEmailForm args | In_MessagePlaceholder="Add a message", In_SubjectPlaceholder="Add a subject", IsLoading (no In_Subject, no dynamic text area) | form: {inSubjectPlaceholder:"Add a subject", inMessagePlaceholder:"Add a message"} | `match` | app/src/pages/ContactByEmailMember/config.ts:12 |
| 060 | Layout title If(In_IsHousehold,...) | condition In_IsHousehold true -> "Contact the "+In_HouseholdHeaderName+" household"; false -> "Contact Member" | title: inputs.In_IsHousehold ? `Contact the ${...} household` : 'Contact Member' | `match` | app/src/pages/ContactByEmailMember/config.ts:10<br>BR-UBTCON-047 |
| 061 | person card (Columns_Three, UBT_LazyImage, CustomText, IconText, Icon) | UBT_LazyImage EntityId=In_EntityId, EntityType=If(In_EntityType=NullTextIdentifier(),Member,In_EntityType), Base_52/Square, ImageURL=In_AvatarURL; CustomText In_ContactName+" "+In_ContactSurname (Base/SemiBold); IconText locality+If(both<>"",", ","")+country (Neutral7/XS) icon HomePIn NonStandard_14 | ContactPersonCard entityType entityId avatarURL name={`${name} ${surname}`} locality country; localityLine = locality + (both non-empty ? ", " : "") + country; entityType==='' -> Connect_Entity.Member | `match` | app/src/components/contact/ContactPersonCard/ContactPersonCard.tsx:37-90; app/src/pages/ContactByEmailMember/ContactByEmailMemberPage.tsx:31-38<br>If(In_EntityType = NullTextIdentifier()): React compares to '' |

**Screen actions**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 062 | Handler_SubmitForm: SendContactMemberEmail | call-server SendContactMemberEmail(In_UI_ContactByEmailForm=ContactByEmailForm) | await sendContactMemberEmail(sent) | `match` | app/src/pages/ContactByEmailMember/hooks/useContactByEmailMemberSubmit.ts:49; TST UBTConnect.ContactFlow.ContactByEmailMember.mvc.js:669 |
| 063 | Handler_SubmitForm: IsLoading = True; Subject/Message into ContactByEmailForm | assign IsLoading=True; ContactByEmailForm.Subject=Event_Subject; .Message=Event_Message | setIsLoading(true); const sent = { ...form, subject: eventSubject, message: eventMessage } | `match` | app/src/pages/ContactByEmailMember/hooks/useContactByEmailMemberSubmit.ts:46-47 |
| 064 | Handler_SubmitForm: feedback + navigate | JS ScheduleFeedbackMessageAfterTransition("Your message has been sent.") (setTimeout 500 ms, showFeedbackMessage(Message,1)); navigate Previous Screen UseHistory | scheduleFeedbackMessageAfterTransition("Your message has been sent."); navigateBack() | `match` | app/src/pages/ContactByEmailMember/hooks/useContactByEmailMemberSubmit.ts:66-67 |
| 065 | Handler_SubmitForm: error path | no exception handler in the Handler; IsLoading stays True | catch(error){ raiseToFlowHandler(error) } ; isLoading never reset | `match` | app/src/pages/ContactByEmailMember/hooks/useContactByEmailMemberSubmit.ts; TST UBTConnect.ContactFlow.ContactByEmailMember.mvc.js:640-745 (no exception handler); migration/knowledge/auto-decisions-2026-10-15.md:23 (Q3 fact: ContactFlow.handleError), :26<br>IsLoading stays True after an error, as on TST. |
| 066 | Handler_SubmitForm: AppManager_GetCachedUserInfo + EmailEvent | EmailEvent.EmailTo=Form.EmailTo; NameOfSender=LastName+", "+FirstName | user = appManager_GetCachedUserInfo(); emailEvent {EmailTo, NameOfSender} | `match` | app/src/pages/ContactByEmailMember/hooks/useContactByEmailMemberSubmit.ts:50-51; TST UBTConnect.ContactFlow.ContactByEmailMember.mvc.js:671-676 |
| 068 | True branch: OnApplicationEvent_EmailHost then end | call OnApplicationEvent_EmailHost(AuditPayload={MilestoneId, EventId, EventTitle=In_OrbitEventTitle, HostName=In_ContactName, Subject=Event_Subject, Message=Event_Message}); end (no message, no navigation) | onApplicationEvent_EmailHost({MilestoneId, EventId}) -> log.info only; return (no message, no navigation) | `partial` | app/src/pages/ContactByEmailMember/hooks/useContactByEmailMemberSubmit.ts:52-55; app/src/pages/ContactByEmailMember/actions.ts:11-15; TST UBTConnect.ContactFlow.ContactByEmailMember.mvc.js:688-698 (AuditPayload_EmailHostRec: MilestoneId, EventId, EventTitle, HostName, Subject, Message); Connect2_OrbitMobile_MUI.controller.js:5696-5739; Connect2_LegacyShared.controller.js:7567-7601 (zOnApplicationEvent_Wrapper: GetAppEventName, then UBT_AppManager AzureInsights_CreateCustomEvent); migration/app-shell.spec.md:349, :384 (U17)<br>The log-only call is U17. React passes 2 of 6 payload fields; production needs all 6 in the App Insights custom event (F1, Q1). No message and no navigation follow, as on TST (Q2). The comment "Q2 open" in actions.ts:11-12 is out of date: auto-decisions-2026-10-15.md:22 records the controller fact.<br>F1 (info) |
| 070 | LDM true: AddAuditEventDetailEvent + JSONSerialize -> EventJSON | AddAuditEventDetailEvent(EventDate=In_LDMEventDate, EventLocality=In_LDMEventLocality, EventTypeId=ApplicationEvents_Directory.EmailHousehold); json-serialize EmailEvent; EventJSON=JSON | addAuditEventDetailEvent(EmailHousehold, date, locality) -> log; eventJSON = JSON.stringify(emailEvent) | `differs` | app/src/pages/ContactByEmailMember/hooks/useContactByEmailMemberSubmit.ts:58-63; app/src/pages/ContactByEmailMember/actions.ts:17-25; TST UBTConnect.ContactFlow.ContactByEmailMember.mvc.js:708-714; Connect2_OrbitMobile_MUI.controller.js:241-274; migration/app-shell.spec.md:349, :384 (U17)<br>U17: logged only. Production need as row 045 (EventInfo with the LDM date and locality). |
| 071 | LDM false: continue at [M1] with EventJSON = "" | else -> [M1] zOnApplicationEvent_Wrapper(AttachmentJSON=EventJSON(""), EventId=EmailHousehold) | let eventJSON=''; zOnApplicationEvent_Wrapper(EmailHousehold, eventJSON) after the if | `match` | app/src/pages/ContactByEmailMember/hooks/useContactByEmailMemberSubmit.ts:56,65; TST UBTConnect.ContactFlow.ContactByEmailMember.mvc.js:716-722 |
| 072 | [M1] zOnApplicationEvent_Wrapper | zOnApplicationEvent_Wrapper(AttachmentJSON=EventJSON, EventId=ApplicationEvents_Directory.EmailHousehold) | zOnApplicationEvent_Wrapper(...) -> log.info (attachment not logged) | `differs` | app/src/pages/ContactByEmailMember/hooks/useContactByEmailMemberSubmit.ts:65; app/src/pages/ContactByEmailMember/actions.ts:7-9; TST UBTConnect.ContactFlow.ContactByEmailMember.mvc.js:722; Connect2_LegacyShared.controller.js:7567-7601 (zOnApplicationEvent_Wrapper: GetAppEventName, then UBT_AppManager AzureInsights_CreateCustomEvent); migration/app-shell.spec.md:349, :384 (U17)<br>U17: logged only; React passes the attachment JSON in full. Production needs the App Insights custom event. |

**Validations**

No row.

**Business logic**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 058 | ScreenEvent_OnInitialize | FirstName=ContactMember=In_ContactName; EmailTo=In_EmailTo (Subject not set) | useState(()=>({firstName:In_ContactName, contactMember:In_ContactName, emailTo:In_EmailTo, subject:'', message:''})) | `match` | app/src/pages/ContactByEmailMember/hooks/useContactByEmailMemberSubmit.ts:36-43 |
| 067 | If In_AuditEventId = OrbitApplicationEvent.EmailHost (condition) | condition In_AuditEventId = Entities.OrbitApplicationEvent.EmailHost (0611724f-...) | if (inputs.In_AuditEventId === OrbitApplicationEvent_EmailHost) | `match` | app/src/pages/ContactByEmailMember/hooks/useContactByEmailMemberSubmit.ts:52; app/src/pages/ContactByEmailMember/staticEntities.ts:5; TST UBTConnect.ContactFlow.ContactByEmailMember.mvc.js:686 |
| 069 | Else branch: If In_LDMEventDate <> NullDate() or In_LDMEventLocality <> "" | condition In_LDMEventDate <> NullDate() or In_LDMEventLocality <> "" | if (inputs.In_LDMEventDate !== '' \|\| inputs.In_LDMEventLocality !== '') | `match` | app/src/pages/ContactByEmailMember/hooks/useContactByEmailMemberSubmit.ts:57<br>NullDate is 1900-01-01; inputs.ts:29-30 maps it to "" |
| 137 | BR-UBTCON-046 | audit by origin: EmailHost app event, LDM detail audit plus EmailHousehold, or EmailHousehold only | the same three branches; the events go to the log only | `differs` | BR-UBTCON-046; TST UBTConnect.ContactFlow.ContactByEmailMember.mvc.js:686-722; app/src/pages/ContactByEmailMember/hooks/useContactByEmailMemberSubmit.ts:52-65; migration/app-shell.spec.md:349, :384 (U17)<br>U17. The EmailHost payload is F1 (row 068). |
| 138 | BR-UBTCON-047 | title "Contact the <name> household" for a household, else "Contact Member" | config.title with the same condition | `match` | BR-UBTCON-047; app/src/pages/ContactByEmailMember/config.ts:10 |

**Strings**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 075 | strings of the screen | "Add a message", "Add a subject", "Contact the", "Contact Member", "Your message has been sent." | found in config.ts:10,12 and hook:66 | `match` | app/src/pages/ContactByEmailMember/<br>all strings found |

### 2.3 ContactByEmailOneSchoolGlobal

Route `/UBTConnect/ContactByEmailOneSchoolGlobal`, React screen `app/src/pages/ContactByEmailOneSchoolGlobal/ContactByEmailOneSchoolGlobalPage.tsx`, submit in `hooks/useContactByEmailOneSchoolGlobalSubmit.ts`. Board: `build`, built (V4c, user 2026-10-14). TST file: `UBTConnect.ContactFlow.ContactByEmailOneSchoolGlobal.mvc.js`.

**Identity**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 076 | route + roles | roles Registered, UBTOne_User; URL structure QueryString; route /UBTConnect/ContactByEmailOneSchoolGlobal | route MEMBER_ROUTE (member, enforce) (app.md); page default export ContactByEmailOneSchoolGlobal | `match` | app/src/pages/ContactByEmailOneSchoolGlobal/ContactByEmailOneSchoolGlobalPage.tsx:18; TST UBTConnect.ContactFlow.ContactByEmailOneSchoolGlobal.mvc.js:588 (checkRegistered)<br>Registered covers UBTOne_User; TST checks Registered only. |
| 077 | input parameters | pack inputs: In_EmailTo (mandatory), In_ContactName (mandatory) | inputs.ts reads the query string by the original names | `match` | app/src/pages/ContactByEmailOneSchoolGlobal/inputs.ts |

**Data**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 078 | local variable IsLoading | IsLoading: Boolean | const [isLoading,setIsLoading]=useState(false) in submit hook | `match` | app/src/pages/ContactByEmailOneSchoolGlobal/hooks/useContactByEmailOneSchoolGlobalSubmit.ts |
| 079 | Layout_DetailPage In_AlignTitleLeft/In_IsPrimaryColor | In_AlignTitleLeft=True, In_IsPrimaryColor=True | DetailLayoutContainer inAlignTitleLeft inIsPrimaryColor={config.isPrimaryColor} | `match` | app/src/pages/ContactByEmailOneSchoolGlobal/ContactByEmailOneSchoolGlobalPage.tsx:26-29 |
| 091 | server action SendContactMemberEmail | as ContactByEmailMember | shared mock components/contact/ContactEmailForm/mocks.ts; this screen mocks.ts handlers=[] | `mock-only` | app/src/components/contact/ContactEmailForm/mocks.ts:15-21; app/src/pages/ContactByEmailOneSchoolGlobal/mocks.ts:7; CR-ContactByEmailOneSchoolGlobal-1; migration/knowledge/auto-decisions-2026-10-15.md:25<br>Production need as row 073: ServiceAPISendContactMemberEmail and Connect_Communication_CS SendContactMemberEmail (BR-C2SVC-066). |
| 092 | client variables (data.md) | none | - | `match` | pack/data.md (client variables: none); the TST handler reads no client variable |

**UI tree**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 080 | Layout_DetailPage title | Placeholder_Header_Title expr: "Email" | placeholderHeaderTitle <span data-expression>{config.title}</span>; config.title "Email" | `match` | app/src/pages/ContactByEmailOneSchoolGlobal/config.ts |
| 081 | Placeholder_CommonUI_Inside_Layout | not in pack (React comment: empty) | useNoCommonUi() | `match` | app/src/pages/ContactByEmailOneSchoolGlobal/ContactByEmailOneSchoolGlobalPage.tsx:19; TST UBTConnect.ContactFlow.ContactByEmailOneSchoolGlobal.mvc.js:400 (PlaceholderContent.Empty)<br>TST passes an empty placeholder; React useNoCommonUi() matches. |
| 083 | ContactByEmailForm args | In_MessagePlaceholder="Add a message", In_Subject="", In_SubjectPlaceholder="Add a subject", In_UseDynamicTextAreaSubject=True, IsLoading | form: {inSubjectPlaceholder, inMessagePlaceholder, inSubject:'', inUseDynamicTextAreaSubject:true} | `match` | app/src/pages/ContactByEmailOneSchoolGlobal/config.ts:10-15 |
| 084 | header card image + names | container image Images.OneSchoolGlobal.URL External (class contact-by-email__header__img); In_ContactName (Neutral10/Base/Bold); text " " (Neutral7/XS) | ContactHeaderCard imageSrc=osImage("img/UBTConnectLibrary.OneSchoolGlobal.svg") title=In_ContactName subtitle=" " | `match` | app/src/pages/ContactByEmailOneSchoolGlobal/ContactByEmailOneSchoolGlobalPage.tsx:33-37; TST UBTConnect.ContactFlow.ContactByEmailOneSchoolGlobal.mvc.js:288 (img/UBTConnectLibrary.OneSchoolGlobal.svg)<br>Asset path from lib/os-assets.manifest.json |

**Screen actions**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 085 | Handler_SubmitForm: SendContactMemberEmail | call-server SendContactMemberEmail(In_UI_ContactByEmailForm=ContactByEmailForm) | await sendContactMemberEmail(sent) | `match` | app/src/pages/ContactByEmailOneSchoolGlobal/hooks/useContactByEmailOneSchoolGlobalSubmit.ts:41; TST UBTConnect.ContactFlow.ContactByEmailOneSchoolGlobal.mvc.js:497 |
| 086 | Handler_SubmitForm: IsLoading = True; Subject/Message into ContactByEmailForm | assign IsLoading=True; ContactByEmailForm.Subject=Event_Subject; .Message=Event_Message | setIsLoading(true); const sent = { ...form, subject: eventSubject, message: eventMessage } | `match` | app/src/pages/ContactByEmailOneSchoolGlobal/hooks/useContactByEmailOneSchoolGlobalSubmit.ts:38-39 |
| 087 | Handler_SubmitForm: feedback + navigate | JS ScheduleFeedbackMessageAfterTransition("Your message has been sent.") (setTimeout 500 ms, showFeedbackMessage(Message,1)); navigate Previous Screen UseHistory | scheduleFeedbackMessageAfterTransition("Your message has been sent."); navigateBack() | `match` | app/src/pages/ContactByEmailOneSchoolGlobal/hooks/useContactByEmailOneSchoolGlobalSubmit.ts:47-48 |
| 088 | Handler_SubmitForm: error path | no exception handler in the Handler; IsLoading stays True | catch(error){ raiseToFlowHandler(error) } ; isLoading never reset | `match` | app/src/pages/ContactByEmailOneSchoolGlobal/hooks/useContactByEmailOneSchoolGlobalSubmit.ts; TST UBTConnect.ContactFlow.ContactByEmailOneSchoolGlobal.mvc.js:468-522 (no exception handler); migration/knowledge/auto-decisions-2026-10-15.md:23 (Q3 fact: ContactFlow.handleError), :26<br>IsLoading stays True after an error, as on TST. |
| 089 | Handler_SubmitForm: zOnApplicationEvent_Wrapper | call zOnApplicationEvent_Wrapper(EventId=ApplicationEvents_Directory.EmailHousehold) (AttachmentJSON not set -> "") | zOnApplicationEvent_Wrapper(EmailHousehold, '') -> log.info including AttachmentJSON | `differs` | app/src/pages/ContactByEmailOneSchoolGlobal/hooks/useContactByEmailOneSchoolGlobalSubmit.ts:46; app/src/pages/ContactByEmailOneSchoolGlobal/actions.ts:18-20; TST UBTConnect.ContactFlow.ContactByEmailOneSchoolGlobal.mvc.js:501 (zOnApplicationEvent_Wrapper(emailHousehold, "")); Connect2_LegacyShared.controller.js:7567-7601 (zOnApplicationEvent_Wrapper: GetAppEventName, then UBT_AppManager AzureInsights_CreateCustomEvent); migration/app-shell.spec.md:349, :384 (U17)<br>U17: logged only. Production needs the App Insights custom event (name from GetAppEventName, empty attachment). |
| 090 | Handler_SubmitForm: error path position | no handler; nodes after the send are skipped on exception | try only around the send; on error raiseToFlowHandler + return (wrapper, message, navigation skipped) | `match` | app/src/pages/ContactByEmailOneSchoolGlobal/hooks/useContactByEmailOneSchoolGlobalSubmit.ts:40-45; TST UBTConnect.ContactFlow.ContactByEmailOneSchoolGlobal.mvc.js:497-501<br>Same result as the other screens (error stops the flow) |

**Validations**

No row.

**Business logic**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 082 | ScreenEvent_OnInitialize | ContactMember=In_ContactName; EmailTo=In_EmailTo; FirstName=In_ContactName | useState(()=>({contactMember:In_ContactName, emailTo:In_EmailTo, firstName:In_ContactName, subject:'', message:''})) | `match` | app/src/pages/ContactByEmailOneSchoolGlobal/hooks/useContactByEmailOneSchoolGlobalSubmit.ts:27-35 |
| 139 | BR-UBTCON-048 | member-to-member service; audited as EmailHousehold | sendContactMemberEmail (mock); the event goes to the log only | `differs` | BR-UBTCON-048; TST UBTConnect.ContactFlow.ContactByEmailOneSchoolGlobal.mvc.js:497, :501; migration/app-shell.spec.md:349, :384 (U17)<br>U17. Rows 085, 089, 091. |

**Strings**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 093 | strings of the screen | "Add a message", "Add a subject", "Email", "Your message has been sent." | found in config.ts:8,12-13 and hook:47 | `match` | app/src/pages/ContactByEmailOneSchoolGlobal/<br>all strings found |

### 2.4 ContactByEmailOrbitHelpdesk

Route `/UBTConnect/ContactByEmailOrbitHelpdesk`, React screen `app/src/pages/ContactByEmailOrbitHelpdesk/ContactByEmailOrbitHelpdeskPage.tsx`, submit in `hooks/useContactByEmailOrbitHelpdeskSubmit.ts`. Board: `build`, built (Orbit screens, user 2026-10-16). TST file: `UBTConnect.ContactFlow.ContactByEmailOrbitHelpdesk.mvc.js`.

**Identity**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 094 | route + roles | roles Registered, UBTOne_User; URL structure QueryString; route /UBTConnect/ContactByEmailOrbitHelpdesk | route MEMBER_ROUTE (member, enforce) (app.md); page default export ContactByEmailOrbitHelpdesk | `match` | app/src/pages/ContactByEmailOrbitHelpdesk/ContactByEmailOrbitHelpdeskPage.tsx:18; TST UBTConnect.ContactFlow.ContactByEmailOrbitHelpdesk.mvc.js:659 (checkRegistered)<br>Registered covers UBTOne_User; TST checks Registered only. |
| 095 | input parameters | pack inputs: In_EventId (LongInt), In_MilestoneId, In_TargetMemberId (LongInt), In_Subject, In_MilestoneTitle, In_EventName, In_HostName, In_HostEmail, In_FormattedDateTime (all optional) | inputs.ts reads the query string by the original names | `match` | app/src/pages/ContactByEmailOrbitHelpdesk/inputs.ts |

**Data**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 096 | local variable IsLoading | IsLoading: Boolean | const [isLoading,setIsLoading]=useState(false) in submit hook | `match` | app/src/pages/ContactByEmailOrbitHelpdesk/hooks/useContactByEmailOrbitHelpdeskSubmit.ts |
| 097 | Layout_DetailPage In_AlignTitleLeft/In_IsPrimaryColor | In_AlignTitleLeft=True, In_IsPrimaryColor=True | DetailLayoutContainer inAlignTitleLeft inIsPrimaryColor={config.isPrimaryColor} | `match` | app/src/pages/ContactByEmailOrbitHelpdesk/ContactByEmailOrbitHelpdeskPage.tsx:26-29 |
| 109 | server action SendContactEmail (ref-server, Connect2_OrbitMobile_BL) | 8 inputs; output IsSuccess=True (not read by the screen) | repository.sendContactEmail -> callAction UBTConnect ActionSendContactEmail -> IsSuccess; mock contractHandler in pages/ContactByEmailOrbitHelpdesk/mocks.ts:15-23 (collection UBTConnect.sentOrbitContactEmails, recipient ORBIT_HELPDESK_EMAIL if IsContactHelpdesk)  | `mock-only` | app/src/api/message/repository.ts:73-75; app/src/pages/ContactByEmailOrbitHelpdesk/mocks.ts:13-23; migration/knowledge/auto-decisions-2026-10-16.md:65<br>Production needs the server action SendContactEmail of Connect2_OrbitMobile_BL (output IsSuccess; the server picks the helpdesk recipient; KB: not captured). The same handler is also in ContactByEmailOrbitHost/mocks.ts (duplicate, same contract). |
| 110 | client variables (data.md) | none | - | `match` | pack/data.md (client variables: none); the TST handler reads no client variable |

**UI tree**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 098 | Layout_DetailPage title | Placeholder_Header_Title expr: "Email" | placeholderHeaderTitle <span data-expression>{config.title}</span>; config.title "Email" | `match` | app/src/pages/ContactByEmailOrbitHelpdesk/config.ts |
| 099 | Placeholder_CommonUI_Inside_Layout | not in pack (React comment: empty) | useNoCommonUi() | `match` | app/src/pages/ContactByEmailOrbitHelpdesk/ContactByEmailOrbitHelpdeskPage.tsx:19; TST UBTConnect.ContactFlow.ContactByEmailOrbitHelpdesk.mvc.js:423 (PlaceholderContent.Empty)<br>TST passes an empty placeholder; React useNoCommonUi() matches. |
| 101 | ContactByEmailForm args | In_MessagePlaceholder="Add a message", In_Subject=In_Subject, In_SubjectPlaceholder="Add a subject", In_UseDynamicTextAreaSubject=True, IsLoading | form: {inSubjectPlaceholder, inMessagePlaceholder, inSubject: inputs.In_Subject, inUseDynamicTextAreaSubject:true} | `match` | app/src/pages/ContactByEmailOrbitHelpdesk/config.ts:11-16 |
| 102 | header card Orbit logo + "Orbit Helpdesk" | image Images.Orbit_Logo.URL External; text "Orbit Helpdesk" (Neutral10/Base/Bold) | ContactHeaderCard imageSrc=osImage("img/Connect2_OrbitMobile_MUI.Orbit_Logo.svg") title="Orbit Helpdesk" (no subtitle) | `match` | app/src/pages/ContactByEmailOrbitHelpdesk/ContactByEmailOrbitHelpdeskPage.tsx:13,36; TST UBTConnect.ContactFlow.ContactByEmailOrbitHelpdesk.mvc.js:358 (img/Connect2_OrbitMobile_MUI.Orbit_Logo.svg) |

**Screen actions**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 103 | Handler_SubmitForm: AppManager_GetCachedUserInfo | call AppManager_GetCachedUserInfo() before the send | const user = appManager_GetCachedUserInfo() inside try, before sendContactEmail | `match` | app/src/pages/ContactByEmailOrbitHelpdesk/hooks/useContactByEmailOrbitHelpdeskSubmit.ts:36; TST UBTConnect.ContactFlow.ContactByEmailOrbitHelpdesk.mvc.js:513-550<br>Same order as TST: the cached user info comes before the send. |
| 104 | Handler_SubmitForm: SendContactEmail args | SendContactEmail(IsContactHelpdesk=True, EventId=In_EventId, MilestoneId=In_MilestoneId, TargetMemberId=In_TargetMemberId, Subject=Form.Subject, UserSubject="", Message=Form.Message, EmailInfo={EventName, SenderFullName=FirstName+" "+LastName, HostName, HostEmail, MilestoneName=In_MilestoneTitle, FormattedDateTime}). Pack text also shows an extra arg "None=TextToInteger(MemberId)" and cuts HostEmail | sendContactEmail({isContactHelpdesk:true, eventId, milestoneId, targetMemberId, subject:eventSubject, userSubject:"", message:eventMessage, emailInfo:{EventName, SenderFullName:`${First} ${Last}`, HostName, HostEmail, MilestoneName, FormattedDateTime}}) | `match` | app/src/pages/ContactByEmailOrbitHelpdesk/hooks/useContactByEmailOrbitHelpdeskSubmit.ts:37-53; TST UBTConnect.ContactFlow.ContactByEmailOrbitHelpdesk.mvc.js:550-558 (8 arguments; EmailInfo: EventName, SenderFullName = FirstName + " " + LastName, HostName, HostEmail, MilestoneName, FormattedDateTime)<br>The DEV argument "None=TextToInteger(MemberId)" is not on TST (section 6.1). SenderEmail keeps its default "" on TST and in the mapper. |
| 105 | Handler_SubmitForm: OnApplicationEvent_ContactHelpdesk | call OnApplicationEvent_ContactHelpdesk(AuditPayload={EventId=In_EventId, EventTitle=In_EventName, Subject, Message}) | onApplicationEvent_ContactHelpdesk(In_EventId) -> log.info({EventId: ApplicationEvents_Orbit_ContactHelpdesk, OrbitEventId}) | `partial` | app/src/pages/ContactByEmailOrbitHelpdesk/hooks/useContactByEmailOrbitHelpdeskSubmit.ts:54; app/src/pages/ContactByEmailOrbitHelpdesk/actions.ts:7-17; TST UBTConnect.ContactFlow.ContactByEmailOrbitHelpdesk.mvc.js:565-571 (AuditPayload_ContactHelpdeskRec: EventId, EventTitle = In_EventName, Subject, Message); Connect2_OrbitMobile_MUI.controller.js:5642-5685; Connect2_LegacyShared.controller.js:7567-7601 (zOnApplicationEvent_Wrapper: GetAppEventName, then UBT_AppManager AzureInsights_CreateCustomEvent); migration/app-shell.spec.md:349, :384 (U17)<br>The log-only call is U17. React passes 1 of 4 payload fields; production needs EventTitle, Subject and Message too (F1, Q1). BR-UBTCON-049.<br>F1 (info) |
| 106 | Handler_SubmitForm: IsLoading = True; Subject/Message into ContactByEmailForm | assign IsLoading=True; ContactByEmailForm.Subject=Event_Subject; .Message=Event_Message | setIsLoading(true); const sent = { ...form, subject: eventSubject, message: eventMessage } | `match` | app/src/pages/ContactByEmailOrbitHelpdesk/hooks/useContactByEmailOrbitHelpdeskSubmit.ts:34-35 |
| 107 | Handler_SubmitForm: feedback + navigate | JS ScheduleFeedbackMessageAfterTransition("Your message has been sent.") (setTimeout 500 ms, showFeedbackMessage(Message,1)); navigate Previous Screen UseHistory | scheduleFeedbackMessageAfterTransition("Your message has been sent."); navigateBack() | `match` | app/src/pages/ContactByEmailOrbitHelpdesk/hooks/useContactByEmailOrbitHelpdeskSubmit.ts:55-56 |
| 108 | Handler_SubmitForm: error path | no exception handler in the Handler; IsLoading stays True | catch(error){ raiseToFlowHandler(error) } ; isLoading never reset | `match` | app/src/pages/ContactByEmailOrbitHelpdesk/hooks/useContactByEmailOrbitHelpdeskSubmit.ts; TST UBTConnect.ContactFlow.ContactByEmailOrbitHelpdesk.mvc.js:513-593 (no exception handler); migration/knowledge/auto-decisions-2026-10-15.md:23 (Q3 fact: ContactFlow.handleError), :26<br>IsLoading stays True after an error, as on TST. |

**Validations**

No row.

**Business logic**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 100 | ScreenEvent_OnInitialize | FirstName=""; ContactMember=""; EmailTo=""; Subject=In_Subject | not kept: hook comment says Handler_SubmitForm overwrites Subject and Message and nothing else reads the record | `match` | app/src/pages/ContactByEmailOrbitHelpdesk/hooks/useContactByEmailOrbitHelpdeskSubmit.ts:17-19; TST UBTConnect.ContactFlow.ContactByEmailOrbitHelpdesk.mvc.js:497-500 (assignments); :550 (the send reads only Subject and Message of the record)<br>Nothing on TST reads FirstName, ContactMember or EmailTo of the record, so the omission has no effect. |
| 140 | BR-UBTCON-049 | Orbit SendContactEmail with IsContactHelpdesk True; sender name from AppManager_GetCachedUserInfo | sendContactEmail({isContactHelpdesk: true, SenderFullName from appManager_GetCachedUserInfo}) | `match` | BR-UBTCON-049; TST UBTConnect.ContactFlow.ContactByEmailOrbitHelpdesk.mvc.js:513-558; app/src/pages/ContactByEmailOrbitHelpdesk/hooks/useContactByEmailOrbitHelpdeskSubmit.ts:36-53<br>The audit of this screen is row 105. |

**Strings**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 111 | strings of the screen | "Add a message", "Add a subject", "Email", "Orbit Helpdesk", "Your message has been sent." | found in config.ts:9,12-13, Page.tsx:36, hook:55 | `match` | app/src/pages/ContactByEmailOrbitHelpdesk/<br>all strings found |

### 2.5 ContactByEmailOrbitHost

Route `/UBTConnect/ContactByEmailOrbitHost`, React screen `app/src/pages/ContactByEmailOrbitHost/ContactByEmailOrbitHostPage.tsx`, submit in `hooks/useContactByEmailOrbitHostSubmit.ts`. Board: `build`, built (Orbit screens, user 2026-10-16). TST file: `UBTConnect.ContactFlow.ContactByEmailOrbitHost.mvc.js`.

**Identity**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 112 | route + roles | roles Registered, UBTOne_User; URL structure QueryString; route /UBTConnect/ContactByEmailOrbitHost | route MEMBER_ROUTE (member, enforce) (app.md); page default export ContactByEmailOrbitHost | `match` | app/src/pages/ContactByEmailOrbitHost/ContactByEmailOrbitHostPage.tsx:18; TST UBTConnect.ContactFlow.ContactByEmailOrbitHost.mvc.js:764 (checkRegistered)<br>Registered covers UBTOne_User; TST checks Registered only. |
| 113 | input parameters | pack inputs: In_Subject, In_MilestoneTitle, In_EventName, In_HostName, In_HostEmail, In_FormattedDateTime, In_ContactLocality, In_ContactCountry, In_AvatarURL, In_EntityType, In_EntityId, In_Surname (all mandatory) | inputs.ts reads the query string by the original names | `match` | app/src/pages/ContactByEmailOrbitHost/inputs.ts |

**Data**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 114 | local variable IsLoading | IsLoading: Boolean | const [isLoading,setIsLoading]=useState(false) in submit hook | `match` | app/src/pages/ContactByEmailOrbitHost/hooks/useContactByEmailOrbitHostSubmit.ts |
| 115 | Layout_DetailPage In_AlignTitleLeft/In_IsPrimaryColor | In_AlignTitleLeft=True, In_IsPrimaryColor=False | DetailLayoutContainer inAlignTitleLeft inIsPrimaryColor={config.isPrimaryColor} | `match` | app/src/pages/ContactByEmailOrbitHost/ContactByEmailOrbitHostPage.tsx:26-29 |
| 126 | server action SendContactEmail | as Helpdesk | mock contractHandler in pages/ContactByEmailOrbitHost/mocks.ts:17-25 (duplicate of the Helpdesk handler) | `mock-only` | app/src/api/message/repository.ts:73-75; app/src/pages/ContactByEmailOrbitHost/mocks.ts:15-25; migration/knowledge/auto-decisions-2026-10-16.md:65<br>Production need as row 109; the host recipient is EmailInfo.HostEmail from the caller (BR-UBTCON-050). Duplicate of the handler of row 109. |
| 127 | client variables (data.md) | none | - | `match` | pack/data.md (client variables: none); the TST handler reads no client variable |

**UI tree**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 116 | Layout_DetailPage title | Placeholder_Header_Title expr: "Contact the " + In_Surname + " household" | placeholderHeaderTitle <span data-expression>{config.title}</span>; config.title `Contact the ${In_Surname} household` | `match` | app/src/pages/ContactByEmailOrbitHost/config.ts |
| 117 | Placeholder_CommonUI_Inside_Layout | not in pack (React comment: empty) | useNoCommonUi() | `match` | app/src/pages/ContactByEmailOrbitHost/ContactByEmailOrbitHostPage.tsx:19; TST UBTConnect.ContactFlow.ContactByEmailOrbitHost.mvc.js:554 (PlaceholderContent.Empty)<br>TST passes an empty placeholder; React useNoCommonUi() matches. |
| 119 | ContactByEmailForm args | In_MessagePlaceholder="Add a message", In_SubjectPlaceholder="Add a subject", In_UseDynamicTextAreaSubject=True, IsLoading (no In_Subject) | form: {inSubjectPlaceholder, inMessagePlaceholder, inUseDynamicTextAreaSubject:true} | `match` | app/src/pages/ContactByEmailOrbitHost/config.ts:13-17 |
| 120 | person card with In_HostName | same as Member card but CustomText In_Text=In_HostName; locality+country | ContactPersonCard name={In_HostName} ... | `match` | app/src/pages/ContactByEmailOrbitHost/ContactByEmailOrbitHostPage.tsx:33-40 |

**Screen actions**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 121 | Handler_SubmitForm: SendContactEmail args | SendContactEmail(IsContactHelpdesk=False, EventId default, MilestoneId "", TargetMemberId=NullIdentifier(), Subject=In_Subject, UserSubject=Form.Subject, Message=Form.Message, EmailInfo={EventName, SenderFullName "", SenderEmail "", HostName, HostEmail, MilestoneName, FormattedDateTime}) | sendOrbitContactEmail({isContactHelpdesk:false, eventId:"0", milestoneId:"", targetMemberId:"0", subject:In_Subject, userSubject, message, emailInfo:{EventName, SenderFullName:"", HostName, HostEmail, MilestoneName, FormattedDateTime}}); mapper sets SenderEmail "" | `match` | app/src/pages/ContactByEmailOrbitHost/hooks/useContactByEmailOrbitHostSubmit.ts:21-43; app/src/api/message/mapper.ts:101-113; TST UBTConnect.ContactFlow.ContactByEmailOrbitHost.mvc.js:642-651 (false, 0, "", NullIdentifier as 0, In_Subject, Form.Subject, Form.Message, EmailInfo with SenderFullName "" and SenderEmail "")<br>BR-UBTCON-050 |
| 122 | Handler_SubmitForm: IsLoading = True; Subject/Message into ContactByEmailForm | assign IsLoading=True; ContactByEmailForm.Subject=Event_Subject; .Message=Event_Message | setIsLoading(true); const sent = { ...form, subject: eventSubject, message: eventMessage } | `match` | app/src/pages/ContactByEmailOrbitHost/hooks/useContactByEmailOrbitHostSubmit.ts:60-61 |
| 123 | Handler_SubmitForm: feedback + navigate | JS ScheduleFeedbackMessageAfterTransition("Your message has been sent.") (setTimeout 500 ms, showFeedbackMessage(Message,1)); navigate Previous Screen UseHistory | scheduleFeedbackMessageAfterTransition("Your message has been sent."); navigateBack() | `match` | app/src/pages/ContactByEmailOrbitHost/hooks/useContactByEmailOrbitHostSubmit.ts:63-64 |
| 124 | Handler_SubmitForm: error path | no exception handler in the Handler; IsLoading stays True | catch(error){ raiseToFlowHandler(error) } ; isLoading never reset | `match` | app/src/pages/ContactByEmailOrbitHost/hooks/useContactByEmailOrbitHostSubmit.ts; TST UBTConnect.ContactFlow.ContactByEmailOrbitHost.mvc.js:611-674 (no exception handler); migration/knowledge/auto-decisions-2026-10-15.md:23 (Q3 fact: ContactFlow.handleError), :26<br>IsLoading stays True after an error, as on TST. |
| 125 | [DISABLED] OnApplicationEvent_ContactHelpdesk | [DISABLED] call OnApplicationEvent_ContactHelpdesk (unreachable) | not implemented (hook comment: "No audit event") | `n/a` | app/src/pages/ContactByEmailOrbitHost/hooks/useContactByEmailOrbitHostSubmit.ts:52-54; TST UBTConnect.ContactFlow.ContactByEmailOrbitHost.mvc.js:611-674 (no OnApplicationEvent call); BR-UBTCON-050<br>dead in the model. TST has no call either (section 6.1). |

**Validations**

No row.

**Business logic**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 118 | ScreenEvent_OnInitialize | EmailTo = In_HostEmail | not kept: hook comment says the record is not sent and nothing reads it | `match` | app/src/pages/ContactByEmailOrbitHost/hooks/useContactByEmailOrbitHostSubmit.ts:49-50; TST UBTConnect.ContactFlow.ContactByEmailOrbitHost.mvc.js:706 (the only write of EmailTo); :642 (the send reads only Subject and Message)<br>Nothing on TST reads EmailTo of the record, so the omission has no effect. |
| 141 | BR-UBTCON-050 | send to the host e-mail of the caller; no event id; no audit | sendOrbitContactEmail({isContactHelpdesk: false, eventId "0", HostEmail}); no audit call | `match` | BR-UBTCON-050; TST UBTConnect.ContactFlow.ContactByEmailOrbitHost.mvc.js:642-651; app/src/pages/ContactByEmailOrbitHost/hooks/useContactByEmailOrbitHostSubmit.ts:21-43, 52-54 |

**Strings**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 128 | strings of the screen | "Add a subject", "Add a message", "Contact the", "Your message has been sent.", "Fetched Server Side" | all found in config.ts:11,14-15 and hook:63 except "Fetched Server Side" | `match` | app/src/pages/ContactByEmailOrbitHost/<br>"Fetched Server Side" is a comment on the SenderFullName/SenderEmail assignment in the model; React uses "" (row below) |
| 129 | string "Fetched Server Side" | comment text after ""// in EmailInfo.SenderFullName / SenderEmail | not found (searched: Fetched Server Side) | `match` | app/src/ (grep -rn); TST UBTConnect.ContactFlow.ContactByEmailOrbitHost.mvc.js:642-651 (senderFullNameAttr "", senderEmailAttr "")<br>A model comment, not UI text. TST and React send "". |

### 2.6 ContactByEmailContacts (not built)

Board decision: `skip` (V7, skip:dead, user 2026-10-14). The only link is in the block `Locality_LocalityContacts`, and no TST screen embeds that block.

On DEV the screen shows an avatar or initials, the contact name and a description. Below is `ContactByEmailForm` with the caller subject. Send calls `SendContactLDMCoordinatorEmail` to `In_EmailTo` and records no audit (BR-UBTCON-044).

TST fact: the compiled file `UBTConnect.ContactFlow.ContactByEmailContacts.mvc.js` exists (815 lines, `checkRegistered` at :658). `Locality_LocalityContacts` is compiled too and links to the screen. No other compiled file references the block, so TST users cannot reach the screen (§6.1). The board decision stays valid.

A build needs `ContactByEmailForm`, the header card with `In_IsAvatarImageFormat`, the `SendContactLDMCoordinatorEmail` call and its mock. React lists the route in `app/src/app/routes.generated.ts:75` and has no screen file.

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 130 | board decision (screen not built) | board line: \| ContactByEmailContacts \| /UBTConnect/ContactByEmailContacts \|  \| 29 \|  \| skip \| V7 · skip:dead · only link in Locality_LocalityContacts, not embedded on TST; revisit if the block appears (user, 2026-10-14) \| - \|  \| (migration/board.md:55) | not found (no folder app/src/pages/ContactByEmailContacts; searched: ContactByEmailContacts) | `n/a` | migration/board.md:55; migration/board.md:55<br>skip (V7, user 2026-10-14). The TST fact is in section 6.1. |
| 135 | BR-UBTCON-044 | send through SendContactLDMCoordinatorEmail to In_EmailTo; no audit | - | `n/a` | BR-UBTCON-044; migration/board.md:55<br>skip (V7, user 2026-10-14) |

## 3. Blocks of the flow

### 3.1 ContactByEmailForm

Own block, used by the five built screens and by the unbuilt ContactByEmailContacts. React: `app/src/components/contact/ContactEmailForm/ContactEmailForm.tsx`. TST file: `UBTConnect.ContactFlow.ContactByEmailForm.mvc.js`.

**Identity**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 001 | block inputs | IsLoading Bool; In_SubjectPlaceholder, In_MessagePlaceholder (mandatory); In_Subject; In_UseDynamicTextAreaSubject; In_MessageLabel="Message" | props isLoading=false, inSubjectPlaceholder="", inMessagePlaceholder="", inSubject="", inUseDynamicTextAreaSubject=false, inMessageLabel="Message" (ContactEmailForm.tsx:50-61) | `match` | app/src/components/contact/ContactEmailForm/ContactEmailForm.tsx:15-61<br>Block is public=False; used by 6 screens incl. the unbuilt Contacts |
| 002 | event Event_SubmitForm (mandatory) | Event_SubmitForm(Event_Subject, Event_Message) both mandatory | onEventSubmitForm?: (subject, message) => void (optional prop) | `match` | app/src/components/contact/ContactEmailForm/ContactEmailForm.tsx:33-34; hooks/*Submit.ts: LDM :64, Member :76, OneSchoolGlobal :54, Helpdesk :65, Host :72-73<br>The React prop is optional, but all five pages pass onEventSubmitForm and onBeforeSubmitForm. |

**Data**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 003 | local variables Subject, Message | Subject: Text; Message: Text | const [subject,setSubject]=useState(inSubject); const [message,setMessage]=useState('') | `match` | app/src/components/contact/ContactEmailForm/ContactEmailForm.tsx:67-69 |

**UI tree**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 005 | Div_Content + CustomContainer padding | container #Div_Content > CustomContainer Padding H=Base, Top=Small, Bottom=Base > CustomContainer Margin Bottom=Base > Placeholder_ContactCard | <div id={contentId}> <CustomContainer PaddingSize{H:Base,Top:Small,Bottom:Base}> <CustomContainer MarginSize{Bottom:Base}><div>{children}</div> | `match` | app/src/components/contact/ContactEmailForm/ContactEmailForm.tsx:86-94 |
| 006 | Form1 | form #Form1 style="form" | <form className="form OSFillParent" data-form onSubmit=preventDefault> | `match` | app/src/components/contact/ContactEmailForm/ContactEmailForm.tsx:95-101; TST UBTConnect.ContactFlow.ContactByEmailForm.mvc.js<br>React cancels the native submit; TST has no submit action on the form. |
| 007 | label Subject | label for=Input_Subject, text "Subject" | <label htmlFor={subjectInputId}>Subject</label> | `match` | app/src/components/contact/ContactEmailForm/ContactEmailForm.tsx:103-105<br>Label always points to Input_Subject id, also when the textarea variant is shown (same as OS: for=Input_Subject) |
| 008 | If In_UseDynamicTextAreaSubject | if true: CustomContainer(FontSize=Small) > DynamicTextArea(In_IsBounded=True, In_Text=Subject) > textarea; else input | {inUseDynamicTextAreaSubject ? <CustomContainer FontSize Small><DynamicTextArea inIsBounded inText={subject}> ... : <input>} | `match` | app/src/components/contact/ContactEmailForm/ContactEmailForm.tsx:106-146 |
| 009 | If branch true: DynamicTextArea + TextArea_Subject | DynamicTextArea args In_IsBounded=True, In_Text=Subject | <DynamicTextArea inIsBounded inText={subject}><span><textarea ...> | `match` | app/src/components/contact/ContactEmailForm/ContactEmailForm.tsx:107-123 |
| 010 | If branch false: Input_Subject | input #Input_Subject var=Subject InputType=Text Prompt=In_SubjectPlaceholder style=form-control | <input type="text" className="form-control OSFillParent" placeholder={inSubjectPlaceholder}> | `match` | app/src/components/contact/ContactEmailForm/ContactEmailForm.tsx:128-143 |
| 015 | HasSubject / HasSubject2 + InputCounter (subject) | if In_Subject <> "" (empty branch) else InputCounter(In_InitialLength=0, In_InputId=TextArea_Subject.Id / Input_Subject.Id). Pack block: Connect2_LegacyShared Reusable2.InputCounter | counter = (id)=> inSubject !== '' ? null : <InputCounter inInputId inInitialLength={0}/> ; InputCounter @origin UBTConnectLibrary.ConnectPatterns.InputCounter (components/ui/InputCounter/InputCounter.tsx:1) | `match` | app/src/components/contact/ContactEmailForm/ContactEmailForm.tsx:71-72,124,144; TST UBTConnect.ContactFlow.ContactByEmailForm.mvc.js:415-418, :470-473<br>DEV names Connect2_LegacyShared.Reusable2.InputCounter; TST and React use UBTConnectLibrary.ConnectPatterns.InputCounter (section 6.1). |
| 016 | TextArea_WithCounter + message label | block TextArea_WithCounter(In_InitialLength=0) > label for=TextArea_Message expr In_MessageLabel; textarea | <TextAreaWithCounter inInitialLength={0}><label htmlFor={messageId}><span data-expression>{inMessageLabel}</span></label> | `match` | app/src/components/contact/ContactEmailForm/ContactEmailForm.tsx:149-152 |
| 019 | FixedFooter | FixedFooter(ContentContainerId=Div_Content.Id, ExpectedFooterHeight="calc(2 * var(--space-base) + var(--ubt-button-height-m))", useBottomBar=False) | <FixedFooter useBottomBar={false} contentContainerId={contentId} expectedFooterHeight={FOOTER_HEIGHT}>; FOOTER_HEIGHT = same string | `match` | app/src/components/contact/ContactEmailForm/ContactEmailForm.tsx:40,173 |
| 020 | footer CustomContainer | Background=Neutral0, Padding General=Base, Shadow=ExtraSmallTop | <CustomContainer options={{Background:{BackgroundColor:UBT_Color.Neutral0},PaddingSize:{GeneralSizeId:UBT_Size.Base},ShadowId:UBT_Shadow.ExtraSmallTop}}> | `match` | app/src/components/contact/ContactEmailForm/ContactEmailForm.tsx:174-180 |
| 021 | ButtonLoading | ButtonLoading(IsLoading=IsLoading) > Button | <ButtonLoading isLoading={isLoading}> | `match` | app/src/components/contact/ContactEmailForm/ContactEmailForm.tsx:181 |
| 029 | Placeholder_ContactCard | placeholder-def Placeholder_ContactCard inside CustomContainer margin bottom Base | {children} in <div> | `match` | app/src/components/contact/ContactEmailForm/ContactEmailForm.tsx:92-94; TST UBTConnect.ContactFlow.ContactByEmailForm.mvc.js:287-293 (OSWidgets.Placeholder Placeholder_ContactCard)<br>TST renders the placeholder through the OSWidgets.Placeholder wrapper; React keeps one wrapper element. |

**Screen actions**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 013 | Subject input OnChange | no OnChange handler (variable binding only) | onChange={(e)=>setSubject(e.target.value)} (variable bind) | `match` | app/src/components/contact/ContactEmailForm/ContactEmailForm.tsx:139-141; TST UBTConnect.ContactFlow.ContactByEmailForm.mvc.js (no OnChange on the inputs, notes.md) |
| 014 | TextArea_Subject OnChange | no OnChange handler (variable binding only) | onChange={(e)=>setSubject(e.target.value)} (variable bind) | `match` | app/src/components/contact/ContactEmailForm/ContactEmailForm.tsx:118-120; TST UBTConnect.ContactFlow.ContactByEmailForm.mvc.js (no OnChange) |
| 018 | TextArea_Message OnChange | no OnChange handler (variable binding only) | onChange={(e)=>setMessage(e.target.value)} (variable bind) | `match` | app/src/components/contact/ContactEmailForm/ContactEmailForm.tsx:163-165; TST UBTConnect.ContactFlow.ContactByEmailForm.mvc.js (no OnChange) |
| 023 | Button buttonOnClick -> OnClick_SubmitForm | on buttonOnClick -> OnClick_SubmitForm | onButtonOnClick={onClickSubmitForm} | `match` | app/src/components/contact/ContactEmailForm/ContactEmailForm.tsx:185 |
| 024 | OnClick_SubmitForm | call AllowUpcomingNavigation(); trigger Event_SubmitForm(Event_Message=Message, Event_Subject=Subject) | onBeforeSubmitForm?.(); onEventSubmitForm?.(subject, message) | `match` | app/src/components/contact/ContactEmailForm/ContactEmailForm.tsx:75-78<br>React: AllowUpcomingNavigation comes from the caller page hook (allowUpcomingNavigation, platform/navigation) as prop onBeforeSubmitForm |
| 026 | Dialog_Navigation Event_OnBackNavigation -> OnBackNavigation_PreventNavigation | call PreventNavigation(NavigationEvent=Event_NavigationEvent) | onNavigation={onBackNavigationPreventNavigation}; preventNavigation(event) | `match` | app/src/components/contact/ContactEmailForm/ContactEmailForm.tsx:79-82,193; TST UBTConnect.ContactFlow.ContactByEmailForm.mvc.js:707-713 |

**Validations**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 011 | TextArea_Subject constraints (dynamic branch) | MaxLength=100 TextLines=1 Enabled=In_Subject="" and not IsLoading (DEV dump shows MaxLength=100, TextLines=1) | maxLength={100} rows={1} disabled={!subjectEnabled}  (subjectEnabled = inSubject==='' && !isLoading); no placeholder | `match` | app/src/components/contact/ContactEmailForm/ContactEmailForm.tsx:110-117,70; TST UBTConnect.ContactFlow.ContactByEmailForm.mvc.js:391-398; BR-UBTCON-042 |
| 012 | Input_Subject constraints (input branch) | InputType=Text MaxLength=100 Prompt=In_SubjectPlaceholder Enabled=In_Subject="" and not IsLoading | type="text" maxLength={100} placeholder={inSubjectPlaceholder} disabled={!subjectEnabled} aria-required="false" | `match` | app/src/components/contact/ContactEmailForm/ContactEmailForm.tsx:129-137,70; TST UBTConnect.ContactFlow.ContactByEmailForm.mvc.js:448-466; BR-UBTCON-042 |
| 017 | TextArea_Message constraints | MaxLength=1000 TextLines=3 Prompt=In_MessagePlaceholder Enabled=not IsLoading | maxLength={1000} rows={3} placeholder={inMessagePlaceholder} disabled={isLoading} | `match` | app/src/components/contact/ContactEmailForm/ContactEmailForm.tsx:154-161; TST UBTConnect.ContactFlow.ContactByEmailForm.mvc.js:547-565 (textLines 3); CR-ContactByEmailMember-2 rejected (auto-decisions-2026-10-15.md:24, :73, reviewed by the user)<br>React keeps rows 3 as TST renders it; the parity exemption covers the capture gap. |
| 022 | Button "Send" IsDisabled | ButtonText="Send", IsDisabled = not (Subject <> "" and Message <> "") | <ActionButton buttonText="Send" isDisabled={!(subject !== '' && message !== '')} | `match` | app/src/components/contact/ContactEmailForm/ContactEmailForm.tsx:182-186; TST UBTConnect.ContactFlow.ContactByEmailForm.mvc.js:655; BR-UBTCON-041<br>BR-UBTCON-041: a message of spaces counts as filled; React matches (no trim) |

**Business logic**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 004 | OnInitialize | assign Subject = In_Subject | useState(inSubject) // OnInitialize: Subject = In_Subject | `match` | app/src/components/contact/ContactEmailForm/ContactEmailForm.tsx:67-68<br>Message is not reset in OS; initial value "" |
| 025 | Dialog_Navigation condition | if Subject <> In_Subject or Trim(Message) <> "" show Dialog_Navigation (shared block of App_Common_Blocks_PopupDialogs) | {(subject !== inSubject \|\| message.trim() !== '') && <NavigationDialog variant="connect" ...>} | `match` | app/src/components/contact/ContactEmailForm/ContactEmailForm.tsx:190-197; TST UBTConnect.ContactFlow.ContactByEmailForm.mvc.js:699; BR-UBTCON-043<br>The internals of Dialog_Navigation belong to another flow (row 142). |
| 132 | BR-UBTCON-041 | "Send" stays disabled until subject and message are filled; spaces count as filled | isDisabled={!(subject !== "" && message !== "")}, no trim | `match` | BR-UBTCON-041; TST UBTConnect.ContactFlow.ContactByEmailForm.mvc.js:655; app/src/components/contact/ContactEmailForm/ContactEmailForm.tsx:182-186 |
| 133 | BR-UBTCON-042 | a caller subject locks the field; else the user types up to 100 characters; message up to 1000 | subjectEnabled = inSubject === "" && !isLoading; maxLength 100 and 1000 | `match` | BR-UBTCON-042; TST UBTConnect.ContactFlow.ContactByEmailForm.mvc.js:391-398, :448-466, :547-565; ContactEmailForm.tsx:70, 110-137, 154-161 |
| 134 | BR-UBTCON-043 | leaving with a changed subject or a typed message shows "Delete message?" and blocks the navigation; Send lets the next navigation through | NavigationDialog when subject !== inSubject or message.trim() !== ""; onBeforeSubmitForm = allowUpcomingNavigation | `match` | BR-UBTCON-043; TST UBTConnect.ContactFlow.ContactByEmailForm.mvc.js:699-713; ContactEmailForm.tsx:75-82, 190-197 |

**Strings**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 027 | Dialog header/body | "Delete message?" / "Are you sure you want to delete this message?" | header <span data-expression>Delete message?</span>; body Are you sure you want to delete this message? | `match` | app/src/components/contact/ContactEmailForm/ContactEmailForm.tsx:194-195; TST UBTConnect.ContactFlow.ContactByEmailForm.mvc.js:700-701 (Dialog_Navigation inputs {}); app/src/components/ui/Dialog/NavigationDialog.tsx:82-83; KB ui/common-blocks.md:28<br>Neither TST nor React sets ConfirmLabel or DIsmissLabel: both show the defaults "Yes" and "No". |
| 028 | Send / Subject / Message strings | "Send", "Subject", In_MessageLabel default "Message" | Send (:183), Subject (:104), Message (:57) | `match` | app/src/components/contact/ContactEmailForm/ContactEmailForm.tsx:57,104,183 |

### 3.2 Blocks of other flows

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 142 | Dialog_Navigation (App_Common_Blocks_PopupDialogs) | NavigationConfirmationDialog; ConfirmLabel "Yes", DIsmissLabel "No"; raises Event_OnBackNavigation | app/src/components/ui/Dialog/NavigationDialog.tsx | `n/a` | KB ui/common-blocks.md:28; pack/meta.json usedBlocks<br>owned by flow App_Common_Blocks_PopupDialogs, see its report |

- Dialog_Navigation: the form shows it with no inputs (rows 025 to 027, `match`). Its internals are checked in the report that covers App_Common_Blocks_PopupDialogs.
- The internals of the referenced UI blocks of UBTConnectLibrary and UBTConnect_Utils are not checked here. These blocks are Layout_DetailPage, CustomContainer, Columns_Three, CustomText, IconText, Icon, DynamicTextArea, InputCounter, TextArea_WithCounter, FixedFooter, ButtonLoading, Button and UBT_LazyImage. The rows check the arguments that the flow passes.

## 4. Shared blocks and actions

- AllowUpcomingNavigation and PreventNavigation (NavigationHandler): rows 024 and 026, `match`.
- AppManager_GetCachedUserInfo (UBT_AppManager): rows 044, 066 and 103, `match`.
- AddAuditEventDetailEvent, OnApplicationEvent_EmailHost, OnApplicationEvent_ContactHelpdesk (Connect2_OrbitMobile_MUI) and zOnApplicationEvent_Wrapper (Connect2_LegacyShared): rows 045, 046, 068, 070, 072, 089 and 105.
- On TST each of these app events ends in `AzureInsights_CreateCustomEvent` of UBT_AppManager. React writes a log entry only (U17).
- ScheduleFeedbackMessageAfterTransition (JavaScript node of each screen): rows 042, 064, 087, 107 and 123, `match`.
- ContactFlow.handleError (exception handler of the flow): rows 043, 065, 088, 108 and 124, `match`.

## 5. Findings

| Id | Severity | Screen / element | Finding | React location | Suggested fix |
|---|---|---|---|---|---|
| F1 | info | ContactByEmailMember / OnApplicationEvent_EmailHost; ContactByEmailOrbitHelpdesk / OnApplicationEvent_ContactHelpdesk | TST sends AuditPayload_EmailHost (MilestoneId, EventId, EventTitle, HostName, Subject, Message) and AuditPayload_ContactHelpdesk (EventId, EventTitle, Subject, Message) as JSON to App Insights. React passes MilestoneId and EventId, and EventId only. Telemetry is off by U17, so users see no change now. The production cut-over of U17 needs the full payload. The comment "Q2 open" in the Member actions.ts is out of date. | app/src/pages/ContactByEmailMember/actions.ts:11-15, hooks/useContactByEmailMemberSubmit.ts:53; app/src/pages/ContactByEmailOrbitHelpdesk/actions.ts:15-17, hooks/useContactByEmailOrbitHelpdeskSubmit.ts:54 | Pass the full payload at both call sites (Q1). Keep the log without personal text until the U17 sink exists. Update the comment. |
| F2 | minor | ContactByEmailLDMCoordinator / header image | With an empty In_AvatarURL, TST renders `<img src="">` (Image type External, OutSystemsReactWidgets.js:2). React passes `undefined` and renders no `src` attribute. | app/src/pages/ContactByEmailLDMCoordinator/ContactByEmailLDMCoordinatorPage.tsx:33-37 | Pass the URL unchanged, or record the DOM difference as a parity exemption. |

## 6. DEV vs TST differences

### 6.1 DEV model vs TST compiled code

| Element | DEV (model) | TST (compiled code) | What the React app follows | Source |
|---|---|---|---|---|
| ContactByEmailOrbitHost / Handler_SubmitForm | a [DISABLED] call of OnApplicationEvent_ContactHelpdesk | no call | TST: no audit call (row 125) | `UBTConnect.ContactFlow.ContactByEmailOrbitHost.mvc.js:611-674` |
| ContactByEmailLDMCoordinator / header | If False with UBT_LazyImage, else an External image | only the External image with In_AvatarURL | TST: one image (rows 038, 131) | `UBTConnect.ContactFlow.ContactByEmailLDMCoordinator.mvc.js:330-337` |
| ContactByEmailOrbitHelpdesk / SendContactEmail | an extra argument "None=TextToInteger(MemberId)" in the pack text | 8 arguments, no MemberId argument | TST: 8 arguments (row 104) | `UBTConnect.ContactFlow.ContactByEmailOrbitHelpdesk.mvc.js:550-558` |
| ContactByEmailForm / subject counter | Connect2_LegacyShared.Reusable2.InputCounter (InputId, NoteInitialLength) | UBTConnectLibrary.ConnectPatterns.InputCounter (In_InputId, In_InitialLength) | TST: `components/ui/InputCounter/InputCounter.tsx` (row 015) | `UBTConnect.ContactFlow.ContactByEmailForm.mvc.js:415-418, :470-473` |
| ContactByEmailContacts / screen | a screen with a link from Locality_LocalityContacts | the screen and the block are compiled; no compiled file references Locality_LocalityContacts (only the service worker list) | board `skip` stays; React has the route in routes.generated.ts:75 and no page (row 130) | `UBTConnect.ContactFlow.ContactByEmailContacts.mvc.js` (815 lines); `tst_source.py grep Locality_LocalityContacts` |

### 6.2 KB pages vs TST (for the KB owner)

No disagreement found. The KB page `ui/contact-by-email.md` and the rules BR-UBTCON-041 to BR-UBTCON-050 agree with TST on every checked item. The If False of the LDM avatar is DEV text that TST does not have, and the KB follows DEV there.

| Id | KB text | TST (compiled code) | Source |
|---|---|---|---|
| - | - | - | no disagreement found |

## 7. Questions for the user

| Id | Question | Why it matters | Options | Recommendation |
|---|---|---|---|---|
| Q1 | When telemetry is wired (U17), do the two Orbit app events send the full TST payload, with the subject and the message text (F1)? | TST sends 6 and 4 fields to App Insights; React keeps 2 and 1. The payload holds personal text. | (a) pass the full TST payload at the call sites now; the log stays without personal text; (b) keep a reduced payload and record it as a decision; (c) decide together with the U17 provider | (a): TST is the source of truth, and the sink stays a later step. |
| Q2 | ContactByEmailMember with In_AuditEventId = EmailHost: after the send, TST shows no message, stays on the screen and keeps the button in the loading state. React does the same (row 068). Do you want this recorded in `app/docs/known-original-bugs.md`? | The user gets no sign that the e-mail went. No caller that passes EmailHost was checked here. | (a) keep the TST behaviour and record it as a known original bug; (b) fix it: message and previous screen as in the other branches | (a) for the mock phase; production decides on (b). |

## 8. Counts

| Area | Items | match | partial | missing | differs | mock-only | n/a | unclear |
|---|---|---|---|---|---|---|---|---|
| identity | 15 | 14 | 0 | 0 | 0 | 0 | 1 | 0 |
| data | 21 | 16 | 0 | 0 | 0 | 5 | 0 | 0 |
| ui | 36 | 33 | 1 | 0 | 0 | 0 | 2 | 0 |
| actions | 39 | 31 | 2 | 0 | 5 | 0 | 1 | 0 |
| validations | 4 | 4 | 0 | 0 | 0 | 0 | 0 | 0 |
| logic | 19 | 15 | 0 | 0 | 3 | 0 | 1 | 0 |
| strings | 8 | 8 | 0 | 0 | 0 | 0 | 0 | 0 |
| **total** | **142** | **121** | **3** | **0** | **8** | **5** | **5** | **0** |
