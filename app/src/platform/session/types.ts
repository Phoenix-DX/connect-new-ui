/* Types of the session modules. cachedUserInfo.ts and mockUser.ts both import the cached user record from this file,
   so that neither imports the other's types (P3-3: no import cycle). */

/* The AppManager user record kept in the client variable UBT_AppManager.AppManager_UserExtended (JSON). Record from
   UBT_AppManager.model.js:1117-1165 (TST copy in migration/screens/BookmarksByGroup/analysis/sources/raw/); fields
   named as in OutSystems, Text default "" and Boolean default False. */
export interface AppManager_CachedUserInfoRec {
  isCommunityMember: boolean;
  ContactBaseId: string;
  MemberId: string;
  FirstName: string;
  LastName: string;
  Locality: string;
  Country: string;
  CountryCode: string;
  UserExternalId: string;
  Username: string;
  Email: string;
  Phone: string;
}
