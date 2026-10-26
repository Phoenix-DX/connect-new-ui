import { describe, expect, it } from 'vitest';
import type { CountryWithMapPosition } from '@/api/country';
import {
  assembleFilterSheetReducer,
  COUNTRY_STEP,
  INITIAL_FILTER_SHEET_STATE,
  localitiesOf,
  NULL_SUBDIVISION_ID,
  searchCountries,
  SHEET_TITLE_COUNTRIES,
  SHEET_TITLE_LOCALITIES,
} from './assembleFilterSheetState';

/* The variables of Assemble_FilterSheet and the pure parts of its actions. Countries are reference data. */
const COUNTRIES: CountryWithMapPosition[] = [
  { Code: 'AR', Name: 'Argentina', MembersCount: 268 },
  { Code: 'NZ', Name: 'New Zealand', MembersCount: 6284 },
  { Code: 'CI', Name: "Côte d'Ivoire", MembersCount: 12 },
  { Code: 'XX' },
];

describe('assembleFilterSheetState', () => {
  it('the defaults: the country step, nothing chosen, the Spinner', () => {
    expect(INITIAL_FILTER_SHEET_STATE).toMatchObject({
      screenTitle: SHEET_TITLE_COUNTRIES,
      showLocalitiesList: false,
      countryCode: '',
      isCountriesDataFetched: false,
      subdivisionId: NULL_SUBDIVISION_ID,
      userSubdivisionId: NULL_SUBDIVISION_ID,
    });
  });

  it('the reducer assigns the given variables only', () => {
    const s = assembleFilterSheetReducer(INITIAL_FILTER_SHEET_STATE, { searchTerm: 'arg', subdivisionId: '9202' });
    expect(s).toEqual({ ...INITIAL_FILTER_SHEET_STATE, searchTerm: 'arg', subdivisionId: '9202' });
  });

  it('the search: the term trimmed, case ignored; diacritics go from the term only (not from the names)', () => {
    expect(searchCountries(COUNTRIES, ' ZEA').map((c) => c.Code)).toEqual(['NZ']);
    expect(searchCountries(COUNTRIES, 'côte').map((c) => c.Code)).toEqual([]);
    expect(searchCountries(COUNTRIES, "D'IV").map((c) => c.Code)).toEqual(['CI']);
    expect(searchCountries(COUNTRIES, 'Atlantis')).toEqual([]);
  });

  it('a country with access: its code and the name from the shown list, the locality step', () => {
    expect(localitiesOf(COUNTRIES, 'NZ')).toEqual({
      countryCode: 'NZ',
      countryName: 'New Zealand',
      screenTitle: SHEET_TITLE_LOCALITIES,
      showLocalitiesList: true,
    });
    expect(localitiesOf([], 'NZ').countryName).toBe('');
  });

  it('Link_Back: the country step with nothing chosen', () => {
    const chosen = assembleFilterSheetReducer(INITIAL_FILTER_SHEET_STATE, {
      ...localitiesOf(COUNTRIES, 'AR'),
      subdivisionId: '9202',
    });
    expect(assembleFilterSheetReducer(chosen, COUNTRY_STEP)).toMatchObject({
      showLocalitiesList: false,
      screenTitle: SHEET_TITLE_COUNTRIES,
      subdivisionId: NULL_SUBDIVISION_ID,
      countryCode: '',
      countryName: 'Argentina',
    });
  });
});
