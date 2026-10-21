# Questions: ContactByEmailLDMCoordinator

Managed by route.py. Facts may be answered by the OutSystems MCP; decisions and reviews only by the user.

## Q1 [decision] mock data (answered)
- Question: No TST call was recorded (no-capture). SendContactLDMCoordinatorEmail is a write: mock it with a P-MUTATION collection of the sent coordinator e-mails (UBTConnect.sentContactLDMCoordinatorEmails) and the action's empty answer, never the real server; the screen's data (coordinator name, e-mail, avatar = LDM logo, subject, date, locality) comes from its inputs, which LDM_EventDetail_V2 fills from the shared LDM world. OK?
- Evidence: migration/runtime-sources/UBTConnect.ContactFlow.ContactByEmailLDMCoordinator.mvc.js:466-476 (ServiceAPISendContactLDMCoordinatorEmail), :499-560 (Handler_SubmitForm); contract-report.md:111 (fictional, not captured); app/src/screens/LDM_EventDetail_V2/index.tsx:60-70 (navigation with In_EmailTo, In_ContactName, In_EventDate, In_AvatarURL, In_Subject, In_EventLocality)
- Options: A: P-MUTATION collection, inputs from LDM_EventDetail_V2 | B: other (recommended: A)
- Answer (user, 2026-10-16T11:17:27): A (recommended), auto-accepted (user instruction 2026-10-16 night)

## Q2 [review] review round 1 (answered, blocking)
- Question: Please test this route and confirm, or tell me what to change. Decisions to confirm: Q1 → A (pending): SendContactLDMCoordinatorEmail mocked in the collection `UBTConnect.sentContactLDMCoordinatorEmails`;; Telemetry (AddAuditEventDetailEvent, zOnApplicationEvent_Wrapper) goes to the log without personal fields (decision; An empty In_AvatarURL renders the image without a source (the If(False) branch always shows it).
- Evidence: route-spec.md, parity reports, feedback.md
- Options: confirm | change (say what)
- Answer (user, 2026-10-16T11:17:28): confirm (auto-confirmed: user instruction 2026-10-15 16:59)
