// @os-block UBTConnect.Directory_SupperMeetings.SupperMeeting_HouseholdList
import { useEffect, useState } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { DataFetchStatus } from '@/components/ui/os/OSList';
import { Household_GalleryCard_List } from '@/shared/UBTConnect/Household_GalleryCard_List';
import { getSkeletonList_UI_SubdivisionHousehold } from '@/shared/UBTConnect/lib/actions';
import type { UI_SubdivisionHousehold } from '@/shared/UBTConnect/lib/structures';
import { getSubdivisionHouseholds } from './api';

export interface SupperMeeting_HouseholdListProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** In_SubdivisionId (Long Integer as text). */
  inSubdivisionId?: string;
  /** Event Event_OnClick_Household(HouseholdId, HouseholdIdList): the ids of every listed household. */
  onEventOnClickHousehold?: (householdId: string, householdIdList: string[]) => void;
}

interface GetSubdivisionHouseholds {
  isDataFetched: boolean;
  isError: boolean;
  list: UI_SubdivisionHousehold[];
}

/** Households of a supper meeting (p:migration/screens/SupperMeeting_Carousel/analysis/sources/pretty/
    UBTConnect.Directory_SupperMeetings.SupperMeeting_HouseholdList.mvc.js:168-208, controller :235-345):
    Household_GalleryCard_List of DataActionGetSubdivisionHouseholds, loading until it is fetched. OnReady (not
    restored from cache): the list is GetSkeletonList_UI_SubdivisionHousehold(4), then the data action is refreshed
    (fetch on demand only; OnParametersChanged none, so In_SubdivisionId is read once). A card click raises
    Event_OnClick_Household(HouseholdId, the HouseholdId of every row). */
export function SupperMeeting_HouseholdList({
  id,
  inSubdivisionId = '0',
  onEventOnClickHousehold,
}: SupperMeeting_HouseholdListProps) {
  const [subdivisionId] = useState(inSubdivisionId);
  const [households, setHouseholds] = useState<GetSubdivisionHouseholds>(() => ({
    isDataFetched: false,
    isError: false,
    list: getSkeletonList_UI_SubdivisionHousehold(4),
  }));
  useEffect(() => {
    let alive = true;
    getSubdivisionHouseholds(subdivisionId).then(
      (list) => {
        if (alive) setHouseholds({ isDataFetched: true, isError: false, list });
      },
      () => {
        // The data fetch status becomes Error; IsDataFetched stays False (the skeleton rows stay).
        if (alive) setHouseholds((state) => ({ ...state, isError: true }));
      },
    );
    return () => {
      alive = false;
    };
  }, [subdivisionId]);

  return (
    <OSBlock name="Directory_SupperMeetings.SupperMeeting_HouseholdList" id={id}>
      <Household_GalleryCard_List
        inIsLoading={!households.isDataFetched}
        inHouseholdGalleryCardList={households.list}
        inHouseholdGalleryCardListDataFetchStatus={
          // calculateDataFetchStatus(GetSubdivisionHouseholds.DataFetchStatus) (p:SupperMeeting_HouseholdList.mvc.js:172)
          households.isError
            ? DataFetchStatus.Error
            : households.isDataFetched
              ? DataFetchStatus.Fetched
              : DataFetchStatus.Fetching
        }
        onEventOnClickHouseholdGalleryCard={(householdId) =>
          onEventOnClickHousehold?.(
            householdId,
            households.list.map((household) => household.HouseholdId ?? '0'),
          )
        }
      />
    </OSBlock>
  );
}
