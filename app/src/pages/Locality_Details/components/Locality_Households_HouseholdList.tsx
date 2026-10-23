// @os-block UBTConnect.Directory_Locality.Locality_Households_HouseholdList
import { useEffect, useRef } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList } from '@/components/ui/os/OSList';
import { isOn } from '@/platform/flags/flags';
import { raiseToFlowHandler } from '@/legacy/os/exceptions';
import { setPreloadObject, useOsNavigate, useViewState, useWasRestoredFromCache } from '@/platform/navigation';
import { APP_ID } from '@/platform/navigation/paths';
import { DirectoryEmptyState } from '@/components/directory/DirectoryEmptyState';
import { CustomContainer } from '@/shared/UBTConnectLibrary/CustomContainer';
import { UBT_Color, UBT_Size } from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { SkeletonSection } from '@/shared/UBTConnectLibrary/SkeletonSection';
import { Connect_Entity } from '@/shared/UBTConnect_Utils/lib/staticEntities';
import { getLocalityHouseholds } from '@/pages/Locality_Details/api';
import type { LocalityHousehold } from '@/pages/Locality_Details/types';
import { getLocal_Bookmark } from './actions';
import { Household_Card } from './Household_Card';
import { MyBookmarks_ObjectType_Contact } from './staticEntities';

export interface Locality_Households_HouseholdListProps {
  id?: string;
  /** In_LocalityId (Long Integer as text). */
  inLocalityId?: string;
  /** Event_NavigateToHouseholdDetails(HouseholdId). */
  onEventNavigateToHouseholdDetails?: (householdId: string) => void;
}

interface GetLocalityHouseholds {
  isDataFetched: boolean;
  list: LocalityHousehold[];
}

/** ScreenEvent_OnInitialize (controller :545-580): an empty list gets three skeleton records ("Dumyy size"). */
const skeleton = (): LocalityHousehold => ({
  householdId: '0',
  householdName: '',
  childrenNames: '',
  isBookmarked: false,
  localityName: 'Dumyy size',
  countryName: 'Dumyy size',
});

/** Directory_Locality.Locality_Households_HouseholdList (p:UBTConnect.Directory_Locality.Locality_Households_
    HouseholdList.mvc.js view :160-300, controller :320-700): CustomContainer (Neutral0, horizontal padding Base) with a
    skeleton until GetLocalityHouseholds is fetched; Directory_EmptyState (Household) for an empty list, otherwise the
    List "locality_Households" ("list list-group list--gap-s") of Household_Card. OnReady: restored from cache → the
    list as it was (ReactiveInstance_ForceUpdate); else ForceListUpdateOnScrollEnd (virtualization helper, nothing to
    port) and refresh GetLocalityHouseholds, then OnAfterFetch_GetLocalityHouseholds_Bookmarks sets each row's
    IsBookmarked from GetLocal_Bookmark(Contact, HouseholdId) (C2NewBookmarks off, the decided TST value). */
export function Locality_Households_HouseholdList({
  id,
  inLocalityId = '0',
  onEventNavigateToHouseholdDetails,
}: Locality_Households_HouseholdListProps) {
  const navigate = useOsNavigate();
  const restored = useWasRestoredFromCache();
  const [state, setState] = useViewState<GetLocalityHouseholds>('Locality_Households_HouseholdList', {
    isDataFetched: false,
    list: [skeleton(), skeleton(), skeleton()],
  });
  const started = useRef(false);
  useEffect(() => {
    if (started.current) return;
    started.current = true;
    if (restored && state.isDataFetched) return;
    const refresh = async () => {
      const list = await getLocalityHouseholds(inLocalityId);
      setState({ isDataFetched: true, list });
      if (isOn('C2NewBookmarks')) return; // GetLocal_Bookmark_C2 branch: flag decided default-only off
      const marked: LocalityHousehold[] = [];
      for (const household of list) {
        const isBookmarked = await getLocal_Bookmark(MyBookmarks_ObjectType_Contact, household.householdId);
        marked.push(isBookmarked === household.isBookmarked ? household : { ...household, isBookmarked });
      }
      setState({ isDataFetched: true, list: marked });
    };
    refresh().catch(raiseToFlowHandler);
    // OnReady runs once.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /** Household_CardEvent_OnClickHousehold(HouseholdId) (controller :375-420): GetHasCarouselEnabled → preload every
      row's HouseholdId (CarouselPreloadedHouseholds) and open HouseholdCarousel at the clicked row; otherwise raise
      Event_NavigateToHouseholdDetails. */
  const onClickHousehold = (householdId: string) => {
    if (isOn('C2EnableCarousel')) {
      setPreloadObject({ CarouselHouseholdItem: state.list.map((h) => ({ Household: h.householdId })) });
      navigate(`/${APP_ID}/HouseholdCarousel`, { In_StartingHouseholdId: householdId });
      return;
    }
    onEventNavigateToHouseholdDetails?.(householdId);
  };

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
        <SkeletonSection id={`${b}-$b2`} inIsLoading={!state.isDataFetched}>
          {state.list.length === 0 ? (
            <DirectoryEmptyState id={`${b}-$b3`} entityTypeId={Connect_Entity.Household} />
          ) : (
            <OSList
              id={`${b}-locality_Households`}
              className="list list-group list--gap-s"
              animateItems
              positionRelative
              source={state.list}
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
        </SkeletonSection>
      </CustomContainer>
    </OSBlock>
  );
}
