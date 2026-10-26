# Brief: P2-4 Page template and user review

Written by rf.py brief. Read this file, then the files that the step names under "Read". Do not read the full plan.

| Field | Value |
|---|---|
| Step | P2-4 |
| Kind | report |
| Parity level | visual (full run: --all) |
| Developer model | sonnet |
| Depends on | P2-3 |
| User gate | after: Test HouseholdDetails, HouseholdCarousel and Profile on localhost, read the pilot report, then confirm. |
| Fix loop | 1 of 2 |
| Handoff folder | `migration/refactor/handoffs/P2-4/` |

## The step in the plan

**P2-4 Page template and user review** (0.5 day)

- Do:
  1. Write `app/docs/guides/page-template.md`. Content: the folder, the files, the hook shape, the container
     criterion, the test and story shape, the checklist of the gate. Use HouseholdDetails as the example and link to
     the files.
  2. Update `move-map.csv` with what the pilot taught (shapes, time).
  3. Give the user the localhost link of the 3 routes and the report. Stop until the user confirms.
- Check: the user confirmed.
- Commit: `refactor(P2-4): add the page template from the pilot`.

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
npm --prefix app run lint:arch   # no new warning in the folders of this step
python3 migration/tools/refactor_parity.py --level visual --all --ref both --report app/docs/refactor/reports/P2-4.md
npm --prefix app run build && node app/build/bundle-report.mjs   # limits: plan v2 section 7
```

The tester also runs the commands under "Check" of the step, and the diff review of `.claude/agents/refactor-tester.md`.

## Fix loop 1: result of the last test

## Result
status: fail
summary: Every gate passes (ci 0, parity 64/64 both refs, bundle within 5%), but my required parity command (--report app/docs/refactor/reports/P2-4.md) overwrote the developer's pilot report, so the user-facing report with the 3 localhost links is gone. The report must be rewritten (and the parity run kept separate).

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
