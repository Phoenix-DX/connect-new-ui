# TagContent

OutSystems: `UBTConnectLibrary.ConnectPatterns.TagContent` · pack `migration/blocks/UBTConnectLibrary.ConnectPatterns.TagContent.md`

| Input             | Type         | Prop                | Default |
| ----------------- | ------------ | ------------------- | ------- |
| Text              | Text         | `text`              | `''`    |
| ExtendedClasses   | Text         | `extendedClasses`   | `''`    |
| BackgroundColorId | UBT_Color Id | `backgroundColorId` | `''`    |
| TextColorId       | UBT_Color Id | `textColorId`       | `''`    |

Events: `Clicked` → `onClicked` (CustomContainer Clicked). Placeholders: none. Child block: `CustomContainer`
(`ubt-tag--content inline-block` + ExtendedClasses, padding x Small / y ExtraSmall, Rounded radius, text
DoubleExtraSmall SemiBold) with the Text expression.

## Captured variants (1 in the pack + 3 whole; 4 tested)

| Capture | Source                             | What it shows            |
| ------- | ---------------------------------- | ------------------------ |
| v1      | HomeFeed/default                   | update type tag (pack)   |
| v2      | HomeFeed/default (whole)           | v1 whole: colours + text |
| v3      | HouseholdCarousel/default (whole)  | counter, no text colour  |
| v4      | Updates_SingleList/default (whole) | status tag               |

## Not captured

- `ExtendedClasses` and the Clicked event: tested in `TagContent.test.tsx`.
