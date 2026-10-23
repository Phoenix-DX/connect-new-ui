import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { PinCodeUnlock } from './PinCodeUnlock';

/** The InactivityTimer block as the caller gives it: the block renders an empty wrapper (platform/session). */
const renderInactivityTimer = (id: string | undefined) => <OSBlock name="PIN.InactivityTimer" id={id} />;

const meta = {
  title: 'Shared/UBT_AppManager/Pincode_Unlock',
  component: PinCodeUnlock,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  args: { renderInactivityTimer },
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
    isKeypadVisible: true,
    inAllowBackNavigation: true,
    inExtendedClasses: 'connect-pin-screen ubt-pin-overlay',
  },
};
