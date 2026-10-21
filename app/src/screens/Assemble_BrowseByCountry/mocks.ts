import type { RequestHandler } from 'msw';
import { contractHandler } from '../../mocks/contract';
import { countriesBySubscriptionOutput } from '../../mocks/fictional/assemble';

/* Mocks of Assemble_BrowseByCountry (P-MOCKS). GetCountriesBySubscription answers the fictional Assemble world's 17
   countries (src/mocks/fictional/assemble.ts, the captured count and order); the user information comes from the shell
   and Connect2_LegacyShared mocks. Scenarios: real (the list), empty (no country: "No results found"), error
   (CommunicationException: the flow handler's message, Spinner stays), loading (never answers: Spinner). */
export const handlers: RequestHandler[] = [
  contractHandler('Connect2_LegacyShared', 'ActionGetCountriesBySubscription', () => countriesBySubscriptionOutput()),
];
