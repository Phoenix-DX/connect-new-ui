import { getCacheableUserInfo } from '@/shared/Connect2_LegacyShared/lib/actions';

/* The user's own supper meeting, which the three blocks of AssembleEvents read (ScreenBlock_AssembleEvents,
   AssembleSummary_List and Assemble_FilterSheet). */

/** The Subdivision of the cached user information (Id as text, Name). */
export interface UserSubdivision {
  id: string;
  name: string;
}

/** GetCacheableUserInfo (Connect2_LegacyShared) → UserInformation.Subdivision: the only part that the blocks read. */
export async function fetchUserSubdivision(): Promise<UserSubdivision> {
  const userInformation = await getCacheableUserInfo();
  return { id: userInformation.Subdivision.Id, name: userInformation.Subdivision.Name };
}

/** SubdivisionId = NullIdentifier() (or no value): the list is the user's own supper meeting. */
export const isUsersOwnSubdivision = (subdivisionId: string): boolean => subdivisionId === '0' || subdivisionId === '';
