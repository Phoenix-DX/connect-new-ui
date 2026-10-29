# ContactFlow reader notes (stage 1)

## TST presence check (tst_source.py show <Screen or Block>)
Pack elements absent on TST:
- ContactByEmailOrbitHost: [DISABLED] call OnApplicationEvent_ContactHelpdesk. TST file has 0 hits for onApplicationEvent_ContactHelpdesk$Action.
- ContactByEmailLDMCoordinator: If False (dead) UBT_LazyImage. TST file has 0 hits for UBT_LazyImage_mvc_view. Only the external Image remains (mvc.js:330-337, url in_AvatarURLIn).
- ContactByEmailOrbitHelpdesk: pack arg "None=TextToInteger(AppManager_GetCachedUserInfo.UserInformation.MemberId)" in SendContactEmail is not in TST. TST call has 8 args (mvc.js:550-558).
- ContactByEmailForm: pack block InputCounter is Connect2_LegacyShared.Reusable2.InputCounter (InputId, NoteInitialLength). TST uses UBTConnectLibrary.ConnectPatterns.InputCounter (In_InputId, In_InitialLength), ContactByEmailForm mvc.js:415-418 and 470-473. React uses the TST one (components/ui/InputCounter/InputCounter.tsx:1).
TST elements absent in the pack:
- None found in the checked parts (form args, input constraints, handler calls).
- ContactByEmailContacts: pack has the screen model; board says "not embedded on TST", yet TST file UBTConnect.ContactFlow.ContactByEmailContacts.mvc.js exists (815 lines) and routes.generated.ts:75 lists the route.
- Roles: TST shows OS.RolesInfo.checkRegistered; UBTOne_User not seen in the part read.

## Input constraints (TST, UBTConnect.ContactFlow.ContactByEmailForm.mvc.js)
- TextArea_Subject (dynamic branch): MaxLength=100, TextLines=1, Mandatory=false, Enabled=(In_Subject==="" && !IsLoading), no Prompt (:391-398).
- Input_Subject: InputType=Text, MaxLength=100, Mandatory=false, Prompt=In_SubjectPlaceholder, Enabled as above (:448-466).
- TextArea_Message: MaxLength=1000, TextLines=3, Mandatory=false, Prompt=In_MessagePlaceholder, Enabled=!IsLoading (:547-565).
- No OnChange handler on any of the three inputs (only variable binding).
- Button Send: IsDisabled = !(Subject !== "" && Message !== "") (:655). Dialog_Navigation condition at :699.
- Form args per screen on TST: In_Subject passed by LDMCoordinator, OrbitHelpdesk, Contacts; "" by OneSchoolGlobal; not passed by Member, OrbitHost. Dynamic text area on OneSchoolGlobal, OrbitHelpdesk, OrbitHost. All equal the pack.

## Pack gaps
- SendContactEmail EmailInfo args are cut with "…" (Helpdesk HostEmail, Host "Formatt…"). TST code read instead.
- Pack text for Helpdesk SendContactEmail has the odd argument "None=...".
- If widget text has an "\n" artefact: "if Subject <> In_Subject or\nTrim(Message) <> """.
- app.md lists deeper imported files only as counts; I read page, hooks, config, inputs, mocks, the form, ContactHeaderCard, ContactPersonCard, api/message repository lines.
- Logic of Dialog_Navigation, Layout_DetailPage, AddAuditEventDetailEvent, OnApplicationEvent_EmailHost, OnApplicationEvent_ContactHelpdesk, zOnApplicationEvent_Wrapper is not in the pack. React logs them only (U17); the judge needs the TST/KB view. I did not read kb.md targets.
- Client variables table of data.md is empty. No data actions.
- "Fetched Server Side" in strings.md is a comment in the model, not UI text.

## Mock files per screen
- LDMCoordinator: app/src/pages/ContactByEmailLDMCoordinator/mocks.ts (SendContactLDMCoordinatorEmail, collection sentContactLDMCoordinatorEmails).
- Member and OneSchoolGlobal: own mocks.ts empty (handlers=[]); shared handler app/src/components/contact/ContactEmailForm/mocks.ts (SendContactMemberEmail, collection sentContactMemberEmails).
- OrbitHelpdesk and OrbitHost: each mocks.ts has the same ActionSendContactEmail handler (duplicate; collection sentOrbitContactEmails; recipient ORBIT_HELPDESK_EMAIL when IsContactHelpdesk, else EmailInfo.HostEmail). Comment says MSW takes the first.
- Orbit fixtures: app/src/mocks/fictional/orbit.ts:1414 (SendContactEmail hit in app.md).

## Board line of the unbuilt screen
migration/board.md:55: | ContactByEmailContacts | /UBTConnect/ContactByEmailContacts |  | 29 |  | skip | V7 · skip:dead · only link in Locality_LocalityContacts, not embedded on TST; revisit if the block appears (user, 2026-10-14) | - |  |

## Points for the judge (facts, no verdict)
- Member EmailHost branch: React passes 2 of 6 AuditPayload fields; no message and no navigation after it (same as the model).
- Helpdesk audit call: React passes only EventId.
- Member In_AuditEventId default: model = EmailHousehold, React = "".
- Form events: OS Event_SubmitForm mandatory, React prop optional.
- Recorded decisions that name these screens: decisions.md (board, CR-ContactByEmailMember-1/-2, CR-ContactByEmailOneSchoolGlobal-1, auto-decisions-2026-10-15/16, parity-exemptions rows/maxlength capture gap).
