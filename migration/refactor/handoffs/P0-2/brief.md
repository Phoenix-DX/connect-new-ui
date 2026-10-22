# Brief: P0-2 Parity tool for the refactor

Written by rf.py brief. Read this file, then the files that the step names under "Read". Do not read the full plan.

| Field | Value |
|---|---|
| Step | P0-2 |
| Kind | tool |
| Parity level | strict |
| Developer model | sonnet |
| Depends on | P0-1 |
| User gate | - |
| Fix loop | 1 of 2 |
| Handoff folder | `migration/refactor/handoffs/P0-2/` |

## The step in the plan

**P0-2 Parity tool for the refactor** (1.5 days)

- Goal: `refactor_parity.py` as §4.2 describes, with the self-parity reference recorded.
- Preconditions: P0-1 committed.
- Read: `$SK/route.py` (functions `parity`, around lines 683 and 860), `$SK/parity_check.cjs` (its CLI and its
  check names), `migration/tools/parity_sweep.py`, `migration/parity-exemptions.json`.
- Do:
  1. Write `migration/tools/refactor_parity.py` with the CLI of §4.2. Reuse `parity_check.cjs` as `parity_sweep.py`
     does.
     - Implement `--level visual` as a list of check names to skip: `structure`, `class`, `attribute`.
     - At this level, run the `style` check on visible elements only. Use the option of `parity_check.cjs` that does
       this. When there is no such option, add one behind a flag, default off. Record the change in
       `migration/tools/README.md`.
  2. Create `migration/refactor-exemptions.json` (empty list) and document its entry shape in the README.
  3. Run `refactor_parity.py --record-self --all` against the dev server at the current commit. The reference goes to
     `migration/refactor-reference/`. Add that folder to `.gitignore` when it is larger than 50 MB; otherwise commit it.
  4. Run `refactor_parity.py --level strict --all --ref both`. Expect 64/0 and 64/0.
  5. Add the tool and its options to `migration/tools/README.md`.
- Check: the run of item 4 is 64/0 for both references; the report is in `app/docs/refactor/reports/P0-2.md`.
- Commit: `refactor(P0-2): add refactor_parity.py and the self-parity reference`.

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
python3 migration/tools/refactor_parity.py --level strict --changed --ref both --report app/docs/refactor/reports/P0-2.md
```

The tester also runs the commands under "Check" of the step, and the diff review of `.claude/agents/refactor-tester.md`.

## Fix loop 1: result of the last test

## Result
status: fail
summary: Parity is good (strict 64/0 and 64/0, visual self 64/0, negative test detects a difference, migration/screens untouched). But `npm run ci` exits 1: prettier format:check fails on the generated report app/docs/refactor/reports/P0-2.md.

Fix only these failures. Read the full `test.md` for the details.

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
