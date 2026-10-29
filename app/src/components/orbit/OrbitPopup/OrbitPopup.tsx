import { useRef, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { usePopupWidget } from '@/components/ui/os/OSPopup';

interface OrbitPopupProps {
  /** Widget name with its block prefix (`b1-Popup_QRCode`, `b1-b6-UnknownErrorPopup`). */
  id: string;
  /** ShowPopup. */
  showPopup: boolean;
  /** Style Classes of the Popup widget (the runtime puts "popup-dialog" before them). */
  style: string;
  /** Classes of the Root container, copied onto the portal root by CopyClassesAcrossPortal. */
  rootClassName: string;
  /** Classes of the Root container's grandparent, appended to "portal-class" by CopyClassesAcrossPortal. */
  rootParentClassName?: string;
  children: ReactNode;
}

/** The OutSystems Popup widget of the Orbit admin blocks (Popup_QRCode of ScreenBlock_AdminEventDetail and
    ScreenBlock_AdminMilestoneDetail, UnknownErrorPopup of OrbitErrorMessage), portalled to the end of <body> as the
    runtime does: `.portal-class` > portal root > `.popup-backdrop` > `.popup-dialog` > `.popup-content`. A closed
    popup renders nothing but keeps the widget's page effects (usePopupWidget). The classes are the ones
    CopyClassesAcrossPortal leaves (runtime-sources/Connect2_LegacyShared.controller.js :1534-1553, run by the Root
    container's componentDidUpdate): the portal root gets the Root classes, the portal parent "portal-class" plus the
    class of Root's grandparent. Same markup as AdminPopup of OrbitAdminEventDetail, which moves here later. */
export function OrbitPopup({
  id,
  showPopup,
  style,
  rootClassName,
  rootParentClassName = '',
  children,
}: OrbitPopupProps) {
  const node = useRef<HTMLDivElement>(null);
  usePopupWidget(showPopup, node);
  if (!showPopup) return null;
  return createPortal(
    <div className={`portal-class${rootParentClassName ? ` ${rootParentClassName}` : ''}`}>
      <div className={rootClassName} ref={node}>
        <div className="popup-backdrop" data-popup-backdrop="">
          <div aria-modal="true" className={`popup-dialog ${style}`} data-popup="" id={id} role="dialog">
            <div className="popup-content">{children}</div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
