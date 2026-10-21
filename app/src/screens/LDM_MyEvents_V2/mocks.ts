import type { RequestHandler } from 'msw';
import { eventLocalities, pastEventGroups } from '../../mocks/fictional/ldm';
import { contractHandler } from '../../mocks/contract';

/* The two data actions of the route were not recorded (person data): fictional data from the shared LDM world
   (src/mocks/fictional/ldm.ts) in the captured shapes (analysis/calls.md) and counts (dom/default.html): no upcoming
   event, five past events in five month groups. contractHandler checks the answers against the API contract.
   Scenarios: real; loading (never answers: the list-updating loader, the greyed filter icon); error (HTTP 500: the
   offline capture's NetworkWarning). */

const MODULE = 'Connect2_OrbitMobile_MUI';

export const handlers: RequestHandler[] = [
  contractHandler(MODULE, 'MyEvents_MyTimelineFilterButton/DataActionGetEventLocalitiesForFilter', () => ({
    EventLocalities: { List: eventLocalities() },
  })),
  /* The server returns the past events of PastEventFilters (FromDate up to ToDate): the first call (24 months back to
     7 days ahead) has all five; the calls of OnScrollEnding_MyTimeline (older windows) have none. */
  contractHandler(MODULE, 'ScreenBlock_MyEvents_V2/DataActionGetEventsForMyTimeline', ({ PastEventFilters }) => {
    const from = PastEventFilters?.FromDate ?? '';
    const to = PastEventFilters?.ToDate ?? '9999-12-31';
    return {
      Out_PastEvents: {
        List: pastEventGroups()
          .map((g) => ({
            ...g,
            EventsCalendar: { List: g.EventsCalendar.List.filter((e) => e.EventDate >= from && e.EventDate < to) },
          }))
          .filter((g) => g.EventsCalendar.List.length > 0),
      },
      Out_UpcomingEvents: { List: [] },
    };
  }),
];
