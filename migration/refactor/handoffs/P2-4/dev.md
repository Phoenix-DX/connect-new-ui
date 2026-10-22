## Result
status: pass
summary: Wrote the page template guide and the pilot report; settled both P2-3 follow-ups in move-map.csv (names: row 184 is now HouseholdTimelinePhotoList; the hook move waits for the Carousel/Profile pages). No code changed.

## Files changed
app/docs/guides/page-template.md
app/docs/refactor/reports/P2-4-pilot.md
app/docs/refactor/move-map.csv

## Commands run
npm --prefix app run format:check → exit 0, all files formatted

## Deviations from the brief
Typecheck, vitest and eslint not run: no code file changed. Parity not run (tester).

## Questions for the user
Confirm the 3 routes on http://localhost:5174 (links in app/docs/refactor/reports/P2-4-pilot.md) and the template.

## Fix loop 1
The parity command overwrote `reports/P2-4.md`. The pilot report is now `app/docs/refactor/reports/P2-4-pilot.md` (same content); `P2-4.md` is left to the parity output. The guide and move-map had no link to it. `format:check` passes.
