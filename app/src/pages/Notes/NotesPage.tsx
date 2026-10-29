import { BottomBar } from '@/components/layout/BottomBar';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { MainLayoutFixedTitle } from '@/components/layout/MainLayoutFixedTitle';
import { NotificationIcon } from '@/components/notification/NotificationIcon';
import { useNotificationIcon } from '@/platform/session/useNotificationIcon';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { Icon } from '@/components/ui/Icon';
import { Input } from '@/components/ui/Input';
import { FilterSheet_Icon_Label } from '@/components/filter/FilterSheetIconLabel';
import { Horizontal_Filter_TagList } from '@/components/filter/HorizontalFilterTagList';
import { showUpgradePopUp } from '@/platform/feedback/dialogs/subscription';
import { UBT_Color, UBT_Shape, UBT_Size } from '@/lib/ubtConnectLibrary/staticEntities';
import { NoteCard_List } from './components/NoteCard_List';
import { Notes_FilterSheet } from './components/Notes_FilterSheet';
import { UBT_Icons2_Search } from './components/staticEntities';
import { useNotes } from './hooks/useNotes';

/** @origin UBTConnect.Notes.Notes
    The My Notes route: Layout_MainPages_FixedTitle (gray) with the title "My Notes", the search icon once the header
    scrolled, the notification bell, the search input (enabled, with the search term as InitalString: TST
    2026-10-29, Notes.mvc.js:293-308), the category pills with the filter label as header content, the
    note cards, the bottom bar and CommonUI. Outside the layout: Notes_FilterSheet, once OnInitialize has ended. The
    flows are in useNotes. */
export default function Notes() {
  const notificationIcon = useNotificationIcon(); // the flows of App_NotificationIcon
  const {
    state: v,
    onHeaderScrolled,
    onScrollToTop,
    onSearchChange,
    onSearchClear,
    onSearchSubmit,
    onClickPill,
    onApplyFilters,
    onLoadMore,
    onClickNoteCardItem,
    onFilterSheetInitialized,
    onFilterSheetLoaded,
  } = useNotes();

  return (
    <>
      <MainLayoutFixedTitle
        id="$b1"
        isGrayBackground
        onOnHeaderScrolled={onHeaderScrolled}
        placeholderHeaderTitle="My Notes"
        placeholderHeaderRight={
          <>
            {v.headerIsScrolled && (
              <Icon id="$b2" inColorId={UBT_Color.Neutral0} inIconId={UBT_Icons2_Search} onClick={onScrollToTop} />
            )}
            <NotificationIcon id="$b3" {...notificationIcon} />
          </>
        }
        placeholderHeaderInput={
          <Input
            id="$b4"
            inOptions={{
              InitalString: v.notesFilter.searchTerm,
              MaxLength: 50,
              SearchPrompt: 'Search',
              Debounce_DelayMS: 200,
              BorderRadius: UBT_Shape.Rounded,
              EnableAutocompleteHTML: false,
            }}
            onEventOnChange={onSearchChange}
            onEventClearString={onSearchClear}
            onEventSubmit={onSearchSubmit}
          />
        }
        headerContent={
          <CustomContainer
            id="Filter_Pills"
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
              inTagToggleList={v.notePills}
              onChanged={onClickPill}
              filter={
                <FilterSheet_Icon_Label
                  id="$b7"
                  showSubscriptionOnClick={v.bottomSheetIdFilterShowSubscriptionOnClick}
                  haveFiltersApplied={v.hasFiltersApplied}
                  bottomSheetId={v.filterBottomSheetId}
                  isLoaded
                  onShowUpgradePopUp={showUpgradePopUp}
                />
              }
            />
          </CustomContainer>
        }
        content={
          <NoteCard_List
            id="$b8"
            inIsLoading={v.notesLoading}
            inNotes={v.notesList}
            inSearchString={v.notesFilter.searchTerm}
            onOnClickNoteCardItem={onClickNoteCardItem}
            onOnLoadMore={onLoadMore}
          />
        }
        bottom={<BottomBar id="$b9" />}
        placeholderCommonUIInsideLayout={<CommonUiLayout id="$b10" />}
      />
      {v.isInitialized && (
        <Notes_FilterSheet
          id="$b11"
          inFilterNotes={v.notesFilter}
          inYearsOptions={v.years}
          onSheetInilialized={onFilterSheetInitialized}
          onLoaded={onFilterSheetLoaded}
          onApplyFilters={onApplyFilters}
        />
      )}
    </>
  );
}
