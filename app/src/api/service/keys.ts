/** Query keys of the service queries. */
export const serviceKeys = {
  all: ['service'] as const,
  /** The services of the signed-in user (Services screen). The call has no input that changes the answer. */
  user: () => [...serviceKeys.all, 'user'] as const,
  /** The services card of the home feed (FeedBlock_Services). Its variables are the same at each fetch on HomeFeed,
      so the key does not hold them. */
  feed: () => [...serviceKeys.all, 'feed'] as const,
};
