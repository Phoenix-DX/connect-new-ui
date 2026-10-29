# context-069: item 8, the flow scope and the error page (2026-10-28)

## Result
- The flow scope (`app/src/platform/navigation/flowScope.ts`) replaces decision W23. After the user leaves:
  - a data action's answer and failure are dropped (R1);
  - own actions and block events stop (R3), and navigation stops (R4);
  - toasts and module actions run (R5), and a left screen opens no error page (R6).
- 57 hooks follow it. The CI step `npm run flow-fetch` checks the R1 wraps.
- The error page is the static `/UBTConnect/_error.html`, pixel-identical to TST (390×844).
- Port gaps fixed on the way: N2 (bottom bar count), N3 (HostSurvey post error), N4 (AttendeeSubdivision scroll
  anchor); MessageList stops its flows on a failed GetMessages as TST.
- Gates: `npm run ci` green (4624 tests); one final full parity sweep 64 of 64. Commits 8507cb9c to 0fb5e3d4.

## Decisions (user, 2026-10-28)
- Design (a) flow scope, error page (a) static document, open points as recommended; N1 deferred with the new TST
  screens; Q3 (render and route errors) a separate item after a TST check; Q4 precache in the production phase.
- Gates: `npm run unused` before the full CI. Groups C and D were built together with one gate.
- Parity per change scope, and one full sweep at the end of item 8.

## Facts learned (evidence)
- TST runtime rules R1 to R6: `migration/clarify/review/item8-w23-errorpage.md` §1. Live probe of R3 and R4:
  `migration/clarify/tools/probe_leave_rules.cjs`, `probe-leave-rules.json`.
- The MCP shows the 76 data actions and aggregates of the 55 hooks as TST does (§5).
- TST switches the active screen when the new controller exists (`setAsActiveScreen`); React blocks a navigation of
  the old screen earlier. Recorded difference.

## Files changed
- Platform: `flowScope.ts`, `flowState.ts`, `osNavigate.ts`, `historyStack.ts`, `legacy/os/exceptions.ts`,
  `os-exceptions.ts`, `platform/feedback/ignorableErrors.ts`, `errorPage.ts`, `public/UBTConnect/_error.html`,
  `build/check-flow-fetch.mjs`; 57 page and container hooks and their tests; `docs/guides/page-template.md`.
- Records: `migration/clarify/review/item8-*`, `builds/item8-*.md`, `RESUME.md`, the W23 row in
  `migration/refactor/auto-decisions-2026-10-22.md` (superseded).

## Next
- Deferred items in `migration/clarify/RESUME.md` (render and route errors, N1 with the new TST screens, and others).
