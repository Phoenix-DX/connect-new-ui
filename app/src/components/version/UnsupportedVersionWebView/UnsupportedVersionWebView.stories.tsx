import type { Meta, StoryObj } from '@storybook/react-vite';
import { UnsupportedVersionWebView } from './UnsupportedVersionWebView';

const meta = {
  title: 'Shared/UBTConnect/UnsupportedVersion_WebView',
  component: UnsupportedVersionWebView,
} satisfies Meta<typeof UnsupportedVersionWebView>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Not captured (store app only). */
export const Default: Story = {};
