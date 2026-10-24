/* UBTConnect_Utils static entity identifiers used by the shared blocks (UBTConnect reaches the same entities as
   UBTConnectModel.staticEntities.*). The compiled code holds only record keys; each value is the text the blocks write
   into a class name or a label, with its evidence (captured DOM, else the original CSS in public/UBTConnect/css/). */

/** Connect_BottomBar_Items. BottomBar_GetList sets Label = Id, so the Id is the captured label: Home, Directory,
    Updates, Bookmarks, Menu (HomeFeed, BookmarksByGroup dom). Explore, Bookmarked and Settings (useMapsItems menu) are
    never rendered by a captured screen: not settled (BottomBarMenu README). */
export const Connect_BottomBar_Items = {
  Home: 'Home',
  Directory: 'Directory',
  Updates: 'Updates',
  Bookmarks: 'Bookmarks',
  Menu: 'Menu',
} as const;

/** UBT_Icons: font icons, Id = icon class. Bottom bar: captured `connect-icon-home` / `_home_fill`, `union`,
    `list_alt` / `list_alt_fill`, `contacts` / `contacts_fill`, `widgets` / `widgets_fill` (HomeFeed, BookmarksByGroup,
    Menu, Updates_SingleList dom). UBT_LazyImage fallback: captured `connect-icon-person-fill`, `home_pin`, `house_fill`,
    `school_fill` (ContactByEmailMember, CountryList, SupperMeeting_*, OneSchoolGlobalDetails dom); PartnerExchange and
    ImageGallery from the original CSS (`.connect-icon-partner_exchange`, `.connect-icon-image_gallery`). */
export const UBT_Icons = {
  Home: 'connect-icon-home',
  HomeFill: 'connect-icon-home_fill',
  Union: 'connect-icon-union',
  ListAlt: 'connect-icon-list_alt',
  ListAltFill: 'connect-icon-list_alt_fill',
  Contacts: 'connect-icon-contacts',
  ContactsFill: 'connect-icon-contacts_fill',
  Widgets: 'connect-icon-widgets',
  WidgetsFill: 'connect-icon-widgets_fill',
  PersonFill: 'connect-icon-person-fill',
  HomePIn: 'connect-icon-home_pin',
  HouseFill: 'connect-icon-house_fill',
  SchoolFill: 'connect-icon-school_fill',
  PartnerExchange: 'connect-icon-partner_exchange',
  ImageGallery: 'connect-icon-image_gallery',
  /* Wave 2C (ContactPopup, SharePopup; their open state is not captured): the original CSS has `.connect-icon-call_fill`
     (UBTConnectLibrary.UBTConnectBase.css) and `.connect-icon-share` (same record-name pattern). */
  CallFill: 'connect-icon-call_fill',
  Share: 'connect-icon-share',
  HomePinFill: 'connect-icon-home_pin_fill',
  Search: 'connect-icon-search',
  Lock: 'connect-icon-lock',
  CheckboxFill: 'connect-icon-checkbox_fill',
  CheckboxOutlineBlank: 'connect-icon-checkbox_outline_blank',
  RemoveFill: 'connect-icon-remove-fill',
  /* TST values (migration/knowledge/static-entities.md "TST values", static-entities-tst.json
     `UBTConnectLibrary.uBT_Icons`, from moduleinfo.json): FeedItem (GetEntityType_Icon) and InfoFill (SearchResult_Item
     subscription warning). */
  FeedItem: 'connect-icon-feed',
  InfoFill: 'connect-icon-info_fill',
  /** Wave 4A (ContactPopup_ByPhone / _ByMessage, AddressPopup): TST values (static-entities-tst.json `UBTConnect_Utils.uBT_Icons`). */
  MailFill: 'connect-icon-mail_fill',
  Whatsapp: 'connect-icon-whatsapp',
  Signal: 'connect-icon-signal',
  Enterprise: 'connect-icon-enterprise',
  OpenNew: 'connect-icon-open_new',
  ContentCopy: 'connect-icon-content_copy',
  LocationOnFill: 'connect-icon-location_on_fill',
} as const;

/** Connect_Entity (UBTConnect_Utils): TST values (migration/knowledge/static-entities-tst.json
    `UBTConnect_Utils.connect_Entity`; CR-W4B-1), equal to UBTConnect's, so the values one module passes compare equal
    in the other. Screens must use these. */
export const Connect_Entity = {
  Country: 'Country',
  FeedItem: 'Feed Item',
  Household: 'Household',
  Interchange: 'Interchange',
  Locality: 'Locality',
  Member: 'Member',
  OneSchoolGlobal: 'OneSchool Global',
  SupperMeetings_aka_Subdivisions: 'Supper Meetings',
} as const;

/** UBT_ImageSize: "ubt-lazy-image-" / "ubt-lazy-image--width-" + Id (LazyImage). Captured `s`, `base`, `l`, `xl`, `xxl`,
    `max-height`, `max-width`, `square`, `auto` (UBT_LazyImage in CountryDetails, CountryList, HouseholdDetails…); the
    original CSS has `.ubt-lazy-image-xs` and `.ubt-lazy-image-m` (ExtraSmall_32, Medium_60) and `full-width` /
    `full-height` (UBTConnectLibrary UBT_ImageSize). */
export const UBT_ImageSize = {
  ExtraSmall_32: 'xs',
  Small_40: 's',
  Base_52: 'base',
  Medium_60: 'm',
  Large_65: 'l',
  ExtraLarge_100: 'xl',
  DoubleExtraLarge_176: 'xxl',
  FullHeight_100_Percent: 'full-height',
  MaxHeight_100vh: 'max-height',
  FullWidth_100_Percent: 'full-width',
  MaxWidth_100vw: 'max-width',
  Square: 'square',
  Auto: 'auto',
  ListThumbnail_104: 'list-thumbnail',
} as const;

/** "font-size-" + Id: captured `font-size-s`, `base`, `h2`, `h4`, `display` (UBT_LazyImage fallbacks), `xs` (bottom
    bar); the original CSS has `.font-size-h6` (Heading6). */
export const UBT_FontSize = {
  ExtraSmall: 'xs',
  Small: 's',
  Base: 'base',
  Heading6: 'h6',
  Heading4: 'h4',
  Heading2: 'h2',
  Display: 'display',
  DoubleExtraSmall: 'xxs',
} as const;

/** UBT_IconSize: written as a class as is. Captured `icon-base`, `icon-non-standard-32` / `-64` / `-108` (UBT_LazyImage
    fallbacks), `icon-display` (UBTConnectLibrary UBT_IconsSize); Medium_20 from the original CSS (`.icon-medium`). */
export const UBT_IconSize = {
  Medium_20: 'icon-medium',
  Base_24: 'icon-base',
  NonStandard_32: 'icon-non-standard-32',
  Display_36: 'icon-display',
  NonStandard_64: 'icon-non-standard-64',
  NonStandard_108: 'icon-non-standard-108',
  NonStandard_16: 'icon-non-standard-16',
  Small_12: 'icon-small',
} as const;

/** "background-" / "text-" / "border-color-" + Id: captured `background-cyan-lightest`, `text-cyan-darker`,
    `border-color-neutral-3` (UBT_LazyImage fallbacks, ContactByEmailMember / CountryList dom). */
export const UBT_Color = {
  CyanLightest: 'cyan-lightest',
  CyanDarker: 'cyan-darker',
  Neutral3: 'neutral-3',
  Neutral2: 'neutral-2',
  Neutral5: 'neutral-5',
  Neutral7: 'neutral-7',
  Neutral10: 'neutral-10',
  Primary: 'primary',
  BlueDark: 'blue-dark',
} as const;

/** "border-" + Id: captured `border-none` (UBT_LazyImage default), `border-s` (member); "padding-" + Base. */
export const UBT_Size = { None: 'none', Small: 's', Base: 'base', ExtraSmall: 'xs' } as const;

/** "border-radius-" + Id: captured `border-radius-none` (default), `border-radius-circle` (member). */
export const UBT_Shape = {
  None: 'none',
  Circle: 'circle',
  Rounded: 'rounded',
  Soft: 'soft',
  Medium: 'medium',
  Large: 'large',
} as const;

/** ImageSize: only sent as the Size of Cache_SignedImageURL_Get, never rendered: opaque constants. */
export const ImageSize = { Small: 'Small', Medium: 'Medium', Large: 'Large' } as const;

/* ---- Wave 2C (SearchResult_Item, ShareableObject_Generic, ShareSheet; none of their states is captured) ----
   Values added above to UBT_Color, UBT_Size, UBT_Shape, UBT_FontSize, UBT_ImageSize, UBT_IconSize and UBT_Icons:
   `background-neutral-2` (captured, OSUI BottomSheet pack); `connect-icon-home_pin_fill` (46 captures, e.g. Search dom);
   `connect-icon-search` (ConnectPatterns.Input captures); the others from the original CSS: `.border-color-neutral-5`,
   `.text-neutral-7`, `.text-neutral-10`, `.text-primary`, `.text-blue-dark`, `.padding-xs`, `.border-radius-rounded`,
   `.border-radius-soft`, `.border-radius-medium`, `.border-radius-large`, `.font-size-xxs`, `.ubt-lazy-image-auto`,
   `.ubt-lazy-image--width-list-thumbnail` (ListThumbnail_104), `.icon-non-standard-16`, `.icon-small` (Small_12, the
   only small icon class). UBT_Icons.InfoFill = `connect-icon-info_fill`: settled by the TST value (static-entities.md
   "TST values"). */
/** UBT_FontWeight: "font-" + Id (GetClasses_Text); the original CSS has `.font-regular`, `.font-semi-bold`, `.font-bold`. */
export const UBT_FontWeight = { Regular: 'regular', SemiBold: 'semi-bold', Bold: 'bold' } as const;
/** UBT_FlexDirection.Column: written as the class; captured `flex-direction-column` (ShareSheet first-step container style). */
export const UBT_FlexDirection = { Column: 'flex-direction-column' } as const;
/** UBT_AvatarSize: "ubt-avatar-image-" + Id (CircleButton_WithLabel SizeId). Small_40 `s` (captured, library
    UBT_AvatarSize); SmallBase_48 `sb` from the original CSS (`.ubt-avatar-image-sb`, ShareSheet lists, no capture). */
export const UBT_AvatarSize = { Small_40: 's', SmallBase_48: 'sb' } as const;
/* ShareSheet icons added to UBT_Icons (original CSS, no capture): `.connect-icon-lock`, `.connect-icon-checkbox_fill`,
   `.connect-icon-checkbox_outline_blank`, `.connect-icon-remove-fill` (the only remove-fill class). */

/** CommonPlugin Mobile_OperatingSystem (GetOperatingSystem's output, compared by OpenInApp_OpenApp; never rendered).
    TST values: migration/knowledge/static-entities-tst.json `CommonPlugin.mobile_OperatingSystem`. */
export const Mobile_OperatingSystem = {
  Android: 'Android',
  IOS: 'iOS',
  Other: 'Other',
  Windows: 'Windows',
} as const;

/** NoteActionType (Note_SendFeedbackMessages ActionType). Not in the TST values and never rendered, only compared:
    opaque constants. */
export const NoteActionType = {
  Add: 'NoteActionType.Add',
  Edit: 'NoteActionType.Edit',
  Delete: 'NoteActionType.Delete',
} as const;

/** Type_MessageChannel (UBTConnect_Utils): TST values (static-entities-tst.json `UBTConnect_Utils.type_MessageChannel`). */
export const Type_MessageChannel = { Call: 'Call', Email: 'Email', Signal: 'Signal', WhatsApp: 'WhatsApp' } as const;
