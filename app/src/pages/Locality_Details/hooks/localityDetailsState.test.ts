import { describe, expect, it } from 'vitest';
import type { LocalityDetails } from '@/api/locality';
import {
  initialLocalityDetailsState,
  initializeScreen,
  localityDetailsCallInputs,
  localityDetailsReducer,
  NO_LOCALITY_DETAILS,
} from './localityDetailsState';

/* The screen variables of Locality_Details without React. Fictional localities. */
const inputs = { LocalityId: '252', PreloadedLocalityLabel: 'Bahia Blanca, Argentina' };
const user = { householdId: '91002', localityId: '585' };
const tagNames = (tags: { Text?: string }[]) => tags.map((t) => t.Text);
const DETAILS: LocalityDetails = {
  ...NO_LOCALITY_DETAILS,
  bretherenCount: 54,
  householdCount: 23,
  localityName: 'Bahia Blanca',
  countryName: 'Argentina',
  countryCode: 'AR',
  timezoneName: 'America/Argentina/Buenos_Aires',
  timezoneOffset: '-10800',
};

describe('initialLocalityDetailsState', () => {
  it('starts with the inputs, the preloaded label and the tags of the user locality', () => {
    const state = initialLocalityDetailsState(inputs, false);
    expect(state).toMatchObject({
      localityId: '252',
      localityLabel: 'Bahia Blanca, Argentina',
      preloadedLocalityLabel: 'Bahia Blanca, Argentina',
      isUserLocality: true,
      isScreenInitialized: false,
      tagsList_SelectedTag: '',
      logged_User: { householdId: '0', localityId: '0' },
      get_LocalityDetails: { isDataFetched: false, hasFetchError: false, localityDetails: NO_LOCALITY_DETAILS },
    });
    expect(tagNames(state.tagsList)).toEqual([
      'Households',
      'My Household',
      'Supper Meetings',
      'Interchange',
      'OneSchool Global',
    ]);
  });

  it('adds the Locality Contacts tag when the permission check gives access', () => {
    expect(tagNames(initialLocalityDetailsState(inputs, true).tagsList).at(-1)).toBe('Locality Contacts');
  });
});

describe('initializeScreen', () => {
  it('keeps the locality of the route and drops My Household for another locality', () => {
    const state = initializeScreen(initialLocalityDetailsState(inputs, false), user, 'Monte Hermoso, Argentina', false);
    expect(state).toMatchObject({
      logged_User: user,
      localityId: '252',
      localityLabel: 'Bahia Blanca, Argentina',
      isUserLocality: false,
      tagsList_SelectedTag: 'Households',
      isScreenInitialized: true,
    });
    expect(tagNames(state.tagsList)).toEqual(['Households', 'Supper Meetings', 'Interchange', 'OneSchool Global']);
  });

  it('opens the locality of the user when the route has no LocalityId', () => {
    const initial = initialLocalityDetailsState({ LocalityId: '0', PreloadedLocalityLabel: '' }, false);
    const state = initializeScreen(initial, user, 'Bahia Blanca, Argentina', false);
    expect(state).toMatchObject({ localityId: '585', localityLabel: 'Bahia Blanca, Argentina', isUserLocality: true });
    expect(tagNames(state.tagsList)).toContain('My Household');
  });
});

describe('localityDetailsReducer', () => {
  const initial = initialLocalityDetailsState(inputs, false);

  it('screenInitialized is initializeScreen', () => {
    const action = {
      type: 'screenInitialized',
      loggedUser: user,
      userLocalityLabel: 'x',
      hasLocalityContacts: true,
    } as const;
    expect(localityDetailsReducer(initial, action)).toEqual(initializeScreen(initial, user, 'x', true));
  });

  it('detailsFetched keeps the details and sets the label from the locality and the country', () => {
    const state = localityDetailsReducer(
      { ...initial, localityLabel: '' },
      { type: 'detailsFetched', localityDetails: { ...DETAILS, localityName: 'Monte Hermoso' } },
    );
    expect(state.get_LocalityDetails).toEqual({
      isDataFetched: true,
      hasFetchError: false,
      localityDetails: { ...DETAILS, localityName: 'Monte Hermoso' },
    });
    expect(state.localityLabel).toBe('Monte Hermoso, Argentina');
  });

  it('detailsFailed marks the fetch error and keeps the rest', () => {
    const fetched = localityDetailsReducer(initial, { type: 'detailsFetched', localityDetails: DETAILS });
    expect(localityDetailsReducer(fetched, { type: 'detailsFailed' }).get_LocalityDetails).toEqual({
      isDataFetched: true,
      hasFetchError: true,
      localityDetails: DETAILS,
    });
  });

  it('headerScrolled sets HeaderIsScrolled', () => {
    expect(localityDetailsReducer(initial, { type: 'headerScrolled', isHeaderScrolled: true }).headerIsScrolled).toBe(
      true,
    );
  });

  it('tagsChanged keeps the tags and the identifier of the selected one, "" when none is selected', () => {
    const tags = initial.tagsList.map((t) => ({ ...t, IsSelected: t.Text === 'Interchange' }));
    const state = localityDetailsReducer(initial, { type: 'tagsChanged', tags });
    expect(state.tagsList).toBe(tags);
    expect(state.tagsList_SelectedTag).toBe('Interchange');
    const none = tags.map((t) => ({ ...t, IsSelected: false }));
    expect(localityDetailsReducer(state, { type: 'tagsChanged', tags: none }).tagsList_SelectedTag).toBe('');
  });
});

describe('localityDetailsCallInputs', () => {
  it('sends the screen variables with their OutSystems names', () => {
    const state = initializeScreen(initialLocalityDetailsState(inputs, false), user, '', false);
    expect(localityDetailsCallInputs(state)).toEqual({
      TagsList: state.tagsList,
      HeaderIsScrolled: false,
      TagsList_SelectedTag: 'Households',
      IsUserLocality: false,
      LocalityLabel: 'Bahia Blanca, Argentina',
      IsScreenInitialized: true,
      LocalityId: '252',
      PreloadedLocalityLabel: 'Bahia Blanca, Argentina',
    });
  });
});
