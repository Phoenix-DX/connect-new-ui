// @os-block Directory_Photobook.Photobook_Item
import { useState } from 'react';
import { OSBlock } from '../../../components/OSBlock';
import { Connect_Entity } from '../../../shared/UBTConnect/lib/staticEntities';
import { CustomContainer } from '../../../shared/UBTConnectLibrary/CustomContainer';
import { CustomText } from '../../../shared/UBTConnectLibrary/CustomText';
import {
  UBT_Color,
  UBT_Display,
  UBT_FontSize,
  UBT_Shape,
  UBT_Size,
} from '../../../shared/UBTConnectLibrary/lib/staticEntities';
import { UBT_LazyImage } from '../../../shared/UBTConnect_Utils/UBT_LazyImage';
import type { PhotobookHousehold } from '../types';
import { PanZoom } from './PanZoom';
import {
  UBT_AlignItems,
  UBT_FlexDirection,
  UBT_FontWeight,
  UBT_ImageSize,
  UBT_JustifyContent,
  UBT_Visibility,
} from './staticEntities';

export interface Photobook_ItemProps {
  /** Instance prefix of the iteration (`b4-l1-37_<row>-b2`, dom/default.html:98). */
  prefix: string;
  inMainContainerClass: string;
  inHousehold: PhotobookHousehold;
  /** Event ZoomIn. */
  onZoomIn?: () => void;
  /** Event MinZoomReached. */
  onMinZoomReached?: () => void;
}

const CENTER = {
  Display: UBT_Display.Flex,
  AlignItems: UBT_AlignItems.Center,
  JustifyContent: UBT_JustifyContent.Center,
};
const CENTER_COLUMN = { ...CENTER, FlexDirection: UBT_FlexDirection.Column };

/** Directory_Photobook.Photobook_Item (Photobook_Item.mvc.js view :140-470, controller :471-560): the slide with the
    household photo twice (background at max width, foreground at max height inside PanZoom) and the title (family
    name, locality). Handler_ZoomIn / Handler_MinZoomReached set IsZoomedIn (title hidden while zoomed) and raise
    ZoomIn / MinZoomReached. The slide id is Splide's (`splide01-slide01`, set by the shared Carousel). */
export function Photobook_Item({
  prefix,
  inMainContainerClass,
  inHousehold,
  onZoomIn,
  onMinZoomReached,
}: Photobook_ItemProps) {
  const [isZoomedIn, setIsZoomedIn] = useState(false);
  const handlerZoomIn = () => {
    setIsZoomedIn(true);
    onZoomIn?.();
  };
  const handlerMinZoomReached = () => {
    setIsZoomedIn(false);
    onMinZoomReached?.();
  };
  return (
    <OSBlock name="Directory_Photobook.Photobook_Item">
      <CustomContainer
        id={`${prefix}-CarouselItem`}
        extendedClasses={`${inMainContainerClass}-item`}
        options={{ DisplayOptions: CENTER }}
      >
        <div className={`${inMainContainerClass}-item-cont`} data-container="" id={`${prefix}-DIV_BackgroundImage`}>
          <UBT_LazyImage
            id={`${prefix}-Background_Image`}
            entityId={inHousehold.householdId}
            entityType={Connect_Entity.Household}
            imageSize={{ Width: UBT_ImageSize.MaxWidth_100vw }}
            extendedClass={`${inMainContainerClass}-background-image`}
          />
        </div>
        <div className={`${inMainContainerClass}-item-cont`} data-container="" id={`${prefix}-DIV_ForegroundImage`}>
          <PanZoom
            id={`${prefix}-$b3`}
            onZoomIn={handlerZoomIn}
            onMinZoomReached={handlerMinZoomReached}
            image={
              <UBT_LazyImage
                id={`${prefix}-Foreground_Image`}
                extendedClass={`${inMainContainerClass}-foreground-image`}
                entityId={inHousehold.householdId}
                entityType={Connect_Entity.Household}
                imageSize={{ Height: UBT_ImageSize.MaxHeight_100vh }}
              />
            }
          />
        </div>
        <CustomContainer
          id={`${prefix}-Title_Cont`}
          extendedClasses={`${inMainContainerClass}-title-cont`}
          options={{
            DisplayOptions: CENTER_COLUMN,
            Visibility: isZoomedIn ? UBT_Visibility.Hidden : UBT_Visibility.Visible,
          }}
        >
          <CustomContainer
            id={`${prefix}-Title_Background`}
            extendedClasses={`${inMainContainerClass}-title-background`}
            options={{
              Background: { BackgroundColor: UBT_Color.Neutral9, Opacity: 0.25 },
              PaddingSize: { VerticalSizeId: UBT_Size.ExtraSmall, HorizontalSizeId: UBT_Size.DoubleExtraLarge },
              BorderOptions: { Radius: { GeneralSizeId: UBT_Shape.Rounded } },
              DisplayOptions: CENTER_COLUMN,
            }}
          >
            <CustomText
              id={`${prefix}-Title_FamilyName`}
              inText={inHousehold.householdName}
              inTextOptions={{
                Color: UBT_Color.Neutral0,
                FontSize: UBT_FontSize.Heading6,
                FontWeight: UBT_FontWeight.SemiBold,
              }}
            />
            <CustomText
              id={`${prefix}-Title_Locality`}
              inText={inHousehold.locality}
              inTextOptions={{ Color: UBT_Color.Neutral0, FontSize: UBT_FontSize.Small }}
            />
          </CustomContainer>
        </CustomContainer>
      </CustomContainer>
    </OSBlock>
  );
}
