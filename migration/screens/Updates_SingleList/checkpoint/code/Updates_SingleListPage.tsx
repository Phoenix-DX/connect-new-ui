import { FilterSheet_Icon_Label } from '@/components/filter/FilterSheetIconLabel';
import { Horizontal_Filter_TagList } from '@/components/filter/HorizontalFilterTagList';
import { UpdateListItem } from '@/components/feed/UpdateListItem';
import { BottomBar } from '@/components/layout/BottomBar';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { MainLayoutFixedTitle } from '@/components/layout/MainLayoutFixedTitle';
import { NotificationIcon } from '@/components/notification/NotificationIcon';
import { ShareSheetContainer } from '@/containers/ShareSheet';
import { useFlagOn } from '@/platform/flags/flags';
import { useNotificationIcon } from '@/platform/session/useNotificationIcon';
import { Choice, Type_ShareObject } from '@/lib/ubtConnect/staticEntities';
import { Connect_BottomBar_Items } from '@/lib/ubtConnectUtils/staticEntities';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { Icon } from '@/components/ui/Icon';
import { Input } from '@/components/ui/Input';
import type { Tag } from '@/lib/ubtConnectLibrary/structures';
import {
  Shape,
  UBT_AlignItems,
  UBT_Color,
  UBT_Display,
  UBT_Icons2,
  UBT_IconsSize,
  UBT_Size,
} from '@/lib/ubtConnectLibrary/staticEntities';
import { Directory_Updates_FilterSheet } from './components/Directory_Updates_FilterSheet';
import { UBT_FlexDirection_Row, UBT_Icons2_Updates } from './components/staticEntities';
import { UpdateItem_Header } from './components/UpdateItem_Header';
import { UpdatesList } from './components/UpdatesList';
import { useUpdatesSingleList } from './hooks/useUpdatesSingleList';
import { osDateInput } from './hooks/updatesSingleListState';

/** @origin UBTConnect.Directory_Updates.Updates_SingleList
    The Updates route: Layout_MainPages_FixedTitle (gray) with the title "Updates" (after a scroll with the search
    toggled: the back arrow and the post-scroll search input), the search icon once the header scrolled, the
    notification bell, the pre-scroll search input, the "Filter" label with the type tags (Horizontal_Filter_TagList in
    FilterPills, TST 2026-11-07: Updates_SingleList.mvc@857c68f9.js:573-723) and the list header as header content, the
    update list, the bottom bar and CommonUI. Outside the layout: Directory_Updates_FilterSheet and the
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
            {v.isHeaderScrolled && !v.isToggleSearch && (
              <Icon
                id="Icon_Search"
                inSizeId={UBT_IconsSize.Base_24}
                inIconId={UBT_Icons2_Updates.Search}
                inColorId={UBT_Color.Neutral0}
                onClick={onToggleSearch}
              />
            )}
            <NotificationIcon id="$b6" {...notificationIcon} />
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
        headerContent={
          <>
            <CustomContainer
              id="$b8"
              options={{
                Background: { BackgroundColor: UBT_Color.Neutral0 },
                PaddingSize: {},
                MarginSize: { TopSizeId: UBT_Size.Base },
              }}
            >
              <CustomContainer
                id="FilterPills"
                extendedClasses="background-neutral-0"
                options={{
                  PaddingSize: { VerticalSizeId: UBT_Size.ExtraSmall, HorizontalSizeId: UBT_Size.Base },
                  MarginSize: { TopSizeId: UBT_Size.Base },
                  DisplayOptions: {},
                }}
              >
                <Horizontal_Filter_TagList
                  id="$b10"
                  inIsSingleSelection
                  inTagsLoading={!v.pillsLoaded && v.isLoading}
                  inTagToggleList={tags}
                  onChanged={onFilterTypeChanged}
                  filter={
                    <FilterSheet_Icon_Label
                      id="$b11"
                      haveFiltersApplied={v.hasFiltersApplied}
                      showSubscriptionOnClick={false}
                      isLoaded
                      bottomSheetId={v.filter_BottomSheetId}
                    />
                  }
                />
              </CustomContainer>
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
