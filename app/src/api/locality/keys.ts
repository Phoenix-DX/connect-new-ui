import type { AllLocalitiesCallInputs, LocalityDetailsCallInputs } from './types';

/** Query keys of the locality queries. The inputs are part of the key: the server answer can depend on each of them. */
export const localityKeys = {
  all: ['locality'] as const,
  cardList: (countryCode: string) => [...localityKeys.all, 'cardList', countryCode] as const,
  details: (inputs: LocalityDetailsCallInputs) => [...localityKeys.all, 'details', inputs] as const,
  interchanges: (interchangeLocalityId: string) =>
    [...localityKeys.all, 'interchanges', interchangeLocalityId] as const,
  subdivisionDetails: (subdivisionId: string) => [...localityKeys.all, 'subdivisionDetails', subdivisionId] as const,
  allLocalities: (inputs: AllLocalitiesCallInputs) => [...localityKeys.all, 'allLocalities', inputs] as const,
};
