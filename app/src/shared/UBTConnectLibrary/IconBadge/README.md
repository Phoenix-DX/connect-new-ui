# IconBadge

OutSystems: `UBTConnectLibrary.OutSystemsUIOverrides.IconBadge` · pack
`migration/blocks/UBTConnectLibrary.OutSystemsUIOverrides.IconBadge.md`

| Input         | Type             | Prop            | Default             |
| ------------- | ---------------- | --------------- | ------------------- |
| Number        | Long Integer     | `number`        | `'0'`               |
| Color         | Text (UBT_Color) | `color`         | `UBT_Color.Primary` |
| IsLight       | Boolean          | `isLight`       | `false`             |
| ExtendedClass | Text             | `extendedClass` | `''`                |
| MaxNumber     | Integer          | `maxNumber`     | `9`                 |

Events: none. Placeholder: `Icon` → `icon` (in a plain `<div>`, as captured). Child block: `Badge` (MaxNumber, Color,
Number, IsLight; Size, Shape and ExtendedClass left to the Badge defaults).

## Captured variants (1 distinct; 1 tested)

| Capture | Source                                                    |
| ------- | --------------------------------------------------------- |
| v1      | BookmarksByGroup/default (Updates item of the bottom bar) |

Every captured instance is inside `UBTConnect/App_IconBadge` (full markup checked there against HomeFeed/default).

## Not captured

- Nothing beyond the Badge's own branches.
