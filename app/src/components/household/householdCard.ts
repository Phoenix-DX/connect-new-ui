import type { UI_Household_Card_Content, UI_Screen_HouseholdDetails } from '@/lib/ubtConnect/structures';

/** The expressions of the household card that the view and the flows of the household details share.
    @origin UBTConnect.Directory_Household.HouseholdDetails_Block */

/** The identifiers of the two tags of the card (block variables TagsList_Id_About and TagsList_Id_Photos). */
export const HOUSEHOLD_TAG_ABOUT = 'About';
export const HOUSEHOLD_TAG_PHOTOS = 'Photos';

/** The card content of a household record (the default record when it is missing). */
export const cardContent = (household: UI_Screen_HouseholdDetails): UI_Household_Card_Content =>
  household.HouseholdCard?.Household_Card_Content ?? {};

/** A deceased or ancestry household: its links are disabled and they do not navigate. */
export function isDeceasedOrAncestry(content: UI_Household_Card_Content): boolean {
  return content.DisplayOptions?.IsDeceased === true || content.DisplayOptions?.IsAncestry === true;
}

/** A household that is not hidden, not deceased and not an ancestry: the card shows its photo and its address, and
    the Photos tag is enabled. */
export function isShownHousehold(content: UI_Household_Card_Content): boolean {
  const d = content.DisplayOptions ?? {};
  return d.IsHidden !== true && d.IsDeceased !== true && d.IsAncestry !== true;
}
