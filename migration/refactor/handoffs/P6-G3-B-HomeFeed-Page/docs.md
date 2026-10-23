## Result
status: pass
summary: CHANGELOG entry added. move-map.csv: HomeFeed page row has notes and status `moved`; 3 new rows for FeedBlock_Services, FeedBlock_Updates and Dialog_GoExternalApp (they had no rows). calls-by-domain.md, api/README.md and followups.md F17 (margin 4.20 kB) updated.

## Files changed
app/docs/refactor/CHANGELOG.md
app/docs/refactor/move-map.csv
app/docs/refactor/calls-by-domain.md
app/src/api/README.md
migration/refactor/followups.md

## Commands run
python3 migration/tools/ste_lint.py <changed md> → 0 errors in my text (calls-by-domain.md has 1 old error, line 5)
cd app && npx prettier --check <md files under app/> → pass (csv has no parser)
mermaid check → not needed, no diagram changed

## Deviations from the brief
Rows of the 3 blocks did not exist in move-map.csv; I added them. calls-by-domain.md: removed the two `screens/HomeFeed/api.ts` rows, added a P6-G3-B-HomeFeed-Page note and the FeedBlock action in the `api/service` row. overview.md, guides and ADR-15 unchanged (no folder or rule change).

## Questions for the user
none
