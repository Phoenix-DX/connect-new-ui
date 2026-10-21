# Questions: BrowseCountries

Managed by route.py. Facts may be answered by the OutSystems MCP; decisions and reviews only by the user.

## Q1 [decision] card click without access (answered, blocking)
- Question: Handler_StatisticsList_Clicked: when HasAccessToRegion is False the original runs App_Subscription_ShowUpgradePopUp; this branch was not captured (the mock user's plan is Global, so every country is accessible). Build it as compiled with the shell's showUpgradePopUp, or render it NotCaptured?
- Evidence: UBTConnect.Directory_Locality.BrowseCountries.mvc.js:389-445 (HasAccessToRegion → navigate BrowseDirectory(CountryCode) else App_Subscription_ShowUpgradePopUp); app/src/shell/mockUser.ts:62 SubscriptionType Global; shell/dialogs showUpgradePopUp used by FilterSheet_Icon
- Options: build as compiled with the shell's showUpgradePopUp | render NotCaptured (recommended: build as compiled with the shell's showUpgradePopUp)
- Answer (user, 2026-10-15T17:10:01): A (recommended): build the subscription upgrade popup with the shell's showUpgradePopUp — auto-accepted (user instruction 2026-10-15 16:59)

## Q2 [review] review round 1 (answered, blocking)
- Question: Please test this route and confirm, or tell me what to change. Decisions to confirm: The no-access branch calls the shell's `showUpgradePopUp` (Q1, auto-accepted).; The mock user's plan is Global (app/src/shell/mockUser.ts:62), so every country card navigates to BrowseDirectory. Feature flags: action:connect_LaunchDarkly_PermissionCheck → not a flag (false positive): shared wrapper that reads LaunchDarkly flags (the flags are decided one by one); behaviour built as in the original (user, 2026-10-14); action:getFlagURLByCountryCode → not a flag (false positive): country flag image URL; behaviour built as in the original (user, 2026-10-14); action:getHasC1DirectoryView → default-only: TST value on (user, 2026-10-14); action:getHasNewBookmarks → default-only: TST value off (user, 2026-10-14); clientVar:App_PIN_BiometricEnabled → not a flag (false positive): user setting for biometric unlock, kept in a client variable; behaviour built as in the original (user, 2026-10-14); launchDarkly_FF.mobileDirectoryBookmarkNote → default-only: TST value off (user, 2026-10-14)
- Evidence: route-spec.md, parity reports, feedback.md
- Options: confirm | change (say what)
- Answer (user, 2026-10-15T17:13:16): confirm (auto-confirmed: user instruction 2026-10-15 16:59)
