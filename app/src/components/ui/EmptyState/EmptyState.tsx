/** @origin UBTConnectLibrary.ConnectPatterns.EmptyList */
// @os-block UBTConnectLibrary.ConnectPatterns.EmptyList
import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { CircleButton } from '@/components/ui/CircleButton';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { Icon } from '@/components/ui/Icon';
import {
  UBT_AlignItems,
  UBT_AvatarSize,
  UBT_Color,
  UBT_Display,
  UBT_IconSize,
  UBT_JustifyContent,
  UBT_Shape,
  UBT_Size,
} from '@/lib/ubtConnectLibrary/staticEntities';

export interface EmptyStateProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** UBT_Icons identifier of the icon in the circle (input IconId). */
  iconId?: string;
  /** Title line (placeholder TitlePlaceholder). */
  title?: ReactNode;
  /** Text below the title (placeholder TextPlaceholder). */
  text?: ReactNode;
}

/** The empty state of a list or a search: a bordered, centred box with an icon in a primary circle, a title and a
    text. The base of the empty states (presets: `components/directory/DirectoryEmptyState`). The other empty-state
    blocks of the app (BlankSlate, ConnectBlankSlate, MessageListNoResults, OrbitNoInformation, OrbitNoResults,
    NoBookmarks) have their own markup and stay separate components (`docs/refactor/duplicates.md`, group 3). */
export function EmptyState({ id, iconId = '', title, text }: EmptyStateProps) {
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
              <div className="font-semi-bold font-size-base text-neutral-9 margin-bottom-xs">{title}</div>
            </div>
            <div data-container="">
              <div className="font-regular font-size-s text-neutral-10">{text}</div>
            </div>
          </div>
        </div>
      </CustomContainer>
    </OSBlock>
  );
}
