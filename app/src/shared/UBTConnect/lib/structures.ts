import type { ActionsMenuOptions, LookupItem } from '../../UBTConnectLibrary/lib/structures';
import type { UI_StatisticsTexts } from '../../Connect_Geography_CS/lib/structures';
import type { SelectionOption_Item, StatisticsOptions } from '../../UBTConnectLibrary/lib/structures';
/* UBTConnect structures used by the shared actions (UBTConnect.model.js, copy in
   migration/screens/BookmarksByGroup/analysis/sources/raw/). Fields named as in OutSystems, all optional = OutSystems
   default. Long Integer → string. */

/** Updates_CarouselSwipeCallbackParameters (model :5057-5080). */
export interface Updates_CarouselSwipeCallbackParameters {
  UpdateItemId?: string;
}

/** SwipeAction (model :5346-5368): ActionId = Type_CarouselItemSwipeAction identifier, Parameters = JSON text. */
export interface SwipeAction {
  ActionId?: string;
  Parameters?: string;
}

/** Anonymous record {Updates_CarouselSwipeCallbackParameters, HouseholdId, IsRead} (model :12665-12690): the input list
    of Directory_Updates_GetCarouselPreloadedHouseholds. */
export interface CarouselSwipeCallbackParametersItem {
  Updates_CarouselSwipeCallbackParameters?: Updates_CarouselSwipeCallbackParameters;
  HouseholdId?: string;
  IsRead?: boolean;
}

/** Anonymous record {SwipeAction, Household} (model :8990-9013). */
export interface CarouselHouseholdItem {
  SwipeAction?: SwipeAction;
  Household?: string;
}

/** CarouselPreloadedHouseholds (model :16052-16075): the preload object HouseholdCarousel receives. */
export interface CarouselPreloadedHouseholds {
  CarouselHouseholdItem?: CarouselHouseholdItem[];
}

/* ---- Wave 3C (FilterSheet family). Records of UBTConnect.model.js (Notes TST copy); all fields optional = OutSystems
   defaults: texts "", numbers 0, lists empty, AddAllOptions True. Ids are Choice identifiers or option ids. ---- */
export interface Filter_Common_Control_List {
  Title?: string;
  SheetTitle?: string;
  In_Options?: SelectionOption_Item[];
  SelectedIds?: string[];
  SelectedNames?: string[];
  Order?: number;
  /** Default True. */
  AddAllOptions?: boolean;
}
export interface Filter_Common_Control_Choice {
  Title?: string;
  /** Choice identifier. */
  SelectedChoiceId?: string;
  YesLabel?: string;
  NoLabel?: string;
  NoneLabel?: string;
  Order?: number;
}
export interface Filter_Common_Options_List {
  Enable?: boolean;
  Order?: number;
  /** Default True. */
  AddAllOptions?: boolean;
}
export interface Filter_Common_Options_Choice {
  Enable?: boolean;
  YesLabel?: string;
  NoLabel?: string;
  NullLabel?: string;
  Order?: number;
}
/** In_Options of FilterSheet. */
export interface Filter_Common_Options {
  HasSorting?: Filter_Common_Options_Choice;
  HasCountries?: Filter_Common_Options_List;
  HasLocalities?: Filter_Common_Options_List;
  Extra_OptionLists?: Filter_Common_Control_List[];
  Extra_OptionChoices?: Filter_Common_Control_Choice[];
  Extra_OptionFlatLists?: Filter_Common_Control_List[];
}
/** In_StartFilter of FilterSheet. Sort_ByNewest is a Choice identifier ("" = none). */
export interface Filter_Common {
  CountryIds?: string[];
  LocalitiesIds?: string[];
  Sort_ByNewest?: string;
}

/* ---- Wave 4D (Directory_Locality statistics blocks) ---- */
/** UI_TypedStatistics (model :10129, UI_TypedStatisticsRec). */
export interface UI_TypedStatistics {
  UI_StatisticsTexts?: UI_StatisticsTexts;
  Name?: string;
  ImageURL?: string;
}
/** Anonymous record {Id: Text, StatisticsOptions} (model :11911, TextStatisticsOptionsRecord): StatisticsList input. */
export interface TextStatisticsOptionsRecord {
  Id?: string;
  StatisticsOptions?: StatisticsOptions;
}

/* ---- Wave 4C (household details and supper meeting blocks). Connect_Household_CS / Connect_Subdivision_CS records
   (app/src/api/schema.d.ts) and UBTConnect.model.js records; all fields optional = OutSystems defaults. Long Integer
   ids are text. ---- */
/** UI_HouseholdTimelineImages (Connect_Household_CS). Date: OutSystems DateTime as text. */
export interface UI_HouseholdTimelineImages {
  Date?: string;
  IsCurrent?: boolean;
  Label?: string;
  SignedURL?: string;
}

/** UI_SubdivisionHousehold (Connect_Household_CS). */
export interface UI_SubdivisionHousehold {
  ChildrenNames?: string;
  HouseholdId?: string;
  HouseholdName?: string;
}

/** UI_HouseholdMember (Connect_Household_CS; field names as in the contract, `ContryCode` and `IsItallic` included). */
export interface UI_HouseholdMember {
  Age?: number;
  ContryCode?: string;
  CountryName?: string;
  DateOfBirth?: string;
  DeceasedDate?: string;
  Description?: string;
  DescriptionHighlight?: string;
  DisplayAge?: boolean;
  Email?: string;
  FirstName?: string;
  FormattedLocality?: string;
  HasCTAs?: boolean;
  HasNavigation?: boolean;
  HomePhone?: string;
  HouseholdId?: string;
  Id?: string;
  Initials?: string;
  IsDeceased?: boolean;
  LastName?: string;
  LifeCycleText?: string;
  LifeCycleText_IsItallic?: boolean;
  LocalityId?: string;
  LocalityName?: string;
  MarriageHighlightText?: string;
  MarriagePartnerTakenText?: string;
  MarriageText?: string;
  MemberRole?: string;
  MobilePhone?: string;
  Title?: string;
  WorkPhone?: string;
}

/** UI_Subdivision_Card_Content (Connect_Subdivision_CS). */
export interface UI_Subdivision_Card_Content {
  Address?: string;
  BretherenCount?: number;
  BrothersCount?: number;
  HouseholdCount?: number;
  Name?: string;
  SistersCount?: number;
}

/** UI_Subdivision_Card (Connect_Subdivision_CS). */
export interface UI_Subdivision_Card {
  SubdivisionId?: string;
  Subdivision_Card_Content?: UI_Subdivision_Card_Content;
}

/** UI_Screen_SubdivisionDetails (Connect_Subdivision_CS). */
export interface UI_Screen_SubdivisionDetails {
  Subdivision_Actions?: ActionsMenuOptions;
  Subdivision_Card?: UI_Subdivision_Card;
}

/** LookupSections (UBTConnect.model.js `LookupSectionsRec`, LookupItem attributes). */
export interface LookupSections {
  Actions?: LookupItem;
  Households?: LookupItem;
  OneSchoolStatistitics?: LookupItem;
}

/* ---- Wave 4E (HouseholdDetails_Block) ---- */
/** UI_DisplayOptions (Connect_Household_CS). */
export interface UI_DisplayOptions {
  IsAncestry?: boolean;
  IsDeceased?: boolean;
  IsHidden?: boolean;
}

/** UI_Household_Card_Content (Connect_Household_CS). */
export interface UI_Household_Card_Content {
  Address?: string;
  CountryName?: string;
  DisplayOptions?: UI_DisplayOptions;
  FamilyNames?: string;
  LocalityId?: string;
  LocalityName?: string;
  Name?: string;
  SupperMeetingId?: string;
  SupperMeetingName?: string;
  Surname?: string;
  TimezoneName?: string;
  TimezoneOffset?: number;
}

/** UI_Household_Card (Connect_Household_CS). */
export interface UI_Household_Card {
  Id?: string;
  Household_Card_Content?: UI_Household_Card_Content;
}

/** UI_Screen_HouseholdDetails (Connect_Household_CS; Household_Actions is an ActionsMenuOptions of UBTConnectLibrary). */
export interface UI_Screen_HouseholdDetails {
  HouseholdCard?: UI_Household_Card;
  Household_Actions?: ActionsMenuOptions;
}

/** UI_AccountForm_PersonalInformation (Connect_Household_CS). */
export interface UI_AccountForm_PersonalInformation {
  Email?: string;
  ShowLifeCycleDates?: boolean;
  Username?: string;
}

/** UI_AccountForm_ContactInformation (Connect_Household_CS). */
export interface UI_AccountForm_ContactInformation {
  HomeNumber?: string;
  MobileNumber?: string;
  ShowMobileNumber?: boolean;
  ShowWorkNumber?: boolean;
  WorkNumber?: string;
}

/** UI_AccountForm (Connect_Household_CS): only the two parts HouseholdDetails_Block reads are typed; the address and
    identification parts pass through untouched. */
export interface UI_AccountForm {
  AccountForm_PersonalInformation?: UI_AccountForm_PersonalInformation;
  AccountForm_ContactInformation?: UI_AccountForm_ContactInformation;
  AccountForm_AddressInformation?: unknown;
  AccountForm_IdentificationInformation?: unknown;
}

/** HouseholdPreviewStructure (UBTConnect): the Preview input of HouseholdDetails_Block (Profile_HouseholdPreview). */
export interface HouseholdPreviewStructure {
  FormattedAddress?: string;
  HouseholdMemberId?: string;
  UI_AccountForm?: UI_AccountForm;
  UsePreview?: boolean;
  isHouseholder?: boolean;
}

/* ---- Wave 4E (EntitiesCarousel family). Records of UBTConnect.model.js (HouseholdCarousel raw copy). ---- */
/** HeaderListRec (model :2733-2760): the header of one carousel element, by element index. Label "", Index 0. */
export interface HeaderList {
  Label?: string;
  Index?: number;
}

/** EntitiesCarousel_ItemRec (model :7262-7290): EntityId "" (a Long Integer id as text; EntitiesCarousel converts it). */
export interface EntitiesCarousel_Item {
  EntityId?: string;
}

/* ---- W5-B (Menu_List). Records of UBTConnect.model.js (ContactUsMenu raw copy). ---- */
/** UI_ListMenuOptionRec: one menu row. Defaults "" / False, IconRight = UBT_Icons2.ChevronRight. */
export interface UI_ListMenuOption {
  Id?: string;
  IconId?: string;
  Label?: string;
  LabelDescription?: string;
  useSwitch?: boolean;
  SwitchValue?: boolean;
  IconRight?: string;
  IconRightText?: string;
  IconRightLoading?: boolean;
  HideIconRight?: boolean;
  IsLoading?: boolean;
}

/** UI_MenuSectionRec: SectionTitle "", HasSeparator True, MenuOptions []. */
export interface UI_MenuSection {
  SectionTitle?: string;
  HasSeparator?: boolean;
  MenuOptions?: UI_ListMenuOption[];
}
