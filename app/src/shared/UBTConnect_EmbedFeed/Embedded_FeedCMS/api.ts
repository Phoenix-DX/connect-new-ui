import { callAction } from '../../../lib/api';

export interface FeedConfig {
  Token: string;
  BaseURL: string;
  B2CClientId: string;
  B2CPolicy: string;
  TokenType: string;
}

/** DataActionGetFeedConfig (Embedded_FeedCMS.mvc.js:451-465, fetched on initialize): sent with the block's inputs as
    screen variables. Its BaseURL is the one switch point of the feed page (mock: public/mock-embeds/feed-cms.html). */
export async function getFeedConfig(inputs: { FeedItemId: string; B2CTenant: string }): Promise<FeedConfig> {
  return callAction('UBTConnect_EmbedFeed', 'Embedded_FeedCMS/DataActionGetFeedConfig', inputs);
}
