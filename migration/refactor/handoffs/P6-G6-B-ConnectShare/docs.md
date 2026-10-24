## Result
status: pass
summary: Updated CHANGELOG (new entry, W23 note), api/README.md (`share/` paragraph, W8), calls-by-domain.md (ConnectShare row now `api/share/repository.ts`) and move-map row 6 (ShareDetailView, status moved). Row 275 was already moved. No other document needs a change.

## Files changed
app/docs/refactor/CHANGELOG.md
app/src/api/README.md
app/docs/refactor/calls-by-domain.md
app/docs/refactor/move-map.csv

## Commands run
python3 migration/tools/ste_lint.py CHANGELOG.md, api/README.md → 0 errors
ste_lint calls-by-domain.md → 1 error in line 5, old text, not changed by this step
npx prettier --check (3 .md files) → clean
Checked against tree: api/share/{index,types,mapper,repository}.ts exist, no hooks.ts or keys.ts; pages/ConnectShare/{api.ts,types.ts} absent; components/ShareDetailView.tsx exists.

## Deviations from the brief
none

## Questions for the user
none
