import { callAction } from '../../lib/api';
import { osList, osNumber, wireList } from '../../lib/os-wire';
import type { LocalityStatistics, LocalityStatisticsData, LocalityStatisticsWire } from './types';

const toLocality = (w: LocalityStatisticsWire): LocalityStatistics => ({
  localityId: w.LocalityId,
  name: w.Name,
  latitude: osNumber(w.Latitude),
  longitude: osNumber(w.Longitude),
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

/** DataActionGetLocalityStatistics of the screen (controller getLocalityStatistics$DataActRefresh,
    BrowseDirectory.mvc.js:739-766): called by Action_RefreshData only (fetch on demand, :728-733). It sends the screen
    variables (model :24-54; the recorded call: MarkersList, Center, Local_MapId, CountryCode). The only refresh is
    OnReady's when the data is not fetched yet; MarkersList and Center are filled only by OnAfterFetch of a successful
    fetch (:829-901) and the map that sets Local_MapId shows only with a Center (:388), so the three are always at their
    initial values when it runs. */
export async function getLocalityStatistics(countryCode: string): Promise<LocalityStatisticsData> {
  const out = await callAction('UBTConnect', 'BrowseDirectory/DataActionGetLocalityStatistics', {
    MarkersList: wireList<never>([]),
    Center: wireList<never>([]),
    Local_MapId: '',
    CountryCode: countryCode,
  });
  return {
    localities: osList(out.Out_LocalitiesStatistics as { List: LocalityStatisticsWire[] }).map(toLocality),
    countryName: out.CountryName,
  };
}
