import { useLayoutEffect, useRef, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { usePopupWidget } from '@/components/ui/os/OSPopup';

export interface DialogProps {
  /** Name of the OutSystems block of the dialog (`ConfirmationDialogs.ActionConfirmationDialog`, ...). */
  blockName: string;
  /** Instance id of that block. */
  blockId?: string;
  /** Extra class of the dialog root, after `dx-confirmation-dialog` (`dx-exit-confirmation-dialog`). */
  rootClassName?: string;
  /** Id prefix of the dialog's own elements: `-Root`, `-Popup`, `-DialogHeader`, `-DialogBody`, `-ButtonLabel_Confirm`
      and `-ButtonLabel_Dismiss`. Without it these elements have no id. */
  idPrefix?: string;
  /** ShowPopup: the popup is in the document. */
  open: boolean;
  header?: ReactNode;
  body?: ReactNode;
  confirmLabel?: ReactNode;
  dismissLabel?: ReactNode;
  /** Click on the confirm button (`btn btn-primary`). */
  onConfirm: () => void;
  /** Click on the dismiss button (`btn`). */
  onDismiss: () => void;
  /** Content of the dialog root next to the popup: the event hub and the navigation handler blocks. */
  children?: ReactNode;
}

/** The markup that the NavigationHandler confirmation dialogs share (ActionConfirmationDialog,
    NavigationConfirmationDialog, ExitConfirmationDialog): the block > root `dx-confirmation-dialog` > its children, and
    while open the OSUI popup in a portal on <body> (`popup-backdrop` > `popup-dialog` > `popup-content` > header, body
    and footer with the confirm and dismiss buttons). The Popup widget effects (usePopupWidget) run for as long as the
    dialog is mounted. On every update CopyClassesAcrossPortal gives the portal the classes of the root and of the
    block's parent element, and `display: contents`. Props only: the callers own the open state and the actions. */
export function Dialog({
  blockName,
  blockId,
  rootClassName,
  idPrefix,
  open,
  header,
  body,
  confirmLabel,
  dismissLabel,
  onConfirm,
  onDismiss,
  children,
}: DialogProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const portalParentRef = useRef<HTMLDivElement>(null);
  const portalRootRef = useRef<HTMLDivElement>(null);
  usePopupWidget(open);

  // CopyClassesAcrossPortal (NavigationHandler), on every update of the dialog.
  useLayoutEffect(() => {
    const root = rootRef.current;
    const portalParent = portalParentRef.current;
    const portalRoot = portalRootRef.current;
    if (!open || !root || !portalParent || !portalRoot) return;
    const rootParentClass = root.parentElement?.parentElement?.className ?? '';
    portalRoot.className = root.className;
    portalParent.className = 'portal-class' + (rootParentClass ? ` ${rootParentClass}` : '');
    portalParent.style.display = 'contents';
  });

  const id = (suffix: string) => (idPrefix === undefined ? undefined : `${idPrefix}-${suffix}`);
  return (
    <OSBlock name={blockName} id={blockId}>
      <div
        className={rootClassName ? `dx-confirmation-dialog ${rootClassName}` : 'dx-confirmation-dialog'}
        data-container=""
        id={id('Root')}
        ref={rootRef}
      >
        {open &&
          createPortal(
            <div ref={portalParentRef}>
              <div ref={portalRootRef}>
                <div className="popup-backdrop" data-popup-backdrop="">
                  <div
                    aria-modal="true"
                    className="popup-dialog popup-dialog"
                    data-popup=""
                    id={id('Popup')}
                    role="dialog"
                  >
                    <div className="popup-content">
                      <div data-container="">
                        <div className="dx-dialog-header" id={id('DialogHeader')}>
                          {header}
                        </div>
                        <div className="dx-dialog-body" id={id('DialogBody')}>
                          {body}
                        </div>
                        <div className="dx-dialog-footer" data-container="">
                          <button className="btn btn-primary" data-button="" type="button" onClick={onConfirm}>
                            <div id={id('ButtonLabel_Confirm')}>{confirmLabel}</div>
                          </button>
                          <button className="btn" data-button="" type="button" onClick={onDismiss}>
                            <div id={id('ButtonLabel_Dismiss')}>{dismissLabel}</div>
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
        {children}
      </div>
    </OSBlock>
  );
}
