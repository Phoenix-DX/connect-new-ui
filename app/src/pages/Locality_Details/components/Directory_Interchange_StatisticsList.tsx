import type { Interchange } from '@/api/locality';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList } from '@/components/ui/os/OSList';
import { DirectoryEmptyState } from '@/components/directory/DirectoryEmptyState';
import { EntityDetailsActionsContainer } from '@/containers/EntityDetailsActions/EntityDetailsActionsContainer';
import { CustomContainer } from '@/shared/UBTConnectLibrary/CustomContainer';
import { UBT_Color, UBT_Size } from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { SkeletonSection } from '@/shared/UBTConnectLibrary/SkeletonSection';
import { StatisticsListItem } from '@/components/directory/StatisticsListItem';
import { Connect_Entity } from '@/shared/UBTConnect_Utils/lib/staticEntities';

export interface Directory_Interchange_StatisticsListProps {
  /** OutSystems instance id of the block. */
  id?: string;
  inIsLoading?: boolean;
  inShowSubtitle?: boolean;
  inHighlightWords?: string;
  inInterchangeList?: readonly Interchange[];
  /** Event Event_NavigateToLocality(LocalityId, CountryName). */
  onEventNavigateToLocality?: (localityId: string, countryName: string) => void;
}

const EMPTY: Interchange[] = [];

/** The statistics list of interchange localities: CustomContainer (Neutral0, padding y Small x Base) with a
    SkeletonSection (In_IsLoading) around the List ("list list-group list--gap-s") of Statistics_ListItem (actions
    menu; "ubt-statistics-item__bookmarked" when bookmarked) whose ActionsMenu is Directory_EntityDetailsActions
    (Interchange, bookmark and notes, popup name = the statistics title), then Directory_EmptyState (Interchange,
    "in this locality") for an empty list not loading.
    Handler_Clicked: nothing while loading, else Event_NavigateToLocality(InterchangeLocalityId, CountryName).
    @origin UBTConnect.Directory_Interchange.Directory_Interchange_StatisticsList */
export function Directory_Interchange_StatisticsList({
  id,
  inIsLoading = false,
  inShowSubtitle = false,
  inHighlightWords = '',
  inInterchangeList = EMPTY,
  onEventNavigateToLocality,
}: Directory_Interchange_StatisticsListProps) {
  const handlerClicked = (item: Interchange) => {
    if (inIsLoading) return;
    onEventNavigateToLocality?.(item.interchangeLocalityId, item.interchangeCountryName);
  };
  const b = id?.replace('$', '') ?? '';
  return (
    <OSBlock name="Directory_Interchange.Directory_Interchange_StatisticsList" id={id}>
      <CustomContainer
        id={`${b}-$b1`}
        options={{
          Background: { BackgroundColor: UBT_Color.Neutral0 },
          PaddingSize: { VerticalSizeId: UBT_Size.Small, HorizontalSizeId: UBT_Size.Base },
        }}
      >
        <SkeletonSection id={`${b}-$b2`} inIsLoading={inIsLoading}>
          <OSList
            className="list list-group list--gap-s"
            animateItems
            positionRelative
            source={inInterchangeList}
            keyOf={(item, i) => `3679_${String(i)}_${item.interchangeLocalityId}`}
          >
            {(item, i) => {
              const row = `${b}-l1-3679_${String(i)}`;
              return (
                <StatisticsListItem
                  id={`${row}-$b3`}
                  inHasActionsMenu
                  inHighlightWords={inHighlightWords}
                  inExtendedClasses={item.isBookmarked ? 'ubt-statistics-item__bookmarked' : ''}
                  inStatisticsOptions={item.interchangeStatistics}
                  inShowSubtitle={inShowSubtitle}
                  onEventClicked={() => {
                    handlerClicked(item);
                  }}
                  actionsMenu={
                    <EntityDetailsActionsContainer
                      id={`${row}-$b4`}
                      entityType={Connect_Entity.Interchange}
                      entityId={item.interchangeLocalityId}
                      isEnabled
                      enableOptions={{ EnableBookmark: true, EnableNotes: true }}
                      contactPopUpOverrideOptions={{ Name: item.interchangeStatistics.Title ?? '' }}
                    />
                  }
                />
              );
            }}
          </OSList>
        </SkeletonSection>
        {inInterchangeList.length === 0 && !inIsLoading && (
          <DirectoryEmptyState id={`${b}-$b5`} entityTypeId={Connect_Entity.Interchange} location="in this locality" />
        )}
      </CustomContainer>
    </OSBlock>
  );
}
