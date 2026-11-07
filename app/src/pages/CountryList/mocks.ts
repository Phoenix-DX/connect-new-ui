import { http, HttpResponse, type RequestHandler } from 'msw';
import type { ActionOutputs, PathOf } from '@/api/client/callAction';
import { fictionalCommunityStatistics } from '@/components/feed/CommunityPopulation/mocks';
import { contractHandler } from '@/mocks/contract';
import { fixtureData } from '@/mocks/fixtures';
import { emptyLists, mockDelay, scenario } from '@/mocks/scenario';

/* DataActionGetCountriesStatistics: the recorded fixture (UBTConnect/DataActionGetCountriesStatistics/02-93a3ea9f.json,
   screen CountryList, 17 countries with aggregate counts, no person data) with the counts of the fresh TST capture of
   2026-11-07, which are one lower than the recording (a fixture is never edited; the same patch as BrowseCountries,
   to confirm at review): Saint Vincent 73 members and 36 sisters, Trinidad 73 members and 37 sisters, United States
   28 localities. The call sends no inputs. Scenarios: `real` (the recording with these counts), `empty` (no
   countries), `error` (HTTP 500: list-error, as the offline capture), `loading` (never answers).
   DataActionGetCommunityStatistics (OnReady, read by Directory_CommunityNumbers; fresh TST capture of 2026-11-07): the
   answer is not recorded, so the fictional counts of components/feed/CommunityPopulation/mocks.ts, which have the
   lengths of the CountryList capture (members "••••••", change "••" with the up arrow, households "••••••", localities
   "•••", countries "17" as captured). Aggregate counts, no person data. Scenarios (contractHandler): real, error
   (HTTP 500, the block stays in its skeleton, as the offline capture), loading (never answers). */
type CountriesStatisticsWire = ActionOutputs<PathOf<'UBTConnect', 'CountryList/DataActionGetCountriesStatistics'>>;
type TypedStatisticsTexts = CountriesStatisticsWire['Out_CountriesStatistics']['List'][number]['UI_TypedStatisticsTexts'];

/** The captured texts of the counts that differ from the recording, by the country code. */
const CAPTURED_COUNTS: Record<string, Partial<TypedStatisticsTexts>> = {
  VC: { Members: '73', Sisters: '36' },
  TT: { Members: '73', Sisters: '37' },
  US: { Localities: '28' },
};

/** The recording with the counts of the fresh capture. */
function freshCapture(): CountriesStatisticsWire {
  const wire = fixtureData('UBTConnect', 'CountryList/DataActionGetCountriesStatistics') as CountriesStatisticsWire;
  for (const row of wire.Out_CountriesStatistics.List) {
    row.UI_TypedStatisticsTexts = { ...row.UI_TypedStatisticsTexts, ...CAPTURED_COUNTS[row.CountryCode] };
  }
  return wire;
}

export const handlers: RequestHandler[] = [
  http.post('/api/UBTConnect/CountryList/DataActionGetCountriesStatistics', async () => {
    await mockDelay();
    if (scenario() === 'error') return HttpResponse.json({ error: 'mock error' }, { status: 500 });
    const data = scenario() === 'empty' ? emptyLists(freshCapture()) : freshCapture();
    return HttpResponse.json({ data });
  }),
  contractHandler('UBTConnect', 'CountryList/DataActionGetCommunityStatistics', () => ({
    Out_CommunityStatistics: { ...fictionalCommunityStatistics },
  })),
];
