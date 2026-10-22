// @os-block Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.DaySelector
import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';

export interface DaySelectorProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** IsSelected (default false). */
  isSelected?: boolean;
  /** Placeholder Placeholder_Digit (the day shown). */
  children?: ReactNode;
}

/** One day of the Orbit date selector (DaySelector.mvc.js view :126-164): container `event-date-selector
    event-date-selector-day` + ` event-date-selector-selected` when IsSelected, holding the Placeholder_Digit
    placeholder. No controller logic. */
export function DaySelector({ id, isSelected = false, children }: DaySelectorProps) {
  return (
    <OSBlock name="Orbit_Generic_Blocks.DaySelector" id={id}>
      <div
        className={`event-date-selector event-date-selector-day${isSelected ? ' event-date-selector-selected' : ''}`}
        data-container=""
      >
        <div>{children}</div>
      </div>
    </OSBlock>
  );
}
