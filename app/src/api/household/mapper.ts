import type { ActionOutputs, PathOf } from '@/api/client/callAction';
import { osList } from '@/legacy/os/os-wire';
import type {
  Household,
  HouseholdCaption,
  HouseholdCaptionCallInputs,
  HouseholdCardContent,
  HouseholdCoordinates,
  HouseholdDetails,
  HouseholdMember,
  LocalityHouseholdIdsCallInputs,
  PhotobookHousehold,
} from './types';

/** The outputs of DataActionGetHousehold, as the contract describes them. */
export type HouseholdWire = ActionOutputs<PathOf<'UBTConnect', 'HouseholdDetails_Block/DataActionGetHousehold'>>;
/** The outputs of DataActionGetHousehold_Coordinates, as the contract describes them. */
type HouseholdCoordinatesWire = ActionOutputs<
  PathOf<'UBTConnect', 'HouseholdDetails_Block/DataActionGetHousehold_Coordinates'>
>;

type HouseholdDetailsWire = HouseholdWire['Household'];
type HouseholdCardContentWire = HouseholdDetailsWire['HouseholdCard']['Household_Card_Content'];
type HouseholdMemberWire = HouseholdWire['Out_HouseholdMembers']['List'][number];

const toCardContent = (w: HouseholdCardContentWire): HouseholdCardContent => ({
  Name: w.Name,
  FamilyNames: w.FamilyNames,
  Address: w.Address,
  LocalityId: w.LocalityId,
  LocalityName: w.LocalityName,
  CountryName: w.CountryName,
  SupperMeetingId: w.SupperMeetingId,
  SupperMeetingName: w.SupperMeetingName,
  DisplayOptions: {
    IsAncestry: w.DisplayOptions.IsAncestry,
    IsDeceased: w.DisplayOptions.IsDeceased,
    IsHidden: w.DisplayOptions.IsHidden,
  },
});

const toHouseholdDetails = (w: HouseholdDetailsWire): HouseholdDetails => ({
  HouseholdCard: {
    Id: w.HouseholdCard.Id,
    Household_Card_Content: toCardContent(w.HouseholdCard.Household_Card_Content),
  },
});

/** A member record, with the fields that the UI reads. */
const toHouseholdMember = (w: HouseholdMemberWire): HouseholdMember => ({
  Id: w.Id,
  HouseholdId: w.HouseholdId,
  Title: w.Title,
  MemberRole: w.MemberRole,
  LifeCycleText: w.LifeCycleText,
  LifeCycleText_IsItallic: w.LifeCycleText_IsItallic,
  IsDeceased: w.IsDeceased,
  HasCTAs: w.HasCTAs,
  HasNavigation: w.HasNavigation,
  LocalityName: w.LocalityName,
  CountryName: w.CountryName,
  MarriageText: w.MarriageText,
  MarriageHighlightText: w.MarriageHighlightText,
  MarriagePartnerTakenText: w.MarriagePartnerTakenText,
  DisplayAge: w.DisplayAge,
  Email: w.Email,
  MobilePhone: w.MobilePhone,
  WorkPhone: w.WorkPhone,
  HomePhone: w.HomePhone,
});

/** The household of DataActionGetHousehold: the household record, the two member lists (unwrapped) and isVisible. */
export const toHousehold = (wire: HouseholdWire): Household => ({
  Household: toHouseholdDetails(wire.Household),
  Out_HouseholdMembers: osList(wire.Out_HouseholdMembers).map(toHouseholdMember),
  Out_NonHouseholdMembers: osList(wire.Out_NonHouseholdMembers).map(toHouseholdMember),
  isVisible: wire.isVisible,
});

/** The coordinates of DataActionGetHousehold_Coordinates. */
export const toHouseholdCoordinates = (wire: HouseholdCoordinatesWire): HouseholdCoordinates => ({
  Latitude: wire.HouseholdCoordinates.Latitude,
  Longitude: wire.HouseholdCoordinates.Longitude,
  UseCoordinates: wire.HouseholdCoordinates.UseCoordinates,
});

/** The outputs of DataActionGetLocalityHouseholdIds (Photobook), as the contract describes them. */
type LocalityHouseholdIdsWire = ActionOutputs<PathOf<'UBTConnect', 'Photobook/DataActionGetLocalityHouseholdIds'>>;
/** The outputs of DataActionGetHouseholdCaption (Photobook_Options_Left), as the contract describes them. */
type HouseholdCaptionWire = ActionOutputs<PathOf<'UBTConnect', 'Photobook_Options_Left/DataActionGetHouseholdCaption'>>;
/** UI_PhotobookHousehold on the wire. */
type PhotobookHouseholdWire = HouseholdCaptionWire['LastFetchedHousehold'];

/** A Photobook household from the wire. */
const toPhotobookHousehold = (w: PhotobookHouseholdWire): PhotobookHousehold => ({
  householdId: w.HouseholdId,
  householdName: w.HouseholdName,
  locality: w.Locality,
});

/** A Photobook household as the calls send it. */
const toPhotobookHouseholdWire = (h: PhotobookHousehold): PhotobookHouseholdWire => ({
  HouseholdId: h.householdId,
  HouseholdName: h.householdName,
  Locality: h.locality,
});

/** The inputs of DataActionGetLocalityHouseholdIds, with the wire names and the order of the screen variables. */
export const toLocalityHouseholdIdsInputs = (inputs: LocalityHouseholdIdsCallInputs) => ({
  IsLoading: inputs.isLoading,
  SelectedHousehold: { Id: inputs.selectedHousehold.id, Position: inputs.selectedHousehold.position },
  In_HouseholdId: inputs.inHouseholdId,
  In_LocalityId: inputs.inLocalityId,
});

/** The households of DataActionGetLocalityHouseholdIds, in the server order (list unwrapped). */
export const toLocalityHouseholdIds = (wire: LocalityHouseholdIdsWire): PhotobookHousehold[] =>
  osList(wire.Out_LocalityHouseholdIds).map(toPhotobookHousehold);

/** The inputs of DataActionGetHouseholdCaption, with the wire names and the order of the block variables. */
export const toHouseholdCaptionInputs = (inputs: HouseholdCaptionCallInputs) => ({
  In_CurrentHousehold: toPhotobookHouseholdWire(inputs.inCurrentHousehold),
  In_IsShow: inputs.inIsShow,
  In_MainContainerClass: inputs.inMainContainerClass,
  InfoSheetId: inputs.infoSheetId,
  LastFetched: toPhotobookHouseholdWire(inputs.lastFetched),
  isLoading: inputs.isLoading,
});

/** The caption of DataActionGetHouseholdCaption and the household it belongs to. */
export const toHouseholdCaption = (wire: HouseholdCaptionWire): HouseholdCaption => ({
  householdCaption: wire.HouseholdCaption,
  lastFetchedHousehold: toPhotobookHousehold(wire.LastFetchedHousehold),
});
