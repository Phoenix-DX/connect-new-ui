import { callAction } from '@/api/client/callAction';

/** DataActionFetchCount (FeedBlock_CommunityPopulation.mvc.js:335-362, fetched on initialize; no screen variables). */
export async function fetchCount(): Promise<string> {
  const out = await callAction('UBTConnect', 'FeedBlock_CommunityPopulation/DataActionFetchCount', {});
  return out.UI_MembersStatistics.TotalNumberOfMembers;
}
