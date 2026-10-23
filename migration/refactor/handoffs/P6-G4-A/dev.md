## Result
status: pass
summary: Moved the 13 G4 routes from screens/<R> to pages/<R> with move.ts (one run per route), renamed index.tsx to <R>Page.tsx, added @origin tags. HouseholdDetails left alone. Typecheck, vitest (src/pages, 51 files, 252 tests) and eslint pass.

## Files changed
app/src/screens/{BrowseCountries,BrowseDirectory,CountryList,CountryDetails,HouseholdCarousel,Household_Relations,Locality_Details,OneSchoolGlobalDetails,Photobook,SupperMeeting_Carousel,SupperMeeting_Details,CommunityBusinessDetails_CoomingSoon,Assemble_BrowseByCountry}/** -> app/src/pages/<R>/** (git mv; index.tsx -> <R>Page.tsx)
app/src/pages/<R>/<R>Page.tsx (13 files): added one `@origin` line
app/src/pages/Assemble_BrowseByCountry/Assemble_BrowseByCountry.test.tsx: import './index' -> './Assemble_BrowseByCountryPage'
(codemod rewrote import lines in other files: 31 in total)
migration/tools/refactor/add-origin-g4.py (new)

## Commands run
node migration/tools/refactor/move.ts --from ... --to ... --no-typecheck (x13) → ok
npm --prefix app run typecheck → exit 0
cd app && npx vitest run src/pages → 51 files, 252 tests pass
cd app && npx eslint src/pages → no output
rf.py diffcheck --move → FAIL only on base diffs (shared/UBTConnect/lib/actions.ts, unsupportedVersion.*, and 2 G2 ContactByEmailOrbit* page comment lines); no non-move line from this step

## Deviations from the brief
- index.tsx renamed to <R>Page.tsx (as in G1-A..G3-A); one test import line changed for that.
- @origin flow names taken from migration notes (Directory_Locality, Directory_Household, Directory_OneSchoolGlobal, Directory_Photobook, Directory_SupperMeetings, zDEV_Directory_CommunityBusinessBlocks, Legacy_AssembleFlow).

## Questions for the user
none
