import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import {
  fetchHousehold,
  fetchHouseholdCaption,
  fetchHouseholdCardMembers,
  fetchHouseholdCoordinates,
  fetchLocalityHouseholdIds,
  fetchLocalityHouseholds,
  fetchMemberRelations,
  fetchOrbitHouseholdMembers,
  fetchSiblingRelations,
} from './repository';
import type { HouseholdCallInputs, MemberRelationsCallInputs } from './types';

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

/* The MSW mocks of the route Household_Relations answer the relations of the fictional Vitale householder for any
   member: the parents in one household, no previous spouse and four siblings. */
const relationsInputs: MemberRelationsCallInputs = {
  HouseholdId: '42438',
  MemberId: '7100',
  UserAge_Visibility: false,
  isLoading: true,
  ShowNotesSheet: false,
};

describe('household repository of the relations', () => {
  it('fetchMemberRelations calls DataActionGet_MemberDetails of HouseholdRelations_Block with the inputs', async () => {
    const relations = await fetchMemberRelations(relationsInputs);
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'UBTConnect',
        owner: 'HouseholdRelations_Block',
        action: 'DataActionGet_MemberDetails',
        inputNames: Object.keys(relationsInputs).sort(),
      }),
    ]);
    expect(relations.FamilyName).toBe('The Vitales');
    expect(relations.FormerSpouses).toEqual([]);
    expect(relations.Father.HouseholdId).toBe(relations.ParentHouseholdId);
  });

  it('fetchSiblingRelations calls DataActionGet_ParentHouseholdDetails with the same inputs', async () => {
    const siblings = await fetchSiblingRelations(relationsInputs);
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'UBTConnect',
        owner: 'HouseholdRelations_Block',
        action: 'DataActionGet_ParentHouseholdDetails',
        inputNames: Object.keys(relationsInputs).sort(),
      }),
    ]);
    expect(siblings.Out_siblingRelations).toHaveLength(4);
  });

  it('a failed relations call raises the exception of callAction', async () => {
    sessionStorage.setItem('mock:mock', 'error');
    await expect(fetchSiblingRelations(relationsInputs)).rejects.toThrow('Request failed with status 500');
  });
});

/* The MSW mocks of Locality_Details answer the 23 fictional households of locality 252 and two member avatars per
   household (one for a single householder). */
describe('locality household repository', () => {
  it('fetchLocalityHouseholds calls DataActionGetLocalityHouseholds of Locality_Households_HouseholdList', async () => {
    const households = await fetchLocalityHouseholds('252');
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'UBTConnect',
        owner: 'Locality_Households_HouseholdList',
        action: 'DataActionGetLocalityHouseholds',
        inputNames: ['In_LocalityId'],
      }),
    ]);
    expect(households).toHaveLength(23);
    expect(households[0]).toMatchObject({
      householdId: '42438',
      isBookmarked: false,
      localityName: 'Bahia Blanca',
      countryName: 'Argentina',
    });
  });

  it('fetchHouseholdCardMembers calls DataActionGetMembers of Household_Card with the household row', async () => {
    const [household] = await fetchLocalityHouseholds('252');
    window.__osCalls = [];
    if (!household) throw new Error('no household');
    const members = await fetchHouseholdCardMembers(household);
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'UBTConnect',
        owner: 'Household_Card',
        action: 'DataActionGetMembers',
        inputNames: ['Household'],
      }),
    ]);
    expect(members.visibleAvatars).toBe(5);
    expect(members.members).toEqual([
      { imageURL: '', entityId: '92001', entityType: 'Member' },
      { imageURL: '', entityId: '92002', entityType: 'Member' },
    ]);
  });
});

/* The MSW mocks of the OrbitLanding route answer the fictional members of the signed-in household, none selected. */
describe('household repository: Orbit landing', () => {
  const orbitInputs = {
    SelectedMemberId: '0',
    IsFetchingData: true,
    EventFilter: 0,
    SortEventsASC: true,
    Popup_SortByOpened: false,
    Popup_FiltersOpened: false,
    CurrentMemberId: '0',
  };

  it('fetchOrbitHouseholdMembers calls DataActionGet_HouseholdMembers of ScreenBlock_OrbitLanding with the block variables', async () => {
    const members = await fetchOrbitHouseholdMembers(orbitInputs);
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'Connect2_OrbitMobile_MUI',
        owner: 'ScreenBlock_OrbitLanding',
        action: 'DataActionGet_HouseholdMembers',
        inputNames: Object.keys(orbitInputs).sort(),
      }),
    ]);
    expect(members.length).toBeGreaterThan(1);
    expect(members.every((m) => !m.isSelected && m.memberId !== '' && m.firstName !== '')).toBe(true);
  });

  it('a failed Orbit landing call raises the exception of callAction', async () => {
    sessionStorage.setItem('mock:mock', 'error');
    await expect(fetchOrbitHouseholdMembers(orbitInputs)).rejects.toThrow('Request failed with status 500');
  });
});
