/* Static entity values HomeFeed's own blocks need that the shared lib files do not hold. The compiled code holds only
   record keys; each value below is the text the blocks write into a class, read from HomeFeed's captured DOM. */

/** UBT_Shadow: "shadow-" + Id. Captured `shadow-s` (FeedBlock_Services DIV_Services, dom/default.html:131). */
export const UBT_Shadow_Small = 's';

/** UBT_Color BlueDark: "text-" + Id. TST value (static-entities-tst.json `UBTConnect.uBT_Color.blueDark`); the original
    CSS has `.text-blue-dark` (OutSystemsUI_2_23.OutSystemsUI.css). FeedBlock_Updates subscription banner (HasAccess
    False, not captured; Home Q2 (a)). */
export const UBT_Color_BlueDark = 'blue-dark';

/** UBT_Icons2 font icons (Id = icon class): captured `connect-icon-settings` (services settings button, dom:156),
    `connect-icon-arrow_right_alt` (Section_FeedWrapper "View all", dom:511), `connect-icon-trove` (Trove service, dom
    services list). AddCircle (ForceAddService, not used by HomeFeed: False) is not captured. */
export const UBT_Icons2 = {
  Settings: 'connect-icon-settings',
  ArrowRightAlt: 'connect-icon-arrow_right_alt',
  Trove: 'connect-icon-trove',
} as const;

/** Connect_Services_CS.Connect_Services (Text identifier = record name). FeedBlock_Services.OnClick_Service compares
    SelectedService.Id with these records (UBTConnectModel.staticEntities.connect_Services). TST values
    (migration/knowledge/static-entities.md "TST values", moduleinfo.json; answers HomeFeed Q2). */
export const Connect_Services = {
  Orbit: 'Orbit',
  LDM: 'LDM',
  MyCalendar: 'MyCalendar',
  Assemble: 'Assemble',
  OrbitAdmin: 'OrbitAdmin',
  MyNotes: 'MyNotes',
  Trove: 'Trove',
  HR100: 'HR100',
  CommunityTradelink: 'CommunityTradelink',
  ElGusto: 'ElGusto',
  OneSchoolGlobal: 'OneSchoolGlobal',
} as const;
