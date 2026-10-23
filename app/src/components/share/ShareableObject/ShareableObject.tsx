/** @origin UBTConnect_Utils.CW_Share.ShareableObject_Generic */
// @os-block UBTConnect_Utils.CW_Share.ShareableObject_Generic
import { OSBlock } from '@/components/ui/os/OSBlock';
import { CustomContainer } from '@/shared/UBTConnectLibrary/CustomContainer';
import { CustomText } from '@/shared/UBTConnectLibrary/CustomText';
import { Icon } from '@/shared/UBTConnectLibrary/Icon';
import { IconText } from '@/shared/UBTConnectLibrary/IconText';
import {
  UBT_Color,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_IconSize,
  UBT_Icons,
  UBT_ImageSize,
  UBT_Shape,
  UBT_Size,
} from '@/shared/UBTConnect_Utils/lib/staticEntities';
import { UBT_LazyImage } from '@/shared/UBTConnect_Utils/UBT_LazyImage';
import type { UI_ShareableObject_Generic } from './types';

export interface ShareableObjectProps {
  /** OutSystems instance id of the block. */
  id?: string;
  inShareableObject?: UI_ShareableObject_Generic;
  /** Event Event_OnClick (click on the text container). */
  onEventOnClick?: () => void;
}

/* Local variables with their defaults (ShareableObject_Generic.mvc.js:12-17): ImageWidth Auto, BorderRadius Medium. */
const IMAGE_WIDTH = UBT_ImageSize.Auto;
const BORDER_RADIUS = UBT_Shape.Medium;
const HIGHLIGHT = { Color: UBT_Color.Primary, FontWeight: UBT_FontWeight.Bold };

/** Image, then title, optional subtitle and optional location (ShareableObject_Generic.mvc.js view, 133-398). */
export function ShareableObject({ id, inShareableObject = {}, onEventOnClick }: ShareableObjectProps) {
  const subtitle = inShareableObject.Subtitle ?? '';
  const location = inShareableObject.Location ?? '';
  return (
    <OSBlock name="CW_Share.ShareableObject_Generic" id={id}>
      <div className="shareable-object-generic" data-container="">
        <UBT_LazyImage
          inBorderRadius={BORDER_RADIUS}
          imageURL={inShareableObject.SignedURL ?? ''}
          entityType={inShareableObject.ConnectEntityTypeId ?? ''}
          imageSize={{ Height: UBT_ImageSize.Auto, Width: IMAGE_WIDTH }}
          entityId={inShareableObject.Id ?? ''}
        />
        <div
          className="text-align-left margin-top-base"
          data-container=""
          style={{ cursor: 'pointer' }}
          onClick={onEventOnClick}
        >
          <CustomText
            inTextOptions={{
              Color: UBT_Color.Neutral10,
              FontSize: UBT_FontSize.Small,
              FontWeight: UBT_FontWeight.SemiBold,
            }}
            inHighlightOptions={HIGHLIGHT}
            inText={inShareableObject.Title ?? ''}
            inHighlightWords=""
          />
          {subtitle !== '' && (
            <CustomText
              inHighlightWords=""
              inText={subtitle}
              inHighlightOptions={HIGHLIGHT}
              inTextOptions={{
                Color: UBT_Color.Neutral7,
                FontSize: UBT_FontSize.ExtraSmall,
                FontWeight: UBT_FontWeight.Regular,
              }}
            />
          )}
          {location !== '' && (
            <CustomContainer options={{ PaddingSize: { TopSizeId: UBT_Size.Small } }}>
              <IconText
                text={location}
                textOptions={{
                  Color: UBT_Color.Neutral7,
                  FontSize: UBT_FontSize.ExtraSmall,
                  FontWeight: UBT_FontWeight.SemiBold,
                }}
                spacingSize={UBT_Size.ExtraSmall}
              >
                <Icon
                  inColorId={UBT_Color.Neutral7}
                  inSizeId={UBT_IconSize.Small_12}
                  inIconId={UBT_Icons.HomePinFill}
                />
              </IconText>
            </CustomContainer>
          )}
        </div>
      </div>
    </OSBlock>
  );
}
