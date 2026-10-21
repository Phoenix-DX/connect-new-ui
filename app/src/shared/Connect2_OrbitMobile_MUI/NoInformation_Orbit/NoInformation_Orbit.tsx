// @os-block Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.NoInformation_Orbit
import { OSBlock } from '../../../components/OSBlock';

export interface NoInformation_OrbitProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** Message: the text shown (default ""). */
  message?: string;
  /** IsUrgent: red text with the circle-cross icon (default false). */
  isUrgent?: boolean;
}

/** "No information" line of the Orbit screens (NoInformation_Orbit.mvc.js view :140-191): a bold padded container,
    class `color-orbit-primary-7`, or `flex-center-vertical color-orbit-red-6` with the `orbit-icon-circle-cross` icon
    when IsUrgent (the icon's Visible = IsUrgent), then the Message. */
export function NoInformation_Orbit({ id, message = '', isUrgent = false }: NoInformation_OrbitProps) {
  return (
    <OSBlock name="Orbit_Generic_Blocks.NoInformation_Orbit" id={id}>
      <div
        className={`bold padding-y-m padding-x-m${!isUrgent ? ' color-orbit-primary-7' : ' flex-center-vertical color-orbit-red-6'}`}
        data-container=""
      >
        {isUrgent && <i className="icon orbit-icon-circle-cross margin-right-s fa fa-flag fa-1x" data-icon="" />}
        <span data-expression="">{message}</span>
      </div>
    </OSBlock>
  );
}
