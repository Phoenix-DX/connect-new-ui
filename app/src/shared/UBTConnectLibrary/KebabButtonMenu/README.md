# KebabButtonMenu

OutSystems: `UBTConnectLibrary.ConnectCorePatterns.KebabButtonMenu` · pack `migration/blocks/UBTConnectLibrary.ConnectCorePatterns.KebabButtonMenu.md`

| Input    | Type    | Prop       | Default |
| -------- | ------- | ---------- | ------- |
| isEnable | Boolean | `isEnable` | `true`  |

Events: Edit → `onEdit`, Share → `onShare` (ContextMenu Event_Edit / Event_Share).
Placeholders: none.

## Captured variants (2 tested)

| Capture | Source                                  | What it shows                             |
| ------- | --------------------------------------- | ----------------------------------------- |
| v1      | pack variant 1, Profile/default         | wrapper only                              |
| v2      | `Profile/analysis/dom/default.html` [0] | full markup: menu closed, disabled button |

## Not captured / not settled

- The captured button has the disabled look (neutral-3 circle, neutral-7 icon), so the stories pass isEnable False. Why Profile disables it is not checked (question in the batch report).
