# KebabButton_BookmarkNotes

OutSystems: `UBTConnectLibrary.ConnectPatterns.KebabButton_BookmarkNotes` · pack
`migration/blocks/UBTConnectLibrary.ConnectPatterns.KebabButton_BookmarkNotes.md` (compiled source
`migration/blocks/sources/UBTConnectLibrary.ConnectPatterns.KebabButton_BookmarkNotes.mvc.js`)

| Input    | Type    | Prop       | Default |
| -------- | ------- | ---------- | ------- |
| isEnable | Boolean | `isEnable` | `true`  |

The pack lists no input; isEnable is in the compiled model (:15-17). Events: `Edit` → `onEdit`, `Delete` → `onDelete`
(Handler_Edit / Handler_Delete, :280-370). Placeholders: none.

Markup (view :130-270): CustomContainer `ubt-kebab-menu` > container (class `kebab-blocker` when not isEnable, else
none) > ContextMenu (Position Left, plain icon anchor, isEnabled = isEnable; options: Edit "Edit note", Delete
"Delete note"; Send Gift, Mark as Read and Share off).

## Not captured

No capture renders this block (no captured note): built from the compiled view, stories `CompiledView` and
`Disabled`, tested in `KebabButton_BookmarkNotes.test.tsx`.
