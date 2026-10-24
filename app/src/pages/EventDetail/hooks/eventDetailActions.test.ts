import { describe, expect, it, vi } from 'vitest';
import type { Milestone_Screen } from '@/api/event';
import { ApplicationEvents_Orbit_GenerateQRCode } from '@/pages/EventDetail/staticEntities';
import { log } from '@/platform/log/log';
import {
  eventDateRange,
  filterMilestonesByDateGroup,
  getContactHelpdeskSubject_Event,
  getHostAllocation,
  onApplicationEvent_GenerateQRCode,
} from './eventDetailActions';

/* The client actions of ScreenBlock_EventDetail, without React. Fictional milestones of a weekend conference. */

const milestone = (patch: Partial<Milestone_Screen>): Milestone_Screen => ({
  MilestoneId: '0',
  Title: '',
  MilestoneDateTime: '',
  TimeType: 'DAY',
  SequenceNo: '0',
  DateForFilter: '',
  ...patch,
});

const arrival = milestone({
  MilestoneId: 'b1',
  Title: 'Arrival flight',
  TimeType: 'BEFORE',
  MilestoneDateTime: '2026-10-22T18:00:00Z',
});
const earlyBus = milestone({
  MilestoneId: 'b0',
  Title: 'Bus to the airport',
  TimeType: 'BEFORE',
  MilestoneDateTime: '2026-10-22T08:00:00Z',
});
const friMeeting = milestone({
  MilestoneId: 'd2',
  Title: 'Opening Meeting',
  DateForFilter: '2026-10-23',
  SequenceNo: '2',
  OrbitMilestoneType: { Id: 'meeting-host', CanHost: false, Order: 1 },
});
const friStay = milestone({
  MilestoneId: 'd1',
  Title: 'Accommodation',
  DateForFilter: '2026-10-23',
  SequenceNo: '1',
  OrbitMilestoneType: { Id: 'accommodation-host', CanHost: true, Order: 3 },
});
const satMeal = milestone({
  MilestoneId: 'd3',
  Title: 'Lunch',
  DateForFilter: '2026-10-24',
  SequenceNo: '1',
  OrbitMilestoneType: { Id: 'meal-host', CanHost: true, Order: 2 },
});
const departure = milestone({
  MilestoneId: 'a1',
  Title: 'Departure flight',
  TimeType: 'AFTER',
  MilestoneDateTime: '2026-10-26T10:00:00Z',
});
const all = [arrival, friMeeting, satMeal, friStay, departure, earlyBus];

describe('filterMilestonesByDateGroup', () => {
  it('keeps the BEFORE milestones sorted by their date', () => {
    expect(filterMilestonesByDateGroup('', 'BEFORE', all).map((m) => m.MilestoneId)).toEqual(['b0', 'b1']);
  });

  it('keeps the AFTER milestones', () => {
    expect(filterMilestonesByDateGroup('', 'AFTER', all).map((m) => m.MilestoneId)).toEqual(['a1']);
  });

  it('keeps the DAY milestones of the date sorted by SequenceNo', () => {
    expect(filterMilestonesByDateGroup('2026-10-23', 'DAY', all).map((m) => m.MilestoneId)).toEqual(['d1', 'd2']);
  });

  it('gives the empty list for another time type or without milestones', () => {
    expect(filterMilestonesByDateGroup('2026-10-23', 'OTHER', all)).toEqual([]);
    expect(filterMilestonesByDateGroup('2026-10-23', 'DAY', [])).toEqual([]);
  });
});

describe('getHostAllocation', () => {
  it('keeps the milestones whose type can host, sorted by the order of the type', () => {
    expect(getHostAllocation(all).map((m) => m.MilestoneId)).toEqual(['d3', 'd1']);
  });

  it('gives the empty list when no type can host', () => {
    expect(getHostAllocation([arrival, friMeeting])).toEqual([]);
  });
});

describe('eventDateRange and getContactHelpdeskSubject_Event', () => {
  const start = '2026-10-23T09:00:00Z';
  const end = '2026-10-25T17:00:00Z';

  it('writes the date range with the abbreviated weekdays', () => {
    expect(eventDateRange(start, end)).toBe('Fri 23 Oct 2026 - Sun 25 Oct 2026');
  });

  it('joins the event name, the location and the date range', () => {
    expect(getContactHelpdeskSubject_Event('Weekend Conferences', start, end, 'Main Hall')).toBe(
      'Weekend Conferences - Main Hall - Fri 23 Oct 2026 - Sun 25 Oct 2026',
    );
  });

  it('leaves out the empty parts and their separators', () => {
    expect(getContactHelpdeskSubject_Event('Weekend Conferences', '', '', '')).toBe('Weekend Conferences');
    expect(getContactHelpdeskSubject_Event('Weekend Conferences', start, '', 'Main Hall')).toBe(
      'Weekend Conferences - Main Hall',
    );
    expect(getContactHelpdeskSubject_Event('', start, end, '')).toBe('Fri 23 Oct 2026 - Sun 25 Oct 2026');
  });
});

describe('onApplicationEvent_GenerateQRCode', () => {
  it('logs the audit event with the ids', () => {
    const info = vi.spyOn(log, 'info').mockImplementation(() => undefined);
    onApplicationEvent_GenerateQRCode('990001', '7301');
    expect(info).toHaveBeenCalledWith('ApplicationEvent', {
      EventId: ApplicationEvents_Orbit_GenerateQRCode,
      MemberId: '990001',
      OrbitEventId: '7301',
    });
    info.mockRestore();
  });
});
