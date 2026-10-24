/* Structures of UBTConnectLibrary used as block inputs (UBTConnectLibrary.model.js, `<Name>Rec`).
   Field names exactly as in OutSystems. Every field is optional: an omitted field has the OutSystems default value
   ("" for Text and identifiers, false, 0), or the structure's own default where one is noted. */

export interface SpacingOptions {
  GeneralSizeId?: string;
  VerticalSizeId?: string;
  HorizontalSizeId?: string;
  TopSizeId?: string;
  BottomSizeId?: string;
  LeftSizeId?: string;
  RightSizeId?: string;
}

export interface RadiusOptions {
  GeneralSizeId?: string;
  TopLeftId?: string;
  TopRightId?: string;
  BottomRightId?: string;
  BottomLeftId?: string;
}

export interface BorderOptions {
  Color?: string;
  Size?: SpacingOptions;
  Radius?: RadiusOptions;
}

export interface TextOptions {
  Color?: string;
  FontSize?: string;
  FontWeight?: string;
  IsItalic?: boolean;
  IsUnderlined?: boolean;
}

export interface DisplayOptions {
  Display?: string;
  AlignItems?: string;
  JustifyContent?: string;
  FlexDirection?: string;
}

export interface SizeOptions {
  Min?: string;
  Main?: string;
  Max?: string;
}

export interface BackgroundImage {
  Image?: string;
  Size?: string;
  Position?: string;
  Repeat?: string;
  Origin?: string;
  Attachment?: string;
  BlendMode?: string;
}

export interface BackgroundOptions {
  BackgroundColor?: string;
  /** Decimal. */
  Opacity?: number;
  BackgroundImage?: BackgroundImage;
}

export interface ContainerOptions {
  Background?: BackgroundOptions;
  PaddingSize?: SpacingOptions;
  MarginSize?: SpacingOptions;
  BorderOptions?: BorderOptions;
  TextOptions?: TextOptions;
  DisplayOptions?: DisplayOptions;
  HeightOptions?: SizeOptions;
  WidthOptions?: SizeOptions;
  Visibility?: string;
  ShadowId?: string;
  IsSkeletonElement?: boolean;
  IsInlineBlock?: boolean;
}

/** Anonymous record { Left, Middle, Right: Integer } of ColumnOptions.ColumnSizes (`IntegerIntegerIntegerRecord`). */
export interface ColumnSizes {
  Left?: number;
  Middle?: number;
  Right?: number;
}

export interface ColumnOptions {
  ColumnBehaviour?: string;
  /** UBT_Size identifier. */
  SpacingSize?: string;
  /** UBT_VerticalAlign identifier. */
  VerticalAlign?: string;
  FlexDirection?: string;
  ColumnSizes?: ColumnSizes;
}

export interface InlineIcon {
  IconId?: string;
  IconSizeId?: string;
  /** UBT_Size identifier; default UBT_Size.ExtraSmall. */
  SpacingSize?: string;
  IconColorId?: string;
}

export interface ButtonOptions {
  /** Default UBT_ButtonSize.Medium. */
  UBT_ButtonSizeId?: string;
  /** Default UBT_ButtonType.Primary. */
  UBT_ButtonTypeId?: string;
  /** Default UBT_FlexBehavior.Grow. */
  UBT_FlexBehavior?: string;
}
/** In_ImageSize of LazyImage: UBT_ImageSize / UBT_Size identifiers. */
export interface LazyImageSize {
  Height?: string;
  Width?: string;
}
export interface AvatarImageFallbackoptions {
  Initials?: string;
  SVG?: string;
  Message?: string;
  IconId?: string;
  BackgroundColor?: string;
  FontColor?: string;
  /** Default UBT_FontSize.Base. */
  FontSize?: string;
  BorderColor?: string;
  BorderSize?: string;
  IconSizeId?: string;
}
export interface ImageBorderOptions {
  /** Default UBT_Shape.Circle. */
  BorderRadius?: string;
  BorderColorId?: string;
  BorderSizeId?: string;
}

/* ---- Wave 2B ---- */

/** AvatarImageRec (AvatarImage.In_AvatarImage, AvatarDouble inputs). */
export interface AvatarImage {
  URL?: string;
  FallbackOptions?: AvatarImageFallbackoptions;
}

/** AvatarIconOptionsRec (CircleButton_WithLabel.In_BadgeIcon). */
export interface AvatarIconOptions {
  IconId?: string;
  IconColorId?: string;
  IconSizeId?: string;
  BackgroundColor?: string;
}

/** Anonymous record { Label, HasEdit } of ContextMenuOptions.Edit (`TextBooleanRecord`). */
export interface ContextMenuEdit {
  Label?: string;
  HasEdit?: boolean;
}

/** Anonymous record { Label, HasDelete } of ContextMenuOptions.Delete (`TextBoolean1Record`). */
export interface ContextMenuDelete {
  Label?: string;
  HasDelete?: boolean;
}

/** ContextMenuOptionsRec (ContextMenu.In_ContextMenuOptions). */
export interface ContextMenuOptions {
  HasSendGift?: boolean;
  HasMarkAsRead?: boolean;
  HasMarkAsUnread?: boolean;
  HasShare?: boolean;
  Edit?: ContextMenuEdit;
  Delete?: ContextMenuDelete;
}

/* ---- Wave 2D (Update_ListItem) ---- */
/** TextGenderIdentifier (Update_ListItem.In_InitialsList item). */
export interface TextGenderIdentifier {
  Initials?: string;
  /** Gender identifier. */
  Gender?: string;
}
/** WeekdayLabelType (output of FormatConnectDate*). */
export interface WeekdayLabelType {
  LongLabel?: string;
  ShortLabel?: string;
  Initials?: string;
  Number?: string;
}
/** DateComponentFormat (GetConnectDateFormat_Components): defaults d, MMM, yyyy, ddd (UBTConnectLibrary.model.js). */
export interface DateComponentFormat {
  DayFormat?: string;
  MonthFormat?: string;
  YearFormat?: string;
  WeekDayFormat?: string;
}

/** SearchInput: In_Options of ConnectPatterns.Input (wave 2C). Field names from the compiled Input
    (`in_OptionsIn.<field>Attr`, UBTConnectLibrary.ConnectPatterns.Input.mvc.js :257-350, :560-700). The structure's
    defaults (UBTConnectLibrary.model.js:1477-1516, SearchInputRec) are applied by the Input block. */
export interface SearchInput {
  IsEnabled?: boolean;
  MaxLength?: number;
  EnableAutocompleteHTML?: boolean;
  IsMandatory?: boolean;
  SearchPrompt?: string;
  /** Shape identifier: "border-radius-" + Id on the input. */
  BorderRadius?: string;
  ValidationMessage?: string;
  /** -1: Event_OnChange at once; otherwise after this many ms without typing. */
  Debounce_DelayMS?: number;
  InitalString?: string;
  FocusOnReady?: boolean;
  IsSyncValueWithInput?: boolean;
  IsForceInvalid?: boolean;
}

/** Note_ItemRec (contract UBTConnectLibrary__Note_Item): one note of a Notes record. DateTimes travel as
    "yyyy-MM-ddTHH:mm:ss". */
export interface Note_Item {
  Id?: string;
  Note?: string;
  DateCreatedUtc?: string;
  DateEditedUtc?: string;
}

/** NotesRec (contract UBTConnectLibrary__Notes): the notes of an item and their total on the server. */
export interface Notes {
  Total?: number;
  Note_Item_List?: Note_Item[];
}

/* ---- Wave 3C (TagToggle, HorizontalTagList, SelectionOption_List) ---- */
/** TagRec (TagToggle.Tag, HorizontalTagList.In_TagToggleList). Defaults (UBTConnectLibrary.model.js:1249-1275): Text "",
    Identifier "", IconId "" (UBT_Icons identifier), IsSelected True, Enabled True. */
export interface Tag {
  Text?: string;
  Identifier?: string;
  IconId?: string;
  IsSelected?: boolean;
  Enabled?: boolean;
}
/** SelectionOption_ItemRec (SelectionOption_List.SelectionOption_ItemList). Defaults (UBTConnectLibrary.model.js:1410-1440):
    texts "", isSelected False, isEnabled True. IconId is a UBT_Icons identifier. */
export interface SelectionOption_Item {
  Id?: string;
  DisplayText?: string;
  IconId?: string;
  CountryCode?: string;
  isSelected?: boolean;
  isEnabled?: boolean;
}

/** ActionsMenuOptions (UBTConnectLibrary.model ActionsMenuOptionsRec: every field default False). */
export interface ActionsMenuOptions {
  HasBookmark?: boolean;
  HasUnbookmark?: boolean;
  HasNotes?: boolean;
  HasGift?: boolean;
  HasShare?: boolean;
  HasCall?: boolean;
  HasEmail?: boolean;
  HasViewDetails?: boolean;
}

/** ActionsMenuEnableOptions (UBTConnectLibrary.model ActionsMenuEnableOptionsRec). Defaults: EnableNotes and
    EnableGift False, the others True (`ACTIONS_MENU_ENABLE_OPTIONS_DEFAULT` in actions.ts). */
export interface ActionsMenuEnableOptions {
  EnableBookmark?: boolean;
  EnableNotes?: boolean;
  EnableGift?: boolean;
  EnableShare?: boolean;
  EnableCall?: boolean;
  EnableEmail?: boolean;
  EnableViewDetails?: boolean;
}

/** One entry of LookupActionsRec (GetLookupActions output). */
export interface LookupAction {
  Singular: string;
  Icon: string;
}

/** LookupActionsRec (UBTConnectLibrary.model), filled by GetLookupActions. */
export interface LookupActions {
  Bookmark: LookupAction;
  Unbookmark: LookupAction;
  Notes: LookupAction;
  Gift: LookupAction;
  Share: LookupAction;
  Call: LookupAction;
  Email: LookupAction;
  ViewDetails: LookupAction;
}

/* ---- Wave 4B ---- */
/** Record of StatisticsOptions.Statistics (UBTConnectLibrary.model.js TextTextUBT_ColorIdentifierUBT_IconsIdentifierRecord). */
export interface TextTextUBT_ColorIdentifierUBT_IconsIdentifier {
  Name?: string;
  Value?: string;
  /** UBT_Color identifier. */
  IconColorId?: string;
  /** UBT_Icons identifier; "" (null identifier) = no icon. */
  IconId?: string;
}

/** Statistics_ListItem In_StatisticsOptions (UBTConnectLibrary.model.js StatisticsOptionsRec). */
export interface StatisticsOptions {
  Title?: string;
  Subtitle?: string;
  AvatarURL?: string;
  Statistics?: TextTextUBT_ColorIdentifierUBT_IconsIdentifier[];
}

/** GetLookupConcepts item (UBTConnectLibrary.model.js LookupItemRec). */
export interface LookupItem {
  Singular?: string;
  Plural?: string;
  Icon?: string;
  Icon_Color?: string;
}

/** GetLookupConcepts output (UBTConnectLibrary.model.js LookupConceptsRec): the items the action sets. */
export interface LookupConcepts {
  Brethren: Required<LookupItem>;
  Household: Required<LookupItem>;
  Sister: Required<LookupItem>;
  Brother: Required<LookupItem>;
  Locality: Required<LookupItem>;
  Country: Required<LookupItem>;
  Distance: Required<LookupItem>;
  SupperMeeting: Required<LookupItem>;
}
