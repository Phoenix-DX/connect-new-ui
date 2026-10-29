import type { RequestHandler } from 'msw';
import { eventLocalities, pastEventGroups } from '@/mocks/fictional/ldm';
import { contractHandler } from '@/mocks/contract';

/* The two data actions of the route were not recorded (person data): fictional data from the shared LDM world
   (src/mocks/fictional/ldm.ts) in the captured shapes (analysis/calls.md) and counts (dom/default.html, TST capture of
   2026-10-29): no upcoming event, three past events in three month groups, each with the host name "Allocation
   Pending" (pastEventGroups). contractHandler checks the answers against the API contract.
   Scenarios: real; loading (never answers: the list-updating loader, the greyed filter icon); error (HTTP 500: the
   offline capture's NetworkWarning).
   The timeline filter (decision Q1, 2026-10-27): the localities start with the "All Localities" choice, the record
   defaults of EventLocalitiesFilter (IdAsText "AllLocalities", selected) that MyTimeline_Filters compares with; the
   server code is not in the sources. The timeline keeps the events of the selected localities (all of them when only
   "All Localities" is selected). */

const MODULE = 'Connect2_OrbitMobile_MUI';

export const handlers: RequestHandler[] = [
  contractHandler(MODULE, 'MyEvents_MyTimelineFilterButton/DataActionGetEventLocalitiesForFilter', () => ({
    EventLocalities: {
      List: [{ IdAsText: 'AllLocalities', Name: 'All Localities', IsSelected: true }, ...eventLocalities()],
    },
  })),
  /* The server returns the past events of PastEventFilters (FromDate up to ToDate, of the selected localities): the
     first call (24 months back to 7 days ahead) has all three; the calls of OnScrollEnding_MyTimeline (older windows)
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
        List: pastEventGroups()
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
