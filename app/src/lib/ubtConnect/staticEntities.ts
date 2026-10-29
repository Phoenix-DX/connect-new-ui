/* UBTConnectLibrary static entity identifiers used by UBTConnect blocks (UBTConnect's compiled code reaches them as
   UBTConnectModel.staticEntities.uBT_*) and not yet in UBTConnectLibrary/lib/staticEntities.ts. The compiled code holds
   only record keys; each value is the text the blocks write into a class name, with its evidence in the original CSS. */

/** "text-" + Id: the original CSS has `.text-neutral-10` (UBT_Color record Neutral10); captured `text-primary`
    (WelcomeToConnect, Login dom) and `text-inherit` (Version, Login dom). */
export const UBT_Color = {
  /* Captured `background-neutral-4` (SectionSeparator, ContactUsDetails dom). */
  Neutral4: 'neutral-4',
  Neutral10: 'neutral-10',
  Primary: 'primary',
  Inherit: 'inherit',
  /* Captured `text-neutral-0` (bell, HomeFeed dom), `text-neutral-6` (bottom bar), `background-red` (badges). */
  Neutral0: 'neutral-0',
  Neutral6: 'neutral-6',
  Red: 'red',
  /** Wave 4E (HouseholdDetails_Block private-profile line): captured `text-info` (HouseholdDetails/loading dom). */
  Info: 'info',
} as const;

/** "font-size-" + Id: the original CSS `.font-size-s`, captured `font-size-s` (CustomText v7); record Small = `s` as in
    UBT_Size. */
export const UBT_FontSize = {
  Small: 's',
  Base: 'base',
  /** captured `font-size-xs` (bottom bar labels). */ ExtraSmall: 'xs',
} as const;

/** Written as a class as is (like UBT_Display): the original CSS has `.justify-content-center` (record Center). */
export const UBT_JustifyContent = { Center: 'justify-content-center' } as const;

/** UBTConnectLibrary UBT_Size reached as UBTConnectModel.staticEntities.uBT_Size: "margin-bottom-" + Id, captured
    `margin-bottom-base` (WelcomeToConnect, Login dom). */
export const UBT_Size = {
  Base: 'base',
  /** Captured `padding-top-xs` (SectionSeparator, ContactUsDetails dom). */
  ExtraSmall: 'xs',
  /** Wave 4A (SubLayout_DirectoryDetailScreen_Section input defaults): TST value. */
  Small: 's',
} as const;

/** "font-" + Id: TST values (static-entities-tst.json `UBTConnect.uBT_FontWeight`). Captured `font-semi-bold`
    (WelcomeToConnect, Login dom; ContactByEmailMember, mvc.js:507) and `font-bold` (ContactByEmailOneSchoolGlobal contact
    name, mvc.js:310, dom/default.html:53). */
export const UBT_FontWeight = {
  Bold: 'bold',
  Light: 'light',
  Medium: 'medium',
  Regular: 'regular',
  SemiBold: 'semi-bold',
} as const;

/** Font icons: the Id is the icon class. Record OpenNew (UnsupportedVersion's button; Menu also uses it and its capture
    has `connect-icon-open_new`, Menu dom). */
export const UBT_Icons2 = {
  OpenNew: 'connect-icon-open_new',
  /** Captured `connect-icon-notifications` (App_NotificationIcon, HomeFeed / CountryList dom). */
  Notifications: 'connect-icon-notifications',
  /** Wave 4C: Get_LookupSection OneSchoolStatistitics.Icon; TST value (static-entities-tst.json `UBTConnect.uBT_Icons2`). */
  School: 'connect-icon-school',
  /** Wave 4E (HouseholdDetails_Block): TST values (static-entities-tst.json `UBTConnect.uBT_Icons2`); Lock and BookClosed
      captured (`connect-icon-lock`, `connect-icon-book_closed`, HouseholdDetails/loading dom). */
  Lock: 'connect-icon-lock',
  HomePIn: 'connect-icon-home_pin',
  Cottage: 'connect-icon-cottage',
  BookClosed: 'connect-icon-book_closed',
} as const;

/** UBT_IconsSize: written as a class as is: captured `icon-base` (Base_24: bottom bar and bell icons, HomeFeed dom). */
export const UBT_IconsSize = {
  Base_24: 'icon-base',
  /** Wave 4B: captured `icon-non-standard-16` (SupperMeeting_ImageCard_Content_IconText; SupperMeeting_Carousel dom). */
  NonStandard_16: 'icon-non-standard-16',
} as const;

/** UBTConnect Photobook_Speed (Id = milliseconds): FiveSeconds 5000, EightSeconds 8000, FifteenSeconds 15000. The
    compiled model.js holds only the record key (UBTConnect.model.js:27022-27026); the values are from the OutSystems
    MCP on DEV, migration/knowledge/static-entities.md "UBTConnect.Photobook_Speed" (not cross-checked on TST). */
export const Photobook_Speed = { FiveSeconds: 5000, EightSeconds: 8000, FifteenSeconds: 15000 } as const;

/** Type_ShareObject (UBTConnectModel.staticEntities.type_ShareObject, Connect2_Sharing_CS): sent, never rendered, as
    In_ShareObjectTypeId (LegacyShareObject from Feed_Embeded Handle_Share_Connect, p:UBTConnect.Home.Feed_Embeded.mvc.js:
    437-442; HomeFeed's ShareObjectTypeId for an update). TST values (migration/knowledge/static-entities.md "TST
    values", from moduleinfo.json): Feed = "Feed", Update = "Update" (Household = "Household" also captured in
    migration/screens/LegacyShareObject/analysis/states.json). */
export const Type_ShareObject = {
  Feed: 'Feed',
  Update: 'Update',
  Household: 'Household',
  Locality: 'Locality',
  SupperMeeting: 'Supper Meeting',
  OneSchoolGlobal: 'OneSchool Global',
  MyHousehold: 'My Household',
} as const;

/** Type_CarouselItemSwipeAction (UBTConnect.model.js:27034-27041, record UpdatesCarousel_SetIsRead): the identifier is
    not in the compiled code and is only compared by the carousel's swipe callback, so it is an opaque constant. */
export const Type_CarouselItemSwipeAction = { UpdatesCarousel_SetIsRead: 'UpdatesCarousel_SetIsRead' } as const;

/* ---- Wave 3C (FilterSheet family) ---- */
/** Choice: stored in SelectedIds / SelectedChoiceId, handed back to the screens (ApplyFilters, OnChange) and sent to
    the server (Notes_Filter.SortByNewest, Filter_ReadOnly, Sort_ByNewest). TST identifiers
    (static-entities-tst.json `UBTConnect.choice`; capture Notes-110 sends SortByNewest "Yes"; decision PD2, user,
    2026-10-28). Screens must use these. */
export const Choice = { None: 'None', Yes: 'Yes', No: 'No' } as const;
/** Connect_Subscription_Plan: compared with Directory_UserCurrent_Subscription.SubscriptionType. Global: the value the
    Menu capture shows for the test account (mock user, src/shell/mockUser.ts). Free: not captured, not settled
    (FilterSheet README). */
export const Connect_Subscription_Plan = {
  Free: 'Free',
  Global: 'Global',
  /** Wave 4C (HasAccessToRegion): TST values (static-entities-tst.json `UBTConnect.connect_Subscription_Plan`). */
  Regional: 'Regional',
  AdvancePlus: 'AdvancePlus',
} as const;

/** NoteCategory2 (UBTConnect): TST values (static-entities-tst.json `UBTConnect.noteCategory2`), the ones
    Get_NoteCategoryId_ByEntityTypeId returns. */
export const NoteCategory2 = {
  Household: 'Household',
  SupperMeeting: 'Supper Meeting',
  Interchange: 'Interchange',
  Member: 'Member',
  Locality: 'locality',
  OneSchoolGlobal: 'OneSchool Global',
  FeedItem: 'Feed Item',
} as const;

/** Connect_Entity (UBTConnect): TST values (static-entities-tst.json `UBTConnect.connect_Entity`). */
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

/* ---- Wave 4B (Directory_EmptyState, SupperMeeting_ImageCard_Content_*) ---- */
/** "ubt-columns-" + Id: captured `ubt-columns-reduce-first` (SupperMeeting_ImageCard_Content_Statistics). */
export const UBT_ColumnBehaviour = { ReduceFirst: 'reduce-first' } as const;

/* ---- Wave 4 foundation (CR-W4A-1, bookmarks) ---- */
/** BookmarkCategory (UBTConnect): TST values (static-entities-tst.json `UBTConnect.bookmarkCategory`, equal to
    UBTConnect_Bookmarks_MCS's): the category sent to AddBookmark2 and stored in the local C2 bookmark. */
export const BookmarkCategory = {
  AssembleEvent: 'Assemble Event',
  FeedItem: 'Feed Item',
  Household: 'Household',
  Interchange: 'Interchange',
  LDMEvent: 'LDM Event',
  Locality: 'Locality',
  LocalityContact: 'Locality Contact',
  Member: 'Member',
  OneSchoolGlobal: 'OneSchoolGlobal',
  OrbitEvent: 'Orbit Event',
  PersonalEvent: 'Personal Event',
  SupperMeeting: 'Supper Meeting',
  Update: 'Update',
} as const;

/** MyBookmarks_ObjectType (UBTConnect): TST values (static-entities-tst.json `UBTConnect.myBookmarks_ObjectType`): the
    ObjectType of a legacy local bookmark. */
export const MyBookmarks_ObjectType = {
  CampusCo: 'Campus&Co',
  CommunityBusiness: 'Community Business',
  Contact: 'Contact',
  Locality: 'Locality',
  News: 'News',
  OneSchoolGlobal: 'OneSchool Global',
  Subdivision: 'Subdivision',
} as const;

/** MyBookmarks_Group (UBTConnect): TST values (static-entities-tst.json `UBTConnect.myBookmarks_Group`). */
export const MyBookmarks_Group = { Contacts: 'Contacts', Entities: 'Entities', Locations: 'Locations' } as const;

/* ---- Wave 4C (household details and supper meeting blocks) ---- */
/** Connect_HouseholdMemberRole: only compared (HouseholdDetails_Members_Block: MemberRole <> Child), never rendered.
    TST values (static-entities-tst.json `UBTConnect.connect_HouseholdMemberRole`). */
export const Connect_HouseholdMemberRole = {
  Child: 'Child',
  Householder: 'Householder',
  MarriedChild: 'MarriedChild',
  Member: 'Member',
  NoMember: 'NoMember',
  Spouse: 'Spouse',
  UnmarriedChild: 'UnmarriedChild',
} as const;

/* ---- Wave 4E (HouseholdDetails_Block) ---- */
/** HouseholdDetailTags (UBTConnect): TST values (static-entities-tst.json `UBTConnect.householdDetailTags`). */
export const HouseholdDetailTags = { About: 'About', Photos: 'Photos' } as const;

/** UBT_FlexDirection record Row, written as a class as is: captured `flex-direction-row` (HouseholdDetails_Block tag row,
    HouseholdDetails dom); TST value (static-entities-tst.json `UBTConnect.uBT_FlexDirection`). */
export const UBT_FlexDirection = { Row: 'flex-direction-row' } as const;

/* ---- Wave 4E (EntitiesCarousel family) ---- */
/** BooleanTypes (UBTConnect's copy of the OutSystems UI entity, compared and sent to SetSplideConfigs): TST values
    (static-entities-tst.json `UBTConnect.booleanTypes`). */
export const BooleanTypes = { True: 'true', False: 'false', Unset: 'unset' } as const;

/** CarouselNavigation (UBTConnect's copy, EntitiesCarousel passes None): TST values (static-entities-tst.json
    `UBTConnect.carouselNavigation`), the same as OutSystems UI's (`osui/lib/staticEntities.ts`). */
export const CarouselNavigation = { Arrows: 'arrows', Both: 'both', Dots: 'dots', None: 'none' } as const;
