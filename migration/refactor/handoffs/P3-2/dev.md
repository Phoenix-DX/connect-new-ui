## Result
status: pass
summary: Fix loop 1, decision Q11 option (b). The 8 UBTConnectLibrary stories again render the real blocks and are
equal to HEAD. `StandInBlock` and its README text are gone. `.dependency-cruiser.cjs` keeps story and test files out of
the cycle rule and every folder rule; production code keeps all rules, including the 2 new UBTConnect direction rules.
depcruise: 0 cycles in the three folders, and only the known platform/session error. All checks pass.

## Files changed
app/.dependency-cruiser.cjs

This is the net change against HEAD. The round-1 changes to the 8 stories and 2 READMEs were reversed with the Edit
tool, and `git diff --quiet HEAD -- app/src/shared` passes. `app/src/shared/test/StandInBlock.tsx` was deleted; it was
an untracked file that I created in round 1. No `git mv`, `git add`, checkout or restore was used.

## Commands run
`git diff --quiet HEAD -- app/src/shared` → exit 0 (the stories and READMEs equal HEAD; no StandInBlock in `app/`)
`npm run arch` → exit 1, "211 dependency violations (1 errors, 210 warnings)". The only error is the baseline cycle
`platform/session/cachedUserInfo.ts ↔ mockUser.ts`. Per rule: rule-4 1, rule-5 1, rule-8 7, rule-9 201,
`ubtconnect-library-no-import-of-utils-or-ubtconnect` 0, `ubtconnect-utils-no-import-of-ubtconnect` 0. The P3-1
commit had 239 (1 error, 238 warnings). There are 0 new warnings. 28 warnings are gone, all from story or test files
(6 for rule-5, e.g. `OSList.stories.tsx`, `OSRadioGroup.test.tsx`; 22 for rule-9, e.g. `mocks/contract.test.ts`, the
`os-assets` imports of stories).
Folder graph of the three modules from the depcruise JSON (inline node count, no script kept):
- Production files: UBTConnect→Library 128, UBTConnect→Utils 37, Utils→Library 43, and no reverse edge. Folders in a
  cycle: 0.
- All files: the reverse edges of the 8 stories are back (Library→Utils 7, Library→UBTConnect 13). The rules now
  exclude them on purpose.
- Module-level circular edges in the three folders: 0.
`npm --prefix app run typecheck` → exit 0
`npx vitest run src/shared/UBTConnectLibrary src/shared/UBTConnect_Utils src/shared/UBTConnect` → 598 tests passed.
These include the capture tests of the 8 stories, which render the real blocks again.
`npx eslint .dependency-cruiser.cjs` → exit 0
`npm run format:check` (whole app) → "All matched files use Prettier code style!"
`build-storybook` was not run: the story tests cover the rendering, and the story files equal HEAD.

## Deviations from the brief
- Decision Q11 replaces the "Do" of the plan. No static entity, structure or action was moved: the cycle was only in
  the stories (see round 1 below).
- The exclusion covers story and test files (`\.(stories|test)\.tsx?$`) in every rule of the config:
  - `no-circular`: `from.pathNot` and `to.viaOnly.pathNot`. Only cycles made of production modules are reported.
  - rules 3 to 9, `pages-imported-by-own-route-only`, `shared-no-import-of-screens-or-app` and the 2 P3-2 rules:
    `from.pathNot`.
  - The reason is a comment above the `STORY_OR_TEST` constant.
- Side effect: 28 existing warnings from stories and tests are no longer reported (listed under "Commands run").
- The documenter must record the exclusion in ADR-15 or the architecture overview, together with the 2 new rules.
- Out of scope (unchanged from round 1): folder paths that pass through `platform/` (Phase 4) and `components/layout`
  (Phase 7).

## Questions for the user
none

## Fix loop 1
Decision Q11 option (b) (brief "Decisions for this step"):
1. I reversed my round-1 edits in the 8 stories (`ImageCard_LazyLoading`, `Layout_DetailPage`, `Layout_HomePage`,
   `Layout_LoginFlow`, `Layout_MainPages`, `Layout_MainPages_FixedTitle`, `Member_ListItem`, `NonMember_ListItem`). They
   import the real BottomBarMenu, CommonUI_InsideLayout, PIN wrappers, OfflineDataSyncEvents, CarouselTag and
   UBT_LazyImage again, with their session decorators. The files equal HEAD.
2. I reversed the README text about `StandInBlock` in `Layout_HomePage/README.md` and `Layout_LoginFlow/README.md`
   (equal to HEAD). I deleted `src/shared/test/StandInBlock.tsx`.
3. `app/.dependency-cruiser.cjs`:
   - New constant `STORY_OR_TEST`, with the reason (Q11): stories render the real blocks of the captured screen, tests
     use the helpers they need, and Storybook is a review tool.
   - Every rule applies to non-story, non-test files only.
   - The 2 P3-2 direction rules stay for production code. Their comment no longer mentions StandInBlock.

## Round 1 (superseded by fix loop 1)
In round 1 I found that the folder cycle came only from 20 imports in 8 UBTConnectLibrary stories. I replaced those
blocks with a new story helper, `StandInBlock`, and added the 2 direction rules for all files. The stories then showed
"Not captured" markers. Q11 chose option (b), so I reverted this.
