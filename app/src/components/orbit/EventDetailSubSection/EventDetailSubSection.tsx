/** @origin Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_SubSection */
// @os-block Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_SubSection
import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';

export interface EventDetailSubSectionProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** In_Title (default ""). */
  inTitle?: string;
  /** In_HasBottomBorder: adds `border-bottom-neutral-4` to the content (default false). */
  inHasBottomBorder?: boolean;
  /** Placeholder SubSection_Placeholder. */
  children?: ReactNode;
}

/** Sub-section of the LDM event detail (EventDetail_SubSection.mvc.js view :140-200): `event-detail-subsection` with
    the title in `event-detail-subsection-title` and the SubSection_Placeholder, whose class is
    `event-detail-subsection-placeholder` + ` border-bottom-neutral-4` when In_HasBottomBorder. No controller logic. */
export function EventDetailSubSection({
  id,
  inTitle = '',
  inHasBottomBorder = false,
  children,
}: EventDetailSubSectionProps) {
  return (
    <OSBlock name="LDM_Blocks.EventDetail_SubSection" id={id}>
      <div className="event-detail-subsection" data-container="">
        <div className="event-detail-subsection-title" data-container="">
          <span data-expression="">{inTitle}</span>
        </div>
        <div className={`event-detail-subsection-placeholder${inHasBottomBorder ? ' border-bottom-neutral-4' : ''}`}>
          {children}
        </div>
      </div>
    </OSBlock>
  );
}
