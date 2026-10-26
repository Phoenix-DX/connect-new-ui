# Brief: P0-1 Baseline run

Written by rf.py brief. Read this file, then the files that the step names under "Read". Do not read the full plan.

| Field | Value |
|---|---|
| Step | P0-1 |
| Kind | report |
| Parity level | strict (full run: --all) |
| Developer model | sonnet |
| Depends on | - |
| User gate | - |
| Fix loop | 0 of 2 |
| Handoff folder | `migration/refactor/handoffs/P0-1/` |

## Decisions for this step

These answers override the step text where they differ.

- Q1: Statement coverage needs a Vitest coverage provider (@vitest/coverage-v8), which is not installed. Add it now, or record coverage as not measured until P0-3? **Answer:** auto-accepted (user instruction 2026-10-22 11:44, until 15:30): Opus recommended (a): add @vitest/coverage-v8 at the exact vitest version in P0-1; measure with --coverage.include='src/**/*.{ts,tsx}' --coverage.exclude='**/*.stories.tsx' --coverage.reporter=text-summary --coverage.reporter=json-summary; record the flags in baseline.md
- Q3: Apply the security patches (vitest 4.1.12 + coverage-v8 4.1.12, vite 7.3.7, storybook + @storybook/react-vite 10.6.x) in P0-1 before the baseline is measured? **Answer:** auto-accepted (user instruction 2026-10-22 11:44, until 15:30): Opus recommended (a): before the baseline install vitest@4.1.12, @vitest/coverage-v8@4.1.12, vite@7.3.7, storybook@10.6.3, @storybook/react-vite@10.6.3 and every other @storybook/* at 10.6.3 (ADR-2 security exception); npm audit must show no open advisory of these; smoke-test storybook build once; if the parity sweep shows differences after the vite patch, investigate before accepting them as the baseline.

## The step in the plan

**P0-1 Baseline run** (0.5 day)

- Goal: record the state before any change.
- Preconditions: branch `refactor/architecture` at or after `b3c9704`; tag `migration-complete` exists.
- Read: `migration/tools/README.md`, `app/package.json` (scripts).
- Do:
  1. Start the dev server: `npm --prefix app run dev` in the background.
  2. Run `npm --prefix app run ci`.
  3. Run `python3 migration/tools/parity_sweep.py`. Expect 64/0.
  4. Run `npx vitest run --coverage` in `app/` and record the statement coverage.
  5. Run `npm --prefix app run build` and record the size of each chunk in `app/dist/assets/` (a table: name, kB).
  6. Write `app/docs/refactor/baseline.md` with: date, commit, ci result, parity result, coverage, chunk table, the
     metrics of §7 that are known today.
- Check: `baseline.md` exists and names the commit; `ci` passed.
- Commit: `refactor(P0-1): record the baseline`.

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
python3 migration/tools/parity_sweep.py   # refactor_parity.py does not exist yet (P0-2)
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
