import type { ActionInputs, ActionOutputs, PathOf } from '@/api/client/callAction';
import { osList, wireList, type LongId } from '@/lib/os-wire';
import type { PendingPolicy, PolicyAcceptanceDevice } from './types';

/** DataActionGetPendingPolicies of Policy_Custom_AcceptPendingPolicies. */
export type PendingPoliciesWire = ActionOutputs<
  PathOf<'UBTConnect', 'Policy_Custom_AcceptPendingPolicies/DataActionGetPendingPolicies'>
>;
/** ApplicationPolicies_CW.PolicyAcceptanceInformation. */
export type PolicyAcceptanceInformationWire = PendingPoliciesWire['Policies']['List'][number];
/** The inputs of ActionAcceptPolicies. */
export type AcceptPoliciesInputsWire = ActionInputs<PathOf<'UBTConnect', 'ActionAcceptPolicies'>>;

/** One pending policy: the policy information and the row state (Url, IsSelected). */
export const toPendingPolicy = (w: PolicyAcceptanceInformationWire): PendingPolicy => ({
  id: w.PolicyInformation.Id,
  applicationName: w.PolicyInformation.ApplicationName,
  policyTypeName: w.PolicyInformation.PolicyTypeName,
  policyContentFilename: w.PolicyInformation.PolicyContentFilename,
  policyContentType: w.PolicyInformation.PolicyContentType,
  url: w.Url,
  isSelected: w.IsSelected,
});

/** The Policies list of the answer, in the server order. */
export const toPendingPolicies = (wire: PendingPoliciesWire): PendingPolicy[] =>
  osList(wire.Policies).map(toPendingPolicy);

/** The inputs of ActionAcceptPolicies: the accepted policy ids and the device details, with ClientIP "". */
export const toAcceptPoliciesInputs = (
  policyIds: LongId[],
  device: PolicyAcceptanceDevice,
): AcceptPoliciesInputsWire => ({
  Policies: wireList(policyIds),
  DeviceDetails: {
    ClientIP: '',
    UniqueId: device.UniqueId,
    Platform: device.Platform,
    Manufacturer: device.Manufacturer,
    Model: device.Model,
  },
});
