# NonMember_ListItem

OutSystems: `UBTConnectLibrary.ConnectCorePatterns.NonMember_ListItem` · pack `migration/blocks/UBTConnectLibrary.ConnectCorePatterns.NonMember_ListItem.md`

| Input                   | Type    | Prop                      | Default |
| ----------------------- | ------- | ------------------------- | ------- |
| Title                   | Text    | `title`                   | `''`    |
| isEnabled               | Boolean | `isEnabled`               | `true`  |
| DeceasedCaption         | Text    | `deceasedCaption`         | `''`    |
| LifeCycleText_Italic    | Boolean | `lifeCycleTextItalic`     | `false` |
| MarriedCaption          | Text    | `marriedCaption`          | `''`    |
| MarriedPartnerTakenText | Text    | `marriedPartnerTakenText` | `''`    |
| MarriageHighlightText   | Text    | `marriageHighlightText`   | `''`    |

Events: OnClickPerson → `onOnClickPerson` (from the avatar or the texts, only when isEnabled).
Placeholders: Placeholder_Left → `placeholderLeft`, Actions → `actions`.

## Captured variants (3 tested)

| Capture | Source                                              | What it shows                            |
| ------- | --------------------------------------------------- | ---------------------------------------- |
| v1      | pack variant 1, HouseholdCarousel/default           | wrapper only                             |
| v2      | `HouseholdCarousel/analysis/dom/default.html` [0]   | married caption with highlighted partner |
| v3      | `Household_Relations/analysis/dom/default.html` [0] | name only                                |

## Not captured / not settled

- Deceased caption and partner-taken text: compiled code only (NonMember_ListItem.mvc.js:355-479), tested.
- Names are masked: mock texts keep the captured word structure.
