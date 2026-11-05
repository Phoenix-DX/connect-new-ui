# Route actions: OutSystems against React, one route at a time

This folder is the reference for the check of the routes (user, 2026-11-04). Start here, not in `migration/`.
In Claude Code, the skill `/route-actions` (`status`, `continue`, `run <Route>`, `done <Route>`, `app-shell`) runs
the steps below (`.claude/skills/route-actions/SKILL.md`).

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
python3 route-actions/tools/check_route.py --status          # done, next route, routes without capture
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

Layout v2 (pilot, `--extras`, HomeFeed 2026-11-05): the conclusions first, the evidence after. Own code only in the
main sections: the screen and the blocks of its UI flow (OutSystems), `app/src/pages/<Route>/` (React). The shared
blocks and components of the route are in the last section, by name.

| Section | Content |
|---|---|
| 1. Route | The route, the OutSystems screen, the UI flow, the React screen and its route rules, the parity folder. |
| 2. Result | The counts. |
| 3. Differences found | Every difference the tool reads from both sides: server calls, blocks, navigation targets, navigation parameters, client variables. Each with its places. |
| 4. Questions | The React calls of the screen that the TST code of the route has no chain to. |
| 5. Server calls | One row per call of the route: direct caller, chains, seen on TST, React action, React references, status. |
| 6. User actions | Two independent lists, no mapping. 6.1 OutSystems: each event binding of the TST views with an effect. 6.2 React: each JSX `on<Event>={handler}` with an effect. A sequence diagram only for a handler with two or more effects, folded. |
| 7. Inputs and navigation parameters | The screen inputs, the parameters read, the parameters given to other screens. |
| 8. Lifecycle | OutSystems: the steps of each event handler (node comments and conditions of the compiled action); the fetch mode of each data action (`0` at start, `-1` on demand). React: `useEffect` with its dependencies, cleanup and effects; the queries. Sequence diagrams of the screen handlers, folded. |
| 9. Client state | Client variables and browser storage that the route reads or writes. |
| 10. Access | `checkPermissions` of the screen (TST); access and lock of the route (React). |
| 11. Errors | `Handle Error` nodes of the actions and the `OnException` chain of the UI flow (TST); `.catch`, `try/catch`, `onError`, `raiseToFlowHandler` (React). |
| 12. Data flow | One flowchart per screen, block, component or hook with a server, state, client variable or navigation edge: source → target, label = input, event or action. Folded, with the edge table. |
| 13. Shared blocks and components | The blocks of other UI flows and the React files outside `pages/` that the route renders, with their React port and their user actions (table only). |

Method of the facts: `os_extras.py` reads the TST compiled files (`sources/raw/*.mvc.js`) and the UI flow controllers
of `migration/shell/sources/`; `react_calls.mjs` reads the React screen files through ts-morph. A step comes from a
node comment of the compiled action (`// Execute Action: X`) or from its condition. A navigation parameter comes from
`generateScreenURL(url, {…})` (TST) and from `navigate(path, {…})` (React).

Layout v1 (the 51 done routes): 1 Route · 2 Result · 3 Screenshots · 4 Diagram (calls) · 5 User actions · 6 Server
calls · 7 Missing in React · 8 Questions · 9 Method.

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
