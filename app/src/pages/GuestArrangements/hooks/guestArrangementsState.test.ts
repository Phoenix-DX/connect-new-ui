import { describe, expect, it } from 'vitest';
import type { GuestArrangementsResult } from '@/api/event';
import {
  EMPTY_GUEST_ARRANGEMENTS_DATA,
  guestArrangementsCallInputs,
  guestArrangementsReducer,
  INITIAL_GUEST_ARRANGEMENTS_STATE,
  type GuestArrangementsBlockInputs,
} from './guestArrangementsState';

/* Fictional block inputs and answer: the Ortega family visits for a conference in Rosario. */
const inputs: GuestArrangementsBlockInputs = {
  In_MemberId: '770104',
  In_EventId: '6402',
  In_HostId: '770001',
  In_MilestoneId: '31',
  In_PreloadEventName: 'Rosario Spring Conference',
  In_PreloadMilestoneName: 'Hosting the Ortegas',
  In_OrbitMilestoneTypeId: 'accommodation-host',
};
const result: GuestArrangementsResult = {
  HasData: true,
  Response: {
    ...EMPTY_GUEST_ARRANGEMENTS_DATA,
    MemberId: '770104',
    Title: 'Mr',
    FirstName: 'Tomás',
    LastName: 'Ortega',
    EventDetails: {
      Id: '6402',
      Name: 'Rosario Spring Conference',
      Location: 'Rosario',
      StartDate: '2026-11-06',
      EndDate: '2026-11-08',
    },
    MealDetails: [{ MilestoneDateTime: '2026-11-06T12:30:00Z', MiddayMeal: 'Lunch at the hall', EveningMeal: '' }],
  },
};

describe('guestArrangementsState', () => {
  it('starts with the defaults: no data, not fetching, not fetched', () => {
    expect(INITIAL_GUEST_ARRANGEMENTS_STATE).toEqual({
      guestArrangementsData: EMPTY_GUEST_ARRANGEMENTS_DATA,
      isFetchingData: false,
      isDataFetched: false,
      hasData: false,
    });
    expect(EMPTY_GUEST_ARRANGEMENTS_DATA).toMatchObject({
      MemberId: '0',
      EventDetails: { Id: '0', StartDate: '', EndDate: '' },
      SpecialNeeds: [],
      ArrivalDetails: [],
      MealDetails: [],
      DepartureDetails: [],
    });
  });

  it('fetchStarted sets IsFetchingData', () => {
    const state = guestArrangementsReducer(INITIAL_GUEST_ARRANGEMENTS_STATE, { type: 'fetchStarted' });
    expect(state).toEqual({ ...INITIAL_GUEST_ARRANGEMENTS_STATE, isFetchingData: true });
  });

  it('guestArrangementsFetched keeps the answer and ends the fetching', () => {
    const fetching = guestArrangementsReducer(INITIAL_GUEST_ARRANGEMENTS_STATE, { type: 'fetchStarted' });
    expect(guestArrangementsReducer(fetching, { type: 'guestArrangementsFetched', result })).toEqual({
      guestArrangementsData: result.Response,
      isFetchingData: false,
      isDataFetched: true,
      hasData: true,
    });
    const noData = { HasData: false, Response: EMPTY_GUEST_ARRANGEMENTS_DATA };
    expect(guestArrangementsReducer(fetching, { type: 'guestArrangementsFetched', result: noData })).toMatchObject({
      isDataFetched: true,
      hasData: false,
      isFetchingData: false,
    });
  });

  it('the call inputs are IsFetchingData and the block inputs', () => {
    const fetching = guestArrangementsReducer(INITIAL_GUEST_ARRANGEMENTS_STATE, { type: 'fetchStarted' });
    expect(guestArrangementsCallInputs(fetching, inputs)).toEqual({ IsFetchingData: true, ...inputs });
    expect(guestArrangementsCallInputs(INITIAL_GUEST_ARRANGEMENTS_STATE, inputs).IsFetchingData).toBe(false);
  });
});
