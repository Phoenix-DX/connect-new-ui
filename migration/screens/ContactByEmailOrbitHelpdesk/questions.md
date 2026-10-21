# Questions: ContactByEmailOrbitHelpdesk

Managed by route.py. Facts may be answered by the OutSystems MCP; decisions and reviews only by the user.

## Q1 [decision] parity cloneQuery (answered)
- Question: The default state was reached by clicks (OrbitLanding -> event card -> 'Contact Orbit Helpdesk' on EventDetail). Which direct URL should parity open?
- Evidence: states.json via; EventDetail OnHandle_ContactHelpdesk navigates with In_MilestoneId '', In_EventId, In_Subject = GetContactHelpdeskSubject_Event(EventName, Start, End, Location), In_EventName (app/src/screens/EventDetail/index.tsx:69-77); captured subject masked with word lengths of 'event - location - Fri 23 Oct 2026 - Sun 25 Oct 2026' (dom/default.html:73-74)
- Options: mocksession=unlocked&In_MilestoneId=&In_EventId=7301&In_Subject=Weekend%20Bible%20Conferences%20-%20Bahia%20and%20Azul%20-%20Bahia%20Blanca%20Main%20Hall%20-%20Fri%2023%20Oct%202026%20-%20Sun%2025%20Oct%202026&In_EventName=Weekend%20Bible%20Conferences%20-%20Bahia%20and%20Azul | no cloneQuery (recommended: mocksession=unlocked&In_MilestoneId=&In_EventId=7301&In_Subject=Weekend%20Bible%20Conferences%20-%20Bahia%20and%20Azul%20-%20Bahia%20Blanca%20Main%20Hall%20-%20Fri%2023%20Oct%202026%20-%20Sun%2025%20Oct%202026&In_EventName=Weekend%20Bible%20Conferences%20-%20Bahia%20and%20Azul)
- Answer (user, 2026-10-16T11:51:43): A (recommended), auto-accepted (user instruction 2026-10-16 night)

## Q2 [decision] mock: SendContactEmail (write) (answered)
- Question: SendContactEmail (Connect2_OrbitMobile_BL, shared with ContactByEmailOrbitHost) sends an e-mail: never recorded, never sent to TST. How is it mocked?
- Evidence: UBTConnect.ContactFlow.ContactByEmailOrbitHelpdesk.mvc.js :448-480, :517-600 (IsContactHelpdesk True, EventId, MilestoneId, TargetMemberId, Subject, UserSubject '', Message, EmailInfo); output IsSuccess not read; CLAUDE.md rule 6; P-MUTATION
- Options: A: contractHandler stores each e-mail in the in-memory collection UBTConnect.sentOrbitContactEmails (with the recipient the server would pick: orbit.ts ORBIT_HELPDESK_EMAIL for the helpdesk, EmailInfo.HostEmail for a host), answers IsSuccess True; nothing reads it back | B: answer IsSuccess True without storing (recommended: A)
- Answer (user, 2026-10-16T11:51:43): A (recommended), auto-accepted (user instruction 2026-10-16 night)

## Q3 [review] review round 1 (answered, blocking)
- Question: Please test this route and confirm, or tell me what to change. Decisions to confirm: cloneQuery: `mocksession=unlocked&In_MilestoneId=&In_EventId=7301&In_Subject=Weekend%20Bible%20Conferences%20-%20Bahia%20and%20Azul%20-%20Bahia%20Blanca%20Main%20Hall%20-%20Fri%2023%20Oct%202026%20-%20Sun%2025%20Oct%202026&In_EventName=Weekend%20Bible%20Conferences%20-%20Bahia%20and%20Azul` (Q1); SendContactEmail mocked into the in-memory collection `UBTConnect.sentOrbitContactEmails` with recipient orbit.ts ORBIT_HELPDESK_EMAIL (orbit.helpdesk@example.com), IsSuccess True; one handler for both Orbit contact screens (Q2); OnApplicationEvent_ContactHelpdesk goes to the log with the event id only (decision U17); EmailInfo.SenderEmail and TargetHelpdeskEmail sent "" (the compiled record leaves them unset, S :548-556); Proposed exemptions (proposed-exemptions.json): body orbit-theme left by the previous Orbit screen, unmasked subject replica (::after), subject pixels
- Evidence: route-spec.md, parity reports, feedback.md
- Options: confirm | change (say what)
- Answer (user, 2026-10-16T11:51:48): confirm (auto-confirmed: user instruction 2026-10-15 16:59)
