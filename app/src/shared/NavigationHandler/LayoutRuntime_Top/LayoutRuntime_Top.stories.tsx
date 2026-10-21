import type { Meta, StoryObj } from '@storybook/react-vite';
import { LayoutRuntime_Top } from './LayoutRuntime_Top';

const meta = {
  title: 'Shared/NavigationHandler/LayoutRuntime_Top',
  component: LayoutRuntime_Top,
} satisfies Meta<typeof LayoutRuntime_Top>;
export default meta;
type Story = StoryObj<typeof meta>;

/** BookmarksByGroup/default */
export const V1: Story = {};
