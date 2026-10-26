# Brief: P8-1 Tokens and layers

Written by rf.py brief. Read this file, then the files that the step names under "Read". Do not read the full plan.

| Field | Value |
|---|---|
| Step | P8-1 |
| Kind | change |
| Parity level | visual |
| Developer model | opus |
| Depends on | P7-5 |
| User gate | - |
| Fix loop | 0 of 2 |
| Handoff folder | `migration/refactor/handoffs/P8-1/` |

## The step in the plan

**P8-1 Tokens and layers** (1 day)

- Do: write `styles/tokens.css` from `UBT_Color`, `UBT_Size` and the OutSystems CSS variables. Put the 52 stylesheets
  in `@layer legacy` in `StylesheetHost`. Use `@layer app` for new CSS.
- Check: parity `visual` `--all`; the pixel check is equal.

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
python3 migration/tools/refactor_parity.py --level visual --changed --ref both --report app/docs/refactor/reports/P8-1.md
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

- Context: P0–P7 are done (127/127) and the user-decision batch F22–F33 is committed (context-050). The user ordered P8
  and P9 and is away: decisions go to the Opus + Fable advisors through the master. Return `question` as usual.
- This repo's dev server runs on `http://localhost:5174` (port 5173 may serve another clone). Do not start a dev
  server yourself.
- The plan's check is parity `visual --all` (not `--changed`). Gate for the tester:
  `python3 migration/tools/refactor_parity.py --level visual --all --ref both --app http://localhost:5174 --report app/docs/refactor/reports/P8-1.md`.
- Cascade layers change the cascade: unlayered CSS beats any layered CSS whatever its specificity, and `!important`
  inverts the layer order. Before you move the 52 OutSystems stylesheets into `@layer legacy`, list the unlayered CSS
  that will then win (component `*.module.css`, inline `<style>` of `StylesheetHost`, theme CSS, Storybook-only CSS,
  `!important` rules in either set) and check each conflict. Report the method and the result in dev.md. When the
  pixel check is not equal and the fix is not a pure layer-order choice, stop with `question`.
- `public/UBTConnect/css/**` stays unchanged (rule 3): put the files into the layer from the loader
  (`@import url(...) layer(legacy)` or an equivalent), not by editing them.
- Bundle limits: HomeFeed first load 248.22 kB gzip, Login 193.84 kB; W21 tripwire +0.3 kB per step.

## Notes for the tester (master, after dev)

- The stylesheets load through `<link>` elements to `data:` stylesheets that `@import url(<file>) layer(legacy)` (see
  dev.md). Check also: `npm --prefix app run e2e:pwa` (offline loading of the CSS through the service worker), and
  `npm --prefix app run build-storybook` exits 0 (the Storybook preview head changed).
- The main tree also has the commits F39 (8537c849) and F40 (9695c8ee) since the step started: they are not part of
  this step's diff (`git diff HEAD` shows only P8-1).
- The machine load can be high (another agent works in a worktree): for a vitest timeout in the full `ci`, rerun the
  failing files with `--maxWorkers=4 --testTimeout=60000` and report both results.
