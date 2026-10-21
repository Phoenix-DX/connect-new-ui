import type { Meta, StoryObj } from '@storybook/react-vite';
import { HandleImageLoadError } from './HandleImageLoadError';

const meta = {
  title: 'Shared/Connect2_LegacyShared/HandleImageLoadError',
  component: HandleImageLoadError,
} satisfies Meta<typeof HandleImageLoadError>;
export default meta;
type Story = StoryObj<typeof meta>;

/** BookmarksByGroup/default */
export const V1: Story = {};
