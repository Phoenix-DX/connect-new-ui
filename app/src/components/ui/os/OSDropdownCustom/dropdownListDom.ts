/* The DOM helpers of DropdownCustom (migration/runtime-sources/OutSystemsReactWidgets.js). Like the runtime, they read
   the container's `childNodes[1]` as the list (W16595-17390, W19291-19700) and change classes and focus directly. */

/** The class names of the widget (W20513-21220), with the runtime's spelling "drowpdown-empty-value-row". */
export const DROPDOWN_CLASSES = {
  container: 'dropdown-container',
  display: 'dropdown-display',
  displayContent: 'dropdown-display-content',
  disabled: 'dropdown-disabled',
  list: 'dropdown-list',
  row: 'dropdown-popup-row',
  rowSelected: 'dropdown-popup-row-selected',
  emptyRow: 'drowpdown-empty-value-row',
  background: 'dropdown-background-window',
  scrollable: 'scrollable-list scrollable-list-with-scroll',
  expanded: 'dropdown-expanded',
  expandedUp: 'dropdown-expanded-up',
  expandedDown: 'dropdown-expanded-down',
} as const;

const C = DROPDOWN_CLASSES;

/** `getHTMLNode().childNodes[1]`: the open list; while closed, the validation span when it shows (D2), else none. */
const listNode = (container: HTMLElement): HTMLElement | undefined =>
  container.childNodes[1] instanceof HTMLElement ? container.childNodes[1] : undefined;

/** focusClosedDropdown (W16850): the focus goes to `div.dropdown-display`. */
export function focusClosedDropdown(container: HTMLElement | null): void {
  container?.querySelector<HTMLElement>(`.${C.display}`)?.focus();
}

/** focusCorrectElement (W16595): while open, the focus goes to the selected row, else to the first row. */
export function focusCorrectElement(container: HTMLElement, listVisible: boolean): void {
  if (!listVisible) return;
  const list = listNode(container);
  if (!list) return;
  const first = list.getElementsByClassName(C.row)[0];
  const selected = list.getElementsByClassName(C.rowSelected)[0];
  const target = selected ?? first;
  if (target instanceof HTMLElement) target.focus();
}

/** navigateList (W17000): the selected class and `tabIndex = 0` move to the next or previous row, which gets the
    focus; with no selected row, the first row gets them. The runtime leaves `tabIndex` on the row it leaves. */
export function navigateList(container: HTMLElement | null, direction: 'down' | 'up'): void {
  const list = container ? listNode(container) : undefined;
  if (!list) return;
  const selected = list.getElementsByClassName(C.rowSelected)[0];
  let next: Element | null;
  if (selected instanceof HTMLElement) {
    selected.focus();
    next = direction === 'down' ? selected.nextElementSibling : selected.previousElementSibling;
  } else {
    next = list.getElementsByClassName(C.row)[0] ?? null;
  }
  if (!(next instanceof HTMLElement)) return;
  selected?.classList.remove(C.rowSelected);
  next.classList.add(C.rowSelected);
  next.tabIndex = 0;
  next.focus();
}

/** getScrollParent (W19562): the element itself when it scrolls, else its parents up to the list. */
function getScrollParent(element: HTMLElement | null, list: HTMLElement): HTMLElement | null {
  if (element === null) return null;
  if (element.scrollHeight > element.clientHeight) return element;
  if (element === list) return null;
  return getScrollParent(element.parentElement, list);
}

/** scrollIntoSelectedElement (W19291): the scroll parent of the selected row (inside the list) scrolls to the row. */
export function scrollIntoSelectedElement(container: HTMLElement): void {
  const list = listNode(container);
  if (!list) return;
  const selected = list.getElementsByClassName(C.rowSelected)[0];
  if (!(selected instanceof HTMLElement)) return;
  const parent = getScrollParent(selected, list);
  if (parent && (parent === list || list.contains(parent))) parent.scrollTop = selected.offsetTop - parent.offsetTop;
}
