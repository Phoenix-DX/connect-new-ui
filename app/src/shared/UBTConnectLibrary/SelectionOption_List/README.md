# SelectionOption_List

OutSystems: `UBTConnectLibrary.ConnectPatterns.SelectionOption_List` · pack
`migration/blocks/UBTConnectLibrary.ConnectPatterns.SelectionOption_List.md`

| Input                    | Type                            | Prop                      | Default                |
| ------------------------ | ------------------------------- | ------------------------- | ---------------------- |
| SelectionOption_ItemList | RecordList SelectionOption_Item | `selectionOptionItemList` | `[]`                   |
| isMultiselect            | Boolean                         | `isMultiselect`           | `false`                |
| Item_StyleOptions        | Record ContainerOptions         | `itemStyleOptions`        | `{}`                   |
| LastItem_StyleOptions    | Record ContainerOptions         | `lastItemStyleOptions`    | `{}`                   |
| IconSizeId               | Text (UBT_IconSize)             | `iconSizeId`              | `icon-non-standard-16` |

Events: `OnSelectionChange(SelectedItems, ClickedItemId)` → `onOnSelectionChange`, `NotEnabledOnClick(ClickedItemId)` →
`onNotEnabledOnClick`. Per item: CustomContainer (last item: Merge_StyleOptions of the two style inputs) > Columns_Two
(ReduceLast): left IconText with Icon or LazyImage country flag (`getFlagURLByCountryCode`), or CustomText; right the
checkbox / radio icon. Actions `merge_StyleOptions` and `getFlagURLByCountryCode` are in `../lib/actions.ts`.

## Captured variants (5 distinct; 4 tested)

| Capture | Source                 |
| ------- | ---------------------- |
| v1      | CountryDetails/default |
| v2      | Notes/default          |
| v3      | Notes/default (empty)  |
| v4      | Search/default         |

## Not settled

- Merge_StyleOptions compares each part with the empty record. The defaults of BackgroundOptions (Opacity) are not in
  the evidence, so "empty" means every field "" / 0 / False.
