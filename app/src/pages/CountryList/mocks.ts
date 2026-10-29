import type { RequestHandler } from 'msw';
import { contractHandler } from '@/mocks/contract';
import { recordedHandler } from '@/mocks/fixtures';

/* DataActionGetCountriesStatistics: the recorded fixture (UBTConnect/DataActionGetCountriesStatistics/02-93a3ea9f.json,
   17 countries with aggregate counts, no person data). Scenarios: `real` (recorded), `empty` (no countries), `error`
   (HTTP 500: list-error, as the offline capture), `loading` (never answers).
   DataActionGetCommunityStatistics (live TST of 2026-10-27): the captured answer, every count 0 (CountryList and
   HomeFeed analysis/calls.md). No widget reads it. The HomeFeed handler is in pages/HomeFeed/mocks.ts. */
const NO_COMMUNITY_STATISTICS = {
  Out_CommunityStatistics: {
    In_HouseholdCount: 0,
    In_LocalitiesCount: 0,
    In_CountriesCount: 0,
    In_MembersCount: 0,
    In_Change: 0,
  },
};

export const handlers: RequestHandler[] = [
  recordedHandler('UBTConnect', 'CountryList/DataActionGetCountriesStatistics'),
  contractHandler('UBTConnect', 'CountryList/DataActionGetCommunityStatistics', () => NO_COMMUNITY_STATISTICS),
];
