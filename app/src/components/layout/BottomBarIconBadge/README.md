# App_IconBadge

OutSystems: `UBTConnect.App_Common_Blocks.App_IconBadge` · pack
`migration/blocks/UBTConnect.App_Common_Blocks.App_IconBadge.md`

| Input            | Type             | Prop               | Default |
| ---------------- | ---------------- | ------------------ | ------- |
| BadgeNumber      | Long Integer     | `badgeNumber`      | `'0'`   |
| MaxNotifications | Integer          | `maxNotifications` | `9`     |
| IconId           | Text (UBT_Icons) | `iconId`           | `''`    |
| IconColor        | Text (UBT_Color) | `iconColor`        | `''`    |
| isLoading        | Boolean          | `isLoading`        | `false` |

Event: `OnClick` → `onOnClick` (IconClick triggers it). Placeholders: none. SkeletonSection loading when isLoading or
BadgeNumber = -1. BadgeNumber ≠ 0: a Link (IconClick) around IconBadge (Color red) with the Icon (Base_24,
`ignore-loading`); 0: the Icon alone, its Click runs IconClick.

## Captured variants (1 distinct in the pack; 3 tested)

| Capture | Source                                                           |
| ------- | ---------------------------------------------------------------- |
| v1      | BookmarksByGroup/default (pack: wrapper only)                    |
| v2      | HomeFeed/default (the bell of App_NotificationIcon, full markup) |
| v3      | HomeFeed/loading (the bell, skeleton loading)                    |

## Not captured

- BadgeNumber 0 (icon without badge) and -1: from the compiled view, tested in `App_IconBadge.test.tsx`.
