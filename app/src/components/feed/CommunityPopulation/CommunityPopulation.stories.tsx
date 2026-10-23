import type { Meta, StoryObj } from '@storybook/react-vite';
import { CommunityPopulation } from './CommunityPopulation';

const meta = {
  title: 'Shared/UBTConnect/FeedBlock_CommunityPopulation',
  component: CommunityPopulation,
  args: { isLoading: false, total: '54461', onClick: () => undefined },
} satisfies Meta<typeof CommunityPopulation>;
export default meta;
type Story = StoryObj<typeof meta>;

/** CountryList/default (pack: wrapper only). */
export const V1: Story = { args: { id: '$b18' } };
/** HomeFeed/default: the recorded member count (an aggregate, no person data), loaded. */
export const V2: Story = { args: { id: '$b7' } };
/** While DataActionFetchCount runs: "00000" in a loading skeleton (compiled code only, no capture). */
export const Loading: Story = { args: { id: '$b7', isLoading: true, total: '0' } };
