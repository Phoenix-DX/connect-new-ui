import type { BookmarkGroupListCallInputs, BookmarkSummariesVariables } from './types';

/** Query keys of the bookmark queries. The inputs are part of the key: the server answer can depend on each of them. */
export const bookmarkKeys = {
  all: ['bookmark'] as const,
  group: (inputs: BookmarkGroupListCallInputs) => [...bookmarkKeys.all, 'group', inputs] as const,
  groupSummaries: (variables: BookmarkSummariesVariables) =>
    [...bookmarkKeys.all, 'groupSummaries', variables] as const,
};
