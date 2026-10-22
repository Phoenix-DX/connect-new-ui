/* The data actions of the block are in the domain api/household. This module keeps the names that the block, its
   client actions and its test use, until they import the domain names. */
export {
  fetchHousehold as getHousehold,
  fetchHouseholdCoordinates as getHousehold_Coordinates,
  type Household as GetHouseholdOutput,
  type HouseholdCallInputs as HouseholdDetailsCallInputs,
} from '@/api/household';
