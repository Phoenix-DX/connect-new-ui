# Questions: PINBiometricsMenu

Managed by route.py. Facts may be answered by the OutSystems MCP; decisions and reviews only by the user.

## Q1 [review] review round 1 (answered, blocking)
- Question: Please test this route and confirm, or tell me what to change. Decisions to confirm: Biometric Login row: the original branch is kept in code behind `appManager_GetPIN_FingerprintReaderAvailable()` = False on the web (U13 option a; same stub as `PinUnlock_MobileWrapper.tsx:44-46`), so it never renders now; to switch on with WebAuthn later (U13 option b).; Icon ids `connect-icon-password` / `connect-icon-fingerprint` kept in `components/staticEntities.ts` (TST values, static-entities-tst.json `UBTConnect.uBT_Icons2`; password captured dom/default.html:52). Feature flags: clientVar:App_PIN_BiometricEnabled → not a flag (false positive): user setting for biometric unlock, kept in a client variable; behaviour built as in the original (user, 2026-10-14)
- Evidence: route-spec.md, parity reports, feedback.md
- Options: confirm | change (say what)
- Answer (user, 2026-10-15T20:13:15): confirm (auto-confirmed: user instruction 2026-10-15 16:59)
