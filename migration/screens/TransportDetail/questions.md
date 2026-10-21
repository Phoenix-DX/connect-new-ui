# Questions: TransportDetail

Managed by route.py. Facts may be answered by the OutSystems MCP; decisions and reviews only by the user.

## Q1 [decision] mock data (answered)
- Question: No TST capture and no transport data on the test account: which itinerary does the mock world answer for DataActionGet_TransportDetail, and how is the route reviewed?
- Evidence: no-capture.json (user 2026-10-16); EventDetail/default of event 7301 has Transport false and no transport milestone (orbit.ts detail); ScreenBlock_TransportDetail.mvc.js :418 (data action by In_MilestoneId), :582-594
- Options: A: fictional itinerary of event 7301 in orbit.ts (orbitTransportLegs: flight 7301-T1 Buenos Aires AEP -> Mar del Plata stop -> Bahia Blanca BHI for Matias, vehicle pick-up 7301-T2 by Julian), outside the milestones EventDetail lists (its capture stays unchanged), reviewed by direct URL | B: answer an empty TransportDetail (every item hidden) (recommended: A)
- Answer (user, 2026-10-16T14:01:04): A (recommended), auto-accepted (user instruction 2026-10-16 night)

## Q2 [fact] milestone type records (answered)
- Question: Values of the transport OrbitMilestoneType records (MainIcon, IconTransportDeparture/Arrival, TransportHeaderClass, TravelInfoHeader, TravelInfoHeaderIcon) that Get_TransportDetail returns as Response.MilestoneType
- Evidence: server data (Connect2_OrbitMobile_BL.OrbitMilestoneTypeRec), not in static-entities-tst.json nor any capture; class names that exist in public/UBTConnect/css/Connect2_LegacyShared.OrbitTheme.css: orbit-icon-transportation-<type>[-departure|-arrival], orbit-transport-detail-<type>
- OutSystems MCP: MCP not available to route agents; conservative choice: the CSS class names of the original theme, headers 'Flight Number' / 'Number Plate' fictional
- Answer (user, 2026-10-21T11:31:42): No capture of the transport milestone-type icons and header classes; auto mode, no recommendation: keep the conservative choice (class names that exist in Connect2_LegacyShared.OrbitTheme.css). To confirm with the user. auto-accepted (user instruction 2026-10-16 night) (answered 2026-10-16T14:01:04, user) | Confirmed (user, 2026-10-21): keep this mock for the demo; check it again in the production phase.

## Q3 [review] review round 1 (answered, blocking)
- Question: Please test this route and confirm, or tell me what to change. Decisions to confirm: Q1 → A: fictional itinerary of event 7301 (orbit.ts orbitTransportLegs), not listed by EventDetail (its capture has no; flight with a stop, codeshare, seats, baggage: `/UBTConnect/TransportDetail?mocksession=unlocked&In_MilestoneId=7301-T1&In_OrbitMilestoneTypeId=transport-flight&In_MilestoneName=Flight%20to%20Bahia%20Blanca&In_HeaderClass=orbit-transport-detail-flight&In_TargetMemberId=990001`; vehicle (number plate, vehicle, driver, trip duration from the times): `/UBTConnect/TransportDetail?mocksession=unlocked&In_MilestoneId=7301-T2&In_OrbitMilestoneTypeId=transport-vehicle&In_MilestoneName=Airport%20pick-up&In_HeaderClass=orbit-transport-detail-vehicle&In_TargetMemberId=990001`; loading: add `&mock=loading`; error: `&mock=error`.; Q2 (fact): MilestoneType records with the theme's class names (orbit-icon-transportation-<type>[-departure|-arrival],; Markup not captured: built from the compiled view (TD, TI, SB). Feature flags: action:getHasOrbitAccess → default-only: TST value on (user, 2026-10-14); clientVar:App_PIN_BiometricEnabled → not a flag (false positive): user setting for biometric unlock, kept in a client variable; behaviour built as in the original (user, 2026-10-14)
- Evidence: route-spec.md, parity reports, feedback.md
- Options: confirm | change (say what)
- Answer (user, 2026-10-16T14:01:05): confirm (auto-confirmed: user instruction 2026-10-15 16:59)
