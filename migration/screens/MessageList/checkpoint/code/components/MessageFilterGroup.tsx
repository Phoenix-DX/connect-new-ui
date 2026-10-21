// @os-block Connect2_LegacyShared.MyNotifications.MessageFilterGroup
import type { ReactNode } from 'react';
import { OSBlock } from '../../../components/OSBlock';
import { Separator } from '../../../shared/osui/Separator';
import { textEllipsis } from './actions';
import { Space } from './staticEntities';

export interface MessageFilterGroupProps {
  id: string;
  prefix: string;
  title: string;
  /** Placeholder Message_Filter_Item_Placeholder. */
  children?: ReactNode;
}

/** MessageFilterGroup (p:Connect2_LegacyShared.MyNotifications.MessageFilterGroup.mvc.js view :194-269): the group
    title (TextEllipsis(Title, 30)), the placeholder and a horizontal Separator of Space.small. */
export function MessageFilterGroup({ id, prefix, title, children }: MessageFilterGroupProps) {
  return (
    <OSBlock name="MyNotifications.MessageFilterGroup" id={id}>
      <div className="padding-top-m" data-container="" id={`${prefix}Message_Filter_Group`}>
        <span
          className="margin-bottom-m margin-left-m text-primary-color bold"
          data-expression=""
          id={`${prefix}Message_Filter_Item_Title`}
        >
          {textEllipsis(title, 30)}
        </span>
        <div id={`${prefix}Message_Filter_Item_Placeholder`}>{children}</div>
        <Separator id={`${prefix}$b1`} space={Space.Small} isVertical={false} />
      </div>
    </OSBlock>
  );
}
