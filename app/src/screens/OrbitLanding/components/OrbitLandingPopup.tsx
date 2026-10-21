import { useRef, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { usePopupWidget } from '../../../components/OSPopup';
import { styleFromCssText } from '../../../shared/lib/cssText';

export interface OrbitLandingPopupProps {
  /** Widget name with its block prefix (`b1-Popup_Filters`, `b1-Popup_Sort`). */
  id: string;
  /** ShowPopup. */
  showPopup: boolean;
  /** extendedProperties style (`top: <Top>px;` and for Sort `left: <Left>px;`). */
  style: string;
  /** Classes of the Root_* container, copied onto the portal root by CopyClassesAcrossPortal. */
  rootClassName: string;
  children: ReactNode;
}

/** The OutSystems Popup widget of ScreenBlock_OrbitLanding (SB view :738-760 Popup_Filters, :833-860 Popup_Sort; style
    "popup-dialog orbit-filters-popup"), portalled to the end of <body> as the runtime does (captured
    dom/popup-filters.raw.html, dom/popup-sort.raw.html): `.portal-class` > portal root > `.popup-backdrop` >
    `.popup-dialog` > `.popup-content`. A closed popup renders nothing but keeps the widget's page effects
    (usePopupWidget).
    The classes are the ones CopyClassesAcrossPortal leaves (runtime-sources/Connect2_LegacyShared.controller.js
    :1534-1553, run by the Root_* container's componentDidUpdate, SB :1236-1260, :2021-2045): the portal root gets the
    Root_* classes; the portal parent "portal-class" plus the class of Root_*'s grandparent (b1-b1-Content: none), and
    its inline `display: inline` is removed (captured `style=""`). */
export function OrbitLandingPopup({ id, showPopup, style, rootClassName, children }: OrbitLandingPopupProps) {
  /* The Popup widget's page effects, its state.value re-render after a ShowPopup change (the open Filters popup keeps
     `popup-disable-scroll` on <html> although the closed Sort popup after it removed it, captured popup-filters) and
     focusFirstFocusableElement on the element its Portal renders (the Root_* copy): the shared usePopupWidget. */
  const node = useRef<HTMLDivElement>(null);
  usePopupWidget(showPopup, node);
  if (!showPopup) return null;
  return createPortal(
    <div className="portal-class" style={{}}>
      <div className={rootClassName} ref={node}>
        <div className="popup-backdrop" data-popup-backdrop="">
          <div
            aria-modal="true"
            className="popup-dialog popup-dialog orbit-filters-popup"
            data-popup=""
            id={id}
            role="dialog"
            style={styleFromCssText(style)}
          >
            <div className="popup-content">{children}</div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
