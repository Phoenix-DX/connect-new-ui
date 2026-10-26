import type { Meta, StoryObj } from '@storybook/react-vite';
import { FeedCms, type FeedCmsConfig } from './FeedCms';
import { FEED_CMS_MOCK_URL } from './mocks';

/** The answer of the DataActionGetFeedConfig mock (mocks.ts): the mock CMS origin, no token (D8 b). */
const mockConfig: FeedCmsConfig = {
  BaseURL: FEED_CMS_MOCK_URL,
  Token: '',
  TokenType: '',
  B2CClientId: '',
  B2CPolicy: '',
};

const meta = {
  title: 'Shared/UBTConnect_EmbedFeed/Embedded_FeedCMS',
  component: FeedCms,
} satisfies Meta<typeof FeedCms>;
export default meta;
type Story = StoryObj<typeof meta>;

/** HomeFeed/default: the feed loaded (the container holds the SDK iframe: the mock page, D8 b). */
export const V1: Story = { args: { id: 'b10-$b1', config: mockConfig } };
/** HomeFeed/loading: the skeleton while the feed loads (GetFeedConfig has not answered yet). */
export const V2: Story = { args: { id: 'b10-$b1' } };
