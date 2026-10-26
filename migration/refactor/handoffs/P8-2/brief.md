# Brief: P8-2 Delete unused CSS

Written by rf.py brief. Read this file, then the files that the step names under "Read". Do not read the full plan.

| Field | Value |
|---|---|
| Step | P8-2 |
| Kind | change |
| Parity level | visual (full run: --all) |
| Developer model | sonnet |
| Depends on | P8-1 |
| User gate | - |
| Fix loop | 1 of 2 |
| Handoff folder | `migration/refactor/handoffs/P8-2/` |

## The step in the plan

**P8-2 Delete unused CSS** (2 days)

- Do: use the CSS coverage of the parity captures (`css_observe.cjs`). Delete the unused rules of one stylesheet at a
  time. Run parity `visual` `--all` after each stylesheet. Stop at the first pixel difference and keep that
  stylesheet. Record the sizes before and after.

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
python3 migration/tools/refactor_parity.py --level visual --all --ref both --report app/docs/refactor/reports/P8-2.md
npm --prefix app run build && node app/build/bundle-report.mjs   # limits: plan v2 section 7
```

The tester also runs the commands under "Check" of the step, and the diff review of `.claude/agents/refactor-tester.md`.

## Fix loop 1: result of the last test

## Result
status: pass
summary: Full gate passes: ci 0, parity visual --all --ref both 64/64 clean on both references, e2e:pwa 9/9, arch baseline 0 new, bundle under limits. Diff review OK; one note on Services.css (see Deviations).

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

## Notes from the master (2026-10-24)

- The user ordered P8 and P9 and is away: decisions go to the Opus + Fable advisors through the master. Return
  `question` as usual.
- Rule 3 ("do not change `public/UBTConnect/css/**`") has one exception: this step. Decision R3 (b) of the user
  (2026-10-22): "tokens, `@layer legacy`, delete unused CSS" (plan v2 §2.8). Change only the stylesheets; never the
  fonts, images or other files of `public/UBTConnect/`.
- This repo's dev server: `http://localhost:5174`. Do not start a dev server. The tester runs
  `python3 migration/tools/refactor_parity.py --level visual --all --ref both --app http://localhost:5174`.
- Coverage covers only the captured states. Be conservative (master's rule for this run):
  1. A stylesheet that a route with 0 parity states loads (`app/routes.css.generated.ts`, `refactor_parity.py`
     job list, follow-up F27) stays unchanged.
  2. Keep every `@font-face`, `@keyframes`, `@import`, `:root` and custom-property rule, and every rule whose selector
     has a state or an interaction (`:hover`, `:focus*`, `:active`, `:checked`, `:disabled`, `[aria-*]`, `[data-*]`,
     `.active`, `.open`, `.is-*`, `.selected`, `.error`, `.invalid`, `.disabled`, `.visible`, `.show`), and every rule
     inside a `@media` query that the captures do not cover (other widths, print, orientation, prefers-*).
  3. Delete only rules that no captured state of any route uses (union of all routes, both references when
     available), one stylesheet at a time. After each stylesheet: parity visual `--all` on 5174. Stop at the first
     pixel difference and restore that stylesheet (keep it unchanged).
  4. Record per stylesheet: size before and after (bytes and gzip), rules deleted, rules kept by each guard. Plan
     metric: "Legacy CSS (kB): 1,600 → smaller; report the value".
- Keep a list of the deleted selectors per stylesheet in the handoff folder (`deleted-selectors/<file>.txt`), so a
  later bug can be traced and the rule restored.
- Bundle limits: HomeFeed 248.22 kB gzip, Login 193.84 kB; the CSS files are not in the JS first load, but report the
  CSS totals.
- Coverage source: measure rule usage on the React app at `http://localhost:5174` (this repo), over every captured
  state that `refactor_parity.py` runs (same routes, viewports, flag variants and states), with Chromium CSS rule-usage
  tracking (Playwright CDP `CSS.startRuleUsageTracking`) or an equivalent. Do NOT run `migration/tools/css_observe.cjs`
  and do not sign in to TST: that tool only lists which stylesheets TST loads, and it needs the real app. Keep the
  coverage script under `migration/tools/refactor/` (it runs again in P9-3) and the raw coverage output in the
  handoff folder or a gitignored folder.
- This step may run parity itself (the developer runs `refactor_parity.py --level visual --all --ref both --app
  http://localhost:5174` after each stylesheet, or after a small batch with a bisect on failure). The tester then runs
  the full gate once.
- "Stop at the first pixel difference and keep that stylesheet" (plan): restore that stylesheet unchanged and go on
  with the next one. Record it in dev.md.

## Notes for the tester (master, after dev)

- Developer question 1 (relax rule 1) is decided: keep the conservative result (W40, advisors Opus + Fable). Question 2
  (`[data-block]` selectors) is moot: they stay. Test the change as it is.
- The developer ran parity only on the route that loads each pruned stylesheet, then one `--all`. Run the full gate
  yourself (`--all --ref both`), plus `npm --prefix app run e2e:pwa` (the service worker caches the CSS files).

## Fix loop 1 (master)

The tester passed the gate but found that `.sortable-drop-denied-target{outline:unset}` was deleted from
`UBTConnect.App_Services.Services.css`. It is a SortableJS drag-state class: no capture runs a drag, and the developer's
own guard keeps third-party widget classes that script toggles (Leaflet, FullCalendar, SortableJS). Restore that rule
exactly as it was, and check the other 24 deleted selectors (`deleted-selectors/*.txt`) against the same guard (class
prefixes such as `sortable-`, `leaflet-`, `fc-`, and any class a script adds at run time). Restore every match. Update
`deleted-selectors/`, `coverage-summary.json` and the sizes in dev.md ("Loop 1" section).
