# Recorded decisions and facts that name the elements of UI flow App_Common_Blocks_PopupDialogs

Sources a `differs` row may cite (outside `migration/screens/`). Lines are `file:line: text` (word match of the
screen or block name; the text is cut at 300 characters). A code comment is not a decision.

## app-shell.spec

- `migration/app-shell.spec.md:192` (Dialog_CustomChoice): - `Dialog_CustomChoice` (Menu).
- `migration/app-shell.spec.md:184` (Dialog_ExitConfirmation): | `Dialog_ExitConfirmation` (HomeFeed, Login) | back navigation with `Force=true` at queue priority −1 (p:UBTConnect.App_Common_Blocks_PopupDialogs.Dialog_ExitConfirmation.mvc.js:140; p:NavigationHandler.ConfirmationDialogs.ExitConfirmationDialog.mvc.js:322, 669-672) | `.connect-dialog-popup > .dx-c
- `migration/app-shell.spec.md:191` (Dialog_Navigation): - `NavigationConfirmationDialog` via `Dialog_Navigation` (email forms).
