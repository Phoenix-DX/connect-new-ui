// @os-block UBTConnectLibrary.ConnectPatterns.EmptyList
import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { CircleButton } from '@/shared/UBTConnectLibrary/CircleButton';
import { CustomContainer } from '@/shared/UBTConnectLibrary/CustomContainer';
import { Icon } from '@/shared/UBTConnectLibrary/Icon';
import {
  UBT_AlignItems,
  UBT_AvatarSize,
  UBT_Color,
  UBT_Display,
  UBT_IconSize,
  UBT_JustifyContent,
  UBT_Shape,
  UBT_Size,
} from '@/shared/UBTConnectLibrary/lib/staticEntities';

export interface EmptyListProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** UBT_Icons identifier of the icon in the circle. */
  iconId?: string;
  /** Placeholder TitlePlaceholder. */
  titlePlaceholder?: ReactNode;
  /** Placeholder TextPlaceholder. */
  textPlaceholder?: ReactNode;
}

export function EmptyList({ id, iconId = '', titlePlaceholder, textPlaceholder }: EmptyListProps) {
  return (
    <OSBlock name="ConnectPatterns.EmptyList" id={id}>
      <CustomContainer
        options={{
          PaddingSize: { GeneralSizeId: UBT_Size.Small },
          BorderOptions: {
            Color: UBT_Color.Neutral3,
            Size: { GeneralSizeId: UBT_Size.Small },
            Radius: { GeneralSizeId: UBT_Shape.Large },
          },
          DisplayOptions: {
            Display: UBT_Display.Flex,
            AlignItems: UBT_AlignItems.Center,
            JustifyContent: UBT_JustifyContent.Center,
          },
        }}
      >
        <div data-container="">
          <div className="text-align-center ubt-unavailable-image margin-bottom-base" data-container="">
            <CircleButton
              sizeId={UBT_AvatarSize.Small_40}
              borderColorId={UBT_Color.Primary}
              backgroundColorId={UBT_Color.Primary}
              icon={<Icon inColorId={UBT_Color.Neutral0} inIconId={iconId} inSizeId={UBT_IconSize.Base_24} />}
            />
          </div>
          <div className="text-align-center" data-container="">
            <div data-container="">
              <div className="font-semi-bold font-size-base text-neutral-9 margin-bottom-xs">{titlePlaceholder}</div>
            </div>
            <div data-container="">
              <div className="font-regular font-size-s text-neutral-10">{textPlaceholder}</div>
            </div>
          </div>
        </div>
      </CustomContainer>
    </OSBlock>
  );
}
