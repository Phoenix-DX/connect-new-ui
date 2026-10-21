import type { Meta, StoryObj } from '@storybook/react-vite';
import { FingerprintScanner } from './FingerprintScanner';

const meta = {
  title: 'Shared/UBT_AppManager_Mobile/FingerprintScanner',
  component: FingerprintScanner,
} satisfies Meta<typeof FingerprintScanner>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Not captured: the marker the block renders (never shown on the web, U13). */
export const NotCapturedState: Story = { args: { inIsScanOnReady: true } };
