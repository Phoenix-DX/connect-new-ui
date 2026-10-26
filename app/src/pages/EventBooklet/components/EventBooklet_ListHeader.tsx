/** @origin Connect2_OrbitMobile_MUI.Orbit_Blocks.EventBooklet_ListHeader */
import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';

/* EventBooklet_ListHeader (LH = analysis/sources/Connect2_OrbitMobile_MUI.Orbit_Blocks.EventBooklet_ListHeader.mvc.js,
   view :107-186). No inputs, no controller logic. No capture: markup from the compiled view. */

export interface EventBooklet_ListHeaderProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** Placeholder Placeholder_Title. */
  placeholderTitle?: ReactNode;
}

/** The header row of a booklet list (LH :107-184): `orbit-booklet-list-header-cont` with the title placeholder, "Day(s)"
    and "Host". */
export function EventBooklet_ListHeader({ id, placeholderTitle }: EventBooklet_ListHeaderProps) {
  return (
    <OSBlock name="Orbit_Blocks.EventBooklet_ListHeader" id={id}>
      <div className="orbit-booklet-list-header-cont" data-container="">
        <div className="orbit-booklet-list-header-title" data-container="">
          <div>{placeholderTitle}</div>
        </div>
        <div className="orbit-booklet-list-header-days" data-container="">
          <span data-expression="">Day(s)</span>
        </div>
        <div className="orbit-booklet-list-header-host" data-container="">
          <span data-expression="">Host</span>
        </div>
      </div>
    </OSBlock>
  );
}
