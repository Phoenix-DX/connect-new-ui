## Result
status: pass
summary: Ported the live block's new `Placeholder_CarouselTag` (an empty div inside the ImageCard's Placeholder_ImageTag)
into the shared container. Added the mock answer of school 132, the route id of the re-capture, with fictional values of
the captured lengths. School 1430 keeps its data. Parity of OneSchoolGlobalDetails: every state 0.

## Files changed
app/src/containers/OneSchoolGlobalDetails/OneSchoolGlobalDetailsContainer.tsx (granted: optional prop `placeholderCarouselTag`, rendered as `<div id={cid('Placeholder_CarouselTag')}>` in `placeholderImageTag`)
app/src/containers/OneSchoolGlobalDetails/mocks.ts (granted: `CAPTURED_SCHOOL_132` + `school132Answer`, used when In_OneSchoolGlobalId is 132)
app/src/pages/OneSchoolGlobalDetails/OneSchoolGlobalDetails.test.tsx (new test: school 132 texts and the empty CarouselTag in the image tag)
migration/screens/OneSchoolGlobalDetails/parity/* (written by route.py parity)
migration/sync/handoffs/OneSchoolGlobalDetails/dev.md

## Commands run
python3 tools/pipeline/route.py parity OneSchoolGlobalDetails --app http://localhost:5173 → exit 0, "parity clean"
  default: structure 0, class 0, attr 0, text 0, style 0, pseudo 0, layout 0, position 0, pixel 0, call 0; pixels 0.03%, worst tile 2.2%
  loading: all 0; pixels 0.00%
  offline: all 0; pixels 0.02%, worst tile 2.2%
python3 tools/pipeline/consistency_check.py --screen OneSchoolGlobalDetails → OK
npm --prefix app run typecheck → exit 2: one error in a sibling item only, src/pages/CountryList/CountryListPage.tsx(23,31) TS2554 (not in this item's files)
npx vitest run src/pages/OneSchoolGlobalDetails src/containers/OneSchoolGlobalDetails src/pages/OneSchoolGlobalCarousel src/components/directory/CarouselOneSchoolGlobalDetails src/mocks → all pass
  (the same run with src/pages/Locality_Details had 6 failures in Locality_Details.test.tsx, localityBlocksState.test.ts and localityDetailsState.test.ts. These files are modified in the work tree by the active Locality_Details item; the two state unit tests do not use these mocks.)
npx eslint (the 3 changed code files) → exit 0
npm --prefix app run arch → no dependency violations (139 known ignored)

## Deviations from the brief
- Scenario: the default state uses the default mock scenario `real` (the parity report says `mock: real`). School 132's
  data is chosen by its id, not by a scenario, so `migration/capture-plan.json` needs no `scenarios` entry for
  OneSchoolGlobalDetails. Loading and offline use their automatic scenarios (`loading`, `error`) as before.
- `app/src/containers/EntityDetailsActions/mocks.ts`: no change. The capture shows "Bookmark" (not bookmarked) and Call
  and Email. The default mock already gives that for school 132 (no seeded bookmark; fictional channels), so parity is 0
  without a change.
- Mock values: the title "OneSchool Monte Grande" (9 5 6), the areas served "Monte Hermoso Villalonga" (5 7 10) and the
  address "Avenida Sarmiento 412 Centro" (7 9 3 6) are fictional. The link text "OneSchool Argentina" is the captured,
  unmasked text. The link URL and the other fields stay as recorded. SignedURL is the app's landscape placeholder (the
  capture has a photo URL), as the existing mock does for the other schools.
- The container is shared with OneSchoolGlobalCarousel: every slide now has the empty `Placeholder_CarouselTag` div.
  This matches the live block. I did not run the carousel's parity, because its parity folder is outside this item's
  paths. The carousel unit tests pass.
- Q-OSGD-3 (EntityDetailsActions controller changes: PendingOpen / deferred notes-sheet reopen,
  Action_UpdateBookmarksAndNotes, ToggleBookmarkItem_C2 from UBTConnect_Utils) is left to its owner, as the master
  decided (a). ContactByMessage_Wrapper needs no change: Action_GetAvailableMessagingApps has the same plugin checks,
  which are False in a browser. ShareSheet: this capture has no share state.

## Questions for the user
none
