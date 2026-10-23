/** @origin UBTConnect.Directory_Household_Blocks.Household_GalleryCard_List */
// @os-block UBTConnect.Directory_Household_Blocks.Household_GalleryCard_List
import { OSBlock } from '@/components/ui/os/OSBlock';
import { DataFetchStatus, OSList } from '@/components/ui/os/OSList';
import { Gallery } from '@/shared/osui/Gallery';
import { SkeletonSection } from '@/shared/UBTConnectLibrary/SkeletonSection';
import { DirectoryEmptyState } from '@/components/directory/DirectoryEmptyState';
import { HouseholdGalleryCard } from '@/components/household/HouseholdGalleryCard';
import { get_LookupSection } from '@/shared/UBTConnect/lib/actions';
import { Connect_Entity } from '@/shared/UBTConnect/lib/staticEntities';
import type { UI_SubdivisionHousehold } from '@/shared/UBTConnect/lib/structures';
import { DirectoryDetailSection } from '@/components/layout/DirectoryDetailSection';

/** Local ItemsPerRow (default 2; p:…Household_GalleryCard_List.mvc.js:13-15). */
const ITEMS_PER_ROW = 2;
const NO_HOUSEHOLDS: UI_SubdivisionHousehold[] = [];

export interface HouseholdGalleryCardListProps {
  /** OutSystems instance id of the block. */
  id?: string;
  inHouseholdGalleryCardList?: UI_SubdivisionHousehold[];
  inIsLoading?: boolean;
  /** `_in_Household_GalleryCard_ListInDataFetchStatus`: the data fetch status the caller passes with
      In_Household_GalleryCard_List (mvc.js:19-21, 73-74); the List gets it as source_dataFetchStatus (mvc.js:267), so it
      has `list-loading` while Fetching and `list-error` on Error (captured: SupperMeeting_Carousel/loading,
      SupperMeeting_Details/loading). A caller that passes no status: Fetched. */
  inHouseholdGalleryCardListDataFetchStatus?: DataFetchStatus;
  /** Event Event_OnClick_Household_GalleryCard(HouseholdId). */
  onEventOnClickHouseholdGalleryCard?: (householdId: string) => void;
}

/** Households section of a supper meeting (p:migration/screens/SupperMeeting_Carousel/analysis/sources/pretty/
    UBTConnect.Directory_Household_Blocks.Household_GalleryCard_List.mvc.js:161-322): SkeletonSection(In_IsLoading) >
    SubLayout_DirectoryDetailScreen_Section titled Get_LookupSection(False).Households.Plural > Directory_EmptyState
    (Household) when the list is empty, else a Gallery of ItemsPerRow on every device with a List "list list-group"
    (not animated, virtualization disabled) of Household_GalleryCard; a card click raises
    Event_OnClick_Household_GalleryCard(HouseholdId). */
export function HouseholdGalleryCardList({
  id,
  inHouseholdGalleryCardList = NO_HOUSEHOLDS,
  inIsLoading = false,
  inHouseholdGalleryCardListDataFetchStatus = DataFetchStatus.Fetched,
  onEventOnClickHouseholdGalleryCard,
}: HouseholdGalleryCardListProps) {
  return (
    <OSBlock name="Directory_Household_Blocks.Household_GalleryCard_List" id={id}>
      <SkeletonSection inIsLoading={inIsLoading}>
        <DirectoryDetailSection inTitle={get_LookupSection(false).Households.Plural}>
          {inHouseholdGalleryCardList.length === 0 ? (
            <DirectoryEmptyState entityTypeId={Connect_Entity.Household} />
          ) : (
            <Gallery rowItemsTablet={ITEMS_PER_ROW} rowItemsDesktop={ITEMS_PER_ROW} rowItemsPhone={ITEMS_PER_ROW}>
              <OSList
                source={inHouseholdGalleryCardList}
                keyOf={(household, index) => `${household.HouseholdId ?? ''}-${String(index)}`}
                className="list list-group"
                sourceDataFetchStatus={inHouseholdGalleryCardListDataFetchStatus}
                animateItems={false}
                disableVirtualization
              >
                {(household) => (
                  <HouseholdGalleryCard
                    subdivisionHouseholdGalleryCard={household}
                    itemsPerRow={ITEMS_PER_ROW}
                    onEventOnClick={() => onEventOnClickHouseholdGalleryCard?.(household.HouseholdId ?? '0')}
                  />
                )}
              </OSList>
            </Gallery>
          )}
        </DirectoryDetailSection>
      </SkeletonSection>
    </OSBlock>
  );
}
