# Questions: LDM_MyEvents_V2

Managed by route.py. Facts may be answered by the OutSystems MCP; decisions and reviews only by the user.

## Q1 [decision] filter popup (answered)
- Question: The filter icon opens Event_Filters_PopUp with LDM_Blocks.MyTimeline_Filters, which no capture shows (pack Gaps). Build the toggle and the popup shell from the compiled code and render the popup content as NotCaptured, or build MyTimeline_Filters from its compiled view?
- Evidence: MyEvents_MyTimelineFilterButton.mvc.js view :205-260 (Popup popup-dialog my-events-popup-filters, MyTimeline_Filters); pack Gaps: LDM_Blocks.MyTimeline_Filters not rendered
- OutSystems MCP: MCP not available to route agents
- Options: A: toggle + popup with NotCaptured content (filter/reset events not reachable) | B: build MyTimeline_Filters from the compiled code (date range + localities form) without a capture (recommended: A)
- Answer (user, 2026-10-16T10:19:02): A (recommended), auto-accepted (user instruction 2026-10-16 night): filter toggle and popup built, MyTimeline_Filters content NotCaptured (never captured)

## Q2 [decision] expanded guest list (answered)
- Question: Tapping the overlapping photos expands the card's guest households (EventCard_Guests List_Guests: Result_Item_Image + Person_Contact_Options + angle-right). No capture shows it. Build it from the compiled code with the fictional guests, or render NotCaptured?
- Evidence: EventCard_Guests.mvc.js view :240-330 (IsExpanded container, List_Guests), controller :633-640 ToggleGuestList; dom/default.html shows only the collapsed cards
- OutSystems MCP: MCP not available to route agents
- Options: A: build from the compiled code (shared Result_Item_Image / Person_Contact_Options, call/email/household actions as compiled) | B: NotCaptured for the expanded list (recommended: A)
- Answer (user, 2026-10-16T10:19:02): A (recommended), auto-accepted (user instruction 2026-10-16 night): expanded guest list built from the compiled code

## Q3 [review] review round 1 (answered, blocking)
- Question: Please test this route and confirm, or tell me what to change. Decisions to confirm: Q1 → A (pending orchestrator answer): filter popup with NotCaptured content.; Q2 → A (pending orchestrator answer): expanded guest list built from the compiled code.; Fictional data for the two unrecorded data actions (5 past events, captured counts; shared `src/mocks/fictional/ldm.ts`).; MenuIcon: the Orbit `MenuAction.Auto` is passed as Back, as the captured `app-menu-icon back` shows (dom/default.html:201).; Proposed exemptions (not applied): guest photo background-image + pixel (data drift), NetworkWarning animation phase. Feature flags: action:connect_LaunchDarkly_PermissionCheck → not a flag (false positive): shared wrapper that reads LaunchDarkly flags (the flags are decided one by one); behaviour built as in the original (user, 2026-10-14); action:getHasC1DirectoryView → default-only: TST value on (user, 2026-10-14); action:getHasCarouselEnabled → default-only: TST value on (user, 2026-10-14); action:getHasNewBookmarks → default-only: TST value off (user, 2026-10-14); clientVar:App_PIN_BiometricEnabled → not a flag (false positive): user setting for biometric unlock, kept in a client variable; behaviour built as in the original (user, 2026-10-14); launchDarkly_FF.mobileDirectoryBookmarkNote → default-only: TST value off (user, 2026-10-14)
- Evidence: route-spec.md, parity reports, feedback.md
- Options: confirm | change (say what)
- Answer (user, 2026-10-16T10:19:14): confirm (auto-confirmed: user instruction 2026-10-15 16:59)

## Q4 [review] review round 2 (answered, blocking)
- Question: Please test this route and confirm, or tell me what to change. Decisions to confirm: Q1 → A (pending orchestrator answer): filter popup with NotCaptured content.; Q2 → A (pending orchestrator answer): expanded guest list built from the compiled code.; Fictional data for the two unrecorded data actions (5 past events, captured counts; shared `src/mocks/fictional/ldm.ts`).; MenuIcon: the Orbit `MenuAction.Auto` is passed as Back, as the captured `app-menu-icon back` shows (dom/default.html:201).; Proposed exemptions (not applied): guest photo background-image + pixel (data drift), NetworkWarning animation phase. Feature flags: action:connect_LaunchDarkly_PermissionCheck → not a flag (false positive): shared wrapper that reads LaunchDarkly flags (the flags are decided one by one); behaviour built as in the original (user, 2026-10-14); action:getHasC1DirectoryView → default-only: TST value on (user, 2026-10-14); action:getHasCarouselEnabled → default-only: TST value on (user, 2026-10-14); action:getHasNewBookmarks → default-only: TST value off (user, 2026-10-14); clientVar:App_PIN_BiometricEnabled → not a flag (false positive): user setting for biometric unlock, kept in a client variable; behaviour built as in the original (user, 2026-10-14); launchDarkly_FF.mobileDirectoryBookmarkNote → default-only: TST value off (user, 2026-10-14)
- Evidence: route-spec.md, parity reports, feedback.md
- Options: confirm | change (say what)
- Answer (user, 2026-10-16T11:23:56): confirm (auto-confirmed: user instruction 2026-10-15 16:59)

## Q5 [review] review round 3 (answered, blocking)
- Question: Please test this route and confirm, or tell me what to change. Decisions to confirm: Q1 → A (pending orchestrator answer): filter popup with NotCaptured content.; Q2 → A (pending orchestrator answer): expanded guest list built from the compiled code.; Fictional data for the two unrecorded data actions (5 past events, captured counts; shared `src/mocks/fictional/ldm.ts`).; MenuIcon: the Orbit `MenuAction.Auto` is passed as Back, as the captured `app-menu-icon back` shows (dom/default.html:201).; Proposed exemptions (not applied): guest photo background-image + pixel (data drift), NetworkWarning animation phase. Feature flags: action:connect_LaunchDarkly_PermissionCheck → not a flag (false positive): shared wrapper that reads LaunchDarkly flags (the flags are decided one by one); behaviour built as in the original (user, 2026-10-14); action:getHasC1DirectoryView → default-only: TST value on (user, 2026-10-14); action:getHasCarouselEnabled → default-only: TST value on (user, 2026-10-14); action:getHasNewBookmarks → default-only: TST value off (user, 2026-10-14); clientVar:App_PIN_BiometricEnabled → not a flag (false positive): user setting for biometric unlock, kept in a client variable; behaviour built as in the original (user, 2026-10-14); launchDarkly_FF.mobileDirectoryBookmarkNote → default-only: TST value off (user, 2026-10-14)
- Evidence: route-spec.md, parity reports, feedback.md
- Options: confirm | change (say what)
- Answer (user, 2026-10-16T15:01:14): confirm (auto-confirmed: user instruction 2026-10-15 16:59)
