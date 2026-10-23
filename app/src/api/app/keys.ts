import type { PoliciesCallInputs } from './types';

/** Query keys of the app queries. */
export const appKeys = {
  all: ['app'] as const,
  /** All the inputs: the server answer can depend on each of them. */
  policies: (inputs: PoliciesCallInputs) => [...appKeys.all, 'policies', inputs] as const,
};
