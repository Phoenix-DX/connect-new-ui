## Result
status: pass
summary: CommunityBusinessDetails_CoomingSoon is now a page with no hook: the screen is static, with no lifecycle event, no variable and no call. The input reader and the input type moved to `inputs.ts`. `api.ts`, `types.ts` and the empty `mocks.ts` are deleted, and a page test was added. No shared block changed. A temporary old-vs-new check gave the same DOM, URL, calls and CommonUI presence. Typecheck, eslint, prettier, the full suite (2676 tests) and `arch_baseline.py check` (exit 0) pass. HomeFeed and Login did not grow.

## Files changed
app/src/pages/CommunityBusinessDetails_CoomingSoon/CommunityBusinessDetails_CoomingSoonPage.tsx (rewritten: imports `./inputs`; the same render; `@origin` in the page JSDoc; no inline compiled-line references)
app/src/pages/CommunityBusinessDetails_CoomingSoon/inputs.ts (new: `CommunityBusinessDetails_CoomingSoonInputs`, from types.ts, and `readCommunityBusinessDetailsInputs`, from api.ts; `@origin`)
app/src/pages/CommunityBusinessDetails_CoomingSoon/CommunityBusinessDetails_CoomingSoon.test.tsx (new, 5 tests: layout, StaticInput and BlankSlate in the app frame, no CommonUI, no call; a click on StaticInput does nothing; the same markup with and without the input; the input reader and its "0" default)
app/src/pages/CommunityBusinessDetails_CoomingSoon/api.ts (deleted)
app/src/pages/CommunityBusinessDetails_CoomingSoon/types.ts (deleted)
app/src/pages/CommunityBusinessDetails_CoomingSoon/mocks.ts (deleted: an empty handler list)
migration/refactor/handoffs/P6-G4-B-CommunityBusinessDetails_CoomingSoon/dev.md (this report)

Not changed: `components/layout/MainLayout`, `shared/osui/BlankSlate` and `shared/UBTConnectLibrary/StaticInput` (both are P7 rows of move-map.csv), `platform/feedback/dialogs`, `app/docs/refactor/arch-baseline.csv` (this page had no rows), and the other routes of G4.

## Commands run
`npm --prefix app run typecheck` → exit 0
`cd app && npx vitest run src/pages/CommunityBusinessDetails_CoomingSoon` → exit 0, 1 file, 5 tests
`cd app && npx vitest run src/pages/CommunityBusinessDetails_CoomingSoon src/mocks/handlers.test.ts src/app src/components/layout/MainLayout src/shared/osui/BlankSlate src/shared/UBTConnectLibrary/StaticInput` → exit 0, 10 files, 49 tests
`cd app && npx vitest run` (full suite) → exit 0, 488 files, 2676 tests
`cd app && npx eslint src/pages/CommunityBusinessDetails_CoomingSoon` → exit 0, 0 errors, 0 warnings
`cd app && npx prettier --check src/pages/CommunityBusinessDetails_CoomingSoon` → exit 0 (after one line wrap in inputs.ts)
`python3 migration/tools/refactor/arch_baseline.py check` → exit 0, "85 warnings, 85 baseline rows, 0 new, 0 gone"
`cd app && npx depcruise src --config .dependency-cruiser.cjs --output-type err` → no line for src/pages/CommunityBusinessDetails_CoomingSoon
`npm --prefix app run build` → exit 0; `node app/build/bundle-report.mjs HomeFeed Login CommunityBusinessDetails_CoomingSoon` → HomeFeed 750.70 / 244.15 kB gzip (40 chunks), Login 600.63 / 184.17, CommunityBusinessDetails_CoomingSoon 578.18 / 175.09 (6 chunks). The base (HEAD 66ee7c6c, numbers from its commit message) is HomeFeed 244.17 and Login 184.18, so the change is −0.02 and −0.01 kB (W21 holds).
Temporary old-vs-new test (`app/src/__tmp_parity/`: a copy of the old page, api.ts, types.ts and mocks.ts; deleted after the run) → 1 file, 6 tests, all equal. Scenarios: no input, `In_CommunityBusinessId=4210` and an empty input, each without and with a click on StaticInput. Equal: innerHTML on the first render and after the click, the URL, the calls (none) and the CommonUI presence that `useIsCommonUiAbsent` reads.
Mutation check of the CommonUI assertion (temporary, deleted): a copy of the new page without `useNoCommonUi` makes the probe read "false", so the page test fails when the call is removed.

## Deviations from the brief
1. Workspace: as the master asked (prefetch mode), I worked in the git worktree on branch `rf/prefetch-P6-G4-B-CommunityBusinessDetails_CoomingSoon-66ee7c6c`, not on `refactor/architecture`. I staged nothing. I deleted the 3 files with `rm`, so the deletions are not staged. The new files are untracked.
2. Shape: page only, with no hook, no container and no component of its own. The screen has no lifecycle event, no variable and no call. Step B items 1, 2 and 4 have nothing to move. The `api.ts` held only the input reader, so it went to `inputs.ts` (page-template.md, "Folders").
3. The page keeps `useSearchParams` and the call of the input reader, whose result is not used, as before. The original sets In_CommunityBusinessId from the URL and never reads it. The test shows that the markup is the same with or without the input.
4. The page test reads the CommonUI presence through a small probe component that calls `useIsCommonUiAbsent` from the `@/platform/feedback/dialogs` barrel. `isCommonUiAbsentNow` is not in the barrel, and a deep import is not needed.
5. Edits outside the Edit and Write tools: one inline Python string replacement on the new test file (to switch to the probe), and the temporary files of the old-vs-new check (made with `cp`, a heredoc and `grep -v | sed` into new files, all deleted). No `sed -i`. The final test file was checked with Read, eslint and prettier.
6. Rule 9: the rewritten page and the new inputs.ts have no compiled-line references.
7. For the documenter:
   - move-map row 274 (`src/screens/CommunityBusinessDetails_CoomingSoon/index.tsx`): the shape is page only (no hook), inputs in `pages/CommunityBusinessDetails_CoomingSoon/inputs.ts` (types.ts folded in). api.ts, types.ts and mocks.ts are deleted. The old note "the folder moves with it (api.ts, types.ts, mocks.ts, components/)" is out of date.
   - The CHANGELOG entry.

## Questions for the user
none
