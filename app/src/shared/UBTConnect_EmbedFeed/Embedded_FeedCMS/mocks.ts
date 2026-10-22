import type { RequestHandler } from 'msw';
import { contractHandler } from '@/mocks/contract';

/* DataActionGetFeedConfig is fictional in the contract (never recorded). Decision D8 (b): the feed iframe shows a
   same-size local mock page; the real CMS URL replaces this BaseURL later (single switch point). No token or B2C
   values: the mock page needs none. The ported SDK needs an origin as BaseURL (CR-W2F-1): the mock CMS is the app's own
   origin, whose dev/preview server answers /embed/feeds and /embed/feeds/item/* with public/mock-embeds/feed-cms.html
   (vite.config.ts `mockFeedCms`). */
export const FEED_CMS_MOCK_URL = window.location.origin;

export const handlers: RequestHandler[] = [
  contractHandler('UBTConnect_EmbedFeed', 'Embedded_FeedCMS/DataActionGetFeedConfig', () => ({
    BaseURL: FEED_CMS_MOCK_URL,
    Token: '',
    TokenType: '',
    B2CClientId: '',
    B2CPolicy: '',
  })),
];
