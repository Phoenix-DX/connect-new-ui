// @os-block NavigationHandler.ConfirmationDialogs.ActionConfirmationDialog
import { useCallback, useEffect, useLayoutEffect, useRef, useState, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { usePopupWidget } from '@/components/ui/os/OSPopup';
import { usePreventBackNavigation } from '@/platform/navigation';
import { DX_SHOW, type DxShowDetail } from './confirmAction';

/* NavigationHandler ConfirmationDialogs.ActionConfirmationDialog (HF p:NavigationHandler.ConfirmationDialogs.ActionConfirmationDialog.mvc.js,
   "ACD"). Closed markup captured (HF dom:1159-1163): Root > EventHub. The open state is not captured (U21): it follows
   the compiled view (ACD:150-330), the OSUI popup markup captured on HouseholdDetails (dom:1392-1398, as part B's exit
   dialog) and CopyClassesAcrossPortal (HF p:NavigationHandler.controller.js:339-357), run on every popup update. */

export interface ActionConfirmationDialogProps {
  /** id of the block widget, the id given to `confirmAction` (e.g. `b13-b4-PopUp`) */
  widgetId: string;
  /** id prefix of the block's own elements (e.g. `b13-b4-b1`) */
  scope: string;
  header?: ReactNode;
  body?: ReactNode;
  confirmLabel?: ReactNode;
  dismissLabel?: ReactNode;
  /** Confirmed event, awaited before the answer is resolved (ACD:430-448) */
  onConfirmed?: () => Promise<void> | void;
}

export function ActionConfirmationDialog(props: ActionConfirmationDialogProps) {
  const { widgetId, scope, header, body, confirmLabel, dismissLabel, onConfirmed } = props;
  const [showDialog, setShowDialog] = useState(false); // OnInitialize (ACD:356-374)
  const resolveCallback = useRef<DxShowDetail['resolve'] | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const eventHubRef = useRef<HTMLDivElement>(null);
  const portalParentRef = useRef<HTMLDivElement>(null);
  const portalRootRef = useRef<HTMLDivElement>(null);

  // OnReady: OnShowJS (ACD:693-700) → Show (ACD:396-406)
  useEffect(() => {
    const eventHub = eventHubRef.current;
    if (!eventHub) return undefined;
    const onShow = (event: Event) => {
      resolveCallback.current = (event as CustomEvent<DxShowDetail>).detail.resolve;
      setShowDialog(true);
    };
    eventHub.addEventListener(DX_SHOW, onShow);
    return () => {
      eventHub.removeEventListener(DX_SHOW, onShow);
    };
  }, []);

  // Resolve (ACD:548-570)
  const resolve = useCallback((result: boolean) => {
    setShowDialog(false);
    const callback = resolveCallback.current;
    resolveCallback.current = null;
    callback?.(result);
  }, []);
  const yes = async () => {
    setShowDialog(false); // ACD:434-448
    await onConfirmed?.();
    resolve(true);
  };
  const no = useCallback(() => {
    resolve(false);
  }, [resolve]);
  usePreventBackNavigation(showDialog, no); // PreventBackNavigation while shown → No (ACD:300-323)
  usePopupWidget(showDialog); // OSWidgets.Popup ShowPopup = ShowDialog (ACD mvc.js:161-162)

  // PopupComponentDidUpdate → CopyClassesAcrossPortal
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
    <OSBlock name="ConfirmationDialogs.ActionConfirmationDialog" id={widgetId}>
      <div className="dx-confirmation-dialog" data-container="" id={`${scope}-Root`} ref={rootRef}>
        <div data-container="" data-dx-event-hub="True" id={`${scope}-EventHub`} ref={eventHubRef} />
        {showDialog && (
          <OSBlock name="NavigationHandler.PreventBackNavigation" id={`${scope}-$b1`}>
            <OSBlock name="NavigationHandler.BackNavigationHandler" id={`${scope}-b1-$b1`} />
          </OSBlock>
        )}
      </div>
      {showDialog &&
        createPortal(
          <div ref={portalParentRef}>
            <div ref={portalRootRef}>
              <div className="popup-backdrop" data-popup-backdrop="">
                <div
                  aria-modal="true"
                  className="popup-dialog popup-dialog"
                  data-popup=""
                  id={`${scope}-Popup`}
                  role="dialog"
                >
                  <div className="popup-content">
                    <div data-container="">
                      <div className="dx-dialog-header" id={`${scope}-DialogHeader`}>
                        {header}
                      </div>
                      <div className="dx-dialog-body" id={`${scope}-DialogBody`}>
                        {body}
                      </div>
                      <div className="dx-dialog-footer" data-container="">
                        <button className="btn btn-primary" data-button="" type="button" onClick={() => void yes()}>
                          <div id={`${scope}-ButtonLabel_Confirm`}>{confirmLabel}</div>
                        </button>
                        <button className="btn" data-button="" type="button" onClick={no}>
                          <div id={`${scope}-ButtonLabel_Dismiss`}>{dismissLabel}</div>
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
    </OSBlock>
  );
}
