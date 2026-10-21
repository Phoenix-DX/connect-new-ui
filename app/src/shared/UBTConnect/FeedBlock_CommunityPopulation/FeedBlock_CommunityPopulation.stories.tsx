import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router';
import { FeedBlock_CommunityPopulation } from './FeedBlock_CommunityPopulation';

const meta = {
  title: 'Shared/UBTConnect/FeedBlock_CommunityPopulation',
  component: FeedBlock_CommunityPopulation,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof FeedBlock_CommunityPopulation>;
export default meta;
type Story = StoryObj<typeof meta>;

/** CountryList/default (pack: wrapper only). */
export const V1: Story = { args: { id: '$b18' } };
/** HomeFeed/default: the recorded member count, loaded. */
export const V2: Story = { args: { id: '$b7' } };
