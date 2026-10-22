// @os-block Connect2_LegacyShared.NewConnect_Utilities.NC_Result_Item__Image
import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { osImage } from '@/legacy/os/os-assets';
import { styleFromCssText } from '@/shared/lib/cssText';
import { ResultListType } from '@/shared/Connect2_LegacyShared/lib/staticEntities';
import { useLoadPhotoAsync } from '@/shared/Connect2_LegacyShared/Result_Item_Image/useLoadPhotoAsync';

export interface NC_Result_Item__ImageProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** ShowPlaceholderForImage: the ImagePlaceholder replaces the image (default false). */
  showPlaceholderForImage?: boolean;
  /** In_IsRoundImage: square (width = height) circle image (default false). */
  inIsRoundImage?: boolean;
  /** In_ImageHeight in px (default 40). */
  inImageHeight?: number;
  /** In_ResultType: ResultListType identifier (Integer); Subdivision shows the division default image. */
  inResultType?: number;
  /** In_ResultItemVisualWidth: min-width in px of the image column (default 40). */
  inResultItemVisualWidth?: number;
  /** In_SignedURL; without one LoadPhotoAsync signs In_Bucket / In_Path / In_Type. */
  inSignedURL?: string;
  customClass?: string;
  /** HtmlDataItem: value of the row's `data-item` attribute. */
  htmlDataItem?: string;
  inBucket?: string;
  inPath?: string;
  inType?: string;
  /** In_BorderRadius in px of a non-round image (default 0). */
  inBorderRadius?: number;
  /** IsLoading: skeletons instead of the image and the text column (default false). */
  isLoading?: boolean;
  /** In_IsReverseImageAndContent: image on the right (`flex-direction-row-reverse`). */
  inIsReverseImageAndContent?: boolean;
  /** Placeholder Label (above the row). */
  label?: ReactNode;
  /** Placeholder ImagePlaceholder. */
  imagePlaceholder?: ReactNode;
  /** Placeholder Title_Placeholder. */
  titlePlaceholder?: ReactNode;
  /** Placeholder Description_Placeholder. */
  descriptionPlaceholder?: ReactNode;
  /** Placeholder Action_Placeholder. */
  actionPlaceholder?: ReactNode;
  /** Event OnClick_Item. */
  onOnClickItem?: () => void;
}

const USER_IMAGE = 'img/Connect2_LegacyShared.User_rectangle.png';
const DIVISION_RECTANGLE = 'img/Connect2_LegacyShared.no_division_rectangle.png';
const DIVISION_SQUARE = 'img/Connect2_LegacyShared.no_division_square.png';

/** Result row with an image (p:migration/blocks/sources/Connect2_LegacyShared.NewConnect_Utilities.
    NC_Result_Item__Image.mvc.js view :330-600, controller OnClick_Result_Item :715-740, LoadPhotoAsync :642-700 run by
    OnReady :765 and OnParametersChanged :785 → useLoadPhotoAsync). The Label placeholder, then the row
    `display-flex align-items-center gap-base [flex-direction-row-reverse] <CustomClass>`: the image column
    (`result-item__visual`, min-width) shows the ImagePlaceholder, else a skeleton while IsLoading, else the signed
    photo, else the default image (division square/rectangle for a Subdivision, else the user image); then a skeleton
    while IsLoading, else the text column (title, description) and the Action placeholder. The row, the image column
    and the text column each raise OnClick_Item. Never captured. */
export function NC_Result_Item__Image({
  id,
  showPlaceholderForImage = false,
  inIsRoundImage = false,
  inImageHeight = 40,
  inResultType = 0,
  inResultItemVisualWidth = 40,
  inSignedURL: inSignedURLInput = '',
  customClass = '',
  htmlDataItem = '',
  inBucket = '',
  inPath = '',
  inType = '',
  inBorderRadius = 0,
  isLoading = false,
  inIsReverseImageAndContent = false,
  label,
  imagePlaceholder,
  titlePlaceholder,
  descriptionPlaceholder,
  actionPlaceholder,
  onOnClickItem,
}: NC_Result_Item__ImageProps) {
  const inSignedURL = useLoadPhotoAsync(inSignedURLInput, inBucket, inPath, inType);
  /* Each container's OnClick runs OnClick_Result_Item; the inner ones are nested in the row (README). */
  const click = () => onOnClickItem?.();
  const height = String(inImageHeight);
  const imageStyle = styleFromCssText(
    `height: ${height}px;` + (inIsRoundImage ? `width: ${height}px;` : `border-radius: ${String(inBorderRadius)}px; `),
  );
  const imageClass = inIsRoundImage ? 'img-circle img-cover img-cover--top-center' : '';
  const defaultImage = osImage(
    inResultType === ResultListType.Subdivision ? (inIsRoundImage ? DIVISION_SQUARE : DIVISION_RECTANGLE) : USER_IMAGE,
  );
  const rowClass =
    'display-flex align-items-center gap-base ' +
    (inIsReverseImageAndContent ? 'flex-direction-row-reverse ' : '') +
    customClass;
  return (
    <OSBlock name="NewConnect_Utilities.NC_Result_Item__Image" id={id}>
      <div>{label}</div>
      <div
        className={rowClass}
        data-container=""
        data-item={htmlDataItem}
        style={{ cursor: 'pointer' }}
        onClick={click}
      >
        <div
          className="result-item__visual OSInline"
          data-container=""
          style={{ ...styleFromCssText(`min-width: ${String(inResultItemVisualWidth)}px`), cursor: 'pointer' }}
          onClick={click}
        >
          {showPlaceholderForImage ? (
            <div className="center display-flex">{imagePlaceholder}</div>
          ) : (
            <div className="center display-flex" data-container="">
              {isLoading ? (
                <div
                  className={`skeleton-item ${inIsRoundImage ? 'border-radius-circle' : ''}`}
                  data-container=""
                  style={imageStyle}
                />
              ) : inSignedURL !== '' ? (
                <img
                  alt=""
                  className={imageClass}
                  data-error-placeholder-src={defaultImage}
                  data-image=""
                  src={inSignedURL}
                  style={imageStyle}
                />
              ) : (
                <img
                  alt=""
                  className={imageClass}
                  data-error-placeholder-src={defaultImage}
                  data-image=""
                  src={defaultImage}
                  style={imageStyle}
                />
              )}
            </div>
          )}
        </div>
        {isLoading ? (
          <div
            className="skeleton-item display-flex align-items-center justify-content-space-between flex1 border-radius-soft"
            data-container=""
            style={styleFromCssText(`height: ${height}px`)}
          />
        ) : (
          <div className="display-flex align-items-center justify-content-space-between flex1" data-container="">
            <div data-container="" style={{ cursor: 'pointer' }} onClick={click}>
              <div className="font-semi-bold">{titlePlaceholder}</div>
              <div className="font-size-xs text-neutral-7">{descriptionPlaceholder}</div>
            </div>
            <div className="">{actionPlaceholder}</div>
          </div>
        )}
      </div>
    </OSBlock>
  );
}
