import type { PendingPoliciesInputs } from './types';

/** Query keys of the policy queries. */
export const policyKeys = {
  all: ['policy'] as const,
  /** The three input parameters of the block: a change refreshes the list (OnParametersChanged). IsAllSelected is
      sent too, but it is not in the key: a change of it does not refresh. */
  pending: (inputs: PendingPoliciesInputs) => [...policyKeys.all, 'pending', inputs] as const,
};
