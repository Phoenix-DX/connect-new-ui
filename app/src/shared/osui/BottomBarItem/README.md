# BottomBarItem

OutSystems UI: `OutSystemsUI_2_23.Navigation.BottomBarItem` · pack
`migration/blocks/OutSystemsUI_2_23.Navigation.BottomBarItem.md`

| Input         | Type | Prop            | Default |
| ------------- | ---- | --------------- | ------- |
| ExtendedClass | Text | `extendedClass` | `''`    |

Events: none. Placeholders: `Icon` → `icon`, `Text` → `text`. Both placeholders are aligned Center (inline
`text-align: center`, captured); their classes are static (`placeholder-empty bottom-bar-item-icon` / `-text`).

## Captured variants (2 distinct; 2 tested)

| Capture | Source                                                         |
| ------- | -------------------------------------------------------------- |
| v1      | BookmarksByGroup/default (Icon + CustomText)                   |
| v2      | BookmarksByGroup/default (App_IconBadge + CustomText: Updates) |

Every instance is rendered by `UBTConnect/BottomBarMenu` (full markup checked there against HomeFeed/default).

## Not captured

- Nothing: the block has no state of its own.
