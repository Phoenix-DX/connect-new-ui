## Result
status: pass
summary: CHANGELOG entry (19 blocks, 135 files, 16 renames, W15 with 31 baseline rows and owners, mocks.ts of FeedCms and ShareSheet), 19 P6-G3 `src/shared/` rows of move-map.csv set to `moved`, SharePopup path fixed in page-template.md. Other old-path hits are lib/ files or blocks that did not move.

## Files changed
app/docs/refactor/CHANGELOG.md
app/docs/refactor/move-map.csv (19 status cells; the script also removed quotes from 2 P6-G1 notes cells, same values)
app/docs/guides/page-template.md
migration/refactor/handoffs/P6-G3-B-Shared/docs.md

## Commands run
ste_lint.py CHANGELOG.md, page-template.md -> 0 errors
prettier --check CHANGELOG.md, page-template.md -> clean
mermaid: no changed file has a diagram

## Deviations from the brief
api-and-mocks.md needs no change: the glob order already names `containers` and `components` (P6-G2).

## Questions for the user
none
