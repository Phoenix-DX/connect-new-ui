import type { Meta, StoryObj } from '@storybook/react-vite';
import { UnsupportedVersionNative } from './UnsupportedVersionNative';

const meta = {
  title: 'Shared/UBTConnect/UnsupportedVersion_Native',
  component: UnsupportedVersionNative,
} satisfies Meta<typeof UnsupportedVersionNative>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Not captured (store app only). */
export const Default: Story = {};
