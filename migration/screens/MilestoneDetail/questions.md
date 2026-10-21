# Questions: MilestoneDetail

Managed by route.py. Facts may be answered by the OutSystems MCP; decisions and reviews only by the user.

## Q1 [decision] member click / directory access (answered)
- Question: Clicking a guest (photo or name) runs CheckDirectoryAccess → server GetDirectoryAccess (Connect2_OrbitMobile_MUI), which is not in the API contract (CR-MilestoneDetail-1). Until the CR lands, what does the click do? A) navigate to HouseholdDetails(HouseholdId) as if access were granted (the capture account has full permission), then OnApplicationEvent_ViewHousehold to the log; the RecordDisabled → App_Subscription_ShowUpgradePopUp branch waits for the CR. B) the click does nothing until the CR.
- Evidence: analysis/sources/pretty/Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHost.mvc.js:2451-2535 (OnHandle_ClickedMember); runtime-sources/Connect2_OrbitMobile_MUI.controller.js:1085-1150 (CheckDirectoryAccess: HasAccess = not RecordDisabled); app/src/api/openapi.yaml has no GetDirectoryAccess
- OutSystems MCP: not available to route agents (DEV only, no MCP in this run)
- Options: A | B (recommended: A)
- Answer (user, 2026-10-16T11:02:57): A (recommended), auto-accepted (user instruction 2026-10-16 night)

## Q2 [decision] phone popup (answered)
- Question: The phone icon of a guest runs BuildMemberCallData: Connect2_LegacyShared GetCacheableMemberContactList and GetCacheableTimezoneInfo (memory-cache callbacks around server actions that are neither ported nor in the API contract, CR-MilestoneDetail-2). Until the CR lands: A) open ContactPopup_ByPhone with the guest's name, photo and MemberInformation.Phone (the compiled empty-contact-list branch, without timezone/locality), Call → OnApplicationEvent_CallMember to the log and close; B) the phone icon does nothing until the CR.
- Evidence: analysis/sources/pretty/Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHost.mvc.js:2121-2260 (BuildMemberCallData), :2301-2355 (OnHandle_CallClicked), :2617-2700 (OnHandle_ClickedMemberPhone); runtime-sources/Connect2_LegacyShared.controller.js:3416 (GetCacheableMemberContactList), :4253 (GetCacheableTimezoneInfo)
- OutSystems MCP: not available to route agents (DEV only, no MCP in this run)
- Options: A | B (recommended: A)
- Answer (user, 2026-10-16T11:02:57): A (recommended), auto-accepted (user instruction 2026-10-16 night)

## Q3 [decision] from notification / GetGmpMilestoneHost (answered)
- Question: ScreenBlock_MilestoneWrapper calls DataActionGetGmpMilestoneHost only when In_FromNotification is True or an input (In_HostId, In_OrbitMilestoneTypeId, In_MilestoneName) is missing; the action is not in the API contract (CR-MilestoneDetail-1) and no state was captured. A) In_FromNotification=True renders <NotCaptured> for the wrapper's notification branch (skeleton → type block or Failed layout) and the call is skipped; with missing inputs and not from a notification the view uses the inputs as given (as compiled) and the call is skipped; B) build the notification branch with a fictional GetGmpMilestoneHost answer outside the contract.
- Evidence: analysis/sources/pretty/Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_MilestoneWrapper.mvc.js:257-260 (view conditions), :1211-1290 (OnReady: FromCache / From Notification? / Missing optional values?), :1795-1830 (Failed layout, NoInformation)
- OutSystems MCP: not available to route agents (DEV only, no MCP in this run)
- Options: A | B (recommended: A)
- Answer (user, 2026-10-16T11:02:57): A (recommended), auto-accepted (user instruction 2026-10-16 night)

## Q4 [decision] accommodation document (answered)
- Question: The header document icon (HasDocument = Get_Document.DocumentURL <> "") opens the file through UBTConnect_Utils OpenInApp_TryOpenFileInApp and the FileTransfer HandleDownload plugin callbacks, none of which are ported (CR-MilestoneDetail-3). The capture has no document (DocumentURL empty). A) the mock world has no accommodation document (as captured); the icon renders when HasDocument, its click is not ported until the CR; B) give the mock a document and open DocumentURL in a new tab.
- Evidence: analysis/sources/pretty/Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHost.mvc.js:367-415 (HeaderRight icon), :1840-1860 (HasDocument), :1900-1973 (OnClick_OpenDocument), :1974-2032 / :2567-2616 (HandleDownload callbacks); analysis/calls.md DataActionGet_Document (DocumentURL EMPTY)
- OutSystems MCP: not available to route agents (DEV only, no MCP in this run)
- Options: A | B (recommended: A)
- Answer (user, 2026-10-16T11:02:57): A (recommended), auto-accepted (user instruction 2026-10-16 night)

## Q5 [decision] other milestone types (answered)
- Question: ScreenBlock_MilestoneWrapper renders ScreenBlock_MealGuest / MealHost / MealHelper / AccommodationGuest / AccommodationHelper for the other milestone types; none of them was rendered in a capture (only accommodation-host). A) build ScreenBlock_AccommodationHost now and render <NotCaptured> for the other types (each comes with its own capture: the Orbit landing / EventDetail of a guest or helper account); B) build all five blocks from compiled code without a capture.
- Evidence: analysis/sources/pretty/Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_MilestoneWrapper.mvc.js:257-1010 (type branches); pack.md Gaps (ScreenBlock_AccommodationGuest/Helper, MealGuest/Host/Helper not rendered)
- OutSystems MCP: not available to route agents (DEV only, no MCP in this run)
- Options: A | B (recommended: A)
- Answer (user, 2026-10-16T11:02:57): A (recommended), auto-accepted (user instruction 2026-10-16 night)

## Q6 [decision] parity cloneQuery (answered)
- Question: Parity opens /UBTConnect/MilestoneDetail without inputs (the state was captured via OrbitLanding → EventDetail → Accommodation card). Which cloneQuery should capture-plan.json give the MilestoneDetail entry? A) mocksession=unlocked&In_FromNotification=False&In_MilestoneId=7301-1&In_EventId=7301&In_HostId=990002&In_OrbitMilestoneTypeId=accommodation-host&In_MilestoneName=Accommodation&In_EventName=Weekend%20Bible%20Conferences%20-%20Bahia%20and%20Azul (the inputs EventDetail's Accommodation card passes for the mock event's first night); B) none (bare URL: the wrapper gets no type and renders nothing).
- Evidence: analysis/states.json (via); app/src/screens/EventDetail/index.tsx onNavigateToMilestoneDetail; app/src/mocks/fictional/orbit.ts (7301-1, host 990002); diagnostic parity run 2026-10-16 with A: structure 0, text 0, call 0, remaining diffs = proposed exemptions
- OutSystems MCP: n/a (clone configuration)
- Options: A | B (recommended: A)
- Answer (user, 2026-10-16T11:02:58): A (recommended), auto-accepted (user instruction 2026-10-16 night)

## Q7 [review] review round 1 (answered, blocking)
- Question: Please test this route and confirm, or tell me what to change. Decisions to confirm: Q1 → A (pending orchestrator answer): member click navigates to HouseholdDetails (GetDirectoryAccess missing, CR-MilestoneDetail-1).; Q2 → A: phone popup with phone, name, photo, no timezone (CR-MilestoneDetail-2).; Q3 → A: from a notification `<NotCaptured>`, GetGmpMilestoneHost skipped (CR-MilestoneDetail-1).; Q4 → A: no document in the mock; document click not ported (CR-MilestoneDetail-3).; Q5 → A: only ScreenBlock_AccommodationHost built; other types `<NotCaptured>`.; Q6 → A: cloneQuery (see proposed-exemptions.json `_comment`).; CR-MilestoneDetail-4: MilestoneHeader remounted (React key) once LocalOrbitMilestoneType is synced (shell timing).; Mock world: ORBIT_HOSTED_ROOMS in `app/src/mocks/fictional/orbit.ts` (two visiting families, six rooms, both nights).; Proposed exemptions: VIA-BACK-MENUICON-MILESTONEDETAIL, CAPTURE-MASKED-ROOM-INFO-MILESTONEDETAIL, CAPTURE-VIA-MASK-SHIFT-MILESTONEDETAIL-PIXELS. Feature flags: action:getHasOrbitAccess → default-only: TST value on (user, 2026-10-14); clientVar:App_PIN_BiometricEnabled → not a flag (false positive): user setting for biometric unlock, kept in a client variable; behaviour built as in the original (user, 2026-10-14)
- Evidence: route-spec.md, parity reports, feedback.md
- Options: confirm | change (say what)
- Answer (user, 2026-10-16T11:25:05): confirm (auto-confirmed: user instruction 2026-10-15 16:59)

## Q8 [review] review round 2 (answered, blocking)
- Question: Please test this route and confirm, or tell me what to change. Decisions to confirm: Q1 → A (pending orchestrator answer): member click navigates to HouseholdDetails (GetDirectoryAccess missing, CR-MilestoneDetail-1).; Q2 → A: phone popup with phone, name, photo, no timezone (CR-MilestoneDetail-2).; Q3 → A: from a notification `<NotCaptured>`, GetGmpMilestoneHost skipped (CR-MilestoneDetail-1).; Q4 → A: no document in the mock; document click not ported (CR-MilestoneDetail-3).; Q5 → A: only ScreenBlock_AccommodationHost built; other types `<NotCaptured>`.; Q6 → A: cloneQuery (see proposed-exemptions.json `_comment`).; CR-MilestoneDetail-4: MilestoneHeader remounted (React key) once LocalOrbitMilestoneType is synced (shell timing).; Mock world: ORBIT_HOSTED_ROOMS in `app/src/mocks/fictional/orbit.ts` (two visiting families, six rooms, both nights).; Proposed exemptions: VIA-BACK-MENUICON-MILESTONEDETAIL, CAPTURE-MASKED-ROOM-INFO-MILESTONEDETAIL, CAPTURE-VIA-MASK-SHIFT-MILESTONEDETAIL-PIXELS. Feature flags: action:getHasOrbitAccess → default-only: TST value on (user, 2026-10-14); clientVar:App_PIN_BiometricEnabled → not a flag (false positive): user setting for biometric unlock, kept in a client variable; behaviour built as in the original (user, 2026-10-14)
- Evidence: route-spec.md, parity reports, feedback.md
- Options: confirm | change (say what)
- Answer (user, 2026-10-16T12:25:55): confirm (auto-confirmed: user instruction 2026-10-15 16:59)
