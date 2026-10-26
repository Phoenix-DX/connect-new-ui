import type { Meta, StoryObj } from '@storybook/react-vite';
import { UnsupportedVersion } from './UnsupportedVersion';

const meta = {
  title: 'Shared/UBTConnect/UnsupportedVersion',
  component: UnsupportedVersion,
} satisfies Meta<typeof UnsupportedVersion>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Not captured: compiled view with the button (as UnsupportedVersion_Native would render it). */
export const WithButton: Story = { args: { children: 'Message' } };
/** Not captured: compiled view without the button (as UnsupportedVersion_Browser renders it). */
export const HideButton: Story = {
  args: { inExtendedClass: 'unsupported-card--webview', inHideButton: true, children: 'Message' },
};
