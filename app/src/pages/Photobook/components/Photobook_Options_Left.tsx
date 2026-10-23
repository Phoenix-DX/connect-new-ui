import type { PhotobookHousehold } from '@/api/household';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { SanitizedHtml } from '@/shared/ReactiveHtmlSanitizer/SanitizedHtml';
import { BottomSheet } from '@/shared/UBTConnectLibrary/BottomSheet';
import { CustomContainer } from '@/shared/UBTConnectLibrary/CustomContainer';
import { Icon } from '@/shared/UBTConnectLibrary/Icon';
import { UBT_Color, UBT_Display, UBT_Shape, UBT_Size } from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { SkeletonSection } from '@/shared/UBTConnectLibrary/SkeletonSection';
import { useHouseholdCaption } from '@/pages/Photobook/hooks/useHouseholdCaption';
import {
  UBT_AlignItems,
  UBT_FlexDirection,
  UBT_Icons2,
  UBT_IconsSize,
  UBT_JustifyContent,
  UBT_Visibility,
} from './staticEntities';

/** Top button options shared by the round buttons (Photobook_Options_Left / _Right view): neutral 9 at 0.6, padding
    small, border medium neutral 0, circle. */
export const ROUND_BUTTON = {
  Background: { BackgroundColor: UBT_Color.Neutral9, Opacity: 0.6 },
  PaddingSize: { GeneralSizeId: UBT_Size.Small },
  BorderOptions: {
    Color: UBT_Color.Neutral0,
    Size: { GeneralSizeId: UBT_Size.Medium },
    Radius: { GeneralSizeId: UBT_Shape.Circle },
  },
};

export interface Photobook_Options_LeftProps {
  id: string;
  inMainContainerClass: string;
  inIsShow: boolean;
  inCurrentHousehold: PhotobookHousehold;
  /** Event SheetIsOpen. */
  onSheetIsOpen?: () => void;
  /** Event Closed. */
  onClosed?: () => void;
}

/** The info button (top left, hidden unless In_IsShow) and, while In_IsShow, the info BottomSheet titled with the
    current locality: a SkeletonSection around the sanitized household caption (AllowedTags nobr,sup). The flows of
    the block (the caption and its data action) are in useHouseholdCaption. The sheet's OnToggle raises SheetIsOpen /
    Closed; its OnClose runs ToggleInfoSheet(False).
    @origin UBTConnect.Directory_Photobook.Photobook_Options_Left */
export function Photobook_Options_Left({
  id,
  inMainContainerClass,
  inIsShow,
  inCurrentHousehold,
  onSheetIsOpen,
  onClosed,
}: Photobook_Options_LeftProps) {
  const prefix = id.replace('$', '');
  const { caption, isLoading, onSheetInitialized, onClickedInfo, onCloseSheet } = useHouseholdCaption({
    inCurrentHousehold,
    inIsShow,
    inMainContainerClass,
  });
  const handlerToggleInfoSheet = (isOpen: boolean) => {
    if (isOpen) onSheetIsOpen?.();
    else onClosed?.();
  };

  return (
    <OSBlock name="Directory_Photobook.Photobook_Options_Left" id={id}>
      <CustomContainer
        id={`${prefix}-Photobook_Options_Top_Left`}
        extendedClasses={`${inMainContainerClass}--top-left`}
        options={{ ...ROUND_BUTTON, Visibility: inIsShow ? UBT_Visibility.Visible : UBT_Visibility.Hidden }}
        onClicked={onClickedInfo}
      >
        <Icon
          id={`${prefix}-Photobook_Options_Top_Info`}
          inIconId={UBT_Icons2.Info}
          inSizeId={UBT_IconsSize.Base_24}
          inColorId={UBT_Color.Neutral0}
        />
      </CustomContainer>
      {inIsShow && (
        <BottomSheet
          id={`${prefix}-BottomSheet_Info`}
          extendedClasses={`${inMainContainerClass}-bottom-sheet ${inMainContainerClass}-bottom-sheet--info`}
          title={inCurrentHousehold.locality}
          onOnToggle={handlerToggleInfoSheet}
          onOnClose={onCloseSheet}
          onInitialized={onSheetInitialized}
          content={
            <SkeletonSection inIsLoading={isLoading}>
              <CustomContainer
                options={{
                  DisplayOptions: {
                    Display: UBT_Display.Flex,
                    AlignItems: UBT_AlignItems.FlexStart,
                    JustifyContent: UBT_JustifyContent.Center,
                    FlexDirection: UBT_FlexDirection.Column,
                  },
                }}
              >
                <SanitizedHtml value={caption} resetWhitelist={false} allowedTags="nobr,sup" />
              </CustomContainer>
            </SkeletonSection>
          }
        />
      )}
    </OSBlock>
  );
}
