// @os-block Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_Section
import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';

export interface EventDetail_SectionProps {
  id: string;
  scope: string;
  inIsHost: boolean;
  inTitle: string;
  inHasBottomBorder?: boolean;
  /** Placeholder Section_Placeholder. */
  children?: ReactNode;
}

/** Section of the LDM event detail (analysis/sources/pretty/Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_Section.mvc.js
    view :140-200): the title in `event-detail-section-title` + `-host` or `-guest`, then Section_Placeholder
    (`event-detail-section-placeholder` + ` border-bottom-neutral-4` when In_HasBottomBorder). No controller logic. */
export function EventDetail_Section({
  id,
  scope,
  inIsHost,
  inTitle,
  inHasBottomBorder = false,
  children,
}: EventDetail_SectionProps) {
  return (
    <OSBlock name="LDM_Blocks.EventDetail_Section" id={id}>
      <div className="event-detail-section" data-container="">
        <div
          className={`event-detail-section-title ${inIsHost ? 'event-detail-section-title-host' : 'event-detail-section-title-guest'}`}
          data-container=""
        >
          <span data-expression="">{inTitle}</span>
        </div>
        <div
          className={`event-detail-section-placeholder${inHasBottomBorder ? ' border-bottom-neutral-4' : ''}`}
          id={`${scope}-Section_Placeholder`}
        >
          {children}
        </div>
      </div>
    </OSBlock>
  );
}
