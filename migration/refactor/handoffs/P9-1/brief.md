# Brief: P9-1 Rules to error

Written by rf.py brief. Read this file, then the files that the step names under "Read". Do not read the full plan.

| Field | Value |
|---|---|
| Step | P9-1 |
| Kind | tool |
| Parity level | strict |
| Developer model | sonnet |
| Depends on | P8-2 |
| User gate | - |
| Fix loop | 0 of 2 |
| Handoff folder | `migration/refactor/handoffs/P9-1/` |

## The step in the plan

**P9-1 Rules to error** (0.5 day): boundaries, `no-circular`, `jscpd` threshold (the value of P7-5 plus 10 percent),
`knip` in `npm run ci`. Fix the last warnings.

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
python3 migration/tools/refactor_parity.py --level strict --changed --ref both --report app/docs/refactor/reports/P9-1.md
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

## Notes from the master (2026-10-24)

- The user ordered P8 and P9 and is away: decisions go to the Opus + Fable advisors through the master.
- Scope decided by the advisors (W38, W39 in `migration/refactor/auto-decisions-2026-10-22.md`): hybrid. F43 (commit
  before this step) moved `os-wire`/`os-assets` to `lib/`. This step:
  1. Rule scope (config only, a reclassification, report the count apart, F38): rule 9 does not check mock handlers
     (`src/mocks/**`, `**/mocks.ts`) and test helpers (`src/test/**`), as the rules already skip stories and tests.
  2. Every folder rule of plan v2 §2.4 (rules 3 to 9, `pages-imported-by-own-route-only`) and the ESLint rule-4/11
     restrictions become `error`. `no-circular` stays `error`.
  3. Frozen baselines for the warnings that remain: dependency-cruiser known violations (`depcruise-baseline` →
     `app/.dependency-cruiser-known-violations.json`, `--ignore-known` in the `arch` script) and the ESLint baseline
     `app/docs/refactor/arch-baseline.csv` (`arch_baseline.py check`). `npm run ci` runs both checks and fails on a new
     violation; a baseline row that no longer matches must be deleted (the files only shrink): make `ci` fail on stale
     rows too, or document the command that the next step runs.
  4. `jscpd` threshold in `npm run ci`: the P7-5 value plus 10 percent (`app/docs/refactor/reports/P7.md`).
  5. `knip` in `npm run ci` (the config that P7 used; 0 unused files and exports, or a documented ignore list).
  6. Each remaining baseline row has an owner: F35 (rule 6), F36 (OSLink), F37 (CacheControl), and new follow-up rows
     for the rest (rules 4, 5, 8, rule-9 leftovers: `exceptions.ts`, `os-exceptions.ts`, `bodyTheme`, cache blocks).
     List them in dev.md; the master writes the followups rows.
- `ci` time: report the time of `npm run ci` before and after.
- Prefetch: this step runs in a git worktree while P8-2 (CSS deletion in `public/UBTConnect/css/`) runs in the main
  checkout. Do not touch `public/`. The master applies your diff to the main tree after P8-2 and runs a short test.
- Current numbers (after F43, commit aef8ee7a): dependency-cruiser 146 warnings, 0 errors (rule 9: 34, rule 6: 50,
  rule 4: 36, rule 8: 20, rule 5: 13 — check); ESLint 73 warnings (72 baseline rows + 1: find out which one is not in
  the baseline and why `arch_baseline.py check` passes).

## Notes for the tester (master, after dev)

- The developer worked in a prefetch worktree based on aef8ee7a (F43). The master applied the diff to the main tree on
  top of e2006670 (P8-2: only `public/UBTConnect/css` and migration tools changed in between). Check that the
  baselines still match on the main tree (`node app/build/check-arch-baselines.mjs`, `arch_baseline.py check
  --strict`, `npm --prefix app run unused`), and that `npm --prefix app run ci` exits 0.
- Prove each gate fails on a new violation (a temporary import or export, then remove it): dependency-cruiser,
  ESLint rule 4, knip exports. Leave no temporary change behind (`git status`).
- Decisions for this step: W38, W39 (scope), W41 (knip exports/types baseline) in
  `migration/refactor/auto-decisions-2026-10-22.md`.
- Parity: the step changes no file in `src/` or `public/`; run the gate's `--changed` command and report what it
  selects (expected: none or the routes whose closure includes a changed config).
