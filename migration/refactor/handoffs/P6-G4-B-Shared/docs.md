## Result
status: pass
summary: CHANGELOG entry (38 blocks, 293 files, 31 renames, W15 with 38 baseline rows and owners, six colocated mocks.ts, tool fix of `arch_baseline.py check --move-step` with its self-check). 38 P6-G4 `src/shared/` rows of move-map.csv set to `moved`. Old path and name references fixed in 4 docs.

## Files changed
app/docs/refactor/CHANGELOG.md
app/docs/refactor/move-map.csv (38 status cells; the script also removed quotes from some notes cells, same values)
app/docs/known-original-bugs.md (B4 path now `app/src/containers/EntityDetailsActions/`)
app/docs/guides/os-widgets.md (Directory_EntityDetailsActions -> EntityDetailsActionsContainer)
app/src/api/README.md (EntityDetailsActionsContainer, NoteListActionsContainer, containers/EntityDetailsActions/api.ts)
migration/refactor/handoffs/P6-G4-B-Shared/docs.md

## Commands run
ste_lint.py on the 4 changed .md files -> 0 errors (warnings only)
prettier --check on the 4 files -> clean (known-original-bugs.md re-formatted: table width)
mermaid: no changed file has a diagram

## Deviations from the brief
known-original-bugs.md is not in the list of files the documenter may change; changed only a path cell, because the block moved.
Hits with `shared/UBTConnect/lib`, `shared/UBTConnectLibrary/Input|Popup`, `UBT_LazyImage`, `Dialog_Navigation` left: those paths did not move. OutSystems names in reference/*.md are origin names, left.

## Questions for the user
none
