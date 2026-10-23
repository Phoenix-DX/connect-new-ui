import type { Meta, StoryObj } from '@storybook/react-vite';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { PinCodeRegister } from './PinCodeRegister';

/** The PreventBackNavigation block as the caller gives it (platform/navigation): its wrapper and its nested
    BackNavigationHandler. */
const renderPreventBackNavigation = (id: string | undefined) => (
  <OSBlock name="NavigationHandler.PreventBackNavigation" id={id}>
    <OSBlock name="NavigationHandler.BackNavigationHandler" />
  </OSBlock>
);

const meta = {
  title: 'Shared/UBT_AppManager/Pincode_Register',
  component: PinCodeRegister,
  args: { renderPreventBackNavigation },
} satisfies Meta<typeof PinCodeRegister>;
export default meta;
type Story = StoryObj<typeof meta>;

/** PINRegister/default: first entry */
export const V1: Story = {
  args: { id: 'b4-$b1', inPinLength: 4, inExtendedClasses: 'connect-pin-screen ubt-pin-overlay' },
};
