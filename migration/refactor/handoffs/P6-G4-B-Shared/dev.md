## Result
status: pass
summary: Moved the 38 src/shared/ rows of P6-G4 (293 files) with move.ts (file-list CSV), renamed component and Props to the target names (31 files), added 38 @origin tags, rewrote 202 imports in 148 files. 38 new Rule 4 warnings added as baseline rows (2 CountryList, 10 HouseholdCarousel, 1 SupperMeeting_Carousel, 7 SupperMeeting_Details, 18 P7).

## Files changed
293 files under app/src/shared/{Connect2_Assemble_MUI,Connect2_LegacyShared,Leaflet,UBTConnect_Utils,UBTConnect,UBTConnectLibrary}/ -> app/src/components/{assemble,contact,directory,household,layout,note}/ and app/src/containers/{NoteListActions,EntityDetailsActions}/, as in move-map.csv (colocated tests, stories, README, mocks.ts, __captures__ move with them)
~148 importers (import lines and renamed identifiers; two vi.mock factory keys: app/src/components/directory/EntitiesCarouselElement/EntitiesCarouselElement.test.tsx, app/src/components/directory/CarouselSupperMeetingDetails/CarouselSupperMeetingDetails.test.tsx)
app/docs/refactor/arch-baseline.csv (+38 rows)
Prettier re-format after the renames (long lines): AssembleLocalityFilter.test.tsx, DirectoryLegendSheet.tsx, SupperMeetingDetails.tsx, BrowseSection.tsx, NoteList.stories.tsx, pages/Locality_Details/components/Locality_Subdivisions.tsx
migration/tools/refactor/ unchanged (rename-exports-g1-shared.ts and add-origin-g1-shared.py reused; helper g4s-gen.py in the scratchpad)

## Commands run
node migration/tools/refactor/move.ts --map <file-list csv> --phase P6-G4 -> moved 293 files, 202 imports, typecheck ok
rename-exports-g1-shared.ts -> 31 files renamed (Statistics_ListItem already had the target name); add-origin-g1-shared.py -> 38 tags
npm --prefix app run typecheck -> exit 0
cd app && npx vitest run -> 432 files, 2316 tests pass (after the 2 vi.mock key fixes; 2 failed before)
cd app && npx eslint src -> 0 errors, 118 warnings (all in the baseline); prettier --check src clean
arch_baseline.py check --move-step P6-G4 --base ea95154 (before the rows) -> 33 ADD, 5 NEW; after appending all 38: 116 warnings, 116 rows, 0 new, 0 gone
rf.py diffcheck --move -> FAIL only on base diffs (G2 ContactByEmail* page steps, UBTConnect/lib/actions + unsupportedVersion); lines of this step that are not a move: the prettier line joins in NoteList.stories.tsx (meta line), identifier renames in two test files (renames 603, origin tags 78); arch-baseline.csv, add-origin-g4.py, UnsupportedVersionWrapper/README.md are listed other files (the last two are base/index diffs, not from this step)

## Deviations from the brief
- Mocks: six moved blocks have a mocks.ts: LocalityListDetail, SupperMeetingDetails, SupperMeetingHouseholdList, NotesSheet (all under components/, picked up by the existing ../components/**/mocks.ts glob, W17), NoteListActions and EntityDetailsActions (under containers/, picked up by ../containers/*/mocks.ts, which comes before shared). The order shared -> components changes for the four component blocks only relative to other shared mocks; handlers.ts is not changed. I did not compare the handler list; the full suite (incl. handlers.test.ts) passes.
- 5 of the 38 baseline rows are not covered by the W15 guard (arch_baseline.py reports them NEW, not ADD): the moved file imports a module that moves in this same step (the old file imported the old shared path): SupperMeetingDetails.tsx -> containers/EntityDetailsActions/EntityDetailsActionsContainer; NotesSheet.{tsx,stories,test,mocks} -> containers/NoteListActions[...]. Same debt, new path; owner P7 (NotesSheet) and P6-G4-B-SupperMeeting_Details. I appended them so the baseline is complete; the guard in arch_baseline.py could resolve through the move map if you want it stricter.
- vi.mock factory keys missed by the rename fixed by hand (identifiers only). A comment that my replace touched in EntitiesCarouselElement.test.tsx was restored.
- Owners: Carousel/Entities* -> P6-G4-B-HouseholdCarousel; CarouselSupperMeetingDetails -> P6-G4-B-SupperMeeting_Carousel; DirectoryLegendSheet -> P6-G4-B-CountryList; SupperMeetingDetails/HouseholdList -> P6-G4-B-SupperMeeting_Details; AddressPopupWrapper, Assemble filters (G5 users), MainLayout, NotesSheet -> P7.

## Questions for the user
none

## Tool fix (master request)
migration/tools/refactor/arch_baseline.py: in `--move-step` mode an old import of a module that also moves in the same phase (src/shared/ row of move-map.csv) now counts as the same module under its new path (new functions `moved_modules`, `translate`; docstring updated). Self-check: migration/tools/refactor/arch_baseline_selfcheck.py (same-step moved import accepted, index/mocks/stories forms, unrelated import not accepted) -> ok.
`check --move-step P6-G4 --base ea95154` against the baseline without the 38 rows: 38 ADD, 0 NEW. The 38 rows are restored (116 rows, 0 new, 0 gone). The 5 rows in "Deviations" are now ADD, so that deviation is resolved.
