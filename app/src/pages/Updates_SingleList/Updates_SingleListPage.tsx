import { FilterSheetIcon } from '@/components/filter/FilterSheetIcon';
import { UpdateListItem } from '@/components/feed/UpdateListItem';
import { BottomBar } from '@/components/layout/BottomBar';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { MainLayoutFixedTitle } from '@/components/layout/MainLayoutFixedTitle';
import { NotificationIcon } from '@/components/notification/NotificationIcon';
import { ShareSheetContainer } from '@/containers/ShareSheet';
import { showUpgradePopUp } from '@/platform/feedback/dialogs/subscription';
import { useFlagOn } from '@/platform/flags/flags';
import { useNotificationIcon } from '@/platform/session/useNotificationIcon';
import { Choice, Type_ShareObject } from '@/shared/UBTConnect/lib/staticEntities';
import { Connect_BottomBar_Items } from '@/shared/UBTConnect_Utils/lib/staticEntities';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { HorizontalTagList } from '@/components/ui/HorizontalTagList';
import { Icon } from '@/components/ui/Icon';
import { Input } from '@/components/ui/Input';
import type { Tag } from '@/shared/UBTConnectLibrary/lib/structures';
import {
  Shape,
  UBT_AlignItems,
  UBT_Color,
  UBT_Display,
  UBT_Icons2,
  UBT_IconsSize,
  UBT_Size,
} from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { Directory_Updates_FilterSheet } from './components/Directory_Updates_FilterSheet';
import { UBT_FlexDirection_Row, UBT_Icons2_Updates } from './components/staticEntities';
import { UpdateItem_Header } from './components/UpdateItem_Header';
import { UpdatesList } from './components/UpdatesList';
import { useUpdatesSingleList } from './hooks/useUpdatesSingleList';
import { osDateInput } from './hooks/updatesSingleListState';

/** @origin UBTConnect.Directory_Updates.Updates_SingleList
    The Updates route: Layout_MainPages_FixedTitle (gray) with the title "Updates" (after a scroll with the search
    toggled: the back arrow and the post-scroll search input), the search and filter icons once the header scrolled,
    the notification bell, the pre-scroll search input and filter icon, the type tags and the list header as header
    content, the update list, the bottom bar and CommonUI. Outside the layout: Directory_Updates_FilterSheet and the
    share sheet of an update. The flows are in useUpdatesSingleList; the flags are read here. */
export default function Updates_SingleList() {
  const notificationIcon = useNotificationIcon(); // the flows of App_NotificationIcon
  const flags = {
    carousel: useFlagOn('C2EnableCarousel'), // GetHasCarouselEnabled (default-only, on)
    extendedShare: useFlagOn('C2ExtendedShare'), // GetHasExtendedShare (default-only, on)
  };
  const {
    state: v,
    onHeaderScrolled,
    onSearchSubmit,
    onSearchClear,
    onSearchChange,
    onToggleSearch,
    onFilterTypeChanged,
    onMarkAllAsRead,
    onUpdateListHeader,
    onItemClick,
    onItemShare,
    onItemMarkAsRead,
    onItemMarkAsUnread,
    onApplyFilters,
    onFilterSheetLoaded,
    onFilterSheetInitialized,
    onShareSheetClosed,
  } = useUpdatesSingleList(flags);

  const searchOptions = {
    InitalString: v.currentSearchString,
    SearchPrompt: 'Search updates',
    Debounce_DelayMS: 300,
    BorderRadius: Shape.Rounded,
    EnableAutocompleteHTML: false,
    IsSyncValueWithInput: true,
  };
  const filterIcon = (id: string) => (
    <FilterSheetIcon
      id={id}
      haveFiltersApplied={v.hasFiltersApplied}
      isLoaded={v.bottomSheetId_IsLoaded}
      bottomSheetId={v.filter_BottomSheetId}
      showSubscriptionOnClick={v.bottomSheetId_ShowSubscription}
      onShowUpgradePopUp={showUpgradePopUp}
    />
  );
  const tags: Tag[] = v.filter_UpdateTypeOptions.map((o) => ({
    Text: o.text,
    Identifier: o.identifier,
    IconId: '',
    IsSelected: o.isSelected,
    Enabled: true,
  }));

  return (
    <>
      <MainLayoutFixedTitle
        id="$b1"
        isGrayBackground
        onOnHeaderScrolled={onHeaderScrolled}
        placeholderHeaderTitle={
          v.isToggleSearch && v.isHeaderScrolled ? (
            <CustomContainer
              extendedClasses="full-width"
              options={{
                DisplayOptions: {
                  Display: UBT_Display.Flex,
                  AlignItems: UBT_AlignItems.Center,
                  FlexDirection: UBT_FlexDirection_Row,
                },
              }}
            >
              <Icon
                inIconId={UBT_Icons2.ArrowLeftAlt}
                inExtendedClasses="margin-right-s"
                inColorId={UBT_Color.Neutral0}
                inSizeId={UBT_IconsSize.Base_24}
                onClick={onToggleSearch}
              />
              <Input
                id="Search_PostScroll"
                inOptions={searchOptions}
                onEventSubmit={onSearchSubmit}
                onEventClearString={onSearchClear}
                onEventOnChange={(text) => {
                  onSearchChange(text, false);
                }}
              />
            </CustomContainer>
          ) : (
            'Updates'
          )
        }
        placeholderHeaderRight={
          <>
            {v.isHeaderScrolled && (
              <>
                {!v.isToggleSearch && (
                  <Icon
                    id="Icon_Search"
                    inSizeId={UBT_IconsSize.Base_24}
                    inIconId={UBT_Icons2_Updates.Search}
                    inColorId={UBT_Color.Neutral0}
                    onClick={onToggleSearch}
                  />
                )}
                {filterIcon('Icon_FilterSheet_PostScroll')}
              </>
            )}
            <NotificationIcon id="$b7" {...notificationIcon} />
          </>
        }
        placeholderHeaderInput={
          <Input
            id="Search_PreScroll"
            inOptions={searchOptions}
            onEventClearString={onSearchClear}
            onEventOnChange={(text) => {
              onSearchChange(text, true);
            }}
            onEventSubmit={onSearchSubmit}
          />
        }
        placeholderHeaderInputIcon={filterIcon('Icon_FilterSheet_PreScroll')}
        headerContent={
          <>
            <CustomContainer
              id="$b10"
              options={{
                Background: { BackgroundColor: UBT_Color.Neutral0 },
                PaddingSize: { VerticalSizeId: UBT_Size.Small, HorizontalSizeId: UBT_Size.Base },
                MarginSize: { TopSizeId: UBT_Size.Base },
              }}
            >
              <HorizontalTagList id="$b11" inIsSingleSelection inTagToggleList={tags} onChanged={onFilterTypeChanged} />
            </CustomContainer>
            <UpdateItem_Header
              id="ListHeader"
              scope="b12"
              isLoading={v.isLoading}
              showMarkAll={v.showMarkAll}
              badgeNumber={v.currentBreakpoint.badgeCount}
              title={v.currentBreakpoint.sectionName}
              onClickMarkAll={onMarkAllAsRead}
            />
          </>
        }
        content={
          <UpdatesList
            items={v.items}
            isLoading={v.isLoading}
            isDataFetched={v.isDataFetched}
            fetchStatus={v.fetchStatus}
            dateRangesFailed={v.dateRangesFailed}
            breakpoints={v.breakpoints}
            isAscending={v.filter_Updates.sortByNewest !== Choice.Yes}
            onUpdateListHeader={onUpdateListHeader}
            onItemShare={onItemShare}
            onItemClick={onItemClick}
            onItemMarkAsRead={onItemMarkAsRead}
            onItemMarkAsUnread={onItemMarkAsUnread}
          />
        }
        bottom={<BottomBar id="$b18" activeItem={Connect_BottomBar_Items.Updates} isRootPage />}
        placeholderCommonUIInsideLayout={<CommonUiLayout id="$b19" />}
      />
      <Directory_Updates_FilterSheet
        id="$b20"
        inFilterUpdates={v.filter_Updates}
        onApplyFilters={onApplyFilters}
        onLoaded={onFilterSheetLoaded}
        onSheetInitialized={onFilterSheetInitialized}
      />
      <ShareSheetContainer
        id="$b21"
        inShareObjectTypeId={Type_ShareObject.Update}
        inUpdateType={v.shareableUpdateItem.updateItemTypeId}
        inIsOpen={v.isShareOpen}
        inUpdateDate={osDateInput(v.shareableUpdateItem.date)}
        inShareableObjectId={v.shareableObjectId}
        onEventClosedShareSheet={onShareSheetClosed}
      >
        <UpdateListItem
          inName={v.shareableUpdateItem.name}
          hasBorderBottom={false}
          inDate={v.shareableUpdateItem.date}
          isEnabled={false}
          inTypeUpdateFeedItem={v.shareableUpdateItem.updateItemTypeId}
          showImage={false}
          inInitialsList={[{ Gender: v.shareableUpdateItem.genderId }]}
          ignoreReadBackground
          inBirthType={v.shareableUpdateItem.birthType}
          inLocation={v.shareableUpdateItem.locationString}
          inParentsNames={v.shareableUpdateItem.parentsNames}
          inIsRead={false}
        />
      </ShareSheetContainer>
    </>
  );
}
