import type { Meta, StoryObj } from '@storybook/react-vite';
import { UnsupportedVersionBrowser } from './UnsupportedVersionBrowser';

const meta = {
  title: 'Shared/UBTConnect/UnsupportedVersion_Browser',
  component: UnsupportedVersionBrowser,
} satisfies Meta<typeof UnsupportedVersionBrowser>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Not captured: compiled view (mock scenario `?mock=unsupported-browser`, decision U16). */
export const Default: Story = {};
