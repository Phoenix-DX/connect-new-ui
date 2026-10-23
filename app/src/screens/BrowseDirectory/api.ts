/* DataActionGetLocalityStatistics of the screen is in the domain api/locality. Only Action_RefreshData calls it (fetch
   on demand), with the country code and the other screen variables at their initial values. This module keeps the
   name that the screen uses. */
export { fetchLocalityCardList as getLocalityStatistics } from '@/api/locality';
