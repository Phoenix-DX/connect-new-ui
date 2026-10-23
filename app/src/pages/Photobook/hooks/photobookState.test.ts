import { describe, expect, it } from 'vitest';
import type { PhotobookHousehold } from '@/api/household';
import { initialPhotobookState, photobookReducer, type PhotobookState } from './photobookState';

/* The state of the Photobook screen. Fictional households. */
const households: PhotobookHousehold[] = [
  { householdId: '7001', householdName: 'Ada & Tom Marlowe', locality: 'Nelson' },
  { householdId: '7002', householdName: 'Ben Harlow', locality: 'Nelson' },
  { householdId: '7003', householdName: 'Cara & Dan Moss', locality: 'Nelson' },
];

describe('photobookState', () => {
  it('OnInitialize selects In_HouseholdId at position 0 and loads', () => {
    expect(initialPhotobookState({ In_HouseholdId: '7002', In_LocalityId: '252' })).toEqual({
      selectedHousehold: { id: '7002', position: 0 },
      isLoading: true,
      households: null,
    });
  });

  it('OnAfterFetch keeps the list, selects the position of In_HouseholdId and stops loading', () => {
    const state = photobookReducer(initialPhotobookState({ In_HouseholdId: '7003', In_LocalityId: '0' }), {
      type: 'localityHouseholdIdsFetched',
      households,
      householdId: '7003',
    });
    expect(state).toEqual({ selectedHousehold: { id: '7003', position: 2 }, isLoading: false, households });
  });

  it('OnAfterFetch selects position 0 when In_HouseholdId is not in the list', () => {
    const before: PhotobookState = {
      selectedHousehold: { id: '9999', position: 1 },
      isLoading: true,
      households: null,
    };
    const state = photobookReducer(before, { type: 'localityHouseholdIdsFetched', households, householdId: '9999' });
    expect(state.selectedHousehold).toEqual({ id: '9999', position: 0 });
    expect(state.isLoading).toBe(false);
  });

  it('OnAfterFetch replaces an earlier list and keeps SelectedHousehold.Id', () => {
    const earlier: PhotobookState = {
      selectedHousehold: { id: '7002', position: 0 },
      isLoading: false,
      households: households.slice(1, 2),
    };
    const state = photobookReducer(earlier, { type: 'localityHouseholdIdsFetched', households, householdId: '7002' });
    expect(state).toEqual({ selectedHousehold: { id: '7002', position: 1 }, isLoading: false, households });
  });
});
