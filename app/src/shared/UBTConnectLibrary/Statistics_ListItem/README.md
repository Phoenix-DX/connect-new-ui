# Statistics_ListItem

OutSystems: `UBTConnectLibrary.ConnectCorePatterns.Statistics_ListItem` · pack `migration/blocks/UBTConnectLibrary.ConnectCorePatterns.Statistics_ListItem.md`

| Input                | Type              | Prop                  | Default |
| -------------------- | ----------------- | --------------------- | ------- |
| In_StatisticsOptions | StatisticsOptions | `inStatisticsOptions` | `{}`    |
| In_ExtendedClasses   | Text              | `inExtendedClasses`   | `''`    |
| In_HighlightWords    | Text              | `inHighlightWords`    | `''`    |
| In_ShowSubtitle      | Boolean           | `inShowSubtitle`      | `false` |
| In_HasActionsMenu    | Boolean           | `inHasActionsMenu`    | `false` |
| In_HideBorder        | Boolean           | `inHideBorder`        | `false` |

Events: Event_Clicked → `onEventClicked`.
Placeholders: ActionsMenu → `actionsMenu`.

## Captured variants (3 tested)

| Capture | Source                                          | What it shows            |
| ------- | ----------------------------------------------- | ------------------------ |
| v1      | pack variant 1, BrowseCountries/default         | wrapper only             |
| v2      | `BrowseCountries/analysis/dom/default.html` [0] | country card with flag   |
| v3      | `BrowseDirectory/analysis/dom/default.html` [0] | subtitle line, no avatar |

## Not captured / not settled

- Statistics with an icon (IconText), hidden border and the actions menu: compiled code only, tested. The statistics list is P-LIST (OSList).
