import type { RequestHandler } from 'msw';
import { recordedHandler } from '@/mocks/fixtures';

/* BrowseDirectory (P-MOCKS).
   - BrowseDirectory/DataActionGetLocalityStatistics: the reviewed TST recording for CountryCode AR
     (fixture UBTConnect/DataActionGetLocalityStatistics/01-1b4fc559.json: Argentina, three localities), served for
     every CountryCode (Q2 → A: the only recording; matchInputs off, so no "no recorded call" warning).
   Scenarios: real, empty (every list emptied), error (HTTP 500), loading (never answers). */
export const handlers: RequestHandler[] = [
  recordedHandler('UBTConnect', 'BrowseDirectory/DataActionGetLocalityStatistics', { matchInputs: false }),
];
