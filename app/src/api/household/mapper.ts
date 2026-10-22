import type { ActionOutputs, PathOf } from '@/api/client/callAction';
import { osList } from '@/legacy/os/os-wire';
import type { Household, HouseholdCardContent, HouseholdCoordinates, HouseholdDetails, HouseholdMember } from './types';

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
