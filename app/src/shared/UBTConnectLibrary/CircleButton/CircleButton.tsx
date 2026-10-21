// @os-block UBTConnectLibrary.ConnectPatterns.CircleButton
import type { ReactNode } from 'react';
import { OSBlock } from '../../../components/OSBlock';
import { CustomContainer } from '../CustomContainer';
import { formatClasses, getClasses_AvatarSize } from '../lib/actions';
import { UBT_Color, UBT_Shape, UBT_Size } from '../lib/staticEntities';

export interface CircleButtonProps {
  /** OutSystems instance id of the block. */
  id?: string;
  extendedClasses?: string;
  /** UBT_Color identifier of the circle. */
  backgroundColorId?: string;
  /** UBT_Color identifier; when set the circle gets a Small border. */
  borderColorId?: string;
  /** UBT_AvatarSize identifier. */
  sizeId?: string;
  isProcessing?: boolean;
  /** UBT_Size identifier; default UBT_Size.Small. */
  paddingSize?: string;
  /** Event OnClick. */
  onOnClick?: () => void;
  /** Placeholder Icon. */
  icon?: ReactNode;
  /** Placeholder Badge. */
  badge?: ReactNode;
}

const MAIN_CONTAINER_CLASS = 'ubt-icon-button';

export function CircleButton({
  id,
  extendedClasses = '',
  backgroundColorId = '',
  borderColorId = '',
  sizeId = '',
  isProcessing = false,
  paddingSize = UBT_Size.Small,
  onOnClick,
  icon,
  badge,
}: CircleButtonProps) {
  let className = formatClasses(formatClasses(MAIN_CONTAINER_CLASS, extendedClasses), 'inline-block');
  className = formatClasses(className, getClasses_AvatarSize(sizeId));
  className = formatClasses(className, isProcessing ? `${MAIN_CONTAINER_CLASS}--loading` : '');
  return (
    <OSBlock name="ConnectPatterns.CircleButton" id={id}>
      <div className={`${className} OSInline`} data-container="" style={{ cursor: 'pointer' }} onClick={onOnClick}>
        <CustomContainer
          extendedClasses={`${MAIN_CONTAINER_CLASS}__icon-container `}
          options={{
            Background: { BackgroundColor: backgroundColorId },
            PaddingSize: { GeneralSizeId: paddingSize },
            BorderOptions: {
              Color: borderColorId,
              Size: { GeneralSizeId: borderColorId !== '' ? UBT_Size.Small : '' },
              Radius: { GeneralSizeId: UBT_Shape.Circle },
            },
            TextOptions: { Color: UBT_Color.CyanDarker },
            IsSkeletonElement: true,
          }}
        >
          <div>{icon}</div>
          <div>{badge}</div>
        </CustomContainer>
      </div>
    </OSBlock>
  );
}
