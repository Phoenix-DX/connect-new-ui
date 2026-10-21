import type { ActionInputs, ActionOutputs, PathOf } from '../../lib/api';
import type { LongId } from '../../lib/os-wire';

/* Wire types from the contract (src/api/openapi.yaml), through the callAction types. */
type GetPendingPoliciesOutputs = ActionOutputs<
  PathOf<'UBTConnect', 'Policy_Custom_AcceptPendingPolicies/DataActionGetPendingPolicies'>
>;
/** ApplicationPolicies_CW.PolicyAcceptanceInformation. */
export type PolicyAcceptanceInformationWire = GetPendingPoliciesOutputs['Policies']['List'][number];
/** ApplicationPolicies.PolicyAcceptanceDeviceDetails. */
export type PolicyAcceptanceDeviceDetailsWire = ActionInputs<
  PathOf<'UBTConnect', 'ActionAcceptPolicies'>
>['DeviceDetails'];

/** One row of GetPendingPolicies.Policies (PolicyAcceptanceInformation), as the block uses it. */
export interface PendingPolicy {
  id: LongId;
  applicationName: string;
  policyTypeName: string;
  policyContentFilename: string;
  policyContentType: string;
  url: string;
  isSelected: boolean;
}

/** Block inputs of Policy_Custom_AcceptPendingPolicies that are sent with DataActionGetPendingPolicies (screen
    variables), and drive its refresh (OnParametersChanged). */
export interface PendingPoliciesInputs {
  policyApplications: string[];
  country: string;
  contentBlockId: string;
}

/** Outputs of the GetDeviceInfo JS node of ContinueOnClick (web branch). */
export interface DeviceInfo {
  UserAgent: string;
  UniqueId: string;
  Manufacturer: string;
  Model: string;
  Platform: string;
}
