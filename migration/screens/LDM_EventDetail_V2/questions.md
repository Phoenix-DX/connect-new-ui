# Questions: LDM_EventDetail_V2

Managed by route.py. Facts may be answered by the OutSystems MCP; decisions and reviews only by the user.

## Q1 [decision] uncaptured branches (answered)
- Question: The capture shows only a guest view with the host allocation pending (IsPublished False). Build the other branches of the compiled view (host view: Adults/Children in the banner, Special Needs section with Dietary/Mobility/Other sub-sections; published allocation: host photo, name, address + Directions, Guest Households list of EventDetail_ListItem rows) from the compiled code, or render them as NotCaptured?
- Evidence: analysis/sources/pretty/Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_EventDetail_V2.mvc.js view :319-1100; EventDetail_Banner/HostCard/Section/ListItem .mvc.js views; survey sources EventDetail_SpecialNeeds_ListItem.mvc.js; dom/default.html:66-148 (only the pending guest view)
- OutSystems MCP: MCP not available to route agents
- Options: A: build from the compiled code with fictional data | B: NotCaptured (recommended: A)
- Answer (user, 2026-10-16T10:42:47): A (recommended), auto-accepted (user instruction 2026-10-16 night): uncaptured host and published branches built from the compiled code

## Q2 [decision] parity cloneQuery (answered)
- Question: Parity opens the bare URL (the capture was reached by a click on the first MyEvents card). Add cloneQuery 'mocksession=unlocked&EventHostId=88231&EventId=70415' (the first past event of the shared mock, src/mocks/fictional/ldm.ts) to the LDM_EventDetail_V2 entry of migration/capture-plan.json?
- Evidence: analysis/states.json via.click; pack inputs EventHostId/EventId; LDM_MyEvents_V2 navigates with EventId/EventHostId of the first card
- OutSystems MCP: n/a (plan setting)
- Options: A: add the cloneQuery | B: keep the bare URL (mock answers 'No event information.') (recommended: A)
- Answer (user, 2026-10-16T10:42:47): A (recommended), auto-accepted (user instruction 2026-10-16 night): capture-plan cloneQuery mocksession=unlocked&EventHostId=88231&EventId=70415

## Q3 [decision] mock data of the captured event (answered)
- Question: TST shows the first past event (whose host MyEvents lists) as a guest with 'Host Allocation Pending' (Host.IsPublished False) and phone/email links. Mirror that for the first mock event (70415, Medina hosts, Vitales guests) and publish the allocation of the other four mock events (host card with address/Directions, guest households; the Vitales' own meal 70388 shows the host view with special needs)?
- Evidence: dom/default.html:105-147 (Host Allocation Pending, Call_Phone + Email links, angle-right); calls.md GetEventByEventId (Host.Phone/Email/SignedURL non-empty, Guests 1+ items); ldm.ts LDM_PAST_EVENTS
- OutSystems MCP: MCP not available to route agents
- Options: A: mirror TST for 70415, published for the others | B: all events pending (recommended: A)
- Answer (user, 2026-10-16T10:42:47): A (recommended), auto-accepted (user instruction 2026-10-16 night): event 70415 stays Host Allocation Pending as captured; the other four meals published

## Q4 [review] review round 1 (answered, blocking)
- Question: Please test this route and confirm, or tell me what to change. Decisions to confirm: Q1 → A (pending orchestrator answer): uncaptured branches built from the compiled code.; Q2 → A (pending orchestrator answer): cloneQuery `mocksession=unlocked&EventHostId=88231&EventId=70415`.; Q3 → A (pending orchestrator answer): 70415 pending as captured; the other four meals published.; Fictional data for the three unrecorded calls (shared `src/mocks/fictional/ldm.ts`).; MenuIcon: the Orbit `MenuAction.Auto` is passed as Back, as captured (`app-menu-icon back`, dom/default.html).; CR-LDM_EventDetail_V2-1: move flipHouseholdName / getLocalityName / addAuditEvent_LDM / generateScreenURL to shared.; Proposed exemptions (not applied, `proposed-exemptions.json`): Person_Contact_Options link cursor (capture href Feature flags: action:connect_LaunchDarkly_PermissionCheck → not a flag (false positive): shared wrapper that reads LaunchDarkly flags (the flags are decided one by one); behaviour built as in the original (user, 2026-10-14); action:getHasC1DirectoryView → default-only: TST value on (user, 2026-10-14); action:getHasCarouselEnabled → default-only: TST value on (user, 2026-10-14); action:getHasNewBookmarks → default-only: TST value off (user, 2026-10-14); clientVar:App_PIN_BiometricEnabled → not a flag (false positive): user setting for biometric unlock, kept in a client variable; behaviour built as in the original (user, 2026-10-14); launchDarkly_FF.mobileDirectoryBookmarkNote → default-only: TST value off (user, 2026-10-14)
- Evidence: route-spec.md, parity reports, feedback.md
- Options: confirm | change (say what)
- Answer (user, 2026-10-16T10:42:59): confirm (auto-confirmed: user instruction 2026-10-15 16:59)

## Q5 [review] review round 2 (answered, blocking)
- Question: Please test this route and confirm, or tell me what to change. Decisions to confirm: Q1 → A (pending orchestrator answer): uncaptured branches built from the compiled code.; Q2 → A (pending orchestrator answer): cloneQuery `mocksession=unlocked&EventHostId=88231&EventId=70415`.; Q3 → A (pending orchestrator answer): 70415 pending as captured; the other four meals published.; Fictional data for the three unrecorded calls (shared `src/mocks/fictional/ldm.ts`).; MenuIcon: the Orbit `MenuAction.Auto` is passed as Back, as captured (`app-menu-icon back`, dom/default.html).; CR-LDM_EventDetail_V2-1: move flipHouseholdName / getLocalityName / addAuditEvent_LDM / generateScreenURL to shared.; Proposed exemptions (not applied, `proposed-exemptions.json`): Person_Contact_Options link cursor (capture href Feature flags: action:connect_LaunchDarkly_PermissionCheck → not a flag (false positive): shared wrapper that reads LaunchDarkly flags (the flags are decided one by one); behaviour built as in the original (user, 2026-10-14); action:getHasC1DirectoryView → default-only: TST value on (user, 2026-10-14); action:getHasCarouselEnabled → default-only: TST value on (user, 2026-10-14); action:getHasNewBookmarks → default-only: TST value off (user, 2026-10-14); clientVar:App_PIN_BiometricEnabled → not a flag (false positive): user setting for biometric unlock, kept in a client variable; behaviour built as in the original (user, 2026-10-14); launchDarkly_FF.mobileDirectoryBookmarkNote → default-only: TST value off (user, 2026-10-14)
- Evidence: route-spec.md, parity reports, feedback.md
- Options: confirm | change (say what)
- Answer (user, 2026-10-16T11:23:43): confirm (auto-confirmed: user instruction 2026-10-15 16:59)
