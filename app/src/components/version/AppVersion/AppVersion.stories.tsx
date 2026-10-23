import type { Meta, StoryObj } from '@storybook/react-vite';
import { AppVersion } from './AppVersion';

const meta = { title: 'Shared/UBTConnect/Version', component: AppVersion } satisfies Meta<typeof AppVersion>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Login/default (pack variant) */
export const V1: Story = {};
/** Login/default: the text (masked in the capture; runtime version from the recorded ActionGet_RuntimeVersion) */
export const V2: Story = {};
