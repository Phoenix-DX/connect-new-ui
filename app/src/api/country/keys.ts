import type { AllCountriesCallInputs } from './types';

/** Query keys of the country queries. */
export const countryKeys = {
  all: ['country'] as const,
  /** The country code only: the screen reads its other variables at fetch time and asks for a refetch itself. */
  localityStatistics: (countryCode: string) => [...countryKeys.all, 'localityStatistics', { countryCode }] as const,
  info: (currentCountryCode: string) => [...countryKeys.all, 'info', currentCountryCode] as const,
  /** All the inputs: the server answer can depend on each of them. */
  allCountries: (inputs: AllCountriesCallInputs) => [...countryKeys.all, 'allCountries', inputs] as const,
};
