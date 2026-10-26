import type { Meta, StoryObj } from '@storybook/react-vite';
import { ImageLoadErrorHandler } from './ImageLoadErrorHandler';

const meta = {
  title: 'Shared/Connect2_LegacyShared/HandleImageLoadError',
  component: ImageLoadErrorHandler,
} satisfies Meta<typeof ImageLoadErrorHandler>;
export default meta;
type Story = StoryObj<typeof meta>;

/** BookmarksByGroup/default */
export const V1: Story = {};
