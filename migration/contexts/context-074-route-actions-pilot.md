# context-074: route actions pipeline (2026-11-04)

## Result
- Pipeline in [`route-actions/`](../../route-actions/README.md) at the repository root: one file per route in
  `route-actions/routes/`, status in [`ROUTES.md`](../../route-actions/ROUTES.md), the app shell in
  [`APP_SHELL.md`](../../route-actions/APP_SHELL.md). Mermaid diagrams as text.
- 4 of 68 build routes done: HomeFeed, Login, Splash, Menu. Example: [HomeFeed](../../route-actions/routes/HomeFeed.md)
  has 21 TST calls, 18 implemented, 3 missing (`CS_CreateShareProfileLink` ×2, `GetAllApplicationEvents`).
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

## Open issues
- The 17 routes without a TST capture.
- The questions in the route files (section Questions) and in `APP_SHELL.md`.

## Next
- Paused by the user after 4 routes. Resume with `PINBiometricsMenu`, then the order of `ROUTES.md`:
  `python3 route-actions/tools/check_route.py <Route>`, hand-check, the user says done, `--mark-done`, commit.
