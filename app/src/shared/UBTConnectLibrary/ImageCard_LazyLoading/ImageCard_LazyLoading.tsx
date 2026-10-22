// @os-block UBTConnectLibrary.ConnectCorePatterns.ImageCard_LazyLoading
import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { CustomContainer } from '../CustomContainer';
import {
  formatClasses,
  getBorderOptions_ImageCard,
  getClasses_BackgroundImageSize,
  getClasses_ImageCard,
  getSpacingOptions_ImageCardContent,
  getTextOptions_ImageCard,
} from '../lib/actions';
import { UBT_AlignItems, UBT_AvatarSize, UBT_Color, UBT_Display, UBT_JustifyContent } from '../lib/staticEntities';

export interface ImageCard_LazyLoadingProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** UBT_ImageCardType identifier. */
  inCardTypeId?: string;
  inItemsPerRow?: number;
  inShowAvatarList?: boolean;
  inExtendedClass?: string;
  inIsBookmarked?: boolean;
  inBookmarkModifier?: string;
  /** Placeholder LazyImage_Placeholder. */
  lazyImagePlaceholder?: ReactNode;
  /** Placeholder Placeholder_ImageTag. */
  placeholderImageTag?: ReactNode;
  /** Placeholder AvatarList (shown with In_ShowAvatarList). */
  avatarList?: ReactNode;
  /** Placeholder Placeholder_Content. */
  placeholderContent?: ReactNode;
  /** Event Event_Click (the card). */
  onEventClick?: () => void;
}

const MAIN_CONTAINER_CLASS = 'ubt-image-card';

/** Image card (p:UBTConnectLibrary.ConnectCorePatterns.ImageCard_LazyLoading.mvc.js:225-449): the card container
    (classes, border and text options by card type, OnInitialize :472), the skeleton image wrapper (top radius of the
    card, bookmark classes) with the lazy image and the bottom-right tag, the avatar list, and the content container. */
export function ImageCard_LazyLoading({
  id,
  inCardTypeId = '',
  inItemsPerRow = 0,
  inShowAvatarList = false,
  inExtendedClass = '',
  inIsBookmarked = false,
  inBookmarkModifier = '',
  lazyImagePlaceholder,
  placeholderImageTag,
  avatarList,
  placeholderContent,
  onEventClick,
}: ImageCard_LazyLoadingProps) {
  const borderOptions = getBorderOptions_ImageCard(inCardTypeId);
  const textOptions = getTextOptions_ImageCard(inCardTypeId);
  const contentSpacingOptions = getSpacingOptions_ImageCardContent(inCardTypeId);
  const radius = borderOptions.Radius?.GeneralSizeId ?? '';
  const M = MAIN_CONTAINER_CLASS;
  return (
    <OSBlock name="ConnectCorePatterns.ImageCard_LazyLoading" id={id}>
      <CustomContainer
        extendedClasses={getClasses_ImageCard(
          M,
          inCardTypeId,
          UBT_AvatarSize.Small_40,
          inShowAvatarList,
          inExtendedClass,
        )}
        options={{
          Background: { BackgroundColor: UBT_Color.Neutral0 },
          BorderOptions: borderOptions,
          TextOptions: textOptions,
        }}
        onClicked={onEventClick}
      >
        <CustomContainer
          options={{
            BorderOptions: { Radius: { TopLeftId: radius, TopRightId: radius } },
            DisplayOptions: {
              Display: UBT_Display.Flex,
              AlignItems: UBT_AlignItems.FlexStart,
              JustifyContent: UBT_JustifyContent.Center,
            },
            IsSkeletonElement: true,
          }}
          extendedClasses={formatClasses(
            formatClasses(
              formatClasses(`${M}__background-image`, getClasses_BackgroundImageSize(inCardTypeId, inItemsPerRow)),
              formatClasses(inIsBookmarked ? `${M}__bookmarked` : '', inBookmarkModifier),
            ),
            'position-relative',
          )}
        >
          <div className={`${M}--lazy-image-placeholder `}>{lazyImagePlaceholder}</div>
          <div className="position-absolute absolute-bottom-right padding-s">{placeholderImageTag}</div>
        </CustomContainer>
        {inShowAvatarList ? (
          <div data-container="">
            <div className={`${M}__avatar-list`}>{avatarList}</div>
          </div>
        ) : null}
        <CustomContainer
          options={{ PaddingSize: contentSpacingOptions, TextOptions: textOptions }}
          extendedClasses={`${M}__content ${M}__content--type-${inCardTypeId}`}
        >
          <div>{placeholderContent}</div>
        </CustomContainer>
      </CustomContainer>
    </OSBlock>
  );
}
