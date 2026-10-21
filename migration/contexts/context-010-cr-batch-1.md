# context-010 · Foundation CR batch 1 (CR-Splash-2, CR-AcceptPendingPolicies-2, CR-PINUnlock-2)

Date: 2026-10-14 · Phase: 5 (foundation, after wave 1) · Status: current

## Result
- Three CRs applied (user go-ahead 2026-10-14) by an Opus foundation agent; workarounds removed from Splash, PINUnlock,
  AcceptPendingPolicies (+ PINRegister import). ci 89 files / 336 tests; parity Login, PINUnlock, PINRegister, Splash
  0 unexempted differences (no exemption added); AcceptPendingPolicies sends Country "AR"; PINUnlock unlock and
  `?mock=unsupported-browser` checked headless.
- Orchestrator follow-up: CommonUI lock container now draws the compiled SVG background (same as the screen instance);
  shared `InlineSVG` gets its original container id `<instance>-SVG` (was missing, hidden by the SVG exemption).
- AcceptPendingPolicies, PINRegister, PINUnlock, Splash re-stamped (spec-done → ready → user confirm → finish,
  review round 2); `route.py plan`: 5 finished.

## Decisions
- Go-ahead for the batch before wave 2 (user, 2026-10-14). Review pages: localhost links only from wave 2 (user).
- Re-stamp the 4 routes; keep cross-origin navigateTo and empty cached user info as built, noted as unverified
  (`migration/knowledge/shell-facts.md`) (user, 2026-10-14).

## Facts learned
- Photobook_Speed.EightSeconds = 8000 (MCP, DEV) → `migration/knowledge/static-entities.md`.
- Live TST keeps `preserveAspectRatio="none"` + gradient x1..y2 on the header SVG; captures drop them
  (`migration/knowledge/shell-observed.md`).

## Files changed
- Shell: `cachedUserInfo.ts`, `resume.ts` (getColdStartLinkURL), `navigation/index.ts` export, `dialogs/BlockPinUnlock.tsx`,
  `clientVars.ts`, `mockUser.ts`. Shared: UBTConnect `set_InitialClientVariables`, `get_IsUnsupportedSystem`,
  UBTJavaScriptUtils `useScreenController_NavigateToPage`, `Block_PINRegister_ContentWrapper`, osui `InlineSVG`.

## Open issues
- Login keeps a local `get_IsUnsupportedSystem`; Block_PINRegister_ContentWrapper still uses getUserInformation.

## Next
- Wave 2 (42 blocks → HomeFeed) after the user's go-ahead.
