import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router';
import { Feed_Embeded } from './Feed_Embeded';

const meta = {
  title: 'Shared/UBTConnect/Feed_Embeded',
  component: Feed_Embeded,
  decorators: [
    /* Share to Connect navigates (LegacyShareObject). */
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof Feed_Embeded>;
export default meta;
type Story = StoryObj<typeof meta>;

/** HomeFeed/default: the feed list (no FeedItemId), the share popup closed, the download handler. */
export const V1: Story = { args: { id: '$b10' } };
