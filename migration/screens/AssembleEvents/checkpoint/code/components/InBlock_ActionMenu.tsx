// @os-block Connect2_LegacyShared.NewConnect.InBlock_ActionMenu
import { useEffect, useRef, type MouseEvent, type ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';

const POINTER = { cursor: 'pointer' };

export interface InBlock_ActionMenuProps {
  id: string;
  isOpen: boolean;
  extendedClass?: string;
  /** Event OnClose (a click on the container). */
  onClose: (event: MouseEvent) => void;
  /** Placeholder MenuEntries. */
  menuEntries?: ReactNode;
}

/** NewConnect.InBlock_ActionMenu (p:…/Connect2_LegacyShared.NewConnect.InBlock_ActionMenu.mvc.js view; dom/default.html
    :237-249): ActionMenuContainer (`action-menu-container ` + ExtendedClass, aria-hidden / aria-expanded from IsOpen,
    click → OnCancelClick: focus back to the element focused when opening, then OnClose), the background, the menu with
    the close bar (click → ToggleActionSheet) and the MenuEntries placeholder. ToggleActionSheet (OnParametersChanged JS)
    adds `action-menu-container--visible` while IsOpen; its transient `--animatable` class is not reproduced. */
export function InBlock_ActionMenu({ id, isOpen, extendedClass = '', onClose, menuEntries }: InBlock_ActionMenuProps) {
  const scope = id.replace('$', '');
  const activeElement = useRef<Element | null>(null);
  useEffect(() => {
    // ToggleActionSheet JS: remembers the focused element when opening.
    activeElement.current = isOpen ? document.activeElement : null;
  }, [isOpen]);
  return (
    <OSBlock name="NewConnect.InBlock_ActionMenu" id={id}>
      <div
        aria-atomic="true"
        aria-expanded={isOpen ? 'true' : 'false'}
        aria-hidden={isOpen ? 'false' : 'true'}
        aria-live="polite"
        className={`action-menu-container ${extendedClass}${isOpen ? ' action-menu-container--visible' : ''}`}
        data-container=""
        id={`${scope}-ActionMenuContainer`}
        style={POINTER}
        onClick={(e) => {
          if (activeElement.current instanceof HTMLElement) activeElement.current.focus();
          onClose(e);
        }}
      >
        <div className="action-menu-background" data-container="" />
        <div className="action-menu OSAutoMarginTop" data-container="">
          <div className="action-menu-top" data-container="" id={`${scope}-ActionSheetClose`} style={POINTER}>
            <div className="close-bar" data-container="" />
          </div>
          <div className="action-menu-entries" id={`${scope}-MenuEntries`}>
            {menuEntries}
          </div>
        </div>
      </div>
    </OSBlock>
  );
}
