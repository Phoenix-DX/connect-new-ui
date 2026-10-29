# Item 10: dedupe of the notes cards, empty state, tag lists and layouts (jscpd gate)

Decision: auto decision row 13 of `migration/clarify/auto-decisions-2026-10-29.md` (Fable, option a). Shapes 3, 4, 6, 7
and 8 of that row. Shapes 1, 2 and 5 (Orbit admin) are the work of another agent. Date: 2026-10-29.

## jscpd

- Before: 50 clones, 952 lines (0.65 %), over the threshold 0.57 %.
- After: 35 clones, 635 lines (0.43 %), under the threshold. This total also has the Orbit admin dedupe of the other
  agent, which ran at the same time. The 5 pairs below removed 6 clones and 116 duplicated lines.
- The changed files are in no clone after the change (`grep` of the jscpd output: 0 rows).

## Pairs

| Shape | Pair                                                                                                                                     | Shared module                                                                                                                                                                                                                                                                                                                                 | What varies                                                                                                                                                                                                                    | jscpd lines before → after | Tests (new)                                                                                                                                                          |
| ----- | ---------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 3     | `pages/Bookmarks/components/Bookmarks_Card_Item.tsx`, `pages/Notes/components/NoteCard_Item.tsx`                                         | `components/note/ItemCardWithNotes/useCardNotes.ts` (own copy of the item, `isAddNote`, `openNoteSheet`, `closeNoteSheet`, `handler_OnNotesChanged`, `removeNote`; pure `withoutNote`: filter, Total = length); `containers/CardWithNotes/CardWithNotesSheet.tsx` (ItemCard_WithNotes + NoteListActionsContainer + NotesSheet, as a fragment) | `noteCategoryId` (bookmark category against note category); `actions` slot (Unmark + Add Note against Add Note); `onNoteDeleted` (Bookmarks: `removeNote`; Notes: `wasLastNote` raises UpdateNoteCardsList, else `removeNote`) | 46 (2 clones: 10 + 36) → 0 | `useCardNotes.test.ts` (6), `CardWithNotesSheet.test.tsx` (3)                                                                                                        |
| 4     | `components/ui/EmptyState/EmptyState.tsx`, `pages/Notes/components/EmptyListBorderless.tsx`                                              | `EmptyState` prop `borderless` (block name `ConnectPatterns.EmptyListBorderless`, border radius only, circle `CyanLightest`, icon `Primary`); preset `EmptyListBorderless` exported from the same folder; page-local file deleted                                                                                                             | the props above                                                                                                                                                                                                                | 29 → 0                     | `EmptyListBorderless.test.tsx` (3, inline snapshot). A temporary test showed the same `innerHTML` as the deleted page-local block for 3 prop sets before the delete. |
| 6     | `components/filter/HorizontalFilterTagList/Horizontal_Filter_TagList.tsx`, `components/ui/HorizontalTagList/HorizontalTagList.tsx`       | `components/ui/HorizontalTagList/useTagToggleList.ts` (own copy of the list, `toggle`: single and mandatory selection, Changed)                                                                                                                                                                                                               | nothing in the logic; the JSX of each block stays                                                                                                                                                                              | 16 → 0                     | `useTagToggleList.test.ts` (5)                                                                                                                                       |
| 7     | `components/layout/OrbitBlankLayout/OrbitBlankLayout.tsx`, `components/layout/OrbitLayout/OrbitLayout.tsx`                               | `components/layout/OrbitLayout/useOrbitLayoutEffects.ts` (setLayoutTheme Orbit before paint, then IOSMetaTags and IOSPreventSwipe)                                                                                                                                                                                                            | nothing                                                                                                                                                                                                                        | 11 → 0                     | `useOrbitLayoutEffects.test.ts` (1)                                                                                                                                  |
| 8     | `components/layout/MainLayoutFixedTitle/MainLayoutFixedTitle.tsx`, `components/layout/MainPagesUpgradeLayout/MainPagesUpgradeLayout.tsx` | `components/layout/useMainFixedScrollEvents.ts` (ref of the latest OnHeaderScrolled, SetMainFixedScroll, SetScrollShadow, cleanup)                                                                                                                                                                                                            | nothing                                                                                                                                                                                                                        | 14 → 0                     | `useMainFixedScrollEvents.test.ts` (1)                                                                                                                               |

Notes:

- Shape 3: the body part is in `containers/`, because it renders `NoteListActionsContainer` and `components/` must not
  import `containers/` (overview, rule 4). The hook is in `components/` (it imports only `lib/`).
- Shape 4: the user decision of Notes Q10 (2026-10-29) kept `EmptyListBorderless` page-local until a second route uses
  it. This dedupe (auto decision row 13) moves it to `components/ui/EmptyState` now, with no second route. The block
  keeps its `@origin` and gets an `@os-block` tag in `EmptyState.tsx`.
- Shape 8, option `mode: 'fixed' | 'main'` for `MainLayout`: not done. The `MainLayout` effect calls `setMainScroll`, so
  jscpd finds no clone there; the 2 JSX clones of `MainLayout` and `MainLayoutFixedTitle` (18 lines each) stay as old
  debt (`app/docs/refactor/duplicates.md`, "Layout_MainPages, _FixedTitle": kept).

## Parity (`route.py parity <R> --app http://localhost:5174`, after the last code change)

The counts are the same before and after in every state (no count goes up or down).

| Route         | State                                                | Before                                                          | After            |
| ------------- | ---------------------------------------------------- | --------------------------------------------------------------- | ---------------- |
| Bookmarks     | default, loading, offline                            | clean                                                           | clean            |
| Notes         | default                                              | pixel 1 (0.58 %)                                                | pixel 1 (0.58 %) |
| Notes         | loading, offline                                     | clean                                                           | clean            |
| Notifications | default                                              | structure 27, layout 18, position 6, text 2, pixel 1            | the same         |
| Notifications | offline                                              | structure 2                                                     | structure 2      |
| Notifications | loading                                              | clean                                                           | clean            |
| HomeFeed      | default                                              | layout 8, style 6, class 3, text 2, position 1, pixel 1, call 1 | the same         |
| HomeFeed      | offline                                              | layout 2, text 1                                                | the same         |
| HomeFeed      | loading                                              | clean                                                           | clean            |
| OrbitLanding  | default, loading, offline, popup-filters, popup-sort | clean                                                           | clean            |

The HomeFeed and Notifications differences are the known drift of `item10-finish.md` (mock data and TST changes).

## Checks

- `npx tsc --noEmit`: pass.
- `eslint` and `prettier --check` on the 22 changed and new files: pass.
- `npm run arch`: no violations (139 known ignored).
- `knip` (files, dependencies, unlisted, unresolved, binaries, duplicates): pass. `check-unused-exports.mjs`: 5 new
  rows, all in the Orbit admin files of the other agent (`components/orbit/AdminDetailScaffold`,
  `containers/AdminQRCodeScan`, `pages/OrbitAdmin*Detail/hooks`); 0 rows in the files of this note.
- `npx vitest run src/pages/Notes src/pages/Bookmarks src/components src/containers/CardWithNotes
src/containers/NoteListActions`: 249 files, 1101 tests pass.

## Code files changed

- New: `app/src/components/note/ItemCardWithNotes/useCardNotes.ts` (+ test), `app/src/containers/CardWithNotes/`
  (`CardWithNotesSheet.tsx`, `index.ts`, test), `app/src/components/ui/EmptyState/EmptyListBorderless.test.tsx`,
  `app/src/components/ui/HorizontalTagList/useTagToggleList.ts` (+ test),
  `app/src/components/layout/OrbitLayout/useOrbitLayoutEffects.ts` (+ test),
  `app/src/components/layout/useMainFixedScrollEvents.ts` (+ test).
- Changed: `pages/Bookmarks/components/Bookmarks_Card_Item.tsx`, `pages/Notes/components/NoteCard_Item.tsx`,
  `pages/Notes/components/NoteCard_List.tsx`, `components/ui/EmptyState/EmptyState.tsx`,
  `components/ui/HorizontalTagList/HorizontalTagList.tsx`,
  `components/filter/HorizontalFilterTagList/Horizontal_Filter_TagList.tsx`, `components/layout/OrbitLayout/OrbitLayout.tsx`,
  `components/layout/OrbitBlankLayout/OrbitBlankLayout.tsx`, `components/layout/MainLayoutFixedTitle/MainLayoutFixedTitle.tsx`,
  `components/layout/MainPagesUpgradeLayout/MainPagesUpgradeLayout.tsx` (all under `app/src/`).
- Deleted: `app/src/pages/Notes/components/EmptyListBorderless.tsx`.
- Docs: `app/docs/refactor/duplicates.md` (new section "Result of the item 10 dedupe").
