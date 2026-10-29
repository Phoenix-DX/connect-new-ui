import type { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { usePopupWidget } from '@/components/ui/os/OSPopup';

/** @origin Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Orbit_ConfirmationPopUp_New
    A confirmation dialog (Orbit_ConfirmationPopUp_New.mvc.js view): an OSWidgets.Popup (ShowPopup = In_ShowPopUp,
    Style "popup-dialog orbit-popup-new" + " " + In_ExtendedClass when not ""), then "orbit-popup-new-cont" with the
    close icon (orbit-icon-cross, event Close), In_Title, In_Message, and the two action containers: secondary
    ("orbit-popup-new-action-btn-cancel", event SecondaryAction, Placeholder_Secondary) and primary
    ("orbit-popup-new-action-btn-proceed", event PrimaryAction, Placeholder_Primary). No controller logic. The widget
    renders in <body> with the popup markup of the OutSystems Popup widget (as components/ui/Popup); closed, the block
    keeps its empty wrapper (HostSurvey dom/default.html:692-701). */
export function Orbit_ConfirmationPopUp_New({
  id,
  inShowPopUp,
  inTitle = '',
  inMessage = '',
  inExtendedClass = '',
  placeholderSecondary,
  placeholderPrimary,
  onClose,
  onSecondaryAction,
  onPrimaryAction,
}: {
  id: string;
  inShowPopUp: boolean;
  inTitle?: string;
  inMessage?: string;
  inExtendedClass?: string;
  placeholderSecondary?: ReactNode;
  placeholderPrimary?: ReactNode;
  /** Event Close. */
  onClose?: () => void;
  /** Event SecondaryAction. */
  onSecondaryAction?: () => void;
  /** Event PrimaryAction. */
  onPrimaryAction?: () => void;
}) {
  usePopupWidget(inShowPopUp);
  const scope = id.replace(/^\$/, '');
  const style = `popup-dialog orbit-popup-new${inExtendedClass !== '' ? ` ${inExtendedClass}` : ''}`;
  return (
    <OSBlock name="Orbit_Generic_Blocks.Orbit_ConfirmationPopUp_New" id={id}>
      {inShowPopUp &&
        createPortal(
          <div className="portal-class" style={{ display: 'inline' }}>
            <div>
              <div className="popup-backdrop" data-popup-backdrop="">
                <div aria-modal="true" className={`popup-dialog ${style}`} data-popup="" role="dialog">
                  <div className="popup-content">
                    <div className="orbit-popup-new-cont" data-container="">
                      <div className="orbit-popup-new-exit" data-container="">
                        <i className="icon orbit-icon-cross" data-icon="" onClick={onClose} />
                      </div>
                      <div className="orbit-popup-new-title" data-container="">
                        <span data-expression="">{inTitle}</span>
                      </div>
                      <div className="orbit-popup-new-message" data-container="">
                        <span data-expression="">{inMessage}</span>
                      </div>
                      <div className="orbit-popup-new-action" data-container="">
                        <div
                          className="orbit-popup-new-action-btn orbit-popup-new-action-btn-cancel"
                          data-container=""
                          onClick={onSecondaryAction}
                        >
                          <div id={`${scope}-Placeholder_Secondary`}>{placeholderSecondary}</div>
                        </div>
                        <div
                          className="orbit-popup-new-action-btn orbit-popup-new-action-btn-proceed"
                          data-container=""
                          onClick={onPrimaryAction}
                        >
                          <div id={`${scope}-Placeholder_Primary`}>{placeholderPrimary}</div>
                        </div>
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
