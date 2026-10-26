# Brief: P1-2 Move shell/ to platform/

Written by rf.py brief. Read this file, then the files that the step names under "Read". Do not read the full plan.

| Field | Value |
|---|---|
| Step | P1-2 |
| Kind | move |
| Parity level | strict |
| Developer model | sonnet |
| Depends on | P1-1 |
| User gate | - |
| Fix loop | 1 of 2 |
| Handoff folder | `migration/refactor/handoffs/P1-2/` |

## Decisions for this step

These answers override the step text where they differ.

- Q9: shell/mocks.ts, shell/mocks.test.ts and shell/testSupport.ts are not in the P1-2 step table; the developer put them in platform/testing/. Is that the right place? **Answer:** auto-accepted (user instruction 2026-10-22 15:29, until end of P1): Opus (medium) and Fable (high) both recommend (b): mocks.ts and mocks.test.ts to platform/bootstrap/ (rename only, the glob still matches); testSupport.ts to src/test/testSupport.ts next to the setup it imports. No platform/testing area. Note in move-map.csv: mocks.ts also mocks shell-block calls, so bootstrap/ is approximate; P5 follow-up with src/mocks/handlers/.

## The step in the plan

**P1-2 Move `shell/` to `platform/`** (1 day)

- Goal: the files of `shell/` live under `platform/<area>/` as the move map says. No code change.
- Read: `move-map.csv` rows with `phase = P1`; `app/src/shell/README.md`.
- Do:
  1. Run the codemod with `--map move-map.csv --phase P1-2`. The target areas:

     | Target                | Files from `shell/`                                                                                                               |
     | --------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
     | `platform/session`    | session.ts, clientVars.ts, pin.ts, auth.ts, mockUser.ts, cachedUserInfo.ts, userInfo.ts, resume.ts, inactivity.ts, testSession.ts |
     | `platform/bootstrap`  | startup.ts, AppStart.tsx                                                                                                          |
     | `platform/navigation` | navigation/*, paths.ts, LockHost.tsx, AppLockHost.tsx                                                                             |
     | `platform/feedback`   | feedback/_, dialogs/_                                                                                                             |
     | `platform/storage`    | storage.ts, localEntities/*, memoryCache.ts                                                                                       |
     | `platform/device`     | deviceContext.ts                                                                                                                  |
     | `legacy/os`           | StylesheetHost.tsx, exceptions.ts, bodyTheme.ts, reviewMarkers.ts                                                                 |
     | `app/`                | ErrorBoundary.tsx, RouteError.tsx                                                                                                 |

  2. Update the paths in `app/docs/guides/shell.md`. Move `shell/README.md` to `app/src/platform/README.md`.
  3. Update the paths in `migration/tools/parity_sweep.py` and `migration/tools/README.md` where they name `src/shell`.
- Check: `ci` passes; `refactor_parity.py --level strict --all` is 64/0 for both references; `git diff --stat` shows
  renames only (plus import lines).
- Commit: `refactor(P1-2): move shell/ to platform/ and legacy/os/`.

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
python3 migration/tools/refactor_parity.py --level strict --changed --ref both --report app/docs/refactor/reports/P1-2.md
npm --prefix app run build && node app/build/bundle-report.mjs   # limits: plan v2 section 7
python3 .claude/skills/refactor-master/scripts/rf.py diffcheck --move
```

The tester also runs the commands under "Check" of the step, and the diff review of `.claude/agents/refactor-tester.md`.

## Fix loop 1: result of the last test

## Result
status: fail
summary: `npm run ci` fails at format:check (prettier) on 2 files that the move changed. `rf.py diffcheck --move` fails (untracked helper script). Parity, bundle and lint:arch were skipped. The dev server returned 200.

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
