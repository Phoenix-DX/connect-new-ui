import type { ReactNode } from 'react';
import { Icon } from '@/components/ui/Icon';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { getEntityType_Icon } from '@/lib/ubtConnectUtils/actions';
import { getConnectEntity_ByShareType } from '@/pages/MessageDetail/actions';

/** The card of a share link whose object is missing, props only: the icon of the share type's entity and the
    Title_Placeholder.
    @origin Connect2_LegacyShared.Share_UI.EmptyShareDetailCard_ExtendedFlow */

interface EmptyShareDetailCard_ExtendedFlowProps {
  /** OutSystems instance id of the block. */
  id: string;
  /** Prefix of the block's children. */
  prefix: string;
  /** ShareObjectTypeId (Type_ShareObject identifier). */
  shareObjectTypeId: string;
  /** Placeholder Title_Placeholder. */
  title?: ReactNode;
}

export function EmptyShareDetailCard_ExtendedFlow({
  id,
  prefix,
  shareObjectTypeId,
  title,
}: EmptyShareDetailCard_ExtendedFlowProps) {
  return (
    <OSBlock name="Share_UI.EmptyShareDetailCard_ExtendedFlow" id={id}>
      <div className="full-width padding-y-s padding-x-base" data-container="">
        <div className="full-width inline-flex-center-vertical" data-container="">
          <Icon id={`${prefix}-$b1`} inIconId={getEntityType_Icon(getConnectEntity_ByShareType(shareObjectTypeId))} />
          <div
            className="inline-flex-center-vertical full-width flex-space-between flex1"
            data-container=""
            id={`${prefix}-Result_Item_Left_Cont`}
          >
            <div
              className="margin-left-base flex1 bold font-size-0-9em text-align-center"
              id={`${prefix}-Title_Placeholder`}
            >
              {title}
            </div>
          </div>
        </div>
      </div>
    </OSBlock>
  );
}
