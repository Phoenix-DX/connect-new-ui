import type { Decorator, Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { setClientVar, setSignedInUser } from '@/platform/session/session';
import { BackNavigationHandler } from '@/shared/NavigationHandler/BackNavigationHandler';
import { PendingBlock } from '@/shared/test/PendingBlock';
import { BottomBarMenu } from '@/shared/UBTConnect/BottomBarMenu';
import { CommonUI_InsideLayout } from '@/shared/UBTConnect/CommonUI_InsideLayout';
import { MenuAction } from '@/shared/Connect2_LegacyShared/lib/staticEntities';
import { MenuIcon_Back } from '@/shared/Connect2_LegacyShared/MenuIcon_Back';
import { MenuIcon__UpdatedOSUI } from '@/shared/Connect2_LegacyShared/MenuIcon__UpdatedOSUI';
import { Spinner } from '@/shared/Connect2_LegacyShared/Spinner';
import { BaseLayout_UpdatedOSUI } from './BaseLayout_UpdatedOSUI';

/** Stories only: the signed-in session of the captures (BottomBarMenu, CommonUI_InsideLayout), checked just now. */
const session =
  (path: string): Decorator =>
  (Story) => {
    setSignedInUser(MOCK_USER_ID);
    setClientVar('UBTConnect.Directory_Updates_UnreadCount', 3);
    setClientVar('UBTConnect.Directory_Updates_UnreadCount_LastCheck', new Date().toISOString().slice(0, 19));
    return (
      <MemoryRouter initialEntries={[path]}>
        <Story />
      </MemoryRouter>
    );
  };

const meta = {
  title: 'Shared/Connect2_LegacyShared/BaseLayout_UpdatedOSUI',
  component: BaseLayout_UpdatedOSUI,
} satisfies Meta<typeof BaseLayout_UpdatedOSUI>;
export default meta;
type Story = StoryObj<typeof meta>;

/* The placeholders hold Layout.Layout's placeholder containers (and the screen block's), as captured. */

/** ConnectShare/default (via Layout.Layout): back arrow, title, NavigationLanding, blank slate, CommonUI. */
export const V1: Story = {
  decorators: [session('/UBTConnect/ConnectShare')],
  args: {
    id: 'b1-b1-$b2',
    extendedClass: 'connect-theme ',
    navigation: (
      <div>
        <div />
      </div>
    ),
    headerLeft: (
      <div>
        <MenuIcon_Back id="b1-$b2" />
      </div>
    ),
    title: (
      <div>
        <div className="text-align-center" data-container="">
          Connect Share
        </div>
      </div>
    ),
    headerRight: (
      <div className="display-flex align-items-center">
        <PendingBlock name="Reusable.NavigationLanding" />
      </div>
    ),
    headerContent: <div />,
    content: (
      <div>
        <PendingBlock name="Reusable.ConnectBlankSlate" />
      </div>
    ),
    bottom: (
      <div>
        <div />
      </div>
    ),
    commonUI: (
      <div>
        <div>
          <CommonUI_InsideLayout id="$b2" />
        </div>
      </div>
    ),
  },
};

/** MessageList/loading (via Layout.Layout): PullToRefresh, menu icon, search and filter icons, spinners, bottom bar. */
export const V2: Story = {
  decorators: [session('/UBTConnect/MessageList')],
  args: {
    id: 'b1-b1-$b2',
    usePullToRefresh: true,
    extendedClass: 'connect-theme ',
    navigation: (
      <div>
        <div />
      </div>
    ),
    headerLeft: (
      <div>
        <MenuIcon__UpdatedOSUI id="b1-$b2" menuAction={MenuAction.Menu} />
      </div>
    ),
    title: (
      <div>
        <div className="text-align-center" data-container="">
          <span data-expression="">My Notifications</span>
        </div>
      </div>
    ),
    headerRight: (
      <div className="display-flex align-items-center">
        <div data-container="">
          <i
            className="icon padding-y-s padding-x-s fa fa-search fa-1x"
            data-icon=""
            style={{ marginRight: 0, padding: '5px' }}
          />
          <i
            className="icon padding-y-s padding-x-s margin-left-base fa fa-filter fa-1x"
            data-icon=""
            style={{ marginLeft: 0, marginRight: 0, padding: '5px' }}
          />
          <div className="ThemeGrid_Width1" data-container="" />
        </div>
      </div>
    ),
    headerContent: <div />,
    content: (
      <div>
        <div className="message-list" data-container="">
          <div data-container="">
            <Spinner id="b1-$b11" />
          </div>
          <Spinner id="b1-LoadingMarkAllRead" />
        </div>
        <BackNavigationHandler id="b1-$b15" />
      </div>
    ),
    bottom: (
      <div>
        <div>
          <div data-container="">
            <BottomBarMenu id="$b2" />
          </div>
        </div>
      </div>
    ),
    commonUI: (
      <div>
        <div>
          <CommonUI_InsideLayout id="$b3" />
        </div>
      </div>
    ),
  },
};

/** MessageDetail/loading (via Layout.Layout): back arrow, empty title, spinner, bottom bar, CommonUI and the
    screen's BackNavigationHandler in the CommonUI placeholder. */
export const V3: Story = {
  decorators: [session('/UBTConnect/MessageDetail')],
  args: {
    id: 'b1-b1-$b2',
    extendedClass: 'connect-theme ',
    navigation: <div />,
    headerLeft: (
      <div>
        <MenuIcon_Back id="b1-$b2" />
      </div>
    ),
    title: (
      <div>
        <div className="notification-detail-title-overflow" data-container="" style={{ textAlign: 'center' }}>
          <span data-expression="" />
        </div>
      </div>
    ),
    headerRight: <div className="display-flex align-items-center" />,
    headerContent: <div />,
    content: (
      <div>
        <Spinner id="b1-$b3" showLoader />
      </div>
    ),
    bottom: (
      <div>
        <div>
          <BottomBarMenu id="$b3" />
        </div>
      </div>
    ),
    commonUI: (
      <div>
        <div>
          <CommonUI_InsideLayout id="$b4" />
          <BackNavigationHandler id="$b5" />
        </div>
      </div>
    ),
  },
};
