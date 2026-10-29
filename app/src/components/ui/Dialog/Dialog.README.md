# Dialog

The confirmation dialogs of the app (plan v2 step P7-2; `app/docs/refactor/duplicates.md`, group 2). One markup,
`Dialog`, and its variants:

| Component          | OutSystems                                                                                                          | Opened by                                 |
| ------------------ | ------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| `Dialog`           | the markup that the NavigationHandler confirmation dialogs share                                                    | props (`open`)                            |
| `ConfirmDialog`    | `NavigationHandler.ConfirmationDialogs.ActionConfirmationDialog`                                                    | `confirmAction(widgetId)`                 |
| `ChoiceDialog`     | `UBTConnect.App_Common_Blocks_PopupDialogs.Dialog_CustomChoice`                                                     | `confirmAction(id)`                       |
| `NavigationDialog` | `NavigationHandler.ConfirmationDialogs.NavigationConfirmationDialog`, and `Dialog_Navigation` (`variant="connect"`) | a navigation that `onNavigation` prevents |

`Dialog` renders the block > Root `dx-confirmation-dialog` (+ `rootClassName`) > its children, and while `open` the
OSUI popup in a portal on <body>: `popup-backdrop` > `popup-dialog` (`role="dialog"`, `aria-modal`) > `popup-content` >
`dx-dialog-header`, `dx-dialog-body` and `dx-dialog-footer` with the buttons `btn btn-primary` (confirm) and `btn`
(dismiss). `idPrefix` gives the ids `-Root`, `-Popup`, `-DialogHeader`, `-DialogBody`, `-ButtonLabel_Confirm` and
`-ButtonLabel_Dismiss`. It runs the Popup widget effects of `usePopupWidget`: `popup-disable-scroll` on <html> and the
`aria-hidden` of #reactContainer, with no focus move. On every update it runs CopyClassesAcrossPortal: the portal gets
the classes of the Root and of the block's parent element, and `display: contents`.

## Triggers and the two connections of app/

The folder renders markup and the DOM-event logic of the dialogs. ConfirmAction and the back-navigation queue are app
state in `platform/`. `components/ui` may not import `platform/` (plan v2 section 2.4, rules 4 and 5), and
`platform/` may not import `components/` (rule 8). `app/dialogs.ts` (`connectDialogs()`, called by `main.tsx`, the test
setup and the Storybook preview) makes two connections:

- `setDialogTriggers` (`dialogTriggers.ts`, module bindings that app/ sets): ConfirmDialog uses `useActionConfirmation` of
  `platform/feedback/dialogs`:
  the `dx-show` listener on its event hub, the answer and the back-navigation handler. NavigationDialog uses
  `usePreventBackNavigation` of `platform/navigation` while it is open. Its navigation listener (the window event
  `dx-before-navigation`, Yes and No) is in NavigationDialog.tsx, so the app start does not load it.
- `setDialogViews` (`platform/feedback/dialogs/dialogViews.ts`): the platform dialogs render this markup,
  Dialog_AccessRestrictedAction through `ConfirmDialogView` and Dialog_ExitConfirmation through `DialogView`.

A dialog that renders before `connectDialogs()` throws an error.

## Presets (not in this folder)

- `pages/HomeFeed/components/Dialog_GoExternalApp`, `pages/ContactUsDetails/components/InformationDialog`,
  `containers/FreeSubscriptionActionDialog`, the bookmark note dialogs: ConfirmDialog with their
  texts.
- `platform/feedback/dialogs/DialogAccessRestrictedAction`, its legacy block `DialogAccessRestrictedActionLegacy` (same
  folder, a module of its own) and `platform/navigation/DialogExitConfirmation`.
