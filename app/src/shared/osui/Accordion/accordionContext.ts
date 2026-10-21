import { createContext } from 'react';

/** What an AccordionItem tells its Accordion (OSUI AbstractChild ↔ AbstractParent, Accordion :4066-4170). */
export interface AccordionChild {
  uniqueId: string;
  isOpen: () => boolean;
  isDisabled: () => boolean;
  open: () => void;
  close: () => void;
}

export interface AccordionParent {
  /** ChildNotifyActionType.Add (addAccordionItem); returns the Removed notification. */
  add: (child: AccordionChild) => () => void;
  /** ChildNotifyActionType.Click (triggerAccordionItemClose). */
  click: (childId: string) => void;
  /** CollapseAllItems. */
  collapseAll: () => void;
  /** changeProperty MultipleItems; returns whether it changed. */
  setMultipleItems: (value: boolean) => boolean;
}

/** Accordion :4128-4166: unless MultipleItems, opening (or adding an open) item closes the other open items. */
export function createAccordionParent(initialMultipleItems: boolean): AccordionParent {
  const items = new Map<string, AccordionChild>();
  let multipleItems = initialMultipleItems;
  const click = (childId: string) => {
    if (multipleItems) return;
    for (const item of items.values()) if (item.uniqueId !== childId && item.isOpen()) item.close();
  };
  return {
    add(child) {
      items.set(child.uniqueId, child);
      if (child.isOpen()) click(child.uniqueId);
      return () => {
        items.delete(child.uniqueId);
      };
    },
    click,
    setMultipleItems(value) {
      const changed = value !== multipleItems;
      multipleItems = value;
      return changed;
    },
    collapseAll() {
      for (const item of items.values()) if (item.isOpen() && !item.isDisabled()) item.close();
    },
  };
}

/** The enclosing Accordion (the original finds it with `closest('.osui-accordion')`). */
export const AccordionContext = createContext<AccordionParent | null>(null);
