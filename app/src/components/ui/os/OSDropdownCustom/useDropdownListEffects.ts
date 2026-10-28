import { useLayoutEffect, useState, type RefObject } from 'react';
import { focusCorrectElement, scrollIntoSelectedElement } from './dropdownListDom';
import { computeListPosition, keepListPosition, type ListExpanded, type ListPosition } from './dropdownListPosition';

/** The runtime's initial `state.position` (W11610-12130). */
const INITIAL_POSITION: ListPosition = { left: '0px', top: '0px', width: '0px', height: '0px' };

/** componentDidMount (W13028) and componentDidUpdate (W13173) of DropdownCustom, after every render: updateState
    (W14139: the list position and the side it opens to), then scrollIntoSelectedElement, then focusCorrectElement.
    updateState reads the container's `childNodes[1]` as the list: with no such node the expanded classes go; with one
    it computes the position, also when that node is the validation span of a closed dropdown (D2, decision O2: ported
    from the runtime code, not checked on TST). The runtime adds the classes with classList; here they are state that
    the component renders. `offsetLeft` is the container's left that show() records. */
export function useDropdownListEffects(
  containerRef: RefObject<HTMLDivElement | null>,
  listVisible: boolean,
  offsetLeft: RefObject<number>,
): { position: ListPosition; expanded: ListExpanded | null } {
  const [position, setPosition] = useState(INITIAL_POSITION);
  const [expanded, setExpanded] = useState<ListExpanded | null>(null);
  // On every render (componentDidUpdate runs on each update): no dependencies. keepListPosition and the equal
  // `expanded` value end the loop, as the runtime's setState guard does.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const display = container.childNodes[0];
    const displayContent = display?.childNodes[0];
    const list = container.childNodes[1];
    if (!list) setExpanded(null);
    else if (display instanceof Element && displayContent instanceof Element && list instanceof Element) {
      const contentRect = displayContent.getBoundingClientRect();
      const displayRect = display.getBoundingClientRect();
      const listRect = list.getBoundingClientRect();
      const next = computeListPosition({
        contentLeft: contentRect.left,
        contentRight: contentRect.right,
        displayTop: displayRect.top,
        displayBottom: displayRect.bottom,
        listHeight: listRect.height,
        listWidth: listRect.width,
        pageXOffset: window.pageXOffset,
        pageYOffset: window.pageYOffset,
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight,
        popupTop: document.querySelector('[data-popup]')?.getBoundingClientRect().top ?? null,
        listVisible,
        offsetLeft: offsetLeft.current,
      });
      setExpanded(next.expanded);
      setPosition((current) => keepListPosition(current, next.position));
    }
    scrollIntoSelectedElement(container);
    focusCorrectElement(container, listVisible);
  });
  return { position, expanded };
}
