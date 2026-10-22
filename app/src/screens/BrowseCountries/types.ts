import type { ActionOutputs, PathOf } from '@/api/client/callAction';
import type { StatisticsOptions } from '@/shared/UBTConnect/StatisticsList';

/* Wire types from the contract (src/api/openapi.yaml), through the callAction types. */
type GetCountriesStatisticsPath = PathOf<'UBTConnect', 'BrowseCountries/DataActionGetCountriesStatistics'>;
/** Connect_Geography_CS.UI_CountryStatistics as the server sends it. */
export type CountryStatisticsWire =
  ActionOutputs<GetCountriesStatisticsPath>['Out_CountriesStatistics']['List'][number];

/** Connect_Geography_CS.UI_CountryStatistics in the domain shape: the fields the screen uses
    (UI_TypedStatisticsTexts is not read by BrowseCountries.mvc.js). */
export interface CountryStatistics {
  countryCode: string;
  statistics: StatisticsOptions;
}
