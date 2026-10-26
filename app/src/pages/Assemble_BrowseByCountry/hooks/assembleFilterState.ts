import type { CountryWithMapPosition } from '@/api/country';
import { removeDiacritics } from '@/lib/legacyShared/actions';

/** The variables of the block ScreenBlock_Assemble_Filter, the reducer and the client actions. Pure; the flows are in
    useAssembleFilter.
    @origin Connect2_Assemble_MUI.Assemble.ScreenBlock_Assemble_Filter */

/** ScreenTitle while the country list shows. */
export const BROWSE_BY_COUNTRY = 'Browse by Country';
/** ScreenTitle while the localities of a country show. */
export const FILTER_BY_LOCALITY = 'Filter by Locality';
/** NullIdentifier() as a Long Integer. */
export const NULL_ID = '0';

/** The variables of the block. Long Integers stay text. */
export interface AssembleFilterState {
  /** ScreenTitle. */
  screenTitle: string;
  /** CountryDetailList: the countries of the user's subscription region. */
  countryDetailList: CountryWithMapPosition[];
  /** TempCountryDetailList: the countries that the list shows (the search result). */
  tempCountryDetailList: CountryWithMapPosition[];
  /** ShowLocalitiesList: the localities of the chosen country show instead of the country list. */
  showLocalitiesList: boolean;
  /** CountryCode: the chosen country ("" before a choice). */
  countryCode: string;
  /** CountryName: the name of the chosen country. */
  countryName: string;
  /** SearchTerm: the value of the search input. */
  searchTerm: string;
  /** IsCountriesDataFetched: false shows the Spinner. */
  isCountriesDataFetched: boolean;
  /** UserInformation.Subdivision.Id: the only attribute of UserInformation that the block reads. */
  userSubdivisionId: string;
  /** SubdivisionId: the chosen supper meeting (NullIdentifier before a choice). */
  subdivisionId: string;
}

/** An assignment of one or more variables. */
export type AssembleFilterPatch = Partial<AssembleFilterState>;

/** The variables after OnInitialize (the block has no OnInitialize: the defaults). */
export const INITIAL_ASSEMBLE_FILTER_STATE: AssembleFilterState = {
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
};

/** The variables after an assignment. */
export const assembleFilterReducer = (state: AssembleFilterState, patch: AssembleFilterPatch): AssembleFilterState => ({
  ...state,
  ...patch,
});

/** The widget ids that depend on the block instance id (`$b2` → scope `b2`). */
export interface AssembleFilterIds {
  scope: string;
  /** The Dialog_AccessRestrictedAction_Legacy that ConfirmAction opens. */
  freeSubscriptionAlert: string;
}

export function assembleFilterIds(blockId: string): AssembleFilterIds {
  const scope = blockId.replace('$', '');
  return { scope, freeSubscriptionAlert: `${scope}-FreeSubscriptionAlert` };
}

/** The ListFilter of OnChange_SearchTearm with a term that is not empty: the countries whose Name contains
    RemoveDiacritics(ToLower(Trim(SearchTerm))), with the case ignored. */
export function filterCountriesByName(
  countries: readonly CountryWithMapPosition[],
  searchTerm: string,
): CountryWithMapPosition[] {
  const term = removeDiacritics(searchTerm.trim().toLowerCase()).toLowerCase();
  return countries.filter((p) => (p.Name ?? '').toLowerCase().includes(term));
}

/** Handler_GoToBrowseCountry with access to the country: CountryCode, CountryName (the first row of the shown list
    with that Code, "" when there is none), ScreenTitle "Filter by Locality", ShowLocalitiesList. */
export function countryChosen(
  shownCountries: readonly CountryWithMapPosition[],
  countryCode: string,
): AssembleFilterPatch {
  const filtered = shownCountries.filter((p) => p.Code === countryCode);
  return {
    countryCode,
    countryName: filtered[0]?.Name ?? '',
    screenTitle: FILTER_BY_LOCALITY,
    showLocalitiesList: true,
  };
}

/** Handler_BackNavigation while the localities show: back to the country list, with no country and no supper
    meeting chosen. */
export const BACK_TO_COUNTRY_LIST: AssembleFilterPatch = {
  showLocalitiesList: false,
  screenTitle: BROWSE_BY_COUNTRY,
  subdivisionId: NULL_ID,
  countryCode: '',
};

/** DIV_StickyBottom (Cancel / Apply) shows while a country is chosen (CountryCode <> ""). */
export const isBottomBarVisible = (state: AssembleFilterState): boolean => state.countryCode !== '';

/** ButtonApply is enabled once a supper meeting is chosen (SubdivisionId <> NullIdentifier()). */
export const isApplyEnabled = (state: AssembleFilterState): boolean => state.subdivisionId !== NULL_ID;

/** OnClickApply: the event NavigateToSubdivision gets SubdivisionId and whether it is the user's own subdivision
    (SubdivisionId = UserInformation.Subdivision.Id). */
export const isUserSubdivision = (state: AssembleFilterState): boolean =>
  state.subdivisionId === state.userSubdivisionId;
