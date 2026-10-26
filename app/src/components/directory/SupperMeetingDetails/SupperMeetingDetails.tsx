/** @origin UBTConnect.Directory_SupperMeetings.SupperMeeting_DetailsBlock */
import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { ImageCard } from '@/components/ui/ImageCard';
import { UBT_ImageCardType, UBT_ImageSize } from '@/lib/ubtConnectLibrary/staticEntities';
import { Skeleton } from '@/components/ui/Skeleton';
import { EntityLazyImage } from '@/components/ui/EntityLazyImage';
import { get_LookupSection } from '@/lib/ubtConnect/actions';
import { Connect_Entity } from '@/lib/ubtConnect/staticEntities';
import type { UI_Screen_SubdivisionDetails, UI_SubdivisionHousehold } from '@/lib/ubtConnect/structures';
import { DirectoryDetailLayout } from '@/components/layout/DirectoryDetailLayout';
import { DirectoryDetailSection } from '@/components/layout/DirectoryDetailSection';
import { SupperMeetingHouseholdList } from '@/components/directory/SupperMeetingHouseholdList';
import { SupperMeetingCardContent } from '@/components/directory/SupperMeetingCardContent';

/** GetSubdivisionHouseholds of the household list (SupperMeeting_HouseholdList). */
export interface SupperMeetingDetailsHouseholds {
  /** IsDataFetched: false shows the skeleton rows. */
  isDataFetched: boolean;
  /** The data fetch status is Error. */
  isError: boolean;
  /** The rows: the skeleton rows until the data action answers. */
  list: UI_SubdivisionHousehold[];
}

export interface SupperMeetingDetailsProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** GetSubdivision.IsDataFetched: until it is true, the detail card and the actions are skeleton sections. */
  isDataFetched: boolean;
  /** GetSubdivision.Subdivision: GetSkeleton_UI_SubdivisionDetails until the data action answers. */
  subdivision: UI_Screen_SubdivisionDetails;
  /** The household list (SupperMeeting_HouseholdList "Block_Household_List"). */
  households: SupperMeetingDetailsHouseholds;
  /** Placeholder Placeholder_CarouselTag (inside the card's image tag). */
  placeholderCarouselTag?: ReactNode;
  /** Directory_EntityDetailsActions of the supper meeting (a container: the caller fills the slot). */
  entityActions?: ReactNode;
  /** Event_OnClick_Household(HouseholdId, HouseholdIdList) of the household list. */
  onHouseholdClick?: (householdId: string, householdIdList: string[]) => void;
}

/** Details of a supper meeting, props only. SubLayout_DirectoryDetailScreen:
    - detail card: SkeletonSection (not IsDataFetched) > ImageCard_LazyLoading (Detail) with the subdivision photo
      (UBT_LazyImage, error message, width MaxWidth_100vw), Placeholder_CarouselTag and SupperMeeting_ImageCard_Content
      (address shown);
    - call to action: SkeletonSection > Container > section titled Get_LookupSection(False).Actions.Plural >
      Directory_EntityDetailsActions (the `entityActions` slot);
    - content: SupperMeeting_HouseholdList.
    The data and the navigation are in the container `containers/SupperMeetingDetails`. */
export function SupperMeetingDetails({
  id,
  isDataFetched,
  subdivision,
  households,
  placeholderCarouselTag,
  entityActions,
  onHouseholdClick,
}: SupperMeetingDetailsProps) {
  const isLoading = !isDataFetched;
  const card = subdivision.Subdivision_Card ?? {};
  const content = card.Subdivision_Card_Content ?? {};
  return (
    <OSBlock name="Directory_SupperMeetings.SupperMeeting_DetailsBlock" id={id}>
      <DirectoryDetailLayout
        placeholderDetailCard={
          <Skeleton isLoading={isLoading}>
            <ImageCard
              inCardTypeId={UBT_ImageCardType.Detail}
              lazyImagePlaceholder={
                <EntityLazyImage
                  entityType={Connect_Entity.SupperMeetings_aka_Subdivisions}
                  hasErrorMessage
                  entityId={card.SubdivisionId ?? '0'}
                  imageSize={{ Width: UBT_ImageSize.MaxWidth_100vw }}
                />
              }
              placeholderImageTag={<div>{placeholderCarouselTag}</div>}
              placeholderContent={<SupperMeetingCardContent inShowAddress inSubdivisionCardContent={content} />}
            />
          </Skeleton>
        }
        placeholderCallToAction={
          <Skeleton isLoading={isLoading}>
            <div data-container="">
              <DirectoryDetailSection inTitle={get_LookupSection(false).Actions.Plural}>
                {entityActions}
              </DirectoryDetailSection>
            </div>
          </Skeleton>
        }
        placeholderContent={
          <SupperMeetingHouseholdList
            isDataFetched={households.isDataFetched}
            isError={households.isError}
            households={households.list}
            onEventOnClickHousehold={onHouseholdClick}
          />
        }
      />
    </OSBlock>
  );
}
