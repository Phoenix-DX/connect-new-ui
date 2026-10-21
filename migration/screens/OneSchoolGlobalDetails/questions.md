# Questions: OneSchoolGlobalDetails

Managed by route.py. Facts may be answered by the OutSystems MCP; decisions and reviews only by the user.

## Q1 [fact] error handling (answered)
- Question: What does the Directory_OneSchoolGlobal flow exception handler (OneSchoolGlobalDetails controller handleError → _flow_UBTConnect_Directory_OneSchoolGlobalController.handleError) do? UBTConnect.Directory_OneSchoolGlobal.controller.js is not in any local source. Built conservatively like Directory_Locality (→ App_Common.handleError = shell raiseToFlowHandler).
- Evidence: OneSchoolGlobalDetails.mvc.js:1450-1452; migration/knowledge/runtime-sources.md (Directory_Locality.controller.js → App_Common.handleError); loading dom shows the App_Common high-traffic message after the fetch timeout (dom/loading.html:2-19)
- OutSystems MCP: MCP not available to route agents
- Answer (code, 2026-10-15T17:38:12): migration/runtime-sources/UBTConnect.Directory_OneSchoolGlobal.controller.js (fetched read-only): handleError delegates to App_Common.handleError, so raiseToFlowHandler is right

## Q2 [decision] mocks (answered)
- Question: DataActionGetOneSchoolGlobalDetails has one recording, whose In_OneSchoolGlobalId was anonymised (4281) and differs from the captured route id (1430). Serve that recording for every In_OneSchoolGlobalId (recordedHandler matchInputs off, no console warning), or match inputs (warning on every call, same data)?
- Evidence: app/src/mocks/fixtures/UBTConnect/DataActionGetOneSchoolGlobalDetails/01-5a0e2715.json inputs; analysis/states.json route In_OneSchoolGlobalId=1430
- OutSystems MCP: n/a (mock decision)
- Options: A: serve the one recording for every id (matchInputs off) | B: match inputs (console warning, first recording) (recommended: A)
- Answer (user, 2026-10-15T17:38:12): A (recommended), auto-accepted (user instruction 2026-10-15 16:59)

## Q3 [decision] platform widget (answered)
- Question: The screen renders the platform ButtonGroup / ButtonGroupItem widgets (OSWidgets, not an OSUI pattern), used by no other built route. Port them in the route (app/src/screens/OneSchoolGlobalDetails/components/ButtonGroup.tsx, from OutSystemsReactWidgets.js AbstractButtonGroup / ButtonGroupItem), or file a change request for a foundation component next to OSList?
- Evidence: OneSchoolGlobalDetails.mvc.js:935-984; migration/runtime-sources/OutSystemsReactWidgets.js (AbstractButtonGroup, ButtonGroupItem); grep: no button-group in app/src
- OutSystems MCP: n/a
- Options: A: port in the route's components now | B: change request to foundation (NotCaptured until built) (recommended: A)
- Answer (user, 2026-10-15T17:38:12): A (recommended), auto-accepted (user instruction 2026-10-15 16:59)

## Q4 [decision] parity exemptions (answered)
- Question: Add the two capture-artifact exemptions proposed in migration/screens/OneSchoolGlobalDetails/proposed-exemptions.json to migration/parity-exemptions.json (the route agent's write was refused by the permission system): CAPTURE-MASKED-IMAGE-ONESCHOOLGLOBALDETAILS (default, layout/position of the masked school photo) and CAPTURE-LOADING-FETCH-TIMEOUT-ONESCHOOLGLOBALDETAILS-ACTIONS (loading, actions menu after the TST fetch timeout)?
- Evidence: parity/default.json layout 390x26 -> 390x260 (dom/default.html:61-62 masked image); parity/loading.json b14 class/style diffs vs dom/loading.html:197-365 (FetchContactDetails timed out; offline state matches)
- OutSystems MCP: n/a
- Options: A: add both as proposed | B: review page instead of exemptions (recommended: A)
- Answer (user, 2026-10-15T17:38:12): A (recommended), auto-accepted (user instruction 2026-10-15 16:59)

## Q5 [review] review round 1 (answered, blocking)
- Question: Please test this route and confirm, or tell me what to change. Decisions to confirm: Q1 → App_Common flow handler (fact, pending orchestrator answer).; Q2 → A: serve the one recording for every In_OneSchoolGlobalId (pending orchestrator answer).; Q3 → A: ButtonGroup ported in the route's components (pending orchestrator answer).; Q4 → A: add the two proposed exemptions (`proposed-exemptions.json`; the route agent's write was refused).; CR-OneSchoolGlobalDetails-1 (= CR-HouseholdDetails-1 #1 and #4): actions menu skeleton in default; aria-hidden /; Mock photo: neutral landscape placeholder for SignedURL (rule Q-W2C-1, user 2026-10-14). Feature flags: action:connect_LaunchDarkly_PermissionCheck → not a flag (false positive): shared wrapper that reads LaunchDarkly flags (the flags are decided one by one); behaviour built as in the original (user, 2026-10-14); action:getHasC1DirectoryView → default-only: TST value on (user, 2026-10-14); action:getHasExtendedShare → default-only: TST value on (user, 2026-10-14); action:getHasNewBookmarks → default-only: TST value off (user, 2026-10-14); clientVar:App_PIN_BiometricEnabled → not a flag (false positive): user setting for biometric unlock, kept in a client variable; behaviour built as in the original (user, 2026-10-14); launchDarkly_FF.mobileDirectoryBookmarkNote → default-only: TST value off (user, 2026-10-14); launchDarkly_FF.mobileStudentInformation → default-only: TST value on (user, 2026-10-14); registeredCallbackEvents.onToggle → not a flag (false positive): bottom sheet toggle event; behaviour built as in the original (user, 2026-10-14)
- Evidence: route-spec.md, parity reports, feedback.md
- Options: confirm | change (say what)
- Answer (user, 2026-10-15T20:17:12): confirm (auto-confirmed: user instruction 2026-10-15 16:59)

## Q6 [review] review round 2 (answered, blocking)
- Question: Please test this route and confirm, or tell me what to change. Decisions to confirm: Q1 → App_Common flow handler (fact, pending orchestrator answer).; Q2 → A: serve the one recording for every In_OneSchoolGlobalId (pending orchestrator answer).; Q3 → A: ButtonGroup ported in the route's components (pending orchestrator answer).; Q4 → A: add the two proposed exemptions (`proposed-exemptions.json`; the route agent's write was refused).; CR-OneSchoolGlobalDetails-1 (= CR-HouseholdDetails-1 #1 and #4): actions menu skeleton in default; aria-hidden /; Mock photo: neutral landscape placeholder for SignedURL (rule Q-W2C-1, user 2026-10-14). Feature flags: action:connect_LaunchDarkly_PermissionCheck → not a flag (false positive): shared wrapper that reads LaunchDarkly flags (the flags are decided one by one); behaviour built as in the original (user, 2026-10-14); action:getHasC1DirectoryView → default-only: TST value on (user, 2026-10-14); action:getHasExtendedShare → default-only: TST value on (user, 2026-10-14); action:getHasNewBookmarks → default-only: TST value off (user, 2026-10-14); clientVar:App_PIN_BiometricEnabled → not a flag (false positive): user setting for biometric unlock, kept in a client variable; behaviour built as in the original (user, 2026-10-14); launchDarkly_FF.mobileDirectoryBookmarkNote → default-only: TST value off (user, 2026-10-14); launchDarkly_FF.mobileStudentInformation → default-only: TST value on (user, 2026-10-14); registeredCallbackEvents.onToggle → not a flag (false positive): bottom sheet toggle event; behaviour built as in the original (user, 2026-10-14)
- Evidence: route-spec.md, parity reports, feedback.md
- Options: confirm | change (say what)
- Answer (user, 2026-10-16T06:59:05): confirm (auto-confirmed: user instruction 2026-10-15 16:59)
