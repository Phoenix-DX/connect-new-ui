import type { Meta, StoryObj } from '@storybook/react-vite';
import { WelcomeToConnect } from './WelcomeToConnect';

const meta = {
  title: 'Shared/UBTConnect/WelcomeToConnect',
  component: WelcomeToConnect,
} satisfies Meta<typeof WelcomeToConnect>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Login/default (pack variant) */
export const V1: Story = {};
/** Login/default: the whole block */
export const V2: Story = {};
