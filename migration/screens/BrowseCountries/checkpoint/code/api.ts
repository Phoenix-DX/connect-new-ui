import { callAction } from '../../lib/api';
import { osList } from '../../lib/os-wire';
import type { CountryStatistics, CountryStatisticsWire } from './types';

const toCountryStatistics = (w: CountryStatisticsWire): CountryStatistics => ({
  countryCode: w.CountryCode,
  statistics: {
    Title: w.Statistics.Title,
    Subtitle: w.Statistics.Subtitle,
    AvatarURL: w.Statistics.AvatarURL,
    Statistics: osList(w.Statistics.Statistics).map((s) => ({
      Name: s.Name,
      Value: s.Value,
      IconColorId: s.IconColorId,
      IconId: s.IconId,
    })),
  },
});

/** GetCountriesStatistics (getCountriesStatistics$DataActRefresh, BrowseCountries.mvc.js:303-330): refresh only
    (`dataFetchDependenciesOriginal` -1, :291-293), from Action_RefreshData. The screen has no variables, so nothing is
    sent. */
export async function getCountriesStatistics(): Promise<CountryStatistics[]> {
  const out = await callAction('UBTConnect', 'BrowseCountries/DataActionGetCountriesStatistics', {});
  return osList(out.Out_CountriesStatistics).map(toCountryStatistics);
}
