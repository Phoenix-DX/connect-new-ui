import type { AvailableUsersCallInputs, ShareObjectTypeCallInputs } from './types';

/** Query keys of the share queries. The inputs are part of the key: the server answer depends on all of them. */
export const shareKeys = {
  all: ['share'] as const,
  /** The share object type of ScreenBlock_ShareObject: a change of a block variable is a new key, so the aggregate is
      fetched again (OnParametersChanged). */
  objectTypeLabel: (inputs: ShareObjectTypeCallInputs) => [...shareKeys.all, 'objectTypeLabel', inputs] as const,
  /** The users of ProfileList. `requestId` counts the Refresh Query requests of the caller: each new request is a new
      key, so it fetches again, also with the same inputs. */
  availableUsers: (inputs: AvailableUsersCallInputs, requestId: number) =>
    [...shareKeys.all, 'availableUsers', inputs, requestId] as const,
};
