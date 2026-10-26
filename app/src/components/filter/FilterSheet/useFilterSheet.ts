/** @origin UBTConnect.App_CommonBlocks_Filter.FilterSheet */
import { useEffect, useLayoutEffect, useReducer, useRef, useState } from 'react';
import { Connect_Subscription_Plan } from '@/lib/ubtConnect/staticEntities';
import { createActions } from './filterSheetActions';
import { emptyControl, SUBSTATE_MAIN, type Vars } from './filterSheetState';
import type {
  Filter_Common,
  Filter_Common_Options,
  FilterSheetCountry,
  FilterSheetLocality,
  FilterSheetSubscription,
} from './types';

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

/** The props of FilterSheet that its state reads. */
interface FilterSheetStateProps {
  inOptions: Filter_Common_Options;
  inStartFilter: Filter_Common;
  countries: FilterSheetCountry[] | undefined;
  localities: FilterSheetLocality[] | undefined;
  userSubscription: FilterSheetSubscription | undefined;
  onLoaded: ((showSubscriptionOnClick: boolean) => void) | undefined;
}

/** The state of the FilterSheet block: its model (one per block), `run` (an action, then a render) and the flows of
    the inputs: OnInitialize and OnParametersChanged, and the Result handlers of the three cache blocks. */
export function useFilterSheet({
  inOptions,
  inStartFilter,
  countries,
  localities,
  userSubscription,
  onLoaded,
}: FilterSheetStateProps) {
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
  return { model, actions, run, rerender };
}
