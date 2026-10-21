# Questions: AssembleDetail

Managed by route.py. Facts may be answered by the OutSystems MCP; decisions and reviews only by the user.

## Q1 [decision] contract (answered)
- Question: AssembleEventDetail_AttendeeSubdivision OnReady calls GetCacheableSubdivision_V2 → server action Connect2_LegacyShared ActionGetBulkSubdivisions_V2, which is not in the API contract (callAction cannot compile). How should the expanded hall list behave until CR-AssembleDetail-1 is applied?
- Evidence: sources/Connect2_Assemble_MUI.Assemble.AssembleEventDetail_AttendeeSubdivision.mvc.js:1742-1830; migration/runtime-sources/Connect2_LegacyShared.controller.js:3088, :7691-7702; app/src/api/openapi.yaml has no ActionGetBulkSubdivisions_V2
- OutSystems MCP: not asked (no MCP in this run)
- Options: A: CR-AssembleDetail-1; run OnReady up to BuildSkeletonList (the event's households plus HouseholdCount skeleton rows) and render <NotCaptured> for the fetch, no further call | B: show only the event's SubdivisionHouseholdList without skeleton rows (recommended: A)
- Answer (user, 2026-10-16T13:20:26): A (recommended), auto-accepted (user instruction 2026-10-16 night): CR-AssembleDetail-1 (GetBulkSubdivisions_V2) by foundation F15; NotCaptured until then

## Q2 [decision] contract (answered)
- Question: The household bookmark (ContextMenu → Handler_OnClickBookmarkButton → Connect2_Assemble_MUI ToggleBookmarkItem) calls the server actions AddBookmark / DeleteBookmarkByBookmarkId of Connect2_Assemble_MUI, which are not in the API contract. What should the clone do until CR-AssembleDetail-2 is applied?
- Evidence: AttendeeSubdivision.mvc.js:1901-2080; migration/screens/AssembleEvents/analysis/sources/pretty/Connect2_Assemble_MUI.controller.js:1493-1613; F9 note (orchestrator)
- OutSystems MCP: not asked (no MCP in this run)
- Options: A: CR-AssembleDetail-2; keep MaybeDisplaySubscriptionPopup and the Bookmark_Note ConfirmAction as compiled, then show <NotCaptured> in the row instead of ToggleBookmarkItem (no call, IsBookmarked unchanged) | B: toggle only the shell's legacy local bookmark without a server call (recommended: A)
- Answer (user, 2026-10-16T13:20:26): A (recommended), auto-accepted (user instruction 2026-10-16 night): CR-AssembleDetail-2 (Assemble AddBookmark / DeleteBookmarkByBookmarkId on the shell local bookmarks) by foundation F15

## Q3 [review] review round 1 (answered, blocking)
- Question: Please test this route and confirm, or tell me what to change. Decisions to confirm: No-capture route: built from the compiled code; the user reviews by hand (no parity).; Mock world: `mocks/fictional/assemble.ts` extended with meeting details (invited halls of the locality, interchange; Q1 → A, Q2 → A (auto-accept mode, pending orchestrator answer). Feature flags: action:connect_LaunchDarkly_PermissionCheck → not a flag (false positive): shared wrapper that reads LaunchDarkly flags (the flags are decided one by one); behaviour built as in the original (user, 2026-10-14); action:getHasBookmarNote → default-only: TST value off (user, 2026-10-14); action:getHasC1DirectoryView → default-only: TST value on (user, 2026-10-14); action:getHasCarouselEnabled → default-only: TST value on (user, 2026-10-14); action:getHasExtendedShare → default-only: TST value on (user, 2026-10-14); action:getHasNewBookmarks → default-only: TST value off (user, 2026-10-14); action:getHasWalletAccess → default-only: TST value off (user, 2026-10-14); clientVar:App_PIN_BiometricEnabled → not a flag (false positive): user setting for biometric unlock, kept in a client variable; behaviour built as in the original (user, 2026-10-14); launchDarkly_FF.mobileDirectoryBookmarkNote → default-only: TST value off (user, 2026-10-14); registeredCallbackEvents.onToggle → not a flag (false positive): bottom sheet toggle event; behaviour built as in the original (user, 2026-10-14)
- Evidence: route-spec.md, parity reports, feedback.md
- Options: confirm | change (say what)
- Answer (user, 2026-10-16T13:36:54): confirm (auto-confirmed: user instruction 2026-10-15 16:59)
