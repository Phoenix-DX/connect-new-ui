import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { callAction } from '@/api/client/callAction';
import { osList, osNumber } from '@/legacy/os/os-wire';
import type { LocalityStatistics, LocalityStatisticsData, LocalityStatisticsInputs } from './types';

type GetLocalityStatisticsOutput = Awaited<
  ReturnType<typeof callAction<'UBTConnect', 'CountryDetails/DataActionGetLocalityStatistics'>>
>;
type LocalityStatisticsWire = GetLocalityStatisticsOutput['Out_LocalitiesStatistics']['List'][number];

const toLocality = (w: LocalityStatisticsWire): LocalityStatistics => ({
  localityId: w.LocalityId,
  name: w.Name,
  latitude: osNumber(w.Latitude),
  longitude: osNumber(w.Longitude),
  statisticsTitle: w.Statistics.Title,
  typedStatisticsTexts: w.UI_TypedStatisticsTexts,
  mainHallSubdivisionId: w.MainHallSubdivisionId,
});

/** DataActionGetLocalityStatistics of the screen (controller getLocalityStatistics$DataActRefresh,
    CountryDetails.mvc.js:1488-1508): fetched at start (OnReady → Action_RefreshData) and refreshed by ApplyFilters; the
    country code is the query key. OutSystems sends the screen variables with the call (fixture 02-e657cfcb inputs); the
    route sends the ones its own flow sets before a fetch, read at fetch time (`variables`). The bottom-sheet ids and
    flags are left out: React mounts the sheets before the screen's first fetch, while OutSystems fetched with their
    initial values. The previous data stays while a refresh runs (OutSystems keeps IsDataFetched True). Refetched only
    when the screen asks: a view restored from the cache keeps its data (ScreenEvent_OnReady, :1611-1620). */
export function useGetLocalityStatistics(
  countryCode: string,
  variables: () => LocalityStatisticsInputs & { localMapId: string },
) {
  return useQuery({
    queryKey: ['CountryDetails', 'CountryDetails/DataActionGetLocalityStatistics', { countryCode }],
    queryFn: async (): Promise<LocalityStatisticsData> => {
      const v = variables();
      const out = await callAction('UBTConnect', 'CountryDetails/DataActionGetLocalityStatistics', {
        Local_MapId: v.localMapId,
        SearchString: v.searchString,
        HasFiltersApplied: v.hasFiltersApplied,
        OriginalCountryCode: v.originalCountryCode,
        CountryCode: countryCode,
      });
      return { localities: osList(out.Out_LocalitiesStatistics).map(toLocality), countryName: out.CountryName };
    },
    placeholderData: keepPreviousData,
    gcTime: 0,
    staleTime: Infinity,
    retry: false,
  });
}
