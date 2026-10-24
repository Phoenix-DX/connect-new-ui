import { callAction } from '@/api/client/callAction';
import {
  toHousehold,
  toHouseholdCaption,
  toHouseholdCaptionInputs,
  toHouseholdCardMembers,
  toHouseholdCoordinates,
  toHouseholdCoordinatesById,
  toHouseholdShareCard,
  toLocalityHouseholdIds,
  toLocalityHouseholdIdsInputs,
  toLocalityHouseholds,
  toLocalityHouseholdWire,
  toMemberRelations,
  toOrbitHouseholdMembers,
  toSiblingRelations,
} from './mapper';
import type {
  Household,
  HouseholdCallInputs,
  HouseholdCaption,
  HouseholdCaptionCallInputs,
  HouseholdCardMembers,
  HouseholdCoordinates,
  HouseholdShareCard,
  HouseholdShareCardCallInputs,
  LocalityHousehold,
  LocalityHouseholdIdsCallInputs,
  MemberRelations,
  MemberRelationsCallInputs,
  OrbitHouseholdMember,
  OrbitHouseholdMembersCallInputs,
  PhotobookHousehold,
  SiblingRelations,
} from './types';

/** The two data actions of HouseholdDetails_Block, called with their OutSystems names. They are fetched on demand
    only: the block refreshes them in its OnReady and OnParametersChanged events. Both send the same inputs.
    @origin UBTConnect.Directory_Household.HouseholdDetails_Block */

/** DataActionGetHousehold: the household, its members, the married children in other households and isVisible. */
export async function fetchHousehold(inputs: HouseholdCallInputs): Promise<Household> {
  return toHousehold(await callAction('UBTConnect', 'HouseholdDetails_Block/DataActionGetHousehold', inputs));
}

/** DataActionGetHousehold_Coordinates: the map coordinates of the household address. */
export async function fetchHouseholdCoordinates(inputs: HouseholdCallInputs): Promise<HouseholdCoordinates> {
  return toHouseholdCoordinates(
    await callAction('UBTConnect', 'HouseholdDetails_Block/DataActionGetHousehold_Coordinates', inputs),
  );
}

/** DataActionGetLocalityHouseholdIds of the Photobook screen: the households of the locality, in the order of the
    photobook. The screen fetches it at start. */
export async function fetchLocalityHouseholdIds(inputs: LocalityHouseholdIdsCallInputs): Promise<PhotobookHousehold[]> {
  return toLocalityHouseholdIds(
    await callAction('UBTConnect', 'Photobook/DataActionGetLocalityHouseholdIds', toLocalityHouseholdIdsInputs(inputs)),
  );
}

/** DataActionGetHouseholdCaption of Photobook_Options_Left: the caption of the current household. Fetched on demand
    only, when the info sheet opens on a household that is not the last fetched one. */
export async function fetchHouseholdCaption(inputs: HouseholdCaptionCallInputs): Promise<HouseholdCaption> {
  return toHouseholdCaption(
    await callAction(
      'UBTConnect',
      'Photobook_Options_Left/DataActionGetHouseholdCaption',
      toHouseholdCaptionInputs(inputs),
    ),
  );
}

/* The two data actions of HouseholdRelations_Block (the relations of a member), on demand only: the block refreshes
   Get_MemberDetails in its OnReady, then Get_ParentHouseholdDetails after it. Both send the same inputs. */

/** DataActionGet_MemberDetails: the member name, the family name, the father, the mother and the previous spouses. */
export async function fetchMemberRelations(inputs: MemberRelationsCallInputs): Promise<MemberRelations> {
  return toMemberRelations(
    await callAction('UBTConnect', 'HouseholdRelations_Block/DataActionGet_MemberDetails', inputs),
  );
}

/** DataActionGet_ParentHouseholdDetails: the siblings of the member, from the household of his parents. */
export async function fetchSiblingRelations(inputs: MemberRelationsCallInputs): Promise<SiblingRelations> {
  return toSiblingRelations(
    await callAction('UBTConnect', 'HouseholdRelations_Block/DataActionGet_ParentHouseholdDetails', inputs),
  );
}

/* ---- Locality_Households_HouseholdList and Household_Card (Locality_Details) ---- */

/** DataActionGetLocalityHouseholds of Locality_Households_HouseholdList (UBTConnect): the households of a locality
    (the block input In_LocalityId). The block's OnReady refreshes it. */
export async function fetchLocalityHouseholds(localityId: string): Promise<LocalityHousehold[]> {
  return toLocalityHouseholds(
    await callAction('UBTConnect', 'Locality_Households_HouseholdList/DataActionGetLocalityHouseholds', {
      In_LocalityId: localityId,
    }),
  );
}

/** DataActionGetMembers of Household_Card (UBTConnect): the member avatars of a household card (the block input
    Household). The card's OnReady and OnParametersChanged refresh it. */
export async function fetchHouseholdCardMembers(household: LocalityHousehold): Promise<HouseholdCardMembers> {
  return toHouseholdCardMembers(
    await callAction('UBTConnect', 'Household_Card/DataActionGetMembers', {
      Household: toLocalityHouseholdWire(household),
    }),
  );
}

/** DataActionGet_HouseholdMembers of ScreenBlock_OrbitLanding (Connect2_OrbitMobile_MUI): the members of the
    signed-in household for the member bar of the Orbit landing. Fetched on demand only, when the landing opens. */
export async function fetchOrbitHouseholdMembers(
  inputs: OrbitHouseholdMembersCallInputs,
): Promise<OrbitHouseholdMember[]> {
  return toOrbitHouseholdMembers(
    await callAction('Connect2_OrbitMobile_MUI', 'ScreenBlock_OrbitLanding/DataActionGet_HouseholdMembers', inputs),
  );
}

/* ---- LDM_EventDetail_V2: the server action GetHouseholdCoordinates (Connect2_OrbitMobile_MUI) ---- */

/** The server action GetHouseholdCoordinates(HouseholdId) of Connect2_OrbitMobile_MUI: the map coordinates of a
    household. OnHandle_HostCardAddress of ScreenBlock_EventDetail_V2 calls it when the user asks for the directions
    to the host. */
export async function fetchHouseholdCoordinatesById(householdId: string): Promise<Required<HouseholdCoordinates>> {
  return toHouseholdCoordinatesById(
    await callAction('Connect2_OrbitMobile_MUI', 'ActionGetHouseholdCoordinates', { HouseholdId: householdId }),
  );
}

/* ---- ScreenBlock_ShareObject (LegacyShareObject) ---- */

/** GetHouseholdDetails (the service action of Connect2_LegacyShared): the household card of the shared household. The
    OnReady of ScreenBlock_ShareObject calls it for a household. */
export async function fetchHouseholdShareCard(inputs: HouseholdShareCardCallInputs): Promise<HouseholdShareCard> {
  return toHouseholdShareCard(await callAction('Connect2_LegacyShared', 'ServiceAPIGetHouseholdDetails', inputs));
}
