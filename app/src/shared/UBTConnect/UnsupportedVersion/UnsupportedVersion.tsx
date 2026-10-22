// @os-block UBTConnect.App_Common.UnsupportedVersion
import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { Button } from '../../UBTConnect_Utils/Button';
import { CustomContainer } from '../../UBTConnectLibrary/CustomContainer';
import { UBT_Display, UBT_Size } from '../../UBTConnectLibrary/lib/staticEntities';
import { UBT_Color, UBT_FontSize, UBT_Icons2, UBT_JustifyContent } from '../lib/staticEntities';
import { WelcomeToConnect } from '../WelcomeToConnect';

export interface UnsupportedVersionProps {
  /** OutSystems instance id of the block. */
  id?: string;
  inExtendedClass?: string;
  /** Hides the "Upgrade From Google Play" button. */
  inHideButton?: boolean;
  /** Event Event_NavigateToPlaystore (the button's click). */
  onEventNavigateToPlaystore?: () => void;
  /** Placeholder Placeholder_Content: the message. */
  children?: ReactNode;
}

/** The unsupported-version card. Not captured (TST has no minimum versions): markup from the compiled view
    (survey:UBTConnect.App_Common.UnsupportedVersion.mvc.js:141-338). */
export function UnsupportedVersion({
  id,
  inExtendedClass = '',
  inHideButton = false,
  onEventNavigateToPlaystore,
  children,
}: UnsupportedVersionProps) {
  return (
    <OSBlock name="App_Common.UnsupportedVersion" id={id}>
      <CustomContainer extendedClasses={`unsupported-card ${inExtendedClass}`} options={{ PaddingSize: {} }}>
        <WelcomeToConnect />
        <CustomContainer
          options={{
            MarginSize: { VerticalSizeId: UBT_Size.Medium },
            TextOptions: { Color: UBT_Color.Neutral10, FontSize: UBT_FontSize.Small },
          }}
        >
          <div>{children}</div>
        </CustomContainer>
        {!inHideButton && (
          <CustomContainer
            options={{ DisplayOptions: { Display: UBT_Display.Flex, JustifyContent: UBT_JustifyContent.Center } }}
          >
            <div data-container="">
              <Button
                isIconOnRight
                buttonText="Upgrade From Google Play"
                iconId={UBT_Icons2.OpenNew}
                onButtonOnClick={onEventNavigateToPlaystore}
              />
            </div>
          </CustomContainer>
        )}
      </CustomContainer>
    </OSBlock>
  );
}
