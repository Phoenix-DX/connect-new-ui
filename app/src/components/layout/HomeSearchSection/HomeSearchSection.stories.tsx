import type { Meta, StoryObj } from '@storybook/react-vite';
import { HomeSearchSection } from './HomeSearchSection';

const meta = {
  title: 'Shared/UBTConnectLibrary/SubLayout_HomePageSearch',
  component: HomeSearchSection,
} satisfies Meta<typeof HomeSearchSection>;
export default meta;
type Story = StoryObj<typeof meta>;

/** HomeFeed/default (pack: wrapper only). */
export const V1: Story = { args: { id: 'b1-SearchInput' } };
/** HomeFeed/default: full markup (search prompt). */
export const V2: Story = { args: { id: 'b1-SearchInput' } };
