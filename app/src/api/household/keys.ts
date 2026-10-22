import type { HouseholdCallInputs } from './types';

/** Query keys of the household queries. The inputs are part of the key: the server answer depends on all of them
    (for example UserAge_Visibility). */
export const householdKeys = {
  all: ['household'] as const,
  detail: (inputs: HouseholdCallInputs) => [...householdKeys.all, 'detail', inputs] as const,
  coordinates: (inputs: HouseholdCallInputs) => [...householdKeys.all, 'coordinates', inputs] as const,
};
