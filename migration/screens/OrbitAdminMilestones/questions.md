# Questions: OrbitAdminMilestones

Managed by route.py. Facts may be answered by the OutSystems MCP; decisions and reviews only by the user.

## Q1 [decision] entry mock scenario (answered)
- Question: GetMilestoneScanFF answers IsScanPerMilestone=false on TST (probe 2026-10-28), so the default mock answers false and an event card of OrbitAdminLanding opens OrbitAdminEventDetail, and a milestone card of OrbitAdminMilestones opens OrbitAdminLanding. How does the user reach OrbitAdminMilestones and OrbitAdminMilestoneDetail in the mock app for the review?
- Evidence: OrbitAdminLanding.mvc.js:218-227, 266-288; OrbitAdminMilestones.mvc.js:231-240, 286-302; item10-new-screens.md §1 (live value false)
- OutSystems MCP: Not an MCP fact: a mock-app decision (I10-3 (a)).
- Options: a) Route scenario ?mock=scanpermilestone: GetMilestoneScanFF answers true on both screens; default (real) answers false as TST | b) Default answers true (the new screens show at once; differs from TST) | c) No scenario: open /UBTConnect/OrbitAdminMilestones?EventId=7301 by URL only (the milestone click then goes back to OrbitAdminLanding) (recommended: a)
- Answer (user, 2026-10-29T10:38:14): (a) (user, 2026-10-29): the default mock answers GetMilestoneScanFF false, as TST; the scenario ?mock=scanpermilestone answers true on both screens.

## Q2 [decision] admin milestone types (change request, lib) (answered)
- Question: The live TST moduleinfo (version 15682) now has the six Admin* OrbitMilestoneType records (adminMeeting=meeting-admin, adminMeal=meeting-meal, adminMealAtHall=meal-at-hall-admin, adminAccommodation=accommodation-admin, adminTransportVehicle=transport-vehicle-admin, adminBreak=break-admin). React app/src/lib/orbit/staticEntities.ts:49-75 keeps them undefined (old moduleinfo), so the Card_Milestone admin branch (description, date, start-end times) never renders, and an admin milestone card shows only its title. lib/ is outside the route scope. Update the lib?
- Evidence: migration/runtime-sources/moduleinfo.json (entity 3cdbee62-a275-4b90-8413-7962d4974850); Connect2_OrbitMobile_MUI.model.js:20232-20356; app/src/components/orbit/MilestoneCard/MilestoneCard.tsx:220-254
- OutSystems MCP: Fact from the live TST moduleinfo; not asked to MCP (DEV).
- Options: a) Change request: the orchestrator sets the six live Ids in lib/orbit/staticEntities.ts (and the comment); the admin cards then render as TST; other cards are unchanged (no other milestone has these Ids) | b) Keep undefined: admin milestone cards show the title only (differs from TST since 2026-10-27) (recommended: a)
- Answer (user, 2026-10-29T10:38:14): (a) (user, 2026-10-29): set the six Admin* ids of lib/orbit/staticEntities.ts to the live TST moduleinfo values (version 15682): meeting-admin, meeting-meal, meal-at-hall-admin, accommodation-admin, transport-vehicle-admin, break-admin (decision (c) of 2026-10-28: the live TST code wins).
