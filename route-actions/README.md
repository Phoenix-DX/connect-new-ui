# Route actions: OutSystems against React, one route at a time

This folder is the reference for the check of the routes (user, 2026-11-04). Start here, not in `migration/`.

```
route-actions/
├── README.md        this file
├── ROUTES.md        the 68 build routes and their status (todo / done)
├── APP_SHELL.md     the app shell, merged from the checked routes
├── routes/          one file per route: <Route>.md
├── tools/           check_route.py, react_calls.mjs, os_call_graph.py, mcp_client.py, render_svg.cjs
├── config.json      the input paths (read only): TST data in migration/screens, survey, board; React app and contract
└── .cache/          git ignores it: data/ (scans), raw/mcp/ (MCP answers), data/svg/ (Mermaid syntax check)
```

The inputs stay where they are (`migration/screens/…`, `app/…`). The tools only read them, through `config.json`.

The tools check the server calls of one route in OutSystems against the React app. Each run writes one file,
`route-actions/routes/<Route>.md`, with Mermaid diagrams as text. `route-actions/ROUTES.md` lists the 68 build
routes and their status (`todo` / `done`). The pilot route is HomeFeed (user, 2026-11-04).

## Commands

Run from the project root.

```bash
# once per Claude session: createSessionToken (Service Studio MCP), then
export MCP_TOKEN=<token>                                            # never write it to a file

python3 route-actions/tools/check_route.py --routes          # writes ROUTES.md
python3 route-actions/tools/check_route.py <Route>           # writes <Route>.md and APP_SHELL.md
python3 route-actions/tools/check_route.py <Route> --mark-done
python3 route-actions/tools/check_route.py --app-shell       # writes APP_SHELL.md again
```

The tool keeps the app shell scan in `route-actions/.cache/data/react-shell.json`. When a `.ts` or `.tsx` file in
`app/src`, a `tsconfig` file or `react_calls.mjs` is newer than that file, the tool scans the app shell again. Git
ignores `route-actions/.cache/data/` (the tools make it again) and `route-actions/.cache/raw/` (the MCP cache).

To check a route again later, run `check_route.py <Route>` again. The tool overwrites the route file and keeps the
status in `ROUTES.md`. Use `git diff` to see what changed.

## Sources

1. **TST**, in this repository. TST wins over DEV.
   - `migration/screens/<S>/analysis/facts.json`: the rendered files, the server calls, and the chain of client
     actions to each call.
   - `analysis/calls.json`: the calls that TST made in the capture.
   - `migration/survey/screens.json` and `app/src/api/openapi.yaml` (`x-os-paths`).
2. **MCP** (DEV, read only, `mcp_client.py`): the UI flow of each screen (`getScreenNames`). The answer is cached in
   `route-actions/.cache/raw/mcp/`. The route file does not show the inside of the calls (user, 2026-11-04).
3. **React** (`react_calls.mjs`, TypeScript type checker through ts-morph from `app/node_modules`):
   - `shell`: the app shell from `app/src/main.tsx` (router, `AppFrame`, `AppStart`, `RouteGuard`, hosts);
   - `page <Route>`: the screen from `app/src/pages/<Route>/<Route>Page.tsx`;
   - `all`: every `callAction` call and every `@origin` / `@os-block` tag in `app/src`.
   - For each `callAction` call, the tool follows the users of the function back to the nearest component. A
     component is a PascalCase declaration in `pages/`, `containers/`, `components/` or `app/`.

   In the shell and the screen, the tool counts only the declarations that the code uses. It skips tests, stories,
   `src/test/` and `src/mocks/`.

## Rule: facts only

The route files carry only what the tool reads in the code and the data, with the place in the code (user,
2026-11-04). The tool does not guess. When it cannot read a fact, the file says so. The known limits are at the end.

## Route file and app shell file

A route file has only the parts of the route. `route-actions/APP_SHELL.md` has the app shell:

- OutSystems: the chains that start in `CommonUI_InsideLayout` or one of its blocks (TST survey), or in a module action;
- React: the event bindings of the code that `app/src/main.tsx` loads.

Each route run writes `APP_SHELL.md` again from all `data/check-*.json`. Its call table gives the routes of each call.

| Section | Content |
|---|---|
| 1. Route | The route, the OutSystems screen, the UI flow, the React screen and its route rules. |
| 2. Result | The counts, and the count of the app shell parts on the route. |
| 3. Screenshots | The images of the last parity run, per state. Without parity: the React review images, else the TST capture images. |
| 4. Diagram | Block or module of the direct caller (TST) → server call → React action → React component. A red box is a call that React does not make. |
| 5. User actions | Two independent lists, no mapping between them. 5.1 OutSystems: each event binding of the TST views with an effect. 5.2 React: each JSX `on<Event>={handler}` with an effect. One Mermaid sequence diagram per binding and per branch of its handler. |
| 6. Server calls | One row per call of the route: direct caller, chains, seen on TST, React action, React references, status. |
| 7. Missing in React | The calls, blocks and navigation targets of the route that React does not have, with the lines of the React code that name them. |
| 8. Questions | The React calls of the screen that the TST code of the route has no chain to. |
| 9. Method | How the tool gets each fact. |

## Files

| File | Role |
|---|---|
| `check_route.py` | Reads the sources, matches them, writes the route file and `ROUTES.md`. |
| `react_calls.mjs` | React scan; writes `route-actions/.cache/data/react-*.json`. |
| `os_call_graph.py` | Call graph of the TST compiled code. A copy of the function `call_graph` of the skill `outsystems-screen-spec` (`analyze_capture.py`), so that the tools do not depend on the skill. |
| `config.json` (folder root) | The input paths. |
| `mcp_client.py` | Read-only MCP client (`get*` tools only) with a file cache. |
| `render_svg.cjs` | Syntax check: renders the Mermaid diagrams of one file in one browser (Playwright of the project root, Mermaid 10.9.1) to `data/svg/`, which git ignores. The route files carry the Mermaid text (user, 2026-11-04). |

## Read rules

- **Server call.** React `callAction(M, A)` becomes `/api/M/A`. Its `x-os-paths` in the contract give the TST URL.
  The call is `implemented` when the URL is the same. Else the call is `missing`.
- **OutSystems event binding.** A compiled view binds a handler in two ways:
  - `<event>$Action: function`: an event of the child block or widget that the view creates just before;
  - `on<Event>: function`: an event of an HTML element.

  The handler is the first `controller.<handler>$Action(` in the function body.
- **React event binding.** A JSX attribute `on<Event>={…}`: an inline function, a function name, or a name from the
  object that a hook returns (`const { onX } = useY()`).
- **Effects.** OutSystems: `// Destination:`, `// Execute Action:`, `showFeedbackMessage(…)`, `// Refresh Query:`, the
  server call nodes. React: `callAction`, navigation functions with a path (constants read), `confirm…`,
  `show…Message`, `open…ExternalLink`. Called functions are followed 3 levels deep.
- **Branches.** OutSystems: the `if` blocks with `=== <constant>`. React: `switch` cases and `if` with `===` or a call
  with one constant argument. `other` is the last `else` or `default`.
- **Block port.** The `@origin` or `@os-block` tag gives the React file. Without a tag, the block name in a file of
  the route counts.

## Limits

- The tools read code. They do not run the app.
- A name or a call match does not prove the same behaviour. The parity checks of the migration compare the behaviour.
- The effects stop at 3 levels of calls. A prop callback and a query that fetches again are named, not followed.
- An OutSystems branch condition other than `=== <constant>` (for example `IsSuccess`) is not split.
- The calls that a module action reaches come from the call graph; they can belong to only one path of that action.
- A route without a TST capture (`no-capture.json`) has no `facts.json`. The tool stops for such a route.
