import { callAction } from '@/api/client/callAction';
import { toHousehold, toHouseholdCoordinates } from './mapper';
import type { Household, HouseholdCallInputs, HouseholdCoordinates } from './types';

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
