# context-074: route actions pipeline, pilot HomeFeed (2026-11-04)

## Result
- New pipeline `migration/tools/route_actions/` ([README](../tools/route_actions/README.md)): one route at a time, one
  file `migration/route-actions/<Route>.md` with Mermaid diagrams as text; list and status in
  [`ROUTES.md`](../route-actions/ROUTES.md).
- Pilot run 2 (user feedback, same day): no KB, MCP only; sections "client actions", "module actions" and
  "rendered blocks" removed; STE style. [`HomeFeed.md`](../route-actions/HomeFeed.md) went from 1,667 to 224 lines.
- HomeFeed result:
  - 21 TST endpoints: 18 implemented, 3 missing (`CS_CreateShareProfileLink` ×2, `GetAllApplicationEvents`);
  - 2 React calls with no TST chain (questions);
  - 65 of 65 blocks ported; 23 of 23 navigation targets found.
- No file in `app/` changed.

## Decisions (who, date)
- User 2026-11-04: per-route pipeline, no summary report; read the React app shell as well as the screen.
- User 2026-11-04 (run 1): KB `~/Projects/ubt_sharing_kb` first, MCP only for gaps. Replaced (run 2): no KB; read
  MCP directly; the user opens each module that the route needs; the tool does not guess a closed module.
- User 2026-11-04 (run 2): the route file has no tables of client actions, module actions or rendered blocks; STE.
- User 2026-11-04 (run 3+):
  - columns Called from, Trigger, React caller; no MCP table of the inside of the calls; screenshots;
  - section User actions: one OutSystems and one React sequence per action and branch, differences in red;
  - the app shell parts go to `APP_SHELL.md`, not to the route files; Mermaid text, no SVG.
- User 2026-11-04: facts only, no inference. User actions = two independent lists (OutSystems bindings, React
  bindings), no mapping. App shell by definition (survey shell, `main.tsx` code), no 40% rule.
- User 2026-11-04: MCP modules UBTConnect + Connect2_* + UBTConnect_Utils + UBT_AppManager + UBTConnectLibrary +
  NavigationHandler; scope 68 build routes. Later: Mermaid text in the file, no SVG (user, 2026-11-04).
- User 2026-11-04: pilot HomeFeed first, wait for feedback before the next route.

## Facts learned (evidence)
- MCP `getServerAction` gives the actions inside a server action (`Sync_Info_GetMain` calls 5). `getServiceAction`
  gives the producer module of a service action (`Connect_Map_CS`, `Connect_Updates_CS`). A closed module answers
  "No module is currently open".
- 17 of 68 build routes have `no-capture.json` (no `facts.json`). The tool stops for them; the user decides how to
  cover them.

## Files changed
- New: `migration/tools/route_actions/` (4 tools + README), `migration/route-actions/` (`ROUTES.md`, `HomeFeed.md`,
  `APP_SHELL.md`), this context. Updated: `.gitignore` (`migration/route-actions/raw/`, `data/`), `INDEX.md`.

## Open issues
- The 17 routes without a TST capture (the tool stops for them).
- Open questions in the route files (section Questions) and in `APP_SHELL.md`.

## Next
- Paused by the user (2026-11-04) after 4 of 68 routes done. Resume with `PINBiometricsMenu`, then the order of
  `ROUTES.md`: run `check_route.py <Route>`, hand-check the missing rows, the user says done, `--mark-done`, commit.
