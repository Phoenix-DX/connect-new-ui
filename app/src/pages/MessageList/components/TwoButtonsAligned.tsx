import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';

export interface TwoButtonsAlignedProps {
  id: string;
  prefix: string;
  /** Placeholder Left. */
  left: ReactNode;
  /** Placeholder Right. */
  right: ReactNode;
}

/** The `two-buttons-aligned` container (extended style "bottom: 0;") with the placeholders Left and Right.
    @origin Connect2_LegacyShared.Reusable.TwoButtonsAligned */
export function TwoButtonsAligned({ id, prefix, left, right }: TwoButtonsAlignedProps) {
  return (
    <OSBlock name="Reusable.TwoButtonsAligned" id={id}>
      <div className="two-buttons-aligned" data-container="" style={{ bottom: 0 }}>
        <div id={`${prefix}Left`}>{left}</div>
        <div id={`${prefix}Right`}>{right}</div>
      </div>
    </OSBlock>
  );
}
