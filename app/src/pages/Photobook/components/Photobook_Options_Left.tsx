// @os-block Directory_Photobook.Photobook_Options_Left
import { useState } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { bottomSheetClose, bottomSheetOpen } from '@/shared/osui/lib/actions';
import { SanitizedHtml } from '@/shared/ReactiveHtmlSanitizer/SanitizedHtml';
import { BottomSheet } from '@/shared/UBTConnectLibrary/BottomSheet';
import { CustomContainer } from '@/shared/UBTConnectLibrary/CustomContainer';
import { Icon } from '@/shared/UBTConnectLibrary/Icon';
import { UBT_Color, UBT_Display, UBT_Shape, UBT_Size } from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { SkeletonSection } from '@/shared/UBTConnectLibrary/SkeletonSection';
import { raiseToFlowHandler } from '@/legacy/os/exceptions';
import { useWasRestoredFromCache } from '@/platform/navigation';
import { getHouseholdCaption } from '@/pages/Photobook/api';
import type { PhotobookHousehold } from '@/pages/Photobook/types';
import {
  UBT_AlignItems,
  UBT_FlexDirection,
  UBT_Icons2,
  UBT_IconsSize,
  UBT_JustifyContent,
  UBT_Visibility,
} from './staticEntities';

/** GetSkeleton_UI_PhotobookCaption (UBTConnect.controller.js, raw copy in analysis/sources/raw): the caption shown
    until DataActionGetHouseholdCaption answers. */
const SKELETON_CAPTION =
  'SURNAME (Name - Local) Name & Name (Name Name* - Locality, AA) First name m, Name m, Name m (Locality) Name 00/00, Name';
const EMPTY_HOUSEHOLD: PhotobookHousehold = { householdId: '0', householdName: '', locality: '' };
const sameHousehold = (a: PhotobookHousehold, b: PhotobookHousehold) =>
  a.householdId === b.householdId && a.householdName === b.householdName && a.locality === b.locality;

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

/** Directory_Photobook.Photobook_Options_Left (Photobook_Options_Left.mvc.js view :120-330, controller :331-700): the
    info button (top left, hidden unless In_IsShow) and, while In_IsShow, the info BottomSheet titled with the current
    locality: a SkeletonSection around the sanitized household caption (AllowedTags nobr,sup).
    OnInitialize: unless restored from the cache, the caption starts as the skeleton caption. Handler_ClickedInfo:
    BottomSheetOpen, then DataActionGetHouseholdCaption when the current household is not the last fetched one
    (isLoading True until OnAfterFetch sets it False and LastFetched). The sheet's OnToggle raises SheetIsOpen / Closed,
    OnClose runs BottomSheetClose. */
export function Photobook_Options_Left({
  id,
  inMainContainerClass,
  inIsShow,
  inCurrentHousehold,
  onSheetIsOpen,
  onClosed,
}: Photobook_Options_LeftProps) {
  const prefix = id.replace('$', '');
  const restored = useWasRestoredFromCache();
  const [infoSheetId, setInfoSheetId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [lastFetched, setLastFetched] = useState<PhotobookHousehold>(EMPTY_HOUSEHOLD);
  const [caption, setCaption] = useState(restored ? '' : SKELETON_CAPTION);

  const toggleInfoSheet = (isOpen: boolean) => {
    if (isOpen) bottomSheetOpen(infoSheetId);
    else bottomSheetClose(infoSheetId);
  };
  const handlerClickedInfo = () => {
    toggleInfoSheet(true);
    if (sameHousehold(lastFetched, inCurrentHousehold)) return;
    setIsLoading(true);
    getHouseholdCaption({
      inCurrentHousehold,
      inIsShow,
      inMainContainerClass,
      infoSheetId,
      lastFetched,
      isLoading: true,
    }).then(
      (out) => {
        setCaption(out.householdCaption);
        setIsLoading(false);
        setLastFetched(out.lastFetchedHousehold);
      },
      (error: unknown) => {
        raiseToFlowHandler(error);
      },
    );
  };
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
        onClicked={handlerClickedInfo}
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
          onOnClose={() => {
            toggleInfoSheet(false);
          }}
          onInitialized={setInfoSheetId}
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
