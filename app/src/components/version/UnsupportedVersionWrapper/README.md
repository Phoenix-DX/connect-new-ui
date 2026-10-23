# UnsupportedVersion_Wrapper

OutSystems: `UBTConnect.App_Common.UnsupportedVersion_Wrapper` · pack
`migration/blocks/UBTConnect.App_Common.UnsupportedVersion_Wrapper.md` (survey only)

The block has no inputs (the `In_Is…` names are local variables). The block has no events and no placeholders. The child
blocks are `CustomContainer`, `UnsupportedVersion_Native` / `_WebView` / `_Browser` and `PreventBackNavigation`.

OnInitialize stores `get_IsUnsupportedVersion()` (`shared/UBTConnect/lib/unsupportedVersion.ts`).

When the app version or the browser version is unsupported, the block renders two parts:

- CustomContainer (padding vertical ExtraLarge). It contains one card:
  - Native, when the app version is unsupported.
  - Otherwise WebView, when the WebView version is unsupported.
  - Otherwise Browser.
- PreventBackNavigation. The user cannot go back while the card shows.

Otherwise, the block is empty.

## Captured variants (0)

TST never shows this block. TST has no minimum versions, so every output is False. Decision U16: the Browser variant is a
mock scenario, `?mock=unsupported-browser`. It stays active for the tab, like every `?mock=`. The test is in
`UnsupportedVersion_Wrapper.test.tsx`. The stories are `Supported` and `UnsupportedBrowser`.

## Not settled

- The port chose the scenario name `unsupported-browser` (U16 does not name a switch).
- The caller decides where the wrapper renders (Login, lock screen: spec section 9).
