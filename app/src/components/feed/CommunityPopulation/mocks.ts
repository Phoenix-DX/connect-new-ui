import type { RequestHandler } from 'msw';
import { contractHandler } from '@/mocks/contract';

/* DataActionGetCommunityStatistics of HomeFeed (Directory_CommunityNumbers; fresh TST capture of 2026-11-07): the
   answer is not recorded, so fictional counts with the captured lengths: members "••••••" (5 digits with the group
   separator), change "••" ("+" and one digit, up arrow), households "••••••", localities "•••"; the countries "17" are
   shown as captured. Aggregate counts, no person data. Scenarios (contractHandler): real, error (HTTP 500, the block
   stays in its skeleton), loading (never answers). FetchCount of FeedBlock_CommunityPopulation is gone from TST: no
   handler. CountryList answers its own DataActionGetCommunityStatistics (pages/CountryList/mocks.ts). */
export const fictionalCommunityStatistics = {
  In_Change: 6,
  In_CountriesCount: 17,
  In_HouseholdCount: 19870,
  In_LocalitiesCount: 386,
  In_MembersCount: 48215,
};

export const handlers: RequestHandler[] = [
  contractHandler('UBTConnect', 'HomeFeed/DataActionGetCommunityStatistics', () => ({
    Out_CommunityStatistics: { ...fictionalCommunityStatistics },
  })),
];
