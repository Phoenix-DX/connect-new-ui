## Result
status: pass
summary: Added the `bookmark/` section to `src/api/README.md`, fixed the `callAction` statement in the Directory_EntityDetailsActions README, and added the CHANGELOG entry. `move-map.csv` and `overview.md` need no change.

## Files changed
app/docs/refactor/CHANGELOG.md
app/src/api/README.md
app/src/shared/UBTConnect/Directory_EntityDetailsActions/README.md
migration/refactor/handoffs/P5-3-bookmark/docs.md

## Commands run
python3 migration/tools/ste_lint.py <3 files> → 0 errors
cd app && npx prettier --check <3 files> → pass
mermaid check → not run (no mermaid change)

## Deviations from the brief
- `calls-by-domain.md` not changed: it is the generated P0-4 baseline (re-run in P9-3); earlier domain steps left it as is.

## Questions for the user
none
