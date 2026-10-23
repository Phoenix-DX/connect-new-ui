import type { FeedItemDetailInputs } from './types';

/** FeedItemDetail calls no action of its own (controller `dataFetchActionNames = []`, no server action,
    FeedItemDetail.mvc.js:512-516); the shared Feed_Embeded / Embedded_FeedCMS and ShareSheet make their own calls. */

/** In_UpdateDate of the ShareSheet: NullDate() in the view (FeedItemDetail.mvc.js:397-402). */
export const NULL_DATE = '1900-01-01';

/** FeedItemId (Text) from the query string, "" when absent (FeedItemDetail.mvc.js:84-94, 152-160). */
export function readFeedItemDetailInputs(params: URLSearchParams): FeedItemDetailInputs {
  return { FeedItemId: params.get('FeedItemId') ?? '' };
}
