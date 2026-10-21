import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextEllipsis } from './TextEllipsis';

const meta = { title: 'Shared/UBTConnectLibrary/TextEllipsis', component: TextEllipsis } satisfies Meta<
  typeof TextEllipsis
>;
export default meta;
type Story = StoryObj<typeof meta>;

/** CommunityBusinessDetails_CoomingSoon/default: search prompt of StaticInput */
export const V1: Story = { args: { text: 'Search for households. entities, news' } };
/** CountryList/default: search prompt of StaticInput */
export const V2: Story = { args: { text: 'Search any member or location' } };
