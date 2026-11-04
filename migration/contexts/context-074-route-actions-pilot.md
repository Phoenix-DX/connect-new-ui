# context-074: route actions pipeline (2026-11-04)

## Result
- Pipeline in [`route-actions/`](../../route-actions/README.md) at the repository root: one file per route in
  `route-actions/routes/`, status in [`ROUTES.md`](../../route-actions/ROUTES.md), the app shell in
  [`APP_SHELL.md`](../../route-actions/APP_SHELL.md). Mermaid diagrams as text.
- 51 of 68 build routes done (all routes with a TST capture), 2026-11-04. The user let Claude go on route by route.
  Claude marked each route done and stopped only for MCP. Status per route in [`ROUTES.md`](../../route-actions/ROUTES.md).
- Real gaps found:
  - `HouseholdRelations_Block/DataActionFetchNotes`: React opens the notes sheet without the fetch.
  - `GetEventsForCalendar`: React has no LDM calendar view.
  - `CS_CreateShareProfileLink` and `GetAllApplicationEvents`: share to others and the audit events.
  - `AppManager_Logout`: PINRegister "Back to login".
- No file in `app/` changed.

## Decisions (who, date)
- User 2026-11-04: one route at a time, no summary report; read the React app shell and the screen.
- User 2026-11-04: no KB (`ubt_sharing_kb`); MCP only for the UI flow; a closed module waits for the user.
- User 2026-11-04: **facts only, no inference**: every line from the code or the data, with its place.
- User 2026-11-04: User actions = two independent lists per route (OutSystems view bindings, React JSX bindings),
  no mapping, no red differences; one Mermaid sequence per binding and branch.
- User 2026-11-04: app shell by definition (TST survey shell, the code of `main.tsx`), no share threshold.
- User 2026-11-04: Mermaid text, no SVG; screenshots from parity, else review, else capture images.
- User 2026-11-04: folder `route-actions/` at the root (name kept); inputs stay in `migration/` and `app/`.
- User 2026-11-04: the tools read the inputs through `config.json` (option A); `call_graph` is copied to
  `tools/os_call_graph.py`.

## Facts learned (evidence)
- 17 of 68 build routes have `no-capture.json` and no `facts.json`. The tool stops for them.
- MCP reads only the modules open in Service Studio; a closed module answers "No module is currently open".
- The compiled TST views bind handlers as `<event>$Action: function` (child block event) and `on<Event>: function`.

## Files changed
- New: `route-actions/` (README, ROUTES.md, APP_SHELL.md, config.json, routes/, tools/), this context.
- Updated: `.gitignore` (`route-actions/.cache/`), `INDEX.md`. Moved from `migration/route-actions/` and
  `migration/tools/route_actions/` with `git mv`.
- Tool fixes 2026-11-04 (in the commits): TST messages with a variable, JS nodes (messages, action proxies),
  `tel:`/URL destinations, previous screen; React: hook closures and call-site arguments, props through JSX,
  hook spreads, `flow.run`/`flow.own`/`flow.events`, query refetch → calls, capture calls of another screen.

## Open issues
- The 17 routes without a TST capture (the tool stops).
- Some questions come from blocks that TST did not render in the capture (empty lists, for example
  Locality_Details entity actions).
- The questions in the route files (section Questions) and in `APP_SHELL.md`.

## Next
- The user decides: the 17 routes without a capture (capture them first, or leave them), and the open questions.
