// @os-block UBTConnectLibrary.ConnectPatterns.CircleButton_IconPrimary
import { OSBlock } from '@/components/ui/os/OSBlock';
import { CircleButton_WithLabel } from '@/shared/UBTConnectLibrary/CircleButton_WithLabel';
import { CustomText } from '@/shared/UBTConnectLibrary/CustomText';
import { Icon } from '@/shared/UBTConnectLibrary/Icon';
import { UBT_AvatarSize, UBT_Color, UBT_FontSize, UBT_FontWeight } from '@/shared/UBTConnectLibrary/lib/staticEntities';

export interface CircleButton_IconPrimaryProps {
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

export function CircleButton_IconPrimary({
  id,
  extendedClasses = '',
  iconId = '',
  text = '',
  isEnabled = true,
  iconBackgroundColorId = UBT_Color.CyanLightest,
  iconColorId = UBT_Color.CyanDarker,
  onOnClick,
}: CircleButton_IconPrimaryProps) {
  return (
    <OSBlock name="ConnectPatterns.CircleButton_IconPrimary" id={id}>
      <CircleButton_WithLabel
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
