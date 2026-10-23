// @os-block UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { Columns_Two } from '@/shared/UBTConnectLibrary/Columns_Two';
import { CustomContainer } from '@/shared/UBTConnectLibrary/CustomContainer';
import { CustomText } from '@/shared/UBTConnectLibrary/CustomText';
import { FixedFooter } from '@/shared/UBTConnectLibrary/FixedFooter';
import { Icon } from '@/shared/UBTConnectLibrary/Icon';
import {
  UBT_Color,
  UBT_ColumnBehaviour,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_Size,
} from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { Button } from '@/shared/UBTConnect_Utils/Button';
import { Separator } from '@/shared/osui/Separator';
import { isCommunicationException, raiseToFlowHandler } from '@/legacy/os/exceptions';
import { acceptPolicies, useGetPendingPolicies } from '@/pages/AcceptPendingPolicies/api';
import type { PendingPolicy } from '@/pages/AcceptPendingPolicies/types';
import { getDeviceInfo, jSUtils_PageOpenInNewTab } from './actions';
import {
  UBT_FlexDirection_Column,
  UBT_Icons2_Checkbox,
  UBT_Icons2_CheckboxOutlineBlank,
  UBT_Shadow_ExtraSmallTop,
} from './staticEntities';

export interface Policy_Custom_AcceptPendingPoliciesProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** PolicyApplications (Text List). */
  policyApplications?: string[];
  country?: string;
  /** Id of the screen's main container (FixedFooter ContentContainerId). */
  contentBlockId?: string;
  /** Event AcceptedAll. */
  onAcceptedAll?: () => Promise<void> | void;
  /** Event NetworkError. */
  onNetworkError?: () => void;
}

const TEXT_SMALL_REGULAR = {
  Color: UBT_Color.Neutral0,
  FontSize: UBT_FontSize.Small,
  FontWeight: UBT_FontWeight.Regular,
};

/** The block's list after a fetch: OutSystems replaces GetPendingPolicies.Policies on each fetch (replaceWith) and the
    checkboxes change its IsSelected in place. `at` = the fetch it came from. */
interface ListState {
  at: number;
  rows: PendingPolicy[];
}

/** The App_Policies flow exception handler delegates to App_Common's (Q2): a CommunicationException shows the
    communication message, any other exception (e.g. a server UserException) ShowExceptionMessage(message, False). */
const handleFlowError = raiseToFlowHandler;

/** UBTConnect App_Policies.Policy_Custom_AcceptPendingPolicies (survey BLK: view :126-707, controller :708-1361). */
export function Policy_Custom_AcceptPendingPolicies({
  id,
  policyApplications = [],
  country = '',
  contentBlockId = '',
  onAcceptedAll,
  onNetworkError,
}: Policy_Custom_AcceptPendingPoliciesProps) {
  const prefix = id?.replace('$', '');
  const childId = (n: number) => (prefix === undefined ? undefined : `${prefix}-$b${String(n)}`);
  const [isAllSelected, setIsAllSelected] = useState(false);
  const isAllSelectedRef = useRef(isAllSelected);
  useLayoutEffect(() => {
    isAllSelectedRef.current = isAllSelected;
  });
  const query = useGetPendingPolicies({ policyApplications, country, contentBlockId }, () => isAllSelectedRef.current);

  const [list, setList] = useState<ListState | null>(null);
  if (query.data && !query.isPlaceholderData && list?.at !== query.dataUpdatedAt) {
    setList({ at: query.dataUpdatedAt, rows: query.data });
  }
  const rows = list?.rows;

  // A failed GetPendingPolicies goes to the screen's handleError → App_Policies flow → App_Common handler (Q2):
  // communication errors → communication message, others → ShowExceptionMessage(message, False). Once per failed fetch.
  const errorAt = query.isError ? query.errorUpdatedAt : 0;
  const fetchError = query.error;
  useEffect(() => {
    if (errorAt !== 0) handleFlowError(fetchError);
  }, [errorAt, fetchError]);

  const events = useRef({ onAcceptedAll, onNetworkError });
  useLayoutEffect(() => {
    events.current = { onAcceptedAll, onNetworkError };
  });

  // GetPendingPoliciesOnAfterFetch (BLK controller): an empty list → Wait 5 s → AcceptedAll, after every fetch. The timers
  // of earlier fetches keep running (each fetch has its own flow); all stop when the block is destroyed.
  const timers = useRef<number[]>([]);
  const fetchedAt = list?.at;
  const fetchedEmpty = rows?.length === 0;
  useEffect(() => {
    if (fetchedAt === undefined || !fetchedEmpty) return;
    timers.current.push(
      window.setTimeout(() => {
        void events.current.onAcceptedAll?.();
      }, 5000),
    );
  }, [fetchedAt, fetchedEmpty]);
  useEffect(() => {
    const pending = timers.current;
    return () => {
      for (const t of pending) window.clearTimeout(t);
    };
  }, []);

  const setRows = (next: PendingPolicy[]) => {
    setList((s) => (s ? { ...s, rows: next } : s));
  };

  // ToggleCheckBox + SelectCheckboxOnChange: IsAllSelected = ListAll(IsSelected).
  const toggleCheckBox = (index: number) => {
    if (!rows) return;
    const next = rows.map((r, i) => (i === index ? { ...r, isSelected: !r.isSelected } : r));
    setRows(next);
    setIsAllSelected(next.every((r) => r.isSelected));
  };

  // ToggleSelectAllCheckBox + SelectAllCheckboxOnChange: every row = IsAllSelected.
  const toggleSelectAllCheckBox = () => {
    if (!rows) return;
    const all = !isAllSelected;
    setIsAllSelected(all);
    setRows(rows.map((r) => ({ ...r, isSelected: all })));
  };

  // ContinueOnClick (BLK controller): ListFilter(IsSelected) → GetDeviceInfo → AcceptPolicies → AcceptedAll;
  // CommunicationException → NetworkError. Other exceptions go to the App_Policies flow handler (Q2).
  const continueOnClick = async () => {
    const selected = (rows ?? []).filter((r) => r.isSelected).map((r) => r.id);
    const device = getDeviceInfo();
    try {
      await acceptPolicies(selected, device);
    } catch (error) {
      if (isCommunicationException(error)) events.current.onNetworkError?.();
      else handleFlowError(error);
      return;
    }
    await events.current.onAcceptedAll?.();
  };

  // OnClickPolicy (BLK controller): CanOpenApplicationPolicyDirectlyViaUrl = IsWeb (ApplicationPolicies_CW, TST copy in
  // migration/shell/sources) → JSUtils_PageOpenInNewTab(Current.Url) on the web (Q1). DetailsOnClick is the native
  // branch (AGENTS rule 14: not built).
  const onClickPolicy = (policy: PendingPolicy) => {
    jSUtils_PageOpenInNewTab(policy.url);
  };

  const checkbox = (selected: boolean, onClick: () => void) => (
    <Icon
      inColorId={UBT_Color.Neutral0}
      inIconId={selected ? UBT_Icons2_Checkbox : UBT_Icons2_CheckboxOutlineBlank}
      onClick={onClick}
    />
  );

  let content;
  if (!rows) {
    content = <div className="list-updating" data-container="" />;
  } else if (rows.length === 0) {
    content = (
      <div className="background-blue-lighter text-align-center padding-x-l padding-y-l" data-container="">
        You have accepted all required policies.
        <br />
        No more policies available to accept.
      </div>
    );
  } else {
    content = (
      <>
        <Columns_Two
          id={childId(1)}
          columnOptions={{ ColumnBehaviour: UBT_ColumnBehaviour.ReduceLast, FlexDirection: UBT_FlexDirection_Column }}
          extendedClasses="ubt-policies--columns"
          left={
            <div className="list list-group ubt-policies--list OSFillParent" data-list="">
              {rows.map((policy, index) => (
                <div className="display-flex margin-y-xl" data-container="" key={policy.id}>
                  {checkbox(policy.isSelected, () => {
                    toggleCheckBox(index);
                  })}
                  <div className="margin-left-xs white-space-nowrap" data-container="">
                    <CustomText
                      fitContent
                      inText={`I agree to the ${policy.applicationName} - `}
                      inTextOptions={TEXT_SMALL_REGULAR}
                    />
                    <CustomText
                      inTextOptions={{
                        Color: UBT_Color.Neutral0,
                        FontSize: UBT_FontSize.Small,
                        FontWeight: UBT_FontWeight.SemiBold,
                        IsUnderlined: true,
                      }}
                      inText={policy.policyTypeName}
                      fitContent
                      onClicked={() => {
                        onClickPolicy(policy);
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          }
          right={
            rows.length > 1 ? (
              <div className="ubt-policies--agree-to-all" data-container="">
                <Separator id={childId(6)} />
                <div className="display-flex padding-top-xl" data-container="">
                  <Icon
                    id={childId(isAllSelected ? 7 : 8)}
                    inIconId={isAllSelected ? UBT_Icons2_Checkbox : UBT_Icons2_CheckboxOutlineBlank}
                    inColorId={UBT_Color.Neutral0}
                    onClick={toggleSelectAllCheckBox}
                  />
                  <div className="margin-left-xs" data-container="">
                    <CustomText id={childId(9)} inTextOptions={TEXT_SMALL_REGULAR} fitContent inText="I agree to all" />
                  </div>
                </div>
              </div>
            ) : null
          }
        />
        <FixedFooter
          id={childId(10)}
          useBottomBar={false}
          expectedFooterHeight="calc(2 * var(--space-base) + var(--ubt-button-height-m))"
          contentContainerId={contentBlockId}
        >
          <CustomContainer
            id={childId(11)}
            options={{
              Background: { BackgroundColor: UBT_Color.Neutral0 },
              PaddingSize: { GeneralSizeId: UBT_Size.Base },
              ShadowId: UBT_Shadow_ExtraSmallTop,
            }}
          >
            <Button
              id={childId(12)}
              isDisabled={!isAllSelected}
              buttonText="Continue"
              onButtonOnClick={() => {
                void continueOnClick();
              }}
            />
          </CustomContainer>
        </FixedFooter>
      </>
    );
  }

  return (
    <OSBlock name="App_Policies.Policy_Custom_AcceptPendingPolicies" id={id}>
      {content}
    </OSBlock>
  );
}
