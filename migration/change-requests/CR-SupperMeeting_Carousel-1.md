# CR-SupperMeeting_Carousel-1: household list mock by subdivision id (captured counts per slide)

- Status: applied
- Raised by: SupperMeeting_Carousel, 2026-10-15
- Blocks: `src/shared/UBTConnect/SupperMeeting_HouseholdList/mocks.ts` (DataActionGetSubdivisionHouseholds),
  `src/shared/UBTConnect/Household_GalleryCard_List/mockData.ts` — foundation owner
- Other routes using them: SupperMeeting_Details (same handler; its start id keeps 11 households)
- Related: CR-SupperMeeting_Details-1 §1 (UBT_LazyImage), §2.1 (contact details per entity), §2.2 (empty ChildrenNames
  at positions 3, 6, 7, 11) also show on every slide of this route; CR-HouseholdDetails-1 §1/§4 (actions menu
  skeleton, `aria-hidden` / `popup-disable-scroll`, OSList `list-loading`) show in `parity/loading.json`.
- Related question: SupperMeeting_Carousel Q1 (mock preload of 3 supper meetings: the start id, then fictional ids
  `9202`, `9203`, `app/src/screens/SupperMeeting_Carousel/mocks.ts`)

## Difference
The capture has 3 slides whose household lists hold **11, 7 and 5** households
(`migration/screens/SupperMeeting_Carousel/analysis/dom/default.html`: `Household_GalleryCard` under
`b3-l1-1164_0-…-b9`, `1164_1-…-b9`, `1164_2-…-b9`). The shared mock answers 11 households for every
`In_SubdivisionId` (`SupperMeeting_HouseholdList/mocks.ts:8-12`, `sampleSubdivisionHouseholds(11)`), so slides 2 and 3
have 4 and 6 extra cards (`migration/screens/SupperMeeting_Carousel/parity/default.json`: `structure` "extra in build"
under `1164_1/2-b2-b1-b1-b9`, gallery `grid-template-rows` with 6 rows instead of 4 and 3).

## Expected change
DataActionGetSubdivisionHouseholds answers by `In_SubdivisionId` (rule 10, captured counts): any id → 11 (as now, with
CR-SupperMeeting_Details-1 §2.2), `9202` → 7, `9203` → 5 (fictional households, neutral values; ChildrenNames of the
slide-2/3 households as captured once the capture is checked: `dom/default.html` household subtitles under
`1164_1`/`1164_2`).

## Workaround in the route until applied
None: MSW handlers are global, so a route handler would change the data of SupperMeeting_Details too. The route
composes the shared blocks unchanged.

## Resolution (foundation owner)
- Change (F4a foundation owner, 2026-10-15): `SupperMeeting_HouseholdList/mocks.ts` answers by In_SubdivisionId: any id
  11 households (empty ChildrenNames at 3, 6, 7, 11, as before), 9202 → 7 (empty at household 3), 9203 → 5 (empty at
  households 1 and 4); counts and empty subtitles read from SupperMeeting_Carousel dom/default.html (`1164_1-…-l1-1260_0..6`,
  `1164_2-…-l1-1259_0..4`).
- Regression parity run on: see the F4a report (SupperMeeting_Carousel, SupperMeeting_Details).
