/** @origin UBTConnectLibrary.ConnectPatterns.CircleButton_IconPrimary */
// @os-block UBTConnectLibrary.ConnectPatterns.CircleButton_IconPrimary
import { OSBlock } from '@/components/ui/os/OSBlock';
import { CircleButtonWithLabel } from '@/components/ui/CircleButtonWithLabel';
import { CustomText } from '@/components/ui/CustomText';
import { Icon } from '@/components/ui/Icon';
import { UBT_AvatarSize, UBT_Color, UBT_FontSize, UBT_FontWeight } from '@/lib/ubtConnectLibrary/staticEntities';

export interface CircleButtonIconPrimaryProps {
  /** OutSystems instance id of the block. */
  id?: string;
  extendedClasses?: string;
  /** UBT_Icons identifier. */
  iconId?: string;
  /** Label under the circle; none when empty. */
  text?: string;
  /** isEnabled: false greys the circle (Neutral3) and the icon (Neutral7). */
  isEnabled?: boolean;
  /** UBT_Color identifier; default UBT_Color.CyanLightest. */
  iconBackgroundColorId?: string;
  /** UBT_Color identifier; default UBT_Color.CyanDarker. */
  iconColorId?: string;
  /** Event OnClick. */
  onOnClick?: () => void;
}

export function CircleButtonIconPrimary({
  id,
  extendedClasses = '',
  iconId = '',
  text = '',
  isEnabled = true,
  iconBackgroundColorId = UBT_Color.CyanLightest,
  iconColorId = UBT_Color.CyanDarker,
  onOnClick,
}: CircleButtonIconPrimaryProps) {
  return (
    <OSBlock name="ConnectPatterns.CircleButton_IconPrimary" id={id}>
      <CircleButtonWithLabel
        backgroundColorId={isEnabled ? iconBackgroundColorId : UBT_Color.Neutral3}
        sizeId={UBT_AvatarSize.Small_40}
        extendedClasses={extendedClasses}
        onOnClick={onOnClick}
        icon={<Icon inIconId={iconId} inColorId={isEnabled ? iconColorId : UBT_Color.Neutral7} />}
        text={
          text !== '' && (
            <CustomText
              inText={text}
              inTextOptions={{
                Color: UBT_Color.Neutral10,
                FontSize: UBT_FontSize.DoubleExtraSmall,
                FontWeight: UBT_FontWeight.SemiBold,
              }}
            />
          )
        }
      />
    </OSBlock>
  );
}
