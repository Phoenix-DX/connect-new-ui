import { describe, expect, it } from 'vitest';
import { getSkeletonList_UI_SubdivisionHousehold, getSkeleton_UI_SubdivisionDetails } from '@/lib/ubtConnect/actions';
import { INITIAL_SUPPER_MEETING_DETAILS_STATE, supperMeetingDetailsReducer } from './supperMeetingDetailsState';

const SUBDIVISION = {
  Subdivision_Card: {
    SubdivisionId: '1210',
    Subdivision_Card_Content: { Name: 'Zapiola (Main Meeting Room)', Address: 'Zapiola 1450, Bahia Blanca' },
  },
};
const HOUSEHOLDS = [
  { HouseholdId: '42438', HouseholdName: 'Vitale', ChildrenNames: 'Sofia, Mateo' },
  { HouseholdId: '91004', HouseholdName: 'Ortiz', ChildrenNames: '' },
];

describe('supperMeetingDetailsReducer', () => {
  it('starts with the skeleton supper meeting and four skeleton household rows, nothing fetched', () => {
    expect(INITIAL_SUPPER_MEETING_DETAILS_STATE).toEqual({
      isDataFetched: false,
      subdivision: getSkeleton_UI_SubdivisionDetails(),
      households: { isDataFetched: false, isError: false, list: getSkeletonList_UI_SubdivisionHousehold(4) },
    });
  });

  it('subdivisionFetched: the supper meeting, fetched; the households stay', () => {
    const state = supperMeetingDetailsReducer(INITIAL_SUPPER_MEETING_DETAILS_STATE, {
      type: 'subdivisionFetched',
      subdivision: SUBDIVISION,
    });
    expect(state).toEqual({ ...INITIAL_SUPPER_MEETING_DETAILS_STATE, isDataFetched: true, subdivision: SUBDIVISION });
  });

  it('householdsFetched: the rows, fetched, no error; the supper meeting stays', () => {
    const state = supperMeetingDetailsReducer(INITIAL_SUPPER_MEETING_DETAILS_STATE, {
      type: 'householdsFetched',
      list: HOUSEHOLDS,
    });
    expect(state.households).toEqual({ isDataFetched: true, isError: false, list: HOUSEHOLDS });
    expect(state.isDataFetched).toBe(false);
    expect(state.subdivision).toBe(INITIAL_SUPPER_MEETING_DETAILS_STATE.subdivision);
  });

  it('householdsFetchFailed: the Error status; the skeleton rows stay and nothing is fetched', () => {
    const state = supperMeetingDetailsReducer(INITIAL_SUPPER_MEETING_DETAILS_STATE, { type: 'householdsFetchFailed' });
    expect(state.households).toEqual({
      isDataFetched: false,
      isError: true,
      list: INITIAL_SUPPER_MEETING_DETAILS_STATE.households.list,
    });
  });
});
