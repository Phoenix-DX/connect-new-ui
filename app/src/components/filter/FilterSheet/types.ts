import type { CacheControl_AllCountriesRec as AllCountries } from '@/legacy/os/cache/AllCountriesCacheControl';
import type {
  CacheControl_AllLocalities as AllLocalities,
  Directory_UserCurrent,
} from '@/lib/ubtConnectUtils/structures';
import type { Filter_Common_Control_Choice, Filter_Common_Control_List } from '@/lib/ubtConnect/structures';

export type {
  Filter_Common,
  Filter_Common_Control_Choice,
  Filter_Common_Control_List,
  Filter_Common_Options,
} from '@/lib/ubtConnect/structures';

/** The anonymous record OptionControl / LastSearched_OptionControl / Empty_OptionControl. */
export interface OptionControl {
  OptionList_Control: Filter_Common_Control_List[];
  OptionChoice_Control: Filter_Common_Control_Choice[];
  OptionFlatList_Control: Filter_Common_Control_List[];
}

/** The country rows of the CacheControl_AllCountries Result. */
export type FilterSheetCountry = AllCountries['CountryList']['List'][number];
/** The locality rows of the CacheControl_AllLocalities Result. */
export type FilterSheetLocality = AllLocalities['LocalityList']['List'][number];
/** The subscription of the user information (CacheControl_UserInfo_Wrapper Result): the only part the block reads. */
export type FilterSheetSubscription = Directory_UserCurrent['Directory_UserCurrent_Subscription'];
/** The back-navigation event of the BackNavigationHandler block: the sheet prevents the navigation when it is open. */
export interface FilterSheetBackNavigationEvent {
  preventDefault(): void;
}
