/** @origin NavigationHandler.ConfirmationDialogs.ActionConfirmationDialog */
import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { Dialog } from './Dialog';
import { useActionConfirmationTrigger } from './dialogTriggers';

export interface ConfirmDialogProps {
  /** Id of the block, the id given to `confirmAction` (for example `b13-b4-PopUp`). */
  widgetId: string;
  /** Id prefix of the block's own elements (for example `b13-b4-b1`). */
  scope: string;
  header?: ReactNode;
  body?: ReactNode;
  confirmLabel?: ReactNode;
  dismissLabel?: ReactNode;
  /** Confirmed event, awaited before the answer True. */
  onConfirmed?: () => Promise<void> | void;
}

/** A question that `confirmAction(widgetId)` opens and that answers True (confirm) or False (dismiss, or a back
    navigation while open). Closed markup captured on HomeFeed: the block > Root > EventHub. While open, the Root also
    holds the PreventBackNavigation block and the popup is in a portal on <body> (Dialog). The trigger (the `dx-show`
    listener, the answer and the back-navigation handler) is the platform hook that app/ connects
    (dialogTriggers.ts). */
export function ConfirmDialog({
  widgetId,
  scope,
  header,
  body,
  confirmLabel,
  dismissLabel,
  onConfirmed,
}: ConfirmDialogProps) {
  const { open, eventHubRef, confirm, dismiss } = useActionConfirmationTrigger(onConfirmed);
  return (
    <Dialog
      blockName="ConfirmationDialogs.ActionConfirmationDialog"
      blockId={widgetId}
      idPrefix={scope}
      open={open}
      header={header}
      body={body}
      confirmLabel={confirmLabel}
      dismissLabel={dismissLabel}
      onConfirm={confirm}
      onDismiss={dismiss}
    >
      <div data-container="" data-dx-event-hub="True" id={`${scope}-EventHub`} ref={eventHubRef} />
      {open && (
        <OSBlock name="NavigationHandler.PreventBackNavigation" id={`${scope}-$b1`}>
          <OSBlock name="NavigationHandler.BackNavigationHandler" id={`${scope}-b1-$b1`} />
        </OSBlock>
      )}
    </Dialog>
  );
}
