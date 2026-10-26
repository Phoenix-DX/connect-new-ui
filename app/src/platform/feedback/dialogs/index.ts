/* Shared dialogs and overlays for screens (docs/guides/shell.md, "Part C"). The confirmation dialogs themselves are in
   components/ui/Dialog; their triggers are here (useActionConfirmation) and app/dialogs.ts connects the two. */
export { useActionConfirmation, type ActionConfirmation } from './useActionConfirmation';
export {
  ConfirmDialogView,
  DialogView,
  setDialogViews,
  type ConfirmDialogViewProps,
  type DialogViewProps,
  type DialogViews,
} from './dialogViews';
export { BlockPinUnlock } from './BlockPinUnlock';
export { PinUnlockContentContainer, type PinUnlockContentContainerProps } from './PinUnlockContentContainer';
export { CommonUiHost } from './CommonUiHost';
export { useCommonUiPresence, useIsCommonUiAbsent, useIsCommonUiMounted, useNoCommonUi } from './commonUiPresence';
export { confirmAction } from './confirmAction';
export { DialogAccessRestrictedAction, type DialogAccessRestrictedActionProps } from './DialogAccessRestrictedAction';
export {
  DialogAccessRestrictedActionLegacy,
  type DialogAccessRestrictedActionLegacyProps,
} from './DialogAccessRestrictedActionLegacy';
export { navigateToUpgrade, showUpgradePopUp } from './subscription';
export { useCommonUiBackHandler } from './commonUiBack';
