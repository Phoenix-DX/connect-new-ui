# context-008 · Wave 1 routes: Login and PINUnlock finished

Date: 2026-10-14 · Phase: 6–8 (route loop, wave 1) · Status: current

## Result
- Login and PINUnlock: status `built` after the user's review "confirm". Parity 0 unexempted differences in every
  captured state (default, loading, offline), calls identical; review pages (private):
  Login https://claude.ai/artifact/5AQY9AJEwdnpLZ95tEdaS4 · PINUnlock https://claude.ai/artifact/M8iwtEZ3GF6TwdhVjSxpB1
- Login is the reference implementation of P-PARAMS, P-STATES, P-DIALOG (`stack.py pattern reference`).
- Ledger: Login ~256k, PINUnlock ~213k tokens (route agents, Opus).

## Decisions (user, 2026-10-14)
- Login: Forgot Password does nothing (mock); In_IsFromResetPIN → signOut + mock signIn → PINRegister; B2C callback /
  device-awareness branches not built; capture-replay artifacts exempted; Q7 closed by the real fix (CR-Login-4).
- PINUnlock: return to the opened screen after unlock (as observed on TST); screen composes Block_PINUnlock from shared
  blocks (CR-PINUnlock-2 later); capture artifacts exempted.
- PINRegister, Splash, AcceptPendingPolicies start only when the user agrees (memory: feedback-route-gating).

## Facts learned
- TST: Menu → PINUnlock → Menu after unlock (`migration/tools/unlock_target.cjs`); Environment = "TST".
- Get_IsUnsupportedSystem = app version OR browser version (no WebView); DelayedMessage only from FRD remote logout.
- The two Cacheable calls start in the same ms; their recorded order varies between captures.

## Files changed
- Shell: CommonUI presence (no duplicate stand-ins), AppLockHost, delayedMessageShow, OutSystems_Environment,
  UBTConnect.LastURL on the PIN redirect, test session modes nopin/locked.
- Shared: Version one call per mount.
- Skill: parity_check (parallel captured calls as sets, no position check on own-masked text, saves expected/build png),
  route.py (`answer --by code`, plan `cloneQuery` in the clone URL). Tools: review_page.py, unlock_target.cjs.
- `migration/parity-exemptions.json` (generic CAPTURE-* entries + PINCODE-scoped ones).

## Open issues
- CR-PINUnlock-2 (shell BlockPinUnlock inputs/event/CommonUI slot/unsupported card).
- SVG background exemption disables pixel comparison over the login-flow background (DOM/style still compared).

## Next
- Ask the user before starting PINRegister, Splash, AcceptPendingPolicies; then wave-2 blocks (42) → HomeFeed.
