import type { ActionOutputs, PathOf } from '../../lib/api';
import type { UI_StatisticsTexts } from '../../shared/Connect_Geography_CS/lib/structures';

/* Wire types from the contract (src/api/openapi.yaml), through the callAction types. */
type GetCountriesStatisticsPath = PathOf<'UBTConnect', 'CountryList/DataActionGetCountriesStatistics'>;
/** Connect_Geography_CS.UI_CountryStatistics as the server sends it. */
export type CountryStatisticsWire =
  ActionOutputs<GetCountriesStatisticsPath>['Out_CountriesStatistics']['List'][number];

/** UI_CountryStatistics in the domain shape: the fields the screen reads (CountryCode, Statistics.Title,
    Statistics.AvatarURL, UI_TypedStatisticsTexts; CountryList.mvc.js:943-990). */
export interface CountryStatistics {
  countryCode: string;
  title: string;
  /** Statistics.AvatarURL: "" from the server, the flag image after OnAfterFetch, "-" in the skeleton rows. */
  avatarURL: string;
  texts: UI_StatisticsTexts;
}

/** LocalCacheControl_UserInformation (BooleanDirectory_UserCurrent, CountryList.mvc.js:32-34): the user's geography
    the two header cards show, and isFetched. Long Integers stay text. */
export interface UserGeography {
  isFetched: boolean;
  localityId: string;
  localityName: string;
  localitySubdivisionCount: string;
  countryCode: string;
  countryName: string;
  countryLocalityCount: string;
}
