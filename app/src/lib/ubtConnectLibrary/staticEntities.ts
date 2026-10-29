/* Static entity identifiers of UBTConnectLibrary used by the shared blocks.
   The compiled code holds only record keys, not identifier values. Each value below is the text that the blocks write
   into a class name, read from the captured DOM and from the original CSS (evidence per entity). */

/** "padding-" + Id, "margin-" + Id…: the original CSS has padding-{none,xs,s,base,m,l,xl,xxl}; captured padding-x-base. */
export const UBT_Size = {
  None: 'none',
  ExtraSmall: 'xs',
  Small: 's',
  Base: 'base',
  Medium: 'm',
  Large: 'l',
  ExtraLarge: 'xl',
  DoubleExtraLarge: 'xxl',
} as const;

/** Written as a class as is: captured `display-flex`, `display-inline-flex`. */
export const UBT_Display = { Flex: 'display-flex', InlineFlex: 'display-inline-flex' } as const;

/** "text-" / "background-" + Id: captured `text-neutral-9` (Icon default), `background-neutral-0`, `text-neutral-7`
    (LazyImage message, SupperMeeting_Carousel dom), `text-inherit` (PIN screens: Icon backspace, CustomText),
    `text-neutral-10` (PINRegister dom: "Need help?" container). */
export const UBT_Color = {
  /* Wave 4D: TST value (static-entities-tst.json uBT_Color.error); captured `text-error` (Statistics_Icons,
     Directory_LegendBottomSheet locality icon; CountryList dom). */
  Error: 'error',
  /* Wave 4B: TST values (static-entities-tst.json uBT_Color). CyanDarkest: NonMember_ListItem married caption, captured
     `text-cyan-darkest` (HouseholdCarousel dom); YellowLighter: ImageCard__Content__Tag, captured
     `background-yellow-lighter`; Purple: GetLookupConcepts Brethren, captured `text-purple` (SupperMeeting_Carousel
     dom); PinkNonStandardDarker, BlueNonStandarDarker, Orange: GetLookupConcepts (not rendered by the batch). */
  CyanDarkest: 'cyan-darkest',
  YellowLighter: 'yellow-lighter',
  Purple: 'purple',
  PinkNonStandardDarker: 'pink-non-standard-darker',
  BlueNonStandarDarker: 'blue-non-standard-darker',
  Orange: 'orange',
  /* TST value (migration/knowledge/static-entities-tst.json): Note_Item icon and "Show all notes" text. */
  CyanDark: 'cyan-dark',
  Inherit: 'inherit',
  Neutral0: 'neutral-0',
  Neutral7: 'neutral-7',
  Neutral9: 'neutral-9',
  Neutral10: 'neutral-10',
  /* Wave 2C: `text-transparent` (BottomSheet top-bar icons) and `background-neutral-2` (BottomSheet content;
     CountryDetails, Notes dom). */
  Transparent: 'transparent',
  Neutral2: 'neutral-2',
  /* Wave 2B: `background-primary` / `border-color-primary` (EmptyList, Notes dom), `background-neutral-3` and
     `text-neutral-7` (CircleButton_IconPrimary disabled, HouseholdCarousel dom), `border-color-neutral-5` (AvatarImage,
     BrowseCountries dom), `text-cyan-darker` / `background-cyan-lightest` (CircleButton, HouseholdCarousel dom). */
  Primary: 'primary',
  Neutral3: 'neutral-3',
  Neutral5: 'neutral-5',
  CyanDarker: 'cyan-darker',
  CyanLightest: 'cyan-lightest',
  /* Wave 2A: `background-red` (Badge in App_IconBadge, BookmarksByGroup / HomeFeed dom). */
  Red: 'red',
  /* Wave 2D: `background-neutral-4` (Layout_HomePage default ContentBackgroundColor; HomeFeed dom), `text-neutral-8`
     (Update_ListItem date and location icon; HomeFeed dom), `background-yellow-lightest`, `background-blue-non-standard`,
     `background-pink-non-standard` (Update_ListItem tags; Updates_SingleList dom), `background-primary-gradient-radial`
     (FeedBlock_CommunityPopulation; HomeFeed dom). YellowDark (avatar initials of a marriage, not captured): the original
     CSS has `.text-yellow-dark` (OutSystemsUI_2_23.OutSystemsUI.css). */
  Neutral4: 'neutral-4',
  Neutral8: 'neutral-8',
  YellowLightest: 'yellow-lightest',
  YellowDark: 'yellow-dark',
  BlueNonStandard: 'blue-non-standard',
  PinkNonStandard: 'pink-non-standard',
  PrimaryGradientRadial: 'primary-gradient-radial',
  /** Wave 3C: TagToggle disabled text; TST value (static-entities-tst.json uBT_Color). */
  Neutral6: 'neutral-6',
} as const;

/** UBT_Icons2: font icons, Id = icon class like UBT_Icons. Captured `connect-icon-backspace` (PINUnlock, PINRegister
    dom); `connect-icon-fingerprint` is the original CSS class of the same pattern (the fingerprint icon is hidden on
    the web, U13, so never captured). */
/* Wave 3C (FilterSheet family): `connect-icon-tune` (Search dom), `-chevron_right` and `-arrow_left_alt` (CountryDetails
   dom); ErrorFill (filters applied, not captured): the original CSS has `.connect-icon-error_fill` (UBTConnectBase.css). */
export const UBT_Icons2 = {
  /* Wave 4D: TST values (static-entities-tst.json uBT_Icons2); captured `connect-icon-boy` / `-girl`
     (Statistics_Icons, Directory_LegendBottomSheet; CountryDetails dom). */
  Boy: 'connect-icon-boy',
  Girl: 'connect-icon-girl',
  Backspace: 'connect-icon-backspace',
  Fingerprint: 'connect-icon-fingerprint',
  Tune: 'connect-icon-tune',
  ErrorFill: 'connect-icon-error_fill',
  ChevronRight: 'connect-icon-chevron_right',
  ArrowLeftAlt: 'connect-icon-arrow_left_alt',
} as const;

/** UBT_IconsSize: written as a class as is: captured `icon-display` (Display_36, PIN erase key). */
/* Wave 3C: Base_24 captured `icon-base` (FilterSheet_Icon, Search dom); NonStandard_14 (not captured): the original CSS has
   `.icon-non-standard-14` (UBTConnectLibrary.UBTConnectLibrary.css), TST value of uBT_IconSize.nonStandard_14. */
export const UBT_IconsSize = {
  Display_36: 'icon-display',
  Base_24: 'icon-base',
  NonStandard_14: 'icon-non-standard-14',
} as const;

/** Only compared, never written to the DOM (ConvertVerticalAlignToFlexAlignItems), so the identifier values are not
    known. Screens must use these constants. */
export const UBT_VerticalAlign = { Top: 'top', Center: 'center', Bottom: 'bottom' } as const;

/** "ubt-button--" + Id: captured ubt-button--m / --s and --primary / --secondary / --tertiary. */
export const UBT_ButtonSize = { Medium: 'm', Small: 's' } as const;
export const UBT_ButtonType = { Primary: 'primary', Secondary: 'secondary', Tertiary: 'tertiary' } as const;
/** Written as a class as is: captured `flex-grow`. */
export const UBT_FlexBehavior = { Grow: 'flex-grow' } as const;

/** SVG icons of IconSVG (UBT_Icons records SVG_*). Captured Ids equal the record names (SVG_HR100, SVG_ElGusto);
    the other eight follow the same pattern. Font icons use their class as Id (captured `connect-icon-home`). */
export const UBT_Icons = {
  /* Wave 4B: GetLookupConcepts icons; TST values (uBT_Icons). Captured `connect-icon-person-fill`,
     `connect-icon-family_group` (SupperMeeting_ImageCard_Content_Statistics; SupperMeeting_Carousel dom). */
  PersonFill: 'connect-icon-person-fill',
  Household: 'connect-icon-family_group',
  Girl: 'connect-icon-girl',
  Boy: 'connect-icon-boy',
  Explore: 'connect-icon-explore',
  HouseFill: 'connect-icon-house_fill',
  /* TST values (static-entities-tst.json): AddNote send button, Note_Item note icon. */
  Send: 'connect-icon-send',
  ListAltFill: 'connect-icon-list_alt_fill',
  SVG_OneSchoolGlobal: 'SVG_OneSchoolGlobal',
  SVG_PinLock: 'SVG_PinLock',
  SVG_PinHouse: 'SVG_PinHouse',
  SVG_PinMember: 'SVG_PinMember',
  SVG_PinOneSchool: 'SVG_PinOneSchool',
  SVG_HR100: 'SVG_HR100',
  SVG_ElGusto: 'SVG_ElGusto',
  SVG_CommunityTradelink: 'SVG_CommunityTradelink',
  SVG_PinLocality: 'SVG_PinLocality',
  SVG_PinCountry: 'SVG_PinCountry',
  /* Wave 2B font icons (Id = icon class): captured `connect-icon-more_vertical` (ContextMenu, HomeFeed dom),
     `connect-icon-search` (StaticInput, CountryList dom). Not captured (ContextMenu items never opened): the original CSS
     has `.connect-icon-gift`, `-letter`, `-edit`, `-share`, `-delete` (same record-name pattern). Gift =
     `connect-icon-gift` confirmed by the TST value (migration/knowledge/static-entities.md "TST values"). */
  MoreVertical: 'connect-icon-more_vertical',
  Search: 'connect-icon-search',
  Gift: 'connect-icon-gift',
  Letter: 'connect-icon-letter',
  Edit: 'connect-icon-edit',
  Share: 'connect-icon-share',
  Delete: 'connect-icon-delete',
  /* Wave 2C font icons: captured `connect-icon-close` (BottomSheet top bar, CountryDetails dom); not captured (back
     button, clear search): the original CSS has `.connect-icon-arrow_left_alt`, `.connect-icon-cancel_fill`
     (UBTConnectLibrary.UBTConnectBase.css). */
  Close: 'connect-icon-close',
  ArrowLeftAlt: 'connect-icon-arrow_left_alt',
  CancelFill: 'connect-icon-cancel_fill',
  /* Wave 2D: captured `connect-icon-location_on_fill` (Update_ListItem; HomeFeed dom). WidgetsFill (Embedded_FeedCMS
     skeleton fallback, nested in the capture): the original CSS has `.connect-icon-widgets_fill` (UBTConnectBase.css). */
  LocationOnFill: 'connect-icon-location_on_fill',
  WidgetsFill: 'connect-icon-widgets_fill',
  /** Wave 3C: SelectionOption_List; TST value (uBT_Icons). */
  CheckboxFill: 'connect-icon-checkbox_fill',
  /** Wave 3C: SelectionOption_List; TST value. */
  CheckboxOutlineBlank: 'connect-icon-checkbox_outline_blank',
  /** Wave 3C: captured (Notes, Search dom). */
  RadioChecked: 'connect-icon-radio_checked',
  /** Wave 3C: captured (Notes, Search dom). */
  RadioUnchecked: 'connect-icon-radio_unchecked',
  /** Wave 4A (ActionsMenu, GetLookupActions): TST values (static-entities-tst.json `UBTConnectLibrary.uBT_Icons`). */
  Bookmark: 'connect-icon-bookmark',
  Check: 'connect-icon-check',
  Tooltip: 'connect-icon-tooltip',
  Gifting: 'connect-icon-gifting',
  Call: 'connect-icon-call',
  ArrowOutward: 'connect-icon-arrow_outward',
  /** TST values (static-entities-tst.json `UBTConnectLibrary.uBT_Icons` calendar, calendarFill): the ComingSoon inline
      icon (captured `connect-icon-calendar`, OneSchoolGlobalDetails dom) and the ComingSoon_V2 circle button. */
  Calendar: 'connect-icon-calendar',
  CalendarFill: 'connect-icon-calendar_fill',
} as const;

/** "ubt-columns-" + Id: captured `ubt-columns-reduce-first` / `ubt-columns-reduce-last` (IconText, BrowseDirectory and
    HomeFeed dom). */
export const UBT_ColumnBehaviour = {
  ReduceFirst: 'reduce-first',
  ReduceLast: 'reduce-last',
  /* Wave 2A: captured `ubt-columns-expand-middle` / `ubt-columns-same-size` (Columns3 pack: ContactByEmailMember,
     ContactUsMenu, CountryDetails dom). */
  ExpandMiddle: 'expand-middle',
  SameSize: 'same-size',
} as const;
/** Written as a class as is: captured `flex-direction-row-reverse` (IconText with IsIconOnRight, HomeFeed dom). */
export const UBT_FlexDirection = {
  RowReverse: 'flex-direction-row-reverse',
  /** TST value (static-entities-tst.json): Note_Item text column, Note_Item_List empty state. */
  Column: 'flex-direction-column',
} as const;
/** "font-size-" + Id: captured `font-size-base` (LazyImage fallback default, ContactByEmailMember dom), `font-size-s`. */
export const UBT_FontSize = {
  /** Wave 4B: captured `font-size-h6` (Statistics_ListItem title; BrowseCountries dom). */
  Heading6: 'h6',
  Base: 'base',
  Small: 's',
  /** Captured `font-size-xxs` (TagContent, CircleButton_IconPrimary label; HomeFeed, HouseholdCarousel dom). */
  DoubleExtraSmall: 'xxs',
  /** Wave 2D: captured `font-size-xs` (Update_ListItem date; HomeFeed dom). Display (Embedded_FeedCMS skeleton
      fallback, nested in the capture): the original CSS has `.font-size-display`. */
  ExtraSmall: 'xs',
  Display: 'display',
  /** Wave 2D: captured `font-size-h2` (FeedBlock_CommunityPopulation count; HomeFeed dom). */
  Heading2: 'h2',
} as const;
/** "font-" + Id: captured `font-regular` (LazyImage message), `font-semi-bold` (LazyImage fallback). */
export const UBT_FontWeight = { Regular: 'regular', SemiBold: 'semi-bold' } as const;
/** "border-radius-" + Id (ImageBorderOptions.BorderRadius default): captured `border-radius-circle`. Record Large
    (Block_PINUnlock unsupported card, not captured): the original CSS has `.border-radius-large`
    (UBTConnectLibrary.UBTConnectBase.css:3394) next to `.border-radius-circle` (OutSystemsUI.css:16822). */
export const UBT_Shape = {
  Circle: 'circle',
  Large: 'large',
  /** Captured `border-radius-rounded` (TagContent, HomeFeed dom). */
  Rounded: 'rounded',
  /** ContextMenu popup (not captured): the original CSS has `.border-radius-soft`. */
  Soft: 'soft',
  /** Wave 2D: captured `border-radius-medium` (FeedBlock_CommunityPopulation; HomeFeed dom). */
  Medium: 'medium',
} as const;
/** GetClasses_LazyImageSize_Dev: "ubt-lazy-image-" / "ubt-lazy-image--width-" + Id. the original CSS has
    `ubt-lazy-image--width-square`, `ubt-lazy-image-auto`, `ubt-lazy-image--width-full-width`,
    `ubt-lazy-image-full-height` (records Square, Auto, FullWidth_100_Percent, FullHeight_100_Percent). */
export const UBT_ImageSize = {
  /** Wave 4B: GetGalleryBackgroundClass / GetClasses_BackgroundImageSize; TST values (uBT_ImageSize). Captured
      `ubt-lazy-image--width-max-width` (ImageCard_LazyLoading; HouseholdCarousel dom). */
  MaxWidth_100vw: 'max-width',
  HalfWidth_50vw: 'half-width',
  ThirdWidth_33vw: 'third-width',
  QuarterWidth_25vw: 'quarter-width',
  Square: 'square',
  Auto: 'auto',
  FullWidth_100_Percent: 'full-width',
  FullHeight_100_Percent: 'full-height',
  /** Wave 3C: captured `ubt-lazy-image-xs` (SelectionOption_List country flag; CountryDetails dom). */
  ExtraSmall_32: 'xs',
  /** Wave 4C: TST values (static-entities-tst.json `UBTConnectLibrary.uBT_ImageSize`); Base_52 for member avatars
      (HouseholdDetails_Members_Block), Large_65 for timeline photos (HouseholdDetails_TimelinePhoto). */
  Base_52: 'base',
  Large_65: 'l',
} as const;
/** "ubt-background-image--" + Id: captured `ubt-background-image--intrinsic-height` (SupperMeeting_Carousel dom);
    the original CSS also has `ubt-background-image--intrinsic-width`. */
export const UBT_BackgroundImageSize = {
  IntrinsicWidth_3_To_2: 'intrinsic-width',
  IntrinsicHeight_2_To_3: 'intrinsic-height',
} as const;

/* ---- Wave 2B (CircleButton, EmptyList, ContextMenu, StaticInput, TagContent, AvatarImage) ---- */

/** GetClasses_AvatarSize: "ubt-avatar-image-" + Id. Captured `ubt-avatar-image-s` (EmptyList / CircleButton_IconPrimary
    pass Small_40; Notes, HouseholdCarousel dom), `-base` (Notification_ListItem passes Base_52; Notifications dom),
    `-xs` and `-l` (Home FeedBlock_Services passes ExtraSmall_32 and Large_65; HomeFeed dom; Statistics_ListItem passes
    Large_65; BrowseCountries dom). */
export const UBT_AvatarSize = { ExtraSmall_32: 'xs', Small_40: 's', Base_52: 'base', Large_65: 'l' } as const;
/** UBT_IconSize (not UBT_IconsSize): written as a class as is. Captured `icon-base` (EmptyList passes Base_24; Notes
    dom), `icon-medium` (StaticInput passes Medium_20; CountryList dom). */
export const UBT_IconSize = {
  Base_24: 'icon-base',
  Medium_20: 'icon-medium',
  /** Wave 2D: captured `icon-small` (Update_ListItem location icon; HomeFeed dom). */ Small_12: 'icon-small',
  /** Wave 3C: TagToggle icon, SelectionOption_List IconSizeId default; TST value (uBT_IconSize). */
  NonStandard_16: 'icon-non-standard-16',
} as const;
/** Written as a class as is (GetClasses_Container): captured `align-items-center` / `justify-content-center`
    (EmptyList, Notes dom). */
export const UBT_AlignItems = {
  Center: 'align-items-center',
  /** Wave 4B: captured `align-items-flex-start` (ImageCard_LazyLoading image wrapper; HouseholdCarousel dom). */
  FlexStart: 'align-items-flex-start',
} as const;
export const UBT_JustifyContent = {
  Center: 'justify-content-center',
  /** TST value (static-entities-tst.json): Note_Item_List empty state. */
  FlexEnd: 'justify-content-flex-end',
  /** Wave 4A (ActionsMenu): TST value (static-entities-tst.json `UBTConnectLibrary.uBT_JustifyContent`). */
  SpaceBetween: 'justify-content-space-between',
} as const;
/** "shadow-" + Id. ExtraSmall (ContextMenu popup, not captured): the original CSS has `.shadow-xs`. */
export const UBT_Shadow = {
  ExtraSmall: 'xs',
  /** W5-B (ContactByEmailForm footer): TST value (static-entities-tst.json `UBTConnectLibrary.uBT_Shadow`); captured
      `shadow-xs-top` (ContactByEmailMember dom). */
  ExtraSmallTop: 'xs-top',
} as const;

/** Badge: "border-radius-" + Id; captured `border-radius-rounded` (Badge default Shape.Rounded, BookmarksByGroup dom).
    SoftRounded = 'soft' (SearchInput's BorderRadius default): TST value of `OutSystemsUI_2_23.shape`
    (migration/knowledge/static-entities-tst.json). */
export const Shape = { Rounded: 'rounded', SoftRounded: 'soft' } as const;
/** Position (PopupMenu / ContextMenu): "dx-popup-menu-position-" + Id, and the values the PopupMenu JS compares.
    Captured `dx-popup-menu-position-bottom-left` (ContextMenu default BottomLeft; HomeFeed dom) and `-left` (Profile
    passes Left; Profile dom). */
export const Position = { BottomLeft: 'bottom-left', Left: 'left' } as const;

/* ---- Wave 2D (Update_ListItem) ---- */
/** Connect_UpdateTypeId: Update_ListItem shows the Id as the tag text (TagContent Text = In_Type_UpdateFeedItem when
    In_BirthType is ""). Captured tags `Birth` (blue / pink background = the Birth branch of
    Get_BackgroundColor_Tag_UpdateItem), `Marriage` (yellow-lightest = Marriage branch) and `Taken` (neutral-3 = otherwise);
    Updates_SingleList and HomeFeed dom. */
export const Connect_UpdateTypeId = { Birth: 'Birth', Marriage: 'Marriage', Taken: 'Taken' } as const;
/** Gender (UBTConnectLibrary): only compared with the data's GenderId (Get_*_UpdateItem), never rendered; the values
    are not in the compiled code or any capture, so they are opaque constants. Mock data must use these constants. */
export const Gender = { MALE: 'Gender.MALE', FEMALE: 'Gender.FEMALE' } as const;

/* ---- Wave 4B (ImageCard_LazyLoading, Statistics_ListItem, lookups) ---- */
/** UBT_ImageCardType: ImageCard_LazyLoading writes "ubt-image-card--" + Id and "ubt-image-card__content--type-" + Id;
    TST values (static-entities-tst.json uBT_ImageCardType), captured `ubt-image-card--detail` (HouseholdCarousel dom)
    and `ubt-image-card--list` (Locality_Details dom). */
export const UBT_ImageCardType = {
  Detail: 'detail',
  Gallery: 'gallery',
  List: 'list',
  ListWithImages: 'listWithImages',
  Sublist: 'sublist',
} as const;
