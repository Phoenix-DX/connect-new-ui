# context-016 · Wave 4 blocks rounds 1–2, paused for the demo; mock session demo default

Date: 2026-10-15 · Phase: 5 (wave 4 foundation, paused) · Status: current

## Result
- Wave 4 blocks: 40 of 46 built (round 1: batches A 14, B 14; round 2: C 8 of 9, D 4) + foundation (local bookmarks
  both entities with sync at app start, `DeviceInfo_IsNative`, clipboard and string split utils, Connect_Entity TST,
  LeafletMap GeoJSON, TouchEvents). Left: HouseholdDetails_Block (3656 compiled lines, own batch) and the 5
  EntitiesCarousel blocks; then the 13 wave-4 screens.
- ci 218 files / 916 tests; parity clean on the 13 captured finished routes; demo smoke clean (15 screens).
- Mock session demo default (user, 2026-10-15): a tab's first load without `?mocksession` starts `unlocked`; later
  loads keep what the tab did; any parameter wins (`app/src/shell/testSession.ts`, tests mark tabs as started).

## Decisions (user, 2026-10-15)
- 13:55: back from away; auto-accept window ended; ask again. Let the running wave-4 round finish, then stop for the
  demo (no round 3, no wave-4 screens).
- Mock session defaults to unlocked for demos.

- After the demo pause (user, 2026-10-15): add the bookmark toggle server actions (AddBookmark2,
  DeleteBookmarkByBookmarkId2) to extra-actions + contract + fictional mocks when wave 4 resumes; accept the wave-4
  technical recommendations as a package (OnReady C2 branch kept, AddBookmark2 empty-category quirk = known bug B4,
  strict UI_ input naming, TouchEvents destroy guard, Leaflet redraw as compiled, listFetchError prop, refetch on mount
  in the mock phase, TimelinePhoto '' date, check KebabButtonMenu isEnable / ComingSoon texts / Leaflet zoom default
  when Profile, OneSchoolGlobalDetails and the map screens are built).

## Next
- Demo; then the user decides on resuming wave 4 (first: bookmark contract entries, HouseholdDetails_Block, carousel).
