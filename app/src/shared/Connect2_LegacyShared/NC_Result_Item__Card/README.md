# NC_Result_Item__Card

OutSystems: `Connect2_LegacyShared.NewConnect_Utilities.NC_Result_Item__Card` · pack
`migration/blocks/Connect2_LegacyShared.NewConnect_Utilities.NC_Result_Item__Card.md` · compiled source
`migration/blocks/sources/Connect2_LegacyShared.NewConnect_Utilities.NC_Result_Item__Card.mvc.js`

| Input        | Type | Prop           | Default |
| ------------ | ---- | -------------- | ------- |
| CustomClass  | Text | `customClass`  | `''`    |
| HtmlDataItem | Text | `htmlDataItem` | `''`    |

Event `OnClick_Item` → `onOnClickItem` (click on the card; `cursor: pointer` as the OutSystems click handler adds).
Placeholders `Card_Visual` → `cardVisual`, `Placeholder_1`…`Placeholder_6` → `placeholder1`…`placeholder6`,
`Placeholder_Right` → `placeholderRight`, `Placeholder_Location` → `placeholderLocation`.

## Captured variants (1; 1 tested)

| Capture | Source                 | What it shows                                               |
| ------- | ---------------------- | ----------------------------------------------------------- |
| v1      | AssembleEvents/loading | loading card: skeleton rows, 73px badge, location (pending) |

The pack capture stops at depth 7: the caller's skeleton rows are rendered empty in the story.
`NC_Result_Item__Card__Location` is not built yet (`PendingBlock` in the story).
