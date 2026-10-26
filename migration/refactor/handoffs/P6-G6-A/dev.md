tree: 24e716d844d33b6661afe5223eece7c9cb94493b

## Result
status: pass
summary: Moved the 7 G6 routes from screens/<R> to pages/<R> with move.ts (one run per route), renamed index.tsx to <R>Page.tsx, added @origin tags. Typecheck, full vitest (432 files, 2316 tests) and eslint (0 errors, 126 warnings, all baseline) pass.

## Files changed
app/src/screens/{MyBookmarks,BookmarksByGroup,Notes,ConnectShare,LegacyShareObject,QRCodeGenerate,ViewDocuments}/** -> app/src/pages/<R>/** (git mv; index.tsx -> <R>Page.tsx)
app/src/pages/<R>/<R>Page.tsx (7 files): added one `@origin` line
app/src/shared/Connect2_LegacyShared/lib/actions.test.ts: import lines of BookmarksByGroup (the codemod rewrote the deep import; the folder default import was fixed by hand to '@/pages/BookmarksByGroup/BookmarksByGroupPage')
(codemod rewrote 25 import lines in other files)
migration/tools/refactor/add-origin-g6.py (new)

## Commands run
node migration/tools/refactor/move.ts --from/--to (x14: folder, then index.tsx -> <R>Page.tsx) --no-typecheck -> ok
npm --prefix app run typecheck -> exit 0
cd app && npx vitest run -> 432 files, 2316 tests pass (1 failed first: the missed folder import above)
cd app && npx eslint src -> 0 errors, 126 warnings (baseline)
rf.py diffcheck --move -> FAIL only on base diffs of G3/G4/G5 (AssembleSummarySkeleton.test glob, NoteList.stories, NoteListActionsContainer.test, OrbitEventCard/index.ts, Note_Item_List/index.ts); no line of G6-A is listed. Renames 973, origin tags 126.
git add -A -- . ':!node_modules'; git write-tree -> 24e716d844d33b6661afe5223eece7c9cb94493b

## Deviations from the brief
- index.tsx renamed to <R>Page.tsx (as G1-A, G2-A).
- One hand edit: the default import of the BookmarksByGroup folder in actions.test.ts (import line only).
- @origin flow names taken from move-map.csv source names (Legacy_MyBookmarks, Legacy_Share, Notes, Legacy_OrbitQRCodeFlow, Legacy_OrbitEventsFlow).

## Questions for the user
none
