# Brief: P3-2 Remove the UBTConnect cycles

Written by rf.py brief. Read this file, then the files that the step names under "Read". Do not read the full plan.

| Field | Value |
|---|---|
| Step | P3-2 |
| Kind | change |
| Parity level | strict |
| Developer model | opus |
| Depends on | P3-1 |
| User gate | - |
| Fix loop | 1 of 2 |
| Handoff folder | `migration/refactor/handoffs/P3-2/` |

## Decisions for this step

These answers override the step text where they differ.

- Q11: The UBTConnect cycle came only from 8 UBTConnectLibrary stories (20 upward imports); the developer replaced the real blocks with StandInBlock, so those stories show 'Not captured' markers. Keep (a), exclude stories from the rules (b), or move the stories up (c)? **Answer:** auto-accepted (user instruction 2026-10-22 19:41, overnight): SPLIT: Opus (c, medium), Fable (b, high). Master took the more conservative and reversible option (b): revert the 8 stories to the real blocks as at HEAD, drop StandInBlock, and exclude *.stories.tsx (and test files) from the cycle and layer rules in .dependency-cruiser.cjs; production code keeps the strict rules (the 2 new direction rules stay for non-story files).

## The step in the plan

**P3-2 `UBTConnect ↔ UBTConnectLibrary ↔ UBTConnect_Utils`** (1.5 days)

- Do: move the static entities and structures that the three modules share to `api/<domain>/types.ts` or `lib/`.
  Move the shared actions to `platform/` or `lib/`.
- Check: `depcruise` reports 0 cycles in these three folders.
- Commit: `refactor(P3-2): remove the UBTConnect cycles`.

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
python3 migration/tools/refactor_parity.py --level strict --changed --ref both --report app/docs/refactor/reports/P3-2.md
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
