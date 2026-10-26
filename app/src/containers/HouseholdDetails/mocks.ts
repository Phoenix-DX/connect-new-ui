import type { RequestHandler } from 'msw';
import { contractHandler } from '@/mocks/contract';
import { markNoPhoto } from '@/components/ui/EntityLazyImage/mocks';
import { markContactOnly } from '@/containers/EntityDetailsActions/mocks';
import { Connect_Entity } from '@/lib/ubtConnect/staticEntities';
import { HOUSEHOLD_DETAILS_ID, membersOf, sampleHouseholds } from './mockData';

/* The household details (this container, used by HouseholdDetails, HouseholdCarousel, Profile and Locality_Details)
   call DataActionGetHousehold and DataActionGetHousehold_Coordinates, answered here; the HouseholdDetails screen calls
   no action of its own. The contact details, signed images and bottom-bar calls are answered by their own shared and
   platform mocks.
   Scenarios: `real`, `loading` (never answers: skeleton) and `error` (calls fail: skeleton stays).
   Never recorded (households, members and their coordinates are person data): fictional, with the captured shapes and
   counts (HouseholdDetails/default: 5 members, no married children, visible; Profile/default: 3 members, CR-Profile-1;
   HouseholdCarousel/default slides 2-4: CR-HouseholdCarousel-2). Any other HouseholdId answers the HouseholdDetails
   household. Members captured without photo or with one contact channel register their ids with the image and contact
   mocks. */
for (const [id, sample] of Object.entries(sampleHouseholds)) {
  if (!sample) continue;
  const members = membersOf(id, sample);
  for (const i of sample.noPhoto ?? []) markNoPhoto(Connect_Entity.Member, members[i]?.Id ?? '0');
  for (const [i, only] of Object.entries(sample.contactOnly ?? {}))
    markContactOnly(Connect_Entity.Member, members[Number(i)]?.Id ?? '0', only);
}

export const handlers: RequestHandler[] = [
  contractHandler('UBTConnect', 'HouseholdDetails_Block/DataActionGetHousehold', ({ HouseholdId }) => {
    const id = HouseholdId !== undefined && sampleHouseholds[HouseholdId] ? HouseholdId : HOUSEHOLD_DETAILS_ID;
    const sample = sampleHouseholds[id] ?? sampleHouseholds[HOUSEHOLD_DETAILS_ID];
    if (!sample) throw new Error('no sample household');
    return {
      Household: sample.household,
      Out_HouseholdMembers: { List: membersOf(id, sample) },
      Out_NonHouseholdMembers: { List: sample.nonMembers ?? [] },
      isVisible: true,
    };
  }),
  contractHandler('UBTConnect', 'HouseholdDetails_Block/DataActionGetHousehold_Coordinates', () => ({
    HouseholdCoordinates: { Latitude: '-33.8688', Longitude: '151.2093', UseCoordinates: true },
  })),
];
