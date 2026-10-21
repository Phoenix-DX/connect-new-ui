### app/src/shared/UBTConnectLibrary/Layout_LoginFlow/README.md

**Change 1**

Before:

> Events: `OnPathCalculated` → `onOnPathCalculated`, `OnReady(MainId)` → `onOnReady`. Placeholders:
> `Placeholder_Header` → `placeholderHeader`, `Placeholder_Content` → `placeholderContent`,
> `Placeholder_CommonUI_Inside_Layout` → `placeholderCommonUIInsideLayout`. LayoutRuntime_Top unless In_IsCommonBlock;
> the background (`SVG_Background_LoginWrapper`) with In_HasOverlay. Main renders the `<prefix>-Main` id that OnReady
> passes.

After:

> The block raises two events: `OnPathCalculated` → `onOnPathCalculated` and `OnReady(MainId)` → `onOnReady`.
> The block has three placeholders:
> 
> - `Placeholder_Header` → `placeholderHeader`.
> - `Placeholder_Content` → `placeholderContent`.
> - `Placeholder_CommonUI_Inside_Layout` → `placeholderCommonUIInsideLayout`.
> 
> The block renders these parts:
> 
> - LayoutRuntime_Top, unless In_IsCommonBlock is on.
> - The background (`SVG_Background_LoginWrapper`), when In_HasOverlay is on.
> - Main, with the id `<prefix>-Main`. The block passes this id to OnReady.

**Change 2**

Before:

> Pack variants 2–4 stop at depth 7; the captures are the full blocks from the screen DOMs, nested blocks collapsed.
> Caller blocks not built yet are `PendingBlock` in the stories (Tile, Version_LoginWrapper, Dialog_ExitConfirmation,
> AppManager_Events, ActionConfirmationDialog).

After:

> Pack variants 2–4 stop at depth 7. The captures are the full blocks from the screen DOMs, with the nested blocks collapsed.
> In the stories, `PendingBlock` replaces the caller blocks that the project has not built yet: Tile, Version_LoginWrapper,
> Dialog_ExitConfirmation, AppManager_Events and ActionConfirmationDialog.

**Change 3**

Before:

> - In_HasOverlay False: from the compiled code only, tested.
> - The shell's lock container (`src/shell/dialogs/BlockPinUnlock.tsx`) still writes this layout's markup itself (shell
>   file); it can render this block when the shell is next opened.

After:

> - In_HasOverlay False: the source is the compiled code only. The block has a test.
> - The shell's lock container (`src/shell/dialogs/BlockPinUnlock.tsx`) still writes the markup of this layout itself. This is a
>   shell file. The container can render this block when a developer next opens the shell.

