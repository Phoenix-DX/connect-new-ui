# Route spec: OneSchoolGlobalCarousel

Source: TST compiled code (`analysis/sources/pretty/UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalCarousel.mvc.js`,
`sources/` extracted from the live survey by `migration/clarify/tools/extract_sources.py`), capture `analysis/dom/`.

## Summary

A carousel of OneSchool Global schools. It shows one slide per school id that Notes (or Bookmarks) hands over in the
preload object. Each slide shows the school details (OneSchoolGlobalDetails_Block). The screen has no call of its own.
Opened by URL, it has no slide.
Q3 (user 2026-10-29): the TST captures come from the Bookmarks card of school 1430 and show one slide
(`Bookmarks.mvc.js:904-923`).

## Patterns used

P-PARAMS (route input, preload object), P-BACK (view cache of the variables, BackNavigationHandler), P-OSUI
(Carousel through EntitiesCarousel), P-MOCKS (mock preload, `empty` scenario), P-STATES (loading, offline).

## Feature flags
The flags scan of 2026-10-29 (refreshed survey) gives 7 flags. They come from the blocks that the slides embed
(OneSchoolGlobalDetails_Block, Directory_EntityDetailsActions, the bottom bar). This route reads none of them itself.
Each flag keeps its decision (`migration/flags.md`):
- `launchDarkly_FF.mobileStudentInformation`: default-only on (user, 2026-10-14). The student section of the slide
  (container OneSchoolGlobalDetails).
- `action:getHasExtendedShare` (C2ExtendedShare): default-only on (user, 2026-10-14).
- `action:getHasNewBookmarks` (C2NewBookmarks): default-only on (user, H-Q2 (a), 2026-10-29). TST removed the branch
  from Directory_EntityDetailsActions, so the block reads the C2 bookmarks only.
- `launchDarkly_FF.mobileDirectoryBookmarkNote`: default-only off (user, 2026-10-14). The bottom bar reads it.
- `action:getHasC1DirectoryView` (C2EnableC1DirectoryView): default-only on (user, 2026-10-14). The Directory tab of
  the bottom bar reads it.
- `action:connect_LaunchDarkly_PermissionCheck`, `clientVar:App_PIN_BiometricEnabled`: not flags (false positives;
  user, 2026-10-14).

## Unclear points


- None open for this screen. Settled and moved out:
  - Q1 (a): OneSchoolGlobalDetails re-captured, block form built (see "Blocks").
  - Q2 (a): fictional OneSchool Global notes in the Notes mock (see "Entries").
  - Q3 (a), done: the read-only re-capture of state default wrote `--osui-carousel-track-width` 390px and
    `--footer-height` 56px. The first value, 351px, was a capture timing artefact. Parity is clean for the track. The
    screen is then captured through Bookmarks (see "Summary").
  - Q4 (a): empty contact details and a local bookmark of 1430 in the `captured` scenario (see "States").
  - Q5 (a): `aria-activedescendant` of ButtonGroup1 holds the OutSystems runtime list key (`b3-l1-146060_0-...`). React
    cannot reproduce it. An exemption for aria values that differ only in an OutSystems runtime list key closes it.
- Known gaps outside this route, from the build note (`item10-OneSchoolGlobalCarousel.md`, follow-up 2):
  `Directory_EntityDetailsActions` changed on TST (it calls DataActionFetchNotes on load and has no NotesSheet), and
  `ComingSoon` has an inline calendar icon on TST. They are questions Q7 and Q8 of OneSchoolGlobalDetails.

## Decisions to confirm


- Q1 (a), user 2026-10-29: re-capture OneSchoolGlobalDetails, render the block form, re-run parity.
- Q2 (a), user 2026-10-29: two fictional OneSchool Global notes (schools 1431, 1432) in the Notes mock.
- Q3 (a), user 2026-10-29: the re-capture of state default is done. The user then chose to capture the screen via
  Bookmarks and re-run parity.
- Q4 (a), user 2026-10-29: the `captured` scenario answers empty contact details and a local bookmark of school 1430.
- Q5 (a), user 2026-10-29: an exemption for aria values that differ only in the OutSystems runtime list key.
- Auto decisions of window 7 (`migration/clarify/auto-decisions-2026-10-29.md`): row 7 (F1: scenario `captured` for all states, a) is corrected by row 14
  (measured: `captured` for default and loading, the default scenario for offline, a).

## Screen

- Route `/UBTConnect/OneSchoolGlobalCarousel?In_StartingObjectId=<Long Integer>` (mandatory input). Role: Registered
  users (`mvc.js:479` in the facts of `migration/clarify/review/item10-new-screens.md` §6).
- Variables: `PreloadedCarousel` (PreloadedCarouselRec: `CarouselItemIds`, Long Integer list), `StartingPosition`,
  `SwippedItems` (EntitiesCarousel_SwippedItem list), `EntitiesCarousel_Items` (`mvc.js:13-24`).
- No data action and no server action (`dataFetchActionNames = []`, controller).

## View (`mvc.js:146-380`)

- `Layout_DetailPage` (name `DetailPage`, alias 1, `In_IsPrimaryColor` False).
- Header title: `CustomText` "OneSchool Global", default TextOptions (alias 2). Header right and header content empty.
- Content: `EntitiesCarousel` (alias 3) with `In_StartingPosition`, `In_EntitiesCarousel_Items`,
  `In_ConnectEntityTypeId` = Connect_Entity OneSchool Global; no event bound. Then `BackNavigationHandler` (alias 4)
  only when `SwippedItems` is not empty.
- Bottom: `BottomBarMenu` (alias 5). `CommonUI_InsideLayout` (alias 6).

## Actions

- `OnInitialize` (`mvc.js:406-479`): only when `PreloadedCarousel.CarouselItemIds` is empty: `GetPreloadObject`,
  `AssignFromObject(PreloadedCarousel, Preload)`, `ListIndexOf(CarouselItemIds, p = In_StartingObjectId)`,
  `StartingPosition` = its position when not -1, then `ListAppend(EntitiesCarousel_Items, {EntityId})` per id.
- `Handler_BackNavigation` (`mvc.js:480-507`): `SetPreloadObject(ToObject(SwippedItems))`. Nothing appends to
  `SwippedItems` on this screen, so the handler block never renders.

## Blocks

- `EntitiesCarousel_Element` (TST 2026-10-27) adds a OneSchool Global branch first (alias 1):
  `EntitiesCarousel_OneSchoolGlobal` with `In_EntityId` only (`EntitiesCarousel_Element.mvc.js` view :470-520).
- `EntitiesCarousel_OneSchoolGlobal` (`EntitiesCarousel_OneSchoolGlobal.mvc.js` view :250-290): only
  `OneSchoolGlobalDetails_Block` (alias 1) with `In_OneSchoolGlobalId` = `In_EntityId`, `IsRestoredFromCache` False, no
  event. Its `Handler_HouseholdDetails_DataFetched` and `In_IsSkeletonOnly` are not used.
- `OneSchoolGlobalDetails_Block`: the content that the React screen OneSchoolGlobalDetails renders. TST moved it from
  the screen to the block (`migration/clarify/review/survey-drift-2026-10-28.md:49`). Q1 (a): OneSchoolGlobalDetails was
  re-captured on TST. The React side:
  - The container `containers/OneSchoolGlobalDetails/OneSchoolGlobalDetailsContainer.tsx` has the block form only.
  - It always renders the wrapper `Directory_OneSchoolGlobal.OneSchoolGlobalDetails_Block` with the block's own aliases
    from the re-captures (`$b1` SubLayout, `$b2` card skeleton, `$b3` ImageCard, up to `$b23`).
  - The prop `variant` is replaced by `placement: 'screen' | 'slide'`. It only sets the view cache scope.
  - The page OneSchoolGlobalDetails renders the block as `$b3`. The bottom bar is `$b4`. CommonUI_InsideLayout is `$b5`.
  - The carousel passes `placement="slide"`.
- Data action path: the React call stays `OneSchoolGlobalDetails/DataActionGetOneSchoolGlobalDetails`. TST moved it to
  `OneSchoolGlobalDetails_Block/DataActionGetOneSchoolGlobalDetails`. The regenerated contract renames it.

## Entries

- Notes, OneSchool Global card, filter category OneSchool Global: `CarouselItemIds` = ItemIds of `Notes_List`,
  `SetPreloadObject`, navigate with `In_StartingObjectId` (`Notes.mvc.js:1565-1586`). Otherwise OneSchoolGlobalDetails.
- Bookmarks, OneSchool Global card (`Bookmarks.mvc.js:904-923`): `PreloadedCarousel.CarouselItemIds`, then this route.
  The capture used this entry.
- Notes mock (Q2 (a), user 2026-10-29): two fictional OneSchool Global notes (ids 504 and 505) with their card titles.
  They are for schools 1431 and 1432, so the demo opens the carousel from Notes. School 1430 is not used, so
  OneSchoolGlobalDetails parity is unchanged.

## States



- default: parity with the mock scenario `captured` (row 14 of `migration/clarify/auto-decisions-2026-10-29.md`; Q3, user 2026-10-29).
  - The preload is school 1430 (Bookmarks card 3).
  - The data action gives the answer of the carousel capture (`analysis/calls.md`). All texts are empty: name, areas
    served, address, photo URL, phone, email. There are no business links. CommunityBusinessId is 0.
  - The slide shows "Sorry, no photo available" and an empty title, as on TST.
- loading: scenario `captured` too (measured: 0 differences with `captured`, 1 with the default scenario; row 14).
- offline: the default scenario (measured: 23 differences against 58 with `captured`; row 14). The build note says the
  offline mock uses the same one-school preload. The orchestrator checks which one the final sweep used.
- Actions menu in `captured` (Q4 (a), user 2026-10-29):
  - The `captured` scenario of the `EntityDetailsActions` mocks answers empty contact details and a local bookmark of
    school 1430.
  - So the slide shows Unmark and no Call or Email, as TST (`calls.md` FetchContactDetails empty).
- Default demo mock (`real`): fictional preload of four schools (1430 to 1433) when opened by URL. Notes preload when
  opened from Notes. `empty` gives no slide.
