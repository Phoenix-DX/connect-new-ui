// @os-block UBTConnectLibrary.ConnectPatterns.AvatarImage
import { OSBlock } from '@/components/ui/os/OSBlock';
import { InlineSVG } from '@/shared/osui/InlineSVG';
import { CustomContainer } from '@/shared/UBTConnectLibrary/CustomContainer';
import { Icon } from '@/shared/UBTConnectLibrary/Icon';
import { formatClasses, getClasses_AvatarSize } from '@/shared/UBTConnectLibrary/lib/actions';
import {
  UBT_Color,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_Shape,
  UBT_Size,
} from '@/shared/UBTConnectLibrary/lib/staticEntities';
import type { AvatarImageRecord } from './types';

export interface AvatarImageProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** In_AvatarImage: the photo URL, or the fallback (initials, SVG or icon) when the URL is empty. */
  inAvatarImage?: AvatarImageRecord;
  /** UBT_AvatarSize identifier. */
  inSizeId?: string;
  /** UBT_Shape identifier; default UBT_Shape.Circle. */
  inBorderRadius?: string;
}

const MAIN_CONTAINER_CLASS = 'ubt-avatar-image';

export function AvatarImage({
  id,
  inAvatarImage = {},
  inSizeId = '',
  inBorderRadius = UBT_Shape.Circle,
}: AvatarImageProps) {
  const extendedClasses = formatClasses(
    formatClasses(MAIN_CONTAINER_CLASS, 'inline-block'),
    getClasses_AvatarSize(inSizeId),
  );
  const url = inAvatarImage.URL ?? '';
  const fallback = inAvatarImage.FallbackOptions ?? {};
  const initials = fallback.Initials ?? '';
  return (
    <OSBlock name="ConnectPatterns.AvatarImage" id={id}>
      {url !== '' ? (
        <CustomContainer
          extendedClasses={extendedClasses}
          options={{
            BorderOptions: {
              Color: UBT_Color.Neutral5,
              Size: { GeneralSizeId: UBT_Size.Small },
              Radius: { GeneralSizeId: inBorderRadius },
            },
            IsSkeletonElement: true,
          }}
        >
          <img data-image="" src={url} />
        </CustomContainer>
      ) : (
        <CustomContainer
          extendedClasses={extendedClasses}
          options={{
            Background: { BackgroundColor: fallback.BackgroundColor ?? '' },
            BorderOptions: {
              Color: fallback.BorderColor ?? '',
              Size: { GeneralSizeId: fallback.BorderSize ?? '' },
              Radius: { GeneralSizeId: inBorderRadius },
            },
            TextOptions: {
              Color: fallback.FontColor ?? '',
              FontSize: fallback.FontSize ?? UBT_FontSize.Base,
              FontWeight: UBT_FontWeight.SemiBold,
            },
            IsSkeletonElement: true,
          }}
        >
          {initials !== '' ? (
            <span className={`${MAIN_CONTAINER_CLASS}__initials`} data-expression="">
              {initials}
            </span>
          ) : (fallback.SVG ?? '') !== '' ? (
            // The compiled view passes no input to InlineSVG (UBTConnectLibrary.ConnectPatterns.AvatarImage.mvc.js:341).
            <InlineSVG />
          ) : (
            <Icon inIconId={fallback.IconId ?? ''} inColorId={fallback.FontColor ?? ''} />
          )}
        </CustomContainer>
      )}
    </OSBlock>
  );
}
