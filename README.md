# connect-new: UBTConnect (OutSystems 11) to React

This repository rebuilds the UBTConnect mobile app (OutSystems 11, TST environment) in React, screen by screen. The
project reads TST only and never writes data to it. The project skill `outsystems-screen-spec`
(`.claude/skills/outsystems-screen-spec/`) drives the work.

## Start here

| File | For |
|---|---|
| `REVIEW-GUIDE.md` | A reviewer: what the project is, where the files are, what to read first. |
| `RUNBOOK.md` | A person who runs the migration with the Claude Code CLI, step by step. |
| `CLAUDE.md` | The rules for the agent (hard rules, how to work with the user). |
| `migration/flows-dashboard/README.md` | The UI Flows dashboard for the manager: build and publish. |
| `migration/journeys/README.md` | The main user journeys: the source for future end-to-end tests. |

## Folders

| Folder | Content |
|---|---|
| `app/` | The React app (progressive web app with mock data). |
| `migration/` | Board, survey, specifications, captures, parity reports, knowledge, journeys, dashboard, tools. |
| `capture/` | The static survey of the compiled TST code. |
| `.claude/skills/outsystems-screen-spec/` | The project skill: method, references and pipeline scripts. |
| `.auth/` | Secrets (credentials, saved session). Not in git. Only the skill's scripts read it. |

## Tools

Run every tool from the project root. Node and Playwright (Chromium) come from the project root (`npm install`,
`npx playwright install chromium`). The tools that open TST keep the read-only guard on. The guard aborts each service
call that is not a read. Only the actions that the user confirmed in `migration/capture-plan.json`
(`defaults.allowActions`) also pass.

### 1. Skill pipeline (`.claude/skills/outsystems-screen-spec/scripts/`)

| Tool | What it does | Opens TST |
|---|---|---|
| `batch_capture.cjs` | Captures each screen: masked DOM, loading and offline states, flag variants. Also the survey and the automatic sign-in. | Yes, read-only |
| `record_har.cjs`, then `har_to_fixtures.py` | Records the real service calls, then turns them into anonymized mock data. | Yes, read-only |
| `survey_app.py`, `board.py`, `catalog.py`, `flags.py`, `stack.py` | Survey, scope board, block catalog, feature flags, stack. | No |
| `route.py` (start, parity, finish, plan, ask, answer), `context_pack.py`, `parity_check.cjs`, `consistency_check.py`, `scope_guard.py` | The work loop of each route and its parity gate. | No |
| `site_auth.cjs`, `readonly_guard.cjs`, `capture.js` | Shared modules: sign-in and PIN, the read-only guard, the masked DOM snapshot. The other tools use them. | (modules) |
| `ledger.py` | Records the tokens of each route and phase. | No |

### 2. Project tools (`migration/tools/`, details in `migration/tools/README.md`)

| Tool | What it does | Opens TST |
|---|---|---|
| `journey_capture.cjs` | Runs the main user journeys step by step. Records the element used, the service calls and a masked screenshot of each step. | Yes, read-only |
| `route_discovery.cjs` | Clicks an element and records the screen that the app opens. | Yes, read-only |
| `flag_probe.cjs` | Reads the feature flag values of TST. | Yes, read-only |
| `unlock_target.cjs`, `shell_observe.cjs`, `css_observe.cjs` | Observe redirects (lock, unlock, new tab) and styles. | Yes, read-only |
| `parity_sweep.py`, `restamp.py`, `qa_dev_demo.cjs` | Parity of all 64 routes; comparison of the dev server and the demo build. | No (React app) |
| `sitemap.py`, `contract_gen.py`, `docs_gen.py`, `block_pack.py`, `css_*`, `static_entities.py` | Navigation diagram, API contract, reference pages. | No |
| `english_docs.py`, `ste_lint.py`, `meaning_guard.py`, `check_mermaid.cjs` | Tools for the English documents in ASD-STE100 style. | No |

### 3. Dashboard

`python3 migration/flows-dashboard/build_dashboard.py` builds the UI Flows dashboard into
`migration/flows-dashboard/site/`. Add `--sheets` to make contact sheets for the privacy check of the screenshots.

### 4. React app (`npm --prefix app run <script>`)

`dev`, `build`, `build:demo`, `ci` (types, lint, format, unit tests, build), `test`, `e2e:pwa`, `lighthouse`,
`storybook`.

### Outside the repository

- Playwright and Chromium: browser automation for capture, parity and journeys.
- OutSystems MCP (Service Studio): connected to DEV, for reference only. TST is the source of truth.
- Artifacts on claude.ai: the published dashboard (URLs in `migration/flows-dashboard/README.md`).

## Sign-in and sessions of the tools that open TST

- `site_auth.cjs` signs in by itself with the site profile and the secrets file. Only that module reads the secrets.
- `batch_capture.cjs`, `flag_probe.cjs` and `route_discovery.cjs` load the saved session (`.auth/state.json`)
  themselves. A new tab of a saved session starts locked, so the tool enters the PIN.
- `journey_capture.cjs` starts a new browser and signs in once at the start of each run. All journeys of the run
  share that unlocked tab. Two journeys are different on purpose: J1 opens a new tab to see the PIN unlock, and J2
  opens a new browser to see the first sign-in and the PIN register.

## Rules

- Never write a password, PIN or account email into a file, a commit or a chat.
- No `git push`. Commit only when the owner asks. Commit messages are in English.
- Documents in this repository are in English and follow `migration/english-docs/style-rules.md`.
