/** @origin UBTConnect.App_CommonBlocks_Filter.SortSheet */
import { useRef, useState } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { BackNavigationHandler } from '@/platform/navigation/BackNavigationHandler';
import type { BackNavigationEvent } from '@/platform/navigation';
import { FilterOptionChoice } from '@/components/filter/FilterOptionChoice';
import { ConnectBottomSheet } from '@/components/ui/ConnectBottomSheet';
import { Button } from '@/components/ui/Button';
import { ColumnsTwo } from '@/components/ui/ColumnsTwo';
import { CustomContainer } from '@/components/ui/CustomContainer';
import {
  UBT_ButtonSize,
  UBT_ButtonType,
  UBT_Color,
  UBT_FlexBehavior,
  UBT_Shadow,
  UBT_Size,
} from '@/lib/ubtConnectLibrary/staticEntities';
import { bottomSheetClose } from '@/components/ui/lib/actions';
import { Choice } from './staticEntities';

export interface SortSheetProps {
  id: string;
  yesLabel: string;
  noLabel: string;
  /** Event SheetInitialized(SheetId). */
  onSheetInitialized?: (sheetId: string) => void;
  /** Event ApplySort(SortBy_Title). */
  onApplySort?: () => void;
}

const buttonOptions = (type: string) => ({
  UBT_ButtonSizeId: UBT_ButtonSize.Small,
  UBT_ButtonTypeId: type,
  UBT_FlexBehavior: UBT_FlexBehavior.Grow,
});

/** UBTConnect.App_CommonBlocks_Filter.SortSheet (p:…SortSheet.mvc.js), with the inputs Notifications_SortSheet gives
    (HasSorting only: no countries / localities, so CacheControl_UserInfo_Wrapper and Loaded never run). BottomSheet
    "Sort" (neutral-2, small padding, footer 72px) with the sort choice (Yes = newest first, the empty state:
    Action_DefineOptionControl_Empty :652-734), Clear (disabled when equal to the empty state, view :425) and Apply
    (disabled when equal to the last applied, :466). Apply (:1709-1743): last = current, close, ApplySort. Clear
    (:735-772): empty state, then Apply. Closing without Apply restores the last applied (BottomSheetOnClose
    :1035-1074). Back while open closes it (Handler_BackNavigation :1120-1167). */
export function SortSheet({ id, yesLabel, noLabel, onSheetInitialized, onApplySort }: SortSheetProps) {
  const empty: string = Choice.Yes;
  const [selected, setSelected] = useState<string>(empty);
  const [lastApplied, setLastApplied] = useState<string>(empty);
  const sheetId = useRef('');
  const isOpen = useRef(false);
  const p = id.replace('$', '');
  const apply = (value: string) => {
    setLastApplied(value);
    bottomSheetClose(sheetId.current);
    onApplySort?.();
  };
  return (
    <OSBlock name="App_CommonBlocks_Filter.SortSheet" id={id}>
      <ConnectBottomSheet
        id={`${p}-$b1`}
        title="Sort"
        contentBackgroundColorId={UBT_Color.Neutral2}
        contentPadding={{ GeneralSizeId: UBT_Size.Small }}
        footerHeight="72px"
        onInitialized={(bottomSheetId) => {
          sheetId.current = bottomSheetId;
          onSheetInitialized?.(bottomSheetId);
        }}
        onOnToggle={(open) => {
          isOpen.current = open;
        }}
        onOnClose={() => {
          setSelected(lastApplied);
        }}
        content={
          <div
            className="list list-group OSFillParent"
            data-list=""
            id={`${p}-Options_Choices`}
            style={{ position: 'relative' }}
          >
            <FilterOptionChoice
              id={`${p}-l1-69_1-$b2`}
              filterCommonControlChoice={{
                Title: '',
                SelectedChoiceId: selected,
                YesLabel: yesLabel,
                NoLabel: noLabel,
                NoneLabel: '',
                Order: 1,
              }}
              onOnChange={(_title, choiceId) => {
                setSelected(choiceId);
              }}
            />
          </div>
        }
        footer={
          <CustomContainer
            id={`${p}-$b3`}
            options={{
              Background: { BackgroundColor: UBT_Color.Neutral0 },
              PaddingSize: { GeneralSizeId: UBT_Size.Base },
              ShadowId: UBT_Shadow.ExtraSmall,
            }}
          >
            <ColumnsTwo
              id={`${p}-$b4`}
              columnOptions={{ SpacingSize: UBT_Size.Small }}
              left={
                <Button
                  id={`${p}-$b5`}
                  inIsDisabled={selected === empty}
                  inButtonOptions={buttonOptions(UBT_ButtonType.Secondary)}
                  onEventOnClick={() => {
                    setSelected(empty);
                    apply(empty);
                  }}
                >
                  Clear
                </Button>
              }
              right={
                <Button
                  id={`${p}-$b6`}
                  inIsDisabled={selected === lastApplied}
                  inButtonOptions={buttonOptions(UBT_ButtonType.Primary)}
                  onEventOnClick={() => {
                    apply(selected);
                  }}
                >
                  Apply
                </Button>
              }
            />
          </CustomContainer>
        }
      />
      <BackNavigationHandler
        id={`${p}-$b8`}
        onBackNavigation={(event: BackNavigationEvent) => {
          if (!isOpen.current) return;
          bottomSheetClose(sheetId.current);
          event.preventDefault();
        }}
      />
    </OSBlock>
  );
}

export interface Notifications_SortSheetProps {
  id: string;
  onSheetInitialized?: (sheetId: string) => void;
  /** Event ApplyFilters. */
  onApplyFilters?: () => void;
}

/** UBTConnect.App_Notifications.Notifications_SortSheet (p:…Notifications_SortSheet.mvc.js): SortSheet with an empty
    start filter and HasSorting (Newest to Oldest / Oldest to Newest, order 1); ApplySort → FilterSheetApplyFilters →
    ApplyFilters (controller :287-336). The choice itself is not passed on (no output). */
export function Notifications_SortSheet({ id, onSheetInitialized, onApplyFilters }: Notifications_SortSheetProps) {
  return (
    <OSBlock name="App_Notifications.Notifications_SortSheet" id={id}>
      <SortSheet
        id={`${id.replace('$', '')}-$b1`}
        yesLabel="Newest to Oldest"
        noLabel="Oldest to Newest"
        onSheetInitialized={onSheetInitialized}
        onApplySort={onApplyFilters}
      />
    </OSBlock>
  );
}
