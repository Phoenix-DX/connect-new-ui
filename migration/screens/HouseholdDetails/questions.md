# Questions: HouseholdDetails

Managed by route.py. Facts may be answered by the OutSystems MCP; decisions and reviews only by the user.

## Q1 [decision] parity / shared blocks (answered, blocking)
- Question: Default, loading and offline parity differ only inside shared blocks: behaviour bugs (CR-HouseholdDetails-1: actions menu stuck in skeleton via non-reactive Bookmarks/Notes_IsSynched read, skeleton members without HasNavigation default True, OSList without list-loading, aria-hidden on #reactContainer with the ShareSheet popup) and mock data (CR-HouseholdDetails-2: household contact details without phone/email, household bookmarked, text lengths). The route code itself has no difference. How to proceed?
- Evidence: migration/screens/HouseholdDetails/parity/{default,loading,offline}.json; migration/change-requests/CR-HouseholdDetails-1.md, CR-HouseholdDetails-2.md
- Options: A: foundation applies CR-HouseholdDetails-1 and -2, then the route re-runs parity and goes to ready | B: review the route now; the user reviews these states instead of parity until the CRs land (recommended: A: foundation applies CR-HouseholdDetails-1 and -2, then the route re-runs parity and goes to ready)
- Answer (user, 2026-10-15T17:21:04): A (recommended), auto-accepted (user instruction 2026-10-15 16:59): the foundation applies CR-HouseholdDetails-1/2, then parity and ready

## Q2 [decision] parity exemptions (answered, blocking)
- Question: Add the three capture/timing exemptions drafted in migration/screens/HouseholdDetails/proposed-exemptions.json (loading fetch timeout of the household photo, masked household photo layout, app-start order of GetUserInformation)? The route agent could not write parity-exemptions.json (permission system).
- Evidence: migration/screens/HouseholdDetails/proposed-exemptions.json; analysis/dom/default.html:56-57; analysis/dom/loading.html:50-60; analysis/calls.md #2
- Options: A: orchestrator merges the three entries as drafted | B: no exemptions (recommended: A: orchestrator merges the three entries as drafted)
- Answer (user, 2026-10-15T17:21:04): A (recommended), auto-accepted (user instruction 2026-10-15 16:59): 3 capture/timing exemptions merged (…-HOUSEHOLDDETAILS-IMAGE, CAPTURE-MASKED-IMAGE-HOUSEHOLDDETAILS, CALL-ORDER-APPSTART-USERINFO)

## Q3 [review] review round 1 (answered, blocking)
- Question: Please test this route and confirm, or tell me what to change. Decisions to confirm: Layout_DetailPage instance id: the original names it `DetailPage` (outer id) with inner ids `b1-…`; the shared; Mock data is the shared block's fictional household 9001 for every HouseholdId (block README "Data").; Q1 → A (pending orchestrator answer): the shared fixes CR-HouseholdDetails-1 (actions menu stuck in skeleton,; Q2 → A (pending orchestrator answer): three capture/timing exemptions as drafted in `proposed-exemptions.json`. Feature flags: action:connect_LaunchDarkly_PermissionCheck → not a flag (false positive): shared wrapper that reads LaunchDarkly flags (the flags are decided one by one); behaviour built as in the original (user, 2026-10-14); action:getHasC1DirectoryView → default-only: TST value on (user, 2026-10-14); action:getHasExtendedShare → default-only: TST value on (user, 2026-10-14); action:getHasNewBookmarks → default-only: TST value off (user, 2026-10-14); action:getHasPhotobookAccess → default-only: TST value on (user, 2026-10-14); clientVar:App_PIN_BiometricEnabled → not a flag (false positive): user setting for biometric unlock, kept in a client variable; behaviour built as in the original (user, 2026-10-14); launchDarkly_FF.mobileDirectoryBookmarkNote → default-only: TST value off (user, 2026-10-14); registeredCallbackEvents.onToggle → not a flag (false positive): bottom sheet toggle event; behaviour built as in the original (user, 2026-10-14)
- Evidence: route-spec.md, parity reports, feedback.md
- Options: confirm | change (say what)
- Answer (user, 2026-10-15T20:18:00): confirm (auto-confirmed: user instruction 2026-10-15 16:59)
