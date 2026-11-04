# Route actions: OutSystems against React, one route at a time

The tools check the server calls of one route in OutSystems against the React app. Each run writes one file,
`migration/route-actions/<Route>.md`, with an SVG diagram. `migration/route-actions/ROUTES.md` lists the 68 build
routes and their status (`todo` / `done`). The pilot route is HomeFeed (user, 2026-11-04).

## Commands

Run from the project root.

```bash
# once per Claude session: createSessionToken (Service Studio MCP), then
export MCP_TOKEN=<token>                                            # never write it to a file

python3 migration/tools/route_actions/check_route.py --routes          # writes ROUTES.md
python3 migration/tools/route_actions/check_route.py <Route>           # writes <Route>.md and svg/<Route>.svg
python3 migration/tools/route_actions/check_route.py <Route> --mark-done
```

The tool keeps the app shell scan in `migration/route-actions/data/react-shell.json`. When a `.ts` or `.tsx` file in
`app/src`, a `tsconfig` file or `react_calls.mjs` is newer than that file, the tool scans the app shell again. Git
ignores `migration/route-actions/data/` (the tools make it again) and `migration/route-actions/raw/` (the MCP cache).

To check a route again later, run `check_route.py <Route>` again. The tool overwrites the route file and keeps the
status in `ROUTES.md`. Use `git diff` to see what changed.

## Sources

1. **TST**, in this repository. TST wins over DEV.
   - `migration/screens/<S>/analysis/facts.json`: the rendered files, the server calls, and the chain of client
     actions to each call.
   - `analysis/calls.json`: the calls that TST made in the capture.
   - `migration/survey/screens.json` and `app/src/api/openapi.yaml` (`x-os-paths`).
2. **MCP** (DEV, read only, `mcp_client.py`): the UI flow of each screen (`getScreenNames`). The answer is cached in
   `migration/route-actions/raw/mcp/`. The route file does not show the inside of the calls (user, 2026-11-04).
3. **React** (`react_calls.mjs`, TypeScript type checker through ts-morph from `app/node_modules`):
   - `shell`: the app shell from `app/src/main.tsx` (router, `AppFrame`, `AppStart`, `RouteGuard`, hosts);
   - `page <Route>`: the screen from `app/src/pages/<Route>/<Route>Page.tsx`;
   - `all`: every `callAction` call and every `@origin` / `@os-block` tag in `app/src`.
   - For each `callAction` call, the tool follows the users of the function back to the nearest component. A
     component is a PascalCase declaration in `pages/`, `containers/`, `components/` or `app/`.

   In the shell and the screen, the tool counts only the declarations that the code uses. It skips tests, stories,
   `src/test/` and `src/mocks/`.

## Route file

| Section | Content |
|---|---|
| 1. Route | The route, the OutSystems screen, the UI flow, the React screen and its route rules. |
| 2. Result | The counts. |
| 3. Diagram | OutSystems block → server call → React action → React component. A red box is a missing call. |
| 4. Data flow | Sequence diagram by phase (app start, load, ready, user actions): block → server call (inputs) → outputs, with the React component of each call. The input and output names come from `app/src/api/openapi.yaml`. |
| 5. Server calls | One row per TST call: the calling block, the trigger, the chain, the React action, the React caller (component → hooks → action), the status. |
| 6. Missing in React | The calls, blocks and navigation targets that React does not have, with the notes of the React code. |
| 7. Questions | The React calls that TST does not make on the route. |
| 8. Method | How the tool gets each fact. |

## Files

| File | Role |
|---|---|
| `check_route.py` | Reads the sources, matches them, writes the route file and `ROUTES.md`. |
| `react_calls.mjs` | React scan; writes `migration/route-actions/data/react-*.json`. |
| `mcp_client.py` | Read-only MCP client (`get*` tools only) with a file cache. |
| `render_svg.cjs` | Renders the Mermaid diagram to SVG with Playwright of the project root and Mermaid 10.9.1. |

## Match rules

- **Server call.** React `callAction(M, A)` becomes `/api/M/A`. Its `x-os-paths` in the contract give the TST URL.
  The call is `implemented` when the URL is the same. Else the call is `missing`.
- **Missing call.** The route file says whether React code for the call exists elsewhere. It also quotes the lines
  of the React READMEs that name the action.
- **Block port.** The `@origin` or `@os-block` tag gives the React file. Without a tag, the block name in a file of
  the route counts.
- **Navigation.** A path literal that ends in a route name counts. A bare route name counts only in a file that
  navigates.

## Limits

- The tools read code. They do not run the app.
- A name or a call match does not prove the same behaviour. The parity checks of the migration compare the behaviour.
- A route without a TST capture (`no-capture.json`) has no `facts.json`. The tool stops for such a route.
