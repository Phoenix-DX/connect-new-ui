/* DataActionGetEventLocalitiesForFilter (data action of MyEvents_MyTimelineFilterButton, on demand:
   GetEventLocalitiesData; captured call 2, phase load) is in the domain api/locality. This module keeps the name that
   the block uses, until it imports the domain name. */
export { fetchEventFilterLocalities as getEventLocalitiesForFilter } from '@/api/locality';

/* DataActionGetEventsForMyTimeline of ScreenBlock_MyEvents_V2 (on demand: GetMyTimelineData; the server reads the
   block variables CurrentEventView, DefaultDateRangeInMonths, IsFiltering, IsFetchingMyTimeline and PastEventFilters)
   is in the domain api/event. This module keeps the name that the screen uses. */
export { fetchEventsForMyTimeline as getEventsForMyTimeline } from '@/api/event';
