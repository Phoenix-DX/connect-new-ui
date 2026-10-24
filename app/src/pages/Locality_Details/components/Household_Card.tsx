import type { LocalityHousehold } from '@/api/household';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { Icon } from '@/components/ui/Icon';
import { IconText } from '@/components/ui/IconText';
import { ImageCard } from '@/components/ui/ImageCard';
import { ImageCardContent } from '@/components/ui/ImageCardContent';
import {
  UBT_Color,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_IconSize,
  UBT_ImageCardType,
  UBT_ImageSize,
  UBT_Size,
} from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { SkeletonSection } from '@/components/ui/SkeletonSection';
import { Connect_Entity, UBT_ImageSize as UBT_ImageSize_Utils } from '@/shared/UBTConnect_Utils/lib/staticEntities';
import { EntityLazyImage } from '@/components/ui/EntityLazyImage';
import { useHouseholdCardMembers } from '@/pages/Locality_Details/hooks/useHouseholdCardMembers';
import { UBT_Icons2_Locality } from './staticEntities';
import { UBT_LazyImage_List } from './UBT_LazyImage_List';

export interface Household_CardProps {
  id?: string;
  household: LocalityHousehold;
  /** Event_OnClickHousehold(HouseholdId). */
  onEventOnClickHousehold?: (householdId: string) => void;
}

/** A household card: ImageCard_LazyLoading (List type, "bookmark--rounded", avatar list shown, extended
    "padding-bottom-s", bookmarked = Household.IsBookmarked; Event_Click raises Event_OnClickHousehold(HouseholdId))
    with the household UBT_LazyImage (MaxWidth_100vw, error message), the members' UBT_LazyImage_List (MaxLimit
    VisibleAvatars, InvertOrder, height Small_40) under a skeleton until GetMembers is fetched, and ImageCard__Content
    (HouseholdName, ChildrenNames shown when not empty, "<LocalityName>, <CountryName>" with the HomePinFill icon).
    The data action GetMembers is in useHouseholdCardMembers.
    @origin UBTConnect.Directory_Household_Blocks.Household_Card */
export function Household_Card({ id, household, onEventOnClickHousehold }: Household_CardProps) {
  const { isDataFetched, members, visibleAvatars } = useHouseholdCardMembers(household);
  const b = id?.replace('$', '') ?? '';
  return (
    <OSBlock name="Directory_Household_Blocks.Household_Card" id={id}>
      <ImageCard
        id={`${b}-$b1`}
        inCardTypeId={UBT_ImageCardType.List}
        inBookmarkModifier="bookmark--rounded"
        inShowAvatarList
        inExtendedClass="padding-bottom-s"
        inIsBookmarked={household.isBookmarked}
        onEventClick={() => onEventOnClickHousehold?.(household.householdId)}
        lazyImagePlaceholder={
          <EntityLazyImage
            id={`${b}-$b2`}
            hasErrorMessage
            entityType={Connect_Entity.Household}
            imageSize={{ Width: UBT_ImageSize.MaxWidth_100vw }}
            entityId={household.householdId}
          />
        }
        avatarList={
          <SkeletonSection id={`${b}-$b3`} inIsLoading={!isDataFetched}>
            <UBT_LazyImage_List
              id={`${b}-$b4`}
              maxLimit={visibleAvatars}
              items={members}
              invertOrder
              imageSizeHeight={UBT_ImageSize_Utils.Small_40}
            />
          </SkeletonSection>
        }
        placeholderContent={
          <ImageCardContent
            id={`${b}-$b5`}
            inShowSubtitle={household.childrenNames !== ''}
            inTitle={household.householdName}
            inSubtitle={household.childrenNames}
            placeholderBottomSectionContent={
              <IconText
                id={`${b}-$b6`}
                text={`${household.localityName}, ${household.countryName}`}
                spacingSize={UBT_Size.ExtraSmall}
                textOptions={{
                  Color: UBT_Color.Neutral7,
                  FontSize: UBT_FontSize.ExtraSmall,
                  FontWeight: UBT_FontWeight.SemiBold,
                }}
              >
                <Icon
                  id={`${b}-$b7`}
                  inIconId={UBT_Icons2_Locality.HomePinFill}
                  inColorId={UBT_Color.Neutral7}
                  inSizeId={UBT_IconSize.Small_12}
                />
              </IconText>
            }
          />
        }
      />
    </OSBlock>
  );
}
