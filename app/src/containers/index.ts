/* Containers that 2 or more pages use (plan v2 §2.3). Other folders import them through this barrel. */
export {
  HouseholdDetailsContainer,
  type HouseholdDetailsContainerProps,
  type HouseholdDetailsSource,
} from './HouseholdDetails/HouseholdDetailsContainer';
export { useHouseholdDetailsFlags, type HouseholdDetailsFlags } from './HouseholdDetails/hooks/useHouseholdDetails';
export {
  SupperMeetingDetailsContainer,
  type SupperMeetingDetailsContainerProps,
} from './SupperMeetingDetails/SupperMeetingDetailsContainer';
export {
  useSupperMeetingDetailsFlags,
  type SupperMeetingDetailsFlags,
} from './SupperMeetingDetails/hooks/useSupperMeetingDetails';
