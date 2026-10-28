# Item 8 waves S1 to S4: brief for one build agent

The design is approved by the user (`../review/item8-solution.md` §2.5 author rules, §4 behaviour mapping, §7.2 per-hook
tests, §9 decisions). The platform is built: steps S0a and S0b are committed (`item8-S0a.md`, `item8-S0b.md`).

## Hard rules

- Never open, read or print anything in `.auth/` or `migration/.raw/`.
- Never commit, push or `git add`. Do not touch `.claude/settings.json`.
- Change only the hook files of your list, their test files and their README files. Do not edit platform files
  (`app/src/platform/**`, `app/src/legacy/**`). If a hook needs a platform change, stop and report it.
- Do not run the full `npx vitest run`, `npm run ci`, `npm run unused` or the parity sweep: another agent works in
  the same tree at the same time. Run only the checks of section "Checks".
- No network, no OutSystems MCP, no TST access. Use Edit/Write (no `sed -i`).
- Budget: at most 70 tool calls. One-shot reads.

## What to do per hook

1. Read the hook's section in the inventory (`../review/item8-inventory/group-<X>.md`). The `react-extra` rows are
   the work. `same` rows stay as they are. The MCP check of the group is in `../review/item8-w23-errorpage.md` §5.
2. Apply the author rules of the design §2.5:
   - an awaited data action or screen aggregate (an `api/*` fetch of a `DataAction…` or aggregate, a query `refetch()`
     or `fetchQuery`): `await flow.fetch(call)` (R1);
   - a server action, a module client action (for example `hasAccessToRegion`, `showUpgradePopUp`), a plugin, a
     dialog: not wrapped (R2);
   - an own action of the screen or block that a flow calls after an await (X4): define it with `flow.own(…)` (R3);
   - a block event after an await: `flow.events.onX(…)` instead of `eventsRef.current.onX(…)` (R3);
   - a navigation: as it is; the platform blocks it from a left screen (R4);
   - a toast: as it is (R5);
   - a widget handler that starts a flow: `flow.run(() => handler(…))` instead of `void …catch(raiseToFlowHandler)`;
   - a state write: `dispatch(…)`; delete the local `write`, `readyStarted`, `newestReadyRun` copies that `useFlowState`
     now covers (once-guard in StrictMode, dispatch no-op after unmount). Keep `isAlive` checks that guard a superseded
     OnParametersChanged run (open point 5 (a): today's meaning stays).
   - a hook without `useFlowState` gets `useFlowScope(events)` from `@/platform/navigation`.
3. Comments: replace "Decision W23 …" text with "Flow scope (item 8): …" and cite the TST rule (R1, R3, R4).
4. Tests (written first, design §7.2): rewrite each W23 test of the hook to the new rule. "Unmount while the R1 call is
   pending: no side effect, no state write, no raise". Where the hook has an R2 path: "unmount while the server
   action is pending: the toast shows; the own action, the event or the navigation stops; nothing after it runs".
   Keep all other tests green. Update assertions that still expect W23 behaviour.

## Checks (from `app/`)

- `npx tsc --noEmit` (the whole project; report errors in other files as seen, do not fix them).
- `npx eslint <your changed files>` and `npx prettier --check <your changed files>` (write if needed).
- `npx vitest run <the folders of your hooks>`; report any "Errors" line.
- `npm run arch`.

## Output

Write the build note named in your prompt: Files, Tests (written first), Behaviour changes per hook (each
`react-extra` row: fixed or why not), Differences from the design with evidence, Questions (options and a
recommendation), Checks. Reply with the same summary and the tool-call count.
