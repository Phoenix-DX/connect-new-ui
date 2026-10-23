import type { AvailableMembersCallInputs } from './types';

/** Query keys of the member queries. The inputs are part of the key: the server answer depends on all of them. */
export const memberKeys = {
  all: ['member'] as const,
  detail: (memberId: string) => [...memberKeys.all, 'detail', memberId] as const,
  /** `requestId` counts the Refresh Query requests of the caller: each new request is a new key, so it fetches again. */
  availableMembers: (inputs: AvailableMembersCallInputs, requestId: number) =>
    [...memberKeys.all, 'availableMembers', inputs, requestId] as const,
};
