# Questions: PINChange

Managed by route.py. Facts may be answered by the OutSystems MCP; decisions and reviews only by the user.

## Q1 [decision] unlocked branch (answered)
- Question: The state after the current PIN is accepted (isScreenUnlocked = True: Block_PINRegister_ContentWrapper 'Enter new PIN' / 'Confirm new PIN', isFromMenu True, Layout_LoginFlow without ubt-lock-screen, success toast 'Please provide a new PIN') is not in the capture (it needs a real PIN entry, which would change the PIN on TST). Build it from the compiled code with the shared Block_PINRegister_ContentWrapper (captured on PINRegister), or render NotCaptured?
- Evidence: UBTConnect.App_PIN.PINChange.mvc.js:136-141 (In_ExtendedClass), :234-256 (PINRegister wrapper inputs), :418-427 (Block_PINUnlockUnlock); pack Gaps: Block_PINRegister_ContentWrapper not rendered in any captured state
- OutSystems MCP: not needed: compiled code is explicit
- Options: A: build from the compiled code with the shared block (mock PIN TEST_PIN, change stored by the shell's registerPin) | B: render NotCaptured for the unlocked branch (recommended: A)
- Answer (user, 2026-10-15T19:42:01): A (recommended), auto-accepted (user instruction 2026-10-15 16:59): unlocked branch built from the compiled code with the shared Block_PINRegister_ContentWrapper (mock PIN TEST_PIN, change stored by the shell's registerPin)

## Q2 [review] review round 1 (answered, blocking)
- Question: Please test this route and confirm, or tell me what to change. Decisions to confirm: Q1 → A (pending orchestrator answer): the unlocked branch is built from the compiled code with the shared Block_PINRegister_ContentWrapper (mvc.js:239-262, 377-404), not NotCaptured; checked by hand on the dev server (TEST_PIN → "Enter new PIN" → "Confirm new PIN" → Menu with "Your PIN has been changed.").; `/UBTConnect/Menu` is the destination of the header link and of the shared block's success; the Menu route is not built yet, so the app shows what it shows for an unbuilt route.; Proposed parity exemption `CAPTURE-LINK-HREF-CURSOR-PINCHANGE` (`migration/screens/PINChange/proposed-exemptions.json`): header link and its IconText cursor auto (replayed capture without href) vs pointer; same artifact as CAPTURE-LINK-HREF-CURSOR-PINREGISTER, whose pathRegex misses `.ubt-lock-screen`. To be merged by the orchestrator. Feature flags: clientVar:App_PIN_BiometricEnabled → not a flag (false positive): user setting for biometric unlock, kept in a client variable; behaviour built as in the original (user, 2026-10-14)
- Evidence: route-spec.md, parity reports, feedback.md
- Options: confirm | change (say what)
- Answer (user, 2026-10-15T20:13:50): confirm (auto-confirmed: user instruction 2026-10-15 16:59)

## Q3 [review] review round 2 (answered, blocking)
- Question: Please test this route and confirm, or tell me what to change. Decisions to confirm: Q1 → A (pending orchestrator answer): the unlocked branch is built from the compiled code with the shared Block_PINRegister_ContentWrapper (mvc.js:239-262, 377-404), not NotCaptured; checked by hand on the dev server (TEST_PIN → "Enter new PIN" → "Confirm new PIN" → Menu with "Your PIN has been changed.").; `/UBTConnect/Menu` is the destination of the header link and of the shared block's success; the Menu route is not built yet, so the app shows what it shows for an unbuilt route.; Proposed parity exemption `CAPTURE-LINK-HREF-CURSOR-PINCHANGE` (`migration/screens/PINChange/proposed-exemptions.json`): header link and its IconText cursor auto (replayed capture without href) vs pointer; same artifact as CAPTURE-LINK-HREF-CURSOR-PINREGISTER, whose pathRegex misses `.ubt-lock-screen`. To be merged by the orchestrator. Feature flags: clientVar:App_PIN_BiometricEnabled → not a flag (false positive): user setting for biometric unlock, kept in a client variable; behaviour built as in the original (user, 2026-10-14)
- Evidence: route-spec.md, parity reports, feedback.md
- Options: confirm | change (say what)
- Answer (user, 2026-10-16T15:01:45): confirm (auto-confirmed: user instruction 2026-10-15 16:59)
