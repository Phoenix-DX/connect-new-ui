// @os-block Connect2_LegacyShared.NewConnect_Utilities.NC_Card_Item_Visual
import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { osImage } from '@/legacy/os/os-assets';
import { styleFromCssText } from '../../lib/cssText';
import { ResultListType } from '../lib/staticEntities';
import { useLoadPhotoAsync } from '../Result_Item_Image/useLoadPhotoAsync';

export interface NC_Card_Item_VisualProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** ShowPlaceholderForImage: the Image placeholder replaces the photo (default false). */
  showPlaceholderForImage?: boolean;
  /** In_ImageHeight in px (default 202). */
  inImageHeight?: number;
  /** In_ResultType: ResultListType identifier (Integer); Subdivision picks the division error image. */
  inResultType?: number;
  /** In_SignedURL; without one LoadPhotoAsync signs In_Bucket / In_Path / In_Type. */
  inSignedURL?: string;
  inBucket?: string;
  inPath?: string;
  inType?: string;
  /** In_FloatingPillPosition: suffix of the pill placeholder's `absolute-` class. */
  inFloatingPillPosition?: string;
  /** In_FloatingOverlayTextPosition: suffix of the overlay text placeholder's `absolute-` class. */
  inFloatingOverlayTextPosition?: string;
  /** In_ImageCoverPositionX / Y: `object-position: <Y> <X>` of the photo. */
  inImageCoverPositionX?: string;
  inImageCoverPositionY?: string;
  /** Placeholder Placeholder_FloatingPill. */
  floatingPill?: ReactNode;
  /** Placeholder Placeholder_OverlayText. */
  overlayText?: ReactNode;
  /** Placeholder Placeholder_Image (ShowPlaceholderForImage). */
  image?: ReactNode;
}

const USER_IMAGE = 'img/Connect2_LegacyShared.User_rectangle.png';
const DIVISION_IMAGE = 'img/Connect2_LegacyShared.no_division_rectangle.png';

/** Card visual (p:migration/blocks/sources/Connect2_LegacyShared.NewConnect_Utilities.NC_Card_Item_Visual.mvc.js view
    :300-395): `position-relative` container with the floating pill and overlay text placeholders
    (`position-absolute absolute-<position>`), then the Image placeholder, else the signed photo (`img-cover full-width`,
    height and object-position inline), else the division default image (`img-cover--top-center`). Error image: division
    for a Subdivision, else the user image. OnReady and OnParametersChanged run LoadPhotoAsync (controller :400-470,
    useLoadPhotoAsync). Never captured. */
export function NC_Card_Item_Visual({
  id,
  showPlaceholderForImage = false,
  inImageHeight = 202,
  inResultType = 0,
  inSignedURL: inSignedURLInput = '',
  inBucket = '',
  inPath = '',
  inType = '',
  inFloatingPillPosition = '',
  inFloatingOverlayTextPosition = '',
  inImageCoverPositionX = '',
  inImageCoverPositionY = '',
  floatingPill,
  overlayText,
  image,
}: NC_Card_Item_VisualProps) {
  const inSignedURL = useLoadPhotoAsync(inSignedURLInput, inBucket, inPath, inType);
  const errorImage = osImage(inResultType === ResultListType.Subdivision ? DIVISION_IMAGE : USER_IMAGE);
  const height = String(inImageHeight);
  return (
    <OSBlock name="NewConnect_Utilities.NC_Card_Item_Visual" id={id}>
      <div className="position-relative" data-container="">
        <div className={`position-absolute absolute-${inFloatingPillPosition}`}>{floatingPill}</div>
        <div className={`position-absolute absolute-${inFloatingOverlayTextPosition}`}>{overlayText}</div>
        {showPlaceholderForImage ? (
          <div>{image}</div>
        ) : inSignedURL !== '' ? (
          <img
            alt=""
            className="img-cover full-width"
            data-error-placeholder-src={errorImage}
            data-image=""
            src={inSignedURL}
            style={styleFromCssText(
              `height: ${height}px; object-position: ${inImageCoverPositionY} ${inImageCoverPositionX}`,
            )}
          />
        ) : (
          <img
            alt=""
            className="img-cover full-width img-cover--top-center"
            data-error-placeholder-src={errorImage}
            data-image=""
            src={osImage(DIVISION_IMAGE)}
            style={styleFromCssText(`height: ${height}px;`)}
          />
        )}
      </div>
    </OSBlock>
  );
}
