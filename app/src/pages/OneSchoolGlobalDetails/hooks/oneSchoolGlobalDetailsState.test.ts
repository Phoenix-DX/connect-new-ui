import { describe, expect, it } from 'vitest';
import type { OneSchoolGlobalDetails } from '@/api/locality';
import { get_LookupSection } from '@/lib/ubtConnect/actions';
import {
  INITIAL_ONE_SCHOOL_GLOBAL_DETAILS_STATE,
  listStatusClassOf,
  oneSchoolGlobalDetailsCallInputs,
  oneSchoolGlobalDetailsReducer,
  SKELETON_DETAIL_CARD,
} from './oneSchoolGlobalDetailsState';

/* The pure part of OneSchoolGlobalDetails: the state after OnReady, its changes, the skeleton card, the list class and
   the screen variables of the data action. Fictional school. */
const DETAILS: OneSchoolGlobalDetails = {
  card: {
    communityBusinessId: '1430',
    signedURL: '/mock-images/placeholder-landscape.svg',
    name: 'OneSchool Alem',
    address: '1240 Avenida Colon, Bahia Blanca',
    areasServed: 'Bahia Blanca, Tandil',
    businessLinks: [{ text: 'Campus website', link: 'https://campus.example.org', id: '7' }],
  },
  householdCoordinates: { Latitude: '-38.72', Longitude: '-62.27', UseCoordinates: true },
};

describe('oneSchoolGlobalDetailsState', () => {
  it('starts from the OnReady values: Get_LookupSection(False), Upcoming events, not bookmarked, no answer', () => {
    expect(INITIAL_ONE_SCHOOL_GLOBAL_DETAILS_STATE).toEqual({
      LookupSections: get_LookupSection(false),
      Selected_OneschoolGlobal_SubsectionId: 'Upcoming events',
      LocalIsBookmarked: false,
      GetOneSchoolGlobalDetails: null,
    });
    expect(INITIAL_ONE_SCHOOL_GLOBAL_DETAILS_STATE.LookupSections.OneSchoolStatistitics.Singular).toBe(
      'Show student numbers',
    );
  });

  it('the skeleton card has the compiled name and address (two spaces) and no links', () => {
    expect(SKELETON_DETAIL_CARD).toEqual({
      communityBusinessId: '0',
      signedURL: '',
      name: 'OneSchool Global',
      address: '9 Park Ave, Aberfoyle  Park SA 5159',
      areasServed: '',
      businessLinks: [],
    });
  });

  it('the reducer sets the sub-section, the bookmark and the answer, and changes nothing else', () => {
    const selected = oneSchoolGlobalDetailsReducer(INITIAL_ONE_SCHOOL_GLOBAL_DETAILS_STATE, {
      type: 'subsectionSelected',
      subsectionId: 'About our campus',
    });
    expect(selected).toEqual({
      ...INITIAL_ONE_SCHOOL_GLOBAL_DETAILS_STATE,
      Selected_OneschoolGlobal_SubsectionId: 'About our campus',
    });
    const bookmarked = oneSchoolGlobalDetailsReducer(selected, { type: 'bookmarkChanged', isBookmarked: true });
    expect(bookmarked).toEqual({ ...selected, LocalIsBookmarked: true });
    const fetched = oneSchoolGlobalDetailsReducer(bookmarked, { type: 'detailsFetched', details: DETAILS });
    expect(fetched).toEqual({ ...bookmarked, GetOneSchoolGlobalDetails: DETAILS });
  });

  it('the list class follows the fetch status: none when fetched, list-error after a failure, else list-loading', () => {
    expect(listStatusClassOf(true, false)).toBe('');
    expect(listStatusClassOf(true, true)).toBe('');
    expect(listStatusClassOf(false, true)).toBe(' list-error');
    expect(listStatusClassOf(false, false)).toBe(' list-loading');
  });

  it('the call inputs are the screen variables of the moment and the route input', () => {
    const state = { ...INITIAL_ONE_SCHOOL_GLOBAL_DETAILS_STATE, LocalIsBookmarked: true };
    expect(oneSchoolGlobalDetailsCallInputs(state, { In_OneSchoolGlobalId: '1430' })).toEqual({
      lookupSections: get_LookupSection(false),
      selected_OneschoolGlobal_SubsectionId: 'Upcoming events',
      type_OneschoolGlobal_SubsectionId: { UpcomingEvents: 'Upcoming events', AboutOurCampus: 'About our campus' },
      localIsBookmarked: true,
      in_OneSchoolGlobalId: '1430',
    });
  });
});
