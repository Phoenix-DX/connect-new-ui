import type { ReactNode } from 'react';
import { DetailLayout } from '@/components/layout';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { OSBlock } from '@/components/ui/os/OSBlock';

export interface MyEntertaining_EmbeddedProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** The back arrow of Layout_DetailPage: OnClick_BackNavigation (the previous screen). */
  onBack: () => void;
  /** Slot: Embedded_MyEntertaining with the given instance id. The page renders it with its calls and the flows of
      `useMyEntertaining`. */
  renderCalendar: (id: string) => ReactNode;
}

/** @origin UBTConnect.Calendar.MyEntertaining_Embedded
    The view of the block, props only: Layout_DetailPage (primary colour, title "My Entertaining") with the calendar
    embed as content and CommonUI_InsideLayout. */
export function MyEntertaining_Embedded({ id, onBack, renderCalendar }: MyEntertaining_EmbeddedProps) {
  const prefix = id?.replace('$', '') ?? 'b2';
  return (
    <OSBlock name="Calendar.MyEntertaining_Embedded" id={id}>
      <DetailLayout
        id={`${prefix}-$b1`}
        isPrimaryColor
        headerTitle="My Entertaining"
        onBack={onBack}
        content={renderCalendar(`${prefix}-$b2`)}
        commonUI={<CommonUiLayout id={`${prefix}-$b3`} />}
      />
    </OSBlock>
  );
}
