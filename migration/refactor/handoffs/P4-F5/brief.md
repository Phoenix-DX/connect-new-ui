# Brief: P4-F5 (a test that opens Profile's "Preview Household Profile")

Not a catalog step: the master wrote this brief by hand (follow-up F5 in `migration/refactor/followups.md`). Do not run
`rf.py start`, `stage` or `done`.

| Field | Value |
|---|---|
| Kind | test only |
| Parity level | strict, route Profile (both references) |
| Developer model | sonnet |
| Depends on | P4-F6 |
| Handoff folder | `migration/refactor/handoffs/P4-F5/` |

## Why

Profile shows the HouseholdDetails container with the source `preview` ("Preview Household Profile"). No parity state
opens it; only the container test and a story cover it. Phase 6 moves Profile and the container callers, so a
regression in the preview would go unseen.

## Do

1. Add an interaction test that opens the preview from the Profile page and checks what it shows (the container in
   `preview` mode: the title, the household data of the mock user, the close or back action). Use the test style of
   the repo: a Vitest + Testing Library test next to the Profile page code, or an e2e journey when the repo has one for
   Profile flows. Use the existing mocks; do not change `src/mocks/**` fixtures.
2. A new parity state needs a capture of the real app: do not add one (read-only rule, no capture in this step).
3. No app code change. When the test shows a bug, stop and report it.

## Checks

- Node 24: `export PATH=$HOME/.nvm/versions/node/v24.21.0/bin:$PATH`.
- `cd app && npx vitest run <the new test>`; `npm --prefix app run format:check`; `npx eslint <the new test>`.
- Tester: `npm --prefix app run ci`; `python3 migration/tools/refactor_parity.py --level strict --routes Profile --ref
  both --app http://localhost:5174 --report app/docs/refactor/reports/P4-F5.md`. Port 5173 is another clone: never use
  it, never stop it.

## Report

Write `dev.md` in this folder: summary, files changed, commands run with results.
