/** @origin UBTConnect.Bookmarks.Bookmarks_FilterSheet */
import { useState } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { child, scopeOf } from '@/components/ui/os/blockIds';
import { FilterSheetContainer } from '@/containers/FilterSheet';
import type {
  Filter_Common_Control_Choice,
  Filter_Common_Control_List,
  Filter_Common_Options,
} from '@/lib/ubtConnect/structures';
import type { BookmarksFilter } from '@/api/bookmark';

interface Bookmarks_FilterSheetProps {
  id?: string;
  inFilterBookmarks: BookmarksFilter;
  inYearsOptions: string[];
  onSheetInilialized?: (sheetId: string) => void;
  onLoaded?: (showSubscriptionOnClick: boolean) => void;
  /** Event ApplyFilters(Event_Filter_Bookmarks, Event_HasFiltersApplied). */
  onApplyFilters?: (filter: BookmarksFilter, hasFiltersApplied: boolean) => void;
}

/** The bookmarks filter sheet (Bookmarks_FilterSheet.mvc.js; captured dom/default.html:1136-1467): FilterSheet with
    sorting ("Newest to Oldest" / "Oldest to Newest", Order 1) and one flat list "Filter by year" (Order 1) with one
    enabled option per In_YearsOptions value. Handler_FilterSheetApplyFilters: Years = the selected ids of the flat
    list; SortByNewest = the SelectedChoiceId of the choice titled SortBy_Title; then ApplyFilters. */
export function Bookmarks_FilterSheet({
  id,
  inFilterBookmarks,
  inYearsOptions,
  onSheetInilialized,
  onLoaded,
  onApplyFilters,
}: Bookmarks_FilterSheetProps) {
  const p = scopeOf(id);
  const [options] = useState<Filter_Common_Options>(() => ({
    HasSorting: { Enable: true, YesLabel: 'Newest to Oldest', NoLabel: 'Oldest to Newest', Order: 1 },
    Extra_OptionFlatLists: [
      {
        In_Options: inYearsOptions.map((y) => ({ Id: y, DisplayText: y, isEnabled: true })),
        Title: 'Filter by year',
        Order: 1,
      },
    ],
  }));
  const [startFilter] = useState({});
  const handler_FilterSheetApplyFilters = (
    optionChoices: Filter_Common_Control_Choice[],
    sortByTitle: string,
    hasFilterApplied: boolean,
    optionFlatLists: Filter_Common_Control_List[],
  ) => {
    const sortBy = optionChoices.filter((c) => c.Title === sortByTitle);
    onApplyFilters?.(
      {
        ...inFilterBookmarks,
        years: optionFlatLists[0]?.SelectedIds ?? [],
        sortByNewest: sortBy[0]?.SelectedChoiceId ?? '',
      },
      hasFilterApplied,
    );
  };
  return (
    <OSBlock name="Bookmarks.Bookmarks_FilterSheet" id={id}>
      <FilterSheetContainer
        id={child(p, 1)}
        inStartFilter={startFilter}
        inOptions={options}
        onSheetInitialized={onSheetInilialized}
        onLoaded={onLoaded}
        onApplyFilters={(_lists, choices, flatLists, _localities, _countries, sortByTitle, hasFilters) => {
          handler_FilterSheetApplyFilters(choices, sortByTitle, hasFilters, flatLists);
        }}
      />
    </OSBlock>
  );
}
