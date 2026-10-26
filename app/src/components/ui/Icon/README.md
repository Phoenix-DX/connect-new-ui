# Icon

OutSystems: `UBTConnectLibrary.ConnectPatterns.Icon` · pack `migration/blocks/UBTConnectLibrary.ConnectPatterns.Icon.md`

| Input              | Type             | Prop                | Default              |
| ------------------ | ---------------- | ------------------- | -------------------- |
| In_IconId          | Text (UBT_Icons) | `inIconId`          | `''`                 |
| In_ColorId         | Text (UBT_Color) | `inColorId`         | `UBT_Color.Neutral9` |
| In_SizeId          | Text             | `inSizeId`          | `''`                 |
| In_Visible         | Boolean          | `inVisible`         | `true`               |
| In_ExtendedClasses | Text             | `inExtendedClasses` | `''`                 |

Events: `Click` → `onClick`. Placeholders: none. Child block: `IconSVG` when the id contains `SVG_`.
Note: an empty colour still yields the class `text-` (GetClass_Color has no check), as in the original.

## Captured variants (128 distinct; 6 tested)

| Capture | Source                   | What it shows                         |
| ------- | ------------------------ | ------------------------------------- |
| v1–v4   | BookmarksByGroup/default | font icons, colours, extended class   |
| v5      | Services/default         | SVG icon with IconSVG, default colour |
| v6      | HomeFeed/default         | `In_Visible = False`: empty block     |
