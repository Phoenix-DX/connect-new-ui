/* Household components: props only (plan v2 §2.1). Other folders import them through this barrel. */
export { HouseholdAddress, type HouseholdAddressProps } from './HouseholdAddress/HouseholdAddress';
export {
  cardContent,
  HOUSEHOLD_TAG_ABOUT,
  HOUSEHOLD_TAG_PHOTOS,
  isDeceasedOrAncestry,
  isShownHousehold,
} from './householdCard';
export {
  HouseholdDetailsView,
  type HouseholdDetailsData,
  type HouseholdDetailsViewProps,
} from './HouseholdDetailsView/HouseholdDetailsView';
export { HouseholdMemberList, type HouseholdMemberListProps } from './HouseholdMemberList/HouseholdMemberList';
export { HouseholdTags, type HouseholdTagsProps } from './HouseholdTags/HouseholdTags';
export {
  HouseholdTimelinePhotos,
  type HouseholdTimelinePhotosProps,
} from './HouseholdTimelinePhotos/HouseholdTimelinePhotos';
