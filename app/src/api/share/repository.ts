import { callAction } from '@/api/client/callAction';
import { toShareDetails } from './mapper';
import type { ShareDetails } from './types';

/** The call of the share links, with its OutSystems name: the server action Get_ShareDetails, which the client action
    OnInitializeSharingScreen of ConnectShare runs. The flow calls it, so it has no query hook.
    @origin UBTConnect.Legacy_Share.ConnectShare */

/** Get_ShareDetails (ActionGet_ShareDetails): the share of a ShareId, with IncludeDeceased False. An exception goes up
    to the caller. */
export async function fetchShareDetails(shareId: string): Promise<ShareDetails> {
  return toShareDetails(
    await callAction('UBTConnect', 'ActionGet_ShareDetails', { ShareId: shareId, IncludeDeceased: false }),
  );
}

/* ---- LegacyShareObject: ScreenBlock_ShareObject and ProfileList (Connect2_LegacyShared Share_UI) ---- */

import { toAvailableUsers, toShareObjectInputs, toShareObjectResult, toShareObjectTypeLabel } from './mapper';
import type {
  AvailableUsers,
  AvailableUsersCallInputs,
  ShareObjectCallInputs,
  ShareObjectResult,
  ShareObjectTypeCallInputs,
} from './types';

/** ScreenDataSetGetShareObjectTypeById (the aggregate of ScreenBlock_ShareObject, max 50 records from 0): the Label of
    the current record of Type_ShareObject, "" when there is none. The block fetches it at start and on each change of
    its variables. */
export async function fetchShareObjectTypeLabel(inputs: ShareObjectTypeCallInputs): Promise<string> {
  return toShareObjectTypeLabel(
    await callAction('Connect2_LegacyShared', 'ScreenBlock_ShareObject/ScreenDataSetGetShareObjectTypeById', inputs),
  );
}

/** DataActionGetAvailableUsers (the data action of ProfileList): the users that the object can be shared with, and the
    Label of the list. ProfileList fetches it at start and on each Refresh Query. */
export async function fetchAvailableUsers(inputs: AvailableUsersCallInputs): Promise<AvailableUsers> {
  return toAvailableUsers(await callAction('Connect2_LegacyShared', 'ProfileList/DataActionGetAvailableUsers', inputs));
}

/** ShareObject (the server action of DeferredHandleShareObjectList in ProfileList): shares the object with one user. A
    write: the mocks answer it, the real server never gets it. */
export async function shareObject(inputs: ShareObjectCallInputs): Promise<ShareObjectResult> {
  return toShareObjectResult(
    await callAction('Connect2_LegacyShared', 'ActionShareObject', toShareObjectInputs(inputs)),
  );
}

/* ---- MessageDetail: Share_UI.ShareObjectDetail_ExtendedShare (Connect2_LegacyShared) ---- */

import { toSharedObjectDetail, toSharedObjectDetailVariablesWire } from './mapper';
import type { SharedObjectDetail, SharedObjectDetailVariables } from './types';

/** DataActionGetShare of ShareObjectDetail_ExtendedShare: the share of the block's ShareId. The block fetches it at
    start and on each change of its inputs (OnParametersChanged). The call sends every block variable, as OutSystems
    does; the server reads only the two inputs. */
export async function fetchSharedObjectDetail(variables: SharedObjectDetailVariables): Promise<SharedObjectDetail> {
  return toSharedObjectDetail(
    await callAction(
      'Connect2_LegacyShared',
      'ShareObjectDetail_ExtendedShare/DataActionGetShare',
      toSharedObjectDetailVariablesWire(variables),
    ),
  );
}
