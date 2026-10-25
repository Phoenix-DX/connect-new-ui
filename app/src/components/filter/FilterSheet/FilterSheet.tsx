/** @origin UBTConnect.App_CommonBlocks_Filter.FilterSheet */
// @os-block UBTConnect.App_CommonBlocks_Filter.FilterSheet
import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { Button } from '@/components/ui/Button';
import { ColumnsTwo } from '@/components/ui/ColumnsTwo';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { CustomText } from '@/components/ui/CustomText';
import { Icon } from '@/components/ui/Icon';
import { SelectionOptionList } from '@/components/ui/SelectionOptionList';
import { Skeleton } from '@/components/ui/Skeleton';
import { ConnectBottomSheet } from '@/components/ui/ConnectBottomSheet';
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
} from '@/lib/ubtConnectLibrary/staticEntities';
import type { ContainerOptions } from '@/lib/ubtConnectLibrary/structures';
import { FilterOptionChoice } from '@/components/filter/FilterOptionChoice';
import { FilterOptionList } from '@/components/filter/FilterOptionList';
import {
  isFetched,
  same,
  SORTBY_TITLE,
  SUBSTATE_COUNTRIES,
  SUBSTATE_LOCALITIES,
  SUBSTATE_MAIN,
} from './filterSheetState';
import type {
  Filter_Common,
  Filter_Common_Control_Choice,
  Filter_Common_Control_List,
  Filter_Common_Options,
  FilterSheetBackNavigationEvent,
  FilterSheetCountry,
  FilterSheetLocality,
  FilterSheetSubscription,
} from './types';
import { useFilterSheet } from './useFilterSheet';

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
  const { model, actions, run, rerender } = useFilterSheet({
    inOptions,
    inStartFilter,
    countries,
    localities,
    userSubscription,
    onLoaded,
  });

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
    <Skeleton
      isLoading={
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
            <ColumnsTwo
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
            <SelectionOptionList
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
    </Skeleton>
  );

  return (
    <OSBlock name="App_CommonBlocks_Filter.FilterSheet" id={id}>
      <ConnectBottomSheet
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
            <ColumnsTwo
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
