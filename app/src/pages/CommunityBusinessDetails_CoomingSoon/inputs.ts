/** The route input of CommunityBusinessDetails_CoomingSoon, from the query string by its original name. The screen
    has no server data and calls no action of its own: the calls of its capture (Sync_Info_GetMain,
    CacheableHouseholds, CacheableMapEntities) are the app start of platform/bootstrap.
    @origin UBTConnect.zDEV_Directory_CommunityBusinessBlocks.CommunityBusinessDetails_CoomingSoon */
export interface CommunityBusinessDetails_CoomingSoonInputs {
  /** In_CommunityBusinessId (Long Integer, kept as a string): read but never used by the view or the controller. */
  In_CommunityBusinessId: string;
}

/** Long Integer input: default 0, kept as a string. */
const osLongInput = (value: string | null): string => (value === null || value === '' ? '0' : value);

/** In_CommunityBusinessId from the query string, with the OutSystems default "0" when it is absent or empty. */
export function readCommunityBusinessDetailsInputs(
  params: URLSearchParams,
): CommunityBusinessDetails_CoomingSoonInputs {
  return { In_CommunityBusinessId: osLongInput(params.get('In_CommunityBusinessId')) };
}
