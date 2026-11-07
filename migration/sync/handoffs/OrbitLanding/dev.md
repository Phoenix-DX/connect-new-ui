## Result
status: pass
summary: No code change (master, 2026-11-07). The first re-capture (account global#1, settle 8 s) showed `NoInformation_Orbit`: the event of that account is older than the "Upcoming" window of 8 days (`ScreenBlock_OrbitLanding.mvc.js:1798-1800`). The account sweep found an Orbit event card on global#2; a fresh sign-in of global#2 followed at once by the capture gives one `Orbit_Blocks.Card_Event`, and `route.py parity OrbitLanding` is clean in every state (default, loading, offline, popup-filters, popup-filters-closed, popup-sort: 0 differences). The React route already matched the live screen.

## Files changed
none (migration/screens/OrbitLanding/capture, analysis and parity are the fresh capture of 2026-11-07, account global#2)

## Commands run
node tools/pipeline/batch_capture.cjs login --auto --account global#2 --storage .auth/state-fresh-global2.json → signed in
node tools/pipeline/batch_capture.cjs run --plan migration/capture-plan.json --storage .auth/state-fresh-global2.json --out migration/screens --only OrbitLanding --analyze → analyzed, Card_Event 1
python3 tools/pipeline/route.py parity OrbitLanding --app http://localhost:5173 → 6 states, every count 0

## Deviations from the brief
The master did the work of this item (a capture, no code); the Q4 decision "re-capture with an account that has the data" (option c) is applied for this route.

## Questions for the user
none
