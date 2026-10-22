// @os-block UBTConnectLibrary.ConnectPatterns.Icon
import { OSBlock } from '@/components/ui/os/OSBlock';
import { formatClasses, getClass_Color } from '../lib/actions';
import { UBT_Color } from '../lib/staticEntities';
import { IconSVG } from '../IconSVG';

export interface IconProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** In_IconId: UBT_Icons identifier (the icon class, or an SVG_* icon). */
  inIconId?: string;
  /** In_ColorId: UBT_Color identifier. */
  inColorId?: string;
  /** In_SizeId: icon size class (captured `icon-base`). */
  inSizeId?: string;
  /** In_Visible. */
  inVisible?: boolean;
  inExtendedClasses?: string;
  /** Event Click. */
  onClick?: () => void;
}

const MAIN_CONTAINER_CLASS = 'ubt-icon';

export function Icon({
  id,
  inIconId = '',
  inColorId = UBT_Color.Neutral9,
  inSizeId = '',
  inVisible = true,
  inExtendedClasses = '',
  onClick,
}: IconProps) {
  const className =
    formatClasses(formatClasses(formatClasses(MAIN_CONTAINER_CLASS, inIconId), getClass_Color(inColorId)), inSizeId) +
    (inExtendedClasses !== '' ? ` ${inExtendedClasses}` : '');
  return (
    <OSBlock name="ConnectPatterns.Icon" id={id}>
      {inVisible && (
        <div className={className} data-container="" style={{ cursor: 'pointer' }} onClick={onClick}>
          {inIconId.includes('SVG_') && <IconSVG inIconId={inIconId} />}
        </div>
      )}
    </OSBlock>
  );
}
