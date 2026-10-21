# CR-Splash-1: shell app-start PIN redirect (U3) — leave Splash alone

- Status: applied (foundation owner, 2026-10-14; first-screen transition class: see the decision on transition classes)
- Raised by: Splash, 2026-10-14
- Block: shell area `app/src/shell/paths.ts` `ignoresLockScreen` / `app/src/shell/startup.ts` `pinUnlockRedirect`
- Other routes using it (catalog/blocks.md): every route (app start)
- Related question: none

## Evidence
- Captured markup: `migration/screens/Splash/analysis/dom/default.html` lines 5-74: Splash renders `App_Common.LayoutBlank`,
  which has no CommonUI placeholder (no lock screen), and the TST capture with a locked session (capture plan
  `auth: locked`) stays on Splash, mid-animation, about 10 s after the load.
- Expression / handler: `sources/pretty/UBTConnect.App_Common.Splash.mvc.js:473-501`: Splash itself runs `PIN_Check`
  after its animation and then goes to PINRegister / PINUnlock.
- Mock shell: `pinUnlockRedirect` (`app/src/shell/startup.ts:190-200`) sends every screen except Login, PINUnlock and
  PINRegister to PINUnlock as soon as the app start ends, so with `?mocksession=locked` Splash is replaced by PINUnlock
  before its 1.5 s minimum display (parity state `default` would compare PINUnlock).

- Also seen (parity, signed-out diagnostic run): the shell adds `slide-from-right-enter-done` to `.active-screen` of the
  first screen of the load; the Splash capture has `active-screen screen-container` only (dom/default.html:4).

## Expected change
Skip the app-start PIN redirect on Splash (for example add `Splash` to the screens the redirect leaves alone). Splash
does its own PIN check after the animation (route `app/src/screens/Splash/index.tsx`).

## Workaround in the route until applied
None possible inside the route (the redirect runs in `AppStart`). No markup affected.

## Resolution (foundation owner)
Set `- Status: applied` above when done (route.py reset keeps applied requests and deletes open ones raised by a failed run).
- Change:
- Regression parity run on:
