// @os-block UBTConnect_Utils.CW_Common.Button
import { OSBlock } from '@/components/ui/os/OSBlock';
import { Button as ConnectButton } from '../../UBTConnectLibrary/Button';
import { Icon } from '../../UBTConnectLibrary/Icon';
import { IconText } from '../../UBTConnectLibrary/IconText';
import { UBT_Size } from '../../UBTConnectLibrary/lib/staticEntities';
import type { ButtonOptions } from './types';

export interface ButtonProps {
  /** OutSystems instance id of the block. */
  id?: string;
  buttonExtendedClass?: string;
  isDisabled?: boolean;
  isIconOnRight?: boolean;
  buttonText?: string;
  /** IconText_SpacingSize: UBT_Size identifier. */
  iconTextSpacingSize?: string;
  textExtendedClasses?: string;
  buttonOptions?: ButtonOptions;
  /** UBT_Icons identifier (the icon class). */
  iconId?: string;
  hideIcon?: boolean;
  /** Event ButtonOnClick. */
  onButtonOnClick?: () => void;
}

/** The app's button (p:UBTConnect_Utils.CW_Common.Button.mvc.js view): ConnectPatterns.Button with the loading spinner
    container (styled by an enclosing ButtonLoading) and IconText (icon, text). */
export function Button({
  id,
  buttonExtendedClass = '',
  isDisabled = false,
  isIconOnRight = false,
  buttonText = '',
  iconTextSpacingSize = UBT_Size.ExtraSmall,
  textExtendedClasses = '',
  buttonOptions = {},
  iconId = '',
  hideIcon = false,
  onButtonOnClick,
}: ButtonProps) {
  return (
    <OSBlock name="CW_Common.Button" id={id}>
      <ConnectButton
        inButtonOptions={buttonOptions}
        inExtendedClass={buttonExtendedClass}
        inIsDisabled={isDisabled}
        onEventOnClick={onButtonOnClick}
      >
        <div className="osui-btn-loading__spinner-animation" data-container="" />
        <IconText
          text={buttonText}
          spacingSize={iconTextSpacingSize}
          extendedClasses={textExtendedClasses}
          isIconOnRight={isIconOnRight}
        >
          <Icon inVisible={!hideIcon} inIconId={iconId} />
        </IconText>
      </ConnectButton>
    </OSBlock>
  );
}
