# Brief: P0-4 Measure the code

Written by rf.py brief. Read this file, then the files that the step names under "Read". Do not read the full plan.

| Field | Value |
|---|---|
| Step | P0-4 |
| Kind | tool |
| Parity level | none |
| Developer model | sonnet |
| Depends on | P0-3 |
| User gate | - |
| Fix loop | 0 of 2 |
| Handoff folder | `migration/refactor/handoffs/P0-4/` |

## The step in the plan

**P0-4 Measure the code** (0.5 day)

- Goal: the facts the move map needs.
- Preconditions: P0-3 committed.
- Do, with scripts under `migration/tools/refactor/` (keep them, they run again in P9-3):
  1. For each of the 237 shared blocks and the 28 `ScreenBlock_*` files, record these columns:
     - lines, tests, stories;
     - the number of routes that import it;
     - the `callAction` names;
     - the state it uses: `useViewState`, `memoryCache`, client variables, flags.
  2. For each route, record: the chunk size from P0-1; the blocks it imports; the calls per state from
     `migration/screens/<R>/analysis/calls.json`.
  3. List the 71 files that call `callAction` directly, with the module and action names. Group them by domain:
     household, member, country, locality, update, event, bookmark, note, message, notification, app.
  4. Add `app/build/bundle-report.mjs`: prints the first-load size (entry + route chunk + shared chunks) of HomeFeed
     and Login from `dist/`.
- Output: `app/docs/refactor/inventory.csv` (one row per block and screen block) and `app/docs/refactor/calls-by-domain.md`.
- Check: the CSV has 265 rows; the counts match `baseline.md`.
- Commit: `refactor(P0-4): add the code inventory`.

## Rules for all steps (plan v2 §1.4)

1. A step is a move or a change, never both (draft §3, rule 3).
2. Move files with the codemod (§4.3), never by hand and never with `sed -i`.
3. Do not change `src/api/openapi.yaml`, `src/mocks/**` fixtures, or `public/UBTConnect/css/**` (D2 and R3).
4. Do not change behavior. When a step needs a behavior change, stop and ask the user.
5. Do not delete a test. Move it with its code. When a merged component makes a test obsolete, replace the test by a
   test of the merged component in the same commit.
6. Write new code in English, with one JSDoc tag `@origin <OutSystems qualified name>` per file that ports a block or
   a screen (R4).
7. Do not push. Do not merge. Do not change `main`.
8. When a decision is needed (two valid options, different results), ask the user with
   `python3 $SK/route.py ask refactor --kind decision ...` and stop the step.

## Quick checks for the developer

```
npm --prefix app run typecheck
cd app && npx vitest run <the test files of the changed code>
cd app && npx eslint <the changed files>
```

## Gate commands for the tester

```
npm --prefix app run ci
```

The tester also runs the commands under "Check" of the step, and the diff review of `.claude/agents/refactor-tester.md`.

## Handoff template

Write your report to the handoff folder of the step: `dev.md` (developer), `test.md` (tester) or `docs.md`
(documenter). Use these headings in this order. Then return ONLY the "Result" and "Questions for the user" sections as
your final message.

```
## Result
status: pass | fail | blocked | question
summary: <3 lines or less: what you did and the outcome>

## Files changed
<one path per line; "none" when you changed no file>

## Commands run
<command> → <result: exit code and the key numbers>

## Deviations from the brief
<what you did differently from the brief, and why; "none">

## Questions for the user
<only decisions that the user must take; "none">
```

Status meanings:

- `pass`: the work of your stage is complete and every check you ran passed.
- `fail`: (tester) a gate check failed. List each failure under "Commands run" with the evidence.
- `blocked`: you cannot continue for a reason outside the step (a tool is missing, the dev server is down).
- `question`: you need a decision before you can continue. Do not guess.
