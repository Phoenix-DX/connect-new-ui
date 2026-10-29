import { BottomBar } from '@/components/layout/BottomBar';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { MainPagesUpgradeLayout } from '@/components/layout/MainPagesUpgradeLayout';
import { Badge } from '@/components/ui/Badge';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { EmptyState } from '@/components/ui/EmptyState';
import { Icon } from '@/components/ui/Icon';
import { Input } from '@/components/ui/Input';
import {
  Shape,
  UBT_AlignItems,
  UBT_Color,
  UBT_Display,
  UBT_Icons2,
  UBT_IconsSize,
  UBT_Size,
} from '@/lib/ubtConnectLibrary/staticEntities';
import { useNavigateBack } from '@/platform/navigation';
import { Notifications_MoreActionSheet } from './components/MoreActionSheet';
import { NotificationsListBreakpoints } from './components/NotificationsListBreakpoints';
import { Notifications_Action } from './components/Notifications_Action';
import { Notifications_NoItemsFound } from './components/Notifications_NoItemsFound';
import { Notifications_SortSheet } from './components/SortSheet';
import { UBT_Color_RedDark, UBT_Icons2_Notifications } from './components/staticEntities';
import { useNotifications } from './hooks/useNotifications';

/** UBTConnect.uBT_FlexDirection row (TST): not in the shared constants; written as the shared RowReverse is. */
const FlexDirection_Row = 'flex-direction-row';

/** @origin UBTConnect.App_Notifications.Notifications
    The notification list of the signed-in user: Layout_MainPages_Upgrade with the title and its badge, the kebab
    button and the search input in the header, the sort row and the list grouped by date range in the content, and the
    sort sheet and the more-actions sheet. When the header is scrolled, a search icon opens a second search input in
    the title (the first one shows only before the scroll). TST publish of 2026-10-27: the Badge shows ReadCount, an
    empty search result shows EmptyList, and the list, the switch and the sheets raise the new events (read count,
    only unread, mark all as read, delete all). The flows are in useNotifications. */
export default function Notifications() {
  const {
    state: v,
    onHeaderScrolled,
    onToggleSearch,
    onFilterSearchText,
    onChangeSearchInput,
    onKebab,
    onApplyFilters,
    onOnlyShowUnread,
    onUpdateReadCount,
    onMarkAllAsRead,
    onDeleteAll,
    onFilterSheetInitialized,
    onMoreActionSheetInitialized,
    onNotificationDetail,
  } = useNotifications();
  const navigateBack = useNavigateBack();

  const searchOptions = {
    InitalString: v.currentSearchString,
    SearchPrompt: 'Search notifications',
    Debounce_DelayMS: 300,
    BorderRadius: Shape.Rounded,
    EnableAutocompleteHTML: false,
    IsSyncValueWithInput: true,
  };
  const titleWithBadge = (id: string) => (
    <>
      Notifications
      <Badge id={id} size={UBT_Size.ExtraSmall} color={UBT_Color_RedDark} number={String(v.readCount)} maxNumber={9} />
    </>
  );
  const kebab = (id: string) => (
    <Icon
      id={id}
      inSizeId={UBT_IconsSize.Base_24}
      inIconId={UBT_Icons2_Notifications.MoreVertical}
      inColorId={UBT_Color.Neutral0}
      onClick={onKebab}
    />
  );
  return (
    <>
      <MainPagesUpgradeLayout
        isGrayBackground
        onBack={navigateBack}
        onOnHeaderScrolled={onHeaderScrolled}
        placeholderHeaderTitle={
          !v.isToggleSearch ? (
            titleWithBadge('$b5')
          ) : v.isHeaderScrolled ? (
            <CustomContainer
              extendedClasses="full-width"
              options={{
                DisplayOptions: {
                  Display: UBT_Display.Flex,
                  AlignItems: UBT_AlignItems.Center,
                  FlexDirection: FlexDirection_Row,
                },
              }}
            >
              <Icon
                inColorId={UBT_Color.Neutral0}
                inIconId={UBT_Icons2.ArrowLeftAlt}
                inSizeId={UBT_IconsSize.Base_24}
                onClick={onToggleSearch}
              />
              <Input
                id="Search_PostScroll"
                inOptions={searchOptions}
                onEventClearString={() => {
                  onFilterSearchText('');
                }}
                onEventSubmit={onFilterSearchText}
                onEventOnChange={(text) => {
                  onChangeSearchInput(text, false);
                }}
              />
            </CustomContainer>
          ) : (
            titleWithBadge('$b4')
          )
        }
        placeholderHeaderRight={
          v.isHeaderScrolled ? (
            <>
              {!v.isToggleSearch && (
                <Icon
                  id="Icon_Search"
                  inSizeId={UBT_IconsSize.Base_24}
                  inColorId={UBT_Color.Neutral0}
                  inIconId={UBT_Icons2_Notifications.Search}
                  onClick={onToggleSearch}
                />
              )}
              {kebab('Icon_Kebab')}
            </>
          ) : (
            kebab('Icon_Kebab2')
          )
        }
        placeholderHeaderInput={
          !v.isHeaderScrolled && (
            <Input
              id="Search_PreScroll"
              inOptions={searchOptions}
              onEventOnChange={(text) => {
                onChangeSearchInput(text, true);
              }}
              onEventClearString={() => {
                onFilterSearchText('');
              }}
              onEventSubmit={onFilterSearchText}
            />
          )
        }
        headerContent={
          <Notifications_Action
            id="Notifications_Action"
            haveFiltersApplied={v.hasFiltersApplied}
            bottomSheetId={v.filter_BottomSheetId}
            isLoaded
            showSubscriptionOnClick={v.bottomSheetId_ShowSubscription}
            onOnlyShowUnread={onOnlyShowUnread}
          />
        }
        content={
          !v.isLoading && v.isDataFetched && v.items.length === 0 ? (
            v.selectedHistorySearch !== '' ? (
              <CustomContainer
                id="$b12"
                options={{
                  Background: { BackgroundColor: UBT_Color.Neutral0 },
                  PaddingSize: { GeneralSizeId: UBT_Size.Small },
                }}
              >
                <EmptyState
                  id="$b13"
                  iconId={UBT_Icons2_Notifications.Search}
                  title={`No results found for '${v.selectedHistorySearch}'`}
                  text="Sorry, we couldn't find any results for your search. Please check your spelling or try different keywords."
                />
              </CustomContainer>
            ) : (
              <Notifications_NoItemsFound id="$b14" />
            )
          ) : (
            <NotificationsListBreakpoints
              id="$b15"
              breakpoints={v.breakpoints}
              uiNotificationItemList={v.items}
              onNotificationDetail={onNotificationDetail}
              onUpdateReadCount={onUpdateReadCount}
              isLoading={v.isLoading}
            />
          )
        }
        bottom={<BottomBar id="$b19" activeItem="" />}
        placeholderCommonUIInsideLayout={<CommonUiLayout id="$b20" />}
      />
      <Notifications_SortSheet
        id="$b21"
        onSheetInitialized={onFilterSheetInitialized}
        onApplyFilters={onApplyFilters}
      />
      <Notifications_MoreActionSheet
        id="$b22"
        onSheetInitialized={onMoreActionSheetInitialized}
        onApplyFilters={() => {
          onApplyFilters(true);
        }}
        onMarkAllAsRead={onMarkAllAsRead}
        onDeleteAll={onDeleteAll}
      />
    </>
  );
}
