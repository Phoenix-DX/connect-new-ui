import type { FeedConfigInputs } from './types';

/** Query keys of the feed queries. */
export const feedKeys = {
  all: ['feed'] as const,
  /** The two inputs of Embedded_FeedCMS: a change fetches the configuration again, as the block did. */
  config: (inputs: FeedConfigInputs) => [...feedKeys.all, 'config', inputs] as const,
};
