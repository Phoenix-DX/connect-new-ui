import type { Meta, StoryObj } from '@storybook/react-vite';
import { OpenLinkOnResume } from './OpenLinkOnResume';

const meta = {
  title: 'Shared/UBTConnect/HandleOnResumeOpenLink',
  component: OpenLinkOnResume,
} satisfies Meta<typeof OpenLinkOnResume>;
export default meta;
type Story = StoryObj<typeof meta>;

/** BookmarksByGroup/default */
export const V1: Story = {};
