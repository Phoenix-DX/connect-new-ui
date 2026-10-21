# context-009 · Per-screen original stylesheets; PINRegister, Splash, AcceptPendingPolicies finished

Date: 2026-10-14 · Phase: 5 (foundation change) + 6–8 (wave 1) · Status: current

## Result
- The app loads the original stylesheets per screen, as OutSystems does (replaces the single `os-legacy.css`):
  52 manifest CSS files + 108 url() assets served unchanged from `app/public/UBTConnect/`; per-route ordered sets in
  `app/src/app/routes.css.generated.ts` (39 from capture markers, 44 from compiled getCssDependencies + block tree)
  by `migration/tools/css_sets.py`; shell `StylesheetHost` keeps/adds/removes links per route, first load waits.
  Clone matches TST for HomeFeed, MessageList and HomeFeed ⇄ MessageList.
- PINRegister (Q3), Splash (Q4), AcceptPendingPolicies (Q5): user answered "confirm" (2026-10-14), `route.py finish`
  → status `built`; wave 1 complete (5 routes). Parity 0 on PINRegister (3 states) and Splash (default); AcceptPendingPolicies has no capture (Q7 c).
  Review pages: PINRegister https://claude.ai/artifact/Pri5aTR9f3ZbFY7NMzE835 ·
  Splash https://claude.ai/artifact/F1e7mm57ZVJv1fN5edDzzD · AcceptPendingPolicies https://claude.ai/artifact/5nYnJgSQjZEP6bc2VbCYkH
- Regression parity after both shell changes: Login, PINUnlock clean.

## Decisions (user, 2026-10-14)
- CSS loaded per screen like the original. PINRegister Q1 + follow-up: OS and transition classes not compared
  (`ignoreClasses`), GetOS ported (`src/lib/device.ts`). Splash Q1–Q3 (GSAP 3.13.0 ADR-6, appReady, stay on Splash).
  AcceptPendingPolicies Q1–Q4 and no capture. AcceptPendingPolicies = reference for P-DATA, P-MOCKS, P-MUTATION,
  P-CALLS, P-BACK (not P-LIST / P-OSUI) (`stack.py pattern reference`).

## Facts learned
- TST keeps exactly the current screen's stylesheet set (css_observe.cjs); order = block tree depth first, then the
  view's own list, `_Basic.css` first; 4 KebabButton/Note_Item vs PinCode order pairs explained by the tree.
- Only Splash uses App_Common.LayoutBlank among live screens (no CommonUI there).

## Files changed
- Shell: `StylesheetHost.tsx`, `dialogs/commonUiPresence.ts` (`useNoCommonUi`, CR-Splash-3 applied), AppFrame wiring.
- Skill: route.py parity fingerprint covers `public/UBTConnect`; scope_guard text. Tools: css_sets.py, review_page.py
  (screenshots for uncaptured routes, `--clone-query`).

## Open issues
- After the first load, a newly added stylesheet may arrive just after the screen renders (original behaviour not observed).
- Skill scaffold/references still describe `os-legacy.css` (a full scaffold re-run would bring it back).
- CR-Splash-2, CR-AcceptPendingPolicies-2, CR-PINUnlock-2 open for the next foundation batch.
- AcceptPendingPolicies policy links open the recorded TST policy URLs (decision to confirm).

## Next
- Foundation batch of open CRs; wave 2 (42 blocks → HomeFeed) after the user's go-ahead.
