import type { CarouselPreloadedHouseholds } from '../../shared/UBTConnect/lib/structures';

/** Route inputs of UBTConnect.Directory_Household.HouseholdCarousel (HouseholdCarousel.mvc.js model :28-30, setInputs
    :77-79, query string). */
export interface HouseholdCarouselInputs {
  /** In_StartingHouseholdId (Long Integer, kept as a string): the household whose slide is active first. */
  In_StartingHouseholdId: string;
}

/** EntitiesCarousel_SwippedItem (UBTConnect.model.js:5873-5891): an update marked read by a swipe, handed back to the
    previous screen on back (FeedBlock_Updates, Updates_SingleList read it). */
export interface EntitiesCarousel_SwippedItem {
  /** EntityItemId (Text): the UpdateItemId. */
  EntityItemId: string;
  /** ListPosition: the slide index. */
  ListPosition: number;
}

/** The preload object the callers set (CarouselPreloadedHouseholds, UBTConnect.model.js:16052-16075). */
export type HouseholdPreload = Required<CarouselPreloadedHouseholds>;
