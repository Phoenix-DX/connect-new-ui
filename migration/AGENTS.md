# AGENTS.md: UBTConnect React clone

You are rebuilding the UBTConnect mobile web front end (OutSystems 11) in React, screen by screen, with mock data. Goal of this phase: **parity**. The React app must look and behave like the original at the captured viewport, using the original CSS. No redesign, no style refactor, no new features.

## Repository

```
migration/
├── AGENTS.md                      this file
├── board.md                       status board: read it with `python3 <skill>/scripts/board.py show ...`, change it only with `board.py set`
├── catalog/                       blocks.md (what is shared and where it is built), actions.md, foundation-queue.md
├── knowledge/actions/<Action>.md  cached server-side answers (OutSystems MCP)
├── change-requests/CR-<n>.md      requests for shell/shared changes
├── parity-exemptions.json         accepted differences (decided by a person)
├── shell/                         app-shell.spec.md + analysis of the home screen
└── screens/<Screen>/              pack.md, analysis/, spec or notes.md, parity/
app/                               the React app (Vite + React 19 + TS + React Router 7 + TanStack Query + MSW)
```
`migration/screens/*/capture/` holds raw captures: never read by build agents, never committed.

## Your role decides what you may touch

| Role | May write | May not write |
|---|---|---|
| Route agent for `<S>` | `app/src/screens/<S>/`, `migration/screens/<S>/`, `migration/change-requests/CR-<S>-*.md`, route state via `route.py` | everything else, in particular `app/src/shell`, `app/src/shared`, `app/src/lib`, `os-legacy.css`, other screens, exemptions |
| Foundation owner | `app/src/shell`, `app/src/shared`, `app/src/lib`, legacy CSS (only to add missing original stylesheets), `package.json` and lockfile (only for accepted ADRs), change requests | screens (except to remove a `<NotCaptured>` marker for a closed CR, with the screen's owner) |

`python3 <skill>/scripts/scope_guard.py --screen <S>` must pass before a screen is merged.

## Stack and patterns are fixed

`migration/architecture.md` (generated from `stack.json`) is the confirmed architecture and tech stack; `migration/patterns/P-*.md` say how this app does recurring things, each with a reference implementation once one exists. Use only allowed packages, follow the accepted patterns your route spec lists under "Patterns used", and copy the reference implementation's structure. If you need anything they do not cover, ask the user (decision question); never add a package, a pattern or a local convention yourself. `consistency_check.py --screen <S>` must pass.

## Sources of truth, in order

1. Your `pack.md` (lite tier) or your `<S>.spec.md` (full tier). Read it fully, once.
2. The files the pack lists under "Look up on demand", opened by grep or line range.
3. `catalog/blocks.md` and the shared component's README for collapsed blocks.
Never use screenshots or memory of "how apps usually look" to decide markup, classes, sizes, colors or text.

### Where the compiled code is (check all before calling a source "missing")
- Screen and block views (`*.mvc.js`): `capture/survey-UBTConnect.json` → `sources` (every screen and block, even ones
  no capture loaded); readable copies of block sources in `migration/blocks/sources/`.
- Module controllers and models (`<Module>.controller.js`, `<Module>.model.js`): `migration/screens/*/analysis/sources/raw/`
  (identical copies across screens), `migration/shell/sources/`, `migration/contract/sources/raw/`.
- OutSystems runtime, OSUI providers, plugin and SDK scripts, `moduleinfo.json`, `OutSystemsSettings.js`:
  `migration/runtime-sources/` (index: `migration/knowledge/runtime-sources.md`).
- Static-entity values of TST by name: `migration/knowledge/static-entities-tst.json`.
Only when a file is in none of these, name it in your report: the orchestrator fetches it read-only.

## Rules

1. **Start only through `route.py start <S>`.** It refuses routes that are finished or not decided `build`, and resets partial work of interrupted or failed runs. Never continue somebody else's partial code by hand.
2. **Feature flags are decided, not assumed.** Build only the branches the user decided for each flag of the route (`flags.py route <S>`); a flag without an MCP answer and a user decision is a question.
3. **Never guess.** Something is known only when the capture, the compiled code, `migration/knowledge/`, an MCP answer or a user answer recorded in `questions.json` shows it. Everything else is a question: facts go to the OutSystems MCP first (read-only), decisions and facts the MCP cannot settle go to the user (`route.py ask`, see the skill's references/route-agent.md). Do not build on a recommendation the user has not confirmed. You may never answer a decision yourself.
4. **Confirmed stack only.** No package outside the allow-list, no edit to `package.json`, lockfile, `stack.json` or patterns. Changes go through an ADR the user accepts, applied by the foundation owner.
5. **Markup and classes exactly as captured.** Same element types, class lists, nesting and `data-block` wrappers (`<OSBlock>`). The original CSS only works if the markup matches. Never add CSS to fix a visual difference: fix the markup. Review-only styles live in `src/styles/review.css`.
6. **Compose, do not re-implement.** Shell and shared components exist for every block marked `[shell]` or `[shared: …]` in the pack. Use them with the inputs the capture shows.
7. **Shared or shell needs a change → change request.** Write `migration/change-requests/CR-<S>-<n>.md` from the template, render that part as `<NotCaptured name="CR-<S>-<n>: …">`, list it under Change requests and Decisions to confirm in `route-spec.md`, and finish the rest. A block marked `[shared: NOT BUILT]` in the pack is also a change request (it should have been in the foundation queue).
8. **Routes are the original paths** (`src/app/routes.generated.ts`, generated). Inputs come from the query string with the original parameter names.
9. **Data through adapters.** `src/screens/<S>/api.ts` calls `callAction(module, action, inputs)` and maps the wire shape with `src/lib/os-wire.ts`. `callAction` is typed from the API contract (`src/api/openapi.yaml`); an action missing from it does not compile: write a change request, never edit the contract. Data actions and aggregates are called with their owner (the screen or block that defines them, see `calls.json` paths): `callAction('Module', 'Owner/DataActionX', inputs)`, mocked with `recordedHandler('Module', 'Owner/DataActionX')`. Long Integer stays a string. Components never see `{ List: [...] }`, `""`-as-null or `1900-01-01`.
10. **Mocks mirror the capture.** `mocks.ts` exports MSW handlers with the captured item counts and field shapes, fictional values only. If the confirmed stack uses recorded fixtures: a recorded action uses `recordedHandler(module, action)` from `src/mocks/fixtures` and the adapter sends the OutSystems input names; never edit a fixture; never open `migration/.raw/` (HAR, salt); unrecorded actions or branches get fictional data and a line in Decisions to confirm. Scenarios: `real`, `empty`, `error`, plus one per captured state that needs data.
11. **Calls live where the call sites say.** Each call goes in the React handler that matches the root of its chain (click handler, mount effect, event callback).
12. **Behaviour from the capture.** Lifecycle, render conditions, click handlers, call order, error branches, toasts and navigation (original parameter names) follow the pack/spec. Use TanStack Query for server state and mirror the original loading rules.
13. **Never invent.** Gaps and states not captured render `<NotCaptured>` with whatever real content is known; images not captured use `osImage()`.
14. **Web branch only.** Native-only plugin branches are out of scope unless the pack or spec says otherwise.
15. **No real data, no secrets** in code, mocks, tests or commits. Never open `.auth/` (credentials, session) or `migration/.raw/`; sign-in is done by `site_auth.cjs`, never by you. Recorded fixtures count as real data until the user has reviewed them (`har_to_fixtures.py check` passes).
16. **Security in the mock phase.** Login, session, PIN and permissions are mocked. Do not store tokens or personal identifiers in browser storage even if the original does. Client-side permission checks only hide UI; note which server actions need server-side authorization.
17. **Same calls as the original (P-CALLS).** Data actions in the same phase (load or the user event), server actions on the same events, in the same order, with the original input parameter names: `analysis/calls.json` is the reference and call parity checks it. Fix a call difference in the route's logic, never by changing the mock.
18. **Flags through the flag store (P-FLAGS).** `useFlag('<Key>')` / `useFlagOn('<Key>')` from `src/lib/flags` with the key of the user's decision; never a hard-coded value, never storage.
19. **OutSystems UI patterns are shared (P-OSUI).** Dropdown, DatePicker, Tabs, Sidebar, Carousel… come from `src/shared/osui/`; if the one you need is not built, it is a change request (it belongs in the foundation queue).
20. **Mutations keep state (P-MUTATION).** Data a create/update/delete changes lives in a `collection` of `src/mocks/store.ts`, read and changed with `statefulHandler`, so what the user saves shows up where the original shows it.
21. **Inline styles only as captured.** An inline visual style passes `consistency_check` only when every declaration is in a captured `style` attribute of the route; otherwise fix the markup.
22. **Exemptions are not yours to add.** If a parity difference looks acceptable, ask the user (decision question) with the evidence; the user decides.
23. **Stay inside your context.** Do not read other screens' notes, specs or packs, or the whole board. Do not re-open files whose content is in your pack.

## Workflow per route

1. `route.py start <S> --owner <you>` (resets partial work; earlier answers are kept; a spec recorded with `spec-done` whose inputs are unchanged is kept, and the route restarts at build). Protocol: the skill's `references/route-agent.md`; do not read SKILL.md.
2. If the capture is not reused: `route.py step <S> capture`, run `batch_capture.cjs run --only <S> --analyze`.
3. `route.py step <S> spec`: generate `pack.md`, write `route-spec.md` (lite: `route-spec-template.md`, full: `spec-template.md`). Every unclear point gets a question (`route.py ask`); resolve facts with the OutSystems MCP; ask the user the decisions before writing code. When no blocking question is open: `route.py spec-done <S>` (again after any later spec edit or new answer).
4. `route.py step <S> build`: create `src/screens/<S>/` with `types.ts`, `api.ts`, `mocks.ts`, `index.tsx`, `components/`; `npm run typecheck` and `npm run build`.
5. `route.py step <S> parity`, then `route.py parity <S> --app http://localhost:5173` until every state is clean (all viewports, flag variants, steps, loading/offline; DOM, styles, pseudo-elements, positions, text, pixels and calls). Re-run it after the last code change: reports are fingerprinted. What cannot be fixed becomes a change request or a decision question.
6. Fill "Decisions to confirm" (and "Feature flags" when the route has flags) in `route-spec.md`, run `consistency_check.py --screen <S>`, then `route.py ready <S>` and present the review message to the user. The user tests the route.
7. Everything the user reports goes in with `route.py feedback … --by user`; fix or answer each item, `route.py fixed <S> F<n> --note …`, then `ready` again. Only when the user answers the latest review `confirm`: `route.py finish <S>`. Never mark a route built any other way.
8. If any step cannot complete (network, crash, a gate that cannot pass): `route.py fail <S> --reason "..."`. The next run rebuilds the route's code; its recorded spec is kept if its inputs are unchanged.

## Definition of done (per screen)

- The user tested the route and answered the latest review `confirm`; `route.py finish` passed: spec complete, no open question, flags answered and decided, no feedback left, every captured state passes parity (or is a state the user reviews instead), scope guard passes.
- Every call of the screen goes through an adapter, is mocked, and matches the capture per phase (call parity); every navigation goes to the right route with the right parameters.
- Every viewport and every flag value the user decided to build has a captured state that passes parity.
- Gaps render `<NotCaptured>`, never invented content.
- Typecheck, build and scope guard pass.
