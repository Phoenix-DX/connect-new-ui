# SeeMoreSection

OutSystems: `UBTConnectLibrary.ConnectPatterns.SeeMoreSection` · pack `migration/blocks/UBTConnectLibrary.ConnectPatterns.SeeMoreSection.md`

| Input           | Type    | Prop              | Default |
| --------------- | ------- | ----------------- | ------- |
| StartExpanded   | Boolean | `startExpanded`   | `true`  |
| ExtendedClasses | Text    | `extendedClasses` | `''`    |
| isEnabled       | Boolean | `isEnabled`       | `true`  |

Events: none (the title toggles the local isExpanded).
Placeholders: Content → `children`.

## Captured variants (2 tested)

| Capture | Source                                            | What it shows                        |
| ------- | ------------------------------------------------- | ------------------------------------ |
| v1      | pack variant 1, HouseholdCarousel/default         | closed                               |
| v2      | `HouseholdCarousel/analysis/dom/default.html` [0] | closed, full markup (content nested) |

## Not captured / not settled

- Expanded state and the disabled title color: compiled code only, tested. Event_OnReady sets isExpanded = StartExpanded; the port uses it as the initial state.
