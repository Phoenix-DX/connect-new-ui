# connect-new: UBTConnect (OutSystems 11) to React

This repository rebuilds the UBTConnect mobile app (OutSystems 11, TST environment) in React, screen by screen. The
project reads TST only and never writes data to it.

Status on 2026-11-06:

- TST has 84 routes: 68 `build` routes and 16 `skip` routes (the reasons are on the board). All 68 build routes are
  migrated and confirmed by the user; the 16 skip routes show the `NotMigrated` placeholder.
- The React app is a progressive web app (PWA) with mock data. It does not call a real server.
- The architecture refactor (`app/docs/architecture/refactor-plan-v2.md`) is done.
- The route check (`migration/route-check/`, OutSystems against React, facts only) covers 68 of 68 routes.
- Every compiled TST file lives in one store, `migration/sources/` (since 2026-11-06).

Three project skills drive the work in Claude Code (`.claude/skills/`):

| Skill | For |
|---|---|
| `outsystems-screen-spec` | The route pipeline: survey, scope, capture, spec, build, parity, user confirm. |
| `refactor-master` | The architecture refactor, step by step, with the agents `refactor-developer`, `refactor-tester`, `refactor-documenter`. |
| `route-check` | The check of one route at a time: `/route-check status | continue | run <Route> | done <Route> | app-shell`. |

## Start here

| File | For |
|---|---|
| `REVIEW-GUIDE.md` | A reviewer: what the project is, where the files are, what to read first. |
| `RUNBOOK.md` | A person who runs the migration with the Claude Code CLI, step by step. |
| `CLAUDE.md` | The rules for the agent (hard rules, how to work with the user). |
| `app/README.md`, `app/docs/README.md` | The React app: run it, its folders, the architecture and the guides. |
| `tools/README.md` | Every script of the project, by purpose, with the sources store and the parity tools. |
| `migration/contexts/INDEX.md` | Where the work is now and the history of the sessions (one context note per phase). |
| `migration/route-check/README.md` | The route check: commands, status, the reports per route and the app shell. |
| `migration/flows-dashboard/README.md` | The UI Flows dashboard for the manager: build and publish. |
| `migration/journeys/README.md` | The main user journeys: the source for future end-to-end tests. |

## Folders

The root holds four folders: `app/`, `tools/`, `migration/`, `.claude/` (and `.auth/`, not in git).

| Folder | Content |
|---|---|
| `app/` | The React app (PWA with mock data). Folders of `app/src/`: `app`, `pages`, `containers`, `components`, `api`, `platform`, `lib`, `legacy/os`, `mocks`, `styles`, `vendor`, `pwa`, `sw`, `test`. Docs in `app/docs/`. |
| `tools/` | Every reusable script, by purpose: `pipeline`, `parity`, `generate`, `docs`, `tst`, `refactor`, `route-check`, `clarify`, `common`. Index: `tools/README.md`. |
| `migration/` | The work of the migration: `board.md` (one row per route), `survey/` (the survey files of the compiled code), `screens/` (capture, spec, parity report of each route), `catalog/`, `patterns/`, `flags.md`, `stack.json`, `knowledge/` (facts about the app), `contexts/` (session notes), `route-check/` (the route reports), `clarify/` (the gap program and its decisions), `refactor/` (state and guide of the refactor), `journeys/`, `flows-dashboard/`, `style/` (the writing rules), `pwa/`. |
| `migration/sources/` | The only place of the compiled TST code: `raw`, `pretty`, `styles` (the captures, a manifest per route), `survey` (copies of the live survey), `runtime` (runtime, module and plugin files), `contract` (producer models), `shell` (the app shell controllers). |
| `.claude/` | The three skills (text and references only; the scripts are in `tools/`), the three refactor agents, the settings. |
| `.auth/` | Secrets (credentials, test accounts, saved sessions). Not in git. Only `site_auth.cjs` reads it. |

## Tools

Run every tool from the project root. Node and Playwright (Chromium) come from the project root (`npm install`,
`npx playwright install chromium`); the Python packages from `requirements.txt`. The tools that open TST keep the
read-only guard on. The guard aborts each service call that is not a read. Only the actions that the user confirmed in
`migration/capture-plan.json` (`defaults.allowActions`) also pass.

### 1. Route pipeline (`tools/pipeline/`, `$SK` in `CLAUDE.md`)

| Tool | What it does | Opens TST |
|---|---|---|
| `batch_capture.cjs` | Captures each screen: masked DOM, loading and offline states, flag variants. Also the survey and the automatic sign-in. | Yes, read-only |
| `analyze_capture.py` | Turns the capture files of a screen into its analysis folder and writes the compiled files into the store `migration/sources/`. | No |
| `record_har.cjs`, then `har_to_fixtures.py` | Records the real service calls, then turns them into anonymized mock data. | Yes, read-only |
| `survey_app.py`, `board.py`, `catalog.py`, `flags.py`, `stack.py` | Survey, scope board, block catalog, feature flags, stack. | No |
| `route.py` (plan, start, parity, finish, ask, answer, reset), `context_pack.py`, `parity_check.cjs`, `consistency_check.py`, `scope_guard.py` | The work loop of each route and its parity gate. | No |
| `site_auth.cjs`, `readonly_guard.cjs`, `capture.js`, `origin_normalize.cjs` | Shared modules: sign-in and PIN, the read-only guard, the masked DOM snapshot, the origin normalizer of the self-parity comparison. The other tools use them. | (modules) |
| `ledger.py` | Records the tokens of each route and phase. | No |

### 2. Project tools (details in `tools/README.md`)

| Tool | What it does | Opens TST |
|---|---|---|
| `tools/tst/journey_capture.cjs` | Runs the main user journeys step by step. Records the element used, the service calls and a masked screenshot of each step. | Yes, read-only |
| `tools/tst/route_discovery.cjs` | Clicks an element and records the screen that the app opens. | Yes, read-only |
| `tools/tst/flag_probe.cjs` | Reads the feature flag values of TST. | Yes, read-only |
| `tools/parity/parity_sweep.py`, `restamp.py`, `qa_dev_demo.cjs` | Parity of all 68 finished routes; re-stamp after a confirmed change; comparison of the dev server and the demo build. | No (React app) |
| `tools/parity/refactor_parity.py`, `tools/refactor/rf.py`, `arch_baseline.py` | The architecture refactor: parity gate (strict and visual, self-parity reference), state machine, lint baseline (`npm run ci`). | No |
| `tools/route-check/check_route.py` (+ `os_static.py`, `os_extras.py`, `os_call_graph.py`, `render_v2.py`, `mcp_client.py`, `react_calls.mjs`, …) | The check of one route, OutSystems against React, into `migration/route-check/routes/<Route>.md` and `APP_SHELL.md`. Needs the Service Studio MCP token for the MCP part. | No |
| `tools/generate/sitemap.py`, `contract_gen.py`, `docs_gen.py`, `block_pack.py`, `css_sets.py`, `static_entities.py`, `review_page.py` | Navigation diagram, API contract, reference pages, block packs, CSS sets, static entities, the review page. | No |
| `tools/clarify/*.py` | The clarify program (`migration/clarify/`): TST source reads, flow packs, reports, decisions, the two artifacts. | No |
| `tools/common/sources_store.py` | `check`, `gc`, `migrate` of the compiled sources store `migration/sources/`. | No |
| `tools/docs/ste_lint.py`, `check_mermaid.cjs` | Tools for the English documents in ASD-STE100 style and the Mermaid diagrams. | No |

### 3. Dashboard

`python3 migration/flows-dashboard/build_dashboard.py` builds the UI Flows dashboard into
`migration/flows-dashboard/site/`. Add `--sheets` to make contact sheets for the privacy check of the screenshots.

### 4. React app (`npm --prefix app run <script>`)

| Script | What it does |
|---|---|
| `dev` | Dev server, http://localhost:5173/UBTConnect/HomeFeed |
| `build`, `build:demo`, `preview` | Production build; installable static demo with mock data (`dist-demo/` + `dist-demo.zip`); preview of a build |
| `ci` | Contract types, typecheck, lint, architecture lint, duplicates, unused code, flags, format, unit tests, build |
| `typecheck`, `lint`, `lint:arch`, `dup`, `unused`, `flags`, `format`, `format:check` | The single checks of `ci` |
| `test`, `test:watch`, `e2e:pwa`, `lighthouse` | Unit tests (vitest), PWA end-to-end test, Lighthouse |
| `gen:api`, `graph`, `arch`, `arch:baselines`, `flow-fetch` | Contract types from `openapi.yaml`, dependency graph (`docs/refactor/graph.json`), architecture lint and baselines, the `flow.fetch` gate of the flow hooks |
| `storybook`, `build-storybook` | Catalog of the shared blocks, http://localhost:6006 |

### Outside the repository

- Playwright and Chromium: browser automation for capture, parity and journeys.
- OutSystems MCP (Service Studio): connected to DEV, for reference only. TST is the source of truth. The route check
  needs its session token (`MCP_TOKEN`, never written to a file).
- Artifacts on claude.ai: the published dashboard (URLs in `migration/flows-dashboard/README.md`) and the two clarify
  artifacts (`migration/clarify/`).

## Sign-in and sessions of the tools that open TST

- `site_auth.cjs` signs in by itself with the site profile and the secrets file. Only that module reads the secrets.
  `.auth/accounts.json` holds several test accounts by role (each role a list of users; one or more shared passwords
  and PINs, tried in order). The
  tools take the accounts in the file's order (`--role a,b` limits the roles). When a sign-in fails, or a screen is
  out of reach for the signed-in account, they move to the next account. Logs name the account as `<role>#<n>`, never the user.
- `batch_capture.cjs login --auto --account <label>` signs in with one account of the list and saves its session
  (`--storage .auth/state-<label>.json`); `route_discovery.cjs --storage <file>` runs with that session.
- `batch_capture.cjs`, `flag_probe.cjs` and `route_discovery.cjs` load the saved session (`.auth/state.json`)
  themselves. A new tab of a saved session starts locked, so the tool enters the PIN.
- `journey_capture.cjs` starts a new browser and signs in once at the start of each run. All journeys of the run
  share that unlocked tab. Two journeys are different on purpose: J1 opens a new tab to see the PIN unlock, and J2
  opens a new browser to see the first sign-in and the PIN register.

## Rules

- Never write a password, PIN or account email into a file, a commit or a chat.
- Never `git push` (or any other write to a remote) without the owner's explicit permission in the current
  conversation. Local commits are allowed when the work is done and checked. Commit messages are in English.
- Documents in this repository are in English and follow `migration/style/style-rules.md`.
