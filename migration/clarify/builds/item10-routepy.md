# Item 10: route pipeline on the page-template layout (I10-1 a, I10-5 a)

Date: 2026-10-29. Decisions: user, 2026-10-29. No app code under `app/src` changed. Nothing committed.

## Files changed

- `.claude/skills/outsystems-screen-spec/scripts/route.py`
- `.claude/skills/outsystems-screen-spec/scripts/consistency_check.py`
- `.claude/skills/outsystems-screen-spec/scripts/scope_guard.py` (rewritten)
- `.claude/skills/outsystems-screen-spec/scripts/stack.py` (render and init defaults only)
- `.claude/skills/outsystems-screen-spec/scripts/test_route_paths.py` (new, 18 tests)
- `.claude/skills/outsystems-screen-spec/references/route-agent.md`
- `migration/AGENTS.md`
- `migration/stack.json` (`rules` only)
- `migration/screens/<S>/run.json` of the 6 routes in progress (`startCommit` added)

## I10-1 (a): route.py on the current layout

- New helpers `page_dir` (`app/src/pages/<S>`) and `page_file` (`<S>Page.tsx`).
- `ready` file gate: `page_problems` requires `app/src/pages/<S>/<S>Page.tsx`.
- Mock coverage: `mock_sources` scans every `mocks.ts` in `app/src` and every source file under `app/src/mocks/`.
  It skips tests, stories and JSON fixtures. The `recordedHandlers` rule still covers fixtures.
- Parity fingerprint: `src/pages/<S>` plus `src/api`, `containers`, `components`, `platform`, `legacy`, `lib`,
  `mocks`, `app`, `styles`, `vendor`, `public/UBTConnect`, `index.html`. `src/shell` and `src/shared` were dropped
  (they do not exist). A per-command cache keeps the folder digests. The hash value does not change because of it.
- Reset, checkpoint and restore use `pages/<S>`. The `start` reset check and the finish fingerprint use it too.
- `finished_state`: a `finished.json` with only `src/screens/` keys (old layout) counts as `finished`. Result:
  `route.py plan` shows 62 routes as "skip (finished)" and none as "modified".
- `route-agent.md` and `AGENTS.md`: role table, scope guard, rules 9, 10, 18, 19, workflow step 4 and the definition
  of done now name `pages/<S>`, `api/<domain>`, `components/ui`, `platform/flags`, `npm run arch`.

## I10-5 (a): stale gates replaced

- `consistency_check.py`: the root is `pages/<S>`. `requiredFiles` supports `{screen}`. The `requiredIfCalls` and
  `allowedImportRoots` checks are gone. The package allow-list and the `forbidden` rules stay.
- `stack.json`: `requiredFiles` is `["{screen}Page.tsx"]`. The two keys are removed. One `_changes` line was added.
  `stack.py` renders a `stack.json` without these keys. Its init defaults use the new rule.
- `build_gates` runs `npm --prefix app run arch` (`arch_problems`). An error fails the gate. It takes about 3 s.
- `route.py start` writes `startCommit` (`git rev-parse HEAD`) to `run.json`.
- `scope_guard.py` diffs from `startCommit`. Without it, or with an unknown commit, it uses `<base>...HEAD`. It adds
  the working tree. Allowed: own page and `migration/screens/<S>`, `app/src/api|components|containers|mocks/**`,
  `app/src/app/routes*.ts`, `migration/change-requests|metrics|clarify/**`, `migration/board.md`, and the page and
  `migration/screens` folders of every route in progress (decision build, status not built, verified, todo or skip).
  `**` crosses folders. `*` stays in one folder.
- `route.py` now shows the first 5 flagged files in the scope guard problem, without the double prefix.

## Manual `startCommit` values

- NotificationDetails: `62406f26` (HEAD at its start, 2026-10-28 23:52:56).
- Bookmarks, OneSchoolGlobalCarousel, PassportScan: `62406f26`, not `04e00b21`. They started at 00:09:10.
  `04e00b21` came at 00:15:14 and changed only `migration/clarify/**`, which is allowed. The result is the same.
- OrbitAdminMilestones, OrbitAdminMilestoneDetail: `04e00b21` (started 08:37:49).

## Tests

`python3 -m unittest discover -s .claude/skills/outsystems-screen-spec/scripts -p 'test_route_paths.py'`:
18 tests, all OK. They cover the file gate, the mock scan (page, container, `mocks/modules`, platform `mocks.ts`,
tests do not count), the fingerprint (api, platform and 8 other shared folders change it; another page does not),
reset (only `pages/<S>`), checkpoint and restore, old-layout `finished.json`, the allow list, the glob rules,
`startCommit` and the base fallback in a temp git repo, `{screen}`, and the project `stack.json` rules.

## build_gates for NotificationDetails (read-only call, no review question)

7 problems:
1. `route-spec.md` changed or new answers since spec-done (run `spec-done` again).
2. to 4. Parity `default`, `loading`, `offline`: reports are stale (new fingerprint, and code changed).
5. Consistency `[NO-BROWSER-STORAGE] NotificationDetails.test.tsx:24` (`sessionStorage.clear()` in a test).
6. Consistency `[package] adaptivecards is not in the allow-list` (all routes have it).
7. Scope guard: 26 files outside the scope since `62406f26`. These are skill scripts and docs (this work),
   `.claude/settings.json`, the finished page `pages/Notifications/**` (7 files, the entry to the new screen),
   `migration/screens/Notifications/parity/*`, `migration/knowledge/runtime-sources.md`,
   `migration/runtime-sources/OrbitPassportScanC2.*`, `migration/screens/_capture-summary.json`, `migration/survey/*`,
   `migration/stack.json`, `migration/AGENTS.md`, `migration/tools/contract_gen.py`.

Passed: `npm run arch` (exit 0), the page file, mock coverage (0 missing, 93 handler sources), flags, stack.

## Consistency of 3 finished pages (not fixed)

| Page | Problems | Kind |
|---|---|---|
| HouseholdDetails | 1 | package `adaptivecards` |
| Notes | 4 | NO-BROWSER-STORAGE and NO-WIRE-IN-COMPONENTS in `Notes.test.tsx`; NO-RAW-FETCH `hooks/useNotes.ts:96` (`flow.fetch(`); package |
| MessageDetail | 7 | NO-WIRE in a test; 3 NO-INLINE-COLOR in `components/NotificationDetailBlock.tsx`; 2 NO-RAW-FETCH (`flow.fetch(`); package |

## Limits

- Checkpoint, restore and reset copy or delete only `pages/<S>`. Route changes in `api/`, `components/`,
  `containers/`, `mocks/` and the route table are not saved or rolled back. Git and the scope guard show them.
- Old-layout `finished.json` files cannot detect later changes until a route is finished again.
- The new fingerprint makes every parity report made before 2026-10-29 stale. Finished routes keep `built`.
  A route that goes to `ready` again must run `route.py parity` again. A change in any shared folder now makes
  the reports of every route stale.
- The scope guard flags every out-of-scope commit after `startCommit`, also commits by other agents on the branch.
- `--allow` patterns: `*` no longer crosses folders. Use `**`.
- `migration/architecture.md` shows the old rules until `stack.py` renders it again.
- Old paths stay in `SKILL.md`, `references/route-loop.md`, `end-to-end.md`, `architecture-and-stack.md`,
  `recorded-mocks.md`, `scaffold_react_app.py` and the layout item text in `stack.py`. Route agents do not read them.

## Questions

1. Forbidden rules after the refactor. NO-RAW-FETCH matches `flow.fetch(` (page template rule R1).
   NO-BROWSER-STORAGE and NO-WIRE-IN-COMPONENTS match test files.
   (a) Skip `*.test.*` and `*.stories.*` and change the regex to `(?<![.\w])fetch\s*\(`. (b) Keep the rules and let
   the user accept each hit. (c) Keep as is. Recommendation: (a).
2. `adaptivecards` is in `app/package.json` but not in `stack.json`. Every route fails `[package]`.
   (a) Add the pinned version to `stack.json` if an accepted ADR covers it. (b) The user decides an ADR first.
   Recommendation: (a) after a check of the ADR log.
3. Scope guard on a shared branch. (a) Keep it strict and finish with `--no-scope-guard` after the user reads the
   list. (b) Also allow pipeline outputs: `migration/knowledge/**`, `migration/runtime-sources/**`,
   `migration/survey/**`, `migration/screens/_capture-summary.json`. Keep skill scripts, platform and finished pages
   flagged. (c) Count only commits that name the route. Recommendation: (b). The Notifications change goes through a
   change request or a user-approved `--allow`.
4. Mock scan. (a) Source files only (current). (b) Every file, also JSON fixtures and tests. Recommendation: (a).
5. Old paths in the other skill docs and the scaffold. (a) Update them (docs only). (b) Leave them.
   Recommendation: (a).
