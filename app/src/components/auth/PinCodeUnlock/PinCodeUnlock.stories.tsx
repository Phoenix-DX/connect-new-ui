import type { Decorator, Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { setClientVar, setSignedInUser } from '@/platform/session/session';
import { PinCodeUnlock } from './PinCodeUnlock';

/** Stories only: the signed-in, unlocked tab the captures were taken in. */
const session: Decorator = (Story) => {
  setSignedInUser(MOCK_USER_ID);
  setClientVar('UBT_AppManager.PIN_SessionInactivity_Use', true);
  setClientVar('UBT_AppManager.PIN_IsLocked', false);
  return (
    <MemoryRouter>
      <Story />
    </MemoryRouter>
  );
};

const meta = {
  title: 'Shared/UBT_AppManager/Pincode_Unlock',
  component: PinCodeUnlock,
  decorators: [session],
} satisfies Meta<typeof PinCodeUnlock>;
export default meta;
type Story = StoryObj<typeof meta>;

/** BookmarksByGroup/default: not locked → only the InactivityTimer (lock container of every screen) */
export const V1: Story = { args: { id: 'b3-b2-b4-b1-$b1', inPinLength: 4 } };
/** PINChange/default: In_ForceVisible → the keypad */
export const V2: Story = {
  args: {
    id: 'b5-b1-$b1',
    inPinLength: 4,
    inForceVisible: true,
    inAllowBackNavigation: true,
    inExtendedClasses: 'connect-pin-screen ubt-pin-overlay',
  },
};
