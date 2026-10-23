## Result
status: pass
summary: Moved the 8 G3 routes from screens/<R> to pages/<R> with move.ts (one run per route), renamed index.tsx to <R>Page.tsx, added @origin tags. Typecheck, vitest (src/pages, 183 tests) and eslint pass; rf.py diffcheck --move ok.

## Files changed
app/src/screens/{HomeFeed,FeedItemDetail,Updates_SingleList,Services,Search,Notifications,MessageList,MessageDetail}/** -> app/src/pages/<R>/** (git mv; index.tsx -> <R>Page.tsx)
app/src/pages/<R>/<R>Page.tsx (8 files): added one `@origin` line
app/src/pages/FeedItemDetail/FeedItemDetail.test.tsx: import './index' -> './FeedItemDetailPage'
(codemod rewrote import lines in other files)
migration/tools/refactor/add-origin-g3.py (new)

## Commands run
node migration/tools/refactor/move.ts --from ... --to ... --no-typecheck (x8) → ok
npm --prefix app run typecheck → exit 0
cd app && npx vitest run src/pages → 38 files, 183 tests pass
cd app && npx eslint src/pages → no output
rf.py diffcheck --move → ok (81 renames, 8 origin tags)

## Deviations from the brief
- Worktree branch is rf/prefetch-P6-G3-A-3b30db5 (prefetch), as instructed by the master.
- index.tsx renamed to <R>Page.tsx (as G1-A/G2-A); one test import changed for that.
- @origin flow names taken from survey/migration notes.

## Questions for the user
none
