import type { Meta, StoryObj } from '@storybook/react-vite';
import { PullToRefresh } from './PullToRefresh';

const meta = { title: 'Shared/osui/PullToRefresh', component: PullToRefresh } satisfies Meta<typeof PullToRefresh>;
export default meta;
type Story = StoryObj<typeof meta>;

/** MessageList/default */
export const V1: Story = {};
