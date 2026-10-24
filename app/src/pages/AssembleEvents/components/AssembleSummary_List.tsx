import type { ReactNode } from 'react';
import type { AssembleEventFilter, AssembleMeeting } from '@/api/event';
import { AssembleSummaryCard } from '@/components/assemble/AssembleSummaryCard';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList } from '@/components/ui/os/OSList';
import { ScrollAnchor } from '@/platform/navigation/ScrollAnchor';
import { ViewmodeType } from './actions';
import { AssembleSummary_FilterDrawer } from './AssembleSummary_FilterDrawer';
import { AssembleSummary_List__Header } from './AssembleSummary_List__Header';
import { AssembleSummary_SkeletonList } from './AssembleSummary_SkeletonList';
import { HorizontalTags, type TagItem } from './HorizontalTags';
import { NC_ErrorScreen } from './NC_ErrorScreen';

/** The view of the block AssembleSummary_List, props only. StickyHeader (HorizontalTags Upcoming / Past, the list
    header), NC_ErrorScreen when the fetched list is empty, else List_AssembleSummaryCards (ScrollAnchor and
    AssembleSummaryCard per meeting), the skeleton list until the meetings are fetched, and the filter drawer. Not
    ported: RememberFocusedScrollAnchor (no shell helper; the ScrollAnchor block renders). The flows are in
    useAssembleSummaryList.
    @origin Connect2_Assemble_MUI.Assemble.AssembleSummary_List */

export interface AssembleSummary_ListProps {
  /** OutSystems instance id of the block (`b2-$b4`). */
  id: string;
  /** EventList: the meetings of the list. */
  eventList: AssembleMeeting[];
  /** EventList_Filter: the active time tag, and the filter that the drawer edits. */
  filter: AssembleEventFilter;
  /** EventList_FilterLabel. */
  filterLabel: string;
  /** The label of the list header ("From <month>", "Since <month>" or ""). */
  listHeaderLabel: string;
  /** IsHeaderLoading: the list header shows a text skeleton. */
  isHeaderLoading: boolean;
  /** EventList_IsFiltered: the Clear link shows. */
  isFiltered: boolean;
  /** GetAssembleMeetingSummaryList is fetched: the skeleton list hides, an empty list shows NC_ErrorScreen. */
  isSummaryFetched: boolean;
  /** IsShow_FilterDrawer. */
  isShowFilterDrawer: boolean;
  /** A time tag was clicked, with its Id. */
  onClickTag: (tagId: string) => void;
  /** The header click and the Close event of the drawer. */
  onToggleFilterDrawer: () => void;
  /** The Clear link of the header. */
  onClearFilters: () => void;
  /** The ApplyFilters event of the drawer, with the edited filter. */
  onApplyFilters: (filter: AssembleEventFilter) => void;
  /** The OnScrollEnding event of List_AssembleSummaryCards. */
  onScrollEnding: () => void;
  /** A card was clicked: the meeting and its index in the list. */
  onClickMeeting: (meeting: AssembleMeeting, index: number) => void;
}

const POINTER = { cursor: 'pointer' };
const SKELETON_LIST_LENGTH = 3;
/** BuildHeaderMenu: Upcoming Meetings and Past Meetings, Id = Label. */
const HEADER_MENU: TagItem[] = [
  { Id: ViewmodeType.UpcomingMeetings, Label: ViewmodeType.UpcomingMeetings },
  { Id: ViewmodeType.PastMeetings, Label: ViewmodeType.PastMeetings },
];

/** Share.StickyHeader: the Content placeholder with "sticky absolute-top z-index1 background-neutral-0 " +
    ExtendedClass (empty here). */
function StickyHeader({ id, children }: { id: string; children: ReactNode }) {
  const scope = id.replace('$', '');
  return (
    <OSBlock name="Share.StickyHeader" id={id}>
      <div className="sticky absolute-top z-index1 background-neutral-0" id={`${scope}-Content`}>
        {children}
      </div>
    </OSBlock>
  );
}

export function AssembleSummary_List({
  id,
  eventList,
  filter,
  filterLabel,
  listHeaderLabel,
  isHeaderLoading,
  isFiltered,
  isSummaryFetched,
  isShowFilterDrawer,
  onClickTag,
  onToggleFilterDrawer,
  onClearFilters,
  onApplyFilters,
  onScrollEnding,
  onClickMeeting,
}: AssembleSummary_ListProps) {
  const scope = id.replace('$', '');
  return (
    <OSBlock name="Assemble.AssembleSummary_List" id={id}>
      <div data-container="" id={`${scope}-DIV_Root`}>
        <StickyHeader id={`${scope}-$b1`}>
          <div className="connect-pill-menu" data-container="">
            <HorizontalTags
              id={`${scope}-$b2`}
              tagList={HEADER_MENU}
              activeTagId={filter.AssembleFilterTimeOptionId}
              onClickTag={onClickTag}
            />
          </div>
          <AssembleSummary_List__Header
            id={`${scope}-$b3`}
            filterLabel={filterLabel}
            listHeaderLabel={listHeaderLabel}
            isLoading={isHeaderLoading}
            showClear={isFiltered}
            onClick={onToggleFilterDrawer}
            onClear={onClearFilters}
          />
        </StickyHeader>
        {eventList.length === 0 && isSummaryFetched ? (
          <NC_ErrorScreen
            id={`${scope}-$b4`}
            inErrorMessage="We were unable to find any meetings to display."
            placeholderIcon={<i className="icon connect-icon-calendar-cross fa fa-flag fa-4x" data-icon="" />}
          />
        ) : (
          <div data-container="" id={`${scope}-DIV_ResultList`}>
            <OSList
              id={`${scope}-List_AssembleSummaryCards`}
              source={eventList}
              keyOf={(m) => m.EventId}
              className="background-neutral-1 list list-group"
              animateItems
              disableVirtualization
              onScrollEnding={onScrollEnding}
            >
              {(m, index) => (
                <div
                  className="background-neutral-0 margin-bottom-s padding-top-s"
                  data-container=""
                  style={POINTER}
                  onClick={() => {
                    onClickMeeting(m, index);
                  }}
                >
                  <ScrollAnchor id={`${scope}-l1-${String(index)}-$b5`} idIn={m.EventId} />
                  <AssembleSummaryCard id={`${scope}-l1-${String(index)}-$b6`} assembleEventSummary={m} isListItem />
                </div>
              )}
            </OSList>
          </div>
        )}
        {!isSummaryFetched && (
          <AssembleSummary_SkeletonList id={`${scope}-$b7`} skeletonListLength={SKELETON_LIST_LENGTH} />
        )}
        <AssembleSummary_FilterDrawer
          id={`${scope}-$b8`}
          isOpen={isShowFilterDrawer}
          assembleMeetingFilter={filter}
          onApplyFilters={onApplyFilters}
          onClose={onToggleFilterDrawer}
        />
      </div>
    </OSBlock>
  );
}
