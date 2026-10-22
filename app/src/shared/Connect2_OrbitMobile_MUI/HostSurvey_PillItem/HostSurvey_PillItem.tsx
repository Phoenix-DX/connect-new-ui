// @os-block Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_PillItem
import { OSBlock } from '@/components/ui/os/OSBlock';
import { styleFromCssText } from '@/shared/lib/cssText';

export interface HostSurvey_PillItemProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** In_IsDisabled: the disabled pill (ignores In_ExtendedClass / In_ExtendedStyle; default false). */
  inIsDisabled?: boolean;
  /** In_IconClass: the Orbit icon classes (default ""). */
  inIconClass?: string;
  /** In_PillText (default ""). */
  inPillText?: string;
  /** In_IsSmallIcon: `font-size-xs` instead of `font-size-base` on the icon (default false). */
  inIsSmallIcon?: boolean;
  /** In_ExtendedClass (default ""). */
  inExtendedClass?: string;
  /** In_ExtendedStyle: inline style text (default ""). */
  inExtendedStyle?: string;
}

/** Pill of the host survey (HostSurvey_PillItem.mvc.js view :196-263): container `orbit-host-survey-pill` +
    ` orbit-host-survey-pill-disabled` when In_IsDisabled, else + " " + In_ExtendedClass when not ""; its inline style
    is "" when disabled, else In_ExtendedStyle. Icon `icon <In_IconClass>` + ` font-size-xs` (In_IsSmallIcon) or
    ` font-size-base` (the class replaces the Icon widget's fa classes), then the text. No controller logic. */
export function HostSurvey_PillItem({
  id,
  inIsDisabled = false,
  inIconClass = '',
  inPillText = '',
  inIsSmallIcon = false,
  inExtendedClass = '',
  inExtendedStyle = '',
}: HostSurvey_PillItemProps) {
  const className = `orbit-host-survey-pill${
    inIsDisabled ? ' orbit-host-survey-pill-disabled' : inExtendedClass !== '' ? ` ${inExtendedClass}` : ''
  }`;
  return (
    <OSBlock name="Orbit_Blocks.HostSurvey_PillItem" id={id}>
      <div className={className} data-container="" style={styleFromCssText(inIsDisabled ? '' : inExtendedStyle)}>
        <i className={`icon ${inIconClass}${inIsSmallIcon ? ' font-size-xs' : ' font-size-base'}`} data-icon="" />
        <span className="margin-left-s font-size-xs line-height-xs white-space-nowrap" data-expression="">
          {inPillText}
        </span>
      </div>
    </OSBlock>
  );
}
