import type { RequestHandler } from 'msw';

/* FeedItemDetail calls no action of its own (FeedItemDetail.mvc.js:512-516). DataActionGetFeedConfig is answered by
   the shared Embedded_FeedCMS mocks (BaseURL = app origin, mock CMS item page /embed/feeds/item/<id>, D8 b) and the
   ShareSheet calls by the ShareSheet mocks. */
export const handlers: RequestHandler[] = [];
