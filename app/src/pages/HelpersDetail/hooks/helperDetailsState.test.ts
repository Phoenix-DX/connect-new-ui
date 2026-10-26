import { describe, expect, it } from 'vitest';
import type { HelperData } from '@/api/event';
import {
  helperDetailsCallInputs,
  helperDetailsReducer,
  INITIAL_HELPER_DETAILS_STATE,
  restoreHelperDetailsState,
  type HelperDetailsState,
} from './helperDetailsState';

/* Fictional helpers of an Orbit conference. */
const helperData: HelperData = {
  EventDetails: {
    Id: '7301',
    Name: 'Weekend Conference',
    Location: 'Mar del Plata',
    StartDate: '2026-03-13T09:00:00Z',
    EndDate: '2026-03-15T17:00:00Z',
  },
  Helpers: [{ Role: 'CATERING', MemberInformation: [{ MemberId: '91011', FirstName: 'Lucía' }] }],
};
const inputs = {
  In_EventId: '7301',
  In_PreloadEventName: 'Weekend Conference',
  In_PreloadMilestoneName: 'Helper',
  In_OrbitMilestoneTypeId: 'helper-host',
  In_HostId: '42438',
};

describe('helperDetailsReducer', () => {
  it('starts without data, not fetching and with an empty call popup', () => {
    expect(INITIAL_HELPER_DETAILS_STATE).toEqual({
      helperData: { EventDetails: { Id: '0', Name: '', Location: '', StartDate: '', EndDate: '' }, Helpers: [] },
      isFetchingData: false,
      isFetchingPhoneData: false,
      contactByPhoneData: {},
      isDataFetched: false,
    });
  });

  it('runs RefreshData: fetching, the answer, then not fetching', () => {
    let state = helperDetailsReducer(INITIAL_HELPER_DETAILS_STATE, { type: 'fetchStarted' });
    expect(state.isFetchingData).toBe(true);
    state = helperDetailsReducer(state, { type: 'helperDetailsFetched', helperData });
    expect(state).toMatchObject({ isFetchingData: true, isDataFetched: true, helperData });
    state = helperDetailsReducer(state, { type: 'fetchEnded' });
    expect(state).toMatchObject({ isFetchingData: false, isDataFetched: true });
  });

  it('assigns the fields of the call popup and keeps the others', () => {
    let state = helperDetailsReducer(INITIAL_HELPER_DETAILS_STATE, {
      type: 'contactPopupChanged',
      patch: { Name: 'Lucía Suárez', ShowPopup: true, IsLoading: true },
    });
    state = helperDetailsReducer(state, { type: 'contactPhoneSet', phone: '+54 223 555 0101' });
    state = helperDetailsReducer(state, { type: 'contactPopupChanged', patch: { IsLoading: false } });
    expect(state.contactByPhoneData).toEqual({
      ContactPopupData: { Name: 'Lucía Suárez', ShowPopup: true, IsLoading: false },
      Phone: '+54 223 555 0101',
    });
  });

  it('sets the phones and the popup locality of a member contact', () => {
    const start: HelperDetailsState = {
      ...INITIAL_HELPER_DETAILS_STATE,
      contactByPhoneData: { ContactPopupData: { Name: 'Lucía Suárez', ShowPopup: true } },
    };
    const state = helperDetailsReducer(start, {
      type: 'memberContactFetched',
      phones: { MobilePhone: '+54 223 555 0101', HomePhone: '', WorkPhone: '' },
      patch: { Locality: 'Mar del Plata', TimezoneName: 'ART', TimezoneOffset: -10800, CountryName: 'Argentina' },
    });
    expect(state.contactByPhoneData).toEqual({
      ContactPopupData: {
        Name: 'Lucía Suárez',
        ShowPopup: true,
        Locality: 'Mar del Plata',
        TimezoneName: 'ART',
        TimezoneOffset: -10800,
        CountryName: 'Argentina',
      },
      MobilePhone: '+54 223 555 0101',
      HomePhone: '',
      WorkPhone: '',
    });
  });
});

describe('restoreHelperDetailsState', () => {
  it('keeps the saved variables and closes the call popup', () => {
    const saved: HelperDetailsState = {
      ...INITIAL_HELPER_DETAILS_STATE,
      helperData,
      isDataFetched: true,
      contactByPhoneData: { Phone: '+54 223 555 0101', ContactPopupData: { Name: 'Lucía Suárez', ShowPopup: true } },
    };
    expect(restoreHelperDetailsState(saved)).toEqual({
      ...saved,
      contactByPhoneData: { Phone: '+54 223 555 0101', ContactPopupData: { Name: 'Lucía Suárez', ShowPopup: false } },
    });
  });
});

describe('helperDetailsCallInputs', () => {
  it('sends the block variables in the recorded order, without the record variables', () => {
    const state = helperDetailsReducer(INITIAL_HELPER_DETAILS_STATE, { type: 'fetchStarted' });
    expect(JSON.stringify(helperDetailsCallInputs(state, inputs))).toBe(
      '{"IsFetchingData":true,"IsFetchingPhoneData":false,"In_EventId":"7301",' +
        '"In_PreloadEventName":"Weekend Conference","In_PreloadMilestoneName":"Helper",' +
        '"In_OrbitMilestoneTypeId":"helper-host","In_HostId":"42438"}',
    );
  });
});
