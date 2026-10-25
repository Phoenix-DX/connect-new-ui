import type { FilterUpdates, UpdateBreakpoint, UpdateItem } from '@/api/update';
import type { Tag } from '@/lib/ubtConnectLibrary/structures';
import type { UpdatesSingleListState } from './updatesSingleListState';

/* The flags and the flows that useUpdatesSingleList gives the page.
   @origin UBTConnect.Directory_Updates.Updates_SingleList */

/** The feature flags that the screen reads. The page reads them (rule 4) and gives them here. */
export interface UpdatesSingleListFlags {
  /** C2EnableCarousel (GetHasCarouselEnabled, default-only, on): an update opens the household carousel. */
  carousel: boolean;
  /** C2ExtendedShare (GetHasExtendedShare, default-only, on): the share action opens the share sheet. */
  extendedShare: boolean;
}

/** What the page renders and the handlers of the events of its blocks. */
export interface UpdatesSingleListFlows {
  /** The screen variables (rendered). */
  state: UpdatesSingleListState;
  /** OnHeaderScrolled of the layout: IsHeaderScrolled. */
  onHeaderScrolled: (isHeaderScrolled: boolean) => void;
  /** Handler_FilterSearchText: the Submit event of both search inputs. */
  onSearchSubmit: (text: string) => void;
  /** Handler_FilterSearchText with an empty text: the ClearString event of both search inputs. */
  onSearchClear: () => void;
  /** Handler_OnChangeSearchInput(Text, In_IsToggleSearch): the OnChange event of the search inputs. */
  onSearchChange: (text: string, inIsToggleSearch: boolean) => void;
  /** Handler_ToggleSearch: the search icon and the back arrow of the scrolled title. */
  onToggleSearch: () => void;
  /** OnChange_FilterType: the Changed event of the type tags. */
  onFilterTypeChanged: (tags: Tag[]) => void;
  /** Handler_MarkAllAsRead: Click_MarkAll of the list header. */
  onMarkAllAsRead: () => void;
  /** Event_UpdateListHeader of a SectionHeader: CurrentBreakpoint. */
  onUpdateListHeader: (breakpoint: UpdateBreakpoint) => void;
  /** Handler_OnClickUpdateItem(In_CurrentItemIndex): the OnClick event of an update. */
  onItemClick: (index: number) => void;
  /** Handler_OnShare: the Event_Share of an update. */
  onItemShare: (item: UpdateItem) => void;
  /** Handler_MarkAsRead(UpdateItemId, CurrentPosition): the Event_MarkAsRead of an update. */
  onItemMarkAsRead: (updateItemId: string, position: number) => void;
  /** Handler_MarkAsUnread(UpdateItemId, CurrentPosition): the Event_MarkAsUnread of an update. */
  onItemMarkAsUnread: (updateItemId: string, position: number) => void;
  /** Handler_ApplyFilters: the ApplyFilters event of Directory_Updates_FilterSheet. */
  onApplyFilters: (filter: FilterUpdates, hasFiltersApplied: boolean) => void;
  /** The Loaded event of the filter sheet: BottomSheetId_IsLoaded, BottomSheetId_ShowSubscription. */
  onFilterSheetLoaded: (showSubscriptionOnClick: boolean) => void;
  /** The SheetInitialized event of the filter sheet: Filter_BottomSheetId. */
  onFilterSheetInitialized: (sheetId: string) => void;
  /** Event_ClosedShareSheet of the share sheet: IsShareOpen False. */
  onShareSheetClosed: () => void;
}
