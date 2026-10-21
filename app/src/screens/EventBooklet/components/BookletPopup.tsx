import { useRef, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { usePopupWidget } from '../../../components/OSPopup';

/* The platform Popup widget of ScreenBlock_EventBooklet (SB view :1731-1799: ShowPopup = FiltersPopUp, Style
   "popup-dialog orbit-booklet-popup"), as OutSystemsReactWidgets.js Popup.render and OutSystemsReactView.js Portal
   build it: a portal container `div.portal-class` (display inline) at the end of <body>, then the HtmlTags div, the
   `popup-backdrop` (clicks and touch moves stop there), the `popup-dialog` and the `popup-content`. A closed popup
   renders nothing but keeps the widget's page effects (usePopupWidget). No CopyClassesAcrossPortal here. */

export interface BookletPopupProps {
  showPopup: boolean;
  children: ReactNode;
}

export function BookletPopup({ showPopup, children }: BookletPopupProps) {
  const node = useRef<HTMLDivElement>(null);
  usePopupWidget(showPopup, node);
  if (!showPopup) return null;
  return createPortal(
    <div className="portal-class" style={{ display: 'inline' }}>
      <div ref={node}>
        <div
          className="popup-backdrop"
          data-popup-backdrop=""
          onClick={(e) => {
            e.stopPropagation();
          }}
          onTouchMove={(e) => {
            e.stopPropagation();
          }}
        >
          <div aria-modal="true" className="popup-dialog popup-dialog orbit-booklet-popup" data-popup="" role="dialog">
            <div className="popup-content">{children}</div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
