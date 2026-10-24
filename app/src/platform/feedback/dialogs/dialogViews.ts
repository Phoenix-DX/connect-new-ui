import type { ComponentType, ReactNode } from 'react';

/* The markup of the platform dialogs (Dialog_AccessRestrictedAction, Dialog_ExitConfirmation) is the dialog of
   components/ui/Dialog, which platform/ may not import (plan v2 section 2.4, rule 8). app/ gives it once at start
   (app/dialogs.ts); the test setup and the Storybook preview do the same. The props below are the ones the platform
   dialogs pass; the components of components/ui/Dialog accept them. */

/** Props of components/ui/Dialog ConfirmDialog (the ActionConfirmationDialog block). */
export interface ConfirmDialogViewProps {
  widgetId: string;
  scope: string;
  header?: ReactNode;
  body?: ReactNode;
  confirmLabel?: ReactNode;
  dismissLabel?: ReactNode;
  onConfirmed?: () => Promise<void> | void;
}

/** Props of components/ui/Dialog Dialog (the markup that the confirmation dialogs share). */
export interface DialogViewProps {
  blockName: string;
  blockId?: string;
  rootClassName?: string;
  idPrefix?: string;
  open: boolean;
  header?: ReactNode;
  body?: ReactNode;
  confirmLabel?: ReactNode;
  dismissLabel?: ReactNode;
  onConfirm: () => void;
  onDismiss: () => void;
  children?: ReactNode;
}

export interface DialogViews {
  ConfirmDialog: ComponentType<ConfirmDialogViewProps>;
  Dialog: ComponentType<DialogViewProps>;
}

/** Before app/dialogs.ts connected the dialogs, a platform dialog that renders throws this. */
const NotConnected = (): never => {
  throw new Error('connectDialogs() not run');
};

/** The ConfirmDialog of components/ui/Dialog (app/dialogs.ts sets it). */
export let ConfirmDialogView: ComponentType<ConfirmDialogViewProps> = NotConnected;
/** The Dialog of components/ui/Dialog (app/dialogs.ts sets it). */
export let DialogView: ComponentType<DialogViewProps> = NotConnected;

/** Called once by app/ (and by the test and Storybook setup) before a platform dialog renders. */
export function setDialogViews(next: DialogViews): void {
  ConfirmDialogView = next.ConfirmDialog;
  DialogView = next.Dialog;
}
