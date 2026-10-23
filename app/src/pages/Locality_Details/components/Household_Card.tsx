// @os-block UBTConnect.Directory_Household_Blocks.Household_Card
import { useEffect, useState } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { raiseToFlowHandler } from '@/legacy/os/exceptions';
import { Icon } from '@/shared/UBTConnectLibrary/Icon';
import { IconText } from '@/shared/UBTConnectLibrary/IconText';
import { ImageCard_LazyLoading } from '@/shared/UBTConnectLibrary/ImageCard_LazyLoading';
import { ImageCard__Content } from '@/shared/UBTConnectLibrary/ImageCard__Content';
import {
  UBT_Color,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_IconSize,
  UBT_ImageCardType,
  UBT_ImageSize,
  UBT_Size,
} from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { SkeletonSection } from '@/shared/UBTConnectLibrary/SkeletonSection';
import { Connect_Entity, UBT_ImageSize as UBT_ImageSize_Utils } from '@/shared/UBTConnect_Utils/lib/staticEntities';
import { UBT_LazyImage } from '@/shared/UBTConnect_Utils/UBT_LazyImage';
import { getMembers } from '@/pages/Locality_Details/api';
import type { HouseholdMembers, LazyImageItem, LocalityHousehold } from '@/pages/Locality_Details/types';
import { UBT_Icons2_Locality } from './staticEntities';
import { UBT_LazyImage_List } from './UBT_LazyImage_List';

export interface Household_CardProps {
  id?: string;
  household: LocalityHousehold;
  /** Event_OnClickHousehold(HouseholdId). */
  onEventOnClickHousehold?: (householdId: string) => void;
}

/** OnReady / OnParametersChanged: ListClear, then two skeleton members (EntityId "", EntityType Member). */
const SKELETON_MEMBERS: LazyImageItem[] = [
  { imageURL: '', entityId: '', entityType: Connect_Entity.Member },
  { imageURL: '', entityId: '', entityType: Connect_Entity.Member },
];

/** Directory_Household_Blocks.Household_Card (p:UBTConnect.Directory_Household_Blocks.Household_Card.mvc.js view
    :160-300, controller :330-460): ImageCard_LazyLoading (List type, "bookmark--rounded", avatar list shown, extended
    "padding-bottom-s", bookmarked = Household.IsBookmarked; Event_Click raises Event_OnClickHousehold(HouseholdId)) with
    the household UBT_LazyImage (MaxWidth_100vw, error message), the members' UBT_LazyImage_List (MaxLimit
    VisibleAvatars, InvertOrder, height Small_40) under a skeleton until GetMembers is fetched, and ImageCard__Content
    (HouseholdName, ChildrenNames shown when not empty, "<LocalityName>, <CountryName>" with the HomePinFill icon).
    OnReady and OnParametersChanged (not restored from cache): skeleton members, then GetMembers unless HouseholdId is
    NullIdentifier. */
export function Household_Card({ id, household, onEventOnClickHousehold }: Household_CardProps) {
  const parameters = JSON.stringify(household);
  const [fetched, setFetched] = useState<{ parameters: string; data: HouseholdMembers } | null>(null);
  useEffect(() => {
    if (household.householdId === '0') return;
    let alive = true;
    getMembers(household).then((data) => {
      if (alive) setFetched({ parameters, data });
    }, raiseToFlowHandler);
    return () => {
      alive = false;
    };
    // Refresh on a new Household value (OnParametersChanged compares by value).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [parameters]);

  const isDataFetched = fetched !== null; // GetMembers.IsDataFetched stays True after the first fetch
  const current = fetched?.parameters === parameters ? fetched.data : null;
  const members = current?.members ?? SKELETON_MEMBERS;
  const visibleAvatars = fetched?.data.visibleAvatars ?? 0;
  const b = id?.replace('$', '') ?? '';
  return (
    <OSBlock name="Directory_Household_Blocks.Household_Card" id={id}>
      <ImageCard_LazyLoading
        id={`${b}-$b1`}
        inCardTypeId={UBT_ImageCardType.List}
        inBookmarkModifier="bookmark--rounded"
        inShowAvatarList
        inExtendedClass="padding-bottom-s"
        inIsBookmarked={household.isBookmarked}
        onEventClick={() => onEventOnClickHousehold?.(household.householdId)}
        lazyImagePlaceholder={
          <UBT_LazyImage
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
          <ImageCard__Content
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
