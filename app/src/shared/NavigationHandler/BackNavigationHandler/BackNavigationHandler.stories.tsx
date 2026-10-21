import type { Meta, StoryObj } from '@storybook/react-vite';
import { BackNavigationHandler } from './BackNavigationHandler';

const meta = {
  title: 'Shared/NavigationHandler/BackNavigationHandler',
  component: BackNavigationHandler,
} satisfies Meta<typeof BackNavigationHandler>;
export default meta;
type Story = StoryObj<typeof meta>;

/** BookmarksByGroup/default */
export const V1: Story = {};
