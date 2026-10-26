# ActionsMenu

OutSystems: `UBTConnectLibrary.ConnectCorePatterns.ActionsMenu` · pack
`migration/blocks/UBTConnectLibrary.ConnectCorePatterns.ActionsMenu.md` · compiled source
`migration/screens/HouseholdCarousel/analysis/sources/pretty/UBTConnectLibrary.ConnectCorePatterns.ActionsMenu.mvc.js`

| Input                   | Type                        | Prop                     | Default                                        |
| ----------------------- | --------------------------- | ------------------------ | ---------------------------------------------- |
| In_ActionsMenuOptions   | ActionsMenuOptionsRec       | `inActionsMenuOptions`   | `{}` (all False)                               |
| In_ActionsEnableOptions | ActionsMenuEnableOptionsRec | `inActionsEnableOptions` | record default (Notes / Gift False, else True) |
| IsEnabled               | Boolean                     | `isEnabled`              | `true`                                         |
| InShowLabels            | Boolean                     | `inShowLabels`           | `true`                                         |

Events `Event_Click_<Bookmark|Unbookmark|Call|Email|Notes|Gift|Share|ViewDetails>` → `onEventClick<…>`.

Labels and icons: GetLookupActions (`../lib/actions.ts`, UBTConnectLibrary.controller.js:5914-): Bookmark (bookmark),
Unmark (check), Call (call), Email (letter), Notes (tooltip), Gift (gifting), Share (share), View details
(arrow_outward). Icon values: TST (`static-entities-tst.json`).

## Captured variants (1; 1 tested)

| Capture | Source                    | What it shows                 |
| ------- | ------------------------- | ----------------------------- |
| v1      | HouseholdCarousel/default | household actions with labels |

The CustomContainer content is nested in the capture; the button list is tested with `it`.
