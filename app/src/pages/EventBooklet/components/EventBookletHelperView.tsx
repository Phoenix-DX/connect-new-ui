import { OSList } from '@/components/ui/os/OSList';
import { getHelperRoleByJSON_Name } from '@/pages/EventBooklet/hooks/eventBookletLists';
import type { EventBookletState } from '@/pages/EventBooklet/hooks/eventBookletTypes';
import type { BookletMembersByLocality, BookletMembersByRole } from '@/pages/EventBooklet/types';
import { EventBooklet_ListHeader } from './EventBooklet_ListHeader';
import {
  BookletLocalityGroup,
  BookletNoResults,
  BookletSkeleton,
  BookletStickyHeader,
  OnListMounted,
} from './EventBookletListParts';

/** The helper view of the event booklet: the helpers grouped by role (the role label as the header), then by
    locality, with their skeletons and NoResults. Props only. No capture: markup from the compiled view.
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet */

const NOTHING_ALLOCATED =
  'There are no helpers allocated to this event. Please check again later or contact the Orbit Helpdesk if you have any questions.';

export interface EventBookletHelperViewProps {
  /** The id prefix of the booklet block (`b1`). */
  prefix: string;
  /** The block variables. */
  state: EventBookletState;
  /** OnScrollEnding_Helpers. */
  onScrollEnding: () => void;
  /** OnHandle_ComponentDidMount(In_ListId). */
  onListMounted: (listId: string) => void;
  /** OnHandle_ClickedMember(HouseholdId). */
  onClickedMember: (householdId: string) => void;
}

/** The helper view: while a new search fetches, the header and the skeleton; after it, NoResults or the List of
    roles (infinite scroll: OnScrollEnding_Helpers), then the skeleton of the next page while it fetches. */
export function EventBookletHelperView({
  prefix,
  state: s,
  onScrollEnding,
  onListMounted,
  onClickedMember,
}: EventBookletHelperViewProps) {
  const p = s.paginationSettings;
  const id = (alias: number) => `${prefix}-$b${String(alias)}`;
  if (s.isFetchingData && p.Helper_IsNewSearch) {
    return (
      <>
        <BookletStickyHeader id={id(15)} title="Helper" />
        <BookletSkeleton id={id(16)} />
      </>
    );
  }
  if (p.Helper_IsNewSearch) return null;
  return (
    <>
      {p.Helper_NoResults ? (
        <BookletNoResults
          id={id(17)}
          hasFiltersApplied={s.hasFiltersApplied}
          lastFilters={s.lastFilters_Helpers}
          nothingAllocated={NOTHING_ALLOCATED}
        />
      ) : (
        <>
          <OSList
            id={`${prefix}-List_Helpers`}
            className="list list-group orbit-booklet-main-list"
            animateItems
            disableVirtualization
            infiniteScrollThreshold={p.Helper_ScrollThreshold}
            onScrollEnding={onScrollEnding}
            source={s.helpers}
            keyOf={(r: BookletMembersByRole) => r.Role}
          >
            {(r, i) => (
              <div data-container="">
                <div className="orbit-booklet-list-header-sticky-cont" data-container="">
                  <EventBooklet_ListHeader
                    id={`${prefix}-l3_${String(i)}-$b18`}
                    placeholderTitle={
                      <span data-expression="">{getHelperRoleByJSON_Name(r.Role, s.localHelperRoles).Label}</span>
                    }
                  />
                </div>
                <OSList
                  className="list list-group orbit-booklet-secondary-list"
                  animateItems
                  disableVirtualization
                  source={r.MembersByLocality}
                  keyOf={(g: BookletMembersByLocality) => `${g.Country}|${g.Locality}`}
                >
                  {(g, k) => (
                    <BookletLocalityGroup
                      prefix={prefix}
                      group={g}
                      path={`l3_${String(i)}-l4_${String(k)}`}
                      pillAlias={19}
                      memberAlias={20}
                      onClickedMember={onClickedMember}
                    />
                  )}
                </OSList>
              </div>
            )}
          </OSList>
          <OnListMounted
            onMount={() => {
              onListMounted(`${prefix}-List_Helpers`);
            }}
          />
        </>
      )}
      {s.isFetchingData && <BookletSkeleton id={id(21)} />}
    </>
  );
}
