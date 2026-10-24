import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { shareKeys } from './keys';
import { fetchAvailableUsers, fetchShareObjectTypeLabel } from './repository';
import type { AvailableUsersCallInputs, ShareObjectTypeCallInputs } from './types';

/* The two queries keep the options of the block queries that they replace: the previous answer stays while a new key
   is fetched (OutSystems keeps the old data during a refresh), no retry (OutSystems does not retry a failed data
   action) and the library default cache times. */

/** ScreenDataSetGetShareObjectTypeById as a query: fetched at the block start and again for each new set of block
    variables. The data is the Label ("" when there is no record). */
export function useShareObjectTypeLabelQuery(inputs: ShareObjectTypeCallInputs) {
  return useQuery({
    queryKey: shareKeys.objectTypeLabel(inputs),
    queryFn: () => fetchShareObjectTypeLabel(inputs),
    placeholderData: keepPreviousData,
    retry: false,
  });
}

/** DataActionGetAvailableUsers as a query: fetched at the block start (`requestId` 0) and again for each new
    `requestId` (a Refresh Query of the caller), with the block variables of that request. */
export function useAvailableUsersQuery(inputs: AvailableUsersCallInputs, requestId: number) {
  return useQuery({
    queryKey: shareKeys.availableUsers(inputs, requestId),
    queryFn: () => fetchAvailableUsers(inputs),
    placeholderData: keepPreviousData,
    retry: false,
  });
}
