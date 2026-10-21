# Questions: PINRegister

Managed by route.py. Facts may be answered by the OutSystems MCP; decisions and reviews only by the user.

## Q1 [decision] parity (answered)
- Question: The PINRegister default capture has no device class osx on body and no slide-from-right-enter-done on the active screen (the same timing artifact the user accepted for loading/offline as CAPTURE-LOADING-BODYCLASS / CAPTURE-LOADING-TRANSITION); the app sets both, so default shows 2 class differences (pixels 0.00%). Exemption rules match only state name and element path, so an entry for this cannot be limited to PINRegister: it would apply to the default state of every route. How should it be handled?
- Evidence: migration/screens/PINRegister/analysis/dom/default.html:1,4 and states.json default bodyClass 'phone portrait is-ltr' vs Login default (CAPTURE-LOADING-BODYCLASS evidence: default.html:1 has osx); migration/screens/PINRegister/parity/default.json [class] body extra .osx, div.active-screen extra .slide-from-right-enter-done; parity_check.cjs:111-112 (rules filtered by state and pathRegex only)
- OutSystems MCP: not applicable (capture timing, no server fact)
- Options: A: recapture PINRegister default after the device classes and the screen transition are set (orchestrator, read-only) | B: accept as is: PINRegister default is a state the user reviews, with these 2 class differences, no exemption | C: add exemptions for body device classes and the transition class in the default state of every route (recommended: A)
- Answer (user, 2026-10-14T19:46:49): A+: generic parity exemption for animation-state classes (slide-from-*, *-enter(-active|-done)) on every route, and recapture the PINRegister default state read-only to check the body osx class (user, 2026-10-14)

## Q2 [review] review round 1 (answered, blocking)
- Question: Please test this route and confirm, or tell me what to change. Decisions to confirm: "Back to login" runs the shell's `signOut()` for `AppManager_Logout`, as the Login route does (Login Q2): it also; `AllowUpcomingNavigation` is called through `allowUpcomingNavigation` of `src/shell/navigation/navigationGate.ts`; Static entity identifiers `UBT_Icons2.ArrowLeftAlt` = `connect-icon-arrow_left_alt` and; Parity exemption `CAPTURE-LINK-HREF-CURSOR-PINREGISTER` (style, header link and its IconTex## Parity Feature flags: clientVar:App_PIN_BiometricEnabled → not a flag (false positive): user setting for biometric unlock, kept in a client variable; behaviour built as in the original (user, 2026-10-14)
- Evidence: route-spec.md, parity reports, feedback.md
- Options: confirm | change (say what)
- Answer (user, 2026-10-14T20:09:54): superseded by a newer review

## Q3 [review] review round 1 (answered, blocking)
- Question: Please test this route and confirm, or tell me what to change. Decisions to confirm: "Back to login" runs the shell's `signOut()` for `AppManager_Logout`, as the Login route does (Login Q2): it also; `AllowUpcomingNavigation` is called through `allowUpcomingNavigation` of `src/shell/navigation/navigationGate.ts`; Static entity identifiers `UBT_Icons2.ArrowLeftAlt` = `connect-icon-arrow_left_alt` and; Parity exemption `CAPTURE-LINK-HREF-CURSOR-PINREGISTER` (style, header link and its IconText: cursor auto in the; Body OS class (`osx`, `windows`, `ios`…) and screen transition classes (`slide-from-*`, `*-enter/exit(-active|-done)`) Feature flags: clientVar:App_PIN_BiometricEnabled → not a flag (false positive): user setting for biometric unlock, kept in a client variable; behaviour built as in the original (user, 2026-10-14)
- Evidence: route-spec.md, parity reports, feedback.md
- Options: confirm | change (say what)
- Answer (user, 2026-10-14T20:20:49): confirm (user, 2026-10-14: 'I confirm ok all')

## Q4 [review] review round 2 (answered, blocking)
- Question: Please test this route and confirm, or tell me what to change. Decisions to confirm: "Back to login" runs the shell's `signOut()` for `AppManager_Logout`, as the Login route does (Login Q2): it also; `AllowUpcomingNavigation` is `allowUpcomingNavigation` of `src/shell/navigation` (exported since CR-Splash-2); the; Static entity identifiers `UBT_Icons2.ArrowLeftAlt` = `connect-icon-arrow_left_alt` and; Parity exemption `CAPTURE-LINK-HREF-CURSOR-PINREGISTER` (style, header link and its IconText: cursor auto in the; Body OS class (`osx`, `windows`, `ios`…) and screen transition classes (`slide-from-*`, `*-enter/exit(-active|-done)`) Feature flags: clientVar:App_PIN_BiometricEnabled → not a flag (false positive): user setting for biometric unlock, kept in a client variable; behaviour built as in the original (user, 2026-10-14)
- Evidence: route-spec.md, parity reports, feedback.md
- Options: confirm | change (say what)
- Answer (user, 2026-10-14T20:51:43): confirm (user, 2026-10-14: re-stamp after foundation CR batch 1, parity 0)
