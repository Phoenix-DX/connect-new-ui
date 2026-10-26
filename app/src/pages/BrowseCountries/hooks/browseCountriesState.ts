import type { CountryCard } from '@/api/country';
import type { TextStatisticsOptionsRecord } from '@/components/directory/StatisticsList';
import { getFlagURLByCountryCode } from '@/lib/ubtConnectLibrary/actions';

/** The state of the BrowseCountries screen and its reducer, with the client actions of the screen as pure functions.
    @origin UBTConnect.Directory_Locality.BrowseCountries */

/** The screen variables: the list and the IsDataFetched of the data action GetCountriesStatistics. The OutSystems name
    of each variable is in brackets. The view cache keeps the record, so a back navigation shows the same list. */
export interface BrowseCountriesState {
  /** [GetCountriesStatistics.Out_CountriesStatistics] The skeleton rows while the data action runs, then the
      countries with their flags. */
  countriesStatistics: CountryCard[];
  /** [GetCountriesStatistics.IsDataFetched] The data action has answered. */
  isDataFetched: boolean;
}

/** The variables after OnInitialize: no rows, not fetched. */
export const INITIAL_BROWSE_COUNTRIES_STATE: BrowseCountriesState = { countriesStatistics: [], isDataFetched: false };

/** The changes of the state. */
export type BrowseCountriesAction =
  /** Action_RefreshData, before the refresh: Out_CountriesStatistics = GetSkeletonList_UI_CountryStatistics(10).
      IsDataFetched does not change. */
  | { type: 'refreshStarted' }
  /** GetCountriesStatistics answered: OnAfterFetch_GetCountriesStatistics sets the flags of the rows. */
  | { type: 'countriesStatisticsFetched'; countries: CountryCard[] };

/** GetSkeleton_UI_CountryStatistics (UBTConnect): Title "Australia", AvatarURL "-" and five statistics; CountryCode
    keeps its default "". */
export const getSkeleton_UI_CountryStatistics = (): CountryCard => ({
  countryCode: '',
  statistics: {
    Title: 'Australia',
    Subtitle: '',
    AvatarURL: '-',
    Statistics: [
      { Name: 'Locality', Value: '83', IconColorId: '', IconId: '' },
      { Name: 'Bretheren', Value: '15868', IconColorId: '', IconId: '' },
      { Name: 'Households', Value: '4652', IconColorId: '', IconId: '' },
      { Name: 'Brothers', Value: '7934', IconColorId: '', IconId: '' },
      { Name: 'Sisters', Value: '7934', IconColorId: '', IconId: '' },
    ],
  },
});

/** GetSkeletonList_UI_CountryStatistics(ListLength) (UBTConnect): ListLength rows of
    GetSkeleton_UI_CountryStatistics. */
export const getSkeletonList_UI_CountryStatistics = (listLength: number): CountryCard[] =>
  Array.from({ length: Math.max(listLength, 0) }, getSkeleton_UI_CountryStatistics);

/** OnAfterFetch_GetCountriesStatistics: the Statistics.AvatarURL of each row is GetFlagURLByCountryCode(CountryCode). */
export const onAfterFetch_GetCountriesStatistics = (countries: readonly CountryCard[]): CountryCard[] =>
  countries.map((country) => ({
    ...country,
    statistics: { ...country.statistics, AvatarURL: getFlagURLByCountryCode(country.countryCode) },
  }));

/** In_Statistics of StatisticsList: {Id = CountryCode, StatisticsOptions = Statistics} of each row. */
export const toStatisticsRecords = (countries: readonly CountryCard[]): TextStatisticsOptionsRecord[] =>
  countries.map((country) => ({ Id: country.countryCode, StatisticsOptions: country.statistics }));

export function browseCountriesReducer(
  state: BrowseCountriesState,
  action: BrowseCountriesAction,
): BrowseCountriesState {
  switch (action.type) {
    case 'refreshStarted':
      return { ...state, countriesStatistics: getSkeletonList_UI_CountryStatistics(10) };
    case 'countriesStatisticsFetched':
      return { isDataFetched: true, countriesStatistics: onAfterFetch_GetCountriesStatistics(action.countries) };
  }
}
