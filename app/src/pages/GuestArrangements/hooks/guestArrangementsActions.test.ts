import { afterEach, describe, expect, it, vi } from 'vitest';
import { log } from '@/platform/log/log';
import { getFormattedDateTimeById } from '@/shared/Connect2_OrbitMobile_MUI/lib/actions';
import { OrbitMilestoneType, OrbitSkeletonLoading } from '@/shared/Connect2_OrbitMobile_MUI/lib/staticEntities';
import {
  getContactHelpdeskSubject_Milestone,
  getSkeletonLoadingIdFromMilestoneTypeId,
  onApplicationEvent_ViewHousehold,
} from './guestArrangementsActions';

/* Fictional names: the Rosario Spring Conference, the Ortega family. */
const HOST = OrbitMilestoneType.AccommodationHost;
const START = '2026-11-06T09:00:00Z';

afterEach(() => {
  vi.restoreAllMocks();
});

describe('getContactHelpdeskSubject_Milestone', () => {
  it('joins the event, the milestone, the location and the formatted date with " - "', () => {
    const date = getFormattedDateTimeById(HOST, START);
    expect(date).not.toBe('');
    expect(
      getContactHelpdeskSubject_Milestone(HOST, 'Rosario Spring Conference', 'Hosting the Ortegas', START, 'Rosario'),
    ).toBe(`Rosario Spring Conference - Hosting the Ortegas - Rosario - ${date}`);
  });

  it('puts a separator only before a part that follows', () => {
    expect(getContactHelpdeskSubject_Milestone(HOST, 'Rosario Spring Conference', 'Hosting the Ortegas', '', '')).toBe(
      'Rosario Spring Conference - Hosting the Ortegas',
    );
    expect(getContactHelpdeskSubject_Milestone(HOST, 'Rosario Spring Conference', '', '', 'Rosario')).toBe(
      'Rosario Spring Conference - Rosario',
    );
    expect(getContactHelpdeskSubject_Milestone(HOST, '', '', START, '')).toBe(getFormattedDateTimeById(HOST, START));
    expect(getContactHelpdeskSubject_Milestone(HOST, '', '', '', '')).toBe('');
  });

  it('formats the date by milestone type: no date for an unknown type', () => {
    expect(getContactHelpdeskSubject_Milestone('unknown', 'Rosario Spring Conference', '', START, '')).toBe(
      'Rosario Spring Conference - ',
    );
  });
});

describe('getSkeletonLoadingIdFromMilestoneTypeId', () => {
  it('maps guest, host and transport milestones to their skeleton, others to 0', () => {
    const T = OrbitMilestoneType;
    expect(getSkeletonLoadingIdFromMilestoneTypeId(T.AccommodationGuest)).toBe(
      OrbitSkeletonLoading.MilestoneDetailGuest,
    );
    expect(getSkeletonLoadingIdFromMilestoneTypeId(T.MealGuest)).toBe(OrbitSkeletonLoading.MilestoneDetailGuest);
    for (const id of [T.AccommodationHost, T.MealHost, T.Helper]) {
      expect(getSkeletonLoadingIdFromMilestoneTypeId(id)).toBe(OrbitSkeletonLoading.MilestoneDetailHost);
    }
    for (const id of [T.Boat, T.Vehicle, T.Train, T.Flight]) {
      expect(getSkeletonLoadingIdFromMilestoneTypeId(id)).toBe(OrbitSkeletonLoading.TransportDetail);
    }
    expect(getSkeletonLoadingIdFromMilestoneTypeId(T.MealAtHall)).toBe(0);
    expect(getSkeletonLoadingIdFromMilestoneTypeId('')).toBe(0);
  });
});

describe('onApplicationEvent_ViewHousehold', () => {
  it('logs the ViewHousehold application event with its ids', () => {
    const info = vi.spyOn(log, 'info').mockImplementation(() => undefined);
    onApplicationEvent_ViewHousehold('770101', '31', '6402');
    expect(info).toHaveBeenCalledWith('ApplicationEvent', {
      Event: 'ViewHousehold',
      TargetHouseholdId: '770101',
      MilestoneId: '31',
      EventId: '6402',
    });
  });
});
