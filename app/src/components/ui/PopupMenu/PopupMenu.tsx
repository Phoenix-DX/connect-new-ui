/** @origin UBTConnectLibrary.ConnectPatterns.PopupMenu */
// @os-block UBTConnectLibrary.ConnectPatterns.PopupMenu
import { useCallback, useEffect, useRef, useState, type MouseEvent, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { popupPosition } from './position';

export interface PopupMenuProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** Position identifier ("bottom-left", "left"…): class suffix and placement next to the anchor. */
  position?: string;
  /** IsOpen: whenever an input changes, True runs the JS openPopup (which toggles) and False closes the popup. */
  isOpen?: boolean;
  extendedClass?: string;
  /** Event OnOpen. */
  onOnOpen?: () => void;
  /** Event OnClose. */
  onOnClose?: () => void;
  /** Placeholder Anchor: a click on it opens or closes the popup. */
  anchor?: ReactNode;
  /** Placeholder PopupMenu: rendered from the first opening on. */
  popupMenu?: ReactNode;
}

const px = (value: string) => Number.parseFloat(value) || 0;

/** Port of the AddEventHandlers / Update / Destroy JS nodes (UBTConnectLibrary.ConnectPatterns.PopupMenu.mvc.js:612-900):
    the anchor toggles the popup; once opened the container lives in <body> with fixed positioning, follows the anchor
    every frame, and closes on a click outside the anchor, a touchmove, `backbutton` or `dx-before-navigation`. */
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
  const [open, setOpen] = useState(false);
  // OnInitialize: HasOpened = IsOpen; TriggerOnOpen sets it to True.
  const [hasOpened, setHasOpened] = useState(isOpen);
  // openPopup appends the container to <body> on the first opening and never moves it back.
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
        const window_ = { width: window.innerWidth, height: window.innerHeight };
        const { top, left } = popupPosition(position, anchorBox, { width, height }, margins, window_);
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
      {(isOpen || hasOpened) && <div className="dx-popup-menu-content">{popupMenu}</div>}
    </div>
  );
  // stopReactClickBubbling: clicks inside the popup (anchor and menu) never reach the caller's click handlers.
  const stopClick = (event: MouseEvent) => {
    event.stopPropagation();
  };
  return (
    <OSBlock name="ConnectPatterns.PopupMenu" id={id}>
      <div className={`dx-popup-menu ${classSuffix}`} data-container="" onClick={stopClick}>
        <div ref={anchorRef} className="dx-popup-menu-anchor" onClick={openPopup}>
          {anchor}
        </div>
        {inBody ? createPortal(container, document.body) : container}
      </div>
    </OSBlock>
  );
}
