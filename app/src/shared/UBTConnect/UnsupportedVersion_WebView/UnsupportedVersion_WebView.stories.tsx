import type { Meta, StoryObj } from '@storybook/react-vite';
import { UnsupportedVersion_WebView } from './UnsupportedVersion_WebView';

const meta = {
  title: 'Shared/UBTConnect/UnsupportedVersion_WebView',
  component: UnsupportedVersion_WebView,
} satisfies Meta<typeof UnsupportedVersion_WebView>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Not captured (store app only). */
export const Default: Story = {};
