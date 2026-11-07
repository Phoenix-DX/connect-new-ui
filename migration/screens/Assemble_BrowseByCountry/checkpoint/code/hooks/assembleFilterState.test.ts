import { describe, expect, it } from 'vitest';
import type { CountryWithMapPosition } from '@/api/country';
import {
  assembleFilterIds,
  assembleFilterReducer,
  BACK_TO_COUNTRY_LIST,
  BROWSE_BY_COUNTRY,
  countryChosen,
  FILTER_BY_LOCALITY,
  filterCountriesByName,
  INITIAL_ASSEMBLE_FILTER_STATE,
  isApplyEnabled,
  isBottomBarVisible,
  isUserSubdivision,
  NULL_ID,
} from './assembleFilterState';

/* The pure part of the Assemble filter. Countries are reference data (real names); the counts are left out. */
const COUNTRIES: CountryWithMapPosition[] = [
  { Code: 'AR', Name: 'Argentina' },
  { Code: 'NZ', Name: 'New Zealand' },
  { Code: 'CI', Name: "Côte d'Ivoire" },
  { Code: 'XX' },
];

describe('assembleFilterState', () => {
  it('the defaults: "Browse by Country", no country, no supper meeting, not fetched', () => {
    expect(INITIAL_ASSEMBLE_FILTER_STATE).toEqual({
      screenTitle: BROWSE_BY_COUNTRY,
      countryDetailList: [],
      tempCountryDetailList: [],
      showLocalitiesList: false,
      countryCode: '',
      countryName: '',
      searchTerm: '',
      isCountriesDataFetched: false,
      userSubdivisionId: NULL_ID,
      subdivisionId: NULL_ID,
    });
    expect(isBottomBarVisible(INITIAL_ASSEMBLE_FILTER_STATE)).toBe(false);
    expect(isApplyEnabled(INITIAL_ASSEMBLE_FILTER_STATE)).toBe(false);
  });

  it('the reducer assigns the variables of a patch and keeps the others', () => {
    const next = assembleFilterReducer(INITIAL_ASSEMBLE_FILTER_STATE, { searchTerm: 'zea', countryCode: 'NZ' });
    expect(next).toEqual({ ...INITIAL_ASSEMBLE_FILTER_STATE, searchTerm: 'zea', countryCode: 'NZ' });
    expect(INITIAL_ASSEMBLE_FILTER_STATE.searchTerm).toBe('');
  });

  it('assembleFilterIds: the scope and the dialog id from the block instance id', () => {
    expect(assembleFilterIds('$b2')).toEqual({ scope: 'b2', freeSubscriptionAlert: 'b2-FreeSubscriptionAlert' });
  });

  it('filterCountriesByName: trimmed, case and diacritics ignored in the term; a row without Name never matches', () => {
    expect(filterCountriesByName(COUNTRIES, ' ZEA ').map((c) => c.Code)).toEqual(['NZ']);
    expect(filterCountriesByName(COUNTRIES, 'arg').map((c) => c.Code)).toEqual(['AR']);
    expect(filterCountriesByName(COUNTRIES, 'Atlantis')).toEqual([]);
    // RemoveDiacritics applies to the term only: "Côte" in a Name does not match the term "cote".
    expect(filterCountriesByName(COUNTRIES, 'côte')).toEqual([]);
    expect(filterCountriesByName(COUNTRIES, 'IVOIRE').map((c) => c.Code)).toEqual(['CI']);
  });

  it('countryChosen: the code, the name of the first row with it, "Filter by Locality", the localities show', () => {
    expect(countryChosen(COUNTRIES, 'NZ')).toEqual({
      countryCode: 'NZ',
      countryName: 'New Zealand',
      screenTitle: FILTER_BY_LOCALITY,
      showLocalitiesList: true,
    });
    expect(countryChosen(COUNTRIES, 'ZZ').countryName).toBe('');
    expect(countryChosen(COUNTRIES, 'XX').countryName).toBe('');
  });

  it('BACK_TO_COUNTRY_LIST: the country list, "Browse by Country", no country and no supper meeting', () => {
    const chosen = assembleFilterReducer(INITIAL_ASSEMBLE_FILTER_STATE, {
      ...countryChosen(COUNTRIES, 'AR'),
      subdivisionId: '7001',
    });
    expect(isBottomBarVisible(chosen)).toBe(true);
    expect(isApplyEnabled(chosen)).toBe(true);
    const back = assembleFilterReducer(chosen, BACK_TO_COUNTRY_LIST);
    expect(back).toEqual({
      ...chosen,
      showLocalitiesList: false,
      screenTitle: BROWSE_BY_COUNTRY,
      subdivisionId: NULL_ID,
      countryCode: '',
    });
    // CountryName is not reset.
    expect(back.countryName).toBe('Argentina');
    expect(isBottomBarVisible(back)).toBe(false);
  });

  it("isUserSubdivision: the chosen supper meeting is the user's own", () => {
    const state = { ...INITIAL_ASSEMBLE_FILTER_STATE, userSubdivisionId: '7001' };
    expect(isUserSubdivision({ ...state, subdivisionId: '7001' })).toBe(true);
    expect(isUserSubdivision({ ...state, subdivisionId: '7002' })).toBe(false);
  });
});
