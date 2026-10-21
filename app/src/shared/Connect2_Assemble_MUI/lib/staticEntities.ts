/* Static entities of Connect2_Assemble_MUI used by the shared Assemble blocks. Values from
   migration/knowledge/static-entities-tst.json (`Connect2_Assemble_MUI.*`). */

/** Position (Text identifier): the cover position of NC_Card_Item_Visual. */
export const Position = {
  Bottom: 'bottom',
  BottomLeft: 'bottom-left',
  BottomRight: 'bottom-right',
  Center: 'center',
  Left: 'left',
  Right: 'right',
  Top: 'top',
  TopLeft: 'top-left',
  TopRight: 'top-right',
} as const;

/** ResultListType (Integer identifier), the same records as Connect2_LegacyShared's. */
export const ResultListType = { Notification: 1, Household: 2, Subdivision: 3 } as const;

/** MyBookmarks_ObjectType (Text identifier): the ObjectType of a legacy local bookmark, read by
    GetLocalBookmarkedLocalityInformation (model.js staticEntities.myBookmarks_ObjectType). */
export const MyBookmarks_ObjectType = {
  CampusCo: 'Campus&Co',
  CommunityBusiness: 'Community Business',
  Contact: 'Contact',
  Locality: 'Locality',
  News: 'News',
  OneSchoolGlobal: 'OneSchool Global',
  Subdivision: 'Subdivision',
} as const;

/** MyBookmarks_Group (Text identifier; static-entities-tst.json `Connect2_Assemble_MUI.myBookmarks_Group`): the Group of
    a legacy bookmark, sent by AssembleEventDetail_AttendeeSubdivision to ToggleBookmarkItem (Contacts). */
export const MyBookmarks_Group = { Contacts: 'Contacts', Entities: 'Entities', Locations: 'Locations' } as const;
