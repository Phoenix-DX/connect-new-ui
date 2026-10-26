## Result
status: pass
summary: Moved the 67 src/shared/ rows of move-map.csv with phase P7 (not shared/osui/*; 3 rows left, see Deviations) to components/ui/ and components/ui/Dialog/ (517 files) with move.ts and a file-list CSV. Renamed 29 components and Props types to the target names, added 67 @origin tags, importers follow. typecheck, lint (0 errors), full unit suite (639 files, 3925 tests) and arch_baseline check pass; 3 rows added to arch-baseline.csv (owner P7).

## Files changed
517 files under app/src/shared/{Connect2_LegacyShared,NavigationHandler(none),ReactiveHtmlSanitizer,UBTConnect,UBTConnect_Utils,UBTConnectLibrary}/ -> app/src/components/ui/<TargetName>/ as in move-map.csv (colocated tests, stories, README, __captures__, index.ts move with them)
Importers (import lines and renamed identifiers), several hundred files in pages/, components/, containers/, shared/, platform/
app/src/components/ui/Dialog/index.ts (merged barrel of ChoiceDialog and NavigationDialog; see Deviations)
app/src/components/ui/Dialog/NavigationDialog.index.ts (moved there by the tool, then deleted)
app/src/components/assemble/AssembleSummarySkeleton/AssembleSummarySkeleton.test.tsx (import.meta.glob path to the moved ResultItemCard captures)
Prettier re-wrap after the renames in 11 files (ActionButton.test, ColumnsThree, ColumnsTwo.stories, ConnectBottomSheet.test, ContextMenuItem, EntityLazyImage.test, LegacyPopupMenu.test, ResultItemMedia.test, SvgBackgroundLogin, PendingPoliciesForm, BookmarkNoteAddEdit)
app/docs/refactor/arch-baseline.csv (+3 rows)
Scratch inputs (not in the repo): scratchpad p70/{files,rn,org}.csv
migration/tools/refactor/ unchanged (rename-exports-g1-shared.ts and add-origin-g1-shared.py reused)

## Commands run
node migration/tools/refactor/move.ts --map p70/files.csv --phase P7 -> moved 517 files; its typecheck step failed as expected (old names), fixed by the next step
rename-exports-g1-shared.ts p70/rn.csv -> 29 files renamed (no "skip" lines)
add-origin-g1-shared.py p70/org.csv -> 67 tags
npm --prefix app run typecheck -> exit 0
cd app && npx eslint src -> 0 errors, 79 warnings (78 boundary warnings, all in the baseline)
cd app && npx vitest run -> 639 files, 3925 tests pass (1 failed before the glob fix)
prettier --check on the changed ts/tsx -> clean
arch_baseline.py check --move-step P7 --base HEAD -> 78 warnings; before the rows: 1 ADD, 2 NEW (see Deviations); after: 78 rows, 0 new, 0 gone; arch_baseline.py check -> 0 new, 0 gone; arch_baseline_selfcheck.py ok
rf.py diffcheck --move -> FAIL. The worktree index holds the G5/G6/P6-end steps, so diffcheck against HEAD lists all their lines too. I checked this step on its own with a script (HEAD old file vs new file, and index vs working tree for other files, with the renamed identifiers mapped): all differences are import lines, @origin tags, renamed identifiers, or the lines below.

Lines of this step that are not a move (NOT A MOVE):
- Prettier re-wraps: a renamed identifier made a JSX tag or signature shorter or longer, so prettier re-flowed it (11 files, listed above; and the ColumnsThree/ContextMenuItem/SvgBackgroundLogin signatures and the *.stories `Meta<typeof X>` lines)
- AssembleSummarySkeleton.test.tsx: the glob path now '../../ui/ResultItemCard/__captures__/*.html' (path change after the move; prettier collapsed the call)
- components/ui/Dialog/index.ts: `export * from './ChoiceDialog'; export * from './NavigationDialog';` (two barrels with the same target file; see Deviations)
- ChoiceDialog.README.md / NavigationDialog.README.md: moved with these two names because both rows target the same folder (a rename, content unchanged)
- importers of Dialog_Navigation (ContactEmailForm, ProfilePage, ContactUsDetailsPage): import line now '@/components/ui/Dialog'
- arch-baseline.csv: +3 rows
- files shown as "A" with index.ts (git sees rename + edit when the one-line barrel changed its file name)

## Deviations from the brief
- 3 of the 70 P7 rows (not osui) were not moved: Connect2_LegacyShared/MultiResolutionImageLoader (status delete, no target; needs knip confirmation), UBTConnect_Utils/Dialog_AccessRestrictedAction_Legacy (delete, merge into the platform dialog, the DOM must stay) and NavigationHandler/NavigationConfirmationDialog (hook+component, target is the same file as Dialog_Navigation; splitting its trigger into platform/navigation is a change). They are deletes or merges, so not a pure move: P7-2 (Dialogs) or a later cleanup should take them. They stay in src/shared/ and still pass.
- Dialog_CustomChoice and Dialog_Navigation both target components/ui/Dialog/: the READMEs got the names ChoiceDialog.README.md and NavigationDialog.README.md, and the two index.ts files were merged into one Dialog/index.ts (hand edit, the second barrel deleted). P7-2 will rewrite this folder.
- arch_baseline.py --move-step cannot match files in a target folder that two rows share (Dialog/): old_path_of takes the first row of the folder, which was the skipped NavigationConfirmationDialog row, so ChoiceDialog.tsx/.test.tsx showed as NEW though the old file had the same import. I added both with the owner P7 by hand (W15 intent: moved debt). The tool is unchanged.
- Owners: ImageLoadErrorHandler (platform/log), ChoiceDialog and its test (platform/feedback/dialogs) -> P7 (P7-1/P7-2 move these dialogs into ui props or platform).
- diffcheck --move reports the lines of the earlier steps in the index as well; see the Commands run section.
- Dialog_Navigation's index barrel was moved to Dialog/NavigationDialog.index.ts by the tool, then deleted and merged (see above).

## Questions for the user
none
