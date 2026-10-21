# Questions: HelpersDetail

Managed by route.py. Facts may be answered by the OutSystems MCP; decisions and reviews only by the user.

## Q1 [decision] parity cloneQuery (answered)
- Question: States default/loading/offline were reached by clicks (OrbitLanding -> event card -> Host Allocation -> helper View). Which direct URL should parity open in the React app?
- Evidence: states.json via; EventDetail OnHandle_NavigateToHelpers (UBTConnect.Legacy_OrbitEventsFlow.EventDetail.mvc.js:735-742: In_EventId, In_EventName, In_HostId, In_OrbitMilestoneTypeId=helper, In_MilestoneName); EventDetail OnHandle_ViewHelpers passes the user's HouseholderId (mock 42438) and ItemName 'Helper'; capture-plan EventDetail/MilestoneDetail cloneQuery pattern
- Options: mocksession=unlocked&In_EventId=7301&In_EventName=Weekend%20Bible%20Conferences%20-%20Bahia%20and%20Azul&In_HostId=42438&In_OrbitMilestoneTypeId=helper-host&In_MilestoneName=Helper | no cloneQuery (parity follows the via clicks) (recommended: mocksession=unlocked&In_EventId=7301&In_EventName=Weekend%20Bible%20Conferences%20-%20Bahia%20and%20Azul&In_HostId=42438&In_OrbitMilestoneTypeId=helper-host&In_MilestoneName=Helper)
- Answer (user, 2026-10-16T11:51:42): A (recommended), auto-accepted (user instruction 2026-10-16 night)

## Q2 [decision] mock data: helpers branch (answered)
- Question: The capture shows no helper (NoInformation 'There is no Helper available.'). The helper list branch (role accordion + member cards + Contact Orbit Helpdesk footer) is built from the compiled code. How should the mock expose it?
- Evidence: dom/default.html:77-83 (NoInformation); calls.md DataActionGetHelperDetails Helpers List empty; ScreenBlock_HelperDetails.mvc.js view :330-560, bottomBar :600-625; static entity Connect2_OrbitMobile_MUI.helperRole (catering, usher, ...)
- Options: A: real = no helper for event 7301 (as captured); extra scenario ?mock=helpers answers fictional helpers from orbit.ts (ORBIT_EVENT_HELPERS: Catering and Usher roles, members of two Bahia Blanca households, Role text upper case) | B: real only (list branch not reviewable in the mock) (recommended: A)
- Answer (user, 2026-10-16T11:51:42): A (recommended), auto-accepted (user instruction 2026-10-16 night)

## Q3 [review] review round 1 (answered, blocking)
- Question: Please test this route and confirm, or tell me what to change. Decisions to confirm: cloneQuery for default/loading/offline: `mocksession=unlocked&In_EventId=7301&In_EventName=Weekend%20Bible%20Conferences%20-%20Bahia%20and%20Azul&In_HostId=42438&In_OrbitMilestoneTypeId=helper-host&In_MilestoneName=Helper` (Q1); Mock: event 7301 has no helper allocated (captured); `?mock=helpers` shows Catering and Usher helpers of two Bahia Blanca households (Q2; role texts upper case are fictional, formatted as compiled "Catering/s"); List item ids of the uncaptured helper branch follow the block aliases (`b1-$b5`, `b1-$b6` + row index), not captured; OnApplicationEvent_ViewHousehold / CallMember go to the log with ids only (decision U17, as MilestoneDetail); Real answer mirrors the captured record: EventDetails with empty name/location and null dates (calls.md); the helpers; OrbitMilestoneType (GetLocalOrbitMilestoneTypeById in OnReady, HB :900-906) only travels as a block variable: left out; Proposed exemptions (migration/screens/HelpersDetail/proposed-exemptions.json): back arrow via clicks, masked title Feature flags: action:getHasOrbitAccess → default-only: TST value on (user, 2026-10-14); clientVar:App_PIN_BiometricEnabled → not a flag (false positive): user setting for biometric unlock, kept in a client variable; behaviour built as in the original (user, 2026-10-14)
- Evidence: route-spec.md, parity reports, feedback.md
- Options: confirm | change (say what)
- Answer (user, 2026-10-16T12:21:25): confirm (auto-confirmed: user instruction 2026-10-15 16:59)
