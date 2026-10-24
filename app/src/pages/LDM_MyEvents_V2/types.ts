import type { EventFilterLocality } from '@/api/locality';

/* The wire shapes of DataActionGetEventLocalitiesForFilter are in the domain api/locality, and the wire shapes of
   DataActionGetEventsForMyTimeline are in the domain api/event (contract src/api/openapi.yaml). */

/** EventLocalitiesFilter (Connect2_OrbitMobile_BL): one locality choice of the timeline filter, the domain type of
    api/locality. */
export type EventLocality = EventFilterLocality;

/* The events of DataActionGetEventsForMyTimeline (EventCalendar_V2 with its guests CalendarGuestItem_V2, the past
   events by month TimelineEventGroup_V2) and its filter EventCalendarFiltersAsText (dates "YYYY-MM-DD") are domain
   types of api/event; this module keeps the names that the screen uses. */
export type { CalendarGuestItem, EventCalendar, EventCalendarFiltersAsText, TimelineEventGroup } from '@/api/event';
