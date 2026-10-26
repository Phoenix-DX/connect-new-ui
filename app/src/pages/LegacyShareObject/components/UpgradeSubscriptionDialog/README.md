# FreeSubscriptionActionDialog

OutSystems: `Connect2_LegacyShared.Utility.FreeSubscriptionActionDialog` · pack
`migration/blocks/Connect2_LegacyShared.Utility.FreeSubscriptionActionDialog.md`

Inputs: none (`id` = instance id; callers show the dialog with `confirmAction(id)`, which finds the event hub of the
inner dialog). Events: none. Placeholders: none.

Markup: container `upgrade-subscription-action-dialog backwards-compatibility` > `ConfirmDialog` (`components/ui/Dialog`, the
`NavigationHandler.ConfirmationDialogs.ActionConfirmationDialog` block) with header "Access Restricted", the body text (two
`<br>`), "Upgrade Subscription" and "Cancel". Confirmed (`…FreeSubscriptionActionDialog.mvc.js:232-262`):
Cache_UserInfo_Get (shell `getUserInformation`), then InAppBrowser Open(SubscriptionManageLink, SYSTEM), else a
navigation to the link; per decision U18 the React app opens a new tab.

## Captured variants (1 in the pack; 2 tested)

| Capture | Source                    | What it shows                               |
| ------- | ------------------------- | ------------------------------------------- |
| v1      | LegacyShareObject/default | closed (dialog wrapper only)                |
| v2      | LegacyShareObject/default | whole: Root > EventHub of the closed dialog |

## Not captured

- The open dialog: ConfirmDialog (`components/ui/Dialog/Dialog.README.md`) renders it; texts tested from the compiled view.
