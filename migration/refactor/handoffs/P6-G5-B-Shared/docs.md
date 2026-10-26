## Result
status: pass
summary: CHANGELOG entry (25 blocks, 163 files, 21 renames, W15 with 8 baseline rows). 25 P6-G5 `src/shared/` rows of move-map.csv set to `moved`. Two paths fixed in known-original-bugs.md. Follow-up F23 added.

## Files changed
app/docs/refactor/CHANGELOG.md
app/docs/refactor/move-map.csv (25 status cells; quotes of some notes cells removed by the writer, same values)
app/docs/known-original-bugs.md (B7 and B8 paths: components/orbit/OrbitCard, components/orbit/MilestoneCard)
migration/refactor/followups.md (F23)
migration/refactor/handoffs/P6-G5-B-Shared/docs.md

## Commands run
ste_lint.py on CHANGELOG.md and known-original-bugs.md -> 0 errors
prettier --check on both .md files -> clean (csv has no prettier parser)
arch-baseline.csv: the 8 rows with owners were already added by the developer; checked, no change.
mermaid: no changed file has a diagram

## Deviations from the brief
known-original-bugs.md is not in the list of files the documenter may change; changed only two path cells (as in G4).
Left: `app/src/api/README.md` line 52 names `shared/Connect2_Assemble_MUI/lib/actions.ts`, which did not move. OutSystems names in reference/*.md are origin names.

## Questions for the user
none
