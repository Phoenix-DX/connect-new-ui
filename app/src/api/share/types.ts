import type { LongId } from '@/legacy/os/os-wire';

/* Domain types of the shared items (Connect2_Sharing): the share that a share link opens. The wire types stay in
   src/api/schema.d.ts. */

/** The parts of Get_ShareDetails that the client action OnInitializeSharingScreen reads. */
export interface ShareDetails {
  /** IsShareAvailable. */
  isShareAvailable: boolean;
  /** ShareObjectType.Id: the Text identifier of the static entity Type_ShareObject. */
  shareObjectTypeId: string;
  /** ShareDetails.ObjectId. */
  objectId: string;
  /** ShareDetails.Details.ShareItem.Id. */
  shareItemId: string;
  /** ShareDetails.Details.ShareItem.CanAccess. */
  canAccess: boolean;
  /** ShareDetails.Details.ShareItem.HouseholderId: a Long Integer as text, "0" when it is null. */
  householderId: LongId;
}

/* ---- LegacyShareObject: ScreenBlock_ShareObject and ProfileList (Connect2_LegacyShared Share_UI) ---- */

/** The inputs of ScreenDataSetGetShareObjectTypeById: the variables of ScreenBlock_ShareObject that OutSystems sends
    with the aggregate (the block inputs and User_AgeVisibility). A type alias, not an interface: the contract inputs
    have an index signature. */
export type ShareObjectTypeCallInputs = {
  ShareObjectTypeId: string;
  ObjectId: string;
  In_CustomTitle: string;
  User_AgeVisibility: boolean;
};

/** The inputs of DataActionGetAvailableUsers: the variables of ProfileList at the time of the fetch. A type alias, not
    an interface: the contract inputs have an index signature. */
export type AvailableUsersCallInputs = {
  SearchFilter: string;
  ShareObjectId: string;
  ShareObjectTypeId: string;
  MaxRecords: number;
  HasSearched: boolean;
};

/** The photo of a user (APIDomain_Directory_IS.CDN4). */
export interface ProfilePhoto {
  bucket: string;
  path: string;
  type: string;
  signedPath: string;
}

/** A user that the object can be shared with (APIDomain_Directory_IS.Sender), with the fields that
    GetAvailableUsersOnAfterFetch reads. */
export interface AvailableUser {
  id: string;
  fullName: string;
  localityName: string;
  countryName: string;
  photo: ProfilePhoto;
}

/** The outputs of DataActionGetAvailableUsers that ProfileList reads: the Label of the list and the users. */
export interface AvailableUsers {
  label: string;
  items: AvailableUser[];
}

/** The inputs of ShareObject that the caller gives. In_UpdateType and In_UpdateDate are always empty. */
export interface ShareObjectCallInputs {
  shareObjectTypeId: string;
  sharedObjectId: string;
  sharingProfileName: string;
  targetCBUserId: string;
}

/** The outputs of ShareObject. */
export interface ShareObjectResult {
  isSuccess: boolean;
  message: string;
  isAllowed: boolean;
  shareId: LongId;
}
