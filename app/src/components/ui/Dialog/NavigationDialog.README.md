# NavigationDialog

OutSystems: `NavigationHandler.ConfirmationDialogs.NavigationConfirmationDialog` (variant `plain`) and
`UBTConnect.App_Common_Blocks_PopupDialogs.Dialog_Navigation` (variant `connect`; merged here in P7-2). Packs
`migration/blocks/NavigationHandler.ConfirmationDialogs.NavigationConfirmationDialog.md` and
`migration/blocks/UBTConnect.App_Common_Blocks_PopupDialogs.Dialog_Navigation.md` (compiled sources in
`migration/blocks/sources/`).

| OutSystems                                                   | Prop           | Default (`connect`) |
| ------------------------------------------------------------ | -------------- | ------------------- |
| Event Navigation (Dialog_Navigation: Event_OnBackNavigation) | `onNavigation` |                     |
| Placeholder DialogHeader (Placeholder_Header)                | `header`       |                     |
| Placeholder DialogBody (Placeholder_Body)                    | `body`         |                     |
| Placeholder ButtonLabel_Confirm (input ConfirmLabel, Text)   | `confirmLabel` | `Yes`               |
| Placeholder ButtonLabel_Dismiss (input DIsmissLabel, Text)   | `dismissLabel` | `No`                |

`id` is the instance id of the outer block (NavigationConfirmationDialog, or Dialog_Navigation in the `connect`
variant, whose inner NavigationConfirmationDialog has no id). `variant`: `plain` (default) or `connect`.

Behaviour (`useNavigationConfirmation` in NavigationDialog.tsx; the back-navigation queue of `platform/navigation`
comes through `app/dialogs.ts`): the NavigationHandler listens for `dx-before-navigation` while the dialog is mounted. A navigation that no other handler
prevented raises Navigation; when the caller prevents it (PreventNavigation, in
`src/shared/NavigationHandler/lib/actions.ts`) the dialog opens and keeps the event. Yes closes and resumes it
(ResumeNavigation); No closes, forgets it and dispatches `dx-navigation-cancelled-by-user`; a back navigation while open
is prevented and runs No. The Root container's update copies its classes and its parent's classes to the popup portal
(CopyClassesAcrossPortal, in `Dialog`).

Markup: the block > Root `dx-confirmation-dialog` (no ids) > the PreventBackNavigation block while open and the
NavigationHandler block; the popup in a <body> portal while open (`Dialog.README.md`). The `connect` variant adds
the container `connect-dialog-popup connect-dialog-popup--navigation` and shows the labels as expressions. Its header
and body are in CustomContainers, as in ChoiceDialog. The header has margin bottom base, neutral 10, semi-bold >
`text-align-center`; the body has margin bottom medium, neutral 10.

Users: `connect` ContactEmailForm (the 5 ContactByEmail pages), ContactUsDetails, Profile; `plain` EmailContact,
EmailTarget, LDM_Email_V2 (each in its own `backwards-compatibility` frame).

## Not captured

No capture renders these blocks: built from the compiled views and the OSUI popup markup captured on HouseholdDetails
(dom:1392-1398), like ConfirmDialog. Stories `CompiledView`, `Closed`, `PlainCompiledView` and `PlainClosed`;
`NavigationDialog.test.tsx` covers the markup and every client action, `src/app/dialogs.test.tsx` the back navigation
while open.

## Not settled

- The navigation gate (`src/platform/navigation/navigationGate.ts`) dispatches `dx-before-navigation` as
  NavigationEventsJS does (NavigationHandler.controller.js); prevented → dialog → Yes resumes / No stays is tested in
  `src/platform/navigation/navigationGate.test.tsx`.
- Generated inner ids (Root, Popup, placeholders) are not rendered (convention); nothing looks them up in this app.
