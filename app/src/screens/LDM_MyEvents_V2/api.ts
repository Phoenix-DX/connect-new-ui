import { callAction } from '@/api/client/callAction';
import { osList } from '@/legacy/os/os-wire';
import type { EventCalendar, EventCalendar_V2Wire, EventCalendarFiltersAsText, MyTimelineData } from './types';

/** Module of the timeline data action (screenservices/Connect2_OrbitMobile_MUI/…). */
const MODULE = 'Connect2_OrbitMobile_MUI';

const toEventCalendar = (w: EventCalendar_V2Wire): EventCalendar => ({ ...w, Guests: osList(w.Guests) });

/** The block variables of ScreenBlock_MyEvents_V2 the server reads (screenData.variables of the captured call). */
export interface MyEventsVariables {
  CurrentEventView: number;
  DefaultDateRangeInMonths: number;
  IsFiltering: boolean;
  IsFetchingMyTimeline: boolean;
  PastEventFilters: EventCalendarFiltersAsText;
}

/* DataActionGetEventLocalitiesForFilter (data action of MyEvents_MyTimelineFilterButton, on demand:
   GetEventLocalitiesData; captured call 2, phase load) is in the domain api/locality. This module keeps the name that
   the block uses, until it imports the domain name. */
export { fetchEventFilterLocalities as getEventLocalitiesForFilter } from '@/api/locality';

/** DataActionGetEventsForMyTimeline (data action of ScreenBlock_MyEvents_V2, on demand: GetMyTimelineData,
    ScreenBlock_MyEvents_V2.mvc.js ctrl :1200-1215; captured call 3, phase load). */
export async function getEventsForMyTimeline(vars: MyEventsVariables): Promise<MyTimelineData> {
  const out = await callAction(MODULE, 'ScreenBlock_MyEvents_V2/DataActionGetEventsForMyTimeline', {
    ...vars,
    PastEventFilters: { ...vars.PastEventFilters, Localities: { List: vars.PastEventFilters.Localities } },
  });
  return {
    pastEvents: osList(out.Out_PastEvents).map((g) => ({
      CurrentMonthDate: g.CurrentMonthDate,
      EventsCalendar: osList(g.EventsCalendar).map(toEventCalendar),
    })),
    upcomingEvents: osList(out.Out_UpcomingEvents).map(toEventCalendar),
  };
}
