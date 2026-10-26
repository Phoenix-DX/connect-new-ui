# Brief: P6-G6-B-ViewDocuments ViewDocuments as page

Written by rf.py brief. Read this file, then the files that the step names under "Read". Do not read the full plan.

| Field | Value |
|---|---|
| Step | P6-G6-B-ViewDocuments |
| Kind | change |
| Parity level | visual |
| Developer model | opus |
| Depends on | P6-G6-B-QRCodeGenerate |
| User gate | - |
| Fix loop | 0 of 2 |
| Handoff folder | `migration/refactor/handoffs/P6-G6-B-ViewDocuments/` |

## Scope of this step

This step is step B (restructure) of group G6 for the route ViewDocuments only. Do not change the other routes of the group. Step B item 3 is the step P6-G6-B-Shared: import the shared blocks of 2 or more pages from their move-map targets and do not move them.

## The step in the plan

### Phase 6: pages by group (18 days), parity `strict` then `visual`

Each group has the same steps. The route list per group is in §8.

- **Step A, move** (`strict`): codemod `screens/<R>` → `pages/<R>` for the group; `@origin` tags. Commit
  `refactor(P6-G<n>-A): move <group> to pages/`.
- **Step B, restructure** (`visual`), for each route, in the order of the group:
  1. `ScreenBlock_*` → hooks and components (§2.3, `page-template.md`).
  2. Shared blocks that only this group uses → `pages/<R>/components`.
  3. Shared blocks that 2 or more pages use → `components/<domain>` or `containers/`.
  4. The route's `api.ts` → the domain hooks.
  5. Delete the old files when the last import moved.
  6. One commit per route: `refactor(P6-G<n>-B): <Route> as page`.
- **Step C, prune**: run `knip` and `jscpd` on the group; delete the unused files; write the report. Commit
  `refactor(P6-G<n>-C): prune <group>`.
- **Gate per route**: `ci`; parity `visual` `--changed` against both references; `lint:arch` shows no new warning in
  the new folders.
- **Gate per group**: parity `visual` `--all`; the e2e suite; the bundle report. The user gets the localhost links of
  the group's routes and confirms once per group.

| Group | Routes | Days | Note                                                                                               |
| ----- | ------ | ---- | -------------------------------------------------------------------------------------------------- |
| G1    | 10     | 2    | Auth and menu screens. Small pages. The session machine of P4 already holds the logic.             |
| G2    | 9      | 3    | Contact and email: merge the 7 email screens into one `ContactForm` container + config.            |
| G3    | 8      | 4    | Home, feed, search, messages: the largest shared blocks (`FilterSheet`, `Feed_Embeded`).           |
| G4    | 13     | 4    | Directory: HouseholdDetails is done (P2). Carousel and supper meeting reuse its pieces.            |
| G5    | 16     | 4    | Orbit, Assemble, LDM: `EventBooklet` (1,077 lines) is one full day. LDM and Assemble share blocks. |
| G6    | 7      | 1    | Bookmarks, notes, share, documents.                                                                |

After G6: `screens/` and `shared/` are empty. Delete them and the fallback in `app/screens.ts`. Commit
`refactor(P6-end): delete screens/ and shared/`.

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
python3 migration/tools/refactor_parity.py --level visual --changed --ref both --report app/docs/refactor/reports/P6-G6-B-ViewDocuments.md
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
