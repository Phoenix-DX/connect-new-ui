import type { RequestHandler } from 'msw';
import { recordedHandler } from '@/mocks/fixtures';

/* DataActionFetchCount: the recorded TST answer (aggregate member count, no person data). */
export const handlers: RequestHandler[] = [
  recordedHandler('UBTConnect', 'FeedBlock_CommunityPopulation/DataActionFetchCount'),
];
