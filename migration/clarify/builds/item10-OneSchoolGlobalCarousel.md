# Item 10 build: OneSchoolGlobalCarousel (2026-10-29)

Route agent build of the new TST screen OneSchoolGlobalCarousel (board `decision=build`, user 2026-10-28; I10-4 (a),
I10-6 (a)). Spec: `migration/screens/OneSchoolGlobalCarousel/route-spec.md` (`route.py spec-done` recorded).

## Files

Code (new):

- `app/src/pages/OneSchoolGlobalCarousel/OneSchoolGlobalCarouselPage.tsx`, `inputs.ts`, `mocks.ts`,
  `hooks/oneSchoolGlobalCarouselActions.ts`, `hooks/useOneSchoolGlobalCarousel.ts`.
- `app/src/components/directory/CarouselOneSchoolGlobalDetails/` (block EntitiesCarousel_OneSchoolGlobal, props only,
  slot `renderOneSchoolGlobalDetails`), `index.ts`.
- `app/src/containers/OneSchoolGlobalDetails/OneSchoolGlobalDetailsContainer.tsx` (OneSchoolGlobalDetails_Block).

Code (moved from `pages/OneSchoolGlobalDetails/` to `containers/OneSchoolGlobalDetails/`, then edited): `hooks/*`
(state, hook and their tests), `components/ButtonGroup.tsx`, `ExpandableSection.tsx`, `External_Link.tsx`,
`staticEntities.ts`, `mocks.ts`. The hook takes options `isRestoredFromCache` and `viewName`; the state file owns the
input type (a container does not import a page).

Code (changed): `pages/OneSchoolGlobalDetails/OneSchoolGlobalDetailsPage.tsx` (renders the container, variant
`screen`), `components/directory/EntitiesCarousel/EntitiesCarousel.tsx` and
`components/directory/EntitiesCarouselElement/EntitiesCarouselElement.tsx` (new OSG slot and branch, first as in TST),
`pages/Notes/hooks/notesState.ts` (`noteCardTarget` OSG branch) and `pages/Notes/hooks/useNotes.ts` (SetPreloadObject
before the navigation).

Container choice: OneSchoolGlobalDetails_Block has its own data action, view cache state, a flag, two handlers and the
entity actions container, and two pages render it (page-template criterion 2 and rule 3). Not written to
`move-map.csv` (file not found at `app/docs/architecture/move-map.csv`; the orchestrator can add the row).

Mocks: the container mock answers a fictional name per school id (`CAROUSEL_SCHOOLS`: 1430 OneSchool Alem, 1431
OneSchool Bahia Blanca, 1432 OneSchool Tandil, 1433 OneSchool Punta Alta); unknown ids keep the 1430 name (unchanged
for OneSchoolGlobalDetails). The route mock registers a fictional preload of the four schools, start school first,
only in the `real` scenario and online; `empty`, `loading`, `error` and offline give no preload, as TST by URL.

## Tests (written first)

- `pages/OneSchoolGlobalCarousel/hooks/oneSchoolGlobalCarouselActions.test.ts`: AssignFromObject, ListIndexOf,
  ListAppend, OnInitialize, Handler_BackNavigation.
- `pages/OneSchoolGlobalCarousel/OneSchoolGlobalCarousel.test.tsx`: empty scenario (no slide), default mock (4 slides
  with OneSchoolGlobalDetails_Block and fictional names), preload from Notes.
- `components/directory/CarouselOneSchoolGlobalDetails/CarouselOneSchoolGlobalDetails.test.tsx`.
- `pages/Notes/hooks/noteCardTarget.test.ts`: carousel with the Notes_List ids only for the OSG filter category.
- Run: 29 test files, 155 tests pass (OSG carousel, OSG details, container, Notes, components/directory); no "Errors".

## Parity (`route.py parity … --app http://localhost:5174`, after the last code change; vite cwd checked: this repo)

| Route | default | loading | offline |
|---|---|---|---|
| OneSchoolGlobalCarousel | 3 layout differences left, not analysed (tool budget); report `migration/screens/OneSchoolGlobalCarousel/parity/default.json` | clean | clean |
| OneSchoolGlobalDetails | clean | clean | clean |
| Notes | clean | clean | clean |

Notes is clean with the Bookmarks agent's block move as it stood at the run. OneSchoolGlobalCarousel `default` runs
with the `empty` scenario (capture plan). Its loading and offline states have the same markup and are clean, so the
three layout differences come from the default state only; they need one look at the report.

## Differences from TST, with evidence

- OneSchoolGlobalDetails page keeps the captured screen form: TST now renders the content in OneSchoolGlobalDetails_Block
  (block wrapper, new aliases; `sources/UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails.mvc.js` view,
  aliases 1-5). The carousel slides use the block form (wrapper `Directory_OneSchoolGlobal.OneSchoolGlobalDetails_Block`)
  with the screen's widget ids under the instance prefix, not the block's own aliases (not compared: no capture with
  slides). Q1.
- Data action path: the React call stays `OneSchoolGlobalDetails/DataActionGetOneSchoolGlobalDetails` (contract); TST
  moved it to `OneSchoolGlobalDetails_Block/DataActionGetOneSchoolGlobalDetails`
  (`migration/clarify/builds/item10-tooling.md:34`). No interim form needed: the contract has the old operation. The
  contract regeneration of I10-6 renames it.
- EntitiesCarousel_Element: TST aliases of the supper meeting and household branches move from 1-4 to 2-5; the React
  elements get no instance id, so no rendered id changes.
- Handler_BackNavigation is ported but cannot run: SwippedItems is never assigned on this screen.

## Questions (`route.py ask`)

- OneSchoolGlobalCarousel Q1 (decision): re-capture OneSchoolGlobalDetails and switch its page to the block form.
  Options: a) re-capture (read-only) and render variant `block`, re-run parity; b) keep the old form until the full
  re-capture. Recommendation a.
- OneSchoolGlobalCarousel Q2 (decision): fictional OSG notes (schools 1431, 1432) and card titles in the Notes mock
  (`pages/Notes/mocks.ts`, outside this agent's scope). Today the Notes mock has no OSG notes and titles unknown items
  "Item <id>". Options: a) add them; b) keep, the user adds a note on a school. Recommendation a.

## Checks

- `npx tsc --noEmit`: no error in the changed files. Other errors exist in files of other agents
  (`api/bookmark/bookmarkCards.ts`, `components/orbit/OrbitErrorMessage`, `lib/legacyShared/actions.test.ts`).
- `npx eslint` and `npx prettier --check` on the changed files: clean. `npm run arch`: no violations.
- Note for the Bookmarks agent: `pages/Notes/hooks/notesState.ts` imports `NoteCategory2` from
  `pages/Notes/components/staticEntities`; a move of that file must update the import.

Tool calls: 70.

## Parity follow-up (2026-10-29)

The 3 layout differences of state `default` (`parity/default.json` diffs 0-2):

- Elements: the Splide track `#splide01`, `#b3-b1-CarouselItems` and `#splide01-list`. TST 351x0, React 390x0. The
  parent `.osui-carousel` has no difference (390 wide in both).
- Cause: the TST default capture sets `--osui-carousel-track-width: 351px` (`analysis/dom/default.html`). OSUI
  `_setCarouselWidth` writes the carousel `offsetWidth` once, at Initialized (React port:
  `app/src/components/ui/Carousel/provider.ts:213-215`).
  - The loading and offline captures of the same route, URL, viewport and browser set 390px
    (`analysis/dom/loading.html`, `offline.html`; `capture/capture-OneSchoolGlobalCarousel-*.json` meta). The
    HouseholdCarousel and SupperMeeting_Carousel captures set 390px too.
  - The default capture also has `--footer-height: 42px`, while loading and offline have 56px. So the carousel measured
    its width before the TST layout settled. This is a capture timing artefact, not markup or logic.
  - Height 0: no visible effect (pixels 0.02%, within the limits).
- Not fixed in code: React measures the settled width, so the only way to match would be to copy the timing artefact.
  I changed no capture and no exemption.
- Question: OneSchoolGlobalCarousel Q3 (decision). Options:
  - a) re-capture state default on TST (read-only, same capture plan) and re-run parity; if 351px comes back, then b.
  - b) add a route-scoped exemption for the track width of state default.
  - c) accept the 3 differences as known.
  Recommendation: a.

Re-run after the last change (no code change since the first run):

| Route | default | loading | offline |
|---|---|---|---|
| OneSchoolGlobalCarousel | layout 3 (Q3), all other counts 0 | clean | clean |
| OneSchoolGlobalDetails | clean | clean | clean |

Tool calls of the follow-up: 12.

## Follow-up 2 (2026-10-29)

Done after the user decisions of 2026-10-29 (Q1 (a), Q2 (a), Q3: capture through Bookmarks, `scenarios.default =
'captured'`) and the new TST captures of both routes.

### What changed

- Container `containers/OneSchoolGlobalDetails/OneSchoolGlobalDetailsContainer.tsx`: only the block form now. It always
  renders the wrapper `Directory_OneSchoolGlobal.OneSchoolGlobalDetails_Block` and uses the block's own aliases from the
  re-captures (`$b1` SubLayout, `$b2` card skeleton, `$b3` ImageCard ... `$b13` content skeleton, `$b15`-`$b18`,
  `$b21`-`$b23`; the names `Block_StudentNumbers`, `ButtonGroup1`, `ComingSoon`, `ComingSoon4` stay). The prop
  `variant` is replaced by `placement: 'screen' | 'slide'`, which only sets the view cache scope.
- Page `pages/OneSchoolGlobalDetails/OneSchoolGlobalDetailsPage.tsx`: renders the block as `$b3` (Q1 (a)). The bottom
  bar is `$b4` and CommonUI_InsideLayout is `$b5`, as in the re-capture. The carousel page passes `placement="slide"`.
- Mock scenario `captured` (Q3):
  - `pages/OneSchoolGlobalCarousel/mocks.ts`: the mock preload is the one school 1430 (Bookmarks card 3).
  - `containers/OneSchoolGlobalDetails/mocks.ts`: the block's data action gives the answer of the carousel capture. All
    texts are empty (name, areas served, address, photo URL, phone, email), there are no business links and
    CommunityBusinessId is 0 (`analysis/calls.md`). The captured lengths are 0. The slide shows "Sorry, no photo
    available" and an empty title, as on TST.
  - The `loading` and `error` scenarios, and offline, use the same one-school preload: the new loading and offline
    captures were opened from the same Bookmarks card and show its slide. `real` keeps the four fictional schools.
    `empty` keeps no slide.
- Notes (Q2 (a)), `pages/Notes/mocks.ts`: two fictional OneSchool Global notes (ids 504 and 505, schools 1431
  "OneSchool Bahia Blanca" and 1432 "OneSchool Tandil", 2026 dates). They are added to the notes mock collection, so
  the LocalNotes of the app start give the OneSchool Global pill. The card titles are keyed by category and item, and
  the subtitle is the cast country. The `empty` scenario is not changed.
- Tests (written first and seen to fail first): `OneSchoolGlobalDetails.test.tsx` (block wrapper `$b3`, block aliases,
  `$b4`/`$b5`), `OneSchoolGlobalCarousel.test.tsx` (scenario `captured`: one slide, empty texts, no photo; scenario
  `loading`: one slide in its skeleton), `pages/Notes/Notes.test.tsx` (3 cards and the search input enabled; the
  OneSchool Global pill lists the two schools; a card opens the carousel with `In_StartingObjectId=1432`).
  `Notes.test.tsx` is outside the file list of the prompt. I changed it because it tests the content of the Notes mock.

### Parity (`route.py parity … --app http://localhost:5174`, after the last code change, vite cwd: this repo)

| Route | default | loading | offline |
|---|---|---|---|
| OneSchoolGlobalCarousel (`captured`) | 43: groups A, B, C, D, E, F | 1: html class (group C) | 26: groups A, C, D, E |
| OneSchoolGlobalDetails | 11: groups C, D | clean | 9: groups C, D |
| Notes (`empty`) | 25: group G | clean | 23: group G |

The slide structure, the slide ids, the empty texts and the photo message are equal to TST now. The groups left are
all outside the files of this route:

- A. Bookmarked state: TST shows "Unmark" and `.ubt-image-card__bookmarked`, React shows "Bookmark". The local bookmark
  of school 1430 is not in the mocks. Q4 (OneSchoolGlobalCarousel).
- B. Call and Email extra in React: on TST, FetchContactDetails answered empty (`calls.md`). This is in the mocks of
  `containers/EntityDetailsActions`. Q4.
- C. Directory_EntityDetailsActions changed on TST: TST calls DataActionFetchNotes on load and has no
  `CW_Notes.NotesSheet`. The html `.popup-disable-scroll` is probably linked (TST default/offline; React only in
  carousel loading). Q7 (OneSchoolGlobalDetails).
- D. ComingSoon has an inline calendar icon on TST
  (`sources/pretty/UBTConnectLibrary.ConnectPatterns.ComingSoon.mvc.js:192-203`); `components/ui/ComingSoon` has none.
  Q8 (OneSchoolGlobalDetails).
- E. `aria-activedescendant` of ButtonGroup1 contains the OutSystems runtime list key (`b3-l1-146060_0-…`), which React
  cannot reproduce. Q5 (OneSchoolGlobalCarousel).
- F. Pixels 0.89%: the result of A to D.
- G. Notes: TST Notes was re-captured on 2026-10-29 10:52 (not committed). TST now shows 10 category pills, a 604px list
  with no `Notes.NoteCard_Item` block and an enabled search input. The offline differences are in the skeleton cards
  and the search input. This is not from the two OneSchool Global notes: the `empty` scenario has not changed. It is
  probably the work of the agent on `components/note` and `components/filter`. I report it and did not fix it. Q7
  (Notes).

### Questions (`route.py ask`)

- OneSchoolGlobalCarousel Q4 (decision): the captured answer for the actions menu (empty contact details, local
  bookmark of 1430). a) the owner of `containers/EntityDetailsActions` mocks adds it; b) accept; c) route exemption.
  Recommendation a.
- OneSchoolGlobalCarousel Q5 (decision): the runtime list key in `aria-activedescendant`. a) exemption for aria values
  that differ only in an OutSystems list key; b) accept; c) TST-like slide ids with an index key. Recommendation a.
- OneSchoolGlobalDetails Q7 (decision): port the TST change of Directory_EntityDetailsActions (FetchNotes on load, no
  NotesSheet). a) port it in the container and re-run parity of its routes; b) keep it until a full re-capture.
  Recommendation a.
- OneSchoolGlobalDetails Q8 (decision): ComingSoon inline icon. a) port it in `components/ui/ComingSoon` and re-run
  parity of its routes; b) keep it. Recommendation a.
- Notes Q7 (decision): the Notes re-capture. a) the agent of `components/note` and `pages/Notes` makes the page match,
  with a `captured` scenario if the TST user now has notes; b) keep `empty` and re-capture later. Recommendation a.

### Checks

- `npx vitest run` on `pages/Notes`, `pages/OneSchoolGlobalCarousel`, `pages/OneSchoolGlobalDetails`,
  `containers/OneSchoolGlobalDetails`, `components/directory`, `platform/bootstrap`, `containers/NoteListActions`:
  35 files and 214 tests pass (the carousel folder was run again after its last test change: 11 of 11). No "Errors"
  line.
- `npx tsc --noEmit`: 0 errors. `npx eslint` and `npx prettier --check` on the 9 changed files: clean.
  `npm run arch`: no violations.
- Files changed: the container and its `mocks.ts`, both route pages, `pages/OneSchoolGlobalCarousel/mocks.ts`,
  `pages/Notes/mocks.ts`, and the tests `OneSchoolGlobalCarousel.test.tsx`, `OneSchoolGlobalDetails.test.tsx` and
  `pages/Notes/Notes.test.tsx`. I did not change `components/directory`, the captures or the exemptions.

Tool calls of follow-up 2: 56.
