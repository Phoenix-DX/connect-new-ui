import type { EventBookletState } from '@/pages/EventBooklet/hooks/eventBookletTypes';
import { OSList } from '@/components/ui/os/OSList';
import type { BookletMembersByLocality } from '@/pages/EventBooklet/types';
import {
  BookletLocalityGroup,
  BookletNoResults,
  BookletSkeleton,
  BookletStickyHeader,
  OnListMounted,
} from './EventBookletListParts';

/** The guest view of the event booklet: the Invite List and the Host Localities, grouped by locality, with their
    skeletons and NoResults. Props only. No capture: markup from the compiled view.
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet */

const NOTHING_ALLOCATED =
  'There are no guests allocated to this event. Please check again later or contact the Orbit Helpdesk if you have any questions.';
const SECTION_CLASS = 'margin-top-s margin-bottom-s padding-left-base font-size-xs font-semi-bold';

export interface EventBookletGuestViewProps {
  /** The id prefix of the booklet block (`b1`). */
  prefix: string;
  /** The block variables. */
  state: EventBookletState;
  /** OnScrollEnding_Guests. */
  onScrollEnding: () => void;
  /** OnHandle_ComponentDidMount(In_ListId). */
  onListMounted: (listId: string) => void;
  /** OnHandle_ClickedMember(HouseholdId). */
  onClickedMember: (householdId: string) => void;
}

interface GuestListProps extends Omit<EventBookletGuestViewProps, 'state'> {
  /** The widget name of the List (`List_Guests_InvitedLocality`). */
  name: string;
  /** The locality groups. */
  source: BookletMembersByLocality[];
  /** The List number of the ids: 1 (invited localities) or 2 (host localities). */
  l: 1 | 2;
  /** Guest_ScrollThreshold. */
  scrollThreshold: number;
}

/** A guest List of locality groups (infinite scroll: OnScrollEnding_Guests) and its `componentdidmount` event. */
function GuestList({
  prefix,
  name,
  source,
  l,
  scrollThreshold,
  onScrollEnding,
  onListMounted,
  onClickedMember,
}: GuestListProps) {
  return (
    <>
      <OSList
        id={`${prefix}-${name}`}
        className="list list-group orbit-booklet-main-list"
        animateItems
        disableVirtualization
        infiniteScrollThreshold={scrollThreshold}
        onScrollEnding={onScrollEnding}
        source={source}
        keyOf={(g: BookletMembersByLocality) => `${g.Country}|${g.Locality}`}
      >
        {(g, i) => (
          <BookletLocalityGroup
            prefix={prefix}
            group={g}
            path={`l${String(l)}_${String(i)}`}
            pillAlias={l === 1 ? 10 : 12}
            memberAlias={l === 1 ? 11 : 13}
            onClickedMember={onClickedMember}
          />
        )}
      </OSList>
      <OnListMounted
        onMount={() => {
          onListMounted(`${prefix}-${name}`);
        }}
      />
    </>
  );
}

/** The guest view: while a new search fetches, the header and the skeleton; after it, NoResults or the header, the
    Invite List and (with host localities) the Host Localities, then the skeleton of the next page while it fetches. */
export function EventBookletGuestView({ prefix, state: s, ...events }: EventBookletGuestViewProps) {
  const p = s.paginationSettings;
  const id = (alias: number) => `${prefix}-$b${String(alias)}`;
  if (s.isFetchingData && p.Guest_IsNewSearch) {
    return (
      <>
        <BookletStickyHeader id={id(6)} title="Guest Name" />
        <BookletSkeleton id={id(7)} />
      </>
    );
  }
  if (p.Guest_IsNewSearch) return null;
  return (
    <>
      {p.Guest_NoResults ? (
        <BookletNoResults
          id={id(8)}
          hasFiltersApplied={s.hasFiltersApplied}
          lastFilters={s.lastFilters_Guest}
          nothingAllocated={NOTHING_ALLOCATED}
        />
      ) : (
        <>
          <BookletStickyHeader id={id(9)} title="Guest Name" />
          <div className={SECTION_CLASS} data-container="" id={`${prefix}-InviteList`}>
            Invite List
          </div>
          <GuestList
            prefix={prefix}
            name="List_Guests_InvitedLocality"
            source={s.guests_InvitedList}
            l={1}
            scrollThreshold={p.Guest_ScrollThreshold}
            {...events}
          />
          {s.guests_HostingList.length > 0 && (
            <div className={SECTION_CLASS} data-container="" id={`${prefix}-HostList`}>
              Host Localities
            </div>
          )}
          <GuestList
            prefix={prefix}
            name="List_Guests_HostingLocality"
            source={s.guests_HostingList}
            l={2}
            scrollThreshold={p.Guest_ScrollThreshold}
            {...events}
          />
        </>
      )}
      {s.isFetchingData && <BookletSkeleton id={id(14)} />}
    </>
  );
}
