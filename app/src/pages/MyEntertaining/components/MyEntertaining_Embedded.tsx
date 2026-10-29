import type { ReactNode } from 'react';
import { DetailLayout } from '@/components/layout';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { OSBlock } from '@/components/ui/os/OSBlock';

export interface MyEntertaining_EmbeddedProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** Event OnNavBack: Handle_NavBack raises it when the calendar asks to go back. */
  onNavBack: () => void;
  /** Slot: Embedded_MyEntertaining with the given instance id and the handler of its OnNavBack event (Handle_NavBack).
      The page renders it with its calls and the flows of `useMyEntertaining`. */
  renderCalendar: (id: string, onNavBack: () => void) => ReactNode;
}

/** @origin UBTConnect.Calendar.MyEntertaining_Embedded
    The view of the block, props only: Layout_DetailPage (primary colour, In_IsHideTitle True: no header, so no back
    arrow and no title; live TST of 2026-10-27, MyEntertaining_Embedded.mvc.js:147-167) with the calendar embed as
    content and CommonUI_InsideLayout. The calendar's OnNavBack goes to Handle_NavBack, which raises OnNavBack
    (:194-207, :421-440). */
export function MyEntertaining_Embedded({ id, onNavBack, renderCalendar }: MyEntertaining_EmbeddedProps) {
  const prefix = id?.replace('$', '') ?? 'b2';
  /** Handle_NavBack: Trigger Event OnNavBack. */
  const handleNavBack = () => {
    onNavBack();
  };
  return (
    <OSBlock name="Calendar.MyEntertaining_Embedded" id={id}>
      <DetailLayout
        id={`${prefix}-$b1`}
        isPrimaryColor
        hideTitle
        onBack={handleNavBack} // not rendered: In_IsHideTitle removes the header with its back arrow
        content={renderCalendar(`${prefix}-$b2`, handleNavBack)}
        commonUI={<CommonUiLayout id={`${prefix}-$b3`} />}
      />
    </OSBlock>
  );
}
