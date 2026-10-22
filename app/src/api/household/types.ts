/* Domain types of a household: the fields that the household UI reads (HouseholdDetails_Block, its client actions
   and HouseholdDetails_Members_Block). The names and the nesting are those of the OutSystems records
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
