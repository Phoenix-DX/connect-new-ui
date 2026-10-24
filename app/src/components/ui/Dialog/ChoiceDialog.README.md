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
  ConfirmDialog ids.

Events: none.

Placeholders: `Placeholder_Header` → `header`, `Placeholder_Body` → `body`, `Placeholder_ButtonLabel` →
`confirmLabel`, `Placeholder_DismissButtonLabe` → `dismissLabel` (the same names as the other dialogs of this folder).

Markup: container `connect-dialog-popup connect-dialog-popup--custom-choice` (+ ` connect-dialog-popup--vertical-buttons`
when StackButtonsVertically) > ConfirmDialog (the ActionConfirmationDialog block, `Dialog.README.md`) with these parts:

- header CustomContainer (margin bottom base, neutral 10, semi-bold) > `text-align-center` > Placeholder_Header
- body CustomContainer (margin bottom medium, neutral 10) > Placeholder_Body
- the labels, in their placeholders

The caller opens it with `confirmAction(id)` (`platform/feedback/dialogs`).

## Captured variants (1 distinct; 1 tested)

| Capture | Source       | What it shows                     |
| ------- | ------------ | --------------------------------- |
| v1      | Menu/default | logout question, closed (dom:686) |

## Not captured

- The open state (no capture opens it): from the compiled view, tested with the `dx-show` event of ConfirmAction in
  `ChoiceDialog.test.tsx`.
- StackButtonsVertically True (Menu passes no input): tested with `it`.
