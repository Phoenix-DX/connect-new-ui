/** The route input of FeedItemDetail, from the query string by its original name. The screen calls no action of its
    own: Feed_Embeded with its Embedded_FeedCMS (GetFeedConfig, `@/api/feed`) and the ShareSheet make their own calls.
    @origin UBTConnect.Home.FeedItemDetail */
export interface FeedItemDetailInputs {
  /** FeedItemId (Text): the Feed CMS item id, passed to Feed_Embeded. */
  FeedItemId: string;
}

/** FeedItemId (Text) from the query string, "" when it is absent. */
export function readFeedItemDetailInputs(params: URLSearchParams): FeedItemDetailInputs {
  return { FeedItemId: params.get('FeedItemId') ?? '' };
}
