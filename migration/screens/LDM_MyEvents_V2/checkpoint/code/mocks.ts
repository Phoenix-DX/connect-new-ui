import type { RequestHandler } from 'msw';
import { LOCALITY_HOUSEHOLDS, type CastHousehold } from '@/mocks/fictional/directory';
import {
  LDM_PAST_EVENTS,
  eventCalendarRecord,
  eventLocalities,
  ldmEventDay,
  ldmMonthLabel,
  type LdmEvent,
  type LdmGuest,
  type TimelineEventGroup_V2Wire,
} from '@/mocks/fictional/ldm';
import { contractHandler } from '@/mocks/contract';

/* The two data actions of the route were not recorded (person data): fictional data from the shared LDM world
   (src/mocks/fictional/ldm.ts) in the captured shapes (analysis/calls.md) and counts (dom/default.html, TST capture of
   2026-11-06): no upcoming event, four past events in four month groups (timelineGroups). contractHandler checks the
   answers against the API contract.
   Scenarios: real; loading (never answers: the list-updating loader, the greyed filter icon); error (HTTP 500: the
   offline capture's NetworkWarning).
   The timeline filter (decision Q1, 2026-10-27): the localities start with the "All Localities" choice, the record
   defaults of EventLocalitiesFilter (IdAsText "AllLocalities", selected) that MyTimeline_Filters compares with; the
   server code is not in the sources. The timeline keeps the events of the selected localities (all of them when only
   "All Localities" is selected). */

const MODULE = 'Connect2_OrbitMobile_MUI';

const household = (surname: string): CastHousehold => {
  const found = LOCALITY_HOUSEHOLDS.find((h) => h.surname === surname);
  if (!found) throw new Error(`No household ${surname} in directory.ts`);
  return found;
};

let phone = 200;
/** A guest household that the shared meal does not list; fictional mobile number of the reserved 555 range. */
const extraGuest = (surname: string): LdmGuest => ({
  household: household(surname),
  mobilePhone: `+54 291 555 0${String((phone += 1))}`,
});

const meal = (index: number): LdmEvent => {
  const found = LDM_PAST_EVENTS[index];
  if (!found) throw new Error(`No LDM meal ${String(index)} in ldm.ts`);
  return found;
};

/** The meals of the timeline as the TST capture of 2026-11-06 shows them (dom/default.html): the four newest meals
    of the shared LDM world (ids, hosts, dates), each with a published host (HostFullName and the host locality in
    brackets) and the captured guest lines: 13 guests in 4 households, 13 in 5, 16 in 5 and 16 in 6 (the photos; the
    sixth household is the "+1" of the last card). The existing guests of each meal stay first. */
const TIMELINE_MEALS: LdmEvent[] = [
  {
    ...meal(0),
    guests: [...meal(0).guests, extraGuest('Acosta'), extraGuest('Correa'), extraGuest('Torres')],
    guestCount: 13,
  },
  {
    ...meal(1),
    guests: [...meal(1).guests, extraGuest('Castillo'), extraGuest('Ortega'), extraGuest('Silva')],
    guestCount: 13,
  },
  { ...meal(2), guestCount: 16 },
  { ...meal(3), guests: [...meal(3).guests, extraGuest('Herrera'), extraGuest('Suárez')], guestCount: 16 },
];

/** Out_PastEvents: one group per month, newest first. */
function timelineGroups(today: Date = new Date()): TimelineEventGroup_V2Wire[] {
  const groups: TimelineEventGroup_V2Wire[] = [];
  for (const e of TIMELINE_MEALS) {
    const record = eventCalendarRecord(e, today);
    const label = ldmMonthLabel(ldmEventDay(e, today));
    const last = groups[groups.length - 1];
    if (last && last.CurrentMonthDate === label) last.EventsCalendar.List.push(record);
    else groups.push({ CurrentMonthDate: label, EventsCalendar: { List: [record] } });
  }
  return groups;
}

export const handlers: RequestHandler[] = [
  contractHandler(MODULE, 'MyEvents_MyTimelineFilterButton/DataActionGetEventLocalitiesForFilter', () => ({
    EventLocalities: {
      List: [{ IdAsText: 'AllLocalities', Name: 'All Localities', IsSelected: true }, ...eventLocalities()],
    },
  })),
  /* The server returns the past events of PastEventFilters (FromDate up to ToDate, of the selected localities): the
     first call (24 months back to 7 days ahead) has all four; the calls of OnScrollEnding_MyTimeline (older windows)
     have none. */
  contractHandler(MODULE, 'ScreenBlock_MyEvents_V2/DataActionGetEventsForMyTimeline', ({ PastEventFilters }) => {
    const from = PastEventFilters?.FromDate ?? '';
    const to = PastEventFilters?.ToDate ?? '9999-12-31';
    const localityIds = (PastEventFilters?.Localities.List ?? [])
      .filter((l) => l.IsSelected && l.IdAsText !== 'AllLocalities')
      .map((l) => l.IdAsText);
    const inLocalities = (localityId: string) => localityIds.length === 0 || localityIds.includes(localityId);
    return {
      Out_PastEvents: {
        List: timelineGroups()
          .map((g) => ({
            ...g,
            EventsCalendar: {
              List: g.EventsCalendar.List.filter(
                (e) => e.EventDate >= from && e.EventDate < to && inLocalities(e.EventLocalityId),
              ),
            },
          }))
          .filter((g) => g.EventsCalendar.List.length > 0),
      },
      Out_UpcomingEvents: { List: [] },
    };
  }),
];
