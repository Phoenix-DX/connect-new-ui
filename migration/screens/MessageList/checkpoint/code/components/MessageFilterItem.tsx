import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { textEllipsis } from './textEllipsis';

export interface MessageFilterItemProps {
  id: string;
  prefix: string;
  title: string;
  /** Placeholder Message_Filter_Item_Placeholder. */
  children?: ReactNode;
}

/** One row of a filter group: TextEllipsis(Title, 30) and the placeholder.
    @origin Connect2_LegacyShared.MyNotifications.MessageFilterItem */
export function MessageFilterItem({ id, prefix, title, children }: MessageFilterItemProps) {
  return (
    <OSBlock name="MyNotifications.MessageFilterItem" id={id}>
      <div
        className="inline-flex-center-vertical flex-space-between full-width padding-x-m padding-y-m"
        data-container=""
        id={`${prefix}Message_Filter_Item`}
      >
        <span data-expression="" id={`${prefix}Message_Filter_Item_Title`}>
          {textEllipsis(title, 30)}
        </span>
        <div id={`${prefix}Message_Filter_Item_Placeholder`}>{children}</div>
      </div>
    </OSBlock>
  );
}
