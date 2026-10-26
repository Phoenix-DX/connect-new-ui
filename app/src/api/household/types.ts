/* Domain types of a household: the fields that the household UI reads (HouseholdDetails_Block, its client actions,
   HouseholdDetails_Members_Block and HouseholdRelations_Block). The names and the nesting are those of the OutSystems records
   (Connect_Household_CS), because the block reads them as they are. Every field is optional, as an OutSystems record
   with its default values. The wire types stay in src/api/schema.d.ts. Long Integer ids are text. */

/** The inputs that both household data actions send: the block inputs and UserAge_Visibility (the block variables
    that the server needs). A type alias, not an interface: the contract inputs have an index signature. */
export type HouseholdCallInputs = {
  HouseholdId: string;
  isEnabled: boolean;
  In_ShowKebabMenu: boolean;
  In_CheckVisibility: boolean;
  In_IsSkeletonOnly: boolean;
  In_HideActions: boolean;
  UserAge_Visibility: boolean;
};

/** The display options of a household card (UI_DisplayOptions). */
export interface HouseholdDisplayOptions {
  IsAncestry?: boolean;
  IsDeceased?: boolean;
  IsHidden?: boolean;
}

/** The content of a household card (UI_Household_Card_Content). */
export interface HouseholdCardContent {
  Name?: string;
  FamilyNames?: string;
  Address?: string;
  LocalityId?: string;
  LocalityName?: string;
  CountryName?: string;
  SupperMeetingId?: string;
  SupperMeetingName?: string;
  DisplayOptions?: HouseholdDisplayOptions;
}

/** A household card (UI_Household_Card). */
export interface HouseholdCard {
  Id?: string;
  Household_Card_Content?: HouseholdCardContent;
}

/** The household record (UI_Screen_HouseholdDetails). The UI does not read Household_Actions. */
export interface HouseholdDetails {
  HouseholdCard?: HouseholdCard;
}

/** A member of the household, or a married child in another household (UI_HouseholdMember). The preview of an
    account form sets DisplayAge, Email and the phones. */
export interface HouseholdMember {
  Id?: string;
  HouseholdId?: string;
  Title?: string;
  /** Connect_HouseholdMemberRole identifier. */
  MemberRole?: string;
  LifeCycleText?: string;
  LifeCycleText_IsItallic?: boolean;
  IsDeceased?: boolean;
  HasCTAs?: boolean;
  HasNavigation?: boolean;
  LocalityName?: string;
  CountryName?: string;
  /** "Locality, Country": the relations of a member show it (HouseholdRelations_Block). */
  FormattedLocality?: string;
  MarriageText?: string;
  MarriageHighlightText?: string;
  MarriagePartnerTakenText?: string;
  DisplayAge?: boolean;
  Email?: string;
  MobilePhone?: string;
  WorkPhone?: string;
  HomePhone?: string;
}

/** A household with its members: the outputs of DataActionGetHousehold, with the lists unwrapped. */
export interface Household {
  Household: HouseholdDetails;
  Out_HouseholdMembers: HouseholdMember[];
  Out_NonHouseholdMembers: HouseholdMember[];
  /** False: the profile is private and only visible to the user. */
  isVisible: boolean;
}

/** The map coordinates of a household (Directory_Coordinates). */
export interface HouseholdCoordinates {
  Latitude?: string;
  Longitude?: string;
  UseCoordinates?: boolean;
}

/* The households of the Photobook screen (Directory_Photobook): its list of the locality households and the caption
   of one household (Photobook_Options_Left). */

/** A household of the Photobook (Connect_Household_CS UI_PhotobookHousehold). */
export interface PhotobookHousehold {
  householdId: string;
  householdName: string;
  locality: string;
}

/** The selected household of the Photobook (UBTConnect SelectedHousehold): its id and its position in the list. */
export interface SelectedHousehold {
  id: string;
  position: number;
}

/** What DataActionGetLocalityHouseholdIds sends: the screen inputs and the screen variables, read at fetch time. The
    server action has no inputs of its own. */
export interface LocalityHouseholdIdsCallInputs {
  inHouseholdId: string;
  inLocalityId: string;
  isLoading: boolean;
  selectedHousehold: SelectedHousehold;
}

/** What DataActionGetHouseholdCaption sends: the block inputs and the block variables of Photobook_Options_Left. */
export interface HouseholdCaptionCallInputs {
  inCurrentHousehold: PhotobookHousehold;
  inIsShow: boolean;
  inMainContainerClass: string;
  infoSheetId: string;
  lastFetched: PhotobookHousehold;
  isLoading: boolean;
}

/** The outputs of DataActionGetHouseholdCaption. */
export interface HouseholdCaption {
  /** The caption as HTML text (the block sanitizes it). */
  householdCaption: string;
  /** The household of the caption. */
  lastFetchedHousehold: PhotobookHousehold;
}

/** The inputs that the two data actions of HouseholdRelations_Block send: the block inputs and the block variables
    UserAge_Visibility, isLoading and ShowNotesSheet. A type alias, not an interface: the contract inputs have an index
    signature. */
export type MemberRelationsCallInputs = {
  HouseholdId: string;
  MemberId: string;
  UserAge_Visibility: boolean;
  isLoading: boolean;
  ShowNotesSheet: boolean;
};

/** A member with his parents and previous spouses: the outputs of DataActionGet_MemberDetails, with the list
    unwrapped. */
export interface MemberRelations {
  MemberName: string;
  /** The family name, the title of the relations screen. */
  FamilyName: string;
  Father: HouseholdMember;
  Mother: HouseholdMember;
  FormerSpouses: HouseholdMember[];
  ParentHouseholdId: string;
}

/** The siblings of a member: the outputs of DataActionGet_ParentHouseholdDetails, with the list unwrapped. */
export interface SiblingRelations {
  Out_siblingRelations: HouseholdMember[];
}

/* ---- Locality_Households_HouseholdList and Household_Card (Locality_Details) ---- */

/** A household of a locality (Connect_Household_CS UI_LocalityHousehold, GetLocalityHouseholds.LocalityHouseholds),
    with the field names of the household list. */
export interface LocalityHousehold {
  householdId: string;
  householdName: string;
  childrenNames: string;
  isBookmarked: boolean;
  localityName: string;
  countryName: string;
}

/** One image of a lazy image list (UBTConnect_Utils LazyImage): a member avatar of a household card. */
export interface LazyImageItem {
  imageURL: string;
  entityId: string;
  entityType: string;
}

/** The member avatars of a household card: the outputs of DataActionGetMembers, with the list unwrapped. */
export interface HouseholdCardMembers {
  members: LazyImageItem[];
  visibleAvatars: number;
}

/* The members of the signed-in household on the Orbit landing (ScreenBlock_OrbitLanding of Connect2_OrbitMobile_MUI):
   the member bar, in which the user selects the member whose events the landing shows. */

/** What DataActionGet_HouseholdMembers sends: the block variables (screenData.variables), in the order of the block.
    The list and record variables that echo the client state are not sent (the contract makes every variable
    optional). A type alias, not an interface: the contract inputs have an index signature. */
export type OrbitHouseholdMembersCallInputs = {
  SelectedMemberId: string;
  IsFetchingData: boolean;
  /** OrbitLandingFilter identifier; 0 is the null identifier. */
  EventFilter: number;
  SortEventsASC: boolean;
  Popup_SortByOpened: boolean;
  Popup_FiltersOpened: boolean;
  CurrentMemberId: string;
};

/** A member of the member bar (GetHouseholdMembersResponse_Screen). MemberId is a Long Integer (text). */
export interface OrbitHouseholdMember {
  memberId: string;
  firstName: string;
  isSelected: boolean;
}

/* ---- ScreenBlock_ShareObject (LegacyShareObject) ---- */

/** The inputs of GetHouseholdDetails of Connect2_LegacyShared. A type alias, not an interface: the contract inputs
    have an index signature. */
export type HouseholdShareCardCallInputs = {
  /** The household (a Long Integer as text). */
  HouseholdId: string;
  User_AgeVisibility: boolean;
  CheckVisibility: boolean;
};

/** The fields of the household card content (UI_Household_Card_Content) that the share card of
    ScreenBlock_ShareObject reads. */
export interface HouseholdShareCard {
  name: string;
  familyNames: string;
  localityName: string;
  countryName: string;
}
