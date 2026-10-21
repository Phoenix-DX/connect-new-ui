# connect-new: UBTConnect (OutSystems 11) → React

Migrate the OutSystems app **UBTConnect TST** (`https://ubtm-tst.ubtconnectglobal.com/UBTConnect/`) to a React app
(`app/`) with mock data, screen by screen, matching the original 1:1. Everything follows the project skill
**outsystems-screen-spec** (`.claude/skills/outsystems-screen-spec/`). Use it for any migration work.

## Paths

- `SK=.claude/skills/outsystems-screen-spec/scripts`: every command below is `python3 $SK/<x>.py` or `node $SK/<x>.cjs`,
  always run from the project root (scripts default to `migration/`, `app/`, `.auth/`, `capture/` relative to it).
- `capture/survey-UBTConnect.json`: static survey (compiled code only).
- `migration/`: board, survey, catalog, stack, patterns, flags, per-route captures/specs/questions/parity.
- `app/`: the React app (created by the scaffold in the foundation phase).
- `.auth/`: credentials and session. **SECRET.**

## Hard rules

1. **Never open, read, print, copy or quote anything in `.auth/` or `migration/.raw/`**, and never write a password, PIN or
   account email into chat, code, notes, specs, the board or commits. Sign-in is done only by the skill's scripts
   (`site_auth.cjs` reads `.auth/credentials.json` itself). If a script says the secrets are missing, ask me to create the file.
2. Never guess: facts → OutSystems MCP (if configured), otherwise a question to me; decisions → me
   (`route.py ask … --kind decision`). Never answer a decision yourself, never confirm stack items, patterns, flags,
   scope or reviews on my behalf (`--by user` only after I said so in this conversation).
3. Scope first: no capture or spec of a screen before `decision=build` on the board.
4. Routes start only with `route.py start`, finish only with `route.py finish` after I answered the review `confirm`.
5. Parity reports count only when made by `route.py parity` after the last code change.
6. Read-only on the real app: automatic recording and capture keep the read-only guard on; never use `--allow-writes`.
   Only exception: the calls in `migration/capture-plan.json` → `defaults.allowActions`, each confirmed by me (app start
   sync calls that run on every app open, reads whose names miss the guard rule, `Wrapper_NotificationOpened`;
   user, 2026-10-14). Emails, shares, policy accept and writes made by user actions stay blocked.
7. Do not `git push`. Commit only when I ask.

## How to work with me

- Reply to me in Vietnamese, whatever language I write in (Vietnamese or English). Keep code, commands, file names and
  identifiers in English. Files written in the project (specs, docs, notes, commit messages) stay in English and follow
  `migration/english-docs/style-rules.md`.
- Questions to me: one session per topic (scope, stack, flags), grouped, each with evidence, options and a recommendation.
- At the start of every session: `python3 $SK/route.py plan`, read `migration/contexts/INDEX.md`, and tell me in 5 lines
  where we are and what is next.
- Long phases: keep a task list; report each phase's result in a few lines (counts, what needs my decision).
- Route work can go to a subagent per route (it reads only `references/route-agent.md`, `migration/AGENTS.md`, its `pack.md`).
- Record tokens per route and phase with `python3 $SK/ledger.py add …` after each route.

## Context notes (`migration/contexts/`)

- Read only `INDEX.md` at session start; open a `context-<NNN>-<slug>.md` only when it concerns the current work.
  Route agents do not read contexts (they keep to their pack).
- Write one when a phase finishes (survey, scope, stack, foundation), after `route.py finish`, and at the end of a
  session with notable work outside the pipeline. Not after every command.
- Template, ≤ 40 lines: Result · Decisions (who, date) · Facts learned (evidence) · Files changed · Open issues · Next.
  Link to the board, ADRs, questions and `migration/knowledge/`; never copy them. Facts about the app go to
  `migration/knowledge/` (agents read that) and the context links there.
- Id = highest + 1, slug in kebab-case. Then update `INDEX.md`: overwrite the "Now" block (≤ 5 lines) and add one
  row. An outdated context gets status `superseded by context-<NNN>`; never delete one.
- Never write passwords, PINs, emails, test-account names, raw data or anything from `.auth/` or `migration/.raw/`.

## Environment

- Source of truth is **TST** (captures, survey, compiled code). The OutSystems MCP (Service Studio) is connected to
  **DEV**: use it as reference only. When DEV and TST differ, TST wins and the difference is noted (user, 2026-10-13).

- Dev server for parity: `npm --prefix app run dev` (http://localhost:5173), started in the background before `route.py parity`.
- Viewports and flag variants come from `migration/capture-plan.json`; device classes from the captures (re-run the scaffold
  with `--update-routes` only for routes, the full scaffold only with my agreement).
