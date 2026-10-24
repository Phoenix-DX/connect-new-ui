# CircleButton_WithLabel

OutSystems: `UBTConnectLibrary.ConnectPatterns.CircleButton_WithLabel` · pack
`migration/blocks/UBTConnectLibrary.ConnectPatterns.CircleButton_WithLabel.md` (the pack lists no inputs; they come
from the compiled model)

| Input             | Type              | Prop                | Default          |
| ----------------- | ----------------- | ------------------- | ---------------- |
| SizeId            | UBT_AvatarSize Id | `sizeId`            | `''`             |
| BackgroundColorId | UBT_Color Id      | `backgroundColorId` | `''`             |
| BorderColorId     | UBT_Color Id      | `borderColorId`     | `''`             |
| ExtendedClasses   | Text              | `extendedClasses`   | `''`             |
| IsProcessing      | Boolean           | `isProcessing`      | `false`          |
| PaddingSize       | UBT_Size Id       | `paddingSize`       | `UBT_Size.Small` |
| In_BadgeIcon      | AvatarIconOptions | `inBadgeIcon`       | `{}`             |

Events: `OnClick` → `onOnClick` (outer container; the inner CircleButton has no handler, its click bubbles).
Placeholders: `Icon` → `icon` (in a `<div>`), `Badge` → `badge` (in `div.ubt-icon-button__badge`), `Text` → `text`
(in `div.ubt-icon-button__text-container` inside a CustomContainer with margin-top Small). Child blocks: `CircleButton`,
`CustomContainer`.

## Captured variants (2 in the pack + 1 whole; 3 tested)

| Capture | Source                    | What it shows                                 |
| ------- | ------------------------- | --------------------------------------------- |
| v1      | HomeFeed/default          | l service button with a caller `<span>` label |
| v2      | HouseholdCarousel/default | s, as rendered by CircleButton_IconPrimary    |
| v3      | HomeFeed/default (whole)  | v1 with every nested block                    |

## Not settled

- `In_BadgeIcon` is declared by the block but the compiled view never reads it; the prop is accepted and unused.
