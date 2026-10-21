# NavigationConfirmationDialog

OutSystems: `NavigationHandler.ConfirmationDialogs.NavigationConfirmationDialog` · pack
`migration/blocks/NavigationHandler.ConfirmationDialogs.NavigationConfirmationDialog.md` (compiled source
`migration/blocks/sources/NavigationHandler.ConfirmationDialogs.NavigationConfirmationDialog.mvc.js`)

Inputs: none. Events: `Navigation(NavigationEvent)` → `onNavigation(event)`. Placeholders: `DialogHeader` →
`dialogHeader`, `DialogBody` → `dialogBody`, `ButtonLabel_Confirm` → `buttonLabelConfirm`, `ButtonLabel_Dismiss` →
`buttonLabelDismiss`.

Behaviour (controller :363-613): the nested NavigationHandler raises OnNavigation for every `dx-before-navigation`. A
navigation no other handler prevented raises Navigation; when the caller prevents it (PreventNavigation, in
`../lib/actions.ts`) the dialog opens and keeps the event. Yes closes and resumes it (ResumeNavigation); No closes,
forgets it and dispatches `dx-navigation-cancelled-by-user`; a back navigation while open is prevented and runs No.
The Root container's update copies its classes and its parent's classes to the popup portal (CopyClassesAcrossPortal).

## Not captured

No capture renders this block: built from the compiled view (:119-338) and the OSUI popup markup captured on
HouseholdDetails (dom:1392-1398), like the shell's ActionConfirmationDialog. Stories `CompiledView` and `Closed`;
`NavigationConfirmationDialog.test.tsx` covers every client action.

## Not settled

- The shell's navigation gate (`src/shell/navigation/navigationGate.ts`) dispatches `dx-before-navigation` as
  NavigationEventsJS does (NavigationHandler.controller.js:858-944); prevented → dialog → Yes resumes / No stays is
  tested in `src/shell/navigation/navigationGate.test.tsx`.
- Generated inner ids (Root, Popup, placeholders) are not rendered (convention); nothing looks them up in this app.
