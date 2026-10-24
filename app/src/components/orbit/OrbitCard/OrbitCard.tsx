/** @origin Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Template */
// @os-block Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Template
import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { styleFromCssText } from '@/shared/lib/cssText';
import { getCSSVarFromMainColor } from '@/shared/Connect2_OrbitMobile_MUI/lib/actions';
import { OrbitColorShade, OrbitMilestoneType } from '@/shared/Connect2_OrbitMobile_MUI/lib/staticEntities';

export interface OrbitCardProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** In_MainColorVar: the card's main colour (an OrbitCardColor, e.g. "purple"); default "". */
  inMainColorVar?: string;
  /** In_MilestoneTypeId: an OrbitMilestoneType Id; Break removes the title margin. Default "". */
  inMilestoneTypeId?: string;
  /** Placeholder Placeholder_Icon. */
  placeholderIcon?: ReactNode;
  /** Placeholder Placeholder_Title. */
  placeholderTitle?: ReactNode;
  /** Placeholder Placeholder_Content. */
  placeholderContent?: ReactNode;
  /** Event OnClick. */
  onOnClick?: () => void;
}

/** Orbit card frame (Card_Template.mvc.js, EventDetail pretty source, view :160-318): `orbit-card-cont` (border colour
    shade 2, background shade 1 of In_MainColorVar, :173-178) with the icon placeholder in `orbit-card-left-cont`, and
    `orbit-card-right-cont` (text colour shade 10, :228-231) holding the title placeholder in `orbit-card-title-cont`
    ("margin-bottom: 0px;" for the Break milestone type, :247-248) and the content placeholder in `orbit-card-content`.
    The container and each placeholder have their own click handler that triggers OnClick (controller :341-343), with
    no stopPropagation (OutSystemsReactView.js extendedEvents → plain onClick): a click inside a placeholder triggers
    OnClick twice, as on the original (known-original-bugs.md). */
export function OrbitCard({
  id,
  inMainColorVar = '',
  inMilestoneTypeId = '',
  placeholderIcon,
  placeholderTitle,
  placeholderContent,
  onOnClick,
}: OrbitCardProps) {
  const onClick = () => onOnClick?.();
  const containerStyle = styleFromCssText(
    `border: 1px solid ${getCSSVarFromMainColor(inMainColorVar, OrbitColorShade.Color2)}; background-color: ${getCSSVarFromMainColor(inMainColorVar, OrbitColorShade.Color1)};`,
  );
  const rightStyle = styleFromCssText(`color: ${getCSSVarFromMainColor(inMainColorVar, OrbitColorShade.Color10)};`);
  const titleStyle = styleFromCssText(inMilestoneTypeId === OrbitMilestoneType.Break ? 'margin-bottom: 0px;' : '');
  return (
    <OSBlock name="Orbit_Blocks.Card_Template" id={id}>
      <div
        className="orbit-card-cont"
        data-container=""
        style={{ cursor: 'pointer', ...containerStyle }}
        onClick={onClick}
      >
        <div className="orbit-card-left-cont" data-container="">
          <div style={{ cursor: 'pointer' }} onClick={onClick}>
            {placeholderIcon}
          </div>
        </div>
        <div className="orbit-card-right-cont" data-container="" style={rightStyle}>
          <div className="orbit-card-title-cont" data-container="" style={titleStyle}>
            <div style={{ cursor: 'pointer' }} onClick={onClick}>
              {placeholderTitle}
            </div>
          </div>
          <div className="orbit-card-content" data-container="">
            <div style={{ cursor: 'pointer' }} onClick={onClick}>
              {placeholderContent}
            </div>
          </div>
        </div>
      </div>
    </OSBlock>
  );
}
