# Note_Item_List

OutSystems: `UBTConnectLibrary.ConnectPatterns.Note_Item_List` · pack
`migration/blocks/UBTConnectLibrary.ConnectPatterns.Note_Item_List.md` (compiled source
`migration/blocks/sources/UBTConnectLibrary.ConnectPatterns.Note_Item_List.mvc.js`)

| Input              | Type           | Prop                | Default |
| ------------------ | -------------- | ------------------- | ------- |
| Notes              | Notes (record) | `notes`             | `{}`    |
| In_EditingNoteId   | Long Integer   | `inEditingNoteId`   | `'0'`   |
| In_ShowPreviewOnly | Boolean        | `inShowPreviewOnly` | `false` |
| In_SearchString    | Text           | `inSearchString`    | `''`    |

The pack lists no input; they are in the compiled model (:12-47). Events: `OnShowAllNotes` → `onOnShowAllNotes`,
`OnDeleteRequested(NoteId)` → `onOnDeleteRequested` (after the confirmation), `OnEditRequested(NoteId)` →
`onOnEditRequested`, `OnCancelEditRequested` → `onOnCancelEditRequested`, `OnSaveEditRequested(NoteId, Out_Note)` →
`onOnSaveEditRequested`. Placeholders: none.

Markup (view :181-848): CustomContainer (background neutral-2 in preview else neutral-0, padding s, margin bottom xs,
radius soft, min height 88px). It holds one of these:

- When ShowNotesTotal and preview: a List of ShortList Note_Items, and a "Show all notes (Total)" CustomText.
  The CustomText is cyan-dark, xxs, semi-bold, with padding top s. It shows only while no note is edited. Its text is ""
  when the list is empty.
- A List of all Note_Items.
- The empty state (flex column, centred, end, min height 80px; "Your notes will appear here.", neutral-7, xxs).

Each Note_Item gets IsEditing (the edited id; in the full list only when an id is edited), IsDimmed (another note is
edited) and In_SearchString.

After the CustomContainer comes the Popup "Delete note?":

- Top header: CircleButton cyan-lightest 40 with the primary Delete icon in a `margin-bottom-m` container.
- Two `text-align-center` lines.
- Footer Columns_Two spacing s: "cancel" secondary small, "Delete" primary small.

Controller (:850-1206):

- OnInitialize and OnParametersChanged (only when In_EditingNoteId = 0) run ShowNotesTotal (Total > 2 or Length > 2;
  ShortList = first two).
- Handler_OnDeleteRequested toggles the dialog and keeps the id.
- Delete toggles the dialog and raises OnDeleteRequested.
- Cancel toggles the dialog and resets the id.

## Not captured

No capture renders this block: built from the compiled view, stories `CompiledView`, `Preview`, `Editing`, `Empty`,
tested in `Note_Item_List.test.tsx`. The OutSystems List widget markup (`div.list.list-group.OSFillParent`) follows
BottomBarMenu; `animateItems: true` adds no captured markup.
