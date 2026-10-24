/** @origin Connect2_OrbitMobile_MUI.Orbit_Blocks.Household_Members_Selection */
import { useEffect, useRef } from 'react';
import type { OrbitHouseholdMember } from '@/api/household';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList } from '@/components/ui/os/OSList';
import { isItemAvailable, scrollToSelectMember } from '@/pages/OrbitLanding/actions';
import { styleFromCssText } from '@/shared/lib/cssText';

export interface Household_Members_SelectionProps {
  /** OutSystems instance id of the block (`b1-$b3`). */
  id: string;
  /** In_HouseholdMembersList. */
  inHouseholdMembersList: readonly OrbitHouseholdMember[];
  /** Event ClickedHouseholdMember(MemberList, MemberId). */
  onClickedHouseholdMember: (memberList: OrbitHouseholdMember[], memberId: string) => void;
}

/** The household member bar of the Orbit landing (HM = analysis/sources/pretty/Connect2_OrbitMobile_MUI.Orbit_Blocks
    .Household_Members_Selection.mvc.js; view :132-224, controller :248-500). One container per member with its first
    name; the selected one gets the inline underline style (:204-207).
    - OnInitialize (:327-362): IsItemFound False; InitialPosition = index of the selected member in the list the block
      starts with (on a fresh landing the list is still empty, so -1).
    - OnRender (:363-400), after every render while IsItemFound is False: SetIsItemFound(InitialPosition), and when the
      item is there ScrollToSelectMember(…, InitialPosition, "instant") (a view restored from the cache).
    - OnClick_HouseholdMember (:248-326): unselect every member, select the clicked row, ScrollToSelectMember(…,
      "smooth"), then ClickedHouseholdMember(the list, MemberId). */
export function Household_Members_Selection({
  id,
  inHouseholdMembersList,
  onClickedHouseholdMember,
}: Household_Members_SelectionProps) {
  const prefix = id.replace('$', '');
  const listId = `${prefix}-List_HouseholdMembers`;
  const initialPosition = useRef(inHouseholdMembersList.findIndex((p) => p.isSelected));
  const isItemFound = useRef(false);

  useEffect(() => {
    if (isItemFound.current) return;
    isItemFound.current = isItemAvailable(initialPosition.current);
    if (isItemFound.current) scrollToSelectMember(listId, initialPosition.current, 'instant');
  });

  const onClickHouseholdMember = (currentRowNumber: number, memberId: string) => {
    const memberList = inHouseholdMembersList.map((p, i) => ({ ...p, isSelected: i === currentRowNumber }));
    scrollToSelectMember(listId, currentRowNumber, 'smooth');
    onClickedHouseholdMember(memberList, memberId);
  };

  return (
    <OSBlock name="Orbit_Blocks.Household_Members_Selection" id={id}>
      <div className="orbit-household-member-list-cont OSInline" data-container="">
        <OSList
          id={listId}
          className="list list-group orbit-household-member-list"
          animateItems
          positionRelative
          source={inHouseholdMembersList}
          keyOf={(p) => p.memberId}
        >
          {(p, i) => (
            <div
              className="orbit-household-member-list-item"
              data-container=""
              style={{ cursor: 'pointer' }}
              onClick={() => {
                onClickHouseholdMember(i, p.memberId);
              }}
            >
              <span
                className="orbit-household-member-list-item-text"
                data-expression=""
                style={
                  p.isSelected
                    ? styleFromCssText('opacity: 1; border-bottom: 2px solid var(--color-neutral-0);')
                    : undefined
                }
              >
                {p.firstName}
              </span>
            </div>
          )}
        </OSList>
      </div>
    </OSBlock>
  );
}
