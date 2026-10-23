/* Shared dialogs and overlays for screens (docs/guides/shell.md, "Part C"). */
export { ActionConfirmationDialog, type ActionConfirmationDialogProps } from './ActionConfirmationDialog';
export { BlockPinUnlock } from './BlockPinUnlock';
export { PinUnlockContentContainer, type PinUnlockContentContainerProps } from './PinUnlockContentContainer';
export { CommonUiHost } from './CommonUiHost';
export { useCommonUiPresence, useIsCommonUiAbsent, useIsCommonUiMounted, useNoCommonUi } from './commonUiPresence';
export { confirmAction } from './confirmAction';
export { DialogAccessRestrictedAction } from './DialogAccessRestrictedAction';
export { navigateToUpgrade, showUpgradePopUp } from './subscription';
export { useCommonUiBackHandler } from './commonUiBack';
