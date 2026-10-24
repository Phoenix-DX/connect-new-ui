# Dialog_CustomChoice

OutSystems: `UBTConnect.App_Common_Blocks_PopupDialogs.Dialog_CustomChoice` · pack
`migration/blocks/UBTConnect.App_Common_Blocks_PopupDialogs.Dialog_CustomChoice.md` (compiled source
`migration/screens/Menu/analysis/sources/pretty/UBTConnect.App_Common_Blocks_PopupDialogs.Dialog_CustomChoice.mvc.js`)

| Input                  | Type    | Prop                     | Default |
| ---------------------- | ------- | ------------------------ | ------- |
| StackButtonsVertically | Boolean | `stackButtonsVertically` | `false` |

Extra props:

- `id`: the instance id, the id that `confirmAction` gets, for example `PopUp_Logout`.
- `scope`: the id prefix of the block's own elements, for example `b15`; default `id` without `$`. It is used for the
  ActionConfirmationDialog ids.

Events: none.

Placeholders: `Placeholder_Header` → `placeholderHeader`, `Placeholder_Body` → `placeholderBody`,
`Placeholder_ButtonLabel` → `placeholderButtonLabel`, `Placeholder_DismissButtonLabe` → `placeholderDismissButtonLabe`.

Markup (view :131-308): container `connect-dialog-popup connect-dialog-popup--custom-choice` (+
` connect-dialog-popup--vertical-buttons` when StackButtonsVertically) > ActionConfirmationDialog (`src/platform/feedback/dialogs`)
with these parts:

- header CustomContainer (margin bottom base, neutral 10, semi-bold) > `text-align-center` > Placeholder_Header
- body CustomContainer (margin bottom medium, neutral 10) > Placeholder_Body
- the labels, in their placeholders

The caller opens it with `confirmAction(id)`.

## Captured variants (1 distinct; 1 tested)

| Capture | Source       | What it shows                     |
| ------- | ------------ | --------------------------------- |
| v1      | Menu/default | logout question, closed (dom:686) |

## Not captured

- The open state (no capture opens it): from the compiled view, tested with `confirmAction` in
  `Dialog_CustomChoice.test.tsx`.
- StackButtonsVertically True (Menu passes no input): tested with `it`.
