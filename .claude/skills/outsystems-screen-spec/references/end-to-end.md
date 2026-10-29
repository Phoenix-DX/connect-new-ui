# End-to-end: from an OutSystems app to a React app with mock data

## Contents
1. Pipeline and gates
2. Roles
3. Repository layout
4. Phase by phase
5. Running several agents
6. Prompts

## 1. Pipeline and gates

```
Survey ──► Scope gate ──► Batch capture ──► Catalog + tiers ──► Architecture + stack (user) ──► Foundation (freeze) ──► Route loop ──► Parity gate ──► Review + finish
 (once)   (person decides)   (script)          (script)          (one owner)          (parallel)       (script)       (person)
                                                                     ▲                    │
                                                                     └── change requests ─┘
```

A route moves forward through `todo → capture → spec → building → review (the user tests) ⇄ fixing → built → verified`, only when its decision is `build`, and only `route.py finish` after the user's `confirm` can mark it built. Finished routes are skipped, routes in review wait for the user, routes interrupted while fixing are restored to their last review checkpoint, any other unfinished route is reset and rebuilt from scratch. Capture is sequential (one browser session); everything after it runs in parallel per screen.

Why gates instead of a loop per screen: in a per-screen loop, every screen pays again for decisions that belong to the whole app (is this area in scope? how does this shared block behave? is this difference acceptable?). Gates move those decisions up front, to one place, decided once.

## 2. Roles

| Role | Does | Reads | Writes |
|---|---|---|---|
| Person (product/tech owner) | scope decisions, exemptions, final review | board `ask` rows, parity reports, the running app | `board.py set decision=…`, `parity-exemptions.json`, status `verified` |
| Orchestrator agent | runs scripts, dispatches tasks, keeps the board | `board.py show`, `catalog/`, ledger report | board statuses, ledger |
| Foundation owner agent | shell, shared blocks, change requests | shell spec, `foundation-queue.md`, change requests | `app/src/platform`, `app/src/components`, `app/src/containers`, `os-legacy.css` |
| Screen agent | one screen | `AGENTS.md`, its `pack.md` (+ spec for full tier) | `app/src/pages/<S>/`, `migration/screens/<S>/`, change requests |
| Verifier agent (full tier, or on unexplained diffs) | independent check against the capture | spec, pack, parity reports, the app | `notes.md` verification section |

## 3. Repository layout

```
migration/
├── AGENTS.md                    rules for screen and foundation agents
├── board.md, board.meta.json    status board (board.py)
├── capture-plan.json            routes, params, steps for batch_capture (gitignored if ids are sensitive)
├── parity-exemptions.json       named, accepted differences
├── stack.json, architecture.md  confirmed architecture and stack, ADR log, allow-list (stack.py)
├── patterns/P-*.md              implementation patterns with reference implementations
├── survey/                      survey_app.py output
├── catalog/                     catalog.py output
├── knowledge/actions/           cached OutSystems MCP answers, one file per action
├── change-requests/             CR-<n>.md
├── metrics/ledger.csv           tokens per screen and phase
├── shell/                       app-shell.spec.md + analysis of the home screen
└── screens/<S>/                 capture/ (gitignored), analysis/, pack.md, spec or notes, parity/
app/                             React app (scaffold_react_app.py)
.auth/                           browser session (secret, gitignored)
```

## 4. Phase by phase

**Survey.** `survey.js` on any screen, then `survey_app.py --agents-out migration/AGENTS.md`.

**Scope gate.** `board.py init`, `board.py triage --survey …`, one session with the person over `board.py show --decision "ask,?build,?skip"`. See `scope-gate.md`. Optionally record the cost of this phase in the ledger as `scope`.

**Batch capture.** `batch_capture.cjs login`, `init-plan`, fill the plan, `run --analyze`. Review `coverage.md` of each screen; capture the remaining reachable states with the browser MCP (back-restored, other accounts) and re-run `analyze_capture.py` with every `--state`.

**Catalog and flags.** `catalog.py`, `board.py tier`, `flags.py scan` (then `flags.py warn` to see routes with flags). Ask the OutSystems MCP once for every action in `actions.md` that has no cached answer, in batches per module (the MCP sees one module at a time), and save the answers under `knowledge/actions/`.

**Architecture and stack.** `stack.py init`, one session with the user over `stack.py questions`, every item and pattern confirmed, `stack.py check` OK. See `architecture-and-stack.md`.

**Foundation.** Shell capture in screen mode into `migration/shell`, `app-shell.spec.md`, `scaffold_react_app.py --stack migration/stack.json`, build the shell, then every block in `foundation-queue.md` with a DOM snapshot test and an `@os-block` tag. Re-run `catalog.py`: waiting screens turn lite or full. Freeze.

**Route loop.** `route.py plan`, then per route: `route.py start`, capture if needed, pack, `route-spec.md` with every unclear point (facts to the OutSystems MCP, decisions to the user), build, parity on every captured state, `route.py ready`, the user tests (feedback rounds with `route.py feedback` and `fixed`), `route.py finish` after the user confirms. Change requests go to the foundation owner; the route renders `<NotCaptured>` for that part. Full protocol: `route-loop.md`.

**Change request batches.** The foundation owner applies a batch, re-runs parity on all built screens that use the touched blocks (catalog `blocks.md` lists them), and updates affected screens' notes. One regression run per batch, not per screen.

**Review.** Person checks each scenario and state, sets `verified`. Merge.

## 5. Running several agents

- Claude Code with subagents: the orchestrator runs the scripts and owns the board; it dispatches one subagent per screen with only: the skill path, `references/route-agent.md`, `migration/AGENTS.md`, the screen folder, and the instruction to stay inside it and not to load the skill itself (SKILL.md is orchestrator material). The foundation owner is a separate long-lived subagent (or the orchestrator itself between waves).
- Git: one branch (or worktree) per screen; `scope_guard.py` in CI or as a pre-merge step; merge after parity and review.
- Board writes go through `board.py set` (atomic file replace; small, so conflicts are rare and easy).
- Record every subagent run: `ledger.py add --screen <S> --phase <phase> --tokens <total_tokens from the task notification>`. Review `ledger.py report` after each wave.

## 6. Prompts

Scope triage (orchestrator):
> Use the outsystems-screen-spec skill. Initialise the board from `migration/survey/screens.json` (import `migration/survey/routes.md` if it exists), run triage with the survey file, and give me the undecided screens grouped by the question I need to answer, with the evidence for each. Do not start any capture.

Architecture and stack session (orchestrator):
> Run `stack.py init` with the survey, gather the evidence (third-party modules, shell capture, forms, lists, strings), then present every stack item and pattern from `stack.py questions` to me in one message with proposal, options and reason. Record only what I answer; do not confirm anything for me.

Batch capture (orchestrator, after the plan is filled):
> Run batch_capture for every `build` screen with status todo, with --analyze. Then list per screen the states coverage.md says are still missing, and which of them need the browser MCP.

Foundation (foundation owner):
> Read `migration/AGENTS.md`, `migration/shell/app-shell.spec.md` and `migration/catalog/foundation-queue.md`. Build the queued shared blocks in `app/src/components/` or `app/src/containers/` in queue order, each with an `@os-block` tag and a DOM snapshot test per captured state of the screens that use it. Stop when the queue is empty; then re-run catalog.py and board.py tier.

Run the route list (single agent, interactive):
> Use the outsystems-screen-spec skill. Run `route.py plan` and show me the plan. Ask me all open questions first. Then take the routes in board order and run the route loop for each one (references/route-loop.md): skip finished routes, reset and rebuild interrupted or failed ones, write the route spec with every unclear point, ask the OutSystems MCP for facts and me for decisions, never guess, then mark it ready for my test and wait. I will test each route and either confirm or give feedback; fix my feedback in rounds, and finish a route only when I confirm.

Spec pass for many routes (orchestrator, to batch questions):
> For every route that `route.py plan` lists to build: start it, capture if needed, generate its pack and write its route-spec.md with all unclear points; resolve facts with the OutSystems MCP; record the rest as decision questions; run `route.py spec-done` once no blocking question is open. Do not write code yet. Then give me all open questions of all routes in one list, grouped by topic.

Build one route (subagent, after the questions are answered):
> Do not load the outsystems-screen-spec skill and do not read its SKILL.md. Read `<skill>/references/route-agent.md`, `migration/AGENTS.md` and `migration/screens/<Screen>/pack.md`, nothing else up front. Route `<Screen>`: follow route-agent.md from `route.py start <Screen>` to `route.py ready <Screen>`. If anything new is unclear, record it with `route.py ask` and stop that part; never guess. Return the open question ids and the review message.

Fix feedback on one route (subagent):
> Do not load the outsystems-screen-spec skill. Read `<skill>/references/route-agent.md` (sections 1 and 5) and `migration/AGENTS.md`. Route `<Screen>` is in `fixing`: run `route.py start <Screen>`, then fix the open items in `feedback.md` reading only the files they touch. End with `route.py ready <Screen>` and return the review message.

Change-request batch (foundation owner):
> Apply the open change requests in `migration/change-requests/`, then re-run parity on every built screen that uses the touched blocks. Report what changed per screen; close the requests.

Wave report (orchestrator):
> Run `board.py summary` and `ledger.py report`. Tell me tokens per tier, the most expensive screens and why (from their notes), and any waste on skipped screens.
