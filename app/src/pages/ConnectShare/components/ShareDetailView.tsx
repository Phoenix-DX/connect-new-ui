import type { ReactNode } from 'react';
import { LegacyLayout } from '@/components/layout/LegacyLayout';
import { MenuIconBack } from '@/components/layout/MenuIconBack';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { osImage } from '@/legacy/os/os-assets';
import { ConnectBlankSlate } from '@/components/ui/ConnectBlankSlate';
import { NavigationLanding } from './NavigationLanding';

export interface ShareDetailViewProps {
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

/** Share_UI.ScreenBlock_ShareDetail, props only: the layout with the Menu placeholder, MenuIcon_Back, the title
    "Connect Share", NavigationLanding on the right, and a ConnectBlankSlate with the share_unavailable_icon image and
    the StatusMessage expression as title (empty subtitle); the BottomBar and CommonUI_Elements placeholders. The block
    has no action and no lifecycle of its own.
    @origin Connect2_LegacyShared.Share_UI.ScreenBlock_ShareDetail */
export function ShareDetailView({ id, statusMessage, menu, bottomBar, commonUIElements }: ShareDetailViewProps) {
  const scope = id.replace('$', '');
  return (
    <OSBlock name="Share_UI.ScreenBlock_ShareDetail" id={id}>
      <LegacyLayout
        id={`${scope}-$b1`}
        menu={<div id={`${scope}-Menu`}>{menu}</div>}
        headerLeft={<MenuIconBack id={`${scope}-$b2`} />}
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
