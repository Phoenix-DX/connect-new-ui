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

/* ---- LegacyShareObject: ScreenBlock_ShareObject and ProfileList (Connect2_LegacyShared Share_UI) ---- */

import { osList } from '@/legacy/os/os-wire';
import type { AvailableUser, AvailableUsers, ShareObjectCallInputs, ShareObjectResult } from './types';

/** The outputs of ScreenDataSetGetShareObjectTypeById (the aggregate of ScreenBlock_ShareObject), as the contract
    describes them. */
export type ShareObjectTypeByIdWire = ActionOutputs<
  PathOf<'Connect2_LegacyShared', 'ScreenBlock_ShareObject/ScreenDataSetGetShareObjectTypeById'>
>;
/** The outputs of DataActionGetAvailableUsers (the data action of ProfileList), as the contract describes them. */
export type AvailableUsersWire = ActionOutputs<
  PathOf<'Connect2_LegacyShared', 'ProfileList/DataActionGetAvailableUsers'>
>;
/** One user of GetAvailableUsers.Response.Items (APIDomain_Directory_IS.Sender). */
export type AvailableUserWire = AvailableUsersWire['Response']['Items']['List'][number];
/** The outputs of ShareObject, as the contract describes them. */
type ShareObjectWire = ActionOutputs<PathOf<'Connect2_LegacyShared', 'ActionShareObject'>>;

/** NullDate() as it travels on the wire (a DateTime default sent as a Date). */
const NULL_DATE = '1900-01-01';

/** The Label of the current (first) record of the aggregate; "" when the list is empty (the default record). */
export const toShareObjectTypeLabel = (wire: ShareObjectTypeByIdWire): string =>
  osList(wire.List)[0]?.Type_ShareObject.Label ?? '';

const toAvailableUser = (w: AvailableUserWire): AvailableUser => ({
  id: w.Id,
  fullName: w.FullName,
  localityName: w.LocalityName,
  countryName: w.CountryName,
  photo: { bucket: w.Photo.Bucket, path: w.Photo.Path, type: w.Photo.Type, signedPath: w.Photo.SignedPath },
});

/** The Label and the users of DataActionGetAvailableUsers, with the list unwrapped. */
export const toAvailableUsers = (wire: AvailableUsersWire): AvailableUsers => ({
  label: wire.Label,
  items: osList(wire.Response.Items).map(toAvailableUser),
});

/** The inputs of ShareObject: the caller's values, In_UpdateType "" and In_UpdateDate the null date. */
export const toShareObjectInputs = (inputs: ShareObjectCallInputs) => ({
  In_ShareObjectTypeId: inputs.shareObjectTypeId,
  In_SharedObjectId: inputs.sharedObjectId,
  In_SharingProfileName: inputs.sharingProfileName,
  In_TargetCBUserId: inputs.targetCBUserId,
  In_UpdateType: '',
  In_UpdateDate: NULL_DATE,
});

/** The outputs of ShareObject. */
export const toShareObjectResult = (wire: ShareObjectWire): ShareObjectResult => ({
  isSuccess: wire.IsSuccess,
  message: wire.Message,
  isAllowed: wire.IsAllowed,
  shareId: wire.ShareId,
});
