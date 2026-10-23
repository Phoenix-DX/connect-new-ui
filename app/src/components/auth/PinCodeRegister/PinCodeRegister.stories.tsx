import type { Decorator, Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router';
import { PinCodeRegister } from './PinCodeRegister';

/** Stories only: the router of the keypad (PreventBackNavigation). */
const router: Decorator = (Story) => (
  <MemoryRouter>
    <Story />
  </MemoryRouter>
);

const meta = {
  title: 'Shared/UBT_AppManager/Pincode_Register',
  component: PinCodeRegister,
  decorators: [router],
} satisfies Meta<typeof PinCodeRegister>;
export default meta;
type Story = StoryObj<typeof meta>;

/** PINRegister/default: first entry */
export const V1: Story = {
  args: { id: 'b4-$b1', inPinLength: 4, inExtendedClasses: 'connect-pin-screen ubt-pin-overlay' },
};
