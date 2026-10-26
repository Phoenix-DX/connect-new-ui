/** @origin UBTConnect.App_CommonBlocks_Filter.FilterSheet */
import type { CacheControl_AllLocalities as AllLocalities } from '@/lib/ubtConnectUtils/structures';
import type { Filter_Common_Control_List, FilterSheetCountry, FilterSheetSubscription, OptionControl } from './types';

/* The constants, the helpers and the variables record of the FilterSheet block. The actions: filterSheetActions.ts. */

export const SUBSTATE_MAIN = '';
export const SUBSTATE_LOCALITIES = 'Localities';
export const SUBSTATE_COUNTRIES = 'Countries';
export const SORTBY_TITLE = 'Sort by';
export const sameId = (a = '', b = '') => a.trim().toUpperCase() === b.trim().toUpperCase();
export const clone = <T>(value: T): T => structuredClone(value);
export const same = (a: unknown, b: unknown) => JSON.stringify(a) === JSON.stringify(b);
export const emptyControl = (): OptionControl => ({
  OptionList_Control: [],
  OptionChoice_Control: [],
  OptionFlatList_Control: [],
});
export const isFetched = (x: { isFetched: boolean }) => x.isFetched; // read through a call: the original condition is kept as is
export const byOrder = <T extends { Order?: number }>(list: T[]) =>
  [...list].sort((a, b) => (a.Order ?? 0) - (b.Order ?? 0));

/** Block variables (FilterSheet.mvc.js model :13-77). Records are values in OutSystems: assignments clone. */
export interface Vars {
  bottomSheetId: string;
  subStateSelected: string;
  optionListSelected: Filter_Common_Control_List;
  countries: { list: FilterSheetCountry[]; isFetched: boolean };
  localities: { list: AllLocalities['LocalityList']['List']; isFetched: boolean };
  user: { subscription?: FilterSheetSubscription; isFetched: boolean };
  optionControl: OptionControl;
  lastSearched: OptionControl;
  empty: OptionControl;
  isSingleFilter: boolean;
  isOpenLocal: boolean;
  searchInputId: string;
  forceUpdateOptionList: boolean;
}
