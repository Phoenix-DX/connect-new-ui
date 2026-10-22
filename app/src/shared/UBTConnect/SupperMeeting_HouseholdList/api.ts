import { callAction } from '@/api/client/callAction';
import { osList } from '@/legacy/os/os-wire';
import type { UI_SubdivisionHousehold } from '@/shared/UBTConnect/lib/structures';

/** DataActionGetSubdivisionHouseholds (block controller getSubdivisionHouseholds$DataActRefresh, mvc.js:235-252): sent
    with the block's In_SubdivisionId; refreshed only by OnReady. */
export async function getSubdivisionHouseholds(In_SubdivisionId: string): Promise<UI_SubdivisionHousehold[]> {
  const out = await callAction('UBTConnect', 'SupperMeeting_HouseholdList/DataActionGetSubdivisionHouseholds', {
    In_SubdivisionId,
  });
  return osList(out.Household_GalleryCard_List);
}
