## Result
status: pass
summary: move-map `status` set to `moved` for the 67 moved P7 shared rows (3 deferred rows untouched). CHANGELOG entry P7-0 added. Old shared/ paths fixed in the guides os-widgets, page-template, shell, shared-code and in overview.md.

## Files changed
app/docs/refactor/move-map.csv
app/docs/refactor/CHANGELOG.md
app/docs/guides/os-widgets.md
app/docs/guides/page-template.md
app/docs/guides/shell.md
app/docs/guides/shared-code.md
app/docs/architecture/overview.md
migration/refactor/handoffs/P7-0/docs.md

## Commands run
python row edit of move-map.csv (source starts with src/shared/, phase P7, not osui, not the 3 deferred) → 67 rows; git diff HEAD --stat: 67 insertions, 67 deletions, only the status column
ste_lint.py on each changed .md → 0 errors
check_mermaid.cjs overview.md → no problems
prettier --check on changed .md → clean after --write on CHANGELOG (csv has no parser)

## Deviations from the brief
- No component catalog exists; READMEs under src/ naming old paths use the lib/ files (still in shared/), so unchanged.
- README block names (UBT_LazyImage etc.) are OutSystems block names, not paths: unchanged.

## Questions for the user
none
