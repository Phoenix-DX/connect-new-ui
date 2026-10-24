import { useCommunityPopulationQuery } from '@/api/member';
import { DirectoryLegendSheet } from '@/components/directory/DirectoryLegendSheet';
import { BottomBar } from '@/components/layout/BottomBar';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { MainLayout } from '@/components/layout/MainLayout';
import { NotificationIcon } from '@/components/notification/NotificationIcon';
import { PreventBackNavigation } from '@/platform/navigation/PreventBackNavigation';
import { useNotificationIcon } from '@/platform/session/useNotificationIcon';
import { CacheControl_UserInfo_Wrapper } from '@/shared/UBTConnect/CacheControl_UserInfo_Wrapper';
import { StaticInput } from '@/components/ui/StaticInput';
import { Connect_BottomBar_Items } from '@/shared/UBTConnect_Utils/lib/staticEntities';
import { CountryListContent } from './components/CountryListContent';
import { useCountryList } from './hooks/useCountryList';

/** @origin UBTConnect.Directory_Locality.CountryList
    The Directory tab: the main layout "Directory" with the notification icon and the search input in the header, the
    user's locality and country cards, the community population, and the countries with their statistics. A country
    opens CountryDetails when the subscription covers it, else the upgrade pop-up. The flows are in useCountryList.
    Captured dom/default.html, loading.html and offline.html. */
export default function CountryList() {
  // The flows of App_NotificationIcon and FeedBlock_CommunityPopulation (DataActionFetchCount).
  const notificationIcon = useNotificationIcon();
  const communityPopulation = useCommunityPopulationQuery();
  const {
    state,
    onSearchClicked,
    onMyLocalityClicked,
    onMyCountryClicked,
    onCommunityPopulationClicked,
    onLegendInfoClicked,
    onCountryClicked,
    onUserInfo,
    onLegendSheetInitialized,
  } = useCountryList();

  return (
    <>
      <MainLayout
        id="$b1"
        addHeaderGap={false}
        isGrayBackground
        placeholderHeaderTitle="Directory"
        placeholderHeaderRight={<NotificationIcon id="$b2" {...notificationIcon} />}
        placeholderHeaderInput={
          <StaticInput id="$b3" inPrompt="Search any member or location" onClickInput={onSearchClicked} />
        }
        content={
          <CountryListContent
            user={state.user}
            countries={state.countries}
            fetchStatus={state.fetchStatus}
            isListLoading={!(state.isDataFetched || state.hasFetchError)}
            isCommunityPopulationLoading={communityPopulation.isPending}
            communityPopulationTotal={communityPopulation.data ?? '0'}
            onMyLocalityClicked={onMyLocalityClicked}
            onMyCountryClicked={onMyCountryClicked}
            onCommunityPopulationClicked={onCommunityPopulationClicked}
            onLegendInfoClicked={onLegendInfoClicked}
            onCountryClicked={onCountryClicked}
          />
        }
        bottom={<BottomBar id="$b25" activeItem={Connect_BottomBar_Items.Directory} isRootPage />}
        placeholderCommonUIInsideLayout={<CommonUiLayout id="$b26" />}
      />
      <CacheControl_UserInfo_Wrapper id="$b27" onResult={onUserInfo} />
      {/* No ShowLocalities: CountryList passes no input, so the default True of the block applies. */}
      <DirectoryLegendSheet
        id="$b28"
        onSheetInitialized={onLegendSheetInitialized}
        preventBackNavigation={PreventBackNavigation}
      />
    </>
  );
}
