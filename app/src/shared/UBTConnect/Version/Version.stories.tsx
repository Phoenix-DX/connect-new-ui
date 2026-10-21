import type { Meta, StoryObj } from '@storybook/react-vite';
import { Version } from './Version';

const meta = { title: 'Shared/UBTConnect/Version', component: Version } satisfies Meta<typeof Version>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Login/default (pack variant) */
export const V1: Story = {};
/** Login/default: the text (masked in the capture; runtime version from the recorded ActionGet_RuntimeVersion) */
export const V2: Story = {};
