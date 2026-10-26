import type { Meta, StoryObj } from '@storybook/react-vite';
import { AddressPopupWrapper } from './AddressPopupWrapper';

const meta = {
  title: 'Shared/UBTConnect_Utils/AddressPopup_Wrapper',
  component: AddressPopupWrapper,
} satisfies Meta<typeof AddressPopupWrapper>;
export default meta;
type Story = StoryObj<typeof meta>;

/** HouseholdCarousel/default: the household address, popup closed. */
export const V1: Story = {
  args: { id: 'b1-$b13', inAddress: '1 Harbour Street, Geelong' },
};
