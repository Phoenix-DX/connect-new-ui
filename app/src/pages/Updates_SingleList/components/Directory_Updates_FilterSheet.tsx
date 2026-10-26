/** @origin UBTConnect.Directory_Updates.Directory_Updates_FilterSheet */
import { useMemo } from 'react';
import type { FilterUpdates } from '@/api/update';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { FilterSheetContainer } from '@/containers/FilterSheet';
import { Choice } from '@/lib/ubtConnect/staticEntities';
import type {
  Filter_Common_Control_Choice,
  Filter_Common_Control_List,
  Filter_Common_Options,
} from '@/lib/ubtConnect/structures';

/** FilterByStatus_Title (DUFS model default). */
const FILTER_BY_STATUS_TITLE = 'Filter by status';

export interface Directory_Updates_FilterSheetProps {
  id?: string;
  inFilterUpdates: FilterUpdates;
  /** Event ApplyFilters(Filter_Updates, HasFiltersApplied). */
  onApplyFilters?: (filter: FilterUpdates, hasFiltersApplied: boolean) => void;
  /** Event Loaded(ShowSubscriptionOnClick). */
  onLoaded?: (showSubscriptionOnClick: boolean) => void;
  /** Event SheetInitialized(SheetId). */
  onSheetInitialized?: (sheetId: string) => void;
}

/** UBTConnect.Directory_Updates.Directory_Updates_FilterSheet (p:…Directory_Updates_FilterSheet.mvc.js): the shared
    FilterSheet with sorting (Newest to Oldest / Oldest to Newest, order 1), countries (1), localities (2) and, from
    OnInitialize, the extra choice "Filter by status" (Read Only / Unread Only / All Updates, None selected, order 2).
    FilterSheetApplyFilters maps the sheet's controls onto In_FilterUpdates: CountryIds, LocalitiesIds, Sort_ByNewest,
    Filter_ReadOnly. */
export function Directory_Updates_FilterSheet({
  id = '$b20',
  inFilterUpdates,
  onApplyFilters,
  onLoaded,
  onSheetInitialized,
}: Directory_Updates_FilterSheetProps) {
  const scope = id.replace('$', '');
  const options = useMemo<Filter_Common_Options>(
    () => ({
      HasSorting: { Enable: true, YesLabel: 'Newest to Oldest', NoLabel: 'Oldest to Newest', Order: 1 },
      HasCountries: { Enable: true, Order: 1 },
      HasLocalities: { Enable: true, Order: 2 },
      Extra_OptionChoices: [
        {
          Title: FILTER_BY_STATUS_TITLE,
          SelectedChoiceId: Choice.None,
          YesLabel: 'Read Only',
          NoLabel: 'Unread Only',
          NoneLabel: 'All Updates',
          Order: 2,
        },
      ],
    }),
    [],
  );
  const startFilter = useMemo(() => ({}), []);

  /** FilterSheetApplyFilters (DUFS ctrl). ListFilter(…).Current of an empty result is the default record. */
  const apply = (
    optionLists: Filter_Common_Control_List[],
    optionChoices: Filter_Common_Control_Choice[],
    _optionFlatLists: Filter_Common_Control_List[],
    localitiesTitle: string,
    countriesTitle: string,
    sortByTitle: string,
    hasFilters: boolean,
  ) => {
    const filter: FilterUpdates = {
      ...inFilterUpdates,
      countryIds: optionLists.find((p) => p.Title === countriesTitle)?.SelectedIds ?? [],
      localitiesIds: optionLists.find((p) => p.Title === localitiesTitle)?.SelectedIds ?? [],
      sortByNewest: optionChoices.find((p) => p.Title === sortByTitle)?.SelectedChoiceId ?? '',
      readOnly: optionChoices.find((p) => p.Title === FILTER_BY_STATUS_TITLE)?.SelectedChoiceId ?? '',
    };
    onApplyFilters?.(filter, hasFilters);
  };

  return (
    <OSBlock name="Directory_Updates.Directory_Updates_FilterSheet" id={id}>
      <FilterSheetContainer
        id={`${scope}-$b1`}
        inOptions={options}
        inStartFilter={startFilter}
        onLoaded={onLoaded}
        onSheetInitialized={onSheetInitialized}
        onApplyFilters={apply}
      />
    </OSBlock>
  );
}
