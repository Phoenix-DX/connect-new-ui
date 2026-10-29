# Drift wave, triage: brief for one agent (2026-10-29)

User decision I10-12 (`../review/item10-new-screens.md` §10): re-capture all routes on TST (read-only), sort each
parity difference, and fix per shared block; the user decides each group. The re-captures are done (2026-10-29).
The parity sweep after them: 65 routes, 37 clean, 28 with differences. The table by block and by route:
`../review/drift-table-2026-10-29.md` (made by `../tools/drift_table.py`).

## Evidence you can read

- New capture analysis: `migration/screens/<S>/analysis/` (dom per state, `calls.md`, `sources/`).
- Old analysis (before the re-capture, 2026-10-14 to 10-16):
  `/private/tmp/claude-501/-Users-khaitruong-Projects-connect-new/c658e23d-06e2-4426-a111-9e9cbc2d7280/scratchpad/pre-recapture-2026-10-29/<S>-analysis/`
  (and git: `git show 62406f26:migration/screens/<S>/analysis/<file>`, the commit before the re-captures of 2026-10-29).
- Parity reports after the re-capture: `migration/screens/<S>/parity/<state>.json` (and `<state>.diff.png`).
- TST compiled code: the live copies in `migration/runtime-sources/` and the live survey `capture/survey-UBTConnect.json`
  (25 MB: read it with a small Python script that prints only the lines you need); the copies before the TST publish
  of 2026-10-27 are in git at f9f68bfc (`git show f9f68bfc:migration/runtime-sources/<file>`); the old survey is
  `capture/survey-UBTConnect-2026-10-13.json`. `../tools/extract_sources.py --screen <S> <pattern>` copies live files.
- The first drift list of 11 routes: `item10-finish.md` ("drift list").
- Knowledge: `migration/knowledge/`, decisions `../decisions.md`, `../auto-decisions-2026-10-29.md`.

## What to do

For every route of your group and every difference in its parity reports, decide the class:
- A: TST changed its code (old vs new compiled code differs at the element): React must port the change.
- B: mock data: TST shows other data (counts, texts, list lengths, dates); the React code is right; the mock should
  match the captured shape (fictional texts with the captured lengths).
- C: capture artefact (timing, masked text, a state the capture measured early); no code change.
- D: React gap or bug that the old capture did not show (the TST code did not change).
Group the differences by shared block (the same cause on several routes is one row). For each row: routes, states,
counts, class, evidence (file:line, old vs new), the fix you propose (where in `app/src`, which other routes it
touches), size S/M/L, risk, and whether it needs a user decision (and the options with a recommendation).

## Rules

- Never open `.auth/` or `migration/.raw/`. No TST access, no MCP. No code change, no commit. Read-only work.
- Budget: at most 55 tool calls; one-shot reads; read parity JSON by small Python summaries, not whole files.
- English, short sentences (`migration/english-docs/style-rules.md`).

## Output

Write `../review/drift-triage-<group>.md` (the name in your prompt): a summary line (counts per class), the table of
rows, and the questions for the user. Reply with the same summary, the number of rows per class, and your tool-call
count.
