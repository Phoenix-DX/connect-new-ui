/** @origin UBTConnect.Directory_SupperMeetings.SupperMeeting_HouseholdList */
import { OSBlock } from '@/components/ui/os/OSBlock';
import { DataFetchStatus } from '@/components/ui/os/OSList';
import { HouseholdGalleryCardList } from '@/components/household/HouseholdGalleryCardList';
import type { UI_SubdivisionHousehold } from '@/shared/UBTConnect/lib/structures';

const NO_HOUSEHOLDS: UI_SubdivisionHousehold[] = [];

export interface SupperMeetingHouseholdListProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** GetSubdivisionHouseholds.IsDataFetched: false shows the skeleton rows. */
  isDataFetched?: boolean;
  /** The data fetch status of GetSubdivisionHouseholds is Error. */
  isError?: boolean;
  /** GetSubdivisionHouseholds.List: the skeleton rows (GetSkeletonList_UI_SubdivisionHousehold(4)) until the data
      action answers. */
  households?: UI_SubdivisionHousehold[];
  /** Event Event_OnClick_Household(HouseholdId, HouseholdIdList): the ids of every listed household. */
  onEventOnClickHousehold?: (householdId: string, householdIdList: string[]) => void;
}

/** Households of a supper meeting, props only: Household_GalleryCard_List of DataActionGetSubdivisionHouseholds,
    loading until it is fetched. A card click raises Event_OnClick_Household(HouseholdId, the HouseholdId of every
    row). The data action is refreshed by the container `containers/SupperMeetingDetails`. */
export function SupperMeetingHouseholdList({
  id,
  isDataFetched = false,
  isError = false,
  households = NO_HOUSEHOLDS,
  onEventOnClickHousehold,
}: SupperMeetingHouseholdListProps) {
  return (
    <OSBlock name="Directory_SupperMeetings.SupperMeeting_HouseholdList" id={id}>
      <HouseholdGalleryCardList
        inIsLoading={!isDataFetched}
        inHouseholdGalleryCardList={households}
        inHouseholdGalleryCardListDataFetchStatus={
          // calculateDataFetchStatus(GetSubdivisionHouseholds.DataFetchStatus)
          isError ? DataFetchStatus.Error : isDataFetched ? DataFetchStatus.Fetched : DataFetchStatus.Fetching
        }
        onEventOnClickHouseholdGalleryCard={(householdId) =>
          onEventOnClickHousehold?.(
            householdId,
            households.map((household) => household.HouseholdId ?? '0'),
          )
        }
      />
    </OSBlock>
  );
}
