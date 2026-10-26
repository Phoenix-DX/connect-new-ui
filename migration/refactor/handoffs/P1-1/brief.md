# Brief: P1-1 Lint rules in warn mode

Written by rf.py brief. Read this file, then the files that the step names under "Read". Do not read the full plan.

| Field | Value |
|---|---|
| Step | P1-1 |
| Kind | tool |
| Parity level | strict |
| Developer model | sonnet |
| Depends on | P0-5 |
| User gate | - |
| Fix loop | 0 of 2 |
| Handoff folder | `migration/refactor/handoffs/P1-1/` |

## The step in the plan

**P1-1 Lint rules in warn mode** (0.5 day)

- Goal: the boundary rules exist and report; the build does not fail on them.
- Do:
  1. Set the folder rules of §2.4 in `app/.dependency-cruiser.cjs` to `warn` for the target folders of §2.2. The folders exist from P0-3; check them.
  2. Add ESLint core `no-restricted-imports` with the pattern `^\.\./` as `warn` (rule 11). Add per-folder bans for `components/**` (no `@/api`, `@/platform`, `@/pages`, `@/containers`, `@/app`).
  3. Add the script `lint:arch`: `npm run arch && eslint .`. Keep
     `npm run ci` unchanged in this phase.
  4. Record the number of warnings in `baseline.md` (metric "boundary violations").
- Check: `npm --prefix app run ci` passes; `npm run lint:arch` runs and prints the count.
- Commit: `refactor(P1-1): add the boundary rules in warn mode`.

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
python3 migration/tools/refactor_parity.py --level strict --changed --ref both --report app/docs/refactor/reports/P1-1.md
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
