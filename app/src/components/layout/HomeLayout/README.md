# Layout_HomePage

OutSystems: `UBTConnectLibrary.Layouts.Layout_HomePage` · pack
`migration/blocks/UBTConnectLibrary.Layouts.Layout_HomePage.md`

| Input                       | Type    | Prop                          | Default              |
| --------------------------- | ------- | ----------------------------- | -------------------- |
| UsePullToRefresh            | Boolean | `usePullToRefresh`            | `false`              |
| ExtendedClass               | Text    | `extendedClass`               | `''`                 |
| EnableAccessibilityFeatures | Boolean | `enableAccessibilityFeatures` | `false`              |
| ContentBackgroundColor      | Text    | `contentBackgroundColor`      | `UBT_Color.Neutral4` |
| AddSearchBar                | Boolean | `addSearchBar`                | `true`               |
| SVGHeight                   | Text    | `sVGHeight`                   | `'260px'`            |

The block raises five events: `OnSVGScrolled`, `OnSearchInputScrolled`, `OnReadyEvent(ContentWrapperId)`,
`OnSearchClick` and `OnPullToRefresh`. Each React prop has the prefix `onOn…`.

The block has six placeholders. Each React prop uses the same name, in camelCase:

- `Placeholder_Header_Title` → `placeholderHeaderTitle`.
- `Placeholder_Header_Right` → `placeholderHeaderRight`.
- `HeaderContent` → `headerContent`.
- `Content` → `content`.
- `Bottom` → `bottom`.
- `Placeholder_CommonUI_Inside_Layout` → `placeholderCommonUIInsideLayout`.

The block renders these parts:

- LayoutRuntime_Top.
- The header. It uses Columns_Two for the title, the search icon and the right placeholder.
  The search icon shows when the search bar has scrolled away.
- PullToRefresh (an input).
- The content wrapper. It contains SVG_Background_Custom (`<id>-SVG`), the search bar (`<id>-SearchInput`, AddSearchBar)
  and Content.
- The footer (Bottom).
- The CommonUI placeholder.

When the block is ready (OnReady), it does three steps:

1. It writes `--current-svg-height`.
2. It starts Initialize_SvgScroll. The React app ports it in `lib/actions.ts`. It controls the header gradient, the SVG
   path morph and the shadow variables on `.active-screen`.
3. It raises OnReadyEvent.

**CommonUI / BottomBarMenu:** the compiled layout has the `Placeholder_CommonUI_Inside_Layout` and `Bottom` placeholders.
It has no CommonUI_InsideLayout and no BottomBarMenu of its own. A library layout cannot use UBTConnect blocks. The
captured instances `$b12`, `$b13` and `$b55` belong to the screens. The screen passes these blocks into the
placeholders, as the stories do with the real blocks. When CommonUI_InsideLayout mounts, the stand-ins of the shell
unmount (`useCommonUiPresence`).

## Captured variants (2 tested)

| Capture | Source           | What it shows                                                      |
| ------- | ---------------- | ------------------------------------------------------------------ |
| v1      | HomeFeed/default | search bar, feed sections, BottomBarMenu, CommonUI                 |
| v2      | Profile/default  | profile class, white content, no search bar, FixedFooter, CommonUI |

## Not captured / not settled

- The React app does not port these OutSystems UI parts: LayoutReady, LayoutDestroy, SetLang and SkipToContent. They are in
  OutSystemsUI.js, which is not in the sources. The skip link only prevents the navigation.
- AddFavicon("favicon.png") is the same on every layout. Its result (the `shortcut icon` link) is static in `index.html`.
- Scrolled states (header gradient, search icon): the source is the compiled code only. The block has a test.
