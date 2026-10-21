import type { Meta, StoryObj } from '@storybook/react-vite';
import { NavigationHandler } from './NavigationHandler';

const meta = {
  title: 'Shared/NavigationHandler/NavigationHandler',
  component: NavigationHandler,
} satisfies Meta<typeof NavigationHandler>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Splash/default */
export const V1: Story = {};
