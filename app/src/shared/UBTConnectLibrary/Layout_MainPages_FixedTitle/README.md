# Layout_MainPages_FixedTitle

OutSystems: `UBTConnectLibrary.Layouts.Layout_MainPages_FixedTitle` · pack
`migration/blocks/UBTConnectLibrary.Layouts.Layout_MainPages_FixedTitle.md`

| Input                       | Type    | Prop                          | Default |
| --------------------------- | ------- | ----------------------------- | ------- |
| UsePullToRefresh            | Boolean | `usePullToRefresh`            | `false` |
| ExtendedClass               | Text    | `extendedClass`               | `''`    |
| EnableAccessibilityFeatures | Boolean | `enableAccessibilityFeatures` | `false` |
| isGrayBackground            | Boolean | `isGrayBackground`            | `false` |

Events: `OnPullToRefresh`, `OnHeaderScrolled(IsHeaderScrolled)` → `onOnPullToRefresh`, `onOnHeaderScrolled` (not
raised, see below). Placeholders: `Placeholder_Header_Title`, `Placeholder_Header_Right`, `Placeholder_Header_Input`,
`Placeholder_Header_Input_Icon`, `HeaderContent`, `Content`, `Bottom`, `Placeholder_CommonUI_Inside_Layout` →
`placeholderHeaderTitle`, `placeholderHeaderRight`, `placeholderHeaderInput`, `placeholderHeaderInputIcon`,
`headerContent`, `content`, `bottom`, `placeholderCommonUIInsideLayout`. CommonUI and bottom bar come from the screen
(Layout_HomePage approach).

## Captured variants (2 tested of 4)

| Capture | Source                     | What it shows                                                  |
| ------- | -------------------------- | -------------------------------------------------------------- |
| v1      | Notes/default              | gray background, title and search rows, filter pills, CommonUI |
| v2      | Updates_SingleList/loading | header content with list header, loading list, bottom bar      |

Notes/loading and Updates_SingleList/default differ only in placeholder content. The title and search rows are inside
Columns_Two (compared as nested blocks); the unit test checks the h2 / header-right structure.

## Not captured / not ported

- Extended class, accessibility class, PullToRefresh: compiled view only, tested.
- **SetScrollEvents (OnReady, controller :626-693) / OnDestroy (:694)**: SetMainFixedScroll / SetScrollShadow /
  RemoveScrollEvents / ClearTimeout (`../lib/actions.ts`), ports of the global `ScrollEvent` of
  `migration/runtime-sources/UBTConnectLibrary.ScrollAnimations.js` (mainFixedScroll :272-337, shadowScroll :151-205).
  - Sticky title: above `.header-top-search`'s `--header-size` + the body's `--status-bar-height`,
    `header .header-top-content` gets a top padding of status bar × scroll progress.
  - A scroll across that line raises OnHeaderScrolled (true / false, once each time the scroll crosses the line)
    through OnHandle_OnHeaderScrolledTrigger (:835-860).
  - Header / footer shadow variables as Layout_DetailPage.
  - Tests scroll the container. No capture scrolls.
- OutSystems UI LayoutReady / SetLang / LayoutDestroy / SkipToContent: not ported (as Layout_HomePage). AddFavicon's
  result (the `shortcut icon` link) is static in `index.html`.
- Screen blocks in the placeholders (notification icon, Input, FilterSheet_Icon, lists) are PendingBlock in stories.
