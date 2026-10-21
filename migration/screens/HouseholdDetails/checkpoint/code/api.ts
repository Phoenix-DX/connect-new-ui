import type { HouseholdDetailsInputs } from './types';

/** HouseholdDetails calls no action of its own (controller `dataFetchActionNames = []`, no server action,
    HouseholdDetails.mvc.js:290-292); the shared HouseholdDetails_Block, BottomBarMenu and CommonUI_InsideLayout make
    their own calls. */

const osLongInput = (v: string | null): string => (v === null || v === '' ? '0' : v);

/** HouseholdId (Long Integer) from the query string, OutSystems default 0 when absent (HouseholdDetails.mvc.js:70-74). */
export function readHouseholdDetailsInputs(params: URLSearchParams): HouseholdDetailsInputs {
  return { HouseholdId: osLongInput(params.get('HouseholdId')) };
}
