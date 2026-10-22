import type { RequestHandler } from 'msw';
import { recordedHandler } from '@/mocks/fixtures';

/* DataActionGetCountriesStatistics: the recorded fixture (UBTConnect/DataActionGetCountriesStatistics/01-c8c3cc75.json,
   screen BrowseCountries, 17 countries, reviewed by the user 2026-10-15). Country statistics, no person data. The call
   sends no inputs. Scenarios: real = the recording, loading = never answers, error = HTTP 500 (offline state). */
export const handlers: RequestHandler[] = [
  recordedHandler('UBTConnect', 'BrowseCountries/DataActionGetCountriesStatistics'),
];
