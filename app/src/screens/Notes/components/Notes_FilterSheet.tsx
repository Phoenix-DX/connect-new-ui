// @os-block UBTConnect.Notes.Notes_FilterSheet
import { useState } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { FilterSheet } from '../../../shared/UBTConnect/FilterSheet';
import type {
  Filter_Common_Control_Choice,
  Filter_Common_Control_List,
  Filter_Common_Options,
} from '../../../shared/UBTConnect/lib/structures';
import type { NotesFilter } from '../types';
import { child, scopeOf } from './ids';

export interface Notes_FilterSheetProps {
  id?: string;
  inFilterNotes: NotesFilter;
  inYearsOptions: string[];
  onSheetInilialized?: (sheetId: string) => void;
  onLoaded?: (showSubscriptionOnClick: boolean) => void;
  /** Event ApplyFilters(Event_Notes_Filter, Event_HasFiltersApplied). */
  onApplyFilters?: (filter: NotesFilter, hasFiltersApplied: boolean) => void;
}

const FILTER_BY_YEAR_TITLE = 'Filter by year';

/** Initialize_FilterYearOptions (OnInitialize, Notes_FilterSheet.mvc.js controller): one flat list "Filter by year",
    Order 1, with one enabled option per In_YearsOptions value. */
const initialize_FilterYearOptions = (years: string[]): Filter_Common_Control_List[] => [
  {
    In_Options: years.map((y) => ({ Id: y, DisplayText: y, isEnabled: true })),
    Title: FILTER_BY_YEAR_TITLE,
    Order: 1,
  },
];

/** The notes filter sheet (Notes_FilterSheet.mvc.js): FilterSheet with sorting ("Newest to Oldest" / "Oldest to
    Newest", Order 1) and the year flat list built at initialize. Handler_FilterSheetApplyFilters: Filter_Notes =
    In_FilterNotes; Years = OptionFlatList_Control.Current.SelectedIds; SortByNewest = the SelectedChoiceId of the choice
    titled SortBy_Title; then ApplyFilters(Filter_Notes, HasFitlerApplied). */
export function Notes_FilterSheet({
  id,
  inFilterNotes,
  inYearsOptions,
  onSheetInilialized,
  onLoaded,
  onApplyFilters,
}: Notes_FilterSheetProps) {
  const p = scopeOf(id);
  const [options] = useState<Filter_Common_Options>(() => ({
    HasSorting: { Enable: true, YesLabel: 'Newest to Oldest', NoLabel: 'Oldest to Newest', Order: 1 },
    Extra_OptionFlatLists: initialize_FilterYearOptions(inYearsOptions),
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
        ...inFilterNotes,
        years: optionFlatLists[0]?.SelectedIds ?? [],
        sortByNewest: sortBy[0]?.SelectedChoiceId ?? '',
      },
      hasFilterApplied,
    );
  };
  return (
    <OSBlock name="Notes.Notes_FilterSheet" id={id}>
      <FilterSheet
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
