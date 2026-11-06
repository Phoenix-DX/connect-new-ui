# TagContent

OutSystems: `UBTConnectLibrary.ConnectPatterns.TagContent` · pack `migration/blocks/UBTConnectLibrary.ConnectPatterns.TagContent.md`

| Input                      | Type         | Prop                        | Default    |
| -------------------------- | ------------ | --------------------------- | ---------- |
| Text                       | Text         | `text`                      | `''`       |
| ExtendedClasses            | Text         | `extendedClasses`           | `''`       |
| BackgroundColorId          | UBT_Color Id | `backgroundColorId`         | `''`       |
| TextColorId                | UBT_Color Id | `textColorId`               | `''`       |
| In_VerticalPaddingSizeId   | UBT_Size Id  | `inVerticalPaddingSizeId`   | ExtraSmall |
| In_HorizontalPaddingSizeId | UBT_Size Id  | `inHorizontalPaddingSizeId` | Small      |
| In_ShapeId                 | UBT_Shape Id | `inShapeId`                 | Rounded    |

Events: `Clicked` → `onClicked` (CustomContainer Clicked). Placeholders: none. Child block: `CustomContainer`
(`ubt-tag--content inline-block` + ExtendedClasses, padding x In_HorizontalPaddingSizeId / y
In_VerticalPaddingSizeId, In_ShapeId radius, text DoubleExtraSmall SemiBold) with the Text expression. The three
padding and shape inputs are in the live block of 2026-11-05
(`migration/sources/runtime/UBTConnectLibrary.ConnectPatterns.TagContent.mvc.js:39-56, 244-284`); their
defaults are the values the October block had fixed, so callers that do not set them render the same.

## Captured variants (1 in the pack + 3 whole; 4 tested)

| Capture | Source                             | What it shows            |
| ------- | ---------------------------------- | ------------------------ |
| v1      | HomeFeed/default                   | update type tag (pack)   |
| v2      | HomeFeed/default (whole)           | v1 whole: colours + text |
| v3      | HouseholdCarousel/default (whole)  | counter, no text colour  |
| v4      | Updates_SingleList/default (whole) | status tag               |

## Not captured

- `ExtendedClasses` and the Clicked event: tested in `TagContent.test.tsx`.
- The padding and shape inputs (set only by `CW_Search.SearchResult_Item`): tested in `TagContent.test.tsx`
  and in the `SearchResultItem` test.
