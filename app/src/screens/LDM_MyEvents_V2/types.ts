import type { ActionOutputs, PathOf } from '../../lib/api';

/* Wire shapes of the two data actions (analysis/calls.md; contract src/api/openapi.yaml). Long Integers stay text. */
export type GetEventsForMyTimelineWire = ActionOutputs<
  PathOf<'Connect2_OrbitMobile_MUI', 'ScreenBlock_MyEvents_V2/DataActionGetEventsForMyTimeline'>
>;
export type GetEventLocalitiesForFilterWire = ActionOutputs<
  PathOf<'Connect2_OrbitMobile_MUI', 'MyEvents_MyTimelineFilterButton/DataActionGetEventLocalitiesForFilter'>
>;
export type TimelineEventGroup_V2Wire = GetEventsForMyTimelineWire['Out_PastEvents']['List'][number];
export type EventCalendar_V2Wire = GetEventsForMyTimelineWire['Out_UpcomingEvents']['List'][number];
export type CalendarGuestItem_V2Wire = EventCalendar_V2Wire['Guests']['List'][number];
export type EventLocalitiesFilterWire = GetEventLocalitiesForFilterWire['EventLocalities']['List'][number];

/** CalendarGuestItem_V2 (Connect2_OrbitMobile_IS): one guest household of an event. */
export type CalendarGuestItem = CalendarGuestItem_V2Wire;

/** EventCalendar_V2 (Connect2_OrbitMobile_IS) with its guest list unwrapped. EventDate is Text (the view reads
    TextToDate(EventDate), EventCard_Info_V2.mvc.js view), GuestCount is Text (In_GuestCount of EventCard_Guests). */
export interface EventCalendar extends Omit<EventCalendar_V2Wire, 'Guests'> {
  Guests: CalendarGuestItem[];
}

/** TimelineEventGroup_V2 (Connect2_OrbitMobile_BL): the past events of one month. */
export interface TimelineEventGroup {
  CurrentMonthDate: string;
  EventsCalendar: EventCalendar[];
}

/** EventLocalitiesFilter (Connect2_OrbitMobile_BL): one locality choice of the timeline filter. */
export type EventLocality = EventLocalitiesFilterWire;

/** EventCalendarFiltersAsText (Connect2_OrbitMobile_BL): PastEventFilters / SelectedFilters (dates "YYYY-MM-DD"). */
export interface EventCalendarFiltersAsText {
  FromDate: string;
  ToDate: string;
  Localities: EventLocality[];
}

/** GetEventsForMyTimeline outputs. */
export interface MyTimelineData {
  pastEvents: TimelineEventGroup[];
  upcomingEvents: EventCalendar[];
}
