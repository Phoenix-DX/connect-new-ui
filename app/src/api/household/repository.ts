import { callAction } from '@/api/client/callAction';
import {
  toHousehold,
  toHouseholdCaption,
  toHouseholdCaptionInputs,
  toHouseholdCoordinates,
  toLocalityHouseholdIds,
  toLocalityHouseholdIdsInputs,
  toMemberRelations,
  toSiblingRelations,
} from './mapper';
import type {
  Household,
  HouseholdCallInputs,
  HouseholdCaption,
  HouseholdCaptionCallInputs,
  HouseholdCoordinates,
  LocalityHouseholdIdsCallInputs,
  MemberRelations,
  MemberRelationsCallInputs,
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
