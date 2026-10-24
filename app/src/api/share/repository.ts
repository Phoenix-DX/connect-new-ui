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
