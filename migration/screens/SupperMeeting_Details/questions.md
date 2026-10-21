# Questions: SupperMeeting_Details

Managed by route.py. Facts may be answered by the OutSystems MCP; decisions and reviews only by the user.

## Q1 [decision] shared CRs before review (answered, blocking)
- Question: Parity of SupperMeeting_Details still differs only in shared blocks and shared mocks: UBT_LazyImage does not refetch when EntityId changes (no-photo fallback, 1x vs 2x GetSignedImagesInBulk), FetchContactDetails/household mocks miss the captured shapes (CR-SupperMeeting_Details-1), actions-menu skeleton and aria-hidden/popup-disable-scroll (CR-HouseholdDetails-1). Apply the CRs and re-run parity before the review, or review now with these differences listed?
- Evidence: migration/screens/SupperMeeting_Details/parity/default.json, loading.json; migration/change-requests/CR-SupperMeeting_Details-1.md; CR-HouseholdDetails-1.md
- OutSystems MCP: n/a (no MCP for route agents)
- Options: A: apply CR-SupperMeeting_Details-1 + CR-HouseholdDetails-1, re-run parity, then ready | B: review now with the differences listed (recommended: A)
- Answer (user, 2026-10-15T17:38:40): A (recommended), auto-accepted (user instruction 2026-10-15 16:59): apply CR-SupperMeeting_Details-1 and CR-HouseholdDetails-1, re-run parity, then ready; 3 capture exemptions merged

## Q2 [review] review round 1 (answered, blocking)
- Question: Please test this route and confirm, or tell me what to change. Decisions to confirm: Q1 → A (pending orchestrator answer): apply CR-SupperMeeting_Details-1 and CR-HouseholdDetails-1, re-run parity,; DataActionGetSubdivisionHouseholds answers fictional data (11 neutral households, the captured count) from the shared; DataActionGetSubdivision answers the recorded fixture for any `In_SubdivsionId` (shared block mocks.ts).; Back navigation refetches instead of restoring the cached view (shared block README).; Change request CR-SupperMeeting_Details-1 (UBT_LazyImage OnParametersChanged; shared mocks: no contact details for; Proposed parity exemptions (capture artifacts: masked photos, gallery rows, loading fetch timeout): Feature flags: action:getHasCarouselEnabled → default-only: TST value on (user, 2026-10-14); action:getHasExtendedShare → default-only: TST value on (user, 2026-10-14); action:getHasNewBookmarks → default-only: TST value off (user, 2026-10-14); clientVar:App_PIN_BiometricEnabled → not a flag (false positive): user setting for biometric unlock, kept in a client variable; behaviour built as in the original (user, 2026-10-14); registeredCallbackEvents.onToggle → not a flag (false positive): bottom sheet toggle event; behaviour built as in the original (user, 2026-10-14)
- Evidence: route-spec.md, parity reports, feedback.md
- Options: confirm | change (say what)
- Answer (user, 2026-10-15T20:17:24): confirm (auto-confirmed: user instruction 2026-10-15 16:59)
