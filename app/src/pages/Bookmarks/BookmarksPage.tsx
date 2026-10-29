import { BottomBar } from '@/components/layout/BottomBar';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { MainLayoutFixedTitle } from '@/components/layout/MainLayoutFixedTitle';
import { NotificationIcon } from '@/components/notification/NotificationIcon';
import { FilterSheet_Icon_Label } from '@/components/filter/FilterSheetIconLabel';
import { Horizontal_Filter_TagList } from '@/components/filter/HorizontalFilterTagList';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { Icon } from '@/components/ui/Icon';
import { Input } from '@/components/ui/Input';
import { showUpgradePopUp } from '@/platform/feedback/dialogs/subscription';
import { useNotificationIcon } from '@/platform/session/useNotificationIcon';
import { UBT_Color, UBT_Shape, UBT_Size } from '@/lib/ubtConnectLibrary/staticEntities';
import { Connect_BottomBar_Items } from '@/lib/ubtConnectUtils/staticEntities';
import { Bookmarks_Card_List } from './components/Bookmarks_Card_List';
import { Bookmarks_FilterSheet } from './components/Bookmarks_FilterSheet';
import { useBookmarks } from './hooks/useBookmarks';

const UBT_Icons2_Search = 'connect-icon-search';

/** @origin UBTConnect.Bookmarks.Bookmarks
    The Bookmarks route (bottom bar, no condition on TST: BottomBarMenu.mvc.js:623-626): Layout_MainPages_FixedTitle
    (gray) with the title "Bookmarks", the search icon once the header scrolled, the notification bell, the search input,
    the category pills with the filter label as header content, the bookmark cards, the bottom bar and CommonUI.
    Outside the layout: Bookmarks_FilterSheet. The flows are in useBookmarks. */
export default function Bookmarks() {
  const notificationIcon = useNotificationIcon(); // the flows of App_NotificationIcon
  const { state: v, ...f } = useBookmarks();

  return (
    <>
      <MainLayoutFixedTitle
        id="$b1"
        isGrayBackground
        onOnHeaderScrolled={f.onHeaderScrolled}
        placeholderHeaderTitle="Bookmarks"
        placeholderHeaderRight={
          <>
            {v.headerIsScrolled && (
              <Icon id="$b2" inColorId={UBT_Color.Neutral0} inIconId={UBT_Icons2_Search} onClick={f.onScrollToTop} />
            )}
            <NotificationIcon id="$b3" {...notificationIcon} />
          </>
        }
        placeholderHeaderInput={
          <Input
            id="$b4"
            inOptions={{
              IsEnabled: true, // Bookmarks sets no IsEnabled (Bookmarks.mvc.js pretty:295-307): the record default
              InitalString: v.bookmarksFilter.searchText, // Bookmarks_Filter.SearchText (pretty:302), as Notes
              MaxLength: 50,
              SearchPrompt: 'Search',
              Debounce_DelayMS: 200,
              BorderRadius: UBT_Shape.Rounded,
              EnableAutocompleteHTML: false,
            }}
            onEventOnChange={f.onSearchChange}
            onEventClearString={f.onSearchClear}
            onEventSubmit={f.onSearchSubmit}
          />
        }
        headerContent={
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
              id="$b6"
              inIsSingleSelection
              inTagsLoading={!v.pillsLoaded}
              inTagToggleList={v.bookmarkPills}
              onChanged={f.onClickPill}
              filter={
                <FilterSheet_Icon_Label
                  id="$b7"
                  showSubscriptionOnClick={v.bottomSheetIdFilterShowSubscription}
                  haveFiltersApplied={v.hasFiltersApplied}
                  bottomSheetId={v.filterBottomSheetId}
                  isLoaded={!v.bookmarksLoading}
                  onShowUpgradePopUp={showUpgradePopUp}
                />
              }
            />
          </CustomContainer>
        }
        content={
          <Bookmarks_Card_List
            id="$b8"
            inIsLoading={v.bookmarksLoading}
            inBookmarks={v.bookmarksList}
            inSearchString={v.bookmarksFilter.searchText}
            onOnClickBookmarkCardItem={f.onClickBookmarkCardItem}
            onItemUnbookmarked={f.onItemUnbookmarked}
            unbookmark={f.unbookmark}
            onOnLoadMore={f.onLoadMore}
          />
        }
        bottom={<BottomBar id="$b9" activeItem={Connect_BottomBar_Items.Bookmarks} />}
        placeholderCommonUIInsideLayout={<CommonUiLayout id="$b10" />}
      />
      <Bookmarks_FilterSheet
        id="$b11"
        inFilterBookmarks={v.bookmarksFilter}
        inYearsOptions={v.years}
        onSheetInilialized={f.onFilterSheetInitialized}
        onLoaded={f.onFilterSheetLoaded}
        onApplyFilters={f.onApplyFilters}
      />
    </>
  );
}
