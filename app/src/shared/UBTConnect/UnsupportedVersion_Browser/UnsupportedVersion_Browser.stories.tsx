import type { Meta, StoryObj } from '@storybook/react-vite';
import { UnsupportedVersion_Browser } from './UnsupportedVersion_Browser';

const meta = {
  title: 'Shared/UBTConnect/UnsupportedVersion_Browser',
  component: UnsupportedVersion_Browser,
} satisfies Meta<typeof UnsupportedVersion_Browser>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Not captured: compiled view (mock scenario `?mock=unsupported-browser`, decision U16). */
export const Default: Story = {};
