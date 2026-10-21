import type { Meta, StoryObj } from '@storybook/react-vite';
import { AddressPopup } from './AddressPopup';

const meta = {
  title: 'Shared/UBTConnect_Utils/AddressPopup',
  component: AddressPopup,
} satisfies Meta<typeof AddressPopup>;
export default meta;
type Story = StoryObj<typeof meta>;

/** HouseholdCarousel/default: closed (inside AddressPopup_Wrapper). */
export const V1: Story = {
  args: { id: 'b13-$b2', inContactPopupData: { ActionName: 'Open Location', ShowPopup: false } },
};
