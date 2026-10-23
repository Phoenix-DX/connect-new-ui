import type { LongId } from '@/legacy/os/os-wire';

/* Domain types of the application policies that the user must accept (ApplicationPolicies and ApplicationPolicies_CW):
   the pending policies of the block Policy_Custom_AcceptPendingPolicies and their acceptance. The policy documents of
   the app start (CacheControl_Policies) are in api/app. The wire types stay in src/api/schema.d.ts. */

/** One row of GetPendingPolicies.Policies (ApplicationPolicies_CW PolicyAcceptanceInformation), as the block uses it. */
export interface PendingPolicy {
  id: LongId;
  applicationName: string;
  policyTypeName: string;
  policyContentFilename: string;
  policyContentType: string;
  url: string;
  isSelected: boolean;
}

/** The input parameters of Policy_Custom_AcceptPendingPolicies that DataActionGetPendingPolicies sends (screen
    variables). They drive its refresh (OnParametersChanged), so they are the query key. */
export interface PendingPoliciesInputs {
  policyApplications: string[];
  country: string;
  contentBlockId: string;
}

/** The device details of an acceptance (ApplicationPolicies PolicyAcceptanceDeviceDetails) that the caller gives.
    ClientIP is not set: it keeps its default "". */
export interface PolicyAcceptanceDevice {
  UniqueId: string;
  Platform: string;
  Manufacturer: string;
  Model: string;
}
