# HorizontalTagList

OutSystems: `UBTConnectLibrary.ConnectPatterns.HorizontalTagList` · pack
`migration/blocks/UBTConnectLibrary.ConnectPatterns.HorizontalTagList.md`

| Input                   | Type            | Prop                     | Default |
| ----------------------- | --------------- | ------------------------ | ------- |
| In_TagToggleList        | RecordList Tag  | `inTagToggleList`        | `[]`    |
| In_IsSingleSelection    | Boolean         | `inIsSingleSelection`    | `false` |
| In_IsMandatorySelection | Boolean         | `inIsMandatorySelection` | `false` |
| In_HorizontalPadding    | Text (UBT_Size) | `inHorizontalPadding`    | `''`    |
| ExtendedClasses         | Text            | `extendedClasses`        | `''`    |
| isEnabled               | Boolean         | `isEnabled`              | `true`  |

Events: `Changed(In_TagToggleList)` → `onChanged(list)`. Child: `TagToggle` per item (isEnabled = isEnabled and
Tag.Enabled). TagToggleToggle (:322-430) is ported 1:1, including two quirks: with single selection, a click on the row
equal to CurrentListIndex (0 at start) does nothing; `In_TagToggleList.Current` in the handler is the clicked row (the
event runs in the iteration context of the List).

## Captured variants (6 distinct; 4 tested)

| Capture | Source                    |
| ------- | ------------------------- |
| v1      | HouseholdCarousel/default |
| v2      | HouseholdDetails/loading  |
| v3      | Locality_Details/default  |
| v4      | Locality_Details/loading  |
