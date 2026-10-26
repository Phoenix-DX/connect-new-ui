import { callAction } from '@/api/client/callAction';
import type { FeedConfig, FeedConfigInputs } from './types';

/* The calls of the feed CMS embed, with their OutSystems names. */

/** DataActionGetFeedConfig of Embedded_FeedCMS (UBTConnect_EmbedFeed): the configuration of the feed SDK, sent with
    the two input parameters of the block as screen variables. */
export async function fetchFeedConfig(inputs: FeedConfigInputs): Promise<FeedConfig> {
  return callAction('UBTConnect_EmbedFeed', 'Embedded_FeedCMS/DataActionGetFeedConfig', inputs);
}
