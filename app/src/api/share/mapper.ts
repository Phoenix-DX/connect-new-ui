import type { ActionOutputs, PathOf } from '@/api/client/callAction';
import { osLong } from '@/legacy/os/os-wire';
import type { ShareDetails } from './types';

/** Output of ActionGet_ShareDetails (contract UBTConnect__ActionGet_ShareDetails__Output). */
export type ShareDetailsWire = ActionOutputs<PathOf<'UBTConnect', 'ActionGet_ShareDetails'>>;

/** The fields of Get_ShareDetails that OnInitializeSharingScreen reads. A null HouseholderId ("0" or empty) gives "0". */
export const toShareDetails = (w: ShareDetailsWire): ShareDetails => {
  const item = w.ShareDetails.Details.ShareItem;
  return {
    isShareAvailable: w.IsShareAvailable,
    shareObjectTypeId: w.ShareObjectType.Id,
    objectId: w.ShareDetails.ObjectId,
    shareItemId: item.Id,
    canAccess: item.CanAccess,
    householderId: osLong(item.HouseholderId) ?? '0',
  };
};
