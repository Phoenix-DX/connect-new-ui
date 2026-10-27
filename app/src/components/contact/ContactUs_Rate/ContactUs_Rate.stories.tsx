import type { Meta, StoryObj } from '@storybook/react-vite';
import { ContactUs_Rate } from './ContactUs_Rate';

const meta = {
  title: 'Shared/UBTConnect/ContactUs_Rate',
  component: ContactUs_Rate,
} satisfies Meta<typeof ContactUs_Rate>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Not captured: the rating block before a rate (the handle hidden), from the compiled view. */
export const NoRate: Story = { args: { id: '$b8', selectedRate: 0, isEnabled: true } };
