/** @origin UBTConnectLibrary.ConnectPatterns.LazyImage */
// @os-block UBTConnectLibrary.ConnectPatterns.LazyImage
import { useState, type SyntheticEvent } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { InlineSVG } from '@/components/ui/InlineSVG';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { CustomText } from '@/components/ui/CustomText';
import { Icon } from '@/components/ui/Icon';
import { Skeleton } from '@/components/ui/Skeleton';
import { formatClasses, getClasses_LazyImageSize_Dev } from '@/shared/UBTConnectLibrary/lib/actions';
import {
  UBT_Color,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_Shape,
  UBT_Size,
} from '@/shared/UBTConnectLibrary/lib/staticEntities';
import type { AvatarImageFallbackoptions, ImageBorderOptions, LazyImageSize, SpacingOptions } from './types';

export interface LazyImageProps {
  /** OutSystems instance id of the block. */
  id?: string;
  imageURL?: string;
  inImageSize?: LazyImageSize;
  fallbackOptions?: AvatarImageFallbackoptions;
  fallbackPadding?: SpacingOptions;
  inBorderOptions?: ImageBorderOptions;
  hasErrorMessage?: boolean;
  extendedClass?: string;
}

const MAIN_CONTAINER_CLASS = 'ubt-lazy-image';

interface ImageState {
  isLoading: boolean;
  isError: boolean;
  hasImage: boolean;
  localImageURL: string;
}

/** OnReady: isError = False, ActionDefineHasImage, Local_ImageURL = ImageURL, isLoading while an image loads (the
    SetupOnLoad JS listeners are the image's onLoad / onError below). */
function onReady(imageURL: string): ImageState {
  return { isError: false, hasImage: imageURL !== '', localImageURL: imageURL, isLoading: imageURL !== '' };
}

/** Image with a skeleton while it loads and a fallback (initials, SVG or icon + message) without image or on error
    (p:UBTConnectLibrary.ConnectPatterns.LazyImage.mvc.js view :233-553, controller :555-1062).
    OnReady runs when the state is created and again for a new ImageURL (OnParametersChanged). */
export function LazyImage({
  id,
  imageURL = '',
  inImageSize = {},
  fallbackOptions = {},
  fallbackPadding = {},
  inBorderOptions = {},
  hasErrorMessage = false,
  extendedClass = '',
}: LazyImageProps) {
  // OnInitialize (isLoading = not IsViewRestoredFromCache) is overwritten by OnReady before the first paint, so the state
  // starts as OnReady leaves it. OnParametersChanged: a new ImageURL (<> Local_ImageURL) runs OnReady again.
  const [{ isLoading, isError, hasImage, localImageURL }, setState] = useState<ImageState>(() => onReady(imageURL));
  if (localImageURL !== imageURL) setState(onReady(imageURL));

  // OnLoad / OnError: ActionDefineHasImage (with the current isError), isLoading = False (OnError: then isError = True).
  const onLoad = () => {
    setState((s) => ({ ...s, hasImage: imageURL !== '' && !s.isError, isLoading: false }));
  };
  const onError = (event: SyntheticEvent<HTMLImageElement>) => {
    if (!event.currentTarget.getAttribute('src')) return;
    setState((s) => ({ ...s, hasImage: imageURL !== '' && !s.isError, isLoading: false, isError: true }));
  };

  const showFallback = !hasImage || isLoading || isError;
  const radius = inBorderOptions.BorderRadius ?? UBT_Shape.Circle;
  const fontColor = fallbackOptions.FontColor ?? '';
  const initials = fallbackOptions.Initials ?? '';
  const svg = fallbackOptions.SVG ?? '';
  const message = fallbackOptions.Message ?? '';
  const baseClasses = formatClasses(MAIN_CONTAINER_CLASS, extendedClass);
  const height = inImageSize.Height ?? '';
  const width = inImageSize.Width ?? '';

  return (
    <OSBlock name="ConnectPatterns.LazyImage" id={id}>
      <Skeleton isLoading={isLoading}>
        <CustomContainer
          extendedClasses={
            (showFallback ? 'hidden ' : '') +
            formatClasses(baseClasses, getClasses_LazyImageSize_Dev(height, width, false))
          }
          options={{
            BorderOptions: {
              Color: inBorderOptions.BorderColorId ?? '',
              Size: { GeneralSizeId: inBorderOptions.BorderSizeId ?? '' },
              Radius: { GeneralSizeId: radius },
            },
          }}
        >
          <img data-image="" src={localImageURL === '' ? undefined : localImageURL} onLoad={onLoad} onError={onError} />
        </CustomContainer>
        {showFallback && (
          <CustomContainer
            options={{
              Background: { BackgroundColor: fallbackOptions.BackgroundColor ?? '' },
              PaddingSize: fallbackPadding,
              BorderOptions: {
                Color: fallbackOptions.BorderColor ?? '',
                Size: { GeneralSizeId: fallbackOptions.BorderSize ?? '' },
                Radius: { GeneralSizeId: radius },
              },
              TextOptions: {
                Color: fontColor,
                FontSize: fallbackOptions.FontSize ?? UBT_FontSize.Base,
                FontWeight: UBT_FontWeight.SemiBold,
              },
              IsSkeletonElement: true,
            }}
            extendedClasses={formatClasses(
              formatClasses(baseClasses, getClasses_LazyImageSize_Dev(height, width, true)),
              `${MAIN_CONTAINER_CLASS}--no-image`,
            )}
          >
            {initials !== '' ? (
              <span data-expression="">{initials}</span>
            ) : svg !== '' ? (
              <InlineSVG />
            ) : (
              <>
                <Icon
                  inColorId={fontColor}
                  inIconId={fallbackOptions.IconId ?? ''}
                  inSizeId={fallbackOptions.IconSizeId ?? ''}
                />
                {hasErrorMessage && message !== '' && (
                  <CustomText
                    inText={message}
                    inTextOptions={{
                      Color: UBT_Color.Neutral7,
                      FontSize: UBT_FontSize.Small,
                      FontWeight: UBT_FontWeight.Regular,
                      IsItalic: false,
                    }}
                    inPaddingOptions={{ TopSizeId: UBT_Size.Base }}
                  />
                )}
              </>
            )}
          </CustomContainer>
        )}
      </Skeleton>
    </OSBlock>
  );
}
