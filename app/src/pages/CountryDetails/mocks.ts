import type { RequestHandler } from 'msw';
import { recordedHandler } from '@/mocks/fixtures';

/* CountryDetails (P-MOCKS). CountryDetails/DataActionGetLocalityStatistics: the recorded TST answer for CountryCode AR
   (fixture UBTConnect/DataActionGetLocalityStatistics/02-e657cfcb.json: three localities, CountryName Argentina). Other
   countries (Apply filters) were not recorded: the handler serves the AR recording with its console warning (Q1,
   recommendation A). Scenarios: real, empty (no locality), error (HTTP 500 = the offline state), loading (never
   answers). The shared blocks (cache controls, lazy images) and the shell mock their own calls. */
export const handlers: RequestHandler[] = [
  recordedHandler('UBTConnect', 'CountryDetails/DataActionGetLocalityStatistics'),
];
