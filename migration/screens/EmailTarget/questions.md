# Questions: EmailTarget

Managed by route.py. Facts may be answered by the OutSystems MCP; decisions and reviews only by the user.

## Q1 [decision] mock data (answered)
- Question: No TST call was recorded and no screen links to EmailTarget (no inbound link; reviewed by URL). UserContactUser (a write) is mocked with a P-MUTATION collection of the sent household e-mails (Connect2_LegacyShared.sentUserContactUserEmails) and the action's empty answer, never the real server; the household and subject come from the screen inputs (for the review: a fictional household of the LDM world, e.g. In_HouseholdFullName 'Medina, Darío & Lorena', In_HouseholdFirstName 'Darío', IsFromLDM True). OK?
- Evidence: survey Connect2_LegacyShared.Email.ScreenBlock_Household_Email.mvc.js controller :694-706 (ActionUserContactUser), :800-840 (OnSubmit_Email); contract-report.md:34 (fictional, not captured); migration/screens/EmailTarget/notes.md (no inbound link)
- Options: A: P-MUTATION collection, data from the inputs | B: other (recommended: A)
- Answer (user, 2026-10-16T11:17:27): A (recommended), auto-accepted (user instruction 2026-10-16 night)

## Q2 [review] review round 1 (answered, blocking)
- Question: Please test this route and confirm, or tell me what to change. Decisions to confirm: Q1 → A (pending): UserContactUser mocked in the collection `Connect2_LegacyShared.sentUserContactUserEmails`; the; Restored from the view cache: the block starts again (OnInitialize: Subject = InitialEmailSubject) instead of the; Telemetry (AddAuditEventDetailEvent, zOnApplicationEvent_Wrapper) goes to the log without personal fields (decision; GetNetworkStatus = `navigator.onLine` (as the other LDM routes).; Review URL: `/UBTConnect/EmailTarget?In_HouseholdFirstName=Darío&In_HouseholdFullName=Medina,%20Darío%20%26%20Lorena&EmailTo=dario.medina@example.com&IsFromLDM=True&EventDate=2026-09-26&EventLocality=Bahia%20Blanca` Feature flags: action:connect_LaunchDarkly_PermissionCheck → not a flag (false positive): shared wrapper that reads LaunchDarkly flags (the flags are decided one by one); behaviour built as in the original (user, 2026-10-14); action:getHasC1DirectoryView → default-only: TST value on (user, 2026-10-14); action:getHasNewBookmarks → default-only: TST value off (user, 2026-10-14); clientVar:App_PIN_BiometricEnabled → not a flag (false positive): user setting for biometric unlock, kept in a client variable; behaviour built as in the original (user, 2026-10-14); launchDarkly_FF.mobileDirectoryBookmarkNote → default-only: TST value off (user, 2026-10-14)
- Evidence: route-spec.md, parity reports, feedback.md
- Options: confirm | change (say what)
- Answer (user, 2026-10-16T11:17:29): confirm (auto-confirmed: user instruction 2026-10-15 16:59)
