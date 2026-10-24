## Result
status: pass
summary: Moved the 25 src/shared/ rows of P6-G5 (163 files) with move.ts (file-list CSV), renamed component and Props to the target names (21 files), added 25 @origin tags, rewrote 155 imports. 8 new Rule 4 warnings added as baseline rows (6 owner P6-G5-B-AssembleDetail, 2 P7).

## Files changed
163 files under app/src/shared/{Connect2_Assemble_MUI,Connect2_LegacyShared,Connect2_OrbitMobile_MUI}/ -> app/src/components/{assemble,bookmark,contact,orbit}/ and app/src/pages/EventBooklet/components/{OrbitNoResults,FooterWithActions}/, as in move-map.csv (colocated tests, stories, README, __captures__, fixtures move with them). No block had a mocks.ts.
Importers (import lines and renamed identifiers), about 115 files in pages/, screens/, components/, shared/
app/src/components/assemble/AssembleSummarySkeleton/AssembleSummarySkeleton.test.tsx (relative import.meta.glob path to the still-shared NC_Result_Item__Card captures, one more ../ level and shared/; prettier wrapped the line)
Prettier re-format after the renames: AssembleEventDetail_Localities.tsx, ScreenBlock_GuestArrangements.tsx, ScreenBlock_Event_Email_V2.tsx, ScreenBlock_AccommodationHost.tsx
app/docs/refactor/arch-baseline.csv (+8 rows)
migration/tools/refactor/ unchanged (rename-exports-g1-shared.ts, add-origin-g1-shared.py reused; helper g5s-gen.py in the scratchpad)

## Commands run
node migration/tools/refactor/move.ts --map <file-list csv> --phase P6-G5 -> moved 163 files, 155 imports, typecheck ok
rename-exports-g1-shared.ts -> 21 files (other 4 already had the target name); add-origin-g1-shared.py -> 25 tags (all present)
npm --prefix app run typecheck -> exit 0
cd app && npx vitest run -> 432 files, 2316 tests pass (after the glob path fix; 1 failed before)
cd app && npx eslint src -> 0 errors, 126 warnings (all in the baseline); prettier --check on changed files clean
arch_baseline.py check --move-step P6-G5 --base 7c722883 -> before rows: 8 ADD, 0 NEW; after: 124 warnings, 124 rows, 0 new, 0 gone. arch_baseline_selfcheck.py ok.
rf.py diffcheck --move -> FAIL only on base diffs (UBTConnect/lib actions + unsupportedVersion, NoteList.stories/NoteListActionsContainer.test of G4) plus the lines below. Renames 911, origin tags 119.

Lines of this step that are not a move:
- AssembleSummarySkeleton.test.tsx: the glob line rewrapped (path change, see above)
- components/orbit/OrbitEventCard/index.ts: shown as "A" (git sees a rename+edit); content is the two export lines with the new file name
- other files listed: arch-baseline.csv (+8 rows)

## Deviations from the brief
- The base commit needed no translation extension: no row showed NEW because of a G3/G4 shared move. The tool is unchanged.
- The CSV written by csv.writer has CRLF; rename-exports-g1-shared.ts splits on \n and silently renamed only one file; I re-ran it on a CR-free copy. No source change.
- Owners: AssembleSummaryCard (platform feedback/navigation imports), VirtualMeetingUrl (dialogs) -> P6-G5-B-AssembleDetail; ItemOptionsMenu (platform/flags, also used by BookmarksByGroup in G6) -> P7.
- Empty old shared directories removed (42).

## Questions for the user
none
