# Review guide

This guide is for a reviewer of this project. It tells you what the project is, where the files are, and what to
read first. The terms have one meaning each: see `migration/english-docs/glossary.md`.

## 1. The project

- The project rebuilds the UBTConnect mobile app in React. The original app is an OutSystems 11 app.
- The source of truth is the test environment of the original app (TST). The project reads TST only. It does not
  write data to TST.
- The goal is a 1:1 copy of the user interface and behavior, screen by screen. Clean code and full architecture
  documents are also goals.
- Status on 2026-10-21:
  - 64 screens are finished. "Finished" means that the user tested the screen and confirmed it.
  - 19 screens are skipped. Each skip has a reason on the board.
  - The React app is a progressive web app (PWA). It uses mock data: it does not call a real server.
- Method: an AI agent (Claude Code) does the work with the project skill `outsystems-screen-spec`. For each screen:
  1. The agent captures the original screen on TST: DOM, styles, screenshots and calls.
  2. The agent writes a spec of the screen.
  3. The agent builds the React screen.
  4. A script compares the React screen with the capture (parity).
  5. The user tests the screen and confirms it.

## 2. Where the files are

| Path | What it holds | For the review |
|---|---|---|
| `app/docs/` | Documentation of the React app | Read |
| `app/src/` | Source code of the React app | Read samples |
| `migration/board.md` | One row for each screen: decision, reason, status | Read |
| `migration/screens/<Screen>/route-spec.md` | The spec of one screen | Read samples |
| `migration/app-shell.spec.md` | The spec of the shell (start, sign-in, PIN, navigation) | Read |
| `migration/architecture.md` | Stack and architecture decision records (ADR), generated | Read |
| `migration/scope-review.md`, `migration/scope-plan.md` | How the scope was decided | Optional |
| `migration/knowledge/` | Facts about the original app, with evidence | Optional |
| `migration/patterns/` | Rules for all screens (project patterns) | Optional |
| `migration/screens/<Screen>/analysis/`, `capture/`, `parity/` | Machine output: captured DOM, compiled code, comparison reports | Evidence only |
| `migration/blocks/`, `migration/catalog/`, `migration/survey/`, `migration/sitemap.md` | Generated lists and maps | Reference |
| `migration/contexts/`, `migration/change-requests/` | Session notes and change requests | History |
| `migration/english-docs/` | The English rewrite of the docs: plan, glossary, style rules | Reference |
| `CLAUDE.md`, `migration/AGENTS.md`, `.claude/` | Instructions for the AI agents | Optional |
| `RUNBOOK.md` | How to run the migration with Claude Code | Optional |

## 3. What to read first (about one hour)

1. `app/docs/README.md`, then `app/docs/architecture/overview.md`.
2. `migration/board.md`.
3. One screen from start to end, for example HomeFeed:
   1. The spec: `migration/screens/HomeFeed/route-spec.md`.
   2. The code: `app/src/screens/HomeFeed/`.
   3. The comparison: `migration/screens/HomeFeed/parity/` (`*.expected.png` is TST, `*.build.png` is React,
      `*.diff.png` shows the differences).
4. `migration/app-shell.spec.md`.
5. `migration/architecture.md`: the ADRs.

To run the React app, see `app/docs/guides/getting-started.md`.

## 4. How to read a spec

- A reference in square brackets gives the evidence of a statement:
  - `[HF:150-153]`: lines 150 to 153 of a compiled file. The spec header gives the file of each short name (HF).
  - `[pack.md]`, `[states.json]`: files in the same screen folder.
- A statement without evidence has a label: Observed, Code, Assumption or Unclear (glossary §7).
- Glossary §8 explains IDs such as D8, F18, CR-Profile-2, ADR-14 and Q3.

## 5. Limits that you must know

- The React app uses mock data. The connection to the real server is not built yet. It is part of the
  production phase.
- The specs give the calls of each screen and their data. They do not yet give the server logic behind each
  call (which service action and which entities).
- Some specs are older than later fixes. When a spec and the code are different, the feedback of the screen
  (`feedback.md`) and its change requests (`migration/change-requests/`) give the newer state.
- The rewrite of the specs to ASD-STE100 writing rules is in progress. The status is in
  `migration/english-docs/PLAN.md`. History records (contexts, change requests, questions, feedback) keep
  their original text.
