import { callAction } from '@/api/client/callAction';
import type { UI_Screen_SubdivisionDetails } from '@/shared/UBTConnect/lib/structures';

/** DataActionGetSubdivision (block controller getSubdivision$DataActRefresh, mvc.js:458-476): sent with the block's
    In_SubdivsionId; refreshed only by ScreenEvent_OnReady. */
export async function getSubdivision(In_SubdivsionId: string): Promise<UI_Screen_SubdivisionDetails> {
  const out = await callAction('UBTConnect', 'SupperMeeting_DetailsBlock/DataActionGetSubdivision', {
    In_SubdivsionId,
  });
  return out.Subdivision;
}
