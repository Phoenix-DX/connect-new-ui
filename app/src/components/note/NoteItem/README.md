# Note_Item

OutSystems: `UBTConnectLibrary.ConnectPatterns.Note_Item` · pack
`migration/blocks/UBTConnectLibrary.ConnectPatterns.Note_Item.md` (compiled source
`migration/blocks/sources/UBTConnectLibrary.ConnectPatterns.Note_Item.mvc.js`)

| Input           | Type         | Prop             | Default                 |
| --------------- | ------------ | ---------------- | ----------------------- |
| In_NoteId       | Long Integer | `inNoteId`       | `'0'`                   |
| In_Note         | Text         | `inNote`         | `''`                    |
| DateCreatedUtc  | DateTime     | `dateCreatedUtc` | `'1900-01-01T00:00:00'` |
| DateEditedUtc   | DateTime     | `dateEditedUtc`  | `'1900-01-01T00:00:00'` |
| IsEditing       | Boolean      | `isEditing`      | `false`                 |
| IsDimmed        | Boolean      | `isDimmed`       | `false`                 |
| In_SearchString | Text         | `inSearchString` | `''`                    |

The pack lists no input; they are in the compiled model (:12-56). Events (:795-925): `OnEditRequested(NoteId)` →
`onOnEditRequested` (after EdittingNote = In_Note), `OnSaveEditRequested(NoteId, Out_Note)` →
`onOnSaveEditRequested`, `OnDeleteRequested(NoteId)` → `onOnDeleteRequested`, `OnCancelEditRequested` →
`onOnCancelEditRequested`. Placeholders: none.

Markup (view :211-790).

- Reading: Columns_Two (reduce last, spacing xs) with two columns:
  - Left: Columns_Two (reduce first, `padding-top-xs`) with two columns:
    - Icon list_alt_fill cyan-dark (+ `note-item-dimmed`).
    - CustomContainer (padding left xs, flex column, width min 0 max 100%) with two children:
      - TextEllipsis (no search) or CustomText with the search highlighted (primary, semi-bold).
      - CustomText `RelativeTimeTag` = GetRelativeTimeTag(DateCreatedUtc, DateEditedUtc) (neutral-7, xxs).
  - Right: KebabButton_BookmarkNotes (isEnable = not IsDimmed).
- Editing: two siblings:
  - Columns_Two (reduce first, spacing xs, `padding-top-xs`) with two columns:
    - Icon.
    - TextArea_WithCounter (In_InitialLength = Length(EdittingNote)) > TextArea `TextArea_EdittingNote` (max length 100).
  - CustomContainer > Columns_Two (spacing xs) with two columns:
    - Button small secondary "Cancel".
    - Button small primary "Save", disabled while EdittingNote = In_Note.

GetRelativeTimeTag is ported in `../lib/actions.ts` (TST library controller).

## Not captured

No capture renders this block (no captured note): built from the compiled view, stories `CompiledView`, `Search`,
`Dimmed`, `Editing`, tested in `Note_Item.test.tsx`.

## Not settled

- The relative time is computed at render (OutSystems caches it until a date changes); it does not tick.
- The edit TextArea has `textLines: 3`; the captured text areas (ContactByEmailMember raw DOM) carry no `rows`, so
  none is rendered.
