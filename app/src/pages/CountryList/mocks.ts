import type { RequestHandler } from 'msw';
import { recordedHandler } from '@/mocks/fixtures';

/* DataActionGetCountriesStatistics: the recorded fixture (UBTConnect/DataActionGetCountriesStatistics/02-93a3ea9f.json,
   17 countries with aggregate counts, no person data). Scenarios: `real` (recorded), `empty` (no countries), `error`
   (HTTP 500: list-error, as the offline capture), `loading` (never answers). */
export const handlers: RequestHandler[] = [
  recordedHandler('UBTConnect', 'CountryList/DataActionGetCountriesStatistics'),
];
