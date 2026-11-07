## Result
status: pass
summary: The only differences left were in the mock data. I updated the mock scenario `captured` in `app/src/pages/Bookmarks/mocks.ts` to match the re-capture of 2026-11-07. The pills are now in the order of the TST answer (Supper Meetings is 2nd, OneSchool Global and Orbit are last). The 3 cards are now Household, Household and Supper Meeting (icon `connect-icon-calendar_fill`), with fictional texts of the captured lengths. Parity is clean in every state (default, loading, offline). The new header blocks, the FilterSheet labels and the TagList ids already matched the capture, so no shared block changed.

## Files changed
app/src/pages/Bookmarks/mocks.ts

## Commands run
lsof cwd of the 5173 server → /Users/khaitruong/Projects/connect-new/app; curl HomeFeed → 200
python3 tools/pipeline/route.py parity Bookmarks --app http://localhost:5173 → exit 0, "parity clean"
- default: structure 0, class 0, attr 0, text 0, style 0, pseudo 0, layout 0, position 0, pixel 0, call 0; pixels 0.03%, worst tile 2.2%; exempted: CAPTURE-LINK-HREF-CURSOR-HOMEFEED×54, CAPTURE-BADGE-MASKED-TEXT-HOMEFEED×2, ignoreSubtrees×1, SLIDER-APPEAR-TIMING×1
- loading: structure 0, class 0, attr 0, text 0, style 0, pseudo 0, layout 0, position 0, pixel 0, call 0; pixels 0.00%, worst tile 0.0%; exempted: ignoreSubtrees×1
- offline: structure 0, class 0, attr 0, text 0, style 0, pseudo 0, layout 0, position 0, pixel 0, call 0; pixels 0.03%, worst tile 2.2%; exempted: CAPTURE-LINK-HREF-CURSOR-HOMEFEED×54, CAPTURE-BADGE-MASKED-TEXT-HOMEFEED×2, CAPTURE-SKELETON-SHIMMER-PHASE×77, ignoreSubtrees×1, SLIDER-APPEAR-TIMING×1
npm --prefix app run typecheck → exit 0
cd app && npx vitest run src/pages/Bookmarks → 2 files, 12 tests passed
cd app && npx eslint src/pages/Bookmarks/mocks.ts → exit 0
npm --prefix app run arch → no dependency violations (139 known, ignored)

## Deviations from the brief
none. Notes:
- The fresh parity report (before the fix) had 31 rows in state default and none in loading or offline. Every row came from the mock data: the pill order (pills 16, 22 and 23), the titles and subtitles of card 1 (empty in the old mock, so the build drew an extra `::after`), and the kind of card 2 (OneSchool Global with an SVG icon in the old mock, Supper Meeting with calendar_fill in the capture).
- The pill order is the order of the server answer (Get_BookmarkPills_ByBookmarkCategoryIds). GetBookmarks_Pills only puts "All" first and does not sort, so only the mock changed.
- The Supper Meeting card has the fictional item id 5204, the same id as the Supper Meeting card of the `real` scenario. Its click opens SupperMeeting_Details(In_SubdivsionId=5204).
- I did not change FilterSheet or HorizontalFilterTagList (granted). No Bookmarks parity row needed a change there.
- For the documenter: lines 83-84 of `migration/screens/Bookmarks/route-spec.md` still give the old card kinds ("2 Household, 1 OneSchool Global"). The new capture shows 2 Household and 1 Supper Meeting. I did not edit the spec, because a spec edit needs `route.py spec-done` again.

## Questions for the user
none
