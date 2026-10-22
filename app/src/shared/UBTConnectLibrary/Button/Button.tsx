// @os-block UBTConnectLibrary.ConnectPatterns.Button
import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { formatClasses, getClasses_Button } from '@/shared/UBTConnectLibrary/lib/actions';
import { UBT_ButtonSize, UBT_ButtonType, UBT_FlexBehavior } from '@/shared/UBTConnectLibrary/lib/staticEntities';
import type { ButtonOptions } from './types';

export interface ButtonProps {
  /** OutSystems instance id of the block. */
  id?: string;
  inButtonOptions?: ButtonOptions;
  inExtendedClass?: string;
  inIsDisabled?: boolean;
  /** Event Event_OnClick. */
  onEventOnClick?: () => void;
  /** Placeholder Content. */
  children?: ReactNode;
}

const MAIN_CONTAINER_CLASS = 'ubt-button';

export function Button({
  id,
  inButtonOptions = {},
  inExtendedClass = '',
  inIsDisabled = false,
  onEventOnClick,
  children,
}: ButtonProps) {
  const buttonClasses = getClasses_Button(
    inButtonOptions.UBT_ButtonSizeId ?? UBT_ButtonSize.Medium,
    inButtonOptions.UBT_ButtonTypeId ?? UBT_ButtonType.Primary,
    MAIN_CONTAINER_CLASS,
    inIsDisabled,
    inButtonOptions.UBT_FlexBehavior ?? UBT_FlexBehavior.Grow,
  );
  return (
    <OSBlock name="ConnectPatterns.Button" id={id}>
      <button
        type="button"
        className={`btn ${formatClasses(inExtendedClass, formatClasses(MAIN_CONTAINER_CLASS, buttonClasses))}`}
        data-button=""
        disabled={inIsDisabled}
        onClick={onEventOnClick}
      >
        <div className={`${MAIN_CONTAINER_CLASS}__content`}>{children}</div>
      </button>
    </OSBlock>
  );
}
