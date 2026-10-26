/** @origin UBTConnectLibrary.ConnectPatterns.AvatarDouble */
// @os-block UBTConnectLibrary.ConnectPatterns.AvatarDouble
import { OSBlock } from '@/components/ui/os/OSBlock';
import { AvatarImage } from '@/components/ui/AvatarImage';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { getClasses_AvatarSize } from '@/lib/ubtConnectLibrary/actions';
import type { AvatarImageRecord } from './types';

export interface AvatarDoubleProps {
  /** OutSystems instance id of the block. */
  id?: string;
  inFirstAvatarImage?: AvatarImageRecord;
  inSecondAvatarImage?: AvatarImageRecord;
  /** UBT_AvatarSize identifier, passed to both avatars. */
  inSizeId?: string;
}

const MAIN_CONTAINER_CLASS = 'ubt-avatar-double';

/** Two avatars side by side. View from
    migration/blocks/sources/UBTConnectLibrary.ConnectPatterns.AvatarDouble.mvc.js:171-278 (no events). */
export function AvatarDouble({
  id,
  inFirstAvatarImage = {},
  inSecondAvatarImage = {},
  inSizeId = '',
}: AvatarDoubleProps) {
  // Plain concatenation in the compiled view (line 174), not FormatClasses.
  const extendedClasses = `${MAIN_CONTAINER_CLASS} ${getClasses_AvatarSize(inSizeId)} inline-block`;
  return (
    <OSBlock name="ConnectPatterns.AvatarDouble" id={id}>
      <CustomContainer extendedClasses={extendedClasses}>
        <div className={`${MAIN_CONTAINER_CLASS}__wrapper`} data-container="">
          <div className="text-align-left" data-container="">
            <AvatarImage inAvatarImage={inFirstAvatarImage} inSizeId={inSizeId} />
          </div>
          <div className={`${MAIN_CONTAINER_CLASS}__wrapper__last-avatar`} data-container="">
            <AvatarImage inSizeId={inSizeId} inAvatarImage={inSecondAvatarImage} />
          </div>
        </div>
      </CustomContainer>
    </OSBlock>
  );
}
