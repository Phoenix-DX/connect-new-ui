# Brief: P9-2 Flag check

Written by rf.py brief. Read this file, then the files that the step names under "Read". Do not read the full plan.

| Field | Value |
|---|---|
| Step | P9-2 |
| Kind | tool |
| Parity level | none |
| Developer model | sonnet |
| Depends on | P9-1 |
| User gate | - |
| Fix loop | 0 of 2 |
| Handoff folder | `migration/refactor/handoffs/P9-2/` |

## The step in the plan

**P9-2 Flag check** (0.5 day): `scripts/check-flags.ts` as §3.1 rule 4, in `npm run ci`.

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

- The user ordered P8 and P9 and is away: decisions go to the Opus + Fable advisors through the master. Return
  `question` as usual.
- Prefetch: you work in a git worktree whose last commit ("wip(P9-1)") holds the not-yet-committed P9-1 change
  (rules to error, baselines, knip and jscpd in `npm run ci`). Your diff must be only P9-2. Do not change the P9-1
  files except `app/package.json` (add your script to `ci`).
- Plan v2 §3.1 rule 4: `scripts/check-flags.ts` fails in three cases: a registry key has no reader in `src/`; a reader
  uses a key that is not in the registry (TypeScript already fails); `removeBy` is in the past. Plan §7 metric:
  "Readers of flags outside pages, hooks, containers: 0" — measure it and report it (rule 1 of §3.1:
  `components/**` does not import `platform/flags`; lint rule 4 already covers it). Put the script where the app
  keeps its build scripts (`app/build/` holds the other checks) unless a `scripts/` folder already exists; name it in
  dev.md.
- "Today": the check compares `removeBy` with the current date. A date in the past today is a real failure: report
  it as a `question` with the keys and dates (do not change the registry dates yourself).
- Use `export PATH=$HOME/.nvm/versions/node/v24.21.0/bin:$PATH`. Prove the check fails in each of the 3 cases with a
  temporary change, then remove it.
