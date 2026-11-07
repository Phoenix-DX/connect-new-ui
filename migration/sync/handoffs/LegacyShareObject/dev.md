## Result
status: pass
summary: No code change (master, 2026-11-07, user decision Q4-old b). The fresh capture of 2026-11-07 lost content because of the data of the capture account (see migration/sync/decisions-2026-11-07.md, "Q4 investigation"); the TST code of the route did not change (migration/sync/drift-2026-11-07.json). The analysis/ of the route was restored from commit 2fe9efaf (the capture before the re-capture), and `route.py parity LegacyShareObject` is clean in every state (default, loading, offline: 0 differences).

## Files changed
none in app/; migration/screens/LegacyShareObject/analysis restored from 2fe9efaf; parity reports regenerated

## Commands run
git checkout 2fe9efaf -- migration/screens/LegacyShareObject/analysis → restored
python3 tools/pipeline/route.py parity LegacyShareObject --app http://localhost:5173 → 3 states, every count 0

## Deviations from the brief
The master did the work of this item (a restore, no code); option b of Q4-old.

## Questions for the user
none
