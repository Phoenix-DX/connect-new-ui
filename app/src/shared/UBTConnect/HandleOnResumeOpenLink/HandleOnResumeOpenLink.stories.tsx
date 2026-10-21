import type { Meta, StoryObj } from '@storybook/react-vite';
import { HandleOnResumeOpenLink } from './HandleOnResumeOpenLink';

const meta = {
  title: 'Shared/UBTConnect/HandleOnResumeOpenLink',
  component: HandleOnResumeOpenLink,
} satisfies Meta<typeof HandleOnResumeOpenLink>;
export default meta;
type Story = StoryObj<typeof meta>;

/** BookmarksByGroup/default */
export const V1: Story = {};
