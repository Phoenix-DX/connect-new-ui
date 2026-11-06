import { describe, expect, it, vi } from 'vitest';
import type { DetailGuestItem } from '@/api/event';
import type { UserInformation } from '@/platform/session/mockUser';
import { getUserInformation } from '@/platform/session/userInfo';
import { carouselFilteredEventResults, isFreeSubscriptionPlan, isRegionalSubscriptionPlan } from './actions';

vi.mock('@/platform/session/userInfo', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/session/userInfo')>()),
  getUserInformation: vi.fn(),
}));

/* CarouselFilteredEventResults (Connect2_OrbitMobile_MUI.controller.js :879-985) and the plan checks of UBTConnect_Utils
   (:4178-4324). Fictional guests of the LDM world. */
const guest = (id: string, name: string, patch: Partial<DetailGuestItem> = {}): DetailGuestItem =>
  ({
    HouseholderID: id,
    HouseholderName: name,
    HouseholdDisplay: true,
    RecordDisabled: false,
    ...patch,
  }) as DetailGuestItem;
const GUESTS = [
  guest('42438', 'Vitale, Matías & Lucía'),
  guest('91004', 'Molina, Andrés & Paula', { HouseholdDisplay: false }),
  guest('91017', 'Torres, Diego & Carla', { RecordDisabled: true }),
  guest('91023', 'Correa, Javier & Sofía'),
];
const plan = (SubscriptionType: string) =>
  vi.mocked(getUserInformation).mockResolvedValue({
    Directory_UserCurrent: { Directory_UserCurrent_Subscription: { SubscriptionType } },
  } as unknown as UserInformation);

describe('CarouselFilteredEventResults', () => {
  it('without a limited subscription: the displayed guests, and the hidden ones before the row', () => {
    const r = carouselFilteredEventResults(GUESTS, false, 3);
    expect(r.householdIdList.map((p) => p.Id)).toEqual(['42438', '91017', '91023']);
    expect(r.householdIdList[0]).toEqual({ Id: '42438', Name: 'Vitale, Matías & Lucía', HouseholdListIndex: 0 });
    expect(r.numberFilteredToCurrent).toBe(1);
    expect(r.numberFiltered).toBe(1);
    expect(r.preloading).toEqual({
      IsPreloaded: true,
      IsFromMyUpdateFeed: false,
      PreloadedCarouselItems: r.householdIdList.map((p) => ({ ...p, Bucket: '', Path: '', Type: '' })),
    });
  });

  it('with a limited subscription: the disabled guests are left out too', () => {
    const r = carouselFilteredEventResults(GUESTS, true, 3);
    expect(r.householdIdList.map((p) => p.Id)).toEqual(['42438', '91023']);
    expect(r.numberFilteredToCurrent).toBe(2);
    expect(r.numberFiltered).toBe(2);
    expect(r.preloading?.PreloadedCarouselItems.map((p) => p.Id)).toEqual(['42438', '91023']);
  });

  it('with a limited subscription and no guest left: empty outputs and no preload object', () => {
    expect(carouselFilteredEventResults(GUESTS.slice(1, 3), true, 1)).toEqual({
      householdIdList: [],
      numberFilteredToCurrent: 0,
      numberFiltered: 0,
      preloading: null,
    });
  });
});

describe('IsFreeSubscriptionPlan and IsRegionalSubscriptionPlan', () => {
  it('compare the SubscriptionType of the user', async () => {
    plan('Free');
    expect(await isFreeSubscriptionPlan()).toBe(true);
    expect(await isRegionalSubscriptionPlan()).toBe(false);
    plan('Regional');
    expect(await isFreeSubscriptionPlan()).toBe(false);
    expect(await isRegionalSubscriptionPlan()).toBe(true);
  });
});
