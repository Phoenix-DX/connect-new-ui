# Orbit, Assemble and LDM are part of UBTConnect (not embedded, not separate apps)

User, 2026-10-16: "Orbit không phải là embedded app" (English: "Orbit is not an embedded app") — implement the Orbit routes; LDM, EmailContact and Assemble too.
This supersedes the 2026-10-14 scope decision D9 (`skip:external`, context-003).

- Their screens are `UBTConnect` screens: route `/UBTConnect/<Screen>`, same SPA, no iframe (scope-review.md §embedded).
  The UI comes mostly from blocks of other modules:
  `Connect2_OrbitMobile_MUI` (12 Orbit screens, 6 LDM screens, EmailContact; 99 blocks) and
  `Connect2_Assemble_MUI` (AssembleEvents, AssembleDetail, Assemble_BrowseByCountry; 26 blocks).
- In scope now (26 screens):
  - OrbitLanding, OrbitAdminLanding, OrbitAdminEventDetail, EventDetail, EventBooklet, MilestoneDetail,
    GuestArrangements, HelpersDetail, HostSurvey, TransportDetail, ViewDocuments, QRCodeGenerate,
    ContactByEmailOrbitHelpdesk, ContactByEmailOrbitHost, EmailContact.
  - LDM_MyEvents(_V2), LDM_EventDetail(_V2), LDM_Email(_V2), ContactByEmailLDMCoordinator, EmailTarget.
  - AssembleEvents, AssembleDetail, Assemble_BrowseByCountry.
- Entry points in built screens already navigate to the original paths (HomeFeed FeedBlock_Services → OrbitLanding,
  OrbitAdminLanding, LDM_MyEvents_V2, AssembleEvents; MessageDetail Orbit/Assemble handlers): they work once built.
- No TST data for a screen (read-only capture impossible): build from the compiled code with meaningful fictional
  mocks, `route.py no-capture --by user` (user, 2026-10-16).
- Compiled code: `migration/runtime-sources/Connect2_OrbitMobile_MUI.controller.js` (fetched 2026-10-15) and the
  per-screen `.mvc.js` in the survey.

## Trove (user, 2026-10-16 night: "Orbit, Assemble, Trove và LDM (Lord's meal)" (English: "Orbit, Assemble, Trove and LDM (Lord's meal)"))
Trove has no screen in UBTConnect: it is a separate native app (`com.ubtconnectglobal.ubtm.TroveMobile`, package from
`GetServices.ExterrnalPackages_Trove`). Connect opens it through the external-app dialog (Services / HomeFeed
FeedBlock_Services → `Dialog_GoExternalApp`, icon `UBT_Icons2.Trove`), already built as compiled. Nothing to add.
LDM = Lord's Day Meal (user, 2026-10-21; the note of 2026-10-16 above says "Lord's meal").

## Orbit detail screens wait for user data (user, 2026-10-16)
- The test account has no Orbit events (OrbitLanding / OrbitAdminLanding captured empty).
- The user will provide data
("Tôi cung cấp dữ liệu" (English: "I provide the data")). So these 13 Orbit detail screens are NOT no-capture:
EventDetail, EventBooklet, MilestoneDetail, GuestArrangements, HelpersDetail, HostSurvey, TransportDetail,
ViewDocuments, QRCodeGenerate, OrbitAdminEventDetail, ContactByEmailOrbitHelpdesk, ContactByEmailOrbitHost,
EmailContact.
- The marks are withdrawn (`no-capture.json.withdrawn-2026-10-16`).
- Capture them when the user gives ids or an account with Orbit data.

## V1 screens are not built (user, 2026-10-16: "những gì của V1 ko cần dựng" (English: "the V1 items do not need to be built"))
TST runs the V2 LDM screens (GetHasNewLDM on: the V1 event card navigates to LDM_EventDetail_V2). LDM_MyEvents,
LDM_EventDetail and LDM_Email (V1) are `skip`; the app builds LDM_MyEvents_V2, LDM_EventDetail_V2, LDM_Email_V2.

## Capture status with the full-permission account (2026-10-16)
Captured (TST, read-only): OrbitLanding (1 event), OrbitAdminLanding (empty: NoInformation_Orbit), EventDetail,
HostSurvey (default only), MilestoneDetail (default only, Accommodation), HelpersDetail, ContactByEmailOrbitHelpdesk
(default only), LDM_MyEvents_V2, LDM_EventDetail_V2, Assemble_BrowseByCountry, AssembleEvents.
No-capture (build from the compiled code): TransportDetail, GuestArrangements, ViewDocuments, QRCodeGenerate,
EventBooklet, OrbitAdminEventDetail, ContactByEmailOrbitHost, EmailContact, LDM_Email_V2,
ContactByEmailLDMCoordinator, EmailTarget, AssembleDetail. Capture-plan entries keep the tried `via` paths.
