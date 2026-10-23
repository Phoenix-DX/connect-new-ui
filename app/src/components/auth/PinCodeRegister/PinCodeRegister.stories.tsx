import type { Decorator, Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { setSignedInUser } from '@/platform/session/session';
import { PinCodeRegister } from './PinCodeRegister';

/** Stories only: the signed-in user who registers a PIN after the first sign-in. */
const session: Decorator = (Story) => {
  setSignedInUser(MOCK_USER_ID);
  return (
    <MemoryRouter>
      <Story />
    </MemoryRouter>
  );
};

const meta = {
  title: 'Shared/UBT_AppManager/Pincode_Register',
  component: PinCodeRegister,
  decorators: [session],
} satisfies Meta<typeof PinCodeRegister>;
export default meta;
type Story = StoryObj<typeof meta>;

/** PINRegister/default: first entry */
export const V1: Story = {
  args: { id: 'b4-$b1', inPinLength: 4, inExtendedClasses: 'connect-pin-screen ubt-pin-overlay' },
};
