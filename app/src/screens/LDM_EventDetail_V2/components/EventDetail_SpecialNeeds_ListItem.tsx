// @os-block Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_SpecialNeeds_ListItem
import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { styleFromCssText } from '../../../shared/lib/cssText';

export interface EventDetail_SpecialNeeds_ListItemProps {
  id: string;
  scope: string;
  maxPhotoPx: number;
  inGuestURL: string;
  inHasBottomBorder: boolean;
  /** Placeholder Title_Placeholder. */
  title: ReactNode;
  /** Placeholder Info_Placeholder. */
  info: ReactNode;
}

/** One special need of a guest (capture/survey-UBTConnect.json sources
    "Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_SpecialNeeds_ListItem.mvc.js", view): the square photo of
    MaxPhotoPx (or the blank `fa-users` box), then Title_Placeholder and Info_Placeholder in
    `event-detail-list-sp-item-info` (+ ` border-bottom-neutral-4` when In_HasBottomBorder). No controller logic. */
export function EventDetail_SpecialNeeds_ListItem({
  id,
  scope,
  maxPhotoPx,
  inGuestURL,
  inHasBottomBorder,
  title,
  info,
}: EventDetail_SpecialNeeds_ListItemProps) {
  const px = `${String(maxPhotoPx)}px`;
  return (
    <OSBlock name="LDM_Blocks.EventDetail_SpecialNeeds_ListItem" id={id}>
      <div className="event-detail-sp-list-item-main" data-container="">
        {inGuestURL !== '' ? (
          <div
            className="event-detail-photo"
            data-container=""
            style={styleFromCssText(
              `width: ${px}; min-width: ${px}; height: ${px}; min-height: ${px}; background-image: url('${inGuestURL}');`,
            )}
          />
        ) : (
          <div className="event-detail-photo-blank" data-container="" style={{ minWidth: px, minHeight: px }}>
            <i className="icon fa fa-users fa-1x" data-icon="" />
          </div>
        )}
        <div
          className={`event-detail-list-sp-item-info${inHasBottomBorder ? ' border-bottom-neutral-4' : ''} OSInline`}
          data-container=""
        >
          <div id={`${scope}-Title_Placeholder`}>{title}</div>
          <div id={`${scope}-Info_Placeholder`}>{info}</div>
        </div>
      </div>
    </OSBlock>
  );
}
