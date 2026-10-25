/** @origin UBTConnect.App_CommonBlocks_Filter.FilterSheet */
import type { CacheControl_AllLocalities as AllLocalities } from '@/lib/ubtConnectUtils/structures';
import type { SelectionOption_Item } from '@/lib/ubtConnectLibrary/structures';
import { bottomSheetClose } from '@/components/ui/lib/actions';
import { app_CommonFilter_CheckCountry, app_CommonFilter_DefineOptionNames } from '@/lib/ubtConnect/actions';
import { Choice, Connect_Subscription_Plan } from '@/lib/ubtConnect/staticEntities';
import {
  byOrder,
  clone,
  same,
  sameId,
  SORTBY_TITLE,
  SUBSTATE_COUNTRIES,
  SUBSTATE_LOCALITIES,
  SUBSTATE_MAIN,
  type Vars,
} from './filterSheetState';
import type {
  Filter_Common,
  Filter_Common_Control_List,
  Filter_Common_Options,
  FilterSheetBackNavigationEvent,
  FilterSheetSubscription,
} from './types';

/** The flow of p:UBTConnect.App_CommonBlocks_Filter.FilterSheet.mvc.js (controller :1201-2900), action by action. */
export function createActions(v: Vars, opt: () => Filter_Common_Options, start: () => Filter_Common) {
  const subscription = () => v.user.subscription;
  const subscribed = () => subscription()?.SubscribedCountries.List ?? [];
  const isFree = () => subscription()?.SubscriptionType === Connect_Subscription_Plan.Free;
  const lists = () => v.optionControl.OptionList_Control;
  const indexOf = (title: string) => lists().findIndex((p) => (p.Title ?? '') === title);
  const putList = (list: Filter_Common_Control_List) => {
    const position = indexOf(list.Title ?? '');
    if (position >= 0) lists()[position] = list;
    else lists().push(list);
  };
  const a = {
    defineLast: () => {
      v.lastSearched = clone(v.optionControl);
    },
    setSingleFilter: () => {
      const oc = v.optionControl;
      v.isSingleFilter = oc.OptionChoice_Control.length + oc.OptionList_Control.length === 1;
      const first = oc.OptionList_Control[0];
      if (v.isSingleFilter && first !== undefined) {
        v.subStateSelected = first.Title ?? '';
        v.optionListSelected = clone(first);
      }
    },
    defineEmpty: () => {
      v.empty = clone(v.optionControl);
      for (const list of v.empty.OptionList_Control) {
        list.SelectedIds = [Choice.None];
        list.SelectedNames = [];
      }
      for (const choice of v.empty.OptionChoice_Control) choice.SelectedChoiceId = Choice.None;
      const sort = v.empty.OptionChoice_Control.find((p) => (p.Title ?? '') === SORTBY_TITLE);
      if (sort) sort.SelectedChoiceId = Choice.Yes;
      a.setSingleFilter();
    },
    finishList: () => {
      a.filterLocalitiesByCountry();
      a.defineLast();
      a.defineEmpty();
    },
    defineCountries: () => {
      if (!(v.countries.isFetched && v.user.isFetched && !isFree())) return;
      const o = opt().HasCountries ?? {};
      const ids = start().CountryIds ?? [];
      let local: Filter_Common_Control_List = {
        Title: SUBSTATE_COUNTRIES,
        In_Options: v.countries.list.map((c) => ({
          Id: c.CountryCode,
          DisplayText: c.CountryName,
          CountryCode: c.CountryCode,
        })),
        Order: o.Order ?? 0,
        AddAllOptions: o.AddAllOptions ?? true,
        SheetTitle: 'Country',
        SelectedIds: ids.length === 0 ? [Choice.None] : [...ids],
      };
      local = app_CommonFilter_DefineOptionNames(local);
      if (subscription()?.SubscriptionType !== Connect_Subscription_Plan.Global)
        for (const option of local.In_Options ?? [])
          option.isEnabled = app_CommonFilter_CheckCountry(option.Id ?? '', subscribed());
      local.In_Options = [...(local.In_Options ?? [])].sort((x, y) =>
        (x.DisplayText ?? '').localeCompare(y.DisplayText ?? ''),
      );
      putList(local);
      a.finishList();
    },
    defineLocalities: () => {
      if (!(v.localities.isFetched && v.user.isFetched && !isFree())) return;
      const ids = start().LocalitiesIds ?? [];
      const firstCountryId = start().CountryIds?.[0] ?? ''; // the original appends In_StartFilter.CountryIds.Current
      const local = app_CommonFilter_DefineOptionNames({
        Title: SUBSTATE_LOCALITIES,
        In_Options: v.localities.list.map((l) => ({
          Id: l.LocalityId,
          DisplayText: l.Name,
          CountryCode: l.CountryCode,
        })),
        Order: opt().HasSorting?.Order ?? 0, // the original takes HasSorting.Order here
        AddAllOptions: opt().HasLocalities?.AddAllOptions ?? true,
        SheetTitle: 'Locality',
        SelectedIds: ids.length === 0 ? [Choice.None] : ids.map(() => firstCountryId),
      });
      putList(local);
      a.finishList();
    },
    filterLocalitiesByCountry: () => {
      const o = opt();
      if (!(o.HasCountries?.Enable && o.HasLocalities?.Enable)) return;
      if (!(v.countries.isFetched && v.localities.isFetched)) return;
      const li = indexOf(SUBSTATE_LOCALITIES);
      const ci = indexOf(SUBSTATE_COUNTRIES);
      const localities = lists()[li];
      const countries = lists()[ci];
      if (!localities || !countries) return;
      const toOption = (l: AllLocalities['LocalityList']['List'][number]): SelectionOption_Item => ({
        Id: l.LocalityId,
        DisplayText: l.Name,
        CountryCode: l.CountryCode,
        isEnabled: app_CommonFilter_CheckCountry(l.CountryCode, subscribed()),
      });
      const countryIds = countries.SelectedIds ?? [];
      const options =
        (countryIds[0] ?? '') === Choice.None
          ? v.localities.list.map(toOption)
          : countryIds.flatMap((id) => v.localities.list.filter((l) => sameId(l.CountryCode, id)).map(toOption));
      options.sort((x, y) =>
        `${x.CountryCode ?? ''}${x.DisplayText ?? ''}`.localeCompare(`${y.CountryCode ?? ''}${y.DisplayText ?? ''}`),
      );
      localities.In_Options = options;
      if ((localities.SelectedIds?.[0] ?? '') === Choice.None) return;
      localities.SelectedIds = (localities.SelectedIds ?? []).filter((id) => options.some((p) => p.Id === id));
      lists()[li] = app_CommonFilter_DefineOptionNames(localities);
    },
    defineSortBy: () => {
      const choices = v.optionControl.OptionChoice_Control;
      const position = choices.findIndex((p) => (p.Title ?? '') === SORTBY_TITLE);
      const sorting = opt().HasSorting ?? {};
      if (sorting.Enable) {
        if (position < 0) {
          const sortByNewest = start().Sort_ByNewest ?? '';
          choices.push({
            Title: SORTBY_TITLE,
            SelectedChoiceId: sortByNewest === '' ? Choice.Yes : sortByNewest,
            YesLabel: sorting.YesLabel ?? '',
            NoLabel: sorting.NoLabel ?? '',
            NoneLabel: '',
            Order: sorting.Order ?? 0,
          });
        }
      } else if (position >= 0) choices.splice(position, 1);
    },
    defineOptionControl: () => {
      const o = opt();
      v.optionControl = {
        OptionList_Control: clone(o.Extra_OptionLists ?? []),
        OptionChoice_Control: clone(o.Extra_OptionChoices ?? []),
        OptionFlatList_Control: clone(o.Extra_OptionFlatLists ?? []),
      };
      if (o.HasCountries?.Enable) a.defineCountries();
      if (o.HasLocalities?.Enable) a.defineLocalities();
      if (o.HasSorting?.Enable) a.defineSortBy();
      const oc = v.optionControl;
      oc.OptionChoice_Control = byOrder(oc.OptionChoice_Control);
      oc.OptionList_Control = byOrder(oc.OptionList_Control);
      oc.OptionFlatList_Control = byOrder(oc.OptionFlatList_Control);
      a.defineLast();
      a.defineEmpty();
    },
    setSubState: (subState: string) => {
      if (subState === SUBSTATE_MAIN && v.isSingleFilter) a.setSingleFilter();
      else v.subStateSelected = subState;
    },
    clearSearchString: () => {
      if (v.searchInputId === '') return;
      const input: (HTMLElement & { clearStringAction?: (focus?: boolean) => void }) | null = document.getElementById(
        v.searchInputId,
      );
      input?.clearStringAction?.(false); // Input_ClearString(SearchInputId, False)
    },
    closeSheet: () => {
      bottomSheetClose(v.bottomSheetId);
      a.setSubState(SUBSTATE_MAIN);
      a.clearSearchString();
    },
    onClose: () => {
      v.optionControl = clone(v.lastSearched);
      if (v.isSingleFilter) v.forceUpdateOptionList = !v.forceUpdateOptionList;
      bottomSheetClose(v.bottomSheetId);
      a.setSubState(SUBSTATE_MAIN);
    },
    onChangeListOption: (selectedIds: string[], title: string) => {
      const position = indexOf(title);
      const list = lists()[position];
      if (list) lists()[position] = app_CommonFilter_DefineOptionNames({ ...list, SelectedIds: [...selectedIds] });
      if (title !== SUBSTATE_COUNTRIES) return;
      if ((selectedIds[0] ?? '') === Choice.None) {
        const localities = lists()[indexOf(SUBSTATE_LOCALITIES)];
        if (localities) {
          localities.SelectedNames = [];
          localities.SelectedIds = [...selectedIds];
        }
      }
      a.filterLocalitiesByCountry();
    },
    selectOptionList: (title: string) => {
      const position = indexOf(title);
      const found = lists()[position];
      if (!found) return;
      a.setSubState(title);
      v.optionListSelected = clone(found);
    },
    changeChoice: (title: string, choiceId: string) => {
      const found = v.optionControl.OptionChoice_Control.find((p) => (p.Title ?? '') === title);
      if (found) found.SelectedChoiceId = choiceId;
    },
    changeFlat: (row: number, selectedItems: SelectionOption_Item[], clickedItemId: string) => {
      const flat = v.optionControl.OptionFlatList_Control[row];
      if (!flat) return;
      flat.SelectedIds = selectedItems.map((o) => o.Id ?? '');
      flat.SelectedNames = selectedItems.map((o) => o.DisplayText ?? '');
      const option = flat.In_Options?.find((p) => p.Id === clickedItemId);
      if (option) option.isSelected = !(option.isSelected ?? false);
    },
    setOpen: (isOpen: boolean) => {
      v.isOpenLocal = isOpen;
    },
    setBottomSheetId: (sheetId: string) => {
      v.bottomSheetId = sheetId;
    },
    setSearchInputId: (inputId: string) => {
      v.searchInputId = inputId;
    },
    back: () => {
      if (v.isSingleFilter) a.closeSheet();
      else a.setSubState(SUBSTATE_MAIN);
    },
    clearFilters: () => {
      v.optionControl = clone(v.empty);
      v.optionListSelected = { ...v.optionListSelected, SelectedIds: [], SelectedNames: [] };
    },
    apply: () => {
      a.defineLast();
      a.closeSheet();
      return !same(v.optionControl, v.empty);
    },
    setCountries: (list: Vars['countries']['list']) => {
      v.countries = { list, isFetched: true };
      a.defineCountries();
    },
    setLocalities: (list: Vars['localities']['list']) => {
      v.localities = { list, isFetched: true };
      a.defineLocalities();
    },
    setUser: (subscription: FilterSheetSubscription) => {
      v.user = { subscription, isFetched: true };
      a.defineCountries();
      a.defineLocalities();
    },
    backNavigation: (event: FilterSheetBackNavigationEvent) => {
      if (!v.isOpenLocal) return;
      bottomSheetClose(v.bottomSheetId);
      event.preventDefault(); // PreventNavigation
    },
  };
  return a;
}
