import {
  FONT_SIZE_HEADING2,
  ICON_ID_CARD,
  ICONS_SIZE_MEDIUM_20,
  IMAGE_SIZE_DOUBLE_EXTRA_LARGE_176,
} from '@/pages/Profile/staticEntities';
import { Connect_Entity } from '@/shared/UBTConnect_Utils/lib/staticEntities';
import { EntityLazyImage } from '@/components/ui/EntityLazyImage';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { CustomText } from '@/components/ui/CustomText';
import { Icon } from '@/components/ui/Icon';
import { IconText } from '@/components/ui/IconText';
import {
  UBT_AlignItems,
  UBT_Color,
  UBT_Display,
  UBT_FlexDirection,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_ImageSize,
  UBT_Size,
} from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { textOptions } from './formOptions';

export interface ProfileHeaderProps {
  /** MemberID of the signed-in user ("0" until the user record has come). */
  memberId: string;
  /** The signed URL of the member photo ("" until the user record has come). */
  photoUrl: string;
  /** FullName of the signed-in user ("" until the user record has come). */
  fullName: string;
  /** The "Preview Household Profile" link. */
  onViewPreview: () => void;
}

const HEADER_OPTIONS = {
  PaddingSize: { HorizontalSizeId: UBT_Size.Base, TopSizeId: UBT_Size.Medium, BottomSizeId: UBT_Size.Base },
  DisplayOptions: {
    Display: UBT_Display.Flex,
    AlignItems: UBT_AlignItems.Center,
    FlexDirection: UBT_FlexDirection.Column,
  },
};

/** The header of the Profile screen (the container Header): the photo and the full name of the signed-in user, and
    the "Preview Household Profile" link.
    @origin UBTConnect.App_Profile.Profile */
export function ProfileHeader({ memberId, photoUrl, fullName, onViewPreview }: ProfileHeaderProps) {
  return (
    <CustomContainer id="Header" options={HEADER_OPTIONS}>
      <EntityLazyImage
        id="$b6"
        entityId={memberId}
        imageSize={{ Height: IMAGE_SIZE_DOUBLE_EXTRA_LARGE_176, Width: UBT_ImageSize.Square }}
        entityType={Connect_Entity.Member}
        imageURL={photoUrl}
      />
      <CustomText
        id="NameText"
        extendedClasses="padding-y-s"
        inText={fullName}
        inTextOptions={textOptions(UBT_Color.Neutral8, FONT_SIZE_HEADING2, UBT_FontWeight.SemiBold)}
      />
      <CustomContainer
        id="ViewPreview"
        options={{ PaddingSize: { GeneralSizeId: UBT_Size.Small }, IsInlineBlock: true }}
        onClicked={onViewPreview}
      >
        <IconText
          id="$b9"
          text="Preview Household Profile"
          textOptions={textOptions(UBT_Color.Primary, UBT_FontSize.Base, UBT_FontWeight.SemiBold)}
        >
          <Icon id="$b10" inSizeId={ICONS_SIZE_MEDIUM_20} inIconId={ICON_ID_CARD} inColorId={UBT_Color.Primary} />
        </IconText>
      </CustomContainer>
    </CustomContainer>
  );
}
