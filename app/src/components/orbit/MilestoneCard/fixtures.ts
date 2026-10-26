import { householdName, LOCALITY, VITALE } from '@/mocks/fictional/directory';
import type { Milestone_Screen, OrbitMilestoneTypeRecord } from './types';

const type = (Id: string, Name: string, MainColorVar: string, MainIcon: string): OrbitMilestoneTypeRecord => ({
  Id,
  Is_Active: true,
  Type: Id,
  Name,
  MainColorVar,
  MainIcon,
  CanHost: false,
  IsTransportMilestone: false,
});

/** EventDetail capture, first milestone: the guest's accommodation with a local household (purple). */
export const ACCOMMODATION: Milestone_Screen = {
  MilestoneId: '8801',
  Type: 'accommodation-guest',
  Title: 'Accommodation',
  MilestoneDateTime: '2026-10-16T14:00:00Z',
  TimeType: 'DAY',
  SequenceNo: '1',
  DateForFilter: '2026-10-16',
  OrbitMilestoneType: type('accommodation-guest', 'Accommodation', 'purple', 'orbit-icon-accommodation'),
  MilestoneInfo: { MilestoneHost: householdName(VITALE), Location: VITALE.address.replace(/\n/g, ', ') },
};

/** EventDetail capture, second milestone: a meeting at 11:59 PM with no location or seat (green). */
export const MEETING: Milestone_Screen = {
  MilestoneId: '8802',
  Type: 'meeting-guest',
  Title: 'Meeting',
  MilestoneDateTime: '2026-10-16T23:59:00Z',
  TimeType: 'DAY',
  SequenceNo: '2',
  DateForFilter: '2026-10-16',
  OrbitMilestoneType: type('meeting-guest', 'Meeting', 'green', 'orbit-icon-video-meeting'),
  MilestoneInfo: { Location: '', Seating: '' },
};

/** Not captured: the host's midday meal at home (orange). */
export const MEAL_HOST: Milestone_Screen = {
  MilestoneId: '8804',
  Type: 'meal-host',
  Title: 'Midday Meal',
  MilestoneDateTime: '2026-10-17T12:30:00Z',
  OrbitMilestoneType: type('meal-host', 'Meal', 'orange', 'orbit-icon-meal'),
  MilestoneInfo: { MilestoneHost: householdName(VITALE), Location: `${LOCALITY.name} Main Hall` },
};

/** Not captured: a flight from Buenos Aires to Bahia Blanca. */
export const FLIGHT: Milestone_Screen = {
  MilestoneId: '8805',
  Type: 'transport-flight',
  Title: 'Flight',
  MilestoneDateTime: '2026-10-16T09:05:00Z',
  OrbitMilestoneType: {
    ...type('transport-flight', 'Flight', 'green', 'orbit-icon-flight'),
    IsTransportMilestone: true,
    IconTransportDeparture: 'orbit-icon-flight-takeoff',
    IconTransportArrival: 'orbit-icon-flight-land',
  },
  MilestoneInfo: {
    MilestoneStartDateTime: '2026-10-16T09:05:00Z',
    MilestoneEndDateTime: '2026-10-16T10:40:00Z',
    DepartureLocation: 'Buenos Aires (AEP)',
    ArrivalLocation: `${LOCALITY.name} (BHI)`,
  },
};
