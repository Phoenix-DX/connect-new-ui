# Questions: ContactByEmailOrbitHost

Managed by route.py. Facts may be answered by the OutSystems MCP; decisions and reviews only by the user.

## Q1 [decision] mock: SendContactEmail (write) (answered)
- Question: SendContactEmail (shared with ContactByEmailOrbitHelpdesk, IsContactHelpdesk False here) sends an e-mail to the host: never recorded, never sent to TST. How is it mocked?
- Evidence: UBTConnect.ContactFlow.ContactByEmailOrbitHost.mvc.js :610-690 (False, 0, '', 0, In_Subject, form subject, message, EmailInfo HostName/HostEmail); output IsSuccess not read; CLAUDE.md rule 6; P-MUTATION; ContactByEmailOrbitHelpdesk Q2
- Options: A: same handler as the helpdesk: store in UBTConnect.sentOrbitContactEmails with recipient EmailInfo.HostEmail, IsSuccess True | B: IsSuccess True without storing (recommended: A)
- Answer (user, 2026-10-16T11:51:43): A (recommended), auto-accepted (user instruction 2026-10-16 night)

## Q2 [decision] review entry and mock host (answered)
- Question: No built screen opens ContactByEmailOrbitHost (only MilestoneDetail's meal blocks raise NavigateTo_ContactHostByEmail; they render NotCaptured). How should the reviewer open it?
- Evidence: MilestoneDetail.mvc.js NavigateTo_ContactHostByEmail → /UBTConnect/ContactByEmailOrbitHost (In_HostName, In_EntityType Member, In_Subject, In_ContactCountry, In_FormattedDateTime, In_ContactLocality, In_HostEmail, In_Surname, In_AvatarURL, In_EntityId = In_HostId, In_MilestoneTitle, In_EventName); app/src/screens/MilestoneDetail/index.tsx (Q5 there); orbit.ts hosts (Vitale household, HostEmail vitale.family@example.com)
- Options: A: by URL with the host of the Orbit world: /UBTConnect/ContactByEmailOrbitHost?mocksession=unlocked&In_HostName=Mr%20Juli%C3%A1n%20%26%20Mrs%20Fiorella%20Vitale&In_EntityType=Member&In_Subject=Accommodation&In_ContactCountry=Argentina&In_FormattedDateTime=&In_ContactLocality=Bahia%20Blanca&In_HostEmail=vitale.family%40example.com&In_Surname=Vitale&In_AvatarURL=&In_EntityId=990002&In_MilestoneTitle=Accommodation&In_EventName=Weekend%20Bible%20Conferences%20-%20Bahia%20and%20Azul | B: wait until the meal milestone blocks are built (recommended: A)
- Answer (user, 2026-10-16T11:51:43): A (recommended), auto-accepted (user instruction 2026-10-16 night)

## Q3 [review] review round 1 (answered, blocking)
- Question: Please test this route and confirm, or tell me what to change. Decisions to confirm: SendContactEmail mocked into `UBTConnect.sentOrbitContactEmails` with recipient EmailInfo.HostEmail, IsSuccess True;; Review URL (Q2): `/UBTConnect/ContactByEmailOrbitHost?mocksession=unlocked&In_HostName=Mr%20Juli%C3%A1n%20%26%20Mrs%20Fiorella%20Vitale&In_EntityType=Member&In_Subject=Accommodation&In_ContactCountry=Argentina&In_FormattedDateTime=&In_ContactLocality=Bahia%20Blanca&In_HostEmail=vitale.family%40example.com&In_Surname=Vitale&In_AvatarURL=&In_EntityId=990002&In_MilestoneTitle=Accommodation&In_EventName=Weekend%20Bible%20Conferences%20-%20Bahia%20and%20Azul`; Markup not captured: built from the compiled view with the ContactByEmailMember card (same blocks and options)
- Evidence: route-spec.md, parity reports, feedback.md
- Options: confirm | change (say what)
- Answer (user, 2026-10-16T11:51:48): confirm (auto-confirmed: user instruction 2026-10-15 16:59)
