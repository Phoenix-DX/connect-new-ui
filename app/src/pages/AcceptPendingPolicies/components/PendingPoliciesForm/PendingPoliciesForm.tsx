import type { PendingPolicy } from '@/api/policy';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { Columns_Two } from '@/shared/UBTConnectLibrary/Columns_Two';
import { CustomContainer } from '@/shared/UBTConnectLibrary/CustomContainer';
import { CustomText } from '@/shared/UBTConnectLibrary/CustomText';
import { FixedFooter } from '@/shared/UBTConnectLibrary/FixedFooter';
import { Icon } from '@/shared/UBTConnectLibrary/Icon';
import {
  UBT_Color,
  UBT_ColumnBehaviour,
  UBT_FlexDirection,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_Shadow,
  UBT_Size,
} from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { Button } from '@/shared/UBTConnect_Utils/Button';
import { Separator } from '@/shared/osui/Separator';
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
  /** The policy type name of one row. */
  onPolicyClick?: (policy: PendingPolicy) => void;
}

const TEXT_SMALL_REGULAR = {
  Color: UBT_Color.Neutral0,
  FontSize: UBT_FontSize.Small,
  FontWeight: UBT_FontWeight.Regular,
};

/** @origin UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies
    The view of the block, props only: the list of the pending policies with a checkbox each, "I agree to all" when
    there are 2 or more, and the fixed footer with Continue (disabled until all are selected). While the first fetch
    runs: the list-updating container; with no policy: the "accepted all" message. The flows are in
    hooks/usePendingPoliciesForm.ts. */
export function PendingPoliciesForm({
  id,
  rows,
  isAllSelected = false,
  contentBlockId = '',
  onToggle,
  onToggleAll,
  onContinue,
  onPolicyClick,
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
        <Columns_Two
          id={childId(1)}
          columnOptions={{ ColumnBehaviour: UBT_ColumnBehaviour.ReduceLast, FlexDirection: UBT_FlexDirection.Column }}
          extendedClasses="ubt-policies--columns"
          left={
            <div className="list list-group ubt-policies--list OSFillParent" data-list="">
              {rows.map((policy, index) => (
                <div className="display-flex margin-y-xl" data-container="" key={policy.id}>
                  {checkbox(policy.isSelected, () => {
                    onToggle?.(index);
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
                        onPolicyClick?.(policy);
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
                    onClick={onToggleAll}
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
              ShadowId: UBT_Shadow.ExtraSmallTop,
            }}
          >
            <Button id={childId(12)} isDisabled={!isAllSelected} buttonText="Continue" onButtonOnClick={onContinue} />
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
