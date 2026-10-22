// @os-block OutSystemsUI_2_23.Content.DEPRECATED_Accordion
import { useEffect, useLayoutEffect, useRef, type ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import type { AccordionSectionElement } from '../DEPRECATED_AccordionItem/sectionDom';

export interface DEPRECATED_AccordionProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** MultipleItems: several items may be open at once (default false). */
  multipleItems?: boolean;
  /** ExtendedClass (default ""). */
  extendedClass?: string;
  /** Placeholder Content (the DEPRECATED_AccordionItem blocks). */
  children?: ReactNode;
}

/** CloseAllItems node (OnReady, DEPRECATED_Accordion.mvc.js:325-339): without MultipleItems, every open item at
    `:scope > div > .section-expandable.is--open` but the first is collapsed. */
function closeAllItemsJS(accordion: HTMLElement, multipleItems: boolean): void {
  const open = accordion.querySelectorAll<AccordionSectionElement>(':scope > div > .section-expandable.is--open');
  if (!multipleItems) {
    open.forEach((item, i) => {
      if (i !== 0) item.CollapseItem?.();
    });
  }
}

/** DEPRECATED_UpdateAccordion (OutSystemsUI_2_23.controller.js:7645-7657): hands MultipleItems to every
    `.section-expandable` inside the accordion (its updateAccordion, set by the item's SetGlobalActions). */
function updateAccordionJS(accordion: HTMLElement, multipleItems: boolean): void {
  for (const item of accordion.querySelectorAll<AccordionSectionElement>('.section-expandable')) {
    item.updateAccordion?.(multipleItems);
  }
}

/** OutSystems UI 2.23 DEPRECATED_Accordion (migration/screens/EventDetail/analysis/sources/pretty/
    OutSystemsUI_2_23.Content.DEPRECATED_Accordion.mvc.js, view :140-173): the Content placeholder itself with class
    `osui-deprecated accordion` (+ " " + ExtendedClass), `data-multiple-items` True / False and role `tablist`.
    OnReady (:198-223, after the items' own OnReady) runs CloseAllItems; OnParametersChanged (:225-252) runs
    DEPRECATED_UpdateAccordion, then OnReady again. */
export function DEPRECATED_Accordion({
  id,
  multipleItems = false,
  extendedClass = '',
  children,
}: DEPRECATED_AccordionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const multipleOnReady = useRef(multipleItems);
  useLayoutEffect(() => {
    if (ref.current) closeAllItemsJS(ref.current, multipleOnReady.current);
  }, []);
  const first = useRef(true);
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    if (!ref.current) return;
    updateAccordionJS(ref.current, multipleItems);
    closeAllItemsJS(ref.current, multipleItems);
  }, [multipleItems, extendedClass]);
  return (
    <OSBlock name="Content.DEPRECATED_Accordion" id={id}>
      <div
        ref={ref}
        className={`osui-deprecated accordion${extendedClass === '' ? '' : ` ${extendedClass}`}`}
        data-multiple-items={multipleItems ? 'True' : 'False'}
        role="tablist"
      >
        {children}
      </div>
    </OSBlock>
  );
}
