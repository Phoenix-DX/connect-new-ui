### app/src/shared/UBTConnect/UnsupportedVersion_Wrapper/README.md

**Change 1**

Before:

> Inputs: none (the `In_Is…` names are local variables). Events: none. Placeholders: none. Child blocks:
> `CustomContainer`, `UnsupportedVersion_Native` / `_WebView` / `_Browser`, `PreventBackNavigation`.
> 
> OnInitialize stores `get_IsUnsupportedVersion()` (`../lib/actions.ts`). With an unsupported app or browser version:
> CustomContainer (padding vertical ExtraLarge) › Native if the app version is unsupported, else WebView if the WebView
> version is, else Browser; then PreventBackNavigation (back is blocked while the card shows). Otherwise empty.

After:

> The block has no inputs (the `In_Is…` names are local variables). The block has no events and no placeholders. The child
> blocks are `CustomContainer`, `UnsupportedVersion_Native` / `_WebView` / `_Browser` and `PreventBackNavigation`.
> 
> OnInitialize stores `get_IsUnsupportedVersion()` (`../lib/actions.ts`).
> 
> When the app version or the browser version is unsupported, the block renders two parts:
> 
> - CustomContainer (padding vertical ExtraLarge). It contains one card:
>   - Native, when the app version is unsupported.
>   - Otherwise WebView, when the WebView version is unsupported.
>   - Otherwise Browser.
> - PreventBackNavigation. The user cannot go back while the card shows.
> 
> Otherwise, the block is empty.

**Change 2**

Before:

> Never shown on TST (no minimum versions: every output False). Decision U16: the Browser variant as a mock scenario,
> `?mock=unsupported-browser` (remembered for the tab like every `?mock=`). Tested in `UnsupportedVersion_Wrapper.test.tsx`;
> stories `Supported`, `UnsupportedBrowser`.

After:

> TST never shows this block. TST has no minimum versions, so every output is False. Decision U16: the Browser variant is a
> mock scenario, `?mock=unsupported-browser`. It stays active for the tab, like every `?mock=`. The test is in
> `UnsupportedVersion_Wrapper.test.tsx`. The stories are `Supported` and `UnsupportedBrowser`.

**Change 3**

Before:

> - Scenario name `unsupported-browser` chosen here (U16 names no switch).
> - Where the wrapper is rendered (Login, lock screen: spec section 9) is the caller's concern.

After:

> - The port chose the scenario name `unsupported-browser` (U16 does not name a switch).
> - The caller decides where the wrapper renders (Login, lock screen: spec section 9).

