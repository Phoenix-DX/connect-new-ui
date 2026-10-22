// @os-block Directory_Photobook.Photobook_Gallery
import { useEffect, useState } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList } from '@/components/ui/os/OSList';
import { TouchEvents } from '../../../shared/osui/TouchEvents';
import { Connect_Entity } from '../../../shared/UBTConnect/lib/staticEntities';
import { CustomContainer } from '../../../shared/UBTConnectLibrary/CustomContainer';
import { Icon } from '../../../shared/UBTConnectLibrary/Icon';
import { IconText } from '../../../shared/UBTConnectLibrary/IconText';
import {
  UBT_Color,
  UBT_Display,
  UBT_FontSize,
  UBT_Shape,
  UBT_Size,
} from '../../../shared/UBTConnectLibrary/lib/staticEntities';
import { UBT_LazyImage } from '../../../shared/UBTConnect_Utils/UBT_LazyImage';
import type { SelectedHousehold } from '../types';
import {
  UBT_AlignItems,
  UBT_FlexDirection,
  UBT_FontWeight,
  UBT_Icons2,
  UBT_IconsSize,
  UBT_ImageSize,
  UBT_Visibility,
} from './staticEntities';

const MAIN_CONTAINER_CLASS = 'photobook-gallery';

/** ScrollSelectedIntoPosition.ScrollIntoPositionJS (Photobook_Gallery.mvc.js :770-800): scrolls the thumbnail list so
    the selected item (1-based position) is centred, measuring the first item (margins included). */
function scrollIntoPosition(scrollableContainerId: string, selectedItemPosition: number, isInstantScroll: boolean) {
  const scrollableList = document.getElementById(scrollableContainerId);
  if (!scrollableList) return;
  const targetEle = document.querySelectorAll(
    `.${MAIN_CONTAINER_CLASS} .OSBlockWidget:has(.${MAIN_CONTAINER_CLASS}--item)`,
  )[0];
  if (!targetEle || !selectedItemPosition) return;
  const rect = targetEle.getBoundingClientRect();
  const styles = window.getComputedStyle(targetEle);
  const marginLeft = parseFloat(styles.marginLeft);
  const marginRight = parseFloat(styles.marginRight);
  const eleWidth = rect.width + marginLeft + marginRight;
  const scrollAmount = selectedItemPosition * eleWidth - (marginRight / 2 + eleWidth / 2);
  scrollableList.scroll({ left: scrollAmount, behavior: isInstantScroll ? 'instant' : 'smooth' });
}

/** Directory_Photobook.Photobook_Options_Bottom (Photobook_Options_Bottom.mvc.js view :95-300): when In_TotalHouseholds
    is not NullIdentifier (0), the counter pill "<position + 1>/<total>" with the family icon, hidden unless In_IsShow. */
function Photobook_Options_Bottom({
  id,
  inIsShow,
  inMainContainerClass,
  inCurrentPosition,
  inTotalHouseholds,
}: {
  id: string;
  inIsShow: boolean;
  inMainContainerClass: string;
  inCurrentPosition: number;
  inTotalHouseholds: number;
}) {
  const prefix = id.replace('$', '');
  return (
    <OSBlock name="Directory_Photobook.Photobook_Options_Bottom" id={id}>
      {inTotalHouseholds !== 0 && (
        <CustomContainer
          id={`${prefix}-Photobook_Options_Bottom`}
          extendedClasses={`${inMainContainerClass}--counter`}
          options={{
            Background: { BackgroundColor: UBT_Color.Neutral9, Opacity: 0.6 },
            PaddingSize: { VerticalSizeId: UBT_Size.Small, HorizontalSizeId: UBT_Size.Base },
            BorderOptions: {
              Color: UBT_Color.Neutral0,
              Size: { GeneralSizeId: UBT_Size.Medium },
              Radius: { GeneralSizeId: UBT_Shape.Rounded },
            },
            Visibility: inIsShow ? UBT_Visibility.Visible : UBT_Visibility.Hidden,
          }}
        >
          <IconText
            id={`${prefix}-$b2`}
            text={`${String(inCurrentPosition + 1)}/${String(inTotalHouseholds)}`}
            textOptions={{ Color: UBT_Color.Neutral0, FontSize: UBT_FontSize.Small, FontWeight: UBT_FontWeight.Bold }}
          >
            <Icon
              id={`${prefix}-$b3`}
              inIconId={UBT_Icons2.Family}
              inColorId={UBT_Color.Neutral0}
              inSizeId={UBT_IconsSize.Base_24}
            />
          </IconText>
        </CustomContainer>
      )}
    </OSBlock>
  );
}

/** Directory_Photobook.Photobook_Gallery_Item (Photobook_Gallery_Item.mvc.js view :95-250): the thumbnail (Household
    image 40 px high, soft corners), with a small neutral 0 border when active; a click raises Clicked(HouseholdId). */
function Photobook_Gallery_Item({
  id,
  inIsActive,
  inTargetSubClass,
  inHouseholdId,
  onClicked,
}: {
  id: string;
  inIsActive: boolean;
  inTargetSubClass: string;
  inHouseholdId: string;
  onClicked: (householdId: string) => void;
}) {
  const prefix = id.replace('$', '');
  return (
    <OSBlock name="Directory_Photobook.Photobook_Gallery_Item" id={id}>
      <CustomContainer
        id={`${prefix}-Household_Gallery_Item`}
        extendedClasses={inTargetSubClass}
        options={{
          BorderOptions: {
            Color: inIsActive ? UBT_Color.Neutral0 : '',
            Size: { GeneralSizeId: inIsActive ? UBT_Size.Small : '' },
            Radius: { GeneralSizeId: UBT_Shape.Soft },
          },
        }}
        onClicked={() => {
          onClicked(inHouseholdId);
        }}
      >
        <UBT_LazyImage
          id={`${prefix}-$b2`}
          entityType={Connect_Entity.Household}
          inBorderRadius={UBT_Shape.Soft}
          imageSize={{ Height: UBT_ImageSize.Small_40 }}
          entityId={inHouseholdId}
        />
      </CustomContainer>
    </OSBlock>
  );
}

export interface Photobook_GalleryProps {
  id: string;
  inIsShow: boolean;
  inSelectedPosition: number;
  inLocalityHouseholdIds: readonly string[];
  /** Event Clicked(Event_SelectedHousehold). */
  onClicked?: (selected: SelectedHousehold) => void;
  onListTouchStart?: () => void;
  onListTouchEnd?: () => void;
}

/** Directory_Photobook.Photobook_Gallery (Photobook_Gallery.mvc.js view :95-330, controller :331-800): the bottom
    strip, hidden unless In_IsShow: the counter (Photobook_Options_Bottom) and the thumbnail List
    (`photobook-gallery--list`, animated, virtualization off) with TouchEvents on it (Start → ListTouchStart, End →
    ListTouchEnd). SelectedPosition starts as In_SelectedPosition (OnInitialize); OnParametersChanged runs
    CheckIfScrollIsNeeded(In_SelectedPosition, ForceScroll = not In_IsShow); a thumbnail click runs
    CheckIfScrollIsNeeded(position, False) then raises Clicked(Id, SelectedPosition). The List's componentdidmount
    scrolls the selected item into position instantly. */
export function Photobook_Gallery({
  id,
  inIsShow,
  inSelectedPosition,
  inLocalityHouseholdIds,
  onClicked,
  onListTouchStart,
  onListTouchEnd,
}: Photobook_GalleryProps) {
  const prefix = id.replace('$', '');
  const listId = `${prefix}-Photobook_Gallery_List`;
  const [selectedPosition, setSelectedPosition] = useState(inSelectedPosition);
  /* Last ScrollSelectedIntoPosition request (IsInstantScroll): the List's componentdidmount asks an instant one. */
  const [scrollRequest, setScrollRequest] = useState<{ instant: boolean }>({ instant: true });

  /* CheckIfScrollIsNeeded (:345-372): unless forced, nothing when already selected; else select and scroll smoothly. */
  const checkIfScrollIsNeeded = (targetPosition: number, forceScroll: boolean) => {
    if (!forceScroll && targetPosition === selectedPosition) return targetPosition;
    setSelectedPosition(targetPosition);
    setScrollRequest({ instant: false });
    return targetPosition;
  };

  /* OnParametersChanged (:420-435) when In_SelectedPosition or In_IsShow change. */
  const [previousInputs, setPreviousInputs] = useState({ inSelectedPosition, inIsShow });
  if (previousInputs.inSelectedPosition !== inSelectedPosition || previousInputs.inIsShow !== inIsShow) {
    setPreviousInputs({ inSelectedPosition, inIsShow });
    checkIfScrollIsNeeded(inSelectedPosition, !inIsShow);
  }

  /* ScrollSelectedIntoPosition after the render that set SelectedPosition (componentdidmount: instant). */
  useEffect(() => {
    scrollIntoPosition(listId, selectedPosition + 1, scrollRequest.instant);
  }, [scrollRequest, listId, selectedPosition]);

  const handlerClickedHousehold = (householdId: string, position: number) => {
    const selected = checkIfScrollIsNeeded(position, false);
    onClicked?.({ id: householdId, position: selected });
  };

  return (
    <OSBlock name="Directory_Photobook.Photobook_Gallery" id={id}>
      <CustomContainer
        id={`${prefix}-Household_Gallery_Cont`}
        extendedClasses={MAIN_CONTAINER_CLASS}
        options={{
          MarginSize: { BottomSizeId: UBT_Size.Base },
          DisplayOptions: {
            Display: UBT_Display.Flex,
            AlignItems: UBT_AlignItems.Center,
            FlexDirection: UBT_FlexDirection.Column,
          },
          Visibility: inIsShow ? UBT_Visibility.Visible : UBT_Visibility.Hidden,
        }}
      >
        <Photobook_Options_Bottom
          id={`${prefix}-$b2`}
          inIsShow={inIsShow}
          inMainContainerClass={MAIN_CONTAINER_CLASS}
          inCurrentPosition={selectedPosition}
          inTotalHouseholds={inLocalityHouseholdIds.length}
        />
        <OSList
          id={listId}
          className={`list list-group ${MAIN_CONTAINER_CLASS}--list`}
          animateItems
          disableVirtualization
          source={inLocalityHouseholdIds}
          keyOf={(householdId, index) => `${householdId}-${String(index)}`}
        >
          {(householdId, index) => (
            <Photobook_Gallery_Item
              id={`${prefix}-l1-43_${String(index)}-$b3`}
              inIsActive={selectedPosition === index}
              inTargetSubClass={`${MAIN_CONTAINER_CLASS}--item`}
              inHouseholdId={householdId}
              onClicked={(clickedId) => {
                handlerClickedHousehold(clickedId, index);
              }}
            />
          )}
        </OSList>
      </CustomContainer>
      <TouchEvents
        id={`${prefix}-$b4`}
        widgetId={listId}
        preventDefaults={false}
        onStart={() => onListTouchStart?.()}
        onEnd={() => onListTouchEnd?.()}
      />
    </OSBlock>
  );
}
