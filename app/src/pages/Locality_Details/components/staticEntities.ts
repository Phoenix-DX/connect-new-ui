/** Static entity values this route uses that the shared constants do not have yet. TST values
    (migration/knowledge/static-entities-tst.json `UBTConnect.uBT_Icons2`), each captured in dom/default.html. */
export const UBT_Icons2_Locality = {
  /** expandMore: captured `connect-icon-expand_more` (dom/default.html:107). */
  ExpandMore: 'connect-icon-expand_more',
  /** explore: map entry (C2EnableMaps off in TST: not rendered). */
  Explore: 'connect-icon-explore',
  /** homePinFill: captured `connect-icon-home_pin_fill` (dom/default.html:398). */
  HomePinFill: 'connect-icon-home_pin_fill',
} as const;

/** UBT_AlignItems.center, written as a class as is: captured `display-flex align-items-center` (dom/default.html:99). */
export const UBT_AlignItems_Center = 'align-items-center';

/** Entities_LocalityMenuOptions (UBTConnect.model.js Entities_LocalityMenuOptionsRec defaults, BookmarksByGroup raw copy
    :14410-14430): the tag texts and identifiers of the locality menu (GetLocalityMenu returns the record defaults). */
export const LocalityMenu = {
  Households: 'Households',
  Subdivsion: 'Supper Meetings',
  Interchange: 'Interchange',
  OneSchoolGlobal: 'OneSchool Global',
  LocalityContacts: 'Locality Contacts',
  MyHousehold: 'My Household',
} as const;

/** MyBookmarks_ObjectType.Contact (static-entities-tst.json `UBTConnect.myBookmarks_ObjectType` contact = "Contact"). */
export const MyBookmarks_ObjectType_Contact = 'Contact';
