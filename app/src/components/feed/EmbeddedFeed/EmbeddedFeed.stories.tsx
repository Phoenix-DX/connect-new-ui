import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router';
import { EmbeddedFeed } from './EmbeddedFeed';

const meta = {
  title: 'Shared/UBTConnect/Feed_Embeded',
  component: EmbeddedFeed,
  decorators: [
    /* The share popup's contact popup keeps the back navigation of the screen. */
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  /* The TST values: the feed and the extended share are on; the B2C tenant is empty in the mock app; the feed
     configuration has not answered yet. */
  args: {
    isFeedEnabled: true,
    hasExtendedShare: true,
    b2CTenant: '',
    onDownloaded: () => undefined,
    onShareToConnect: () => undefined,
  },
} satisfies Meta<typeof EmbeddedFeed>;
export default meta;
type Story = StoryObj<typeof meta>;

/** HomeFeed/default: the feed list (no FeedItemId), the share popup closed, the download handler. */
export const V1: Story = { args: { id: '$b10' } };
