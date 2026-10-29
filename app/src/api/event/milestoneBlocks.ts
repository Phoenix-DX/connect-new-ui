import { callAction, type ActionInputs, type ActionOutputs, type PathOf } from '@/api/client/callAction';
import { osList } from '@/lib/os-wire';
import type { MemberInformation, OrbitEventDetails } from './types';

/* The data actions of the five milestone blocks that ScreenBlock_MilestoneWrapper shows besides
   ScreenBlock_AccommodationHost (Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks): ScreenBlock_MealGuest, _MealHost,
   _MealHelper, _AccommodationGuest and _AccommodationHelper. Each block has one data action for its milestone and,
   except MealHost, DataActionGetCaptions for the host household's photobook caption.
   The five answers map to one domain record, MilestoneBlockData: a block reads only the attributes of its own
   response, and the other attributes keep their record defaults. Dates are "" for the OutSystems null date. */

const ORBIT = 'Connect2_OrbitMobile_MUI';
type OrbitPath<A extends string> = PathOf<typeof ORBIT, A>;

const MEAL_GUEST = 'ScreenBlock_MealGuest/DataActionGetMealGuest';
const MEAL_HOST = 'ScreenBlock_MealHost/DataActionGetMealHost';
const MEAL_HELPER = 'ScreenBlock_MealHelper/DataActionGetMealHelper';
const ACCOMMODATION_GUEST = 'ScreenBlock_AccommodationGuest/DataActionGetAccommodationGuest';
const ACCOMMODATION_HELPER = 'ScreenBlock_AccommodationHelper/DataActionGetAccommodationHelper';

/** The block whose data action runs. */
export type MilestoneBlockKind = 'mealGuest' | 'mealHost' | 'mealHelper' | 'accommodationGuest' | 'accommodationHelper';

/** The blocks with DataActionGetCaptions (every block but MealHost). */
type MilestoneCaptionsBlockKind = Exclude<MilestoneBlockKind, 'mealHost'>;

type MealGuestWire = ActionOutputs<OrbitPath<typeof MEAL_GUEST>>;
type MealHostWire = ActionOutputs<OrbitPath<typeof MEAL_HOST>>;
type MealHelperWire = ActionOutputs<OrbitPath<typeof MEAL_HELPER>>;
type AccommodationGuestWire = ActionOutputs<OrbitPath<typeof ACCOMMODATION_GUEST>>;
type AccommodationHelperWire = ActionOutputs<OrbitPath<typeof ACCOMMODATION_HELPER>>;
type GuestItemWire = MealGuestWire['Response']['GetMealMilestoneGuestResponse']['Guests']['List'][number];
type MemberWire = GuestItemWire['MemberInformation']['List'][number];
type HelperItemWire = MealGuestWire['Response']['GetMealMilestoneGuestResponse']['Helpers']['List'][number];
type HostInformationWire = MealGuestWire['Response']['GetMealMilestoneGuestResponse']['HostInformation'];
type EventDetailsWire = MealGuestWire['Response']['GetMealMilestoneGuestResponse']['EventDetails'];
type SpecialNeedsItemWire = MealHostWire['Response']['GetMealMilestoneHostResponse']['SpecialNeeds']['List'][number];
type RoomItemWire = AccommodationHelperWire['Response']['GetAccommodationHelperResponse']['Rooms']['List'][number];

/** The block variables that a data action of the five blocks sends (screenData.variables, the scalar ones). */
export type MilestoneBlockCallInputs = Required<
  Pick<
    ActionInputs<OrbitPath<typeof MEAL_HOST>>,
    | 'IsFetchingData'
    | 'In_MilestoneId'
    | 'In_EventId'
    | 'In_HostId'
    | 'In_PreloadEventName'
    | 'In_PreloadMilestoneName'
    | 'In_OrbitMilestoneTypeId'
  >
> & {
  /** IsFetchingCaptionData (not a variable of MealHost). */
  IsFetchingCaptionData?: boolean;
  /** HouseholdCaptions (not a variable of MealHost). */
  HouseholdCaptions?: string;
};

/** MemberAccommodation: the household that hosts the member ("" = no host). */
export interface MemberAccommodation {
  Host: string;
  HouseholderId: string;
  MilestoneId: string;
}

/** MemberInformationRec with its Accommodation, which the meal blocks show ("Accommodation: <Host>"). */
export type MilestoneMember = MemberInformation & { Accommodation: MemberAccommodation };

/** GuestItem: a household and its members. */
export interface MilestoneGuestItem {
  HouseholderId: string;
  HouseholdName: string;
  LocalityId: string;
  Locality: string;
  CountryCode: string;
  DisplayDot: boolean;
  MemberInformation: MilestoneMember[];
}

/** HelperItem: a helper role and its members. */
export interface MilestoneHelperItem {
  Role: string;
  MemberInformation: MilestoneMember[];
}

/** SpecialNeeds: one need of a member. */
export interface MilestoneSpecialNeed {
  Category: string;
  Notes: string;
  Type: string;
}

/** SpecialNeedsItem: a member and the member's special needs. */
export interface MilestoneSpecialNeedsItem {
  HouseholderId: string;
  MemberId: string;
  FirstName: string;
  LastName: string;
  Title: string;
  LocalityId: string;
  SignedPhotoURL: string;
  SpecialNeeds: MilestoneSpecialNeed[];
}

/** RoomItem with the members' Accommodation. */
export interface MilestoneRoomItem {
  RoomId: string;
  RoomName: string;
  RoomInformation: { Floor: string; Type: string; Beds: string };
  Guests: MilestoneGuestItem[];
}

/** HostInformation: the household that hosts the milestone. */
export type HostInformation = HostInformationWire;

/** The response of the data action of a block (MealData or AccommodationData), with the record defaults for the
    attributes that the block's response does not have. */
export interface MilestoneBlockData {
  MilestoneId: string;
  MilestoneType: string;
  MilestoneDateTime: string;
  MilestoneTitle: string;
  EventDetails: OrbitEventDetails;
  HostInformation: HostInformation;
  /** Meals (MealGuest, MealHost): the event has meals. */
  Meals: boolean;
  /** AllocatedGuests (MealHost, Long Integer as text). */
  AllocatedGuests: string;
  Guests: MilestoneGuestItem[];
  Helpers: MilestoneHelperItem[];
  SpecialNeeds: MilestoneSpecialNeedsItem[];
  Rooms: MilestoneRoomItem[];
}

/** The outputs of the data action of a block. */
export interface MilestoneBlockResult {
  data: MilestoneBlockData;
  hasData: boolean;
}

/** The outputs of DataActionGetCaptions. */
interface MilestoneCaptionsResult {
  Success: boolean;
  PhotobookCaption: string;
}

/** A Date or DateTime as text, "" for the OutSystems null date. */
const nullDateAsEmpty = (value: string): string => (value.startsWith('1900-01-01') ? '' : value);

export const EMPTY_HOST_INFORMATION: HostInformation = {
  CountryName: '',
  Email: '',
  FirstName: '',
  FormattedAddress: '',
  HomePhone: '',
  HouseholdName: '',
  HouseholdSurname: '',
  HouseholderId: '0',
  LocalityId: '0',
  LocalityName: '',
  MobilePhone: '',
  Phone: '',
  SignedPhotoURL: '',
  Title: '',
  WorkPhone: '',
};

/** MealData / AccommodationData before the data action answers (record defaults). */
export const EMPTY_MILESTONE_BLOCK_DATA: MilestoneBlockData = {
  MilestoneId: '',
  MilestoneType: '',
  MilestoneDateTime: '',
  MilestoneTitle: '',
  EventDetails: { Id: '0', Name: '', Location: '', StartDate: '', EndDate: '' },
  HostInformation: EMPTY_HOST_INFORMATION,
  Meals: false,
  AllocatedGuests: '0',
  Guests: [],
  Helpers: [],
  SpecialNeeds: [],
  Rooms: [],
};

const toMember = (w: MemberWire): MilestoneMember => ({
  HouseholderId: w.HouseholderId,
  MemberId: w.MemberId,
  LocalityId: w.LocalityId,
  Locality: w.Locality,
  CountryCode: w.CountryCode,
  FirstName: w.FirstName,
  LastName: w.LastName,
  Title: w.Title,
  IsHouseholder: w.IsHouseholder,
  IsSpouse: w.IsSpouse,
  Age: w.Age,
  Phone: w.Phone,
  MiddayMeal: w.MiddayMeal,
  EveningMeal: w.EveningMeal,
  HasGuestArrangements: w.HasGuestArrangements,
  HasOrbitAdminRole: w.HasOrbitAdminRole,
  SignedPhotoURL: w.SignedPhotoURL,
  Accommodation: {
    Host: w.Accommodation.Host,
    HouseholderId: w.Accommodation.HouseholderId,
    MilestoneId: w.Accommodation.MilestoneId,
  },
});

const toGuest = (g: GuestItemWire): MilestoneGuestItem => ({
  HouseholderId: g.HouseholderId,
  HouseholdName: g.HouseholdName,
  LocalityId: g.LocalityId,
  Locality: g.Locality,
  CountryCode: g.CountryCode,
  DisplayDot: g.DisplayDot,
  MemberInformation: osList(g.MemberInformation).map(toMember),
});

const toHelper = (h: HelperItemWire): MilestoneHelperItem => ({
  Role: h.Role,
  MemberInformation: osList(h.MemberInformation).map(toMember),
});

const toSpecialNeedsItem = (s: SpecialNeedsItemWire): MilestoneSpecialNeedsItem => ({
  HouseholderId: s.HouseholderId,
  MemberId: s.MemberId,
  FirstName: s.FirstName,
  LastName: s.LastName,
  Title: s.Title,
  LocalityId: s.LocalityId,
  SignedPhotoURL: s.SignedPhotoURL,
  SpecialNeeds: osList(s.SpecialNeeds).map((n) => ({ Category: n.Category, Notes: n.Notes, Type: n.Type })),
});

const toRoom = (r: RoomItemWire): MilestoneRoomItem => ({
  RoomId: r.RoomId,
  RoomName: r.RoomName,
  RoomInformation: { Floor: r.RoomInformation.Floor, Type: r.RoomInformation.Type, Beds: r.RoomInformation.Beds },
  Guests: osList(r.Guests).map(toGuest),
});

const toEventDetails = (e: EventDetailsWire): OrbitEventDetails => ({
  Id: e.Id,
  Name: e.Name,
  Location: e.Location,
  StartDate: nullDateAsEmpty(e.StartDate),
  EndDate: nullDateAsEmpty(e.EndDate),
});

/** The attributes that every response has. */
interface CommonResponseWire {
  MilestoneId: string;
  MilestoneType: string;
  MilestoneDateTime: string;
  MilestoneTitle: string;
  EventDetails: EventDetailsWire;
}

const toCommon = (r: CommonResponseWire) => ({
  MilestoneId: r.MilestoneId,
  MilestoneType: r.MilestoneType,
  MilestoneDateTime: nullDateAsEmpty(r.MilestoneDateTime),
  MilestoneTitle: r.MilestoneTitle,
  EventDetails: toEventDetails(r.EventDetails),
});

/** DataActionGetMealGuest: GetMealMilestoneGuestResponse. */
function toMealGuestResult(wire: MealGuestWire): MilestoneBlockResult {
  const r = wire.Response.GetMealMilestoneGuestResponse;
  return {
    hasData: wire.HasData,
    data: {
      ...EMPTY_MILESTONE_BLOCK_DATA,
      ...toCommon(r),
      HostInformation: r.HostInformation,
      Meals: r.Meals,
      Guests: osList(r.Guests).map(toGuest),
      Helpers: osList(r.Helpers).map(toHelper),
    },
  };
}

/** DataActionGetMealHost: GetMealMilestoneHostResponse. */
function toMealHostResult(wire: MealHostWire): MilestoneBlockResult {
  const r = wire.Response.GetMealMilestoneHostResponse;
  return {
    hasData: wire.HasData,
    data: {
      ...EMPTY_MILESTONE_BLOCK_DATA,
      ...toCommon(r),
      Meals: r.Meals,
      AllocatedGuests: r.AllocatedGuests,
      Guests: osList(r.Guests).map(toGuest),
      Helpers: osList(r.Helpers).map(toHelper),
      SpecialNeeds: osList(r.SpecialNeeds).map(toSpecialNeedsItem),
    },
  };
}

/** DataActionGetMealHelper: GetMealMilestoneHelperResponse. */
function toMealHelperResult(wire: MealHelperWire): MilestoneBlockResult {
  const r = wire.Response.GetMealMilestoneHelperResponse;
  return {
    hasData: wire.HasData,
    data: {
      ...EMPTY_MILESTONE_BLOCK_DATA,
      ...toCommon(r),
      HostInformation: r.HostInformation,
      Guests: osList(r.Guests).map(toGuest),
      Helpers: osList(r.Helpers).map(toHelper),
      SpecialNeeds: osList(r.SpecialNeeds).map(toSpecialNeedsItem),
    },
  };
}

/** DataActionGetAccommodationGuest: GetAccommodationGuestResponse. */
function toAccommodationGuestResult(wire: AccommodationGuestWire): MilestoneBlockResult {
  const r = wire.Response.GetAccommodationGuestResponse;
  return {
    hasData: wire.HasData,
    data: {
      ...EMPTY_MILESTONE_BLOCK_DATA,
      ...toCommon(r),
      HostInformation: r.HostInformation,
      Guests: osList(r.Guests).map(toGuest),
      Helpers: osList(r.Helpers).map(toHelper),
    },
  };
}

/** DataActionGetAccommodationHelper: GetAccommodationHelperResponse. */
function toAccommodationHelperResult(wire: AccommodationHelperWire): MilestoneBlockResult {
  const r = wire.Response.GetAccommodationHelperResponse;
  return {
    hasData: wire.HasData,
    data: {
      ...EMPTY_MILESTONE_BLOCK_DATA,
      ...toCommon(r),
      HostInformation: r.HostInformation,
      Helpers: osList(r.Helpers).map(toHelper),
      SpecialNeeds: osList(r.SpecialNeeds).map(toSpecialNeedsItem),
      Rooms: osList(r.Rooms).map(toRoom),
    },
  };
}

/** The scalar variables that the data action of the block sends. */
function blockVariables(kind: MilestoneBlockKind, inputs: MilestoneBlockCallInputs) {
  const scalar = {
    IsFetchingData: inputs.IsFetchingData,
    In_MilestoneId: inputs.In_MilestoneId,
    In_EventId: inputs.In_EventId,
    In_HostId: inputs.In_HostId,
    In_PreloadEventName: inputs.In_PreloadEventName,
    In_PreloadMilestoneName: inputs.In_PreloadMilestoneName,
    In_OrbitMilestoneTypeId: inputs.In_OrbitMilestoneTypeId,
  };
  if (kind === 'mealHost') return scalar;
  return {
    ...scalar,
    IsFetchingCaptionData: inputs.IsFetchingCaptionData ?? false,
    HouseholdCaptions: inputs.HouseholdCaptions ?? '',
  };
}

/** The data action of a block (DataActionGetMealGuest, …): the milestone as the block keeps it. */
export async function fetchMilestoneBlock(
  kind: MilestoneBlockKind,
  inputs: MilestoneBlockCallInputs,
): Promise<MilestoneBlockResult> {
  const v = blockVariables(kind, inputs);
  switch (kind) {
    case 'mealGuest':
      return toMealGuestResult(await callAction(ORBIT, MEAL_GUEST, v));
    case 'mealHost':
      return toMealHostResult(await callAction(ORBIT, MEAL_HOST, v));
    case 'mealHelper':
      return toMealHelperResult(await callAction(ORBIT, MEAL_HELPER, v));
    case 'accommodationGuest':
      return toAccommodationGuestResult(await callAction(ORBIT, ACCOMMODATION_GUEST, v));
    case 'accommodationHelper':
      return toAccommodationHelperResult(await callAction(ORBIT, ACCOMMODATION_HELPER, v));
  }
}

const CAPTIONS = {
  mealGuest: 'ScreenBlock_MealGuest/DataActionGetCaptions',
  mealHelper: 'ScreenBlock_MealHelper/DataActionGetCaptions',
  accommodationGuest: 'ScreenBlock_AccommodationGuest/DataActionGetCaptions',
  accommodationHelper: 'ScreenBlock_AccommodationHelper/DataActionGetCaptions',
} as const;

/** DataActionGetCaptions of a block: the photobook caption of the host household (Success False = no caption). */
export async function fetchMilestoneBlockCaptions(
  kind: MilestoneCaptionsBlockKind,
  inputs: MilestoneBlockCallInputs,
): Promise<MilestoneCaptionsResult> {
  const out = await callAction(ORBIT, CAPTIONS[kind], blockVariables(kind, inputs));
  return { Success: out.Success, PhotobookCaption: out.PhotobookCaption };
}
