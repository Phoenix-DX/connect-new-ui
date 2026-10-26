import { MOCKS_BUILT } from '@/platform/config/config';
import { mockCachedUserIdentity } from './mockUser';
import { getClientVar, setClientVar } from './session';
import type { AppManager_CachedUserInfoRec } from './types';

const EMPTY_CACHED_USER_INFO: AppManager_CachedUserInfoRec = {
  isCommunityMember: false,
  ContactBaseId: '',
  MemberId: '',
  FirstName: '',
  LastName: '',
  Locality: '',
  Country: '',
  CountryCode: '',
  UserExternalId: '',
  Username: '',
  Email: '',
  Phone: '',
};

function parse(json: string): unknown {
  try {
    return JSON.parse(json);
  } catch {
    return null;
  }
}

/** AppManager_GetCachedUserInfo (AM:561-590, deserialize :575): JSON-deserializes AppManager_UserExtended into
    AppManager_CachedUserInfoRec; a missing field keeps its default. An empty or unreadable variable gives the empty
    record (the runtime's JSON deserializer is not in local code).
    Mock phase (CR-OrbitAdminLanding-1, CR-QRCodeGenerate-1): when the variable holds a record (the mock sign-in wrote
    it), the mock user's FirstName, LastName, MemberId, Locality and Country are merged in from memory into the fields the
    stored record leaves empty. They are never written back: the stored record keeps only CountryCode (rule 16).
    MOCKS_BUILT is a build-time constant: production builds drop the merge and the mock user (build/mockFree.ts). */
export function appManager_GetCachedUserInfo(): AppManager_CachedUserInfoRec {
  const data = parse(getClientVar('UBT_AppManager.AppManager_UserExtended'));
  const rec = { ...EMPTY_CACHED_USER_INFO };
  if (typeof data !== 'object' || data === null) return rec;
  for (const [name, value] of Object.entries(data as Record<string, unknown>)) {
    if (!(name in rec)) continue;
    const field = name as keyof AppManager_CachedUserInfoRec;
    if (typeof value === typeof rec[field]) Object.assign(rec, { [field]: value });
  }
  if (MOCKS_BUILT) {
    for (const [field, value] of Object.entries(mockCachedUserIdentity())) {
      const key = field as keyof typeof rec;
      if (rec[key] === '') Object.assign(rec, { [key]: value });
    }
  }
  return rec;
}

/** AppManager_SetCachedUserInfo (AM:4355-4375): AppManager_UserExtended = JSON of the record. */
export function appManager_SetCachedUserInfo(userInformation: Partial<AppManager_CachedUserInfoRec>): void {
  setClientVar(
    'UBT_AppManager.AppManager_UserExtended',
    JSON.stringify({ ...EMPTY_CACHED_USER_INFO, ...userInformation }),
  );
}
