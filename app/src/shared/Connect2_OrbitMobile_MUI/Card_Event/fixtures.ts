import { LOCALITY } from '../../../mocks/fictional/directory';
import type { Event_Screen } from './types';

/** Fictional event of the OrbitLanding capture: a purple "meeting" event over three days at the local main hall. */
export const THREE_DAY_MEETINGS: Event_Screen = {
  EventId: '7301',
  Type: 'event-guest',
  Title: `${LOCALITY.name} Three-Day Meetings`,
  DateTime: '2026-10-16T09:00:00Z',
  OrbitEventType: {
    Id: 'event-guest',
    Is_Active: true,
    Type: 'event-guest',
    Name: 'Guest',
    MainColorVar: 'purple',
    MainIcon: 'orbit-icon-meeting',
  },
  EventInfo: {
    StartEventDate: '2026-10-16T09:00:00Z',
    EndEventDate: '2026-10-18T17:00:00Z',
    EventLocation: `${LOCALITY.name} Main Hall`,
  },
};
