# context-074: route actions pipeline (2026-11-04, layout v2 and static check 2026-11-05)

## Result
- Pipeline in [`route-actions/`](../../route-actions/README.md) at the repository root: one file per route in
  `route-actions/routes/`, status in [`ROUTES.md`](../../route-actions/ROUTES.md), the app shell in
  [`APP_SHELL.md`](../../route-actions/APP_SHELL.md). Mermaid diagrams as text.
- **68 of 68 build routes done** (2026-11-05): 51 from a TST capture, 17 from the compiled code (static check,
  `done (static)`). Layout v2: conclusions first, own code only, folded diagrams. 23,356 lines in all.
- 2026-11-05, gaps closed (user: "Fable decides everything"; log `migration/clarify/auto-decisions-2026-11-05.md`):
  **0 gaps** on 68 routes. 34 rows set aside by rule: native only 13, telemetry U17 16, Q3 1, no binding 1,
  unreachable calendar 2.
- Code of 2026-11-05: AppManager_Logout on sign-out, Household_Relations FetchNotes, AssembleDetail notes (fetch,
  preview, action bar, sheet), the HouseholdDetails branch with the carousel off. Parity clean on the three captured
  routes. The 29 route questions and 9 app shell questions are calls that TST declares outside the static call
  graph (contract `x-os-screens`, `extra-actions.json`, the app-start list). Opus reviewed the rules. 0 questions left.

## Decisions (who, date)
- User 2026-11-04: one route at a time; facts only, no inference; two independent user action lists, no mapping;
  no KB; MCP only for the UI flow; Mermaid text, no SVG; folder `route-actions/` at the root; inputs through `config.json`.
- User 2026-11-05: layout v2; no data flow section; questions by rule (shell closure → `APP_SHELL.md`, shared
  code → the shared section, the rest → a route question).
- User 2026-11-05: the 17 routes without a capture get a static check from the compiled code. Claude fetched 71 files
  read-only from the TST manifest (`migration/knowledge/runtime-sources.md`).
- User 2026-11-05: goal = fix the remaining gaps toward production; BE mock; MCP may build mock data for screens
  that the web capture cannot reach.

## Facts learned (evidence)
- React reads client variables through `clientVar.<name>` accessors (`platform/session/session.ts`) and gives
  navigation parameters through `{ path, inputs }` objects; a static GET of a manifest script needs no session.

## Files changed
- `route-actions/` (tools, README, 68 route files, `APP_SHELL.md`, `ROUTES.md`), `migration/runtime-sources/`
  (+71 files), `migration/knowledge/runtime-sources.md`, the skill `route-actions`, this context, `INDEX.md`.

## Open issues
- Closed by the Fable → Opus → Fable loop (user rule 2026-11-05, no question to the user): AssembleDetail
  `Section_MeetingNotes` removed (the live TST block has none); sign-out stays 1:1 (rows 11, 12 of the log).
- Production backlog: sign-out on a shared device when AppManager_Logout fails (TST leaves the PIN and local data).
- Gates: `npm run ci` green end to end (4757 tests, two timing flakes fixed). Parity sweep 50 of 51; Notifications
  differs in a relative-age label of a fixture (a frozen clock later).
- Running vitest as `caffeinate npx vitest run` uses Homebrew Node 26 (global `localStorage` shadows jsdom's):
  159 files fail. Run vitest with the shell's nvm Node; keep the Mac awake with a separate `caffeinate` process.
- Drift: the live `AssembleEventDetail.mvc.js` has no `Section_MeetingNotes`; React renders one (survey 2026-10-13).

## Next
- The user reads `migration/clarify/auto-decisions-2026-11-05.md` when convenient; nothing waits for an answer.
