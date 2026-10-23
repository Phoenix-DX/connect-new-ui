## Result
status: pass
summary: CHANGELOG entry (9 blocks, 62 files, W15 with 11 baseline rows and owners, `check --move-step` mode, W17), 9 P6-G2 `src/shared/` rows of move-map.csv set to `moved`, mock-handler order in api-and-mocks.md now names `containers` and the `components` glob. Other docs need no change: remaining old-name hits are OutSystems block names (README titles, shared-blocks.md, duplicates.md) or build-hash names in baseline.md.

## Files changed
app/docs/refactor/CHANGELOG.md
app/docs/refactor/move-map.csv
app/docs/guides/api-and-mocks.md
migration/refactor/handoffs/P6-G2-B-Shared/docs.md

## Commands run
ste_lint.py CHANGELOG.md, api-and-mocks.md → 0 errors
prettier --check (both .md) → clean
mermaid: no changed file has a diagram

## Deviations from the brief
The code comment in app/src/mocks/handlers.ts still lists the order without `components`; it is a code file, so not changed.

## Questions for the user
none
