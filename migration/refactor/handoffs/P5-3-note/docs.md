## Result
status: pass
summary: Added the `note/` section to `src/api/README.md` and the CHANGELOG entry. `move-map.csv`, `overview.md` and the block READMEs need no change (the `api.ts` files still exist and re-export).

## Files changed
app/docs/refactor/CHANGELOG.md
app/src/api/README.md
migration/refactor/handoffs/P5-3-note/docs.md

## Commands run
python3 migration/tools/ste_lint.py <2 files> → see result below
cd app && npx prettier --check <2 files> → pass
mermaid check → not run (no mermaid change)

## Deviations from the brief
- `calls-by-domain.md` not changed: generated P0-4 baseline (re-run in P9-3), as in earlier domain steps.

## Questions for the user
none
