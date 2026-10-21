# Questions: Assemble_BrowseByCountry

Managed by route.py. Facts may be answered by the OutSystems MCP; decisions and reviews only by the user.

## Q1 [decision] mock user subscription region (answered)
- Question: The country list needs a non-empty SubscriptionRegionId on the mock user (GetCacheableRegionSubscribedCountries raises ObjectNotFound on ''); TST's Global account has one (calls.json #4). Apply CR-Assemble_BrowseByCountry-1 (shell mockUser.ts SubscriptionRegionId '1') before review, or keep '' (default state shows only the Spinner)?
- Evidence: migration/runtime-sources/Connect2_LegacyShared.controller.js:3551-3679; analysis/calls.json #4 (SubscriptionRegionId sent); app/src/shell/mockUser.ts SubscriptionRegionId ''; migration/change-requests/CR-Assemble_BrowseByCountry-1.md
- OutSystems MCP: not asked (no MCP in this run); the capture proves a non-empty value
- Options: A: apply CR-1 now (value '1'), then re-run parity of Assemble_BrowseByCountry and AssembleEvents | B: keep '' (both Assemble routes show only the Spinner) (recommended: A)
- Answer (user, 2026-10-16T11:53:35): A (recommended), auto-accepted (user instruction 2026-10-16 night): CR-Assemble_BrowseByCountry-1 (mock user SubscriptionRegionId set) applied by foundation F13

## Q2 [review] review round 1 (answered, blocking)
- Question: Please test this route and confirm, or tell me what to change. Decisions to confirm: Q1 → A (pending orchestrator answer): CR-Assemble_BrowseByCountry-1 sets the mock user's SubscriptionRegionId to '1'; until applied the default state shows only the Spinner (parity default fails on that alone).; Fictional countries: the 17 captured rows, masked names replaced by real country names of the masked lengths whose flags the app ships (Ireland is the flag without a row); counts keep the rendered lengths, TST's unmasked counts kept (`src/mocks/fictional/assemble.ts`, mock-fixtures.md "Fictional text must be meaningful").; The mock answers every SubscriptionRegionId with the same 17 countries (the captured Global account sees all regions).; DIV_StickyBottom's show/hide animation (animate True) is not reproduced (as LocalityListDetail's header).; The no-results, localities and bottom-bar states were not captured: built from the compiled view, covered by `Assemble_BrowseByCountry.test.tsx`.; Proposed exemption CALL-ORDER-APPSTART-RACE-ASSEMBLE-BROWSEBYCOUNTRY (`proposed-exemptions.json`): app-start call order of GetCountriesBySubscription, once Q1/CR-1 lets it run. Feature flags: clientVar:App_PIN_BiometricEnabled → not a flag (false positive): user setting for biometric unlock, kept in a client variable; behaviour built as in the original (user, 2026-10-14)
- Evidence: route-spec.md, parity reports, feedback.md
- Options: confirm | change (say what)
- Answer (user, 2026-10-16T12:57:15): confirm (auto-confirmed: user instruction 2026-10-15 16:59)
