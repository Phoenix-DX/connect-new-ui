# Layout_LoginFlow

OutSystems: `UBTConnectLibrary.Layouts.Layout_LoginFlow` · pack
`migration/blocks/UBTConnectLibrary.Layouts.Layout_LoginFlow.md`

| Input            | Type    | Prop              | Default |
| ---------------- | ------- | ----------------- | ------- |
| In_HasOverlay    | Boolean | `inHasOverlay`    | `false` |
| In_ExtendedClass | Text    | `inExtendedClass` | `''`    |
| In_IsCommonBlock | Boolean | `inIsCommonBlock` | `false` |

The block raises two events: `OnPathCalculated` → `onOnPathCalculated` and `OnReady(MainId)` → `onOnReady`.
The block has three placeholders:

- `Placeholder_Header` → `placeholderHeader`.
- `Placeholder_Content` → `placeholderContent`.
- `Placeholder_CommonUI_Inside_Layout` → `placeholderCommonUIInsideLayout`.

The block renders these parts:

- LayoutRuntime_Top, unless In_IsCommonBlock is on.
- The background (`SVG_Background_LoginWrapper`), when In_HasOverlay is on.
- Main, with the id `<prefix>-Main`. The block passes this id to OnReady.

## Captured variants (4 tested)

| Capture | Source                                   | What it shows                                          |
| ------- | ---------------------------------------- | ------------------------------------------------------ |
| v1      | pack variant 1, BookmarksByGroup/default | lock container (common block, lock classes)            |
| v2      | `Login/analysis/dom/default.html`        | Login: content and CommonUI placeholders               |
| v3      | `PINChange/analysis/dom/default.html`    | PINChange: header link, `ubt-lock-screen`, no CommonUI |
| v4      | `PINRegister/analysis/dom/default.html`  | PINRegister: header link, CommonUI                     |

Pack variants 2–4 stop at depth 7. The captures are the full blocks from the screen DOMs, with the nested blocks collapsed.
In the stories, `PendingBlock` replaces the caller blocks that the project has not built yet: Tile, Version_LoginWrapper,
Dialog_ExitConfirmation, AppManager_Events and ActionConfirmationDialog.

## Not captured / not settled

- In_HasOverlay False: the source is the compiled code only. The block has a test.
- The shell's lock container (`src/shell/dialogs/BlockPinUnlock.tsx`) still writes the markup of this layout itself. This is a
  shell file. The container can render this block when a developer next opens the shell.
