/* OutSystems UI 2.23 structures used by the shared patterns; fields named as in OutSystems, all optional (an omitted
   field takes the record default given in each comment, from OutSystemsUI_2_23.model.js). */

/** CarouselItemsRec (Carousel.ItemsPerSlide): Desktop, Tablet, Phone default 1. */
export interface CarouselItems {
  Desktop?: number;
  Tablet?: number;
  Phone?: number;
}

/** CarouselOptionalConfigsRec: AutoPlay True, Loop True, Padding "", ItemsGap "", StartingPosition 0. */
export interface CarouselOptionalConfigs {
  AutoPlay?: boolean;
  Loop?: boolean;
  Padding?: string;
  ItemsGap?: string;
  StartingPosition?: number;
}

/** SplideConfigsRec (OutSystemsUI_2_23.model.js :2124-2260, SetSplideConfigs input): the Splide options a block sets
    on a Carousel. Texts default "", integers 0, the BooleanTypes texts "unset". */
export interface SplideConfigs {
  role?: string;
  label?: string;
  labelledby?: string;
  rewind?: string;
  speed?: number;
  rewindSpeed?: number;
  rewindByDrag?: string;
  width?: string;
  fixedWidth?: string;
  fixedHeight?: string;
  autoWidth?: string;
  perMove?: number;
  clones?: number;
  cloneStatus?: string;
  paginationDirection?: string;
  easing?: string;
  noDrag?: string;
  flickPower?: number;
  flickMaxPages?: number;
  waitForTransition?: string;
  arrowPath?: string;
  interval?: number;
  pauseOnHover?: string;
  pauseOnFocus?: string;
  resetProgress?: string;
  lazyLoad?: string;
  preloadPages?: number;
  wheel?: string;
  wheelMinThreshold?: number;
  wheelSleep?: number;
  releaseWheel?: string;
  slideFocus?: string;
  focusableNodes?: string;
  isNavigation?: string;
  trimSpace?: string;
  updateOnMove?: string;
  mediaQuery?: string;
  live?: string;
  destroy?: string;
  omitEnd?: string;
}

/* ---- W5-B (DropdownSearch). Records of OutSystemsUI_2_23.model.js (ContactUsDetails raw copy). ---- */
/** DropdownOptionRec (model :1293-): JSON names value / label / image_url_or_class / group_name / description, all "". */
export interface DropdownOption {
  Value?: string;
  Label?: string;
  ImageUrlOrIconClass?: string;
  GroupName?: string;
  Description?: string;
}

/** DropdownOptionalConfigsRec (model :1588-): AllowMultipleSelection False, IsDisabled False, NoResultsText and
    NoOptionsText "There are no options to show.", SearchPrompt "Search...", SanitizeDropdownValues False. */
export interface DropdownOptionalConfigs {
  AllowMultipleSelection?: boolean;
  IsDisabled?: boolean;
  NoResultsText?: string;
  SearchPrompt?: string;
  NoOptionsText?: string;
  SanitizeDropdownValues?: boolean;
}

/* ---- Wave 8 O-B2 (DropdownTags) ---- */
/** DropdownTagsOptionalConfigsRec: the DropdownOptionalConfigs fields without AllowMultipleSelection (DropdownTags
    InternalConfigs, OutSystemsUI_2_23.Interaction.DropdownTags.mvc.js controller :347-375, reads IsDisabled,
    NoResultsText, SearchPrompt, NoOptionsText, SanitizeDropdownValues). */
export type DropdownTagsOptionalConfigs = Omit<DropdownOptionalConfigs, 'AllowMultipleSelection'>;
