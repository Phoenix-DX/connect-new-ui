import type { ActionInputs, ActionOutputs, PathOf } from '../../lib/api';
import type { LongId } from '../../lib/os-wire';

/* Wire types from the contract (src/api/openapi.yaml), through the callAction types. */
export type ShareObjectTypeByIdWire = ActionOutputs<
  PathOf<'Connect2_LegacyShared', 'ScreenBlock_ShareObject/ScreenDataSetGetShareObjectTypeById'>
>;
export type GetAvailableUsersWire = ActionOutputs<
  PathOf<'Connect2_LegacyShared', 'ProfileList/DataActionGetAvailableUsers'>
>;
/** APIDomain_Directory_IS.Sender: one item of GetAvailableUsers.Response.Items. */
export type AvailableUserWire = GetAvailableUsersWire['Response']['Items']['List'][number];
export type GetHouseholdDetailsWire = ActionOutputs<PathOf<'Connect2_LegacyShared', 'ServiceAPIGetHouseholdDetails'>>;
export type CommunityBusinessShareCardWire = ActionOutputs<
  PathOf<'Connect2_LegacyShared', 'ServiceAPIGet_UI_CommunityBusinessShareCard'>
>['Out_UI_CommunityBusiness_ShareCard'];
export type ShareObjectInputsWire = ActionInputs<PathOf<'Connect2_LegacyShared', 'ActionShareObject'>>;
export type ShareObjectWire = ActionOutputs<PathOf<'Connect2_LegacyShared', 'ActionShareObject'>>;

/** Screen inputs (LegacyShareObject.mvc.js model :16-33): In_ShareObjectTypeId, In_ObjectId, In_CustomTitle (Text). */
export interface LegacyShareObjectInputs {
  In_ShareObjectTypeId: string;
  In_ObjectId: string;
  In_CustomTitle: string;
}

/** Connect_Household_CS UI_Household_Card_Content fields the block reads (ScreenBlock_ShareObject OnReady). */
export interface HouseholdCardContent {
  name: string;
  familyNames: string;
  localityName: string;
  countryName: string;
}

/** Connect_CommunityBusiness_CS.UI_CommunityBusiness_ShareCard (block variable CommunityBusiness). */
export interface CommunityBusinessShareCard {
  name: string;
  areasServed: string;
  countryName: string;
  photoBucket: string;
  photoPath: string;
  photoType: string;
  photoSignedPath: string;
}

/** APIDomain_Directory_IS.CDN4 (Photo of a user). */
export interface ProfilePhoto {
  bucket: string;
  path: string;
  type: string;
  signedPath: string;
}

/** One item of GetAvailableUsers.Response.Items, as GetAvailableUsersOnAfterFetch reads it. */
export interface AvailableUser {
  id: string;
  fullName: string;
  localityName: string;
  countryName: string;
  photo: ProfilePhoto;
}

/** GetAvailableUsers outputs the view and OnAfterFetch use. */
export interface AvailableUsers {
  label: string;
  items: AvailableUser[];
}

/** Connect2_LegacyShared.ShareProfile (ProfileList variable ShareProfiles). */
export interface ShareProfile {
  profileId: string;
  name: string;
  description: string;
  cdn: ProfilePhoto;
  isShared: boolean;
}

/** Block variables of ProfileList sent with DataActionGetAvailableUsers (screen variables at fetch time). */
export interface AvailableUsersRequest {
  SearchFilter: string;
  ShareObjectId: string;
  ShareObjectTypeId: string;
  MaxRecords: number;
  HasSearched: boolean;
}

/** ShareObject outputs. */
export interface ShareObjectResult {
  isSuccess: boolean;
  message: string;
  isAllowed: boolean;
  shareId: LongId;
}
