# Questions: EmailContact

Managed by route.py. Facts may be answered by the OutSystems MCP; decisions and reviews only by the user.

## Q1 [decision] mock: SendContactEmail (write) (answered)
- Question: SendContactEmail of ScreenBlock_ContactForm (Connect2_OrbitMobile_MUI/ActionSendContactEmail, IsContactHelpdesk True or False) sends an e-mail to the event helpdesk or the host: never recorded, never sent to TST. How is it mocked, and when does it answer IsSuccess False (the block's 'There is currently no helpdesk email associated with this event…' branch)?
- Evidence: CF OnClick_Submit :1228-1372, :1342; contract x-os-writes true; ContactByEmailOrbitHelpdesk/Host mocks (UBTConnect.sentOrbitContactEmails)
- Options: A: store each e-mail in the same collection UBTConnect.sentOrbitContactEmails with the recipient from orbit.ts orbitContactRecipients (the event's helpdesk e-mail, else EmailInfo.HostEmail), IsSuccess True; a helpdesk e-mail for an event without a helpdesk address answers IsSuccess False and is not stored | B: IsSuccess True always, nothing stored (recommended: A)
- Answer (user, 2026-10-16T15:03:09): A (recommended), auto-accepted (user instruction 2026-10-16 night)

## Q2 [decision] review entry (answered)
- Question: No built screen opens EmailContact (no inbound link found, routes.md). How should the reviewer open it?
- Evidence: notes.md (no inbound link); route inputs S :12-61
- Options: A: by URL with the Orbit world of event 7301: helpdesk (In_IsContactHelpdesk=True, subject from the event and milestone), host (In_IsContactHelpdesk=False, the Vitale household), and a helpdesk e-mail for an event without helpdesk address (In_EventId=7302) for the IsSuccess False message | B: wait until a screen links to it (recommended: A)
- Answer (user, 2026-10-16T15:03:09): A (recommended), auto-accepted (user instruction 2026-10-16 night)

## Q3 [review] review round 1 (answered, blocking)
- Question: Please test this route and confirm, or tell me what to change. Decisions to confirm: Q1 → A (pending orchestrator answer): e-mails stored in `UBTConnect.sentOrbitContactEmails` with the recipient from; Q2 → A (pending orchestrator answer). Review URLs:; helpdesk: `/UBTConnect/EmailContact?mocksession=unlocked&In_IsContactHelpdesk=True&In_EventId=7301&In_MilestoneId=7301-1&In_TargetMemberId=0&In_Subject=Weekend%20Bible%20Conferences%20-%20Bahia%20and%20Azul%20-%20Accommodation&In_MilestoneTitle=Accommodation&In_EventName=Weekend%20Bible%20Conferences%20-%20Bahia%20and%20Azul&In_HostName=&In_HostEmail=&In_FormattedDateTime=`; host: `/UBTConnect/EmailContact?mocksession=unlocked&In_IsContactHelpdesk=False&In_EventId=7301&In_MilestoneId=7301-1&In_TargetMemberId=0&In_Subject=&In_MilestoneTitle=Accommodation&In_EventName=Weekend%20Bible%20Conferences%20-%20Bahia%20and%20Azul&In_HostName=Mr%20Juli%C3%A1n%20%26%20Mrs%20Fiorella%20Vitale&In_HostEmail=vitale.family%40example.com&In_FormattedDateTime=`; no helpdesk e-mail: the helpdesk URL with `In_EventId=7302`; sending: add `&mock=loading`; error: `&mock=error`.; Markup not captured: built from the compiled view with the platform widgets as EmailTarget / LDM_Email_V2. Feature flags: action:connect_LaunchDarkly_PermissionCheck → not a flag (false positive): shared wrapper that reads LaunchDarkly flags (the flags are decided one by one); behaviour built as in the original (user, 2026-10-14); action:getHasC1DirectoryView → default-only: TST value on (user, 2026-10-14); action:getHasNewBookmarks → default-only: TST value off (user, 2026-10-14); action:getHasOrbitAccess → default-only: TST value on (user, 2026-10-14); clientVar:App_PIN_BiometricEnabled → not a flag (false positive): user setting for biometric unlock, kept in a client variable; behaviour built as in the original (user, 2026-10-14); launchDarkly_FF.mobileDirectoryBookmarkNote → default-only: TST value off (user, 2026-10-14)
- Evidence: route-spec.md, parity reports, feedback.md
- Options: confirm | change (say what)
- Answer (user, 2026-10-16T15:03:19): confirm (auto-confirmed: user instruction 2026-10-15 16:59)
