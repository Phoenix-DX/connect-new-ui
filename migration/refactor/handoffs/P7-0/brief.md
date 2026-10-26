# Brief: P7-0 Move the P7 shared rows

Written by rf.py brief. Read this file, then the files that the step names under "Read". Do not read the full plan.

| Field | Value |
|---|---|
| Step | P7-0 |
| Kind | move |
| Parity level | strict (full run: --all) |
| Developer model | sonnet |
| Depends on | P6-end |
| User gate | - |
| Fix loop | 0 of 2 |
| Handoff folder | `migration/refactor/handoffs/P7-0/` |

## Scope of this step

This step is a pure move before P7-1 (W20): move every src/shared/ row of app/docs/refactor/move-map.csv with the phase P7, except shared/osui/* (P7-1 moves those), to its target, as the P6 B-Shared steps did (move-map renames W12, @origin tags, importers follow, W15 baseline rows). Gate: diffcheck --move, parity strict --all.

## The step in the plan

### Phase 7: shared UI consolidation (5 days), parity `visual`

Do this after Phase 6: the real usage of each component is known then.

**P7-1 `components/ui` from `osui`** (1 day)

- Do: move `shared/osui/*` (without `DEPRECATED_*`) to `components/ui/`. Write one story per component. Delete
  `DEPRECATED_*`: P6 moved their last users.

**P7-2 Dialogs** (1 day)

- Do: write `Dialog` with the variants `ConfirmDialog`, `ChoiceDialog` and `NavigationDialog`, as `duplicates.md`
  planned. Update the users. Commit per merge.

**P7-3 Empty states and skeletons** (1 day)

- Do: write `EmptyState` and `Skeleton`. Update the users. Commit per merge.

**P7-4 Cards and carousels, by evidence** (1.5 days)

- Do: merge only the groups that `duplicates.md` marked "same" and that `jscpd` still reports after Phase 6. Keep the
  others as domain components.

**P7-5 Report** (0.5 day)

- Do: write `components/ui/README.md` and `reports/P7.md`.
- Check: full parity `visual`.

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

## Move step

Only renames and import lines change in code files. Use the codemod `migration/tools/refactor/move.ts` when it exists (from P0-3). Do not edit logic.

## Quick checks for the developer

```
npm --prefix app run typecheck
cd app && npx vitest run <the test files of the changed code>
cd app && npx eslint <the changed files>
```

## Gate commands for the tester

```
npm --prefix app run ci
npm --prefix app run lint:arch   # no new warning in the folders of this step
python3 migration/tools/refactor_parity.py --level strict --all --ref both --report app/docs/refactor/reports/P7-0.md
npm --prefix app run build && node app/build/bundle-report.mjs   # limits: plan v2 section 7
python3 .claude/skills/refactor-master/scripts/rf.py diffcheck --move
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
