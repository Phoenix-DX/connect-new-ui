# Brief: P9-4 Report

Written by rf.py brief. Read this file, then the files that the step names under "Read". Do not read the full plan.

| Field | Value |
|---|---|
| Step | P9-4 |
| Kind | report |
| Parity level | strict (full run: --all) |
| Developer model | sonnet |
| Depends on | P9-3 |
| User gate | - |
| Fix loop | 0 of 2 |
| Handoff folder | `migration/refactor/handoffs/P9-4/` |

## The step in the plan

**P9-4 Report** (1 day): run the P0-4 scripts again; the metrics table of §7 with baseline and result; the list of
work not done; `reports/final.md`. Give the user the report.

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
python3 migration/tools/refactor_parity.py --level strict --all --ref both --report app/docs/refactor/reports/P9-4.md
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

## Notes from the master (2026-10-25)

- The user ordered P8 and P9 and is away: decisions go to the Opus + Fable advisors through the master. Return
  `question` as usual.
- Inputs: P0-4 scripts under `migration/tools/refactor/` (`measure.mjs` and the others named in
  `app/docs/refactor/baseline.md`), the baseline numbers in `app/docs/refactor/baseline.md` (P0-1/P0-4), the phase
  reports in `app/docs/refactor/reports/`, `app/docs/refactor/CHANGELOG.md`, `migration/refactor/followups.md`
  (F1-F53), the decision log `migration/refactor/auto-decisions-2026-10-22.md` (W1-W43, user decisions R1-R8 in the
  plan).
- `reports/final.md` (`app/docs/refactor/reports/final.md`), in English, STE style:
  1. The plan §7 metrics table: baseline, target, result, met or not, evidence. Say honestly where a target is not met
     and why (for example: boundary violations are frozen baselines, not 0 — W38; legacy CSS -0.06 % — W40; flag
     readers 4 = 1 by design + 3 owned — W42; 33 screens without parity states — F27).
  2. What changed per phase P0-P9 and the fix steps (one line each, link to the CHANGELOG).
  3. Work not done: every open follow-up with its owner and the decision it waits for (group: user decisions;
     optional later steps; debt frozen in baselines with owners; tool gaps).
  4. Decisions taken by the advisors while the user was away (W34-W43), one line each, for the user's review.
- Run the full gate of the step: `npm --prefix app run ci`; parity `--level strict --all --ref both --app
  http://localhost:5174` (this repo's dev server; do not start one); `npm --prefix app run e2e:pwa`; bundle report;
  coverage (`npx vitest run --coverage` if the baseline has a coverage number).
- Do not change app code. Scripts may write measurement output under `app/docs/refactor/` or the handoff folder.

## Notes for the tester (master, after dev)

- The developer's open items N-A to N-E (final.md §3.1) are questions for the user about later work, not failures of
  this step: the master records them as follow-ups for the user. Check that final.md states them honestly.
- Check the metrics table against your own runs (spot check at least: cycles, jscpd, boundary rows, flag readers,
  coverage, bundle, legacy CSS, parity counts, files over 400 lines) and the counts of routes with parity states.
