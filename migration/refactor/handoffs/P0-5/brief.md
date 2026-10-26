# Brief: P0-5 Move map and ADR

Written by rf.py brief. Read this file, then the files that the step names under "Read". Do not read the full plan.

| Field | Value |
|---|---|
| Step | P0-5 |
| Kind | report |
| Parity level | none |
| Developer model | opus |
| Depends on | P0-4 |
| User gate | after: Review app/docs/refactor/move-map.csv, app/docs/refactor/duplicates.md and ADR-15 in migration/architecture.md, then confirm. |
| Fix loop | 0 of 2 |
| Handoff folder | `migration/refactor/handoffs/P0-5/` |

## The step in the plan

**P0-5 Move map and ADR** (0.5 day)

- Goal: the plan for each block, approved by the user.
- Preconditions: P0-4 committed.
- Read: `inventory.csv`, `refactor-plan.md` §2.1 (candidate duplicates), `migration/catalog/` (block catalog).
- Do:
  1. Verify each candidate duplicate of the draft §2.1 against the code. Write the result in
     `app/docs/refactor/duplicates.md`: for each group, same or different, and the plan (merge, keep, delete).
  2. Write `app/docs/refactor/move-map.csv` with the columns: `source`, `origin` (OutSystems name), `shape` (§2.3),
     `target` (folder and file), `phase` (P1, P2, P6-G1 … P6-G6, P7), `routes` (count), `notes`.
  3. Write the ADR "Target front-end architecture" in `migration/architecture.md` (ADR-15). Content: the terms, the
     folders, the rules, R1 to R8 as the user decided them, the tool versions.
  4. Ask the user to review `move-map.csv`, `duplicates.md` and ADR-15. Stop until the user confirms.
- Check: the user confirmed in the conversation.
- Commit: `refactor(P0-5): add the move map and ADR-15`.

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
npm --prefix app run build && node app/build/bundle-report.mjs   # limits: plan v2 section 7
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
