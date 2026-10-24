import type { UpdateBreakpoint, UpdateItem } from '@/api/update';
import { UpdateListItem } from '@/components/feed/UpdateListItem';
import { OSList } from '@/components/ui/os/OSList';
import { NotCaptured } from '@/platform/feedback/NotCaptured';
import { ScrollAnchor } from '@/platform/navigation/ScrollAnchor';
import { UBT_Size } from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { Skeleton } from '@/components/ui/Skeleton';
import { dateToText, listKeyOf, type FetchStatus } from '@/pages/Updates_SingleList/hooks/updatesSingleListState';
import { SectionHeader } from './SectionHeader';

export interface UpdatesListProps {
  /** FetchUpdates.UI_UpdateItemList (the skeleton rows while loading). */
  items: UpdateItem[];
  isLoading: boolean;
  isDataFetched: boolean;
  fetchStatus: FetchStatus;
  /** GetDateRanges failed: the runtime list key of that capture. */
  dateRangesFailed: boolean;
  breakpoints: UpdateBreakpoint[];
  /** Filter_Updates.Sort_ByNewest is not Yes. */
  isAscending: boolean;
  /** Event_UpdateListHeader of a SectionHeader. */
  onUpdateListHeader: (breakpoint: UpdateBreakpoint) => void;
  /** Event_Share of an update. */
  onItemShare: (item: UpdateItem) => void;
  /** OnClick of an update, with its index. */
  onItemClick: (index: number) => void;
  /** Event_MarkAsRead of an update. */
  onItemMarkAsRead: (updateItemId: string, position: number) => void;
  /** Event_MarkAsUnread of an update. */
  onItemMarkAsUnread: (updateItemId: string, position: number) => void;
}

/** The Content placeholder of the screen: Updates_NoItemsFound when the fetched list is empty (not captured), or the
    List `List_Updates` (`list-loading` until FetchUpdates succeeds, `list-error` after it fails). Each row is a
    SkeletonSection with the `updates-list__list-item` container (data-plus-date = DateToText of the date): the
    SectionHeader of the row (not on the first row), the Update_ListItem and the ScrollAnchor of the update.
    @origin UBTConnect.Directory_Updates.Updates_SingleList */
export function UpdatesList({
  items,
  isLoading,
  isDataFetched,
  fetchStatus,
  dateRangesFailed,
  breakpoints,
  isAscending,
  onUpdateListHeader,
  onItemShare,
  onItemClick,
  onItemMarkAsRead,
  onItemMarkAsUnread,
}: UpdatesListProps) {
  if (!isLoading && isDataFetched && items.length === 0)
    return <NotCaptured name="Directory_Updates.Updates_NoItemsFound (not rendered in any captured state)" />;
  const listKey = listKeyOf({ fetchStatus, dateRangesFailed });
  const listClass = `list list-group background-neutral-0 updates-list${
    fetchStatus === 'notFetched' ? ' list-loading' : fetchStatus === 'error' ? ' list-error' : ''
  }`;
  return (
    <OSList
      id="List_Updates"
      className={listClass}
      animateItems={false}
      positionRelative
      source={items}
      keyOf={(_item, i) => `${listKey}_${i}`}
    >
      {(item, i) => {
        const r = `l1-${listKey}_${i}`;
        return (
          <Skeleton id={`${r}-$b14`} isLoading={isLoading}>
            <div className="updates-list__list-item" data-container="" data-plus-date={dateToText(item.date)}>
              {i !== 0 && (
                <SectionHeader
                  id={`${r}-$b15`}
                  rowScope={r}
                  inIsLoading={isLoading}
                  inIsAscending={isAscending}
                  inCurrentUpdateDate={item.date}
                  inSiblingId={`${r}-UpdateItem`}
                  inBreakpoints={breakpoints}
                  inPreviousUpdateDate={items[i - 1]?.date ?? ''}
                  onEventUpdateListHeader={onUpdateListHeader}
                />
              )}
              <UpdateListItem
                id={`${r}-UpdateItem`}
                inHasShare={item.hasShare}
                inLocation={item.locationString}
                showImage={false}
                inInitialsList={[{ Gender: item.genderId }]}
                inIsRead={item.isRead}
                inBirthType={item.birthType}
                inDate={item.date}
                inTypeUpdateFeedItem={item.updateItemTypeId}
                inParentsNames={item.parentsNames}
                inName={item.name}
                paddingSizeId={{ GeneralSizeId: UBT_Size.Base }}
                onEventShare={() => {
                  onItemShare(item);
                }}
                onOnClick={() => {
                  onItemClick(i);
                }}
                onEventMarkAsRead={() => {
                  onItemMarkAsRead(item.updateItemId, i);
                }}
                onEventMarkAsUnread={() => {
                  onItemMarkAsUnread(item.updateItemId, i);
                }}
              />
              <ScrollAnchor id={`${r}-$b17`} idIn={item.updateItemId} />
            </div>
          </Skeleton>
        );
      }}
    </OSList>
  );
}
