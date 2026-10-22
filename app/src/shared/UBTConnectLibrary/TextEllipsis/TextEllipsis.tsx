// @os-block UBTConnectLibrary.ConnectPatterns.TextEllipsis
import { OSBlock } from '@/components/ui/os/OSBlock';
import { formatClasses } from '@/shared/UBTConnectLibrary/lib/actions';

export interface TextEllipsisProps {
  /** OutSystems instance id of the block. */
  id?: string;
  text?: string;
  extendedClasses?: string;
}

const MAIN_CONTAINER_CLASS = 'ubt-text-ellipsis';

export function TextEllipsis({ id, text = '', extendedClasses = '' }: TextEllipsisProps) {
  return (
    <OSBlock name="ConnectPatterns.TextEllipsis" id={id}>
      <span
        className={formatClasses(formatClasses(MAIN_CONTAINER_CLASS, 'text-ellipsis'), extendedClasses)}
        data-expression=""
      >
        {text}
      </span>
    </OSBlock>
  );
}
