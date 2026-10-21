import type { CommunityBusinessDetails_CoomingSoonInputs } from './types';

/* CommunityBusinessDetails_CoomingSoon calls no action of its own (controller `dataFetchActionNames = []`, no server
   action, CommunityBusinessDetails_CoomingSoon.mvc.js:248). The calls of the capture (Sync_Info_GetMain,
   CacheableHouseholds, CacheableMapEntities) are the shell's app start (src/shell/startup.ts). */

const osLongInput = (v: string | null): string => (v === null || v === '' ? '0' : v);

/** In_CommunityBusinessId (Long Integer) from the query string, OutSystems default 0 when absent (mvc.js:61-63). */
export function readCommunityBusinessDetailsInputs(
  params: URLSearchParams,
): CommunityBusinessDetails_CoomingSoonInputs {
  return { In_CommunityBusinessId: osLongInput(params.get('In_CommunityBusinessId')) };
}
