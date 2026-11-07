import { http, HttpResponse, type RequestHandler } from 'msw';
import { fixtureData } from '@/mocks/fixtures';
import { emptyLists, mockDelay, scenario } from '@/mocks/scenario';

/* DataActionGetCountriesStatistics: the recorded fixture (UBTConnect/DataActionGetCountriesStatistics/01-c8c3cc75.json,
   screen BrowseCountries, 17 countries, reviewed by the user 2026-10-15) with the counts of the fresh TST capture of
   2026-11-07, which are one lower than the recording (a fixture is never edited): Saint Vincent 73 brethren and 36
   sisters, Trinidad 73 brethren and 37 sisters, United States 28 localities. Country statistics, no person data. The
   call sends no inputs. Scenarios: real = the recording with these counts, empty = no countries, loading = never
   answers, error = HTTP 500 (offline state). */
type Row = { Statistics: { Title: string; Statistics: { List: { Name: string; Value: string }[] } } };
type Wire = { Out_CountriesStatistics: { List: Row[] } };

/** The captured value of one statistic of a country, by the country title and the statistic name. */
const CAPTURED_COUNTS: Record<string, Record<string, string>> = {
  'Saint Vincent': { Brethren: '73', Sisters: '36' },
  Trinidad: { Brethren: '73', Sisters: '37' },
  'United States': { Localities: '28' },
};

function freshCapture(): Wire {
  const wire = fixtureData('UBTConnect', 'BrowseCountries/DataActionGetCountriesStatistics') as Wire;
  for (const row of wire.Out_CountriesStatistics.List) {
    const counts = CAPTURED_COUNTS[row.Statistics.Title] ?? {};
    for (const stat of row.Statistics.Statistics.List) stat.Value = counts[stat.Name] ?? stat.Value;
  }
  return wire;
}

export const handlers: RequestHandler[] = [
  http.post('/api/UBTConnect/BrowseCountries/DataActionGetCountriesStatistics', async () => {
    await mockDelay();
    if (scenario() === 'error') return HttpResponse.json({ error: 'mock error' }, { status: 500 });
    const data = scenario() === 'empty' ? emptyLists(freshCapture()) : freshCapture();
    return HttpResponse.json({ data });
  }),
];
