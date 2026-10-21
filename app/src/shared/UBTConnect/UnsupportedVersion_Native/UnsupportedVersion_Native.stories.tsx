import type { Meta, StoryObj } from '@storybook/react-vite';
import { UnsupportedVersion_Native } from './UnsupportedVersion_Native';

const meta = {
  title: 'Shared/UBTConnect/UnsupportedVersion_Native',
  component: UnsupportedVersion_Native,
} satisfies Meta<typeof UnsupportedVersion_Native>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Not captured (store app only). */
export const Default: Story = {};
