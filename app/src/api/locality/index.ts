export {
  useAllLocalitiesQuery,
  useInterchangesQuery,
  useLocalityCardListQuery,
  useLocalityDetailsQuery,
  useSubdivisionDetailsQuery,
  type LocalityQueryOptions,
} from './hooks';
export { localityCache, localityKeys } from './keys';
export {
  fetchAllLocalities,
  fetchBulkSubdivisions,
  fetchEventFilterLocalities,
  fetchInterchanges,
  fetchLocalityCardList,
  fetchLocalityDetails,
  fetchLocalityInformation,
  fetchOneSchoolCards,
  fetchSubdivisionCards,
  fetchSubdivisionDetails,
  fetchSubdivisionName,
} from './repository';
export type * from './types';

/* OneSchoolGlobalDetails: DataActionGetOneSchoolGlobalDetails. */
export { useOneSchoolGlobalDetailsQuery } from './hooks';
