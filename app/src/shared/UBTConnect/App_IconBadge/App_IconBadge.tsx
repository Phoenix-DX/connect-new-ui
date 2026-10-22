// @os-block UBTConnect.App_Common_Blocks.App_IconBadge
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSLink } from '@/shared/lib/OSLink';
import { Icon } from '@/shared/UBTConnectLibrary/Icon';
import { IconBadge } from '@/shared/UBTConnectLibrary/IconBadge';
import { SkeletonSection } from '@/shared/UBTConnectLibrary/SkeletonSection';
import { UBT_Color, UBT_IconsSize } from '@/shared/UBTConnect/lib/staticEntities';

export interface App_IconBadgeProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** Long Integer, as text; -1 shows the skeleton. */
  badgeNumber?: string;
  maxNotifications?: number;
  /** UBT_Icons identifier (icon class). */
  iconId?: string;
  /** UBT_Color identifier. */
  iconColor?: string;
  isLoading?: boolean;
  /** Event OnClick (IconClick). */
  onOnClick?: () => void;
}

export function App_IconBadge({
  id,
  badgeNumber = '0',
  maxNotifications = 9,
  iconId = '',
  iconColor = '',
  isLoading = false,
  onOnClick,
}: App_IconBadgeProps) {
  const iconClick = () => onOnClick?.();
  return (
    <OSBlock name="App_Common_Blocks.App_IconBadge" id={id}>
      <SkeletonSection inIsLoading={isLoading || badgeNumber === '-1'}>
        {badgeNumber !== '0' ? (
          <OSLink onClick={iconClick}>
            <IconBadge
              number={badgeNumber}
              maxNumber={maxNotifications}
              color={UBT_Color.Red}
              icon={
                <Icon
                  inSizeId={UBT_IconsSize.Base_24}
                  inColorId={iconColor}
                  inIconId={iconId}
                  inExtendedClasses="ignore-loading"
                />
              }
            />
          </OSLink>
        ) : (
          <Icon
            inIconId={iconId}
            inColorId={iconColor}
            inExtendedClasses="ignore-loading"
            inSizeId={UBT_IconsSize.Base_24}
            onClick={iconClick}
          />
        )}
      </SkeletonSection>
    </OSBlock>
  );
}
