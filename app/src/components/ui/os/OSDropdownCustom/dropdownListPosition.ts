/* The math of DropdownCustom.updateState (migration/runtime-sources/OutSystemsReactWidgets.js W14151-15700): the place
   of the open list and the side it opens to. Numbers in, no DOM: useDropdownListEffects reads the rects and the window,
   then applies the result. */

/** DropdownCustom.SmartphonePortraitWidth and PopupBoxMargin (W20513). */
const SMARTPHONE_PORTRAIT_WIDTH = 420;
const POPUP_BOX_MARGIN = 10;

/** The inline style of `div.dropdown-list` (the runtime's `state.position`); "" leaves a property out. */
export interface ListPosition {
  left: string;
  top: string;
  width: string;
  height: string;
}

/** The side the list opens to: the classes `dropdown-expanded dropdown-expanded-up|down` on the container. */
export type ListExpanded = 'up' | 'down';

export interface ListPositionInput {
  /** `div.dropdown-display-content` getBoundingClientRect(): left and right. */
  contentLeft: number;
  contentRight: number;
  /** `div.dropdown-display` getBoundingClientRect(): top and bottom. */
  displayTop: number;
  displayBottom: number;
  /** The container's `childNodes[1]` getBoundingClientRect(): the list, or the validation span while closed (D2). */
  listHeight: number;
  listWidth: number;
  pageXOffset: number;
  pageYOffset: number;
  innerWidth: number;
  innerHeight: number;
  /** The top of the first `[data-popup]` of the document; null when there is none (the page offset is used). */
  popupTop: number | null;
  listVisible: boolean;
  /** The container's left, recorded by show() (W13912-14030). */
  offsetLeft: number;
}

const px = (n: number) => `${String(Math.round(n))}px`;

/** updateState without the DOM: up when the space above the display (down to the popup top) is larger than the space
    below it, else down; the height is clamped to the window bottom or the popup top with a 10 px margin; on a phone
    (innerWidth ≤ 420) the list takes the window width less 2 × 10 px; else it starts at the recorded left while open,
    or is centred under the display content (not left of the page offset). */
export function computeListPosition(input: ListPositionInput): { position: ListPosition; expanded: ListExpanded } {
  const position: ListPosition = { left: '', top: '', width: '', height: '' };
  const pageX = input.pageXOffset;
  const pageY = input.pageYOffset;
  const left = Math.round(input.contentLeft + pageX);
  const right = Math.round(input.contentRight + pageX);
  const top = Math.round(input.displayTop + pageY);
  const bottom = Math.round(input.displayBottom + pageY);
  const listHeight = Math.round(input.listHeight);
  const listWidth = Math.round(input.listWidth);
  const viewBottom = pageY + input.innerHeight;
  const middle = (left + right) / 2;
  let x: number;
  if (input.innerWidth <= SMARTPHONE_PORTRAIT_WIDTH) {
    position.width = px(input.innerWidth - 2 * POPUP_BOX_MARGIN);
    x = pageX + POPUP_BOX_MARGIN;
  } else {
    x = input.listVisible ? input.offsetLeft : Math.max(pageX, middle - listWidth / 2);
  }
  const popupTop = input.popupTop ?? pageY;
  let expanded: ListExpanded;
  let y: number;
  if (top - popupTop > viewBottom - bottom) {
    expanded = 'up';
    y = top - listHeight;
    if (y < popupTop - POPUP_BOX_MARGIN) {
      // The runtime moves the list below the popup top (+ margin), not to its edge.
      y = popupTop + POPUP_BOX_MARGIN;
      position.height = px(top - popupTop - POPUP_BOX_MARGIN);
    }
  } else {
    expanded = 'down';
    y = bottom;
    if (y + listHeight > viewBottom - POPUP_BOX_MARGIN) position.height = px(viewBottom - bottom - POPUP_BOX_MARGIN);
  }
  position.left = px(x);
  position.top = px(y);
  return { position, expanded };
}

/** The setState guard of updateState (W15503): the new position only when left, top or width changes, or when
    it sets a height; a new empty height keeps the current one. Returning `current` stops the update loop. */
export function keepListPosition(current: ListPosition, next: ListPosition): ListPosition {
  const changed =
    current.left !== next.left ||
    current.top !== next.top ||
    current.width !== next.width ||
    (current.height !== next.height && next.height !== '');
  return changed ? next : current;
}
