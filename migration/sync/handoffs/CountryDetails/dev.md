## Result
status: pass
summary: The shared FilterSheet footer buttons now read "Clear" and "Apply", as in the compiled TST block (p:UBTConnect.App_CommonBlocks_Filter.FilterSheet.mvc.js:973,1023) and the fresh capture. The NO-WIRE-IN-COMPONENTS hit in filterSheetActions.ts now uses osList. The component props did not change. CountryDetails parity is clean in every state (default, loading, offline: 0 unexempted differences).

## Files changed
app/src/components/filter/FilterSheet/FilterSheet.tsx
app/src/components/filter/FilterSheet/FilterSheet.test.tsx
app/src/components/filter/FilterSheet/filterSheetActions.ts
app/src/pages/CountryDetails/CountryDetails.test.tsx
app/src/pages/CountryDetails/mocks.ts
migration/screens/CountryDetails/parity/* (written by route.py parity)
migration/sync/handoffs/CountryDetails/dev.md

## Commands run
diff of the live and @27def597 / @5ef36091 copies of FilterSheet.mvc.js and FilterSheet_Icon_Label.mvc.js → identical; the labels "Clear" (:973) and "Apply" (:1023) are in both
npm --prefix app run typecheck → exit 2, 1 error outside this item: src/pages/CountryList/CountryListPage.tsx(23,31) TS2554 (useCommunityPopulationQuery() expects 1 argument; it comes from the uncommitted changes to components/feed/CommunityPopulation of another item; this item did not touch it)
npx vitest run src/components/filter/FilterSheet src/pages/CountryDetails → 6 files, 42 tests passed
npx eslint (the 5 changed code files) → exit 0
npm --prefix app run arch → no dependency violations (139 known ignored)
npx vitest run src/pages/Notes src/pages/Search src/pages/Bookmarks src/pages/Updates_SingleList → 1 failed / 142 passed: Notes.test.tsx:114 looks for 'Apply filters' (the old label; the Notes item must update it)
python3 tools/pipeline/consistency_check.py --screen CountryDetails → OK
python3 tools/pipeline/route.py parity CountryDetails --app http://localhost:5173 →
  default: structure 0, class 0, attr 0, text 0, style 0, pseudo 0, layout 0, position 0, pixel 0, call 0; pixels 0.05%
  loading: all 0; pixels 0.00%
  offline: all 0; pixels 0.02%
  CountryDetails: parity clean

## Deviations from the brief
- I made the first label edits (FilterSheet.tsx, FilterSheet.test.tsx, CountryDetails.test.tsx: one string each) with a short Python replace and not with the Edit tool. The diff contains only those three string changes (see git diff). I made all later edits with the Edit tool.
- I did not change FilterSheet.stories.tsx because it contains no label text. I did not change app/src/components/ui/Button/Button.stories.tsx and its __captures__ ("Clear filters"/"Apply filters" as sample children) because that path is not in the allowed paths and it is only story text.
- Notes.test.tsx:114 ('Apply filters') now fails. It is outside the allowed paths, so the Notes item must change it to 'Apply'.

## Questions for the user
none
