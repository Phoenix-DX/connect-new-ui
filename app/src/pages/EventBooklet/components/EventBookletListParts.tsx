import { useLayoutEffect, useRef } from 'react';
import type { EventBookletMember, EventBookletSelectedFilters } from '@/api/event';
import { HostSurveyPill } from '@/components/orbit/HostSurveyPill';
import { OrbitSkeleton } from '@/components/orbit/OrbitSkeleton';
import { OSList } from '@/components/ui/os/OSList';
import { OrbitNoResults } from '@/components/orbit/OrbitNoResults';
import type { BookletMembersByLocality } from '@/pages/EventBooklet/types';
import { OrbitSkeletonLoading } from '@/lib/orbit/staticEntities';
import { EventBooklet_ListHeader } from './EventBooklet_ListHeader';
import { EventBooklet_MembersItem } from './EventBooklet_MembersItem';

/** The parts that the guest view and the helper view of the event booklet share: the sticky list header, the
    skeleton, NoResults, a locality group with its member rows, and the List widget's `componentdidmount` event. Props
    only. No capture: markup from the compiled view.
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet */

/** Runs `onMount` once, after the element before it mounted: the List widget's `componentdidmount` extended event. */
export function OnListMounted({ onMount }: { onMount: () => void }) {
  const done = useRef(false);
  useLayoutEffect(() => {
    if (done.current) return;
    done.current = true;
    onMount();
    // once per mount of the List, as componentDidMount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
}

/** A sticky list header: `orbit-booklet-list-header-sticky-cont` > EventBooklet_ListHeader with the title. */
export function BookletStickyHeader({ id, title }: { id: string; title: string }) {
  return (
    <div className="orbit-booklet-list-header-sticky-cont" data-container="">
      <EventBooklet_ListHeader id={id} placeholderTitle={<span data-expression="">{title}</span>} />
    </div>
  );
}

/** The booklet skeleton (Skeleton_Loading, EventBooklet). */
export function BookletSkeleton({ id }: { id: string }) {
  return <OrbitSkeleton id={id} inSkeletonLoadingId={OrbitSkeletonLoading.EventBooklet} />;
}

export interface BookletNoResultsProps {
  /** OutSystems instance id of NoResults. */
  id: string;
  /** HasFiltersApplied. */
  hasFiltersApplied: boolean;
  /** LastFilters_Guest or LastFilters_Helpers: the filters of the last answer. */
  lastFilters: EventBookletSelectedFilters;
  /** The message without filters: nobody is allocated to the event. */
  nothingAllocated: string;
}

/** NoResults of a view: with filters, "No results for '<term>'." (or "No results.") and the spelling hint; without,
    "No results." and the view's message. */
export function BookletNoResults({ id, hasFiltersApplied, lastFilters, nothingAllocated }: BookletNoResultsProps) {
  return (
    <OrbitNoResults
      id={id}
      placeholderTitle={
        <span data-expression="">
          {hasFiltersApplied
            ? lastFilters.SearchTerm !== ''
              ? `No results for '${lastFilters.SearchTerm}'.`
              : 'No results.'
            : 'No results.'}
        </span>
      }
      placeholderMessage={
        <span data-expression="">
          {hasFiltersApplied
            ? 'Make sure that all words are spelled correctly, or refine your search terms.'
            : nothingAllocated}
        </span>
      }
    />
  );
}

/** The location pill text: "Locality, Country", the locality or the country. */
export const pillText = (g: BookletMembersByLocality): string =>
  g.Locality !== '' ? `${g.Locality}${g.Country !== '' ? `, ${g.Country}` : ''}` : g.Country;

export interface BookletLocalityGroupProps {
  /** The id prefix of the booklet block (`b1`). */
  prefix: string;
  /** The locality group. */
  group: BookletMembersByLocality;
  /** The id path of the group in its lists (`l1_0`, `l3_0-l4_1`). */
  path: string;
  /** The alias of the location pill block. */
  pillAlias: number;
  /** The alias of the member rows (their List and their EventBooklet_MembersItem). */
  memberAlias: number;
  /** OnHandle_ClickedMember(HouseholdId): the member's or the host's household. */
  onClickedMember: (householdId: string) => void;
}

/** A locality group: the location pill and the member rows (Click_Member → the member's household, Click_Host → the
    host's household). */
export function BookletLocalityGroup({
  prefix,
  group,
  path,
  pillAlias,
  memberAlias,
  onClickedMember,
}: BookletLocalityGroupProps) {
  return (
    <div className="orbit-booklet-list-cont" data-container="">
      <div className="orbit-booklet-location-pill-cont" data-container="">
        <HostSurveyPill
          id={`${prefix}-${path}-$b${String(pillAlias)}`}
          inIsSmallIcon
          inExtendedClass="orbit-booklet-location-pill"
          inPillText={pillText(group)}
          inIconClass="orbit-icon-location text-neutral-7"
        />
      </div>
      <OSList
        className="list list-group orbit-booklet-list-members"
        animateItems
        disableVirtualization
        source={group.Members}
        keyOf={(x: EventBookletMember) => x.MemberId}
      >
        {(member, j) => (
          <EventBooklet_MembersItem
            id={`${prefix}-${path}-l${String(memberAlias)}_${String(j)}-$b${String(memberAlias)}`}
            memberItem={member}
            onClickHost={() => {
              onClickedMember(member.HostHouseholderId);
            }}
            onClickMember={() => {
              onClickedMember(member.HouseholderId);
            }}
          />
        )}
      </OSList>
    </div>
  );
}
