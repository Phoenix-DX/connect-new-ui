# Drift WP6: ItemNotesSection in EventDetail and LDM_EventDetail_V2 (2026-10-29)

Row: events R1 (class A). Decision E-Q1 (a): Add Note uses the stateful notes store. Source: live TST code of
2026-10-27 (`migration/screens/EventDetail/analysis/sources/pretty/UBTConnect_Utils.CW_Notes.ItemNotesSection.mvc.js`,
`ScreenBlock_EventDetail.mvc.js:805-860, :1580-1595, :1780-1910, :2450-2470`,
`LDM_EventDetail_V2/.../EventDetail_HostCard.mvc.js:700-760`, `ScreenBlock_EventDetail_V2.mvc.js:1385-1467, :2054-2614`).

## Result

- New container `app/src/containers/ItemNotesSection/`. It is in `containers/` because it uses the NoteListActions
  container (components import no containers). It is built from `ItemCard_ActionBar`, `NotesSheet` (not changed) and
  `NoteListActionsContainer`. The block ids are the TST ids: `$b1` container, `$b2` preview (only when
  `In_Notes.Total > 0`), `$b3` container (border-top s, neutral-2, padding-y s), `$b4` action bar, `$b5` NotesSheet.
  IsAddNote opens and closes the sheet. The preview and the sheet raise On_NotesChanged and On_NoteDeleted. The
  OnReady share-type branch and the share and bookmark handlers are not ported, because no widget uses them (see the
  doc comment).
- EventDetail: the `orbit-event-notes` container is the last info row (`b1-$b3`, category "Orbit Event", item
  In_EventId). The `EventNotes` state, `FetchEventNotes` at start (it does not wait for OnReady, as in the capture
  order), Handler_OnNotesChanged and Handler_OnNoteDeleted are added. The block ids after `$b2` move by +1
  (pill `$b4`, accordion `$b5/$b6/$b7`, `$b10-$b12`, day selection `$b8`, cards `$b9`, NoInformation `$b13/$b14`,
  skeleton `$b15`, footer `$b16`).
- LDM_EventDetail_V2: `ldm-notes` is the last child of the host card (`b1-b5-$b2`, category "LDM Event", item
  `EventHostId:EventId`). The `eventNotes` state, `FetchEventNotes` at start (before GetCoordinatorDetails),
  HandlerOn_NotesChanged and HandlerOn_NoteDeleted are added.
- API: `fetchEventNotes` and `fetchLdmEventNotes` (`api/event/repository.ts`), and the mapper `toEventNotes`. The V2
  data action was not in the contract. It is now in `api/openapi.yaml` (1 path, 2 schemas, from the capture's
  screen variables), and `schema.d.ts` was regenerated with `npm run gen:api` (+72 lines, only this action).
- Mocks: `containers/ItemNotesSection/mocks.ts` gives both data actions. They read the in-memory notes collection
  that AddNote, UpdateNote and Delete change. The first visit answers Total 0 and an empty list, as captured.
- Stylesheets: the two TST block stylesheets were missing in the app. Their text is copied from the captured
  `bundle.css` sections to `app/public/UBTConnect/css/Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_EventDetail.css`
  (`.orbit-event-notes` margin 24px) and `.../Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_HostCard.css`
  (`.ldm-notes` padding 16px). The generated map `routes.css.generated.ts` is not changed (see Q1).

## Files

New: `app/src/containers/ItemNotesSection/{ItemNotesSection.tsx, ItemNotesSection.test.tsx, notes.ts, index.ts, mocks.ts}`,
`app/src/pages/EventDetail/hooks/eventDetailNotes.test.ts`, the 2 stylesheets above.
Changed: `app/src/api/openapi.yaml`, `app/src/api/schema.d.ts` (generated), `app/src/api/event/{mapper,repository,index}.ts`,
`app/src/pages/EventDetail/{EventDetailPage.tsx, components/EventDetailView.tsx, hooks/eventDetailState.ts, hooks/useEventDetail.ts}`
and its tests (`EventDetail.test.tsx`, `components/EventDetailView.test.tsx`, `hooks/useEventDetail.test.tsx`),
`app/src/pages/LDM_EventDetail_V2/{components/EventDetail_HostCard.tsx, components/LdmEventDetailView.tsx, hooks/ldmEventDetailState.ts, hooks/useLdmEventDetail.ts}`
and `hooks/useLdmEventDetail.test.tsx`. The edits to existing files were made with one Python script of exact-match
replacements (each match checked once, dry run first). Prettier was run with `--write` on these files.

## Checks

- `tsc --noEmit`: no error in WP6 files (147 errors elsewhere at the time, from WP5 notifications and other packages).
- `eslint`, `prettier --check` on the changed files: clean. `npm run dup`: no new clone (the one clone in
  `api/event/mapper.ts` is old code). `npm run arch`: 2 violations, neither in WP6 (`components/note/NotesSheet` →
  `legacy/os/os-exceptions`; `platform/bootstrap/mocks.ts` → `containers/EntityDetailsActions/mocks.ts`).
- Vitest (container, both pages, `api/event`, `mocks/contract`, `mocks/handlers`): the new tests pass (container 6,
  reducer 3, view 1). The view, page and id tests pass. **12 hook tests fail with a cause outside WP6:** in
  `useEventDetail.test.tsx` (4) and `useLdmEventDetail.test.tsx` (8), the `vi.mock` of
  `@/platform/navigation/hooks` (`useWasRestoredFromCache`) and of `@/platform/feedback/flowErrors` has no effect.
  `pages/Notes` (not in WP6, does not import WP6 code) fails the same way ("a failed GetNotes goes to the flow
  handler"). A probable cause is that the test setup now loads these modules before the test's mocks, through the new
  `platform/bootstrap/mocks.ts` → `containers/EntityDetailsActions/mocks.ts` import (the same import is the arch
  violation). Earlier in the session the suites did not load at all (`ReferenceError: ENTITY_LOGO` in
  `pages/Updates_SingleList/mocks.ts`, WP2), until that package fixed it.

## Parity (after the last change, `route.py parity <S> --app http://localhost:5174`)

| Route | State | Before (triage) | After | Left, class |
|---|---|---|---|---|
| EventDetail | default | R1: structure 1, call 1, attr 1, pixel 1 (8.45%); R4: text 3, layout 6, position 3 | text 3, layout 6, position 3; pixel 0 (6.15%) | 12, C (R4): DaySelector rule pins `b1-b7-`, ids are now `b1-b8-` (WP1) |
| EventDetail | loading | 0 | 0 | none |
| EventDetail | offline | R4: style 9 | style 9 | 9, C (R4): skeleton shimmer rule pins `b1-$b14`, id is now `b1-$b15` (WP1) |
| LDM_EventDetail_V2 | default | structure 1, layout 3, call 1, pixel 1 | 0 | none |
| LDM_EventDetail_V2 | loading, offline | 0 | 0 | none |

EventDetail differences left: only the exemption ids that WP1 fixes. LDM_EventDetail_V2: clean.

## Questions

- **Q1 (stylesheet map).** `routes.css.generated.ts` (generated by `migration/tools/css_sets.py`) does not list the 2
  new block stylesheets. The new captures also list the note stylesheets on both routes. `css_sets.py --check` stops on
  a new order conflict: `KebabButton_BookmarkNotes.css / UBT_AppManager.PIN.PinCode.css` is now captured "before" in
  EventDetail and LDM_EventDetail_V2, and "after" in Profile. The parity of both routes is clean in the notes area as
  it is. (a) At the gate, the lead accepts or fixes the conflict in `css_sets.py` and runs it once for all routes.
  (b) Hand-edit the two rows of the generated file. (c) Leave it. Recommendation: (a). The file is shared, and the run
  also takes the stylesheet changes of the other packages.
- **Q2 (FetchEventNotes failure).** A failed FetchEventNotes keeps the default EventNotes and goes to no flow handler,
  the same as the GetCoordinatorDetails precedent on LDM_EventDetail_V2. No TST capture shows a failure of this call
  alone. (a) Keep it. (b) Send the failure to the flow handler. Recommendation: (a), then confirm the runtime behaviour
  of a failed at-start data action with one MCP or runtime-source check.
- **NotesSheet (WP4):** used as is. WP6 needs nothing from it. The section always renders NotesSheet as `$b5`
  (TST `$if(false)` else-branch), so the popup change of WP4 keeps the id.
- **Contract file:** `api/openapi.yaml` is shared. The WP6 edit is one inserted path and two schemas (alphabetical,
  before GetCoordinatorDetails). Other packages that regenerate `schema.d.ts` keep it.

Tool calls: about 80.
