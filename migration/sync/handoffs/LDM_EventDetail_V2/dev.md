## Result
status: question
summary: The mock of the captured ids (EventId 88271) now answers a published guest meal (host photo, three-line address, four guest households); markup was already correct (0 structure/class diffs). Remaining default diffs: 4 photo background-image styles + 1 pixel (no exemption for this route) and 1 layout (host title span width).

## Files changed
app/src/pages/LDM_EventDetail_V2/mocks.ts
app/src/pages/LDM_EventDetail_V2/LDM_EventDetail_V2.test.tsx

## Commands run
npm --prefix app run typecheck → fails only in src/pages/Household_Relations/Household_RelationsPage.tsx(22,11) TS2741 (not my file, outside allowed paths); nothing in LDM_EventDetail_V2
vitest run src/pages/LDM_EventDetail_V2 → 4 files, 61 tests passed
eslint (2 changed files) → clean
npm --prefix app run arch → no violations
parity default → structure 0, class 0, attr 0, text 0, style 5, layout 1, position 0, pixel 1, call 0; pixels 8.18%, worst tile 88.0%
parity loading → 0 differences, pixels 0.00%
parity offline → 0 differences, pixels 0.01%

## Deviations from the brief
The shared alias (88271 -> pending meal 70415) lives in app/src/mocks/fictional/ldm.ts, outside the allowed paths. I overrode it inside the page mocks.ts (88271 -> published meal 70296, with host name, address and guest names/localities of the captured lengths, no Not Attending/Including lines). The test for 88271 now expects the published meal.

## Questions for the user
1. Photo background-image (4 style rows: host photo and 3 guests... all 4 guests + host, plus the pixel row): the capture keeps TST signed CloudFront URLs, the mock answers the neutral placeholder. An exemption exists only for LDM_MyEvents_V2 (DATA-GUEST-PHOTO-LDM-MYEVENTS-V2 and its -PIXEL). Options: (a) add the same pair of exemptions for ^/UBTConnect/LDM_EventDetail_V2 (background-image style on .event-detail-photo, and pixel); (b) leave as is. I did not add any exemption.
2. Layout: `span.event-detail-hostcard-content-info-title` is 82x17 in TST and 118x17 in the build; its width follows the width of the host name, whose real glyphs the capture masks (21 chars, 7+4+1+6). Three name attempts gave 110 to 161 px. Options: (a) exempt as data drift (masked text width); (b) the user supplies a name or width that gives 82 px.
Note: the typecheck failure in Household_Relations is another item's change; the tester should expect it.
