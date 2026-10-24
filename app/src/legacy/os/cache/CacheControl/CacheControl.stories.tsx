import type { Meta, StoryObj } from '@storybook/react-vite';
import { CacheControl } from './CacheControl';

const meta = {
  title: 'Shared/UBTConnect_Utils/CacheControl',
  component: CacheControl,
} satisfies Meta<typeof CacheControl>;
export default meta;
type Story = StoryObj<typeof meta>;

/** ContactUsDetails/default */
export const V1: Story = {};
