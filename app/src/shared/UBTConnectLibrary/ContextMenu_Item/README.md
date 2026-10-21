# ContextMenu_Item

OutSystems: `UBTConnectLibrary.ConnectPatterns.ContextMenu_Item` · pack
`migration/blocks/UBTConnectLibrary.ConnectPatterns.ContextMenu_Item.md` · compiled source
`migration/blocks/sources/UBTConnectLibrary.ConnectPatterns.ContextMenu_Item.mvc.js`

| Input              | Type         | Prop               | Default |
| ------------------ | ------------ | ------------------ | ------- |
| In_UBT_IconsId     | UBT_Icons Id | `inUBTIconsId`     | `''`    |
| In_Label           | Text         | `inLabel`          | `''`    |
| In_UBT_IconColorId | UBT_Color Id | `inUBTIconColorId` | `''`    |

Inputs and defaults from the compiled model (`…ContextMenu_Item.mvc.js:12-30`). Events and placeholders: none.
View (`:171-260`): a CustomContainer (`ubt-context-menu-option`, padding y Base / x Small) that contains an `IconText`
(Text = In_Label, SpacingSize Small). The icon of the `IconText` is an `Icon` (In_UBT_IconsId, In_UBT_IconColorId or
Neutral7 when empty, Medium_20). ContextMenu passes only In_Label and In_UBT_IconsId.

## Not captured

- No captured DOM exists (the menus were never opened): `ContextMenu_Item.test.tsx` checks the markup that the React component builds from the
  compiled view, not a capture. The story is `CompiledView`, not a `V<N>` capture story.
