/** @origin NavigationHandler.ConfirmationDialogs.NavigationConfirmationDialog */
// @os-block UBTConnect.App_Common_Blocks_PopupDialogs.Dialog_Navigation
import { useCallback, useEffect, useLayoutEffect, useRef, useState, type ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { resumeNavigation, wasNavigationPrevented, type NavigationEvent } from '@/shared/NavigationHandler/lib/actions';
import { UBT_Color, UBT_FontWeight, UBT_Size } from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { Dialog } from './Dialog';
import { usePreventBackNavigationTrigger, type DialogTrigger } from './dialogTriggers';

export interface NavigationDialogProps {
  /** Instance id of the outer block: NavigationConfirmationDialog, or Dialog_Navigation in the `connect` variant. */
  id?: string;
  /** `plain` (default): NavigationConfirmationDialog alone, the caller gives the frame and the texts. `connect`:
      UBTConnect App_Common_Blocks_PopupDialogs.Dialog_Navigation, the app's leave-screen question: the
      `connect-dialog-popup connect-dialog-popup--navigation` container, the header (centred) and the body in
      CustomContainers as in ChoiceDialog, the labels as expressions (default "Yes" and "No"). */
  variant?: 'plain' | 'connect';
  /** Event Navigation (Dialog_Navigation: Event_OnBackNavigation): raised for a navigation that no other handler
      prevented; the caller prevents it (PreventNavigation) to ask for confirmation. */
  onNavigation?: (navigationEvent: NavigationEvent) => void;
  /** Placeholder DialogHeader (Dialog_Navigation: Placeholder_Header). */
  header?: ReactNode;
  /** Placeholder DialogBody (Dialog_Navigation: Placeholder_Body). */
  body?: ReactNode;
  /** Placeholder ButtonLabel_Confirm (Dialog_Navigation: input ConfirmLabel, default "Yes"). */
  confirmLabel?: ReactNode;
  /** Placeholder ButtonLabel_Dismiss (Dialog_Navigation: input DIsmissLabel, default "No"). */
  dismissLabel?: ReactNode;
}

/* Header and body CustomContainer options of the `connect` variant (the UBTConnectLibrary records). */
const HEADER_OPTIONS = {
  MarginSize: { BottomSizeId: UBT_Size.Base },
  TextOptions: { Color: UBT_Color.Neutral10, FontWeight: UBT_FontWeight.SemiBold },
};
const BODY_OPTIONS = { MarginSize: { BottomSizeId: UBT_Size.Medium }, TextOptions: { Color: UBT_Color.Neutral10 } };

/** Asks before the app leaves the screen. Never captured: the markup follows the compiled view and the OSUI popup
    markup captured on HouseholdDetails, as ConfirmDialog. The block > Root (no ids) > the popup while open, the
    PreventBackNavigation block while open and the NavigationHandler block. The navigation events are DOM events of
    the window (useNavigationConfirmation below); the back-navigation queue is the platform hook that app/ connects
    (dialogTriggers.ts). */
export function NavigationDialog({
  id,
  variant = 'plain',
  onNavigation,
  header,
  body,
  confirmLabel,
  dismissLabel,
}: NavigationDialogProps) {
  if (variant === 'plain') {
    return (
      <NavigationConfirmation
        id={id}
        onNavigation={onNavigation}
        header={header}
        body={body}
        confirmLabel={confirmLabel}
        dismissLabel={dismissLabel}
      />
    );
  }
  return (
    <OSBlock name="App_Common_Blocks_PopupDialogs.Dialog_Navigation" id={id}>
      <div className="connect-dialog-popup connect-dialog-popup--navigation" data-container="">
        <NavigationConfirmation
          onNavigation={onNavigation}
          header={
            <CustomContainer options={HEADER_OPTIONS}>
              <div className="text-align-center" data-container="">
                <div>{header}</div>
              </div>
            </CustomContainer>
          }
          body={
            <CustomContainer options={BODY_OPTIONS}>
              <div>{body}</div>
            </CustomContainer>
          }
          confirmLabel={<span data-expression="">{confirmLabel ?? 'Yes'}</span>}
          dismissLabel={<span data-expression="">{dismissLabel ?? 'No'}</span>}
        />
      </div>
    </OSBlock>
  );
}

type NavigationConfirmationProps = Omit<NavigationDialogProps, 'variant'>;

/** NavigationHandler ConfirmationDialogs.NavigationConfirmationDialog. */
function NavigationConfirmation({
  id,
  onNavigation,
  header,
  body,
  confirmLabel,
  dismissLabel,
}: NavigationConfirmationProps) {
  const { open, confirm, dismiss } = useNavigationConfirmation(onNavigation);
  return (
    <Dialog
      blockName="ConfirmationDialogs.NavigationConfirmationDialog"
      blockId={id}
      open={open}
      header={header}
      body={body}
      confirmLabel={confirmLabel}
      dismissLabel={dismissLabel}
      onConfirm={confirm}
      onDismiss={dismiss}
    >
      {open && (
        <OSBlock name="NavigationHandler.PreventBackNavigation">
          <OSBlock name="NavigationHandler.BackNavigationHandler" />
        </OSBlock>
      )}
      <OSBlock name="NavigationHandler.NavigationHandler" />
    </Dialog>
  );
}

/**
 * The client actions of NavigationConfirmationDialog.
 * - its NavigationHandler listens for the window event `dx-before-navigation` (the navigation gate dispatches it before
 *   each navigation) for as long as the dialog is mounted;
 * - OnNavigation: a navigation that another handler already prevented is skipped; else `onNavigation` (the Navigation
 *   event) runs, synchronously, and when it prevented the navigation (PreventNavigation) the dialog opens and keeps
 *   the event;
 * - Yes: ShowDialog False, ResumeNavigation(Event); No: ShowDialog False, Event = NullObject,
 *   NavigationCancelledByUserJS (`dx-navigation-cancelled-by-user`);
 * - while open, a back navigation is prevented at lock-screen priority and acts as No (PreventBackNavigation).
 */
function useNavigationConfirmation(onNavigation?: (navigationEvent: NavigationEvent) => void): DialogTrigger {
  // OnInitialize: ShowDialog = False, Event = NullObject.
  const [open, setOpen] = useState(false);
  const eventVar = useRef<NavigationEvent | null>(null);
  const latestOnNavigation = useRef(onNavigation);
  useLayoutEffect(() => {
    latestOnNavigation.current = onNavigation;
  });

  // OnNavigation
  const onNavigationAction = useCallback((navigationEvent: NavigationEvent) => {
    if (wasNavigationPrevented(navigationEvent)) return;
    latestOnNavigation.current?.(navigationEvent);
    if (wasNavigationPrevented(navigationEvent)) {
      setOpen(true);
      eventVar.current = navigationEvent;
    }
  }, []);

  // Yes
  const confirm = () => {
    setOpen(false);
    if (eventVar.current) resumeNavigation(eventVar.current);
  };

  // No
  const dismiss = useCallback(() => {
    setOpen(false);
    eventVar.current = null;
    window.dispatchEvent(new CustomEvent('dx-navigation-cancelled-by-user'));
  }, []);

  usePreventBackNavigationTrigger(open, dismiss); // PreventBackNavigation while ShowDialog; BackNavigationPrevented → No

  // NavigationHandler: OnInitialize adds the window listener, OnDestroy removes it; Navigation → OnNavigation.
  useEffect(() => {
    window.addEventListener('dx-before-navigation', onNavigationAction);
    return () => {
      window.removeEventListener('dx-before-navigation', onNavigationAction);
    };
  }, [onNavigationAction]);

  return { open, confirm, dismiss };
}
