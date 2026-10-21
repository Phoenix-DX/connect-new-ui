# Dialog_AccessRestrictedAction_Legacy

OutSystems: `UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction_Legacy` · pack
`migration/blocks/UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction_Legacy.md`
(compiled source `migration/screens/BookmarksByGroup/analysis/sources/pretty/UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction_Legacy.mvc.js`)

Inputs, events, placeholders: none. Extra props: `id` (instance id, the id the caller gives `confirmAction`, e.g.
`b1-FreeSubscriptionAlert`) and `scope` (id prefix of its own elements, e.g. `b1-b20`; default `id` without `$`).

Markup (view :115-145): Dialog_AccessRestrictedAction (`src/shell/dialogs`, built with the shell) with In_ExtendedClass
`connect-legacy-compatibily-containter`. Its OnReady sets `App_SubscriptionPopUp` to its own popup id, as the original
nested instance does.

## Captured variants (1 distinct; 1 tested)

| Capture | Source                   | What it shows                       |
| ------- | ------------------------ | ----------------------------------- |
| v1      | BookmarksByGroup/default | closed, nested dialog (dom:484-495) |

The nested dialog's class and ids are checked with `it`; its open state is the shell dialog's (its own tests and its
NotCaptured library parts).
