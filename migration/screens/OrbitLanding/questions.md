# Questions: OrbitLanding

Managed by route.py. Facts may be answered by the OutSystems MCP; decisions and reviews only by the user.

## Q1 [decision] API contract (answered)
- Question: DataActionGet_HouseholdMembers and DataActionGet_EventsByMemberId (Connect2_OrbitMobile_MUI, owner ScreenBlock_OrbitLanding) are not in the API contract, so callAction cannot type them (CR-OrbitLanding-1). Build with a temporary bridge in api.ts until the CR lands?
- Evidence: grep ScreenBlock_OrbitLanding app/src/api/openapi.yaml: no hit; no Connect2_OrbitMobile_MUI module in the contract nor in SERVER_REQUEST_TIMEOUT (app/src/lib/api.ts:53); calls.json rows 2-3 (phase load)
- OutSystems MCP: unavailable (route agent, no MCP)
- Options: A: CR-OrbitLanding-1 + one @ts-expect-error per call in api.ts (the real path, mocked by MSW; the directive turns into a compile error once the contract has the actions, so it must be removed with the CR) | B: null adapters until the CR (the screen stays on the skeleton, parity of default fails) (recommended: A)
- Answer (user, 2026-10-16T09:19:48): A (recommended), auto-accepted (user instruction 2026-10-16 night): the bridge is temporary; the regenerated contract (O-B3) now has Connect2_OrbitMobile_MUI, so the @ts-expect-error bridge is removed in favour of typed callAction (CR-OrbitLanding-1 applied by the contract regeneration)

## Q2 [decision] Filters and Sort popups (answered)
- Question: Popup_OrbitLanding_Filters and Popup_OrbitLanding_Sort are in no captured state (only opened by a click). Render them as NotCaptured now and capture them later, or build them from the compiled code only?
- Evidence: pack Gaps: Orbit_Blocks.Popup_OrbitLanding_Filters / _Sort not rendered in any captured state; ScreenBlock_OrbitLanding.mvc.js view :586-682 (OSWidgets.Popup inside Root_Filters / Root_Sort, CopyClassesAcrossPortal on componentDidUpdate); the Sort popup needs a Boolean RadioGroup (OSRadioGroup takes string|number) and CopyClassesAcrossPortal is not in shared
- OutSystems MCP: unavailable (route agent, no MCP)
- Options: A: toggles, caret icons and popup state built; the open popup renders NotCaptured; add capture-plan steps (click Upcoming Events, click Sort By) and build both popups from that capture with ApplyFilters / ApplySort | B: build both popups now from the compiled views without a capture (recommended: A)
- Answer (user, 2026-10-16T09:19:49): A (recommended), auto-accepted (user instruction 2026-10-16 night): capture-plan steps open the Filters and Sort popups (read-only capture), then build them from that capture

## Q3 [decision] CurrentMemberId in the mock (answered)
- Question: CurrentMemberId = TextToInteger(AppManager_GetCachedUserInfo.MemberId); the shell keeps MemberId empty in the mock (rule 16), so CurrentMemberId = 0: the My calendar icon (HeaderRight) never shows and View Passport details does nothing (guard IsFetchingData or CurrentMemberId = 0). Keep it?
- Evidence: ScreenBlock_OrbitLanding.mvc.js ctrl :1729-1745 (OnReady), :1999 (OnHandle_ViewPassportDetails guard), view :255-276 (HeaderRight If); app/src/shell/mockUser.ts mockCachedUserInfo (only CountryCode); capture dom/default.html:48 HeaderRight empty
- OutSystems MCP: unavailable (route agent, no MCP)
- Options: A: keep (as the shell provides; matches the capture; PassportScan and MyEntertaining navigation built but not reachable in the mock) | B: change request to the shell to put the fictional mock member id into the cached user info (recommended: A)
- Answer (user, 2026-10-16T09:19:49): A (recommended), auto-accepted (user instruction 2026-10-16 night): cached MemberId empty as in the shell, CurrentMemberId 0 (My-calendar icon hidden, View Passport details inert in the mock)

## Q4 [decision] Popup position and radio look (popup states) (answered)
- Question: The popup-filters / popup-sort states differ only in pixels (about 6%): the TST popups sit at top 204px (GetPopupMeasurements read .header = 204 at OnReady on TST) while the clone's header is 174 (the replayed TST header is 174 too), and the replayed reference shows the radios unchecked because the capture does not serialize the checked property. Keep the faithful build and accept these two as capture artifacts?
- Evidence: dom/popup-filters.raw.html (#b1-Popup_Filters style top: 204px), dom/popup-sort.raw.html (top: 204px; left: 185px); SB :2200-2214 GetMeasurements JS (.header offsetHeight); parity/popup-*.json pixel only (structure/class/attr/style/layout 0); probe: build .header offsetHeight 174 with and 164 without members; OutSystemsReactWidgets.js RadioButton checked = isSelected (aria-activedescendant shows the selected one)
- OutSystems MCP: unavailable (route agent, no MCP)
- Options: A: keep the measured top and the checked radios; narrow pixel exemption for the two popup states (proposed-exemptions.json) | B: hard-code top 204px to match the capture (diverges from the original's measurement on other headers) (recommended: A)
- Answer (user, 2026-10-16T09:56:58): A (recommended), auto-accepted (user instruction 2026-10-16 night): keep the measured popup top and the checked radios; narrow pixel exemption on the two popup states (capture artifacts)

## Q5 [review] review round 1 (answered, blocking)
- Question: Please test this route and confirm, or tell me what to change. Decisions to confirm: Q1 → A, Q2 → A, Q3 → A (answered by the orchestrator); Q4 → A (pending orchestrator answer).; Popup widget port: the Popup's componentDidUpdate setState re-render is ported in `OrbitLandingPopup` (keeps; Mock data (fictional, `app/src/mocks/fictional/orbit.ts`, shared with later Orbit routes): Orbit members = the; Proposed exemptions (proposed-exemptions.json): `ORBITLANDING-SKELETON-SHIMMER-PHASE-OFFLINE` (shimmer phase),; CR-OrbitLanding-1 (contract). Feature flags: action:connect_LaunchDarkly_PermissionCheck → not a flag (false positive): shared wrapper that reads LaunchDarkly flags (the flags are decided one by one); behaviour built as in the original (user, 2026-10-14); action:getHasC1DirectoryView → default-only: TST value on (user, 2026-10-14); action:getHasNewBookmarks → default-only: TST value off (user, 2026-10-14); action:getHasOrbitAccess → default-only: TST value on (user, 2026-10-14); clientVar:App_PIN_BiometricEnabled → not a flag (false positive): user setting for biometric unlock, kept in a client variable; behaviour built as in the original (user, 2026-10-14); launchDarkly_FF.mobileDirectoryBookmarkNote → default-only: TST value off (user, 2026-10-14)
- Evidence: route-spec.md, parity reports, feedback.md
- Options: confirm | change (say what)
- Answer (user, 2026-10-16T09:57:20): confirm (auto-confirmed: user instruction 2026-10-15 16:59)

## Q6 [review] review round 2 (answered, blocking)
- Question: Please test this route and confirm, or tell me what to change. Decisions to confirm: Q1 → A, Q2 → A, Q3 → A (answered by the orchestrator); Q4 → A (pending orchestrator answer).; Popup widget port: the Popup's componentDidUpdate setState re-render is ported in `OrbitLandingPopup` (keeps; Mock data (fictional, `app/src/mocks/fictional/orbit.ts`, shared with later Orbit routes): Orbit members = the; Proposed exemptions (proposed-exemptions.json): `ORBITLANDING-SKELETON-SHIMMER-PHASE-OFFLINE` (shimmer phase),; CR-OrbitLanding-1 (contract). Feature flags: action:connect_LaunchDarkly_PermissionCheck → not a flag (false positive): shared wrapper that reads LaunchDarkly flags (the flags are decided one by one); behaviour built as in the original (user, 2026-10-14); action:getHasC1DirectoryView → default-only: TST value on (user, 2026-10-14); action:getHasNewBookmarks → default-only: TST value off (user, 2026-10-14); action:getHasOrbitAccess → default-only: TST value on (user, 2026-10-14); clientVar:App_PIN_BiometricEnabled → not a flag (false positive): user setting for biometric unlock, kept in a client variable; behaviour built as in the original (user, 2026-10-14); launchDarkly_FF.mobileDirectoryBookmarkNote → default-only: TST value off (user, 2026-10-14)
- Evidence: route-spec.md, parity reports, feedback.md
- Options: confirm | change (say what)
- Answer (user, 2026-10-16T11:24:19): confirm (auto-confirmed: user instruction 2026-10-15 16:59)

## Q7 [review] review round 3 (answered, blocking)
- Question: Please test this route and confirm, or tell me what to change. Decisions to confirm: Q1 → A, Q2 → A, Q3 → A (answered by the orchestrator); Q4 → A (pending orchestrator answer).; Popup widget port: the Popup's componentDidUpdate setState re-render is ported in `OrbitLandingPopup` (keeps; Mock data (fictional, `app/src/mocks/fictional/orbit.ts`, shared with later Orbit routes): Orbit members = the; Proposed exemptions (proposed-exemptions.json): `ORBITLANDING-SKELETON-SHIMMER-PHASE-OFFLINE` (shimmer phase),; CR-OrbitLanding-1 (contract). Feature flags: action:connect_LaunchDarkly_PermissionCheck → not a flag (false positive): shared wrapper that reads LaunchDarkly flags (the flags are decided one by one); behaviour built as in the original (user, 2026-10-14); action:getHasC1DirectoryView → default-only: TST value on (user, 2026-10-14); action:getHasNewBookmarks → default-only: TST value off (user, 2026-10-14); action:getHasOrbitAccess → default-only: TST value on (user, 2026-10-14); clientVar:App_PIN_BiometricEnabled → not a flag (false positive): user setting for biometric unlock, kept in a client variable; behaviour built as in the original (user, 2026-10-14); launchDarkly_FF.mobileDirectoryBookmarkNote → default-only: TST value off (user, 2026-10-14)
- Evidence: route-spec.md, parity reports, feedback.md
- Options: confirm | change (say what)
- Answer (user, 2026-10-16T14:33:33): confirm (auto-confirmed: user instruction 2026-10-15 16:59)
