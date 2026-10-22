// @os-block Connect2_LegacyShared.Widgets.PopupMenu
import { useCallback, useEffect, useRef, useState, type MouseEvent, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { popupPosition } from '@/shared/UBTConnectLibrary/PopupMenu/position';

export interface PopupMenuProps {
  /** OutSystems instance id of the block (`b1-l1-57_0-b5-$b1`). */
  id: string;
  /** Position identifier: class suffix and placement next to the anchor (ItemOptionsMenu passes none). */
  position?: string;
  isOpen?: boolean;
  extendedClass?: string;
  onOnOpen?: () => void;
  onOnClose?: () => void;
  /** Placeholder Anchor. */
  anchor?: ReactNode;
  /** Placeholder PopupMenu: rendered from the first opening on. */
  popupMenu?: ReactNode;
}

const px = (value: string) => Number.parseFloat(value) || 0;

/** Connect2_LegacyShared Widgets.PopupMenu (migration/screens/BookmarksByGroup/analysis/sources/pretty/Connect2_LegacyShared.Widgets.PopupMenu.mvc.js:
    view :163-249, controller :253-620, JS nodes :622-900). Its view and JS nodes are those of UBTConnectLibrary
    ConnectPatterns.PopupMenu (`src/shared/UBTConnectLibrary/PopupMenu`, same AddEventHandlers/Update/Destroy code)
    plus a `dx-popup-menu-backdrop` container after the content (view :233-247) and the widget ids Root, Anchor and
    PopupMenu: the anchor toggles; opening raises OnOpen, then on the next frame adds `dx-popup-menu-open`, moves the
    container to <body> and follows the anchor every frame (shared `popupPosition`); a click outside the anchor,
    touchmove, `backbutton` and `dx-before-navigation` close it; clicks inside never bubble to the caller. */
export function PopupMenu({
  id,
  position = '',
  isOpen = false,
  extendedClass = '',
  onOnOpen,
  onOnClose,
  anchor,
  popupMenu,
}: PopupMenuProps) {
  const scope = id.replace('$', '');
  const [open, setOpen] = useState(false);
  // OnInitialize: HasOpened = IsOpen; TriggerOnOpen sets it to True.
  const [hasOpened, setHasOpened] = useState(isOpen);
  const [inBody, setInBody] = useState(false);
  const openRef = useRef(false);
  const anchorRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const events = useRef({ onOnOpen, onOnClose });
  useEffect(() => {
    events.current = { onOnOpen, onOnClose };
  });

  const closePopup = useCallback(() => {
    if (!openRef.current) return;
    openRef.current = false;
    setOpen(false);
    events.current.onOnClose?.();
  }, []);

  const openPopup = useCallback(() => {
    if (openRef.current) {
      closePopup();
      return;
    }
    setHasOpened(true);
    events.current.onOnOpen?.();
    requestAnimationFrame(() => {
      openRef.current = true;
      setOpen(true);
      setInBody(true);
    });
  }, [closePopup]);

  // OnReady and OnParametersChanged: componentUpdate(Position, IsOpen).
  useEffect(() => {
    if (isOpen) openPopup();
    else closePopup();
  }, [isOpen, position, extendedClass, openPopup, closePopup]);

  useEffect(() => {
    const container = containerRef.current;
    const anchorElement = anchorRef.current;
    if (!open || !container || !anchorElement) return;
    container.style.position = 'fixed';
    let frame = 0;
    let last = '';
    const updatePopup = () => {
      const anchorBox = anchorElement.getBoundingClientRect();
      const { width, height } = container.getBoundingClientRect();
      const key = [anchorBox.x, anchorBox.y, anchorBox.width, anchorBox.height, width, height]
        .concat(window.innerWidth, window.innerHeight)
        .join();
      if (key !== last) {
        last = key;
        const style = window.getComputedStyle(container);
        const margins = {
          top: px(style.marginTop),
          right: px(style.marginRight),
          bottom: px(style.marginBottom),
          left: px(style.marginLeft),
        };
        const viewport = { width: window.innerWidth, height: window.innerHeight };
        const { top, left } = popupPosition(position, anchorBox, { width, height }, margins, viewport);
        container.style.top = `${String(top)}px`;
        container.style.left = `${String(left)}px`;
      }
      frame = requestAnimationFrame(updatePopup);
    };
    updatePopup();
    const clickOutsideAnchor = (event: globalThis.MouseEvent) => {
      if (!(event.target instanceof Node && anchorElement.contains(event.target))) closePopup();
    };
    document.addEventListener('click', clickOutsideAnchor, true);
    document.body.addEventListener('touchmove', closePopup);
    document.addEventListener('backbutton', closePopup);
    window.addEventListener('dx-before-navigation', closePopup);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener('click', clickOutsideAnchor, true);
      document.body.removeEventListener('touchmove', closePopup);
      document.removeEventListener('backbutton', closePopup);
      window.removeEventListener('dx-before-navigation', closePopup);
    };
  }, [open, position, closePopup]);

  const classSuffix =
    `dx-popup-menu-position-${position}` +
    (open ? ' dx-popup-menu-open' : '') +
    (extendedClass !== '' ? ` ${extendedClass}` : '');
  const container = (
    <div ref={containerRef} className={`dx-popup-menu-container ${classSuffix}`} data-container="">
      {(isOpen || hasOpened) && (
        <div className="dx-popup-menu-content" id={`${scope}-PopupMenu`}>
          {popupMenu}
        </div>
      )}
      <div className="dx-popup-menu-backdrop" data-container="" />
    </div>
  );
  // stopReactClickBubbling: clicks inside the popup never reach the caller's click handlers.
  const stopClick = (event: MouseEvent) => {
    event.stopPropagation();
  };
  return (
    <OSBlock name="Widgets.PopupMenu" id={id}>
      <div className={`dx-popup-menu ${classSuffix}`} data-container="" id={`${scope}-Root`} onClick={stopClick}>
        <div ref={anchorRef} className="dx-popup-menu-anchor" id={`${scope}-Anchor`} onClick={openPopup}>
          {anchor}
        </div>
        {inBody ? createPortal(container, document.body) : container}
      </div>
    </OSBlock>
  );
}
