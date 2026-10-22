// @os-block NavigationHandler.ConfirmationDialogs.NavigationConfirmationDialog
import { useCallback, useLayoutEffect, useRef, useState, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { usePopupWidget } from '@/components/ui/os/OSPopup';
import { resumeNavigation, wasNavigationPrevented, type NavigationEvent } from '../lib/actions';
import { NavigationHandler } from '../NavigationHandler';
import { PreventBackNavigation } from '../PreventBackNavigation';

export interface NavigationConfirmationDialogProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** Event Navigation (NavigationEvent): raised for a navigation no other handler prevented; the caller prevents it
      (PreventNavigation) to ask for confirmation. */
  onNavigation?: (navigationEvent: NavigationEvent) => void;
  /** Placeholder DialogHeader. */
  dialogHeader?: ReactNode;
  /** Placeholder DialogBody. */
  dialogBody?: ReactNode;
  /** Placeholder ButtonLabel_Confirm. */
  buttonLabelConfirm?: ReactNode;
  /** Placeholder ButtonLabel_Dismiss. */
  buttonLabelDismiss?: ReactNode;
}

/** Asks before leaving the screen (p:migration/blocks/sources/NavigationHandler.ConfirmationDialogs.
    NavigationConfirmationDialog.mvc.js, "NCD"; view :119-338, controller :363-610). Never captured: the markup follows
    the compiled view and the OSUI popup markup captured on HouseholdDetails (dom:1392-1398), as ActionConfirmationDialog
    (src/shell/dialogs). Root container > Popup (in <body>), PreventBackNavigation while shown, NavigationHandler. */
export function NavigationConfirmationDialog({
  id,
  onNavigation,
  dialogHeader,
  dialogBody,
  buttonLabelConfirm,
  buttonLabelDismiss,
}: NavigationConfirmationDialogProps) {
  // OnInitialize (NCD:483-508): ShowDialog = False, Event = NullObject.
  const [showDialog, setShowDialog] = useState(false);
  const eventVar = useRef<NavigationEvent | null>(null);
  const latestOnNavigation = useRef(onNavigation);
  useLayoutEffect(() => {
    latestOnNavigation.current = onNavigation;
  });
  const rootRef = useRef<HTMLDivElement>(null);
  const portalParentRef = useRef<HTMLDivElement>(null);
  const portalRootRef = useRef<HTMLDivElement>(null);
  usePopupWidget(showDialog); // OSWidgets.Popup ShowPopup = ShowDialog (NCD:159)

  // OnNavigation (NCD:390-450): skip a navigation already prevented; else raise Navigation and, when the caller
  // prevented it, show the dialog and keep the event. The dispatch runs block events synchronously
  // (withSynchronousBlockEvents, NH:1271-1290), so the check after the event sees the caller's PreventNavigation.
  const onNavigationAction = useCallback((navigationEvent: NavigationEvent) => {
    if (wasNavigationPrevented(navigationEvent)) return;
    latestOnNavigation.current?.(navigationEvent);
    if (wasNavigationPrevented(navigationEvent)) {
      setShowDialog(true);
      eventVar.current = navigationEvent;
    }
  }, []);

  // Yes (NCD:363-388): ShowDialog = False, ResumeNavigation(Event).
  const yes = () => {
    setShowDialog(false);
    if (eventVar.current) resumeNavigation(eventVar.current);
  };

  // No (NCD:453-481): ShowDialog = False, Event = NullObject, NavigationCancelledByUserJS (NCD:608-613).
  const no = useCallback(() => {
    setShowDialog(false);
    eventVar.current = null;
    window.dispatchEvent(new CustomEvent('dx-navigation-cancelled-by-user'));
  }, []);

  // Root componentDidUpdate → OnRootComponentDidUpdate (NCD:510-535) → CopyClassesAcrossPortal(Root, Popup)
  // (NH:339-357): the portal gets the classes of Root and of the block's parent container, and `display: contents`.
  useLayoutEffect(() => {
    const root = rootRef.current;
    const portalParent = portalParentRef.current;
    const portalRoot = portalRootRef.current;
    if (!showDialog || !root || !portalParent || !portalRoot) return;
    const rootParentClass = root.parentElement?.parentElement?.className ?? '';
    portalRoot.className = root.className;
    portalParent.className = 'portal-class' + (rootParentClass ? ` ${rootParentClass}` : '');
    portalParent.style.display = 'contents';
  });

  return (
    <OSBlock name="ConfirmationDialogs.NavigationConfirmationDialog" id={id}>
      <div className="dx-confirmation-dialog" data-container="" ref={rootRef}>
        {showDialog &&
          createPortal(
            <div ref={portalParentRef}>
              <div ref={portalRootRef}>
                <div className="popup-backdrop" data-popup-backdrop="">
                  <div aria-modal="true" className="popup-dialog popup-dialog" data-popup="" role="dialog">
                    <div className="popup-content">
                      <div data-container="">
                        <div className="dx-dialog-header">{dialogHeader}</div>
                        <div className="dx-dialog-body">{dialogBody}</div>
                        <div className="dx-dialog-footer" data-container="">
                          <button className="btn btn-primary" data-button="" type="button" onClick={yes}>
                            <div>{buttonLabelConfirm}</div>
                          </button>
                          <button className="btn" data-button="" type="button" onClick={no}>
                            <div>{buttonLabelDismiss}</div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>,
            document.body,
          )}
        {/* PreventBackNavigation while ShowDialog; BackNavigationPrevented → No (NCD:270-303). */}
        {showDialog && <PreventBackNavigation onBackNavigationPrevented={no} />}
        {/* NavigationHandler: Navigation → OnNavigation (NCD:305-336). */}
        <NavigationHandler onNavigation={onNavigationAction} />
      </div>
    </OSBlock>
  );
}
