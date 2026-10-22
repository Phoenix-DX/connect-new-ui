import type { Decorator, Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { setSignedInUser } from '@/platform/session/session';
import { Pincode_Register } from './Pincode_Register';

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
  component: Pincode_Register,
  decorators: [session],
} satisfies Meta<typeof Pincode_Register>;
export default meta;
type Story = StoryObj<typeof meta>;

/** PINRegister/default: first entry */
export const V1: Story = {
  args: { id: 'b4-$b1', inPinLength: 4, inExtendedClasses: 'connect-pin-screen ubt-pin-overlay' },
};
