---
name: outsystems-screen-spec
description: Migrate any OutSystems 11 Reactive or Mobile/PWA web app to React route by route, from the app's own route list, with UI parity. Resumable runs; a route is finished only after the user tests and confirms it. Never guesses: facts go to the OutSystems MCP, decisions to the user; stack, patterns and feature flags are confirmed by the user. Token-free Playwright capture over viewports and flag variants, optional anonymized mock data recorded from the real app, stateful mocks, block and OutSystems UI catalog, frozen shared library, context packs, and a fingerprinted parity gate (DOM, styles, positions, text, pixels, service calls). Use whenever the user gives an OutSystems app URL or route, wants to spec, reverse-engineer, migrate or clone it to React/Next.js, runs or resumes such a migration, asks why a rebuilt screen does not match, or wants to cut its token cost.
---

# OutSystems → React, screen by screen

> **Route agent (a subagent or task that builds or fixes ONE route)?** Stop reading here. Read `references/route-agent.md`, `migration/AGENTS.md` and your `pack.md` only; the rest of this file is for the orchestrator.

Rebuild an OutSystems 11 front end in React with mock data (fictional, or recorded from the real app and anonymized), so that every screen looks and behaves like the original, at a cost per screen that stays small and predictable.

Two ideas carry the whole skill:

1. **Evidence first.** What the browser loads and renders (compiled `.mvc.js`, rendered DOM, stylesheets, service calls) is the source of truth; the OutSystems MCP adds what only the server knows. Screenshots are for comparison, never a source. Anything not observed is a gap, not a guess. Names mislead in OutSystems (`Legacy_*` flows that are live, `New_*` blocks that never run), compiled expressions do not, and a rebuild only matches when it reuses the original class names inside the original CSS.
2. **Spend tokens only on judgment.** Measured on real migrations, the cost is not in reading one screen but in work repeated or thrown away: screens specified before anyone decided they were in scope, the same shared block re-analysed by every screen, shared code edited by screen tasks and re-verified everywhere, known differences re-investigated on every screen, and status files that grow into logs every agent re-reads. Each phase below removes one of those leaks. Anything mechanical (driving the browser, moving files, diffing DOM, counting reuse) is a script; agents read, decide and write code.

## Default site and automatic sign-in

Unless the user names another app, every run works on **UBTConnect TST**: `https://ubtm-tst.ubtconnectglobal.com/UBTConnect/` (profile `assets/site-profiles/default.json` = `ubtconnect-tst.json`). Two pages gate the app, and `scripts/site_auth.cjs` passes both by itself:
1. `/UBTConnect/Login` → button **"Login with UBT One"** → identity provider `https://ubtb2cuat.b2clogin.com/…` → test account user + password → back to the app.
2. `/UBTConnect/PINUnlock` → the PIN (input boxes or keypad, both handled).

Secrets are never in the skill: they come from `.auth/credentials.json` (`{"user", "password", "pin"}`, template `assets/credentials.example.json`) or the environment variables `UBT_USER`, `UBT_PASSWORD`, `UBT_PIN`. Before the first run, check that the secrets file exists and that `.auth/` is in the project's `.gitignore`; if the file is missing, ask the user to create it (never write the values into chat, code, notes or the board). Then:
```bash
node scripts/batch_capture.cjs login --auto --storage .auth/state.json     # sign in + PIN, save the session
```
`batch_capture.cjs run` and `record_har.cjs` use the same profile: they sign in when no session is saved, and sign in again or unlock the PIN by themselves whenever the app sends a page to the login, identity provider or PIN page (a PIN lock kept per tab is unlocked on every new tab before capturing). Calls made while signing in are kept out of runtime captures and out of fixtures. Another app: copy a profile to `migration/site.json` (it wins over the default) or pass `--profile`; `--no-auto` turns automatic sign-in off.

## Pipeline

| # | Phase | Who | Tool | Output | Gate to pass |
|---|---|---|---|---|---|
| 0 | Survey | agent + script | `survey.js`, `survey_app.py` | `survey/` (routes, shell, shared blocks, variants, `screens.json`) | none |
| 1 | Scope | script suggests, **person decides** | `board.py init / triage / set` | `migration/board.md` with a decision per screen | every screen is `build` or `skip` before it is captured |
| 2 | Capture | script | `batch_capture.cjs` (+ browser MCP only for states a script cannot reach) | `screens/<S>/capture/`, `screens/<S>/analysis/` (raw DOM per state, `states.json`, `calls.json`) | coverage.md reviewed |
| 3 | Catalog | script | `catalog.py`, `board.py tier`, `flags.py scan` | `catalog/` (blocks, OutSystems UI patterns, actions, foundation queue, tiers), `flags.md` | none |
| 4 | Architecture and stack | agent proposes, **user confirms** | `stack.py` | `stack.json`, `architecture.md`, `patterns/` | every stack item and pattern confirmed by the user |
| 5 | Foundation | one owner agent | shell spec, `scaffold_react_app.py --stack`, shared blocks | `app/src/platform`, `app/src/components`, `app/src/containers` with `@os-block` tags | foundation queue empty for the next wave; shared **frozen** |
| 6 | Route loop | agent per route, user answers | `route.py`, `context_pack.py`, spec templates | `route-spec.md`, `questions.json`, `app/src/pages/<S>/` | no open question, spec complete |
| 7 | Parity | script, agent fixes | `route.py parity` (runs `parity_check.cjs` per state) + exemptions | `screens/<S>/parity/*.json` + `*.diff.png`, fingerprinted | every state: current, full, 0 unexempted differences; every call mocked |
| 8 | Your test and finish | **user tests and confirms**, agent fixes feedback | `route.py ready / feedback / fixed / finish` | status `built` (finished), `finished.json` | the user answered the latest review `confirm` |

Measure all along with `ledger.py` (tokens per screen and phase, and the waste on screens later skipped). Read `references/end-to-end.md` for the full walkthrough with ready-to-use prompts and the multi-agent layout. The sections below say what each phase must get right.

## Phase 0: Survey

Run `node scripts/batch_capture.cjs survey` (signs in by itself with the site profile, injects `scripts/survey.js`, saves `capture/survey-<App>.json`: static compiled code only, no user data). Without automation: inject `scripts/survey.js` on any screen (logged in), run `await __osSurvey.run()`, save `survey-<App>.json`. Then:
```bash
python3 scripts/survey_app.py --survey capture/survey-<App>.json --out migration/survey --agents-out migration/AGENTS.md
```
The survey is a map, never a spec.

## Phase 1: Scope gate (do this before any capture or spec)

```bash
python3 scripts/board.py init --screens migration/survey/screens.json [--import-routes migration/survey/routes.md]
python3 scripts/board.py triage --survey capture/survey-<App>.json
python3 scripts/board.py show --decision "ask,?build,?skip"
```
`triage` suggests `?build` / `?skip` / `ask` with evidence (reachability from the shell, entry points that are all skipped, no reference anywhere in compiled code, variants of a screen already chosen, test screens, screens with the same inputs as a built one, content in `Deprecated`/`Legacy` modules). It never decides. Take the list to the person who owns the product scope, in **one** session, and record each answer:
```bash
python3 scripts/board.py set <Screen> decision=skip reason="<why> (<who>, <date>)"
```
Agents only start on `decision = build`; `board.py set` refuses status changes on anything else. Whole product areas (an entire module out of scope) are decided here too. Why this matters: work on screens later skipped is pure waste and is typically the single largest leak. Details and the decision checklist: `references/scope-gate.md`.

`board.md` stays lean (one short line per screen). Long notes go to `migration/screens/<S>/notes.md` (`board.py note`). Agents read the board with `board.py show` filtered to what they need, never the notes of other screens.

## Phase 2: Capture without tokens

```bash
node scripts/batch_capture.cjs login --base https://<host>/<App>/ --storage .auth/state.json   # the person logs in
node scripts/batch_capture.cjs init-plan --board-dir migration --out migration/capture-plan.json
# fill route parameters (test-account ids), waitFor selectors, interaction steps
node scripts/batch_capture.cjs run --base https://<host> --plan migration/capture-plan.json \
     --storage .auth/state.json --out migration/screens --analyze
```
For each screen it loads the route with `capture.js` and `startRuntime()` as an init script (the first load is captured), snapshots `default`, runs the plan's steps (click → snapshot → back, each step marked so its service calls are known), and adds `loading` (service calls held) and `offline` (service calls aborted) automatically; `--analyze` runs `analyze_capture.py`. The plan can add **viewports** (`defaults.viewports`, stack item `viewports`: states `<state>@<viewport>`) and **flag variants** (`flagVariants`, from `flags.py variants`: states `<state>+<Key>=<value>`, each with its own runtime capture). Every snapshot stores how it was reached (viewport, html/body classes, flags, steps, scenario) in `analysis/states.json`; `analysis/calls.json` lists every call with its phase (load or the step that triggered it); `analysis/dom/<state>.raw.html` is the byte-exact DOM parity renders (`dom/<state>.html` is pretty-printed for reading only). Use a browser MCP (`references/mcp-playbook.md`) only for states the plan cannot express: back-from-history with view cache, an account with other data, native-ish gestures. Sign-in is done by `site_auth.cjs` from the secrets file (section "Default site and automatic sign-in") or by the person; an agent never types, reads or prints credentials. The session file is a secret too (keep `.auth/` out of git, delete it after the campaign).

**Recorded mocks (optional, the user decides in phase 4).** When the stack's `mocking` item says recorded fixtures, mock data comes from the real app instead of being invented: `record_har.cjs` records the screenservice calls of a test environment, either while the person browses or automatically (it replays the capture plan and crawls in-app links from the logged-in session, with a read-only guard that aborts every action that is not a read), `har_to_fixtures.py convert` turns them into anonymized fixtures (same structure, list sizes, statuses and OutSystems empty values; personal text replaced by fake text of the same length; ids remapped with one table so lists and details stay linked), and the user reviews `REVIEW.md` before `har_to_fixtures.py review --by user`. Routes serve them with `recordedHandler(module, action)`. Agents never open the HAR. The read-only guard of automatic recording lets through only data actions, aggregates and `ActionGet|List|Load|Fetch|Search|Find|Read|Count…` names with no write verb in them. `har_to_fixtures.py coverage` lists, per route, the calls without a recording. Mutations keep state through `src/mocks/store.ts` (pattern P-MUTATION), seeded from the fixtures. Details: `references/recorded-mocks.md`.
```bash
node scripts/record_har.cjs --base https://<host>/<App>/ --storage .auth/state.json --out migration/.raw/session-<date>.har \
     --plan migration/capture-plan.json --crawl      # automatic; without --plan/--crawl the person browses; read migration/recording-coverage.md
python3 scripts/har_to_fixtures.py convert --har migration/.raw/session-<date>.har --out app/src/mocks/fixtures --rules migration/mock-rules.json
python3 scripts/har_to_fixtures.py review --out app/src/mocks/fixtures --by user    # only after the user read REVIEW.md
```

## Phase 3: Catalog and tiers

```bash
python3 scripts/catalog.py --screens migration/survey/screens.json --board-dir migration --app app --out migration/catalog
python3 scripts/board.py tier --tiers migration/catalog/tiers.json
python3 scripts/flags.py scan --survey capture/survey-<App>.json --screens migration/survey/screens.json
```
`catalog.py` counts every block across live screens, finds which ones are built (a component carrying `@os-block Module.Flow.Block`), and writes:
- `foundation-queue.md`: shared blocks remaining screens need that are not built. These are built in phase 5, never inside a screen task.
- `actions.md`: every data/server action and the screens that use it. Ask the OutSystems MCP **once per action** and cache the answer in `migration/knowledge/actions/<Action>.md`; screen agents read the cache.
- `flags.py scan` writes `migration/flags.md`: every feature flag, the routes it affects, and (later) what the OutSystems MCP said and what the user decided.
- OutSystems UI pattern blocks (`OutSystemsUI.<Flow>.<Block>`, kept by `survey.js`; `survey/osui.md` lists them with the OutSystems UI version and the provider libraries in the manifest) are kind `osui`: built once in the foundation as `src/components/ui/<Pattern>` (pattern P-OSUI) as soon as one remaining screen needs them, never per route.
- `tiers.json`: **lite** (all shared blocks built, ≤3 blocks of its own, ≤2 server actions), **full** (anything heavier), **wait** (needs a block from the foundation queue).

## Phase 4: Architecture and tech stack (the user confirms)

Before anything is scaffolded, agree the architecture and the stack with the user, and fix the references every route will follow:
```bash
python3 scripts/stack.py init --screens migration/survey/screens.json
python3 scripts/stack.py questions
```
`init` writes `migration/stack.json` with a proposal, options and a reason for every item (language, framework and build, React version, routing, server state, client state, API layer, mocking (fictional data or anonymized recordings of the real app), styling, forms, dates, strings/i18n, testing, lint/format, package manager, Node, authentication, tokens in the browser, PWA/offline, viewports to match, browser support, folder layout, target backend), one item per third-party OutSystems module found in the survey (maps, sortable lists, sanitizers, charts…: each needs a web equivalent, no default), one item per OutSystems UI pattern with behaviour to reproduce (`osui:<Pattern>`: the original's provider library, hand-written, or out of scope), a pinned dependency allow-list, consistency rules and seeded implementation patterns (`migration/patterns/P-*.md`: data, mocks, params, states, lists, forms, dialogs, back, OutSystems UI, flags, mutations, calls). Everything starts as *proposed*.

Present all items and patterns to the user in one session, with the evidence from the survey and the shell capture. Record each answer with `stack.py confirm <key> --value "<choice>" --by user` (or `confirm-all-proposed --by user` only after the user has seen the full list and said so), and `stack.py pattern accept <ID> --by user`. Never confirm on the user's behalf; `stack.py` refuses any other `--by`. `migration/architecture.md` is regenerated from `stack.json` and is the human-readable reference.

What this buys for every later route:
- **One stack, enforced.** `route.py start` refuses to run on an unconfirmed stack; `scaffold_react_app.py --stack` refuses an unconfirmed or incompatible one; `consistency_check.py` (part of `route.py finish`) fails a route that imports a package outside the allow-list, reaches into another route's folder, calls `fetch` directly, uses browser storage, adds CSS, sets an inline visual style the capture does not have, leaves wire shapes in components, or serves recorded fixtures the user has not reviewed.
- **Patterns with reference implementations.** Each pattern says how this app does one thing (server data, mocks, route inputs and navigation, states, lists, forms, dialogs and toasts, back navigation). Every route spec lists the patterns it follows ("Patterns used"); only accepted patterns are allowed. After the first route that implements a pattern is finished and confirmed, ask the user whether it becomes the reference: `stack.py pattern reference <ID> --route <S> --files <paths>`. Later routes copy the reference, so they converge instead of drifting; `stack.py check` warns when a reference changes.
- **Changes through ADRs only.** When a route needs something the stack or the patterns do not cover (a date picker, a new pattern), it asks the user. If the user agrees, the change is recorded as an ADR (`stack.py adr new`, accepted by the user), packages are added with `stack.py dep add … --adr`, and the foundation owner applies it once for everybody. No route ever edits `package.json`, the lockfile or the patterns.
- **Fewer merge conflicts.** Routes write only inside their own folders; route registration and mock handlers are discovered automatically (no shared index to edit); dependencies, lockfile, shell and shared change only in the foundation owner's branch; one formatter.

Details: `references/architecture-and-stack.md`.

## Phase 5: Foundation, then freeze

One owner builds the shell (`assets/app-shell-spec-template.md`, `scripts/scaffold_react_app.py --stack migration/stack.json`) following the confirmed stack and patterns, and every block in the foundation queue (OutSystems UI patterns included), each with a DOM snapshot test per captured state and an `@os-block` tag. Then shell and shared are **frozen**: screen agents may not edit `src/platform`, `src/legacy`, `src/lib`, `src/styles`, `src/vendor` or the legacy CSS. When a screen needs a change, it writes `migration/change-requests/CR-<n>.md` (`assets/change-request-template.md`), renders that part as `<NotCaptured>` and carries on. The foundation owner batches change requests, applies them, and re-runs parity on all built screens once per batch. Why: a shared fix made inside a screen task forces re-verification of every other screen that uses the block, so one screen's cost leaks into all of them. Details: `references/foundation-and-freeze.md`.

## Phase 6: The route loop

The skill knows no route of any app. The list of routes comes only from the board, built from the survey of the app being migrated. Read `references/route-loop.md` before the first run; it holds the full protocol.

**Every run starts the same way:** `python3 scripts/route.py plan`. Show the user what will happen: finished routes are skipped, interrupted or failed routes are reset and rebuilt from scratch, open questions are asked first, routes without a scope decision are not built. Then take the routes in board order:

```bash
python3 scripts/route.py start <S> --owner <you>      # refuses finished routes; resets partial work first
python3 scripts/route.py step <S> capture             # batch_capture.cjs run --only <S> --analyze (skipped if capture/.complete)
python3 scripts/route.py step <S> spec                # context_pack.py, then route-spec.md with every unclear point
python3 scripts/route.py spec-done <S>                # record the spec + hashes of its inputs: a later reset keeps it
python3 scripts/route.py step <S> build               # code in app/src/pages/<S>/
python3 scripts/route.py step <S> parity
python3 scripts/route.py parity <S> --app http://localhost:5173   # every captured state, fingerprinted reports
python3 scripts/route.py ready <S>                    # build gates pass → status review: the USER tests now
python3 scripts/route.py feedback <S> --kind bug|todo|question --text "..." --by user   # what the user found → status fixing
python3 scripts/route.py fixed <S> F<n> --note "..." # each item done, then `ready` again for the next round
python3 scripts/route.py finish <S>                   # only after the user answered the latest review "confirm"
python3 scripts/route.py fail <S> --reason "..."      # whenever a step cannot complete (network, crash, gate)
```

**A route spec for every route.** Before writing code, write `migration/screens/<S>/route-spec.md`: `assets/route-spec-template.md` for lite routes, `assets/spec-template.md` for full ones. Both must have Summary, Patterns used, Unclear points and Decisions to confirm. Every statement cites its evidence; anything without evidence goes to Unclear points with a question id.

**Never guess.** Something is known only when the capture, the compiled code, the knowledge cache, an MCP answer or a user answer shows it. Everything else is a question:
- *Facts* (what a server action does, what a field or flag means, an unreadable condition, whether the server checks authorization): ask the OutSystems MCP first, with read-only tools; record with `route.py ask --kind fact --mcp "…"` and answer with `--by mcp` only if the MCP answer is unambiguous.
- *Decisions* (anything the confirmed stack or the accepted patterns do not cover, unobserved branches, states that cannot be captured, divergences from the original, parity differences that cannot be fixed in the route, change requests and workarounds, new dependencies, native features on the web, security handling) and facts the MCP cannot settle: ask the user with evidence, the MCP's answer, options and a recommendation; record with `route.py ask --kind decision`, answer with `--by user` only. route.py refuses any other answerer for decisions.
Ask during the spec step, before code, so answers shape the first build. A question that blocks part of the work stops only that part.

**Your test decides when a route is finished.** When the build gates pass (spec complete, no open question, flags answered and decided, consistency and parity clean), `route.py ready` saves a checkpoint and sets the route to `review`: it waits for the user. Present the review message: what to open, the mock scenarios, the decisions to confirm (everything the build chose that the user has not explicitly confirmed: answers applied, divergences, mock semantics for unobserved branches, NotCaptured gaps, change requests), the feature flags with their decisions, and the items fixed since the last round. The user tests in the app and either answers `confirm`, or reports what is wrong, missing or unclear: record each point with `route.py feedback` (bug, todo or question; status becomes `fixing`), fix or answer it, mark it with `route.py fixed`, and run `ready` again for the next round. `route.py finish` refuses until the latest review is answered `confirm` by the user and no feedback is left; only then is the route `built` (finished).

**Finished is final; unfinished restarts; review waits.** A re-run skips finished routes. A route in `review` is left untouched: it waits for the user's test. A route interrupted while `fixing` is restored to its last review checkpoint (feedback items in progress go back to open) instead of being rebuilt. Any other route not finished when a run starts (stopped during capture, spec or build by a network error, a crash or an ended session, or marked failed before its first review) is reset by `route.py start`: its code, parity reports and open change requests are deleted and it is rebuilt. Answers already given (`questions.json`), the user's feedback (`feedback.json`) and a complete capture are kept, so the user is not asked twice. The spec and pack are kept too when the spec was recorded with `route.py spec-done` and its inputs (analysis, canonical context pack, flag decisions) have not changed since; the route then restarts at the build step, and only answers recorded after spec-done are folded into the spec. `--from-scratch` discards the spec as well.

**Feature flags are visible, decided and built.** `flags.py scan` (phase 3) finds every flag the routes read. `route.py plan` warns per route, each context pack lists the route's flags, and `migration/flags.md` is the reference. For every flag of the route, ask the OutSystems MCP what it is, what it switches and its values per environment (`flags.py mcp`), then ask the user how to build it (`flags.py decide --by user --key --default --values --branches [--reference]`). `flags.py export` writes the clone's flag store (`src/lib/flags.ts`: `useFlag`, `?ff=Key:value`, flag panel `?ffpanel=1`); `flags.py variants` gives the capture-plan entries for the values that need a captured reference. `ready` refuses a route with an unanswered or undecided flag, or a value built "both" without a captured state (unless the user chose `--reference none`). Details: `references/feature-flags.md`.

**Context and tiers.** Generate the pack and read it instead of the analysis folder:
```bash
python3 scripts/context_pack.py --screen <S> --analysis migration/screens/<S>/analysis --budget 14000
```
It holds the block plan (shell / shared with path / build here), the captured markup compacted, the route's calls with trigger chains, response types and cached server answers, the logic of route-specific blocks, the gaps and the other states, and the exact files to open if something is missing. CSS is not in it on purpose: the original CSS is global and unchanged, the build only needs class names. Lite routes need no full spec and no independent verifier unless parity shows an unexplained difference; full routes get the full spec with sequence diagrams and an independent check. Budget and reading rules: `references/context-budget.md`.

## Phase 7: Parity gate

```bash
python3 scripts/route.py parity <S> --app http://localhost:5173 [--state <state>]
```
For every captured state in `analysis/states.json` it runs `parity_check.cjs` at the state's viewport, with its mock scenario, flags and steps, against `dom/<state>.raw.html`. It aligns elements by tag, `data-block` and classes and reports structure, class (also `<html>`/`<body>` device classes), attribute, static text, ~80 computed styles, `::before`/`::after`, size, position, a masked full-page pixel diff (page ratio and worst 40px tile, with a diff image) and **call parity** (data actions per phase, server actions in order with their input names, against `calls.json`), after applying **named exemptions** (`assets/parity-exemptions.example.json`). Every exemption has an id and a reason, is decided by the user, and is counted in each report. Each report carries a fingerprint of the route code, shell/shared/lib/mocks, legacy CSS, exemptions and reference: the gates accept only current, full (no relaxed options) reports with zero unexempted differences, and every captured call needs a mock handler. A difference is fixed in the route's markup (or its logic for a call difference); if it can only be fixed in shell/shared it becomes a change request; if it cannot be fixed at all it becomes a decision for the user. Details: `references/parity-and-verification.md`.

## Phase 8: Your test and finish

Covered in phase 6: `route.py ready`, the user's test, feedback rounds, the user's `confirm`, `route.py finish`. A person can later set `verified` with `board.py set <S> status=verified` after checking the route in the app next to the original.

## Screen mode: capture and spec of one screen

Use this for full-tier routes, for the shell capture, or when the user asks for the spec of a single screen. Batch capture (phase 2) replaces steps 2–3 when it ran. Inside the route loop, its output is the route's `route-spec.md`.

**Inputs.** A URL or route plus base URL; optional viewport (default 390×844), environment, account type, known flags. A browser session where the person is logged in.

**Outputs.**
```
migration/screens/<Screen>/
├── capture/            raw captures (gitignored)
├── analysis/           analyze_capture.py output
├── pack.md             context pack
├── route-spec.md       spec of the route (lite or full template)
├── questions.json/.md  unclear points, MCP answers, user decisions, reviews (route.py)
├── feedback.json/.md   what the user found while testing, and how each item was fixed
├── checkpoint/         code, spec and parity at the last `ready` (restored if fixing is interrupted)
├── notes.md            log (resets, failures, finish)
├── run.json            current run state (deleted on finish)
├── finished.json       fingerprint written by route.py finish
└── parity/             parity reports per state
```

1. **Prepare.** Read `references/mcp-playbook.md` and skim `references/outsystems-runtime.md`. Set the viewport before loading (OutSystems sets device classes at load).
2. **Runtime capture.** Inject `scripts/capture.js`, `__osCapture.startRuntime()`, re-enter the screen without a full reload so data actions fire under the interceptor, exercise every interactive element, `await __osCapture.stopRuntime()` → `capture/runtime-<Screen>.json`. Cross-check `screenservices` URLs with the browser's request list.
3. **UI capture.** `await __osCapture.snapshotUI({ label: 'default' })`, retrieve the file; run the analyzer once, read `coverage.md`, capture the reachable extra states with small snapshots.
4. **Analyze.** `python3 scripts/analyze_capture.py --ui capture/capture-<S>-default.json --runtime capture/runtime-<S>.json --state capture/capture-<S>-<state>.json --out analysis`. Read `digest.md`, `call-sites.md`, `diagrams.md`, `coverage.md`, then `calls.md` + `types.ts`, `blocks-tree.txt` + `dom/default.html`; `css-relevant.md` and `security.md` when the section you write needs them; `sources/pretty/*.mvc.js` by grep for exact expressions.
5. **Server side.** Check `migration/knowledge/actions/` first. For what is not cached, ask the OutSystems MCP (read-only tools only): bodies of data actions and aggregates, server actions called from client logic, unreadable conditions, login/session/lock actions, whether each server action enforces authorization, session variables, roles, site properties, what selects between variants. Cite as `[OutSystems MCP: Module/Element]`, record each with `route.py ask --kind fact` and save reusable answers to the cache. What the MCP cannot settle, or does not exist, becomes a decision for the user.
6. **Write the spec** from `assets/spec-template.md` (as `route-spec.md` inside the route loop): traceability for every rule, component tree with render/shell/invisible/not-captured marks, markup contract, data flow and API table, state and lifecycle, render logic, interactions (from `call-sites.md`), architecture diagram (2a) and sequence diagrams (10) from `analysis/diagrams.md` with every TODO resolved, gaps, acceptance criteria. Section 4 (visual) references the shell for global styles and lists only screen-specific rules. The review prototype (`references/prototype-guide.md`, `scripts/build_prototype.py`) is optional: the React app with MSW scenarios is the prototype.
7. **Verify the spec.** Every in-scope call in `calls.md` appears in section 6; every block in `blocks-tree.txt` in section 2; every navigation target in section 9 with its parameters; every `$if` branch in section 8; triggers match `call-sites.md`; diagrams contain no TODO and use real names; no invented strings, colors, sizes or images; every unclear point has a question id.

**Manual fallback (no browser tooling).** Give the person `scripts/capture.js` and these console lines, then continue from step 4 with the uploaded files:
```js
__osCapture.startRuntime();   // navigate away in the app, come back, click through the screen
copy(JSON.stringify(await __osCapture.stopRuntime()));   // paste into runtime-<Screen>.json
await __osCapture.snapshotUI({ label: 'default' });      // downloads capture-<Screen>-default.json
```

## Privacy rules (apply throughout)

- Non-production environment and a test account. Sign-in is either done by the person, or automatic through `site_auth.cjs` with the secrets the user put in `.auth/credentials.json` or the environment: the script types them; agents never read, print, copy or commit them, and refuse to use a secrets file tracked by git (the script checks). Automatic sign-in is for test environments only (`environment: "test"` in the profile).
- Service call bodies are captured as shapes only. Do not read raw response bodies through network tools.
- DOM text that is not a static label is masked by `capture.js`; user images are dropped. Describe masked content by its source field, never guess it.
- Mock data uses fictional values with the captured counts and shapes, unless the user chose recorded fixtures (phase 4, with an ADR). Then: test environment and test account only, the person records, agents never open the HAR, `har_to_fixtures.py` anonymizes, the user reviews `REVIEW.md` and runs the review gate before anything is committed, and the raw HAR is deleted. `migration/.raw/` ignores itself in git. Capture plans hold test-account ids only; keep them and `.auth/` out of git.
- Security inventory is names only (headers, cookies, storage keys by category). Never record values, never bypass locks or forge requests; write the question down.
- Flag screens that handle sensitive categories (health, religion, ethnicity, location of people, household members) in the spec or notes and keep examples generic.

## Coming from v3.6

1. Re-run `analyze_capture.py` (or `batch_capture.cjs run --analyze`) on existing captures: it adds `dom/<state>.raw.html`, `states.json` and `calls.json` without a new capture. Captures made before v3.7 have no phase marks: their calls are all `load`; recapture routes whose server actions happen on user events.
2. Re-run `survey.js` (it now keeps OutSystems UI), `survey_app.py`, `catalog.py`; confirm the new stack items (`viewports`, `osui:<Pattern>`) and accept P-OSUI, P-FLAGS, P-MUTATION, P-CALLS with the user (`stack.py init --force` re-seeds patterns; or add them with `stack.py pattern new`).
3. Foundation owner: copy the new scaffold files (`src/lib/device.ts`, `device-classes.json`, `flags.ts`, `flags.generated.json`, `src/components/FlagPanel.tsx`, `src/mocks/store.ts`, call logging in `src/lib/api.ts`, the `loading` latency in `src/mocks/scenario.ts`, `fixtureData` in `src/mocks/fixtures.ts`) by running the scaffold into a scratch folder and merging, then `flags.py decide` again with `--key/--default/--values/--branches` and `flags.py export`.
4. Every report written before v3.7 has no fingerprint: run `route.py parity` on every route still in progress. Finished routes stay finished; ask the user whether to re-check them.

## Coming from v2 (a migration already under way)

1. `board.py init --screens … --import-routes <old routes.md>`: statuses carry over, `skip` reasons move to the Reason column, long notes move to `screens/<S>/notes.md`.
2. `board.py triage`, then one scope session for every undecided screen.
3. Run `stack.py init` and confirm every item with the user using what the existing app actually uses; pin the allow-list to the current `package.json` with one baseline ADR; write patterns from routes already built and let the user pick their references (`references/architecture-and-stack.md`, section 7).
4. Tag existing shared components with `@os-block`, run `catalog.py`, and move every shared block still missing to the foundation queue.
5. Before freezing, run parity on all built screens once to get a clean baseline; turn the differences you already accepted (transition frames, list smoothing, capture artifacts) into named exemptions.
6. Keep each route's existing capture under `migration/screens/<S>/capture/` (default UI snapshot + runtime) and its analysis under `analysis/`: route.py then treats it as complete and does not recapture. Unfinished routes with partial code are reset by `route.py start` and rebuilt; if their partial work changed shared code, review those changes as change requests first.
7. Routes already built before v3 have no `finished.json`: `route.py plan` treats them as finished. Ask the user whether any of them should be re-reviewed (`route.py start --force`, then `ready` and the user's test) to get a route spec and a fingerprint.

## Reference files

- `references/architecture-and-stack.md`: stack items, the confirmation session, ADRs, dependency allow-list, patterns and references, consistency rules, conflict avoidance.
- `references/feature-flags.md`: detecting flags, MCP questions, user decisions, building and testing branches.
- `references/route-agent.md`: the only reference a route agent reads (start, spec, spec-done, build, parity, questions, fixing feedback).
- `references/route-loop.md`: the run, one route step by step, never-guess protocol, asking the MCP and the user, resets, finish gates.
- `references/end-to-end.md`: whole pipeline, roles, multi-agent layout, prompts for each role.
- `references/scope-gate.md`: triage rules, the scope session, decision record.
- `references/foundation-and-freeze.md`: shared library, `@os-block` tags, change requests, regression runs.
- `references/context-budget.md`: what each role reads, pack budget, prompt caching, model choice, ledger.
- `references/parity-and-verification.md`: parity gate, exemptions, when to use an independent verifier.
- `references/mcp-playbook.md`: browser MCPs, large files, OutSystems MCP, security checks, extra states.
- `references/outsystems-runtime.md`: reading compiled `.mvc.js`, data/server actions, lifecycle, navigation, styling, wire format, PWA, traps.
- `references/recorded-mocks.md`: mock data recorded from the real app: recording, anonymization rules, review gate, `recordedHandler`, limits.
- `references/prototype-guide.md`: optional single-file review prototype.
- `assets/`: `route-spec-template.md` (lite), `spec-template.md` (full), `app-shell-spec-template.md`, `AGENTS-template.md`, `pattern-template.md`, `change-request-template.md`, `parity-exemptions.example.json`, `mocks-fixtures.ts` (MSW helper for recorded fixtures, written by the scaffold), `mock-rules.example.json`, `example-diagrams.md` (neutral worked pattern for spec sections 2a and 10), `prototype-app-skeleton.js`, `prototype-template.html`.
- `assets/site-profiles/`: `default.json` (= `ubtconnect-tst.json`, the default site), `assets/credentials.example.json` (template for `.auth/credentials.json`).
- `scripts/`: `site_auth.cjs` (automatic sign-in and PIN unlock, all phases that open the real app); `survey.js`, `survey_app.py` (phase 0); `board.py` (phase 1 and status); `batch_capture.cjs`, `capture.js`, `analyze_capture.py`, `record_har.cjs`, `har_to_fixtures.py` (phase 2); `catalog.py`, `flags.py` (phase 3); `stack.py` (phase 4); `scaffold_react_app.py` (phase 5: also writes `src/lib/device.ts`, `src/lib/flags.ts`, `src/components/FlagPanel.tsx`, `src/mocks/store.ts`); `route.py`, `context_pack.py`, `consistency_check.py`, `scope_guard.py` (phase 6); `parity_check.cjs`, run by `route.py parity` (phase 7); `ledger.py` (all); `build_prototype.py` (optional).
