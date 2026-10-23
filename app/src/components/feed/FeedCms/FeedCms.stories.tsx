import type { Meta, StoryObj } from '@storybook/react-vite';
import { FeedCms } from './FeedCms';

const meta = {
  title: 'Shared/UBTConnect_EmbedFeed/Embedded_FeedCMS',
  component: FeedCms,
} satisfies Meta<typeof FeedCms>;
export default meta;
type Story = StoryObj<typeof meta>;

/** HomeFeed/default: the feed loaded (the container holds the SDK iframe: the mock page, D8 b). */
export const V1: Story = { args: { id: 'b10-$b1' } };
/** HomeFeed/loading: the skeleton while the feed loads (right after OnReady). */
export const V2: Story = { args: { id: 'b10-$b1' } };
