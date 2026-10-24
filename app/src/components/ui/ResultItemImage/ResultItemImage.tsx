/** @origin Connect2_LegacyShared.Utility.Result_Item_Image */
// @os-block Connect2_LegacyShared.Utility.Result_Item_Image
import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { osImage } from '@/legacy/os/os-assets';
import { styleFromCssText } from '@/shared/lib/cssText';
import { ResultListType } from '@/shared/Connect2_LegacyShared/lib/staticEntities';
import { useLoadPhotoAsync } from './useLoadPhotoAsync';

export interface ResultItemImageProps {
  /** OutSystems instance id of the block. */
  id?: string;
  inShowDescription?: boolean;
  showPlaceholderForImage?: boolean;
  inShowTag?: boolean;
  inHasAction?: boolean;
  inIsRoundImage?: boolean;
  /** CSS colour of the item background (default "var(--color-neutral-0)"). */
  inBackgroundColor?: string;
  /** Diameter in px of a round image (default 70). */
  inDiameter?: number;
  /** ResultListType identifier (Integer); Subdivision shows the division placeholder image. */
  inResultType?: number;
  inBucket?: string;
  inPath?: string;
  inType?: string;
  /** Signed URL of the photo; without one LoadPhotoAsync signs Bucket / Path / Type (GetCacheableSignedPhotoURL, README),
      else the default image shows. */
  inSignedURL?: string;
  inHasPadding?: boolean;
  inHasBorder?: boolean;
  inIsNavigationLoading?: boolean;
  customClass?: string;
  /** Value of the item's `data-item` attribute. */
  htmlDataItem?: string;
  /** CSS min-height of the text column ("" = none). */
  itemHeight?: string;
  /** Placeholder ImagePlaceholder (shown instead of the image when ShowPlaceholderForImage). */
  imagePlaceholder?: ReactNode;
  /** Placeholder Title_Placeholder. */
  titlePlaceholder?: ReactNode;
  /** Placeholder Description_Placeholder (In_ShowDescription). */
  descriptionPlaceholder?: ReactNode;
  /** Placeholder Tag_Placeholder (In_ShowTag). */
  tagPlaceholder?: ReactNode;
  /** Placeholder Result_Item_Placeholder (In_HasAction). */
  resultItemPlaceholder?: ReactNode;
  /** Placeholder BookmarkNote. */
  bookmarkNote?: ReactNode;
  /** Event OnClick_Item (image or text clicked). */
  onOnClickItem?: () => void;
}

const USER_IMAGE = 'img/Connect2_LegacyShared.User_rectangle.png';
const DIVISION_IMAGE = 'img/Connect2_LegacyShared.no_division_rectangle.png';

/** Legacy result list item with an image (p:Connect2_LegacyShared.Utility.Result_Item_Image.mvc.js, view and
    controller). The image column shows the ImagePlaceholder, else the signed photo (cropped round when
    In_IsRoundImage; LoadPhotoAsync, useLoadPhotoAsync.ts), else the division or user default image. Image and text
    columns raise OnClick_Item. */
export function ResultItemImage({
  id,
  inShowDescription = false,
  showPlaceholderForImage = false,
  inShowTag = false,
  inHasAction = false,
  inIsRoundImage = false,
  inBackgroundColor = 'var(--color-neutral-0)',
  inDiameter = 70,
  inResultType = 0,
  inBucket = '',
  inPath = '',
  inType = '',
  inSignedURL: inSignedURLInput = '',
  inHasPadding = true,
  inHasBorder = true,
  inIsNavigationLoading = false,
  customClass = '',
  htmlDataItem = '',
  itemHeight = '',
  imagePlaceholder,
  titlePlaceholder,
  descriptionPlaceholder,
  tagPlaceholder,
  resultItemPlaceholder,
  bookmarkNote,
  onOnClickItem,
}: ResultItemImageProps) {
  const inSignedURL = useLoadPhotoAsync(inSignedURLInput, inBucket, inPath, inType);
  const click = () => onOnClickItem?.();
  const roundSize = inIsRoundImage
    ? { width: `${String(inDiameter)}px`, height: `${String(inDiameter)}px` }
    : undefined;
  const isSubdivision = inResultType === ResultListType.Subdivision;
  const className =
    'image-item result-item ' +
    (inHasPadding ? ' padding-y-m padding-x-base' : ' no-padding') +
    (inHasBorder ? ' border-bottom border-bottom-neutral-4' : ' no-border') +
    (inIsNavigationLoading ? ' loading-item' : '') +
    (customClass !== '' ? ` ${customClass}` : customClass);
  return (
    <OSBlock name="Utility.Result_Item_Image" id={id}>
      <div
        className={className}
        data-container=""
        data-item={htmlDataItem}
        style={inIsNavigationLoading ? undefined : styleFromCssText(`background-color: ${inBackgroundColor};`)}
      >
        <div className="result-item-top-content" data-container="">
          <div className="result-item_visual OSInline" data-container="" style={{ cursor: 'pointer' }} onClick={click}>
            {showPlaceholderForImage ? (
              <div>{imagePlaceholder}</div>
            ) : inSignedURL !== '' ? (
              <div className={inIsRoundImage ? 'photo-cropper' : ''} data-container="" style={roundSize}>
                <img
                  alt=""
                  className={inIsRoundImage ? ' round-photo' : ''}
                  data-error-placeholder-src={osImage(isSubdivision ? DIVISION_IMAGE : USER_IMAGE)}
                  data-image=""
                  src={inSignedURL}
                />
              </div>
            ) : (
              <img
                alt=""
                className={inIsRoundImage ? 'result-image-round' : 'full-width'}
                data-image=""
                src={osImage(isSubdivision ? DIVISION_IMAGE : USER_IMAGE)}
                style={roundSize}
              />
            )}
          </div>
          <div className="result-item_content" data-container="">
            <div
              className="result-item_text-content"
              data-container=""
              style={{
                cursor: 'pointer',
                ...(itemHeight !== '' ? styleFromCssText(` min-height: ${itemHeight};`) : {}),
              }}
              onClick={click}
            >
              <div>{titlePlaceholder}</div>
              {inShowDescription && <div>{descriptionPlaceholder}</div>}
              {inShowTag && <div>{tagPlaceholder}</div>}
            </div>
            {inHasAction && <div className="result-item_placeholder">{resultItemPlaceholder}</div>}
          </div>
        </div>
        <div className="result-item-bottom-content" data-container="">
          <div>{bookmarkNote}</div>
        </div>
      </div>
    </OSBlock>
  );
}
