import { afterEach, describe, expect, it, vi } from 'vitest';
import { log } from '@/platform/log/log';
import { OrbitMilestoneType, OrbitSkeletonLoading } from '@/shared/Connect2_OrbitMobile_MUI/lib/staticEntities';
import {
  getContactHelpdeskSubject_Event,
  getFormattedStringFromHelperType,
  getSkeletonLoadingIdFromMilestoneTypeId,
  onApplicationEvent_CallMember,
  onApplicationEvent_ViewHousehold,
} from './helperDetailsActions';

afterEach(() => {
  vi.restoreAllMocks();
});

describe('getFormattedStringFromHelperType', () => {
  it('keeps the first letter, writes the rest in lower case and adds "/s"', () => {
    expect(getFormattedStringFromHelperType('CATERING')).toBe('Catering/s');
    expect(getFormattedStringFromHelperType('usher')).toBe('usher/s');
    expect(getFormattedStringFromHelperType('')).toBe('/s');
  });
});

describe('getSkeletonLoadingIdFromMilestoneTypeId', () => {
  it('maps the guest, host and transport milestone types, and 0 otherwise', () => {
    expect(getSkeletonLoadingIdFromMilestoneTypeId(OrbitMilestoneType.MealGuest)).toBe(
      OrbitSkeletonLoading.MilestoneDetailGuest,
    );
    expect(getSkeletonLoadingIdFromMilestoneTypeId(OrbitMilestoneType.Helper)).toBe(
      OrbitSkeletonLoading.MilestoneDetailHost,
    );
    expect(getSkeletonLoadingIdFromMilestoneTypeId(OrbitMilestoneType.AccommodationHost)).toBe(
      OrbitSkeletonLoading.MilestoneDetailHost,
    );
    expect(getSkeletonLoadingIdFromMilestoneTypeId(OrbitMilestoneType.Train)).toBe(
      OrbitSkeletonLoading.TransportDetail,
    );
    expect(getSkeletonLoadingIdFromMilestoneTypeId(OrbitMilestoneType.MeetingHost)).toBe(0);
    expect(getSkeletonLoadingIdFromMilestoneTypeId('')).toBe(0);
  });
});

describe('getContactHelpdeskSubject_Event', () => {
  const start = '2026-03-13T09:00:00Z';
  const end = '2026-03-15T17:00:00Z';

  it('joins the event name, the location and the two days with " - "', () => {
    expect(getContactHelpdeskSubject_Event('Weekend Conference', start, end, 'Mar del Plata')).toBe(
      'Weekend Conference - Mar del Plata - Fri 13 Mar 2026 - Sun 15 Mar 2026',
    );
  });

  it('leaves out an empty location and the dates when one of them is the null date', () => {
    expect(getContactHelpdeskSubject_Event('Weekend Conference', start, end, '')).toBe(
      'Weekend Conference - Fri 13 Mar 2026 - Sun 15 Mar 2026',
    );
    expect(getContactHelpdeskSubject_Event('Weekend Conference', start, '', 'Mar del Plata')).toBe(
      'Weekend Conference - Mar del Plata',
    );
    expect(getContactHelpdeskSubject_Event('Weekend Conference', '', '', '')).toBe('Weekend Conference');
    expect(getContactHelpdeskSubject_Event('', '', '', 'Mar del Plata')).toBe('Mar del Plata');
    expect(getContactHelpdeskSubject_Event('', '', '', '')).toBe('');
  });
});

describe('application events', () => {
  it('log their ids only', () => {
    const info = vi.spyOn(log, 'info').mockImplementation(() => undefined);
    onApplicationEvent_ViewHousehold('42438', '7301');
    onApplicationEvent_CallMember('7301');
    expect(info.mock.calls).toEqual([
      ['ApplicationEvent', { Event: 'ViewHousehold', TargetHouseholdId: '42438', EventId: '7301' }],
      ['ApplicationEvent', { Event: 'CallMember', EventId: '7301' }],
    ]);
  });
});
