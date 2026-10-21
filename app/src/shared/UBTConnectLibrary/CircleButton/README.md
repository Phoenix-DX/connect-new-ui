# CircleButton

OutSystems: `UBTConnectLibrary.ConnectPatterns.CircleButton` · pack `migration/blocks/UBTConnectLibrary.ConnectPatterns.CircleButton.md`

| Input             | Type                 | Prop                | Default          |
| ----------------- | -------------------- | ------------------- | ---------------- |
| ExtendedClasses   | Text                 | `extendedClasses`   | `''`             |
| BackgroundColorId | UBT_Color Identifier | `backgroundColorId` | `''`             |
| BorderColorId     | UBT_Color Identifier | `borderColorId`     | `''`             |
| SizeId            | UBT_AvatarSize Id.   | `sizeId`            | `''`             |
| IsProcessing      | Boolean              | `isProcessing`      | `false`          |
| PaddingSize       | UBT_Size Identifier  | `paddingSize`       | `UBT_Size.Small` |

Events: `OnClick` → `onOnClick` (click on the button container).

Placeholders: `Icon` → `icon`, `Badge` → `badge`. Each placeholder renders in its own `<div>` inside the CustomContainer
circle. Child block: `CustomContainer`.

The circle has:

- Text color CyanDarker, a skeleton element and a circle radius.
- A Small border, only when `BorderColorId` is set.

## Captured variants (3 in the pack + 2 whole; 5 tested)

| Capture | Source                    | What it shows                           |
| ------- | ------------------------- | --------------------------------------- |
| v1      | HomeFeed/default          | xs settings button (FeedBlock_Services) |
| v2      | HomeFeed/default          | l, inside CircleButton_WithLabel        |
| v3      | HouseholdCarousel/default | s, inside CircleButton_IconPrimary      |
| v4      | HomeFeed/default (whole)  | v1 with its CustomContainer and Icon    |
| v5      | Notes/default (whole)     | EmptyList circle with a Primary border  |

## Not captured

- `IsProcessing` (`ubt-icon-button--loading`) and `ExtendedClasses`: from the compiled view. `CircleButton.test.tsx` tests them.
