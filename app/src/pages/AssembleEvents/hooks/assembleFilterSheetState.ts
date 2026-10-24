import type { CountryWithMapPosition } from '@/api/country';
import { removeDiacritics } from '@/shared/Connect2_LegacyShared/lib/actions';

/** The variables of the block Assemble_FilterSheet (the bottom-sheet twin of ScreenBlock_Assemble_Filter), the reducer
    and the pure parts of its actions. The flows are in useAssembleFilterSheet.
    @origin Connect2_Assemble_MUI.Assemble.Assemble_FilterSheet */

/** ScreenTitle of the country step. */
export const SHEET_TITLE_COUNTRIES = 'Browse by Country';
/** ScreenTitle of the locality step. */
export const SHEET_TITLE_LOCALITIES = 'Filter by Locality';
/** NullIdentifier() as a Long Integer. */
export const NULL_SUBDIVISION_ID = '0';

/** The variables of the sheet. Long Integers stay text. */
export interface AssembleFilterSheetState {
  /** ScreenTitle. */
  screenTitle: string;
  /** CountryDetailList: the countries of the user's subscription region. */
  countryDetailList: CountryWithMapPosition[];
  /** TempCountryDetailList: the countries that the list shows. */
  tempCountryDetailList: CountryWithMapPosition[];
  /** ShowLocalitiesList: Assemble_FilterLocalityByCountry shows instead of the countries. */
  showLocalitiesList: boolean;
  /** CountryCode of the chosen country ("" before a choice). */
  countryCode: string;
  /** CountryName of the chosen country. */
  countryName: string;
  /** SearchTerm: the value of Input_SearchTerm. */
  searchTerm: string;
  /** IsCountriesDataFetched: false shows the Spinner. */
  isCountriesDataFetched: boolean;
  /** UserInformation.Subdivision.Id: what OnClickApply compares. */
  userSubdivisionId: string;
  /** SubdivisionId: the chosen supper meeting. */
  subdivisionId: string;
}

/** An assignment of one or more variables of the sheet. */
export type AssembleFilterSheetPatch = Partial<AssembleFilterSheetState>;

/** The defaults (the sheet has no OnInitialize). */
export const INITIAL_FILTER_SHEET_STATE: AssembleFilterSheetState = {
  screenTitle: SHEET_TITLE_COUNTRIES,
  countryDetailList: [],
  tempCountryDetailList: [],
  showLocalitiesList: false,
  countryCode: '',
  countryName: '',
  searchTerm: '',
  isCountriesDataFetched: false,
  userSubdivisionId: NULL_SUBDIVISION_ID,
  subdivisionId: NULL_SUBDIVISION_ID,
};

export const assembleFilterSheetReducer = (
  state: AssembleFilterSheetState,
  patch: AssembleFilterSheetPatch,
): AssembleFilterSheetState => ({ ...state, ...patch });

/** OnChange_SearchTearm with a term: TempCountryDetailList = the countries whose Name holds
    RemoveDiacritics(ToLower(Trim(term))), case ignored. */
export function searchCountries(countries: readonly CountryWithMapPosition[], term: string): CountryWithMapPosition[] {
  const needle = removeDiacritics(term.trim().toLowerCase()).toLowerCase();
  return countries.filter((country) => (country.Name ?? '').toLowerCase().includes(needle));
}

/** Handler_GoToBrowseCountry after the access check: the chosen country and its name (from the shown list), the
    locality step. */
export function localitiesOf(shown: readonly CountryWithMapPosition[], countryCode: string): AssembleFilterSheetPatch {
  return {
    countryCode,
    countryName: shown.filter((country) => country.Code === countryCode)[0]?.Name ?? '',
    screenTitle: SHEET_TITLE_LOCALITIES,
    showLocalitiesList: true,
  };
}

/** Handler_GoBackToCountries: the country step, nothing chosen. */
export const COUNTRY_STEP: AssembleFilterSheetPatch = {
  showLocalitiesList: false,
  screenTitle: SHEET_TITLE_COUNTRIES,
  subdivisionId: NULL_SUBDIVISION_ID,
  countryCode: '',
};
