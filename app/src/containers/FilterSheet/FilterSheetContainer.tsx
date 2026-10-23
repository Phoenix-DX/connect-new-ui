import { useState } from 'react';
import {
  FilterSheet,
  type FilterSheetCountry,
  type FilterSheetLocality,
  type FilterSheetProps,
  type FilterSheetSubscription,
} from '@/components/filter/FilterSheet';
import { showUpgradePopUp } from '@/platform/feedback/dialogs/subscription';
import { BackNavigationHandler } from '@/platform/navigation/BackNavigationHandler';
import { CacheControl_AllCountries } from '@/shared/UBTConnect_Utils/CacheControl_AllCountries';
import { CacheControl_AllLocalities } from '@/shared/UBTConnect_Utils/CacheControl_AllLocalities';
import { CacheControl_UserInfo_Wrapper } from '@/shared/UBTConnect/CacheControl_UserInfo_Wrapper';

/** The inputs and events of FilterSheet. The container gives the data, the cache blocks, the back navigation and the
    upgrade popup. */
export type FilterSheetContainerProps = Omit<
  FilterSheetProps,
  'countries' | 'localities' | 'userSubscription' | 'cacheBlocks' | 'renderBackNavigationHandler' | 'onShowUpgradePopUp'
>;

/** The filter sheet of the list screens (CountryDetails, Notes, Search, Updates_SingleList) with its data and platform
    blocks. It renders the props-only FilterSheet and gives it:
    - the cache blocks of the place filters, as the block had them: CacheControl_AllCountries (HasCountries),
      CacheControl_AllLocalities (HasLocalities) and CacheControl_UserInfo_Wrapper (either). Their Results become the
      props `countries`, `localities` and `userSubscription`;
    - the BackNavigationHandler block with the sheet's handler;
    - App_Subscription_ShowUpgradePopUp for a disabled option.
    Plan v2 §2.3 criterion 2: three data sources and three events, and the sheet is over 200 lines.
    @origin UBTConnect.App_CommonBlocks_Filter.FilterSheet */
export function FilterSheetContainer(props: FilterSheetContainerProps) {
  const [countries, setCountries] = useState<FilterSheetCountry[]>();
  const [localities, setLocalities] = useState<FilterSheetLocality[]>();
  const [userSubscription, setUserSubscription] = useState<FilterSheetSubscription>();
  const hasCountries = props.inOptions?.HasCountries?.Enable ?? false;
  const hasLocalities = props.inOptions?.HasLocalities?.Enable ?? false;
  return (
    <FilterSheet
      {...props}
      countries={countries}
      localities={localities}
      userSubscription={userSubscription}
      onShowUpgradePopUp={showUpgradePopUp}
      cacheBlocks={
        <>
          {hasCountries && (
            <CacheControl_AllCountries
              onResult={(response) => {
                setCountries(response.CountryList.List);
              }}
            />
          )}
          {hasLocalities && (
            <CacheControl_AllLocalities
              onResult={(response) => {
                setLocalities(response.LocalityList.List);
              }}
            />
          )}
          {(hasCountries || hasLocalities) && (
            <CacheControl_UserInfo_Wrapper
              onResult={(userInformation) => {
                setUserSubscription(userInformation.Directory_UserCurrent_Subscription);
              }}
            />
          )}
        </>
      }
      renderBackNavigationHandler={(onBackNavigation) => <BackNavigationHandler onBackNavigation={onBackNavigation} />}
    />
  );
}
