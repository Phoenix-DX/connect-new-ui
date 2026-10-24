## Result
status: pass
summary: CHANGELOG entry added. move-map: 30 osui rows set to `moved` (4 no-importer notes updated), 1 new row for `shared/osui/lib`. Plan P7-1 text corrected to Q5, guides, overview and 7 component READMEs updated to `components/ui/` paths. Follow-ups F29 and F30 added.

## Files changed
app/docs/refactor/CHANGELOG.md
app/docs/refactor/move-map.csv
app/docs/architecture/overview.md
app/docs/architecture/refactor-plan-v2.md
app/docs/guides/shared-code.md
app/docs/reference/shared-blocks.md
app/src/shared/README.md
app/src/components/assemble/AssembleLocalityFilter/README.md
app/src/components/ui/ConnectBottomSheet/README.md
app/src/components/ui/Carousel/README.md
app/src/components/ui/BottomSheet/README.md
app/src/components/ui/Separator/README.md
app/src/components/ui/ColumnsTwo/README.md
app/src/components/directory/EntitiesCarousel/README.md
migration/refactor/followups.md

## Commands run
git diff app/docs/refactor/move-map.csv → only the 30 osui rows changed (status) plus 1 new row
ste_lint.py on each changed .md → 0 errors (warnings only)
prettier --check on changed files under app/ → clean (after --write on overview.md and shared-code.md)
check_mermaid.cjs overview.md → no errors
ADR-15 not edited: no target rule changed.

## Deviations from the brief
- Baseline count 73 used in the CHANGELOG, not dev.md's 79.
- Child-block names such as `osui/Columns2` in READMEs are OutSystems block names, left as is; story titles keep 'Shared/osui/...' (code).
- Overview line about the `shared/osui` dependency rule removed (no longer true); the dependency-cruiser rule itself is noted in F30.

## Questions for the user
none
