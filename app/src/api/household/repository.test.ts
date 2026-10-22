import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { fetchHousehold, fetchHouseholdCoordinates } from './repository';
import type { HouseholdCallInputs } from './types';

/* The MSW mocks of the test setup answer the fictional household of HouseholdDetails/default (5 members, no married
   children, visible) for an unknown HouseholdId. */
const inputs: HouseholdCallInputs = {
  HouseholdId: '0',
  isEnabled: true,
  In_ShowKebabMenu: false,
  In_CheckVisibility: true,
  In_IsSkeletonOnly: false,
  In_HideActions: false,
  UserAge_Visibility: true,
};

beforeEach(() => {
  sessionStorage.setItem('mock:latency', '0');
  window.__osCalls = [];
});
afterEach(() => {
  sessionStorage.clear();
});

describe('household repository', () => {
  it('fetchHousehold calls DataActionGetHousehold of HouseholdDetails_Block with the inputs as they are', async () => {
    const household = await fetchHousehold(inputs);
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'UBTConnect',
        owner: 'HouseholdDetails_Block',
        action: 'DataActionGetHousehold',
        inputNames: Object.keys(inputs).sort(),
      }),
    ]);
    expect(household.Out_HouseholdMembers).toHaveLength(5);
    expect(household.Out_NonHouseholdMembers).toEqual([]);
    expect(household.isVisible).toBe(true);
    expect(household.Household.HouseholdCard?.Household_Card_Content?.Name).not.toBe('');
  });

  it('fetchHouseholdCoordinates calls DataActionGetHousehold_Coordinates with the same inputs', async () => {
    const coordinates = await fetchHouseholdCoordinates(inputs);
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'UBTConnect',
        owner: 'HouseholdDetails_Block',
        action: 'DataActionGetHousehold_Coordinates',
        inputNames: Object.keys(inputs).sort(),
      }),
    ]);
    expect(coordinates).toEqual({ Latitude: '-33.8688', Longitude: '151.2093', UseCoordinates: true });
  });

  it('a failed call raises the exception of callAction', async () => {
    sessionStorage.setItem('mock:mock', 'error');
    await expect(fetchHousehold(inputs)).rejects.toThrow('Request failed with status 500');
  });
});
