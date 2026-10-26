# Brief: P0-3 Dev tools, graph and codemod

Written by rf.py brief. Read this file, then the files that the step names under "Read". Do not read the full plan.

| Field | Value |
|---|---|
| Step | P0-3 |
| Kind | tool |
| Parity level | none |
| Developer model | sonnet |
| Depends on | P0-2 |
| User gate | before: Approve the added dev dependencies eslint-plugin-import-x and tsx (D3 addition). The developer picks the versions by the stable rule (ADR-2). |
| Fix loop | 1 of 2 |
| Handoff folder | `migration/refactor/handoffs/P0-3/` |

## Decisions for this step

These answers override the step text where they differ.

- Q2: Before-gate: approve the added dev dependencies eslint-plugin-import-x and tsx (D3 addition), versions by the stable rule (ADR-2)? **Answer:** auto-accepted (user instruction 2026-10-22 11:44, until 15:30): Opus recommended: approve neither eslint-plugin-import-x nor tsx. Rule 11 with ESLint core no-restricted-imports (regex ^\.\./); codemod runs on plain Node 24 and loads ts-morph with createRequire(app/package.json). Versions: dependency-cruiser 17.4.3, eslint-plugin-boundaries 5.4.0 (handlebars override 4.7.10 if kept), jscpd 4.3.0, knip 5.88.1, ts-morph 27.0.2. braces advisory (no fix, dev-only CLIs) to accept in ADR-15. The boundaries resolver question stays open (Q3).
- Q4: Boundary rules 3-9 with @/ imports: (1) add eslint-import-resolver-typescript 4.4.5 to keep eslint-plugin-boundaries, (2) a local resolver file, or (3) rules 3-9 in dependency-cruiser only and drop eslint-plugin-boundaries? **Answer:** auto-accepted (user instruction 2026-10-22 11:44, until 15:30): Opus recommended (3): rules 3-9 and 10 in dependency-cruiser only (resolves @/ natively); drop eslint-plugin-boundaries (changes D3: no handlebars override, no braces path via micromatch); add ESLint core no-restricted-imports overrides per folder for the simple bans so the editor shows them. The user reviews the D3 change.
- before-gate: auto-accepted (user instruction 2026-10-22 11:44, until 15:30): Opus recommended: add no extra dependency (no eslint-plugin-import-x, no tsx); see Q2 for the versions.

## The step in the plan

**P0-3 Dev tools, graph and codemod** (1 day)

- Goal: the tools of §4.4 installed and configured; the codemod works in dry-run.
- Preconditions: P0-2 committed.
- Read: `app/eslint.config.js`, `app/tsconfig.json`, `app/vite.config.ts`, `migration/knowledge/stack-baseline.md`.
- Do:
  1. Pick the versions by the stable rule. Write them in `baseline.md` (table: package, version, release date).
  2. Install them as dev dependencies. Do not change runtime dependencies.
  3. Write `app/.dependency-cruiser.cjs`: `no-circular` as error; the folder rules of §2.4 as `warn`; an output of
     the graph to `app/docs/refactor/graph.json` (`npm run graph`).
  4. Add the alias `@/` → `src/` in `tsconfig.json` and `vite.config.ts`. Do not change any import yet.
  5. Write `migration/tools/refactor/move.ts` (§4.3). Test it with `--dry-run` on `app/src/shell → app/src/platform`.
     The dry run prints the file list and the import count and changes nothing.
  6. Export the first reports: `npx depcruise src --output-type err` (cycles), `npx jscpd src`, `npx knip`. Save the
     outputs under `app/docs/refactor/reports/P0-3-*.txt`.
- Check: `npm --prefix app run ci` passes; `graph.json` exists; the dry run prints a list.
- Commit: `refactor(P0-3): add the architecture tools and the move codemod`.

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
```

The tester also runs the commands under "Check" of the step, and the diff review of `.claude/agents/refactor-tester.md`.

## Fix loop 1: result of the last test

## Result
status: fail
summary: Integration run on the main tree. ci, arch, dry run, parity (64/0), docs and diff review pass. One failure (F1): `refactor_parity.py --changed` does not read the depcruise `graph.json` (no "routes" key). It does not crash, but it silently treats the graph as missing and selects all routes with a misleading reason.
Prefetch run (worktree): passed (earlier test.md, replaced by this file).

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
