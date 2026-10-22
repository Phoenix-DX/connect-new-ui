import type { Decorator, Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { setClientVar, setSignedInUser } from '@/platform/session/session';
import { OSLink } from '../../lib/OSLink';
import { PendingBlock } from '../../test/PendingBlock';
import { Block_PINRegister_ContentWrapper } from '../../UBTConnect/Block_PINRegister_ContentWrapper';
import { Block_PINUnlock_ContentWrapper } from '../../UBTConnect/Block_PINUnlock_ContentWrapper';
import { CommonUI_InsideLayout } from '../../UBTConnect/CommonUI_InsideLayout';
import { OfflineDataSyncEvents } from '../../UBTConnect/OfflineDataSyncEvents';
import { IconText } from '../IconText';
import { Layout_LoginFlow } from './Layout_LoginFlow';

/** Stories only: the session and screen of the capture. */
const session =
  (userId: string | null, path: string): Decorator =>
  (Story) => {
    setSignedInUser(userId);
    setClientVar('UBT_AppManager.PIN_SessionInactivity_Use', true);
    setClientVar('UBT_AppManager.PIN_IsLocked', false);
    return (
      <MemoryRouter initialEntries={[path]}>
        <Story />
      </MemoryRouter>
    );
  };

const meta = {
  title: 'Shared/UBTConnectLibrary/Layout_LoginFlow',
  component: Layout_LoginFlow,
} satisfies Meta<typeof Layout_LoginFlow>;
export default meta;
type Story = StoryObj<typeof meta>;

/** BookmarksByGroup/default: the lock container of Block_PINUnlock (common block), not locked */
export const V1: Story = {
  decorators: [session(MOCK_USER_ID, '/UBTConnect/BookmarksByGroup')],
  args: {
    id: 'b3-b2-$b1',
    inHasOverlay: true,
    inIsCommonBlock: true,
    inExtendedClass: 'ubt-lock-screen connect-legacy-compatibily-containter',
    placeholderContent: <Block_PINUnlock_ContentWrapper id="b3-b2-$b4" showForgotPIN showPolicy />,
    placeholderCommonUIInsideLayout: <div />,
  },
};

/** Login/default: sign-in tile, "Need help?" footer and the CommonUI blocks */
export const V2: Story = {
  decorators: [session(null, '/UBTConnect/Login')],
  args: {
    id: '$b1',
    inHasOverlay: true,
    placeholderContent: (
      <>
        <div className="connect-login-screen" data-container="">
          <div className="connect-login-screen__content" data-container="">
            <PendingBlock name="ConnectPatterns.Tile" />
            <div className="text-align-center" data-container="">
              <div className="need-help-footer" data-container="">
                Need help?{' '}
                <OSLink
                  className="font-regular text-underline"
                  style={{ marginLeft: '0px' }}
                  url="/UBTConnect/ContactUsMenu"
                >
                  Contact Us
                </OSLink>
              </div>
              <PendingBlock name="App_Common.Version_LoginWrapper" />
            </div>
          </div>
        </div>
        <PendingBlock name="App_Common_Blocks_PopupDialogs.Dialog_ExitConfirmation" />
      </>
    ),
    placeholderCommonUIInsideLayout: (
      <>
        <OfflineDataSyncEvents id="$b11" />
        <PendingBlock name="Layouts.AppManager_Events" />
        <PendingBlock name="ConfirmationDialogs.ActionConfirmationDialog" />
        <CommonUI_InsideLayout id="$b14" inIgnoreLockScreen />
      </>
    ),
  },
};

/** PINChange/default: back header, current PIN keypad, no CommonUI */
export const V3: Story = {
  decorators: [session(MOCK_USER_ID, '/UBTConnect/PINChange')],
  args: {
    id: '$b1',
    inHasOverlay: true,
    inExtendedClass: 'ubt-lock-screen',
    placeholderHeader: (
      <OSLink>
        <IconText id="$b2" text="Change PIN" />
      </OSLink>
    ),
    placeholderContent: (
      <Block_PINUnlock_ContentWrapper id="$b5" inForceVisible isFromMenu unlockText="Enter your current PIN" />
    ),
  },
};

/** PINRegister/default: back header, registration keypad, CommonUI */
export const V4: Story = {
  decorators: [session(MOCK_USER_ID, '/UBTConnect/PINRegister')],
  args: {
    id: '$b1',
    inHasOverlay: true,
    placeholderHeader: (
      <OSLink>
        <IconText id="$b2" text="Back" />
      </OSLink>
    ),
    placeholderContent: <Block_PINRegister_ContentWrapper id="$b4" enableName />,
    placeholderCommonUIInsideLayout: <CommonUI_InsideLayout id="$b5" inIgnoreLockScreen />,
  },
};
