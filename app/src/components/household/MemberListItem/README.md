# Member_ListItem

OutSystems: `UBTConnectLibrary.ConnectCorePatterns.Member_ListItem` · pack `migration/blocks/UBTConnectLibrary.ConnectCorePatterns.Member_ListItem.md`

| Input                | Type    | Prop                  | Default |
| -------------------- | ------- | --------------------- | ------- |
| Title                | Text    | `title`               | `''`    |
| isEnabled            | Boolean | `isEnabled`           | `true`  |
| LifeCycleText        | Text    | `lifeCycleText`       | `''`    |
| LifeCycleText_Italic | Boolean | `lifeCycleTextItalic` | `false` |

Events: OnClickPerson → `onOnClickPerson` (only when isEnabled).
Placeholders: Placeholder_Left → `placeholderLeft`, Actions → `actions`.

## Captured variants (2 tested)

| Capture | Source                                            | What it shows                        |
| ------- | ------------------------------------------------- | ------------------------------------ |
| v1      | pack variant 1, HouseholdCarousel/default         | wrapper only                         |
| v2      | `HouseholdCarousel/analysis/dom/default.html` [0] | full markup (avatar, actions nested) |

## Not captured / not settled

- Italic life-cycle text: compiled code only, tested.
