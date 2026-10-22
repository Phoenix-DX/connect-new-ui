import type { ActionOutputs, PathOf } from '@/api/client/callAction';

/** Wire outputs of Get_ShareDetails (contract UBTConnect__ActionGet_ShareDetails__Output). Only mocks.ts sees them. */
export type Get_ShareDetailsWire = ActionOutputs<PathOf<'UBTConnect', 'ActionGet_ShareDetails'>>;

/** Screen inputs with their original names (UBTConnect.Legacy_Share.ConnectShare.mvc.js model: ShareId Text). */
export interface ConnectShareInputs {
  ShareId: string;
}

/** The parts of Get_ShareDetails that OnInitializeSharingScreen reads (UBTConnect.controller.js:15625-15660). */
export interface ShareDetails {
  /** IsShareAvailable */
  isShareAvailable: boolean;
  /** ShareObjectType.Id (Type_ShareObject static entity, Text identifier) */
  shareObjectTypeId: string;
  /** ShareDetails.ObjectId */
  objectId: string;
  /** ShareDetails.Details.ShareItem.Id */
  shareItemId: string;
  /** ShareDetails.Details.ShareItem.CanAccess */
  canAccess: boolean;
  /** ShareDetails.Details.ShareItem.HouseholderId (Long Integer, as text) */
  householderId: string;
}

/** Output parameters of the client action OnInitializeSharingScreen (UBTConnect.controller.js:15738-15779). */
export interface OnInitializeSharingScreenResult {
  isRedirect: boolean;
  redirect_ShareObjectTypeId: string;
  showFreeSubscriptionAlert: boolean;
  statusMessage: string;
  /** Redirect_Share_Attributes.Id */
  redirect_Share_AttributesId: string;
}
