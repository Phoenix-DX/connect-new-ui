// @os-block UBTConnectLibrary.ConnectPatterns.CircleButton_WithLabel
import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { CircleButton } from '../CircleButton';
import { CustomContainer } from '../CustomContainer';
import { formatClasses, getClasses_AvatarSize } from '../lib/actions';
import { UBT_Size } from '../lib/staticEntities';
import type { AvatarIconOptions } from './types';

export interface CircleButton_WithLabelProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** UBT_AvatarSize identifier. */
  sizeId?: string;
  /** UBT_Color identifier. */
  backgroundColorId?: string;
  /** UBT_Color identifier. */
  borderColorId?: string;
  extendedClasses?: string;
  isProcessing?: boolean;
  /** UBT_Size identifier; default UBT_Size.Small. */
  paddingSize?: string;
  /** In_BadgeIcon: declared but not used by the compiled view. */
  inBadgeIcon?: AvatarIconOptions;
  /** Event OnClick. */
  onOnClick?: () => void;
  /** Placeholder Icon. */
  icon?: ReactNode;
  /** Placeholder Badge. */
  badge?: ReactNode;
  /** Placeholder Text. */
  text?: ReactNode;
}

const MAIN_CONTAINER_CLASS = 'ubt-icon-button';

export function CircleButton_WithLabel({
  id,
  sizeId = '',
  backgroundColorId = '',
  borderColorId = '',
  extendedClasses = '',
  isProcessing = false,
  paddingSize = UBT_Size.Small,
  onOnClick,
  icon,
  badge,
  text,
}: CircleButton_WithLabelProps) {
  const className = formatClasses(
    formatClasses(formatClasses(MAIN_CONTAINER_CLASS, extendedClasses), 'inline-block'),
    getClasses_AvatarSize(sizeId),
  );
  return (
    <OSBlock name="ConnectPatterns.CircleButton_WithLabel" id={id}>
      <div className={`${className} OSInline`} data-container="" style={{ cursor: 'pointer' }} onClick={onOnClick}>
        <CircleButton
          isProcessing={isProcessing}
          borderColorId={borderColorId}
          sizeId={sizeId}
          backgroundColorId={backgroundColorId}
          paddingSize={paddingSize}
          icon={<div>{icon}</div>}
          badge={<div className={`${MAIN_CONTAINER_CLASS}__badge`}>{badge}</div>}
        />
        <CustomContainer options={{ MarginSize: { TopSizeId: UBT_Size.Small } }}>
          <div className={`${MAIN_CONTAINER_CLASS}__text-container`}>{text}</div>
        </CustomContainer>
      </div>
    </OSBlock>
  );
}
