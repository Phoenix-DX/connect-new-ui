import { Connect_Entity, UBT_FontWeight, UBT_Icons2 } from '@/shared/UBTConnect/lib/staticEntities';
import { UBT_LazyImage } from '@/shared/UBTConnect_Utils/UBT_LazyImage';
import { UBT_ImageSize } from '@/shared/UBTConnect_Utils/lib/staticEntities';
import { Columns_Three } from '@/shared/UBTConnectLibrary/Columns_Three';
import { CustomContainer } from '@/shared/UBTConnectLibrary/CustomContainer';
import { CustomText } from '@/shared/UBTConnectLibrary/CustomText';
import { Icon } from '@/shared/UBTConnectLibrary/Icon';
import { IconText } from '@/shared/UBTConnectLibrary/IconText';
import {
  UBT_Color,
  UBT_ColumnBehaviour,
  UBT_FontSize,
  UBT_IconsSize,
  UBT_Size,
} from '@/shared/UBTConnectLibrary/lib/staticEntities';

export interface ContactPersonCardProps {
  /** Entity type of the avatar (UBT_LazyImage EntityType); "" → Connect_Entity.Member. */
  entityType: string;
  /** Entity id of the avatar (a Long Integer kept as a string). */
  entityId: string;
  /** URL of the avatar image. */
  avatarURL: string;
  /** The name line. */
  name: string;
  /** The locality line: `locality` + ", " (when both are not "") + `country`. */
  locality: string;
  country: string;
}

/** @origin UBTConnect.ContactFlow.ContactByEmailMember
    The person card in Placeholder_ContactCard of the ContactByEmail form. ContactByEmailOrbitHost has the same markup
    (duplicates.md, group 1). CustomContainer (padding x XS) > Columns_Three (expand middle): left the avatar
    (UBT_LazyImage Base_52 / Square in a container "ubt-object-fit-avatar-img", padding right Base), middle the name
    (CustomText Base / SemiBold) and the locality line (IconText home_pin, Neutral7 / XS, spacing XS), right empty.
    The blocks keep the instance ids of the screens ($b3 to $b9, the same in both). */
export function ContactPersonCard({
  entityType,
  entityId,
  avatarURL,
  name,
  locality,
  country,
}: ContactPersonCardProps) {
  const localityLine = locality + (locality !== '' && country !== '' ? ', ' : '') + country;
  return (
    <CustomContainer id="$b3" options={{ PaddingSize: { HorizontalSizeId: UBT_Size.ExtraSmall } }}>
      <Columns_Three
        id="$b4"
        columnOptions={{ ColumnBehaviour: UBT_ColumnBehaviour.ExpandMiddle }}
        left={
          <CustomContainer
            id="$b5"
            extendedClasses="ubt-object-fit-avatar-img"
            options={{ PaddingSize: { RightSizeId: UBT_Size.Base } }}
          >
            <UBT_LazyImage
              id="$b6"
              entityType={entityType === '' ? Connect_Entity.Member : entityType}
              entityId={entityId}
              imageSize={{ Height: UBT_ImageSize.Base_52, Width: UBT_ImageSize.Square }}
              imageURL={avatarURL}
            />
          </CustomContainer>
        }
        middle={
          <>
            <CustomText
              id="$b7"
              inTextOptions={{ FontSize: UBT_FontSize.Base, FontWeight: UBT_FontWeight.SemiBold }}
              inText={name}
            />
            <IconText
              id="$b8"
              text={localityLine}
              textOptions={{ Color: UBT_Color.Neutral7, FontSize: UBT_FontSize.ExtraSmall }}
              spacingSize={UBT_Size.ExtraSmall}
            >
              <Icon
                id="$b9"
                inIconId={UBT_Icons2.HomePIn}
                inColorId={UBT_Color.Neutral7}
                inSizeId={UBT_IconsSize.NonStandard_14}
              />
            </IconText>
          </>
        }
      />
    </CustomContainer>
  );
}
