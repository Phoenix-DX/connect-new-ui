// @os-block OutSystemsUI_2_23.Content.Accordion
import { useEffect, useId, useLayoutEffect, useRef, useState, type ReactNode } from 'react';
import { OSBlock } from '../../../components/OSBlock';
import { AccordionContext, createAccordionParent } from './accordionContext';

export interface AccordionProps {
  /** OutSystems instance id of the block (the AccordionId of Initialized). */
  id?: string;
  /** MultipleItems: several items may be open at once (default false). */
  multipleItems?: boolean;
  extendedClass?: string;
  /** Event Initialized(AccordionId). */
  onInitialized?: (accordionId: string) => void;
  /** Placeholder Content (AccordionItem blocks). */
  children?: ReactNode;
}

/** OutSystems UI Accordion (p:migration/screens/HostSurvey/analysis/sources/pretty/OutSystemsUI_2_23.Content.Accordion.
    mvc.js view :160-175: the Content placeholder `osui-accordion`, named after the UniqueId; provider hand-written from
    runtime-sources/OutSystemsUI_2_23.OutSystemsUI.js Accordion :4066-4245). Build: ExtendedClass, role "list" on the
    first `.list` inside (else on itself, setA11YProperties :4072-4075), Initialized. Items register through the
    context; unless MultipleItems, opening one closes the others; MultipleItems changed to false collapses all
    (changeProperty :4114-4123). */
export function Accordion({ id, multipleItems = false, extendedClass = '', onInitialized, children }: AccordionProps) {
  const uniqueId = useId();
  const ref = useRef<HTMLDivElement>(null);
  const [parent] = useState(() => createAccordionParent(multipleItems));
  const initialized = useRef(onInitialized);
  const widgetId = id ?? uniqueId;

  useLayoutEffect(() => {
    const self = ref.current;
    if (!self) return;
    (self.querySelector('.list') ?? self).setAttribute('role', 'list');
    const timer = window.setTimeout(() => initialized.current?.(widgetId));
    return () => {
      window.clearTimeout(timer);
    };
  }, [widgetId]);

  useEffect(() => {
    if (parent.setMultipleItems(multipleItems) && !multipleItems) parent.collapseAll();
  }, [multipleItems, parent]);

  const nameAttribute: Record<string, string> = { name: uniqueId };
  return (
    <OSBlock name="Content.Accordion" id={id}>
      <div
        ref={ref}
        className={extendedClass === '' ? 'osui-accordion' : `osui-accordion ${extendedClass}`}
        {...nameAttribute}
      >
        <AccordionContext.Provider value={parent}>{children}</AccordionContext.Provider>
      </div>
    </OSBlock>
  );
}
