import { callAction } from '@/api/client/callAction';
import { osLong } from '@/legacy/os/os-wire';
import type { ConnectShareInputs, ShareDetails } from './types';

/** Screen inputs from the query string with the original names (P-PARAMS; ConnectShare.mvc.js model: ShareId Text,
    "" when absent). */
export function readInputs(params: URLSearchParams): ConnectShareInputs {
  return { ShareId: params.get('ShareId') ?? '' };
}

/** Get_ShareDetails (UBTConnect.controller.js:18425-18440, get_ShareDetails$ServerAction): called by
    OnInitializeSharingScreen with IncludeDeceased = False (:15623). An exception goes up to the caller's AllExceptions
    handler. */
export async function get_ShareDetails(shareId: string): Promise<ShareDetails> {
  const out = await callAction('UBTConnect', 'ActionGet_ShareDetails', { ShareId: shareId, IncludeDeceased: false });
  const item = out.ShareDetails.Details.ShareItem;
  return {
    isShareAvailable: out.IsShareAvailable,
    shareObjectTypeId: out.ShareObjectType.Id,
    objectId: out.ShareDetails.ObjectId,
    shareItemId: item.Id,
    canAccess: item.CanAccess,
    householderId: osLong(item.HouseholderId) ?? '0',
  };
}
