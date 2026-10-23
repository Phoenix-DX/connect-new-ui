/** @origin UBTConnect.App_CommonBlocks_Filter.FilterSheet */
// @os-block UBTConnect.App_CommonBlocks_Filter.FilterSheet
import { useEffect, useLayoutEffect, useReducer, useRef, useState, type ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import type { CacheControl_AllCountriesRec as AllCountries } from '@/shared/UBTConnect_Utils/CacheControl_AllCountries';
import type {
  CacheControl_AllLocalities as AllLocalities,
  Directory_UserCurrent,
} from '@/shared/UBTConnect_Utils/lib/structures';
import { Button } from '@/shared/UBTConnectLibrary/Button';
import { Columns_Two } from '@/shared/UBTConnectLibrary/Columns_Two';
import { CustomContainer } from '@/shared/UBTConnectLibrary/CustomContainer';
import { CustomText } from '@/shared/UBTConnectLibrary/CustomText';
import { Icon } from '@/shared/UBTConnectLibrary/Icon';
import { SelectionOption_List } from '@/shared/UBTConnectLibrary/SelectionOption_List';
import { SkeletonSection } from '@/shared/UBTConnectLibrary/SkeletonSection';
import { BottomSheet } from '@/shared/UBTConnectLibrary/BottomSheet';
import {
  UBT_ButtonSize,
  UBT_ButtonType,
  UBT_Color,
  UBT_ColumnBehaviour,
  UBT_FlexBehavior,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_Icons2,
  UBT_IconsSize,
  UBT_Shadow,
  UBT_Shape,
  UBT_Size,
} from '@/shared/UBTConnectLibrary/lib/staticEntities';
import type { ContainerOptions, SelectionOption_Item } from '@/shared/UBTConnectLibrary/lib/structures';
import { bottomSheetClose } from '@/shared/osui/lib/actions';
import { FilterOptionChoice } from '@/components/filter/FilterOptionChoice';
import { FilterOptionList } from '@/components/filter/FilterOptionList';
import { app_CommonFilter_CheckCountry, app_CommonFilter_DefineOptionNames } from '@/shared/UBTConnect/lib/actions';
import { Choice, Connect_Subscription_Plan } from '@/shared/UBTConnect/lib/staticEntities';
import type {
  Filter_Common,
  Filter_Common_Control_Choice,
  Filter_Common_Control_List,
  Filter_Common_Options,
} from './types';

/** The anonymous record OptionControl / LastSearched_OptionControl / Empty_OptionControl. */
export interface OptionControl {
  OptionList_Control: Filter_Common_Control_List[];
  OptionChoice_Control: Filter_Common_Control_Choice[];
  OptionFlatList_Control: Filter_Common_Control_List[];
}

/** The country rows of the CacheControl_AllCountries Result. */
export type FilterSheetCountry = AllCountries['CountryList']['List'][number];
/** The locality rows of the CacheControl_AllLocalities Result. */
export type FilterSheetLocality = AllLocalities['LocalityList']['List'][number];
/** The subscription of the user information (CacheControl_UserInfo_Wrapper Result): the only part the block reads. */
export type FilterSheetSubscription = Directory_UserCurrent['Directory_UserCurrent_Subscription'];
/** The back-navigation event of the BackNavigationHandler block: the sheet prevents the navigation when it is open. */
export interface FilterSheetBackNavigationEvent {
  preventDefault(): void;
}

export interface FilterSheetProps {
  /** OutSystems instance id of the block. */
  id?: string;
  inOptions?: Filter_Common_Options;
  inStartFilter?: Filter_Common;
  extendedClasses?: string;
  /** The Result of CacheControl_AllCountries (HasCountries); undefined until it came. */
  countries?: FilterSheetCountry[];
  /** The Result of CacheControl_AllLocalities (HasLocalities); undefined until it came. */
  localities?: FilterSheetLocality[];
  /** The subscription of the CacheControl_UserInfo_Wrapper Result (HasCountries or HasLocalities); undefined until it
      came. Its arrival raises Loaded. */
  userSubscription?: FilterSheetSubscription;
  /** The three cache blocks that give `countries`, `localities` and `userSubscription` (they read the server and the
      memory cache). The caller renders them (containers/FilterSheet); the sheet places them after the bottom sheet, as
      captured. */
  cacheBlocks?: ReactNode;
  /** The BackNavigationHandler block (platform/navigation), given by the caller with the sheet's BackNavigation
      handler: an open sheet closes and prevents the navigation. Rendered last, as captured. */
  renderBackNavigationHandler?: (onBackNavigation: (event: FilterSheetBackNavigationEvent) => void) => ReactNode;
  /** App_Subscription_ShowUpgradePopUp (platform/feedback/dialogs), given by the caller: a disabled option of an option
      list opens it. */
  onShowUpgradePopUp?: () => void | Promise<void>;
  /** Event Loaded(ShowSubscriptionOnClick): after the user information arrived. */
  onLoaded?: (showSubscriptionOnClick: boolean) => void;
  /** Event SheetInitialized(Id): the bottom sheet's widget id. */
  onSheetInitialized?: (id: string) => void;
  /** Event ApplyFilters(OptionLists, OptionChoices, OptionFlatLists, LocalitiesTitle, CountriesTitle, SortByTitle,
      HasFilters) (OnClick_Apply, :2330). */
  onApplyFilters?: (
    optionLists: Filter_Common_Control_List[],
    optionChoices: Filter_Common_Control_Choice[],
    optionFlatLists: Filter_Common_Control_List[],
    localitiesTitle: string,
    countriesTitle: string,
    sortByTitle: string,
    hasFilters: boolean,
  ) => void;
}

const SUBSTATE_MAIN = '';
const SUBSTATE_LOCALITIES = 'Localities';
const SUBSTATE_COUNTRIES = 'Countries';
const SORTBY_TITLE = 'Sort by';
const sameId = (a = '', b = '') => a.trim().toUpperCase() === b.trim().toUpperCase();
const clone = <T,>(value: T): T => structuredClone(value);
const same = (a: unknown, b: unknown) => JSON.stringify(a) === JSON.stringify(b);
const emptyControl = (): OptionControl => ({
  OptionList_Control: [],
  OptionChoice_Control: [],
  OptionFlatList_Control: [],
});
const isFetched = (x: { isFetched: boolean }) => x.isFetched; // read through a call: the original condition is kept as is
const byOrder = <T extends { Order?: number }>(list: T[]) => [...list].sort((a, b) => (a.Order ?? 0) - (b.Order ?? 0));

/** Block variables (FilterSheet.mvc.js model :13-77). Records are values in OutSystems: assignments clone. */
interface Vars {
  bottomSheetId: string;
  subStateSelected: string;
  optionListSelected: Filter_Common_Control_List;
  countries: { list: AllCountries['CountryList']['List']; isFetched: boolean };
  localities: { list: AllLocalities['LocalityList']['List']; isFetched: boolean };
  user: { subscription?: FilterSheetSubscription; isFetched: boolean };
  optionControl: OptionControl;
  lastSearched: OptionControl;
  empty: OptionControl;
  isSingleFilter: boolean;
  isOpenLocal: boolean;
  searchInputId: string;
  forceUpdateOptionList: boolean;
}

/** The flow of p:UBTConnect.App_CommonBlocks_Filter.FilterSheet.mvc.js (controller :1201-2900), action by action. */
function createActions(v: Vars, opt: () => Filter_Common_Options, start: () => Filter_Common) {
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

/** The block's variables and actions: one instance per block (the OutSystems model), changed by the actions. */
class FilterSheetModel {
  props: { inOptions: Filter_Common_Options; inStartFilter: Filter_Common };
  vars: Vars = {
    bottomSheetId: '',
    subStateSelected: SUBSTATE_MAIN,
    optionListSelected: {},
    countries: { list: [], isFetched: false },
    localities: { list: [], isFetched: false },
    user: { isFetched: false },
    optionControl: emptyControl(),
    lastSearched: emptyControl(),
    empty: emptyControl(),
    isSingleFilter: false,
    isOpenLocal: false,
    searchInputId: '',
    forceUpdateOptionList: false,
  };
  actions: ReturnType<typeof createActions>;
  constructor(inOptions: Filter_Common_Options, inStartFilter: Filter_Common) {
    this.props = { inOptions, inStartFilter };
    this.actions = createActions(
      this.vars,
      () => this.props.inOptions,
      () => this.props.inStartFilter,
    );
  }
  setProps(inOptions: Filter_Common_Options, inStartFilter: Filter_Common): void {
    this.props = { inOptions, inStartFilter };
  }
}

/* Stable empty defaults: a new {} / [] per render would count as a new input. */
const NO_OPTIONS: Filter_Common_Options = {};
const NO_START_FILTER: Filter_Common = {};

/** Sort & filter bottom sheet of the list screens (p:UBTConnect.App_CommonBlocks_Filter.FilterSheet.mvc.js, view
    :140-1190): main state with the option lists, choices and flat lists, or the selected option list; footer Clear /
    Apply; back navigation closes the open sheet. The country, locality and user results come as props from the cache
    blocks that the caller renders (`cacheBlocks`): each new result runs the action of its Result handler, as the block
    did. */
export function FilterSheet({
  id,
  inOptions = NO_OPTIONS,
  inStartFilter = NO_START_FILTER,
  extendedClasses = '',
  countries,
  localities,
  userSubscription,
  cacheBlocks,
  renderBackNavigationHandler,
  onShowUpgradePopUp,
  onLoaded,
  onSheetInitialized,
  onApplyFilters,
}: FilterSheetProps) {
  const [, rerender] = useReducer((n: number) => n + 1, 0);
  const [model] = useState(() => new FilterSheetModel(inOptions, inStartFilter));
  model.setProps(inOptions, inStartFilter);
  const { actions } = model;
  const run = (action: () => void) => {
    action();
    rerender();
  };
  const onLoadedRef = useRef(onLoaded);
  useLayoutEffect(() => {
    onLoadedRef.current = onLoaded;
  });
  // OnInitialize and OnParametersChanged: Action_Define_OptionControl.
  const [initialized] = useState(() => {
    actions.defineOptionControl();
    return { inOptions, inStartFilter };
  });
  useEffect(() => {
    if (initialized.inOptions === inOptions && initialized.inStartFilter === inStartFilter) return;
    run(actions.defineOptionControl);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- runs on new parameters only
  }, [inOptions, inStartFilter]);
  // The Result handlers of the three cache blocks, in the order of the blocks: a result that comes runs its action.
  useEffect(() => {
    if (countries === undefined) return;
    run(() => {
      actions.setCountries(countries);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps -- runs when a result comes
  }, [countries]);
  useEffect(() => {
    if (localities === undefined) return;
    run(() => {
      actions.setLocalities(localities);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps -- runs when a result comes
  }, [localities]);
  useEffect(() => {
    if (userSubscription === undefined) return;
    run(() => {
      actions.setUser(userSubscription);
    });
    // Loaded(ShowSubscriptionOnClick): False with other filters, else True for a Free subscription.
    const o = model.props.inOptions;
    const hasOtherFilters =
      (o.Extra_OptionLists ?? []).length > 0 ||
      (o.Extra_OptionChoices ?? []).length > 0 ||
      (o.HasSorting?.Enable ?? false);
    onLoadedRef.current?.(
      hasOtherFilters ? false : userSubscription.SubscriptionType === Connect_Subscription_Plan.Free,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps -- runs when a result comes
  }, [userSubscription]);

  const v = model.vars;
  const oc = v.optionControl;
  const hasCountries = inOptions.HasCountries?.Enable ?? false;
  const hasLocalities = inOptions.HasLocalities?.Enable ?? false;
  const isMain = v.subStateSelected === SUBSTATE_MAIN;
  const optionBox: ContainerOptions = {
    Background: { BackgroundColor: UBT_Color.Neutral0 },
    PaddingSize: { GeneralSizeId: UBT_Size.Small },
    MarginSize: { BottomSizeId: UBT_Size.ExtraSmall },
    BorderOptions: {
      Color: UBT_Color.Neutral3,
      Size: { GeneralSizeId: UBT_Size.Small },
      Radius: { GeneralSizeId: UBT_Shape.Soft },
    },
  };
  const buttonOptions = (type: string) => ({
    UBT_ButtonSizeId: UBT_ButtonSize.Small,
    UBT_ButtonTypeId: type,
    UBT_FlexBehavior: UBT_FlexBehavior.Grow,
  });
  const apply = () => {
    const hasFilters = actions.apply();
    rerender();
    onApplyFilters?.(
      oc.OptionList_Control,
      oc.OptionChoice_Control,
      oc.OptionFlatList_Control,
      SUBSTATE_LOCALITIES,
      SUBSTATE_COUNTRIES,
      SORTBY_TITLE,
      hasFilters,
    );
  };

  const main = (
    <SkeletonSection
      inIsLoading={
        !(isFetched(v.localities) || isFetched(v.user)) &&
        hasLocalities &&
        !(isFetched(v.countries) || !isFetched(v.user)) &&
        hasCountries
      }
    >
      <div className="list list-group OSFillParent" data-list="">
        {oc.OptionList_Control.map((list, row) => (
          <CustomContainer
            key={row}
            options={optionBox}
            onClicked={() => {
              run(() => {
                actions.selectOptionList(list.Title ?? '');
              });
            }}
          >
            <Columns_Two
              columnOptions={{ ColumnBehaviour: UBT_ColumnBehaviour.ReduceLast }}
              left={
                <div data-container="" style={{ textAlign: 'left' }}>
                  <CustomText inTextOptions={{ FontSize: UBT_FontSize.Small }} inText={'All ' + (list.Title ?? '')} />
                </div>
              }
              right={
                <Icon
                  inIconId={UBT_Icons2.ChevronRight}
                  inSizeId={UBT_IconsSize.Base_24}
                  inColorId={UBT_Color.Neutral7}
                />
              }
            />
            {(list.SelectedNames ?? []).length > 0 && (
              <CustomText
                inJustifyText
                inText={list.SelectedNames?.[0] ?? ''}
                inTextOptions={{ Color: UBT_Color.Neutral7, FontSize: UBT_FontSize.ExtraSmall }}
              />
            )}
          </CustomContainer>
        ))}
      </div>
      <div className="list list-group OSFillParent" data-list="">
        {oc.OptionChoice_Control.map((choice, row) => (
          <FilterOptionChoice
            key={row}
            filterCommonControlChoice={choice}
            onOnChange={(title, choiceId) => {
              run(() => {
                actions.changeChoice(title, choiceId);
              });
            }}
          />
        ))}
      </div>
      <div className="list list-group OSFillParent" data-list="">
        {oc.OptionFlatList_Control.map((flat, row) => (
          <CustomContainer
            key={row}
            options={{ ...optionBox, PaddingSize: { VerticalSizeId: UBT_Size.Base, HorizontalSizeId: UBT_Size.Small } }}
          >
            <CustomContainer options={{ MarginSize: { BottomSizeId: UBT_Size.Small } }}>
              <CustomText
                inText={inOptions.Extra_OptionFlatLists?.[0]?.Title ?? ''}
                inTextOptions={{ FontSize: UBT_FontSize.Base, FontWeight: UBT_FontWeight.SemiBold }}
                extendedClasses="text-align-left"
              />
            </CustomContainer>
            <SelectionOption_List
              lastItemStyleOptions={{ MarginSize: { BottomSizeId: UBT_Size.None } }}
              isMultiselect
              selectionOptionItemList={flat.In_Options}
              itemStyleOptions={{ MarginSize: { BottomSizeId: UBT_Size.Base } }}
              onOnSelectionChange={(selectedItems, clickedItemId) => {
                run(() => {
                  actions.changeFlat(row, selectedItems, clickedItemId);
                });
              }}
            />
          </CustomContainer>
        ))}
      </div>
    </SkeletonSection>
  );

  return (
    <OSBlock name="App_CommonBlocks_Filter.FilterSheet" id={id}>
      <BottomSheet
        contentBackgroundColorId={UBT_Color.Neutral2}
        title={isMain ? 'Sort & Filter' : (v.optionListSelected.SheetTitle ?? '') + ' Filter'}
        contentPadding={{ GeneralSizeId: UBT_Size.Small }}
        footerHeight="72px"
        extendedClasses={extendedClasses}
        onOnClose={() => {
          run(actions.onClose);
        }}
        onOnToggle={(isOpen) => {
          actions.setOpen(isOpen);
        }}
        onInitialized={(sheetId) => {
          actions.setBottomSheetId(sheetId);
          onSheetInitialized?.(sheetId);
        }}
        content={
          isMain ? (
            main
          ) : (
            <FilterOptionList
              filterCommonControlList={v.optionListSelected}
              forceUpdate={v.forceUpdateOptionList}
              showHeader={!v.isSingleFilter}
              onOnBack={() => {
                run(actions.back);
              }}
              onEventInputOnReady={(inputId) => {
                actions.setSearchInputId(inputId);
              }}
              onOnChange={(selectedIds, title) => {
                run(() => {
                  actions.onChangeListOption(selectedIds, title);
                });
              }}
              onShowUpgradePopUp={onShowUpgradePopUp}
            />
          )
        }
        footer={
          <CustomContainer
            options={{
              Background: { BackgroundColor: UBT_Color.Neutral0 },
              PaddingSize: { GeneralSizeId: UBT_Size.Base },
              ShadowId: UBT_Shadow.ExtraSmall,
            }}
          >
            <Columns_Two
              columnOptions={{ SpacingSize: UBT_Size.Small }}
              left={
                <Button
                  inIsDisabled={same(oc, v.empty)}
                  inButtonOptions={buttonOptions(UBT_ButtonType.Secondary)}
                  onEventOnClick={() => {
                    actions.clearFilters();
                    apply();
                  }}
                >
                  Clear filters
                </Button>
              }
              right={
                <Button
                  inIsDisabled={same(oc, v.lastSearched)}
                  inButtonOptions={buttonOptions(UBT_ButtonType.Primary)}
                  onEventOnClick={apply}
                >
                  Apply filters
                </Button>
              }
            />
          </CustomContainer>
        }
      />
      {cacheBlocks}
      {renderBackNavigationHandler?.(actions.backNavigation)}
    </OSBlock>
  );
}
