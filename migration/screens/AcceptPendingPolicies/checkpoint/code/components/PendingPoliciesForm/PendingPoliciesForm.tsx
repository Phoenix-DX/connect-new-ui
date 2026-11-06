import type { PendingPolicy } from '@/api/policy';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { ColumnsTwo } from '@/components/ui/ColumnsTwo';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { FixedFooter } from '@/components/ui/FixedFooter';
import { Icon } from '@/components/ui/Icon';
import {
  UBT_Color,
  UBT_ColumnBehaviour,
  UBT_FlexDirection,
  UBT_Shadow,
  UBT_Size,
} from '@/lib/ubtConnectLibrary/staticEntities';
import { ActionButton } from '@/components/ui/ActionButton';
import { Separator } from '@/components/ui/Separator';
import { UBT_Icons2_Checkbox, UBT_Icons2_CheckboxOutlineBlank } from '@/pages/AcceptPendingPolicies/staticEntities';

export interface PendingPoliciesFormProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** GetPendingPolicies.Policies after the last fetch; undefined while the first fetch runs. */
  rows?: PendingPolicy[];
  /** IsAllSelected: the "I agree to all" checkbox and the Continue button. */
  isAllSelected?: boolean;
  /** Id of the screen's main container (FixedFooter ContentContainerId). */
  contentBlockId?: string;
  /** The checkbox of one row (by its index). */
  onToggle?: (index: number) => void;
  /** The "I agree to all" checkbox. */
  onToggleAll?: () => void;
  /** The Continue button. */
  onContinue?: () => void;
}

/** @origin UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies
    The view of the block, props only: the list of the pending policies with a checkbox each, "I agree to all Terms &
    Conditions and the Privacy Policy" when there are 2 or more, and the fixed footer with Continue (disabled until all
    are selected). While the first fetch runs: the list-updating container; with no policy: the "accepted all" message.
    The flows are in hooks/usePendingPoliciesForm.ts.
    Captured 2026-11-06 (one pending policy, analysis/dom/default.html). The texts of a row and of "agree to all" are
    plain Expression widgets (Policy_Custom_AcceptPendingPolicies.mvc.js:419-445, :632-660); the CustomText containers
    of the older version are `visible: false` (:332-336, :539-543) and do not render, so the policy name has no click. */
export function PendingPoliciesForm({
  id,
  rows,
  isAllSelected = false,
  contentBlockId = '',
  onToggle,
  onToggleAll,
  onContinue,
}: PendingPoliciesFormProps) {
  const prefix = id?.replace('$', '');
  const childId = (n: number) => (prefix === undefined ? undefined : `${prefix}-$b${String(n)}`);

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
        <ColumnsTwo
          id={childId(1)}
          columnOptions={{ ColumnBehaviour: UBT_ColumnBehaviour.ReduceLast, FlexDirection: UBT_FlexDirection.Column }}
          extendedClasses="ubt-policies--columns"
          left={
            <div className="list list-group ubt-policies--list text-align-left OSFillParent" data-list="">
              {rows.map((policy, index) => (
                <div className="display-flex margin-y-xl margin-right-l" data-container="" key={policy.id}>
                  {checkbox(policy.isSelected, () => {
                    onToggle?.(index);
                  })}
                  <div className="margin-left-xs" data-container="">
                    <span className="font-size-s font-regular" data-expression="">
                      {'I have read and agree to the '}
                    </span>
                    <span
                      className="font-size-s font-semi-bold text-underline"
                      data-expression=""
                      style={{ marginLeft: '0px' }}
                    >
                      {`${policy.applicationName} ${policy.policyTypeName}`}
                    </span>
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
                    onClick={onToggleAll}
                  />
                  <div className="margin-left-xs" data-container="">
                    <span className="font-size-s font-regular" data-expression="">
                      {'I agree to '}
                    </span>
                    <span
                      className="font-size-s font-semi-bold text-underline"
                      data-expression=""
                      style={{ marginLeft: '0px' }}
                    >
                      all Terms &amp; Conditions and the Privacy Policy
                    </span>
                  </div>
                </div>
              </div>
            ) : null
          }
        />
        <FixedFooter
          id={childId(11)}
          useBottomBar={false}
          expectedFooterHeight="calc(2 * var(--space-base) + var(--ubt-button-height-m))"
          contentContainerId={contentBlockId}
        >
          <CustomContainer
            id={childId(12)}
            options={{
              Background: { BackgroundColor: UBT_Color.Neutral0 },
              PaddingSize: { GeneralSizeId: UBT_Size.Base },
              ShadowId: UBT_Shadow.ExtraSmallTop,
            }}
          >
            <ActionButton
              id={childId(13)}
              isDisabled={!isAllSelected}
              buttonText="Continue"
              onButtonOnClick={onContinue}
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
