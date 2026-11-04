# Route actions: OutSystems against React, one route at a time

The tools check one route: the OutSystems client actions and server calls of the route against the React app. Each
run writes one file, `migration/route-actions/<Route>.md`, with an SVG diagram. `migration/route-actions/ROUTES.md`
lists the 68 build routes and their status (`todo` / `done`). The pilot route is HomeFeed (user, 2026-11-04).

## Commands

Run from the project root.

```bash
# once per Claude session: createSessionToken (Service Studio MCP), then
export MCP_TOKEN=<token>                                            # never write it to a file

python3 migration/tools/route_actions/check_route.py --routes          # writes ROUTES.md
python3 migration/tools/route_actions/check_route.py <Route>           # writes <Route>.md and svg/<Route>.svg
python3 migration/tools/route_actions/check_route.py <Route> --mark-done
```

After a change in `app/src`, delete `migration/route-actions/data/react-shell.json`. The next run then reads the app
shell again. Git ignores `migration/route-actions/data/` (the tools make it again) and `migration/route-actions/raw/`
(the MCP cache).

## Sources, in order of use

1. **KB** (DEV design time, extracted 2026-10-05): `~/Projects/ubt_sharing_kb/connect/outsystems/apps/*/modules/<Module>/`.
   The tools read `contracts/ui.json` (the actions that each screen action calls) and `ui/*.md` (business rules `BR-*`).
2. **TST**, in this repository. TST wins over DEV.
   - `migration/screens/<S>/analysis/facts.json`: the rendered files, the client actions and endpoints per file, and the
     call chains to each endpoint.
   - `analysis/calls.json`: the calls observed on TST.
   - `analysis/sources/raw/`: the compiled code. The call graph of
     `.claude/skills/outsystems-screen-spec/scripts/analyze_capture.py` reads it.
   - `migration/survey/screens.json` and `app/src/api/openapi.yaml` (`x-os-paths`).
3. **MCP** (DEV, read only, `mcp_client.py`), only for what the KB and TST do not give:
   - the UI flow of each screen (`getScreenNames`);
   - the server and service actions inside the data actions of UBTConnect screens and blocks (`getScreen`, `getWebBlock`).

   The answers are cached in `migration/route-actions/raw/mcp/`, which git ignores. A module that is not open in
   Service Studio cannot be read; the route file then says "not read".
4. **React** (`react_calls.mjs`, TypeScript type checker through ts-morph from `app/node_modules`):
   - `shell`: the app shell from `app/src/main.tsx` (router, `AppFrame`, `AppStart`, `RouteGuard`, hosts);
   - `page <Route>`: the page from `app/src/pages/<Route>/<Route>Page.tsx`;
   - `all`: every `callAction` call and every `@origin` / `@os-block` tag in `app/src`.

   In the shell and the page, the tool counts only the declarations that the code uses. It skips tests, stories,
   `src/test/` and `src/mocks/`.

## Files

| File | Role |
|---|---|
| `check_route.py` | Reads the sources, matches them, writes the route file and `ROUTES.md`. |
| `react_calls.mjs` | React scan; writes `migration/route-actions/data/react-*.json`. |
| `mcp_client.py` | Read-only MCP client (`get*` tools only) with a file cache. |
| `render_svg.cjs` | Renders the Mermaid diagram to SVG with Playwright of the project root and Mermaid 10.9.1. |

## Match rules

- **Endpoint.** React `callAction(M, A)` becomes `/api/M/A`. Its `x-os-paths` in the contract give the TST URL. The
  endpoint is `implemented` when the URL is the same.
- **Missing endpoint.** The route file says whether React code for it exists elsewhere. It also quotes the lines of
  the React READMEs that name the action.
- **Client action.** The tool compares names after it drops `_` and the prefixes `on`, `handle`, `handler`, `event`
  and `screenEvent`. Without a name match, the action is `matched (effects)` when React calls every endpoint that the
  action reaches.
- **Block events.** The tool does not follow a block event into the parent handler. The parent block owns that call.
- **Block port.** The `@origin` or `@os-block` tag gives the React file. Without a tag, the block name in a file of the
  route counts, and the file says so.
- **Navigation.** A path literal that ends in a route name counts. A bare route name counts only in a file that
  navigates.

## Limits

- The tools read code; they do not run the app.
- The TST call graph does not parse JavaScript nodes and some widget events, so a caller can be missing.
- A name match does not prove the same behaviour. The parity checks of the migration cover the behaviour.
- A route without a TST capture (`no-capture.json`) has no `facts.json`. The tool stops for such a route.
