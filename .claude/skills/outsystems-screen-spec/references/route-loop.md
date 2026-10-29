# Route loop: run, resume, ask, finish

How a run goes through the route list, how it survives interruptions, and how unclear points become questions instead of guesses.

## Contents
1. The run
2. One route, step by step
3. Never guess: what is known, what must be asked
4. Asking the OutSystems MCP
5. Asking the user
6. Interruptions, failures and resets
7. Your test, feedback rounds and finishing
8. Single agent vs orchestrator with subagents

## 1. The run

1. `python3 scripts/route.py plan` and show the result to the user: routes skipped because they are finished, routes that will be reset and rebuilt (interrupted or failed), routes with open questions, routes waiting for the foundation, routes that still need a scope decision.
2. Ask the user the open questions first (all routes, one batch), record the answers. Routes still lacking a scope decision go back to the scope gate; they are not built.
3. Take the routes in board order (wave, then name) and run section 2 for each one. Finished routes are never touched; `route.py start` refuses them.
4. At the end: `board.py summary`, `route.py questions --open`, `ledger.py report`.

The route list comes only from the board (`board.md`, built from the survey). The skill itself knows no route of any app; never assume a screen exists, is in scope or behaves like a screen of another app.

## 2. One route, step by step

| Step | Command | Work | Leaves the route |
|---|---|---|---|
| start | `route.py start <S> --owner <you>` | resets partial work if any (section 6), keeps earlier answers | status `capture` or `spec` |
| capture | `route.py step <S> capture` | `batch_capture.cjs run --only <S> --analyze` (or screen mode) | `capture/.complete`, `analysis/` |
| spec | `route.py step <S> spec` | `context_pack.py` (includes the stack digest, the patterns and the route's feature flags); `flags.py questions --route <S>` → MCP, then the user; write `route-spec.md` with the patterns and flags (lite: `assets/route-spec-template.md`, full: `assets/spec-template.md`); list every unclear point; resolve facts with the MCP; ask the user the decisions; then `route.py spec-done <S>` | spec with Unclear points, all blocking questions answered, `spec.complete.json` |
| build | `route.py step <S> build` | code in `app/src/pages/<S>/` (and `app/src/api/<domain>/` where the page template puts code) following `AGENTS.md`; any new unclear point → same protocol, stop that part until answered | typecheck and build pass |
| parity | `route.py step <S> parity`, `route.py parity <S> --app <url>` | every captured state (viewports, flag variants, steps, loading/offline): DOM, styles, pseudo-elements, positions, text, pixels, calls per phase; differences fixed in markup or route logic, or turned into a question / change request | one fingerprinted report per state |
| ready | `route.py ready <S>` | build gates pass; checkpoint saved; review message to the user | status `review`: the user tests |
| feedback | `route.py feedback <S> … --by user`, `route.py fixed <S> F<n>`, `ready` again | each thing the user found is fixed or answered, then a new round | status `fixing` ⇄ `review` |
| finish | `route.py finish <S>` | only after the user answered the latest review `confirm` (section 7) | status `built` (finished), `finished.json` |

Ask questions as early as possible: the spec step exists to surface unclear points before code is written, so answers shape the first build instead of forcing a rebuild.

## 3. Never guess: what is known, what must be asked

Something is **known** only when one of these shows it, and the spec cites which:
- the capture (DOM of a captured state, a captured call and its shape),
- the compiled code (an expression, a handler, a default value, a navigation call),
- `migration/knowledge/actions/` or an MCP answer recorded in `questions.json`,
- an answer of the user recorded in `questions.json`, or a decision on the board,
- a rule of `AGENTS.md` or an exemption in `parity-exemptions.json`.

Everything else is **unclear** and becomes a question. Typical cases:

| Unclear point | Kind | First ask |
|---|---|---|
| What a data action / aggregate / server action does, filters, sorts, writes | fact | OutSystems MCP |
| Meaning of a field, an enum value, a static entity record, an "empty" wire value | fact | OutSystems MCP |
| A condition or name unreadable in compiled code | fact | OutSystems MCP |
| Whether a server action checks ownership or role | fact | OutSystems MCP |
| A feature flag the route reads (what it switches, values per environment) | fact | OutSystems MCP (`flags.py mcp`) |
| Which branch(es) of a flag to build, and the mock default | decision | user (`flags.py decide`) |
| Which variant / flag value production uses | fact (if the MCP or config shows it) else decision | MCP, then user |
| A branch never observed (empty, error, other account type): how to render and mock it | decision | user |
| A state that cannot be captured: build from code, or render NotCaptured | decision | user |
| A parity difference that cannot be fixed in the route's markup | decision (accept, exemption, or change request) | user |
| Anything to change in shell/shared (change request priority, interim workaround) | decision | user |
| Anything the confirmed stack or the accepted patterns do not cover (a new package, a new way of doing a recurring thing) | decision → ADR or new pattern | user |
| Replacing a native/plugin feature on the web | decision | user |
| Security handling (tokens, identifiers in URL or storage, client-side permission checks) | decision | user |
| A divergence from the original behaviour for any reason (timing, transitions, browser limits) | decision | user |
| Contradictory evidence (code says one thing, capture another) | fact, then decision | MCP, then user |

A recommendation is welcome (`--recommend`), with its reason, but it is not an answer. Do not build on a recommendation that the user has not confirmed. Parts that do not depend on the question can go on.

## 4. Asking the OutSystems MCP

1. Look in `migration/knowledge/actions/<Action>.md` and in the route's `questions.json` first.
2. Use read-only tools only, in the module that owns the element (the MCP sees one module at a time). Never call tools that create, modify, publish or delete.
3. Record the question and what the MCP said, then answer it only if the MCP answer is unambiguous:
   ```bash
   python3 scripts/route.py ask <S> --kind fact --topic "<area>" --question "<what>" --evidence "<file/expression>" --mcp "<what the MCP said> [OutSystems MCP: Module/Element]"
   python3 scripts/route.py answer <S> Q<n> --by mcp --answer "<fact>"
   ```
   Save reusable answers about an action to `migration/knowledge/actions/<Action>.md` too.
4. If the MCP is unavailable, its answer is partial, or it leaves a choice open: keep the question open and ask the user, with what the MCP said as evidence. A fact the MCP cannot settle is asked as a decision.

## 5. Asking the user

Record first, then ask, then record the answer:
```bash
python3 scripts/route.py ask <S> --kind decision --topic "<area>" --question "<one decision>" \
     --evidence "<what was observed, files>" --mcp "<what the MCP said, or 'not asked: no server side'>" \
     --options "<A>|<B>|<C>" --recommend "<A>" --blocking
python3 scripts/route.py answer <S> Q<n> --by user --answer "<the user's answer, verbatim or faithfully summarised>"
```
How to ask: one decision per question; say what is known and how (evidence), what the MCP said, the options with their consequence, and the recommendation with its reason. Group the questions of one route (or of several routes) in one message; use the client's question tool when it has one. `decision` and `review` questions can only be answered with `--by user`; route.py refuses anything else.

## 6. Interruptions, failures and resets

- A route in `review` waits for the user's test and is never reset by a run; `route.py start` refuses it.
- A route interrupted while `fixing` (or failed after its first review) is restored to its last review checkpoint by `route.py start`: code, spec and parity as the user last saw them; feedback items that were marked fixed go back to open. `--from-scratch` discards everything instead.
- Any other route that is not finished when a run starts is rebuilt from the beginning: `route.py start` resets it first. This covers routes left in `capture`, `spec`, `building` or `waiting` by a session that ended, and routes marked `failed` before their first review.
- Mark failures explicitly when you see them (network, tool crash, gate that cannot pass): `route.py fail <S> --reason "<why>"`.
- Reset deletes the route's code (`app/src/pages/<S>/`), its parity reports and run state, and the open change requests it raised. It also deletes the pack and spec, unless the spec was recorded with `route.py spec-done` and is still valid: same `route-spec.md`, same analysis, same canonical context pack (which covers the catalog, stack digest, cached MCP answers and flags), same flag decisions. A kept spec sends the route straight to build; answers recorded after spec-done are listed so the agent updates only those parts. `--from-scratch` always deletes the spec; with `--recapture`, or when `capture/.complete` is missing, also the capture and analysis. It keeps `questions.json` (answers are not asked again), `feedback.json`, `notes.md` (with a reset line), the knowledge cache, and everything outside the route.
- A capture is reused only when `batch_capture.cjs` wrote `capture/.complete` (all steps succeeded and the analysis ran). Use `--recapture` when the original app changed.
- Routes finish one by one; a finished route stays finished across runs. `route.py plan` flags finished routes whose files changed afterwards ("finished but modified since"); look at them with the user rather than rebuilding them silently.

## 7. Your test, feedback rounds and finishing

**Ready for your test.** `route.py ready <S>` first runs the build gates:
- the architecture and stack are confirmed by the user (`stack.json`),
- the decision is `build` and `app/src/pages/<S>/<S>Page.tsx` exists,
- `consistency_check.py` passes (allowed packages and imports, forbidden patterns, package.json, accepted patterns),
- `route-spec.md` has the sections Summary, Patterns used, Unclear points and Decisions to confirm (and Feature flags when the route has flags), no template placeholder and no TODO in its diagrams,
- no question is open, every feature flag of the route has an MCP answer and a user decision,
- every captured state has a parity report made by `route.py parity`, current (fingerprint of code, CSS, mocks, exemptions and reference), full (no relaxed options, call parity when `calls.json` exists) and with zero unexempted differences (states in `ignoreStates` are checked by the user),
- every call of the capture has a mock handler, and every flag value decided "both" with `--reference capture` has a captured state,
- `scope_guard.py` passes when the project is a git repository.
Then it saves a checkpoint, sets the route to `review`, and creates the review question. Present it to the user: where to open the route, the mock scenarios, the decisions to confirm, the feature flags and their decisions, and the feedback items fixed since the last round.

**Feedback rounds.** The user tests. Anything they report (a bug, something to do, a question) is recorded as it was said: `route.py feedback <S> --kind bug|todo|question --text "…" --by user`. The route goes to `fixing`. Fix or answer each item (asking the MCP or the user again if something is unclear), mark it `route.py fixed <S> F<n> --note "what changed / the answer"`, then `route.py ready <S>` for the next round; the review lists the fixed items for the user to re-check. Repeat until the user is satisfied.

**Finish.** `route.py finish <S>` succeeds only when the route is in `review`, the user answered the latest review `confirm` (after every other answer), no feedback is open or unreviewed, and the build gates still pass. It closes the feedback, fingerprints the route's files in `finished.json` and sets `built`; later runs skip the route. A person may later set `verified` with `board.py set`.

After a finish, check whether the route is the first to implement an accepted pattern that has no reference yet; if so, ask the user whether it becomes the reference (`stack.py pattern reference`). See `architecture-and-stack.md`.

## 8. Single agent vs orchestrator with subagents

- **Single agent** (one Claude Code or chat session): run section 2 route by route; ask the user directly at each question; record answers immediately.
- **Orchestrator + subagents**: subagents cannot talk to the user. A subagent records its questions (`route.py ask`), finishes what does not depend on them, leaves the route in its current step, and returns the list of open question ids. Only the orchestrator talks to the user: it presents review messages, records feedback, and dispatches fix rounds (`route.py start` restores the checkpoint of a route in `fixing`). The orchestrator asks the user (batched across routes), records the answers, then starts the route again (`route.py start`, which rebuilds the code with the answers kept, and keeps the spec if the subagent recorded it with `spec-done`). To avoid paying a rebuild for every question, run the spec step of many routes first, collect all their questions, ask them in one batch, and only then dispatch builds.
