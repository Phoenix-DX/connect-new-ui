/* Static entities of Connect2_MyBookmarks_MUI read by ScreenBlock_BookmarkGroup, TST values
   (migration/knowledge/static-entities-tst.json, `Connect2_MyBookmarks_MUI.*`). */

/** MyBookmarks_Group: the BookmarkGroup input. */
export const MyBookmarks_Group = { Contacts: 'Contacts', Entities: 'Entities', Locations: 'Locations' } as const;

/** MyBookmarks_ObjectType: BookmarkItem.ObjectType. */
export const MyBookmarks_ObjectType = {
  CampusCo: 'Campus&Co',
  CommunityBusiness: 'Community Business',
  Contact: 'Contact',
  Locality: 'Locality',
  News: 'News',
  OneSchoolGlobal: 'OneSchool Global',
  Subdivision: 'Subdivision',
} as const;

/** Connect_Entity (ShareableObject_Generic.ConnectEntityTypeId). */
export const Connect_Entity = {
  Household: 'Household',
  OneSchoolGlobal: 'OneSchool Global',
  SupperMeetings_aka_Subdivisions: 'Supper Meetings',
} as const;

/** Type_ShareObject.SupperMeeting (Supper Meetings rows share with this type). */
export const Type_ShareObject_SupperMeeting = 'Supper Meeting';

/** CommunityBusinessType2 (CommunityBusinessCarouselPreloadedItem.CommunityBusinessTypeId). */
export const CommunityBusinessType2 = { CampusCo: 'Campus&Co', OneSchoolGlobal: 'OneSchool Global' } as const;

/** Connect2_LegacyShared DirectoryCacheType.MyBookmarks (Get/PutCachedMyBookmarks). */
export const DIRECTORY_CACHE_TYPE_MY_BOOKMARKS = 'MyBookmarks';

/** Connect2_LegacyShared ApplicationEvents_Directory.SubscriptionRequired (AuditBookmarkSubscriptionEvent). */
export const APPLICATION_EVENT_SUBSCRIPTION_REQUIRED = 'c4ff6519-a3b7-4d54-9f88-f0c4b76c51a2';
