# SearchResult_Item

OutSystems: `UBTConnect_Utils.CW_Search.SearchResult_Item` · pack `migration/blocks/UBTConnect_Utils.CW_Search.SearchResult_Item.md`

| Input                      | Type                 | Prop                        | Default                   |
| -------------------------- | -------------------- | --------------------------- | ------------------------- |
| In_SearchResult            | SearchResult         | `inSearchResult`            | `{}`                      |
| In_SearchTerm              | Text                 | `inSearchTerm`              | `''`                      |
| In_ImageHeightId           | Text (UBT_ImageSize) | `inImageHeightId`           | `''`                      |
| In_ImageWidthId            | Text (UBT_ImageSize) | `inImageWidthId`            | `''`                      |
| In_ShowSubscriptionWarning | Boolean              | `inShowSubscriptionWarning` | `false`                   |
| In_ImageURL                | Text                 | `inImageURL`                | `''`                      |
| In_TitleFontSize           | Text (UBT_FontSize)  | `inTitleFontSize`           | `UBT_FontSize.ExtraSmall` |
| In_LocationTopPadding      | Text (UBT_Size)      | `inLocationTopPadding`      | `UBT_Size.Small`          |

Events: `OnClick(SearchResult)` → `onOnClick` (click on the row). Placeholder: `Placeholder_Actions` → `children`.

Client action: `OnClick_UpgradeSubscription` (the click on "Subscription upgrade needed") runs
`App_Subscription_NavigateToUpgrade`. A component does not import `platform/`, so the caller gives it as
`onClickUpgradeSubscription` (ShareSheet passes `navigateToUpgrade` of `platform/feedback/dialogs`).

Children: CustomContainer, Columns_Two ×2, UBT_LazyImage, CustomText, IconText, Icon. OnInitialize (once): Member →
square, Medium_60, rounded image; otherwise auto, ListThumbnail_104, soft; In_ImageHeightId / In_ImageWidthId override.

## Captured variants (0)

No screen capture renders it (only ShareSheet uses it, closed in every capture). It is built from the compiled view
(`migration/blocks/sources/`). The stories are `CompiledView`, `Locality`, `SubscriptionWarning`, checks in the test.

## Not captured / not settled

- `UBT_Icons.InfoFill` (subscription warning icon) = `connect-icon-info_fill`, confirmed by the TST value
  (migration/knowledge/static-entities.md "TST values"); Icon inputs BlueDark / NonStandard_16 / InfoFill as the compiled
  view (`migration/blocks/sources/UBTConnect_Utils.CW_Search.SearchResult_Item.mvc.js:484-488`). No capture shows it.
- Static values from the original CSS: `font-bold`, `text-blue-dark`, `icon-non-standard-16`,
  `connect-icon-home_pin_fill` (captured elsewhere), `ubt-lazy-image--width-list-thumbnail` (ListThumbnail_104).
