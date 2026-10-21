# CircleButton_IconPrimary

OutSystems: `UBTConnectLibrary.ConnectPatterns.CircleButton_IconPrimary` · pack
`migration/blocks/UBTConnectLibrary.ConnectPatterns.CircleButton_IconPrimary.md`

| Input                 | Type         | Prop                    | Default                  |
| --------------------- | ------------ | ----------------------- | ------------------------ |
| ExtendedClasses       | Text         | `extendedClasses`       | `''`                     |
| IconId                | UBT_Icons Id | `iconId`                | `''`                     |
| Text                  | Text         | `text`                  | `''`                     |
| isEnabled             | Boolean      | `isEnabled`             | `true`                   |
| IconBackgroundColorId | UBT_Color Id | `iconBackgroundColorId` | `UBT_Color.CyanLightest` |
| IconColorId           | UBT_Color Id | `iconColorId`           | `UBT_Color.CyanDarker`   |

Events: `OnClick` → `onOnClick` (raised from CircleButton_WithLabel's OnClick, also when disabled, as compiled).
Renders CircleButton_WithLabel (SizeId Small_40) with an `Icon` (no size) and, when `Text` is not empty, a `CustomText`
(Neutral10, DoubleExtraSmall, SemiBold). Disabled: circle Neutral3, icon Neutral7.

## Captured variants (1 in the pack + 3 whole; 4 tested)

| Capture | Source                            | What it shows           |
| ------- | --------------------------------- | ----------------------- |
| v1      | HouseholdCarousel/default         | action row (pack)       |
| v2      | HouseholdCarousel/default (whole) | Bookmark with label     |
| v3      | HouseholdCarousel/default (whole) | Gift, isEnabled = False |
| v4      | HouseholdCarousel/default (whole) | Call without label      |

## Not captured

- Own `IconBackgroundColorId` / `IconColorId` and `ExtendedClasses`: tested in `CircleButton_IconPrimary.test.tsx`.
