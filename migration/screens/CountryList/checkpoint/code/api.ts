import { callAction } from '../../lib/api';
import { osList } from '../../lib/os-wire';
import type { CountryStatistics, CountryStatisticsWire } from './types';

const toCountryStatistics = (w: CountryStatisticsWire): CountryStatistics => ({
  countryCode: w.CountryCode,
  title: w.Statistics.Title,
  avatarURL: w.Statistics.AvatarURL,
  texts: w.UI_TypedStatisticsTexts,
});

/** DataActionGetCountriesStatistics (CountryList.mvc.js ctrl :1150-1178): no inputs (OutSystems only sends the screen
    variables, which the server does not read: calls.json inputNames null). */
export async function getCountriesStatistics(): Promise<CountryStatistics[]> {
  const out = await callAction('UBTConnect', 'CountryList/DataActionGetCountriesStatistics', {});
  return osList(out.Out_CountriesStatistics).map(toCountryStatistics);
}
