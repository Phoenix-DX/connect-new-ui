import type { RequestHandler } from 'msw';
import { contractHandler } from '@/mocks/contract';
import { ASSEMBLE_COUNTRIES, countryWithMapPositionWire } from '@/mocks/fictional/assemble';
import { wireList } from '@/lib/os-wire';

/* Mocks of Assemble_BrowseByCountry (P-MOCKS). GetCountriesBySubscription answers the fictional Assemble world's 17
   countries (src/mocks/fictional/assemble.ts, the captured count and order) with the counts of the fresh TST capture of
   2026-11-07: Saint Vincent and Trinidad show 73 members (one lower than the shared world) and the United States 28
   localities (one lower). The user information comes from the shell and Connect2_LegacyShared mocks. Scenarios: real
   (the list), empty (no country: "No results found"), error (CommunicationException: the flow handler's message,
   Spinner stays), loading (never answers: Spinner). */
const CAPTURED_COUNTS: Record<string, Partial<{ members: number; localities: number }>> = {
  VC: { members: 73 },
  TT: { members: 73 },
  US: { localities: 28 },
};

const countries = () =>
  ASSEMBLE_COUNTRIES.map((c) => countryWithMapPositionWire({ ...c, ...CAPTURED_COUNTS[c.code] }));

export const handlers: RequestHandler[] = [
  contractHandler('Connect2_LegacyShared', 'ActionGetCountriesBySubscription', () => ({
    Countries: wireList(countries()),
  })),
];
