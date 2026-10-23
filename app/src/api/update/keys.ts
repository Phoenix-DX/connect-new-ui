/** Query keys of the update queries. */
export const updateKeys = {
  all: ['update'] as const,
  /** The update items of the home feed. The call has no input that changes the answer. */
  feed: () => [...updateKeys.all, 'feed'] as const,
};
