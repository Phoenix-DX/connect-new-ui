import { useMutation, useQuery, type UseQueryOptions } from '@tanstack/react-query';
import { memberKeys } from './keys';
import { editMemberDetails, fetchAvailableMembers, fetchMember } from './repository';
import type { AvailableMembersCallInputs, Member, MemberAccountForm, MemberSearchResult } from './types';

/** The query options that a caller can set. The key, the query function and the cache times are fixed. */
export type MemberQueryOptions<T> = Omit<UseQueryOptions<T>, 'queryKey' | 'queryFn' | 'staleTime' | 'gcTime'>;

/** No cache: each fetch calls the server, as OutSystems does, so the calls stay equal to the original (call parity,
    refactor plan v2 §5.4). */
const NO_CACHE = { staleTime: 0, gcTime: 0 } as const;

/** DataActionGetAvailableMembers as a query, fetched on demand only. `requestId` counts the Refresh Query requests of
    the caller: 0 = no request yet (no fetch); each new id fetches again. No retry by default: OutSystems does not retry
    a failed data action. */
export function useAvailableMembersQuery(
  inputs: AvailableMembersCallInputs,
  requestId: number,
  options: Omit<MemberQueryOptions<MemberSearchResult[]>, 'enabled'> = {},
) {
  return useQuery({
    retry: false,
    ...options,
    queryKey: memberKeys.availableMembers(inputs, requestId),
    queryFn: () => fetchAvailableMembers(inputs),
    enabled: requestId > 0,
    ...NO_CACHE,
  });
}

/** GetMemberByMemberId as a query. No retry by default, as for the available members. */
export function useMemberQuery(memberId: string, options: MemberQueryOptions<Member> = {}) {
  return useQuery({
    retry: false,
    ...options,
    queryKey: memberKeys.detail(memberId),
    queryFn: () => fetchMember(memberId),
    ...NO_CACHE,
  });
}

/** The variables of the account form save. */
export interface EditMemberDetailsVariables {
  accountForm: MemberAccountForm;
  isRequireRequestCreation: boolean;
}

/** Member_EditDetails_Service as a mutation. A mutation does not retry by default, as OutSystems. */
export function useEditMemberDetailsMutation() {
  return useMutation({
    mutationFn: ({ accountForm, isRequireRequestCreation }: EditMemberDetailsVariables) =>
      editMemberDetails(accountForm, isRequireRequestCreation),
  });
}
