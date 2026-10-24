// @os-block Connect2_OrbitMobile_MUI.LDM_Blocks.EventsDetail_Content
import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';

export interface EventsDetail_ContentProps {
  id: string;
  scope: string;
  inMinBannerHeight: number;
  banner: ReactNode;
  guestView: ReactNode;
  content: ReactNode;
}

/** Frame of the LDM event detail (analysis/sources/pretty/Connect2_OrbitMobile_MUI.LDM_Blocks.EventsDetail_Content.mvc.js
    view :170-215): the top part with Banner_Placeholder (`height` ActiveBannerHeight px) and GuestView_Placeholder,
    then Content_Placeholder. OnInitialize / OnParametersChanged (controller :20-100): ActiveBannerHeight =
    In_MinBannerHeight, so the height follows the input. */
export function EventsDetail_Content({
  id,
  scope,
  inMinBannerHeight,
  banner,
  guestView,
  content,
}: EventsDetail_ContentProps) {
  return (
    <OSBlock name="LDM_Blocks.EventsDetail_Content" id={id}>
      <div className="event-details-content" data-container="">
        <div className="event-details-content-top" data-container="">
          <div
            className="event-detail-content-banner"
            id={`${scope}-Banner_Placeholder`}
            style={{ height: `${String(inMinBannerHeight)}px` }}
          >
            {banner}
          </div>
          <div className="event-detail-content-guestview" id={`${scope}-GuestView_Placeholder`}>
            {guestView}
          </div>
        </div>
        <div className="event-detail-content-content" id={`${scope}-Content_Placeholder`}>
          {content}
        </div>
      </div>
    </OSBlock>
  );
}
