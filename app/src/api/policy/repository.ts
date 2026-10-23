import { callAction } from '@/api/client/callAction';
import { wireList, type LongId } from '@/legacy/os/os-wire';
import { toAcceptPoliciesInputs, toPendingPolicies } from './mapper';
import type { PendingPoliciesInputs, PendingPolicy, PolicyAcceptanceDevice } from './types';

/** The two calls of the block Policy_Custom_AcceptPendingPolicies, with their OutSystems names: the data action that
    reads the pending policies and the server action that accepts them.
    @origin UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies */

/** DataActionGetPendingPolicies: the policies that the user must still accept. It sends the block's screen variables:
    the three input parameters and IsAllSelected, as it is at fetch time. */
export async function fetchPendingPolicies(
  inputs: PendingPoliciesInputs,
  isAllSelected: boolean,
): Promise<PendingPolicy[]> {
  return toPendingPolicies(
    await callAction('UBTConnect', 'Policy_Custom_AcceptPendingPolicies/DataActionGetPendingPolicies', {
      PolicyApplications: wireList(inputs.policyApplications),
      Country: inputs.country,
      ContentBlockId: inputs.contentBlockId,
      IsAllSelected: isAllSelected,
    }),
  );
}

/** ActionAcceptPolicies (ContinueOnClick): accepts the selected policy ids with the device details. No outputs. A
    write: the mocks answer it, the real server never gets it. */
export async function acceptPolicies(policyIds: LongId[], device: PolicyAcceptanceDevice): Promise<void> {
  await callAction('UBTConnect', 'ActionAcceptPolicies', toAcceptPoliciesInputs(policyIds, device));
}
