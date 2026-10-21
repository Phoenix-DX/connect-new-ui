# Changelog

## v3.8: default site UBTConnect TST, automatic sign-in and PIN unlock

- `scripts/site_auth.cjs` (new): site profile + local secrets → login page, "Login with UBT One", Azure AD B2C sign-in (one or two steps), PIN unlock (input boxes or keypad), clear errors (wrong password, still on the PIN page), refuses a secrets file tracked by git. Values are typed, never printed or stored in captures.
- `assets/site-profiles/ubtconnect-tst.json` = `default.json` (no secrets), `assets/credentials.example.json`.
- `batch_capture.cjs`: `login --auto`; `run` signs in when no session exists and recovers by itself when a page lands on the login, identity provider or PIN page (also before the loading/offline states, for per-tab PIN locks); `--base` defaults to the profile; `--no-auto`.
- `record_har.cjs`: same automatic sign-in; sign-in calls pass the read-only guard and their time windows go to `<har>.auth.json`. `har_to_fixtures.py convert` skips calls inside those windows (no PIN validation in fixtures).
- SKILL.md: "Default site and automatic sign-in", privacy rules; AGENTS rule 15.
- `batch_capture.cjs survey`: phase 0 without DevTools (saved session, automatic sign-in, survey.js injected, `capture/survey-<App>.json`).

## v3.7: parity you can trust for 1:1 (style, viewports, flags, behaviour, mocks)

1. **Raw reference and fingerprinted reports.** `analyze_capture.py` writes `dom/<state>.raw.html` (byte-exact; the pretty DOM shifted inline elements by ~4px and made identical pages fail), `states.json` and `calls.json`. New `route.py parity <S> --app <url>` runs every state with the right options and stamps a fingerprint (route code, shell/shared/lib/mocks/app, legacy CSS, index.html, exemptions, reference, state metadata, calls). The gates refuse stale reports, reports not made by `route.py parity`, and relaxed runs (`--no-text/--no-style/--no-pixel`).
2. **Stronger comparison** in `parity_check.cjs`: ~80 computed properties (was 23), `::before`/`::after`, x/y offsets in the parent, static text by default, `<html>`/`<body>` classes, a masked full-page pixel diff (page ratio + worst 40px tile, `parity/<state>.diff.png`), separate browser context for the reference, deterministic mocks (`latency=0`).
3. **Viewports.** Capture plan `defaults.viewports` → states `<state>@<viewport>`; the scaffold learns device and OS classes per viewport from the captures (`src/lib/device.ts`, `device-classes.json`); stack item `viewports`; context packs only name viewport states.
4. **OutSystems UI patterns.** `survey.js` keeps OutSystems UI; `survey_app.py` writes `survey/osui.md` (version, provider libraries, patterns per screen); `catalog.py` puts pattern blocks in the foundation queue (kind `osui`, Private blocks skipped); `stack.py` adds `osui:<Pattern>` items and pattern P-OSUI.
5. **Feature flags built and checked.** `flags.py decide --key --default --values --branches --reference`, `export` (→ `src/lib/flags.generated.json`), `variants` (capture-plan `flagVariants`: localStorage, other account, other environment or flag-service override). Scaffold: `src/lib/flags.ts` (`useFlag`, `?ff=Key:value`), flag panel `?ffpanel=1`. States `<state>+<Key>=<value>` with their own runtime capture; `ready` refuses a value built "both" without a captured state. Pattern P-FLAGS.
6. **Call parity.** `capture.js` records request start times and `mark()`s each plan step; `calls.json` gives every call a phase; the clone logs `callAction` in `window.__osCalls`; parity compares data actions per phase, server actions in order and their input names. Pattern P-CALLS.
7. **Mocks that behave.** `src/mocks/store.ts` (`collection`, `statefulHandler`) and `fixtureData()` for mutations that change lists (pattern P-MUTATION); `loading` scenario; `har_to_fixtures.py coverage` → `migration/fixture-coverage.md`; `ready` refuses a captured call without a mock handler. Read-only guard of `record_har.cjs` fixed: word boundary after the read verb, no write verb anywhere in the name, `Check/Validate/Is/Has` no longer reads by default.
8. **Inline styles as captured.** `consistency_check.py` accepts an inline visual style when every declaration appears in a captured `style` attribute of the route (OutSystems Styles Editor output), and reports computed inline visual styles.
- Docs: parity-and-verification rewritten; SKILL.md, route-agent, route-loop, AGENTS template (rules 17–21), feature-flags, recorded-mocks, architecture-and-stack, context-budget (costs) updated; "Coming from v3.6" in SKILL.md.

## v3.6: automatic recording for recorded mocks

- `scripts/record_har.cjs`: `--plan` replays the capture plan (routes, waitFor, click/fill/back steps) and `--crawl` follows in-app links from the logged-in session (breadth-first, `--depth`, `--per-pattern`, `--max-pages`, `--exclude`), so lists and their details are recorded with matching ids without manual browsing. Read-only guard on by default in automatic modes: only read-like screenservice actions pass (`--allow-actions` for confirmed reads, `--allow-writes` to disable); logout/delete-like links are never followed; a redirect to login stops the run. Writes `migration/recording-coverage.md` (names only): pages, actions per page pattern, blocked actions, build screens never reached. Manual mode unchanged.
- `scripts/har_to_fixtures.py`: aborted, failed and 5xx calls produce no fixture.
- `references/recorded-mocks.md` (section 2a) and SKILL.md updated.

## v3.5: mock data recorded from the real app (optional)

- `scripts/record_har.cjs` (new): the person browses the real app (test environment, test account, session from `batch_capture.cjs login`) while every screenservice call is recorded to a HAR in `migration/.raw/` (a folder that ignores itself in git).
- `scripts/har_to_fixtures.py` (new): `convert` turns HARs into anonymized fixtures `app/src/mocks/fixtures/<Module>/<Action>/*.json` (structure, list sizes, statuses, numbers and OutSystems empty values kept; personal text replaced with fake text of the same word lengths; ids remapped with one table across fixtures and inputs; emails, phones, long numbers, sensitive dates and images replaced; deterministic with a salt) plus `index.json` and `REVIEW.md`; `review --by user` (only the user) records a hash of the fixtures; `check` fails when fixtures are unreviewed or changed. `--append` adds recordings with the same salt.
- `assets/mocks-fixtures.ts` (new, written by the scaffold to `src/mocks/fixtures.ts`): `recordedHandler(module, action)` serves the recording whose inputs match, with `real` / `empty` / `error` scenarios and a console warning for unrecorded inputs. `assets/mock-rules.example.json` (new).
- `scripts/stack.py`: `mocking` offers fictional data or recorded fixtures; P-MOCKS covers `recordedHandler`; `scaffold_ok` accepts choices that refine what the scaffold implements.
- `scripts/consistency_check.py`: fails routes that use `recordedHandler` with missing, unreviewed or changed fixtures. `scripts/scaffold_react_app.py`: writes the fixtures helper; `.gitignore` ignores `*.har`.
- New `references/recorded-mocks.md`; SKILL.md (phase 2, phase 4, privacy rules), AGENTS template rules 10 and 15, route-agent and architecture reference updated.
- Upgrade: existing projects keep fictional mocks. To switch, confirm the new `mocking` option with the user under an ADR, copy `assets/mocks-fixtures.ts` to `app/src/mocks/fixtures.ts` (foundation owner), and update `migration/patterns/P-MOCKS.md` (seeded patterns are written only at init).

## v3.4: route agents read less; a recorded spec survives resets

- `scripts/route.py`: new `spec-done <S>` records the route spec with the hashes of its inputs (analysis, canonical context pack, flag decisions; catalog and stack.json when the pack cannot be generated) and the answers it covers, in `spec.complete.json`. `reset` and `start` keep `route-spec.md` and `pack.md` while that record is valid, and `start` then sends the route straight to `building`, listing answers recorded after spec-done. `--from-scratch` (now also on `reset`) discards the spec. `ready` requires a current spec-done record. The checkpoint includes `spec.complete.json`. `plan` and `fail` say when a spec is likely kept.
- New `references/route-agent.md`: the only reference a route agent reads (~1.5k tokens instead of SKILL.md + route-loop.md, ~12k), including a narrow reading rule for feedback rounds.
- SKILL.md points route agents to it; AGENTS template, route-loop, end-to-end prompts (build and fix-feedback subagents) and context-budget updated.
- Upgrade: routes already in progress have no `spec.complete.json`; run `route.py spec-done <S>` once on each before its next `ready`.

## v3.3: the user's test decides when a route is finished; feature flags detected and decided

- `scripts/route.py`: `ready` (build gates, checkpoint, status `review`, review message with decisions, flags, fixed items, how to test), `feedback --by user` (bug/todo/question, status `fixing`), `fixed`, `restore`; `finish` only from `review` after the user's `confirm` with no feedback left. Routes in `review` are never reset; routes interrupted while `fixing` are restored to their last review checkpoint; `start --from-scratch` discards. `plan` lists routes waiting for the user's test and routes being fixed, and warns about feature flags. Build gates include flags: each flag of the route needs an MCP answer and a user decision, and the spec a "Feature flags" section.
- `scripts/flags.py` (new): detects flags in compiled code (flag-like static entity records, client variables, flag-check actions and the keys passed to them), maps them to routes and variant groups, generates MCP questions, records MCP answers (`mcp`) and user decisions (`decide --by user`), writes `migration/flags.md`.
- `scripts/board.py`: statuses `review` and `fixing`. `scripts/context_pack.py`: route flags section.
- New `references/feature-flags.md`; `context-budget.md` adds expected cost per route; templates have a Feature flags section; SKILL.md, route-loop, AGENTS and end-to-end describe the test-and-confirm loop.

## v3.2: architecture and tech stack confirmed by the user, patterns with reference implementations, consistency checks

- `scripts/stack.py` (new): `migration/stack.json` + generated `architecture.md`. Proposals with options and reasons for every stack item, one item per third-party OutSystems module found in the survey, pinned dependency allow-list, consistency rules, ADR log, seeded patterns (`migration/patterns/P-*.md`). Only the user confirms items, ADRs and patterns; packages change only through accepted ADRs; `pattern reference` points a pattern at finished, confirmed route code and fingerprints it; `check` reports drift; `digest` feeds context packs.
- `scripts/consistency_check.py` (new): required files, allowed packages and import roots, forbidden patterns with ids, package.json vs allow-list, accepted patterns in "Patterns used".
- `scripts/route.py`: `start` and `finish` require a confirmed stack; `finish` runs the consistency check; route specs need a "Patterns used" section.
- `scripts/scaffold_react_app.py`: `--stack` required; refuses an unconfirmed stack or one the scaffold does not implement; package.json from the allow-list.
- `scripts/context_pack.py`: every pack starts with the same stack, conventions and patterns digest.
- New `references/architecture-and-stack.md`, `assets/pattern-template.md`; SKILL.md phase 4 (architecture and stack) and renumbered phases; templates, AGENTS, route-loop and end-to-end updated.

## v3.1: resumable route loop, never-guess protocol, app-neutral skill

- `scripts/route.py` (new): lifecycle per route. `plan` (finished routes skipped, interrupted/failed ones reset, open questions first), `start` (refuses finished routes; resets partial work before restarting), `step`, `fail`, `reset` (deletes the route's code, pack, spec, parity reports, run state and open change requests; recapture only when needed; keeps answers), `ask` / `answer` (facts may be answered by the OutSystems MCP, decisions and reviews only by the user), `questions`, `review` (post-build confirmation built from "Decisions to confirm"), `finish` (gates: code, complete spec, no open question, confirmed review, parity per state, scope guard; fingerprints the route's files), `status`.
- `scripts/batch_capture.cjs`: writes `capture/.complete` only when every step and the analysis succeeded, so a restarted route reuses a complete capture and redoes an incomplete one.
- `scripts/board.py`: statuses `waiting` and `failed`.
- New `references/route-loop.md`: the run, one route step by step, what counts as known, the question protocol (MCP first for facts, user for decisions), resets, finish gates, single agent vs subagents.
- Every route has a `route-spec.md` with Summary, Unclear points and Decisions to confirm: new `assets/route-spec-template.md` (lite), `assets/spec-template.md` sections 14 (Unclear points) and 16 (Decisions to confirm). Change requests are named `CR-<Screen>-<n>` and carry a status.
- The skill no longer refers to any screen or route of a particular app: the worked examples were replaced by a neutral diagram pattern (`assets/example-diagrams.md`, Mermaid validated) and a placeholder prototype skeleton (`assets/prototype-app-skeleton.js`); all usage lines use placeholders.
- `SKILL.md`, `AGENTS-template.md`, `end-to-end.md`: route loop, never-guess rule, review and finish.

## v3: scope gate, batch capture, foundation freeze, context packs, parity gate

- `scripts/board.py`: lean status board, triage suggestions with evidence, per-route notes, import of an existing routes.md.
- `scripts/batch_capture.cjs`: Playwright capture outside the conversation (login by the person, plan, automatic loading/offline states, optional analysis).
- `scripts/catalog.py`: cross-route block and action catalog, `@os-block` tags, foundation queue, lite/full/wait tiers.
- `scripts/context_pack.py`: one budgeted context file per route.
- `scripts/parity_check.cjs`: structure / class / attribute / style / size diff with named exemptions and `--steps`.
- `scripts/scope_guard.py`, `scripts/ledger.py`.
- References: scope gate, foundation and freeze, context budget, parity and verification; end-to-end rewritten.

## v2: call sites, diagrams, security inventory, survey mode and scaffold

- `analyze_capture.py`: `call-sites.md` (chains from UI events and lifecycle to each service call), `diagrams.md` (Mermaid drafts of architecture and sequences), `security.md` (names-only inventory).
- `capture.js`: header, cookie and storage names by category, document security headers, third-party hosts.
- Survey mode (`survey.js`, `survey_app.py`), React scaffold (`scaffold_react_app.py`), `AGENTS-template.md`, `app-shell-spec-template.md`.
