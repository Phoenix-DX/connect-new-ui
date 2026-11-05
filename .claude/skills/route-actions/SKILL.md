---
name: route-actions
description: Check of the UBTConnect routes, OutSystems (TST) against React, one route at a time, in route-actions/ (facts only). Shows the status, runs the next route, hand-checks it, and marks it done after the user agrees. Use when the user types /route-actions (status, continue, run <Route>, done <Route>, app-shell) or asks to continue or check the route actions.
argument-hint: "status | continue | run <Route> | done <Route> | app-shell"
---

# Route actions

The pipeline is in `route-actions/` at the repository root. Read `route-actions/README.md` once per session before
the first run. The tool is `python3 route-actions/tools/check_route.py` (below: `check_route.py`). Run every command
from the project root. Reply to the user in Vietnamese; the files stay in English (STE, `migration/english-docs/style-rules.md`).

## Rules (user, 2026-11-04)

1. **Facts only.** Every line of a route file comes from the code or the data, with its place. Do not guess. Do not
   add a fact by hand to a route file. When the tool cannot read a fact, say so; when the tool is wrong, fix the
   tool, run again, and tell the user what changed.
2. **One route at a time.** Mark a route `done` only after the user says so in this conversation ("done", "ok done").
3. The two user action lists (OutSystems, React) stay independent: no mapping, no red differences.
4. Mermaid text in the files, no SVG. No KB (`ubt_sharing_kb`). MCP only for the UI flow (cached in `route-actions/.cache/`).
5. No change in `app/`. Local commits are allowed; **never push**.
6. Never read or quote `.auth/` or `migration/.raw/`.

## Arguments

### `status` (also the default when no argument is given)
1. Run `check_route.py --status`.
2. Tell the user in at most 5 lines:
   - the done count and names, the next route, the count of routes left;
   - the routes without a TST capture (static check from the compiled code, status `done (static)`);
   - any uncommitted change in `route-actions/`.
3. Do not run a route. Ask whether to continue.

### `continue`
1. Run `check_route.py --status` and take the `next` route. If there is none, say so and stop.
2. Do `run <next>` (below).

### `run <Route>`
1. Run `check_route.py <Route>` (about 10–15 s). It writes `route-actions/routes/<Route>.md`, `APP_SHELL.md`,
   `ROUTES.md`. If it stops (not a build route), tell the user and stop. A route without a TST capture gets a static
   check (compiled code of the TST survey closure); the file says so at the top.
   - Live code: some captured routes have compiled files that TST changed after the capture
     (`migration/knowledge/tst-drift-2026-11-05.md`). The tool checks those routes against the live copies in
     `migration/runtime-sources/live/`. The file says "Live code" at the top, with TST links to the live copies.
2. Run `python3 migration/tools/ste_lint.py route-actions/routes/<Route>.md route-actions/APP_SHELL.md`; 0 errors.
3. Hand-check, against the code at the given `file:line`:
   - each line of section 3 "Differences found" (open the React code and the TST code it cites);
   - each item of section 4 "Questions". A React call with no TST chain on the route is not a question when TST
     declares it for the route. The declarations: the contract's `x-os-screens`, `migration/contract/extra-actions.json`,
     the app-shell list in `route-actions/config.json`. The tool lists such a call under "Calls that TST declares
     outside the static call graph";
   - the user action lists: a binding that looks wrong (for example an effect that the code does not have).
   When the tool is wrong, fix `route-actions/tools/`, run again, and check the other done routes still give the
   same result (`git diff route-actions/routes/`).
4. Commit locally: `route actions: <Route> checked (<n> calls, <m> missing, <q> questions)`.
5. Tell the user in Vietnamese: the file path, the result counts, the missing rows with their evidence, the
   questions, and any tool fix. End with: "Bạn ok thì mình đánh `done` và chạy <next route>."
6. Stop and wait for the user.

### `done <Route>`
Only after the user said done for this route in this conversation:
1. `check_route.py <Route> --mark-done`, commit locally (`route actions: <Route> done`).
2. Then do `continue`.

### `app-shell`
Run `check_route.py --app-shell`, lint `route-actions/APP_SHELL.md`, report the counts and the questions.

## At the end of a session with route work
Update `migration/contexts/context-074-route-actions-pilot.md` (Result: done count; Next: the next route) and the
"Now" block of `migration/contexts/INDEX.md`. Commit locally.
