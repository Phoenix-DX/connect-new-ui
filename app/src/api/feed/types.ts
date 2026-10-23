import type { ActionOutputs, PathOf } from '@/api/client/callAction';

/* Domain types of the feed CMS embed (UBTConnect_EmbedFeed). The wire types stay in src/api/schema.d.ts. */

/** The screen variables that Embedded_FeedCMS sends with DataActionGetFeedConfig: its two input parameters. A type
    literal, not an interface: the inputs of callAction need an index signature. */
export type FeedConfigInputs = {
  FeedItemId: string;
  B2CTenant: string;
};

/** The outputs of DataActionGetFeedConfig, with the OutSystems names, as the feed SDK reads them: Token, BaseURL,
    B2CClientId, B2CPolicy and TokenType. BaseURL is the one switch point of the feed page (mock: the app's own
    origin). */
export type FeedConfig = ActionOutputs<PathOf<'UBTConnect_EmbedFeed', 'Embedded_FeedCMS/DataActionGetFeedConfig'>>;
