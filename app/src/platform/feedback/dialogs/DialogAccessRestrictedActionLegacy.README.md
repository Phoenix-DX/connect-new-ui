# DialogAccessRestrictedActionLegacy

OutSystems: `UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction_Legacy` · pack
`migration/blocks/UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction_Legacy.md`
(compiled source
`migration/screens/BookmarksByGroup/analysis/sources/pretty/UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction_Legacy.mvc.js`)

Inputs, events, placeholders: none. Props: `id` is the instance id, the id the caller gives `confirmAction` (for example
`b1-FreeSubscriptionAlert`). `scope` is the id prefix of its own elements (for example `b1-b20`; default `id` without
`$`).

Markup: its block element around the platform dialog DialogAccessRestrictedAction (same folder), with the instance id
`<scope>-$b1` and In_ExtendedClass `connect-legacy-compatibily-containter`. That class sets the UBTConnectLibrary CSS
variables for the legacy screens (UBTConnectLibrary.UBTConnectBase.css). The OnReady of the nested dialog sets
`App_SubscriptionPopUp` to its own popup id, as the original nested instance does.

P7-2 moved the block from `src/shared/UBTConnect_Utils/` to the platform dialog. It stays a module of its own. The app
start loads DialogAccessRestrictedAction (CommonUI); only the 13 legacy screens need this wrapper (W21, first-load
size).

## Captured variants (1 distinct; 1 tested)

| Capture | Source                   | What it shows                       |
| ------- | ------------------------ | ----------------------------------- |
| v1      | BookmarksByGroup/default | closed, nested dialog (dom:484-495) |

The nested dialog's class and ids are checked with `it`; its open state is the platform dialog's (its own tests and
its NotCaptured library parts).
