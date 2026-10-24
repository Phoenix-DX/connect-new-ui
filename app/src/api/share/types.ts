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
