/** @origin UBTConnect.App_Common.WelcomeToConnect */
// @os-block UBTConnect.App_Common.WelcomeToConnect
import { OSBlock } from '@/components/ui/os/OSBlock';
import { osImage } from '@/lib/os-assets';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { UBT_Color, UBT_FontSize, UBT_FontWeight, UBT_Size } from '@/lib/ubtConnect/staticEntities';

export interface WelcomeToConnectProps {
  /** OutSystems instance id of the block. */
  id?: string;
}

/** "Welcome to" and the Connect logo (p:UBTConnect.App_Common.WelcomeToConnect.mvc.js view). */
export function WelcomeToConnect({ id }: WelcomeToConnectProps) {
  return (
    <OSBlock name="App_Common.WelcomeToConnect" id={id}>
      <div className="OSInline" data-container="" style={{ textAlign: 'left', width: 'auto' }}>
        <CustomContainer
          options={{
            MarginSize: { BottomSizeId: UBT_Size.Base },
            TextOptions: { Color: UBT_Color.Primary, FontSize: UBT_FontSize.Base, FontWeight: UBT_FontWeight.SemiBold },
          }}
        >
          <span data-expression="">Welcome to</span>
        </CustomContainer>
        <div data-container="">
          <img className="login-screen__connect-logo" data-image="" src={osImage('img/UBTConnect.ConnectLogo.svg')} />
        </div>
      </div>
    </OSBlock>
  );
}
