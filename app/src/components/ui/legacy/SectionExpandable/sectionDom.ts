/* JS nodes of OutSystems UI DEPRECATED_AccordionItem, ported as DOM functions on the SectionItem element (the
   original works on the DOM the same way, by element id). `:<n>` = line of
   migration/screens/EventDetail/analysis/sources/pretty/OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.mvc.js. */

/** SectionItem element with the functions SetGlobalActions attaches to it (:1138-1154), which DEPRECATED_Accordion
    and the CloseAll node call on the other items. */
export interface AccordionSectionElement extends HTMLElement {
  CollapseItem?: () => void;
  ExpandItem?: () => void;
  updateAccordion?: (multipleItems: boolean) => void;
}

const parts = (section: HTMLElement) => ({
  content: section.querySelector<HTMLElement>('.section-expandable-content'),
  header: section.querySelector<HTMLElement>('.section-expandable-title'),
});

/** SetAriaAttributes / SetAttributes node (:1156-1174): aria-expanded on the item and its title, aria-hidden on the
    content. */
export function setAriaAttributesJS(section: HTMLElement, isExpand: boolean): void {
  const status = isExpand ? 'true' : 'false';
  section.setAttribute('aria-expanded', status);
  section.querySelector('.section-expandable-title')?.setAttribute('aria-expanded', status);
  section.querySelector('.section-expandable-content')?.setAttribute('aria-hidden', isExpand ? 'false' : 'true');
}

/** Ends the height transition (transitionEndHandler of Expand :1225-1252 / Collapse :1037-1067). */
function onTransitionEnd(
  content: HTMLElement,
  header: HTMLElement,
  focusTarget: HTMLElement,
  isKeypress: boolean,
  done: () => void,
): void {
  const handler = () => {
    content.classList.remove('is--animating');
    content.style.height = '';
    header.style.pointerEvents = '';
    if (content.style.cssText.length === 0) content.removeAttribute('style');
    if (isKeypress) focusTarget.focus();
    done();
    content.removeEventListener('transitionend', handler, false);
  };
  content.addEventListener('transitionend', handler);
}

/** Expand node (:1176-1253): measure, switch the item to `is--open`, animate the content height from collapsed to
    expanded (100 ms later, `is--animating`), then on transitionend clear the inline height, focus the content after a
    key press and set the ARIA attributes. */
export function expandJS(section: HTMLElement, isKeypress: boolean, setAria: (isExpand: boolean) => void): void {
  const { content, header } = parts(section);
  if (!content || !header) return;
  const collapsedHeight = content.getBoundingClientRect().height;
  section.classList.remove('is--closed');
  section.classList.add('is--open');
  header.style.pointerEvents = 'none';
  content.classList.remove('is--collapsed');
  content.classList.add('is--expanded');
  content.removeAttribute('style');
  const expandedHeight = content.getBoundingClientRect().height;
  content.classList.remove('is--expanded');
  content.style.height = `${String(collapsedHeight)}px`;
  const timeout = setTimeout(() => {
    content.classList.add('is--animating');
    content.style.height = `${String(expandedHeight)}px`;
    onTransitionEnd(content, header, content, isKeypress, () => {
      setAria(true);
    });
    content.classList.add('is--expanded');
    clearTimeout(timeout);
  }, 100);
}

/** Collapse node (:989-1069): measure the expanded height, switch the item to `is--closed`, animate the content height
    down to the collapsed one (100 ms later), then on transitionend clear the inline height, focus the title after a
    key press and set the ARIA attributes. */
export function collapseJS(section: HTMLElement, isKeypress: boolean, setAria: (isExpand: boolean) => void): void {
  const { content, header } = parts(section);
  if (!content || !header) return;
  content.removeAttribute('style');
  const expandedHeight = content.getBoundingClientRect().height;
  section.classList.add('is--closed');
  section.classList.remove('is--open');
  content.classList.remove('is--expanded');
  content.classList.add('is--collapsed');
  const collapsedHeight = content.getBoundingClientRect().height;
  content.style.height = `${String(expandedHeight)}px`;
  content.classList.add('is--expanded');
  content.classList.remove('is--collapsed');
  const timeout = setTimeout(() => {
    content.classList.add('is--animating');
    content.classList.remove('is--expanded');
    content.style.height = `${String(collapsedHeight)}px`;
    onTransitionEnd(content, header, header, isKeypress, () => {
      setAria(false);
    });
    content.classList.add('is--collapsed');
    clearTimeout(timeout);
  }, 100);
}

/** CloseAll node (:959-987): collapses every other open item that sits at `:scope > div > .section-expandable` of the
    accordion element (only items placed directly in the accordion's placeholder container match). */
export function closeAllJS(section: HTMLElement, accordion: Element | null): void {
  if (!accordion) return;
  for (const item of accordion.querySelectorAll<AccordionSectionElement>(':scope > div > .section-expandable')) {
    if (item !== section && !item.classList.contains('is--closed')) item.CollapseItem?.();
  }
}
