import type { AvatarImageFallbackoptions, LazyImageSize, SpacingOptions } from '../../UBTConnectLibrary/lib/structures';
import { getEntityType_Icon, getImageType_FromEntity } from '../lib/actions';
import {
  Connect_Entity,
  ImageSize,
  UBT_Color,
  UBT_FontSize,
  UBT_IconSize,
  UBT_ImageSize,
  UBT_Shape,
  UBT_Size,
} from '../lib/staticEntities';

export interface LazyImageLocals {
  fallbackOptions: AvatarImageFallbackoptions;
  fallbackPadding: SpacingOptions;
  borderRadius: string;
  borderColorId: string;
  borderSizeId: string;
  /** ImageSize identifier sent with the signed-image request ("" when no size matched and In_HighRes). */
  imageSizeId: string;
  imageType: string;
}

interface SizeStep {
  fontSize: string;
  iconSizeId?: string;
  image: string;
}

const S = UBT_ImageSize;
const F = UBT_FontSize;
const I = UBT_IconSize;
/* Size Height switch (UBT_LazyImage.mvc.js:441-516): font and icon size of the fallback, then SmallImage (XS, S, Base),
   MediumImage (Medium, Large) or LargeImage (the rest). */
const HEIGHT: Record<string, SizeStep> = {
  [S.ExtraSmall_32]: { fontSize: F.ExtraSmall, iconSizeId: I.Medium_20, image: ImageSize.Small },
  [S.Small_40]: { fontSize: F.Small, iconSizeId: I.Base_24, image: ImageSize.Small },
  [S.Base_52]: { fontSize: F.Base, iconSizeId: I.NonStandard_32, image: ImageSize.Small },
  [S.Medium_60]: { fontSize: F.Heading6, iconSizeId: I.Display_36, image: ImageSize.Medium },
  [S.Large_65]: { fontSize: F.Heading4, iconSizeId: I.Display_36, image: ImageSize.Medium },
  [S.ExtraLarge_100]: { fontSize: F.Heading2, iconSizeId: I.NonStandard_64, image: ImageSize.Large },
  [S.DoubleExtraLarge_176]: { fontSize: F.Display, iconSizeId: I.NonStandard_108, image: ImageSize.Large },
  [S.FullHeight_100_Percent]: { fontSize: F.Display, image: ImageSize.Large },
  [S.MaxHeight_100vh]: { fontSize: F.Display, image: ImageSize.Large },
};
/* Size Width switch (:517-574), reached when no height matched: font size only; no match jumps past the image size. */
const WIDTH: Record<string, SizeStep> = {
  [S.ExtraSmall_32]: { fontSize: F.ExtraSmall, image: ImageSize.Small },
  [S.Small_40]: { fontSize: F.Small, image: ImageSize.Small },
  [S.Base_52]: { fontSize: F.Base, image: ImageSize.Small },
  [S.Medium_60]: { fontSize: F.Heading6, image: ImageSize.Medium },
  [S.Large_65]: { fontSize: F.Heading4, image: ImageSize.Medium },
  [S.ExtraLarge_100]: { fontSize: F.Heading2, image: ImageSize.Large },
  [S.DoubleExtraLarge_176]: { fontSize: F.Display, image: ImageSize.Large },
  [S.FullWidth_100_Percent]: { fontSize: F.Display, image: ImageSize.Large },
  [S.MaxWidth_100vw]: { fontSize: F.Display, image: ImageSize.Large },
};

/** OnInitialize of UBT_LazyImage (:381-717): fallback options, padding, border and the requested image size. */
export function onInitialize(
  entityType: string,
  imageSize: LazyImageSize,
  hasErrorMessage: boolean,
  inHighRes: boolean,
  inBorderRadius: string,
): LazyImageLocals {
  const iconId = getEntityType_Icon(entityType);
  const fallbackOptions: AvatarImageFallbackoptions = {
    Initials: '',
    SVG: '',
    Message: hasErrorMessage ? 'Sorry, no photo available' : '',
    IconId: iconId,
    BackgroundColor: UBT_Color.CyanLightest,
    FontColor: UBT_Color.CyanDarker,
    FontSize: F.Display,
    BorderColor: '',
    BorderSize: UBT_Size.None,
    IconSizeId: '',
  };
  const step = HEIGHT[imageSize.Height ?? ''] ?? WIDTH[imageSize.Width ?? ''];
  let imageSizeId = '';
  if (step) {
    fallbackOptions.FontSize = step.fontSize;
    if (step.iconSizeId !== undefined) fallbackOptions.IconSizeId = step.iconSizeId;
    imageSizeId = step.image;
    if (step.image !== ImageSize.Large) fallbackOptions.Message = '';
  }
  if (!inHighRes) imageSizeId = ImageSize.Medium;
  let borderRadius: string = UBT_Shape.None;
  let borderColorId = '';
  let borderSizeId = '';
  if (inBorderRadius !== '') borderRadius = inBorderRadius;
  if (entityType === Connect_Entity.Member) {
    borderRadius = UBT_Shape.Circle;
    fallbackOptions.BorderSize = UBT_Size.Small;
    fallbackOptions.BorderColor = UBT_Color.Neutral3;
    borderColorId = UBT_Color.Neutral3;
    borderSizeId = UBT_Size.Small;
  }
  return {
    fallbackOptions,
    fallbackPadding: {
      GeneralSizeId: UBT_Size.Base,
      VerticalSizeId: '',
      HorizontalSizeId: '',
      TopSizeId: '',
      BottomSizeId: '',
      LeftSizeId: '',
      RightSizeId: '',
    },
    borderRadius,
    borderColorId,
    borderSizeId,
    imageSizeId,
    imageType: getImageType_FromEntity(entityType),
  };
}
