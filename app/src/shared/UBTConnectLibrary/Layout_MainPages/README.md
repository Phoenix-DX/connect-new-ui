# Layout_MainPages

OutSystems: `UBTConnectLibrary.Layouts.Layout_MainPages` · pack `migration/blocks/UBTConnectLibrary.Layouts.Layout_MainPages.md`
· compiled source `migration/screens/CommunityBusinessDetails_CoomingSoon/analysis/sources/pretty/UBTConnectLibrary.Layouts.Layout_MainPages.mvc.js`

| Input                       | Type    | Prop                          | Default |
| --------------------------- | ------- | ----------------------------- | ------- |
| UsePullToRefresh            | Boolean | `usePullToRefresh`            | `false` |
| ExtendedClass               | Text    | `extendedClass`               | `''`    |
| EnableAccessibilityFeatures | Boolean | `enableAccessibilityFeatures` | `false` |
| isGrayBackground            | Boolean | `isGrayBackground`            | `false` |
| AddHeaderGap                | Boolean | `addHeaderGap`                | `true`  |

Events `OnPullToRefresh`, `OnHeaderScrolled(IsHeaderScrolled)` → `onOnPullToRefresh`, `onOnHeaderScrolled`.
Placeholders `Placeholder_Header_Title`, `Placeholder_Header_Right`, `Placeholder_Header_Input`,
`Placeholder_Header_Input_Icon`, `HeaderContent`, `Content`, `Bottom`, `Placeholder_CommonUI_Inside_Layout` →
`placeholderHeaderTitle`, `placeholderHeaderRight`, `placeholderHeaderInput`, `placeholderHeaderInputIcon`,
`headerContent`, `content`, `bottom`, `placeholderCommonUIInsideLayout`.

## Captured variants (4; 4 tested)

| Capture | Source                                       | What it shows                         |
| ------- | -------------------------------------------- | ------------------------------------- |
| v1      | CommunityBusinessDetails_CoomingSoon/default | BlankSlate content, no bottom bar     |
| v2      | CountryList/default                          | gray background, bottom bar, CommonUI |
| v3      | Locality_Details/default                     | header content (subtitle, tabs), list |
| v4      | Locality_Details/loading                     | empty content                         |

## Not captured / not ported

- IsHeaderScrolled background (`header-top-content ph background-primary-gradient-radial`), PullToRefresh, AddHeaderGap
  False, accessibility class: compiled code only, tested with `it`.
- **SetMainScroll** (`../lib/actions.ts`, port of ScrollEvent.mainScroll, runtime-sources/UBTConnectLibrary.ScrollAnimations.js
  :206-271): as SetMainFixedScroll with the whole `header` as the header size. SetScrollShadow / RemoveScrollEvents /
  ClearTimeout as in Layout_DetailPage.
- OutSystems UI LayoutReady / SetLang / LayoutDestroy / SkipToContent: not ported (as the other layouts). AddFavicon's
  result (the `shortcut icon` link) is static in `index.html`.
- SubHeader_MainPages and Locality_Households are PendingBlock in the stories.
