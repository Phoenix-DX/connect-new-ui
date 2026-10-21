import type { Meta, StoryObj } from '@storybook/react-vite';
import { PreventBackNavigation } from './PreventBackNavigation';

const meta = {
  title: 'Shared/NavigationHandler/PreventBackNavigation',
  component: PreventBackNavigation,
} satisfies Meta<typeof PreventBackNavigation>;
export default meta;
type Story = StoryObj<typeof meta>;

/** PINRegister/default */
export const V1: Story = {};
