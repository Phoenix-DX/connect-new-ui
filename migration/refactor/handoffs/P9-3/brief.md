# Brief: P9-3 Docs

Written by rf.py brief. Read this file, then the files that the step names under "Read". Do not read the full plan.

| Field | Value |
|---|---|
| Step | P9-3 |
| Kind | report |
| Parity level | none |
| Developer model | sonnet |
| Depends on | P9-2 |
| User gate | - |
| Fix loop | 0 of 2 |
| Handoff folder | `migration/refactor/handoffs/P9-3/` |

## The step in the plan

**P9-3 Docs** (1 day): `README.md`, `docs/architecture/overview.md` (new diagrams), `docs/guides/*` (paths),
`CLAUDE.md` (paths and the skill as reference only), ADR-15 status accepted, `page-template.md` final.

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
  `question` as usual. This is a docs step: the developer stage is done by the documenter role's rules (Markdown, CSV
  and JSON records only; no app code).
- State after P9-2: all P0-P9-2 steps committed; fix steps F22-26, F25, F29, F33, F39, F40, F43 committed;
  decisions W1-W43 in `migration/refactor/auto-decisions-2026-10-22.md`; follow-ups to F50 in
  `migration/refactor/followups.md`.
- `CLAUDE.md` (plan: "paths and the skill as reference only"): do NOT edit `CLAUDE.md`. It holds the user's own
  instructions and hard rules, and the user is away. Write the exact proposed change (a unified diff, only the paths
  and the sentence about the skill's role; never the "Hard rules", "How to work with me" or secret rules) to
  `migration/refactor/handoffs/P9-3/claude-md-proposal.md` for the user to apply.
- ADR-15 is already `accepted` (user, 2026-10-22, P0-5 gate). Update only its text where the plan changed during the
  run (P8-1 already added the style layers), and keep the status and the `by`/`at` fields. Render with
  `stack.py render` and regenerate `app/docs/reference/stack.md` as P8-1 did (keep the other generated pages
  unchanged: the generator has a known stale-source issue).
- `app/docs/architecture/overview.md`: new diagrams of the final folders and the data flow (mermaid; run
  `check_mermaid`). `app/README.md` and `app/docs/guides/*`: fix stale paths (`src/screens`, `src/shared`,
  `src/shell`, `legacy/os/os-wire`, `legacy/os/os-assets`, the `app/index.html` comment that names
  `src/shell/StylesheetHost.tsx` is code: list it, do not change it).
- `page-template.md` final: it must match the current page and hook rules (F40 restored-view rule, F39
  onParametersChanged, the P9 gates).
- STE style rules (`migration/english-docs/style-rules.md`); `ste_lint` 0 errors on changed files; prettier.

## Fix loop 1 (master)

The tester failed the step on one point of this step: the ste_lint error count of the generated
`app/docs/reference/stack.md` (and `migration/architecture.md`) grew from 25 to 29, in the ADR-15 text you added
(P9-1, P9-2 and "Restored views" bullets; the P7-6 paragraph now has more than 6 sentences). Shorten and split those
parts in `migration/stack.json` (ADR-15 text only; status, by and at unchanged) until the count is 25 or less, render
again (`stack.py render`, then `docs_gen.py` into a scratch folder and copy only `stack.md`), and check prettier.
The other failure (`AssembleEvents.test.tsx` depends on today's date) is not this step's: the master runs a separate
fix step F54 for it. Append a "Loop 1" section to dev.md.
