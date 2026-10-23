import { describe, expect, it } from 'vitest';
import type { LocalityHousehold } from '@/api/household';
import type { Interchange, OneSchoolCard, SubdivisionCard } from '@/api/locality';
import {
  appendRows,
  INITIAL_LOCALITY_HOUSEHOLD_LIST,
  INITIAL_LOCALITY_INTERCHANGE,
  INITIAL_LOCALITY_ONESCHOOL_GLOBAL,
  INITIAL_LOCALITY_SUBDIVISIONS,
  localityHouseholdListReducer,
  localityInterchangeReducer,
  localityOneSchoolGlobalReducer,
  localitySubdivisionsReducer,
  oneSchoolListCallInputs,
  subdivisionListCallInputs,
  withBookmark,
  withStatisticIcons,
} from './localityBlocksState';

/* The block variables of the four tag blocks without React. Fictional records. */
const household: LocalityHousehold = {
  householdId: '91002',
  householdName: 'Ferreyra Household',
  childrenNames: 'Lucia, Tomas',
  isBookmarked: false,
  localityName: 'Bahia Blanca',
  countryName: 'Argentina',
};
const subdivision = (id: string): SubdivisionCard => ({ subdivisionId: id, content: { Name: `Meeting ${id}` } });
const school = (id: string): OneSchoolCard => ({
  communityBusinessId: id,
  signedURL: '',
  name: `School ${id}`,
  localityName: 'Bahia Blanca',
  localityId: '252',
  countryName: 'Argentina',
  countryCode: 'AR',
  phone: '',
  email: '',
});

describe('appendRows', () => {
  it('keys the appended cards from nextKey', () => {
    expect(appendRows([{ key: 0, card: 'a' }], 4, ['b', 'c'])).toEqual({
      rows: [
        { key: 0, card: 'a' },
        { key: 4, card: 'b' },
        { key: 5, card: 'c' },
      ],
      nextKey: 6,
    });
  });
});

describe('Locality_Households_HouseholdList', () => {
  it('starts with three skeleton records, not fetched', () => {
    expect(INITIAL_LOCALITY_HOUSEHOLD_LIST.isDataFetched).toBe(false);
    expect(INITIAL_LOCALITY_HOUSEHOLD_LIST.list.map((h) => [h.householdId, h.localityName])).toEqual([
      ['0', 'Dumyy size'],
      ['0', 'Dumyy size'],
      ['0', 'Dumyy size'],
    ]);
  });

  it('householdsFetched replaces the list', () => {
    expect(
      localityHouseholdListReducer(INITIAL_LOCALITY_HOUSEHOLD_LIST, { type: 'householdsFetched', list: [household] }),
    ).toEqual({ isDataFetched: true, list: [household] });
  });

  it('withBookmark keeps the record when IsBookmarked does not change', () => {
    expect(withBookmark(household, false)).toBe(household);
    expect(withBookmark(household, true)).toEqual({ ...household, isBookmarked: true });
  });
});

describe('Locality_Subdivisions', () => {
  it('shows ten skeleton cards keyed 0-9', () => {
    const state = localitySubdivisionsReducer(INITIAL_LOCALITY_SUBDIVISIONS, { type: 'skeletonShown' });
    expect(state.subdivision_Card_List.map((r) => r.key)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(state.subdivision_Card_List[0]?.card.content.Name).toBe('Subdivision Name Example');
    expect(state.nextKey).toBe(10);
  });

  it('the first answer clears the skeleton and continues the keys; the next one appends', () => {
    const skeleton = localitySubdivisionsReducer(INITIAL_LOCALITY_SUBDIVISIONS, { type: 'skeletonShown' });
    const first = localitySubdivisionsReducer(skeleton, {
      type: 'subdivisionsFetched',
      cards: [subdivision('1210'), subdivision('9202')],
    });
    expect(first.subdivision_Card_List).toEqual([
      { key: 10, card: subdivision('1210') },
      { key: 11, card: subdivision('9202') },
    ]);
    expect(first).toMatchObject({ isDataFetched: true, subdivision_Card_List_IsLoading: false, nextKey: 12 });
    const second = localitySubdivisionsReducer(first, { type: 'subdivisionsFetched', cards: [subdivision('9203')] });
    expect(second.subdivision_Card_List.map((r) => r.key)).toEqual([10, 11, 12]);
    expect(second.out_Subdivision_Card_List).toEqual([subdivision('9203')]);
  });

  it('nextPageRequested moves StartIndex by Offset', () => {
    expect(
      localitySubdivisionsReducer(INITIAL_LOCALITY_SUBDIVISIONS, { type: 'nextPageRequested' })
        .getSubdivisions_StartIndex,
    ).toBe(20);
  });

  it('the call sends the block variables with the cards of the list', () => {
    const skeleton = localitySubdivisionsReducer(INITIAL_LOCALITY_SUBDIVISIONS, { type: 'skeletonShown' });
    const inputs = subdivisionListCallInputs(skeleton, '252');
    expect(inputs).toMatchObject({
      getSubdivisions_StartIndex: 0,
      getSubdivisions_Offset: 20,
      subdivision_Card_List_IsLoading: true,
      isPaginated: false,
      localityId: '252',
    });
    expect(inputs.subdivision_Card_List).toHaveLength(10);
  });
});

describe('Locality_Interchange', () => {
  const interchange: Interchange = {
    interchangeLocalityId: '253',
    interchangeLocalityName: 'Monte Hermoso',
    interchangeCountryName: 'Argentina',
    interchangeDistance: '105 km',
    isBookmarked: false,
    interchangeStatistics: {
      Title: 'Monte Hermoso',
      Statistics: [
        { Name: 'Brethren', Value: '163', IconColorId: '', IconId: '' },
        { Name: 'Other', Value: '1', IconColorId: 'x', IconId: 'y' },
      ],
    },
  };

  it('loadingShown appends three loading records', () => {
    const state = localityInterchangeReducer(INITIAL_LOCALITY_INTERCHANGE, { type: 'loadingShown' });
    expect(state.out_InterchangeList).toHaveLength(3);
    expect(state.out_InterchangeList[0]).toMatchObject({
      interchangeDistance: '111',
      interchangeStatistics: { Title: 'Loading', Subtitle: 'Loading' },
    });
    expect(localityInterchangeReducer(state, { type: 'loadingShown' }).out_InterchangeList).toHaveLength(6);
  });

  it('interchangesFetched replaces the list; interchangesFailed keeps it with the error', () => {
    const loading = localityInterchangeReducer(INITIAL_LOCALITY_INTERCHANGE, { type: 'loadingShown' });
    expect(localityInterchangeReducer(loading, { type: 'interchangesFetched', list: [interchange] })).toEqual({
      isDataFetched: true,
      hasFetchError: false,
      out_InterchangeList: [interchange],
    });
    expect(localityInterchangeReducer(loading, { type: 'interchangesFailed' })).toEqual({
      ...loading,
      hasFetchError: true,
    });
  });

  it('withStatisticIcons sets the icon of a known statistic and clears the others', () => {
    const [item] = withStatisticIcons([interchange]);
    const [brethren, other] = item?.interchangeStatistics.Statistics ?? [];
    expect(brethren?.IconId).not.toBe('');
    expect(brethren?.IconColorId).not.toBe('');
    expect(other).toMatchObject({ IconColorId: '', IconId: '' });
  });
});

describe('Locality_OneSchoolGlobal', () => {
  it('three skeleton cards, then the answer keyed from 3', () => {
    const skeleton = localityOneSchoolGlobalReducer(INITIAL_LOCALITY_ONESCHOOL_GLOBAL, { type: 'skeletonShown' });
    expect(skeleton.out_OneSchoolGlobal_List2.map((r) => r.card.name)).toEqual([
      'OneSchoold Global',
      'OneSchoold Global',
      'OneSchoold Global',
    ]);
    const fetched = localityOneSchoolGlobalReducer(skeleton, {
      type: 'schoolsFetched',
      cards: [school('1430'), school('1431')],
    });
    expect(fetched.out_OneSchoolGlobal_List2.map((r) => r.key)).toEqual([3, 4]);
    expect(fetched).toMatchObject({ isDataFetched: true, get_OneSchoolGlobal_List_IsLoading: false, nextKey: 5 });
  });

  it('nextPageRequested and the call inputs', () => {
    const next = localityOneSchoolGlobalReducer(INITIAL_LOCALITY_ONESCHOOL_GLOBAL, { type: 'nextPageRequested' });
    const timezone = { TimezoneName: 'America/Argentina/Buenos_Aires', TimezoneOffset: '-10800' };
    expect(oneSchoolListCallInputs(next, { localityId: '252', localityTimezoneData: timezone })).toEqual({
      getOneSchoolGlobal_List_StartIndex: 20,
      getOneSchoolGlobal_List_Offset: 20,
      get_OneSchoolGlobal_List_IsLoading: true,
      out_OneSchoolGlobal_List2: [],
      in_LocalityId: '252',
      in_LocalityTimezoneData: timezone,
    });
  });
});
