import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList } from '@/components/ui/os/OSList';
import { DirectoryEmptyState } from '@/components/directory/DirectoryEmptyState';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { UBT_Color, UBT_Size } from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { Skeleton } from '@/components/ui/Skeleton';
import { Connect_Entity } from '@/shared/UBTConnect_Utils/lib/staticEntities';
import {
  useLocalityHouseholdList,
  type LocalityHouseholdListFlags,
} from '@/pages/Locality_Details/hooks/useLocalityHouseholdList';
import { Household_Card } from './Household_Card';

export interface Locality_Households_HouseholdListProps {
  id?: string;
  /** In_LocalityId (Long Integer as text). */
  inLocalityId?: string;
  /** Event_NavigateToHouseholdDetails(HouseholdId). */
  onEventNavigateToHouseholdDetails?: (householdId: string) => void;
  /** The flags of the flows, which the page reads. */
  flags: LocalityHouseholdListFlags;
}

/** The household list of a locality: a CustomContainer (Neutral0, horizontal padding Base) with a skeleton until
    GetLocalityHouseholds is fetched; Directory_EmptyState (Household) for an empty list, otherwise the List
    "locality_Households" ("list list-group list--gap-s") of Household_Card. The flows are in
    useLocalityHouseholdList.
    @origin UBTConnect.Directory_Locality.Locality_Households_HouseholdList */
export function Locality_Households_HouseholdList({
  id,
  inLocalityId = '0',
  onEventNavigateToHouseholdDetails,
  flags,
}: Locality_Households_HouseholdListProps) {
  const { isDataFetched, list, onClickHousehold } = useLocalityHouseholdList(
    inLocalityId,
    { onEventNavigateToHouseholdDetails },
    flags,
  );
  const b = id?.replace('$', '') ?? '';
  return (
    <OSBlock name="Directory_Locality.Locality_Households_HouseholdList" id={id}>
      <CustomContainer
        id={`${b}-$b1`}
        options={{
          Background: { BackgroundColor: UBT_Color.Neutral0 },
          PaddingSize: { HorizontalSizeId: UBT_Size.Base },
          MarginSize: {},
        }}
      >
        <Skeleton id={`${b}-$b2`} isLoading={!isDataFetched}>
          {list.length === 0 ? (
            <DirectoryEmptyState id={`${b}-$b3`} entityTypeId={Connect_Entity.Household} />
          ) : (
            <OSList
              id={`${b}-locality_Households`}
              className="list list-group list--gap-s"
              animateItems
              positionRelative
              source={list}
              keyOf={(h, i) => `111_${String(i)}_${h.householdId}`}
            >
              {(household, i) => (
                <Household_Card
                  id={`${b}-l1-111_${String(i)}-$b4`}
                  household={household}
                  onEventOnClickHousehold={onClickHousehold}
                />
              )}
            </OSList>
          )}
        </Skeleton>
      </CustomContainer>
    </OSBlock>
  );
}
