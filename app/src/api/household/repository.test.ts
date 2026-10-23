import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import {
  fetchHousehold,
  fetchHouseholdCaption,
  fetchHouseholdCoordinates,
  fetchLocalityHouseholdIds,
} from './repository';
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

/* The MSW mocks of the Photobook route answer the 23 fictional households of the locality "Bahia Blanca", the Vitale
   household (42438) first, and a fictional caption for the requested household. */
describe('household repository: Photobook', () => {
  it('fetchLocalityHouseholdIds calls DataActionGetLocalityHouseholdIds of Photobook with the screen variables', async () => {
    const households = await fetchLocalityHouseholdIds({
      inHouseholdId: '42438',
      inLocalityId: '252',
      isLoading: true,
      selectedHousehold: { id: '42438', position: 0 },
    });
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'UBTConnect',
        owner: 'Photobook',
        action: 'DataActionGetLocalityHouseholdIds',
        inputNames: ['IsLoading', 'SelectedHousehold', 'In_HouseholdId', 'In_LocalityId'].sort(),
      }),
    ]);
    expect(households).toHaveLength(23);
    expect(households[0]).toEqual(expect.objectContaining({ householdId: '42438', locality: 'Bahia Blanca' }));
  });

  it('fetchHouseholdCaption calls DataActionGetHouseholdCaption of Photobook_Options_Left', async () => {
    const current = { householdId: '42438', householdName: 'Marco & Lucia Vitale', locality: 'Bahia Blanca' };
    const caption = await fetchHouseholdCaption({
      inCurrentHousehold: current,
      inIsShow: true,
      inMainContainerClass: 'photobook-carousel',
      infoSheetId: '',
      lastFetched: { householdId: '0', householdName: '', locality: '' },
      isLoading: true,
    });
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'UBTConnect',
        owner: 'Photobook_Options_Left',
        action: 'DataActionGetHouseholdCaption',
        inputNames: [
          'In_CurrentHousehold',
          'In_IsShow',
          'In_MainContainerClass',
          'InfoSheetId',
          'LastFetched',
          'isLoading',
        ].sort(),
      }),
    ]);
    expect(caption.lastFetchedHousehold).toEqual(current);
    expect(caption.householdCaption).toContain('(Bahia Blanca)');
  });

  it('a failed Photobook call raises the exception of callAction', async () => {
    sessionStorage.setItem('mock:mock', 'error');
    await expect(
      fetchLocalityHouseholdIds({
        inHouseholdId: '0',
        inLocalityId: '0',
        isLoading: true,
        selectedHousehold: { id: '0', position: 0 },
      }),
    ).rejects.toThrow('Request failed with status 500');
  });
});
