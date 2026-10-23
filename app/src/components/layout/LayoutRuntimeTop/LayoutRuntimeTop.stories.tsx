import type { Meta, StoryObj } from '@storybook/react-vite';
import { LayoutRuntimeTop } from './LayoutRuntimeTop';

const meta = {
  title: 'Shared/NavigationHandler/LayoutRuntime_Top',
  component: LayoutRuntimeTop,
} satisfies Meta<typeof LayoutRuntimeTop>;
export default meta;
type Story = StoryObj<typeof meta>;

/** BookmarksByGroup/default */
export const V1: Story = {};
