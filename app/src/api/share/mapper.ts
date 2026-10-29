import type { ActionOutputs, PathOf } from '@/api/client/callAction';
import { osLong } from '@/lib/os-wire';
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

import { osDate, osList } from '@/lib/os-wire';
import type {
  AvailableUser,
  AvailableUsers,
  SharedObjectDetail,
  ShareObjectCallInputs,
  ShareObjectResult,
} from './types';

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

/* ---- MessageDetail: Share_UI.ShareObjectDetail_ExtendedShare ---- */

import type { ActionInputs } from '@/api/client/callAction';
import type { ShareableUpdateItem, SharedObjectDetailVariables } from './types';

/** The outputs of DataActionGetShare of ShareObjectDetail_ExtendedShare. */
type SharedObjectDetailWire = ActionOutputs<
  PathOf<'Connect2_LegacyShared', 'ShareObjectDetail_ExtendedShare/DataActionGetShare'>
>;

/** DataActionGetShare: the share, its item and its type, with null for the null dates. */
export const toSharedObjectDetail = (w: SharedObjectDetailWire): SharedObjectDetail => {
  const item = w.GetShareByIdResponse.Details.ShareItem;
  return {
    objectId: w.GetShareByIdResponse.ObjectId,
    senderId: w.GetShareByIdResponse.Details.Sender.Id,
    shareItem: {
      id: item.Id,
      canAccess: item.CanAccess,
      isDeceased: item.Extension.IsDeceased,
      householderId: item.HouseholderId,
      type: item.Type,
      title: item.Title,
      subtitle: item.Subtitle,
      label: item.Label,
      dateTime: osDate(item.DateTime),
      genderId: item.GenderId,
      parentsName: item.ParentsName,
      birthType: item.BirthType,
      localityName: item.LocalityName,
      countryName: item.CountryName,
      photoSignedPath: item.Photo.SignedPath,
      isVisible: item.IsVisible,
    },
    shareObjectTypeId: w.ShareObjectType.Id,
    shareObjectTypeLabel: w.ShareObjectType.Label,
    isShareAvailable: w.IsShareAvailable,
    updateDate: osDate(w.UpdateDate),
  };
};

/** The variables of ShareObjectDetail_ExtendedShare as OutSystems sends them with DataActionGetShare. */
type SharedObjectDetailVariablesWire = ActionInputs<
  PathOf<'Connect2_LegacyShared', 'ShareObjectDetail_ExtendedShare/DataActionGetShare'>
>;

/** ShareableUpdateItem at OnInitialize: the UI_UpdateItem defaults. A Long Integer is "0", the Date the null date. */
export const emptyShareableUpdateItem = (): ShareableUpdateItem => ({
  updateItemId: '0',
  updateItemTypeId: '',
  name: '',
  date: null,
  genderId: '',
  locationString: '',
  isRead: false,
  hasAccess: false,
  hasShare: false,
  householdId: '0',
  parentsNames: '',
  birthType: '',
  memberId: '',
});

/** The block variables of DataActionGetShare (screenData.variables), with their OutSystems names. A record sends every
    attribute: a missing one gets its default. A Long Integer goes as text ("0" for NullIdentifier), a null Date as
    NullDate. The _<input>InDataFetchStatus integers stay out, as in the contract. */
export const toSharedObjectDetailVariablesWire = (v: SharedObjectDetailVariables): SharedObjectDetailVariablesWire => {
  const o = v.shareableObject;
  const u = v.shareableUpdateItem;
  return {
    ShareId: v.shareId,
    HasAccessToDeceasedHousehold: v.hasAccessToDeceasedHousehold,
    ShareableObject_Generic: {
      ConnectEntityTypeId: o.ConnectEntityTypeId ?? '',
      Id: o.Id ?? '',
      Location: o.Location ?? '',
      SignedURL: o.SignedURL ?? '',
      Subtitle: o.Subtitle ?? '',
      Title: o.Title ?? '',
    },
    ShareableUpdateItem: {
      UpdateItemId: osLong(u.updateItemId) ?? '0',
      UpdateItemTypeId: u.updateItemTypeId,
      Name: u.name,
      Date: u.date ?? NULL_DATE,
      GenderId: u.genderId,
      LocationString: u.locationString,
      IsRead: u.isRead,
      HasAccess: u.hasAccess,
      HasShare: u.hasShare,
      HouseholdId: osLong(u.householdId) ?? '0',
      ParentsNames: u.parentsNames,
      BirthType: u.birthType,
      MemberId: u.memberId,
    },
  };
};
