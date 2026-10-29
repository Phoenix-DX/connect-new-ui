# App_Common_Blocks_PopupDialogs: reader notes (stage 1)

## TST presence check
- All 5 own blocks have a TST file (tst_source.py show Dialog_CustomChoice, Dialog_ExitConfirmation, Dialog_Information, Dialog_Information_NonNavigation, Dialog_Navigation).
- Pack elements absent on TST: none seen. TST elements absent in the pack: not scanned line by line.
- Referenced NavigationHandler ConfirmationDialogs blocks (Action/Exit/NavigationConfirmationDialog): TST files named in references.md; not compared by the reader.

## Not found in React
- Dialog_Information_NonNavigation (no screen uses it in the pack; no port).

## Pack gaps
- Dialog_CustomChoice style is cut at "connect-dialog-popup--vertical-b…"; React uses --vertical-buttons.
- Default labels "Close" / "Cancel" are in the pack placeholders; React ChoiceDialog and InformationDialog have no default text (callers supply it; not checked).
- Pack input name DIsmissLabel (typo in the model) vs React dismissLabel.
- app.md of the pack is empty; React locations found by grep: components/ui/Dialog/ChoiceDialog.tsx, components/ui/Dialog/NavigationDialog.tsx (variant connect), platform/navigation/DialogExitConfirmation.tsx, pages/ContactUsDetails/components/InformationDialog.tsx.
- strings.md is empty (texts come from the widget trees).

## Mock files
- None (no data actions).

## Screens
- None (block-only flow).
