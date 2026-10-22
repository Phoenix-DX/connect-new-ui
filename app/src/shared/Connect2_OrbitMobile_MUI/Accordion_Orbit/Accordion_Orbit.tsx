// @os-block Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Accordion_Orbit
import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { DEPRECATED_Accordion } from '../../osui/DEPRECATED_Accordion';

export interface Accordion_OrbitProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** In_ExtendedClass (default ""). */
  inExtendedClass?: string;
  /** In_ColoredContent: adds `orbit-accordion-colored-content` (default false). */
  inColoredContent?: boolean;
  /** In_MultipleItems: several items may be open at once (default false). */
  inMultipleItems?: boolean;
  /** Placeholder Content (DEPRECATED_AccordionItem blocks). */
  children?: ReactNode;
}

/** Orbit accordion (migration/screens/EventDetail/analysis/sources/pretty/
    Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Accordion_Orbit.mvc.js, view :159-214): OutSystems UI
    DEPRECATED_Accordion with ExtendedClass `orbit-accordion` + ` orbit-accordion-colored-content` (In_ColoredContent)
    + " " + In_ExtendedClass when not empty, MultipleItems = In_MultipleItems, and the Content placeholder in its own
    container. No controller logic. */
export function Accordion_Orbit({
  id,
  inExtendedClass = '',
  inColoredContent = false,
  inMultipleItems = false,
  children,
}: Accordion_OrbitProps) {
  const prefix = id?.replace('$', '');
  return (
    <OSBlock name="Orbit_Generic_Blocks.Accordion_Orbit" id={id}>
      <DEPRECATED_Accordion
        id={prefix === undefined ? undefined : `${prefix}-$b1`}
        extendedClass={`orbit-accordion${inColoredContent ? ' orbit-accordion-colored-content' : ''}${inExtendedClass !== '' ? ` ${inExtendedClass}` : ''}`}
        multipleItems={inMultipleItems}
      >
        <div>{children}</div>
      </DEPRECATED_Accordion>
    </OSBlock>
  );
}
