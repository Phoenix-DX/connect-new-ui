// @os-block Connect2_LegacyShared.Share_UI.ScreenBlock_ShareDetail
import type { ReactNode } from 'react';
import { OSBlock } from '../../../components/OSBlock';
import { osImage } from '../../../lib/os-assets';
import { ConnectBlankSlate } from '../../../shared/Connect2_LegacyShared/ConnectBlankSlate';
import { Layout } from '../../../shared/Connect2_LegacyShared/Layout';
import { MenuIcon_Back } from '../../../shared/Connect2_LegacyShared/MenuIcon_Back';
import { NavigationLanding } from './NavigationLanding';

export interface ScreenBlock_ShareDetailProps {
  /** OutSystems instance id of the block (`$b1`). */
  id: string;
  /** Input StatusMessage (Text). */
  statusMessage: string;
  /** Placeholder Menu. */
  menu?: ReactNode;
  /** Placeholder BottomBar. */
  bottomBar?: ReactNode;
  /** Placeholder CommonUI_Elements. */
  commonUIElements?: ReactNode;
}

/** Share_UI.ScreenBlock_ShareDetail (p:Connect2_LegacyShared.Share_UI.ScreenBlock_ShareDetail.mvc.js, view :131-260):
    Layout with the Menu placeholder, MenuIcon_Back, the title "Connect Share", NavigationLanding on the right, and a
    ConnectBlankSlate with the share_unavailable_icon image and the StatusMessage expression as title (empty subtitle);
    the BottomBar and CommonUI_Elements placeholders. No action or lifecycle of its own. */
export function ScreenBlock_ShareDetail({
  id,
  statusMessage,
  menu,
  bottomBar,
  commonUIElements,
}: ScreenBlock_ShareDetailProps) {
  const scope = id.replace('$', '');
  return (
    <OSBlock name="Share_UI.ScreenBlock_ShareDetail" id={id}>
      <Layout
        id={`${scope}-$b1`}
        menu={<div id={`${scope}-Menu`}>{menu}</div>}
        headerLeft={<MenuIcon_Back id={`${scope}-$b2`} />}
        title={
          <div className="text-align-center" data-container="">
            Connect Share
          </div>
        }
        headerRight={<NavigationLanding id={`${scope}-$b3`} />}
        content={
          <ConnectBlankSlate
            id={`${scope}-$b4`}
            image={<img data-image="" src={osImage('img/Connect2_LegacyShared.share_unavailable_icon.png')} />}
            title={<span data-expression="">{statusMessage}</span>}
          />
        }
        bottomBar={<div id={`${scope}-BottomBar`}>{bottomBar}</div>}
        commonUIElements={<div id={`${scope}-CommonUI_Elements`}>{commonUIElements}</div>}
      />
    </OSBlock>
  );
}
