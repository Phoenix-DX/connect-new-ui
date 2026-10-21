> **Status (2026-10-16 night): auto-accept mode is ON again until the user changes it** (it was off for a few hours on
> 2026-10-16). Follow the auto-accept section below. Never spawn subagents or forks (the user allows 2 agents in total).
> Mock data must be meaningful (see Rules).

# Route agent brief (auto-accept mode, user instruction 2026-10-15 16:59 +07)

You are a **route agent** for ONE route of the UBTConnect OutSystems → React migration (project root
`/Users/khaitruong/Projects/connect-new`). The route is already started (`route.py start`). Your route name and owner are
in the message that sent you here.

## Read first (in this order, nothing else to start)
1. `.claude/skills/outsystems-screen-spec/references/route-agent.md` (procedure)
2. `migration/AGENTS.md`, including "Where the compiled code is": every source is local; check all those places before
   calling one missing.
3. your `pack.md` once the spec step creates it.

## Environment
- Capture exists in `migration/screens/<S>/` (unless your message says no-capture): do NOT recapture. No access to the
  real app, no MCP. Never open `.auth/` or `migration/.raw/`.
- Node 24 (`PATH=$HOME/.nvm/versions/node/v24.21.0/bin:$PATH`), npm in `app/`. Dev server http://localhost:5173 runs
  (do not start/stop it); it serves the original `/UBTConnect/img/*` and `/UBT_CW/img/*`. Parity:
  `python3 .claude/skills/outsystems-screen-spec/scripts/route.py parity <S> --app http://localhost:5173`. A capture-plan
  entry may set per-state `scenarios` / `latencies` (route.py passes them).
- References: Login (P-PARAMS, P-STATES, P-DIALOG), AcceptPendingPolicies (P-DATA, P-MOCKS, P-MUTATION, P-CALLS,
  P-BACK), HomeFeed (P-FLAGS, P-OSUI), `app/src/components/OSList` (P-LIST, every OutSystems List). Close examples:
  `app/src/screens/{Search,Notifications,MessageList,Updates_SingleList}/`.
- Shared blocks: all built through wave 4 (find by `@os-block` under `app/src/shared/`); blocks only your screen uses
  go in `app/src/screens/<S>/components/`.
- Facts: TST static-entity values `migration/knowledge/static-entities-tst.json`; runtime scripts
  `migration/runtime-sources/`; mocks `migration/knowledge/mock-fixtures.md` (person data fictional with captured
  lengths, neutral image placeholders; TST test labels that are not person data may be reused); recorded non-person
  fixtures `app/src/mocks/fixtures/`; typed exceptions `app/src/lib/os-exceptions.ts`; shell guide
  `app/docs/guides/shell.md` (a screen without CommonUI calls `useNoCommonUi()`).

## Auto-accept mode (user, 2026-10-15 16:59)
The user accepts every recommended option, but only the orchestrator may record answers `--by user` (a subagent cannot
speak for the user; the permission system blocks it). For each decision: record it with `route.py ask … --kind decision
--recommend <X>`, BUILD WITH <X> right away (as if accepted), note it in the spec, and list it in your report as
"Qn → X (pending orchestrator answer)". Do not run `route.py answer`. Facts you cannot settle from sources: record as
`--kind fact`, choose the most conservative reversible behaviour, and say so. Stop after parity (twice) with the spec
complete; the orchestrator answers the questions, re-runs spec-done, and runs ready.
Exemptions: you may add entries to `migration/parity-exemptions.json` only for capture or timing artifacts (cursor,
shimmer/animation phase, loading fetch timeout, focus border, masked text, data drift, app-start call order, broken
replayed images), each as narrow as possible (states, paths, props), reason ending with "auto-accepted in the user's
auto mode 2026-10-15". Never exempt a real difference of your code. Re-read the file before editing; another agent may
edit it too.

## Rules
- Mock data (user, 2026-10-16): fictional values must be meaningful (plausible names, places, texts), never "Sample 1 / Sample 2" placeholders; see `migration/knowledge/mock-fixtures.md` → "Fictional text must be meaningful".
- Write only `app/src/screens/<S>/**`, `migration/screens/<S>/**`, and exemption entries as above. Shell/shared change
  needed → `migration/change-requests/CR-<S>-<n>.md` and `<NotCaptured>` for that part; a missing static TST file →
  name it in the report.
- **Do not spawn subagents or forks.** Run Prettier only on the app's own files (inside `app/`).
- `npm --prefix app run ci` must pass twice in a row before `ready` (re-run once if another agent's in-progress file
  breaks it). Never invent behaviour; cite `path:line`; no CSS.

## Steps and report
spec → spec-done (if no question is open) → build → parity (twice). Run `route.py ready <S>` only when no question
is open and every gate passes (never answer the review question: the orchestrator confirms). Report (≤ 14 lines): status, review question id, parity per state, auto-accepted
decisions (id → choice), exemptions added, CRs, missing files, tool calls. Budget ≤ 110 tool calls.
