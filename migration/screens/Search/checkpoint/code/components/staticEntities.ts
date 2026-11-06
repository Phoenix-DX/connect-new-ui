/** Connect_SearchCategories (UBTConnect_Utils / UBTConnect, TST: migration/knowledge/static-entities-tst.json; Events and
    Schools from the live moduleinfo.json of 2026-11-05): identifiers and labels People, All, Households, Places, Events,
    Schools. */
export const Connect_SearchCategories = {
  All: 'All',
  Households: 'Households',
  People: 'People',
  Places: 'Places',
  Events: 'Events',
  Schools: 'Schools',
} as const;

/** Type_SearchTarget (UBTConnect, TST): Global, Map. */
export const Type_SearchTarget = {
  Global: 'Global',
  Map: 'Map',
} as const;

/** TST values (migration/knowledge/static-entities-tst.json) the shared constants do not list yet:
    UBTConnect.uBT_Icons2 history / calendar / close, UBTConnect.space extraSmall, UBTConnect.uBT_FontWeight bold. */
export const UBT_Icons2_Search = {
  History: 'connect-icon-history',
  Calendar: 'connect-icon-calendar',
  Close: 'connect-icon-close',
} as const;
export const UBT_FontWeight_Bold = 'bold';
