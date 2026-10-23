import { OSLink } from '@/shared/lib/OSLink';
import { Connect_Entity, UBT_ImageSize } from '@/shared/UBTConnect_Utils/lib/staticEntities';
import { UBT_LazyImage } from '@/shared/UBTConnect_Utils/UBT_LazyImage';
import { Columns_Two } from '@/shared/UBTConnectLibrary/Columns_Two';
import { CustomContainer } from '@/shared/UBTConnectLibrary/CustomContainer';
import { CustomText } from '@/shared/UBTConnectLibrary/CustomText';
import {
  UBT_Color,
  UBT_ColumnBehaviour,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_Size,
} from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { SkeletonSection } from '@/shared/UBTConnectLibrary/SkeletonSection';

export interface MenuUserHeaderProps {
  /** The user record has not come yet: the skeleton shows. */
  isLoading: boolean;
  /** MemberID of the signed-in user ("0" until the user record has come). */
  memberId: string;
  /** The signed URL of the member photo ("" until the user record has come). */
  photoUrl: string;
  /** FullName of the signed-in user ("" until the user record has come). */
  fullName: string;
  /** The "Edit your account" link. */
  onEditYourAccount: () => void;
}

/** The header of the Menu screen (the container Header in a skeleton section): the avatar, the full name and the
    "Edit your account" link of the signed-in user.
    @origin UBTConnect.App_Menu.Menu */
export function MenuUserHeader({ isLoading, memberId, photoUrl, fullName, onEditYourAccount }: MenuUserHeaderProps) {
  return (
    <SkeletonSection id="$b4" inIsLoading={isLoading}>
      <CustomContainer
        id="Header"
        options={{ PaddingSize: { VerticalSizeId: UBT_Size.Small, HorizontalSizeId: UBT_Size.Base } }}
      >
        <Columns_Two
          id="$b6"
          columnOptions={{ ColumnBehaviour: UBT_ColumnBehaviour.ReduceFirst, SpacingSize: UBT_Size.Base }}
          left={
            <UBT_LazyImage
              id="$b7"
              entityId={memberId}
              imageSize={{ Height: UBT_ImageSize.Small_40, Width: UBT_ImageSize.Square }}
              entityType={Connect_Entity.Member}
              imageURL={photoUrl}
            />
          }
          right={
            <>
              <div data-container="">
                <CustomText
                  id="$b8"
                  inText={fullName}
                  inTextOptions={{
                    Color: UBT_Color.Neutral9,
                    FontSize: UBT_FontSize.Base,
                    FontWeight: UBT_FontWeight.SemiBold,
                  }}
                />
              </div>
              <OSLink onClick={onEditYourAccount}>
                <CustomText
                  id="$b9"
                  inText="Edit your account"
                  inTextOptions={{
                    Color: UBT_Color.Primary,
                    FontSize: UBT_FontSize.ExtraSmall,
                    FontWeight: UBT_FontWeight.SemiBold,
                    IsUnderlined: true,
                  }}
                />
              </OSLink>
            </>
          }
        />
      </CustomContainer>
    </SkeletonSection>
  );
}
