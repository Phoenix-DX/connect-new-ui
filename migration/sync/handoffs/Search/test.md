## Result
status: pass
summary: Search itself is clean (scope 0, parity 0 in 3 states, consistency OK, arch, eslint, vitest). The shared-block sweep prints WITH DIFFS 4 (Bookmarks, HouseholdCarousel, Notes, Updates_SingleList), so the literal gate fails. None of the diffs is a FilterSheet label diff; these routes have their own pending sync items.

## Files changed
migration/sync/handoffs/Search/test.md
(parity tool regenerated migration/screens/Search/parity/* and, in the sweep, the parity reports of the 8 swept routes)

## Commands run
curl /UBTConnect/HomeFeed → 200; vite cwd = /Users/khaitruong/Projects/connect-new/app
python3 tools/sync/sync.py scope Search → exit 0 (861 files, all in scope)
python3 tools/pipeline/route.py parity Search --app http://localhost:5173 → clean
- default: all counts 0 (structure, class, attr, text, style, pseudo, layout, position, pixel, call); pixels 0.11%, worst tile 2.5%
- loading: all 0; pixels 0.00%
- offline: all 0; pixels 0.11%, worst tile 2.5%
python3 tools/pipeline/consistency_check.py --screen Search → "consistency: Search OK"
npm --prefix app run typecheck → errors only in src/pages/Notifications/hooks/notificationsState(.test).ts and useNotifications.ts (Notifications is an active item: note, not a failure)
npm --prefix app run arch → no dependency violations (139 known ignored)
eslint src/components/filter/FilterSheet src/pages/Search → exit 0
vitest run src/components/filter/FilterSheet src/pages/Search → 6 files, 63 tests passed
python3 tools/parity/parity_sweep.py --app ... Bookmarks CountryDetails HouseholdCarousel HouseholdDetails Locality_Details Notes Profile Updates_SingleList → "ROUTES 8 WITH DIFFS 4":
- Bookmarks default: structure 1, class 1, text 4, style 1, pseudo 3, layout 17, position 2, pixel 1
- HouseholdCarousel default: layout 40; offline: structure 52, class 12, text 8, style 4, layout 164, position 36, pixel 1
- Notes default: class 1, style 1, position 1, pixel 1; offline: class 1, style 1, layout 6, position 1, pixel 1
- Updates_SingleList default: structure 6, class 83, text 48, style 162, layout 305, position 51, pixel 1; offline: structure 3, class 1, style 2, layout 13, pixel 1
- OK: CountryDetails, HouseholdDetails, Locality_Details, Profile
- "Clear filters"/"Apply filters" appear in none of the 4 failing parity reports. The 4 routes are not active items in sync.py status (pending). Cause not proven; likely their own TST changes.

## Diff review
1 protected files: only migration/parity-exemptions.json changed, 8 lines of renumbered pathRegex of existing rules (Locality_Details, SupperMeeting_Carousel; allowed by the master). No change in fixtures, openapi.yaml (not in diff), public css, package.json, capture-plan.json: pass
2 outside allowed paths: scope guard exit 0: pass
3 deleted tests: none from Search/FilterSheet (CommunityPopulation.test.tsx deleted by the HomeFeed item, replaced by CommunityNumbers.test.tsx): pass
4 @origin: FilterSheet diff touches no @origin line: pass
5 no new CSS, inline style, fetch, storage or console.log in the FilterSheet diff (labels "Clear"/"Apply", osList in filterSheetActions): pass
6 mock data: no mock change by this item: pass
7 secrets: none in the diff: pass
8 dev.md names no code file; Search has no code change; the FilterSheet changes belong to CountryDetails: pass

## Deviations from the brief
none. Note: no captured Search state contains SearchResult_Item, so parity cannot check that block.

## Questions for the user
Decision for the master: accept the sweep result (the 4 diff routes are outside this item and have pending sync items) or hold Search until they are synced.


## Master verification (2026-11-07)
The four routes with differences in the shared-block sweep (Bookmarks, HouseholdCarousel, Notes, Updates_SingleList) are open sync items with their own known differences; none mentions the FilterSheet labels. Status set to pass by the master; every other check passed.
